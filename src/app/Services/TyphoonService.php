<?php

namespace App\Services;

use Illuminate\Http\Request as LaravelRequest;
use Illuminate\Support\Arr;
use Redis;

class TyphoonService
{
    public static function checkCard($phone_no)
    {
        $header                           = self::getHeader("application/json");
        $fixed_parameter_list["base_url"] = env("AWS_GATEWAY_URL_TOL_SSV", false) . "/";
        $lrequest                         = new \Illuminate\Http\Request();
        $result                           = WlsService::operateRequestAction('typhoon/check-card?msisdn=' . $phone_no, 'GET', $lrequest, $header, $fixed_parameter_list);

        LogService::writeServiceLog(
            "checkCard",
            json_encode_unicode(["parameters" => "msisdn=$phone_no"]),
            json_encode_unicode($result),
            date('d/m/Y H:i:s')
        );

        if ($result[0] === 200) {
            return json_decode($result[1], true);
        }

        return false;
    }

    public static function checkWhitelist($phone_no)
    {
        $header = [
            'Content-Type' => 'application/json',
            'x-api-key'    => env('AWS_GATEWAY_KEY', false),
        ];

        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod('POST');
        $tmp_lrequest = ['msisdn' => $phone_no];
        $lrequest->replace($tmp_lrequest);

        $content = GuzzleService::postGuzzleRequest(
            'typhoon/new-white-lists',
            'post',
            $lrequest,
            $header,
            env('AWS_GATEWAY_URL', false) . '/'
        );

        LogService::writeServiceLog(
            'checkWhitelist',
            json_encode($lrequest->all()),
            json_encode($content),
            date('d/m/Y H:i:s')
        );

        $content_data   = json_decode($content[1], true);
        $header_code    = Arr::get($content_data, 'header.code');

        if ($content[0] === 200 && $header_code === '200') {
            return $content_data;
        }

        return false;
    }

    public static function markUse($body)
    {
        $header                           = self::getHeader("application/json");
        $fixed_parameter_list["base_url"] = env("AWS_GATEWAY_URL_TOL_SSV", false) . "/";
        $lrequest                         = new \Illuminate\Http\Request();
        $parameters                       = "msisdn_otp=" . array_get($body, 'msisdn_otp', '-') .
            "&msisdn=" . array_get($body, 'msisdn', '-') .
            "&type=" . array_get($body, 'type', '-') .
            "&status=success" .
            "&group_type=" . array_get($body, 'group_type', 'typhoon') .
            "&sku=" . array_get($body, 'sku', '-') .
            "&product_id=" . array_get($body, 'product_id', '-') .
            "&order_id=" . array_get($body, 'order_id', '-');
        $result = WlsService::operateRequestAction('typhoon/mark-use?' . $parameters, 'POST', $lrequest, $header, $fixed_parameter_list);

        LogService::writeServiceLog(
            "markUse",
            json_encode_unicode(["parameters" => $parameters]),
            json_encode_unicode($result),
            date('d/m/Y H:i:s')
        );

        if ($result[0] === 200) {
            return json_decode($result[1], true);
        }

        return $result;
    }

    public static function entPackPlaceorder($secure_key, $mobile_number, $package_detail, $mnp_mobile_number, $new_mobile_number, $token_type = '', $token_group_type = '')
    {
        $tmp_lrequest = new \Illuminate\Http\Request();

        $replace_array = [
            'data' => [
                'secure_key'        => $secure_key,
                'mobile_number'     => $mobile_number,
                'package_name'      => array_get($package_detail, 'package_name'),
                'package_image_url' => array_get($package_detail, 'package_image_url'),
                'package_matcode'   => array_get($package_detail, 'package_matcode'),
                'package_option'    => array_get($package_detail, 'package_option'),
                'package_code'      => array_get($package_detail, 'package_code'),
                'mnp_mobile_number' => $mnp_mobile_number,
                'new_mobile_number' => $new_mobile_number,
                'sync_status'       => 'pending',
            ],
        ];

        if (!empty($token_type)) {
            $replace_array["data"]["type"] = $token_type;
        }
        if (!empty($token_group_type)) {
            $replace_array["data"]["group_type"] = $token_group_type;
        }

        $tmp_lrequest->replace($replace_array);

        $result = WeOmniService::postTrueIdEntertainmentPackage($tmp_lrequest);

        if ($result[0] === 201) {
            return [201, json_decode($result[1], true)];
        }

        return $result;
    }

