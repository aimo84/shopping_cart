<?php

namespace App\Services;

use Redis;
use Illuminate\Support\Str;

class WeOmniService
{
    public static function postRequestAccessToken()
    {
        $url    = "uaa/oauth/token";
        $header = TolSelfService::getHeader('application/x-www-form-urlencoded');

        $header["Authorization"] = "Basic " . env("TOL_SSV_BASIC_AUTH_TOKEN", false);

        $fixed_parameter_list = [];

        $method       = "post";
        $tmp_lrequest = new \Illuminate\Http\Request();
        $tmp_lrequest->setMethod(strtoupper($method));

        $request_parameter               = [];
        $request_parameter["grant_type"] = "client_credentials";
        $tmp_lrequest->replace($request_parameter);

        $fixed_parameter_list["base_url"] = env("WEOMNI_URL_TOL_SSV", false) . "/";

        $tmp_redis_content = Redis::get('store-tol-self-service:weomni:access-token');

        if (!Redis::exists('store-tol-self-service:weomni:access-token')) {
            $result = WlsService::operateRequestAction($url, $method, $tmp_lrequest, $header, $fixed_parameter_list);
            Redis::set('store-tol-self-service:weomni:access-token', json_encode($result), 'EX', 60 * 9);
        } else {
            $tmp_redis_content = Redis::get('store-tol-self-service:weomni:access-token'); // Get accesstoken
            $result            = json_decode($tmp_redis_content, true);
        }

        return $result;
    }

    public static function tolProductListContent($lrequest)
    {
        $request_token        = self::postRequestAccessToken();
        $request_token_decode = json_decode($request_token[1], true);

        $project_id  = env('TOL_SSV_PROJECT_ID', false);
        $current_url = "/cms/api/projects/$project_id/c/tol-products";

        $method = 'GET';
        $header = TolSelfService::getHeader('Authorization');

        $fixed_parameter_list["base_url"] = env("WEOMNI_URL_TOL_SSV", false);
        $result                           = WlsService::operateRequestAction($current_url, $method, $lrequest, $header, $fixed_parameter_list);

        if ($result[0] == 200) {
            $result_json    = json_decode($result[1], true);
            $convert_result = [
                0 => 200,
                [],
            ];
            foreach ($result_json as $item) {
                $convert_result[1][] = [
                    'product_id'   => array_get($item, 'id'),
                    'project_id'   => array_get($item, 'projectId'),
                    'product_data' => array_get($item, 'data'),
                ];
            }
        } else {
            $convert_result = [
                0 => array_get($result, 'status'),
                [
                    'message'       => array_get($result, 'error'),
                    'message_error' => array_get($result, 'message'),
                ],
            ];
        }

        return $convert_result;
    }

    public static function tolProductListContentwithContentId($lrequest)
    {
        $request_token        = self::postRequestAccessToken();
        $request_token_decode = json_decode($request_token[1], true);
        $request_input        = $lrequest->all();
        $content_id           = array_get($request_input, 'content_id', '');

        $project_id  = env('TOL_SSV_PROJECT_ID', false);
        $current_url = "/cms/api/projects/$project_id/c/tol-products/$content_id";

        $method = 'GET';
        $header = TolSelfService::getHeader('Authorization');

        $tmp_lrequest = new \Illuminate\Http\Request();
        $tmp_lrequest->setMethod(strtoupper($method));

        $fixed_parameter_list["base_url"] = env("WEOMNI_URL_TOL_SSV", false);

        $result = WlsService::operateRequestAction($current_url, $method, $lrequest, $header, $fixed_parameter_list);

        return $result;
    }

    public static function tolRegisterListContent($lrequest)
    {
        $project_id        = env('TOL_SSV_PROJECT_ID', false);
        $current_url       = "/cms/api/projects/$project_id/c/tol-register";
        $pwd               = env("PWD_ENCRYPT_FUNCTION_DEVICE_BUNDLE");
        $id_number_encrypt = WlsService::postEncryptDeviceBundle($pwd, $lrequest->input('id_number'));

        $method = 'GET';
        $header = TolSelfService::getHeader('Authorization');

        $tmp_lrequest = new \Illuminate\Http\Request();
        $tmp_lrequest->setMethod(strtoupper($method));

        $fixed_parameter_list["base_url"] = env("WEOMNI_URL_TOL_SSV", false);
        $fixed_parameter_list             = [
            'base_url'     => env("WEOMNI_URL_TOL_SSV", false),
            'data.id_card' => $id_number_encrypt,
        ];
        $result = WlsService::operateRequestAction($current_url, $method, $lrequest, $header, $fixed_parameter_list);

        return $result;
    }

