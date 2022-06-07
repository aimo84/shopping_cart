<?php
namespace App\Services;

use App\Repositories\PaymentMethodRepository;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Facades\Validator;
use App\Models\TruemovehTogglePaymentModel;
use App\Models\TruemovehWeomniInstallmentsModel;
use App\Models\TruemovehSettingsModel;
use App\Facades\Client;
use Illuminate\Support\Arr;
use Exception;

class PaymentMethodService
{
    /**
     * @var PaymentMethodRepository
     */
    private $paymentMethodRepository;

    public function __construct(PaymentMethodRepository $paymentMethodRepository)
    {
        $this->paymentMethodRepository = $paymentMethodRepository;
    }
    /**
     * switch payment method by index value from toggle if not found then return self.
     * @param string $channel
     * @param array $store_id
     * @return string
     */
    public function switchPaymentMethod($channel, $store_id): string
    {
        $toggle_payment = [];

        if (!empty($store_id)) {
            $toggle_payment = $this->getTogglePaymentByStoreId($store_id);
        }

        if (!empty($toggle_payment) && Arr::get($toggle_payment, 'status', false)) {
            $toggle_payment = Arr::get($toggle_payment, 'data');
            $config_channel = json_decode($toggle_payment, true);
            $payment_channel = Arr::get($config_channel, strtolower($channel), $channel);
        } else {
            /*
            * In case 2c2p disabled check for OMISE, if it is also disabled then go for other (TOS)
            */
            $payment_channel = $this->getActivePaymentChannel($channel);
        }
        return $payment_channel;
    }

    /**
     * @param $channel
     * @return string
     */
    private function getActivePaymentChannel($channel): string
    {
        $payment_channel = $channel;

        if ($this->isPaymentChannelEnabled('P2C2P'.$channel)) {
            $payment_channel = 'P2C2P'.$channel;
        } elseif ($this->isPaymentChannelEnabled('OMISE'.$channel)) {
            $payment_channel = 'OMISE'.$channel;
        } elseif ($this->isPaymentChannelEnabled($channel)) {
            $payment_channel = $channel;
        }

        return $payment_channel;
    }

    /**
     * @param $channel
     * @return bool
     */
    private function isPaymentChannelEnabled($channel): bool
    {
        $config = $this->paymentMethodRepository->getPaymentChannelByName($channel);
        return $config ? Arr::get($config, 'config') : false;
    }

    /**
     * @param $channel
     * @param $total_price
     * @return array
     */
    public function getChannelConfigByName($channel, $total_price): array
    {
        $channelData = $this->paymentMethodRepository->getPaymentChannelByName($channel);
        $response = [
            'toggle' => Arr::get($channelData,'config'),
            'disable' => $total_price > Arr::get($channelData,'limit')
        ];

        return $response;
    }

    /**
     * get all toggle omise at redis and env.
     * @return array
     */
    public function getToggleOmise($store_id = '')
    {
        $respone        = [];
        $toggle_payment = [];

        if ($store_id) {
            $toggle_payment = $this->getTogglePaymentByStoreId($store_id);
        }

        if (!empty($toggle_payment)) {
            if (array_get($toggle_payment, 'status', false) === false) {
                return '';
            }

            $respone                  = json_decode(array_get($toggle_payment, 'data'), true);
            $respone['token_auth']    = env(array_get($toggle_payment, 'key_auth', 'WEOMNI_TOKEN_AUTHORIZATION'));
            $respone['store_id']      = array_get($toggle_payment, 'store_id');
            $respone['store_type']    = array_get($toggle_payment, 'store_type');
            $respone['omise_toggle']  = false;
            $respone['weomni_toggle'] = true;
        } else {
            $toggle = Redis::get("toggle-config:json:paymentmethod");
            if (empty($toggle)) {
                return '';
            }

            $respone                  = json_decode($toggle, true);
            $respone['token_auth']    = env('OMISE_TOKEN_AUTHORIZATION');
            $respone['omise_toggle']  = filter_var(array_get($respone, 'omise_toggle', false), FILTER_VALIDATE_BOOLEAN);
            $respone['weomni_toggle'] = false;
        }

        return $respone;
    }

