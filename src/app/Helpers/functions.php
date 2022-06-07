<?php
use Illuminate\Support\Arr;
// Convert data

// -- For placeorder data
function convert_store_to_placeorder_object($store_detail)
{
    return [
        'store_id'    => $store_detail['id'],
        'seller_id'   => $store_detail['user_id'],
        'store_user'  => $store_detail['slug'],
        'seller_name' => $store_detail['first_name'] . ' ' . $store_detail['last_name'],
        'store_name'  => $store_detail['title']['th'],
        'address'     => '-',
        'phone'       => isset($store_detail['phone']) && !empty($store_detail['phone']) ? $store_detail['phone'] : '0123456789',
        'email'       => $store_detail['email'],
        'category_id' => $store_detail['category_id'],
    ];
}

function convert_product_to_placeorder_object($cart_product, $store_detail, $product_detail)
{
    $placeorder_data = [
        'is_freebie'           => false,
        'meta'                 => '',
        'product_type'         => $cart_product['product_type'],
        'promotion'            => [],
        'product_id'           => $cart_product['id'],
        'store_id'             => $store_detail['id'],
        'quantity'             => $cart_product['quantity'],
        'has_freebie'          => false,
        'freebies'             => [],
        'has_verify'           => 0,
        'warehouse_sku'        => $cart_product['inventory']['warehouse_sku'],
        'warehouse_code'       => $store_detail['warehouse']['warehouse_code'],
        'weight'               => $cart_product['inventory']['weight'],
        'prepare_ship_time'    => $cart_product['inventory']['shipping_period'],
        'category_id'          => $cart_product['last_plaza_category'],
        'category_name'        => implode('/', array_map(function ($el) {
            return $el['title'];
        }, array_reverse($product_detail['category_list']))),
        'com_fee_percent'      => 0,
        'title'                => $cart_product['title']['th'],
        'option'               => '',
        'shipprice_peritem'    => 0,
        'discount'             => 0,
        'flashsale'            => 0,
        'campaign_fee_percent' => 0,
        'com_discount_price'   => 0,
        'images'               => $cart_product['images'][0]['url'],
        'stock_type'           => $store_detail['warehouse']['stock_type'],
        'inventory_id'         => $cart_product['inventory']['id'],
        'sku'                  => $cart_product['inventory']['sku'],
        'cost_price'           => $cart_product['inventory']['cost_price'],
        'price'                => $cart_product['inventory']['price'],
        'final_price'          => $cart_product['inventory']['price'],
        'compare_at_price'     => $cart_product['inventory']['compare_at_price'],
        'image_url'            => $cart_product['images'][0]['url'],
    ];

    if (array_key_exists('sim_meta', $cart_product)) {
        $placeorder_data['sim_meta'] = [$cart_product['sim_meta']];
    }

    return $placeorder_data;
}