    public static function getHeader($type = 'default')
    {
        $header = [];
        switch ($type) {
            case "application/json":
                $header = [
                    "Content-Type" => "application/json",
                    "x-api-key"    => env("X_API_KEY_TOL_SSV", false),
                ];
                break;
            default:
                $header = [
                    "x-api-key" => env('X_API_KEY_TOL_SSV', false),
                ];
                break;
        }

        return $header;
    }

    public static function putEntPack(LaravelRequest $lrequest)
    {
        $tmp_array               = [];
        $tmp_array["cart_hash"]  = $lrequest->input('cart_hash');
        $tmp_array["matcode"]    = $lrequest->input('matcode');
        $tmp_array["tmvh_token"] = $lrequest->header('tmvh-token');

        if (empty($tmp_array["tmvh_token"])) {
            $final_response = [
                "message" => [
                    "en" => "not found truemove h token",
                    "th" => "ไม่พบข้อมูล truemove h token",
                ],
                "is_pass" => false,
            ];

            return [404, $final_response];
        }

        $aes_wecamp_result               = WeOmniService::getAesWecamp($tmp_array["tmvh_token"]);
        $is_pass_ent_pack_priv           = array_get($aes_wecamp_result, '1.is_pass_ent_pack_priv');
        $type                            = array_get($aes_wecamp_result, '1.type');
        $cart_type                       = array_get($aes_wecamp_result, '1.cart_type');
        $tmp_array["original_plaintext"] = array_get($aes_wecamp_result, '1.original_plaintext');
        $segment                         = array_get($aes_wecamp_result, '1.segment');
        $lifestyle                       = array_get($aes_wecamp_result, '1.lifestyle');
        $tmp_array["cart_type"]          = $cart_type;
        $tmp_array["type"]               = $type;
        $tmp_array["phone_no"]           = array_get($aes_wecamp_result, '1.phone_no');
        $tmp_array["thai_id"]            = array_get($aes_wecamp_result, '1.thai_id');
        $tmp_array["voucher_code"]       = array_get($aes_wecamp_result, '1.voucher_code');

        $product_id   = $lrequest->input('product_id');
        $inventory_id = $lrequest->input('inventory_id');
        $nas_code     = $lrequest->input('nas_code');

        if (!empty($segment) && !empty($product_id)) {
            Redis::set('truestore:segment_cart:' . $tmp_array["cart_hash"] . ':' . $product_id . ':content', json_encode([
                'segment'   => $segment,
                'lifestyle' => $lifestyle,
            ]));

            $final_response = [
                "message" => ["en" => "add to cart successful", "th" => "เพิ่มตะกร้าเรียบร้อย"],
                "is_pass" => true,
            ];

            return [200, $final_response];
        }

        if (empty($type)) {
            $final_response = [
                "message" => [
                    "en" => "invalid truemove h token",
                    "th" => "truemove h token ผิดพลาด",
                ],
                "is_pass" => false,
            ];

            return [400, $final_response];
        }

        if (!empty($product_id) && !empty($inventory_id)) {
            $get_redis_ent_pack_from_main_product_list             = Redis::get('truestore:product_id_entertainment_packages:product_id:' . $product_id . ':redis_data');
            $json_decode_get_redis_ent_pack_from_main_product_list = json_decode($get_redis_ent_pack_from_main_product_list, true);
        }

        $is_bypass_nas_code = false;
        $is_bypass_mnp_sim  = false;

        if (!empty($nas_code) && !empty($product_id)) {
            $tmp_nas_code_filter_list = Redis::get('truestore:typhoon_filter_sim_nascode:product_id:' . $product_id . ':redis_data');

            if (!empty($tmp_nas_code_filter_list)) {
                $tmp_nas_code_filter_list = json_decode($tmp_nas_code_filter_list, true);
                $tmp_nas_code_content     = array_values($tmp_nas_code_filter_list);
                $tmp_nas_codes_list       = array_column($tmp_nas_code_content, 'nas_code');
                $tmp_nas_codes            = array_merge(...$tmp_nas_codes_list);
                $is_bypass_nas_code       = in_array($nas_code, $tmp_nas_codes);
            }
        }

        if (!empty($product_id)) {
            $product_id = $lrequest->input('product_id');
            // check mnp sim
            $mnp_sim_redis = Redis::get('typhoon:mnp:' . $product_id . ':redis-data');
            $mnp_auto_redis = Redis::get('mnp-auto:products:' . $product_id);
            if (!empty($mnp_sim_redis) || !empty($mnp_auto_redis)) {
                $mnp_sim_redis     = $mnp_sim_redis ?
                    json_decode($mnp_sim_redis, true) :
                    json_decode($mnp_auto_redis, true);
                $full_type         = empty($cart_type) ? $type : $type . '-' . strtolower($cart_type);
                $is_bypass_mnp_sim = in_array($full_type, $mnp_sim_redis);
            }
        }

        $typhoon_products_redis = Redis::get('typhoon:products:' . $product_id);
        $is_bypass_typhoon_sim  = !empty($typhoon_products_redis);

        if ($is_pass_ent_pack_priv && !$is_bypass_nas_code && !$is_bypass_mnp_sim && !$is_bypass_typhoon_sim) {
            if (!(isset($json_decode_get_redis_ent_pack_from_main_product_list) &&
                is_array($json_decode_get_redis_ent_pack_from_main_product_list))
            ) {
                $final_response = [
                    "message" => ["en" => "not found product_id, inventory_id", "th" => "ไม่พบข้อมูล product_id, inventory_id"],
                    "is_pass" => false,
                ];

                return [404, $final_response];
            }

            $matcode_index_list = array_flip(array_column($json_decode_get_redis_ent_pack_from_main_product_list, "matcode"));

            if (!isset($matcode_index_list[$tmp_array["matcode"]])) {
                $final_response = [
                    "message" => ["en" => "not found matcode", "th" => "ไม่พบข้อมูล matcode"],
                    "is_pass" => false,
                ];

                return [404, $final_response];
            }

            $index                                   = $matcode_index_list[$tmp_array["matcode"]];
            $tmp_array["entertainment_package_data"] = $json_decode_get_redis_ent_pack_from_main_product_list[$index];
        }

        $tmp_array["entertainment_package_data"]["main_product_id"]   = $product_id;
        $tmp_array["entertainment_package_data"]["main_inventory_id"] = $inventory_id;

        $tmp_credit_card_only_code_list = Redis::get('credit_card_only:code_list');
        $credit_card_only_code_list     = !empty($tmp_credit_card_only_code_list) ? json_decode($tmp_credit_card_only_code_list, true) : [];
        if (in_array($cart_type, $credit_card_only_code_list)) {
            $tmp_array["credit_card_only"] = true;
        }

        Redis::set('truestore:ent_pack_cart:' . $tmp_array["cart_hash"] . ':content', json_encode($tmp_array));
        $final_response = [
            "message" => ["en" => "add relation between entertainment package and cart successful", "th" => "ผูกตะกร้ากับ entertainment package เรียบร้อยแล้ว", "input" => $tmp_array, "type" => $type],
            "is_pass" => true,
        ];

        return [200, $final_response];
    }

