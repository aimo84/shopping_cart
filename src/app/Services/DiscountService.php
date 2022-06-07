<?php
namespace App\Services;

use Redis;

class DiscountService
{
    private static $input;
    private static $bench        = false;
    private static $bench_stat   = false;
    private static $cache_expire = 60 * 15;

    private static function bench($name, $step = 'start')
    {
        self::$bench_stat[$name][$step] = microtime(true);
    }

    private static function getBenchmark()
    {
        if (self::$bench_stat) {
            foreach (self::$bench_stat as $key => $value) {
                $used_time                    = array_get($value, 'end', 0) - array_get($value, 'start', 0);
                self::$bench_stat[$key]['used_time'] = $used_time;
            }
        }

        return self::$bench_stat;
    }

    public static function processDiscountLevelC($data, $bench = false, $token_tmvh = false)
    {
        try {
            self::bench('processDiscountLevelC');
            [$header_json, $typhoon_token] = self::getHeader($token_tmvh);

            self::$input         = $data;
            self::$bench         = $bench;
            $data_record         = array_get($data, 'data.record');
            $data_record_by_id   = array_column($data_record, 'id');
            self::bench('getDataProductFromCache');
            $cache_data_product_list = self::getProductDataFromCache($data_record_by_id, $header_json);
            self::bench('getDataProductFromCache', 'end');
            $product_id_list_str = implode(',', $data_record_by_id);

            if ($product_id_list_str) {
                self::bench('getListProductData');
                $get_list_products = self::getListProductData($product_id_list_str);
                $get_list_products = array_get($get_list_products, 'data.record', []);
                self::bench('getListProductData', 'end');

                if (!$get_list_products) {
                    throw new \UnexpectedValueException('Fail get list product data', 406);
                }

                $bundle_list       = array_filter(array_column($get_list_products, 'bundles', 'id'));
                $get_list_products = array_column($get_list_products, null, 'id');

                self::bench('getCampaignByProductId');
                $get_list_campaign_by_products = self::getCampaignByProductId($product_id_list_str);
                $get_list_campaign_by_products = array_get($get_list_campaign_by_products, 'data.record', []);
                $get_list_campaign_by_products = array_column($get_list_campaign_by_products, null, 'product_id');
                self::bench('getCampaignByProductId', 'end');


                self::bench('getBundleExistingData');
                $get_list_bundle_existing      = self::getBundleExistingData($product_id_list_str);
                $get_list_bundle_existing      = array_get($get_list_bundle_existing, 'data.record', []);
                $get_list_bundle_existing_data = [];
                foreach ($get_list_bundle_existing as $key => $value) {
                    $product_id = array_get($value, 'product_id');
                    $old_data   = array_get($get_list_bundle_existing_data, $product_id, []);

                    array_push($old_data, $value);
                    $get_list_bundle_existing_data[$product_id] = $old_data;
                }
                self::bench('getBundleExistingData', 'end');

                self::bench('getProductVerifySimPostpaid');
                $get_product_verify = self::getProductVerifySimPostpaid($product_id_list_str);
                $get_product_verify = array_column($get_product_verify, null, 'product_id');
                self::bench('getProductVerifySimPostpaid', 'end');

                self::bench('getDeviceOnlyDiscount');
                $get_device_only_discount = self::getDeviceOnlyDiscount($get_list_products);
                self::bench('getDeviceOnlyDiscount', 'end');

                self::bench('getProductIdConfig');
                $tmp_content_get_product_id_config = self::getProductIdConfig();
                self::bench('getProductIdConfig', 'end');
            }

            self::bench('manageAllDiscount');
            foreach ($data_record as $key_record => $val_record) {
                $product_id                    = array_get($val_record, 'id');
                $cache_data_product            = array_get($cache_data_product_list, $product_id);
                if (!$cache_data_product) {
                    $product_id_no_prefix          = array_get(explode('L', $product_id), 1);
                    $campaign_of_product           = array_get($get_list_campaign_by_products, $product_id, []);
                    $device_bundle_existing_record = array_get($get_list_bundle_existing_data, $product_id_no_prefix, []);
                    $product_inventories_list      = array_get($get_list_products, "$product_id.inventories", []);
                    $product_verify                = array_get($get_product_verify, $product_id_no_prefix, []);
                    $price_of_sku                  = array_column($product_inventories_list, 'price', 'sku');
                    $val_record['inventories']     = $product_inventories_list;
                    $val_record['promotion']       = array_get($campaign_of_product, 'promotion');
                    $val_record['campaign']        = array_get($campaign_of_product, 'campaign');
                    $price_of_sku_list             = [];

                    $typhoon_discount_list         = self::manageTyphoonBundle($val_record, $bundle_list, $device_bundle_existing_record, $typhoon_token);
                    $sku_discount                  = self::manageDiscountBundleExisting($device_bundle_existing_record, $typhoon_discount_list, $typhoon_token);
                    self::manageDiscountPromotion($price_of_sku, $campaign_of_product, $price_of_sku_list);
                    self::manageDiscountBundle($val_record, $bundle_list, $product_inventories_list, $price_of_sku, $device_bundle_existing_record);
                    self::manageProductType($val_record, $tmp_content_get_product_id_config, $product_verify);
                    self::manageDiscountSku($val_record, $price_of_sku, $get_device_only_discount, $sku_discount, $price_of_sku_list);

                    $data['data']['record'][$key_record] = $val_record;
                    Redis::set("product-level-c:api:search-product:$product_id:data:header:$header_json", json_encode($val_record));
                } else {
                    $cache_data_product['quantity'] = array_get($val_record, 'quantity');
                    $data['data']['record'][$key_record] = $cache_data_product;
                }
            }
            self::bench('manageAllDiscount', 'end');
            self::bench('processDiscountLevelC', 'end');

            $benchmark = self::getBenchmark();
            LogService::writeServiceLog('processDiscountLevelC-Benchmark', json_encode_unicode(self::$input), json_encode_unicode(['message' => $benchmark]), date('d/m/Y H:i:s'));

            if ($bench) {
                $data['data']['discount_benchmark'] = $benchmark;
            }

        } catch (\UnexpectedValueException $e) {
            LogService::writeServiceLog('processDiscountLevelC', json_encode_unicode(self::$input), json_encode_unicode(['message' => $e->getMessage(), 'line' => $e->getLine()]), date('d/m/Y H:i:s'));
        } catch (\Exception $e) {
            LogService::writeServiceLog('processDiscountLevelC', json_encode_unicode(self::$input), json_encode_unicode(['message' => $e->getMessage(), 'line' => $e->getLine()]), date('d/m/Y H:i:s'));
        }

        return $data;
    }

