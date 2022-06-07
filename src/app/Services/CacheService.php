<?php
namespace App\Services;

use App\Models\TruemovehConfigModel;
use App\Models\TruemovehLevelCShopsModel;
use Redis;

class CacheService
{
    public static function clearCache($lrequest)
    {
        try {
            $tmh_config_model       = new TruemovehConfigModel();
            $result                 = $tmh_config_model->findFirst('white_list_clear_cache');
            $white_list_clear_cache = $result ? json_decode(array_get($result->toarray(), 'value'), 1) : [];
            $key                    = $lrequest->get('key');
            $white_list             = $lrequest->get('white_list');
            $key_cache              = $white_list . $key;
            if (in_array($white_list, $white_list_clear_cache) || empty($white_list_clear_cache)) {
                $key_list = Redis::keys($key_cache);
                $deleted  = $key_list ? Redis::del($key_list) : 0;
                $response = ['status_code' => 200, 'body' => ['deleted' => $deleted, 'keys' => $key_list]];
            } else {
                throw new \Exception('Unaccept White List');
            }
        } catch (\Exception $e) {
            $response = [
                'status_code' => 422,
                'body'        => ['message' => ['th' => 'เกิดข้อผิดพลาดภายในระบบ', 'en' => $e->getMessage()], 'deleted' => 0, 'keys' => []],
            ];
        }

        return $response;
    }

    public static function clearCacheProduct($lrequest)
    {
        try {
            $product_ids = $lrequest->get('product_ids');
            $is_mass = $lrequest->get('is_mass');
            $product_ids = explode(',', $product_ids);

            foreach ($product_ids as $product_id) {
                $cache_level_d_product["product-level-d:api:product:*$product_id*"] = 1;
                $cache_level_d_product["product-level-c:api:search-product:*$product_id*"] = 1;
            }

            $campaign_list = [];
            $campaign_product_list = self::getCampaignProduct($lrequest);
            $campaign_product_list = array_get($campaign_product_list, '1.data', []);
            foreach ($campaign_product_list as $campaign_product) {
                foreach ($campaign_product as $campaign) {
                    $campaign_id_key = (string) array_get($campaign, 'campaign_id');
                    $campaign_list[$campaign_id_key] = 1;
                    $cache_level_d_product["store-cache:api:url:search/product:body:*$campaign_id_key*"] = 1;
                }
            }

            $model  = new TruemovehLevelCShopsModel();
            $campaign_list = array_map('strval', array_keys($campaign_list));
            $result = [];
            if ($campaign_list) {
                $result = $model->getByCampaignList($campaign_list);
            }
            $c_shop = $result ? $result->toArray() : [];
            foreach ($c_shop as $shop) {
                $slug = array_get($shop, 'slug');
                if ($slug) {
                    $cache_level_d_product["store-cache:api:url:search/product:body:*$slug*"] = 1;
                }
            }
            if ($is_mass) {
                $cache_level_d_product['store-cache:api:url:search/product:body:*"q"*'] = 1;
                $cache_level_d_product['api:truemoveh:discount:product:*'] = 1;
            }

            foreach (array_keys($cache_level_d_product) as $key) {
                self::clearCacheEval($key);
            }
            $response = ['status_code' => 200, 'body' => ['keys' => $cache_level_d_product]];
        } catch (\Exception $e) {
            $response = [
                'status_code' => 422,
                'body' => [
                    'message' => ['th' => 'เกิดข้อผิดพลาดภายในระบบ', 'en' => $e->getMessage()],
                    'deleted' => 0,
                    'keys' => []
                ],
            ];
        }
        return $response;
    }

    /**
     * @param string $key
     * @param mixed $product_id
     */
    private static function clearCacheEval($key)
    {
        $key_list = Redis::keys($key);
        $deleted = $key_list ? Redis::del($key_list) : 0;
        return $deleted;
    }

    public static function getCampaignProduct($lrequest)
    {
        $product_ids = $lrequest->get('product_ids');

        $header = [
            'x-api-auth' => env('X_API_AUTH', false)
        ];
        $content = GuzzleService::postGuzzleRequest(
            "wportal/campaign_product_list?product_ids=$product_ids",
            'GET',
            $lrequest,
            $header,
            env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
        );

        $content_code = array_get($content, 0, 400);
        $content_data = json_decode(array_get($content, 1, '{}'), true);

        return [$content_code, $content_data];
    }
}
