<?php

namespace App\Libraries\Validation;

class SaleValidation extends Validation
{
    public function rulesSms()
    {
        $rules = [
            'sale_id'      => 'required',
            'msisdn'       => 'required',
            'sale_channel' => 'required',
            'campaign'     => '',
            'sale_alias'   => '',
            'sale_mobile'  => '',
            'shop_code'    => 'required',
            'url'          => 'required',
            'ads_campaign' => ''
        ];

        $this->rules($rules);
    }
    public function rulesSendSms()
    {
        $rules = [
            'msisdn' => 'required',
            'url'    => 'required',
            'id'     => 'required',
        ];

        $this->rules($rules);
    }

    public function ruleSendSuccessSmsSeller()
    {
        $rules = [
            'tmh_sale.msisdn' => 'required',
            'secure_key' => 'required',
            'tmh_sale.sale_mobile' => 'required',
            'created_at' => 'required'
        ];

        $this->rules($rules);
    }

    public function ruleSendSuccessSmsBuyer()
    {
        $rules = [
            'tmh_sale.sale_mobile' => 'required',
            'secure_key'     => 'required',
            'delivery_phone' => 'required',
            'created_at'     => 'required'
        ];

        $this->rules($rules);
    }

    public function rulesValidateShopCode()
    {
        $rules = [
            'sale_code'     => 'required',
            'shop_code'     => 'required',
            'account_type'  => 'required'
        ];

        $this->rules($rules);
    }
}