    public static function getVerificationRequiredRedis($product_id)
    {
        $redis_data = Redis::get('typhoon:products:' . $product_id . ':verification_required');
        if (empty($redis_data)) {
            return false;
        }

        return json_decode($redis_data, true);
    }

    public static function checkStatus($voucher_code, $thai_id)
    {
        $header = [
            'Content-Type' => 'application/json',
            'x-api-key'    => env('X_API_KEY_TOL_SSV', false),
        ];

        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod('POST');
        $tmp_lrequest = [
            'voucherCode' => $voucher_code,
            'thaiId'      => $thai_id,
        ];
        $lrequest->replace($tmp_lrequest);

        $content = GuzzleService::postGuzzleRequest(
            'pre-booking/check-voucher',
            'post',
            $lrequest,
            $header,
            env('AWS_GATEWAY_URL_TOL_SSV', false) . '/'
        );

        LogService::writeServiceLog(
            'checkStatus',
            json_encode($lrequest->all()),
            json_encode($content),
            date('d/m/Y H:i:s')
        );

        return $content;
    }

    public static function markuseVoucher($voucher_code, $thai_id, $booking_ref)
    {
        $header = [
            'Content-Type' => 'application/json',
            'x-api-key'    => env('X_API_KEY_TOL_SSV', false),
        ];

        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod('POST');
        $tmp_lrequest = [
            'voucherCode' => $voucher_code,
            'thaiId'      => $thai_id,
            'bookingRef'  => $booking_ref
        ];
        $lrequest->replace($tmp_lrequest);

        $content = GuzzleService::postGuzzleRequest(
            'pre-booking/markuse-voucher',
            'post',
            $lrequest,
            $header,
            env('AWS_GATEWAY_URL_TOL_SSV', false) . '/'
        );

        LogService::writeServiceLog(
            'markuseVoucher',
            json_encode($lrequest->all()),
            json_encode($content),
            date('d/m/Y H:i:s')
        );

        return $content;
    }
}
