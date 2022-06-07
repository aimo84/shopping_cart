<?php

namespace App\Libraries\RequestData;

use App\Libraries\Validation\VhoraOfflineValidation;
use App\Services\StoreService;

class VhoraOfflineRequest extends BaseRequest
{
    private $login_type;
    private $correlation_id;
    private $thai_id;
    private $reserve_number_offline_data;
    private $submit_partial_order_offline_data;

    public function setRequestLogin($input)
    {
        $validation = new VhoraOfflineValidation();
        $validation->parameter($input);
        $validation->rulesLogin();
        $validation->exec();

        $this->setLoginType(array_get($input, 'type'));
    }

    public function setRequestLogout($input)
    {
        $validation = new VhoraOfflineValidation();
        $validation->parameter($input);
        $validation->rulesLogout();
        $validation->exec();

        $this->setLoginType(array_get($input, 'type'));
    }

    public function setLoginType($type) {
        $this->login_type = $type;
    }

    public function getLoginType() {
        return $this->login_type;
    }

    public function setRequestVerify($input)
    {
        $validation = new VhoraOfflineValidation();
        $validation->parameter($input);
        $validation->rulesVerify();
        $validation->exec();

        $sim_type       = array_get($input, 'sim_type') === 'prepaid' ? 'PRE' : 'POST';
        $correlation_id = \Illuminate\Support\Str::uuid()->toString();
        $this->setCorrelationId($correlation_id);
        $this->setThaiId(array_get($input, 'id_card'));

        $this->request = [
            'correlation_id'  => $this->getCorrelationId(),
            'sim_type'        => $sim_type,
            'dealer_code'     => '' . array_get($input, 'shop_code'),
            'subscriber_info' => [
                'company_code' => array_get($input, 'company_code'),
                'proposition'  => array_get($input, 'proposition')
            ],
            'customer_info'   => [
                'identification' => '' . $this->getThaiId(),
                'birth_date'     => date_format($this->setFormatBirthDate('23032535'), 'd/m/Y'),
            ]
        ];
    }

    private function setFormatBirthDate($birth_date_data) {
        $birth_date = str_split($birth_date_data, 4);
        $date_month = array_get($birth_date, 0);
        $year       = array_get($birth_date, 1) - 543;

        return date_create_from_format('jmY', '' . $date_month . $year);
    }

    public function setCorrelationId($correlation_id) {
        $this->correlation_id = $correlation_id;
    }

    public function getCorrelationId() {
        return $this->correlation_id;
    }

    public function setThaiId($thai_id) {
        $this->thai_id = $thai_id;
    }

    public function getThaiId() {
        return $this->thai_id;
    }

    public function setRequestGetDealerInfo($input)
    {
        $validation = new VhoraOfflineValidation();
        $validation->parameter($input);
        $validation->rulesGetDealerInfo();
        $validation->exec();

        $data = [
            'pageSize'   => array_get($input, 'page_size', 50),
            'pageNumber' => array_get($input, 'page_number', 1),
            'searchList' => [
                'searchInfoArray' => [
                    [
                        'type'  => 'SALECODE',
                        'value' => array_get($input, 'shop_code', array_get($input, 'sale_code'))
                    ],
                    [
                        'type'  => 'DIRECTORYTYPE',
                        'value' => 'ALL'
                    ]
                ]
            ],
        ];

        $this->setRequest($data);
    }

    public function setRequestCustomerScanned($input)
    {
        $validation = new VhoraOfflineValidation();
        $validation->parameter($input);
        $validation->rulesCustomerScanned();
        $validation->exec();

        $data = array_get($input, 'shop_code');

        $this->setRequest($data);
    }

    public function setRequestReserveNumberOffline($input)
    {
        $validation = new VhoraOfflineValidation();
        $validation->parameter($input);
        $validation->rulesConfirm();
        $validation->exec();

        $this->setRequestReserveNumberOfflineData($input);
    }

    public function setRequestReserveNumberOfflineData($data)
    {
        $this->reserve_number_offline_data = [
            "correlatedId"     => array_get($data, 'id.correlationId'),
            "idType"           => "I",
            "idNumber"         => (string) array_get($data, 'id.id'),
            "msisdn"           => (string) array_get($data, 'form.selected_msisdn'),
            "reserveDealer"    => (string) array_get($data, 'shopOffline.shopCode'),
            "webMethodChannel" => (string) array_get($data, 'nas_channel', 'FNT-OFFLINE'),
            "userLogin"        => (string) array_get($data, 'shopOffline.shopCode'),
        ];

        $store_service = new StoreService();
        $this->reserve_number_offline_data['pstId'] = $store_service->processGetExternalNasCodeByNasCode((string) array_get($data, 'pricePlan.proposition_nas_code'));

        if (!empty(array_get($data, 'form.package_code'))) {
            $this->reserve_number_offline_data['vhrPackageCode'] = array_get($data, 'form.package_code');
        }
    }

    public function getRequestReserveNumberOfflineData() {
        return $this->reserve_number_offline_data;
    }

    public function setRequestSubmitPartialOrderOffline($input, $offline_shop_data, $redirect_url)
    {
        $validation = new VhoraOfflineValidation();
        $validation->parameter($input);
        $validation->rulesSubmitPartialOrderOffline();
        $validation->exec();

        $this->setRequestSubmitPartialOrderOfflineData($input, $offline_shop_data, $redirect_url);
    }

    public function setRequestSubmitPartialOrderOfflineData($data, $offline_shop_data, $redirect_url)
    {
        $sim_type           = array_get($data, 'pricePlan.sim_type');
        $_offline_shop_data = array_get($offline_shop_data, $sim_type);

        $this->submit_partial_order_offline_data = [
            'correlationId' => (string) array_get($data, 'id.correlationId'),
            'channel'       => (string) array_get($offline_shop_data, 'channel'),
            'sendSms'       => 'Y',
            'smsMobileNo'   => (string) array_get($data, 'form.phone_submit'),
            'submitDate'    => (string) date('Y-m-d\TH:i:s\Z'),
            'campaignInfo'  => [
                'campaignId'  => (string) array_get($_offline_shop_data, 'campiagn_id'),
                'priceplan'   => (string) $this->getPricePlanExternalCode(array_get($data, 'pricePlan.code')),
                'priceplanRc' => (string) array_get($data, 'pricePlan.price'),
                'proposition' => (string) array_get($data, 'form.proposition_amdoc'),
            ],
            'subscriberInfo' => [
                'subscriberNumber' => (string) array_get($data, 'form.selected_msisdn'),
                'subscriberType'   => (string) array_get($_offline_shop_data, 'subscriber_type')
            ],
            'customerInfo' => [
                'identification' => (string) array_get($data, 'id.id')
            ]
        ];

        if (empty(array_get($data, 'form.package_code'))) {
            $this->submit_partial_order_offline_data['extraData'] = (string) $redirect_url;
        }
    }

    public function getRequestSubmitPartialOrderOfflineData()
    {
        return $this->submit_partial_order_offline_data;
    }

    public function getPricePlanExternalCode($code)
    {
        $store_service = new StoreService();
        return $store_service->processGetExternalPricePlanCodeByPricePlanCode($code);
    }
}
