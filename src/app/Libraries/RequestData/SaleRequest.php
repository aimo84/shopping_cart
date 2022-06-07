<?php

namespace App\Libraries\RequestData;

use App\Libraries\Validation\SaleValidation;
use App\Models\TruemovehConfigModel;
use App\Models\TruemovehLevelCShopsModel;

class SaleRequest extends BaseRequest
{
    public function setRequestInputProcessSaleSms($input)
    {
        $validation = new SaleValidation();
        $validation->parameter($input);
        $validation->rulesSms();
        $validation->exec();

        $data = [
            'sale_id'      => array_get($input, 'sale_id'),
            'msisdn'       => array_get($input, 'msisdn'),
            'sale_channel' => array_get($input, 'sale_channel'),
            'sale_mobile'  => array_get($input, 'sale_mobile'),
            'sale_alias'   => array_get($input, 'sale_alias'),
            'campaign'     => array_get($input, 'campaign'),
            'shop_code'    => array_get($input, 'shop_code'),
            'url'          => array_get($input, 'url'),
            'ads_campaign' => array_get($input, 'ads_campaign')
        ];

        $this->setRequest($data);
    }

    public function setRequestSendSms($input)
    {
        $validation = new SaleValidation();
        $validation->parameter($input);
        $validation->rulesSendSms();
        $validation->exec();

        $datetime = new \DateTime();
        $datetime->setTimezone(new \DateTimeZone('Asia/Bangkok'));

        $sms_config = $this->getSMSConfig();
        $msisdn          = preg_replace('/^0/', '66', array_get($input, 'msisdn'));
        $sms_id          = str_pad(array_get($input, 'id', 0), 8, 0, STR_PAD_LEFT);
        $afc             = base64_encode("sms$sms_id");
        $url             = array_get($input, 'url');
        $campaign  = array_get($input, 'campaign');
        $link_url = $this->createSaleUrl($url, $afc, $campaign) . '&utm_source=tos-for-channel&utm_medium=sms&utm_campaign=truestore_tos-for-channel_awo';

        $link_url_escape = str_replace('&', '&amp;', $link_url);
        $message         = str_replace('$url', $link_url_escape, array_get($sms_config, 'message'));
        $ud              = array_get($sms_config, 'template') . ',' . $message;
        $scts            = $datetime->format('c');
        $data = $this->getXMLForSendSMS($msisdn, $ud, $scts, $sms_config);

        $this->setRequest($data);
    }

    private function getSMSConfig()
    {
        $model         = new TruemovehConfigModel();
        $result        = $model->findFirst('sms');
        $response      = $result ? $result->toArray() : [];
        $response_data = json_decode(array_get($response, 'value'), 1);
        return $response_data;
    }

    private function createSaleUrl($url, $afc, $campaign)
    {
        $link_url = preg_match("/\?$/", $url) ? $url . "afc=$afc" : $url . "&afc=$afc";
        if ($campaign && !str_contains($url, '&campaign=') && !str_contains($url, '?campaign=')) {
            $link_url .= "&campaign=$campaign";
        }

        return $link_url;
    }

    public function setRequestQr($input)
    {
        $validation = new SaleValidation();
        $validation->parameter($input);
        $validation->rulesSendSms();
        $validation->exec();

        $sms_id          = str_pad(array_get($input, 'id', 0), 8, 0, STR_PAD_LEFT);
        $afc             = base64_encode("sms$sms_id");
        $url             = array_get($input, 'url');
        $campaign  = array_get($input, 'campaign');
        $data = $this->createSaleUrl($url, $afc, $campaign) . '&utm_source=tos-for-channel&utm_medium=qr-code&utm_campaign=truestore_tos-for-channel_awo';

        $this->setRequest($data);
    }

