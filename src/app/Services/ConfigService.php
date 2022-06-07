<?php
namespace App\Services;

use App\Models\TruemovehConfigBundleCampaign;
use App\Models\TruemovehConfigFreeDeviceExcludeVat;
use App\Models\TruemovehConfigModel;
use Redis;
use Exception;

class ConfigService
{
    public static function getBundleCampaign(String $product_id)
    {
        try {
            $product_id_list = Redis::get('truestore:whitelist:bundle_campaign');
            $product_id_list = json_decode($product_id_list,1);
            $response = Redis::get("truestore:typhoon_filter_refcode_node_bundles:product_id:$product_id:redis_data");
            if (empty($response) && (empty($product_id_list) || in_array($product_id, $product_id_list))) {
                $model = new TruemovehConfigBundleCampaign();
                $result_get_data = $model->getAll($product_id);

                if (!$result_get_data) {
                    throw new Exception();
                }

                $response = json_encode(self::prepareDataCampaignBundleCampaign($result_get_data));
                Redis::set("truestore:typhoon_filter_refcode_node_bundles:product_id:$product_id:redis_data", $response);
            }

        } catch (Exception $e) {
            $response = '';
        }

        return $response;
    }

    private static function prepareDataCampaignBundleCampaign(Array $result_campaign) {
        $result_campaign_product = array_column($result_campaign, null, 'campaign');
        foreach ($result_campaign_product as $key => $campaign) {
            unset($result_campaign_product[$key]['campaign']);
            unset($result_campaign_product[$key]['product_id']);
        }

        return $result_campaign_product;
    }

    public static function getNoFreeShippingList()
    {
        try {
            $response = Redis::get("truestore:no_free_shipping_products:redis_data");
            if (empty($response)) {
                $model = new TruemovehConfigModel();
                $result_get_data = $model->findFirst('no_free_shipping_products');

                if (!$result_get_data) {
                    throw new Exception();
                }

                $response = array_get($result_get_data->toarray(), 'value');
                Redis::set("truestore:no_free_shipping_products:redis_data", $response);
            }

        } catch (Exception $e) {
            $response = '';
        }

        return $response;
    }

    public static function isNoFreeShippingProduct($product_id) {
        $result = false;
        $list_no_free_shipping = json_decode(self::getNoFreeShippingList(), true);
        if ($list_no_free_shipping && in_array($product_id, $list_no_free_shipping)) {
            $result = true;
        }

        return $result;
    }

    public static function getExceptionPackages()
    {
        try {
            $response = Redis::hgetall('truestore:nas_code_exception_list:search_package:redis_data');
            if (empty($response)) {
                $model = new TruemovehConfigModel();
                $result_get_data = $model->findFirst('exception_sim_package_page');

                if (!$result_get_data) {
                    throw new Exception();
                }

                $response = json_decode(array_get($result_get_data->toarray(), 'value'), true);
                Redis::hmset("truestore:nas_code_exception_list:search_package:redis_data", $response);
            }

        } catch (Exception $e) {
            $response = [];
        }

        return $response;
    }
    public static function getQandAConfig()
    {
        $redis_data = Redis::get('truestore:q_and_a_pre_to_post');
        if (empty($redis_data)) {
            $model = new TruemovehConfigModel();
            $result = $model->findFirst('q_and_a_pre_to_post');
            $data = $result ? $result->toArray() : [];
            $redis_data = array_get($data, 'value');
            Redis::set('truestore:q_and_a_pre_to_post', $redis_data, 'EX', 60 * 60 * 48);
        }
        return json_decode($redis_data, true);
    }

    public static function getPopupLiveChatConfig()
    {
        $redis_data = Redis::get('truestore:popup_live_chat_config');
        if (empty($redis_data)) {
            $model = new TruemovehConfigModel();
            $result = $model->findFirst('popup_live_chat');
            $data = $result ? $result->toArray() : [];
            $redis_data = array_get($data, 'value', '{"idle_time": 0, "open_time": "09:00", "close_time": "19:00"}');
            Redis::set('truestore:popup_live_chat_config', $redis_data, 'EX', 60 * 60 * 24);
        }
        return json_decode($redis_data, true);
    }

    public static function getFreeDeviceExcludeVat($product_id)
    {
        try {
            $key_redis = "truestore:free_device_exclude_vat_products:$product_id:redis_data";
            $response = Redis::get($key_redis);
            if (empty($response)) {
                $model = new TruemovehConfigFreeDeviceExcludeVat();
                $result_get_data = $model->findFirst($product_id);

                if (!$result_get_data) {
                    throw new Exception();
                }
                $response = \Arr::get($result_get_data->toarray(), 'value');
                Redis::set($key_redis, $response);
            }
        } catch (Exception $e) {
            $response = '{}';
        }

        return json_decode($response, true);
    }
}