    /**
     * Prepare parameters for getting available payment methods from OMISE
     *
     * @param array $data
     * @return object $response
     */
    public function getPaymentMethods($data)
    {
        $response       = [];
        try {
            $validator = Validator::make($data, [
                'amount'      => 'required|regex:/^\d+(\.\d{1,2})?$/m',
                'merchant_id' => 'required'
            ]);

            if ($validator->fails()) {
                throw new Exception($validator->errors(), 400);
            }
            $merchant_id    = array_get($data, 'merchant_id');
            $amount         = array_get($data, 'amount');
            $toggle_payment = $this->getTogglePaymentByStoreId($merchant_id);
            $status         = array_get($toggle_payment, 'status');

            if ($status === true) {

                $data_build = Redis::get("weomni_payment_config:$merchant_id:data");
                $data_build = json_decode($data_build, true);

                if (empty($data_build)) {

                    $wemall_store_payment_channel = $this->getWemallStorePaymentChannel($merchant_id);
                    $weomni_setting_installment   = $this->getWeomniInstallmentsAll();
                    $wemall_config_installment    = $this->getWemallConfigInstallment();
                    $data_build                   =
                        [
                            'wemall_store_payment_channel' => $wemall_store_payment_channel,
                            'wemall_config_installment'    => $wemall_config_installment,
                            'weomni_setting_installment'   => $weomni_setting_installment
                        ];

                    if (empty($wemall_store_payment_channel)) {
                        LogService::writeServiceLog("get_weomni_payment_methods", json_encode_unicode($data), json_encode_unicode($data_build), (new \DateTime())->format('d/m/Y H:i:s'));
                        throw new \UnexpectedValueException("Get weomni payment error", 422);
                    }
                    Redis::set("weomni_payment_config:$merchant_id:data", json_encode($data_build), 'EX',24 * 60 * 60);
                }

                $data_build['amount'] = $amount;
                $response             = $this->buildPaymentMethods($data_build);
            } else if (empty($toggle_payment)) {
                $response = array_get($this->getOmisePaymentMethods($data), 'payment_methods', []);
            }

        } catch (\UnexpectedValueException $e) {
            $response = [];
        } catch (Exception $e) {
            LogService::writeServiceLog(
                "get_omise_payment_methods",
                json_encode_unicode($data),
                json_encode_unicode($e->getMessage()),
                (new \DateTime())->format('d/m/Y H:i:s')
            );

            $response = [];
        }

        return $response;
    }

    /**
     * Get available payment methods from OMISE
     *
     * @param array $data
     * @return mixed
     */
    public function getOmisePaymentMethods($data)
    {
        $merchant_id = array_get($data, 'merchant_id');
        $amount      = array_get($data, 'amount');
        $payment_url = env('PAYMENT_API_URL');
        $result      = Client::request(
            'GET',
            $payment_url. "payment-methods?merchant_id=$merchant_id&amount=$amount",
            ['verify' => false]
        );

        return json_decode($result->getBody()->getContents(), true);
    }

    /**
     * Get toggle payment by store_id
     *
     * @param array $store_id
     * @param boolean $status
     * @return array
     */
    public function getTogglePaymentByStoreId($store_id, $status = '')
    {
        $model  = new TruemovehTogglePaymentModel();
        $result = $model->findStore($store_id, $status);
        $result = array_get($result, '0', []);
        return $result;
    }

    /**
     * Get toggle payment active all
     *
     * @return array
     */
    public function getTogglePaymentStoreActive()
    {
        $model  = new TruemovehTogglePaymentModel();
        $result = $model->findStoreActive();

        return $result;
    }

