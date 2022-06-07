<?php
namespace App\Services;

use App\Libraries\Clients\PortalApiClient;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Redis;

class AdvertisementService
{
    /**
     * getAdvertisement
     * @return array
     */ 
    public static function getAdvertisement()
    {
        $url       = "wportal/content";
        $parameter = [
            "code"    => "truestore-advertising-pop-up",
            "section" => "wemall",
            "limit"   => 20,
            "fields"  => "group_title,group_name,sections(id,name,description,contents(id,title,banner,link,custom_fields))",
        ];

        $redis_key  = 'store-cache:api:url:' . $url . ':body:popup:content';
        $redis_data = Redis::get($redis_key);

        if (!empty($redis_data)) {
            return json_decode($redis_data, true);
        }

        $client   = new PortalApiClient();
        $response = $client->get($url, $parameter);
        $response = Arr::get($response, 'data.record', []);
        $contents = Arr::get($response, 'sections.0.contents', []);
        
        if (empty($contents)) return [];

        foreach ($contents as $key => $content) {
            foreach (Arr::get($content, 'title', []) as $lang => $title) {
                Arr::set($contents, "$key.title.$lang", htmlspecialchars_decode($title));
            }
        }

        Redis::set($redis_key, json_encode($contents), 'EX', 60 * 60 * 24 * 2);

        return $contents;
    }
}