    private static function manageDiscountBundleExisting($device_bundle_existing_record, $typhoon_discount_list, $type_token)
    {
        $sku_discount = [];
        if ($device_bundle_existing_record) {
            $discount_list = array_column($device_bundle_existing_record, 'discount_list');
            $discount_list = array_merge(...$discount_list);

            $tmp = [];
            foreach ($discount_list as $key => $val) {
                $tmp[$val['product_code']][] = $val['discount'];
            }

            foreach ($discount_list as $key_discount_bundle_existing => $value_discount_bundle_existing) {
                $discount_product_code = array_get($value_discount_bundle_existing, 'product_code');
                $discount_discount     = array_get($value_discount_bundle_existing, 'discount');
                $campaign_type         = array_get($value_discount_bundle_existing, 'campaign_type');
                $campaign_code         = array_get($value_discount_bundle_existing, 'campaign_code');

                if ((!$type_token && in_array($campaign_code, $typhoon_discount_list)) || ($type_token && !in_array($campaign_code, $typhoon_discount_list)) ) {
                    continue;
                }

                $temp_key_check_rc     = implode("_", [
                    $campaign_type,
                    array_get($value_discount_bundle_existing, 'rc'),
                    $discount_product_code,
                    $discount_discount,
                    array_get($value_discount_bundle_existing, 'advance_payment'),
                ]);

                if ($campaign_type == "4") {
                    $temp_key_check_rc .= '_' . array_get($value_discount_bundle_existing, 'campaign_code');
                }

                if ($campaign_type != "1" && !isset($check_rc_unique[$temp_key_check_rc])) {
                    $check_rc_unique[$temp_key_check_rc] = 1;
                } elseif ($campaign_type != "1") {
                    unset($device_bundle_existing_record["discount_list"][$key_discount_bundle_existing]);
                    continue;
                }

                if (isset($discount_discount) && $discount_discount > array_get($sku_discount, $discount_product_code, 0) && $discount_product_code) {
                    $sku_discount[$discount_product_code] = $discount_discount;
                }
            }
        }

        return $sku_discount;
    }