    public static function tolRegisterCreateContent($lrequest)
    {
        $request_token        = self::postRequestAccessToken();
        $request_token_decode = json_decode($request_token[1], true);

        $project_id  = env('TOL_SSV_PROJECT_ID', false);
        $current_url = "/cms/api/projects/$project_id/c/tol-register";

        $method = 'POST';
        $header = TolSelfService::getHeader('Authorization');

        $fixed_parameter_list["base_url"] = env("WEOMNI_URL_TOL_SSV", false);

        $result = WlsService::operateRequestAction($current_url, $method, $lrequest, $header, $fixed_parameter_list);

        return $result;
    }

    public static function tolRegisterUpdateContent($lrequest, $content_id = '')
    {
        $request_token        = self::postRequestAccessToken();
        $request_token_decode = json_decode($request_token[1], true);
        if ($lrequest->has('content_id')) {
            $content_id = $lrequest->input('content_id');
        }

        $project_id   = env('TOL_SSV_PROJECT_ID', false);
        $current_url  = "/cms/api/projects/$project_id/c/tol-register/$content_id";
        $access_token = array_get($request_token_decode, 'access_token', false);

        $method = 'put';
        $header = TolSelfService::getHeader('Authorization');

        $tmp_lrequest = new \Illuminate\Http\Request();
        $tmp_lrequest->setMethod(strtoupper($method));

        $fixed_parameter_list["base_url"] = env("WEOMNI_URL_TOL_SSV", false);

        $result = WlsService::operateRequestAction($current_url, $method, $lrequest, $header, $fixed_parameter_list);

        return $result;
    }

    public static function postGetDeviceOnlyDiscount($inventory_id_list)
    {
        $tmp_header                              = TolSelfService::getHeader('Authorization');
        $tmp_query_data_device_only              = [];
        $tmp_query_data_device_only["channel"]   = "wemall";
        $tmp_query_data_device_only["attribute"] = ["a" => "b"];
        $tmp_query_data_device_only["cart"]      = ["items" => []];
        foreach ($inventory_id_list as $tmp_inventory_id) {
            $tmp_query_data_device_only["cart"]["items"][] = ["sku" => $tmp_inventory_id, "tags" => []];
        }
        $project_id                       = env('TOL_SSV_PROJECT_ID', false);
        $current_url                      = "promotion/api/projects/$project_id/search";
        $fixed_parameter_list             = [];
        $fixed_parameter_list["base_url"] = env("WEOMNI_URL_TOL_SSV", false) . "/";
        $fixed_parameter_list             = array_merge($fixed_parameter_list, $tmp_query_data_device_only);

        $url          = $current_url;
        $tmp_lrequest = new \Illuminate\Http\Request();
        $tmp_lrequest->replace($fixed_parameter_list);
        // start of check cache
        // add cache
        $tmp_redis_content = Redis::get('store-cache:api:url:' . $url . ':body:' . json_encode($tmp_lrequest->all()) . ':content');

        if (!empty($tmp_redis_content)) {
            $content_device_only = json_decode($tmp_redis_content, true);
        } else {
            $content_device_only = WlsService::operateRequestAction(
                $current_url, "post", new \Illuminate\Http\Request(), $tmp_header, $fixed_parameter_list);
        }

        $lrequest_original_all = $tmp_lrequest->all();

        $content = $content_device_only;
        WlsService::setRedisCacheDir('store-cache:api:url:' . $url . ':body:' . json_encode($lrequest_original_all) . ':content', json_encode($content), 60);
        // end of check cache

        $tmp_device_only_result = [];
        if (
            isset($content_device_only[1]) && $content_device_only[0] < 300 &&
            isset(json_decode($content_device_only[1], true)["actions"])
        ) {
            $json_decode_content_device_only = json_decode($content_device_only[1], true);
            foreach ($json_decode_content_device_only["actions"] as $tmp_value_device_only) {
                if (isset($tmp_value_device_only["action"]["data"]) &&
                    isset($tmp_value_device_only["action"]["actionRef"]) &&
                    isset($tmp_value_device_only["campaign"]["name"])
                ) {
                    $array_flip_device_only_index_list = array_flip(array_column($tmp_value_device_only["action"]["data"], "attribute"));
                    $sku_index                         = $array_flip_device_only_index_list["sku"];
                    $amount_index                      = $array_flip_device_only_index_list["amount"];

                    $tmp_inventory_id                                             = $tmp_value_device_only["action"]["data"][$sku_index]["value"];
                    $tmp_discount_amount_device_only                              = $tmp_value_device_only["action"]["data"][$amount_index]["value"];
                    $tmp_device_only_result[$tmp_inventory_id]                    = $tmp_discount_amount_device_only;
                    $tmp_device_only_result[$tmp_inventory_id . "_action_ref"]    = $tmp_value_device_only["action"]["actionRef"];
                    $tmp_device_only_result[$tmp_inventory_id . "_campaign_name"] = $tmp_value_device_only["campaign"]["name"];
                }

            }
        }

        return $tmp_device_only_result;
    }