     /**
     * Get getStorePaymentChannel
     *
     * @param string $store_id
     * @return array
     */
    public function getWemallStorePaymentChannel($store_id)
    {
        $tmp_header                 = TolSelfService::getHeader('application/json');
        $current_url                = "/store/payment/channel";
        $parameter_list["store_id"] = $store_id;
        $parameter_list["base_url"] = env('AWS_GATEWAY_URL_TOL_SSV', false);

        $tmp_lrequest = new \Illuminate\Http\Request();
        $tmp_lrequest->replace($parameter_list);
        $content_payment_channel_data = WlsService::operateRequestAction($current_url, "get", new \Illuminate\Http\Request(), $tmp_header, $parameter_list);
        $payment_channel_data = json_decode(array_get($content_payment_channel_data, 1, []), true);

        return $payment_channel_data;
    }

     /**
     * Get available payment methods from OMISE
     *
     * @return array
     */
    public function getWemallConfigInstallment()
    {
        $tmp_header = [
            "x-api-auth"    => env('X_API_AUTH_VLEARN_VERIFY', false),
            "Content-Type" => "text/xml;charset=utf-8",
        ];

        $current_url                   = "order/installment";
        $parameter_list["clear_cache"] = "1";
        $parameter_list["group_bank"]  = "1";

        $tmp_lrequest = new \Illuminate\Http\Request();
        $tmp_lrequest->replace($parameter_list);
        $content_payment_channel_data = WlsService::operateRequestAction($current_url, "get", new \Illuminate\Http\Request(), $tmp_header, $parameter_list);
        $payment_channel_data = json_decode(array_get($content_payment_channel_data, 1, []), true);

        return $payment_channel_data;
    }

    /**
     * build response payment methods
     * S142021 now support weomni payment
     * array suggestion have is key [amount, settings_payment_methods, wemall_store_payment_channel, wemall_config_installment]
     * @param array $data
     * @return array
     */
    public function buildPaymentMethods($data)
    {
        $weomni_setting_installment   = array_get($data, 'weomni_setting_installment', []);
        $wemall_config_installment    = array_get($data, 'wemall_config_installment', []);
        $wemall_store_payment_channel = array_get($data, 'wemall_store_payment_channel', []);
        $amount                       = array_get($data, 'amount', 0);

        $monthly_min_ccw   = 0;
        $monthly_min_ew    = 0;
        $installment       = [];
        $sof               = array_get($wemall_store_payment_channel, 'data.payment_channel.0.sof', []);
        $min_ew            = 0;
        $max_ew            = 0;
        $payment_methods   = [];
        foreach ($sof as $k => $v) {
            $sof_code = array_get($v, 'sof_code');
            switch ($sof_code) {
                case 'CCW':
                    $can_pay_from = (int) array_get($v, 'can_pay_from', 0);
                    $can_pay_to   = (int) array_get($v, 'can_pay_to', 200001);
                    $card = [
                        "object" => "payment_method",
                        "name" => "card",
                        "currencies"               => [
                            "THB",
                            "JPY",
                            "USD",
                            "EUR",
                            "GBP",
                            "SGD",
                            "AUD",
                            "CHF",
                            "CNY",
                            "DKK",
                            "HKD"
                        ],
                        "card_brands"              => [
                            "JCB",
                            "Visa",
                            "MasterCard"
                        ],
                        "installment_terms"        => null,
                        "banks"                    => [],
                        "monthly_minimum_interest" => $monthly_min_ccw,
                        "type"                     => "card",
                        "min"                      => $can_pay_from,
                        "max"                      => $can_pay_to
                    ];

                    if ($this->checkAmount($amount, $can_pay_from, $can_pay_to)) {
                        $payment_methods['card'] = $card;
                    }
                    break;
                case 'EW':
                    $min_ew = (int) array_get($v, 'can_pay_from', 0);
                    $max_ew = (int) array_get($v, 'can_pay_to', 200000);

                    if ($this->checkAmount($amount, $min_ew, $max_ew)) {
                        $payment_methods['truemoney'] = [
                            'object'                   => "payment_method",
                            'name'                     => "truemoney",
                            'currencies'               => ["THB"],
                            'card_brands'              => null,
                            'installment_terms'        => null,
                            'banks'                    => [],
                            'monthly_minimum_interest' => $monthly_min_ew,
                            'type'                     => "truemoney",
                            "min"                      => $min_ew,
                            "max"                      => $max_ew
                        ];
                    }
                    break;
            }
        }

        $config_installment = array_get($wemall_config_installment, 'data', []);

        if (!empty($weomni_setting_installment) && !empty($config_installment)) {
            foreach ($config_installment as $k => $v) {

                $abbreviation             = array_get($v, 'abbreviation');
                $setting_installment      = array_get($weomni_setting_installment, $abbreviation, []);

                $min_instm                = array_get($setting_installment, 'min');
                $max_instm                = array_get($setting_installment, 'max');
                $monthly_minimum_interest = array_get($setting_installment, 'monthly_minimum_interest');
                $month                    = array_get($v, 'month', []);

                foreach ($month as $key => $value) {
                    $per_month  = ($amount/$value);
                    if ($per_month < $monthly_minimum_interest) {
                        unset($month[$key]);
                    }
                }

                $tmp = [
                    'object'                   => "payment_method",
                    'name'                     => "installment_$abbreviation",
                    'currencies'               => ["THB"],
                    'card_brands'              => null,
                    'installment_terms'        => $month,
                    'banks'                    => [],
                    'monthly_minimum_interest' => $monthly_minimum_interest,
                    'type'                     => "installment",
                    "min"                      => $min_instm,
                    "max"                      => $max_instm,
                ];

                if (!empty($setting_installment) && $this->checkAmount($amount, $min_instm, $max_instm)) {
                    array_push($installment, $tmp);
                }
            }

            if (!empty($installment)) {
                $payment_methods['installment'] = $installment;
            }
        }

        return $payment_methods;
    }