    private static function getListProductData($product_id_list_str)
    {
        $redis_hash     = md5($product_id_list_str);
        $content_cached = Redis::get("api:truemoveh:discount:product:" . $redis_hash);
        $result         = json_decode($content_cached, true);

        if (!$result || self::$bench) {
            $request_token = new \Illuminate\Http\Request();
            $request_token->setMethod('GET');

            $request_token->replace([
                'ids'     => $product_id_list_str,
                'section' => 'wemall',
                'limit'   => count(explode(',', $product_id_list_str))
            ]);

            $header = [
                "x-api-auth" => env('X_API_AUTH', false)
            ];

            $content = GuzzleService::postGuzzleRequest(
                'wportal/product',
                'GET',
                $request_token,
                $header,
                env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
            );
            $content_data = array_get($content, 1, '{}');

            Redis::set("api:truemoveh:discount:product:$redis_hash", $content_data, 'EX', self::$cache_expire);

            $result = json_decode($content_data, true);
        }

        return $result;
    }

    private static function getCampaignByProductId($product_id_list_str)
    {
        $redis_hash     = md5($product_id_list_str);
        $content_cached = Redis::get("api:truemoveh:discount:campaign_product_v2:" . $redis_hash);
        $result         = json_decode($content_cached, true);

        if (!$result || self::$bench) {
            $request_token = new \Illuminate\Http\Request();
            $request_token->setMethod('GET');

            $request_token->replace([
                'product_ids' => $product_id_list_str,
                'active'      => true
            ]);

            $header = [
                "x-api-auth" => env('X_API_AUTH', false)
            ];

            $content = GuzzleService::postGuzzleRequest(
                'wportal/campaign_product_v2',
                'GET',
                $request_token,
                $header,
                env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
            );
            $content_data = array_get($content, 1, '{}');

            Redis::set("api:truemoveh:discount:campaign_product_v2:$redis_hash", $content_data, 'EX', self::$cache_expire);

            $result = json_decode($content_data, true);
        }

        return $result;
    }

    private static function getBundleExistingData($product_id_list_str)
    {
        $redis_hash     = md5($product_id_list_str);
        $content_cached = Redis::get("api:truemoveh:discount:bundle-existing:" . $redis_hash);
        $result         = json_decode($content_cached, true);

        if (!$result || self::$bench) {
            $tmp_lrequest = new \Illuminate\Http\Request();
            $tmp_lrequest->setMethod(strtoupper("get"));

            $tmp_request_parameter = ["product_ids" => str_replace('L', '', $product_id_list_str)];
            $tmp_lrequest->replace($tmp_request_parameter);

            $content_device_bundle_existing = WlsService::getBundleExisting("truemoveh/bundle-existing", "GET", $tmp_lrequest, []);
            $data_bundle_existing           = array_get($content_device_bundle_existing, 1, '{}');

            Redis::set("api:truemoveh:discount:bundle-existing:$redis_hash", $data_bundle_existing, 'EX', self::$cache_expire);

            $result = json_decode($data_bundle_existing, true);
        }

        return $result;
    }

    private static function getDeviceOnlyDiscount($get_list_products)
    {
        $all_sku = array_map(function ($val) { return array_column(array_get($val, 'inventories', []), 'sku'); }, $get_list_products);

        if ($all_sku) {
            $all_sku = (array_merge(...array_values($all_sku)));
        }

        $chunk  = array_chunk($all_sku, 50);
        $result = [];
        foreach ($chunk as $sku_list) {
            $hash = md5(json_encode($sku_list));
            $get_device_only_data = Redis::get("api:truemoveh:discount:device-only:$hash");
            $get_device_only_data = json_decode($get_device_only_data, true);

            if (!$get_device_only_data || self::$bench) {
                $get_device_only_data = WeOmniService::postGetDeviceOnlyDiscount($sku_list);
                Redis::set("api:truemoveh:discount:device-only:$hash", json_encode($get_device_only_data), 'EX', self::$cache_expire);
            }

            $result = $result + $get_device_only_data;
        }

        return $result;
    }

