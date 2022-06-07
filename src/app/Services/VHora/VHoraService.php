<?php

namespace App\Services\VHora;

use App\Libraries\Clients\AwsGatewayClient;
use App\Libraries\RequestData\OrderRequest;
use App\Libraries\RequestData\VhoraOfflineRequest;
use App\Libraries\RequestData\VhoraRequest;
use App\Models\TruemovehConfigModel;
use App\Services\EmailService;
use App\Services\GuzzleService;
use App\Services\SimActivationService;
use App\Services\OrderService;
use App\Services\WlsService;
use App\Traits\VHoraResponsorTrait;
use App\Services\LogService;
use Illuminate\Support\Facades\Redis;
use App\Libraries\OIDC;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use function GuzzleHttp\json_decode;
use App\Models\TruemovehSettingsModel;
use GuzzleHttp\Exception\RequestException;
use Illuminate\Support\Arr;
use App\Services\ErrorMessageService;
use Exception;
use InvalidArgumentException;

class VHoraService
{
    use VHoraResponsorTrait;
    private $input;

    /**
     * Get list of personalize funtong
     *
     * @param array $parameters
     * @return array
     */
    public function personalizeFuntong($parameters = [])
    {
        $headers = [
            'ctoken' => Arr::get($parameters, 'ctoken', '')
        ];

        $request_parameters = [
            'cnt'    => Arr::get($parameters, 'cnt')
        ];

        if (empty($request_parameters['cnt'])) {
            unset($request_parameters['cnt']);
        }

        try {
            $client = new AwsGatewayClient($headers);
            $response = $client->get('/vhora/personalize-funtong', $request_parameters);
            $response = $this->buildResponse($response, $parameters);
        } catch (RequestException $e) {
            $response = json_decode($e->getResponse()->getBody()->getContents(), true);
            if ($e->getCode() === 401) {
                $response['message'] = 'Unauthorized credential';
            }

            $this->savelog($parameters, $e->getMessage());
            throw new InvalidArgumentException(json_encode($response), $e->getCode());
        } catch (Exception $e) {
            $this->savelog($parameters, $e->getMessage());
            throw new Exception($e->getMessage(), $e->getCode());
        }

        return $response;
    }

    /**
     * Get funtong's proposition data from DB
     *
     * @param string $channel
     * @return array
     */
    public function getPropoCode($channel = 'online')
    {
        $key = "vhora_propo_code_$channel";

        return $this->getSetting($key);
    }

    public function getNumberingGroup()
    {
        $numbering_groups = [
            'กัมมะ' => 'การงาน',
            'กฎุมพะ' => 'การเงิน',
            'ปัตนิ' => 'ความรัก',
            'ลาภะ' => 'โชคลาภ'
        ];

        $numbering_subgroups = [
            'กัมมะ' => [
                'ศุภะ' => 'งานรุ่ง พุ่งแรง',
                'ตนุ' => 'งานเด่น อุดมสุข',
                'พันธุ' => 'งานดี ครอบครัวรุ่งโรจน์',
                'ปัตนิ' => 'เพื่อนคู่คิด มิตรเสริมงาน'
            ],
            'กฎุมพะ' => [
                'ลาภะ' => 'ดูดทรัพย์ รับโชค',
                'กัมมะ' => 'เงินมั่งคั่ง งานมั่นคง'
            ],
            'ปัตนิ' => [
                'สหัชชะ' => 'เพื่อนคู่คิด มิตรรู้ใจ',
                'ศุภะ' => 'กวักรักแท้'
            ],
            'ลาภะ' => [
                'ศุภะ' => 'ปุ๊บปั๊บ รับโชค'
            ]
        ];

        return [
            'groups' => $numbering_groups,
            'subgroups' => $numbering_subgroups
        ];
    }

    /**
     * Get numbering group setting mapping DynamoDB
     * @param array $numbering_group_settings
     * @param array $record
     * @return array
     */
    public function setNumberingGroup($numbering_group_settings = [], $record = [])
    {
        $group              = Arr::get($record, 'group');
        $subgroup           = Arr::get($record, 'subgroup');
        $numbering_group    = Arr::get($numbering_group_settings, 'groups', []);
        $numbering_subgroup = Arr::get($numbering_group_settings, 'subgroup', []);

        $group_title     = Arr::get($numbering_group, "$group", '');
        $subgroup_title  = Arr::get($numbering_subgroup, "$group.$subgroup.sub_group", '');
        $subgroup_detail = Arr::get($numbering_subgroup, "$group.$subgroup.subgroup_detail", '');
        $pop_up          = Arr::get($numbering_subgroup, "$group.$subgroup.pop_up", '');

        Arr::set($record, 'group_title', $group_title);
        Arr::set($record, 'subgroup_title', $subgroup_title);
        Arr::set($record, 'subgroup_detail', $subgroup_detail);
        Arr::set($record, 'pop_up', $pop_up);

        return $record;
    }