// Placeorder Data
function placeorder_initial_data($customer_detail, $billing_address, $delivery_address, $id_card_address, $user_info_billing_addrrss)
{
    $placeorder_data = json_decode(
        '{
                            "oneTimeCardToken": null,
                            "config": {
                                "app_id": 3,
                                "redirect_url": "",
                                "device": "web",
                                "in_page": 1
                            },
                            "store_detail": [],
                            "payment_detail": {
                                "company": "wetrust",
                                "discount": 0,
                                "currency_code": "THB",
                                "com_vat": 2,
                                "com_ship_fee": 1.11
                            },
                            "shipping_detail": {},
                            "customer_detail": {},
                            "delivery_address": {},
                            "address_location": {
                                "lat": "",
                                "lng": ""
                            },
                            "billing_address": {},
                            "products": [],
                            "promotions": [],
                            "summaries": [],
                            "section": "wemall",
                            "channel": "TMH-Website",
                            "employee_code": "",
                            "app_ids": "3,4"
                        }',
        true
    );

    $placeorder_data["config"]["redirect_url"] = multiEnv(env('SUCCESS_PAGE_URL', false));

    // customer detail
    $placeorder_data['customer_detail']         = $customer_detail;
    $placeorder_data['customer_detail']['id']   = 0;
    $placeorder_data['customer_detail']['ip']   = '127.0.0.1';
    $placeorder_data['customer_detail']['type'] = 'email';

    // billing, delivery address
    $master_data = [];
    foreach (['city', 'district', 'province'] as $suggest_type) {
        $master_data[$suggest_type] = json_decode(file_get_contents(storage_path('api/config/sample_page_when_offline/' . 'th_' . $suggest_type . '.json')), true);
    }

    $district_index = array_search($delivery_address['district_id'], array_column($master_data['district'], 'id'));
    $city_index     = array_search($delivery_address['city_id'], array_column($master_data['city'], 'id'));
    $province_index = array_search($delivery_address['province_id'], array_column($master_data['province'], 'id'));

    $delivery_address['district'] = $master_data['district'][$district_index]['name'];
    $delivery_address['city']     = $master_data['city'][$city_index]['name'];
    $delivery_address['province'] = $master_data['province'][$province_index]['name'];
    $delivery_address['branch']   = '-';
    $delivery_address['company']  = '-';
    $delivery_address['country']  = 'ประเทศไทย';

    $district_index = array_search($billing_address['district_id'], array_column($master_data['district'], 'id'));
    $city_index     = array_search($billing_address['city_id'], array_column($master_data['city'], 'id'));
    $province_index = array_search($billing_address['province_id'], array_column($master_data['province'], 'id'));

    $billing_address['district'] = $master_data['district'][$district_index]['name'];
    $billing_address['city']     = $master_data['city'][$city_index]['name'];
    $billing_address['province'] = $master_data['province'][$province_index]['name'];
    $billing_address['branch']   = array_get($billing_address, 'branch', null);
    $billing_address['company']  = array_get($billing_address, 'company', null);

    if (!isset($billing_address['branch'])) {
        $billing_address['branch'] = '-';
    }

    if (!isset($billing_address['company'])) {
        $billing_address['company'] = '-';
    }

    if (!isset($billing_address['firstname'])) {
        $billing_address['firstname'] = ' ';
    }

    if (!isset($billing_address['lastname'])) {
        $billing_address['lastname'] = ' ';
    }

    $district_index = array_search($id_card_address['district_id'], array_column($master_data['district'], 'id'));
    $city_index     = array_search($id_card_address['city_id'], array_column($master_data['city'], 'id'));
    $province_index = array_search($id_card_address['province_id'], array_column($master_data['province'], 'id'));

    $id_card_address['district'] = $master_data['district'][$district_index]['name'];
    $id_card_address['city']     = $master_data['city'][$city_index]['name'];
    $id_card_address['province'] = $master_data['province'][$province_index]['name'];

    $district_index = array_search($user_info_billing_addrrss['district_id'], array_column($master_data['district'], 'id'));
    $city_index     = array_search($user_info_billing_addrrss['city_id'], array_column($master_data['city'], 'id'));
    $province_index = array_search($user_info_billing_addrrss['province_id'], array_column($master_data['province'], 'id'));

    $user_info_billing_addrrss['district'] = $master_data['district'][$district_index]['name'];
    $user_info_billing_addrrss['city']     = $master_data['city'][$city_index]['name'];
    $user_info_billing_addrrss['province'] = $master_data['province'][$province_index]['name'];

    $placeorder_data['billing_address']            = $billing_address;
    $placeorder_data['billing_address']['country'] = 'ประเทศไทย';
    $placeorder_data['delivery_address']           = $delivery_address;
    $placeorder_data['id_card_address']            = $id_card_address;
    $placeorder_data['user_info_billing_addrrss']  = $user_info_billing_addrrss;

    return $placeorder_data;
}