    private static function getProductVerifySimPostpaid($product_id_list_str)
    {
        $redis_hash           = md5($product_id_list_str);
        $product_id_no_prefix = str_replace('L', '', $product_id_list_str);
        $content_cached       = Redis::get("api:truemoveh:discount:verify-sim-postpaid:$redis_hash");
        $result               = json_decode($content_cached, true);

        if (!$result || self::$bench) {
            $tmp_lrequest = new \Illuminate\Http\Request();
            $tmp_lrequest->setMethod(strtoupper("get"));

            $tmp_request_parameter = ["product_ids" => $product_id_no_prefix];
            $tmp_lrequest->replace($tmp_request_parameter);

            $content_product_verify_postpaid = WlsService::getProductVerifySimPostpaid("truemoveh/product-verify/0", "get", $tmp_lrequest, []);

            $result = [];
            if (array_get($content_product_verify_postpaid, 0, 400) == 200) {
                $result = json_decode(array_get($content_product_verify_postpaid, 1, '{}'), true);
            }

            Redis::set("api:truemoveh:discount:verify-sim-postpaid:$redis_hash", json_encode($result), 'EX', self::$cache_expire);
        }

        return $result;
    }

    private static function getProductIdConfig()
    {
        $content_cached = Redis::get("api:truemoveh:discount:product-id-config");
        $result         = json_decode($content_cached, true);

        if (!$result || self::$bench) {
            $lrequest = new \Illuminate\Http\Request();
            $lrequest->setMethod(strtoupper('get'));
            $request_parameter['update_cache'] = 1;
            $lrequest->replace($request_parameter);

            $result = App('App\Http\Controllers\APIController')->getProductIdConfig($lrequest);
            Redis::set("api:truemoveh:discount:product-id-config", json_encode($result));
        }

        return array_get($result, 1, '{}');
    }

    private static function manageTyphoonBundle(&$val_record, &$bundle_list, $device_bundle_existing_record, $token_type = false)
    {
        $product_id                 = array_get($val_record, 'id');
        $tmp_refcode_content_list   = ConfigService::getBundleCampaign($product_id);
        $discount_list_type_4_index = -1;
        $discount_list_type_4       = [];
        $filter_discount_list       = [];
        $typhoon_discount_list      = [];

        foreach ($device_bundle_existing_record as $index => $bundle_existing) {
            if (array_get($bundle_existing, 'campaign_type', 0) == '4') {
                if (empty(array_get($val_record, 'bundles', []))) {
                    $val_record["bundles"] = [];
                }

                $discount_list_type_4          = array_get($bundle_existing, 'discount_list');
                $discount_list_type_4_index    = $index;
                $val_record["is_mnp_bundling"] = true;
            }
        }

        if (!empty($tmp_refcode_content_list)) {
            $tmp_refcode_content_list      = json_decode($tmp_refcode_content_list, true);
            if ($token_type) {
                $tmp_refcode_content    = array_get($tmp_refcode_content_list, $token_type);
                $typhoon_bundle_list    = array_get($tmp_refcode_content, 'bundle_ref_codes', []);
                $typhoon_discount_list  = array_get($tmp_refcode_content, 'bundle_existing_ref_codes', []);
            } else {
                $tmp_refcode_content           = array_values($tmp_refcode_content_list);
                $tmp_bundle_ref_codes          = array_column($tmp_refcode_content, 'bundle_ref_codes');
                $tmp_bundle_existing_ref_codes = array_column($tmp_refcode_content, 'bundle_existing_ref_codes');
                if (empty($tmp_bundle_ref_codes)) {
                    $tmp_bundle_ref_codes = [[]];
                }

                $typhoon_bundle_list = array_merge(...$tmp_bundle_ref_codes);

                if (empty($tmp_bundle_existing_ref_codes)) {
                    $tmp_bundle_existing_ref_codes = [[]];
                }

                $typhoon_discount_list              = array_unique(array_merge(...$tmp_bundle_existing_ref_codes));
                $default_bundle_existing_ref_codes  = array_get($tmp_refcode_content_list, 'default.bundle_existing_ref_codes', []);
                $typhoon_discount_list              = array_values(array_diff($typhoon_discount_list, $default_bundle_existing_ref_codes));
            }
            $bundles = [];

            foreach (array_get($bundle_list, $product_id, []) as $bundle) {
                if (!$token_type && !in_array(array_get($bundle, 'ref_code'), $typhoon_bundle_list)) {
                    $bundles[] = $bundle;
                } else if ($token_type && in_array(array_get($bundle, 'ref_code'), $typhoon_bundle_list)) {
                    $bundles[] = $bundle;
                }
            }

            foreach ($discount_list_type_4 as $discount_list) {
                if (!$token_type && !in_array($discount_list["campaign_code"], $typhoon_discount_list)) {
                    $filter_discount_list[] = $discount_list;
                } else if ($token_type && in_array($discount_list["campaign_code"], $typhoon_discount_list)) {
                    $filter_discount_list[] = $discount_list;
                }
            }

            $val_record["special_campaign"] = [];
            $bundle_list[$product_id]       = $bundles;
            if ($discount_list_type_4_index >= 0) {
                $val_record["bundle_existing"][$discount_list_type_4_index]["discount_list"] = $filter_discount_list;
            }
        }

        return $typhoon_discount_list;
    }