    /**
     * Get setting from DynamoDB
     *
     * @param string $key
     * @return array
     */
    public function getSetting($key)
    {
        try {
            $model  = new TruemovehSettingsModel();
            $result = $model->findSettingKey($key);
        } catch (Exception $e) {
            $this->savelog($key, $e->getMessage());
            $result = [];
        }

        return $result;
    }

    /**
     * Build personalize funtong response
     * - wrap grade
     *
     * @param array $data
     * @param array $inputs
     * @return mixed
     */
    public function buildResponse($data = [], $inputs = [])
    {
        if (!is_array($data) || empty($data)) {
            throw new Exception('Data Not Found', 404);
        }

        $grade_mapping = [
            'A' => 'A++',
            'B' => 'A+',
            'C' => 'A'
        ];

        $channel     = Arr::get($inputs, 'channel', 'online');
        $numbering   = Arr::get($data, 'numbering', []);
        if (empty($numbering)) {
            return $data;
        }

        $config_shop_offline = [];
        if (!empty($inputs['shop'])) {
            $config_shop_offline = $this->getOfflineShopConfigByShop($inputs);
            $channel = array_get($config_shop_offline, 'dynamo_channel_name');
        }

        $config_data              = $this->getPropoCode($channel);
        $propo_data               = $config_data;
        $propo_data               = json_decode(Arr::get($propo_data, '0.configuration', '{}'), true);
        $numbering_group_settings = $this->getSettingWithCache('vhora_high_tier_configs');
        $list_numbering           = [];

        foreach ($numbering as $value) {
            if (isset($value['grade']) && in_array($value['grade'], array_keys($grade_mapping))) {
                $grade          = $grade_mapping[$value['grade']];
                $value['grade'] = $grade;
            }

            $numbers_company = strtolower(Arr::get($value, 'company'));
            $position        = array_search($value['grade'], array_column(Arr::get($propo_data, "$numbers_company.grades", []), 'grade'));

            $value['proposition_code']  = null;
            $value['proposition_amdoc'] = null;
            $value['bundling']          = null;

            if ($position !== false) {
                $value['proposition_code']  = Arr::get($propo_data, "$numbers_company.grades.$position.propo_code", []);
                $value['proposition_amdoc'] = Arr::get($propo_data, "$numbers_company.grades.$position.propo_amdoc", []);
                $value['bundling']          = Arr::get($propo_data, "$numbers_company.grades.$position.bundling");

                if ($this->checkVhoraSkipBundle($config_shop_offline, 'postpaid')) {
                    $value['bundling'] = null;
                }
            }

            $value = $this->setNumberingGroup($numbering_group_settings, $value);

            array_push($list_numbering, $value);
        }

        $data['numbering']   = $list_numbering;
        $data['filter']      = $this->buildFilterGrades(Arr::get($data, 'numbering', []), $config_data);
        $data['dealer_code'] = Arr::get($config_data, '0.dealer_code', null);

        return $data;
    }

    /**
     * buildFilterGrades
     * @param array $numbering_data
     * @param array $config_data
     * @return array
     */
    public function buildFilterGrades($numbering_data, $config_data)
    {
        $grades          = array_column($numbering_data, 'grade');
        $grades          = array_values(array_unique($grades));
        $config_baseline = Arr::get($config_data, '0.baseline.0', []);

        $entries = [];
        foreach ($grades as $grade) {
            $entry              = [];
            $entry['grade']     = $grade;
            $entry['base_line'] = Arr::get($config_baseline, $grade, '1199');
            $entries[]          = $entry;
        }

        return [
            'grades' => $entries
        ];
    }

    /*
     * Get fortune funtong
     *
     * @param string $msisdn
     * @param string $ctoken
     * @return mixed
     */
    public function getFortuneFuntong($msisdn, $ctoken)
    {
        $headers = [
            'ctoken' => $ctoken
        ];

        try {
            $client = new AwsGatewayClient($headers);
            $response = $client->get('/vhora/fortune-funtong', [
                'msisdn' => $msisdn
            ]);
        } catch (Exception $e) {
            $this->savelog($msisdn, $e->getMessage());
            throw new Exception($e->getMessage(), $e->getCode());
        }

        return $response;
    }

