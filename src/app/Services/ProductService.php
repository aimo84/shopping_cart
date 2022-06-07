<?php
namespace App\Services;

use Exception;
use Illuminate\Support\Arr;
use App\Services\AwsService;
use App\Services\LogService;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Redis;
use App\Models\TruemovehIotConfigModel;
use App\Models\TruemovehProductDetailModel;
use App\Models\TruemovehPaySmoothConfigModel;
use App\Models\TruemovehProductSpacialDetailModel;
use App\Models\TruemovehProductTermAndConditionConfigModel;
use App\Models\TruemovehProductEsimConfigModel;
use App\Libraries\Clients\PortalApiClient;

class ProductService
{
    /**
     * GetConfigProductDescription
     *
     * @param string $product_id
     * @return mixed
     */
    public function getConfigProductDescription($product_id)
    {
        try {
            $response = [];
            
            if (empty($product_id)) return $response;

            $redis_data = Redis::get("product-description-custom:$product_id");
            if (empty($redis_data)) {
                $model  = new TruemovehProductDetailModel();
                $result = $model->findFirst($product_id);
                if (empty($result)) return $response;
                $result = $result->toArray();
                Redis::set("product-description-custom:$product_id", json_encode($result), 'EX', 60 * 5);
            }

            if (!empty($redis_data)) $result = json_decode($redis_data, 1);

            $bucket      = env('S3_AWS_BUCKET_STORE', 'wls-th-stg-store-upload');
            $folder      = Arr::get($result, 'path', 'upload/product-description');
            $file_name   = Arr::get($result, 'file_name', 'index.html');
            $base_path   = $folder. '/' . $product_id. '/';
            $s3_file     = [];
            
            foreach (['th', 'en'] as $lang) {
                $path           = $base_path . $lang .'/'. $file_name;
                $aws_service    = new AwsService();
                $s3_response    = $aws_service->getS3File($path, $bucket);
                $s3_file[$lang] = Arr::get($s3_response, 'body');
            }

            if (empty($s3_file['th']) && empty($s3_file['en'])) return $response;

            $base_s3  = 'https://'. $bucket .'.s3.ap-southeast-1.amazonaws.com/'. $folder. '/' .$product_id;
            $s3_file  = $this->buildHtml($s3_file, $base_s3, $result);
            $response = [
                'th'                     => Arr::get($s3_file, 'th'),
                'en'                     => Arr::get($s3_file, 'en'),
                'tab_detail'             => Arr::get($result, 'tab_detail', ['th' => '', 'en' => '']),
                'tab_term_and_condition' => Arr::get($result, 'tab_term_and_condition', ['th' => '', 'en' => ''])
            ];
        } catch (Exception $e) {
            LogService::writeServiceLog(
                "getConfigProductDescription",
                json_encode_unicode($product_id),
                json_encode_unicode($e->getMessage()),
                Carbon::now()->format('d/m/Y H:i:s')
            );
            $response = [];
        }
        
        return $response;
    }

    /**
     * removHtmlTags
     *
     * @param string $html_string
     * @param array $html_tags
     * @return string
     */
    public function removeHtmlTags($html_string, $html_tags) 
    {
        if (empty($html_tags)) return $html_string;
        
        $tagStr = "";
        foreach($html_tags as $key => $value) 
        { 
            $tagStr .= $key == count($html_tags)-1 ? $value : "{$value}|"; 
        }
    
        $pat_str = ["/(<\s*\b({$tagStr})\b[^>]*>)/i", "/(<\/\s*\b({$tagStr})\b\s*>)/i"];

        return preg_replace($pat_str, "", $html_string);
    }

    public function buildHtml($html_array, $base_s3, $config) 
    {
        $fonts           = Arr::get($config, 'fonts', 'SFProTH');
        $replace_fonts   = "/fonts/$fonts/";

        foreach ($html_array as $lang => $html) {
            $replace_images    = "$base_s3/". $lang . '/images/';
            $new_html          = null;
            $new_html          = str_replace('./images/', $replace_images, $html);
            $new_html          = str_replace('./fonts/', $replace_fonts, $new_html);
            $html_array[$lang] = $this->removeHtmlTags($new_html, ['html', 'body', 'head', 'meta']);
        }

        return $html_array;
    }

    /**
     * getConfigProductPaySmooth
     *
     * @return array
     */
    public function getConfigProductPaySmooth(): array
    {
        try {
            $response   = [];
            $redis_data = Redis::get("product-ids-paysmooth");

            if (empty($redis_data)) {
                $model  = new TruemovehPaySmoothConfigModel();
                $result = $model->findFirst('product_ids');
                if (empty($result)) return $response;
                $result = $result->toArray();
                Redis::set("product-ids-paysmooth", json_encode($result), 'EX', 60 * 60 * 24);
            }
            
            if (!empty($redis_data)) $result = json_decode($redis_data, 1);
            
            $response = $result;

        } catch (Exception $e) {
            LogService::writeServiceLog(
                "getConfigProductPaySmooth",
                json_encode_unicode([]),
                json_encode_unicode($e->getMessage()),
                Carbon::now()->format('d/m/Y H:i:s')
            );
        }

        return $response;
    }