    private static function manageDiscountBundle(&$val_record, &$bundle_list, $product_inventories_list, $price_of_sku)
    {
        $product_id       = array_get($val_record, 'id');
        $inventories_list = array_column($product_inventories_list, null, 'id');
        $bundle_product   = array_get($bundle_list, $product_id, []);

        if ($bundle_product && array_get($val_record, 'type_of_product') == "product") {
            $price_with_max_discount_device_bundle_new_customer = 9999999;
            $is_enable_device_bundle_new_customer               = false;
            $is_enable_mnp_bundling                             = false;

            foreach ($bundle_product as $tmp_key => $tmp_value) {
                if (strtolower(array_get($tmp_value, 'status')) == 'disable' || array_get($tmp_value, 'start_date') > time() || array_get($tmp_value, 'end_date') < time()) {
                    continue;
                }

                $bundle_product[$tmp_key]["is_enable_bundle_device_bundle_new_customer"] = false;
                if (array_get($tmp_value, 'active') && array_get($tmp_value, 'enable') && array_get($tmp_value, 'start_date') <= time() && time() <= array_get($tmp_value, 'end_date')) {
                    $is_enable_device_bundle_new_customer                                    = true;
                    $bundle_product[$tmp_key]["is_enable_bundle_device_bundle_new_customer"] = true;
                }

                if (array_get($tmp_value, "sim_type") != "prepaid" && !isset($tmp_value["propo_code"])) {
                    continue;
                }

                $check_type = ['bundle', 'bundle_sim', 'freebie'];
                if (array_get($tmp_value, "sim_type") != "prepaid" && !in_array(array_get($tmp_value, "campaign_type", ''), $check_type)) {
                    continue;
                }

                if (array_get($tmp_value, "sim_type") != "prepaid" && array_get($tmp_value, "campaign_mnp_type") == "one_step" && array_get($tmp_value, "campaign_sim_type") == "mnp") {
                    continue;
                }

                foreach (array_get($tmp_value, 'inventories', []) as $tmp_key_2 => $tmp_value_2) {
                    if (array_get($tmp_value_2, 'product_id') == $product_id) {
                        $tmp_product_bundle_inventory_id = array_get($tmp_value_2, 'inventory_id');
                        break;
                    }
                }

                $tmp_inventory = array_get($inventories_list, $tmp_product_bundle_inventory_id);
                $tmp_price     = array_get($price_of_sku, array_get($tmp_inventory, 'sku'));
                $promotion = array_get($val_record, 'promotion', []);

                $price_for_device_bundle_new_customer = $tmp_price;
                if (count($promotion) > 1 && array_get($promotion, '0.custom_price') == 0) {
                    $price_for_device_bundle_new_customer = array_get($tmp_inventory, 'compare_at_price', 0);
                }

                $bundle_product[$tmp_key]["inventory_id"] = $tmp_product_bundle_inventory_id;

                $benefit_amount = array_get($tmp_value, 'benefit.amount');
                $to_be_discount_device_bundle_new_customer = $benefit_amount;
                if (strtoupper(array_get($tmp_value, 'benefit.unit')) == "PERCENT") {
                    $to_be_discount_device_bundle_new_customer = $benefit_amount / 100.0 * $price_for_device_bundle_new_customer;
                }

                $bundle_product[$tmp_key]["to_be_discount_device_bundle_new_customer"] = $to_be_discount_device_bundle_new_customer;
                if ($price_for_device_bundle_new_customer < $to_be_discount_device_bundle_new_customer) {
                    $bundle_product[$tmp_key]["enable"]                                      = false;
                    $bundle_product[$tmp_key]["is_enable_bundle_device_bundle_new_customer"] = false;
                }

                $price_after_discount_device_bundle_new_customer = $price_for_device_bundle_new_customer - $to_be_discount_device_bundle_new_customer;
                $price_after_discount_device_bundle_new_customer = ($price_after_discount_device_bundle_new_customer > 0) ? $price_after_discount_device_bundle_new_customer : 0;
                $bundle_product[$tmp_key]["price_after_discount_device_bundle_new_customer"] = $price_after_discount_device_bundle_new_customer;

                if ($price_with_max_discount_device_bundle_new_customer > $price_after_discount_device_bundle_new_customer && $price_after_discount_device_bundle_new_customer >= 0) {
                    $price_with_max_discount_device_bundle_new_customer = $price_after_discount_device_bundle_new_customer;
                    $bundle_product[$tmp_key]["is_enable_bundle_device_bundle_new_customer"] = true;
                }

                if (array_get($tmp_value, 'campaign_sim_type') == "mnp") {
                    $is_enable_mnp_bundling = true;
                }
            }

            $val_record["price_with_max_discount_device_bundle_new_customer"] = $price_with_max_discount_device_bundle_new_customer;

            if ($val_record["price_with_max_discount_device_bundle_new_customer"] >= 0 && $val_record["price_with_max_discount_device_bundle_new_customer"] != 9999999 &&  $is_enable_device_bundle_new_customer) {
                $val_record["type_of_product"] = "device_bundle_new_customer";
                $val_record["is_mnp_bundling"] = $is_enable_mnp_bundling;
            }
        }
    }