    /**
     * savelog
     * @param array $parameters
     * @param string $get_message
     * @return mixed
     */
    public function savelog($parameters, $get_message)
    {
        LogService::writeServiceLog(
            "vhora:personalize-funtong",
            json_encode_unicode($parameters),
            json_encode_unicode(["message" => $get_message]),
            date('d/m/Y H:i:s')
        );
    }

    public function manageException($e)
    {
        $code    = $e->getCode();
        $code    = $code == 0 ? 406 : $code;
        $message = $e->getMessage();

        LogService::writeServiceLog('VHoraOfflineAuthentication', json_encode_unicode($this->input), json_encode_unicode(["message" => $message]), date('d/m/Y H:i:s'));

        return [
            'response' => $this->createErrorMessage($message, $code),
            'code'     => $code
        ];
    }

    public function processAuthentication($input)
    {
        try {
            $this->input = $input;
            $type        = array_get($input, 'type');
            $authen_type = ['employee', 'dealer'];

            if (in_array($type, $authen_type)) {
                $result = $this->employeeAndDealerProcess($input);
            } else {
                $result = $this->customerProcess($input);
            }

            $response = ['response' => ['data' => $result], 'code' => 200];
        } catch (\InvalidArgumentException $e) {
            $response = $this->manageException($e);
        } catch (\Exception $e) {
            $response = $this->manageException($e);
        }
        return $response;
    }

    private function employeeAndDealerProcess($input)
    {
        $request         = new VhoraOfflineRequest();
        $request->setRequestLogin($input);

        $type            = $request->getLoginType();
        $well_known_data = $this->getOpenIDConnectData($type);
        $issuer_url      = array_get($well_known_data, 'issuer');
        $open_idc        = new OIDC(
            $issuer_url,
            array_get($well_known_data, 'client_id'),
            array_get($well_known_data, 'client_secret'),
            $issuer_url);

        $unique_key = array_get($input, 'unique');
        $open_idc->setUniqueKey($unique_key);
        $open_idc->setRedirectURL(env('REDIRECT_OFFLINE_AUTHEN')."?type=$type&unique=$unique_key");
        $open_idc->addScope('profile');
        $open_idc->authenticate();

        $user_info = $open_idc->requestUserInfo();

        $oidc_shop_code = object_get($user_info, 'SHOPCODE');
        $sale_code      = object_get($user_info, 'SALE_CODE');
        $channel_alias  = object_get($user_info, 'CHANNEL_ALIAS');

        $redis_token_key   = base64_encode($sale_code . time());
        $redis_token_data  = [
            'access_token' => $open_idc->getAccessToken(),
            'id_token'     => $open_idc->getIdToken()
        ];

        Redis::set("vhora-offline-data:token:$redis_token_key", json_encode($redis_token_data));

        $response_data = [
            'key'       => $redis_token_key,
            'type'      => $type,
            'channel'   => $channel_alias,
            'sale_code' => $sale_code,
            'shop_code' => $oidc_shop_code,
            'sale_name' => [
                'th'    => object_get($user_info, 'THAINAME'),
                'en'    => object_get($user_info, 'ENGLISHNAME'),
            ],
            'meta_data' => json_decode(json_encode($user_info), true)
        ];

        $shop_code_list = explode('|', $oidc_shop_code);
        $shop_code_list = array_filter($shop_code_list);

        foreach ($shop_code_list as $info_shop_code) {
            $response_data['shop'][] = [
                'code' => $info_shop_code,
            ];
        }

        return $response_data;
    }

    private function customerProcess($input)
    {
        if (array_key_exists('shop', $input)) {
            $shop_data = $this->getShopInfo($input);
        } else {
            $shop_data = $this->getDealerInfo($input);
        }

        $response_data = [
            'type'     => array_get($input, 'type'),
            'shop'     => array_get($shop_data, 'shop'),
        ];

        if (array_get($shop_data, 'alias')) {
            $response_data['channel'] = array_get($shop_data, 'alias');
        }

        return $response_data;
    }