    public static function postClmCampaign($lrequest)
    {
        $request_token        = self::postRequestAccessToken();
        $request_token_decode = json_decode($request_token[1], true);

        $project_id  = env('TOL_SSV_PROJECT_ID', false);
        $current_url = "/cms/api/projects/$project_id/c/clm-campaign";

        $method = 'POST';
        $header = TolSelfService::getHeader('Authorization');

        $fixed_parameter_list["base_url"] = env("WEOMNI_URL_TOL_SSV", false);

        $result = WlsService::operateRequestAction($current_url, $method, $lrequest, $header, $fixed_parameter_list);

        return $result;
    }

    public static function postExternalCampaign($lrequest)
    {
        $request_token        = self::postRequestAccessToken();
        $request_token_decode = json_decode($request_token[1], true);

        $project_id  = env('TOL_SSV_PROJECT_ID', false);
        $current_url = "/cms/api/projects/$project_id/c/external-campaign-order";

        $method = 'POST';
        $header = TolSelfService::getHeader('Authorization');

        $fixed_parameter_list["base_url"] = env("WEOMNI_URL_TOL_SSV", false);

        $result = WlsService::operateRequestAction($current_url, $method, $lrequest, $header, $fixed_parameter_list);

        return $result;
    }

    public static function getTrueIdEntertainmentPackage($secure_key)
    {
        $project_id  = env('TOL_SSV_PROJECT_ID', false);
        $current_url = "/cms/api/projects/$project_id/c/trueid-entertainment-package";

        $method = 'GET';
        $header = TolSelfService::getHeader('Authorization');

        $tmp_lrequest = new \Illuminate\Http\Request();
        $tmp_lrequest->setMethod(strtoupper($method));

        $fixed_parameter_list = [
            'base_url'        => env("WEOMNI_URL_TOL_SSV", false),
            'data.secure_key' => $secure_key,
        ];

        $result = WlsService::operateRequestAction($current_url, $method, $tmp_lrequest, $header, $fixed_parameter_list);

        return $result;
    }

    public static function postTrueIdEntertainmentPackage($lrequest)
    {
        $request_token        = self::postRequestAccessToken();
        $request_token_decode = json_decode($request_token[1], true);

        $project_id  = env('TOL_SSV_PROJECT_ID', false);
        $current_url = "/cms/api/projects/$project_id/c/trueid-entertainment-package";

        $method = 'POST';
        $header = TolSelfService::getHeader('Authorization');

        $fixed_parameter_list["base_url"] = env("WEOMNI_URL_TOL_SSV", false);

        $result = WlsService::operateRequestAction($current_url, $method, $lrequest, $header, $fixed_parameter_list);

        return $result;
    }

