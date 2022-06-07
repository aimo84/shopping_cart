<?php
namespace App\Services;

use App\Facades\PaymentMethodService;
use App\Facades\ProductService;
use App\Models\TruemovehConfigModel;
use App\Models\TruemovehLevelCShopsModel;
use App\Models\TruemovehSimAutoSyncModel;
use App\Services\LogService;
use App\Services\TyphoonService;
use App\Services\StoreService;
use Exception;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use App\Services\MobileAllocateService;

class WlsService
{
    public static function postLoginWls($url, $method, $lrequest, $header)
    {
        $request_token = new \Illuminate\Http\Request();
        $request_token->setMethod('POST');
        $request_token_parameter = [];
        $payload                 = $lrequest->post();
        foreach ($payload as $key => $value) {
            $request_token_parameter[$key] = $value;
        }
        $request_token_parameter['client_id']     = env('WEMALL_CLIENT_ID', false);
        $request_token_parameter['client_secret'] = env('WEMALL_CLIENT_SECRET', false);
        $request_token_parameter['type']          = 'trueid';
        $request_token_parameter['section']       = 'wemall';

        if (!$request_token_parameter['client_id'] || !$request_token_parameter['client_secret']) {
            $status_code = 500;
            $body        = 'wemall_client_id or wemall_client_secret is not set';

            return ['is_get_token' => false, 'message' => $body];
        }

        $request_token->replace($request_token_parameter);

        $header = [
            "Content-Type" => "application/x-www-form-urlencoded",
            "x-api-auth"   => env('X_API_AUTH', false),
        ];
        if (!$header['x-api-auth']) {
            $status_code = 500;
            $body        = 'wemall X_API_AUTH is not set';

            return ['is_get_token' => false, 'message' => $body];
        }
        $content = GuzzleService::postGuzzleRequest(
            $url,
            $method,
            $request_token,
            $header,
            env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
        ); // wemall api

        return $content;
    }

    public static function getProfileWls($url, $method, $lrequest, $header)
    {
        $request_token = new \Illuminate\Http\Request();
        $request_token->setMethod('GET');
        $request_token_parameter = [];

        $header = [
            "Content-Type" => "application/x-www-form-urlencoded",
            "x-api-auth"   => env('X_API_AUTH', false),
        ];
        if (!$header['x-api-auth']) {
            $status_code = 500;
            $body        = 'wemall X_API_AUTH is not set';

            return ['is_get_token' => false, 'message' => $body];
        }
        $is_first = true;
        if (count($lrequest->all()) > 0) {
            if ($is_first) {
                $url .= '?';
                $is_first = false;
            }
            foreach ($lrequest->all() as $key => $value) {
                $url .= $key . '=' . $value . '&';
            }
        }
        $content = GuzzleService::postGuzzleRequest(
            $url,
            $method,
            $request_token,
            $header,
            env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
        ); // true id api

        $tmp = json_decode($content[1], true);
        if ($content[0] <= 200 && array_key_exists("true_point_id_card", $tmp["data"])) {
            unset($tmp["data"]["true_point_id_card"]);
            $content[1] = json_encode($tmp);
        }

        return $content;
    }

    public static function getOrderWls($url, $method, $lrequest, $header)
    {
        $request_token = new \Illuminate\Http\Request();
        $request_token->setMethod('GET');
        $request_token_parameter = [];
        $payload                 = $lrequest->post();

        $request_token->replace($request_token_parameter);

        $header = [
            "x-api-auth" => env('X_API_AUTH', false)];
        if (!$header['x-api-auth']) {
            $status_code = 500;
            $body        = 'wemall X_API_AUTH is not set';

            return ['is_get_token' => false, 'message' => $body];
        }
        $is_first = true;
        if (count($lrequest->all()) > 0) {
            if ($is_first) {
                $url .= '?';
                $is_first = false;
            }
            foreach ($lrequest->all() as $key => $value) {
                $url .= $key . '=' . $value . '&';
            }
        }

        $content = GuzzleService::postGuzzleRequest(
            $url,
            $method,
            $request_token,
            $header,
            env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
        ); // wemall api

        return $content;
    }

    public static function getPortalProductWls($url, $method, $lrequest, $header, $bypass = false)
    {
        $header_product_type = array_get($header, 'type', []);
        $header              = [
            'x-api-auth' => env('X_API_AUTH', false),
        ];

        if (!$header['x-api-auth']) {
            $status_code = 500;
            $body        = 'wemall X_API_AUTH is not set';

            return ['is_get_token' => false, 'message' => $body];
        }
        $is_first           = true;
        [$header, $content] = self::getPortalProduct($url, $method, $lrequest, $header); // wemall api

        $content_get_product_id_config = App('App\Http\Controllers\APIController')->getProductIdConfig($lrequest);
        if (empty($content_get_product_id_config) || $content_get_product_id_config[0] > 200) {
            return $content_get_product_id_config;
        }

        $tmp_check = json_decode($content[1], true);
        if ($tmp_check['status_code'] > 200) {
            $content[0] = $tmp_check['status_code'];
        }

        $product_id                        = explode('/', $url)[2];
        $tmp_content_get_product_id_config = $content_get_product_id_config[1];

        foreach ($tmp_content_get_product_id_config["verify"] as $v) {
            if ($v["id"] == $product_id) {
                // is happy digital
                $tmp_check["data"]["record"]["product_type"] = "happy_digital";
                $content[1]                                  = json_encode($tmp_check);
                break;
            }
        }

        // start of add accessories, entertainment_package
        $is_pass_ent_pack_priv = false;
        $cart_type             = '';
        $type                  = '';
        $segment               = '';
        $lifestyle             = '';
        $coupon_code           = '';
        $thai_id               = '';
        $voucher_code          = '';
        $is_sim_family         = false;
        if (!empty($lrequest->header('tmvh-token'))) {
            $aes_wecamp_result = WeOmniService::getAesWecamp($lrequest->header('tmvh-token'));

            $is_pass_ent_pack_priv = array_get($aes_wecamp_result, '1.is_pass_ent_pack_priv');
            $cart_type             = array_get($aes_wecamp_result, '1.cart_type');
            $type                  = array_get($aes_wecamp_result, '1.type');
            $segment               = array_get($aes_wecamp_result, '1.segment');
            $lifestyle             = array_get($aes_wecamp_result, '1.lifestyle');
            $coupon_code           = array_get($aes_wecamp_result, '1.coupon_code');
            $thai_id               = array_get($aes_wecamp_result, '1.thai_id');
            $voucher_code          = \Arr::get($aes_wecamp_result, '1.voucher_code');

            $tmp_explode_aes_wecamp_result = explode('|', \Arr::get($aes_wecamp_result, '1.original_plaintext'));

            $company_group = \Arr::get($tmp_explode_aes_wecamp_result, '1');
            $user_type     = \Arr::get($tmp_explode_aes_wecamp_result, '2');

            $aes_row_3_content = \Arr::get($tmp_explode_aes_wecamp_result, '3');

            if (in_array(strtoupper($user_type), ["E", "F"])) {
                $is_sim_family = true;

                $sim_family_info                      = [];
                $sim_family_info["hdr_cp_fan_emp_id"] = \Arr::get($tmp_explode_aes_wecamp_result, '0');

                $sim_family_info["hdr_cp_fan_company_group"] = $company_group;

                $hdr_cp_fan_ref_code_content = \Arr::get($tmp_explode_aes_wecamp_result, '3');
                if (!empty($hdr_cp_fan_ref_code_content)) {
                    $sim_family_info["hdr_cp_fan_ref_code"] = $hdr_cp_fan_ref_code_content;
                }

                \Arr::set($tmp_check, "data.record.sim_family_info", $sim_family_info);
                $content[1] = json_encode($tmp_check);

                // add special type for filter
                $type = "ff-$user_type";

                if (!empty($company_group)) {
                    $type .= "-$company_group";
                }
            }

            if (in_array($aes_row_3_content, ["cp_employee_free", "cp_employee_discount", "TRUE_PAY_SMOOTH"])) {
                \Arr::set($tmp_check, "data.record.is_paysmooth_tmvh_token", true);
                $content[1] = json_encode($tmp_check);
            }
        }

        // check voucher status
        if (!empty($voucher_code)) {
            \Arr::set($tmp_check, "data.record.voucher_code", $voucher_code);

            $check_status   = TyphoonService::checkStatus($voucher_code, $thai_id);
            $voucher_status = json_decode($check_status[1], true);
            $code           = \Arr::get($voucher_status, 'code');
            $status         = \Arr::get($voucher_status, 'voucher_status');

            if ($check_status[0] !== 200 || $code !== 200 || $status === 'used') {
                return [
                    400,
                    [
                        'message'        => [
                            'en' => 'invalid voucher code',
                            'th' => 'voucher code ไม่ถูกต้อง',
                        ],
                        'voucher_code'   => $voucher_code,
                        'voucher_status' => $voucher_status,
                    ],
                ];
            }

            \Arr::set($tmp_check, "data.record.voucher_status", $voucher_status);
        }
        // end check voucher status

        $tmp_check = self::buildNodePaySmooth($tmp_check, $product_id);

        $paysmooth_token          = $lrequest->header('paysmooth-token');
        $is_pass_paysmooth_verify = false;
        if (!empty($paysmooth_token)) {
            $paysmooth_verified_data = PaySmoothService::getVerify($paysmooth_token);
            \Arr::set($tmp_check, "data.record.paysmooth_verified_info", \Arr::get($paysmooth_verified_data, "response"));
            $content[1]               = json_encode($tmp_check);
            $is_pass_paysmooth_verify = \Arr::get($paysmooth_verified_data, "response.pay_smooth_verify_result.response.is_pass");
        }

        // check segment product
        $segment_products_redis = Redis::get('typhoon:segment:products');
        if (!empty($segment_products_redis) && !$bypass) {
            $segment_products = json_decode($segment_products_redis, true);

            if (in_array($product_id, $segment_products) && (empty($segment) || empty($lifestyle))) {
                return [
                    400,
                    [
                        'message' => [
                            'en' => 'unable to access product data',
                            'th' => 'ไม่สามารถเข้าถึงข้อมูลสินค้าได้',
                        ],
                    ],
                ];
            }
        }

        // check type
        $req_type                = $lrequest->header('type');
        $typhoon_products_redis  = Redis::get('typhoon:products:' . $product_id);
        $mnp_auto_products_redis = Redis::get('mnp-auto:products:' . $product_id);
        if (
            (
                !empty($typhoon_products_redis) || // check typhoon redis
                (!empty($mnp_auto_products_redis) && $req_type === 'mnp_auto') // check mnp auto redis and request type auto
            ) &&
            !$bypass
        ) {
            $typhoon_products = !empty($typhoon_products_redis) ?
            json_decode($typhoon_products_redis, true) :
            json_decode($mnp_auto_products_redis, true);
            $typhoon_type = empty($cart_type) ? $type : $type . '-' . strtolower($cart_type);
            if (!in_array($typhoon_type, $typhoon_products)) {
                return [
                    400,
                    [
                        'message'          => [
                            'en' => 'unable to access product data',
                            'th' => 'ไม่สามารถเข้าถึงข้อมูลสินค้าได้',
                        ],
                        'typhoon_type'     => $typhoon_type,
                        'typhoon_products' => $typhoon_products,
                    ],
                ];
            }
        }

        // check mnp sim
        $mnp_sim_redis = Redis::get('typhoon:mnp:' . $product_id . ':redis-data');
        if (!empty($mnp_sim_redis) && !$bypass) {
            $mnp_sim_redis = json_decode($mnp_sim_redis, true);
            $token_type    = empty($cart_type) ? $type : $type . '-' . strtolower($cart_type);

            if (!in_array($token_type, $mnp_sim_redis)) {
                return [
                    400,
                    [
                        'message' => [
                            'en' => 'unable to access product data',
                            'th' => 'ไม่สามารถเข้าถึงข้อมูลสินค้าได้',
                        ],
                    ],
                ];
            }
        }

        $credit_card_only_code_list_redis = Redis::get('credit_card_only:code_list');
        if (!empty($credit_card_only_code_list_redis)) {
            $credit_card_only_code_list = json_decode($credit_card_only_code_list_redis, true);
            if (in_array($cart_type, $credit_card_only_code_list)) {
                $tmp_check["data"]["record"]["is_5g"] = true;
            }
        }

        $product_id_entertainment_packages = "";
        if ($is_pass_ent_pack_priv) {
            $product_id_entertainment_packages = Redis::get('truestore:product_id_entertainment_packages:product_id:' . $product_id . ':redis_data');
        }

        // start of setAccessory
        $tmp_check = self::setAccessory($product_id, $segment, $lifestyle, $tmp_check, $header);

        // end of setAccessory

        $json_decode_product_id_entertainment_packages = json_decode($product_id_entertainment_packages, true);
        if ($json_decode_product_id_entertainment_packages != null) {
            $tmp_check["data"]["record"]["entertainment_packages"] = $json_decode_product_id_entertainment_packages;
        }
        // end of add accessories, entertainment_package

        // start of TEC-520 prepaid bundle
        $hide_device_only_by_product_id_and_inv_id_list = Redis::hgetall('truestore:hide_device_only_by_product_id_and_inv_id:redis_data');
        if (isset($hide_device_only_by_product_id_and_inv_id_list[$product_id])) {
            $raw_explode_hide_device_only_inv_id_list = explode(',', $hide_device_only_by_product_id_and_inv_id_list[$product_id]);
            $hide_device_only_by_inv_id_list          = array_flip($raw_explode_hide_device_only_inv_id_list);
        }

        if (isset($tmp_check["data"]["record"]) && isset($raw_explode_hide_device_only_inv_id_list)) {
            $tmp_check["data"]["record"]["hide_device_only_list"] = $raw_explode_hide_device_only_inv_id_list;
        }
        // end of TEC-520 prepaid bundle

        $product_sim_type                           = '';
        $tmp_check["data"]["record"]["product_sim"] = null;

        if (isset(explode("L", $product_id)[1])) {
            $content_product_verify_postpaid = WlsService::getProductVerifySimPostpaid("truemoveh/product-verify/" . explode("L", $product_id)[1], "get", new \Illuminate\Http\Request(), []);

            if (!empty(json_decode(Arr::get($content_product_verify_postpaid, 1), true))) {
                $product_verify_data = json_decode(Arr::get($content_product_verify_postpaid, 1), true);
                $product_sim_type    = array_get($product_verify_data, 'sim_type', '');
                Arr::set($tmp_check, 'data.record.product_sim', ProductService::buildNodeProductSim($product_verify_data));
            }
        }

        $inventory_list_data     = [];
        $map_sku_to_inventory_id = [];
        if (isset($tmp_check["data"]["record"]["inventories"])) {
            foreach ($tmp_check["data"]["record"]["inventories"] as $tmp_key => $tmp_value) {
                $inventory_list_data[$tmp_value["id"]]        = $tmp_value;
                $inventory_list_data[$tmp_value["id"]]["key"] = $tmp_key;
                $map_sku_to_inventory_id[$tmp_value["sku"]]   = $tmp_value["id"];

                $tmp_product_inventory_index   = $tmp_key;
                $tmp_product_inventory_content = $tmp_value;

                // start of TEC-520 prepaid bundle
                if (isset($hide_device_only_by_inv_id_list[$tmp_value["id"]])) {
                    $tmp_check["data"]["record"]["inventories"][$tmp_product_inventory_index]["is_hide_device_only"] = true;
                } else {
                    $tmp_check["data"]["record"]["inventories"][$tmp_product_inventory_index]["is_hide_device_only"] = false;
                }
                // end of TEC-520 prepaid bundle
            }

            // start of fix TEC-19 add discount coupon
            $page_site          = empty($coupon_code) ? 'portal_lv_d' : '';
            $content_get_coupon = CouponService::getCouponByProductId($product_id, $page_site);

            if (isset($content_get_coupon["data"]["record"])) {
                $record = array_get($content_get_coupon, 'data.record', []);

                if (!empty($coupon_code)) {
                    $coupons = array_get($record, $product_id . '.coupon');
                    foreach ($coupons as $coupon) {
                        $code = array_get($coupon, 'code');
                        if ($code === $coupon_code) {
                            $record[$product_id]['coupon']               = [$coupon];
                            $tmp_check["data"]["record"]["token_coupon"] = $code;
                            break;
                        }
                    }
                }

                $tmp_check["data"]["coupon_data_from_bff"] = $record;
            }
            // end of fix TEC-19 add discount coupon
        }

        if (isset($tmp_check["data"]["record"]["bundles"]) &&
            $tmp_check["data"]["record"]["product_type"] == "product") {
            $is_enable_mnp_bundling = false;
            $nas_code_data_array    = [];

            $price_with_max_discount_device_bundle_new_customer = 9999999;
            $is_enable_device_bundle_new_customer               = false;

            foreach ($tmp_check["data"]["record"]["bundles"] as $tmp_key => $tmp_value) {
                $tmp_check["data"]["record"]["bundles"][$tmp_key]["is_enable_bundle_device_bundle_new_customer"] = false;
                if ($tmp_check["data"]["record"]["bundles"][$tmp_key]["active"] &&
                    $tmp_check["data"]["record"]["bundles"][$tmp_key]["enable"] &&
                    $tmp_check["data"]["record"]["bundles"][$tmp_key]["start_date"] <= time() &&
                    time() <= $tmp_check["data"]["record"]["bundles"][$tmp_key]["end_date"]
                ) {
                    $is_enable_device_bundle_new_customer                                                            = true;
                    $tmp_check["data"]["record"]["bundles"][$tmp_key]["is_enable_bundle_device_bundle_new_customer"] = true;
                }

                // start of TEC-1756 is_trueblack lv d support
                $tmp_prefix        = "data.record.bundles.$tmp_key";
                $campaign_ref_code = array_get($tmp_check, "$tmp_prefix.ref_code");
                if (!empty($campaign_ref_code)) {
                    if (!empty(Redis::get("truestore:is_trueblack:campaign_ref_code:$campaign_ref_code:redis_data"))) {
                        array_set($tmp_check, "$tmp_prefix.is_trueblack", true);
                    }
                }
                // end of TEC-1756 is_trueblack lv d support

                // start of TEC-520 prepaid bundle
                if (array_get($tmp_value, "sim_type") != "prepaid" && !isset($tmp_value["propo_code"])) {
                    continue;
                }
                if (array_get($tmp_value, "sim_type") != "prepaid" && !(isset($tmp_value["campaign_type"]) && ($tmp_value["campaign_type"] == "bundle" ||
                    $tmp_value["campaign_type"] == "bundle_sim" || $tmp_value["campaign_type"] == "freebie"))
                ) {
                    continue;
                }

                if (array_get($tmp_value, "sim_type") != "prepaid") {
                    $nas_code = $tmp_value["propo_code"];
                } else {
                    $inventory_index = array_search('binding_item', array_column($tmp_value['inventories'], 'product_type'));
                    $tmp_product_id = array_get($tmp_value, "inventories.${inventory_index}.product_id");

                    $content_product_verify_prepaid = WlsService::getProductVerifySimPostpaid("truemoveh/product-verify/" . explode("L", $tmp_product_id)[1], "get", new \Illuminate\Http\Request(), []);
                    if (!empty(json_decode($content_product_verify_prepaid[1], true))) {
                        $tmp = json_decode($content_product_verify_prepaid[1], true);
                        if (isset($tmp["sim_type"]) && $tmp["sim_type"] == "prepaid"
                            && isset($tmp["status"]) && $tmp["status"] == "active") {
                            $nas_code = $tmp["propo_code"];
                        }
                    }
                }
                // end of TEC-520 prepaid bundle

                foreach ($tmp_value["inventories"] as $tmp_key_2 => $tmp_value_2) {
                    if ($tmp_value_2["product_id"] == $product_id) {
                        $tmp_product_bundle_inventory_index = $tmp_key_2;
                        $tmp_product_bundle_inventory_id    = $tmp_value_2["inventory_id"];

                        if (!isset($tmp_product_bundle_inventory_id) || !isset($inventory_list_data[$tmp_product_bundle_inventory_id]["price"])) {
                            continue;
                        } else {
                            // left for historical, fail safe reason
                            if (gettype($tmp_check["data"]["record"]["promotion"]) == "array" &&
                                count($tmp_check["data"]["record"]["promotion"]) > 1 &&
                                $tmp_check["data"]["record"]["promotion"][0]["custom_price"] == 0
                            ) {
                                $price_for_device_bundle_new_customer = $inventory_list_data[$tmp_product_bundle_inventory_id]["compare_at_price"];
                            } else {
                                $price_for_device_bundle_new_customer = $inventory_list_data[$tmp_product_bundle_inventory_id]["price"];
                            }

                            $tmp_check["data"]["record"]["bundles"][$tmp_key]["inventory_id"] = $tmp_product_bundle_inventory_id;
                        }
                        break;
                    }
                }

                if (!isset($tmp_product_bundle_inventory_id) || !isset($inventory_list_data[$tmp_product_bundle_inventory_id]["price"])) {
                    continue;
                } else {
                    // left for historical, fail safe reason
                    if (gettype($tmp_check["data"]["record"]["promotion"]) == "array" &&
                        count($tmp_check["data"]["record"]["promotion"]) > 1 &&
                        $tmp_check["data"]["record"]["promotion"][0]["custom_price"] == 0
                    ) {
                        $price_for_device_bundle_new_customer = $inventory_list_data[$tmp_product_bundle_inventory_id]["compare_at_price"];
                    } else {
                        $price_for_device_bundle_new_customer = $inventory_list_data[$tmp_product_bundle_inventory_id]["price"];
                    }

                    $tmp_check["data"]["record"]["bundles"][$tmp_key]["inventory_id"] = $tmp_product_bundle_inventory_id;
                }

                if (strtoupper($tmp_value["benefit"]["unit"]) == "PERCENT") {
                    $to_be_discount_device_bundle_new_customer = $tmp_value["benefit"]["amount"] / 100.0 * $price_for_device_bundle_new_customer;
                } else {
                    $to_be_discount_device_bundle_new_customer = $tmp_value["benefit"]["amount"];
                }

                if (isset($nas_code) && !isset($nas_code_data_array[$nas_code])) {
                    $tmp_url      = "truemoveh/proposition";
                    $tmp_method   = "get";
                    $tmp_lrequest = new \Illuminate\Http\Request();
                    $tmp_lrequest->setMethod(strtoupper($tmp_method));
                    $request_parameter             = [];
                    $request_parameter["nas_code"] = $nas_code;

                    // start of TEC-520 prepaid bundle
                    if (array_get($tmp_value, "sim_type") != "prepaid") {
                        $request_parameter["scope"]  = "propositionMobile";
                        $request_parameter["fields"] = "id,name,nas_code,advance_payment,proposition_mobile,contract,baseline,campaign_code";
                    }
                    // end of TEC-520 prepaid bundle

                    $tmp_lrequest->replace($request_parameter);

                    if (count($tmp_lrequest->all()) > 0 && $tmp_method == "get") {
                        $tmp_url .= '?';
                        foreach ($tmp_lrequest->all() as $tmp_key_2 => $tmp_value_2) {
                            $tmp_url .= $tmp_key_2 . '=' . $tmp_value_2 . '&';
                        }
                    }

                    $tmp_header                                        = [];
                    $tmp_content                                       = WlsService::getPropositionListWithNasCode($tmp_url, $tmp_method, $tmp_lrequest, $tmp_header);
                    $json_decode_tmp_content                           = json_decode($tmp_content[1], true);
                    $advance_payment                                   = Arr::get($json_decode_tmp_content, 'record.0.advance_payment');
                    $nas_code_data_array[$nas_code]                    = [];
                    $nas_code_data_array[$nas_code]["advance_payment"] = $advance_payment;
                    $nas_code_data_array[$nas_code]["contract"]        = Arr::get($json_decode_tmp_content, 'record.0.contract');
                    $nas_code_data_array[$nas_code]["baseline"]        = Arr::get($json_decode_tmp_content, 'record.0.baseline');
                    $nas_code_data_array[$nas_code]["campaign_code"]   = Arr::get($json_decode_tmp_content, 'record.0.campaign_code');
                    $package_name                                      = Arr::get($json_decode_tmp_content, 'record.0.name');
                    if (!empty($package_name)) {
                        \Arr::set($json_decode_tmp_content, 'record.0.proposition_mobile.0.package_name', $package_name);
                        \Arr::set($json_decode_tmp_content, 'record.0.proposition_mobile', \Arr::get($json_decode_tmp_content, 'record.0.proposition_mobile'));
                        \Arr::set($tmp_content, '1', json_encode($json_decode_tmp_content));
                    }

                    // start of TEC-520 prepaid bundle
                    $nas_code_data_array[$nas_code]["api_output"] = json_decode($tmp_content[1], true)["record"][0];
                    if (array_get($tmp_value, "sim_type") != "prepaid") {
                        $proposition_mobile                                   = json_decode($tmp_content[1], true)["record"][0]["proposition_mobile"];
                        $nas_code_data_array[$nas_code]["proposition_mobile"] = $proposition_mobile;
                    }
                    // end of TEC-520 prepaid bundle
                }

                if (array_get($tmp_value, "sim_type") != "prepaid") {
                    $tmp_check["data"]["record"]["bundles"][$tmp_key]["advance_payment"]    = $nas_code_data_array[$nas_code]["advance_payment"];
                    $tmp_check["data"]["record"]["bundles"][$tmp_key]["proposition_mobile"] = $nas_code_data_array[$nas_code]["proposition_mobile"];
                    $tmp_check["data"]["record"]["bundles"][$tmp_key]["contract"]           = Arr::get($nas_code_data_array, "$nas_code.contract");
                    $tmp_check["data"]["record"]["bundles"][$tmp_key]["baseline"]           = Arr::get($nas_code_data_array, "$nas_code.baseline");
                    $tmp_check["data"]["record"]["bundles"][$tmp_key]["campaign_code"]      = Arr::get($nas_code_data_array, "$nas_code.campaign_code");
                } elseif (isset($nas_code)) {
                    $tmp_check["data"]["record"]["bundles"][$tmp_key]["proposition_data"] = $nas_code_data_array[$nas_code];
                }

                $tmp_check["data"]["record"]["bundles"][$tmp_key]["to_be_discount_device_bundle_new_customer"] = $to_be_discount_device_bundle_new_customer;

                if ($price_for_device_bundle_new_customer < $to_be_discount_device_bundle_new_customer) {
                    $tmp_check["data"]["record"]["bundles"][$tmp_key]["enable"]                                      = false;
                    $tmp_check["data"]["record"]["bundles"][$tmp_key]["is_enable_bundle_device_bundle_new_customer"] = false;
                }
                $tmp_check["data"]["record"]["bundles"][$tmp_key]["price_after_discount_device_bundle_new_customer"] = $price_for_device_bundle_new_customer - $to_be_discount_device_bundle_new_customer;
                if ($price_with_max_discount_device_bundle_new_customer > $tmp_check["data"]["record"]["bundles"][$tmp_key]["price_after_discount_device_bundle_new_customer"] &&
                    $tmp_check["data"]["record"]["bundles"][$tmp_key]["price_after_discount_device_bundle_new_customer"] >= 0
                ) {
                    $price_with_max_discount_device_bundle_new_customer                                              = $tmp_check["data"]["record"]["bundles"][$tmp_key]["price_after_discount_device_bundle_new_customer"];
                    $tmp_check["data"]["record"]["bundles"][$tmp_key]["is_enable_bundle_device_bundle_new_customer"] = true;
                }

                $paysmooth_down_payment_rate = \Arr::get($tmp_check, "data.record.bundles.$tmp_key.down_payment_rate");
                $paysmooth_tenor             = \Arr::get($tmp_check, "data.record.bundles.$tmp_key.tenor");

                if (\Arr::get($tmp_check, "data.record.is_pay_smooth") && $is_pass_paysmooth_verify && (empty($paysmooth_down_payment_rate) || empty($paysmooth_tenor))) {
                    unset($tmp_check["data"]["record"]["bundles"][$tmp_key]);
                    continue;
                } elseif (\Arr::get($tmp_check, "data.record.is_pay_smooth") && !$is_pass_paysmooth_verify && (!empty($paysmooth_down_payment_rate) || !empty($paysmooth_tenor))) {
                    unset($tmp_check["data"]["record"]["bundles"][$tmp_key]);
                    continue;
                }

                if (isset($tmp_check["data"]["record"]["bundles"][$tmp_key]["campaign_sim_type"]) &&
                    $tmp_check["data"]["record"]["bundles"][$tmp_key]["campaign_sim_type"] == "mnp"
                ) {
                    $is_enable_mnp_bundling = true;
                }
            }
            \Arr::set($tmp_check, 'data.record.bundles', array_values(\Arr::get($tmp_check, 'data.record.bundles')));
            $tmp_check["data"]["record"]["price_with_max_discount_device_bundle_new_customer"] = $price_with_max_discount_device_bundle_new_customer;

            if ($tmp_check["data"]["record"]["price_with_max_discount_device_bundle_new_customer"] >= 0 &&
                $tmp_check["data"]["record"]["price_with_max_discount_device_bundle_new_customer"] != 9999999 &&
                $is_enable_device_bundle_new_customer
            ) {
                $tmp_check["data"]["record"]["product_type"]    = "device_bundle_new_customer";
                $tmp_check["data"]["record"]["is_mnp_bundling"] = $is_enable_mnp_bundling;
            }

            $content[1] = json_encode($tmp_check);
        }

        if (isset($tmp_check["data"]["record"]["product_type"]) &&
            in_array($tmp_check["data"]["record"]["product_type"], ["product", "device_bundle_new_customer"])
        ) {
            if (!empty(json_decode($content_product_verify_postpaid[1], true))) {
                $tmp = json_decode($content_product_verify_postpaid[1], true);

                $sim_status = array_get($tmp, 'status');
                $sim_type   = array_get($tmp, 'sim_type');
                if ($sim_status == "active") {
                    $tmp_check["data"]["record"]["old_product_type"] = $tmp_check["data"]["record"]["product_type"];

                    if ($sim_type === "postpaid") {
                        $tmp_check["data"]["record"]["product_type"] = "postpaid";
                    } elseif ($sim_type === "prepaid") {
                        $tmp_check["data"]["record"]["product_type"] = "prepaid";
                    }

                    $content[1] = json_encode($tmp_check);
                }
            }

            foreach ($tmp_content_get_product_id_config["product_type_convert_list"] as $product_type_name) {
                if (isset($tmp_content_get_product_id_config[$product_type_name])) {
                    foreach ($tmp_content_get_product_id_config[$product_type_name] as $v) {
                        if ($v["id"] == $product_id && $tmp_check["data"]["record"]["product_type"] != "device_bundle_new_customer" &&
                            $tmp_check["data"]["record"]["product_type"] != "device_bundle_existing"
                        ) {
                            // is id in that product type in json or not
                            // remove one_campaign check on tec-2035
                            $tmp_check["data"]["record"]["product_type"] = $product_type_name;
                            $content[1]                                  = json_encode($tmp_check);
                            break;
                        }
                    }
                }
            }
        }

        // check restriction
        $campaign_ids = array_get($tmp_check, 'data.record.campaign', []);

        if (!empty($campaign_ids) && is_array($campaign_ids)) {
            $campaign_ids = array_column($campaign_ids, 'id');
        } else {
            $campaign_ids = [];
        }

        foreach ($campaign_ids as $camp_id) {
            $promo = array_get($tmp_content_get_product_id_config, 'campaigns.' . $camp_id);

            if (array_get($promo, 'path') === 'restriction') {
                $tmp_check["data"]["record"]["product_type"] = 'restriction';
                break;
            }
        }
        // end check restriction

        if (isset($tmp_check["data"]["record"]["inventories"])) {
            foreach ($tmp_check["data"]["record"]["inventories"] as $tmp_key => $tmp_value) {
                $tmp_product_inventory_index = $tmp_key;

                if ($tmp_check["data"]["record"]["inventories"][$tmp_product_inventory_index]["compare_at_price"] > 0 &&
                    $tmp_check["data"]["record"]["inventories"][$tmp_product_inventory_index]["price"] == 0 &&
                    isset($tmp_check["data"]["record"]["product_type"]) &&
                    in_array($tmp_check["data"]["record"]["product_type"], ["multi_campaign_type", "one_campaign_type"]) &&
                    empty(array_get($tmp_check, "data.record.is_addon"))
                ) {
                    $tmp_check["data"]["record"]["inventories"][$tmp_product_inventory_index]["price"] = $tmp_check["data"]["record"]["inventories"][$tmp_product_inventory_index]["compare_at_price"];
                } elseif ($tmp_check["data"]["record"]["inventories"][$tmp_product_inventory_index]["compare_at_price"] == 0 &&
                    $tmp_check["data"]["record"]["inventories"][$tmp_product_inventory_index]["price"] > 0
                ) {
                    $tmp_check["data"]["record"]["inventories"][$tmp_product_inventory_index]["compare_at_price"] = $tmp_check["data"]["record"]["inventories"][$tmp_product_inventory_index]["price"];
                }
            }
            $content[1] = json_encode($tmp_check);
        }

        if (isset($tmp_check["data"]["record"]) && isset($content_product_verify_postpaid[1]) && gettype($content_product_verify_postpaid[1]) == "string" &&
            json_decode($content_product_verify_postpaid[1], true)
        ) {
            $tmp_check["data"]["record"]["sim_data"] = json_decode($content_product_verify_postpaid[1], true);
            if (array_get($tmp_check, 'data.record.product_type') === 'mnp') {
                $mnp_price_plan_params_search = [
                    'sim_type' => array_get($tmp_check, 'data.record.sim_data.sim_type'),
                    'nas_code' => array_get($tmp_check, 'data.record.sim_data.propo_code'),
                    'limit'    => '200',
                ];
                if (Redis::exists('cache-price-plan-search-mnp:' . array_get($tmp_check, 'data.record.sim_data.propo_code')) != null) {
                    $mnp_price_plan = json_decode(Redis::get('cache-price-plan-search-mnp:' . array_get($tmp_check, 'data.record.sim_data.propo_code')), true);
                } else {
                    $tmp_lrequest_mnp = new \Illuminate\Http\Request();
                    $tmp_lrequest_mnp->setMethod(strtoupper('GET'));
                    $tmp_lrequest_mnp->replace($mnp_price_plan_params_search);
                    $mnp_price_plan = self::getPricePlanSearch('', '', $tmp_lrequest_mnp, '');
                    Redis::set('cache-price-plan-search-mnp:' . array_get($tmp_check, 'data.record.sim_data.propo_code'), json_encode($mnp_price_plan, true), 'EX', 60);
                }

                if (array_get($mnp_price_plan, '0') === 200) {
                    $mnp_price_plan_array                       = json_decode(array_get($mnp_price_plan, '1'), true);
                    $tmp_check['data']['record']['mnp_package'] = array_get($mnp_price_plan_array, 'data.record');
                }
            }
            $content[1] = json_encode($tmp_check);
        }

        if (count(explode("L", $product_id)) > 1) {
            // start of get bundle-existing get discount list
            $tmp_lrequest = new \Illuminate\Http\Request();
            $tmp_lrequest->setMethod(strtoupper("get"));
            $tmp_url               = "truemoveh/bundle-existing";
            $tmp_request_parameter = ["product_id" => explode("L", $product_id)[1]];
            $tmp_lrequest->replace($tmp_request_parameter);
            $tmp_header                     = [];
            $content_device_bundle_existing = WlsService::getBundleExisting($tmp_url, "GET", $tmp_lrequest, $tmp_header);

            $max_discount    = 0;
            $check_rc_unique = [];

            $tmp_refcode_content_list = ConfigService::getBundleCampaign($product_id);
            $typhoon_discount_list    = [];
            $token_type               = '';

            if (!$bypass && !empty($tmp_refcode_content_list)) {
                $_tmp_refcode_content_list = json_decode($tmp_refcode_content_list, true);
                if (empty($type)) {
                    $_tmp_refcode_content = array_values($_tmp_refcode_content_list);
                    // check campaign
                    if (empty($tmp_bundle_existing_ref_codes)) {
                        $tmp_bundle_existing_ref_codes = [[]];
                    }
                    $tmp_bundle_existing_ref_codes = array_column($_tmp_refcode_content, 'bundle_existing_ref_codes');

                    if (!empty($tmp_bundle_existing_ref_codes)) {
                        $typhoon_discount_list = array_unique(array_merge(...$tmp_bundle_existing_ref_codes));
                    }

                } else {
                    $token_type            = empty($cart_type) ? $type : $type . '-' . strtolower($cart_type);
                    $tmp_refcode_content   = array_get($_tmp_refcode_content_list, $token_type);
                    $typhoon_discount_list = array_get($tmp_refcode_content, 'bundle_existing_ref_codes', []);
                }
            }

            if (isset(json_decode($content_device_bundle_existing[1], true)["data"]["record"])) {
                if (isset(json_decode($content_device_bundle_existing[1], true)["data"]["record"])) {
                    $tmp_discount_data = json_decode($content_device_bundle_existing[1], true);
                }

                foreach (json_decode($content_device_bundle_existing[1], true)["data"]["record"] as $key_bundle_existing => $value_bundle_existing) {
                    if (\Arr::get($tmp_check, "data.record.is_pay_smooth") && in_array(\Arr::get($value_bundle_existing, "campaign_type"), ["1", "2"])) {
                        \Arr::set($tmp_discount_data, "data.record.$key_bundle_existing.discount_list", []);
                        continue;
                    }
                    if (isset($value_bundle_existing["discount_list"])) {
                        foreach ($value_bundle_existing["discount_list"] as $key_discount_bundle_existing => $value_discount_bundle_existing) {
                            $temp_key_check_rc = implode("_", [
                                $value_bundle_existing["campaign_type"],
                                $value_discount_bundle_existing["rc"],
                                $value_discount_bundle_existing["product_code"],
                                $value_discount_bundle_existing["discount"],
                                $value_discount_bundle_existing["advance_payment"],
                                $value_discount_bundle_existing["aging"],
                            ]);

                            // start of TEC-1756 is_trueblack lv d support
                            $tmp_prefix        = "data.record.$key_bundle_existing.discount_list.$key_discount_bundle_existing";
                            $campaign_ref_code = array_get($tmp_discount_data, "$tmp_prefix.campaign_code");
                            if (!empty($campaign_ref_code)) {
                                if (!empty(Redis::get("truestore:is_trueblack:campaign_ref_code:$campaign_ref_code:redis_data"))) {
                                    array_set($tmp_discount_data, "$tmp_prefix.is_trueblack", true);
                                }
                            }
                            // end of TEC-1756 is_trueblack lv d support

                            // add key for unique trueblack and typhoon campaign (for don't remove first)
                            if (array_get($value_discount_bundle_existing, "is_trueblack")) {
                                $temp_key_check_rc .= '_trueblack';
                            }
                            if (in_array($value_discount_bundle_existing["campaign_code"], $typhoon_discount_list)) {
                                $temp_key_check_rc .= '_typhoon';
                            }

                            if ($value_bundle_existing["campaign_type"] == "4") {
                                $temp_key_check_rc .= '_' . $value_discount_bundle_existing["campaign_code"];
                            }

                            $paysmooth_down_payment_rate = \Arr::get($value_discount_bundle_existing, "bundle_campaign_student_loan.down_payment_rate");
                            $paysmooth_tenor             = \Arr::get($value_discount_bundle_existing, "bundle_campaign_student_loan.tenor");
                            if (!empty($paysmooth_down_payment_rate)) {
                                $temp_key_check_rc .= '_' . $paysmooth_down_payment_rate;
                            }
                            if (!empty($paysmooth_tenor)) {
                                $temp_key_check_rc .= '_' . $paysmooth_tenor;
                            }
                            if (\Arr::get($tmp_check, "data.record.is_pay_smooth") && $is_pass_paysmooth_verify && (empty($paysmooth_down_payment_rate) || empty($paysmooth_tenor))) {
                                unset($tmp_discount_data["data"]["record"][$key_bundle_existing]["discount_list"][$key_discount_bundle_existing]);
                                continue;
                            } elseif (\Arr::get($tmp_check, "data.record.is_pay_smooth") && !$is_pass_paysmooth_verify && (!empty($paysmooth_down_payment_rate) || !empty($paysmooth_tenor))) {
                                unset($tmp_discount_data["data"]["record"][$key_bundle_existing]["discount_list"][$key_discount_bundle_existing]);
                                continue;
                            }

                            if (!isset($check_rc_unique[$temp_key_check_rc])) {
                                $check_rc_unique[$temp_key_check_rc] = 1;
                            } else {
                                unset($tmp_discount_data["data"]["record"][$key_bundle_existing]["discount_list"][$key_discount_bundle_existing]);
                                continue;
                            }

                            if (isset($value_discount_bundle_existing["discount"]) && $value_discount_bundle_existing["discount"] > $max_discount &&
                                $value_discount_bundle_existing["product_code"] && $value_bundle_existing["campaign_type"] != "4"
                            ) {
                                $sku_max_discount             = $value_discount_bundle_existing["product_code"];
                                $max_discount                 = $value_discount_bundle_existing["discount"];
                                $bundle_existing_max_discount = $max_discount;
                            }

                            if (isset($value_discount_bundle_existing["is_trueblack"])) {
                                $tmp_discount_data["data"]["record"][$key_bundle_existing]["discount_list"][$key_discount_bundle_existing]["is_trueblack"] = (bool) $value_discount_bundle_existing["is_trueblack"];
                            }
                            if (!isset($value_discount_bundle_existing["package_name"])) {
                                $tmp_discount_data["data"]["record"][$key_bundle_existing]["discount_list"][$key_discount_bundle_existing]["package_name"] = "no_data";
                            }
                        }
                        $tmp_discount_data["data"]["record"][$key_bundle_existing]["discount_list"] = array_values($tmp_discount_data["data"]["record"][$key_bundle_existing]["discount_list"]);
                    }
                }
                $content_device_bundle_existing[1] = json_encode($tmp_discount_data);
            }
            if (isset($tmp_check["data"]["record"]) && gettype($tmp_check["data"]["record"]) == "array" &&
                isset($content_device_bundle_existing[1]) &&
                isset(json_decode($content_device_bundle_existing[1], true)["data"]["record"])
            ) {
                $tmp_check["data"]["record"]["bundle_existing"] = json_decode($content_device_bundle_existing[1], true)["data"]["record"];
            }

            // add max_discount field to promotion array
            if (isset($sku_max_discount) && isset($tmp_check["data"]["record"]["promotion"]) && gettype(($tmp_check["data"]["record"]["promotion"])) == "array") {
                foreach ($tmp_check["data"]["record"]["promotion"] as $key => $value) {
                    $tmp_check["data"]["record"]["promotion"][$key]["max_discount"] = $bundle_existing_max_discount;
                }
                $content[1] = json_encode($tmp_check);
            }
            // add max_discount field to campaign array
            if (isset($sku_max_discount) && isset($tmp_check["data"]["record"]["campaign"]) && gettype(($tmp_check["data"]["record"]["campaign"])) == "array") {
                foreach ($tmp_check["data"]["record"]["campaign"] as $key => $value) {
                    $tmp_check["data"]["record"]["campaign"][$key]["max_discount"] = $bundle_existing_max_discount;
                }
                $content[1] = json_encode($tmp_check);
            }
            // end of get bundle-existing get discount list
            // add cloud_campaign field to promotion array
            if (isset($tmp_check["data"]["record"]["promotion"]) && gettype(($tmp_check["data"]["record"]["promotion"])) == "array") {
                $cloud_campaign_map = [];
                $promotion_ids      = array_get($tmp_check, 'data.record.promotion', []);

                if (!empty($promotion_ids) && is_array($promotion_ids)) {
                    $promotion_ids = array_column($promotion_ids, 'id');
                } else {
                    $promotion_ids = [];
                }

                foreach ($promotion_ids as $promo_id) {

                    $promo = array_get($tmp_content_get_product_id_config, 'campaigns.' . $promo_id);
                    if (array_get($promo, 'cloud_campaign')) {
                        $cloud_campaign_map[$promo_id] = array_get($promo, 'cloud_campaign');
                    }
                }

                foreach ($tmp_check["data"]["record"]["promotion"] as $key => $value) {
                    $cloud_campaign_content = \Arr::get($cloud_campaign_map, \Arr::get($value, "id"));
                    if (!empty($cloud_campaign_content)) {
                        \Arr::set($tmp_check, "data.record.promotion.$key.cloud_campaign", $cloud_campaign_content);
                    }
                }
            }
            // end of cloud_campaign field to promotion array

            // start of get device only price
            $inventory_id_list      = array_keys($map_sku_to_inventory_id);
            $tmp_device_only_result = WeOmniService::postGetDeviceOnlyDiscount($inventory_id_list);
            if (!empty($tmp_device_only_result)) {
                $tmp_check["data"]["record"]["device_only"] = $tmp_device_only_result;
                foreach ($tmp_device_only_result as $tmp_device_only_result_key => $tmp_device_only_result_value) {
                    if (isset($inventory_list_data[$tmp_device_only_result_key]["key"])) {
                        $tmp_inventories_key                                                                      = $inventory_list_data[$tmp_device_only_result_key]["key"];
                        $tmp_check["data"]["record"]["inventories"][$tmp_inventories_key]["device_only_discount"] = $tmp_device_only_result_value;
                    }
                }
            }
            // end of get device only price

            // start of lv-d additional banner and new_customer_text
            $content_additional                  = WeOmniService::getLvDAdditional($product_id);
            $json_decode_content_additional_body = json_decode($content_additional[1], true);

            if ($content_additional[0] < 300 && isset($json_decode_content_additional_body["additional"])) {
                if (isset($tmp_check["data"]["record"])) {
                    $tmp_check["data"]["record"]["additional"] = $json_decode_content_additional_body["additional"];
                }
            }
            // end of add additional discount_on_top for product_id lv d api
        }

        $is_mock_privilege = false;
        // for mock sku
        if (isset($tmp_check["data"]["record"]["id"]) &&
            isset($tmp_check["data"]["record"]["inventories"][0]["sku"])
            && $is_mock_privilege
            && $tmp_check["data"]["record"]["id"] == "L91201541"
        ) {
            $tmp_check["data"]["record"]["inventories"][0]["sku"] = "3000078509";
        }

        // check bundling campaign type 4
        $bundle_existings = array_get($tmp_check, 'data.record.bundle_existing', []);

        if (in_array('4', array_column($bundle_existings, 'campaign_type'))) {
            $tmp_check['data']['record']['is_mnp_bundling'] = true;
        }

        if (!$bypass && !empty($tmp_refcode_content_list)) {
            $tmp_refcode_content_list = json_decode($tmp_refcode_content_list, true);
            $bundles                  = [];
            if (empty($type)) {
                $tmp_refcode_content           = array_values($tmp_refcode_content_list);
                $tmp_bundle_ref_codes          = array_column($tmp_refcode_content, 'bundle_ref_codes');
                $tmp_bundle_existing_ref_codes = array_column($tmp_refcode_content, 'bundle_existing_ref_codes');

                if (empty($tmp_bundle_ref_codes)) {
                    $tmp_bundle_ref_codes = [[]];
                }

                $typhoon_bundle_list = array_merge(...$tmp_bundle_ref_codes);

                foreach (array_get($tmp_check, "data.record.bundles", []) as $bundle) {
                    if (!in_array($bundle["ref_code"], $typhoon_bundle_list)) {
                        $bundles[] = $bundle;
                    }
                }
                // check campaign
                if (empty($tmp_bundle_existing_ref_codes)) {
                    $tmp_bundle_existing_ref_codes = [[]];
                }

                $typhoon_discount_list             = array_unique(array_merge(...$tmp_bundle_existing_ref_codes));
                $default_bundle_existing_ref_codes = array_get($tmp_refcode_content_list, 'default.bundle_existing_ref_codes', []);
                $typhoon_discount_list             = array_values(array_diff($typhoon_discount_list, $default_bundle_existing_ref_codes));

                // filter bundle existings
                foreach ($bundle_existings as $key => $bundle_existing) {
                    $filter_list   = [];
                    $discount_list = array_get($bundle_existing, 'discount_list', []);
                    foreach ($discount_list as $discount) {
                        $campaign_code = array_get($discount, 'campaign_code');
                        if (!in_array($campaign_code, $typhoon_discount_list)) {
                            $filter_list[] = $discount;
                        }
                    }
                    $bundle_existings[$key]['discount_list'] = $filter_list;
                }
            } else {
                $type                = empty($cart_type) ? $type : $type . '-' . strtolower($cart_type);
                $tmp_refcode_content = array_get($tmp_refcode_content_list, $type);
                $inventory_bundles   = [];
                foreach (array_get($tmp_check, "data.record.bundles", []) as $bundle) {
                    if (in_array($bundle["ref_code"], array_get($tmp_refcode_content, 'bundle_ref_codes', [])) &&
                        array_get($bundle, 'inventory_id') != null) {
                        $bundle["is_typhoon"]                       = true;
                        $inventory_bundles[$bundle["inventory_id"]] = true;
                        $bundles[]                                  = $bundle;
                    }
                }

                // filter bundle existings
                $typhoon_existings = array_get($tmp_refcode_content, 'bundle_existing_ref_codes', []);
                foreach ($bundle_existings as $key => $bundle_existing) {
                    $filter_list   = [];
                    $discount_list = array_get($bundle_existing, 'discount_list', []);
                    foreach ($discount_list as $discount) {
                        $campaign_code = array_get($discount, 'campaign_code');
                        if (in_array($campaign_code, $typhoon_existings)) {
                            $filter_list[] = $discount;

                            $product_code                     = array_get($discount, 'product_code');
                            $inventory_bundles[$product_code] = true;
                        }
                    }
                    $bundle_existings[$key]['discount_list'] = $filter_list;
                }

                $filter_inventories = [];
                foreach ($tmp_check["data"]["record"]["inventories"] as $inventory) {
                    if (array_key_exists($inventory["id"], $inventory_bundles) || array_key_exists($inventory["sku"], $inventory_bundles)) {
                        $filter_inventories[] = $inventory;
                    }
                }
                $tmp_check["data"]["record"]["inventories"]        = $filter_inventories;
                $tmp_check["data"]["record"]["is_typhoon_product"] = true;
                $tmp_check["data"]["record"]["group_type"]         = $type;
            }

            $tmp_check["data"]["record"]["special_campaign"] = array_get($tmp_refcode_content_list, "$type.special_campaign", []);
            $tmp_check["data"]["record"]["bundles"]          = $bundles;
            $tmp_check["data"]["record"]["bundle_existing"]  = $bundle_existings;
        }

        if ($lrequest->header('use-thai-id') === '1') {
            $tmp_check['data']['record']['autofill'] = [
                'thai_id' => $thai_id,
            ];
        }

        if (ConfigService::isNoFreeShippingProduct($product_id)) {
            Arr::set($tmp_check, 'data.record.no_free_shipping_products', true);
        }

        Arr::set($tmp_check, 'data.record.config_free_device', ConfigService::getFreeDeviceExcludeVat($product_id));

        $product_description = ProductService::getConfigProductDescription($product_id);
        if (!empty($product_description)) {
            Arr::set($tmp_check, 'data.record.body_custom_html', $product_description);
        }

        $tmp_check  = self::buildNodeIot($tmp_check, $product_id);
        $tmp_check  = self::buildNodeProductSpacialDetail($tmp_check, $product_id);
        $tmp_check  = self::buildNodeTermAndCondition($tmp_check, $product_id);
        $tmp_check  = ProductService::buildNodeSimSourceType($tmp_check, $product_id, $header_product_type);
        $content[1] = json_encode($tmp_check);

        return $content;
    }

    public static function getBalancePointWls($url, $method, $lrequest, $header)
    {
        // log in to fetch user_id, access_token
        $result = App('App\Http\Controllers\APIController')->fetchTrueidApi($lrequest);

        if ($result['status_code'] != 0 && $result['status_code'] != 200) {
            return $result;
        }

        $result_from_trueid_api = json_decode($result["body"], true);

        $result = App('App\Http\Controllers\APIController')->decodeFromTrueidApi($result_from_trueid_api);
        if ($result['status_code'] != 0 && $result['status_code'] != 200) {
            return $result;
        }
        $uid   = $result["body"]["uid"];
        $array = get_object_vars($uid);
        $url   = "account-app/login";
        // get input from decoded jwt access token
        $access_token = $result_from_trueid_api["access_token"];
        $user_id      = array_get($array, 'sub', array_get(get_object_vars(array_get($array, "profiles", json_decode(json_encode((object) [])))), 'uid'));

        $request_token = new \Illuminate\Http\Request();
        $request_token->setMethod('POST');
        $payload                               = $lrequest->post();
        $request_token_parameter               = [];
        $request_token_parameter['api_key']    = env('WEMALL_API_KEY');
        $request_token_parameter['api_secret'] = env('WEMALL_API_SECRET');

        $request_token->merge($request_token_parameter);

        $header = [
            'Content-Type' => 'application/json',
            "x-api-auth"   => env('X_API_AUTH', false),
        ];

        $old_url = $url;
        $url     = "cpoint/authen";

        $content = GuzzleService::postGuzzleRequest(
            $url,
            $method,
            $request_token,
            $header,
            env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
        ); // wemall api

        if ($content[0] != 200) {
            $status_code = 500;
            $body        = ["message" => ["en" => "unable to fetch user's point", "th" => "ไม่สามารถนำเข้าข้อมูลคะแนนผู้ใช้ได้"]];
            $content     = ["status_code" => $status_code, "body" => $body];

            return $content;
        } else {
            $tmp_from_fetch_api_token = json_decode($content[1], true);
            $api_token                = $tmp_from_fetch_api_token['api_token'];

            $request_token = new \Illuminate\Http\Request();
            $request_token->setMethod('POST');
            $request_token_parameter               = [];
            $request_token_parameter['api_token']  = $api_token;
            $request_token_parameter['partner_id'] = "1";

            $request_token_parameter['user_id']      = $user_id;
            $request_token_parameter['access_token'] = $access_token;
            $payload                                 = $lrequest->post();

            $request_token->replace($request_token_parameter);

            $header = [
                "Content-Type" => "application/json",
                "x-api-auth"   => env('X_API_AUTH', false),
            ];
            $url = "cpoint/request-user";

            $content = GuzzleService::postGuzzleRequest(
                $url,
                $method,
                $request_token,
                $header,
                env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
            ); // wemall api
        }

        return $content;
    }

    public static function cartActionWls($url, $method, $lrequest, $header)
    {
        $tmp_old_url_explode = explode("/", $url);
        // start of cart_hash, id section
        if (!isset($tmp_old_url_explode[2]) && $method == "post") {
            $cart_hash = Str::random(40);
            $url .= "/" . $cart_hash;
        } elseif ($method == "post") {
            $cart_hash = $tmp_old_url_explode[2];
        } elseif ($method != "post") {
            if (!isset($tmp_old_url_explode[2])) {
                $status_code = 400;
                $body        = ["message" => ["en" => "no cart id found", "th" => "ไม่พบ cart id"]];
                $content     = ["status_code" => $status_code, "body" => $body];

                return $content;
            }
            $cart_hash = $tmp_old_url_explode[2];
        }

        // check request sim
        $product_id            = $lrequest->input('0.product_id');
        $verification_required = TyphoonService::getVerificationRequiredRedis($product_id);
        // check token coupon
        $token_coupon = $lrequest->input('0.token_coupon');

        $clear_cart = !empty($token_coupon) || !empty($verification_required);
        if ($method === 'put' && $clear_cart) {
            // clear cart
            $redis_keys = Redis::keys("*$cart_hash*");
            if (!empty($redis_keys)) {
                Redis::del($redis_keys);
            }
            $cart_hash = Str::random(40);
        }
        // end of cart_hash, id section

        $header["Content-Type"] = "application/x-www-form-urlencoded";
        $header["x-api-auth"]   = env('X_API_AUTH', false);

        $tmp_old_url_explode = explode("/", $url);
        $url                 = "wportal/cart";
        $url .= "/" . $cart_hash;

        $is_mock = false;

        $user_id = 0;

        if (($method == "post" || $method == "put") && $lrequest->headers->has('Authorization') &&
            !empty(\Illuminate\Support\Facades\Request::header('Authorization')) &&
            $lrequest->has('0.login_trueid_access_token_type') && $lrequest->input('0.login_trueid_access_token_type') == "trueid_access_token"
        ) {
            $tmp_lrequest = new \Illuminate\Http\Request();
            $tmp_lrequest->setMethod('POST');
            $tmp_lrequest->headers->set('Authorization', \Illuminate\Support\Facades\Request::header('Authorization'));

            $tmp_result_fetch_trueid_api = App('App\Http\Controllers\APIController')->fetchTrueidApi($tmp_lrequest);
            $message_truecard_id         = Str::uuid()->toString();
            $log_message_str             = "message_id = $message_truecard_id, error truecard log 0, url = $url, data: " . json_encode_unicode($lrequest->all()) . ", body: " . json_encode_unicode($tmp_result_fetch_trueid_api);
            LogService::writeActionLog($lrequest, $log_message_str);
            if ($tmp_result_fetch_trueid_api['status_code'] != 0 && $tmp_result_fetch_trueid_api['status_code'] != 200) {
                $log_message_str = "message_id = $message_truecard_id, error truecard log 1, url = $url, data: " . json_encode_unicode($lrequest->all()) . ", body: " . json_encode_unicode($tmp_result_fetch_trueid_api);
                LogService::writeActionLog($lrequest, $log_message_str);

                return $tmp_result_fetch_trueid_api;
            }
            $result_from_trueid_api      = json_decode($tmp_result_fetch_trueid_api["body"], true);
            $tmp_result_fetch_trueid_api = App('App\Http\Controllers\APIController')->decodeFromTrueidApi($result_from_trueid_api);
            if ($tmp_result_fetch_trueid_api['status_code'] != 0 && $tmp_result_fetch_trueid_api['status_code'] != 200) {
                $log_message_str = "message_id = $message_truecard_id, error truecard log 2, url = $url, data: " . json_encode_unicode($lrequest->all()) . ", body: " . json_encode_unicode($tmp_result_fetch_trueid_api);
                LogService::writeActionLog($lrequest, $log_message_str);

                return $tmp_result_fetch_trueid_api;
            }
            $log_message_str = "message_id = $message_truecard_id, error truecard log 3, url = $url, data: " . json_encode_unicode($lrequest->all()) . ", body: " . json_encode_unicode($tmp_result_fetch_trueid_api);
            LogService::writeActionLog($lrequest, $log_message_str);
            $uid   = $tmp_result_fetch_trueid_api["body"]["uid"];
            $array = get_object_vars($uid);
            // get input from decoded jwt access token
            $user_id         = array_get($array, 'sub', array_get(get_object_vars(array_get($array, "profiles", json_decode(json_encode((object) [])))), 'uid'));
            $is_add_truecard = true;

            $log_message_str = "message_id = $message_truecard_id, error truecard log 4, url = $url, data: " . json_encode_unicode($lrequest->all()) . ", body: " . json_encode_unicode(["uid" => $uid, "user_id" => $user_id]);
            LogService::writeActionLog($lrequest, $log_message_str);
        }

        // start of edit body of request (parameters)
        if ($method == "get") {
            $request_token_parameter            = [];
            $request_token_parameter['section'] = "wemall";
            $request_token_parameter['lang']    = "th";
            $request_token_parameter['user_id'] = "0";
            $request_token_parameter['channel'] = "tmh-website";
            $payload                            = $lrequest->post();
            $lrequest->replace($request_token_parameter);
        } elseif ($method == "delete" && count($lrequest->all()) == 0) {
            $request_token_parameter            = [];
            $request_token_parameter['section'] = "wemall";
            $request_token_parameter['type']    = "all";
            $request_token_parameter['user_id'] = "0";
            $request_token_parameter['channel'] = "tmh-website";
            $payload                            = $lrequest->post();
            $lrequest->replace($request_token_parameter);

            Redis::del("store:verify:cart_id:$cart_hash:privilege_placeorder");
        }

        $delete_related_product_list = [];
        if ($lrequest->has('product_id')) {
            $product_id = $lrequest->input('product_id');
            $tmp_url    = "wportal/product/" . $product_id;

            if ($lrequest->isMethod('get')) {
                $original_method = "GET";
            } elseif ($lrequest->isMethod('post')) {
                $original_method = "POST";
            } elseif ($lrequest->isMethod('put')) {
                $original_method = "PUT";
            } elseif ($lrequest->isMethod('delete')) {
                $original_method = "DELETE";

                $cart_data = Redis::get("store:cart_id:$cart_hash");

                $check_cart_data = json_decode($cart_data, true);
                if (!empty($check_cart_data) && is_array($check_cart_data) && isset($check_cart_data["discount"])) {
                    foreach ($check_cart_data['discount'] as $key => $value) {
                        if ($value["product_id"] == $lrequest->input('product_id')) {
                            unset($check_cart_data['discount'][$key]);
                        }
                    }
                    if (empty($check_cart_data['discount'])) {
                        Redis::del("store:cart_id:$cart_hash");
                    } else {
                        Redis::set('store:cart_id:' . $cart_hash, json_encode(["discount" => $check_cart_data['discount']]));
                    }
                }
            }

            $request_token = new \Illuminate\Http\Request();
            $request_token->setMethod('GET');
            $tmp_request_token_parameter = [];
            if ($method == "delete") {
                $tmp_request_token_parameter["product_status"] = "all";
                if (!empty($lrequest->input('product_id')) && !empty($lrequest->input('inventory_id'))) {
                    $delete_related_product_list[] = ["product_id" => $lrequest->input('product_id'), "inventory_id" => $lrequest->input('inventory_id')];

                }
            }
            $request_token->replace($tmp_request_token_parameter);
            $result            = App('App\Http\Controllers\APIController')->callAPIContent($tmp_url, $request_token, true);
            $result_body_array = json_decode($result["body"], true);

            $is_unable_to_access_product_api = false;
            if (!isset($result_body_array["status_code"]) || (isset($result_body_array["status_code"]) && $result_body_array["status_code"] >= 300)) {
                $is_unable_to_access_product_api = true;
            } elseif (isset(json_decode($result["body"], true)["data"]["record"])) {
                $product_detail_from_api = json_decode($result["body"], true)["data"]["record"];
            } else {
                $body = ["status_code" => 400, "body" => ["message" => ["en" => "unable to access product data base on product_id, inventory_id specified", "th" => "ไม่สามารถเข้าถึงข้อมูลสินค้าได้จากรหัสสินค้าที่ระบุ"]]];

                return $body;
            }

            $request_token_parameter = [];

            foreach ($lrequest->all() as $key => $value) {
                $request_token_parameter[$key] = $value;
            }

            if (isset($request_token_parameter["customer_info"]["idn_no"]) && false) {
                // TODO: enable this to prevent manually set from outside
                unset($request_token_parameter["customer_info"]["idn_no"]);
            }

            $request_token_parameter['section'] = "wemall";
            $request_token_parameter['user_id'] = "0";
            $request_token_parameter['channel'] = "tmh-website";

            // find store_id
            if (!$is_unable_to_access_product_api) {
                $store_id                            = $product_detail_from_api["store_id"];
                $request_token_parameter['store_id'] = $store_id;
            }

            $payload = $lrequest->post();
            $lrequest->setMethod($original_method);

            $lrequest->replace($request_token_parameter);
        }

        $is_first = true;
        if (count($lrequest->all()) > 0 && $method == "get") {
            if ($is_first) {
                $url .= '?';
                $is_first = false;
            }
            foreach ($lrequest->all() as $key => $value) {
                $url .= $key . '=' . $value . '&';
            }
        }

        // start of add fix tmh-278-truecard-add-cart
        if (isset($is_add_truecard) && $is_add_truecard && isset($user_id) && $user_id != 0) {
            $request_token_parameter = [0 => []];
            foreach ($lrequest->all() as $key => $value) {
                $request_token_parameter[$key] = $value;
            }
            $request_token_parameter[0]["customer_info"]             = [];
            $request_token_parameter[0]["customer_info"]["idn_no"]   = $user_id;
            $request_token_parameter[0]["customer_info"]["idn_type"] = "TRUEID";
            $request_token_parameter["multi"]                        = [0 => []];
            $request_token_parameter["multi"][0]                     = $request_token_parameter[0];
            unset($request_token_parameter[0]);
            $lrequest->setMethod("PUT");
            $lrequest->replace($request_token_parameter);
        }
        // end of add fix tmh-278-truecard-add-cart

        if (($method == "delete" || $method == "put" || $method == "post") &&
            !(isset($is_add_truecard) && $is_add_truecard)
        ) {
            // update meta coupon code
            if (!empty($token_coupon) && $method === 'put') {
                $all_input   = array_get($lrequest->all(), 0);
                $new_request = [0 => array_merge($all_input, ['meta' => ['coupon_code' => $token_coupon]])];
                $lrequest->replace($new_request);
            }

            // start of remove all bundled product if exist
            $tmp_lrequest = new \Illuminate\Http\Request();
            $tmp_lrequest->setMethod(strtoupper("get"));
            $request_parameter                     = [];
            $request_parameter['section']          = "wemall";
            $request_parameter['lang']             = "th";
            $request_parameter['user_id']          = "0";
            $request_parameter['advance_payment']  = "1";
            $request_parameter['calculate_bundle'] = "true";
            $request_parameter['campaign_channel'] = "tmvh-official-website";
            $request_parameter['channel']          = "tmh-website";
            $payload                               = $lrequest->post();
            $tmp_lrequest->replace($request_parameter);
            $get_content = GuzzleService::postGuzzleRequest(
                $url,
                "get",
                $tmp_lrequest,
                $header,
                env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
            );
            $tmp_result_cart = json_decode($get_content[1], true);

            $cart_data = Redis::get("store:cart_id:$cart_hash");

            // start of tec-985
            if (in_array($method, ["post", "put"])) {
                // start of TEC-985 stop product in flow multi campaign without privilege

                if (!isset($product_detail_from_api)) {
                    $product_id = $lrequest->input('0.product_id');
                    $tmp_url    = "wportal/product/" . $product_id . "?product_status=all";

                    $request_token = new \Illuminate\Http\Request();
                    $request_token->setMethod('GET');
                    $result = App('App\Http\Controllers\APIController')->callAPIContent($tmp_url, $request_token, true);
                    if (isset($result["body"]) && gettype($result["body"]) == "string") {
                        $result_body_array = json_decode($result["body"], true);
                    }

                    $is_unable_to_access_product_api = false;
                    if (!isset($result_body_array["status_code"]) || (isset($result_body_array["status_code"]) && $result_body_array["status_code"] >= 300)) {
                        $is_unable_to_access_product_api = true;
                    }

                    if (!$is_unable_to_access_product_api) {
                        $product_detail_from_api = json_decode($result["body"], true)["data"]["record"];
                    }
                    $inv_id_to_sku = array_column($product_detail_from_api["inventories"], "sku", "id");
                    $product_code  = $inv_id_to_sku[$lrequest->input('0.inventory_id')];
                }

                $tmp_product                    = $product_detail_from_api;
                $cart_privilege_placeorder_data = Redis::get("store:verify:cart_id:$cart_hash:privilege_placeorder");
                $redis_body_array               = json_decode($cart_privilege_placeorder_data, true);

                if (!isset($product_code)) {
                    $inv_id_to_sku = array_column($product_detail_from_api["inventories"], "sku", "id");
                    $product_code  = $inv_id_to_sku[$lrequest->input('inventory_id')];
                }

                // start of get product id config for TEC-985
                $content_get_product_id_config = App('App\Http\Controllers\APIController')->getProductIdConfig($lrequest);
                if (empty($content_get_product_id_config) || $content_get_product_id_config[0] > 200) {
                    return $content_get_product_id_config;
                }

                $tmp_check = $content_get_product_id_config[1];

                $tmp_content_get_product_id_config = $content_get_product_id_config[1];
                $promotion_type_redis_config_list  = array_column($tmp_content_get_product_id_config["campaigns"], "json_name", "id");
                // end of get product id config TEC-985

                if (isset($tmp_product["promotion"][0]["id"])) {
                    $current_product_promotion_id_list = array_flip(array_column($tmp_product["promotion"], "id"));

                    $is_allow_add_product              = true;
                    $privilege_placeorder_product_type = array_get($redis_body_array, $tmp_product["id"] . "." . $product_code . ".product_type");
                    foreach ($promotion_type_redis_config_list as $each_promo_id => $each_json_name) {
                        if (isset($current_product_promotion_id_list[$each_promo_id])) {
                            $is_allow_add_product = false;
                        }
                        if ($each_json_name == $privilege_placeorder_product_type) {
                            $is_allow_add_product = true;
                            break;
                        }
                    }

                    if (!$is_allow_add_product) {
                        return [400, ["message" => ["en" => "not allow to add product without verification", "th" => "ไม่อนุญาตให้เพิ่มสินค้าโดยไม่ผ่านการยืนยันตัวตน"], "current_product_promotion_id_list" => $current_product_promotion_id_list, "promotion_type_redis_config_list" => $promotion_type_redis_config_list, "privilege_placeorder_product_type" => $privilege_placeorder_product_type]];
                    }
                }
                // end of TEC-985 stop product in flow multi campaign without privilege
            }
            // end of tec-985

            // start of check pickup at 7
            $pickup_at_seven = false;
            if (
                $lrequest->has('0.product_id') &&
                $lrequest->input('0.pickup', false) === 'true' &&
                in_array(strtoupper($method), ['POST', 'PUT'])
            ) {
                if (
                    count($lrequest->all()) > 1 ||
                    $lrequest->input('0.quantity') > 1
                ) {
                    return ['status_code' => 400, 'body' => ['message' => [
                        'en' => 'pickup_at_seven_quantity_limit',
                        'th' => 'จำกัดจำนวนสินค้า pickup at seven',
                    ]]];
                }
                $pickup_at_seven = true;
            }
            // end of check pickup at 7

            $sim_mnp_product_id      = Redis::get('store-mnp:content:sim_mnp_product_id') ?: 'L91591646';
            $lrequest_product_id     = $lrequest->input('product_id');
            $mnp_auto_products_redis = Redis::get('mnp-auto:products:' . $lrequest_product_id);
            $mnp_auto_cart           = false;
            if ($lrequest_product_id === $sim_mnp_product_id || isset($mnp_auto_products_redis)) {
                $mnp_auto_cart = true;
            }

            for ($store_index = 0;isset($tmp_result_cart["data"]["record"]) && $store_index < count($tmp_result_cart["data"]["record"]); $store_index++) {
                if (isset($tmp_result_cart["data"]["record"][$store_index]["products"])) {
                    foreach ($tmp_result_cart["data"]["record"][$store_index]["products"] as $tmp_product) {
                        $is_same_product_between_request_data_and_in_cart = (
                            $lrequest->has('product_id') &&
                            $lrequest->has('inventory_id') &&
                            $lrequest->input('product_id') == $tmp_product["id"] &&
                            $lrequest->input('inventory_id') == $tmp_product["inventory"]["id"]
                        );

                        if ($is_same_product_between_request_data_and_in_cart) {
                            // start of remove privilege placeorder
                            $cart_privilege_placeorder_data = Redis::get("store:verify:cart_id:$cart_hash:privilege_placeorder");
                            $redis_body_array               = json_decode($cart_privilege_placeorder_data, true);
                            $product_code                   = $tmp_product["inventory"]["sku"];

                            if ($method == "delete" && !empty($redis_body_array) &&
                                is_array($redis_body_array) &&
                                isset($redis_body_array[$product_id][$product_code])
                            ) {
                                unset($redis_body_array[$product_id][$product_code]);
                                if (empty($redis_body_array[$product_id])) {
                                    unset($redis_body_array[$product_id]);
                                }
                                if (empty($redis_body_array)) {
                                    Redis::del("store:verify:cart_id:$cart_hash:privilege_placeorder");
                                } else {
                                    Redis::set("store:verify:cart_id:$cart_hash:privilege_placeorder", json_encode($redis_body_array));
                                }
                            }
                            // end of remove privilege placeorder
                        }

                        // start of check device with same sku exists in ecom/cart
                        if ($method == "put" &&
                            $is_same_product_between_request_data_and_in_cart &&
                            !(
                                $lrequest->has('is_edit_product_quantity') &&
                                $lrequest->input('is_edit_product_quantity') == 1
                            )
                        ) {
                            $body                         = ["status_code" => 400, "body" => ["message" => ["en" => "sku_limit", "th" => "sku_limit"]]];
                            $body["body"]["product_id"]   = $tmp_product["id"];
                            $body["body"]["inventory_id"] = $tmp_product["inventory"]["id"];
                            $body["body"]["cart_hash"]    = $cart_hash;

                            return $body;
                        }
                        // end of check device with same sku exists in ecom/cart

                        // start of check device with same sku exists in ecom/cart
                        if ($method == "put" &&
                            $is_same_product_between_request_data_and_in_cart &&
                            !(
                                $lrequest->has('is_edit_product_quantity') &&
                                $lrequest->input('is_edit_product_quantity') == 1
                            )
                        ) {
                            $body                         = ["status_code" => 400, "body" => ["message" => ["en" => "sku_limit", "th" => "sku_limit"]]];
                            $body["body"]["product_id"]   = $tmp_product["id"];
                            $body["body"]["inventory_id"] = $tmp_product["inventory"]["id"];
                            $body["body"]["cart_hash"]    = $cart_hash;

                            return $body;
                        }
                        // end of check device with same sku exists in ecom/cart

                        if ($lrequest->has('product_id') &&
                            $lrequest->has('inventory_id') &&
                            $lrequest->input('product_id') == $tmp_product["id"] &&
                            $tmp_product["product_type"] == "truecard"
                        ) {
                            $tmp_lrequest = new \Illuminate\Http\Request();
                            $tmp_lrequest->setMethod(strtoupper($method));
                            $request_token_parameter                 = [];
                            $request_token_parameter['product_id']   = $tmp_product["id"];
                            $request_token_parameter['inventory_id'] = $tmp_product["inventory"]["id"];
                            $request_token_parameter['section']      = "wemall";
                            $request_token_parameter['store_id']     = $store_id;
                            $request_token_parameter['channel']      = "tmh-website";

                            $delete_related_product_list[] = ["product_id" => $tmp_product["id"], "inventory_id" => $tmp_product["inventory"]["id"]];

                            $tmp_lrequest->replace($request_token_parameter);
                            $tmp_method  = "delete";
                            $tmp_content = GuzzleService::postGuzzleRequest(
                                $url,
                                $tmp_method,
                                $tmp_lrequest,
                                $header,
                                env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
                            );
                        }

                        // Remove accesssory
                        if ($lrequest->has('product_id') &&
                            $lrequest->has('inventory_id') &&
                            $lrequest->input('product_id') == $tmp_product["id"] &&
                            $lrequest->input('inventory_id') == $tmp_product["inventory"]["id"] &&
                            $method == "delete"
                        ) {
                            $accessories_key = 'truestore:product_id_accessories_data:product_id:' . $tmp_product["id"] . ':redis_data';
                            $segment_data    = Redis::get('truestore:segment_cart:' . $cart_hash . ':' . $tmp_product["id"] . ':content');

                            if (!empty($segment_data)) {
                                $segment_data    = json_decode($segment_data, true);
                                $segment         = array_get($segment_data, 'segment');
                                $lifestyle       = array_get($segment_data, 'lifestyle');
                                $accessories_key = 'truestore:product_id_accessories_data:product_id:' . $tmp_product["id"] . ':' . $segment . ':' . $lifestyle . ':redis_data';
                            }

                            $accessories_list = Redis::get($accessories_key);
                            if (!empty($accessories_list)) {
                                $accessories_list = json_decode($accessories_list, true);
                                foreach ($accessories_list as $accessory) {
                                    $tmp_lrequest = new \Illuminate\Http\Request();
                                    $tmp_lrequest->setMethod(strtoupper($method));
                                    $request_token_parameter                 = [];
                                    $request_token_parameter['product_id']   = $accessory["product_id"];
                                    $request_token_parameter['inventory_id'] = $accessory["inventory_id"];
                                    $request_token_parameter['section']      = "wemall";
                                    $request_token_parameter['store_id']     = $store_id;
                                    $request_token_parameter['channel']      = "tmh-website";

                                    $delete_related_product_list[] = ["product_id" => $accessory["product_id"], "inventory_id" => $accessory["inventory_id"]];

                                    $tmp_lrequest->replace($request_token_parameter);
                                    $tmp_method  = "delete";
                                    $tmp_content = GuzzleService::postGuzzleRequest(
                                        $url,
                                        $tmp_method,
                                        $tmp_lrequest,
                                        $header,
                                        env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
                                    );
                                }
                                Redis::del('truestore:segment_cart:' . $cart_hash . ':' . $tmp_product["id"] . ':content');
                            }

                            // Remove entertainment package
                            $ent_pack_cart_redis = Redis::get('truestore:ent_pack_cart:' . $cart_hash . ':content');
                            if (!empty($ent_pack_cart_redis)) {
                                $ent_pack_cart = json_decode($ent_pack_cart_redis, true);

                                $main_product_id   = array_get($ent_pack_cart, 'entertainment_package_data.main_product_id');
                                $main_inventory_id = array_get($ent_pack_cart, 'entertainment_package_data.main_inventory_id');
                                if ($tmp_product["id"] === $main_product_id && $tmp_product["inventory"]["id"] === $main_inventory_id) {
                                    Redis::del('truestore:ent_pack_cart:' . $cart_hash . ':content');
                                }
                            }
                        }

                        if ($lrequest->has('product_id') &&
                            $lrequest->has('inventory_id') &&
                            $lrequest->input('product_id') == $tmp_product["id"] &&
                            $lrequest->input('inventory_id') == $tmp_product["inventory"]["id"] &&
                            isset($tmp_product["is_bundle"]) &&
                            $tmp_product["is_bundle"] == true &&
                            isset($tmp_product["bundles"][0]["inventories"]) &&
                            strtoupper($method) == "DELETE"
                        ) {
                            $tmp_lrequest = new \Illuminate\Http\Request();
                            $tmp_lrequest->setMethod(strtoupper($method));
                            foreach ($tmp_product["bundles"][0]["inventories"] as $tmp_product_in_bundle) {
                                $request_token_parameter = [];
                                foreach ($lrequest->all() as $key => $value) {
                                    $request_token_parameter[$key] = $value;
                                }

                                $request_token_parameter['product_id']      = $tmp_product_in_bundle["product_id"];
                                $request_token_parameter['inventory_id']    = $tmp_product_in_bundle["inventory_id"];
                                $request_token_parameter['bundle_hash']     = $tmp_product["bundles"][0]["id"];
                                $request_token_parameter['bundle_ref_code'] = $tmp_product["bundles"][0]["ref_code"];
                                $request_token_parameter['type']            = "bundle";
                                $request_token_parameter['section']         = "wemall";
                                $request_token_parameter['channel']         = "tmh-website";
                                $tmp_method                                 = "delete";

                                $delete_related_product_list[] = ["product_id" => $tmp_product_in_bundle["product_id"], "inventory_id" => $tmp_product_in_bundle["inventory_id"]];

                                $tmp_lrequest->replace($request_token_parameter);
                                $tmp_content = GuzzleService::postGuzzleRequest(
                                    $url,
                                    $tmp_method,
                                    $tmp_lrequest,
                                    $header,
                                    env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
                                );

                                // Remove accesssory
                                $accessories_key = 'truestore:product_id_accessories_data:product_id:' . $tmp_product_in_bundle["product_id"] . ':redis_data';
                                $segment_data    = Redis::get('truestore:segment_cart:' . $cart_hash . ':' . $tmp_product_in_bundle["product_id"] . ':content');

                                if (!empty($segment_data)) {
                                    $segment_data    = json_decode($segment_data, true);
                                    $segment         = array_get($segment_data, 'segment');
                                    $lifestyle       = array_get($segment_data, 'lifestyle');
                                    $accessories_key = 'truestore:product_id_accessories_data:product_id:' . $tmp_product_in_bundle["product_id"] . ':' . $segment . ':' . $lifestyle . ':redis_data';
                                }

                                $accessories_list = Redis::get($accessories_key);
                                if (!empty($accessories_list)) {
                                    $accessories_list = json_decode($accessories_list, true);
                                    foreach ($accessories_list as $accessory) {
                                        $tmp_lrequest = new \Illuminate\Http\Request();
                                        $tmp_lrequest->setMethod(strtoupper($method));
                                        $request_token_parameter                 = [];
                                        $request_token_parameter['product_id']   = $accessory["product_id"];
                                        $request_token_parameter['inventory_id'] = $accessory["inventory_id"];
                                        $request_token_parameter['section']      = "wemall";
                                        $request_token_parameter['store_id']     = $store_id;
                                        $request_token_parameter['channel']      = "tmh-website";

                                        $delete_related_product_list[] = ["product_id" => $accessory["product_id"], "inventory_id" => $accessory["inventory_id"]];

                                        $tmp_lrequest->replace($request_token_parameter);
                                        $tmp_method  = "delete";
                                        $tmp_content = GuzzleService::postGuzzleRequest(
                                            $url,
                                            $tmp_method,
                                            $tmp_lrequest,
                                            $header,
                                            env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
                                        );
                                    }
                                    Redis::del('truestore:segment_cart:' . $cart_hash . ':' . $tmp_product["id"] . ':content');
                                }
                            }
                            break;
                        }

                        // start of check prepaid quantity limit case
                        if ($lrequest->has('product_id') &&
                            $lrequest->has('inventory_id') &&
                            $lrequest->input('product_id') == $tmp_product["id"] &&
                            $lrequest->input('inventory_id') == $tmp_product["inventory"]["id"] && $method != "delete"
                        ) {
                            if (isset($tmp_product["campaign"]) && gettype($tmp_product["campaign"]) == "array") {
                                foreach ($tmp_product["campaign"] as $tmp_product_campaign_key => $tmp_product_campaign_value) {
                                    if (isset($tmp_product_campaign_value["quantity_limit"]) && $tmp_product_campaign_value["quantity_limit"] > 0) {
                                        $is_tmp_error_quantity_limit_to_one = true;
                                        break;
                                    }
                                }
                            }

                            if (isset($is_tmp_error_quantity_limit_to_one) &&
                                $is_tmp_error_quantity_limit_to_one == true
                            ) {
                                $prepaid_quantity_limit_data                 = [];
                                $prepaid_quantity_limit_data["product_id"]   = $tmp_product["id"];
                                $prepaid_quantity_limit_data["inventory_id"] = $tmp_product["inventory"]["id"];
                            }
                        } elseif ($lrequest->has('0.product_id') && $method != "delete") {
                            for ($i = 0; $i < count($lrequest->all()); $i++) {
                                if ($lrequest->has($i . '.product_id') &&
                                    $lrequest->has($i . '.inventory_id') &&
                                    $lrequest->input($i . '.product_id') == $tmp_product["id"] &&
                                    $lrequest->input($i . '.inventory_id') == $tmp_product["inventory"]["id"] &&
                                    isset($tmp_product["campaign"]) && gettype($tmp_product["campaign"]) == "array"
                                ) {
                                    foreach ($tmp_product["campaign"] as $tmp_product_campaign_key => $tmp_product_campaign_value) {
                                        if (isset($tmp_product_campaign_value["quantity_limit"]) && $tmp_product_campaign_value["quantity_limit"] > 0) {
                                            $is_tmp_error_quantity_limit_to_one = true;
                                            break;
                                        }
                                    }

                                    if (isset($is_tmp_error_quantity_limit_to_one) &&
                                        $is_tmp_error_quantity_limit_to_one == true
                                    ) {
                                        $prepaid_quantity_limit_data                 = [];
                                        $prepaid_quantity_limit_data["product_id"]   = $tmp_product["id"];
                                        $prepaid_quantity_limit_data["inventory_id"] = $tmp_product["inventory"]["id"];
                                        $is_tmp_error_quantity_limit_to_one          = false;
                                    }
                                }
                            }
                        }
                        // end of check prepaid quantity limit case

                        // start of clear cart if try to add picup at 7 product
                        $tmp_store = Arr::get($tmp_result_cart, 'data.record.' . $store_index, []);
                        $is_pickup = filter_var(Arr::get($tmp_store, 'store.shipping_method.PICKUP'), FILTER_VALIDATE_BOOLEAN);
                        if (
                            $is_pickup &&
                            in_array(strtoupper($method), ['POST', 'PUT'])
                        ) {
                            return ['status_code' => 400, 'body' => ['message' => [
                                'en' => "pickup_at_seven_product_in_cart",
                                'th' => "มีสินค้า pickup at seven อยู่ในตะกร้า",
                            ]]];
                        }

                        if (
                            ($pickup_at_seven && in_array(strtoupper($method), ['POST', 'PUT'])) ||
                            ($mnp_auto_cart && strtoupper($method) === 'DELETE')
                        ) {
                            // clear cart
                            $tmp_lrequest = new \Illuminate\Http\Request();
                            $tmp_lrequest->setMethod(strtoupper($method));
                            $request_token_parameter                 = [];
                            $request_token_parameter['product_id']   = Arr::get($tmp_product, 'id');
                            $request_token_parameter['inventory_id'] = Arr::get($tmp_product, 'inventory.id');
                            $request_token_parameter['section']      = 'wemall';
                            $request_token_parameter['user_id']      = '0';
                            $request_token_parameter['store_id']     = Arr::get($tmp_store, 'store.id');
                            $request_token_parameter['channel']      = 'tmh-website';

                            $delete_related_product_list[] = ["product_id" => Arr::get($tmp_product, 'id'), "inventory_id" => Arr::get($tmp_product, 'inventory.id')];

                            if (
                                Arr::get($tmp_product, 'is_bundle')
                            ) {
                                $request_token_parameter['bundle_hash']     = Arr::get($tmp_product, 'bundles.0.id');
                                $request_token_parameter['bundle_ref_code'] = Arr::get($tmp_product, 'bundles.0.ref_code');
                                $request_token_parameter['type']            = 'bundle';
                            }

                            $tmp_lrequest->replace($request_token_parameter);
                            $tmp_method = 'delete';
                            GuzzleService::postGuzzleRequest(
                                $url,
                                $tmp_method,
                                $tmp_lrequest,
                                $header,
                                env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
                            );
                        }
                        // end of clear cart if try to add picup at 7 product
                    }
                }
            }
        }

        if ($method != "get" || !$is_mock) {
            $content = GuzzleService::postGuzzleRequest(
                $url,
                $method,
                $lrequest,
                $header,
                env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
            );
            // end of remove all bundled product if exist
        }

        if (isset($prepaid_quantity_limit_data["product_id"]) && $method != "delete") {
            $body                         = ["status_code" => 400, "body" => ["message" => ["en" => "prepaid_quantity_limit", "th" => "จำกัดจำนวนprepaid"]]];
            $body["body"]["product_id"]   = $prepaid_quantity_limit_data["product_id"];
            $body["body"]["inventory_id"] = $prepaid_quantity_limit_data["inventory_id"];

            return $body;
        }

        if ($method == "get" && strlen($content[1]) > 0 && $content[0] <= 200) {
            // get cart
            $tmp_result_cart = json_decode($content[1], true);
            if (!isset($tmp_result_cart["data"]["record"][0]["products"])) {
                return ["status_code" => 200, "body" => ["message" => ["en" => "product not found in the cart", "th" => "ไม่พบสินค้าในตะกร้า"]]];
            }

            // get discount from redis
            $cart_privilege_data = Redis::get("store:cart_id:$cart_hash");
            $cart_discount_hash  = [];

            $have_discount = false;
            if (!empty($cart_privilege_data)) {
                $cart_privilege_data = json_decode($cart_privilege_data, true);
                // add discount hash (find from product_sku)
                if (array_key_exists('discount', $cart_privilege_data)) {
                    $have_discount = true;
                    foreach ($cart_privilege_data['discount'] as $discount_d) {
                        $cart_discount_hash[$discount_d['product_code']] = $discount_d['discount'];
                    }
                }
            }

            // loop store id in cart
            for ($store_index = 0; $store_index < count($tmp_result_cart["data"]["record"]); $store_index++) {
                // show product point even cart have more than one product
                for ($product_index = 0; $product_index < count($tmp_result_cart["data"]["record"][$store_index]["products"]); $product_index++) {
                    if (!empty($tmp_result_cart["data"])) {
                        $product_id   = $tmp_result_cart["data"]["record"][$store_index]["products"][$product_index]["id"];
                        $inventory_id = $tmp_result_cart["data"]["record"][$store_index]["products"][$product_index]["inventory"]["id"];
                        $tmp_url      = "wportal/product/" . $product_id;

                        $request_token = new \Illuminate\Http\Request();
                        $request_token->setMethod('GET');
                        $result            = App('App\Http\Controllers\APIController')->callAPIContent($tmp_url, $request_token, true);
                        $result_body_array = json_decode($result["body"], true);

                        $tmp_result_cart["data"]["record"][$store_index]["products"][$product_index]["is_unable_to_access_product_api"] = false;
                        if (!isset($result_body_array["status_code"]) || (isset($result_body_array["status_code"]) && $result_body_array["status_code"] >= 300)) {
                            $tmp_result_cart["data"]["record"][$store_index]["products"][$product_index]["is_unable_to_access_product_api"] = true;
                            continue;
                        }
                        if (!isset(json_decode($result["body"], true)["data"]["record"])) {
                            $tmp_result_cart["data"]["record"][$store_index]["products"][$product_index]["is_unable_to_access_product_api"] = true;
                            continue;
                        }

                        // check point condition
                        $product_detail_from_api = json_decode($result["body"], true)["data"]["record"];
                        if (isset($tmp_result_cart["data"]["record"][$store_index]["products"][$product_index]["point_condition"])
                            && strlen($tmp_result_cart["data"]["record"][$store_index]["products"][$product_index]["point_condition"]) > 0
                        ) {
                            foreach ($product_detail_from_api["points"] as $key2 => $value2) {
                                $tmp_point_inventory_list = $value2["inventories"];
                                foreach ($tmp_point_inventory_list as $tmp_point_inv) {
                                    if ($tmp_point_inv["inventory_id"] == $inventory_id) {
                                        $point_body_selected      = $value2;
                                        $point_inventory_selected = $tmp_point_inv;
                                        break;
                                    }
                                }
                                if (isset($point_inventory_selected)) {
                                    break;
                                }
                            }

                            if (isset($point_inventory_selected)) {
                                $tmp_point_result = [];

                                $point_parameter_list = ["point", "discount"];
                                foreach ($point_parameter_list as $parameter_name) {
                                    if (isset($point_inventory_selected[$parameter_name])) {
                                        $tmp_point_result[$parameter_name] = $point_inventory_selected[$parameter_name];
                                    }
                                }

                                $tmp_point_result["start_date"]                                                        = $point_body_selected["start_date"];
                                $tmp_point_result["end_date"]                                                          = $point_body_selected["end_date"];
                                $tmp_point_result["status"]                                                            = $point_body_selected["status"];
                                $tmp_result_cart["data"]["record"][$store_index]["products"][$product_index]["points"] = $tmp_point_result;
                            }
                        }
                        // end of checkpoint condition

                        // change product_type to follow wportal product api
                        $tmp_result_cart["data"]["record"][$store_index]["products"][$product_index]["product_type"] = $product_detail_from_api["product_type"];

                        // add discount to cart
                        if ($have_discount) {
                            $product_sku = $tmp_result_cart["data"]["record"][$store_index]["products"][$product_index]['inventory']['sku'];
                            if (isset($cart_discount_hash[$product_sku])) {
                                $tmp_result_cart["data"]["record"][$store_index]["products"][$product_index]["discount"] = $cart_discount_hash[$product_sku];
                            }
                        }
                    }
                }
                // end of show product point even cart have more than one product
            }
            // save data to cart
            $content = [$content[0], json_encode($tmp_result_cart)];
        }
        // end of edit body of request (parameters)

        // mock
        if (isset(explode("/", $url)[2]) && $method == "get" && $is_mock) {
            $content    = [200, ""];
            $content[1] = (file_get_contents("sample_page_when_offline/cart.json"));
        }

        $is_mock_privilege = false;
        if ($is_mock_privilege) {
            $tmp = json_decode($content[1], true);
            if (isset($tmp["data"]["record"][0]["products"][0]["id"]) &&
                isset($tmp["data"]["record"][0]["products"][0]["inventory"]["sku"])
                && $tmp["data"]["record"][0]["products"][0]["id"] == "L91201541"
            ) {
                $tmp["data"]["record"][0]["products"][0]["inventory"]["sku"] = "3000078509";
            }
            $content[1] = json_encode($tmp);
        }
        // end of mock
        if (isset($content[2]["data"]["error"]["message"])) {
            $content[1] = $content[2]["data"]["error"]["message"];
        }

        if (isset($cart_hash) && $content[0] <= 200) {
            $tmp              = json_decode($content[1], true);
            $tmp["cart_hash"] = $cart_hash;

            $tmp["delete_related_product_list"] = $delete_related_product_list;
            $content[1]                         = json_encode($tmp);
        }
        if (isset($content[0])) {
            $content["status_code"] = $content[0];
        }
        if (isset($content[1])) {
            $content["body"] = $content[1];
        }

        return $content;
    }

    public static function cartActionWlsWithSimMeta($url, $method, $lrequest, $header)
    {
        $tmp_old_url_explode = explode("/", $url);
        // start of cart_hash, id section

        $original_lrequest_all = $lrequest->all();

        if ($lrequest->has('hash')) {
            $cart_hash = $lrequest->input('hash');
        } elseif ((strtoupper($method) == "GET" || strtoupper($method) == "PUT" || strtoupper($method) == "POST" || strtoupper($method) == "DELETE") && isset($tmp_old_url_explode[2])) {
            $cart_hash = $tmp_old_url_explode[2];
        } else {
            $request_token_parameter = [];
            $cart_hash               = Str::random(40);

            foreach ($lrequest->all() as $key => $value) {
                $request_token_parameter[$key] = $value;
            }

            if (strtoupper($method) == "PUT") {
                $request_token_parameter['hash'] = $cart_hash;
            }

            $lrequest->replace($request_token_parameter);
            $request_token_parameter = [];
        }
        // end of cart_hash, id section

        $clear_cart = array_get($original_lrequest_all, 'sim_meta.0.campaign_type') == 'vhora';
        if ($method === 'post' && $clear_cart) {
            // clear cart
            $redis_keys = Redis::keys("*$cart_hash*");
            if (!empty($redis_keys)) {
                Redis::del($redis_keys);
            }

            $cart_hash = Str::random(40);
        }
        // end of cart_hash, id section

        $header["Content-Type"] = "application/json";
        $header["x-api-auth"]   = env('X_API_AUTH_VLEARN_VERIFY', false);

        $tmp_old_url_explode = explode("/", $url);
        $url                 = "wportal/cart";

        if (strtoupper($method) == "GET") {
            $url .= "/" . $cart_hash;
        }

        $is_mock = false;

        $user_id = 0;

        // start of edit body of request (parameters)
        if ($method == "get") {
            $request_token_parameter                     = [];
            $request_token_parameter['section']          = "wemall";
            $request_token_parameter['lang']             = "th";
            $request_token_parameter['user_id']          = "0";
            $request_token_parameter['advance_payment']  = "1";
            $request_token_parameter['calculate_bundle'] = "true";
            $request_token_parameter['campaign_channel'] = "tmvh-official-website";
            $request_token_parameter['channel']          = "tmh-website";
            $toggle_store_data                           = PaymentMethodService::getTogglePaymentStoreAll();
            $config_store                                = [];

            foreach ($toggle_store_data as $value) {
                if (array_get($value, 'payment_gateway') === "WEOMNI") {
                    array_push($config_store, array_get($value, 'store_id'));
                }
            }

            $request_token_parameter['weomni_gateway'] = implode(",", $config_store);
            $payload                                   = $lrequest->post();
            $lrequest->replace($request_token_parameter);
        } elseif ($method == "delete" && count($lrequest->all()) == 0) {
            $request_token_parameter            = [];
            $request_token_parameter['section'] = "wemall";
            $request_token_parameter['type']    = "all";
            $request_token_parameter['user_id'] = "0";
            $request_token_parameter['channel'] = "tmh-website";
            $payload                            = $lrequest->post();
            $lrequest->replace($request_token_parameter);
        }

        if ($lrequest->has('product_id')) {
            $product_id = $lrequest->input('product_id');
            $tmp_url    = "wportal/product/" . $product_id . "?product_status=all";

            if ($lrequest->isMethod('get')) {
                $original_method = "GET";
            } elseif ($lrequest->isMethod('post')) {
                $original_method = "POST";
            } elseif ($lrequest->isMethod('put')) {
                $original_method = "PUT";
            } elseif ($lrequest->isMethod('delete')) {
                $original_method = "DELETE";

                $cart_data = Redis::get("store:cart_id:$cart_hash");

                $check_cart_data = json_decode($cart_data, true);
                if (!empty($check_cart_data) && is_array($check_cart_data) && isset($check_cart_data["discount"])) {
                    foreach ($check_cart_data['discount'] as $key => $value) {
                        if ($value["product_id"] == $lrequest->input('product_id')) {
                            unset($check_cart_data['discount'][$key]);
                        }
                    }
                    if (empty($check_cart_data['discount'])) {
                        Redis::del("store:cart_id:$cart_hash");
                    } else {
                        Redis::set('store:cart_id:' . $cart_hash, json_encode(["discount" => $check_cart_data['discount']]));
                    }
                }
            }

            $request_token = new \Illuminate\Http\Request();
            $request_token->setMethod('GET');
            $result = App('App\Http\Controllers\APIController')->callAPIContent($tmp_url, $request_token, true);
            if (isset($result["body"]) && gettype($result["body"]) == "string") {
                $result_body_array = json_decode($result["body"], true);
            }

            $is_unable_to_access_product_api = false;
            if (!isset($result_body_array["status_code"]) || (isset($result_body_array["status_code"]) && $result_body_array["status_code"] >= 300)) {
                $is_unable_to_access_product_api = true;
            }

            if (!$is_unable_to_access_product_api) {
                $product_detail_from_api = json_decode($result["body"], true)["data"]["record"];
            }

            $request_token_parameter = [];
            foreach ($lrequest->all() as $key => $value) {
                $request_token_parameter[$key] = $value;
            }

            $request_token_parameter['section'] = "wemall";
            $request_token_parameter['user_id'] = "0";
            $request_token_parameter['channel'] = "tmh-website";

            // find store_id
            if (!$is_unable_to_access_product_api) {
                $store_id                            = $product_detail_from_api["store_id"];
                $request_token_parameter['store_id'] = $store_id;
            }

            $payload = $lrequest->post();
            $lrequest->setMethod($original_method);

            $lrequest->replace($request_token_parameter);
        }

        if ($lrequest->has('products.0.product_id') && $method == "put") {
            // start of remove all bundled product if exist
            $tmp_lrequest = new \Illuminate\Http\Request();
            $tmp_lrequest->setMethod(strtoupper("get"));
            $request_parameter                           = [];
            $request_token_parameter['section']          = "wemall";
            $request_token_parameter['lang']             = "th";
            $request_token_parameter['user_id']          = "0";
            $request_token_parameter['advance_payment']  = "1";
            $request_token_parameter['calculate_bundle'] = "true";
            $request_token_parameter['campaign_channel'] = "tmvh-official-website";
            $request_token_parameter['channel']          = "tmh-website";
            $payload                                     = $lrequest->post();
            $tmp_lrequest->replace($request_token_parameter);
            $get_content = GuzzleService::postGuzzleRequest(
                $url . "/" . $cart_hash,
                "get",
                $tmp_lrequest,
                $header,
                env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
            );
            $tmp_result_cart = json_decode($get_content[1], true);
            for ($store_index = 0;isset($tmp_result_cart["data"]["record"]) && $store_index < count($tmp_result_cart["data"]["record"]); $store_index++) {
                if (isset($tmp_result_cart["data"]["record"][$store_index]["products"])) {
                    foreach ($tmp_result_cart["data"]["record"][$store_index]["products"] as $tmp_product) {
                        $is_same_product_between_request_data_and_in_cart = (
                            $lrequest->has('products.0.product_id') &&
                            $lrequest->has('products.0.inventory_id') &&
                            $lrequest->input('products.0.product_id') == $tmp_product["id"] &&
                            $lrequest->input('products.0.inventory_id') == $tmp_product["inventory"]["id"]
                        );
                        if ($method == "put" &&
                            $is_same_product_between_request_data_and_in_cart &&
                            !(
                                $lrequest->has('is_edit_product_quantity') &&
                                $lrequest->input('is_edit_product_quantity') == 1
                            )
                        ) {
                            $body                         = ["status_code" => 400, "body" => ["message" => ["en" => "sku_limit", "th" => "sku_limit"]]];
                            $body["body"]["product_id"]   = $tmp_product["id"];
                            $body["body"]["inventory_id"] = $tmp_product["inventory"]["id"];
                            $body["body"]["cart_hash"]    = $cart_hash;

                            return $body;
                        }
                    }
                }
            }
        }

        if ($method == 'put') {
            // check accessory existing in cart or not ?
            $tmp_request_body = $lrequest->all();
            $tmp_products     = $lrequest->input('products');
            $accessories      = [];
            $accessories_list = Redis::get('truestore:product_id_accessories_list');
            if (!empty($accessories_list)) {
                $accessories_list = json_decode($accessories_list, true);
                foreach ($tmp_products as $index => $tmp_product) {
                    if (isset($accessories_list[$tmp_product['product_id']])) {
                        $accessories[] = $tmp_product;
                        unset($tmp_products[$index]);
                    }
                }
            }

            // Add accessory by /ecom/cart
            if (!empty($accessories)) {
                foreach ($accessories as $accessory) {
                    $request_token_parameter                 = [];
                    $request_token_parameter['product_id']   = $accessory["product_id"];
                    $request_token_parameter['inventory_id'] = $accessory["inventory_id"];
                    $request_token_parameter['quantity']     = 1;
                    $request_token_parameter['section']      = "wemall";
                    $request_token_parameter['channel']      = "tmh-website";
                    $request_token_parameter['hash']         = $cart_hash;
                    $tmp_method                              = "put";
                    $tmp_lrequest                            = new \Illuminate\Http\Request();
                    $tmp_lrequest->setMethod(strtoupper($tmp_method));
                    $tmp_lrequest->replace($request_token_parameter);
                    $tmp_header                 = $header;
                    $tmp_header["Content-Type"] = "application/x-www-form-urlencoded";
                    $tmp_content                = self::cartActionWls("ecom/cart/" . $cart_hash, $tmp_method, $tmp_lrequest, $tmp_header);
                }
            }

            $tmp_request_body['products'] = $tmp_products;
            $lrequest->replace($tmp_request_body);
        }

        // start of TEC-520 prepaid bundle
        if ($lrequest->input('products.1.sim_meta.0.sim_type') == "prepaid" && $method == "put") {
            // save to redis for 3 hours
            $tmp_lrequest = [
                'product_id' => $lrequest->input('products.0.product_id'),
                'quantity'   => 1,
            ];
            $tmp_lrequest['product_type'] = 'device_bundle_prepaid';

            if (!$lrequest->has('products.0.sku')) {
                return ["status_code" => 200, "body" => ["message" => ["en" => "please input sku of prepaid bundle main product", "th" => "กรุณาเพิ่มข้อมูล sku ของ prepaid bundle main product"]]];
            }
            $product_sku = $lrequest->input('products.0.sku');

            $tmp_lrequest['product_code']               = $product_sku;
            $tmp_privilege_placeorder                   = [];
            $tmp_privilege_placeorder['passed_input'][] = $tmp_lrequest;
            WlsService::setRedisPrivilegePlaceorder($tmp_privilege_placeorder, $cart_hash, $tmp_lrequest['product_id'], 0);

            // binding item
            $tmp_lrequest = [
                'product_id' => $lrequest->input('products.1.product_id'),
                'quantity'   => 1,
            ];
            $tmp_lrequest['product_type'] = 'device_bundle_prepaid_sim';

            $tmp_url        = "wportal/product/" . $tmp_lrequest['product_id'];
            $tmp_method     = "get";
            $tmp_lrequest_2 = new \Illuminate\Http\Request();
            $tmp_lrequest_2->setMethod(strtoupper($method));
            $request_parameter = [];
            $tmp_lrequest_2->replace($request_parameter);
            $header_2 = [
                "Content-Type" => "application/json",
            ];
            $portal_product_content = WlsService::getPortalProductWls($tmp_url, $tmp_method, $tmp_lrequest_2, $header_2, true);

            $tmp_portal_product_content = json_decode($portal_product_content[1], true);
            $product_sku                = array_get($tmp_portal_product_content, "data.record.inventories.0.sku");

            $tmp_lrequest['product_code']               = $product_sku;
            $tmp_privilege_placeorder                   = [];
            $tmp_privilege_placeorder['passed_input'][] = $tmp_lrequest;

            WlsService::setRedisPrivilegePlaceorder($tmp_privilege_placeorder, $cart_hash, $tmp_lrequest['product_id'], 0);
        }
        // end of TEC-520 prepaid bundle

        $is_first = true;
        if (count($lrequest->all()) > 0 && $method == "get") {
            if ($is_first) {
                $url .= '?';
                $is_first = false;
            }
            foreach ($lrequest->all() as $key => $value) {
                if (gettype($value) == 'string') {
                    $url .= $key . '=' . $value . '&';
                }
            }
        }

        $is_mnp_auto = $lrequest->input('is_mnp_auto');
        // start of tec-985
        if ($method == "post" && !$is_mnp_auto) {
            // start of TEC-985 stop product in flow multi campaign without privilege

            if (!isset($product_detail_from_api)) {
                $product_id = $lrequest->input('0.product_id');
                $tmp_url    = "wportal/product/" . $product_id . "?product_status=all";

                $request_token = new \Illuminate\Http\Request();
                $request_token->setMethod('GET');
                $result = App('App\Http\Controllers\APIController')->callAPIContent($tmp_url, $request_token, true);
                if (isset($result["body"]) && gettype($result["body"]) == "string") {
                    $result_body_array = json_decode($result["body"], true);
                }

                $is_unable_to_access_product_api = false;
                if (!isset($result_body_array["status_code"]) || (isset($result_body_array["status_code"]) && $result_body_array["status_code"] >= 300)) {
                    $is_unable_to_access_product_api = true;
                }

                if (!$is_unable_to_access_product_api) {
                    $product_detail_from_api = json_decode($result["body"], true)["data"]["record"];
                }
                $inv_id_to_sku = array_column($product_detail_from_api["inventories"], "sku", "id");
                $product_code  = $inv_id_to_sku[$lrequest->input('0.inventory_id')];
            }

            $tmp_product                    = $product_detail_from_api;
            $cart_privilege_placeorder_data = Redis::get("store:verify:cart_id:$cart_hash:privilege_placeorder");
            $redis_body_array               = json_decode($cart_privilege_placeorder_data, true);

            if (!isset($product_code)) {
                $inv_id_to_sku = array_column($product_detail_from_api["inventories"], "sku", "id");
                $product_code  = $inv_id_to_sku[$lrequest->input('inventory_id')];
            }

            // start of get product id config for TEC-985
            $content_get_product_id_config = App('App\Http\Controllers\APIController')->getProductIdConfig($lrequest);
            if (empty($content_get_product_id_config) || $content_get_product_id_config[0] > 200) {
                return $content_get_product_id_config;
            }

            $tmp_check = $content_get_product_id_config[1];

            $tmp_content_get_product_id_config = $content_get_product_id_config[1];
            $promotion_type_redis_config_list  = array_column($tmp_content_get_product_id_config["campaigns"], "json_name", "id");
            // end of get product id config TEC-985

            if (isset($tmp_product["promotion"][0]["id"])) {
                $current_product_promotion_id_list = array_flip(array_column($tmp_product["promotion"], "id"));

                $is_allow_add_product              = true;
                $privilege_placeorder_product_type = array_get($redis_body_array, $tmp_product["id"] . "." . $product_code . ".product_type");
                foreach ($promotion_type_redis_config_list as $each_promo_id => $each_json_name) {
                    if (isset($current_product_promotion_id_list[$each_promo_id])) {
                        $is_allow_add_product = false;
                    }
                    if ($each_json_name == $privilege_placeorder_product_type) {
                        $is_allow_add_product = true;
                        break;
                    }
                }

                if (!$is_allow_add_product) {
                    return [400, ["message" => ["en" => "not allow to add product without verification", "th" => "ไม่อนุญาตให้เพิ่มสินค้าโดยไม่ผ่านการยืนยัน"], "current_product_promotion_id_list" => $current_product_promotion_id_list, "promotion_type_redis_config_list" => $promotion_type_redis_config_list, "privilege_placeorder_product_type" => $privilege_placeorder_product_type]];
                }
            }
            // end of TEC-985 stop product in flow multi campaign without privilege
        }
        // end of tec-985

        if ($method != "get" || !$is_mock) {
            if ($method == "post") {
                $url .= "/" . $cart_hash;
                $header["Content-Type"] = "application/x-www-form-urlencoded";
            }
            $content = GuzzleService::postGuzzleRequest(
                $url,
                $method,
                $lrequest,
                $header,
                env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
            );
        }

        if ($method == "get" && strlen($content[1]) > 0 && $content[0] <= 200) {
            // get cart
            $tmp_result_cart = json_decode($content[1], true);
            if (!isset($tmp_result_cart["data"]["record"][0]["products"])) {
                return ["status_code" => 200, "body" => ["message" => ["en" => "product not found in the cart", "th" => "ไม่พบสินค้าในตะกร้า"]]];
            }

            $tmp_result_cart = ProductService::checkCartProductPaySmooth($tmp_result_cart);
            $tmp_result_cart = ProductService::checkCartProductIot($tmp_result_cart);

            // get discount from redis
            $cart_privilege_data = Redis::get("store:cart_id:$cart_hash");
            $cart_discount_hash  = [];

            $have_discount = false;
            if (!empty($cart_privilege_data)) {
                $cart_privilege_data = json_decode($cart_privilege_data, true);
                // add discount hash (find from product_sku)
                if (array_key_exists('discount', $cart_privilege_data)) {
                    $have_discount = true;
                    foreach ($cart_privilege_data['discount'] as $discount_d) {
                        $cart_discount_hash[$discount_d['product_code']] = $discount_d['discount'];
                    }
                }
            }

            $total_product_count                = 0;
            $total_product_price                = 0;
            $is_add_shipping_fee_true_card      = false;
            $is_exist_case_trueidtvbox_free_tol = false;
            $total_coupon_discount_amount       = 0;

            // start of get trueidbox_happy_digital_list
            $content_get_product_id_config = App('App\Http\Controllers\APIController')->getProductIdConfigJsonFile();
            if (isset($content_get_product_id_config[0]) && $content_get_product_id_config[0] == 500) {
                return $content_get_product_id_config;
            }
            $trueidbox_happy_digital_list = [];
            foreach ($content_get_product_id_config["verify"] as $key => $value) {
                if ($value["type"] == "trueidtv") {
                    $trueidbox_happy_digital_list[$value["id"]] = $value;
                }
            }
            // end of get trueidbox_happy_digital_list

            // start of get cart privilege placeorder data
            $cart_privilege_placeorder_data = Redis::get("store:verify:cart_id:$cart_hash:privilege_placeorder");
            if (!empty($cart_privilege_placeorder_data)) {
                $redis_body_array                                = json_decode($cart_privilege_placeorder_data, true);
                $tmp_result_cart["data"]["privilege_placeorder"] = $redis_body_array;
            }

            // end of get cart privilege placeorder data

            // loop store id in cart
            $inventory_list_data_device_only_value = [];
            $inventory_list_data_cod_value         = []; // TEC-419-420 add COD payment method
            $product_types_list                    = [];

            // start of fix TEC-19 add discount coupon
            $coupon_code     = isset($original_lrequest_all['coupon_code']) ? $original_lrequest_all['coupon_code'] : "";
            $payment_channel = isset($original_lrequest_all['payment_channel']) ? $original_lrequest_all['payment_channel'] : "";

            // check coupon
            if (!array_key_exists('coupon_code', $original_lrequest_all)) {
                $stores = array_get($tmp_result_cart, 'data.record');
                foreach ($stores as $store) {
                    $products = array_get($store, 'products');
                    foreach ($products as $product) {
                        $coupon = array_get($product, 'meta.coupon_code');
                        if (!empty($coupon)) {
                            $coupon_code                             = $coupon;
                            $tmp_result_cart["data"]["token_coupon"] = $coupon;
                            break 2;
                        }
                    }
                }
            }

            if (strlen($coupon_code) > 0 && strlen($payment_channel) > 0) {
                $json_decode_tmp_content_get_coupon_by_coupon_code = [];
                $store_id                                          = array_get($tmp_result_cart, 'data.record.0.store.id');
                $payment_channel                                   = PaymentMethodService::switchPaymentMethodByGateway([
                    'payment_detail' => [
                        'method'  => Arr::get($original_lrequest_all, 'payment_channel'),
                        'gateway' => Arr::get($original_lrequest_all, 'gateway'),
                    ],
                ], $payment_channel);

                $json_decode_tmp_content_get_coupon_by_coupon_code = CouponService::getCouponCheckCode($coupon_code, $payment_channel, $store_id);

                if (isset($json_decode_tmp_content_get_coupon_by_coupon_code["data"]["record"])) {
                    $tmp_result_cart["data"]["coupon_data_from_bff"]            = $json_decode_tmp_content_get_coupon_by_coupon_code["data"]["record"];
                    $tmp_result_cart["data"]["coupon_data_from_bff"]["is_pass"] = true;
                    $tmp_coupon_data                                            = $tmp_result_cart["data"]["coupon_data_from_bff"];
                } else {
                    $code                                                             = array_get($json_decode_tmp_content_get_coupon_by_coupon_code, 'data.0.code');
                    $tmp_result_cart["data"]["coupon_data_from_bff"]['message']       = CouponService::getErrorMessageByCode($code);
                    $tmp_result_cart["data"]["coupon_data_from_bff"]["not_pass_data"] = $json_decode_tmp_content_get_coupon_by_coupon_code;
                    $tmp_result_cart["data"]["coupon_data_from_bff"]["is_pass"]       = false;
                }
            }
            // end of fix TEC-19 add discount coupon

            for ($store_index = 0; $store_index < count($tmp_result_cart["data"]["record"]); $store_index++) {
                // show product point even cart have more than one product
                for ($product_index = 0; $product_index < count($tmp_result_cart["data"]["record"][$store_index]["products"]); $product_index++) {
                    if (!empty($tmp_result_cart["data"])) {
                        // save data back from tmp_result_cart to tmp_product for easier coding
                        $tmp_product = $tmp_result_cart["data"]["record"][$store_index]["products"][$product_index];

                        $product_id   = $tmp_product["id"];
                        $inventory_id = $tmp_product["inventory"]["id"];
                        $tmp_url      = "wportal/product/" . $product_id;

                        $request_token = new \Illuminate\Http\Request();
                        $request_token->setMethod('GET');
                        $result            = App('App\Http\Controllers\APIController')->callAPIContent($tmp_url, $request_token, true);
                        $result_body_array = json_decode($result["body"], true);

                        $tmp_product["is_unable_to_access_product_api"] = false;
                        if (!isset($result_body_array["status_code"]) || (isset($result_body_array["status_code"]) && $result_body_array["status_code"] >= 300)) {
                            $tmp_product["is_unable_to_access_product_api"]                              = true;
                            $tmp_result_cart["data"]["record"][$store_index]["products"][$product_index] = $tmp_product;
                            continue;
                        }
                        if (!isset(json_decode($result["body"], true)["data"]["record"])) {
                            $tmp_product["is_unable_to_access_product_api"]                              = true;
                            $tmp_result_cart["data"]["record"][$store_index]["products"][$product_index] = $tmp_product;
                            continue;
                        }

                        $accessories_list = Redis::get('truestore:product_id_accessories_list');
                        if (!empty($accessories_list)) {
                            $accessories_list = json_decode($accessories_list, true);
                            if (isset($accessories_list[$product_id])) {
                                $tmp_product["is_addon"]                                                     = true;
                                $tmp_result_cart["data"]["record"][$store_index]["products"][$product_index] = $tmp_product;
                            }
                        }

                        // check point condition

                        $product_detail_from_api = json_decode($result["body"], true)["data"]["record"];
                        if (isset($tmp_product["point_condition"])
                            && strlen($tmp_product["point_condition"]) > 0
                        ) {
                            foreach ($product_detail_from_api["points"] as $key2 => $value2) {
                                $tmp_point_inventory_list = $value2["inventories"];
                                foreach ($tmp_point_inventory_list as $tmp_point_inv) {
                                    if ($tmp_point_inv["inventory_id"] == $inventory_id) {
                                        $point_body_selected      = $value2;
                                        $point_inventory_selected = $tmp_point_inv;
                                        break;
                                    }
                                }
                                if (isset($point_inventory_selected)) {
                                    break;
                                }
                            }

                            if (isset($point_inventory_selected)) {
                                $tmp_point_result = [];

                                $point_parameter_list = ["point", "discount"];
                                foreach ($point_parameter_list as $parameter_name) {
                                    if (isset($point_inventory_selected[$parameter_name])) {
                                        $tmp_point_result[$parameter_name] = $point_inventory_selected[$parameter_name];
                                    }
                                }

                                $tmp_point_result["start_date"] = $point_body_selected["start_date"];
                                $tmp_point_result["end_date"]   = $point_body_selected["end_date"];
                                $tmp_point_result["status"]     = $point_body_selected["status"];
                                $tmp_product["points"]          = $tmp_point_result;
                            }
                        }
                        // end of checkpoint condition

                        //start of check is_exist_case_shipping_fee_free_from_promotion_id
                        $is_exist_case_shipping_fee_free_from_promotion_id = false;
                        if (isset($tmp_result_cart["data"]["privilege_placeorder"])) {
                            foreach ($tmp_result_cart["data"]["privilege_placeorder"] as $tmp_product_id => $tmp_privilege_placeorder_data_with_key_campaign_id) {
                                foreach ($tmp_privilege_placeorder_data_with_key_campaign_id as $tmp_product_code => $tmp_privilege_placeorder_data) {
                                    if (isset($tmp_result_cart["data"]["privilege_placeorder"][$tmp_product_id][$tmp_product_code]["campaign_id"])) {
                                        $promotion_id = $tmp_result_cart["data"]["privilege_placeorder"][$tmp_product_id][$tmp_product_code]["campaign_id"];

                                        $tmp_product_promotion_list_by_promotion_id = [];
                                        if (gettype($tmp_product["promotion"]) == "array") {
                                            foreach ($tmp_product["promotion"] as $tmp_product_promotion_id => $tmp_product_promotion_content) {
                                                $tmp_product_promotion_list_by_promotion_id[$tmp_product_promotion_content["id"]] = $tmp_product_promotion_content;
                                            }
                                        }

                                        $is_exist_case_shipping_fee_free_from_promotion_id = false;
                                        if (isset($tmp_product_promotion_list_by_promotion_id[$promotion_id]) &&
                                            isset($content_get_product_id_config["campaigns"][$promotion_id]["options"]["shipping_free"]) &&
                                            $content_get_product_id_config["campaigns"][$promotion_id]["options"]["shipping_free"] == true
                                        ) {
                                            $is_exist_case_shipping_fee_free_from_promotion_id = true;
                                        }
                                    }
                                }
                            }
                        }
                        //end of check is_exist_case_shipping_fee_free_from_promotion_id

                        $tmp_campaign_data_from_json = null;
                        foreach ($content_get_product_id_config["campaigns"] as $v_index => $v_content) {
                            if ($v_content["json_name"] == "device_bundle_existing") {
                                $tmp_campaign_data_from_json        = $v_content;
                                $device_bundle_existing_campaign_id = $v_content["id"];
                            }
                        }

                        // change product_type to follow wportal product api

                        // change this in case it's device bundle new customer but dont have bundles node set, change to product_type = product or its original product type
                        $original_product_type       = $tmp_product["product_type"];
                        $tmp_product["product_type"] = $product_detail_from_api["product_type"];
                        if (isset($tmp_result_cart["data"]["privilege_placeorder"][$tmp_product["id"]][$tmp_product['inventory']['sku']]["product_type"])) {
                            $tmp_product["product_type"] = $tmp_result_cart["data"]["privilege_placeorder"][$tmp_product["id"]][$tmp_product['inventory']['sku']]["product_type"];
                        }

                        if ($tmp_product["product_type"] == "device_bundle_existing" && !(
                            isset($tmp_result_cart["data"]["privilege_placeorder"][$tmp_product["id"]][$tmp_product['inventory']['sku']]["campaign_id"]) &&
                            $tmp_result_cart["data"]["privilege_placeorder"][$tmp_product["id"]][$tmp_product['inventory']['sku']]["campaign_id"] == $device_bundle_existing_campaign_id
                        )
                        ) {
                            $original_product_type       = "product";
                            $tmp_product["product_type"] = "product";
                        }

                        // start of tmh-283 hotfix multi campaign device only
                        if ($tmp_product["product_type"] == "multi_campaign_type" && !(
                            isset($tmp_result_cart["data"]["privilege_placeorder"][$tmp_product["id"]][$tmp_product['inventory']['sku']]["product_type"]) &&
                            $tmp_result_cart["data"]["privilege_placeorder"][$tmp_product["id"]][$tmp_product['inventory']['sku']]["product_type"] == "multi_campaign_type"
                        )
                        ) {
                            $original_product_type       = "product";
                            $tmp_product["product_type"] = "product";
                        }
                        // end of tmh-283 hotfix multi campaign device only

                        if ($tmp_product["product_type"] == "device_bundle_new_customer" &&
                            (isset($tmp_product["campaign"])) &&
                            !$tmp_product["is_bundle"]
                        ) {
                            if (isset($have_discount) &&
                                $have_discount == true &&
                                isset($tmp_result_cart["data"]["privilege_placeorder"][$tmp_product["id"]][$tmp_product['inventory']['sku']]["campaign_id"]) &&
                                $tmp_result_cart["data"]["privilege_placeorder"][$tmp_product["id"]][$tmp_product['inventory']['sku']]["campaign_id"] == $device_bundle_existing_campaign_id
                            ) {
                                $tmp_product["product_type"] = "device_bundle_existing";
                            } else {
                                $tmp_product["product_type"] = $original_product_type;
                            }
                        }
                        if ($tmp_product["product_type"] == "device_bundle_new_customer" &&
                            (isset($tmp_product["promotion"])) &&
                            !$tmp_product["is_bundle"]
                        ) {
                            if (isset($have_discount) &&
                                $have_discount == true &&
                                isset($tmp_result_cart["data"]["privilege_placeorder"][$tmp_product["id"]][$tmp_product['inventory']['sku']]["campaign_id"]) &&
                                $tmp_result_cart["data"]["privilege_placeorder"][$tmp_product["id"]][$tmp_product['inventory']['sku']]["campaign_id"] == $device_bundle_existing_campaign_id
                            ) {
                                $tmp_product["product_type"] = "device_bundle_existing";
                            } else {
                                $tmp_product["product_type"] = $original_product_type;
                            }
                        }

                        // start of check device only with device bundle new customer
                        if (isset($tmp_result_cart["data"]["privilege_placeorder"][$tmp_product["id"]][$tmp_product["inventory"]["sku"]]) &&
                            !isset($tmp_product["bundle_ref_code"]) && $tmp_product["product_type"] == "product"
                        ) {
                            // remove privilege placeorder for that product
                            unset($tmp_result_cart["data"]["privilege_placeorder"][$tmp_product["id"]][$tmp_product["inventory"]["sku"]]);
                        }
                        // end of check device only with device bundle new customer

                        // add discount to cart
                        if ($have_discount) {
                            $product_sku = $tmp_product['inventory']['sku'];
                            if (isset($cart_discount_hash[$product_sku])) {
                                $tmp_product["discount"] = $cart_discount_hash[$product_sku];
                            }
                        }

                        // start of is_add_shipping_fee_true_card check
                        if (isset($tmp_product["true_card"]["calculate_shipping_fee"]) &&
                            $tmp_product["true_card"]["calculate_shipping_fee"] == true
                        ) {
                            $is_add_shipping_fee_true_card = true;
                        }
                        // end of is_add_shipping_fee_true_card check

                        // start of check is_exist_case_trueidtvbox_free_tol
                        if ($tmp_product["inventory"]["compare_at_price"] == 0 && $tmp_product["inventory"]["price"] > 0) {
                            $tmp_product["inventory"]["compare_at_price"] = $tmp_product["inventory"]["price"];
                        }

                        //start of check price when privilege placeorder exist
                        if ((
                            !isset($tmp_result_cart["data"]["privilege_placeorder"][$tmp_product["id"]][$tmp_product["inventory"]["sku"]]) ||
                            (isset($tmp_product["product_type"]) && in_array($tmp_product["product_type"], ["device_bundle_existing", "device_bundle_new_customer"]))
                        ) &&
                            $tmp_product["inventory"]["price"] == 0 &&
                            $tmp_product["inventory"]["compare_at_price"] > 0 &&
                            (
                                isset($tmp_product["product_type"]) &&
                                in_array($tmp_product["product_type"], ["multi_campaign_type", "one_campaign_type"]) &&
                                empty(array_get($tmp_product, "is_addon"))
                            )
                        ) {
                            $tmp_product["inventory"]["price"] = $tmp_product["inventory"]["compare_at_price"];
                        }
                        //end of check price when privilege placeorder exist

                        if (isset($product_detail_from_api["product_type"]) && ($product_detail_from_api["product_type"] == "sim" || $product_detail_from_api["product_type"] == "postpaid" || $product_detail_from_api["product_type"] == "vlearn") &&
                            isset($tmp_product["price"]) && $tmp_product["price"] == 0 &&
                            isset($tmp_product["inventory"]["price"])
                        ) {
                            $tmp_product["inventory"]["price"] = $tmp_product["price"];
                        }

                        if ($tmp_product["quantity"] == 1
                            && ($is_exist_case_shipping_fee_free_from_promotion_id ||
                                isset($trueidbox_happy_digital_list[$product_id]))
                        ) {
                            $is_exist_case_trueidtvbox_free_tol = true;
                        }

                        // start of tmh-195 bdbc solution buy same sku with both device only and multi campaign in the same cart
                        if (isset($tmp_result_cart["data"]["privilege_placeorder"][$tmp_product["id"]][$tmp_product["inventory"]["sku"]]) &&
                            $tmp_product["quantity"] > 1
                        ) {
                            $original_quantity                                                           = $tmp_product["quantity"];
                            $tmp_product["quantity"]                                                     = 1;
                            $tmp_result_cart["data"]["record"][$store_index]["products"][$product_index] = $tmp_product;
                            $tmp_product["quantity"]                                                     = $original_quantity - 1;

                            $request_token_parameter                 = [];
                            $request_token_parameter['product_id']   = $tmp_product["id"];
                            $request_token_parameter['inventory_id'] = $tmp_product["inventory"]["id"];
                            $request_token_parameter['quantity']     = 1;
                            $request_token_parameter['section']      = "wemall";
                            $request_token_parameter['channel']      = "tmh-website";
                            $request_token_parameter['hash']         = $cart_hash;
                            $tmp_method                              = "put";
                            $tmp_lrequest                            = new \Illuminate\Http\Request();
                            $tmp_lrequest->setMethod(strtoupper($tmp_method));
                            $tmp_lrequest->replace($request_token_parameter);
                            $tmp_header                 = $header;
                            $tmp_header["Content-Type"] = "application/x-www-form-urlencoded";

                            $tmp_content = self::cartActionWls("ecom/cart/" . $cart_hash, $tmp_method, $tmp_lrequest, $tmp_header);
                        }
                        // end of tmh-195 bdbc solution buy same sku with both device bundle existing and device only in the same cart

                        // start of TEC-1 add MNP One Step flow, add variable is_mnp1step to get cart api
                        if ($tmp_product["product_type"] == "mnp_one_step") {
                            $tmp_product["is_mnp1step"] = true;
                        }

                        if (array_get($tmp_product, 'sim_meta.0.campaign_type') == 'vhora') {
                            $tmp_product["product_type"] = 'postpaid';
                        }

                        // end of TEC-1 add MNP One Step flow, add variable is_mnp1step to get cart api
                        // start add pre2post variables to get cart api
                        if ($tmp_product["product_type"] == "pre_to_post") {
                            $pre2post_redis             = array_get($tmp_result_cart, "data.privilege_placeorder." . $tmp_product["id"] . '.' . $tmp_product["inventory"]["sku"]);
                            $tmp_product["is_pre2post"] = true;
                            $tmp_product["sim_meta"]    = [
                                "user_information" => [
                                    "telephone" => array_get($pre2post_redis, 'mobile_number'),
                                    "thai_id"   => array_get($pre2post_redis, 'id_number'),
                                ],
                            ];
                        }
                        // end add pre2post variables to get cart api

                        // start of tec-1230 product type coupon
                        if (isset($tmp_result_cart["data"]["coupon_data_from_bff"]["is_pass"]) && $tmp_result_cart["data"]["coupon_data_from_bff"]["is_pass"]) {
                            $coupon_config_by_code = Redis::hgetall('truestore:coupon_config_by_coupon_code:redis_data');
                            if (isset($coupon_config_by_code[$coupon_code])) {
                                $each_prod_coupon_config = json_decode($coupon_config_by_code[$coupon_code], true);
                                if (isset($each_prod_coupon_config["restrict_product_type"][$tmp_product["product_type"]]) &&
                                    $each_prod_coupon_config["restrict_product_type"][$tmp_product["product_type"]]) {
                                    $tmp_result_cart["data"]["coupon_data_from_bff"]["is_pass"]                                                  = false;
                                    $tmp_result_cart["data"]["coupon_data_from_bff"]["message"]                                                  = ["en" => "this product type is not allowed for this coupon", "th" => "สินค้าชนิดนี้ไม่ได้รับอนุญาตสำหรับคูปองนี้"];
                                    $tmp_result_cart["data"]["coupon_data_from_bff"]["restrict_product_type"]                                    = [];
                                    $tmp_result_cart["data"]["coupon_data_from_bff"]["restrict_product_type"]["restrict_product_type_list"]      = array_keys($each_prod_coupon_config["restrict_product_type"]);
                                    $tmp_result_cart["data"]["coupon_data_from_bff"]["restrict_product_type"]["current_restricted_product_type"] = $tmp_product["product_type"];
                                }
                            }
                        }
                        // end of tec-1230 product type coupon

                        $total_product_price_for_coupon_criteria = 0;
                        // start of fix TEC-19 add discount coupon
                        if (isset($tmp_result_cart["data"]["coupon_data_from_bff"]["is_pass"]) && $tmp_result_cart["data"]["coupon_data_from_bff"]["is_pass"]) {
                            $coupon_data_from_bff = $tmp_result_cart["data"]["coupon_data_from_bff"];

                            if ($coupon_data_from_bff["discount_type"] == "percent") {
                                $discount_amount_from_coupon_per_product = $coupon_data_from_bff["discount_value_by_seller"] / 100.00 * $tmp_product["inventory"]["price"];
                            } else {
                                $discount_amount_from_coupon_per_product = $coupon_data_from_bff["discount_value_by_seller"];
                            }

                            // start of product id allow in coupon
                            if (isset($tmp_result_cart["data"]["coupon_data_from_bff"]["products"][0]["id"])) {
                                // discount only that product id
                                $allow_coupon_prod_id_list = array_flip(array_column($tmp_result_cart["data"]["coupon_data_from_bff"]["products"], "id"));
                            }

                            $is_allow_this_prod_id_coupon = false;
                            if (isset($allow_coupon_prod_id_list) && isset($allow_coupon_prod_id_list[$tmp_product["id"]])) {
                                $is_allow_this_prod_id_coupon = true;
                            } elseif (!isset($allow_coupon_prod_id_list)) {
                                $is_allow_this_prod_id_coupon = true;
                            }
                            // end of product id allow in coupon

                            // TODO: check if really need this, no example available
                            // start of product id not allow in coupon
                            if (isset($tmp_result_cart["data"]["coupon_data_from_bff"]["product_exclude"][0])) {
                                // discount only that store id
                                $not_allow_coupon_store_id_list = array_flip($tmp_result_cart["data"]["coupon_data_from_bff"]["product_exclude"]);
                            }

                            $is_not_allow_this_prod_id_coupon = false;
                            if (isset($not_allow_coupon_store_id_list) && isset($not_allow_coupon_store_id_list[$tmp_result_cart["data"]["record"][$store_index]['store']['id']])) {
                                $is_not_allow_this_prod_id_coupon = true;
                            } elseif (!isset($not_allow_coupon_store_id_list)) {
                                $is_not_allow_this_prod_id_coupon = false;
                            }
                            // end of product id not allow in coupon

                            // TODO: check if really need this, no example available
                            // start of store id allow in coupon
                            if (isset($tmp_result_cart["data"]["coupon_data_from_bff"]["stores"][0]["id"])) {
                                // discount only that store id
                                $allow_coupon_store_id_list = array_flip(array_column($tmp_result_cart["data"]["coupon_data_from_bff"]["stores"], "id"));
                            }

                            $is_allow_this_store_id_coupon = false;
                            if (isset($allow_coupon_store_id_list) && isset($allow_coupon_store_id_list[$tmp_result_cart["data"]["record"][$store_index]['store']['id']])) {
                                $is_allow_this_store_id_coupon = true;
                            } elseif (!isset($allow_coupon_store_id_list)) {
                                $is_allow_this_store_id_coupon = true;
                            }
                            // end of store id allow in coupon

                            // start of store id not allow in coupon
                            if (isset($tmp_result_cart["data"]["coupon_data_from_bff"]["store_exclude"][0])) {
                                // discount only that store id
                                $not_allow_coupon_store_id_list = array_flip($tmp_result_cart["data"]["coupon_data_from_bff"]["store_exclude"]);
                            }

                            $is_not_allow_this_store_id_coupon = false;
                            if (isset($not_allow_coupon_store_id_list) && isset($not_allow_coupon_store_id_list[$tmp_result_cart["data"]["record"][$store_index]['store']['id']])) {
                                $is_not_allow_this_store_id_coupon = true;
                            } elseif (!isset($not_allow_coupon_store_id_list)) {
                                $is_not_allow_this_store_id_coupon = false;
                            }
                            // end of store id not allow in coupon

                            if ($is_allow_this_prod_id_coupon && $is_allow_this_store_id_coupon && !$is_not_allow_this_prod_id_coupon && !$is_not_allow_this_store_id_coupon) {
                                $round_discount_amount_coupon_product = round($discount_amount_from_coupon_per_product, 2);
                                $tmp_quantity                         = 1;
                                if (!isset($allow_coupon_prod_id_list)) {
                                    $tmp_quantity = $tmp_product["quantity"];
                                }

                                $remain_discount   = $tmp_result_cart["data"]["coupon_data_from_bff"]["discount_max"] - $total_coupon_discount_amount;
                                $tmp_product_price = $tmp_product["inventory"]["price"];
                                // start of tec-1762 coupon wrong product price
                                if (isset($tmp_product["discount"]) && is_numeric($tmp_product["discount"])) {
                                    $tmp_product_price -= $tmp_product["discount"];
                                }
                                // end of tec-1762 coupon wrong product price
                                if (
                                    $tmp_result_cart["data"]["coupon_data_from_bff"]["discount_max"] - $total_coupon_discount_amount <= $tmp_quantity * $tmp_product_price &&
                                    $round_discount_amount_coupon_product + $total_coupon_discount_amount < $tmp_result_cart["data"]["coupon_data_from_bff"]["discount_max"]
                                ) {
                                    $tmp_discount                                    = $round_discount_amount_coupon_product * $tmp_quantity;
                                    $tmp_product["discount_from_coupon_per_product"] = $remain_discount >= $tmp_discount ? $tmp_discount : $remain_discount;
                                    $total_coupon_discount_amount += $tmp_product["discount_from_coupon_per_product"];
                                } elseif (
                                    $round_discount_amount_coupon_product + $total_coupon_discount_amount >= $tmp_result_cart["data"]["coupon_data_from_bff"]["discount_max"] &&
                                    $tmp_result_cart["data"]["coupon_data_from_bff"]["discount_max"] - $total_coupon_discount_amount <= $tmp_quantity * $tmp_product_price
                                ) {
                                    $round_discount_amount_coupon_product = $tmp_result_cart["data"]["coupon_data_from_bff"]["discount_max"] - $total_coupon_discount_amount;

                                    $tmp_discount                                    = $round_discount_amount_coupon_product * $tmp_quantity;
                                    $tmp_product["discount_from_coupon_per_product"] = $remain_discount >= $tmp_discount ? $tmp_discount : $remain_discount;
                                    $total_coupon_discount_amount += $tmp_product["discount_from_coupon_per_product"];
                                } elseif (
                                    $total_coupon_discount_amount + $tmp_quantity * $tmp_product_price <= $tmp_result_cart["data"]["coupon_data_from_bff"]["discount_max"] &&
                                    $tmp_result_cart["data"]["coupon_data_from_bff"]["discount_type"] != "percent"
                                ) {
                                    $round_discount_amount_coupon_product = $tmp_product_price;

                                    $tmp_discount                                    = $round_discount_amount_coupon_product * $tmp_quantity;
                                    $tmp_product["discount_from_coupon_per_product"] = $remain_discount >= $tmp_discount ? $tmp_discount : $remain_discount;
                                    $total_coupon_discount_amount += $tmp_product["discount_from_coupon_per_product"];
                                } elseif (
                                    $tmp_result_cart["data"]["coupon_data_from_bff"]["discount_type"] == "percent" &&
                                    $total_coupon_discount_amount + $tmp_quantity * $tmp_product_price <= $tmp_result_cart["data"]["coupon_data_from_bff"]["discount_max"]
                                ) {
                                    $tmp_discount                                    = $round_discount_amount_coupon_product * $tmp_quantity;
                                    $tmp_product["discount_from_coupon_per_product"] = $remain_discount >= $tmp_discount ? $tmp_discount : $remain_discount;
                                    $total_coupon_discount_amount += $tmp_product["discount_from_coupon_per_product"];
                                }

                                if (isset($allow_coupon_prod_id_list)) {
                                    // tec-1021 wrong discount in coupon
                                    $total_product_price_for_coupon_criteria += $tmp_product_price * $tmp_product["quantity"];
                                }
                            }
                        }
                        // end of fix TEC-19 add discount coupon

                        // save data back from tmp_product to tmp_result_cart
                        if (!(isset($is_skip_device_only) && $is_skip_device_only)) {
                            $tmp_result_cart["data"]["record"][$store_index]["products"][$product_index] = $tmp_product;
                        }
                        // end of is_exist_case_trueidtvbox_free_tol

                        if (isset($tmp_product["quantity"]) && is_numeric($tmp_product["quantity"]) && $tmp_product["quantity"] > 0) {
                            $total_product_price += $tmp_product["inventory"]["price"] * $tmp_product["quantity"];
                        }

                        $total_product_count += 1;

                        if ($tmp_product["product_type"] == "product") {
                            $inventory_list_data_device_only_value[$tmp_product['inventory']['sku']] =
                                [
                                "store_index"   => $store_index,
                                "product_index" => $product_index,
                            ];
                        }

                        // start of TEC-419-420 add COD payment method
                        $inventory_list_data_cod_value[$tmp_product['inventory']['sku']] =
                            [
                            "store_index"   => $store_index,
                            "product_index" => $product_index,
                            "product_id"    => $tmp_product["id"],
                            "inventory_id"  => $tmp_product['inventory']['id'],
                            "store_id"      => $tmp_result_cart["data"]["record"][$store_index]['store']['id'],
                        ];
                        // end of TEC-419-420 add COD payment method

                        $product_types_list[] = $tmp_product["product_type"];
                    }
                }
                // end of show product point even cart have more than one product
            }

            $to_check_order_min = $total_product_price;
            if (isset($allow_coupon_prod_id_list)) {
                // tec-1021 wrong discount in coupon
                $to_check_order_min = $total_product_price_for_coupon_criteria;
            }

            // start of fix TEC-19 add discount coupon
            if (isset($tmp_result_cart["data"]["coupon_data_from_bff"]["is_pass"]) && $tmp_result_cart["data"]["coupon_data_from_bff"]["is_pass"]
                && (isset($tmp_result_cart["data"]["coupon_data_from_bff"]["order_min"]) && $tmp_result_cart["data"]["coupon_data_from_bff"]["order_min"] != 0 && $to_check_order_min < $tmp_result_cart["data"]["coupon_data_from_bff"]["order_min"])
                && isset($tmp_result_cart["data"]["coupon_data_from_bff"]["discount_max"])) {
                // stop cart from calculate discount coupon
                $tmp_result_cart["data"]["coupon_data_from_bff"]["is_pass"] = false;
                $tmp_result_cart["data"]["coupon_data_from_bff"]["message"] = ["en" => "total price of cart is less than specified in minimum amount from coupon", "th" => "ราคาสุทธิของตะกร้า น้อยกว่า ขั้นต่ำของคูปอง ที่กำหนดไว้"];
            } elseif (isset($tmp_result_cart["data"]["coupon_data_from_bff"]["is_pass"]) && $tmp_result_cart["data"]["coupon_data_from_bff"]["is_pass"] &&
                $total_coupon_discount_amount <= 0) {
                // stop cart from calculate discount coupon with amount 0 as pass
                $tmp_result_cart["data"]["coupon_data_from_bff"]["is_pass"] = false;
                $tmp_result_cart["data"]["coupon_data_from_bff"]["message"] = ["en" => "Please enter a correct code.", "th" => "กรุณาใส่โค้ดส่วนลดที่ถูกต้อง"];
            } elseif (isset($tmp_result_cart["data"]["coupon_data_from_bff"]["is_pass"]) && $tmp_result_cart["data"]["coupon_data_from_bff"]["is_pass"]) {
                $tmp_result_cart["data"]["coupon_data_from_bff"]["total_coupon_discount_amount"] = $total_coupon_discount_amount;
            }
            // end of fix TEC-19 add discount coupon

            if (!empty($inventory_list_data_device_only_value)) {
                $inventory_id_list      = array_keys($inventory_list_data_device_only_value);
                $tmp_device_only_result = WeOmniService::postGetDeviceOnlyDiscount($inventory_id_list);
                if (!empty($tmp_device_only_result)) {
                    foreach ($tmp_device_only_result as $tmp_device_only_result_key => $tmp_device_only_result_value) {
                        $tmp_inventory_id = $tmp_device_only_result_key;

                        if (isset($inventory_list_data_device_only_value[$tmp_inventory_id]) &&
                            $tmp_result_cart["data"]["record"][$inventory_list_data_device_only_value[$tmp_inventory_id]["store_index"]]
                            ["products"][$inventory_list_data_device_only_value[$tmp_inventory_id]["product_index"]]
                            ["product_type"] == "product"
                        ) {
                            // discount the price
                            $store_index                                                                                                        = $inventory_list_data_device_only_value[$tmp_inventory_id]["store_index"];
                            $product_index                                                                                                      = $inventory_list_data_device_only_value[$tmp_inventory_id]["product_index"];
                            $tmp_result_cart["data"]["record"][$store_index]["products"][$product_index]["inventory"]["price"]                  = $tmp_result_cart["data"]["record"][$store_index]["products"][$product_index]["inventory"]["price"] - $tmp_device_only_result_value;
                            $tmp_result_cart["data"]["record"][$store_index]["products"][$product_index]["inventory"]["device_only_amount"]     = $tmp_device_only_result_value;
                            $tmp_result_cart["data"]["record"][$store_index]["products"][$product_index]["inventory"]["device_only_action_ref"] = $tmp_device_only_result[$tmp_device_only_result_key . "_action_ref"];
                            $tmp_result_cart["data"]["record"][$store_index]["products"][$product_index]["inventory"]["device_only_name"]       = $tmp_device_only_result[$tmp_device_only_result_key . "_campaign_name"];
                            $tmp_result_cart["data"]["record"][$store_index]["products"][$product_index]["product_type"]                        = "product_device_only";
                        }
                    }
                }
            }

            // start of TEC-419-420 add COD payment method
            $cod_payment_channel_data_redis_bff = [];

            if (!empty($inventory_list_data_cod_value)) {
                $fixed_parameter_list                 = ["store_ids" => [], "product_ids" => [], "inventory_ids" => []];
                $fixed_parameter_list["base_url"]     = env('AWS_GATEWAY_URL_TOL_SSV', false);
                $cod_payment_channel_data_by_store_id = [];
                foreach ($inventory_list_data_cod_value as $inventory_list_data_cod_parameter_key => $inventory_list_data_cod_parameter_value) {
                    $tmp_store_id     = intval(substr($inventory_list_data_cod_parameter_value["store_id"], 1));
                    $tmp_product_id   = intval(substr($inventory_list_data_cod_parameter_value["product_id"], 1));
                    $tmp_inventory_id = intval($inventory_list_data_cod_parameter_value["inventory_id"]);

                    $fixed_parameter_list["store_ids"][$inventory_list_data_cod_parameter_key]     = $tmp_store_id;
                    $fixed_parameter_list["product_ids"][$inventory_list_data_cod_parameter_key]   = $tmp_product_id;
                    $fixed_parameter_list["inventory_ids"][$inventory_list_data_cod_parameter_key] = $tmp_inventory_id;

                    if (!isset($cod_payment_channel_data_by_store_id[$inventory_list_data_cod_parameter_value["store_id"]])) {
                        $tmp_header                           = TolSelfService::getHeader('application/json');
                        $current_url                          = "/store/payment/channel";
                        $tmp_fixed_parameter_list["store_id"] = $inventory_list_data_cod_parameter_value["store_id"];
                        $tmp_fixed_parameter_list["base_url"] = env('AWS_GATEWAY_URL_TOL_SSV', false);

                        $tmp_lrequest = new \Illuminate\Http\Request();
                        $tmp_lrequest->replace($tmp_fixed_parameter_list);
                        $tmp_content_payment_channel_data = WlsService::operateRequestAction(
                            $current_url,
                            "get",
                            new \Illuminate\Http\Request(),
                            $tmp_header,
                            $tmp_fixed_parameter_list
                        );
                        $json_decode_tmp_content_payment_channel_data                                = json_decode($tmp_content_payment_channel_data[1], true);
                        $cod_payment_channel_data_by_store_id[$tmp_fixed_parameter_list["store_id"]] = $json_decode_tmp_content_payment_channel_data["data"];
                    }

                    $cod_payment_channel_data_redis_bff = Redis::get('truestore:cod_payment_channel_data_redis_bff:value');
                    $cod_payment_channel_data_redis_bff = json_decode($cod_payment_channel_data_redis_bff, true);
                }
                $fixed_parameter_list["store_ids"]     = array_values($fixed_parameter_list["store_ids"]);
                $fixed_parameter_list["product_ids"]   = array_values($fixed_parameter_list["product_ids"]);
                $fixed_parameter_list["inventory_ids"] = array_values($fixed_parameter_list["inventory_ids"]);

                $tmp_header   = TolSelfService::getHeader('application/json');
                $current_url  = "/store/payment/sku";
                $tmp_lrequest = new \Illuminate\Http\Request();
                $tmp_lrequest->replace($fixed_parameter_list);

                $content_cod_payment_sku_exclude = WlsService::operateRequestAction(
                    $current_url,
                    "post",
                    new \Illuminate\Http\Request(),
                    $tmp_header,
                    $fixed_parameter_list
                );
                $json_decode_content_cod_payment_sku_exclude = json_decode($content_cod_payment_sku_exclude[1], true);

                $tmp_result_cart["data"]["payment_sku_exclude"]             = $json_decode_content_cod_payment_sku_exclude["data"];
                $tmp_result_cart["data"]["store_payment_channel"]           = $cod_payment_channel_data_by_store_id;
                $tmp_result_cart["data"]["store_payment_channel_redis_bff"] = $cod_payment_channel_data_redis_bff;

                $tmp_result_cart["data"]["is_allow_payment_method_cod"] = false;
                // allow list
                $is_tmp_allow_payment_method_cod_array  = [false, false, true];
                $is_tmp_boolean_allow_cod_check         = true;
                $payment_method_allow_list_per_step     = [0 => [], 1 => []];
                $payment_method_not_allow_list_per_step = [0 => []];
                if ($is_tmp_boolean_allow_cod_check && isset($tmp_result_cart["data"]["store_payment_channel"])) {
                    foreach ($tmp_result_cart["data"]["store_payment_channel"] as $tmp_store_id => $tmp_value) {
                        if (isset($tmp_value["payment_channel"])) {
                            $tmp_result_cart["data"]["store_payment_channel"][$tmp_store_id]["company_list"] = array_column($tmp_value["payment_channel"], "sof", "company");

                            foreach ($tmp_result_cart["data"]["store_payment_channel"][$tmp_store_id]["company_list"] as $tmp_company => $tmp_company_value) {
                                $tmp_sof_code_list                                                                                                  = $tmp_result_cart["data"]["store_payment_channel"][$tmp_store_id]["company_list"][$tmp_company];
                                $tmp_result_cart["data"]["store_payment_channel"][$tmp_store_id]["company_list"][$tmp_company]["sof_code_tmp_list"] = $tmp_sof_code_list;

                                $param_list = ["sof_code", "sof_text", "can_pay_from", "can_pay_to"];

                                foreach ($param_list as $each_param_name) {
                                    ${$each_param_name . "_result_list"} = [];
                                }

                                for ($i = 0; $i < count($tmp_sof_code_list); $i++) {
                                    foreach ($param_list as $each_param_name) {
                                        ${$each_param_name . "_result_list"}[] = $tmp_sof_code_list[$i][$each_param_name];
                                    }
                                }

                                foreach ($param_list as $each_param_name) {
                                    array_set($tmp_result_cart, "data.store_payment_channel.$tmp_store_id.company_list.$tmp_company.$each_param_name" . "_result_list", ${$each_param_name . "_result_list"});
                                }
                            }
                        }
                    }

                    $tmp_array      = $tmp_result_cart["data"]["store_payment_channel"];
                    $tmp_key_search = "sof_code";

                    $tmp_result_cart["data"]["cod_check_step_1_bff_l"] = ($tmp_result_cart["data"]["store_payment_channel"]);
                    $is_tmp_allow_payment_method_cod_array[0]          = true;
                } else {
                    $is_tmp_allow_payment_method_cod_array[0] = true;
                }

                $is_tmp_boolean_allow_cod_check = $is_tmp_boolean_allow_cod_check && $is_tmp_allow_payment_method_cod_array[0];
                if ($is_tmp_boolean_allow_cod_check && isset($tmp_result_cart["data"]["store_payment_channel_redis_bff"])) {
                    $tmp_result_cart["data"]["cod_check_step_2_bff"] = (($tmp_result_cart["data"]["store_payment_channel_redis_bff"]));
                    $payment_method_allow_list_per_step[1]           = array_keys($tmp_result_cart["data"]["store_payment_channel_redis_bff"]);

                    $is_tmp_allow_payment_method_cod_array[1] = true;
                } else {
                    $is_tmp_allow_payment_method_cod_array[1] = true;
                }

                // not allow list
                $is_tmp_boolean_allow_cod_check = $is_tmp_boolean_allow_cod_check && $is_tmp_allow_payment_method_cod_array[1];
                if ($is_tmp_boolean_allow_cod_check && isset($tmp_result_cart["data"]["payment_sku_exclude"])) {
                    $tmp_result_cart["data"]["cod_check_step_3_bff"] = (($tmp_result_cart["data"]["payment_sku_exclude"]));
                    $tmp_step_3_cod                                  = array_merge([array_values($tmp_result_cart["data"]["payment_sku_exclude"])]);

                    foreach ($tmp_result_cart["data"]["payment_sku_exclude"] as $tmp_store_id => $tmp_value) {
                        foreach ($tmp_value as $tmp_product_id => $tmp_value_2) {
                            foreach ($tmp_value_2 as $tmp_inv_id => $tmp_value_3) {
                                $payment_method_not_allow_list_per_step[0] = array_merge($payment_method_not_allow_list_per_step[0], $tmp_value_3);
                            }
                        }
                    }

                    $is_tmp_allow_payment_method_cod_array[2] = false;
                } else {
                    $is_tmp_allow_payment_method_cod_array[2] = false;
                }

                $cod_exclude_list = array_get($cod_payment_channel_data_redis_bff, 'COD.exclude', []);
                if (!empty($cod_exclude_list)) {
                    $check_cart_exclude = array_intersect($product_types_list, $cod_exclude_list);
                    if (!empty($check_cart_exclude)) {
                        $payment_method_not_allow_list_per_step[0][] = 'COD';
                    }
                }

                // intersect payment method from stores
                foreach ($tmp_result_cart["data"]["cod_check_step_1_bff_l"] as $store) {
                    $sof_codes                             = array_get($store, 'company_list.ewallet.sof_code_result_list', []);
                    $payment_method_allow_list_per_step[0] = empty($payment_method_allow_list_per_step[0]) ? $sof_codes : array_intersect($payment_method_allow_list_per_step[0], $sof_codes);
                }

                $payment_method_allow_list_per_step[0]     = array_values(array_unique($payment_method_allow_list_per_step[0]));
                $payment_method_allow_list_per_step[1]     = array_values(array_unique($payment_method_allow_list_per_step[1]));
                $payment_method_not_allow_list_per_step[0] = array_values(array_unique($payment_method_not_allow_list_per_step[0]));

                $tmp_result_cart["data"]["cod_check_bff_payment_method_allow_list_per_step"]     = $payment_method_allow_list_per_step;
                $tmp_result_cart["data"]["cod_check_bff_payment_method_not_allow_list_per_step"] = $payment_method_not_allow_list_per_step;

                // use in frontend site for payment exclude
                $tmp_result_cart["data"]["payment_exclude"] = array_values(array_diff($payment_method_not_allow_list_per_step[0], $payment_method_allow_list_per_step[0]));

                $is_tmp_boolean_allow_cod_check = $is_tmp_boolean_allow_cod_check && $is_tmp_allow_payment_method_cod_array[2];

                if (isset(array_flip($payment_method_allow_list_per_step[0])["COD"])) {
                    $is_tmp_allow_payment_method_cod_array[0] = true;
                } else {
                    $is_tmp_allow_payment_method_cod_array[0] = false;
                }
                if (isset(array_flip($payment_method_allow_list_per_step[1])["COD"])) {
                    $is_tmp_allow_payment_method_cod_array[1] = true;
                } else {
                    $is_tmp_allow_payment_method_cod_array[1] = false;
                }
                if (!isset(array_flip($payment_method_not_allow_list_per_step[0])["COD"])) {
                    $is_tmp_allow_payment_method_cod_array[2] = true;
                } else {
                    $is_tmp_allow_payment_method_cod_array[2] = false;
                }

                $tmp_result_cart["data"]["is_tmp_allow_payment_method_cod_array"] = $is_tmp_allow_payment_method_cod_array;

                // change condition to check allow payment method COD here
                if ($is_tmp_allow_payment_method_cod_array[0] && $is_tmp_allow_payment_method_cod_array[1] && $is_tmp_allow_payment_method_cod_array[2]) {
                    $tmp_result_cart["data"]["is_allow_payment_method_cod"] = true;
                } else {
                    $tmp_result_cart["data"]["is_allow_payment_method_cod"] = false;
                    $tmp_result_cart["data"]["payment_exclude"]             = array_unique(array_merge($tmp_result_cart["data"]["payment_exclude"], ['COD']));
                }
            }
            // end of TEC-419-420 add COD payment method

            // start of shipping fee calculation
            $shipping                        = 0;
            $to_be_add_truecard_shipping_fee = 0;

            if ($is_add_shipping_fee_true_card) {
                $to_be_add_truecard_shipping_fee = 25;
            }
            $shipping += $to_be_add_truecard_shipping_fee;
            if (isset($tmp_result_cart["data"]["record"])) {
                $tmp_result_cart["data"]["shipping_fee"] = $shipping;
            }

            // end of shipping fee calculation

            // start of get ent pack data to cart
            $get_redis_ent_pack_from_cart             = Redis::get('truestore:ent_pack_cart:' . $cart_hash . ':content');
            $json_decode_get_redis_ent_pack_from_cart = json_decode($get_redis_ent_pack_from_cart, true);

            if (isset($json_decode_get_redis_ent_pack_from_cart) &&
                is_array($json_decode_get_redis_ent_pack_from_cart) &&
                !empty($json_decode_get_redis_ent_pack_from_cart['matcode'])
            ) {
                $tmp_result_cart["data"]["entertainment"] = $json_decode_get_redis_ent_pack_from_cart["entertainment_package_data"];
            }
            // end of get ent pack data to cart

            if (isset($json_decode_get_redis_ent_pack_from_cart) &&
                is_array($json_decode_get_redis_ent_pack_from_cart) &&
                !empty($json_decode_get_redis_ent_pack_from_cart['credit_card_only'])
            ) {
                $tmp_result_cart["data"]["credit_card_only"] = true;
                $tmp_result_cart["data"]["code_5g"]          = Arr::get($json_decode_get_redis_ent_pack_from_cart, 'cart_type', '');
            }

            $merchant_id                                      = array_get($tmp_result_cart, 'data.record.0.store.id');
            $toggle_data                                      = PaymentMethodService::getToggleOmise($merchant_id);
            $toggle_omise                                     = array_get($toggle_data, 'omise_toggle', false);
            $toggle_weomni                                    = array_get($toggle_data, 'weomni_toggle', false);
            $tmp_result_cart['data']['store_payment_methods'] = (object) [];
            $total_inventory = 0;
            $total_price     = array_get($tmp_result_cart, 'data.record.0.total_price');
            $products        = array_get($tmp_result_cart, 'data.record.0.products');

            if (!empty($products)) {
                foreach ($products as $product) {
                    $total_inventory += array_sum(array_column($product, 'device_only_amount'));
                }

                if ($total_inventory > 0) {
                    $total_price = $total_price - $total_inventory;
                }
            }

            if ($toggle_omise === true || $toggle_weomni === true) {

                $tmp_result_cart['data']['store_payment_methods'] = PaymentMethodService::getPaymentMethods([
                    'amount'      => $total_price,
                    'merchant_id' => $merchant_id,
                ]);

                $p2c2p_gateway = PaymentMethodService::get2c2pGateway(Arr::get($tmp_result_cart, 'data', []));
                if (!empty($p2c2p_gateway)) {
                    Arr::set($tmp_result_cart, 'data.record', $p2c2p_gateway);
                }
            }

            $tmp_result_cart['data']['omise_toggle']     = $toggle_omise;
            $tmp_result_cart['data']['promptpay_toggle'] = array_get($toggle_data, 'promptpay_toggle', false);
            $tmp_result_cart['data']['weomni_toggle']    = $toggle_weomni;

            $paynext_config = PaymentMethodService::getChannelConfigByName('paynext', $total_price);
            $ew_config = PaymentMethodService::getChannelConfigByName('p2c2pew', $total_price);

            $tmp_result_cart['data']['paynext_toggle'] = Arr::get($paynext_config, 'toggle');
            $tmp_result_cart['data']['paynext_disable'] = Arr::get($paynext_config, 'disable');
            $tmp_result_cart['data']['ew_toggle'] = Arr::get($ew_config, 'toggle');
            $tmp_result_cart['data']['ew_disable'] = Arr::get($ew_config, 'disable');
            Arr::set($tmp_result_cart, 'data.pay_smooth', ProductService::getConfigPaySmooth());
            Arr::set(
                    $tmp_result_cart,
                'data.is_cart_pay_smooth',
                empty(ProductService::checkAllCartProductIsPaySmooth($tmp_result_cart)) ? false : true
            );

            if (!empty($lrequest->header('tmvh-token'))) {
                $aes_wecamp_result = WeOmniService::getAesWecamp($lrequest->header('tmvh-token'));

                $tmp_explode_aes_wecamp_result = explode('|', \Arr::get($aes_wecamp_result, '1.original_plaintext'));

                $company_group = \Arr::get($tmp_explode_aes_wecamp_result, '1');
                $user_type     = \Arr::get($tmp_explode_aes_wecamp_result, '2');

                $aes_row_3_content = \Arr::get($tmp_explode_aes_wecamp_result, '3');

                if (in_array($aes_row_3_content, ["cp_employee_free", "cp_employee_discount", "TRUE_PAY_SMOOTH"])) {
                    \Arr::set($tmp_result_cart, "data.is_paysmooth_tmvh_token", true);
                }
            }

            $paysmooth_token = $lrequest->header('paysmooth-token');
            if (!empty($paysmooth_token)) {
                $paysmooth_verified_data = PaySmoothService::getVerify($paysmooth_token);
                \Arr::set($tmp_result_cart, "data.paysmooth_verified_info", \Arr::get($paysmooth_verified_data, "response"));
            }

            // start of tec-2095 2c2p
            if (Redis::get('truestore:is_enable_by_string_true:disable_by_other_or_del_key:is_2c2p_v2_pattern:frontend:redis_data') == 'true') {
                Arr::set($tmp_result_cart, 'data.installment_2c2p', PaymentMethodService::buildInstallment2C2P($tmp_result_cart));
            }
            // end of tec-2095 2c2p

            // get payment banner TEC-2613
            $tmp_result_cart["data"]["payment_banner"] = json_decode(\Arr::get(self::getPaymentBannerConfig(), 'value'), true);
            // end of TEC-2613

            // start of tec-2662 2c2p ccw
            if (Redis::get('truestore:is_enable_by_string_true:disable_by_other_or_del_key:is_2c2p_ccw:frontend:redis_data') === 'true') {
                Arr::set($tmp_result_cart, 'data.ccw_2c2p', true);
            }
            // end of tec-2662 2c2p ccw

            // save data to cart
            $content = [$content[0], json_encode($tmp_result_cart)];
        }
        // end of edit body of request (parameters)

        // mock
        if (isset(explode("/", $url)[2]) && $method == "get" && $is_mock) {
            $content    = [200, ""];
            $content[1] = (file_get_contents("sample_page_when_offline/cart.json"));
        }

        $is_mock_privilege = false;
        if ($is_mock_privilege) {
            $tmp = json_decode($content[1], true);
            if (isset($tmp["data"]["record"][0]["products"][0]["id"]) &&
                isset($tmp["data"]["record"][0]["products"][0]["inventory"]["sku"])
                && $tmp["data"]["record"][0]["products"][0]["id"] == "L91201541"
            ) {
                $tmp["data"]["record"][0]["products"][0]["inventory"]["sku"] = "3000078509";
            }
            $content[1] = json_encode($tmp);
        }
        // end of mock
        if (isset($content[2]["data"]["error"]["message"])) {
            $content[1] = $content[2]["data"]["error"]["message"];
        }

        if (isset($cart_hash) && $content[0] <= 200) {
            $tmp              = json_decode($content[1], true);
            $tmp["cart_hash"] = $cart_hash;

            if (is_array(array_get($tmp, 'data')) && empty(array_get($tmp, 'data.store_payment_methods'))) {
                $tmp['data']['store_payment_methods'] = (object) [];
            }

            $content[1] = json_encode($tmp);
        }

        return $content;
    }

    public static function postPlaceorderWls($url, $method, $lrequest, $header)
    {
        $tmp_lrequest                             = $lrequest->all();
        $payment_method                           = PaymentMethodService::switchPaymentMethod(array_get($tmp_lrequest, 'payment_detail.method'), array_get($tmp_lrequest, 'products.0.store_id'));
        $payment_method                           = PaymentMethodService::switchPaymentMethodByGateway($tmp_lrequest, $payment_method);
        $payment_method                           = PaymentMethodService::findCampaignTypeAndSwitchPaymentMethod($tmp_lrequest, $payment_method);
        $tmp_lrequest['payment_detail']['method'] = (string) $payment_method;
        if ($payment_method === 'P2C2PCCW') {
            unset($tmp_lrequest['payment_detail']['credit_number']);
        }
        $lrequest->replace($tmp_lrequest);

        $url                    = "order/process/placeorder";
        $header["x-api-auth"]   = env('X_API_AUTH', false);
        $header["Content-Type"] = "application/json";
        $content                = GuzzleService::postGuzzleRequest(
            $url,
            $method,
            $lrequest,
            $header,
            env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
        );
        LogService::writeServiceLog(
            "postPlaceorderWls",
            json_encode_unicode($lrequest->all()),
            json_encode_unicode($content),
            (new \DateTime())->format('d/m/Y H:i:s')
        );

        return $content;
    }

    public static function getValidatePrivilegeSubscriberByMobile($url, $method, $lrequest, $header)
    {
        $header = [
            "Content-Type"       => "application/x-www-form-urlencoded",
            "WEB_METHOD_CHANNEL" => "KYC_WEMALL",
            "apikey"             => env("KYC_WEMALL_API_KEY", false),
            "Accept-Charset"     => "charset=UTF-8",
            "x-api-auth"         => env("X_API_AUTH", false),
        ];
        $url      = "check-preverify/wemall/sales/order/tmv/validate-privilege-subscriber-by-mobile";
        $method   = "get";
        $is_first = true;
        if (count($lrequest->all()) > 0 && $method == "get") {
            if ($is_first) {
                $url .= '?';
                $is_first = false;
            }
            foreach ($lrequest->all() as $key => $value) {
                $url .= $key . '=' . $value . '&';
            }
        }

        $content = GuzzleService::postGuzzleRequest(
            $url,
            $method,
            $lrequest,
            $header,
            env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
        );
        LogService::writeServiceLog(
            "verify_privilege_subscriber_by_mobile_step_d",
            json_encode_unicode($lrequest->all()),
            json_encode_unicode($content),
            (new \DateTime())->format('d/m/Y H:i:s')
        );

        return $content;
    }

    public static function postVerifyPostpaidWls($url, $method, $lrequest, $header)
    {
        $body = ["is_pass" => false];

        $tmp_check_mini_step_result = ["E" => false];
        $is_enter_mini_step_result  = ["E" => false];

        $id_number        = $lrequest->input('id_number');
        $tmp_check_result = [];

        // check for E,F
        $is_enter_mini_step_result["E"] = true;

        $tmp_check_E_result              = WlsService::checkForEPostpaidFullVersion($lrequest, $id_number);
        $tmp_check_mini_step_result["E"] = $tmp_check_E_result["is_pass"];
        if (!$tmp_check_mini_step_result["E"] && isset($tmp_check_E_result["error"])) {
            if (!isset($body["error"])) {
                $body["error"] = ["E" => $tmp_check_E_result["error"]];
            } else {
                $body["error"]["E"] = $tmp_check_E_result["error"];
            }
        }

        // start of check E
        $step_name                             = "E";
        $is_enter_mini_step_result[$step_name] = true;
        $tmp_parameters                        = [
            "id_number" => $id_number,
        ];
        $tmp_check_result[$step_name]           = $tmp_check_E_result; // to be change to checkforE properly
        $tmp_check_mini_step_result[$step_name] = $tmp_check_result[$step_name]["is_pass"];

        if (!$tmp_check_mini_step_result[$step_name] && isset($tmp_check_result[$step_name]["failed_output"])) {
            if (!isset($body["failed_output"])) {
                $body["failed_output"] = [$step_name => $tmp_check_result[$step_name]["failed_output"]];
            } else {
                $body["failed_output"][$step_name] = $tmp_check_result[$step_name]["failed_output"];
            }
        }
        // end of check E

        if ($tmp_check_mini_step_result["E"]) {
            $body["is_pass"] = true;
        }

        if (isset($face_recognition_result)) {
            $body["face_recognition_result"] = $face_recognition_result;
        }

        if (!$body["is_pass"] && !$tmp_check_mini_step_result["E"]) {
            $body["error_message"] = ["en" => "not pass because of check preverify postpaid full version.", "th" => "ไม่ผ่านเนื่องจากการตรวจสอบ check preverify postpaid full version"];

            $body["tmp_check_E_result"] = $tmp_check_E_result;
            if (isset($tmp_check_E_result["message"])) {
                $body["message"] = $tmp_check_E_result["message"];
            } else {
                $body["message"]       = [];
                $body["message"]["th"] = "ขออภัย ไม่สามารถทำรายการได้ \n กรุณาติดต่อทรูช็อป";
                $body["message"]["en"] = "Sorry, the system cannot process your request at the moment.";
            }
        }

        if (isset($tmp_check_result)) {
            $body["tmp_check_result"] = $tmp_check_result;
        }

        $body              = json_encode($body);
        $tmp_last_big_body = [200, $body, "tmp_check_mini_step_result" => $tmp_check_mini_step_result];
        if (isset($tmp_data_to_check_post_full_preverify)) {
            $tmp_last_big_body["tmp_data_to_check_post_full_preverify"] = $tmp_data_to_check_post_full_preverify;
        }

        return $tmp_last_big_body;
    }

    public static function checkForEPostpaidFullVersion($lrequest, $id_number) //check for E

    {
        $tmp_check_mini_step_result = ["E" => false];
        //check postpaid full version = full preverify
        $url          = "check-preverify/wemall/profiles/customer/preverify";
        $method       = "post";
        $tmp_lrequest = new \Illuminate\Http\Request();
        $tmp_lrequest->setMethod(strtoupper($method));
        $request_parameter = [];
        $request_parameter = json_decode('{"transactionId":"111211",
            "accountCat":"I",
            "accountType":"RPI",
            "approveCode":"11111",

            "channel":"KYC_WEMALL",
            "companyCode":"AL",
            "dealerCode":"11111",
            "functionType":"11111",

            "idType":"I",

            "requestSubscriber":"1",
            "userLogin":"11111"}', true);
        $request_parameter["idNumber"] = $id_number;
        $tmp_year_birth                = intval($lrequest->input('year_birth'));
        if ($tmp_year_birth > intval(date('Y'))) {
            $tmp_year_birth -= 543;
        }

        $request_parameter["birthDate"] = $lrequest->input('date_birth');

        $tmp_data_to_check_post_full_preverify = $request_parameter;

        $tmp_lrequest->replace($request_parameter);
        if ($lrequest->has('tmp_message_id')) {
            $tmp_lrequest['tmp_message_id'] = $lrequest->input('tmp_message_id');
        }
        $header  = [];
        $content = WlsService::postFullPreverify($url, $method, $tmp_lrequest, $header);
        $tmp     = json_decode($content[1], true);
        if ($content[0] <= 200) {
            if (isset($tmp["status"]) && isset($tmp["display-messages"][0]["message-type"]) && isset($tmp["response-data"]["remark"])
                && $tmp["status"] == "SUCCESSFUL"
                && $tmp["display-messages"][0]["message-type"] != "ERROR"
            ) {
                // pass
                $tmp_check_mini_step_result["E"] = true;
            }
        }
        // end of check E
        $tmp_body = ["is_pass" => $tmp_check_mini_step_result["E"]];
        if (!$tmp_body["is_pass"]) {
            $tmp_body["error"] = $tmp;
        }

        // start of error message check
        if (isset($tmp_body["error"])) {
            $tmp_check_mini_step_result["failed_output"] = [$tmp_body["error"]];

            foreach ($tmp_check_mini_step_result["failed_output"] as $each_failed_output) {
                $tmp_message       = "";
                $tmp_message_array = ["th" => "", "en" => ""];
                if (isset($each_failed_output["display-messages"][0]["message-code"])) {
                    $tmp_message = $each_failed_output["display-messages"][0]["message-code"];
                }

                if ($tmp_message == "TMV-PREVERIFY-11001") {
                    $tmp_message_array       = [];
                    $tmp_message_array["th"] = "ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้";
                    $tmp_message_array["en"] = "Sorry, the system cannot process your request at the moment.";
                } elseif ($tmp_message == "TMV-PREVERIFY-11002") {
                    $tmp_message_array       = [];
                    $tmp_message_array["th"] = "ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้";
                    $tmp_message_array["en"] = "Sorry, the system cannot process your request at the moment.";
                } elseif ($tmp_message == "TMV-PREVERIFY-11004") {
                    $tmp_message_array       = [];
                    $tmp_message_array["th"] = "บัตรประชาชนของคุณไม่ถูกต้อง";
                    $tmp_message_array["en"] = "Incorrect/invalid citizen ID number";
                } elseif ($tmp_message == "TMV-PREVERIFY-11005") {
                    $tmp_message_array       = [];
                    $tmp_message_array["th"] = "วันเกิดไม่ถูกต้อง";
                    $tmp_message_array["en"] = "Incorrect birth date";
                } elseif ($tmp_message == "TMV-PREVERIFY-11006") {
                    $tmp_message_array       = [];
                    $tmp_message_array["th"] = "ไม่สามารถเปิดบริการได้ เนื่องจากอายุต่ำกว่า 17 ปี";
                    $tmp_message_array["en"] = "Authorization denied for applicants below 17 years old.";
                } elseif ($tmp_message == "TMV-PREVERIFY-11007") {
                    $tmp_message_array       = [];
                    $tmp_message_array["th"] = "กรุณาตรวจสอบยอดค้างและติดต่อทรูช็อปเพื่อชำระค่าบริการ";
                    $tmp_message_array["en"] = "Please check your outstanding balance and pay at True Shop.";
                } elseif ($tmp_message == "TMV-PREVERIFY-11008") {
                    $tmp_message_array       = [];
                    $tmp_message_array["th"] = "คุณไม่สามารถทำการสั่งซื้อได้ อาจเกิดจากมียอดค่าบริการค้างชำระ โปรดตรวจสอบและชำระค่าบริการ(ถ้ามี) ที่ทรูช็อปหรือเคาน์เตอร์เซอร์วิส";
                    $tmp_message_array["en"] = "This order was not successful. Please check your payment status at True Shop or Counter service.";
                } elseif ($tmp_message == "TMV-PREVERIFY-11009") {
                    $tmp_message_array       = [];
                    $tmp_message_array["th"] = "ขออภัย ไม่สามารถทำรายการได้ \n กรุณาติดต่อทรูช็อป";
                    $tmp_message_array["en"] = "Sorry, the system cannot process your request at the moment.";
                } elseif ($tmp_message == "TMV-PREVERIFY-11010" ||
                    $tmp_message == "TMV-PREVERIFY-VCVAPA2010004") {
                    $tmp_message_array       = [];
                    $tmp_message_array["th"] = "คุณเปิดบริการหมายเลขครบตามจำนวนที่กำหนดแล้ว กรุณาติดต่อทรูช็อปเพื่อยืนยันการทำรายการ";
                    $tmp_message_array["en"] = "You have reached the specified limit of mobile service number activations. Please contact True Shop to confirm your request.";
                } elseif ($tmp_message == "TMV-PREVERIFY-11011") {
                    $tmp_message_array       = [];
                    $tmp_message_array["th"] = "ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้";
                    $tmp_message_array["en"] = "Sorry, the system cannot process your request at the moment.";
                } elseif ($tmp_message == "TMV-PREVERIFY-11012") {
                    $tmp_message_array       = [];
                    $tmp_message_array["th"] = "ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้";
                    $tmp_message_array["en"] = "Sorry, the system cannot process your request at the moment.";
                } elseif ($tmp_message == "TMV-PREVERIFY-11013") {
                    $tmp_message_array       = [];
                    $tmp_message_array["th"] = "ขออภัย ไม่สามารถทำรายการได้ เนื่องจากมีการลงทะเบียนซ้ำภายใน 45 วัน";
                    $tmp_message_array["en"] = "Sorry, the system cannot process your request due to duplicated registration within 45 days.";
                } elseif ($tmp_message == "TMV-PREVERIFY-11014") {
                    $tmp_message_array       = [];
                    $tmp_message_array["th"] = "ขออภัย รหัสอนุมัติไม่ถูกต้อง ติดต่อกรุณาติดต่อทรูช็อป";
                    $tmp_message_array["en"] = "Sorry, you have entered incorrect pass code. Please contact True Shop for further assistance.";
                } elseif ($tmp_message == "TMV-PREVERIFY-11020") {
                    $tmp_message_array       = [];
                    $tmp_message_array["th"] = "ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้ กรุณาทำรายการใหม่";
                    $tmp_message_array["en"] = "Sorry, the system cannot process your request. Please try again.";
                } elseif ($tmp_message == "TMV-PREVERIFY-11021") {
                    $tmp_message_array       = [];
                    $tmp_message_array["th"] = "หมายเลขบัตรประชาชนนี้ทำรายการเกินกำหนดจำนวนสูงสุดของแต่ละวันแล้ว กรุณาลงทะเบียนใหม่ในวันถัดไป";
                    $tmp_message_array["en"] = "This citizen ID has exceeded the maximum limit allowed for registrations per day. Please try again tomorrow.";
                } elseif ($tmp_message == "TMV-PREVERIFY-11022") {
                    $tmp_message_array       = [];
                    $tmp_message_array["th"] = "ขออภัย ไม่สามารถทำรายการได้ \n กรุณาติดต่อทรูช็อป";
                    $tmp_message_array["en"] = "Sorry, the system cannot process your request at the moment.";
                } else {
                    $tmp_message_array       = [];
                    $tmp_message_array["th"] = "ขออภัย ไม่สามารถทำรายการได้ \n กรุณาติดต่อทรูช็อป";
                    $tmp_message_array["en"] = "Sorry, the system cannot process your request at the moment.";
                }

                $tmp_check_mini_step_result["message_list"][] = $tmp_message_array;
            }
            if (count($tmp_check_mini_step_result["message_list"]) > 0) {
                $tmp_check_mini_step_result["message"] = $tmp_check_mini_step_result["message_list"][count($tmp_check_mini_step_result["message_list"]) - 1];
            }

            $tmp_body["failed_output"] = $tmp_check_mini_step_result["failed_output"];
            $tmp_body["message"]       = $tmp_check_mini_step_result["message"];
            // end of error message check
        }

        return $tmp_body;
    }

    public static function checkForAOtp($step_name, $lrequest, $tmp_parameters, $is_enforce_random_hash_for_otp = false)
    {
        extract($tmp_parameters);
        $tmp_check_mini_step_result                  = ["is_pass" => false];
        $tmp_check_mini_step_result["failed_output"] = [];
        $tmp_check_mini_step_result["message_list"]  = [];

        if (!isset($mobile_number)) {
            $mobile_number = "";
        }
        if (!isset($otp)) {
            $otp = "";
        }

        if (isset($random_hash_for_otp)) {
            $check_otp_redis_data = Redis::get('store-otp:mobile_number:' . $mobile_number . ':random_hash_for_otp:' . $random_hash_for_otp . ':temp');

            if (!empty($check_otp_redis_data)) {
                $tmp_check_mini_step_result["is_pass"] = true;
            }
            if ($tmp_check_mini_step_result["is_pass"]) {
                return $tmp_check_mini_step_result;
            }

        } elseif ($is_enforce_random_hash_for_otp) {
            $tmp_check_mini_step_result["is_pass"]         = false;
            $tmp_check_mini_step_result["failed_output"][] = ["message" => ["en" => "please input random_hash_for_otp", "th" => "กรุณาใส่ข้อมูลของ random_hash_for_otp"]];

            return $tmp_check_mini_step_result;
        }

        // start of code to prepare parameters to request
        $url          = "wportal/otp/verify";
        $method       = "get";
        $tmp_lrequest = new \Illuminate\Http\Request();
        $tmp_lrequest->setMethod(strtoupper($method));
        $request_parameter                  = [];
        $request_parameter["mobile_number"] = $mobile_number;
        $request_parameter["otp"]           = $otp;
        $tmp_lrequest->replace($request_parameter);
        $header     = [];
        $content    = WlsService::getVerifyOtpWls($url, $method, $tmp_lrequest, $header);
        $tmp_result = json_decode($content[1], true);
        // end of code to prepare parameters to request

        //start of code to check is_pass condition
        if (isset($tmp_result["status_code"]) && isset($tmp_result["data"])
            && $tmp_result["status_code"] == 200 && empty($tmp_result["data"])) {
            $tmp_check_mini_step_result["is_pass"] = true;
        } else {
            $tmp_check_mini_step_result["failed_output"][] = $content;
        }
        //end of code to check is_pass condition

        return $tmp_check_mini_step_result;
    }

    public static function checkForBBlacklist($step_name, $lrequest, $tmp_parameters)
    {
        extract($tmp_parameters);
        $tmp_check_mini_step_result                  = ["is_pass" => false];
        $tmp_check_mini_step_result["failed_output"] = [];
        $tmp_check_mini_step_result["message_list"]  = [];

        //Verify By True API check black list TOL
        //Verify By True API check TMH Blacklist / contract?

        // start of code to prepare parameters to request
        $url          = "check-blacklist/getTOLFraudAndBlackList";
        $method       = "post";
        $tmp_lrequest = new \Illuminate\Http\Request();
        $tmp_lrequest->setMethod(strtoupper($method));
        $request_parameter                                    = [];
        $request_parameter["searchList"]                      = ["searchInfoArray" => []];
        $request_parameter["searchList"]["searchInfoArray"][] = ["type" => "CERTIFICATE", "value" => $id_number];
        $request_parameter["searchList"]["searchInfoArray"][] = ["type" => "BUSINESSLINE", "value" => "ONLINE"];
        $request_parameter["searchList"]["searchInfoArray"][] = ["type" => "CUSTOMERSEGMENT", "value" => "INDIVIDUAL"];
        $tmp_lrequest->replace($request_parameter);
        $header = [];

        $blacklist_input  = $tmp_lrequest->all();
        $content          = WlsService::postCheckBlacklistTrueonline($url, $method, $tmp_lrequest, $header);
        $blacklist_output = $content;
        $tmp_content      = json_decode($content[1], true);
        // end of code to prepare parameters to request

        //start of code to check is_pass condition
        if (isset($tmp_content["blackListDataInfo"]) && $tmp_content["fraudDataInfo"]) {
            if (isset($tmp_content["blackListDataInfo"]["blackList"])) {
                $blacklist_result = $tmp_content["blackListDataInfo"]["blackList"];
            }
            if (isset($tmp_content["fraudDataInfo"]["fraudList"])) {
                $fraudlist_result = $tmp_content["fraudDataInfo"]["fraudList"];
            }

            if (($tmp_content["blackListDataInfo"]["status"] == "false" && $tmp_content["fraudDataInfo"]["status"] == "false")) {
                // also check for error of blacklist verification system
                $tmp_check_mini_step_result["is_pass"] = true;
            } else {
                $tmp_check_mini_step_result["failed_output"][] = $content;
            }
        }
        //end of code to check is_pass condition

        // start of error message check
        foreach ($tmp_check_mini_step_result["failed_output"] as $each_failed_output) {
            $tmp_message       = "";
            $tmp_message_array = ["th" => "", "en" => ""];
            $tmp_content       = json_decode($each_failed_output[1], true);

            if ($tmp_content["blackListDataInfo"]["status"] == "true") {
                $tmp_message_array["th"] = "คุณไม่สามารถทำการสั่งซื้อได้ อาจเกิดจากมียอดค่าบริการค้างชำระ โปรดตรวจสอบและชำระค่าบริการ(ถ้ามี) ที่ทรูช็อปหรือเคาน์เตอร์เซอร์วิส";
                $tmp_message_array["en"] = "You are unable to buy because there are overdue payments. Please check and finish payment(if exists), at Trueshop or Counter Service.";
            } elseif ($tmp_content["fraudDataInfo"]["status"] == "true") {
                $tmp_message_array["th"] = "คุณไม่สามารถทำการสั่งซื้อได้ อาจเกิดจากมียอดค่าบริการค้างชำระ โปรดตรวจสอบและชำระค่าบริการ(ถ้ามี) ที่ทรูช็อปหรือเคาน์เตอร์เซอร์วิส";
                $tmp_message_array["en"] = "You are unable to buy because there are overdue payments. Please check and finish payment(if exists), at Trueshop or Counter Service.";
            } else {
                $tmp_message_array["th"] = "ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้";
                $tmp_message_array["en"] = "Sorry, the system cannot process your request at the moment.";
            }
            $tmp_check_mini_step_result["message_list"][] = $tmp_message_array;
        }
        if (count($tmp_check_mini_step_result["message_list"]) > 0) {
            $tmp_check_mini_step_result["message"] = $tmp_check_mini_step_result["message_list"][count($tmp_check_mini_step_result["message_list"]) - 1];
        }
        // end of error message check

        return $tmp_check_mini_step_result;
    }

    public static function checkForBBlacklistTol($step_name, $lrequest, $tmp_parameters)
    {
        extract($tmp_parameters);
        $tmp_check_mini_step_result                  = ["is_pass" => false];
        $tmp_check_mini_step_result["failed_output"] = [];
        $tmp_check_mini_step_result["message_list"]  = [];
        //Verify By True API check black list TOL
        //Verify By True API check TMH Blacklist / contract?

        // start of code to prepare parameters to request
        $url          = "check-blacklist/getTOLFraudAndBlackList";
        $method       = "post";
        $tmp_lrequest = new \Illuminate\Http\Request();
        $tmp_lrequest->setMethod(strtoupper($method));
        $request_parameter                                    = [];
        $request_parameter["searchList"]                      = ["searchInfoArray" => []];
        $request_parameter["searchList"]["searchInfoArray"][] = ["type" => "CERTIFICATE", "value" => $id_number];
        $request_parameter["searchList"]["searchInfoArray"][] = ["type" => "BUSINESSLINE", "value" => "ONLINE"];
        $request_parameter["searchList"]["searchInfoArray"][] = ["type" => "CUSTOMERSEGMENT", "value" => "INDIVIDUAL"];
        $tmp_lrequest->replace($request_parameter);
        $header = [];

        $blacklist_input  = $tmp_lrequest->all();
        $content          = WlsService::postCheckBlacklistTrueonline($url, $method, $tmp_lrequest, $header);
        $blacklist_output = $content;
        $tmp_content      = json_decode($content[1], true);
        // end of code to prepare parameters to request

        //start of code to check is_pass condition
        if (isset($tmp_content["blackListDataInfo"]) && $tmp_content["fraudDataInfo"]) {
            if (isset($tmp_content["blackListDataInfo"]["blackList"])) {
                $blacklist_result = $tmp_content["blackListDataInfo"]["blackList"];
            }
            if (isset($tmp_content["fraudDataInfo"]["fraudList"])) {
                $fraudlist_result = $tmp_content["fraudDataInfo"]["fraudList"];
            }
            if ($tmp_content["fraudDataInfo"]["status"] == "false") {
                // also check for error of blacklist verification system
                $tmp_check_mini_step_result["is_pass"] = true;
            } else {
                $tmp_check_mini_step_result["failed_output"][] = $content;
            }
        }
        //end of code to check is_pass condition

        // start of error message check
        foreach ($tmp_check_mini_step_result["failed_output"] as $each_failed_output) {
            $tmp_message       = "";
            $tmp_message_array = ["th" => "", "en" => ""];
            $tmp_content       = json_decode($each_failed_output[1], true);

            if ($tmp_content["blackListDataInfo"]["status"] == "true") {
                $tmp_message_array["th"] = "คุณไม่สามารถทำการสั่งซื้อได้ อาจเกิดจากมียอดค่าบริการค้างชำระ โปรดตรวจสอบและชำระค่าบริการ(ถ้ามี) ที่ทรูช็อปหรือเคาน์เตอร์เซอร์วิส";
                $tmp_message_array["en"] = "You are unable to buy because there are overdue payments. Please check and finish payment(if exists), at Trueshop or Counter Service.";
            } elseif ($tmp_content["fraudDataInfo"]["status"] == "true") {
                $tmp_message_array["th"] = "คุณไม่สามารถทำการสั่งซื้อได้ อาจเกิดจากมียอดค่าบริการค้างชำระ โปรดตรวจสอบและชำระค่าบริการ(ถ้ามี) ที่ทรูช็อปหรือเคาน์เตอร์เซอร์วิส";
                $tmp_message_array["en"] = "You are unable to buy because there are overdue payments. Please check and finish payment(if exists), at Trueshop or Counter Service.";
            } else {
                $tmp_message_array["th"] = "ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้";
                $tmp_message_array["en"] = "Sorry, the system cannot process your request at the moment.";
            }
            $tmp_check_mini_step_result["message_list"][] = $tmp_message_array;
        }
        if (count($tmp_check_mini_step_result["message_list"]) > 0) {
            $tmp_check_mini_step_result["message"] = $tmp_check_mini_step_result["message_list"][count($tmp_check_mini_step_result["message_list"]) - 1];
        }
        // end of error message check

        return $tmp_check_mini_step_result;
    }

    public static function checkForCCustomerPreverify($step_name, $lrequest, $tmp_parameters)
    {
        extract($tmp_parameters);
        $tmp_check_mini_step_result                  = ["is_pass" => false];
        $tmp_check_mini_step_result["failed_output"] = [];
        $tmp_check_mini_step_result["message_list"]  = [];

        // Verify By True API check TMH collection (Payment late)

        // start of code to prepare parameters to request
        $url          = "check-preverify/wemall/profiles/customer/customer-preverify";
        $method       = "post";
        $tmp_lrequest = new \Illuminate\Http\Request();
        $tmp_lrequest->setMethod(strtoupper($method));
        $request_parameter = [];
        $request_parameter = json_decode('{
            "accountCat":"I",
            "channel":"KYC_WEMALL",
            "companyCode":"RM",
            "idNumber":"' . $id_number . '",
            "verifyType":"ALL"
        }', true);
        $tmp_lrequest->replace($request_parameter);
        if (isset($tmp_message_id)) {
            $tmp_lrequest["tmp_message_id"] = $tmp_message_id;
        }

        $header  = [];
        $content = WlsService::postCustomerPreverify($url, $method, $tmp_lrequest, $header);

        // end of code to prepare parameters to request

        //start of code to check is_pass condition
        if (isset(json_decode($content[1], true)["response-data"])) {
            if (isset(json_decode($content[1], true)["response-data"]["remark"])) {
                $check_collection_result = json_decode($content[1], true)["response-data"]["remark"];
            }

            if (isset($check_collection_result) && $check_collection_result == "ไม่ติด collection") {
                $tmp_check_mini_step_result["is_pass"] = true;
            } else {
                $tmp_check_mini_step_result["failed_output"][] = $content;
            }
        }
        //end of code to check is_pass condition

        // start of error message check
        foreach ($tmp_check_mini_step_result["failed_output"] as $each_failed_output) {
            $tmp_message       = "";
            $tmp_message_array = ["th" => "", "en" => ""];
            if (isset(json_decode($each_failed_output[1], true)["display-messages"][0]["message-code"])) {
                $tmp_message = json_decode($each_failed_output[1], true)["display-messages"][0]["message-code"];
            }

            if ($tmp_message == "TMV-PREVERIFY-11001") {
                $tmp_message_array       = [];
                $tmp_message_array["th"] = "ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้";
                $tmp_message_array["en"] = "Sorry, the system cannot process your request at the moment.";
            } elseif ($tmp_message == "TMV-PREVERIFY-11002") {
                $tmp_message_array       = [];
                $tmp_message_array["th"] = "ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้";
                $tmp_message_array["en"] = "Sorry, the system cannot process your request at the moment.";
            } elseif ($tmp_message == "TMV-PREVERIFY-11004") {
                $tmp_message_array       = [];
                $tmp_message_array["th"] = "บัตรประชาชนของคุณไม่ถูกต้อง";
                $tmp_message_array["en"] = "Incorrect/invalid citizen ID number";
            } elseif ($tmp_message == "TMV-PREVERIFY-11005") {
                $tmp_message_array       = [];
                $tmp_message_array["th"] = "วันเกิดไม่ถูกต้อง";
                $tmp_message_array["en"] = "Incorrect birth date";
            } elseif ($tmp_message == "TMV-PREVERIFY-11006") {
                $tmp_message_array       = [];
                $tmp_message_array["th"] = "ไม่สามารถเปิดบริการได้ เนื่องจากอายุต่ำกว่า 17 ปี";
                $tmp_message_array["en"] = "Authorization denied for applicants below 17 years old.";
            } elseif ($tmp_message == "TMV-PREVERIFY-11007") {
                $tmp_message_array       = [];
                $tmp_message_array["th"] = "กรุณาตรวจสอบยอดค้างและติดต่อทรูช็อปเพื่อชำระค่าบริการ";
                $tmp_message_array["en"] = "Please check your outstanding balance and pay at True Shop.";
            } elseif ($tmp_message == "TMV-PREVERIFY-11008") {
                $tmp_message_array       = [];
                $tmp_message_array["th"] = "คุณไม่สามารถทำการสั่งซื้อได้ อาจเกิดจากมียอดค่าบริการค้างชำระ โปรดตรวจสอบและชำระค่าบริการ(ถ้ามี) ที่ทรูช็อปหรือเคาน์เตอร์เซอร์วิส";
                $tmp_message_array["en"] = "This order was not successful. Please check your payment status at True Shop or Counter service.";
            } elseif ($tmp_message == "TMV-PREVERIFY-11009") {
                $tmp_message_array       = [];
                $tmp_message_array["th"] = "ขออภัย ไม่สามารถทำรายการได้ \n กรุณาติดต่อทรูช็อป";
                $tmp_message_array["en"] = "Sorry, the system cannot process your request at the moment.";
            } elseif ($tmp_message == "TMV-PREVERIFY-11010" ||
                $tmp_message == "TMV-PREVERIFY-VCVAPA2010004") {
                $tmp_message_array       = [];
                $tmp_message_array["th"] = "คุณเปิดบริการหมายเลขครบตามจำนวนที่กำหนดแล้ว กรุณาติดต่อทรูช็อปเพื่อยืนยันการทำรายการ";
                $tmp_message_array["en"] = "You have reached the specified limit of mobile service number activations. Please contact True Shop to confirm your request.";
            } elseif ($tmp_message == "TMV-PREVERIFY-11011") {
                $tmp_message_array       = [];
                $tmp_message_array["th"] = "ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้";
                $tmp_message_array["en"] = "Sorry, the system cannot process your request at the moment.";
            } elseif ($tmp_message == "TMV-PREVERIFY-11012") {
                $tmp_message_array       = [];
                $tmp_message_array["th"] = "ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้";
                $tmp_message_array["en"] = "Sorry, the system cannot process your request at the moment.";
            } elseif ($tmp_message == "TMV-PREVERIFY-11013") {
                $tmp_message_array       = [];
                $tmp_message_array["th"] = "ขออภัย ไม่สามารถทำรายการได้ เนื่องจากมีการลงทะเบียนซ้ำภายใน 45 วัน";
                $tmp_message_array["en"] = "Sorry, the system cannot process your request due to duplicated registration within 45 days.";
            } elseif ($tmp_message == "TMV-PREVERIFY-11014") {
                $tmp_message_array       = [];
                $tmp_message_array["th"] = "ขออภัย รหัสอนุมัติไม่ถูกต้อง ติดต่อกรุณาติดต่อทรูช็อป";
                $tmp_message_array["en"] = "Sorry, you have entered incorrect pass code. Please contact True Shop for further assistance.";
            } elseif ($tmp_message == "TMV-PREVERIFY-11020") {
                $tmp_message_array       = [];
                $tmp_message_array["th"] = "ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้ กรุณาทำรายการใหม่";
                $tmp_message_array["en"] = "Sorry, the system cannot process your request. Please try again.";
            } elseif ($tmp_message == "TMV-PREVERIFY-11021") {
                $tmp_message_array       = [];
                $tmp_message_array["th"] = "หมายเลขบัตรประชาชนนี้ทำรายการเกินกำหนดจำนวนสูงสุดของแต่ละวันแล้ว กรุณาลงทะเบียนใหม่ในวันถัดไป";
                $tmp_message_array["en"] = "This citizen ID has exceeded the maximum limit allowed for registrations per day. Please try again tomorrow.";
            } elseif ($tmp_message == "TMV-PREVERIFY-11022") {
                $tmp_message_array       = [];
                $tmp_message_array["th"] = "ขออภัย ไม่สามารถทำรายการได้ \n กรุณาติดต่อทรูช็อป";
                $tmp_message_array["en"] = "Sorry, the system cannot process your request at the moment.";
            } else {
                $tmp_message_array       = [];
                $tmp_message_array["th"] = "ขออภัย ไม่สามารถทำรายการได้ \n กรุณาติดต่อทรูช็อป";
                $tmp_message_array["en"] = "Sorry, the system cannot process your request at the moment.";
            }

            $tmp_check_mini_step_result["message_list"][] = $tmp_message_array;
        }
        if (count($tmp_check_mini_step_result["message_list"]) > 0) {
            $tmp_check_mini_step_result["message"] = $tmp_check_mini_step_result["message_list"][count($tmp_check_mini_step_result["message_list"]) - 1];
        }
        // end of error message check

        return $tmp_check_mini_step_result;
    }

    public static function checkForDValidatePrivilegeSubscriberByMobile($step_name, $lrequest, $tmp_parameters)
    {
        extract($tmp_parameters);
        $tmp_check_mini_step_result                  = ["is_pass" => false];
        $tmp_check_mini_step_result["failed_output"] = [];
        $tmp_check_mini_step_result["message_list"]  = [];

        // Verify By True API check TMH collection (Payment late)

        // start of code to prepare parameters to request
        $url          = "check-preverify/wemall/sales/order/tmv/validate-privilege-subscriber-by-mobile";
        $method       = "get";
        $tmp_lrequest = new \Illuminate\Http\Request();
        $tmp_lrequest->setMethod(strtoupper($method));
        $request_parameter                     = [];
        $request_parameter["service-id"]       = "EXTDEV";
        $request_parameter["subscriber"]       = $mobile_number;
        $request_parameter["id-number"]        = $id_number;
        $request_parameter["partner-code"]     = env('SHOP_CODE', '80100964');
        $request_parameter["company-code"]     = $company ?: "RM";
        $request_parameter["proposition"]      = $proposition_nas_code ?: "0048011";
        $request_parameter["ccbs-proposition"] = $proposition_amdoc ?: "RMV000000009209";
        $request_parameter["customer-type"]    = "I";
        if (isset($campaign_type_for_check_d)) {
            $request_parameter["campaign-type"] = $campaign_type_for_check_d; //dont send this parameter or this will change verify result
        }

        $tmp_lrequest->replace($request_parameter);
        if (count($tmp_lrequest->all()) > 0 && $method == "get") {
            $url .= '?';
            foreach ($tmp_lrequest->all() as $key => $value) {
                $url .= $key . '=' . $value . '&';
            }
        }
        $header = [];
        $tmp_lrequest->replace($request_parameter);
        if (isset($tmp_message_id)) {
            $tmp_lrequest["tmp_message_id"] = $tmp_message_id;
        }
        $content = WlsService::getValidatePrivilegeSubscriberByMobile($url, $method, $tmp_lrequest, $header);
        // end of code to prepare parameters to request

        //start of code to check is_pass condition
        if (isset(json_decode($content[1], true)["response-data"]["validate-privilege"])) {
            $check_validate_privilege_result = json_decode($content[1], true)["response-data"]["validate-privilege"];

            if ($check_validate_privilege_result == true) {
                $tmp_check_mini_step_result["is_pass"] = true;
            } else {
                $tmp_check_mini_step_result["failed_output"][] = $content;
            }
        }
        //end of code to check is_pass condition

        // start of error message check
        foreach ($tmp_check_mini_step_result["failed_output"] as $each_failed_output) {
            $tmp_message       = "";
            $tmp_message_array = ["th" => "", "en" => ""];
            if (isset(json_decode($each_failed_output[1], true)["response-data"]["subscriber"]["remark"])) {
                $tmp_message = json_decode($each_failed_output[1], true)["response-data"]["subscriber"]["remark"];

                $tmp_message_array["th"] = "ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้\n" . $tmp_message;
                $tmp_message_array["en"] = "Sorry, the system cannot process your request at the moment.\n" . $tmp_message;
            } else {
                $tmp_message_array["th"] = "ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้";
                $tmp_message_array["en"] = "Sorry, the system cannot process your request at the moment.";
            }
            $tmp_check_mini_step_result["message_list"][] = $tmp_message_array;
        }
        if (count($tmp_check_mini_step_result["message_list"]) > 0) {
            $tmp_check_mini_step_result["message"] = $tmp_check_mini_step_result["message_list"][count($tmp_check_mini_step_result["message_list"]) - 1];
        }
        // end of error message check

        return $tmp_check_mini_step_result;
    }

    public static function checkForGPortalPrivilegeCheck($step_name, $lrequest, $tmp_parameters)
    {
        extract($tmp_parameters);
        $tmp_check_mini_step_result                         = ["is_pass" => false];
        $tmp_check_mini_step_result["product_id_list_pass"] = [];
        $tmp_check_mini_step_result["passed_input"]         = [];

        $tmp_check_mini_step_result["sample_request_body_privilege_check_days"] = [];
        $tmp_check_mini_step_result["passed_output"]                            = [];
        $tmp_check_mini_step_result["failed_output"]                            = [];
        $tmp_check_mini_step_result["message_list"]                             = [];

        //check privilege campaign = privilege existing days

        // start of code to prepare parameters to request
        $url    = "wportal/privilege/check";
        $method = "post";

        $tmp_lrequest_2 = new \Illuminate\Http\Request();
        $tmp_lrequest_2->setMethod(strtoupper($method));
        $request_parameter            = [];
        $request_parameter["thai_id"] = base64_encode($id_number);
        //specified service name
        if ($service_name != "trueonline") {
            $request_parameter["privilege_uid"] = $mobile_number;
            $request_parameter["service"]       = "truemove";
        } else {
            $request_parameter["privilege_uid"] = $trueonline_number;
            $request_parameter["service"]       = "trueonline";
        }

        $request_parameter["quantity"] = "1";
        // need to separate between familysim_postpaid and familysim_prepaid
        if (isset($campaign_id) &&
            isset($campaign_id_to_campaign_code_list[$campaign_id]["campaign_code"]) &&
            isset($campaign_id_to_campaign_code_list[$campaign_id]["type_for_verify"])
        ) {
            $request_parameter["product_code"] = $product_sku_list[$key];

            if ($service_name == "truemove"
                && isset($campaign_id_to_campaign_code_list[$campaign_id]["campaign_code_truemove"])) {
                $request_parameter["campaigns[0]"]  = ($campaign_id_to_campaign_code_list[$campaign_id]["campaign_code_truemove"]); // WX868 for trueidbox, familysim_postpaid = XN619
                $request_parameter["campaign_code"] = ($campaign_id_to_campaign_code_list[$campaign_id]["campaign_code_truemove"]); // WX868 for trueidbox, familysim_postpaid = XN619
            } elseif ($service_name == "trueonline" && isset($campaign_id_to_campaign_code_list[$campaign_id]["campaign_code_trueonline"])) {
                $request_parameter["campaigns[0]"]  = ($campaign_id_to_campaign_code_list[$campaign_id]["campaign_code_trueonline"]); // WX868 for trueidbox, familysim_postpaid = XN619
                $request_parameter["campaign_code"] = ($campaign_id_to_campaign_code_list[$campaign_id]["campaign_code_trueonline"]); // WX868 for trueidbox, familysim_postpaid = XN619
            } else {
                $request_parameter["campaigns[0]"]  = ($campaign_id_to_campaign_code_list[$campaign_id]["campaign_code"]); // WX868 for trueidbox, familysim_postpaid = XN619
                $request_parameter["campaign_code"] = ($campaign_id_to_campaign_code_list[$campaign_id]["campaign_code"]); // WX868 for trueidbox, familysim_postpaid = XN619
            }
            $request_parameter["type"] = ($campaign_id_to_campaign_code_list[$campaign_id]["type_for_verify"]);
        } elseif (
            isset($product_id_config_by_product_id[$product_id]["campaign_code"])) {
            $request_parameter["product_code"] = $product_sku_list[$key];
            if ($service_name == "truemove" && isset($product_id_config_by_product_id[$product_id]["campaign_code_truemove"])) {
                $request_parameter["campaigns[0]"]  = ($product_id_config_by_product_id[$product_id]["campaign_code_truemove"]); // WX868 for trueidbox, familysim_postpaid = XN619
                $request_parameter["campaign_code"] = ($product_id_config_by_product_id[$product_id]["campaign_code_truemove"]); // WX868 for trueidbox, familysim_postpaid = XN619
            } elseif ($service_name == "trueonline" && isset($product_id_config_by_product_id[$product_id]["campaign_code_trueonline"])) {
                $request_parameter["campaigns[0]"]  = ($product_id_config_by_product_id[$product_id]["campaign_code_trueonline"]); // WX868 for trueidbox, familysim_postpaid = XN619
                $request_parameter["campaign_code"] = ($product_id_config_by_product_id[$product_id]["campaign_code_trueonline"]); // WX868 for trueidbox, familysim_postpaid = XN619
            } else {
                $request_parameter["campaigns[0]"]  = ($product_id_config_by_product_id[$product_id]["campaign_code"]); // WX868 for trueidbox, familysim_postpaid = XN619
                $request_parameter["campaign_code"] = ($product_id_config_by_product_id[$product_id]["campaign_code"]); // WX868 for trueidbox, familysim_postpaid = XN619
            }
            $request_parameter["type"] = ($product_id_config_by_product_id[$product_id]["type_for_verify"]);
        } else {
            $tmp_check_mini_step_result["is_pass"] = false;
        }

        //quantity, product_code?
        $request_parameter["product_id"]            = $product_id;
        $request_parameter["tmn_account_cash_back"] = $mobile_number;
        // start of tec-817 add mobile as verify privilege key trueidtvbox
        if (isset($mobile_number) && isset($service_name) && $service_name == "trueonline") {
            $request_parameter["msisdn"] = $mobile_number;
        }
        // end of tec-817 add mobile as verify privilege key trueidtvbox
        $tmp_check_mini_step_result["sample_request_body_privilege_check_days"][] = $request_parameter;
        $tmp_lrequest_2->replace($request_parameter);
        if (isset($tmp_message_id)) {
            $tmp_lrequest_2["tmp_message_id"] = $tmp_message_id;
        }
        $header = [];

        $content = WlsService::postPortalPrivilegeCheck($url, $method, $tmp_lrequest_2, $header);
        // end of code to prepare parameters to request

        //start of code to check is_pass condition
        if ($content[0] <= 200 &&
            isset(json_decode($content[1], true)["status_code"]) &&
            json_decode($content[1], true)["status_code"] < 300 && isset(json_decode($content[1], true)["data"]["campaign_code"]) && $is_pass_array[0] && $is_pass_array[1] && $is_pass_array[2]) {
            $tmp_check_mini_step_result["product_id_list_pass"][] = $product_id;
            $tmp_check_mini_step_result["passed_input"][]         = $request_parameter;
            $tmp_check_mini_step_result["is_pass"]                = true;
        } else {
            $tmp_check_mini_step_result["failed_output"][] = $content;
        }

        // start of add cart_hash => privilege_placeorder to redis
        if (!isset($campaign_id)) {
            $campaign_id = null;
        }
        $cart_hash = $lrequest->input('cart_hash');

        if (isset($product_type)) {
            $tmp_check_mini_step_result["product_type"] = $product_type;
        }

        WlsService::setRedisPrivilegePlaceorder($tmp_check_mini_step_result, $cart_hash, $product_id, $campaign_id);
        // end of add cart_hash => privilege_placeorder to redis

        //end of code to check is_pass condition
        if ($tmp_check_mini_step_result["is_pass"]) {
            return $tmp_check_mini_step_result;
        }

        // start of check second time
        if ($service_name == "all" && !$is_pass_array[3] && !$tmp_check_mini_step_result["is_pass"]
            && isset($product_id_config_by_product_id[$product_id]["campaign_code_trueonline"])) {
            $request_parameter["service"]               = "trueonline";
            $request_parameter["privilege_uid"]         = $trueonline_number;
            $request_parameter["campaigns[0]"]          = ($product_id_config_by_product_id[$product_id]["campaign_code_trueonline"]);
            $request_parameter["campaign_code"]         = ($product_id_config_by_product_id[$product_id]["campaign_code_trueonline"]);
            $request_parameter["type"]                  = ($product_id_config_by_product_id[$product_id]["type_for_verify"]);
            $request_parameter["tmn_account_cash_back"] = $mobile_number;
            $tmp_lrequest_2->replace($request_parameter);
            if (isset($tmp_message_id)) {
                $tmp_lrequest_2["tmp_message_id"] = $tmp_message_id;
            }
            $request_parameter["product_id"]                                          = $product_id;
            $tmp_check_mini_step_result["sample_request_body_privilege_check_days"][] = $request_parameter;
            $content                                                                  = WlsService::postPortalPrivilegeCheck($url, $method, $tmp_lrequest_2, $header);

            if ($content[0] <= 200 &&
                isset(json_decode($content[1], true)["status_code"]) &&
                json_decode($content[1], true)["status_code"] < 300 && isset(json_decode($content[1], true)["data"]["campaign_code"]) && $is_pass_array[0] && $is_pass_array[1] && $is_pass_array[2]) {
                $tmp_check_mini_step_result["product_id_list_pass"][] = $product_id;
                $tmp_check_mini_step_result["passed_input"][]         = $request_parameter;
                $tmp_check_mini_step_result["is_pass"]                = true;
            } else {
                $tmp_check_mini_step_result["failed_output"][] = $content;
            }
        }
        // end of check second time

        $error_message_step_g_privilege_array = ErrorMessageService::getErrorMessageCheckForGPrivilegeArray();

        // start of error message check
        foreach ($tmp_check_mini_step_result["failed_output"] as $each_failed_output) {
            $tmp_message       = "";
            $tmp_message_array = ["th" => "", "en" => ""];
            if (isset(json_decode($each_failed_output[1], true)["data"][0]["message"])) {
                $tmp_message = json_decode($each_failed_output[1], true)["data"][0]["message"];
            }
            if (isset($error_message_step_g_privilege_array[$tmp_message])) {
                $tmp_message_array = $error_message_step_g_privilege_array[$tmp_message];
            } elseif ($tmp_message == "Error check true privilege") {
                $tmp_message_array["th"] = "ขออภัย โปรโมชั่นปัจจุบันของคุณไม่สามารถเข้าร่วมรายการได้";
                $tmp_message_array["en"] = "Sorry, your current promotion unable to use with this verify method.";
            } elseif ($tmp_message == "Error privilege uid already used") {
                $tmp_message_array["th"] = "ขออภัย หมายเลขหรือรหัสบัตรประชาชนนี้ รับสิทธิพิเศษไปแล้ว";
                $tmp_message_array["en"] = "Sorry, this mobile number or this citizen number already used with this verify method.";
            } else {
                $tmp_message_array["th"] = "ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้";
                $tmp_message_array["en"] = "Sorry, the system cannot process your request at the moment.";
            }
            $tmp_check_mini_step_result["message_list"][] = $tmp_message_array;
        }
        if (count($tmp_check_mini_step_result["message_list"]) > 0) {
            $tmp_check_mini_step_result["message"] = $tmp_check_mini_step_result["message_list"][count($tmp_check_mini_step_result["message_list"]) - 1];
        }
        // end of error message check

        // start of add cart_hash => privilege_placeorder to redis
        if (!isset($campaign_id)) {
            $campaign_id = null;
        }
        $cart_hash = $lrequest->input('cart_hash');

        if (isset($product_type)) {
            $tmp_check_mini_step_result["product_type"] = $product_type;
        }

        WlsService::setRedisPrivilegePlaceorder($tmp_check_mini_step_result, $cart_hash, $product_id, $campaign_id);
        // end of add cart_hash => privilege_placeorder to redis

        return $tmp_check_mini_step_result;
    }

    public static function setRedisPrivilegePlaceorder($tmp_check_mini_step_result, $cart_hash, $product_id, $campaign_id)
    {
        foreach ($tmp_check_mini_step_result["passed_input"] as $pass_input) {
            if (isset($cart_hash) &&
                gettype($cart_hash) == "string" && !empty($cart_hash)
            ) {
                $cart_privilege_placeorder_data = Redis::get("store:verify:cart_id:$cart_hash:privilege_placeorder");
                $product_code                   = $pass_input["product_code"];
                if (!empty($cart_privilege_placeorder_data)) {
                    $redis_body_array = json_decode($cart_privilege_placeorder_data, true);
                }
                if (!isset($redis_body_array)) {
                    $redis_body_array = [];
                }
                if (!isset($redis_body_array[$product_id])) {
                    $redis_body_array[$product_id] = [];
                }

                $pass_input["date_created"]      = gmdate("Y-m-d H:i:s", strtotime("+ 7 hour"));
                $pass_input["timestamp_created"] = time();

                $pass_input["date_expired"]      = gmdate("Y-m-d H:i:s", strtotime("+ 7 hour +8 hour"));
                $pass_input["timestamp_expired"] = time() + 8 * 60 * 60;

                if (isset($campaign_id)) {
                    $pass_input["campaign_id"] = $campaign_id;
                }

                if (isset($tmp_check_mini_step_result["product_type"])) {
                    $pass_input["product_type"] = $tmp_check_mini_step_result["product_type"];
                }
                $redis_body_array[$product_id][$product_code] = $pass_input;

                Redis::set("store:verify:cart_id:$cart_hash:privilege_placeorder", json_encode($redis_body_array));
            }
        }
    }

    public static function postVerifyDeviceBundleExisting($url, $method, $lrequest, $header)
    {
        $body = ["is_pass" => false];

        $is_pass_array    = [];
        $is_pass_array[0] = false; // OTP
        $is_pass_array[1] = false;
        $is_pass_array[2] = false;
        $is_pass_array[3] = false;

        $tmp_check_mini_step_result = ["A" => false, "B" => false, "C" => false, "D" => false, "E" => false, "F" => false, "G" => false, "H" => false];
        $is_enter_mini_step_result  = ["A" => false, "B" => false, "C" => false, "D" => false, "E" => false, "F" => false, "G" => false, "H" => false];

        $rule = [
            'otp'               => 'required',
            'mobile_number'     => 'required',
            'service_name'      => 'required',
            'product_id_list'   => 'required|array',
            'trueonline_number' => '',
            'product_sku_list'  => '',
            'redeem_code'       => '',
            'is_trueblack'      => ''
        ];

        $tmp_input = $lrequest->all();
        // convert input data to the one we can send
        $validator = Validator::make($tmp_input, $rule);
        if ($validator->fails()) {
            $errors = ["message" => ["en" => "insufficient input", "th" => "กรุณากรอกข้อมูลให้ครบถ้วน", "error_from_system" => implode(',', $validator->errors()->all())]]; //$validator->errors();

            return [400, $errors];
        }

        $mobile_number = $lrequest->input('mobile_number');

        $otp = $lrequest->input('otp');

        $trueonline_number = $lrequest->input('trueonline_number');
        $product_sku_list  = $lrequest->input('product_sku_list');

        $product_id_list = $lrequest->input('product_id_list');
        $service_name    = $lrequest->input('service_name');
        $rc              = $lrequest->input('rc');
        $verify_data     = $lrequest->input('verify_data');
        $redeem_code     = $lrequest->input('redeem_code');
        $aging           = $lrequest->input('aging');
        $discount        = $lrequest->input('discount');
        $meta            = $lrequest->input('meta');
        $is_trueblack    = $lrequest->input('is_trueblack');

        if (!$lrequest->has('campaign_type')) {
            $campaign_type_bundle_existing = "1";
        } else {
            $campaign_type_bundle_existing = $lrequest->input('campaign_type');
        }

        // start of check for same sku in cart
        $tmp_same_sku_check_list = self::getListCheckForSameSkuInCart($lrequest);
        if (isset($tmp_same_sku_check_list[$product_sku_list[0]])) {
            return self::getResponseCheckForSameSkuInCart();
        }
        // end of check for same sku in cart

        $product_id_list_pass = [];
        $product_check_array  = [];
        foreach ($product_id_list as $product_id) {
            $product_check_array[$product_id] = 1;
        }

        $case_criteria = [false, false, false, false];
        if ($service_name == "truemove") {
            $case_criteria[0] = true;
        }

        if ($service_name == "trueonline") {
            $case_criteria[1] = true;
        }

        $content_get_product_id_config = App('App\Http\Controllers\APIController')->getProductIdConfig($lrequest);
        if (empty($content_get_product_id_config) || $content_get_product_id_config[0] > 200) {
            return $content_get_product_id_config;
        }

        $is_postpaid_product_exist = false;
        $is_other_product_exist    = false;
        $is_trueidbox_exist        = false;
        $is_prepaid_sim            = false;

        $tmp_content_get_product_id_config = $content_get_product_id_config[1];
        // check for family sim
        $product_id_config_by_product_id = [];
        foreach ($tmp_content_get_product_id_config["device_bundle_existing"] as $v) {
            $product_id_config_by_product_id[$v["id"]] = $v;
        }

        $current_case = null;
        for ($i = 0; $i <= 3; $i++) {
            if ($case_criteria[$i]) {
                $current_case = $i + 1;
            }
        }

        if (!is_numeric($current_case) || $current_case > 4 || $current_case < 1) {
            $errors = ["message" => ["en" => "unable to determine product case, please contact the callcenter", "th" => "ไม่สามารถระบุกรณีของสินค้าได้ กรุณาติดต่อ callcenter", "error_from_system" => implode(',', $validator->errors()->all())]]; //$validator->errors();

            return [500, $errors];
        }

        // step0 (step 1 in flow chart)
        // OTP: in test mode, skipped this
        // check A
        $is_enter_mini_step_result["A"] = true;
        $url                            = "wportal/otp/verify";
        $method                         = "get";
        $tmp_lrequest                   = new \Illuminate\Http\Request();
        $tmp_lrequest->setMethod(strtoupper($method));
        $request_parameter                  = [];
        $request_parameter["mobile_number"] = $mobile_number;
        $request_parameter["otp"]           = $otp;
        $tmp_lrequest->replace($request_parameter);
        if ($lrequest->has('tmp_message_id')) {
            $tmp_lrequest["tmp_message_id"] = $lrequest->input('tmp_message_id');
        }
        $header     = [];
        $content    = WlsService::getVerifyOtpWls($url, $method, $tmp_lrequest, $header);
        $tmp_result = json_decode($content[1], true);

        if (isset($tmp_result["status_code"]) && isset($tmp_result["data"])
            && $tmp_result["status_code"] == 200 && empty($tmp_result["data"])) {
            $is_pass_array[0]                = true; // OTP
            $tmp_check_mini_step_result["A"] = true;
        } else {
            $tmp_check_result["A"]   = ["is_pass" => $tmp_check_mini_step_result["A"]]; // added as requested from frontend 200621 1606 tec 1504
            $body                    = ["is_pass" => false, "tmp_check_mini_step_result" => $tmp_check_mini_step_result, "is_enter_mini_step_result" => $is_enter_mini_step_result, "tmp_check_result" => $tmp_check_result];
            $body["status_code"]     = 400;
            $body["error_message"]   = ["en" => "not pass because of otp check", "th" => "ไม่ผ่านเนื่องจากการตรวจสอบ otp"];
            $body["message"]         = ["en" => "Sorry! You are not able to choose to buy a product.", "th" => "ขออภัยค่ะ คุณไม่สามารถรับสิทธิพิเศษนี้"];
            $body["reason_not_pass"] = "OTP Fail";

            return [400, $body];
        }

        // start of tec-243 clm int is prepaid
        $step_name                            = "CLM_2";
        $tmp_lrequest                         = new \Illuminate\Http\Request();
        $tmp_lrequest['primResourceValue']    = $mobile_number;
        $tmp_lrequest['businessLine']         = "MOBILE";
        $tmp_check_result[$step_name]         = ClmService::getBillingProfileInfo($tmp_lrequest);
        $tmp_check_result[$step_name]["body"] = json_decode($tmp_check_result[$step_name][1], true);
        if ($tmp_check_result[$step_name][0] >= 300) {
            $body                    = ["message" => ["en" => "Sorry! You are not able to choose to buy a product.", "th" => "ขออภัยค่ะ คุณไม่สามารถรับสิทธิพิเศษนี้"], "is_pass" => false, "tmp_check_mini_step_result" => $tmp_check_mini_step_result, "is_enter_mini_step_result" => $is_enter_mini_step_result, "tmp_check_result" => $tmp_check_result];
            $body["reason_not_pass"] = "unable to contact CLM_2 server";

            return [400, $body];
        }
        $is_not_postpaid     = false;
        $customer_type_check = array_get($tmp_check_result, "CLM_2.body.getBillingProfileInfoResponse.return.billingProfileInfo.accountCustomerInfo.customer.customerType.code");
        if (!empty($customer_type_check) && $customer_type_check === 'P'
        ) {
            $is_not_postpaid = true;
        }
        $tmp_check_result[$step_name]["is_not_postpaid"] = $is_not_postpaid;

        if ($is_not_postpaid) {
            $body               = ["message" => ["en" => "Sorry! You are not able to choose to buy a product.", "th" => "ขออภัยค่ะ คุณไม่สามารถรับสิทธิพิเศษนี้"], "is_pass" => false, "tmp_check_mini_step_result" => $tmp_check_mini_step_result, "is_enter_mini_step_result" => $is_enter_mini_step_result, "tmp_check_result" => $tmp_check_result];
            $body["is_prepaid"] = true;
            $is_truemoveh       = isset($tmp_check_result[$step_name]["body"]["getBillingProfileInfoResponse"]
                ["return"]["billingProfileInfo"]["accountCustomerInfo"]["customer"]["certificateNumber"]);
            $body["is_truemoveh"] = $is_truemoveh;

            return [400, $body];
        }

        // end of tec-243 clm int is prepaid

        $company_code = \Arr::get($tmp_check_result, "CLM_2.body.getBillingProfileInfoResponse.return.billingProfileInfo.accountCustomerInfo.account.company.code");

        $is_truemoveh = false; //tec-1730 improve error message mnp 2 step bundling

        // start of tec-1504 step get thai id from int
        $is_enter_mini_step_result[$step_name] = true;

        if ($tmp_check_result[$step_name][0] >= 300) {
            $body                    = ["message" => ["en" => "Sorry! You are not able to choose to buy a product.", "th" => "ขออภัยค่ะ คุณไม่สามารถรับสิทธิพิเศษนี้"], "is_pass" => false, "tmp_check_mini_step_result" => $tmp_check_mini_step_result, "is_enter_mini_step_result" => $is_enter_mini_step_result, "tmp_check_result" => $tmp_check_result];
            $body["reason_not_pass"] = "unable to contact CLM_2 server";

            return [400, $body];
        }
        if (isset($tmp_check_result[$step_name]["body"]["getBillingProfileInfoResponse"]
            ["return"]["billingProfileInfo"]["accountCustomerInfo"]["customer"]["certificateNumber"])
        ) {
            $int_thai_id = $tmp_check_result[$step_name]["body"]["getBillingProfileInfoResponse"]
                ["return"]["billingProfileInfo"]["accountCustomerInfo"]["customer"]["certificateNumber"];
            $id_number = $int_thai_id;
            //tec-1730 improve error message mnp 2 step bundling
            $is_truemoveh = true;
        } else {
            $body                         = ["message" => ["en" => "Not Found Thai ID", "th" => "ไม่พบเลขบัตรประชาชน"], "is_pass" => false, "tmp_check_result" => $tmp_check_result];
            $body["is_not_found_thai_id"] = true;

            $prever_mnp_sim_product_id = Redis::get('truestore:prever_mnp_sim_product_id:device_bundle_existing:campaign_type_4:redis_data');
            if (!empty($prever_mnp_sim_product_id) && $campaign_type_bundle_existing == '4') {
                $body["is_prever_mnp"] = true;

                if ($tmp_check_mini_step_result["A"]) {
                    $random_hash_for_otp = Str::uuid()->toString();
                    // expired in 15 minutes
                    $tmp_parameters = [
                        "mobile_number" => $mobile_number,
                        "otp"           => $otp,
                    ];
                    Redis::set('store-otp:mobile_number:' . $mobile_number . ':random_hash_for_otp:' . $random_hash_for_otp . ':temp', json_encode($tmp_parameters), 'EX', 60 * 15);
                    $body["mnp_otp_key"] = $random_hash_for_otp;
                }

                $body["is_truemoveh"] = $is_truemoveh; //tec-1730 improve error message mnp 2 step bundling
                $body["message"]      = ["en" => "Sorry, this mobile number cannot be proceeded. If you have not moved to TruemoveH, please click below button to proceed.", "th" => "ขออภัย เลขหมายนี้ไม่สามารถรับสิทธิ์ได้ หากท่านยังไม่ได้ทำการย้ายค่าย กรุณาทำการสมัครย้ายค่ายเบอร์เดิมก่อน"];
                if ($body["is_truemoveh"]) {
                    $body["message"] = ["en" => "Sorry. This mobile number cannot be verified for this privilege.", "th" => "ขออภัย เลขหมายนี้ไม่สามารถรับสิทธิ์ย้ายค่ายเบอร์เดิมได้"];
                }
                $body["prever_mnp_sim_product_id"] = $prever_mnp_sim_product_id;
            }

            return [400, $body];
        }

        // end of tec-1504 step get thai id from int

        // step1 (step 2 in flow chart)
        // Pass case TrueOnLine (TOL)
        // Verify By True API check black list TOL
        // check B
        $is_enter_mini_step_result["B"] = true;
        $url                            = "check-blacklist/getTOLFraudAndBlackList";
        $method                         = "post";
        $tmp_lrequest                   = new \Illuminate\Http\Request();
        $tmp_lrequest->setMethod(strtoupper($method));
        $request_parameter                                    = [];
        $request_parameter["searchList"]                      = ["searchInfoArray" => []];
        $request_parameter["searchList"]["searchInfoArray"][] = ["type" => "CERTIFICATE", "value" => $id_number];
        $request_parameter["searchList"]["searchInfoArray"][] = ["type" => "BUSINESSLINE", "value" => "ONLINE"];
        $request_parameter["searchList"]["searchInfoArray"][] = ["type" => "CUSTOMERSEGMENT", "value" => "INDIVIDUAL"];
        $tmp_lrequest->replace($request_parameter);
        if ($lrequest->has('tmp_message_id')) {
            $tmp_lrequest["tmp_message_id"] = $lrequest->input('tmp_message_id');
        }
        $header = [];

        $blacklist_input  = $tmp_lrequest->all();
        $content          = WlsService::postCheckBlacklistTrueonline($url, $method, $tmp_lrequest, $header);
        $blacklist_output = $content;

        $tmp_content = json_decode($content[1], true);
        if (isset($tmp_content["blackListDataInfo"]) && $tmp_content["fraudDataInfo"]) {
            if (isset($tmp_content["blackListDataInfo"]["blackList"])) {
                $blacklist_result = $tmp_content["blackListDataInfo"]["blackList"];
            }
            if (isset($tmp_content["fraudDataInfo"]["fraudList"])) {
                $fraudlist_result = $tmp_content["fraudDataInfo"]["fraudList"];
            }

            if (($tmp_content["blackListDataInfo"]["status"] == "false" && $tmp_content["fraudDataInfo"]["status"] == "false")) {
                // also check for error of blacklist verification system
                $is_pass_array[1]                = true;
                $tmp_check_mini_step_result["B"] = true;
            }
        }

        //skip to check case 3,4
        //step 2 (step 3 in flow chart)
        // Verify By True API check TMH collection (Payment late)

        // check for C
        $is_pass_array[1] = true;
        // end of check C

        // search bundle existing
        $proposition_nas_code_verify = '';

        if ($meta === 'cctv_cloud') {
            $product_code    = $product_sku_list[0];
            $advance_payment = \Arr::get($verify_data, 'advance_payment');
            $contract        = \Arr::get($verify_data, 'contract');

            $url                   = "truemoveh/bundle-existing";
            $method                = "get";
            $header                = [];
            $tmp_lrequest          = new \Illuminate\Http\Request();
            $tmp_request_parameter = ["product_id" => explode("L", $product_id_list[0])[1]];
            $tmp_lrequest->replace($tmp_request_parameter);

            $content    = WlsService::getBundleExisting($url, $method, $tmp_lrequest, $header);
            $tmp_result = json_decode($content[1], true);
            $records    = \Arr::get($tmp_result, 'data.record', []);
            foreach ($records as $bundle_existing) {
                // check campaign type before find discount_list
                $campaign_type = \Arr::get($bundle_existing, 'campaign_type');
                if ($campaign_type !== $campaign_type_bundle_existing) {
                    continue;
                }

                $discount_list = \Arr::get($bundle_existing, 'discount_list', []);
                foreach ($discount_list as $disc) {
                    $disc_product_code    = \Arr::get($disc, 'product_code');
                    $disc_discount        = \Arr::get($disc, 'discount');
                    $disc_meta            = \Arr::get($disc, 'meta');
                    $disc_company         = \Arr::get($disc, 'company');
                    $disc_advance_payment = \Arr::get($disc, 'advance_payment');
                    $disc_contract        = \Arr::get($disc, 'contract');
                    $disc_aging           = \Arr::get($disc, 'aging');
                    $disc_rc              = \Arr::get($disc, 'rc');

                    if (
                        $product_code     === $disc_product_code &&
                        $rc               === strval($disc_rc) &&
                        $aging            === $disc_aging &&
                        $discount         === strval($disc_discount) &&
                        $meta             === $disc_meta &&
                        $company_code     === $disc_company &&
                        $advance_payment  === strval($disc_advance_payment) &&
                        strval($contract) === strval($disc_contract)
                    ) {
                        $proposition_nas_code_verify = \Arr::get($disc, 'proposition_nas_code');
                        break;
                    }
                }
            }

            if (empty($proposition_nas_code_verify)) {
                $body                  = ["message" => ["en" => "Sorry, the system is unable to find this privilege campaign", "th" => "ขออภัย ไม่พบสิทธิพิเศษตามที่คุณเลือก"], "is_pass" => false, "tmp_check_mini_step_result" => $tmp_check_mini_step_result, "is_enter_mini_step_result" => $is_enter_mini_step_result];
                $body["error_message"] = ["en" => "not found campaign in bundle existing", "th" => "ไม่พบสิทธิพิเศษ"];
                return [400, $body];
            }
        }
        // end search bundle existing

        // check for H
        $passed_input_H                   = [];
        $passed_output_H                  = [];
        $passed_output_samemat_multiple_H = [];
        $failed_output_H                  = [];
        $failed_input_H                   = [];
        $is_enter_mini_step_result["H"]   = true;
        $data_H                           = [];

        $to_be_check_with_loop_isset_variable = [
            "failed_output_G",
            "failed_input_G",
            "passed_input_G",
            "passed_output_G",
            "failed_input_H",
            "failed_output_H",
            "passed_input_H",
            "passed_output_H",
            "tmp_check_mini_step_result",
            "is_enter_mini_step_result",
        ];

        foreach ($product_id_list as $key => $product_id) {
            $url          = "truemoveh/bundle-campaigns/verify";
            $method       = "post";
            $tmp_lrequest = new \Illuminate\Http\Request();
            $tmp_lrequest->setMethod(strtoupper($method));
            $request_parameter                 = [];
            $request_parameter["product_code"] = $product_sku_list[$key];

            $pwd = env("PWD_ENCRYPT_FUNCTION_DEVICE_BUNDLE");

            $request_parameter["mobile"]  = WlsService::postEncryptDeviceBundle($pwd, $mobile_number);
            $request_parameter["thai_id"] = WlsService::postEncryptDeviceBundle($pwd, $id_number);

            $request_parameter["campaign_type"] = $campaign_type_bundle_existing;
            if (is_numeric($rc) && $campaign_type_bundle_existing !== '1') {
                $request_parameter["rc"] = $rc;
            }

            if ($lrequest->has('tmp_message_id')) {
                $request_parameter["tmp_message_id"] = $lrequest->input('tmp_message_id');
            }
            if ($lrequest->has('aging')) {
                $request_parameter["aging"] = $lrequest->input('aging');
            }

            if ($lrequest->has('tenor')) {
                $request_parameter["tenor"] = (int) $lrequest->input('tenor');
            }
            if ($lrequest->has('down_payment_rate')) {
                $request_parameter["down_payment_rate"] = (int) $lrequest->input('down_payment_rate');
            }

            $request_parameter['have_group'] = true;
            if (!empty($lrequest->header('tmvh-token')) && !($lrequest->has('tenor') && $lrequest->has('down_payment_rate'))) {
                $aes_wecamp_result               = WeOmniService::getAesWecamp($lrequest->header('tmvh-token'));
                $request_parameter['group_name'] = array_get($aes_wecamp_result, '1.type');
            }

            if ($verify_data) {
                $request_parameter['advance_payment_verify'] = Arr::get($verify_data, 'advance_payment');
                $request_parameter['contract_verify']        = Arr::get($verify_data, 'contract');
            }

            if (!empty($proposition_nas_code_verify)) {
                $request_parameter['proposition_nas_code_verify'] = $proposition_nas_code_verify;
            }

            if (!empty($is_trueblack)) {
                $request_parameter['is_trueblack'] = true;
            }

            $failed_input_H[] = $request_parameter;
            $tmp_lrequest->replace($request_parameter);

            $header          = [];
            $content_check_H = WlsService::postBundleCampaignsVerify($url, $method, $tmp_lrequest, $header);
            if (json_decode($content_check_H[1], true)["status_code"] < 300 && json_decode($content_check_H[1], true)["data"][0]["discount"] > 1) {
                $tmp_check_mini_step_result["H"]                          = true;
                $passed_input_H[]                                         = $request_parameter;
                $data_H                                                   = json_decode($content_check_H[1], true)["data"][0];
                $passed_output_H[$product_sku_list[$key]]                 = $data_H;
                $passed_output_H[$product_sku_list[$key]]["product_code"] = $request_parameter["product_code"];
                $passed_output_H[$product_sku_list[$key]]["product_id"]   = $product_id;

                foreach (json_decode($content_check_H[1], true)["data"] as $tmp_data_h) {
                    if (!isset($passed_output_samemat_multiple_H[$product_sku_list[$key]])) {
                        $passed_output_samemat_multiple_H[$product_sku_list[$key]] = [];
                    }
                    $tmp_output_H_value = $tmp_data_h;

                    $tmp_output_H_value["product_code"] = $request_parameter["product_code"];
                    $tmp_output_H_value["product_id"]   = $product_id;

                    $passed_output_samemat_multiple_H[$product_sku_list[$key]][] = $tmp_output_H_value;
                }
            } else {
                $failed_output_H         = $content_check_H;
                $body["failed_output_H"] = $content_check_H;
                $body["failed_input_H"]  = $failed_input_H;
                if (isset(json_decode($content_check_H[1], true)["status_txt"]) && json_decode($content_check_H[1], true)["status_txt"] == "Invalid parameter") {
                    $body                  = ["message" => ["en" => "Sorry, the system cannot process your request at the moment.", "th" => "ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้"], "is_pass" => false, "tmp_check_mini_step_result" => $tmp_check_mini_step_result, "is_enter_mini_step_result" => $is_enter_mini_step_result];
                    $body["error_message"] = ["en" => "Sorry! You are not able to choose to buy a product. (rc)", "th" => "ขออภัยค่ะ คุณไม่สามารถรับสิทธิพิเศษนี้ (rc)"];
                } elseif (isset(json_decode($content_check_H[1], true)["data"]["message"])
                    && json_decode($content_check_H[1], true)["data"]["message"] == "Campaign not found") {
                    $body                  = ["message" => ["en" => "Sorry, the system is unable to find this privilege campaign", "th" => "ขออภัย ไม่พบสิทธิพิเศษตามที่คุณเลือก"], "is_pass" => false, "tmp_check_mini_step_result" => $tmp_check_mini_step_result, "is_enter_mini_step_result" => $is_enter_mini_step_result];
                    $body["error_message"] = ["en" => "Sorry! You are not able to choose to buy a product. (rc)", "th" => "ขออภัยค่ะ คุณไม่สามารถรับสิทธิพิเศษนี้ (rc)"];
                } elseif (isset(json_decode($content_check_H[1], true)["data"]["message"]) && json_decode($content_check_H[1], true)["data"]["message"] == "Error get RC") {
                    $body                  = ["message" => ["en" => "Incorrect/invalid service ID or citizen ID number. Please try again.", "th" => "ระบุหมายเลขหรือบัตรประชาชนไม่ถูกต้อง กรุณาทำรายการใหม่อีกครั้ง"], "is_pass" => false, "tmp_check_mini_step_result" => $tmp_check_mini_step_result, "is_enter_mini_step_result" => $is_enter_mini_step_result];
                    $body["error_message"] = ["en" => "Sorry! You are not able to choose to buy a product. (rc)", "th" => "ขออภัยค่ะ คุณไม่สามารถรับสิทธิพิเศษนี้ (rc)"];
                } else {
                    $body                  = ["message" => ["en" => "Sorry! You are not able to choose to buy a product.", "th" => "ขออภัยค่ะ คุณไม่สามารถรับสิทธิพิเศษนี้"], "is_pass" => false, "tmp_check_mini_step_result" => $tmp_check_mini_step_result, "is_enter_mini_step_result" => $is_enter_mini_step_result];
                    $body["error_message"] = ["en" => "Sorry! You are not able to choose to buy a product. (rc)", "th" => "ขออภัยค่ะ คุณไม่สามารถรับสิทธิพิเศษนี้ (rc)"];
                }
                if ($campaign_type_bundle_existing != "4") {
                    return [400, $body];
                } else {
                    $old_message         = $body["message"];
                    $body                = ["message" => ["en" => "Sorry, you have entered incorrect/invalid service ID or ID card number.", "th" => "ขออภัย ระบุหมายเลขหรือบัตรประชาชนไม่ถูกต้อง"], "is_pass" => false, "tmp_check_mini_step_result" => $tmp_check_mini_step_result, "is_enter_mini_step_result" => $is_enter_mini_step_result];
                    $body["old_message"] = $old_message;
                }
            }

            if ($tmp_check_mini_step_result["H"] || $campaign_type_bundle_existing == "4") {
                $tmp_check_mini_step_result["H"] = true;
            }
        }
        // end of check H

        // start of check D
        $step_name                             = "D";
        $is_enter_mini_step_result[$step_name] = true;

        // check redis for send campaign-type
        $campaign_type_for_check_d = Redis::hget('truestore:sku_campaign_code_to_campaign_type_step_d_list:redis_data', $product_sku_list[0]);

        $tmp_parameters = [
            "id_number"                 => $id_number,
            "mobile_number"             => $mobile_number,
            "campaign_type_for_check_d" => $campaign_type_for_check_d,
            "company"                   => \Arr::get($data_H, 'company'),
            "proposition_nas_code"      => \Arr::get($data_H, 'proposition_nas_code'),
            "proposition_amdoc"         => \Arr::get($data_H, 'proposition_amdoc'),
        ];
        if ($lrequest->has('tmp_message_id')) {
            $tmp_parameters["tmp_message_id"] = $lrequest->input('tmp_message_id');
        }
        $tmp_check_result[$step_name]           = WlsService::checkForDValidatePrivilegeSubscriberByMobile($step_name, $lrequest, $tmp_parameters);
        $tmp_check_mini_step_result[$step_name] = $tmp_check_result[$step_name]["is_pass"];
        if (!$tmp_check_mini_step_result[$step_name] && isset($tmp_check_result[$step_name]["failed_output"])) {
            if (!isset($body["failed_output"])) {
                $body["failed_output"] = [$step_name => $tmp_check_result[$step_name]["failed_output"]];
            } else {
                $body["failed_output"][$step_name] = $tmp_check_result[$step_name]["failed_output"];
            }
        }

        if ($tmp_check_mini_step_result["D"] && $tmp_check_mini_step_result["H"]) {
            $is_pass_array[2] = true;
        }
        // end of check D

        //step 3 (step 4 in flow chart)
        // check for G
        $sample_request_body_privilege_check_days = [];

        //check privilege campaign = privilege existing days

        $privilege_placeorder          = null;
        $passed_input_G                = [];
        $failed_input_G                = [];
        $passed_output_G               = [];
        $failed_output_G               = [];
        $campaign_code_list_to_be_loop = $lrequest->input('campaign_code_list');
        $ecoupon_response              = [];

        foreach ($product_id_list as $key => $product_id) {

            $is_enter_mini_step_result["G"] = true;

            // case user have ecoupon => check privilege on ecoupon api
            if ($lrequest->input('ecoupon_code') && $lrequest->input('selected_campaign_code')) {

                // request for ecoupon api
                $tmp_lrequest                     = new \Illuminate\Http\Request();
                $request_ecoupon                  = [];
                $request_ecoupon["Thai_Id"]       = $id_number;
                $request_ecoupon["Coupon_Serial"] = $lrequest->input('ecoupon_code');
                $request_ecoupon["MSISDN"]        = $lrequest->input('mobile_number');
                $request_ecoupon["Campaign_Code"] = $lrequest->input('selected_campaign_code');
                $tmp_lrequest->replace($request_ecoupon);

                $result = WeOmniService::postVerifyEcoupon($tmp_lrequest);

                // request for privilege placeorder
                $request_parameter                   = [];
                $request_parameter["thai_id"]        = base64_encode($id_number);
                $request_parameter["privilege_uid"]  = $request_ecoupon["MSISDN"];
                $request_parameter["campaign_code"]  = $request_ecoupon["Campaign_Code"];
                $request_parameter["ecoupon_serial"] = $request_ecoupon["Coupon_Serial"];
                $request_parameter["product_id"]     = $product_id_list[$key];
                $request_parameter["product_code"]   = $product_sku_list[$key];
                $request_parameter["quantity"]       = "1";
                $request_parameter["service"]        = "truemove";
                $product_id_list_pass[]              = $product_id;

                // parse ecoupon response
                $result_ecoupon           = json_decode($result[1], true);
                $ecoupon_response['code'] = $request_ecoupon["Coupon_Serial"];
                if (isset($result_ecoupon['Error']) && !$result_ecoupon['Error']) {
                    $request_parameter['ecoupon_discount'] = $result_ecoupon['DiscAmount'];
                    $passed_input_G[]                      = $request_parameter;
                    $passed_output_G[]                     = $result;
                    $ecoupon_response['discount']          = $result_ecoupon['DiscAmount'];
                    $is_pass_array[3]                      = $tmp_check_mini_step_result["G"]                      = true;
                } else {
                    $failed_input_G                 = $request_parameter;
                    $failed_output_G                = $result;
                    $ecoupon_response['err_msg_th'] = $result_ecoupon['ErrorMessageTH'];
                    $ecoupon_response['err_msg_en'] = $result_ecoupon['ErrorMessageEN'];
                    $is_pass_array[3]               = $tmp_check_mini_step_result["G"]               = false;
                }
                break;
            }

            $url            = "wportal/privilege/check";
            $method         = "post";
            $tmp_lrequest_2 = new \Illuminate\Http\Request();
            $tmp_lrequest_2->setMethod(strtoupper($method));
            $request_parameter            = [];
            $request_parameter["thai_id"] = base64_encode($id_number);

            //specified service name
            if ($service_name != "trueonline") {
                $request_parameter["privilege_uid"] = $mobile_number;
                $request_parameter["service"]       = "truemove";
            } else {
                $request_parameter["privilege_uid"] = $trueonline_number;
                $request_parameter["service"]       = "trueonline";
            }
            $request_parameter["quantity"] = "1";
            if ($campaign_type_bundle_existing != "4") {
                $campaign_code_list_to_be_loop = array_column($passed_output_samemat_multiple_H[$product_sku_list[$key]], 'campaign_code');
            }

            if (is_array($campaign_code_list_to_be_loop) && !empty($campaign_code_list_to_be_loop)) {
                $request_parameter["product_code"] = $product_sku_list[$key];
                foreach ($campaign_code_list_to_be_loop as $tmp_campaign_code_key => $tmp_campaign_code_value) {
                    $campaign_code_list[]                                                        = $tmp_campaign_code_value;
                    $request_parameter["campaigns[" . $tmp_campaign_code_key . "]"]              = $tmp_campaign_code_value;
                    $request_parameter["campaign_code_to_check[" . $tmp_campaign_code_key . "]"] = $tmp_campaign_code_value;
                }
                $request_parameter["type"] = "bdbc";
            } else {
                $status_code           = 400;
                $body["message"]       = [];
                $body["message"]["en"] = "incorrect campaign code input";
                $body["message"]["th"] = "นำเข้าข้อมูล campaign code ไม่ถูกต้อง";

                foreach ($to_be_check_with_loop_isset_variable as $key_variable) {
                    if (isset(${$key_variable})) {
                        $body[$key_variable] = ${$key_variable};
                    }
                }

                $tmp_last_big_body = [$status_code, $body, "tmp_check_mini_step_result" => $tmp_check_mini_step_result, "case_criteria" => $case_criteria, "is_pass_array" => $is_pass_array, "is_enter_mini_step_result" => $is_enter_mini_step_result, "current_case" => $current_case];

                return $tmp_last_big_body;
            }
            $request_parameter["product_id"]            = $product_id;
            $request_parameter["tmn_account_cash_back"] = $mobile_number;

            if (!empty($redeem_code)) {
                $request_parameter["redeem_code"] = $redeem_code;
                $request_parameter["type"]        = "campaign_redeem";
            }

            $sample_request_body_privilege_check_days[] = $request_parameter;
            $tmp_lrequest_2->replace($request_parameter);
            if ($lrequest->has('tmp_message_id')) {
                $tmp_lrequest_2["tmp_message_id"] = $lrequest->input('tmp_message_id');
            }
            $header  = [];
            $content = WlsService::postPortalPrivilegeCheck($url, $method, $tmp_lrequest_2, $header);
            if ($content[0] <= 200 &&
                isset(json_decode($content[1], true)["status_code"]) &&
                json_decode($content[1], true)["status_code"] < 300 &&
                isset(json_decode($content[1], true)["data"]["campaign_code"])
            ) {
                $product_id_list_pass[]          = $product_id;
                $is_pass_array[3]                = true;
                $tmp_check_mini_step_result["G"] = true;
                foreach (array_keys($request_parameter) as $tmp_campaign_key) {
                    if (preg_match('/^campaigns\[/', $tmp_campaign_key)) {
                        unset($request_parameter[$tmp_campaign_key]);
                    }
                }
                $request_parameter["campaigns[0]"]  = json_decode($content[1], true)["data"]["campaign_code"];
                $request_parameter["campaign_code"] = json_decode($content[1], true)["data"]["campaign_code"];
                $passed_input_G[]                   = $request_parameter;
                $passed_output_G[]                  = $content;
            } else {
                // start of tmh-268 campaign type 4 device bundle existing is_prever_mnp
                $tmp_content_1 = json_decode($content[1], true);

                $body["is_prever_mnp"] = false;
                $body["is_prepaid"]    = false;
                $body["is_truemoveh"]  = $is_truemoveh; //tec-1730 improve error message mnp 2 step bundling

                if (isset($tmp_content_1["data"][0]["message"]) && $tmp_content_1["data"][0]["message"] == "InvalidVerifyCondition" && $campaign_type_bundle_existing == '4') {
                    $body["is_prever_mnp"] = true;
                }
                if (isset($tmp_content_1["data"][0]["message"]) && $tmp_content_1["data"][0]["message"] == "Allowed only Postpaid customer") {
                    $body["is_prepaid"] = true;
                }
                $prever_mnp_sim_product_id = Redis::get('truestore:prever_mnp_sim_product_id:device_bundle_existing:campaign_type_4:redis_data');
                if (!empty($prever_mnp_sim_product_id) && $body["is_prever_mnp"]) {
                    $body["prever_mnp_sim_product_id"] = $prever_mnp_sim_product_id;
                }
                // end of tmh-268 campaign type 4 device bundle existing is_prever_mnp

                // start of TEC-1757 Error msg when customer is not black card
                if (isset($campaign_code_list)) {
                    foreach ($campaign_code_list as $tmp_campaign_code_key => $tmp_campaign_code_value) {
                        $campaign_ref_code = $tmp_campaign_code_value;
                        if (!empty($campaign_ref_code)) {
                            if (!empty(Redis::get("truestore:is_trueblack:campaign_ref_code:$campaign_ref_code:redis_data"))) {
                                array_set($body, "is_trueblack", true);
                            }
                        }
                    }
                }
                // end of TEC-1757 Error msg when customer is not black card

                $failed_output_G[] = $content;
                $failed_input_G[]  = $request_parameter;
            }
        }

        if ($campaign_type_bundle_existing == "4" &&
            isset($product_sku_list[0]) &&
            isset($campaign_code_list[0])
        ) {
            $tmp_lrequest = new \Illuminate\Http\Request();
            $tmp_lrequest->setMethod(strtoupper("get"));
            $tmp_url               = "truemoveh/bundle-existing";
            $tmp_request_parameter = ["product_id" => explode("L", $product_id)[1]];
            $tmp_lrequest->replace($tmp_request_parameter);
            $tmp_header                     = [];
            $content_device_bundle_existing = WlsService::getBundleExisting($tmp_url, "GET", $tmp_lrequest, $tmp_header);
            if (isset(json_decode($content_device_bundle_existing[1], true)["data"]["record"])) {
                foreach (json_decode($content_device_bundle_existing[1], true)["data"]["record"] as $key_bundle_existing => $value_bundle_existing) {
                    if (isset($value_bundle_existing["discount_list"])) {
                        foreach ($value_bundle_existing["discount_list"] as $key_discount_bundle_existing => $value_discount_bundle_existing) {
                            if ($value_bundle_existing["campaign_type"] == "4" &&
                                $value_discount_bundle_existing["product_code"] == $product_sku_list[0] &&
                                $value_discount_bundle_existing["campaign_code"] == $campaign_code_list[0]) {
                                $key                                                      = 0;
                                $passed_output_H                                          = [];
                                $passed_output_H[$product_sku_list[$key]]                 = $value_discount_bundle_existing;
                                $passed_output_H[$product_sku_list[$key]]["product_code"] = $request_parameter["product_code"];
                                $passed_output_H[$product_sku_list[$key]]["product_id"]   = $product_id;
                                $passed_output_H[$product_sku_list[$key]]["is_trueblack"] = (bool) $value_discount_bundle_existing['is_trueblack'];
                            }
                        }
                    }
                }
            }
        }

        if ($is_pass_array[0] && $is_pass_array[1] && $is_pass_array[2] && $is_pass_array[3] || $is_prepaid_sim) {
            $body["is_pass"] = true;
        }
        $body["product_id_list_pass"] = array_unique($product_id_list_pass);

        // start of add cart hash to body, log
        $cart_hash = $lrequest->input('cart_hash');
        if ($lrequest->has('cart_hash') && !empty($lrequest->input('cart_hash')) && gettype($lrequest->input('cart_hash')) == "string") {
            $cart_hash = $lrequest->input('cart_hash');
        } else {
            $cart_hash = Str::uuid()->toString();
        }
        $body["cart_hash"] = $cart_hash;
        // end of add cart hash to body, log

        if (!$is_pass_array[0]) {
            $body["status_code"]   = 400;
            $body["error_message"] = ["en" => "not pass because of otp check", "th" => "ไม่ผ่านเนื่องจากการตรวจสอบ otp"];
            $body["message"]       = ["en" => "Sorry! You are not able to choose to buy a product.", "th" => "ขออภัยค่ะ คุณไม่สามารถรับสิทธิพิเศษนี้"];
        } elseif (!$is_pass_array[1] && !$tmp_check_mini_step_result["B"]) {
            $body["status_code"]   = 400;
            $body["error_message"] = ["en" => "not pass because of blacklist check", "th" => "ไม่ผ่านเนื่องจากการตรวจสอบ blacklist"];
            $body["message"]       = ["en" => "Sorry! You are not able to choose to buy a product.", "th" => "ขออภัยค่ะ คุณไม่สามารถรับสิทธิพิเศษนี้"];
        } elseif (!$is_pass_array[3] && !$tmp_check_mini_step_result["G"]) {
            $body["error_message"] = ["en" => "not pass because of Verify Privilege existing days check", "th" => "ไม่ผ่านเนื่องจากการตรวจสอบ Privilege existing days"];

            $error_message_step_g_privilege_array = ErrorMessageService::getErrorMessageCheckForGPrivilegeArray();

            if (!empty($ecoupon_response)) {
                $body["status_code"] = 400;
                $body["message"]     = ["en" => $ecoupon_response['err_msg_en'], "th" => $ecoupon_response['err_msg_th']];
            } elseif ($body["is_prever_mnp"] && $body["is_truemoveh"]) {
                $body["status_code"] = 400;
                $body["message"]     = ["en" => "Sorry. This mobile number cannot be verified for this privilege.", "th" => "ขออภัย เลขหมายนี้ไม่สามารถรับสิทธิ์ย้ายค่ายเบอร์เดิมได้"];
            } elseif (isset($body["is_trueblack"]) && $body["is_trueblack"]) {
                // tec-1757 Error msg when customer is not black card
                $body["status_code"] = 400;
                $body["message"]     = ["en" => "Sorry, this promotion is for True Black Card member.", "th" => "ขออภัย สิทธิพิเศษนี้สำหรับลูกค้า ทรู แบล็ค การ์ดเท่านั้น"];
            } elseif ($body["is_prever_mnp"]) {
                $body["status_code"] = 400;
                $body["message"]     = ["en" => "Sorry, this mobile number cannot be proceeded. If you have not moved to TruemoveH, please click below button to proceed.", "th" => "ขออภัย เลขหมายนี้ไม่สามารถรับสิทธิ์ได้ หากท่านยังไม่ได้ทำการย้ายค่าย กรุณาทำการสมัครย้ายค่ายเบอร์เดิมก่อน"];
            } elseif (isset(json_decode($failed_output_G[0][1], true)["data"][0]["message"]) &&
                isset($error_message_step_g_privilege_array[json_decode($failed_output_G[0][1], true)["data"][0]["message"]])
            ) {
                $body["status_code"] = 400;
                $body["message"]     = $error_message_step_g_privilege_array[json_decode($failed_output_G[0][1], true)["data"][0]["message"]];
            } elseif (isset(json_decode($failed_output_G[0][1], true)["data"][0]["message"]) &&
                json_decode($failed_output_G[0][1], true)["data"][0]["message"] == "Error check true privilege"
            ) {
                $body["status_code"] = 400;
                $body["message"]     = ["en" => "This number is not eligible for the campaign privilege due to other campaign participation.", "th" => "ไม่สามารถรับสิทธิได้ เนื่องจากหมายเลขของคุณมีสิทธิพิเศษอื่นอยู่"];
            } elseif (isset(json_decode($failed_output_G[0][1], true)["data"][0]["message"]) &&
                json_decode($failed_output_G[0][1], true)["data"][0]["message"] == "Error privilege uid already used"
            ) {
                $body["status_code"] = 400;
                $body["message"]     = ["en" => "Sorry, this service ID or ID card number has already redeemed this privilege.", "th" => "ขออภัย หมายเลขหรือรหัสบัตรประชาชนใช้สิทธิพิเศษไปแล้ว"];
            } elseif (isset(json_decode($failed_output_G[0][1], true)["data"][0]["message"]) &&
                json_decode($failed_output_G[0][1], true)["data"][0]["message"] == "Valid campaign not found"
            ) {
                $body["status_code"] = 400;
                $body["message"]     = ["en" => "Sorry, please contact Chat & Shop staff for assistance before shopping with us as your number may already have existing privileges.", "th" => "หมายเลขของท่านอาจมีสิทธิพิเศษอื่นอยู่ ทำให้ไม่สามารถรับสิทธิ์นี้เพิ่มได้ กรุณาติดต่อเจ้าหน้าที่  Chat & Shop เพื่อตรวจสอบอีกครั้งค่ะ"]; //["en" => "Sorry, the system is unable to find this privilege campaign", "th" => "ขออภัย ไม่พบสิทธิพิเศษตามที่คุณเลือก"];
            } else {
                $body["status_code"] = 400;
                $body["message"]     = ["en" => "Sorry, please contact Chat & Shop staff for assistance before shopping with us as your number may already have existing privileges.", "th" => "หมายเลขของท่านอาจมีสิทธิพิเศษอื่นอยู่ ทำให้ไม่สามารถรับสิทธิ์นี้เพิ่มได้ กรุณาติดต่อเจ้าหน้าที่  Chat & Shop เพื่อตรวจสอบอีกครั้งค่ะ"];
            }
        } elseif (!$is_pass_array[2] && ($current_case == "1") && !$tmp_check_mini_step_result["D"]) {
            $body["status_code"]   = 400;
            $body["error_message"] = ["en" => "not pass because of validate privilege by mobile", "th" => "ไม่ผ่านเนื่องจากการตรวจสอบ privilege ด้วยเบอร์โทรศัพท์มือถือ"];
            $body["message"]       = ["en" => "Sorry! You are not able to choose to buy a product.", "th" => "ขออภัยค่ะ คุณไม่สามารถรับสิทธิพิเศษนี้"];
        } elseif (!$is_pass_array[2] && !$tmp_check_mini_step_result["H"]) {
            $body["status_code"] = 400;
        } elseif (!$body["is_pass"]) {
            $body["status_code"]   = 500;
            $body["error_message"] = ["en" => "Unable to identify verification problem, please contact callcenter", "th" => "ไม่สามารถระบุข้อผิดพลาดของการตรวจสอบได้ กรุณาติดต่อ callcenter"];
            $body["message"]       = ["en" => "Sorry! You are not able to choose to buy a product.", "th" => "ขออภัยค่ะ คุณไม่สามารถรับสิทธิพิเศษนี้"];
        }
        $body["current_case"] = $current_case;

        if (!empty($passed_input_G)) {
            $body["privilege_placeorder"] = $passed_input_G;

            // start of add cart_hash => privilege_placeorder to redis
            $tmp_campaign_data_from_json = null;
            foreach ($tmp_content_get_product_id_config["campaigns"] as $v_index => $v_content) {
                if ($v_content["json_name"] == "device_bundle_existing") {
                    $tmp_campaign_data_from_json = $v_content;
                    $campaign_id                 = $v_content["id"];
                }
            }
            if (!isset($campaign_id)) {
                $campaign_id = null;
            }

            $tmp_product_type = $campaign_type_bundle_existing === '4' ? 'mnp_two_step' : 'device_bundle_existing';
            WlsService::setRedisPrivilegePlaceorder(["passed_input" => $body["privilege_placeorder"], "product_type" => $tmp_product_type], $cart_hash, $product_id, $campaign_id);
            // end of add cart_hash => privilege_placeorder to redis

            // start of add cart_hash and add data to redis here

            $tmp_passed_output_H = [];
            foreach ($passed_output_H as $k => $p) {
                $tmp_passed_output_H[] = $p;
            }

            if ($lrequest->has('cart_hash') && gettype($lrequest->input('cart_hash')) == "string" && !empty($lrequest->input('cart_hash'))) {
                $cart_hash = $lrequest->input('cart_hash');
                $cart_data = Redis::get("store:cart_id:$cart_hash");

                $check_cart_data = json_decode($cart_data, true);

                if (!empty($check_cart_data) && is_array($check_cart_data) && isset($check_cart_data["discount"])) {
                    foreach ($passed_output_H as $key => $value) {
                        $check_cart_data['discount'][$key] = $value;
                    }
                } else {
                    $check_cart_data = ["discount" => []];
                    foreach ($passed_output_H as $key => $value) {
                        $check_cart_data['discount'][$key] = $value;
                    }
                }
                Redis::set('store:cart_id:' . $cart_hash, json_encode(["discount" => $check_cart_data['discount']]));
            } else {
                Redis::set('store:cart_id:' . $cart_hash, json_encode(["discount" => $passed_output_H]));
            }

            // end of add cart_hash and add data to redis here
        }
        foreach ($to_be_check_with_loop_isset_variable as $key_variable) {
            if (isset(${$key_variable})) {
                $body[$key_variable] = ${$key_variable};
            }
        }

        $status_code = 200;
        if (isset($body["status_code"]) && is_numeric($body["status_code"])) {
            $status_code = $body["status_code"];
        }

        $tmp_last_big_body = [$status_code, $body, "tmp_check_mini_step_result" => $tmp_check_mini_step_result, "case_criteria" => $case_criteria, "is_pass_array" => $is_pass_array, "is_enter_mini_step_result" => $is_enter_mini_step_result, "current_case" => $current_case];
        if (isset($tmp_data_to_check_post_full_preverify)) {
            $tmp_last_big_body["tmp_data_to_check_post_full_preverify"] = $tmp_data_to_check_post_full_preverify;
        }
        if (isset($sample_request_body_privilege_check_days)) {
            $tmp_last_big_body["sample_request_body_privilege_check_days"] = $sample_request_body_privilege_check_days;
        }
        if (isset($blacklist_input)) {
            $tmp_last_big_body["blacklist_input"] = $blacklist_input;
        }
        if (isset($blacklist_output)) {
            $tmp_last_big_body["blacklist_output"] = $blacklist_output;
        }
        if (isset($passed_input_H)) {
            $tmp_last_big_body["passed_input_H"] = $passed_input_H;
        }

        return $tmp_last_big_body;
    }

    public static function postVerifyTrueidWls($url, $method, $lrequest, $header)
    {
        $body = ["is_pass" => false];

        $is_pass_array    = [];
        $is_pass_array[0] = false; // OTP
        $is_pass_array[1] = false;
        $is_pass_array[2] = false;
        $is_pass_array[3] = false;

        $tmp_check_mini_step_result = ["A" => false, "B" => false, "C" => false, "D" => false, "E" => false, "F" => false, "G" => false];
        $is_enter_mini_step_result  = ["A" => false, "B" => false, "C" => false, "D" => false, "E" => false, "F" => false, "G" => false];

        $rule = [
            'otp'               => 'required',
            'mobile_number'     => 'required',
            'id_number'         => 'required',
            'service_name'      => 'required',
            'product_id_list'   => 'required|array',
            'trueonline_number' => '',
        ];
        $tmp_check_result = [];

        $tmp_input = $lrequest->all();
        // convert input data to the one we can send
        $validator = Validator::make($tmp_input, $rule);
        if ($validator->fails()) {
            $errors = ["message" => ["en" => "insufficient input", "th" => "กรุณากรอกข้อมูลให้ครบถ้วน", "error_from_system" => implode(',', $validator->errors()->all())]]; //$validator->errors();

            return [400, $errors];
        }

        $otp               = $lrequest->input('otp');
        $mobile_number     = $lrequest->input('mobile_number');
        $id_number         = $lrequest->input('id_number');
        $trueonline_number = $lrequest->input('trueonline_number');

        $product_id_list = $lrequest->input('product_id_list');
        $service_name    = $lrequest->input('service_name');

        $product_id_list_pass = [];
        $product_check_array  = [];
        foreach ($product_id_list as $product_id) {
            $product_check_array[$product_id] = 1;
        }

        $case_criteria = [false, false, false, false];
        if ($service_name == "truemove") {
            $case_criteria[0] = true;
        }

        if ($service_name == "trueonline") {
            $case_criteria[1] = true;
        }

        $content_get_product_id_config = App('App\Http\Controllers\APIController')->getProductIdConfig($lrequest);
        if (empty($content_get_product_id_config) || $content_get_product_id_config[0] > 200) {
            return $content_get_product_id_config;
        }

        $is_postpaid_product_exist = false;
        $is_other_product_exist    = false;
        $is_trueidbox_exist        = false;
        $is_prepaid_sim            = false;

        $tmp_content_get_product_id_config = $content_get_product_id_config[1];
        // check for family sim
        $product_id_config_by_product_id = [];
        foreach ($tmp_content_get_product_id_config["verify"] as $v) {
            $product_id_config_by_product_id[$v["id"]] = $v;
            if (isset($product_check_array[$v["id"]]) && ($v["type"] == "postpaid")) {
                $case_criteria[2]          = true;
                $is_postpaid_product_exist = true;
            } elseif (isset($product_check_array[$v["id"]]) && ($v["type"] == "prepaid")) {
                $is_prepaid_sim         = true;
                $is_other_product_exist = true;
                $product_id_list_pass[] = $v["id"];
            } elseif (isset($product_check_array[$v["id"]]) && ($v["type"] == "trueidtv")) {
                $is_trueidbox_exist = true;
            } else {
                $is_other_product_exist = true;
            }
        }

        if (($case_criteria[0] || $case_criteria[1])
            && $case_criteria[2] || (count($product_id_list) > 1 && $is_postpaid_product_exist)) {
            $case_criteria[3] = true;
        }

        $current_case = null;
        for ($i = 0; $i <= 3; $i++) {
            if ($case_criteria[$i]) {
                $current_case = $i + 1;
            }
        }
        if (!is_numeric($current_case) || $current_case > 4 || $current_case < 1) {
            $errors = ["message" => ["en" => "unable to determine product case, please contact the callcenter", "th" => "ไม่สามารถระบุกรณีของสินค้าได้ กรุณาติดต่อ callcenter", "error_from_system" => implode(',', $validator->errors()->all())]]; //$validator->errors();

            return [500, $errors];
        }

        // step0 (step 1 in flow chart)
        // OTP: in test mode, skipped this
        // check A
        $is_enter_mini_step_result["A"] = true;
        $url                            = "wportal/otp/verify";
        $method                         = "get";
        $tmp_lrequest                   = new \Illuminate\Http\Request();
        $tmp_lrequest->setMethod(strtoupper($method));
        $request_parameter                  = [];
        $request_parameter["mobile_number"] = $mobile_number;
        $request_parameter["otp"]           = $otp;
        $tmp_lrequest->replace($request_parameter);
        $header     = [];
        $content    = WlsService::getVerifyOtpWls($url, $method, $tmp_lrequest, $header);
        $tmp_result = json_decode($content[1], true);

        if (isset($tmp_result["status_code"]) && isset($tmp_result["data"])
            && $tmp_result["status_code"] == 200 && empty($tmp_result["data"])) {
            $is_pass_array[0]                = true; // OTP
            $tmp_check_mini_step_result["A"] = true;
        }

        // step1 (step 2 in flow chart)
        // Pass case TrueOnLine (TOL)
        // Verify By True API check black list TOL
        if ($current_case != 1) {
            // start of check B
            $step_name                             = "B";
            $is_enter_mini_step_result[$step_name] = true;
            $tmp_parameters                        = [
                "id_number" => $id_number,
            ];
            $tmp_check_result[$step_name]           = WlsService::checkForBBlacklist($step_name, $lrequest, $tmp_parameters);
            $tmp_check_mini_step_result[$step_name] = $tmp_check_result[$step_name]["is_pass"];

            if (!$tmp_check_mini_step_result[$step_name] && isset($tmp_check_result[$step_name]["failed_output"])) {
                if (!isset($body["failed_output"])) {
                    $body["failed_output"] = [$step_name => $tmp_check_result[$step_name]["failed_output"]];
                } else {
                    $body["failed_output"][$step_name] = $tmp_check_result[$step_name]["failed_output"];
                }
            }
            // end of check B
            if ($tmp_check_mini_step_result[$step_name]) {
                $is_pass_array[1] = true;
            }
        }

        if ($current_case != 2) {
            //skip to check case 3,4
            //step 2 (step 3 in flow chart)
            if ($current_case == 3 || $current_case == 4) {
                // check for E,F
                $is_enter_mini_step_result["E"] = true;
                //check for E
                //check postpaid full version = full preverify
                $url          = "check-preverify/wemall/profiles/customer/preverify";
                $method       = "post";
                $tmp_lrequest = new \Illuminate\Http\Request();
                $tmp_lrequest->setMethod(strtoupper($method));
                $request_parameter = [];
                $request_parameter = json_decode('{"transactionId":"111211",
                    "accountCat":"I",
                    "accountType":"RPI",
                    "approveCode":"11111",

                    "channel":"KYC_WEMALL",
                    "companyCode":"AL",
                    "dealerCode":"11111",
                    "functionType":"11111",

                    "idType":"I",

                    "requestSubscriber":"1",
                    "userLogin":"11111"}', true);
                $request_parameter["idNumber"] = $id_number;
                $tmp_year_birth                = intval($lrequest->input('year_birth'));
                if ($tmp_year_birth > intval(date('Y'))) {
                    $tmp_year_birth -= 543;
                }

                $request_parameter["birthDate"] = $lrequest->input('date_birth');

                $tmp_data_to_check_post_full_preverify = $request_parameter;

                $tmp_lrequest->replace($request_parameter);
                $header  = [];
                $content = WlsService::postFullPreverify($url, $method, $tmp_lrequest, $header);
                $tmp     = json_decode($content[1], true);
                if ($content[0] <= 200) {
                    if (isset($tmp["status"]) && isset($tmp["display-messages"][0]["message-type"]) && isset($tmp["response-data"]["remark"])
                        && $tmp["status"] == "SUCCESSFUL"
                        && $tmp["display-messages"][0]["message-type"] != "ERROR"
                    ) {
                        // pass
                        $tmp_check_mini_step_result["E"] = true;
                    }
                }
                // end of check E

                if ($tmp_check_mini_step_result["E"]) {
                    $is_pass_array[2] = true;
                }
            } else {
                // check for C,D
                // Verify By True API check TMH collection (Payment late)
                // check for C

                $is_pass_array[1]               = true;
                $is_enter_mini_step_result["C"] = true;
                $url                            = "check-preverify/wemall/profiles/customer/customer-preverify";
                $method                         = "post";
                $tmp_lrequest                   = new \Illuminate\Http\Request();
                $tmp_lrequest->setMethod(strtoupper($method));
                $request_parameter = [];
                $request_parameter = json_decode('{
                    "accountCat":"I",
                    "channel":"KYC_WEMALL",
                    "companyCode":"RM",
                    "idNumber":"' . $id_number . '",
                    "verifyType":"ALL"
                }', true);
                $tmp_lrequest->replace($request_parameter);

                $header  = [];
                $content = WlsService::postCustomerPreverify($url, $method, $tmp_lrequest, $header);

                if (isset(json_decode($content[1], true)["response-data"])) {
                    if (isset(json_decode($content[1], true)["response-data"]["remark"])) {
                        $check_collection_result = json_decode($content[1], true)["response-data"]["remark"];
                    }

                    if (isset($check_collection_result) && $check_collection_result == "ไม่ติด collection") {
                        $tmp_check_mini_step_result["C"] = true;
                    }
                }
                // end of check C
                // check for D
                $is_enter_mini_step_result["D"] = true;
                $url                            = "check-preverify/wemall/sales/order/tmv/validate-privilege-subscriber-by-mobile";
                $method                         = "get";
                $tmp_lrequest                   = new \Illuminate\Http\Request();
                $tmp_lrequest->setMethod(strtoupper($method));
                $request_parameter                     = [];
                $request_parameter["service-id"]       = "EXTDEV";
                $request_parameter["subscriber"]       = $mobile_number;
                $request_parameter["id-number"]        = $id_number;
                $request_parameter["partner-code"]     = env('SHOP_CODE', '80100964');
                $request_parameter["company-code"]     = "RM";
                $request_parameter["proposition"]      = "0048011";
                $request_parameter["ccbs-proposition"] = "RMV000000009209";
                $request_parameter["customer-type"]    = "I";
                if ($is_postpaid_product_exist) {
                    $request_parameter["campaign-code"] = "XN619";
                    $next_check                         = 1;
                } elseif ($is_trueidbox_exist) {
                    $request_parameter["campaign-code"] = "WX868";
                    $next_check                         = 2;
                } else {
                    $tmp_check_mini_step_result["D"] = true;
                }

                $request_parameter["campaign-type"] = "TRUE_ID_TV_MOBILE";
                $tmp_lrequest->replace($request_parameter);
                if (count($tmp_lrequest->all()) > 0 && $method == "get") {
                    $url .= '?';
                    foreach ($tmp_lrequest->all() as $key => $value) {
                        $url .= $key . '=' . $value . '&';
                    }
                }
                $header = [];
                if (isset($request_parameter["campaign-code"])) {
                    $content = WlsService::getValidatePrivilegeSubscriberByMobile($url, $method, $tmp_lrequest, $header);
                } else {
                    $content = null;
                }

                if (isset(json_decode($content[1], true)["response-data"]["validate-privilege"])) {
                    $check_validate_privilege_result = json_decode($content[1], true)["response-data"]["validate-privilege"];

                    if ($check_validate_privilege_result == true) {
                        $tmp_check_mini_step_result["D"] = true;
                    }
                }

                if (isset($next_check) && $next_check == 1 && $is_trueidbox_exist) {
                    // start of check for D again
                    $is_enter_mini_step_result["D"] = true;
                    $url                            = "check-preverify/wemall/sales/order/tmv/validate-privilege-subscriber-by-mobile";
                    $method                         = "get";
                    $tmp_lrequest                   = new \Illuminate\Http\Request();
                    $tmp_lrequest->setMethod(strtoupper($method));
                    $request_parameter                     = [];
                    $request_parameter["service-id"]       = "EXTDEV";
                    $request_parameter["subscriber"]       = $mobile_number;
                    $request_parameter["id-number"]        = $id_number;
                    $request_parameter["partner-code"]     = env('SHOP_CODE', '80100964');
                    $request_parameter["company-code"]     = "RM";
                    $request_parameter["proposition"]      = "0048011";
                    $request_parameter["ccbs-proposition"] = "RMV000000009209";
                    $request_parameter["customer-type"]    = "I";

                    {
                        $request_parameter["campaign-code"] = "WX868";
                    }

                    $request_parameter["campaign-type"] = "TRUE_ID_TV_MOBILE";
                    $tmp_lrequest->replace($request_parameter);
                    if (count($tmp_lrequest->all()) > 0 && $method == "get") {
                        $url .= '?';
                        foreach ($tmp_lrequest->all() as $key => $value) {
                            $url .= $key . '=' . $value . '&';
                        }
                    }
                    $header  = [];
                    $content = WlsService::getValidatePrivilegeSubscriberByMobile($url, $method, $tmp_lrequest, $header);

                    if (isset(json_decode($content[1], true)["response-data"]["validate-privilege"])) {
                        $check_validate_privilege_result = json_decode($content[1], true)["response-data"]["validate-privilege"];

                        if ($check_validate_privilege_result == true) {
                            $tmp_check_mini_step_result["D"] = true && $tmp_check_mini_step_result["D"];
                        } else {
                            $tmp_check_mini_step_result["D"] = false;
                        }
                    }
                    //end of check for D again
                } elseif (isset($next_check) && $next_check == 2 && $is_postpaid_product_exist) {
                    // start of check for D again
                    $is_enter_mini_step_result["D"] = true;
                    $url                            = "check-preverify/wemall/sales/order/tmv/validate-privilege-subscriber-by-mobile";
                    $method                         = "get";
                    $tmp_lrequest                   = new \Illuminate\Http\Request();
                    $tmp_lrequest->setMethod(strtoupper($method));
                    $request_parameter                     = [];
                    $request_parameter["service-id"]       = "EXTDEV";
                    $request_parameter["subscriber"]       = $mobile_number;
                    $request_parameter["id-number"]        = $id_number;
                    $request_parameter["partner-code"]     = env('SHOP_CODE', '80100964');
                    $request_parameter["company-code"]     = "RM";
                    $request_parameter["proposition"]      = "0048011";
                    $request_parameter["ccbs-proposition"] = "RMV000000009209";
                    $request_parameter["customer-type"]    = "I";

                    {
                        $request_parameter["campaign-code"] = "XN619";
                    }

                    $request_parameter["campaign-type"] = "TRUE_ID_TV_MOBILE";
                    $tmp_lrequest->replace($request_parameter);
                    if (count($tmp_lrequest->all()) > 0 && $method == "get") {
                        $url .= '?';
                        foreach ($tmp_lrequest->all() as $key => $value) {
                            $url .= $key . '=' . $value . '&';
                        }
                    }
                    $header  = [];
                    $content = WlsService::getValidatePrivilegeSubscriberByMobile($url, $method, $tmp_lrequest, $header);

                    if (isset(json_decode($content[1], true)["response-data"]["validate-privilege"])) {
                        $check_validate_privilege_result = json_decode($content[1], true)["response-data"]["validate-privilege"];

                        if ($check_validate_privilege_result == true) {
                            $tmp_check_mini_step_result["D"] = true && $tmp_check_mini_step_result["D"];
                        } else {
                            $tmp_check_mini_step_result["D"] = false;
                        }
                    }
                    //end of check for D again
                }
                // end of check D

                if ($tmp_check_mini_step_result["C"] && $tmp_check_mini_step_result["D"]) {
                    $is_pass_array[2] = true;
                }
            }
        } else {
            $is_pass_array[2] = true;
        }

        //step 3 (step 4 in flow chart)
        // check for G
        $sample_request_body_privilege_check_days = [];

        //check privilege campaign = privilege existing days

        $privilege_placeorder = null;
        $passed_input_G       = [];
        foreach ($product_id_list as $product_id) {
            $is_enter_mini_step_result["G"] = true;

            $tmp_check_result["G"]["failed_output"] = [];
            $tmp_check_result["G"]["failed_input"]  = [];
            if (true) {
                $url    = "wportal/privilege/check";
                $method = "post";

                $tmp_lrequest_2 = new \Illuminate\Http\Request();
                $tmp_lrequest_2->setMethod(strtoupper($method));
                $request_parameter            = [];
                $request_parameter["thai_id"] = base64_encode($id_number);

                //specified service name
                if ($service_name != "trueonline") {
                    $request_parameter["privilege_uid"] = $mobile_number;
                    $request_parameter["service"]       = "truemove";
                } else {
                    $request_parameter["privilege_uid"] = $trueonline_number;
                    $request_parameter["service"]       = "trueonline";
                }

                $request_parameter["quantity"] = "1";

                // need to separate between familysim_postpaid and familysim_prepaid
                if (isset($product_id_config_by_product_id[$product_id]["sku"]) &&
                    isset($product_id_config_by_product_id[$product_id]["campaign_code"])) {
                    $request_parameter["product_code"] = ($product_id_config_by_product_id[$product_id]["sku"]);
                    if ($service_name == "truemove" && isset($product_id_config_by_product_id[$product_id]["campaign_code_truemove"])) {
                        $request_parameter["campaigns[0]"]  = ($product_id_config_by_product_id[$product_id]["campaign_code_truemove"]); // WX868 for trueidbox, familysim_postpaid = XN619
                        $request_parameter["campaign_code"] = ($product_id_config_by_product_id[$product_id]["campaign_code_truemove"]); // WX868 for trueidbox, familysim_postpaid = XN619
                    } elseif ($service_name == "trueonline" && isset($product_id_config_by_product_id[$product_id]["campaign_code_trueonline"])) {
                        $request_parameter["campaigns[0]"]  = ($product_id_config_by_product_id[$product_id]["campaign_code_trueonline"]); // WX868 for trueidbox, familysim_postpaid = XN619
                        $request_parameter["campaign_code"] = ($product_id_config_by_product_id[$product_id]["campaign_code_trueonline"]); // WX868 for trueidbox, familysim_postpaid = XN619
                    } else {
                        $request_parameter["campaigns[0]"]  = ($product_id_config_by_product_id[$product_id]["campaign_code"]); // WX868 for trueidbox, familysim_postpaid = XN619
                        $request_parameter["campaign_code"] = ($product_id_config_by_product_id[$product_id]["campaign_code"]); // WX868 for trueidbox, familysim_postpaid = XN619
                    }
                    $request_parameter["type"] = ($product_id_config_by_product_id[$product_id]["type_for_verify"]);
                } else {
                    $is_pass_array[3]                = true;
                    $tmp_check_mini_step_result["G"] = true;
                }

                //quantity, product_code?

                $request_parameter["product_id"]            = $product_id;
                $request_parameter["tmn_account_cash_back"] = $mobile_number;
                $sample_request_body_privilege_check_days[] = $request_parameter;
                $tmp_lrequest_2->replace($request_parameter);

                $header = [];

                $content = WlsService::postPortalPrivilegeCheck($url, $method, $tmp_lrequest_2, $header);
                if ($content[0] <= 200 &&
                    isset(json_decode($content[1], true)["status_code"]) &&
                    json_decode($content[1], true)["status_code"] < 300 && isset(json_decode($content[1], true)["data"]["campaign_code"]) && $is_pass_array[0] && $is_pass_array[1] && $is_pass_array[2]) {
                    $product_id_list_pass[]          = $product_id;
                    $is_pass_array[3]                = true;
                    $tmp_check_mini_step_result["G"] = true;

                    $passed_input_G[] = $request_parameter;
                } else {
                    $tmp_check_result["G"]["failed_output"][] = $content;
                    $tmp_check_result["G"]["failed_input"][]  = $request_parameter;
                }

                if ($service_name == "all" && !$is_pass_array[3] && !$tmp_check_mini_step_result["G"]
                    && isset($product_id_config_by_product_id[$product_id]["campaign_code_trueonline"])) {
                    $request_parameter["service"]               = "trueonline";
                    $request_parameter["privilege_uid"]         = $trueonline_number;
                    $request_parameter["campaigns[0]"]          = ($product_id_config_by_product_id[$product_id]["campaign_code_trueonline"]);
                    $request_parameter["campaign_code"]         = ($product_id_config_by_product_id[$product_id]["campaign_code_trueonline"]);
                    $request_parameter["type"]                  = ($product_id_config_by_product_id[$product_id]["type_for_verify"]);
                    $request_parameter["tmn_account_cash_back"] = $mobile_number;
                    $tmp_lrequest_2->replace($request_parameter);

                    $request_parameter["product_id"]            = $product_id;
                    $sample_request_body_privilege_check_days[] = $request_parameter;
                    $content                                    = WlsService::postPortalPrivilegeCheck($url, $method, $tmp_lrequest_2, $header);
                    if ($content[0] <= 200 &&
                        isset(json_decode($content[1], true)["status_code"]) &&
                        json_decode($content[1], true)["status_code"] < 300 && isset(json_decode($content[1], true)["data"]["campaign_code"]) && $is_pass_array[0] && $is_pass_array[1] && $is_pass_array[2]) {
                        $product_id_list_pass[]          = $product_id;
                        $is_pass_array[3]                = true;
                        $tmp_check_mini_step_result["G"] = true;

                        $passed_input_G[] = $request_parameter;
                    } else {
                        $tmp_check_result["G"]["failed_output"][] = $content;
                        $tmp_check_result["G"]["failed_input"][]  = $request_parameter;
                    }
                }
            }
        }
        // end of check G

        // ======

        // Verify Privilege existing  days TOL / TMH

        // Verify By True API check TMH Blacklist / contract

        // Verify By True API check Sim postpaid Face recognise (still not provided)

        // Verify By True API check postpaid full Priver(privilege?). (Not pass in this case will still continue the process)

        if ($is_pass_array[0] && $is_pass_array[1] && $is_pass_array[2] && $is_pass_array[3] || $is_prepaid_sim) {
            $body["is_pass"] = true;
        }
        $body["product_id_list_pass"] = array_unique($product_id_list_pass);

        if (!$is_pass_array[0]) {
            $body["error_message"] = ["en" => "not pass because of otp check", "th" => "ไม่ผ่านเนื่องจากการตรวจสอบ otp"];
            $body["message"]       = [];
            $body["message"]["th"] = "ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้";
            $body["message"]["en"] = "Sorry, the system cannot process your request at the moment.";
        } elseif (!$is_pass_array[1] && !$tmp_check_mini_step_result["B"]) {
            $body["error_message"] = ["en" => "not pass because of blacklist check", "th" => "ไม่ผ่านเนื่องจากการตรวจสอบ blacklist"];
            if (isset($tmp_check_result["B"]["message"])) {
                $body["message"] = $tmp_check_result["B"]["message"];
            } else {
                $body["message"]       = [];
                $body["message"]["th"] = "ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้";
                $body["message"]["en"] = "Sorry, the system cannot process your request at the moment.";
            }
        } elseif (!$is_pass_array[2] && ($current_case == "3" || $current_case == "4") && !$tmp_check_mini_step_result["E"]) {
            $body["error_message"] = ["en" => "not pass because of check preverify postpaid full version.", "th" => "ไม่ผ่านเนื่องจากการตรวจสอบ check preverify postpaid full version"];
            $body["message"]       = [];
            $body["message"]["th"] = "ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้";
            $body["message"]["en"] = "Sorry, the system cannot process your request at the moment.";
        } elseif (!$is_pass_array[2] && ($current_case == "1") && !$tmp_check_mini_step_result["C"]) {
            $body["error_message"] = ["en" => "not pass because of check TMH collection (Payment late)", "th" => "ไม่ผ่านเนื่องจากการตรวจสอบ TMH collection (Payment late)"];
            $body["message"]       = [];
            $body["message"]["th"] = "ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้";
            $body["message"]["en"] = "Sorry, the system cannot process your request at the moment.";
        } elseif (!$is_pass_array[2] && ($current_case == "1") && !$tmp_check_mini_step_result["D"]) {
            $body["error_message"] = ["en" => "not pass because of validate privilege by mobile", "th" => "ไม่ผ่านเนื่องจากการตรวจสอบ privilege ด้วยเบอร์โทรศัพท์มือถือ"];
            $body["message"]       = [];
            $body["message"]["th"] = "ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้";
            $body["message"]["en"] = "Sorry, the system cannot process your request at the moment.";
        } elseif (!$is_pass_array[3] && !$tmp_check_mini_step_result["G"]) {
            $tmp_check_result["G"]["message_list"] = [];
            // start of error message check
            $error_message_step_g_privilege_array = ErrorMessageService::getErrorMessageCheckForGPrivilegeArray();
            foreach ($tmp_check_result["G"]["failed_output"] as $each_failed_output) {
                $tmp_message       = "";
                $tmp_message_array = ["th" => "", "en" => ""];
                if (isset(json_decode($each_failed_output[1], true)["data"][0]["message"])) {
                    $tmp_message = json_decode($each_failed_output[1], true)["data"][0]["message"];
                }
                if (isset($error_message_step_g_privilege_array[$tmp_message])) {
                    $tmp_message_array = $error_message_step_g_privilege_array[$tmp_message];
                } elseif ($tmp_message == "Error check true privilege") {
                    $tmp_message_array["th"] = "ขออภัย โปรโมชั่นปัจจุบันของคุณไม่สามารถเข้าร่วมรายการได้";
                    $tmp_message_array["en"] = "Sorry, your current promotion unable to use with this verify method.";
                } elseif ($tmp_message == "Error privilege uid already used") {
                    $tmp_message_array["th"] = "ขออภัย หมายเลขหรือรหัสบัตรประชาชนนี้ รับสิทธิพิเศษไปแล้ว";
                    $tmp_message_array["en"] = "Sorry, this mobile number or this citizen number already used with this verify method.";
                } else {
                    $tmp_message_array["th"] = "ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้";
                    $tmp_message_array["en"] = "Sorry, the system cannot process your request at the moment.";
                }
                $tmp_check_result["G"]["message_list"][] = $tmp_message_array;
            }
            if (count($tmp_check_result["G"]["message_list"]) > 0) {
                $tmp_check_result["G"]["message"] = $tmp_check_result["G"]["message_list"][count($tmp_check_result["G"]["message_list"]) - 1];
            }
            // end of error message check

            $body["error_message"] = ["en" => "not pass because of Verify Privilege existing days check", "th" => "ไม่ผ่านเนื่องจากการตรวจสอบ Privilege existing days"];
            if (isset($tmp_check_result["G"]["message"])) {
                $body["message"] = $tmp_check_result["G"]["message"];
            } else {
                $body["message"]       = [];
                $body["message"]["th"] = "ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้";
                $body["message"]["en"] = "Sorry, the system cannot process your request at the moment.";
            }
        } elseif (!$body["is_pass"] && !$is_prepaid_sim) {
            $body["error_message"] = ["en" => "Unable to identify verification problem, please contact callcenter", "th" => "ไม่สามารถระบุข้อผิดพลาดของการตรวจสอบได้ กรุณาติดต่อ callcenter"];
            $body["message"]       = [];
            $body["message"]["th"] = "ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้";
            $body["message"]["en"] = "Sorry, the system cannot process your request at the moment.";
        }
        $body["current_case"] = $current_case;

        if (!empty($passed_input_G)) {
            $body["privilege_placeorder"] = $passed_input_G;
        }
        if (isset($face_recognition_result)) {
            $body["face_recognition_result"] = $face_recognition_result;
        }
        if (isset($tmp_check_result)) {
            $body["tmp_check_result"] = $tmp_check_result;
        }

        $body              = json_encode($body);
        $tmp_last_big_body = [200, $body, "tmp_check_mini_step_result" => $tmp_check_mini_step_result, "case_criteria" => $case_criteria, "is_pass_array" => $is_pass_array, "is_enter_mini_step_result" => $is_enter_mini_step_result, "current_case" => $current_case];
        if (isset($tmp_data_to_check_post_full_preverify)) {
            $tmp_last_big_body["tmp_data_to_check_post_full_preverify"] = $tmp_data_to_check_post_full_preverify;
        }
        if (isset($sample_request_body_privilege_check_days)) {
            $tmp_last_big_body["sample_request_body_privilege_check_days"] = $sample_request_body_privilege_check_days;
        }
        if (isset($blacklist_input)) {
            $tmp_last_big_body["blacklist_input"] = $blacklist_input;
        }
        if (isset($blacklist_output)) {
            $tmp_last_big_body["blacklist_output"] = $blacklist_output;
        }

        return $tmp_last_big_body;
    }

    public static function postVerifyFamilyBlackTruecard($url, $method, $lrequest, $header)
    {

        // start of unica api
        $url          = "true-black-card/checkBCStatus";
        $method       = "get";
        $tmp_lrequest = new \Illuminate\Http\Request();
        $tmp_lrequest->setMethod(strtoupper($method));

        $request_parameter            = [];
        $request_parameter["NThaiID"] = $lrequest->input('id_number');
        $request_parameter['OfferID'] = "CS_CL_824_1";
        $tmp_lrequest->replace($request_parameter);
        $content_trueblackcard = WlsService::getTrueBlackCardCheckBcStatus($url, $method, $tmp_lrequest, $header);

        // end of unica api, anything else is check return message

        if (json_decode($content_trueblackcard[1], true)["Result_code"] == "CMX_CS001") {
            // use || true here just in case you want to bypass and test this
            $tmp_last_big_body = WlsService::postVerifyPostpaidWls($url, $method, $lrequest, $header);
        } elseif (json_decode($content_trueblackcard[1], true)["Result_code"] == "CMX_CS000") {
            $tmp_last_big_body = [400, ["message" => ["en" => "This ThaiID is already claimed", "th" => "ขออภัย หมายเลขบัตรประชาชนนี้ได้มีการลงทะเบียนเข้าร่วมแคมเปญครอบครัวทรูแบล็ค (True Black Family) เรียบร้อยแล้ว"], "is_pass" => false]];
        } elseif (json_decode($content_trueblackcard[1], true)["Result_code"] == "CMX_CS001") {
            $tmp_last_big_body = [400, ["message" => ["en" => "Waiting for change price plan", "th" => "ขอบคุณที่ลงทะเบียนสมัครแคมเปญ ครอบครัวทรูแบล็ค(True Black Family) ครอบครัวของคุณที่ชวนตามเลขที่บัตรปชช. จะได้รับสิทธิทรูแบล็คเมื่อเปิดเบอร์ใหม่หรือเปลี่ยนแพ็กเกจใช้รายเดือนมากกว่า 599บาทขึ้นไป ที่ทรูช็อป ทรูสเฟียร์ หรือโทร 02-700-8000 กด 3 (8.00-20.00น.ทุกวัน) ภายใน 7วัน เมื่อเปิดบริการสำเร็จ คุณคนชวนจะได้รับ 500 ทรูพอยท์/1เบอร์ใหม่หรือเปลี่ยนแพ็กเกจสำเร็จ คนถูกชวนจะได้รับทรูแบล็คภายใน 30วัน เพิ่มเติมคลิก https://bit.ly/2Sf7IIA"], "is_pass" => false]];
        } elseif (json_decode($content_trueblackcard[1], true)["Result_code"] == "CMX_CS002") {
            $tmp_last_big_body = [400, ["message" => ["en" => "This ThaiID Claim status is expired", "th" => "ขออภัย เลขที่บัตรปชช.ครอบครัวของคุณที่ชวนเข้าร่วม แคมเปญครอบครัวทรูแบล็ค(True Black Family) ไม่สามารถเข้าร่วมรับสิทธิแคมเปญนี้ได้ เนื่องจากไม่ได้เปิดใช้บริการใหม่หรือเปลี่ยนมาใช้แพ็กเกจตามเงื่อนไขเกิน 7วันตามที่กำหนด"], "is_pass" => false]];
        } elseif (json_decode($content_trueblackcard[1], true)["Result_code"] == "CMX_CS003") {
            $tmp_last_big_body = [400, ["message" => ["en" => "ThaiID is not registered, please register at *824* with 13 digit thai id and call with this number. This campaign only available for individual truemoveh postpaid number.", "th" => "ขออภัย คุณยังไม่ได้กดลงทะเบียนที่ *824*ตามด้วยบัตรประชาชนครอบครัว 13 หลัก# โทรออก แคมเปญนี้สำหรับนี้สำหรับหมายเลขทรูมูฟเอชบุคคลธรรมดาแบบรายเดือนเท่านั้น"], "is_pass" => false]];
        } else {
            $tmp_last_big_body = [400, ["message" => ["en" => "unable to verify True Black Family, please try again", "th" => "ไม่สามารถตรวจสิทธิ์ การเข้าร่วม แคมเปญครอบครัวทรูแบล็ค(True Black Family) ได้ กรุณาลองทำรายการใหม่อีกครั้ง"], "is_pass" => false]];
        }
        if (json_decode($content_trueblackcard[1], true)["Result_code"] != "CMX_CS001") {
            // && false in case you want to debug
            if (isset($tmp_last_big_body[1]["error"])) {
                $tmp_last_big_body[1]["error"]["unica"] = json_decode($content_trueblackcard[1], true);
            } else {
                $tmp_last_big_body[1]["error"] = ["unica" => json_decode($content_trueblackcard[1], true)];
            }
        }

        return $tmp_last_big_body;
    }

    public static function postVerifyDeviceBundleNewCustomer($url, $method, $lrequest, $header)
    {
        $is_device_mnp_bundle = false;
        if ($method == "device_mnp_bundle") {
            $is_device_mnp_bundle = true;
            $method               = "";
        }

        if (!$lrequest->has('cart_hash')) {
            $tmp_last_big_body[0] = 400;
            $tmp                  = ["is_pass" => false];

            $tmp["message"]       = [];
            $tmp["message"]["th"] = "กรุณาไปที่หน้าเลือกสินค้าอีกครั้ง";
            $tmp["message"]["en"] = "please go to product page and begin the process again";
            $tmp_last_big_body[1] = $tmp;

            return $tmp_last_big_body;
        }

        $check_step_result = [];

        $tmp_last_big_body = WlsService::postVerifyPostpaidWls($url, $method, $lrequest, $header);

        $cart_hash             = $lrequest->input('cart_hash');
        $product_id_list       = $lrequest->input('product_id_list');
        $product_bundle_id     = $lrequest->input('product_bundle_id');
        $product_nas_code_list = $lrequest->input('product_nas_code_list');
        $inventory_id_list     = $lrequest->input('inventory_id_list');

        $mobile_number     = $lrequest->input('mobile_number');
        $id_number         = $lrequest->input('id_number');
        $trueonline_number = $lrequest->input('trueonline_number');

        $redeem_code = $lrequest->input('redeem_code');

        if (gettype($product_id_list) != "array") {
            $tmp_last_big_body[0] = 400;
            $tmp                  = json_decode($tmp_last_big_body[1], true);
            $tmp["message"]       = [];
            $tmp["message"]["th"] = "ไม่สามารถตรวจสอบสิทธิ์ได้เพราะการนำเข้าข้อมูลรหัสสินค้าผิดพลาด";
            $tmp["message"]["en"] = "unable to verify privilege because of invalid product id input";
            $tmp["is_pass"]       = false;
            $tmp_last_big_body[1] = $tmp;

            return $tmp_last_big_body;
        }

        $check_step_result['postVerifyPostpaidWls'] = $tmp_last_big_body;

        $product_id_list_key_value = $product_id_list[0];

        $url          = "wportal/product/{$product_id_list_key_value}";
        $method       = "get";
        $tmp_lrequest = new \Illuminate\Http\Request();
        $tmp_lrequest->setMethod(strtoupper($method));
        $request_parameter = [];
        $tmp_lrequest->replace($request_parameter);
        $header = [
            "Content-Type" => "application/json",
        ];
        $paysmooth_token = $lrequest->input('paysmooth-token');
        if (!empty($paysmooth_token)) {
            $header["paysmooth-token"] = $paysmooth_token;
            $tmp_lrequest->headers->set('paysmooth-token', $paysmooth_token);
        }
        $portal_product_content     = WlsService::getPortalProductWls($url, $method, $tmp_lrequest, $header, true);
        $tmp_portal_product_content = json_decode($portal_product_content[1], true);

        if (!isset($tmp_portal_product_content["data"]["record"]["bundles"])) {
            $tmp_last_big_body[0] = 400;
            $tmp                  = json_decode($tmp_last_big_body[1], true);

            $tmp["message"]       = [];
            $tmp["message"]["th"] = "ไม่สามารถตรวจสอบสิทธิ์ได้เพราะการนำเข้าข้อมูลผิดพลาด";
            $tmp["message"]["en"] = "unable to verify privilege because of invalid input";
            $tmp["is_pass"]       = false;
            $tmp_last_big_body[1] = $tmp;

            return $tmp_last_big_body;
        }

        $tmp_bundle = [];

        foreach ($tmp_portal_product_content["data"]["record"]["bundles"] as $tmp_key => $tmp_value) {
            if ($tmp_value["id"] == $product_bundle_id[0]) {
                $tmp_bundle[$tmp_value["id"]] = $tmp_value;
                $tmp_bundle_key               = $tmp_value["id"];
                break;
            }
        }

        if (!isset($tmp_bundle_key) || !isset($tmp_bundle[$tmp_bundle_key])) {
            $tmp_last_big_body[0] = 400;
            $tmp                  = json_decode($tmp_last_big_body[1], true);

            $tmp["message"]       = [];
            $tmp["message"]["th"] = "ไม่สามารถตรวจสอบสิทธิ์ได้เพราะการนำเข้าข้อมูลผิดพลาด2";
            $tmp["message"]["en"] = "unable to verify privilege because of invalid input2";
            $tmp["is_pass"]       = false;
            $tmp_last_big_body[1] = $tmp;

            return $tmp_last_big_body;
        }

        $tmp_url      = "truemoveh/proposition";
        $tmp_method   = "get";
        $tmp_lrequest = new \Illuminate\Http\Request();
        $tmp_lrequest->setMethod(strtoupper($tmp_method));
        $request_parameter             = [];
        $request_parameter["nas_code"] = $product_nas_code_list[0];
        $request_parameter["scope"]    = "propositionMobile";
        $request_parameter["fields"]   = "id,nas_code,advance_payment,proposition_mobile,campaign_code";
        $tmp_lrequest->replace($request_parameter);
        if (count($tmp_lrequest->all()) > 0 && $tmp_method == "get") {
            $tmp_url .= '?';
            foreach ($tmp_lrequest->all() as $tmp_key_2 => $tmp_value_2) {
                $tmp_url .= $tmp_key_2 . '=' . $tmp_value_2 . '&';
            }
        }

        $tmp_header  = [];
        $tmp_content = WlsService::getPropositionListWithNasCode($tmp_url, $tmp_method, $tmp_lrequest, $tmp_header);
        if (!isset(json_decode($tmp_content[1], true)["record"][0]["advance_payment"])) {
            return [400, ["is_pass" => false, "message" => ["en" => "promotion code(advance_payment) is invalid, please contact call center", "th" => "รหัสของโปรโมชั่นไม่ถูกต้อง(advance_payment) กรุณาติดต่อ call center"]]];
        }
        $advance_payment                                      = json_decode($tmp_content[1], true)["record"][0]["advance_payment"];
        $proposition_mobile                                   = json_decode($tmp_content[1], true)["record"][0]["proposition_mobile"];
        $campaign_code                                        = json_decode($tmp_content[1], true)["record"][0]["campaign_code"];
        $nas_code                                             = $product_nas_code_list[0];
        $nas_code_data_array[$nas_code]                       = [];
        $nas_code_data_array[$nas_code]["advance_payment"]    = $advance_payment;
        $nas_code_data_array[$nas_code]["proposition_mobile"] = $proposition_mobile;
        $nas_code_data_array[$nas_code]["campaign_code"]      = $campaign_code;

        $check_step_result['getPropositionListWithNasCode'] = ['input' => $request_parameter, 'result' => $tmp_content];

        foreach ($tmp_bundle[$tmp_bundle_key]["inventories"] as $product_id_list_key_2 => $product_id_list_key_value_2) {
            //product api to get sku
            if ($product_id_list_key_value_2["inventory_id"] != $inventory_id_list[0]) {
                continue;
            }
            $url                     = "wportal/product/" . $product_id_list_key_value_2["product_id"];
            $result                  = App('App\Http\Controllers\APIController')->callAPIContent($url, new \Illuminate\Http\Request(), true);
            $inventorySelected       = [];
            $product_detail_from_api = json_decode($result["body"], true)["data"]["record"];
            foreach ($product_detail_from_api["inventories"] as $key2 => $value2) {
                if ($value2["id"] == $product_id_list_key_value_2["inventory_id"]) {
                    $inventorySelected = $product_detail_from_api["inventories"][$key2];
                    break;
                }
            }

            $external_nas_code = '';
            $store_service     = new StoreService();
            $external_nas_code = $store_service->processGetExternalNasCodeByNasCode(Arr::get($product_nas_code_list, '0'));

            if (empty($external_nas_code)) $external_nas_code = Arr::get($product_nas_code_list, '0');

            // start of new prevalidation
            $date_birth  = $lrequest->get('date_birth');
            $source_type = $lrequest->get('source_type');

            $flow_id = $source_type === 'e-sim' ? 'F012' : 'F006';

            $tmp_request_parameter = [
                'channel'        => '3GW-TRUESTORE',
                'flowID'         => $flow_id,
                'saleRepInfo'    => [
                    'dealerCode' => env('SHOP_CODE', '80100964'),
                ],
                'subscriberInfo' => [
                    'companyCode' => 'RM',
                    'propoId'     => $external_nas_code,
                ],
                'campaignInfo'   => [
                    'campaignCode' => $campaign_code,
                    'productCode'  => $inventorySelected['sku'],
                    'verifyKey'    => '',
                ],
                'customerInfo'   => [
                    'identification'     => $id_number,
                    'identificationType' => 'I',
                    'birthDate'          => $date_birth,
                ],
            ];

            if (!empty($mobile_number)) {
                $tmp_request_parameter['subscriberInfo']['subscriberNumber'] = $mobile_number;
            }

            if (!empty($redeem_code)) {
                $tmp_request_parameter['campaignInfo']['verifyKey'] = "RedeemCode=$redeem_code";
            }

            if ($lrequest->has('tmp_message_id')) {
                $tmp_request_parameter['tmp_message_id'] = $lrequest->input('tmp_message_id');
            }

            $tmp_lrequest = new \Illuminate\Http\Request();
            $tmp_lrequest->replace($tmp_request_parameter);

            $response_data_post_prevalidation = WeOmniService::postPrevalidation($tmp_lrequest);

            $check_step_result['postPrevalidation'] = ['input' => $tmp_request_parameter, 'result' => $response_data_post_prevalidation];

            $http_code = \Arr::get($response_data_post_prevalidation, '0', 0);
            if ($http_code !== 200) {
                return [400, ['is_pass' => false, 'message' => ['en' => 'check privilege is invalid', 'th' => 'การยืนยันสิทธิ์ไม่ถูกต้อง'], 'check_step_result' => $check_step_result]];
            }

            $json_content = \Arr::get($response_data_post_prevalidation, '1', '');
            $content      = json_decode($json_content, true);
            $resp_code    = \Arr::get($content, 'code', '0');
            if ($resp_code !== '200') {
                return [400, ['is_pass' => false, 'message' => ['en' => 'check privilege is invalid', 'th' => 'การยืนยันสิทธิ์ไม่ถูกต้อง'], 'check_step_result' => $check_step_result]];
            }
            // end of new prevalidation
        }

        // start of add cart_hash => privilege_placeorder to redis
        $passed_input                  = [];
        $passed_input['thai_id']       = base64_encode($id_number);
        $passed_input['quantity']      = '1';
        $passed_input['product_code']  = $inventorySelected['sku'];
        $passed_input['campaigns[0]']  = $campaign_code;
        $passed_input['campaign_code'] = $campaign_code;
        $passed_input['type']          = 'bundlesim';
        $passed_input['product_id']    = $product_id_list_key_value;

        if (!empty($mobile_number)) {
            $passed_input['service']       = 'truemove';
            $passed_input['privilege_uid'] = $mobile_number;
        }

        if (!empty($redeem_code)) {
            $passed_input['redeem_code'] = $redeem_code;
            $passed_input['type']        = 'campaign_redeem';
        }

        $product_type = $is_device_mnp_bundle ? 'device_mnp_bundle' : 'device_bundle_new_customer';

        WlsService::setRedisPrivilegePlaceorder(['passed_input' => [$passed_input], 'product_type' => $product_type], $cart_hash, $product_id_list_key_value, null);
        // end of add cart_hash => privilege_placeorder to redis

        return [200, ['is_pass' => true, 'privilege_placeorder' => [$passed_input], 'check_step_result' => $check_step_result]];
    }

    public static function getOtpWls($url, $method, $lrequest, $header)
    {
        $header = [
            "Content-Type" => "application/json",
            "x-api-auth"   => env("X_API_AUTH", false),
        ];
        $url    = "wportal/otp/request";
        $method = "get";

        $tmp_lrequest            = $lrequest->all();
        $tmp_lrequest["channel"] = "web";

        $lrequest->replace($tmp_lrequest);
        $is_first = true;
        if (count($lrequest->all()) > 0 && $method == "get") {
            if ($is_first) {
                $url .= '?';
                $is_first = false;
            }
            foreach ($lrequest->all() as $key => $value) {
                $url .= $key . '=' . $value . '&';
            }
        }

        $content = GuzzleService::postGuzzleRequest(
            $url,
            $method,
            $lrequest,
            $header,
            env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
        );

        $tmp_decoded_content = json_decode($content[1], true);
        if (isset($content[1]) && isset($tmp_decoded_content["data"]["message"])) {
            $tmp_decoded_content["message"] = [
                "en" => $tmp_decoded_content["data"]["message"],
                "th" => $tmp_decoded_content["data"]["message"],
            ];
            $content[1] = json_encode($tmp_decoded_content);
        }

        return $content;
    }

    public static function getVerifyOtpWls($url, $method, $lrequest, $header)
    {
        $header = [
            "Content-Type" => "application/json",
            "x-api-auth"   => env("X_API_AUTH", false),
        ];
        $url    = "wportal/otp/verify";
        $method = "get";

        $tmp_lrequest            = $lrequest->all();
        $tmp_lrequest["channel"] = "web";

        $lrequest->replace($tmp_lrequest);
        $is_first = true;
        if (count($lrequest->all()) > 0 && $method == "get") {
            if ($is_first) {
                $url .= '?';
                $is_first = false;
            }
            foreach ($lrequest->all() as $key => $value) {
                $url .= $key . '=' . $value . '&';
            }
        }

        $content = GuzzleService::postGuzzleRequest(
            $url,
            $method,
            $lrequest,
            $header,
            env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
        );
        LogService::writeServiceLog(
            "verify_otp_sms_step_a",
            json_encode_unicode($lrequest->all()),
            json_encode_unicode($content),
            (new \DateTime())->format('d/m/Y H:i:s')
        );

        $tmp_decoded_content = json_decode($content[1], true);
        if (isset($content[1]) && isset($tmp_decoded_content["data"]["message"])) {
            $tmp_decoded_content["message"] = [
                "en" => $tmp_decoded_content["data"]["message"],
                "th" => $tmp_decoded_content["data"]["message"],
            ];
            $content[1] = json_encode($tmp_decoded_content);
        }

        return $content;
    }

    public static function postCheckBlacklistTrueonline($url, $method, $lrequest, $header)
    {
        $url                     = env("ROUTE_CHECK_BLACKLIST_API", "check-blacklist/MGOrchestratedDataInfo/MGTOLFraudAndBlacklist/getTOLFraudAndBlackList");
        $header["x-api-auth"]    = env('X_API_AUTH_BLACKLIST_TOL', false);
        $header["Content-Type"]  = "application/json";
        $header["Authorization"] = "Basic " . env("BLACKLIST_TOL_BASIC_AUTH_TOKEN", false);
        $header["SSV-KEY"]       = env('SSV_KEY_BLACKLIST_TOL', false);
        $content                 = GuzzleService::postGuzzleRequest(
            $url,
            $method,
            $lrequest,
            $header,
            env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
        );
        LogService::writeServiceLog(
            "verify_blacklist_tol_step_b",
            json_encode_unicode($lrequest->all()),
            json_encode_unicode($content),
            (new \DateTime())->format('d/m/Y H:i:s')
        );

        return $content;
    }

    public static function postKycdata($url, $method, $lrequest, $header)
    {
        $url                    = "truemoveh/kyc-data";
        $header["x-api-auth"]   = env('X_API_AUTH', false);
        $header["Content-Type"] = "application/json";
        $content                = GuzzleService::postGuzzleRequest(
            $url,
            $method,
            $lrequest,
            $header,
            env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
        );

        return $content;
    }

    public static function postPortalPrivilegeCheck($url, $method, $lrequest, $header)
    {
        $url                    = "wportal/privilege/check";
        $method                 = "post";
        $header["x-api-auth"]   = env('X_API_AUTH', false);
        $header["Content-Type"] = "application/x-www-form-urlencoded";
        $content                = GuzzleService::postGuzzleRequest(
            $url,
            $method,
            $lrequest,
            $header,
            env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
        );
        LogService::writeServiceLog(
            "verify_privilege_step_g",
            json_encode_unicode($lrequest->all()),
            json_encode_unicode($content),
            (new \DateTime())->format('d/m/Y H:i:s')
        );

        return $content;
    }

    public static function postCustomerPreverify($url, $method, $lrequest, $header)
    {
        $header = [
            "Content-Type"       => "application/json",
            "WEB_METHOD_CHANNEL" => "KYC_WEMALL",
            "apikey"             => env("KYC_WEMALL_API_KEY", false),
            "Accept-Charset"     => "charset=UTF-8",
            "x-api-auth"         => env("X_API_AUTH", false),
        ];
        $url    = "check-preverify/wemall/profiles/customer/customer-preverify";
        $method = "post";

        $content = GuzzleService::postGuzzleRequest(
            $url,
            $method,
            $lrequest,
            $header,
            env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
        );
        LogService::writeServiceLog(
            "verify_customer_preverify_step_c",
            json_encode_unicode($lrequest->all()),
            json_encode_unicode($content),
            (new \DateTime())->format('d/m/Y H:i:s')
        );

        return $content;
    }

    public static function postSaveTempContent($url, $method, $lrequest, $header)
    {
        $header = [
            "Content-Type"       => "application/json",
            "WEB_METHOD_CHANNEL" => "KYC_WEMALL",
            "apikey"             => env("KYC_WEMALL_API_KEY", false),
            "x-api-auth"         => env("X_API_AUTH", false),

        ];
        $url    = "check-preverify/wemall/sales/order/pdf/save-temp-content";
        $method = "post";

        if (!$lrequest->filled('content-type')) {
            $lrequest->merge(['content-type' => 'PNG']);
        }

        $content = GuzzleService::postGuzzleRequest(
            $url,
            $method,
            $lrequest,
            $header,
            env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
        );

        if ($content[1] == "Internal Server Error" &&
            isset($content[2]["status"]) && $content[2]["status"] == "UNSUCCESSFUL" &&
            isset($content[2]["display-messages"][0]["message-type"]) && $content[2]["display-messages"][0]["message-type"] == "ERROR" &&
            isset($content[2]["fault"]["name"]) && isset($content[2]["display-messages"][0]["message"])
        ) {
            $content["status_code"]   = 400;
            $content["error_message"] = ["data" => ["system" => $content[2]["fault"]["name"] . " " . $content[2]["display-messages"][0]["message"]]];
            $content["body"]          = ["message" => ["en" => $content["error_message"]["data"]["system"], "th" => $content["error_message"]["data"]["system"]]];
        }

        return $content;
    }

    public static function postSaveTempContentToS3($url, $method, $lrequest, $header)
    {
        $rule = [
            'input-key'      => 'required',
            'content-base64' => 'required',
            'form-type'      => 'required',
        ];

        $tmp_input = $lrequest->all();
        // convert input data to the one we can send
        $validator = Validator::make($tmp_input, $rule);
        if ($validator->fails()) {
            $errors = ["message" => ["en" => "insufficient input", "th" => "กรุณากรอกข้อมูลให้ครบถ้วน", "error_from_system" => implode(',', $validator->errors()->all())]];

            return [400, $errors];
        }

        $original_image_name = $lrequest->input('input-key');
        $image_name          = $original_image_name;

        if ($lrequest->input('form-type') == "FACE_RECOG_CUST_CERTIFICATE") {
            $image_name .= "_certificate";
        } elseif ($lrequest->input('form-type') == "FACE_RECOG_CUST_CAPTURE") {
            $image_name .= "_liveness";
        } else {
            $final_response = [
                400,
                [
                    'message' => [
                        'en' => 'input form-type is incorrect',
                        'th' => 'นำเข้าข้อมูล form-type ไม่ถูกต้อง',
                    ],
                ],
            ];
        }

        $images_to_save = [
            'vhora/' . $image_name => $lrequest->input('content-base64'),
        ];

        $content = AwsService::uploadS3($images_to_save, 'PRE2POST');

        return [
            $content[0],
            json_decode($content[1], true),
        ];
    }

    public static function postFullPreverify($url, $method, $lrequest, $header)
    {
        $header = [
            "Content-Type"       => "application/json",
            "WEB_METHOD_CHANNEL" => "KYC_WEMALL",
            "apikey"             => env("KYC_WEMALL_API_KEY", false),
            "x-api-auth"         => env("X_API_AUTH", false),
        ];
        $url    = "check-preverify/wemall/profiles/customer/preverify";
        $method = "post";

        $content = GuzzleService::postGuzzleRequest(
            $url,
            $method,
            $lrequest,
            $header,
            env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
        );
        LogService::writeServiceLog(
            "verify_full_preverify_step_e",
            json_encode_unicode($lrequest->all()),
            json_encode_unicode($content),
            (new \DateTime())->format('d/m/Y H:i:s')
        );

        return $content;
    }

    public static function getPropositionListWithNasCode($url, $method, $lrequest, $header)
    {
        $header = [
            "x-api-auth" => env("X_API_AUTH", false),
        ];
        $url    = "truemoveh/proposition";
        $method = "get";

        $tmp_lrequest = $lrequest->all();

        $lrequest->replace($tmp_lrequest);
        $is_first = true;
        if (count($lrequest->all()) > 0 && $method == "get") {
            if ($is_first) {
                $url .= '?';
                $is_first = false;
            }
            foreach ($lrequest->all() as $key => $value) {
                $url .= $key . '=' . $value . '&';
            }
        }

        $content = GuzzleService::postGuzzleRequest(
            $url,
            $method,
            $lrequest,
            $header,
            env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
        );

        $tmp_decoded_content = json_decode($content[1], true);
        if (isset($content[1]) && isset($tmp_decoded_content["data"]["message"])) {
            $tmp_decoded_content["message"] = [
                "en" => $tmp_decoded_content["data"]["message"],
                "th" => $tmp_decoded_content["data"]["message"],
            ];
            $content[1] = json_encode($tmp_decoded_content);
        }

        return $content;
    }

    public static function getPropositionPricePlan($url, $method, $lrequest, $header)
    {
        $header = [
            "x-api-auth" => env("X_API_AUTH", false),
        ];
        $method = "get";

        $tmp_lrequest = $lrequest->all();
        $url          = "truemoveh/proposition/" . $tmp_lrequest["proposition_id"] . "/price-plan";
        $lrequest->replace($tmp_lrequest);
        $is_first = true;
        if (count($lrequest->all()) > 0 && $method == "get") {
            if ($is_first) {
                $url .= '?';
                $is_first = false;
            }
            foreach ($lrequest->all() as $key => $value) {
                $url .= $key . '=' . $value . '&';
            }
        }

        $content = GuzzleService::postGuzzleRequest(
            $url,
            $method,
            $lrequest,
            $header,
            env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
        );

        $tmp_decoded_content = json_decode($content[1], true);
        if (isset($content[1]) && isset($tmp_decoded_content["data"]["message"])) {
            $tmp_decoded_content["message"] = [
                "en" => $tmp_decoded_content["data"]["message"],
                "th" => $tmp_decoded_content["data"]["message"],
            ];
            $content[1] = json_encode($tmp_decoded_content);
        }

        return $content;
    }

    public static function getPropositionList($url, $method, $lrequest, $header)
    {
        $header = [
            "x-api-auth" => env("X_API_AUTH", false),
        ];
        $method = "get";

        $tmp_lrequest = $lrequest->all();
        $url          = "truemoveh/proposition";
        $is_first     = true;
        if (count($lrequest->all()) > 0 && $method == "get") {
            if ($is_first) {
                $url .= '?';
                $is_first = false;
            }
            foreach ($lrequest->all() as $key => $value) {
                $url .= $key . '=' . $value . '&';
            }
        }

        $content = GuzzleService::postGuzzleRequest(
            $url,
            $method,
            $lrequest,
            $header,
            env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
        );

        $tmp_decoded_content = json_decode($content[1], true);
        if (isset($content[1]) && isset($tmp_decoded_content["data"]["message"])) {
            $tmp_decoded_content["message"] = [
                "en" => $tmp_decoded_content["data"]["message"],
                "th" => $tmp_decoded_content["data"]["message"],
            ];
            $content[1] = json_encode($tmp_decoded_content);
        }

        return $content;
    }

    public static function getPropositionInfo($url, $method, $lrequest, $header)
    {
        $header = [
            "x-api-auth" => env("X_API_AUTH", false),
        ];
        $method = "get";

        $tmp_lrequest = $lrequest->all();
        $content      = GuzzleService::postGuzzleRequest(
            $url,
            $method,
            $lrequest,
            $header,
            env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
        );

        $tmp_decoded_content = json_decode($content[1], true);
        if (isset($content[1]) && isset($tmp_decoded_content["data"]["message"])) {
            $tmp_decoded_content["message"] = [
                "en" => $tmp_decoded_content["data"]["message"],
                "th" => $tmp_decoded_content["data"]["message"],
            ];
            $content[1] = json_encode($tmp_decoded_content);
        }

        return $content;
    }

    public static function getMobilePrefix($url, $method, $lrequest, $header)
    {
        $header = [
            "x-api-auth" => env("X_API_AUTH", false),
        ];
        $method = "get";

        $tmp_lrequest = $lrequest->all();
        $url          = "truemoveh/mobile/prefix";

        $content = GuzzleService::postGuzzleRequest(
            $url,
            $method,
            $lrequest,
            $header,
            env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
        );

        $tmp_decoded_content = json_decode($content[1], true);
        if (isset($content[1]) && isset($tmp_decoded_content["data"]["message"])) {
            $tmp_decoded_content["message"] = [
                "en" => $tmp_decoded_content["data"]["message"],
                "th" => $tmp_decoded_content["data"]["message"],
            ];
            $content[1] = json_encode($tmp_decoded_content);
        }

        return $content;
    }

    public static function getMobileSearch($url, $method, $lrequest, $header)
    {
        // [TODO] add tmvh-token header to verify token
        $tmvh_token = array_get($header, 'tmvh-token.0', '');
        $header     = [
            "x-api-auth" => env("X_API_AUTH", false),
        ];
        $method = "get";
        $url    = "truemoveh/mobile/search";

        foreach ($lrequest->all() as $key => $value) {
            if ($key == 'product_id') {
                $product_id = $value;
            }
            $request_token_parameter[$key] = $value;
        }

        $product_id = array_get($request_token_parameter, 'product_id', '');
        $nas_code   = array_get($request_token_parameter, 'nas_code', '');
        $cart_type  = '';
        $type       = '';

        if (!empty($tmvh_token)) {
            $aes_wecamp_result = WeOmniService::getAesWecamp($tmvh_token);
            $cart_type         = array_get($aes_wecamp_result, '1.cart_type');
            $type              = array_get($aes_wecamp_result, '1.type');
        }

        $request_token_parameter['section'] = "wemall";
        if (!isset($request_token_parameter['limit'])) {
            $request_token_parameter['limit'] = "36";
        }

        $lrequest->replace($request_token_parameter);
        $is_first = true;
        if (count($lrequest->all()) > 0 && $method == "get") {
            if ($is_first) {
                $url .= '?';
                $is_first = false;
            }
            foreach ($lrequest->all() as $key => $value) {
                if (gettype($value) != "array") {
                    $url .= $key . '=' . $value . '&';
                } else {
                    foreach ($value as $v) {
                        $url .= $key . '[]=' . $v . '&';
                    }
                }
            }
        }

        $input           = $request_token_parameter;
        $sim_type        = Arr::get($input, 'sim_type');
        $get_mobile_3gw  = false;

        if ($product_id) {
            $sim_auto_sync  = new TruemovehSimAutoSyncModel();
            $result         = $sim_auto_sync->findFirst($product_id);
            $get_mobile_3gw = !empty($result) ? true : false;
        }

        if ($get_mobile_3gw && $sim_type == 'prepaid') {
            $mobile_allocate_service = new MobileAllocateService();
            $content                 = $mobile_allocate_service->getMobile($input);
        } else {
            $content = GuzzleService::postGuzzleRequest(
                $url,
                $method,
                $lrequest,
                $header,
                env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
            );
        }

        $tmp_decoded_content      = json_decode($content[1], true);
        $tmp_nas_code_filter_list = Redis::get('truestore:typhoon_filter_sim_nascode:product_id:' . $product_id . ':redis_data');

        if (!empty($tmp_nas_code_filter_list)) {
            $tmp_nas_code_filter_list = json_decode($tmp_nas_code_filter_list, true);
            $is_check_nas_code        = false;

            if (empty($type)) {
                $tmp_nas_code_content = array_values($tmp_nas_code_filter_list);
                $tmp_nas_codes_list   = array_column($tmp_nas_code_content, 'nas_code');
                $tmp_nas_codes        = array_merge(...$tmp_nas_codes_list);
                $is_check_nas_code    = !in_array($nas_code, $tmp_nas_codes);
            } else {
                $type              = empty($cart_type) ? $type : $type . '-' . strtolower($cart_type);
                $tmp_nas_codes     = array_get(array_get($tmp_nas_code_filter_list, $type), 'nas_code', []);
                $is_check_nas_code = in_array($nas_code, $tmp_nas_codes);
            }

            if (!$is_check_nas_code) {
                $tmp_decoded_content["status_code"] = 404;
                $tmp_decoded_content["status_txt"]  = "Not Found";
                $tmp_decoded_content["data"]        = [
                    "message" => "Data not found",
                ];
                $content[0] = 404;
                $content[1] = json_encode($tmp_decoded_content);
            }
        }

        if (isset($content[1]) && isset($tmp_decoded_content["data"]["message"])) {
            $tmp_decoded_content["message"] = [
                "en" => $tmp_decoded_content["data"]["message"],
                "th" => $tmp_decoded_content["data"]["message"],
            ];
            $content[1] = json_encode($tmp_decoded_content);
        }

        return $content;
    }

    public static function getMobileAvailable($url, $method, $lrequest, $header)
    {
        $header = [
            "x-api-auth" => env("X_API_AUTH", false),
        ];
        $method = "get";
        $url    = "truemoveh/mobiles";

        foreach ($lrequest->all() as $key => $value) {
            $request_token_parameter[$key] = $value;
        }

        if (!empty(array_get($request_token_parameter, 'nas_code'))) {
            $selected_nascode = Redis::get('mobile_hold:' . array_get($request_token_parameter, 'mobiles') . ':data');

            if (array_get($request_token_parameter, 'nas_code') != $selected_nascode) {
                return [
                    400,
                    [
                        'message' => [
                            'en' => 'Incorrect matching between nascode and mobile phone',
                            'th' => 'Incorrect matching between nascode and mobile phone',
                        ],
                    ],
                ];
            }
        }

        $request_token_parameter['skip_cache'] = "true";

        $lrequest->replace($request_token_parameter);
        $is_first = true;
        if (count($lrequest->all()) > 0 && $method == "get") {
            if ($is_first) {
                $url .= '?';
                $is_first = false;
            }
            foreach ($lrequest->all() as $key => $value) {
                $url .= $key . '=' . $value . '&';
            }
        }

        $content = GuzzleService::postGuzzleRequest(
            $url,
            $method,
            $lrequest,
            $header,
            env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
        );

        $tmp_decoded_content = json_decode($content[1], true);
        if (isset($content[1]) && isset($tmp_decoded_content["data"]["message"])) {
            $tmp_decoded_content["message"] = [
                "en" => $tmp_decoded_content["data"]["message"],
                "th" => $tmp_decoded_content["data"]["message"],
            ];
            $content[1] = json_encode($tmp_decoded_content);
        }

        return $content;
    }

    public static function getHoroscopes($url, $method, $lrequest, $header)
    {
        $header = [
            "x-api-auth" => env("X_API_AUTH", false),
        ];
        $method = "get";

        $tmp_lrequest = $lrequest->all();
        $url          = "truemoveh/horoscopes";

        $content = GuzzleService::postGuzzleRequest(
            $url,
            $method,
            $lrequest,
            $header,
            env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
        );

        $tmp_decoded_content = json_decode($content[1], true);
        if (isset($content[1]) && isset($tmp_decoded_content["data"]["message"])) {
            $tmp_decoded_content["message"] = [
                "en" => $tmp_decoded_content["data"]["message"],
                "th" => $tmp_decoded_content["data"]["message"],
            ];
            $content[1] = json_encode($tmp_decoded_content);
        }

        return $content;
    }

    public static function getProductVerifySimPostpaid($url, $method, $lrequest, $header)
    {
        $header = [
            "x-api-auth" => env("X_API_AUTH", false),
        ];
        $method = "get";

        $tmp_lrequest = $lrequest->all();

        $content = GuzzleService::postGuzzleRequest(
            $url,
            $method,
            $lrequest,
            $header,
            env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
        );

        $tmp_decoded_content = json_decode($content[1], true);
        if (isset($content[1]) && isset($tmp_decoded_content["data"]["message"])) {
            $tmp_decoded_content["message"] = [
                "en" => $tmp_decoded_content["data"]["message"],
                "th" => $tmp_decoded_content["data"]["message"],
            ];
            $content[1] = json_encode($tmp_decoded_content);
        }

        return $content;
    }

    public static function getConfigAllowSelling($url, $method, $lrequest, $header)
    {
        $header = [
            "x-api-auth" => env("X_API_AUTH", false),
        ];
        $method = "get";
        $url    = "merchant/configs";

        $request_token_parameter['section'] = "wemall";
        $request_token_parameter['key']     = "truemoveh_sim_allow_selling";

        $lrequest->replace($request_token_parameter);
        $is_first = true;
        if (count($lrequest->all()) > 0 && $method == "get") {
            if ($is_first) {
                $url .= '?';
                $is_first = false;
            }
            foreach ($lrequest->all() as $key => $value) {
                $url .= $key . '=' . $value . '&';
            }
        }

        $content = GuzzleService::postGuzzleRequest(
            $url,
            $method,
            $lrequest,
            $header,
            env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
        );

        $tmp_decoded_content = json_decode($content[1], true);
        if (isset($content[1]) && isset($tmp_decoded_content["data"]["message"])) {
            $tmp_decoded_content["message"] = [
                "en" => $tmp_decoded_content["data"]["message"],
                "th" => $tmp_decoded_content["data"]["message"],
            ];
            $content[1] = json_encode($tmp_decoded_content);
        }

        return $content;
    }

    public static function getSearchPackage($url, $method, $lrequest, $header)
    {
        $header = [
            "x-api-auth" => env("X_API_AUTH", false),
        ];

        $method = "get";
        $url    = "truemoveh/package/search";

        foreach ($lrequest->all() as $key => $value) {
            $request_token_parameter[$key] = $value;
        }

        $request_token_parameter['section']     = "wemall";
        $request_token_parameter['source_type'] = "sim";

        $token = $lrequest->header('tmvh-token');

        if (!isset($request_token_parameter['limit'])) {
            $request_token_parameter['limit'] = "50";
            if (!empty($token)) {
                $request_token_parameter['limit'] = "1000";
            }
        }

        if (isset($request_token_parameter['sim_type']) && $request_token_parameter['sim_type'] == "family_sim_blackcard") {
            $content_get_product_id_config = App('App\Http\Controllers\APIController')->getProductIdConfig($lrequest);
            if (empty($content_get_product_id_config) || $content_get_product_id_config[0] > 200) {
                return $content_get_product_id_config;
            }
            $original_sim_type = "family_sim_blackcard";

            $tmp_content_get_product_id_config = $content_get_product_id_config[1];
            if (isset($tmp_content_get_product_id_config["family_black_truecard"])) {
                foreach ($tmp_content_get_product_id_config["family_black_truecard"] as $family_black_truecard_key => $family_black_truecard_item) {
                    $family_black_truecard_product_id_without_l = substr($family_black_truecard_key, 1);
                    $request_token_parameter['product_id']      = $family_black_truecard_product_id_without_l;
                    $request_token_parameter['sim_type']        = "all";
                    break;
                }
            }
        }

        $lrequest->replace($request_token_parameter);
        $is_first = true;
        if (count($lrequest->all()) > 0 && $method == "get") {
            if ($is_first) {
                $url .= '?';
                $is_first = false;
            }
            foreach ($lrequest->all() as $key => $value) {
                if (gettype($value) != "array") {
                    $url .= $key . '=' . $value . '&';
                } else {
                    foreach ($value as $v) {
                        $url .= $key . '[]=' . $v . '&';
                    }
                }
            }
        }

        if (count($lrequest->all()) > 0 && $method == "get") {
            if ($is_first) {
                $url .= '?';
                $is_first = false;
            }
            foreach ($lrequest->all() as $key => $value) {
                if (gettype($value) != "array") {
                    $url .= $key . '=' . $value . '&';
                } else {
                    foreach ($value as $v) {
                        $url .= $key . '[]=' . $v . '&';
                    }
                }
            }
        }

        $content = GuzzleService::postGuzzleRequest(
            $url,
            $method,
            $lrequest,
            $header,
            env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
        );

        $tmp = json_decode($content[1], true);

        //get all as an Associate Array
        if (empty(array_get($request_token_parameter, 'product_id')) && empty(array_get($request_token_parameter, 'all'))) {
            $nas_code_exception_list = ConfigService::getExceptionPackages();
            if (isset($tmp["data"]["record"])) {
                foreach ($tmp["data"]["record"] as $key => $value) {
                    if (isset($nas_code_exception_list[$value["nas_code"]]) || isset($nas_code_exception_list[$value["product_id"]])) {
                        unset($tmp["data"]["record"][$key]);
                    }
                }
            }
        }

        if (isset($tmp["data"]["record"]) && $content[0] < 400) {
            $tmp["data"]["record"] = array_values($tmp["data"]["record"]);
        } else {
            $tmp_decoded_content["message"] = [
                "en" => "data not found, please try again",
                "th" => "ไม่พบข้อมูล กรุณาลองทำรายการอีกครั้ง",
            ];
            $content[1] = json_encode($tmp_decoded_content);
        }

        // check token
        $type = '';
        if (!empty($token)) {
            $aes_wecamp_result             = WeOmniService::getAesWecamp($token);
            $type                          = array_get($aes_wecamp_result, '1.type');
            $tmp_explode_aes_wecamp_result = explode('|', \Arr::get($aes_wecamp_result, '1.original_plaintext'));

            $company_group = \Arr::get($tmp_explode_aes_wecamp_result, '1');
            $user_type     = \Arr::get($tmp_explode_aes_wecamp_result, '2');

            if (in_array(strtoupper($user_type), ["E", "F"])) {
                // add special type for filter
                $type = "ff-$user_type";

                if (!empty($company_group)) {
                    $type .= "-$company_group";
                }
            }
        }

        // filter sim
        $epp_redis = Redis::get('epp-sim:package');
        if (!empty($epp_redis)) {
            $epp_data = json_decode($epp_redis, true);

            $record   = [];
            $packages = Arr::get($tmp, 'data.record', []);

            if (!empty($type)) {
                $epp_data = Arr::get($epp_data, $type, []);

                foreach ($packages as $package) {
                    $id = Arr::get($package, 'nas_code');
                    if (in_array($id, $epp_data)) {
                        $record[] = $package;
                    }
                }
            } else {
                $epp_data = array_merge(...array_values($epp_data));

                foreach ($packages as $package) {
                    $id = Arr::get($package, 'nas_code');
                    if (!in_array($id, $epp_data)) {
                        $record[] = $package;
                    }
                }
            }

            $tmp['data']['record'] = $record;
        }

        $content[1] = json_encode($tmp);

        $tmp_decoded_content = json_decode($content[1], true);
        if (isset($content[1]) && isset($tmp_decoded_content["data"]["message"])) {
            $tmp_decoded_content["message"] = [
                "en" => $tmp_decoded_content["data"]["message"],
                "th" => $tmp_decoded_content["data"]["message"],
            ];
            $content[1] = json_encode($tmp_decoded_content);
        }

        return $content;
    }

    public static function getPortalContentBanner($url, $method, $lrequest, $header)
    {
        $header = [
            "Content-Type" => "application/json",
            "x-api-auth"   => env("X_API_AUTH", false),
        ];

        $method = "get";
        $url    = "wportal/content";

        foreach ($lrequest->all() as $key => $value) {
            $request_token_parameter[$key] = $value;
        }

        $shop_campaign = [];
        $slug          = array_get($lrequest->all(), 'shop', false);
        if ($slug) {
            $shop_campaign = self::getCampaignIdBySlug($slug);
        }
        $banner_id = array_get($shop_campaign, 'cms_banner', 'banner-truemoveh-online-store');

        $request_token_parameter['section']   = "wemall";
        $request_token_parameter['available'] = "true";
        $request_token_parameter['code']      = $banner_id;
        $request_token_parameter['fields']    = "sections(contents(id,title,slug,description,custom_fields,banner,link))";

        $lrequest->replace($request_token_parameter);
        $is_first = true;
        if (count($lrequest->all()) > 0 && $method == "get") {
            if ($is_first) {
                $url .= '?';
                $is_first = false;
            }
            foreach ($lrequest->all() as $key => $value) {
                $url .= $key . '=' . $value . '&';
            }
        }

        $content = GuzzleService::postGuzzleRequest(
            $url,
            $method,
            $lrequest,
            $header,
            env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
        );

        $tmp_decoded_content = json_decode($content[1], true);
        if (isset($content[1]) && isset($tmp_decoded_content["data"]["message"])) {
            $tmp_decoded_content["message"] = [
                "en" => $tmp_decoded_content["data"]["message"],
                "th" => $tmp_decoded_content["data"]["message"],
            ];
            $content[1] = json_encode($tmp_decoded_content);
        }

        return $content;
    }

    public static function getPricePlanList($url, $method, $lrequest, $header)
    {
        $header = [
            "x-api-auth" => env("X_API_AUTH", false),
        ];

        $method = "get";
        $url    = "truemoveh/price-plan";

        foreach ($lrequest->all() as $key => $value) {
            $request_token_parameter[$key] = $value;
        }

        $is_first = true;
        if (count($lrequest->all()) > 0 && $method == "get") {
            if ($is_first) {
                $url .= '?';
                $is_first = false;
            }
            foreach ($lrequest->all() as $key => $value) {
                if (gettype($value) != "array") {
                    $url .= $key . '=' . $value . '&';
                } else {
                    foreach ($value as $v) {
                        $url .= $key . '[]=' . $v . '&';
                    }
                }
            }
        }

        $content = GuzzleService::postGuzzleRequest(
            $url,
            $method,
            $lrequest,
            $header,
            env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
        );

        $tmp_decoded_content = json_decode($content[1], true);
        if (isset($content[1]) && isset($tmp_decoded_content["data"]["message"])) {
            $tmp_decoded_content["message"] = [
                "en" => $tmp_decoded_content["data"]["message"],
                "th" => $tmp_decoded_content["data"]["message"],
            ];
            $content[1] = json_encode($tmp_decoded_content);
        }

        return $content;
    }

    public static function getPricePlanSearch($url, $method, $lrequest, $header)
    {
        // [TODO] add tmvh-token header to verify token
        $tmvh_token = array_get($header, 'tmvh-token.0', '');
        $header     = [
            "x-api-auth" => env("X_API_AUTH", false),
        ];
        $method = "get";
        $url    = "truemoveh/price-plan/search";

        foreach ($lrequest->all() as $key => $value) {
            $request_token_parameter[$key] = $value;
        }

        $product_id = array_get($request_token_parameter, 'product_id', '');
        $nas_code   = array_get($request_token_parameter, 'nas_code', '');
        $cart_type  = '';
        $type       = '';

        if (!empty($tmvh_token)) {
            $aes_wecamp_result = WeOmniService::getAesWecamp($tmvh_token);
            $cart_type         = array_get($aes_wecamp_result, '1.cart_type');
            $type              = array_get($aes_wecamp_result, '1.type');
        }

        $request_token_parameter["section"] = "wemall";
        if (!isset($request_token_parameter["limit"])) {
            $request_token_parameter["limit"] = "50";
        }

        $lrequest->replace($request_token_parameter);
        $is_first = true;
        if (count($lrequest->all()) > 0 && $method == "get") {
            if ($is_first) {
                $url .= '?';
                $is_first = false;
            }
            foreach ($lrequest->all() as $key => $value) {
                if (gettype($value) != "array") {
                    $url .= $key . '=' . $value . '&';
                } else {
                    foreach ($value as $v) {
                        $url .= $key . '[]=' . $v . '&';
                    }
                }
            }
        }

        $content = GuzzleService::postGuzzleRequest(
            $url,
            $method,
            $lrequest,
            $header,
            env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
        );

        $tmp_decoded_content = json_decode($content[1], true);

        $tmp_decoded_content      = json_decode($content[1], true);
        $tmp_nas_code_filter_list = Redis::get('truestore:typhoon_filter_sim_nascode:product_id:' . $product_id . ':redis_data');

        if (!empty($tmp_nas_code_filter_list)) {
            $tmp_nas_code_filter_list = json_decode($tmp_nas_code_filter_list, true);
            $is_check_nas_code        = false;

            if (empty($type)) {
                $tmp_nas_code_content = array_values($tmp_nas_code_filter_list);
                $tmp_nas_codes_list   = array_column($tmp_nas_code_content, 'nas_code');
                $tmp_nas_codes        = array_merge(...$tmp_nas_codes_list);
                $is_check_nas_code    = !in_array($nas_code, $tmp_nas_codes);
            } else {
                $type              = empty($cart_type) ? $type : $type . '-' . strtolower($cart_type);
                $tmp_nas_codes     = array_get(array_get($tmp_nas_code_filter_list, $type), 'nas_code', []);
                $is_check_nas_code = in_array($nas_code, $tmp_nas_codes);
            }

            if (!$is_check_nas_code) {
                $tmp_decoded_content["status_code"] = 404;
                $tmp_decoded_content["status_txt"]  = "Not Found";
                $tmp_decoded_content["data"]        = [
                    "message" => "Data not found",
                ];
                $content[0] = 404;
                $content[1] = json_encode($tmp_decoded_content);
            }
        }

        if (isset($content[1]) && isset($tmp_decoded_content["data"]["message"])) {
            $tmp_decoded_content["message"] = [
                "en" => $tmp_decoded_content["data"]["message"],
                "th" => $tmp_decoded_content["data"]["message"],
            ];
            $content[1] = json_encode($tmp_decoded_content);
        }

        return $content;
    }

    public static function putHoldNumber($url, $method, $lrequest, $header)
    {
        $lrequest_1 = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter               = [];
        $request_parameter["mobiles"]    = explode("/", $url)[2];
        $request_parameter["available"]  = "true";
        $request_parameter["skip_cache"] = "true";
        $request_parameter["nas_code"]   = $lrequest->input('nas_code');

        $lrequest_1->replace($request_parameter);

        $header  = [];
        $content = WlsService::getMobileAvailable("truemoveh/mobiles", "get", $lrequest_1, $header);

        if (isset($content[2]["error"]["message"]) && $content[2]["error"]["code"] == 404) {
            return [400, ["message" => ["th" => "หมายเลขนี้ถูกจองแล้ว หรือไม่มีอยู่ในระบบ", "en" => "this number got reserved or not exist in the system"]]];
        }

        $header = [
            "Content-Type" => "application/json",
            "x-api-auth"   => env("X_API_AUTH", false),
        ];

        $method = "put";

        $request_token_parameter = [];

        $hold_time_minutes                            = Redis::get('hold_time_minutes') ?: 120;
        $request_token_parameter["hold_expired_date"] = gmdate("Y-m-d H:i:s", strtotime("+ 7 hour + $hold_time_minutes min"));
        $lrequest->replace($request_token_parameter);

        $content = GuzzleService::postGuzzleRequest(
            $url,
            $method,
            $lrequest,
            $header,
            env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
        );

        $tmp_decoded_content = json_decode($content[1], true);
        if (isset($content[1]) && isset($tmp_decoded_content["data"]["message"])) {
            $tmp_decoded_content["message"] = [
                "en" => $tmp_decoded_content["data"]["message"],
                "th" => $tmp_decoded_content["data"]["message"],
            ];
            $content[1] = json_encode($tmp_decoded_content);
        } else {
            if (!empty(array_get($request_parameter, 'nas_code'))) {
                Redis::set('mobile_hold:' . array_get($request_parameter, 'mobiles') . ':data', array_get($request_parameter, 'nas_code'), 'EX', 60 * $hold_time_minutes);
            }
        }

        return $content;
    }

    public static function putMobilesBatch($url, $method, $lrequest, $header)
    {
        $header = [
            "Content-Type" => "application/json",
            "x-api-auth"   => env("X_API_AUTH", false),
        ];
        $method = "put";
        $url    = "truemoveh/mobiles/batch";

        $content = GuzzleService::postGuzzleRequest(
            $url,
            $method,
            $lrequest,
            $header,
            env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
        );

        $tmp_decoded_content = json_decode($content[1], true);
        if (isset($content[1]) && isset($tmp_decoded_content["data"]["message"])) {
            $tmp_decoded_content["message"] = [
                "en" => $tmp_decoded_content["data"]["message"],
                "th" => $tmp_decoded_content["data"]["message"],
            ];
            $content[1] = json_encode($tmp_decoded_content);
        }

        return $content;
    }

    public static function putUpdateOrderPayment($url, $method, $lrequest, $header)
    {
        $header = [
            "Content-Type" => "application/json",
            "x-api-auth"   => env("X_API_AUTH", false),
        ];
        $method = "put";

        foreach ($lrequest->all() as $key => $value) {
            $request_token_parameter[$key] = $value;
        }

        $request_token_parameter["date_time"] = gmdate("Y-m-d H:i:s", strtotime("+ 7 hour"));
        $lrequest->replace($request_token_parameter);

        $content = GuzzleService::postGuzzleRequest(
            $url,
            $method,
            $lrequest,
            $header,
            env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
        );

        $tmp_decoded_content = json_decode($content[1], true);
        if (isset($content[1]) && isset($tmp_decoded_content["data"]["message"])) {
            $tmp_decoded_content["message"] = [
                "en" => $tmp_decoded_content["data"]["message"],
                "th" => $tmp_decoded_content["data"]["message"],
            ];
            $content[1] = json_encode($tmp_decoded_content);
        }

        return $content;
    }

    public static function putClearHoldExpireTime($url, $method, $lrequest, $header)
    {
        $header = [
            "Content-Type" => "application/json",
            "x-api-auth"   => env("X_API_AUTH", false),
        ];
        $method = "put";

        $content = GuzzleService::postGuzzleRequest(
            $url,
            $method,
            $lrequest,
            $header,
            env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
        );

        $tmp_decoded_content = json_decode($content[1], true);
        if (isset($content[1]) && isset($tmp_decoded_content["data"]["message"])) {
            $tmp_decoded_content["message"] = [
                "en" => $tmp_decoded_content["data"]["message"],
                "th" => $tmp_decoded_content["data"]["message"],
            ];
            $content[1] = json_encode($tmp_decoded_content);
        }

        return $content;
    }

    public static function postRegisterCampaignVlearn($url, $method, $lrequest, $header)
    {
        $header = [
            "Content-Type"  => "application/json",
            "x-api-auth"    => env("X_API_AUTH_VLEARN_VERIFY", false),
            "Authorization" => "Basic " . env("BASIC_AUTH_VLEARN_VERIFY", false),
        ];
        $method = "post";
        $url    = "register-campaign/mpf/mcs/api/s/mcsapi/campaign";

        $request_token_parameter = [];
        foreach ($lrequest->all() as $key => $value) {
            $request_token_parameter[$key] = $value;
        }
        if (isset($request_token_parameter["name"])) {
            $tmp_name = $request_token_parameter["name"];
            unset($request_token_parameter["name"]);
        }
        if (isset($request_token_parameter["university"])) {
            $tmp_university = $request_token_parameter["university"];
            unset($request_token_parameter["university"]);
        }

        $request_token_parameter['transaction-id'] = "a44f647f-c71d-4615-bea8-1b0";
        $request_token_parameter['campaign']       = "C0007";
        $request_token_parameter['command']        = "register";

        $lrequest->replace($request_token_parameter);

        $content = GuzzleService::postGuzzleRequest(
            $url,
            $method,
            $lrequest,
            $header,
            env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
        );
        if (($content[0] == 200 || $content[0] == 202)) {
            $content[1] = json_encode(["is_pass" => true]);

            $url          = "truemoveh/verify/log";
            $method       = "post";
            $tmp_lrequest = new \Illuminate\Http\Request();
            $tmp_lrequest->setMethod(strtoupper($method));
            $request_parameter = [];
            if (isset($tmp_name)) {
                $request_token_parameter["name"] = $tmp_name;
            }
            $request_parameter["name"]    = (isset($request_token_parameter["name"]) && !empty($request_token_parameter["name"])) ? $request_token_parameter["name"] : "john doe";
            $request_parameter["id_card"] = base64_encode($request_token_parameter["certificate-number"]);
            $request_parameter["mobile"]  = $request_token_parameter["msisdn"];

            if (isset($tmp_university)) {
                $request_parameter["organization"] = $tmp_university;
            } else {
                $request_parameter["organization"] = $request_token_parameter["channel"];
            }

            $request_parameter["verify_type"] = "University";
            $tmp_lrequest->replace($request_parameter);
            $header                      = [];
            $content_save_log_university = WlsService::postSaveLogUniversity($url, $method, $tmp_lrequest, $header);
            $check_data                  = json_decode($content_save_log_university[1], true);
            if (!($content_save_log_university[0] < 300 && isset($check_data["name"]) &&
                isset($check_data["id_card"]) &&
                isset($check_data["mobile"]) &&
                isset($check_data["organization"]) &&
                isset($check_data["verify_type"]) &&
                !isset($content_save_log_university[2]["error"]))
            ) {
                $errors = ["message" => ["en" => "data still not saved, please try again", "th" => "การบันทึกข้อมูลยังไม่สมบูรณ์ โปรดลองใหม่อีกครั้ง"], "is_pass" => false];

                return [500, $errors];
            }
        }

        $tmp_decoded_content = json_decode($content[1], true);
        if (isset($content[1]) && isset($tmp_decoded_content["result"]["display-text-th"])) {
            $tmp_decoded_content["message"] = ["en" => "error", "th" => "เกิดข้อผิดพลาด"];

            $tmp_decoded_content["is_pass"] = false;
            if (isset($tmp_decoded_content["result"]["display-text-th"])) {
                $tmp_decoded_content["message"]["th"] = $tmp_decoded_content["result"]["display-text-th"];
            }
            if (isset($tmp_decoded_content["result"]["display-text-en"])) {
                $tmp_decoded_content["message"]["en"] = $tmp_decoded_content["result"]["display-text-en"];
            }

            $content[1] = $tmp_decoded_content;
        }

        return $content;
    }

    public static function postBundleCampaignsVerify($url, $method, $lrequest, $header)
    {
        $header = [
            "Content-Type"       => "application/json",
            "WEB_METHOD_CHANNEL" => "KYC_WEMALL",
            "apikey"             => env("KYC_WEMALL_API_KEY", false),
            "x-api-auth"         => env("X_API_AUTH_VLEARN_VERIFY", false),
        ];
        $url    = "truemoveh/bundle-campaigns/verify";
        $method = "post";

        $request_token_parameter = [];
        // start of tec-1504 step get thai id from int
        if ($lrequest->has('mobile') && !$lrequest->has('thai_id')) {
            $mobile_number                         = $lrequest->input('mobile');
            $step_name                             = "CLM_2";
            $tmp_lrequest                          = new \Illuminate\Http\Request();
            $tmp_lrequest['primResourceValue']     = $mobile_number;
            $tmp_lrequest['businessLine']          = "MOBILE";
            $tmp_check_result[$step_name]          = ClmService::getBillingProfileInfo($tmp_lrequest);
            $tmp_check_result[$step_name]["body"]  = json_decode($tmp_check_result[$step_name][1], true);
            $is_enter_mini_step_result[$step_name] = true;

            if ($tmp_check_result[$step_name][0] >= 300) {
                $body                    = ["message" => ["en" => "Sorry! You are not able to choose to buy a product.", "th" => "ขออภัยค่ะ คุณไม่สามารถรับสิทธิพิเศษนี้"], "is_pass" => false, "tmp_check_mini_step_result" => $tmp_check_mini_step_result, "is_enter_mini_step_result" => $is_enter_mini_step_result, "tmp_check_result" => $tmp_check_result];
                $body["reason_not_pass"] = "unable to contact CLM_2 server";

                return [400, $body];
            }
            if (isset($tmp_check_result[$step_name]["body"]["getBillingProfileInfoResponse"]
                ["return"]["billingProfileInfo"]["accountCustomerInfo"]["customer"]["certificateNumber"])
            ) {
                $int_thai_id = $tmp_check_result[$step_name]["body"]["getBillingProfileInfoResponse"]
                    ["return"]["billingProfileInfo"]["accountCustomerInfo"]["customer"]["certificateNumber"];
            } else {
                $body                         = ["message" => ["en" => "Not Found Thai ID", "th" => "ไม่พบเลขบัตรประชาชน"], "is_pass" => false, "tmp_check_result" => $tmp_check_result];
                $body["is_not_found_thai_id"] = true;

                return [400, $body];
            }
            $lrequest['thai_id'] = $int_thai_id;
        }
        // end of tec-1504 step get thai id from int

        foreach ($lrequest->all() as $key => $value) {
            $tmp_value = $value;
            if (($key == "mobile" || $key == "thai_id") && strlen($value) < 14) {
                $pwd       = env("PWD_ENCRYPT_FUNCTION_DEVICE_BUNDLE");
                $tmp_value = WlsService::postEncryptDeviceBundle($pwd, $value);
            } elseif ($key == "check_bundle_again" && $value == "true" && !($lrequest->has('tenor') && $lrequest->has('down_payment_rate'))) {
                $request_token_parameter['have_group'] = true;
            } elseif ($key == "tmvh_token" && $value && !($lrequest->has('tenor') && $lrequest->has('down_payment_rate'))) {
                $aes_wecamp_result                     = WeOmniService::getAesWecamp($value);
                $request_token_parameter['group_name'] = array_get($aes_wecamp_result, '1.type');
            } elseif ($key == "proposition_nas_code_verify" && $value) {
                $request_token_parameter['proposition_nas_code_verify'] = $value;
            }

            $request_token_parameter[$key] = $tmp_value;
        }

        $lrequest->replace($request_token_parameter);

        $content = GuzzleService::postGuzzleRequest(
            $url,
            $method,
            $lrequest,
            $header,
            env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
        );
        LogService::writeServiceLog(
            "verify_rc_bundle_campaign_verify_step_h",
            json_encode_unicode($lrequest->all()),
            json_encode_unicode($content),
            (new \DateTime())->format('d/m/Y H:i:s')
        );

        $tmp_decoded_content = json_decode($content[1], true);
        if (isset($content[1]) && isset($tmp_decoded_content["data"]["message"])) {
            $tmp_decoded_content["message"] = [
                "en" => $tmp_decoded_content["data"]["message"],
                "th" => $tmp_decoded_content["data"]["message"],
            ];
            $content[1] = json_encode($tmp_decoded_content);
        }

        // start of hotfix select rc
        if (isset($tmp_decoded_content["data"])) {
            $passed_output_H = $tmp_decoded_content["data"];
        }

        if (isset($tmp_decoded_content["data"]) && $lrequest->has('cart_hash') && gettype($lrequest->input('cart_hash')) == "string" && !empty($lrequest->input('cart_hash'))
            && $lrequest->has('product_id')
        ) {
            $cart_hash = $lrequest->input('cart_hash');
            $cart_data = Redis::get("store:cart_id:$cart_hash");

            $check_cart_data = json_decode($cart_data, true);

            if (!(!empty($check_cart_data) && is_array($check_cart_data) && isset($check_cart_data["discount"]))) {
                $check_cart_data = ["discount" => []];
            }

            foreach ($passed_output_H as $key => $value) {
                if (is_array($value)) {
                    $value["product_id"] = $lrequest->input('product_id');

                    $check_cart_data['discount'][$value["product_code"]] = $value;
                }
            }
            Redis::set('store:cart_id:' . $cart_hash, json_encode(["discount" => $check_cart_data['discount']]));
        }
        // end of hotfix select rc

        return $content;
    }

    public static function getFilterLvC($url, $method, $lrequest, $header)
    {
        $header = [
            "Content-Type" => "application/json",
            "x-api-auth"   => env("X_API_AUTH_VLEARN_VERIFY", false),
        ];

        $method = "get";
        $url    = "search-v2/filters";

        foreach ($lrequest->all() as $key => $value) {
            $request_token_parameter[$key] = $value;
        }

        $shop_campaign = [];
        $slug          = array_get($lrequest->all(), 'shop', false);
        if ($slug) {
            $shop_campaign = self::getCampaignIdBySlug($slug);
        }

        $store_ids   = array_get($shop_campaign, 'store_ids', env("STORE_ID_LV_C", "L941527,L949848"));
        $campaign_id = array_get($shop_campaign, 'campaign_id', env("CAMPAIGN_ID_LV_C", false));

        $request_token_parameter['section']     = "wemall";
        $request_token_parameter['store_ids']   = $store_ids;
        $request_token_parameter['campaign_id'] = $campaign_id;

        $lrequest->replace($request_token_parameter);
        $is_first = true;
        if (count($lrequest->all()) > 0 && $method == "get") {
            if ($is_first) {
                $url .= '?';
                $is_first = false;
            }
            foreach ($lrequest->all() as $key => $value) {
                if (gettype($value) != "array") {
                    $url .= $key . '=' . $value . '&';
                } else {
                    foreach ($value as $v) {
                        $url .= $key . '[]=' . $v . '&';
                    }
                }
            }
        }

        $content = GuzzleService::postGuzzleRequest(
            $url,
            $method,
            $lrequest,
            $header,
            env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
        );

        $tmp_decoded_content = json_decode($content[1], true);
        if (isset($content[1]) && isset($tmp_decoded_content["data"]["message"])) {
            $tmp_decoded_content["message"] = [
                "en" => $tmp_decoded_content["data"]["message"],
                "th" => $tmp_decoded_content["data"]["message"],
            ];
            $content[1] = json_encode($tmp_decoded_content);
        }

        return $content;
    }

    public static function getSearchProductCampaign($url, $method, $lrequest, $header)
    {
        $header = [
            "Content-Type" => "application/json",
            "x-api-auth"   => env("X_API_AUTH_VLEARN_VERIFY", false),
        ];

        $method = "get";
        $url    = "search/product";

        $shop_campaign = [];
        $slug          = array_get($lrequest->all(), 'shop', false);
        if ($slug) {
            $shop_campaign = self::getCampaignIdBySlug($slug);
        }
        $campaign_id = array_get($lrequest->all(), 'campaign_id', array_get($shop_campaign, 'campaign_id', env('CAMPAIGN_ID_LV_C', false)));

        $limit = array_get($lrequest->all(), 'limit', false);
        if ($limit) {
            $request_token_parameter['limit'] = $limit;
        }

        $skip_order_out_of_stock = array_get($lrequest->all(), 'skip_order_out_of_stock', false);
        if (!$skip_order_out_of_stock) {
            $request_token_parameter['order_out_of_stock'] = 1;
        }

        $request_token_parameter['section']                 = "wemall";
        $request_token_parameter['campaign_product_status'] = "public";
        $request_token_parameter['ignore_exclude_store']    = "true";
        $request_token_parameter['resize']                  = '400,400,crop';
        $request_token_parameter['use_cdn']                 = '1';
        $request_token_parameter['campaign_id']             = $campaign_id; // <--- become first instead (become default value)
        $request_token_parameter['use_stock']               = "false";
        $request_token_parameter['order']                   = "quantity";
        $request_token_parameter['sort']                    = "desc";

        if (array_key_exists('order', $lrequest->all())) {
            $request_token_parameter['order'] = array_get($lrequest->all(), 'order');
        }

        if (array_key_exists('sort', $lrequest->all())) {
            $request_token_parameter['sort'] = array_get($lrequest->all(), 'sort');
        }

        foreach ($lrequest->all() as $key => $value) {
            $request_token_parameter[$key] = $value; // become overwriter instead
        }

        $is_enable_not_include_url_query = false;
        if (isset($request_token_parameter["is_enable_not_include_url_query"])) {
            $is_enable_not_include_url_query = true;
            unset($request_token_parameter["is_enable_not_include_url_query"]);
        }

        $lrequest->replace($request_token_parameter);
        
        if (!$is_enable_not_include_url_query) {
            $is_first = true;
            if (count($lrequest->all()) > 0 && $method == "get") {
                if ($is_first) {
                    $url .= '?';
                    $is_first = false;
                }

                foreach ($lrequest->all() as $key => $value) {
                    if (gettype($value) != "array") {
                        $url .= $key . '=' . $value . '&';
                    } else {
                        foreach ($value as $v) {
                            $url .= $key . '[]=' . $v . '&';
                        }
                    }
                }
            }
        }

        $content = GuzzleService::postGuzzleRequest(
            $url,
            $method,
            $lrequest,
            $header,
            env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
        );

        if (isset(json_decode($content[1], true)["data"]["record"])) {
            $tmp = $content[1];
            $tmp = json_decode($tmp, true);

            // check token
            $type = '';
            if (!empty($lrequest->header('tmvh-token'))) {
                $aes_wecamp_result = WeOmniService::getAesWecamp($lrequest->header('tmvh-token'));
                $type              = array_get($aes_wecamp_result, '1.type');
            }

            // filter sim
            $epp_redis = Redis::get('epp-sim:product');
            if (!empty($epp_redis)) {
                $epp_data = json_decode($epp_redis, true);

                $record   = [];
                $products = Arr::get($tmp, 'data.record', []);

                $epp_cat = Redis::get('epp-cat');
                $cat_id  = $lrequest->get('plaza_category_id');

                if (!empty($type) && $epp_cat === $cat_id) {
                    $epp_data = Arr::get($epp_data, $type, []);

                    foreach ($products as $product) {
                        $id = Arr::get($product, 'id');
                        if (in_array($id, $epp_data)) {
                            $record[] = $product;
                        }
                    }
                } else {
                    $epp_data = array_merge(...array_values($epp_data));

                    foreach ($products as $product) {
                        $id = Arr::get($product, 'id');
                        if (!in_array($id, $epp_data)) {
                            $record[] = $product;
                        }
                    }
                }

                $tmp['data']['record'] = $record;
            }

            // start of fix TEC-19 add discount coupon
            $product_id_list_str                              = implode(',', array_column($tmp["data"]["record"], "id"));
            $json_decode_tmp_content_get_coupon_by_product_id = CouponService::getCouponByProductId($product_id_list_str, 'portal_lv_c');

            if (isset($json_decode_tmp_content_get_coupon_by_product_id["data"]["record"])) {
                $tmp["data"]["coupon_data_from_bff"] = $json_decode_tmp_content_get_coupon_by_product_id["data"]["record"];
            }
            // end of fix TEC-19 add discount coupon

            if (Redis::get('toggle-config:json:discount-level-c') == 1 && !$lrequest->get('bypass_discount')) {
                $tmp = DiscountService::processDiscountLevelC($tmp, $lrequest->get('bench'), $lrequest->get('token'));
            }

            $tmp['data']['record'] = self::setProductFree($tmp);

            $tmp        = json_encode($tmp);
            $content[1] = $tmp;
        }

        return $content;
    }

    public static function setProductFree($data)
    {
        $records                = Arr::get($data, 'data.record');
        $config_product_iot     = Arr::get(ProductService::getConfigProductIot(), 'product_ids', []);
        $lv_c_free_prod_id_list = Redis::hgetall('truestore:lv_c_set_price_to_free:product_id_list:redis_data');

        foreach ($records as $key => $record) {
            $pid      = Arr::get($record, 'id');
            $iot_type = Arr::get($config_product_iot, "$pid.verify");

            if ((empty($iot_type) || $iot_type != 'truemoveh') && !array_key_exists($pid, $lv_c_free_prod_id_list)) {
                continue;
            }

            $records[$key]['price']     = '0';
            $records[$key]['price_min'] = '0';
        }

        return $records;
    }

    public static function postEncryptDeviceBundle($pwd, $data)
    {
        if (!$pwd) {
            return "";
        }
        $cipher      = '';
        $key[]       = '';
        $box[]       = '';
        $pwd_length  = strlen($pwd);
        $data_length = strlen($data);
        for ($i = 0; $i < 256; $i++) {
            $key[$i] = ord($pwd[$i % $pwd_length]);
            $box[$i] = $i;
        }
        for ($j = $i = 0; $i < 256; $i++) {
            $j       = ($j + $box[$i] + $key[$i]) % 256;
            $tmp     = $box[$i];
            $box[$i] = $box[$j];
            $box[$j] = $tmp;
        }
        for ($a = $j = $i = 0; $i < $data_length; $i++) {
            $a       = ($a + 1) % 256;
            $j       = ($j + $box[$a]) % 256;
            $tmp     = $box[$a];
            $box[$a] = $box[$j];
            $box[$j] = $tmp;
            $k       = $box[(($box[$a] + $box[$j]) % 256)];
            ((strlen(dechex(ord($data[$i]) ^ $k)) == 1) ? $Zero = "0" : $Zero = "");
            $cipher = $cipher . $Zero . dechex(ord($data[$i]) ^ $k);
        }

        return $cipher;
    }

    public static function getMaxDiscountProduct($url, $method, $lrequest, $header)
    {
        $url           = "truemoveh/bundle-campaigns/max-discount-product";
        $request_token = new \Illuminate\Http\Request();
        $request_token->setMethod('GET');
        $request_token_parameter = [];

        $header = [
            "Content-Type" => "application/x-www-form-urlencoded",
            "x-api-auth"   => env('X_API_AUTH', false),
        ];
        if (!$header['x-api-auth']) {
            $status_code = 500;
            $body        = 'wemall X_API_AUTH is not set';

            return ['is_get_token' => false, 'message' => $body];
        }

        $is_first = true;
        foreach ($lrequest->all() as $key => $value) {
            if (count($lrequest->all()) > 0) {
                if ($is_first) {
                    $url .= '?';
                    $is_first = false;
                }

                if (gettype($value) != "array") {
                    $url .= $key . '=' . $value . '&';
                } else {
                    foreach ($value as $v) {
                        $url .= $key . '[]=' . $v . '&';
                    }
                }
            }
        }
        $content = GuzzleService::postGuzzleRequest(
            $url,
            $method,
            $request_token,
            $header,
            env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
        ); // true id api

        return $content;
    }

    public static function postSaveLogUniversity($url, $method, $lrequest, $header)
    {
        $url                    = "truemoveh/verify/log";
        $header["x-api-auth"]   = env('X_API_AUTH', false);
        $header["Content-Type"] = "application/json";
        $content                = GuzzleService::postGuzzleRequest(
            $url,
            $method,
            $lrequest,
            $header,
            env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
        );

        return $content;
    }

    public static function getTrueBlackCardCheckBcStatus($url, $method, $lrequest, $header)
    {
        $url    = "true-black-card/checkBCStatus";
        $header = [
            "Content-Type" => "application/json",
            "x-api-auth"   => env('X_API_AUTH_VLEARN_VERIFY', false),
        ];
        $fixed_parameter_list            = [];
        $fixed_parameter_list['Channel'] = "HTTP";

        return WlsService::operateRequestAction($url, $method, $lrequest, $header, $fixed_parameter_list);
    }

    public static function operateRequestAction($url, $method, $lrequest, $header, $fixed_parameter_list)
    {
        $request_token = new \Illuminate\Http\Request();
        $request_token->setMethod(strtoupper($method));
        $request_token_parameter = $fixed_parameter_list;


        foreach ($lrequest->all() as $key => $value) {
            $request_token_parameter[$key] = $value;
        }

        $base_url = env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/');
        if (isset($fixed_parameter_list["base_url"])) {
            $base_url = $fixed_parameter_list["base_url"];
            unset($request_token_parameter["base_url"]);
        }

        $request_token->replace($request_token_parameter);

        $content = GuzzleService::postGuzzleRequest(
            $url,
            $method,
            $request_token,
            $header,
            $base_url
        );

        return $content;
    }

    public static function getTruecardStatus($url, $method, $lrequest, $header)
    {
        $fixed_parameter_list = [];
        $header               = [
            "Content-Type" => "application/json",
            "x-api-auth"   => env('X_API_AUTH', false),
        ];
        $fixed_parameter_list             = [];
        $fixed_parameter_list['idn_type'] = "TRUEID"; // idn_type  TMH, TRUEID
        $fixed_parameter_list['channel']  = "RPP";
        $fixed_parameter_list['section']  = "wemall";

        if ($lrequest->headers->has('Authorization') &&
            !empty(\Illuminate\Support\Facades\Request::header('Authorization')) &&
            isset(explode(' ', \Illuminate\Support\Facades\Request::header('Authorization'))[1])
        ) {
            $result_profile = App('App\Http\Controllers\APIController')->getProfileContent($lrequest);

            if (isset(json_decode($result_profile["body"], true)["data"]["user_token"])) {
                $user_token = json_decode($result_profile["body"], true)["data"]["user_token"];

                $url    = "account-app/cache_user";
                $method = "get";
                $header = [
                    "Content-Type" => "application/json",
                    "x-api-auth"   => env('X_API_AUTH', false),
                ];
                $fixed_parameter_list                 = [];
                $fixed_parameter_list['access_token'] = explode(' ', \Illuminate\Support\Facades\Request::header('Authorization'))[1]; // idn_type  TMH, TRUEID
                $fixed_parameter_list['key_cache']    = $user_token;

                $result_sso = WlsService::operateRequestAction($url, $method, $lrequest, $header, $fixed_parameter_list);

                $result_sso_user_accounts = [];
                if (isset($result_sso[1])) {
                    $result_sso_user_accounts = json_decode($result_sso[1], true);
                }

                $result_sso_user_accounts = array_get($result_sso_user_accounts, 'data.user_accounts', []);

                if (isset($result_sso_user_accounts[0]["user_name"])) {
                    $url    = "account-app/truecard/get-status";
                    $method = "post";
                    $header = [
                        "Content-Type" => "application/json",
                        "x-api-auth"   => env('X_API_AUTH', false),
                    ];
                    $fixed_parameter_list             = [];
                    $fixed_parameter_list['idn_type'] = "TRUEID"; // idn_type  TMH, TRUEID
                    $fixed_parameter_list['channel']  = "RPP";
                    $fixed_parameter_list['section']  = "wemall";

                    if (isset($result_sso_user_accounts) && gettype($result_sso_user_accounts) == "array") {
                        $array_column_user_accounts_data = array_column($result_sso_user_accounts, 'user_name', 'type');
                        if (isset($array_column_user_accounts_data["trueid"])) {
                            $fixed_parameter_list['customer_idn_no'] = $array_column_user_accounts_data["trueid"];
                        }
                    }
                }
            }
        }
        $result_truecard = WlsService::operateRequestAction($url, $method, $lrequest, $header, $fixed_parameter_list);

        return $result_truecard;
    }

    public static function postPromotionAllowAddCart($url, $method, $lrequest, $header)
    {
        $url    = "portal-v2/promotion";
        $header = [
            "Content-Type" => "application/json",
            "x-api-auth"   => env('X_API_AUTH_VLEARN_VERIFY', false)];
        $fixed_parameter_list            = [];
        $fixed_parameter_list['user_id'] = "0";
        $fixed_parameter_list['channel'] = "tmh-website";
        $fixed_parameter_list['section'] = "wemall";

        $toggle_store_data = PaymentMethodService::getTogglePaymentStoreAll();
        $config_store      = [];

        foreach ($toggle_store_data as $value) {
            $data = [
                'store_id'   => array_get($value, 'store_id'),
                'store_type' => array_get($value, 'store_type'),
            ];
            array_push($config_store, $data);
        }
        $fixed_parameter_list['config_store'] = $config_store;

        if (!$lrequest->has('hash')) {
            $fixed_parameter_list['hash'] = Str::random(40);
        }

        $product_id = $lrequest->input('product_id');
        $cart_hash  = $lrequest->input('hash');

        $result = WlsService::operateRequestAction($url, $method, $lrequest, $header, $fixed_parameter_list);

        if (Redis::exists('truestore:segment_cart:' . $cart_hash . ':' . $product_id . ':content')) {
            $data                                     = json_decode($result[1], true);
            $data['data']['allow_addcart']['product'] = false;
            $result[1]                                = json_encode($data);
        }

        if (!empty($lrequest->header('tmvh-token'))) {
            $json_decode_result = json_decode($result[1], true);
            if (is_array($json_decode_result)) {
                Redis::set('truestore:typhoon_cart_hash:' . array_get($json_decode_result, "data.hash") . ':encrypt_data', $lrequest->header('tmvh-token'));
            }
        }

        $tmp_lrequest                = new \Illuminate\Http\Request();
        $tmp_lrequest["section"]     = "wemall";
        $tmp_lrequest['channel']     = "tmh-website";
        $tmp_cart_data               = self::cartActionWlsWithSimMeta('wportal/cart/' . $cart_hash, 'get', $tmp_lrequest, []);
        $tmp_sku_check_list          = [];
        $is_paysmooth_exists_in_cart = false;
        $is_esim_exists_in_cart      = false;
        $allow_esim                  = true;

        $tmp_result_cart = [];
        if (isset($tmp_cart_data[1])) {
            $tmp_result_cart = json_decode($tmp_cart_data[1], true);
        }

        for ($store_index = 0;!empty(\Arr::get($tmp_result_cart, "data.record")) && $store_index < count(\Arr::get($tmp_result_cart, "data.record")); $store_index++) {
            $cart_products = \Arr::get($tmp_result_cart, "data.record.$store_index.products", []);
            $allow_esim    = empty($cart_products);

            foreach ($cart_products as $tmp_product) {
                $is_current_product_pay_smooth = \Arr::get($tmp_product, "meta.pay_smooth");
                if ($is_current_product_pay_smooth) {
                    $is_paysmooth_exists_in_cart = true;
                    break;
                }

                $is_esim = \Arr::get($tmp_product, 'meta.sim_source_type');
                if ($is_esim) {
                    $is_esim_exists_in_cart = true;
                    break;
                }
            }
            if ($is_paysmooth_exists_in_cart || $is_esim_exists_in_cart) {
                break;
            }
        }
        $tmp_result1_data   = json_decode($result[1], true);
        $allow_addcart_data = \Arr::get($tmp_result1_data, "data.allow_addcart");
        if (gettype($allow_addcart_data) == "array" && ($is_paysmooth_exists_in_cart || $is_esim_exists_in_cart)) {
            foreach ($allow_addcart_data as $tmp_key => $tmp_value) {
                \Arr::set($tmp_result1_data, "data.allow_addcart.$tmp_key", false);
            }
        }
        \Arr::set($tmp_result1_data, "data.allow_addcart.esim", $allow_esim);
        $result[1] = json_encode($tmp_result1_data);

        return $result;
    }

    public static function getBundleExisting($url, $method, $lrequest, $header)
    {
        $url    = "truemoveh/bundle-existing";
        $header = [
            "Content-Type"       => "application/json",
            "WEB_METHOD_CHANNEL" => "KYC_WEMALL",
            "apikey"             => env("KYC_WEMALL_API_KEY", false),
            "x-api-auth"         => env('X_API_AUTH_VLEARN_VERIFY', false)];
        $fixed_parameter_list           = [];
        $fixed_parameter_list['sort']   = "desc";
        $fixed_parameter_list['order']  = "rc";
        $fixed_parameter_list['fields'] = "product_id,campaign_type,discount_list(rc,discount,advance_payment,campaign_type,status,proposition_nas_code";

        $result = WlsService::operateRequestAction($url, $method, $lrequest, $header, $fixed_parameter_list);

        return $result;
    }

    public static function getListCheckForSameSkuInCart($lrequest)
    {
        $tmp_lrequest = new \Illuminate\Http\Request();
        $tmp_lrequest->setMethod(strtoupper('GET'));
        $tmp_lrequest['section'] = "wemall";
        $tmp_lrequest['channel'] = "tmh-website";

        $tmp_cart_data      = self::cartActionWlsWithSimMeta('wportal/cart/' . $lrequest->input('cart_hash'), 'GET', $tmp_lrequest, []);
        $tmp_sku_check_list = [];
        if (isset(json_decode($tmp_cart_data[1], true)["data"]["record"][0]["products"])) {
            $tmp_result_cart = json_decode($tmp_cart_data[1], true);

            for ($store_index = 0;isset($tmp_result_cart["data"]["record"]) && $store_index < count($tmp_result_cart["data"]["record"]); $store_index++) {
                if (isset($tmp_result_cart["data"]["record"][$store_index]["products"])) {
                    foreach ($tmp_result_cart["data"]["record"][$store_index]["products"] as $tmp_product) {
                        $tmp_sku_check_list[$tmp_product["inventory"]["sku"]] = $tmp_product["id"];
                    }
                }
            }
        }

        return $tmp_sku_check_list;
    }

    public static function getResponseCheckForSameSkuInCart()
    {
        $errors = [
            "message" =>
            [
                "en" => "unable to add product with same feature",
                "th" => "ไม่สามารถเพิ่มสินค้าลักษณะเดียวกันลงตะกร้าได้",
            ],
            "is_pass" => false,
        ];

        return [400, $errors];
    }

    public static function postVerifyMultiCampaign($url, $method, $lrequest, $header)
    {
        $body = ["is_pass" => false];

        $is_pass_array    = [];
        $is_pass_array[0] = false; // OTP
        $is_pass_array[1] = false;
        $is_pass_array[2] = false;
        $is_pass_array[3] = false;

        $tmp_check_mini_step_result = ["A" => false, "B" => false, "C" => false, "D" => false, "E" => false, "F" => false, "G" => false];
        $is_enter_mini_step_result  = ["A" => false, "B" => false, "C" => false, "D" => false, "E" => false, "F" => false, "G" => false];

        $rule = [
            'otp'               => '',
            'mobile_number'     => 'required',
            'id_number'         => 'required',
            'service_name'      => 'required',
            'product_id_list'   => 'required|array',
            'trueonline_number' => '',
        ];

        $tmp_input = $lrequest->all();
        // convert input data to the one we can send
        $validator = Validator::make($tmp_input, $rule);
        if ($validator->fails()) {
            $errors = ["message" => ["en" => "insufficient input", "th" => "กรุณากรอกข้อมูลให้ครบถ้วน", "error_from_system" => implode(',', $validator->errors()->all())]];

            return [400, $errors];
        }

        $otp               = $lrequest->input('otp');
        $mobile_number     = $lrequest->input('mobile_number');
        $id_number         = $lrequest->input('id_number');
        $trueonline_number = $lrequest->input('trueonline_number');
        $product_sku_list  = $lrequest->input('product_sku_list');

        $product_id_list = $lrequest->input('product_id_list');
        $service_name    = $lrequest->input('service_name');

        $campaign_id_list = $lrequest->input('campaign_id_list');

        // start of check for same sku in cart
        $tmp_same_sku_check_list = self::getListCheckForSameSkuInCart($lrequest);
        if (isset($tmp_same_sku_check_list[$product_sku_list[0]])) {
            return self::getResponseCheckForSameSkuInCart();
        }
        // end of check for same sku in cart

        $product_id_list_pass = [];
        $product_check_array  = [];
        foreach ($product_id_list as $product_id) {
            $product_check_array[$product_id] = 1;
        }

        $case_criteria = [false, false, false, false];
        if ($service_name == "truemove") {
            $case_criteria[0] = true;
        }

        if ($service_name == "trueonline") {
            $case_criteria[1] = true;
        }

        $content_get_product_id_config = App('App\Http\Controllers\APIController')->getProductIdConfig($lrequest);
        if (empty($content_get_product_id_config) || $content_get_product_id_config[0] > 200) {
            return $content_get_product_id_config;
        }

        $is_postpaid_product_exist = false;
        $is_other_product_exist    = false;
        $is_trueidbox_exist        = false;
        $is_prepaid_sim            = false;

        $tmp_content_get_product_id_config = $content_get_product_id_config[1];

        $product_id_config_by_product_id = [];
        foreach ($tmp_content_get_product_id_config["multi_campaign_type"] as $v) {
            $product_id_config_by_product_id[$v["id"]] = $v;
        }

        $campaign_id_to_campaign_code_list = [];
        foreach ($tmp_content_get_product_id_config["campaigns"] as $v) {
            $campaign_id_to_campaign_code_list[$v["id"]] = $v;
        }

        $current_case = null;
        for ($i = 0; $i <= 3; $i++) {
            if ($case_criteria[$i]) {
                $current_case = $i + 1;
            }
        }

        if (!is_numeric($current_case) || $current_case > 4 || $current_case < 1) {
            $errors = ["message" => ["en" => "unable to determine product case, please contact the callcenter", "th" => "ไม่สามารถระบุกรณีของสินค้าได้ กรุณาติดต่อ callcenter", "error_from_system" => implode(',', $validator->errors()->all())]]; //$validator->errors();

            return [500, $errors];
        }

        $tmp_check_result = [];

        // step0 (step 1 in flow chart)
        // start of check A
        $step_name                             = "A";
        $is_enter_mini_step_result[$step_name] = true;
        $tmp_parameters                        = [
            "mobile_number" => $mobile_number,
            "otp"           => $otp,
        ];

        if ($lrequest->has('tmp_message_id')) {
            $tmp_parameters["tmp_message_id"] = $lrequest->input('tmp_message_id');
        }

        if ($lrequest->has('random_hash_for_otp')) {
            $tmp_parameters["random_hash_for_otp"] = $lrequest->input('random_hash_for_otp');
        }

        $tmp_check_result[$step_name]           = WlsService::checkForAOtp($step_name, $lrequest, $tmp_parameters, $service_name == "trueonline");
        $tmp_check_mini_step_result[$step_name] = $tmp_check_result[$step_name]["is_pass"];

        if (!$tmp_check_mini_step_result[$step_name] && isset($tmp_check_result[$step_name]["failed_output"])) {
            if (!isset($body["failed_output"])) {
                $body["failed_output"] = [$step_name => $tmp_check_result[$step_name]["failed_output"]];
            } else {
                $body["failed_output"][$step_name] = $tmp_check_result[$step_name]["failed_output"];
            }
        }
        // end of check A

        if ($tmp_check_mini_step_result[$step_name]) {
            $is_pass_array[0] = true; // OTP
        }

        // step1 (step 2 in flow chart)
        // Pass case TrueOnLine (TOL)
        // Verify By True API check black list TOL
        $step_name = "B";
        if (isset($campaign_id_to_campaign_code_list[$campaign_id_list[0]]["options"]["skip_verify_step_b"]) &&
            $campaign_id_to_campaign_code_list[$campaign_id_list[0]]["options"]["skip_verify_step_b"] == true
        ) {
            //skip blacklist check
            $tmp_check_result[$step_name]["is_skipped"] = true;
            $tmp_check_mini_step_result[$step_name]     = true;
        }
        if ($current_case != 1 && !$tmp_check_mini_step_result[$step_name]) {
            // start of check B
            $step_name                             = "B";
            $is_enter_mini_step_result[$step_name] = true;
            $tmp_parameters                        = [
                "id_number" => $id_number,
            ];
            if ($lrequest->has('tmp_message_id')) {
                $tmp_parameters["tmp_message_id"] = $lrequest->input('tmp_message_id');
            }
            $tmp_check_result[$step_name]           = WlsService::checkForBBlacklist($step_name, $lrequest, $tmp_parameters);
            $tmp_check_mini_step_result[$step_name] = $tmp_check_result[$step_name]["is_pass"];

            if (!$tmp_check_mini_step_result[$step_name] && isset($tmp_check_result[$step_name]["failed_output"])) {
                if (!isset($body["failed_output"])) {
                    $body["failed_output"] = [$step_name => $tmp_check_result[$step_name]["failed_output"]];
                } else {
                    $body["failed_output"][$step_name] = $tmp_check_result[$step_name]["failed_output"];
                }
            }
            // end of check B
        }

        if ($tmp_check_mini_step_result[$step_name]) {
            $is_pass_array[1] = true;
        }

        if ($current_case != 2) {
            //skip to check case 3,4
            //step 2 (step 3 in flow chart)

            {
                // check for C,D
                // Verify By True API check TMH collection (Payment late)

                $is_pass_array[1] = true; // bypass if current case buying is using service truemoveh

                // start of check C
                $step_name                             = "C";
                $is_enter_mini_step_result[$step_name] = true;
                $tmp_parameters                        = [
                    "id_number" => $id_number,
                ];
                if ($lrequest->has('tmp_message_id')) {
                    $tmp_parameters["tmp_message_id"] = $lrequest->input('tmp_message_id');
                }
                $tmp_check_result[$step_name]           = WlsService::checkForCCustomerPreverify($step_name, $lrequest, $tmp_parameters);
                $tmp_check_mini_step_result[$step_name] = $tmp_check_result[$step_name]["is_pass"];

                if (!$tmp_check_mini_step_result[$step_name] && isset($tmp_check_result[$step_name]["failed_output"])) {
                    if (!isset($body["failed_output"])) {
                        $body["failed_output"] = [$step_name => $tmp_check_result[$step_name]["failed_output"]];
                    } else {
                        $body["failed_output"][$step_name] = $tmp_check_result[$step_name]["failed_output"];
                    }
                }
                // end of check C

                // start of check D
                $step_name = "D";

                $sku_to_campaign_type_list = Redis::hgetall('truestore:sku_campaign_code_to_campaign_type_step_d_list:redis_data');
                $tmp_campaign_code         = $product_id_config_by_product_id[$product_id_list[0]]["campaign_code"];
                if (isset($sku_to_campaign_type_list[$product_sku_list[0]])) {
                    $campaign_type_for_check_d = $sku_to_campaign_type_list[$product_sku_list[0]];
                } elseif (isset($sku_to_campaign_type_list[$tmp_campaign_code])) {
                    $campaign_type_for_check_d = $sku_to_campaign_type_list[$tmp_campaign_code];
                } else {
                    $campaign_type_for_check_d = null;
                }

                $is_enter_mini_step_result[$step_name] = true;
                $tmp_parameters                        = [
                    "id_number"                 => $id_number,
                    "mobile_number"             => $mobile_number,
                    "campaign_type_for_check_d" => $campaign_type_for_check_d,
                    "company"                   => '',
                    "proposition_nas_code"      => '',
                    "proposition_amdoc"         => '',
                ];
                if ($lrequest->has('tmp_message_id')) {
                    $tmp_parameters["tmp_message_id"] = $lrequest->input('tmp_message_id');
                }
                $tmp_check_result[$step_name]           = WlsService::checkForDValidatePrivilegeSubscriberByMobile($step_name, $lrequest, $tmp_parameters);
                $tmp_check_mini_step_result[$step_name] = $tmp_check_result[$step_name]["is_pass"];

                if (!$tmp_check_mini_step_result[$step_name] && isset($tmp_check_result[$step_name]["failed_output"])) {
                    if (!isset($body["failed_output"])) {
                        $body["failed_output"] = [$step_name => $tmp_check_result[$step_name]["failed_output"]];
                    } else {
                        $body["failed_output"][$step_name] = $tmp_check_result[$step_name]["failed_output"];
                    }
                }
                // end of check D

                if ($tmp_check_mini_step_result["C"] && $tmp_check_mini_step_result["D"]) {
                    $is_pass_array[2] = true;
                }
            }
        } else {
            $is_pass_array[2] = true;
        }

        //step 3 (step 4 in flow chart)
        // check for G
        $sample_request_body_privilege_check_days = [];

        $privilege_placeorder = null;
        $passed_input_G       = [];
        foreach ($product_id_list as $product_id_list_key => $product_id_list_key_value) {
            $is_enter_mini_step_result["G"] = true;

            if (true) {
                // start of check G
                $step_name                             = "G";
                $is_enter_mini_step_result[$step_name] = true;
                $tmp_parameters                        = [
                    "id_number"                       => $id_number,
                    "mobile_number"                   => $mobile_number,
                    "trueonline_number"               => $trueonline_number,
                    "is_pass_array"                   => $is_pass_array,
                    "product_id_config_by_product_id" => $product_id_config_by_product_id,
                    "service_name"                    => $service_name,
                    "key"                             => $product_id_list_key,
                    "product_id"                      => $product_id_list_key_value,
                    "product_sku_list"                => $product_sku_list,
                    "product_type"                    => "multi_campaign_type",
                ];

                if (isset($campaign_id_list[$product_id_list_key])) {
                    $tmp_parameters["campaign_id"] = $campaign_id_list[$product_id_list_key];
                }
                if (isset($campaign_id_to_campaign_code_list)) {
                    $tmp_parameters["campaign_id_to_campaign_code_list"] = $campaign_id_to_campaign_code_list;
                }
                if ($lrequest->has('cart_hash')) {
                    $tmp_parameters["cart_hash"] = $lrequest->input('cart_hash');
                }
                if ($lrequest->has('tmp_message_id')) {
                    $tmp_parameters["tmp_message_id"] = $lrequest->input('tmp_message_id');
                }
                $tmp_check_result[$step_name]           = WlsService::checkForGPortalPrivilegeCheck($step_name, $lrequest, $tmp_parameters);
                $tmp_check_mini_step_result[$step_name] = $tmp_check_result[$step_name]["is_pass"];

                if (!$tmp_check_mini_step_result[$step_name] && isset($tmp_check_result[$step_name]["failed_output"])) {
                    if (!isset($body["failed_output"])) {
                        $body["failed_output"] = [$step_name => $tmp_check_result[$step_name]["failed_output"]];
                    } else {
                        $body["failed_output"][$step_name] = $tmp_check_result[$step_name]["failed_output"];
                    }
                }
                $sample_request_body_privilege_check_days = array_unique(array_merge($sample_request_body_privilege_check_days, $tmp_check_result[$step_name]["sample_request_body_privilege_check_days"]));
                // end of check G

                if ($tmp_check_mini_step_result["G"]) {
                    $product_id_list_pass = array_unique(array_merge($product_id_list_pass, $tmp_check_result[$step_name]["product_id_list_pass"]));
                    $passed_input_G       = array_unique(array_merge($passed_input_G, $tmp_check_result[$step_name]["passed_input"]));
                    $is_pass_array[3]     = true;
                }
            }
        }

        // end of check G
        // Verify Privilege existing  days TOL / TMH

        if ($is_pass_array[0] && $is_pass_array[1] && $is_pass_array[2] && $is_pass_array[3] || $is_prepaid_sim) {
            $body["is_pass"] = true;
        }
        $body["product_id_list_pass"]     = array_unique($product_id_list_pass);
        $body["product_id_list_not_pass"] = [];
        foreach ($product_id_list as $tmp_product_id) {
            if (!in_array($tmp_product_id, $body["product_id_list_pass"])) {
                $body["product_id_list_not_pass"][] = $tmp_product_id;
            }
        }

        if (!$is_pass_array[0]) {
            $body["error_message"] = ["en" => "not pass because of otp check", "th" => "ไม่ผ่านเนื่องจากการตรวจสอบ otp"];
            if (isset($tmp_check_result["A"]["message"])) {
                $body["message"] = $tmp_check_result["A"]["message"];
            } else {
                $body["message"]       = [];
                $body["message"]["th"] = "ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้";
                $body["message"]["en"] = "Sorry, the system cannot process your request at the moment.";
            }
        } elseif (!$is_pass_array[1] && !$tmp_check_mini_step_result["B"]) {
            $body["error_message"] = ["en" => "not pass because of blacklist check", "th" => "ไม่ผ่านเนื่องจากการตรวจสอบ blacklist"];
            if (isset($tmp_check_result["B"]["message"])) {
                $body["message"] = $tmp_check_result["B"]["message"];
            } else {
                $body["message"]       = [];
                $body["message"]["th"] = "ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้";
                $body["message"]["en"] = "Sorry, the system cannot process your request at the moment.";
            }
        } elseif (!$is_pass_array[2] && ($current_case == "1") && !$tmp_check_mini_step_result["C"]) {
            $body["error_message"] = ["en" => "not pass because of check TMH collection (Payment late)", "th" => "ไม่ผ่านเนื่องจากการตรวจสอบ TMH collection (Payment late)"];
            if (isset($tmp_check_result["C"]["message"])) {
                $body["message"] = $tmp_check_result["C"]["message"];
            } else {
                $body["message"]       = [];
                $body["message"]["th"] = "ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้";
                $body["message"]["en"] = "Sorry, the system cannot process your request at the moment.";
            }
        } elseif (!$is_pass_array[2] && ($current_case == "1") && !$tmp_check_mini_step_result["D"]) {
            $body["error_message"] = ["en" => "not pass because of validate privilege by mobile", "th" => "ไม่ผ่านเนื่องจากการตรวจสอบ privilege ด้วยเบอร์โทรศัพท์มือถือ"];
            if (isset($tmp_check_result["D"]["message"])) {
                $body["message"] = $tmp_check_result["D"]["message"];
            } else {
                $body["message"]       = [];
                $body["message"]["th"] = "ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้";
                $body["message"]["en"] = "Sorry, the system cannot process your request at the moment.";
            }
        } elseif (!$is_pass_array[3] && !$tmp_check_mini_step_result["G"]) {
            $body["error_message"] = ["en" => "not pass because of Verify Privilege existing days check", "th" => "ไม่ผ่านเนื่องจากการตรวจสอบ Privilege existing days"];
            if (isset($tmp_check_result["G"]["message"])) {
                $body["message"] = $tmp_check_result["G"]["message"];
            } else {
                $body["message"]       = [];
                $body["message"]["th"] = "ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้";
                $body["message"]["en"] = "Sorry, the system cannot process your request at the moment.";
            }
        } elseif (!$body["is_pass"] && !$is_prepaid_sim) {
            $body["error_message"] = ["en" => "Unable to identify verification problem, please contact callcenter", "th" => "ไม่สามารถระบุข้อผิดพลาดของการตรวจสอบได้ กรุณาติดต่อ callcenter"];
            $body["message"]       = [];
            $body["message"]["th"] = "ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้";
            $body["message"]["en"] = "Sorry, the system cannot process your request at the moment.";
        }
        $body["current_case"] = $current_case;

        if (!empty($passed_input_G)) {
            $body["privilege_placeorder"] = $passed_input_G;
        }
        if (isset($face_recognition_result)) {
            $body["face_recognition_result"] = $face_recognition_result;
        }
        if (isset($tmp_check_result)) {
            $body["tmp_check_result"] = $tmp_check_result;
        }

        $body              = json_encode($body);
        $tmp_last_big_body = [200, $body, "tmp_check_mini_step_result" => $tmp_check_mini_step_result, "case_criteria" => $case_criteria, "is_pass_array" => $is_pass_array, "is_enter_mini_step_result" => $is_enter_mini_step_result, "current_case" => $current_case];
        if (isset($tmp_data_to_check_post_full_preverify)) {
            $tmp_last_big_body["tmp_data_to_check_post_full_preverify"] = $tmp_data_to_check_post_full_preverify;
        }
        if (isset($sample_request_body_privilege_check_days)) {
            $tmp_last_big_body["sample_request_body_privilege_check_days"] = $sample_request_body_privilege_check_days;
        }
        if (isset($blacklist_input)) {
            $tmp_last_big_body["blacklist_input"] = $blacklist_input;
        }
        if (isset($blacklist_output)) {
            $tmp_last_big_body["blacklist_output"] = $blacklist_output;
        } //*/

        // start of tmh-283 hotfix multi campaign device only
        $tmp = json_decode($tmp_last_big_body[1], true);
        if (count($passed_input_G) > 0 && json_decode($tmp_last_big_body[1], true)["is_pass"] == true) {
            $tmp["privilege_placeorder"] = $passed_input_G;
            $product_id                  = $product_id_list[0];
            // start of add cart_hash => privilege_placeorder to redis

            $campaign_id = $campaign_id_list[0]; // fix TEC-510 shipping price trueidbox issue
            if (!isset($campaign_id)) {
                $campaign_id = null;
            }

            $cart_hash = $lrequest->input('cart_hash');
            if (empty($cart_hash) && $lrequest->has('cart_id')) {
                $cart_hash = $lrequest->input('cart_id');
            }

            WlsService::setRedisPrivilegePlaceorder(["passed_input" => $tmp["privilege_placeorder"], "product_type" => "multi_campaign_type"], $cart_hash, $product_id, $campaign_id);
            // end of add cart_hash => privilege_placeorder to redis
        }
        // end of tmh-283 hotfix multi campaign device only

        return $tmp_last_big_body;
    }

    public static function setRedisCacheDir($redis_to_be_set_key_name, $redis_to_be_set_value, $redis_set_expire_time_seconds)
    {
        Redis::set($redis_to_be_set_key_name, $redis_to_be_set_value, 'EX', $redis_set_expire_time_seconds);
    }

    public static function postPreparePlaceOrder($method, $request_data, $header = [])
    {
        $request = new \Illuminate\Http\Request();
        $request->replace($request_data);

        $url                    = "order/process/prepare-placeorder";
        $header["x-api-auth"]   = env('X_API_AUTH', false);
        $header["Content-Type"] = "application/json";
        $content                = GuzzleService::postGuzzleRequest(
            $url,
            $method,
            $request,
            $header,
            env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
        );

        return $content;
    }

    public static function manageUserAddress($user_id, $method, $request, $header = [])
    {
        $response = [];
        if ($request->headers->has('Authorization')) {
            $tmp_authorization  = explode(' ', $request->header('Authorization'));
            $login_access_token = array_get($tmp_authorization, 1);
            if ($login_access_token) {
                $request['access_token'] = $login_access_token;
                $request['client_id']    = env('WEMALL_CLIENT_ID', false);
                $address_id              = array_get($request, 'address_id', '');
                $url                     = "account-app/user/$user_id/address/$address_id";
                $header['x-api-auth']    = env('X_API_AUTH', false);
                $header['Content-Type']  = 'application/json';
                $content                 = GuzzleService::postGuzzleRequest(
                    $url,
                    $method,
                    $request,
                    $header,
                    env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
                );

                $response = $content;
            }
        }

        return $response;
    }

    public static function setDefaultUserAddress($user_id, $method, $request, $header = [])
    {
        $response = [];
        if ($request->headers->has('Authorization')) {
            $tmp_authorization = explode(' ', $request->header('Authorization'));
            if (array_get($tmp_authorization, 1)) {
                $request['access_token'] = $tmp_authorization[1];
                $request['client_id']    = env('WEMALL_CLIENT_ID', false);
                $request['is_truestore'] = 1;
                $address_id              = array_get($request, 'address_id', '');
                $url                     = "account-app/user/$user_id/address/$address_id/default";
                $header['x-api-auth']    = env('X_API_AUTH', false);
                $header['Content-Type']  = 'application/json';
                $content                 = GuzzleService::postGuzzleRequest(
                    $url,
                    $method,
                    $request,
                    $header,
                    //            'https://api-account.weloveshopping.com/'
                    env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
                );

                $response = $content;
            }
        }

        return $response;
    }

    public static function updateProfile($method, $request, $header = [])
    {
        $response = [];
        if ($request->headers->has('Authorization')) {
            $tmp_authorization  = explode(' ', $request->header('Authorization'));
            $login_access_token = array_get($tmp_authorization, 1);
            if ($login_access_token) {
                $request['access_token'] = $login_access_token;
                $request['client_id']    = env('WEMALL_CLIENT_ID', false);
                $url                     = "account-app/profile";
                $header['x-api-auth']    = env('X_API_AUTH', false);
                $header['Content-Type']  = 'application/json';
                $content                 = GuzzleService::postGuzzleRequest(
                    $url,
                    $method,
                    $request,
                    $header,
                    env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
                );

                $response = $content;
            }
        }

        return $response;
    }

    public static function getCampaignIdBySlug($slug)
    {
        try {
            $result = [];
            $cache  = Redis::get("truestore:truemoveh_level_c_shop:$slug");

            if ($cache) {
                $result = json_decode($cache, 1);
            }

            if (!$result) {
                $model  = new TruemovehLevelCShopsModel();
                $result = $model->findFirst($slug);
                $result = $result ? $result->toArray() : [];

                if ($result) {
                    Redis::set("truestore:truemoveh_level_c_shop:$slug", json_encode($result));
                }
            }
            $response = $result;
        } catch (Exception $e) {
            $response = [];
        }

        return $response;
    }

/**
 * @param $lrequest
 * @param $url
 * @param $method
 * @return array
 */
    public static function getPortalProduct($url, $method, $lrequest, $header)
    {
        $request_token = new \Illuminate\Http\Request();
        $request_token->setMethod('GET');
        $request_token_parameter                    = [];
        $request_token_parameter['sort_bundles']    = 'desc';
        $request_token_parameter['multi_promotion'] = 'true';
        $request_token_parameter['max_images']      = '20';
        $request_token_parameter['use_cdn']         = '1';
        $request_token_parameter['resize']          = '1400,1400,thumb';

        if ($lrequest->has('product_status') &&
            $lrequest->input('product_status') == "all"
        ) {
            $request_token_parameter["product_status"] = "all";
        }
        $request_token->replace($request_token_parameter);

        $content = GuzzleService::postGuzzleRequest(
            $url,
            $method,
            $request_token,
            $header,
            env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
        );

        return [$header, $content];
    }

    public static function dateToThai($date)
    {
        $raw_birth_date         = strval($date);
        $explode_raw_birth_date = explode("/", $raw_birth_date);
        $a                      = strtotime($explode_raw_birth_date[1] . "/" . $explode_raw_birth_date[0] . "/" . $explode_raw_birth_date[2]);
        $thai_month             = [
            "0"  => "",
            "1"  => "มกราคม",
            "2"  => "กุมภาพันธ์",
            "3"  => "มีนาคม",
            "4"  => "เมษายน",
            "5"  => "พฤษภาคม",
            "6"  => "มิถุนายน",
            "7"  => "กรกฎาคม",
            "8"  => "สิงหาคม",
            "9"  => "กันยายน",
            "10" => "ตุลาคม",
            "11" => "พฤศจิกายน",
            "12" => "ธันวาคม",
        ];
        $months = [
            '',
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];
        $to_be_replace_month = array_map(null, $months, $thai_month);

        $a = date('วันที่ j F Y', $a);

        foreach ($to_be_replace_month as $each_month_key => $each_month_value) {
            $a = str_replace($each_month_value[0], $each_month_value[1], $a);
        }

        $tmp_birth_date_split          = explode(' ', $a);
        $tmp_birth_date_before_implode = [];
        for ($i = 0; $i <= 2; $i++) {
            $tmp_birth_date_before_implode[] = $tmp_birth_date_split[$i];
        }

        $final_birth_date = implode(' ', $tmp_birth_date_before_implode) . ' ' . strval(intval($explode_raw_birth_date[2] + 543));

        return $final_birth_date;
    }

    public static function getPortalContentMetadata($url, $method, $lrequest, $header)
    {
        $header = [
            "Content-Type" => "application/json",
            "x-api-auth"   => env("X_API_AUTH", false),
        ];

        $method = "get";
        $url    = "wportal/content";

        foreach ($lrequest->all() as $key => $value) {
            $request_token_parameter[$key] = $value;
        }

        $request_token_parameter['section']   = "wemall";
        $request_token_parameter['available'] = "true";
        $request_token_parameter['fields']    = "sections(contents(id,title,slug,description,custom_fields,banner,link))";

        $lrequest->replace($request_token_parameter);
        $is_first = true;
        if (count($lrequest->all()) > 0 && $method == "get") {
            if ($is_first) {
                $url .= '?';
                $is_first = false;
            }
            foreach ($lrequest->all() as $key => $value) {
                $url .= $key . '=' . $value . '&';
            }
        }

        $content = GuzzleService::postGuzzleRequest(
            $url,
            $method,
            $lrequest,
            $header,
            env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
        );

        $tmp_decoded_content = json_decode($content[1], true);
        if (isset($content[1]) && isset($tmp_decoded_content["data"]["message"])) {
            $tmp_decoded_content["message"] = [
                "en" => $tmp_decoded_content["data"]["message"],
                "th" => $tmp_decoded_content["data"]["message"],
            ];
            $content[1] = json_encode($tmp_decoded_content);
        }

        return $content;
    }

    /**
     * buildNodePaySmooth
     *
     * @param array $product_data
     * @param string $product_id
     * @return array
     */
    private static function buildNodePaySmooth(array $product_data, string $product_id): array
    {
        Arr::set($product_data, 'data.record.is_pay_smooth', ProductService::checkProductPaySmooth($product_id));
        Arr::set($product_data, 'data.record.pay_smooth', ProductService::getConfigPaySmooth());
        Arr::set($product_data, 'data.record.inventories', ProductService::mapProductInventoryPaySmooth($product_data));

        return $product_data;
    }

    /**
     * buildNodeIot
     *
     * @param array $product_data
     * @param string $product_id
     * @return array
     */
    private static function buildNodeIot(array $product_data, string $product_id): array
    {
        Arr::set($product_data, 'data.record.is_iot', ProductService::checkProductIot($product_id));
        Arr::set($product_data, 'data.record.iot_type', Arr::get(ProductService::getConfigProductIot(), "product_ids.$product_id.verify"));
        Arr::set($product_data, 'data.record.iot_config', null);

        if (Arr::get($product_data, 'data.record.is_iot')) {
            Arr::set($product_data, 'data.record.iot_config', ProductService::getConfigIot());
        }

        return ProductService::mapConfigProductIot($product_data);
    }

    /**
     *
     * @param array $product_data
     * @param string $product_id
     * @return array
     */
    private static function buildNodeProductSpacialDetail(array $product_data, string $product_id): array
    {
        $spacial_detail = ProductService::getSpacialDetail($product_id);

        if (empty($spacial_detail)) {
            Arr::set($product_data, 'data.record.spacial_detail.sub_header', null);
            Arr::set($product_data, 'data.record.spacial_detail.promotion_remark', null);

            return $product_data;
        }

        $sub_header       = Arr::get($spacial_detail, 'sub_header');
        $promotion_remark = Arr::get($spacial_detail, 'promotion_remark');

        if (empty($sub_header)) {
            Arr::set($spacial_detail, 'sub_header', null);
        }

        if (empty($promotion_remark)) {
            Arr::set($spacial_detail, 'promotion_remark', null);
        }

        Arr::forget($spacial_detail, 'product_id', $spacial_detail);
        Arr::set($product_data, 'data.record.spacial_detail', $spacial_detail);

        return $product_data;
    }

    /**
     * buildNodeTermAndCondition
     *
     * @param array $product_data
     * @param string $product_id
     * @return array
     */
    private static function buildNodeTermAndCondition(array $product_data, string $product_id): array
    {
        $data_config = ProductService::getConfigProductTermAndCondition($product_id);

        if (empty($data_config)) {
            Arr::set($product_data, 'data.record.term_and_condition.th', null);
            Arr::set($product_data, 'data.record.term_and_condition.en', null);

            return $product_data;
        }

        Arr::set($product_data, 'data.record.term_and_condition.th', Arr::get($data_config, "detail.th"));
        Arr::set($product_data, 'data.record.term_and_condition.en', Arr::get($data_config, "detail.en"));

        return $product_data;
    }

    private static function getPaymentBannerConfig()
    {
        $response   = [];
        $redis_data = Redis::get("payment-banner");

        if (empty($redis_data)) {
            $model  = new TruemovehConfigModel();
            $result = $model->findFirst('payment_banner');
            if (empty($result)) {
                return $response;
            }

            $result = $result->toArray();
            Redis::set("payment-banner", json_encode($result), 'EX', 60 * 60 * 48);
        }

        if (!empty($redis_data)) {
            $result = json_decode($redis_data, 1);
        }

        $response = $result;

        return $response;
    }

    public static function setAccessory($product_id, $segment, $lifestyle, $tmp_check, $header)
    {
        $product_id_accessories_data = Redis::get('truestore:product_id_accessories_data:product_id:' . $product_id . ':' . $segment . ':' . $lifestyle . ':redis_data');
        $only_one_accessory          = true;
        if (empty($product_id_accessories_data)) {
            $product_id_accessories_data = Redis::get('truestore:product_id_accessories_data:product_id:' . $product_id . ':redis_data');
            $only_one_accessory          = false;
        }

        if (!empty($tmp_check["data"]["record"])) {
            $tmp_check["data"]["record"]["only_one_accessory"] = $only_one_accessory;
        }

        $json_decode_product_id_accessories_data = json_decode($product_id_accessories_data, true);
        $result_product_id_accessories_data      = [];

        if ($json_decode_product_id_accessories_data != null && is_array($json_decode_product_id_accessories_data)) {
            $acces_array = [];
            if (!empty(\Arr::get($json_decode_product_id_accessories_data, "0.product_id"))) {
                $product_id_list = array_column($json_decode_product_id_accessories_data, "product_id");
                $product_id_list = array_unique($product_id_list);

                $tmp_fixed_parameter_list["section"]                 = "wemall";
                $tmp_fixed_parameter_list["ids"]                     = implode(",", $product_id_list);
                $tmp_fixed_parameter_list["campaign_product_status"] = "public";
                $tmp_fixed_parameter_list["ignore_exclude_store"]    = "true";
                $tmp_fixed_parameter_list["resize"]                  = "400,400,crop";
                $tmp_fixed_parameter_list["use_cdn"]                 = "1";
                $tmp_url                                             = "wportal/product";
                $tmp_header                                          = $header;

                $tmp_lrequest = new \Illuminate\Http\Request();
                $tmp_lrequest->replace($tmp_fixed_parameter_list);

                $base_lv_d_acc_name            = 'store-cache:api:url:' . $tmp_url . "?product_ids=" . $tmp_fixed_parameter_list["ids"];
                $base_lv_d_acc_name_2          = ':body:accessories:content';
                $lv_d_accessory_redis_key_name = $base_lv_d_acc_name . $base_lv_d_acc_name_2;
                $tmp_redis_content             = Redis::get($lv_d_accessory_redis_key_name);

                if (empty($tmp_redis_content)) {
                    $portal_product_content = WlsService::operateRequestAction(
                        $tmp_url,
                        "get",
                        new \Illuminate\Http\Request(),
                        $tmp_header,
                        $tmp_fixed_parameter_list
                    );
                    self::setRedisCacheDir($lv_d_accessory_redis_key_name, json_encode($portal_product_content), 60 * 5);

                    $tmp_fixed_parameter_list["product_ids"]             = $tmp_fixed_parameter_list["ids"];
                    $tmp_fixed_parameter_list["campaign_id"]             = "";
                    $tmp_fixed_parameter_list["skip_order_out_of_stock"] = true;
                    $tmp_fixed_parameter_list["is_enable_not_include_url_query"] = true;
                    unset($tmp_fixed_parameter_list["ids"]);
                    $tmp_lrequest->replace($tmp_fixed_parameter_list);

                    $portal_product_content_2 = self::getSearchProductCampaign('', '', $tmp_lrequest, '');
                    self::setRedisCacheDir($base_lv_d_acc_name . "_2" . $base_lv_d_acc_name_2, json_encode($portal_product_content_2), 60 * 5);
                } else {
                    $tmp_content            = json_decode($tmp_redis_content, true);
                    $portal_product_content = $tmp_content;

                    $portal_product_content_2 = json_decode(Redis::get($base_lv_d_acc_name . "_2" . $base_lv_d_acc_name_2), true);
                }

                $json_decode_acces_api   = json_decode(\Arr::get($portal_product_content, "1"), true);
                $json_decode_acces_api_2 = json_decode(\Arr::get($portal_product_content_2, "1"), true);

                $product_id_to_index_acces_api_2 = array_flip(array_column(\Arr::get($json_decode_acces_api_2, 'data.record', []), "id"));

                $acces_array       = [];
                $acces_data_record = \Arr::get($json_decode_acces_api, "data.record");
                if (!empty($acces_data_record)) {
                    $acces_array = $acces_data_record;
                }
            }

            foreach ($acces_array as $each_product_sub_key => $each_product_sub_data) {
                $tmp_portal_product_content = $each_product_sub_data;

                $tmp_acces_data = [];

                $tmp_acces_data["name"] = array_get($tmp_portal_product_content, "title.th");

                $tmp_acces_data["store_id"] = array_get($tmp_portal_product_content, "store.id");

                $current_inv_index                  = "inventories.0";
                $tmp_acces_data["inventory_id"]     = array_get($tmp_portal_product_content, "$current_inv_index.id");
                $tmp_acces_data["image_url"]        = array_get($tmp_portal_product_content, "$current_inv_index.image.url");
                $tmp_acces_data["compare_at_price"] = array_get($tmp_portal_product_content, "$current_inv_index.compare_at_price");
                $tmp_acces_data["matcode"]          = array_get($tmp_portal_product_content, "$current_inv_index.sku");
                $tmp_option_array                   = array_get($tmp_portal_product_content, "$current_inv_index.options");

                if(empty($tmp_acces_data["image_url"])) {
                    $tmp_acces_data["image_url"] = array_get($tmp_portal_product_content, "images.0.url");
                }

                $tmp_acces_data["option"] = "";
                if (is_array($tmp_option_array) && count($tmp_option_array) > 0) {
                    $tmp_acces_data["option"] = array_get($tmp_option_array[0], "values.title.th");
                }

                $tmp_acces_data["product_id"] = array_get($tmp_portal_product_content, "id");
                $tmp_acces_data["store_id"]   = array_get($tmp_portal_product_content, "store_id");
                if (!isset($portal_product_content_2)) {
                    return [
                        400,
                        [
                            'message' => [
                                'en' => 'unable to access product accessory data',
                                'th' => 'ไม่สามารถเข้าถึงข้อมูลสินค้า accessory ได้',
                            ],
                        ],
                    ];
                }

                $index_for_acces_api_2 = \Arr::get($product_id_to_index_acces_api_2, $tmp_acces_data["product_id"]);

                $tmp_acces_data["quantity"] = array_get($json_decode_acces_api_2, "data.record.$index_for_acces_api_2.quantity");
                $tmp_acces_data["price"]    = array_get($json_decode_acces_api_2, "data.record.$index_for_acces_api_2.price");

                $tmp_acces_data["status"] = array_get($tmp_portal_product_content, "status");

                $allow_inventory_id_list = array_flip(array_column($json_decode_product_id_accessories_data, "inventory_id"));
                
                if ($tmp_acces_data["quantity"] >= 1 && isset($allow_inventory_id_list[$tmp_acces_data["inventory_id"]])) { // need to use isset instead of !empty function to check as the result is different
                    
                    $result_product_id_accessories_data[] = $tmp_acces_data;
                }
                $current_acces_inventory_id_list = array_column(array_get($tmp_portal_product_content, "inventories"), "id");
                if ($tmp_acces_data["quantity"] >= 1 && count($current_acces_inventory_id_list) > 1) {
                    foreach ($current_acces_inventory_id_list as $tmp_acces_inv_id_key => $tmp_acces_inv_id_val) {

                        $current_inv_index              = "inventories.$tmp_acces_inv_id_key";
                        $tmp_acces_data["inventory_id"] = array_get($tmp_portal_product_content, "$current_inv_index.id");
                        if ($tmp_acces_inv_id_val == array_get($tmp_portal_product_content, "inventories.0.id")
                            || empty(array_get($allow_inventory_id_list, $tmp_acces_data["inventory_id"]))) {
                            continue;
                        }

                        $tmp_acces_data["image_url"]        = array_get($tmp_portal_product_content, "$current_inv_index.image.url");
                        $tmp_acces_data["compare_at_price"] = array_get($tmp_portal_product_content, "$current_inv_index.compare_at_price");
                        $tmp_acces_data["matcode"]          = array_get($tmp_portal_product_content, "$current_inv_index.sku");
                        $tmp_option_array                   = array_get($tmp_portal_product_content, "$current_inv_index.options");

                        if(empty($tmp_acces_data["image_url"])) {
                            $tmp_acces_data["image_url"] = array_get($tmp_portal_product_content, "images.0.url");
                        }

                        $result_product_id_accessories_data[] = $tmp_acces_data;
                    }
                }
            }

            if (!empty($result_product_id_accessories_data)) {
                $tmp_check["data"]["record"]["accessories"] = $result_product_id_accessories_data;
            }
        }

        // hotfix accessory
        $accessories_list = Redis::get('truestore:product_id_accessories_list');
        if (!empty($accessories_list)) {
            $accessories_list = json_decode($accessories_list, true);
            if (isset($accessories_list[$product_id]) && !empty(array_get($tmp_check, 'data.record'))) {
                $tmp_check["data"]["record"]["is_addon"] = true;
            }
        }

        return $tmp_check;
    }

    public static function getLucky9999Config()
    {
        $response   = [];
        $redis_data = Redis::get("lucky9999");

        if (empty($redis_data)) {
            $model  = new TruemovehConfigModel();
            $result = $model->findFirst('lucky9999');
            if (empty($result)) {
                return $response;
            }

            $result = \Arr::get($result->toArray(), 'value', []);
            Redis::set("lucky9999", json_encode($result), 'EX', 60 * 60 * 48);
        }

        if (!empty($redis_data)) {
            $result = json_decode($redis_data, true);
        }

        $response = $result;

        return $response;
    }
}