    public function processGetDealerInfo($input)
    {
        try {
            $this->input = $input;
            $result = $this->getDealerInfo($input);

            $response = ['response' => ['data' => $result], 'code' => 200];
        } catch (\InvalidArgumentException $e) {
            LogService::writeServiceLog('VHoraOfflineGetDealerInfo', json_encode_unicode($this->input), json_encode_unicode(["message" => $e->getMessage()]), date('d/m/Y H:i:s'));
            $response = ['response' => ['data' => []], 'code' => 200];
        } catch (\Exception $e) {
            LogService::writeServiceLog('VHoraOfflineGetDealerInfo', json_encode_unicode($this->input), json_encode_unicode(["message" => $e->getMessage()]), date('d/m/Y H:i:s'));
            $response = ['response' => ['data' => []], 'code' => 200];
        }
        return $response;
    }

    private function getDealerInfo($input)
    {
        $request = new VhoraOfflineRequest();
        $request->setRequestGetDealerInfo($input);

        $shop_code = array_get($input, 'shop_code', array_get($input, 'sale_code'));
        $shop_name = Redis::get("vhora-offline-data:mapping-shop-code-name:$shop_code");

        if (!$shop_name) {
            $client               = new AwsGatewayClient();
            $response_dealer_info = $client->post('/vhora/dealer-info', $request->getRequest());
            $dealer_info          = array_get($response_dealer_info, 'wssoList.wssoInfoArray.0', []);
            $set_shop_name        = [
                'name' => [
                    'th' => array_get($dealer_info, 'thaiName'),
                    'en' => array_get($dealer_info, 'englishName'),
                ],
                'alias' => array_get($dealer_info, 'channelAlias')
             ];
            $shop_name = json_encode($set_shop_name);
            Redis::set("vhora-offline-data:mapping-shop-code-name:$shop_code", $shop_name);
        }

        $shop_data = json_decode($shop_name, true);
        return [
            'shop' => [
                'code' => $shop_code,
                'name' => array_get($shop_data, 'name'),
            ],
            'alias' => array_get($shop_data, 'alias'),
        ];
    }

    public function processLoginStoreOffline($input)
    {
        try {
            $request_login = new VhoraOfflineRequest();
            $request_login->setRequestLogin($input);

            $type            = $request_login->getLoginType();
            $well_known_data = $this->getOpenIDConnectData($type);
            $issuer_url      = array_get($well_known_data, 'issuer');
            $open_idc        = new OIDC(
                               $issuer_url,
                               array_get($well_known_data, 'client_id'),
                               array_get($well_known_data, 'client_secret'),
                               $issuer_url);
            $unique_key = md5(Str::uuid()->toString());
            $open_idc->setUniqueKey($unique_key);
            $open_idc->setRedirectURL(env('REDIRECT_OFFLINE_AUTHEN')."?type=$type&unique=$unique_key");
            $open_idc->addScope('profile');
            $open_idc->authenticate();

            $response = ['response' => ['data' => []], 'code' => 200];

        } catch (\InvalidArgumentException $e) {
            LogService::writeServiceLog('VHora:login-offline-validate', json_encode($input),
                json_encode_unicode($e->getMessage()),
                date('d/m/Y H:i:s')
            );

            $response = ['response' => ['redirect' => '/offline-store/berfuntong/login?error=010']];

        } catch (Exception $e) {
            LogService::writeServiceLog('VHora:login-offline-exception', json_encode($input),
                json_encode_unicode($e->getMessage()),
                date('d/m/Y H:i:s')
            );

            $response = ['response' => ['redirect' => '/offline-store/berfuntong/login?error=010']];
        }

        return $response;
    }

    private function getOpenIDConnectData($type)
    {
        if ($type == 'employee') {
            $issuer        = env('ISSUER_EMPLOYEE');
            $client_id     = env('CLIENT_ID_EMPLOYEE');
            $client_secret = env('CLIENT_SECRET_EMPLOYEE');
        } else {
            $issuer        = env('ISSUER_DEALER');
            $client_id     = env('CLIENT_ID_DEALER');
            $client_secret = env('CLIENT_SECRET_DEALER');
        }

        return [
            'client_id'     => $client_id,
            'client_secret' => $client_secret,
            'issuer'        => $issuer
        ];
    }

