<?php

namespace App\Libraries\Validation;

class VhoraOfflineValidation extends Validation
{
    public function rulesLogin()
    {
        $rules = [
            'type' => 'required|in:employee,dealer',
        ];

        $this->rules($rules);
    }

    public function rulesLogout()
    {
        $rules = [
            'type' => 'required|in:employee,dealer',
            'key' => 'required'
        ];

        $this->rules($rules);
    }

    public function rulesVerify()
    {
        $rules = [
            'sim_type'     => 'required|in:postpaid,prepaid',
            'id_card'      => 'required|digits:13',
            'shop_code'    => 'required',
            'birth_date'   => 'required|digits:8',
            'company_code' => 'required',
            'proposition'  => 'required',
        ];

        $this->rules($rules);
    }

    public function rulesGetDealerInfo()
    {
        $rules = [
            'sale_code'   => 'required_without:shop_code',
            'shop_code'   => 'required_without:sale_code',
            'page_size'   => 'integer',
            'page_number' => 'integer',
        ];

        $this->rules($rules);
    }

    public function rulesCustomerScanned()
    {
        $rules = [
            'shop_code' => 'required'
        ];

        $this->rules($rules);
    }

    public function rulesConfirm()
    {
        $rules = [
            'form.selected_msisdn'              => 'required',
            'pricePlan.id'                      => 'required',
            'pricePlan.name'                    => 'required',
            'pricePlan.code'                    => 'required',
            'pricePlan.description'             => 'required',
            'pricePlan.sim_type'                => 'required|in:postpaid,prepaid',
            'pricePlan.price'                   => 'required',
            'pricePlan.recommended'             => 'required',
            'pricePlan.proposition_nas_code'    => 'required',
            'pricePlan.proposition_term_short'  => 'required',
            'shopOffline.shopCode'              => 'required',
            'shopOffline.shopName'              => 'required',
            'id.id'                             => 'required|digits:13',
            'id.correlationId'                  => 'required',
        ];

        $this->rules($rules);
    }

    public function rulesSubmitPartialOrderOffline()
    {
        $rules = [
            'id.id'                   => 'required|digits:13',
            'form.phone_submit'       => 'required',
            'id.correlationId'        => 'required',
            'pricePlan.sim_type'      => 'required|in:postpaid,prepaid',
            'form.selected_msisdn'    => 'required',
            'pricePlan.price'         => 'required',
            'form.proposition_amdoc'  => 'required',
        ];

        $this->rules($rules);
    }
}
