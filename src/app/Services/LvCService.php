<?php

namespace App\Services;

use App\Libraries\Clients\PortalApiClient;
use App\Models\TruemovehLevelCListModel;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Redis;

class LvCService
{
    public static function getPortalCampaign($id, $lrequest)
    {
        $url    = "wportal/campaign/$id";
        $header = [
            "x-api-auth" => env('X_API_AUTH_VLEARN_VERIFY', false),
        ];

        $fixed_parameter_list            = [];
        $fixed_parameter_list['section'] = "wemall";
        $fixed_parameter_list['fields']  = "id,title";
        if ($lrequest['field'] && $lrequest['field'] == true) {
            $fixed_parameter_list['fields'] = [];
        }

        $method        = "get";
        $data_campaign = ["id" => $id];
        $result        = WlsService::operateRequestAction($url, $method, $lrequest, $header, $fixed_parameter_list);
        $result[1]     = json_decode($result[1], true);
        $response      = ['response' => $result[1], 'code' => $result[0], 'request' => $data_campaign];

        return $response;
    }

    public static function getMobilePattern($url, $method, $lrequest, $header)
    {
        $header = [
            "x-api-auth" => env("X_API_AUTH", false),
        ];
        $method = "get";
        $url    = "truemoveh/mobile/pattern";

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

        $data_record = \Arr::get($tmp_decoded_content, "data.record");
        if (!empty($data_record)) {
            foreach ($data_record as $tmp_key => $tmp_value) {

                if (\Arr::get($tmp_value, "pattern") == "NONE") {
                    unset($tmp_decoded_content["data"]["record"][$tmp_key]);
                }
            }
            $tmp_decoded_content["data"]["record"] = array_values($tmp_decoded_content["data"]["record"]);
        }

        $content[1] = json_encode($tmp_decoded_content);

        $final_response = ["code" => $content[0], "response" => $content[1]];

        return $final_response;
    }

    public static function getPortalCampaignFlashsale($lrequest)
    {
        $url    = "wportal/campaign";
        $header = [
            "x-api-auth" => env('X_API_AUTH_VLEARN_VERIFY', false),
        ];
        $fixed_parameter_list = [
            "filter_campaign_type" => 5,
            "status"               => 1,
            "order"                => "published_start",
            "section"              => "wemall",
            "limit"                => 1,
            "fields"               => "id,title/th,meta_title,meta_keyword,meta_description,published_start,published_end,banner(url),config_order,collections(id,title),seo_description/th",
            "sort"                 => "asc",
        ];
        $method    = "get";
        $result    = WlsService::operateRequestAction($url, $method, $lrequest, $header, $fixed_parameter_list);
        $result[1] = json_decode($result[1], true);
        $response  = ['response' => $result[1], 'code' => $result[0], 'request' => $fixed_parameter_list];

        return $response;
    }

    public static function getPortalContent($lrequest)
    {
        try {
            $url = "wportal/content";

            if (!$lrequest->get('bench')) {
                $tmp_redis_content = Redis::get('store-cache:api:url:' . $url . ':body:' . json_encode($lrequest->all()) . ':content');

                if (!empty($tmp_redis_content)) {
                    $content = json_decode($tmp_redis_content, true);

                    return $content;
                }
            }

            $header = [
                "Content-Type" => "application/json",
                "x-api-auth"   => env("X_API_AUTH", false),
            ];

            $method = "get";

            foreach ($lrequest->all() as $key => $value) {
                $request_token_parameter[$key] = $value;
            }

            $code   = $lrequest->input('code');
            $fields = $lrequest->input('fields');

            $request_token_parameter['section']   = "wemall";
            $request_token_parameter['available'] = "true";
            $request_token_parameter['code']      = $code;

            if ($lrequest->has('fields')) {
                $request_token_parameter['fields'] = "sections(contents(" . $fields . "))";
            }

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

            $lrequest_original_all = $lrequest->all();
            WlsService::setRedisCacheDir('store-cache:api:url:' . $url . ':body:' . json_encode($lrequest_original_all) . ':content', json_encode($content), 60 * 15);
        } catch (\Exception $e) {
            $content = [];
        }

        return $content;
    }