    /**
     * checkProductPaySmooth
     *
     * @param string $product_id
     * @return boolean
     */
    public function checkProductPaySmooth(string $product_id): bool
    {
        $response = false;
        
        if (empty($product_id)) return $response;

        $config = $this->getConfigProductPaySmooth();

        if (!isset($config['product_ids'][$product_id])) return $response;
        
        $response = true;
        
        return $response;
    }

    /**
     * getConfigPaySmooth
     *
     * @return array
     */
    public function getConfigPaySmooth(): array
    {
        try {
            $response   = [];
            $redis_data = Redis::get("config-pay-smooth");

            if (empty($redis_data)) {
                $model  = new TruemovehPaySmoothConfigModel();
                $result = $model->findFirst('config');
                if (empty($result)) return $response;
                $result = $result->toArray();
                Redis::set("config-pay-smooth", json_encode($result), 'EX', 60 * 60 * 24);
            }

            if (!empty($redis_data)) $result = json_decode($redis_data, 1);

            Arr::forget($result, 'key');
            $response = $result;

        } catch (Exception $e) {
            LogService::writeServiceLog(
                "getConfigPaySmooth",
                json_encode_unicode([]),
                json_encode_unicode($e->getMessage()),
                Carbon::now()->format('d/m/Y H:i:s')
            );
        }
        
        return $response;
    }

    /**
     * checkCartProductPaySmooth
     *
     * @param array $card_data
     * @return array
     */
    public function checkCartProductPaySmooth(array $card_data): array
    {
        if (empty(Arr::get($card_data, 'data.record', []))) return $card_data; 

        foreach (Arr::get($card_data, 'data.record', []) as $ckey => $cart) {
            foreach (Arr::get($cart, 'products', []) as $pkey => $product) {
                $pid             = Arr::get($product, 'id');
                $meta_pay_smooth = Arr::get($product, 'meta.pay_smooth');

                Arr::set($card_data, "data.record.$ckey.products.$pkey.is_pay_smooth", false);
                if ($meta_pay_smooth === 'true') {
                    Arr::set($card_data, "data.record.$ckey.products.$pkey.is_pay_smooth", $this->checkProductPaySmooth($pid));
                }
            }
        }

        return $card_data;
    }

    /**
     * checkAllCartProductIsPaySmooth
     *
     * @param array $card_data
     * @return array
     */
    public function checkAllCartProductIsPaySmooth(array $card_data): array
    {
        if (empty(Arr::get($card_data, 'data.record', []))) return $card_data; 
        
        return array_filter(Arr::get($card_data, 'data.record', []), function($cart) {
            $products       = Arr::get($cart, 'products');
            $is_pay_smooths = array_column($products, 'is_pay_smooth');
            
            foreach ($is_pay_smooths as $is_pay_smooth) {
                if ($is_pay_smooth === false) return [];
            }

            return $cart; 
        });
    }

    /**
     * mapProductInventoryPaySmooth
     *
     * @param array $product_data
     * @return array
     */
    public function mapProductInventoryPaySmooth(array $product_data): array
    {
        try {
            $product_data      = Arr::get($product_data, 'data.record');
            $is_pay_smooth     = Arr::get($product_data, 'is_pay_smooth', false);
            $pay_smooth_config = Arr::get($product_data, 'pay_smooth.down_payment_rate');
            $inventories       = Arr::get($product_data, 'inventories', []);
            
            if ($is_pay_smooth === false) return $inventories;
                        
            $config      = Arr::get($this->getConfigProductPaySmooth(), 'product_ids', []);
            $inventories = array_column($inventories, null, 'id');

            foreach ($inventories as $inv) {
                $inv_id            = Arr::get($inv, 'id');
                $pid               = Arr::get($inv, 'product_id');
                $sku               = Arr::get($inv, 'sku');
                $down_payment_rate = Arr::get($config, "$pid.$sku.0", $pay_smooth_config);

                Arr::set($inventories, "$inv_id.down_payment_rate", $down_payment_rate);
            } 

        } catch (Exception $e) {
            LogService::writeServiceLog(
                "mapProductInventoryPaySmooth",
                json_encode_unicode($product_data),
                json_encode_unicode($e->getMessage()),
                Carbon::now()->format('d/m/Y H:i:s')
            );
        }

        return array_values($inventories);
    }