    private static function manageProductType(&$val_record, $tmp_content_get_product_id_config, $product_verify)
    {
        $product_id = array_get($val_record, 'id');
        if (in_array(array_get($val_record, 'type_of_product'), ["product", "device_bundle_new_customer"])) {
            if (array_get($product_verify, 'status', 'disable') == "active") {
                $val_record["old_product_type"] = array_get($val_record, 'type_of_product');
                $val_record["type_of_product"]  = array_get($product_verify, 'sim_type');
            }

            foreach (array_get($tmp_content_get_product_id_config, 'product_type_convert_list', []) as $product_type_name) {
                $product_type_data = array_get($tmp_content_get_product_id_config, $product_type_name, []);

                foreach ($product_type_data as $v) {
                    if (array_get($v, 'id') == $product_id && !in_array(array_get($val_record, 'type_of_product'), ['device_bundle_new_customer', 'device_bundle_existing'])) {
                        $val_record["type_of_product"] = $product_type_name;

                        if ($product_type_name == "multi_campaign_type") {
                            $val_record["type_of_product"] = (count(array_get($val_record, 'promotion', [])) >= 2) ? $product_type_name : "one_campaign_type";
                        }

                        break;
                    }
                }
            }
        }
    }

    private static function manageDiscountPromotion(&$price_of_sku, $campaign_of_product, &$price_of_sku_list)
    {
        $price_of_promotion = array_column(array_get($campaign_of_product, 'promotion', []), 'custom_price');
        $price_of_sku_list  = $price_of_sku_list + $price_of_promotion;

        if ($price_of_promotion) {
            $min_price_of_promotion = count($price_of_promotion) ? min($price_of_promotion) : 0;

            foreach ($price_of_sku as $sku => $price) {
                $price_of_sku[$sku] = ($price > $min_price_of_promotion) ? $min_price_of_promotion : $price;
            }
        }
    }