    public function processVerifyOffline($input)
    {
        try {
            $request_verify = new VhoraOfflineRequest();
            $request_verify->setRequestVerify($input);

            $data_validate   = SimActivationService::validate($request_verify->getRequest());
            $result_validate = json_decode(array_get($data_validate, 1, '{}'), true);

            $result = [
                'correlation_id'  => $request_verify->getCorrelationId(),
                'result'          => $result_validate,
                'is_exceed_limit' => false,
            ];

            $status_code = 200;

            $code = array_get($result_validate, 'code');

            if (array_get($data_validate, 0, 200) != 200 || $code != '200') {
                $status_code = 406;
                if ($code == 105) {
                    $result['is_exceed_limit'] = true;
                }

                $result['message'] = ErrorMessageService::getErrorMessageVerifyOfflineVhora($code);
            }

            $response = ['response' => $result, 'code' => $status_code];

        } catch (\InvalidArgumentException $e) {
            $response = $this->setException('VHora:verify-offline-validate', $input, $e->getMessage(), $e->getCode());
        } catch (Exception $e) {
            $response = $this->setException('VHora:verify-offline-exception', $input, $e->getMessage(), 500);
        }

        return $response;
    }

    /**
     * @param $lrequest
     * @return array
     * @throws
     */
    public function processPlaceOrderOffline($lrequest)
    {
        try {
            $input = $lrequest->all();
            $reserve_number_result = [];
            $shop_data_name = array_get($input, 'form.shop_data_name', '');
            $offline_shop_data = array_get($this->getOfflineShopConfig(), $shop_data_name);

            if ($shop_data_name && !$offline_shop_data) {
                throw new \OutOfBoundsException("Shop name is invalid", 404);
            }

            $input['nas_channel'] = array_get($offline_shop_data, 'nas_channel', 'FNT-OFFLINE');
            $request_place_order = new VhoraOfflineRequest();
            $request_place_order->setRequestReserveNumberOffline($input);
            $reserve_number_result = ReserveNumberService::postReserveNumber($request_place_order->getRequestReserveNumberOfflineData());

            if (array_get($reserve_number_result,'is_pass', false) === false) {
                throw new \UnexpectedValueException("Reserve number Error", 422);
            }

            $order_service = new OrderService();
            $place_order_result = $order_service->placeOrderOffline($lrequest);
            $secure_key = array_get($place_order_result, 'secureKey');

           if ($shop_data_name && $offline_shop_data) {
                $success_code_from_secure_key_encrypted = encrypt($secure_key);
                $parameter_to_be_appended = "success_code={$success_code_from_secure_key_encrypted}";
                $redirect_url = env('APP_URL') . "/offline-store/berfuntong/success?{$parameter_to_be_appended}";

                $request_place_order->setRequestSubmitPartialOrderOffline($input, $offline_shop_data, $redirect_url);
                $submit_partial_order_result = $this->postSubmitPartialOrderOffline($request_place_order->getRequestSubmitPartialOrderOfflineData());

                if (array_get($submit_partial_order_result,'is_pass', false) === false) {
                    throw new \LogicException('Submit partial order error', 422);
                }

                $vhora_offline_success_data_order_id = array_get($submit_partial_order_result, 'order_id');
                $vhora_offline_success_data_barcode_url = array_get($submit_partial_order_result, 'barcode_url');
                Redis::set("truestore:vhora:offline:pos:$secure_key:data", json_encode(['order_id' => $vhora_offline_success_data_order_id, 'barcode_url' => $vhora_offline_success_data_barcode_url]), 'EX', 48 * 60 * 60);
            }

            $vhora_offline_success_data = $this->prepareDataSuccessData($input);
            Redis::set("truestore:vhora:offline:orderid:$secure_key:data", json_encode($vhora_offline_success_data), 'EX', 48 * 60 * 60);

            Redis::set("truestore:ctoken:orderid:$secure_key:value", array_get($input, 'cToken'), 'EX', 48 * 60 * 60);
            Redis::set("truestore:vhora_image:orderid:$secure_key:value", array_get($input, 'image'), 'EX', 48 * 60 * 60);

            $response = ['response' => ['data' => $place_order_result], 'code' => 200];

        } catch (\InvalidArgumentException $e) {
            $response = $this->setException('Vhora:offline-confirm-validate', $lrequest->all(), $e->getMessage(), 400);
        } catch (\OutOfBoundsException $e) {
            $response = $this->setException('Vhora:offline-confirm-get-shop-config', $lrequest->all(), $e->getMessage(), 404);
        } catch (\UnexpectedValueException $e) {
            $response = $this->setException('Vhora:offline-confirm-reserve-number', $lrequest->all(), ['message' => $e->getMessage(), 'code' => array_get($reserve_number_result,'code')], 422);
        } catch (\LogicException $e) {
            $response = $this->setException('Vhora:offline-confirm-submit-partial-order', $lrequest->all(), $e->getMessage(), 422);
        } catch (\Exception $e) {
            $response = $this->setException('Vhora:offline-confirm-exception', $lrequest->all(), $e->getMessage(), 406);
        }

        return $response;
    }