    /**
     * getConfigProductIot
     *
     * @return array
     */
    public function getConfigProductIot(): array
    {
        try {
            $response   = [];
            $redis_data = Redis::get("product-ids-iot");

            if (empty($redis_data)) {
                $model  = new TruemovehIotConfigModel();
                $result = $model->findFirst('product_ids');
                if (empty($result)) return $response;
                $result = $result->toArray();
                Redis::set("product-ids-iot", json_encode($result), 'EX', 60 * 60 * 24);
            }
            
            if (!empty($redis_data)) $result = json_decode($redis_data, 1);
            
            Arr::forget($result, 'key');
            $response = $result;

        } catch (Exception $e) {
            LogService::writeServiceLog(
                "getConfigProductIot",
                json_encode_unicode([]),
                json_encode_unicode($e->getMessage()),
                Carbon::now()->format('d/m/Y H:i:s')
            );
        }

        return $response;
    }

    /**
     * getConfigIot
     *
     * @return array
     */
    public function getConfigIot(): array
    {
        try {
            $response   = [];
            $redis_data = Redis::get("config-iot");

            if (empty($redis_data)) {
                $model  = new TruemovehIotConfigModel();
                $result = $model->findFirst('config');
                if (empty($result)) return $response;
                $result = $result->toArray();
                Redis::set("config-iot", json_encode($result), 'EX', 60 * 60 * 24);
            }
            
            if (!empty($redis_data)) $result = json_decode($redis_data, 1);

            Arr::forget($result, 'key');
            $response = $result;

        } catch (Exception $e) {
            LogService::writeServiceLog(
                "getConfigIot",
                json_encode_unicode([]),
                json_encode_unicode($e->getMessage()),
                Carbon::now()->format('d/m/Y H:i:s')
            );
        }

        return $response;
    }

    /**
     * checkProductIot
     *
     * @param string $product_id
     * @return boolean
     */
    public function checkProductIot(string $product_id): bool
    {
        $response = false;
        
        if (empty($product_id)) return $response;

        $config = $this->getConfigProductIot();

        if (!isset($config['product_ids'][$product_id])) return $response;
        
        $response = true;
        
        return $response;
    }

    /**
     * mapConfigProductIot
     *
     * @param array $product_data
     * @return array
     */
    public function mapConfigProductIot(array $product_data): array
    {
        if (Arr::get($product_data, 'data.record.is_iot') === false) return $product_data;
        
        $bundles         = Arr::get($product_data, 'data.record.bundles', []);
        $bundle_existing = Arr::get($product_data, 'data.record.bundle_existing', []);

        if (empty($bundle_existing) && empty($bundles)) return $product_data;

        $config_iot = $this->getConfigIot();
        
        foreach ($bundle_existing as $key => $campaigns) {
            foreach (Arr::get($campaigns, 'discount_list', []) as $key_campaign => $campaign) { 
                $rc_data       = (int) Arr::get($campaign, 'rc');
                $campaign_code = Arr::get($campaign, 'campaign_code');
                $cloud_data    = Arr::get($config_iot, "cloud_service.$rc_data");

                Arr::set($bundle_existing, "$key.discount_list.$key_campaign.cloud_campaign" , $this->mapCampaignIot($cloud_data, $campaign_code));
            }
        }

        foreach ($bundles as $key => $bundle) {
            $baseline       = (int) Arr::get($bundle, 'baseline');
            $campaign_code  = Arr::get($bundle, 'campaign_code');
            $cloud_data     = Arr::get($config_iot, "cloud_service.$baseline");           

            Arr::set($bundles, "$key.cloud_campaign" , $this->mapCampaignIot($cloud_data, $campaign_code));
        }

        Arr::set($product_data, "data.record.bundle_existing" , $bundle_existing);
        Arr::set($product_data, "data.record.bundles" , $bundles);

        return $product_data;
    }

    /**
     * mapCampaignIot
     *
     * @param array $cloud_data
     * @param string $campaign_code
     * @return mixed
     */
    public function mapCampaignIot($cloud_data, $campaign_code)
    {
        $cloud_campaign = null;
        
        if (empty($cloud_data) && !is_array($cloud_data)) return $cloud_campaign;

        foreach ($cloud_data as $cloud) {
            $campaign_codes = Arr::get($cloud, 'campaign_codes', []);
            $entry          = [];
            
            if (in_array($campaign_code, $campaign_codes)) {
                $entry = $cloud;
                Arr::forget($entry, 'campaign_codes');
                $cloud_campaign = $entry;
                break;
            }
        }

        return $cloud_campaign;
    }

