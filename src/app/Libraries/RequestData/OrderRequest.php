<?php

namespace App\Libraries\RequestData;

use App\Libraries\Validation\OrderValidation;
use App\Services\LogService;
use App\Services\WlsService;

class OrderRequest extends BaseRequest
{
    private $offline_place_order_data = [];

    public function setRequestOfflinePlaceOrder($input)
    {
        $validation = new OrderValidation();
        $validation->parameter($input);
        $validation->rulesOfflinePlaceOrder();
        $validation->exec('Vhora:offline-confirm-validate-place-order');

        $this->setOfflinePlaceOrderData($input);
    }

    public function setOfflinePlaceOrderData($input)
    {
        $request = [
            "user_id"        => 0,
            "user_type"      => "guest",
            "first_name"     => array_get($input, 'form.firstname', 'vhora_firstname'),
            "last_name"      => array_get($input, 'form.lastname', 'vhora_lastname'),
            "mobile"         => array_get($input, 'form.msisdn', '0000000000'),
            "email"          => array_get($input, 'form.email', 'vhora@wemall.com'),
            "quantity"       => 1,
            "inventory_id"   => array_get($input, 'form.inventory_id'),
            "product_id"     => array_get($input, 'form.product_id'),
            "store_id"       => 'L' . array_get($input, 'form.store_id'),
            "device"         => "web",
            "app_id"         => "3",
            "channel"        => "TMH-Website",
            "redirect_url"   => env('SUCCESS_PAGE_URL', false),
            "section"        => "wemall",
            "payment_method" => "STOREOFFLINE",
        ];

        $request['first_name'] = !empty(array_get($request, 'first_name')) ? array_get($request, 'first_name') : 'vhora_firstname';
        $request['last_name']  = !empty(array_get($request, 'last_name')) ? array_get($request, 'last_name') : 'vhora_lastname';
        $request['mobile']     = !empty(array_get($request, 'mobile')) ? array_get($request, 'mobile') : '0000000000';

        $response      = WlsService::postPreparePlaceOrder('POST', $request);
        $response_data = json_decode(array_get($response, 1, '{}'), true);

        if (array_get($response, 0) !== 200 || !is_array($response_data)) {
            $place_order_data = [];
            LogService::writeServiceLog('Vhora:offline-confirm-prepare-place-order', json_encode($request), json_encode($response), date('d/m/Y H:i:s'));
        } else {
            $place_order_data                                     = array_get($response_data, 'data', []);
            $place_order_data['products'][0]['sim_meta']          = $this->setMetaSim($place_order_data, $input);
            $place_order_data['seller_detail']                    = $this->setDealerData($input);
            $place_order_data['payment_detail']['total']          = 0;
            $place_order_data['payment_detail']['payment_amount'] = 0;
            $place_order_data['summaries'][0]['value']            = 0;
            $place_order_data['summaries'][1]['value']            = 0;
        }

        $this->offline_place_order_data = $place_order_data;
    }

    public function getOfflinePlaceOrderData()
    {
        return $this->offline_place_order_data;
    }

    public function setMetaSim($place_order_data, $input)
    {
        return [
            [
                "number"          => array_get($input, 'form.selected_msisdn'),
                "sum"             => "",
                "name"            => array_get($place_order_data, 'products.0.title'),
                "sim_type"        => array_get($input, 'pricePlan.sim_type'),
                "advance_payment" => "",
                "product_info"    => [
                    "product_id"              => str_replace('L', '', array_get($place_order_data, 'products.0.product_id')),
                    "title"                   => array_get($place_order_data, 'products.0.title'),
                    "image"                   => array_get($place_order_data, 'products.0.image_url'),
                    "price"                   => array_get($input, 'pricePlan.price'),
                    "product_type"            => "sim",
                    "sim_type"                => array_get($input, 'pricePlan.sim_type'),
                    "propo_code"              => array_get($input, 'pricePlan.proposition_nas_code'),
                    "special_url"             => "https://alpha-www.wemall-dev.com/tmvh/sims/90171217",
                    "status"                  => "active",
                    "store_id"                => array_get($place_order_data, 'products.0.store_id'),
                    "inventory_id"            => array_get($place_order_data, 'products.0.inventory_id'),
                    "proposition_description" => array_get($input, 'pricePlan.proposition_term_short'),
                    "proposition_baseline"    => array_get($input, 'pricePlan.price'),
                    "price_plan_description"  => array_get($input, 'pricePlan.description'),
                ],
                "is_verify"       => "false",
                "thai_id"         => array_get($input, 'id.id'),
                "verify_time"     => "",
                "price_plan"      => [
                    "id"                     => array_get($input, 'pricePlan.id'),
                    "name"                   => array_get($input, 'pricePlan.name'),
                    "code"                   => array_get($input, 'pricePlan.code'),
                    "description"            => array_get($input, 'pricePlan.description'),
                    "sim_type"               => array_get($input, 'pricePlan.sim_type'),
                    "price"                  => array_get($input, 'pricePlan.price'),
                    "recommended"            => array_get($input, 'pricePlan.recommended'),
                    "proposition_nas_code"   => array_get($input, 'pricePlan.proposition_nas_code'),
                    "proposition_term_short" => array_get($input, 'pricePlan.proposition_term_short'),
                    "campaign_code"          => array_get($input, 'pricePlan.campaign_code'),
                ],
                "campaign_type"   => "vhora",
                "birth_date"      => date_format($this->setFormatBirthDate(array_get($input, 'form.birthdate')), 'd/m/Y'),
                "birth_time"      => array_get($input, 'form.birthtime'),
                "timezone"        => array_get($input, 'form.timezone'),
                "correlation_id"  => array_get($input, 'id.correlationId'),
                "berfuntong"      => [
                    "package_code" => array_get($input, 'form.package_code'),
                    "offline_shop" => array_get($input, 'form.shop_data_name', ''),
                ],
            ],
        ];
    }

    public function setDealerData($input)
    {
        return [
            'sale_code'    => array_get($input, 'shopOffline.saleCode'),
            'shop_code'    => array_get($input, 'shopOffline.shopCode'),
            'shop_name'    => array_get($input, 'shopOffline.shopName.th'),
            'sale_name_th' => array_get($input, 'shopOffline.saleName.th'),
            'sale_name_en' => array_get($input, 'shopOffline.saleName.en'),
            'meta'         => array_get($input, 'shopOffline'),
        ];
    }

    public function setFormatBirthDate($birth_date_data)
    {
        $birth_date = str_split($birth_date_data, 4);
        $date_month = array_get($birth_date, 0);
        $year       = array_get($birth_date, 1) - 543;

        return date_create_from_format('jmY', '' . $date_month . $year);
    }
}
