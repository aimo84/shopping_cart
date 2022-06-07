<?php

namespace App\Libraries\Validation;

class OrderValidation extends Validation
{
    public function rulesOfflinePlaceOrder()
    {
        $rules = [
            'form.selected_msisdn'              => 'required',
            'form.product_id'                   => 'required',
            'form.inventory_id'                 => 'required',
            'form.store_id'                     => 'required',
            'pricePlan.id'                      => 'required',
            'pricePlan.name'                    => 'required',
            'pricePlan.code'                    => 'required',
            'pricePlan.description'             => 'required',
            'pricePlan.sim_type'                => 'required|in:postpaid,prepaid',
            'pricePlan.price'                   => 'required|integer',
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
}