    /**
     * checkCartProductIot
     *
     * @param array $card_data
     * @return array
     */
    public function checkCartProductIot(array $card_data): array
    {
        if (empty(Arr::get($card_data, 'data.record', []))) return $card_data; 

        foreach (Arr::get($card_data, 'data.record', []) as $ckey => $cart) {
            foreach (Arr::get($cart, 'products', []) as $pkey => $product) {
                $meta_cloud = Arr::get($product, 'meta.cloud');

                Arr::set($card_data, "data.record.$ckey.products.$pkey.is_iot", false);
                if (!empty($meta_cloud)) {
                    Arr::set($card_data, "data.record.$ckey.products.$pkey.is_iot", true);
                }
            }
        }

        return $card_data;
    }

    /**
     * @param string $product_id
     * @return array
     */
    public function getSpacialDetail(string $product_id): array
    {
        try {
            if (empty($product_id)) return [];

            $redis_data = Redis::get("truemoveh-product-spacial-detail-$product_id");

            if (!empty($redis_data)) return json_decode($redis_data, 1);

            $model  = new TruemovehProductSpacialDetailModel();
            $result = $model->findFirst($product_id);

            if (empty($result)) return [];

            Redis::set("truemoveh-product-spacial-detail-$product_id", json_encode($result->toArray()), 'EX', 60 * 60 * 24);
            
            return $result->toArray();

        } catch (Exception $e) {
            LogService::writeServiceLog(
                "getSpacialDetail",
                $product_id,
                json_encode_unicode($e->getMessage()),
                Carbon::now()->format('d/m/Y H:i:s')
            );
            
            return [];
        }
    }

    /**
     * getConfigProductTermAndCondition
     * @param string $product_id
     * @return array
     */
    public function getConfigProductTermAndCondition(string $product_id): array
    {
        try {
            if (empty($product_id)) return [];

            $redis_data = Redis::get("truemoveh-product-term-and-condition-$product_id");

            if (empty($redis_data)) {
                $model  = new TruemovehProductTermAndConditionConfigModel();
                $result = $model->getData($product_id);

                if (empty($result)) return [];

                Redis::set("truemoveh-product-term-and-condition-$product_id", json_encode($result->toArray()), 'EX', 60 * 60 * 24);
                
                return $result->toArray();
            }

            return json_decode($redis_data, 1);
            
        } catch (Exception $e) {
            LogService::writeServiceLog(
                "getConfigProductTermAndCondition",
                $product_id,
                json_encode_unicode($e->getMessage()),
                Carbon::now()->format('d/m/Y H:i:s')
            );
            
            return [];
        }
    }

    /**
     * buildNodeProductSim
     * @param array $product_verify
     * @return array
     */
    public function buildNodeProductSim(array $product_verify): array
    {
        Arr::set($product_sim, 'sim_source_type', Arr::get($product_verify, "sim_source_type"));
        Arr::set($product_sim, 'sim_type', Arr::get($product_verify, "sim_type"));
        Arr::set($product_sim, 'sim_sub_type', Arr::get($product_verify, "sim_sub_type"));

        return $product_sim;
    }

    /**
     * buildNodeSimSourceType
     * @param string $product_id
     * @return array
     */ 
    public function buildNodeSimSourceType(array $product_data, string $product_id, array $header_product_type): array
    {
        $config = $this->getProductEsimConfig($product_id);
        Arr::set($product_data, 'data.record.product_sim_source_type', $config);

        return $product_data;
    }
    
    /**
     * getProductEsimConfig
     * @param string $product_id
     * @return boolean
     */ 
    public function getProductEsimConfig(string $product_id): bool
    {
        try {
            if (empty($product_id)) return false;

            $model  = new TruemovehProductEsimConfigModel();
            $result = $model->findFirst($product_id);
            
            if (!empty($result)) return true;

            return false;
        } catch (Exception $e) {
            LogService::writeServiceLog(
                "buildNodeSimSourceType",
                $product_id,
                json_encode_unicode($e->getMessage()),
                Carbon::now()->format('d/m/Y H:i:s')
            );
            
            return false;
        }
    }

    /**
     * getProductVerifyEsim
     * @param string $product_id
     * @return array
     */ 
    public static function getProductVerifyEsim($product_id)
    {
        try {
            $url      = 'truemoveh/product-verify/' . Arr::get(explode('L', $product_id), '1'); 
            $client   = new PortalApiClient();
            $response = $client->get($url);

            if (empty($response)) return null;

            Arr::set($content, 'product_id', Arr::get($response, "product_id"));
            Arr::set($content, 'product_type', Arr::get($response, "product_type"));
            Arr::set($content, 'sim_type', Arr::get($response, "sim_type"));
            Arr::set($content, 'sim_source_type', Arr::get($response, "sim_source_type"));
            Arr::set($content, 'sim_sub_type', Arr::get($response, "sim_sub_type"));

            return $content;
        } catch (Exception $e) {
            LogService::writeServiceLog(
                "getProductVerifyEsim",
                $product_id,
                json_encode_unicode($e->getMessage()),
                Carbon::now()->format('d/m/Y H:i:s')
            );
            
            return null;
        }
    }
}