    public function processAuthenticationLogout($input)
    {
        try {
            $request = new VhoraOfflineRequest();
            $request->setRequestLogout($input);

            $type            = $request->getLoginType();
            $well_known_data = $this->getOpenIDConnectData($type);
            $issuer_url      = array_get($well_known_data, 'issuer');
            $open_idc        = new OIDC(
                $issuer_url,
                array_get($well_known_data, 'client_id'),
                array_get($well_known_data, 'client_secret'),
                $issuer_url);

            $redis_token_key  = array_get($input, 'key');
            $redis_token_data = Redis::get("vhora-offline-data:token:$redis_token_key");
            Redis::del("vhora-offline-data:token:$redis_token_key");

            $error_code = array_get($input, 'error');
            $redirect_url = env('REDIRECT_OFFLINE_LOGIN');
            if ($error_code) {
                $redirect_url .= "?error=$error_code";
            }

            $open_idc->signOut(array_get($redis_token_data, 'access_token'), $redirect_url);

            $response = ['response' => ['data' => true], 'code' => 200];

        } catch (\InvalidArgumentException $e) {
            $response = $this->manageException($e);
        } catch (\Exception $e) {
            $response = $this->manageException($e);
        }

        return $response;
    }
    /**
     * @param $input
     * @param $result
     * @param $code
     * @return array
     */
    private function setException($step, $input, $result, $code)
    {
        LogService::writeServiceLog($step, json_encode($input), json_encode($result), date('d/m/Y H:i:s'));
        $response = ['response' => ['data' => $result], 'code' => $code];
        return $response;
    }

    /**
     * Get Ref Code
     * @return String
     */
    public function getRefCode()
    {
        return md5(Str::uuid()->toString());
    }

    public function processGetAuthChannel()
    {
        try {
            $data = [];
            $cache = Redis::get('truemoveh:offline_auth_channel');

            if ($cache) {
                $data = json_decode($cache, 1);
            }

            if(!$data) {
                $config_model = new TruemovehConfigModel();
                $result       = $config_model->findFirst('offline_auth_channel');
                $data         = $result ? $result->toArray() : [];
                Redis::set('truemoveh:offline_auth_channel', json_encode($data));
            }
            $response = ['response' => ['data' => json_decode(array_get($data, 'value'), 1)], 'code' => 200];
        } catch(Exception $e){
            $response = [];
        }

        return $response;
    }

    /**
     * getOfflineShopConfigByShop
     *
     * @param array $inputs
     *
     * @return array
     */
    public function getOfflineShopConfigByShop($inputs)
    {
        $shop               = Arr::get($inputs, 'shop', '');
        $config_model       = new TruemovehConfigModel();
        $result             = $config_model->findFirst('vhora-offline-shop');
        $result             = Arr::get($result, 'value', '');
        $vhora_offline_shop = json_decode($result, 1);

        return Arr::get($vhora_offline_shop, $shop);
    }

    /**
     * checkVhoraSkipBundle
     *
     * @param array $config_shop_offline
     * @param string $pack_type Ex. postpaid,prepaid
     *
     * @return boolean
     */
    public function checkVhoraSkipBundle($config_shop_offline, $pack_type)
    {
        $skip_bundle             = [];
        $skip_bundle['prepaid']  = Arr::get($config_shop_offline, 'prepaid.skip_bundle', false);
        $skip_bundle['postpaid'] = Arr::get($config_shop_offline, 'postpaid.skip_bundle', false);

        return Arr::get($skip_bundle, $pack_type);
    }

    private function getOfflineShopConfig()
    {
        $shop_config = Redis::get('vhora-offline-shop');
        if (!$shop_config) {
            $config_model = new TruemovehConfigModel();
            $result = $config_model->findFirst('vhora-offline-shop');
            $data = $result ? $result->toArray() : [];
            $shop_config = array_get($data, 'value');
            Redis::set('vhora-offline-shop', $shop_config);
        }
        return json_decode($shop_config, 1);
    }