    public static function getAesWecamp($tmvh_token)
    {
        try {
            $is_pass_ent_pack_priv = false;
            $phone_no              = '';
            $cart_type             = '';
            $type                  = '';
            $segment               = '';
            $lifestyle             = '';
            $coupon_code           = '';
            $thai_id               = '';

            $key        = env('KEY_FOR_COMMERCE_AES_CONFIG_TYPHOON'); //for commerce
            $ciphertext = str_replace(' ', '+', $tmvh_token);

            $c                  = base64_decode($ciphertext);
            $ivlen              = openssl_cipher_iv_length($cipher = "AES-128-CBC");
            $iv                 = substr($c, 0, $ivlen);
            $hmac               = substr($c, $ivlen, $sha2len = 32);
            $ciphertext_raw     = substr($c, $ivlen + $sha2len);
            $original_plaintext = openssl_decrypt($ciphertext_raw, $cipher, $key, $options = OPENSSL_RAW_DATA, $iv);
            $calcmac            = hash_hmac('sha256', $ciphertext_raw, $key, $as_binary = true);
            if (gettype($hmac) == "string" && gettype($calcmac) == "string" && hash_equals($hmac, $calcmac)) //PHP 5.6+ timing attack safe comparison
            {
                $explode_original_plaintext_decrypt = explode('|', $original_plaintext);

                $phone_no = array_get($explode_original_plaintext_decrypt, '0', '');

                if (!empty($phone_no)) {
                    // check code
                    $card = TyphoonService::checkCard($phone_no);
                    if ($card) {
                        $cart_type = array_get($card, 'data.type') ?: '';
                    }
                } else {
                    $cart_type = array_get($explode_original_plaintext_decrypt, '1');
                }

                $type = strtolower(array_get($explode_original_plaintext_decrypt, '3'));

                // check segment and lifestyle
                $plaintext_field_1 = array_get($explode_original_plaintext_decrypt, '1');
                if (!empty($plaintext_field_1) && $plaintext_field_1 !== $cart_type) {
                    $no = TyphoonService::checkWhitelist($explode_original_plaintext_decrypt[0]);
                    if ($no) {
                        $segment   = strtolower(array_get($no, 'data.MAIN_SEGMENT'));
                        $lifestyle = strtolower(array_get($no, 'data.PROFILE_LIFESTYLE'));
                    }
                    $coupon_code = array_get($explode_original_plaintext_decrypt, '3');
                }

                $thai_id      = array_get($explode_original_plaintext_decrypt, '4');
                $voucher_code = array_get($explode_original_plaintext_decrypt, '5');
            }

            $result                             = [200, []];
            $result[1]["is_pass_ent_pack_priv"] = !empty($type) && strtolower($type) !== 'mass2' && strtolower($type) !== 'mass' && strtolower($type) !== 'true' && empty($coupon_code) && !empty($phone_no);
            $result[1]["original_plaintext"]    = $original_plaintext;
            $result[1]["phone_no"]              = $phone_no;
            $result[1]["cart_type"]             = $cart_type;
            $result[1]["type"]                  = $type;
            $result[1]["segment"]               = $segment;
            $result[1]["lifestyle"]             = $lifestyle;
            $result[1]["coupon_code"]           = $coupon_code;
            $result[1]["thai_id"]               = $thai_id;
            $result[1]["voucher_code"]          = $voucher_code;

            return $result;
        } catch (\Exception $e) {
            $result                             = [400, []];
            $result[1]["is_pass_ent_pack_priv"] = false;
            $result[1]["cart_type"]             = '';

            return $result;
        }
    }

    public static function getLvDAdditional($product_id)
    {
        $project_id  = env('TOL_SSV_PROJECT_ID', false);
        $current_url = "/cms/api/projects/$project_id/c/product-banner";

        $method = 'GET';
        $header = TolSelfService::getHeader('Authorization');

        $tmp_lrequest = new \Illuminate\Http\Request();
        $tmp_lrequest->setMethod(strtoupper($method));

        $fixed_parameter_list = [
            'base_url'        => env("WEOMNI_URL_TOL_SSV", false),
            'data.product_id' => $product_id,
        ];
        $key_cache = 'store-cache:api:url:' . $current_url . ':body:' . json_encode($fixed_parameter_list) . ':content';

        // start of check cache
        // add cache
        $tmp_redis_content = Redis::get($key_cache);
        if (!empty($tmp_redis_content)) {
            $result = json_decode($tmp_redis_content, true);
        } else {
            $result = WlsService::operateRequestAction($current_url, $method, $tmp_lrequest, $header, $fixed_parameter_list);
            if (empty(json_decode(array_get($result, '1', '[]'), true))) {
                $fixed_parameter_list['data.product_id'] = 'default';
                $key_cache                               = 'store-cache:api:url:' . $current_url . ':body:' . json_encode($fixed_parameter_list) . ':content';
                $result                                  = json_decode(Redis::get($key_cache), true);
                if (empty($result[1])) {
                    $result = WlsService::operateRequestAction($current_url, $method, $tmp_lrequest, $header, $fixed_parameter_list);
                }
            }
        }

        WlsService::setRedisCacheDir('store-cache:api:url:' . $current_url . ':body:' . json_encode($fixed_parameter_list) . ':content', json_encode($result), 60 * 5);
        // end of check cache

        $json_decode_content_additional_body = json_decode(array_get($result, '1', '[]'), true);

        if ($result[0] < 300 && isset($json_decode_content_additional_body[0]["data"])) {
            $filtered_additional_data = ["new_customer_text" => []];
            $field_list               = [
                "discount_on_top"      => "0.data.discount",
                "banner_url"           => "0.data.url",
                "banner"               => "0.data.image.url",
                "new_customer_text.en" => "0.data.message_en",
                "new_customer_text.th" => "0.data.message_th",
            ];
            foreach ($field_list as $field_key_name => $field_value_name) {
                if (!empty(array_get($json_decode_content_additional_body, $field_value_name))) {
                    array_set($filtered_additional_data, $field_key_name, array_get($json_decode_content_additional_body, $field_value_name));
                }
            }
            $json_decode_content_additional_body["additional"] = $filtered_additional_data;
            $result[1]                                         = json_encode($json_decode_content_additional_body);
        }

        return $result;
    }