    private static function manageDiscountSku(&$val_record, $price_of_sku, $get_device_only_discount, $sku_discount, $price_of_sku_list)
    {
        if(in_array(array_get($val_record, 'type_of_product'), ['device_bundle_new_customer', 'device_bundle_existing'])) {
            foreach ($price_of_sku as $sku => $sku_price) {
                $discount_device_only       = array_get($get_device_only_discount, $sku, 0);
                $discount_sku               = array_get($sku_discount, $sku, 0);
                $price_discount_device_only = $sku_price - $discount_device_only;
                $price_discount_sku         = $sku_price - $discount_sku;
                $price_of_sku_list[$sku][]  = ($price_discount_device_only > 0) ? $price_discount_device_only : 0;
                $price_of_sku_list[$sku][]  = ($price_discount_sku > 0) ? $price_discount_sku : 0;
                unset($get_device_only_discount[$sku]);
            }
        } else {
            $hide_device_only_by_product_id_and_inv_id_list = Redis::hgetall('truestore:hide_device_only_by_product_id_and_inv_id:redis_data');
            $product_id = array_get($val_record, 'id');
            $product_inventories_list_sku = array_column(array_get($val_record, 'inventories', []), null, 'sku');
            foreach ($price_of_sku as $sku => $sku_price) {
                $price_of_sku_list[$sku][] = $sku_price;
                $inventory_data            = array_get($product_inventories_list_sku, $sku);
                $inventory_price           = array_get($inventory_data, 'price', 0);


                if (!array_get($hide_device_only_by_product_id_and_inv_id_list, $product_id, false) && in_array(array_get($val_record, 'type_of_product'), ['multi_campaign_type', 'one_campaign_type']) && $inventory_price > 0 && $sku_price == 0 && count(array_get($val_record, 'promotion')) > 1) {
                    $sku_price = $inventory_price;
                }

                $discount                  = array_get($get_device_only_discount, $sku, 0);
                $new_price                 = $sku_price - $discount;
                $price_of_sku_list[$sku][] = ($new_price > 0) ? $new_price : 0;
            }
        }

        $price_of_sku_list = array_flatten($price_of_sku_list);
        $bundle_price      = array_get($val_record, 'price_with_max_discount_device_bundle_new_customer', 0);
        if ($bundle_price > 0 && $bundle_price != 9999999 && !in_array(array_get($val_record, 'type_of_product'), ['postpaid', 'prepaid'])) {
            $price_of_sku_list[] = $bundle_price;
        }

        $new_price_min           = count($price_of_sku_list) ? min($price_of_sku_list) : 0;
        $new_price_max           = count($price_of_sku_list) ? max($price_of_sku_list) : 0;
        $val_record['price_min'] = $new_price_min;
        $val_record['price_max'] = $new_price_max;

        $new_price = ($new_price_min) ? number_format($new_price_min, 2, '.', '') : $new_price_min;
        if ($new_price_min != $new_price_max) {
            $new_price                          = number_format($new_price_min, 2, '.', ',') . '-' . number_format($new_price_max, '2', '.', ',');
            $val_record['compare_at_price_min'] = 0;
            $val_record['compare_at_price_max'] = 0;
        }

        $val_record['price'] = (string) $new_price;
    }

    public static function getProductDataFromCache(&$data_record_by_id, $header_json)
    {
        $cache_data_product = [];
        foreach ($data_record_by_id as $key => $product_id) {
            $content_cached = Redis::get("product-level-c:api:search-product:$product_id:data:header:$header_json");

            if ($content_cached) {
                $cache_data_product[$product_id] = json_decode($content_cached, true);
                unset($data_record_by_id[$key]);
            }
        }

        return $cache_data_product;
    }

    public static function getHeader($token_tmvh)
    {
        $typhoon_type = false;
        $header_product = [];
        if ($token_tmvh) {
            $tmh_token = $token_tmvh;
            $raw_token = WeOmniService::getAesWecamp($tmh_token);
            $tmp_explode_aes_wecamp_result = explode('|', \Arr::get($raw_token, '1.original_plaintext'));
            $aes_wecamp_type = array_get($raw_token, '1.type');
            $cart_type = array_get($raw_token, '1.cart_type');

            $company_group = \Arr::get($tmp_explode_aes_wecamp_result, '1');
            $user_type = \Arr::get($tmp_explode_aes_wecamp_result, '2');

            if (in_array(strtoupper($user_type), ["E", "F"])) {
                $aes_wecamp_type = "ff-$user_type";

                if (!empty($company_group)) {
                    $aes_wecamp_type .= "-$company_group";
                }
            }

            $typhoon_type = empty($cart_type) ? $aes_wecamp_type : $aes_wecamp_type . '-' . strtolower($cart_type);
            $header_product['tmvh-token'] = $typhoon_type;
        }
        return [json_encode($header_product), $typhoon_type];
    }
}