function placeorder_add_payment_data($placeorder_data, $products, $stores, $payment_detail)
{
    // add all stores, products to placeorder
    $temp_placeorder_data                 = $placeorder_data;
    $temp_placeorder_data['products']     = $products;
    $temp_placeorder_data['store_detail'] = $stores;

    // shipping detail + calculation
    $total = 0;
    foreach ($products as $product) {
        $total += $product['price'];
    }

    $shipping_fee = 0;

    $temp_placeorder_data['shipping_detail'] = [
        'company'     => 'Custom',
        'method'      => 'WeMall',
        'weight_unit' => 'kg',
        'price'       => $shipping_fee,
    ];

    // payment detail + summaries price
    $temp_placeorder_data['payment_detail']['method']  = $payment_detail['method'];
    $temp_placeorder_data['payment_detail']['gateway'] = Arr::get($payment_detail, 'gateway');
    if ($temp_placeorder_data['payment_detail']['method'] === 'CCW') {
        $temp_placeorder_data['payment_detail']['credit_number'] = $payment_detail['credit_number'];
    }
    $temp_placeorder_data['payment_detail']['total']          = $total + $shipping_fee;
    $temp_placeorder_data['payment_detail']['payment_amount'] = $total;
    $temp_placeorder_data['summaries']                        = [
        [
            'code'  => 'sub_total',
            'title' => 'Sub-Total',
            'value' => $total,
            'meta'  => 'meta',
        ],
        [
            'code'  => 'total',
            'title' => 'Total',
            'value' => $total + $shipping_fee,
            'meta'  => '',
        ],
        [
            'code'  => 'shipping',
            'title' => 'Shipping',
            'value' => $shipping_fee,
            'meta'  => '',
        ],
    ];

    if (isset($payment_detail['card_token'])) {
        $temp_placeorder_data['payment_detail']['card_token'] = array_get($payment_detail, 'card_token');
    }

    if (isset($payment_detail['o_card_id'])) {
        $temp_placeorder_data['payment_detail']['o_card_id'] = array_get($payment_detail, 'o_card_id');
    }

    return $temp_placeorder_data;
}

function convertSatangToBaht($number)
{
    $number = number_format($number/100, 2, '.', ',');

    if (strpos(rtrim(rtrim($number, '0'), '.'), '.') === false) {

        return rtrim(rtrim($number, '0'), '.');
    }

    return $number;
}

function wrapPlaceOrderAmountGreaterError($error_description, $body, $status_code)
{
    if (is_string($error_description) && strpos($error_description, 'amount_greater') !== false) {
        $amount                = convertSatangToBaht(substr($error_description, (strrpos($error_description, '_') + 1)));
        $body["message"]["en"] = "The total amount must exceeds THB $amount for instalment sale. We apologize for such inconvenience";
        $body["message"]["th"] = "ขออภัยค่ะ ยอดชำระต้องมากกว่า $amount บาท สำหรับการผ่อนชำระครั้งนี้";
        $status_code           = 422;
    } else if (is_string($error_description) && strpos($error_description, 'amount_should_more_than_or_equal_') !== false) {
        $amount                = convertSatangToBaht(substr($error_description, (strrpos($error_description, '_') + 1)));
        $body["message"]["en"] = "The total amount must exceeds or equal THB $amount for instalment sale. We apologize for such inconvenience";
        $body["message"]["th"] = "ขออภัยค่ะ ยอดชำระต้องมากกว่าหรือเท่ากับ $amount บาท สำหรับการผ่อนชำระครั้งนี้";
        $status_code           = 422;
    }else if (is_string($error_description) && strpos($error_description, 'amount_less_than_or_equal_') !== false) {
        $amount                = convertSatangToBaht(substr($error_description, (strrpos($error_description, '_') + 1)));
        $body["message"]["en"] = "The total amount must be less than or equal THB $amount for instalment sale. We apologize for such inconvenience";
        $body["message"]["th"] = "ขออภัยค่ะ ยอดชำระต้องน้อยกว่าหรือ $amount บาท สำหรับการผ่อนชำระครั้งนี้";
        $status_code           = 422;
    }

    return ['body' => $body, 'status_code' => $status_code];
}