    private function getSettingWithCache(string $key)
    {
        $setting_config = Redis::get('vhora_high_tier_configs');

        if (!empty($setting_config)) {
            return json_decode($setting_config, 1);
        }

        $model          = new TruemovehSettingsModel();
        $result         = $model->findFirstWithKey($key);
        $data           = !empty($result) ? $result->toArray() : [];
        $setting_config = array_get($data, 'value', '');

        if (empty($data) || empty($setting_config)) return [];

        Redis::set('vhora_high_tier_configs', $setting_config);

        return json_decode($setting_config, 1);
    }

    private function getShopInfo($input)
    {
        $shop_config = $this->getOfflineShopConfig();
        $shop        = array_get($input, 'shop');
        $is_shop     = in_array($shop, array_keys($shop_config));

        if (!$is_shop) {
            throw new Exception('Shop is invalid', 404);
        }

        $data = array_get($shop_config, $shop);
        $vhora_offline_shop = [
            'is_shop' => $is_shop,
            'shop'    => $shop,
            'config'  => array_get($data, 'config'),
        ];

        return [
            'shop' => [
                'code' => array_get($data, 'shop_code'),
                'name' => array_get($data, 'name'),
                'vhora_offline_shop' => $vhora_offline_shop
            ],
        ];
    }

    public function postSubmitPartialOrderOffline($data)
    {
        $headers = [
            'x-api-key'    => env('X_API_KEY_TOL_SSV', false),
            'Content-Type' => 'application/json',
        ];
        $fixed_parameter_list = [
            'base_url' => env('AWS_GATEWAY_URL_TOL_SSV', false),
        ];
        $tmp_lrequest = new \Illuminate\Http\Request();
        $tmp_lrequest->replace($data);
        $correlation_id = array_get($data, 'correlationId');
        $result = WlsService::operateRequestAction("/vhora/submit-partial-order/$correlation_id", 'POST', $tmp_lrequest, $headers, $fixed_parameter_list);

        LogService::writeServiceLog(
            "VHora:offline-submit-partial-order",
            json_encode(["tmp_lrequest" => $tmp_lrequest->all(), 'fixed_parameter_list' => $fixed_parameter_list], true),
            json_encode($result, true),
            (new \DateTime())->format('d/m/Y H:i:s')
        );

        $result['is_pass'] = false;
        $response_data     = \json_decode(array_get($result, 1, '{}'), true);
        $code              = array_get($response_data, 'code', '');
        $result['order_id'] = array_get($response_data, 'orderId', '');
        $result['barcode_url'] = array_get($response_data, 'extraData.barcodeUrl', '');
        if ($response_data && $code == 200) {
            $result['is_pass'] = true;
        }

        return $result;
    }

    private function prepareDataSuccessData($data)
    {
        $firstname = array_get($data, 'form.firstname', '');
        $lastname  = array_get($data, 'form.lastname', '');
        $msisdn    = array_get($data, 'form.selected_msisdn', '');

        $request_place_order = new OrderRequest();
        $birth_date = date_format($request_place_order->setFormatBirthDate(array_get($data, 'form.birthdate')), 'd/m/Y');

        $firstname = $firstname != 'vhora_firstname' && !is_null($firstname) ? $firstname : '';
        $lastname  = $lastname != 'vhora_lastname' && !is_null($lastname) ? $lastname : '';

        return [
            'firstname'       => $firstname,
            'lastname'        => $lastname,
            'birthtime'       => array_get($data, 'form.birthtime'),
            'birthdate'       => $birth_date,
            'selected_msisdn' => $msisdn,
            'birthdate_thai'  => WlsService::dateToThai($birth_date),
            'package_code'    => array_get($data, 'form.package_code', '')
        ];
    }

