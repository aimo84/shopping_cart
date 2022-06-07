<?php

namespace App\Services;

class LvAService
{
    public static function getAllContent($request)
    {
        $response = [];
        try {
            $config_level_a_content = LvCService::getPortalContent($request);
            $config_level_a = json_decode(\Arr::get($config_level_a_content, 1, '{}'), true);
            $config_level_a = \Arr::get($config_level_a, 'data.record.sections.0.contents', []);
            $response['config'] = $config_level_a;
            foreach ($config_level_a as $key => $config) {
                $template_type = \Arr::get($config, 'custom_fields.template_type');
                if (in_array($template_type, ['flash_sale', 'exclusive', 'best_seller', 'new_arrivals_left', 'new_arrivals_right'])) {
                    $request_parameter = [
                        'page' => 1,
                        'limit' => \Arr::get($config, 'custom_fields.display_products', 10)
                    ];

                    $product_campaign_id = \Arr::get($config, 'custom_fields.product_campaign_id');
                    if ($product_campaign_id) {
                        $request_parameter['campaign_id'] = $product_campaign_id;
                    }
                    $url = 'search/product';
                    $method = 'get';
                    $tmp_lrequest = new \Illuminate\Http\Request();
                    $tmp_lrequest->setMethod(strtoupper($method));
                    $tmp_lrequest->replace($request_parameter);
                    $search_product = App('App\Http\Controllers\APIController')->callAPIContent($url, $tmp_lrequest);
                    $search_product_content = json_decode(\Arr::get($search_product, 'body', '{}'), true);
                    $record = \Arr::get($search_product_content, 'data.record', []);
                    if ($record) {
                        $record = self::wrapperData($template_type, $product_campaign_id, $record);
                    }
                } else {
                    $tmp_lrequest = new \Illuminate\Http\Request();
                    $tmp_lrequest->replace(['code' => \Arr::get($config, 'custom_fields.cms_code')]);
                    $config_level_a_content = LvCService::getPortalContent($tmp_lrequest);
                    $config_level_a = json_decode(\Arr::get($config_level_a_content, 1, '{}'), true);
                    $record = \Arr::get($config_level_a, 'data.record.sections.0.contents', []);
                    if ($record) {
                        $record = self::wrapperData($template_type, '', $record);
                    }
                }

                if ($template_type == 'new_arrivals_left' || $template_type == 'new_arrivals_right') {
                    $response['config'][$key]['custom_fields']['template_type'] = 'new_arrivals';
                }

                if ($record) {
                    $response['content'][$key] = [
                        'data' => $record,
                        'key' => $template_type
                    ];
                } else {
                    unset($response['config'][$key]);
                }
            }

            $response = [
                'config' => array_values(\Arr::get($response, 'config', [])),
                'content' => array_values(\Arr::get($response, 'content', [])),
            ];

            $result = ['status_code' => 200, 'body' => $response];
        } catch (\Exception $e) {
            $result = ['status_code' => 500, 'response' => $e->getMessage()];
        }

        return $result;
    }

    private static function wrapperData($template_type, $product_campaign_id, $record)
    {
        if ($template_type == 'flash_sale') {
            $tmp_lrequest = new \Illuminate\Http\Request();
            $tmp_lrequest->replace(['field' => true]);
            $response_data = LvCService::getPortalCampaign($product_campaign_id, $tmp_lrequest);
            $record = [
                'flash_sale_campaign' => \Arr::get($response_data, 'response.data.record', []),
                'campaign_data' => $record
            ];
        } else if ($template_type == 'deals_from_partner') {
            $record = array_slice($record, 0, 3);
        }
        return $record;
    }
}