function json_encode_unicode($data)
{
    return json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_NUMERIC_CHECK);
}

function multiEnv($data)
{
    if (!$data) return $data;

    $http_host = Arr::get($_SERVER, 'HTTP_HOST');
    $list      = explode('/', $data);

    foreach ($list as $key => $value) {
        if (strpos($value, '0.0.0.0') !== false) {
            return $data;
        }
        if (strpos($value, 'pre-store') !== false) {
            $list[$key] = $http_host;
        }
    }

    return implode('/', $list);
}

/**
 * getShortPaymentMethod
 * @param string $payment_method
 * @return string
 */
function getShortPaymentMethod($payment_method)
{
    $payment_method = strtoupper($payment_method);

    if (in_array($payment_method, ['OMISEEW', 'WEOMNIEW', 'EW'])) {
        $payment_method = 'ew';
    } elseif (in_array($payment_method, ['OMISECCW', 'WEOMNICCW', 'CCW'])) {
        $payment_method = 'ccw';
    } elseif (in_array($payment_method, ['OMISEINSTM', 'WEOMNIINSTM', 'INSTM'])) {
        $payment_method = 'instm';
    }

    return strtolower($payment_method);
}

/**
 * Returns only array entries listed in a whitelist
 *
 * @param array $array original array to operate on
 * @param array $whitelist keys you want to keep
 * @return array
 */
function arrayWhitelist($array, $whitelist) {
    return array_intersect_key(
        $array, 
        array_flip($whitelist)
    );  
}

function alert($value, $die = false)
{
    echo "<pre>";
    print_r($value);
    echo "</pre>";
    if ($die) die;
}

function resizeUrlUpload($url, $slug, $file_name, $options1 = false, $options2 = false)
{
    $opt1         = [];
    $opt2         = [];
    $basic_params = ['w' => 'width', 'h' => 'height', 'c' => 'crop', 'g' => 'gravity'];

    if ($options1) {
        foreach ($basic_params as $k => $v) {
            if (isset($options1[$k])) {
                $opt1[] = $k . '_' . $options1[$k];
            }
        }
        if (empty($options1['c'])) {
            $opt1[] = 'c_thumb';
        }
        $opt1 = implode(',', $opt1);
    }

    if ($options2) {
        foreach ($basic_params as $k => $v) {
            if (isset($options2[$k])) {
                $opt2[] = $k . '_' . $options2[$k];
            }
        }
        if (empty($options2['c'])) {
            $opt2[] = 'c_thumb';
        }
        $opt2 = implode(',', $opt2);
        $opt2 = '/' . $opt2;
    }

    $info = pathinfo($file_name);
    $id   = Arr::get($info, 'filename');
    $url  = env('RESIZE_URL', 'https://res.wemall-dev.com') . '/portal/' . $opt1 . $opt2 . '/' . $id . '/' . $slug . '.' . Arr::get($info, 'extension') . '?url=' . urlencode($url);

    return $url;
}

/**
 * checkReserveNumber
 *
 * @param string $campaign_type
 * @return boolean
 */
function checkReserveNumber($campaign_type)
{   
    if (in_array(strtolower($campaign_type), ['vhora', 'sim_only'])) {
        return true;
    }

    return false;
}

/**
 * check3GwAndConvertType
 *
 * @param array $params
 * @return string ex. sim_only_3gw
 */
function check3GwAndConvertType($params)
{
    $campaign_type   = Arr::get($params, 'campaign_type');
    $sim_source_type = Arr::get($params, 'sim_source_type');
    $payment_method  = Arr::get($params, 'payment_method');

    if (strtolower($sim_source_type) !== 'e-sim' && strtoupper($payment_method) !== 'STOREOFFLINE') {
        return $campaign_type;
    }

    return $campaign_type . "_3gw";
}