    public function processProphecy($lrequest)
    {
        try {
            $input = $lrequest->all();

            if (!isset($input['ref_code'])) {
                $input['ref_code'] = $this->getRefCode();
            }

            $vhora_request = new VhoraRequest();
            $vhora_request->setRequestGetProphecy($input);

            $get_password = $this->getPasswordConfig();
            $password = Arr::get($input, 'password');

            if (!in_array($password, $get_password)) {
                throw new \OutOfBoundsException('Password does not exist', 404);
            }

            $verify_service = new VerifyService();
            $response_c_token = $verify_service->getCtoken($vhora_request->getRequest());
            $c_token = Arr::get($response_c_token, 'ctoken');
            if (empty($c_token)) {
                throw new \UnexpectedValueException('Error get cToken', 422);
            }

            $prophecy_data = $this->getProphecy($c_token);
            if (Arr::get($prophecy_data,'is_pass', false) === false) {
                throw new \LogicException('Get prophecy error', 422);
            }

            $response = ['response' => ['data' => Arr::get($prophecy_data, 'response_data')], 'code' => 200];
        } catch (\InvalidArgumentException $e) {
            $response = $this->setException('Vhora:get-prophecy:validate', $lrequest->all(), $e->getMessage(), 400);
        } catch (\OutOfBoundsException $e) {
            $response = $this->setException('Vhora:get-prophecy:password-not-match', $lrequest->all(), $e->getMessage(), 404);
        } catch (\UnexpectedValueException $e) {
            $response = $this->setException('Vhora:get-prophecy:get-c-token', $lrequest->all(), $e->getMessage(), 422);
        } catch (\LogicException $e) {
            $response = $this->setException('Vhora:get-prophecy:gateway', $lrequest->all(), $e->getMessage(), 422);
        } catch (\Exception $e) {
            $response = $this->setException('Vhora:get-prophecy:exception', $lrequest->all(), $e->getMessage(), 406);
        }

        return $response;
    }

    public function processResendEmail($lrequest)
    {
        try {
            $input = $lrequest->all();

            if (env('IS_SMTP_ALLOWED', true)) {
                $vhora_request = new VhoraRequest();
                $vhora_request->setRequestResendEmail($input);

                $data['sim_meta'] = $vhora_request->getPDFData();
                $data['fortune_funtong'] = Arr::get($input, 'fortune_funtong');
                $data['file_name_2_content'] = Arr::get($input, 'vhora_image');

                [$file_name, $file_storage_path] = App('App\Http\Controllers\APIController')->setPDF('success-vhora-offline-pdf', $data);
                $email_info = $vhora_request->getEmailInfo();
                $email_info['attach'] = [
                    'path' => $file_storage_path . $file_name . '.pdf',
                    'name' => 'คำทำนายดวงชะตาเบอร์ฟันธง.pdf',
                    'mime' => mime_content_type($file_storage_path . $file_name . '.pdf')
                ]; 

                EmailService::sendEmail('email-offline', $email_info, env('EMAIL_FROM'), env('NAME_FROM'));

                unlink($file_storage_path . $file_name . '.pdf');
            }

            $response = ['response' => ['data' => []], 'code' => 200];
        } catch (\InvalidArgumentException $e) {
            $response = $this->setException('Vhora:resend-email:validate', $lrequest->all(), $e->getMessage(), 400);
        } catch (\Exception $e) {
            $response = $this->setException('Vhora:resend-email:exception', $lrequest->all(), $e->getMessage(), 406);
        }

        return $response;
    }

    public function getProphecy($c_token)
    {
        $headers = [
            'x-api-key' => env('X_API_KEY_TOL_SSV', false),
            'Content-Type' => 'application/json',
            'ctoken' => $c_token
        ];
        $fixed_parameter_list = [
            'base_url' => env('AWS_GATEWAY_URL_TOL_SSV', false),
        ];

        $tmp_lrequest = new \Illuminate\Http\Request();

        $result = WlsService::operateRequestAction("/vhora/prophecy", 'GET', $tmp_lrequest, $headers, $fixed_parameter_list);

        LogService::writeServiceLog(
            "VHora:prophecy",
            json_encode(["ctoken" => $c_token, 'fixed_parameter_list' => $fixed_parameter_list], true),
            json_encode($result, true),
            (new \DateTime())->format('d/m/Y H:i:s')
        );

        $result['is_pass'] = false;
        $response_data = \json_decode(Arr::get($result, 1, '{}'), true);
        $code = Arr::get($result, 0);
        $ascendant = Arr::get($response_data, 'ascendant');
        if ($ascendant && $code == 200) {
            $result['is_pass'] = true;
            $result['response_data'] = $ascendant;
        }

        return $result;
    }

    public function getPasswordConfig()
    {
        $response = Redis::get('truestore:resend_email:password');

        if (empty($response)) {
            $model  = new TruemovehConfigModel();
            $result = $model->findFirst('resend_email_password');
            $password_list = $result ? Arr::get($result->toarray(), 'value', '{}') : [];

            if ($password_list) {
                Redis::set('truestore:resend_email:password', $password_list);
            }

            $response = $password_list;
        }

        return json_decode($response, true);
    }
}