    public function setRequestSendSmsSuccessBuyer($input)
    {
        $validation     = new SaleValidation();
        $validation->parameter($input);
        $validation->ruleSendSuccessSmsBuyer();
        $validation->exec();
        $datetime       = new \DateTime();
        $datetime->setTimezone(new \DateTimeZone('Asia/Bangkok'));
        $sms_config     = $this->getSMSSuccessBuyerConfig();
        $order_datetime = array_get($input, 'created_at');
        $send_to        = preg_replace('/^0/', '66', array_get($input, 'delivery_phone'));
        $msisdn         = array_get($input, 'tmh_sale.sale_mobile');
        $message = array_get($sms_config, 'message');
        $arr_message    = json_decode($message, true);
        $prepared_input = [
            'link'      => array_get($sms_config, 'url'),
            'MSISDN'    => $msisdn,
            'OrderID'   => array_get($input, 'secure_key'),
            'DDMMYY'    => date('d/m/Y', strtotime($order_datetime)),
            'HHMM'      => date('h:i', strtotime($order_datetime))
        ];

        foreach ($prepared_input as $key => $val) {
            $message    = str_replace(array_get($arr_message,$key), $val, $message);
        }

        $ud             = array_get($sms_config, 'template') . ',' . $message;
        $scts           = $datetime->format('c');
        $data           = $this->getXMLForSendSMS($send_to, $ud, $scts, $sms_config);
        $this->setRequest($data);
    }

    public function setRequestSendSmsSuccessSelller($input)
    {
        $validation     = new SaleValidation();
        $validation->parameter($input);
        $validation->ruleSendSuccessSmsSeller();
        $validation->exec();
        $datetime       = new \DateTime();
        $datetime->setTimezone(new \DateTimeZone('Asia/Bangkok'));
        $sms_config     = $this->getSMSSuccessSellerconfig();
        $order_datetime = array_get($input, 'created_at');
        $send_to        = preg_replace('/^0/', '66', array_get($input, 'tmh_sale.sale_mobile'));
        $message = array_get($sms_config, 'message');
        $arr_message    = json_decode($message, true);
        $msisdn = array_get($input, 'tmh_sale.msisdn');
        $prepared_input = [
            'link'      => array_get($sms_config, 'url'),
            'MSISDN'    => $msisdn,
            'OrderID'   => array_get($input, 'secure_key'),
            'DDMMYY'    => date('d/m/Y', strtotime($order_datetime)),
            'HHMM'      => date('h:i', strtotime($order_datetime))
        ];

        foreach ($prepared_input as $key => $val) {
            $message = str_replace(array_get($arr_message,$key), $val, $message);
        }

        $ud             = array_get($sms_config, 'template') . ',' . $message;
        $scts           = $datetime->format('c');
        $data           = $this->getXMLForSendSMS($send_to, $ud, $scts, $sms_config);

        $this->setRequest($data);
    }

    private function getSMSSuccessBuyerConfig()
    {
        $model         = new TruemovehConfigModel();
        $result        = $model->findFirst('sms_sale_payment_success_buyer');
        $response      = $result ? $result->toArray() : [];
        $response_data = json_decode(array_get($response, 'value'), 1);

        return $response_data;
    }

    private function getSMSSuccessSellerConfig()
    {
        $model         = new TruemovehConfigModel();
        $result        = $model->findFirst('sms_sale_payment_success_seller');
        $response      = $result ? $result->toArray() : [];
        $response_data = json_decode(array_get($response, 'value'), 1);

        return $response_data;
    }

    private function getXMLForSendSMS($send_to, $ud, $scts, $sms_config)
    {
        $lang       = array_get($sms_config, 'language', 'TH');
        $auth       = 'Basic ' . env('SALE_SMS_AUTH');
        $header     = [
            'Content-Type:application/xml',
            "Authorization:$auth",
            "Language:$lang",
        ];

        $xml        = '<message>
                    <sms type="mt">
                        <service-id>' . env('SALE_SMS_SERVICE_ID') . '</service-id>
                        <destination>
                            <address>
                                <number type="international">' . $send_to . '</number>
                            </address>
                        </destination>
                        <source>
                            <address>
                                <number type="abbreviated">' . env('SALE_SMS_ABBREVIATED') . '</number>
                            </address>
                        </source>
                        <ud type="text" encoding="unicode">' . $ud . '</ud>
                        <scts>' . $scts . '</scts>
                        <dro>false</dro>
                    </sms>
                </message>';

        $data = [
            'header' => $header,
            'body'   => $xml
        ];

        return $data;
    }

    public function setRequestValidateShopCode($input)
    {
        $validation = new SaleValidation();
        $validation->parameter($input);
        $validation->rulesValidateShopCode();
        $validation->exec();

        $data = [
            'correlatedId' => \Illuminate\Support\Str::uuid()->toString(),
            'saleCode'     => \Arr::get($input, 'sale_code'),
            'shopCode'     => \Arr::get($input, 'shop_code')
        ];

        $this->setRequest($data);
    }
}