    public static function getSimActivationData($sim_type, $item_id)
    {
        $request_token        = self::postRequestAccessToken();
        $request_token_decode = json_decode($request_token[1], true);

        $project_id  = env('TOL_SSV_PROJECT_ID', false);
        $type        = $sim_type === 'PRE' ? 'prepaidsimactivation' : 'postpaidsimactivation';
        $current_url = "/cms/api/projects/$project_id/c/$type?data.itemId=$item_id";

        $method = 'GET';
        $header = TolSelfService::getHeader('Authorization');
        $lrequest = new \Illuminate\Http\Request();

        $fixed_parameter_list["base_url"] = env("WEOMNI_URL_TOL_SSV", false);

        $result = WlsService::operateRequestAction($current_url, $method, $lrequest, $header, $fixed_parameter_list);

        LogService::writeServiceLog(
            'cms:' . $type,
            json_encode(["itemId" => $item_id]),
            json_encode($result),
            date('d/m/Y H:i:s')
        );

        return $result;
    }

    public static function encryptAesToken($plaintext)
    {
        $key = env('KEY_FOR_COMMERCE_AES_CONFIG_TYPHOON');
        $ivlen = openssl_cipher_iv_length($cipher="AES-128-CBC");
        $iv = openssl_random_pseudo_bytes($ivlen);
        $ciphertext_raw = openssl_encrypt($plaintext, $cipher, $key, $options=OPENSSL_RAW_DATA, $iv);
        $hmac = hash_hmac('sha256', $ciphertext_raw, $key, $as_binary=true);
        $ciphertext = base64_encode( $iv.$hmac.$ciphertext_raw );

        return $ciphertext;
    }

    public static function postCreditCardData($lrequest)
    {
        $request_token        = self::postRequestAccessToken();
        $request_token_decode = json_decode($request_token[1], true);

        $project_id  = env('TOL_SSV_PROJECT_ID', false);
        $current_url = "/cms/api/projects/$project_id/c/creditcampaigndata";

        $method  = 'POST';
        $header  = TolSelfService::getHeader('Authorization');
        $request = new \Illuminate\Http\Request();
        $request->replace($lrequest);

        $fixed_parameter_list["base_url"] = env("WEOMNI_URL_TOL_SSV", false);

        $result = WlsService::operateRequestAction($current_url, $method, $request, $header, $fixed_parameter_list);

        LogService::writeServiceLog(
            'cms:credit-campaign',
            json_encode($lrequest),
            json_encode($result),
            date('d/m/Y H:i:s')
        );

        return $result;
    }

    public static function postVerifyEcoupon($lrequest)
    {
        $request_token        = self::postRequestAccessToken();
        $request_token_decode = json_decode($request_token[1], true);

        $project_id  = env('TOL_SSV_PROJECT_ID', false);

        $current_url = "/bifrost/api/true-it/projects/$project_id/check-privilege/verify-discount-by-serial";

        $method = 'POST';
        $header = TolSelfService::getHeader('Authorization');

        $fixed_parameter_list["base_url"] = env("WEOMNI_URL_TOL_SSV", false);

        $result = WlsService::operateRequestAction($current_url, $method, $lrequest, $header, $fixed_parameter_list);

        LogService::writeServiceLog(
            'verify_ecoupon',
            json_encode($lrequest->all()),
            json_encode($result),
            date('d/m/Y H:i:s')
        );

        return $result;
    }

    public static function postPrevalidation($lrequest)
    {
        if ($lrequest->has('correlationId')) {
            $correlation_id = $lrequest->input('correlationId');
        } else {
            $correlation_id            = Str::uuid()->toString();
            $lrequest["correlationId"] = $correlation_id;
        }

        $project_id  = env('TOL_SSV_PROJECT_ID');
        $current_url = "bifrost/api/true-it/projects/$project_id/validate/pre-validation/$correlation_id";

        $method = 'POST';

        $header                     = TolSelfService::getHeader('Authorization');
        $header['X-Correlation-ID'] = $correlation_id;
        $header['accept-encoding']  = 'gzip, deflate';

        $fixed_parameter_list['base_url'] = env('BIFROST_URL', false);

        $result = WlsService::operateRequestAction($current_url, $method, $lrequest, $header, $fixed_parameter_list);

        LogService::writeServiceLog(
            'verify_prevalidation',
            json_encode($lrequest->all()),
            json_encode($result),
            date('d/m/Y H:i:s')
        );

        return $result;
    }
}