    public static function getMenuContent()
    {
        $url       = "wportal/content";
        $parameter = [
            "code"    => "truestore-level-a-main-menu",
            "section" => "wemall",
            "limit"   => 20,
            "fields"  => "group_title,group_name,sections(id,name,description,contents(id,title,link,banner,custom_fields))",
        ];

        $redis_key  = 'store-cache:api:url:' . $url . ':body:' . json_encode($parameter) . ':content';
        $redis_data = Redis::get($redis_key);
        if (!empty($redis_data)) {
            return json_decode($redis_data, true);
        }

        $client   = new PortalApiClient();
        $response = $client->get($url, $parameter);
        $response = Arr::get($response, 'data.record', []);
        $contents = Arr::get($response, 'sections.0.contents', []);
        $contents = self::checkSetEmptyLink($contents);

        if (empty($contents)) {
            return [];
        }

        foreach ($contents as $key => $content) {

            $sub_menu_index = $key + 1;
            Arr::set($parameter, "code", "truestore-level-a-sub-menu-$sub_menu_index");

            $response = $client->get($url, $parameter);
            $sub_menu = Arr::get($response, 'data.record.sections.0.contents', []);
            $sub_menu = self::checkSetEmptyLink($sub_menu);

            for ($tmp_sub_menu_index = 0; $tmp_sub_menu_index < count($sub_menu); $tmp_sub_menu_index++) {
                Arr::set($sub_menu, "$tmp_sub_menu_index.title.en", htmlspecialchars_decode(Arr::get($sub_menu, "$tmp_sub_menu_index.title.en")));
                Arr::set($sub_menu, "$tmp_sub_menu_index.title.th", htmlspecialchars_decode(Arr::get($sub_menu, "$tmp_sub_menu_index.title.th")));
            }
            Arr::set($contents, "$key.title.en", htmlspecialchars_decode(Arr::get($contents, "$key.title.en")));
            Arr::set($contents, "$key.title.th", htmlspecialchars_decode(Arr::get($contents, "$key.title.th")));

            Arr::set($contents, "$key.sub_menu", $sub_menu);
        }

        Redis::set($redis_key, json_encode($contents), 'EX', 60 * 60 * 24 * 30);

        return $contents;
    }

    /**
     * checkSetEmptyLink
     *
     * @param array $contents
     * @return array
     */
    private static function checkSetEmptyLink($contents): array
    {
        if (empty($contents)) {
            return $contents;
        }

        foreach ($contents as $key => $content) {
            $link    = Arr::get($content, 'link');
            $pattern = '/\/content\//';

            if (preg_match($pattern, $link) || empty(trim($link))) {
                Arr::set($contents, "$key.link", "");
            }
        }

        return $contents;
    }

    public static function getContentPartner($id, $lrequest)
    {
        $url    = "api/content/$id";
        $header = [];

        $fixed_parameter_list             = [];
        $fixed_parameter_list["base_url"] = "https://api-portal.wls-dev.com/";

        $method        = "get";
        $data_campaign = ["id" => $id];
        $result        = WlsService::operateRequestAction($url, $method, $lrequest, $header, $fixed_parameter_list);
        $result[1]     = json_decode($result[1], true);
        $response      = ['response' => $result[1], 'code' => $result[0], 'request' => $data_campaign];

        return $response;
    }

    public static function getContentList($slug){
        try {
            $result = [];
            $cache  = Redis::get("truestore:truemoveh_level_c_list:$slug");

            if ($cache) {
                $result = json_decode($cache, 1);
            }

            if (!$result) {
                $model  = new TruemovehLevelCListModel();
                $result = $model->findFirst($slug);
                $result = $result ? $result->toArray() : [];
                if ($result) {
                    Redis::set("truestore:truemoveh_level_c_list:$slug", json_encode($result));
                }
            }
            $response = (object) $result;
        } catch (\Exception $e) {
            $response = (object) [];
        }
        return $response;
    }
}