    /**
     * Get toggle payment all
     *
     * @return array
     */
    public function getTogglePaymentStoreAll()
    {
        $model  = new TruemovehTogglePaymentModel();
        $result = $model->getStores();

        return $result;
    }

    /**
     * check amount
     *
     * @return boolean
     */
    public function checkAmount($amount, $min, $max)
    {
        return ($amount >= $min && $amount <= $max ) ? true : false ;
    }

    /**
     * Get Weomni Installments
     *
     * @return array
     */
    public function getWeomniInstallmentsAll()
    {
        $model   = new TruemovehWeomniInstallmentsModel();
        $result  = $model->getWeomniInstallments();
        $respone = $result;
        if (!empty($result)) {
            $respone = [];
            foreach ($result as $key => $value) {
                $respone[array_get($value, 'abbreviation')] = $value;
            }
        }

        return $respone;
    }

    /**
     * Get 2c2p Gateway
     *
     * @param array $cart_data
     * @return array
     */
    public function get2c2pGateway($cart_data)
    {
        $carts           = Arr::get($cart_data, 'record', []);
        $installments    = Arr::get($cart_data, 'store_payment_methods.installment', []);
        $gateway_2cp2p   = array_filter($installments, function($item) {
            if (Arr::get($item, 'gateway') != '2c2p') return false;

            return $item;
        });

        if (empty($gateway_2cp2p)) return [];

        $p2c2p_instlm_config = Redis::get("p2cp2-config-installment");
        $p2c2p_instlm_config = json_decode($p2c2p_instlm_config, true);
        if (empty($p2c2p_instlm_config)) {
            $model               = new TruemovehSettingsModel();
            $p2c2p_instlm_config = $model->findSettingKey('p2c2p_installments');
            $p2c2p_instlm_config = Arr::get($p2c2p_instlm_config, '0.config', []);
            if (empty($p2c2p_instlm_config)) return [];

            Redis::set("p2cp2-config-installment", json_encode($p2c2p_instlm_config), 'EX', 24 * 60 * 60);
        }

        $gateway_2cp2p             = array_values($gateway_2cp2p);
        $merge_p2c2p_instlm_config = $this->mergeInstallmentsConfig($gateway_2cp2p, $p2c2p_instlm_config);

        foreach ($carts as &$cart) {
            foreach (Arr::get($cart, 'products', []) as $key  => &$product) {
                $product_installments = Arr::get($product, 'installments', []);
                if (empty($product_installments)) continue;

                $merge_instm = array_merge($product_installments, $merge_p2c2p_instlm_config);
                $merge_instm = $this->buildResizeUrl($merge_instm);

                data_set($cart, "products.$key.installments", $merge_instm);
            }
        }

        return $carts;
    }

    /**
     * mergeInstallmentsConfig
     *
     * @param array $cart_data
     * @return array
     */
    private function mergeInstallmentsConfig($gateway_2cp2p, $p2c2p_instlm_config)
    {
        $gateway_2cp2p = array_column($gateway_2cp2p, 'installment_terms', 'name');

        foreach ($p2c2p_instlm_config as $key => &$instlm) {
            $abbreviation = Arr::get($instlm, 'abbreviation');
            $month        = Arr::get($gateway_2cp2p, "installment_$abbreviation", []);

            if (empty($month)) {
                Arr::forget($p2c2p_instlm_config, $key);
                continue;
            }

            Arr::set($instlm, 'month', array_map('strval', $month));
        }

        return array_values($p2c2p_instlm_config);
    }

    /**
     * switchPaymentMethodByGateway
     *
     * @param array $input
     * @param string $payment_method
     * @return string
     */
    public function switchPaymentMethodByGateway($input, $payment_method)
    {
        $gateway = strtoupper(Arr::get($input, 'payment_detail.gateway'));

        if (empty($gateway)) return $payment_method;

        if (strpos($payment_method, 'INSTM') !== false && $gateway == '2C2P') {
            $payment_method = "P". $gateway."INSTM";
        }
        return $payment_method;
    }

    /**
     * buildResizeUrl
     *
     * @param array $installments
     * @return array
     */
    public function buildResizeUrl($installments)
    {
        foreach ($installments as &$instlm) {
            $image        = Arr::get($instlm, 'image_url');
            $abbreviation = Arr::get($instlm, 'abbreviation');
            $img          = explode('/', $image);
            $file_name    = end($img);

            Arr::set($instlm, 'image_url', resizeUrlUpload(
                $image,
                $abbreviation,
                $file_name,
                ['c' => 'crop', 'w' => 60, 'h' => 30],
                ['c' => 'thumb', 'w' => 60, 'h' => 30]
            ));
        }

        return $installments;
    }

    /**
     * buildInstallment2C2P
     *
     * @param array $cart_data
     * @return array
     */
    public function buildInstallment2C2P($cart_data)
    {
        foreach (Arr::get($cart_data, 'data.record', []) as $ckey => $cart) {
            foreach (Arr::get($cart_data, 'products', []) as $pkey => $product) {
                $installments = Arr::get($product, 'installments');
                if (empty($installments)) {
                    return [];
                }
            }
        }

        $p2c2p_instlm_config = Redis::get("p2cp2-config-installment");
        $p2c2p_instlm_config = json_decode($p2c2p_instlm_config, true);
        if (empty($p2c2p_instlm_config)) {
            $model = new TruemovehSettingsModel();
            $p2c2p_instlm_config = $model->findSettingKey('p2c2p_installments');
            $p2c2p_instlm_config = Arr::get($p2c2p_instlm_config, '0.config', []);
            if (empty($p2c2p_instlm_config)) return [];

            Redis::set("p2cp2-config-installment", json_encode($p2c2p_instlm_config), 'EX', 24 * 60 * 60);
        }

        return $p2c2p_instlm_config;
    }

    /**
     * Find campaign type mnp one_step
     * and replace with OMISECCW
     *
     * @param array $placeorder_data
     * @param string $payment_method
     * @return string
     */
    public function findCampaignTypeAndSwitchPaymentMethod($placeorder_data, $payment_method)
    {
        $new_payment_method = $payment_method;

        foreach (Arr::get($placeorder_data, 'products', []) as $product) {

            if (empty($product['sim_meta'])) {
                continue;
            }

            if (Arr::get($product, 'sim_meta.0.campaign_mnp_type') == 'one_step') {
                $new_payment_method = 'OMISECCW';
                break;
            }
        }

        return $new_payment_method;
    }
}
