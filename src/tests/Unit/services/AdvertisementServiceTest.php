<?php

namespace Tests\Unit;

use Mockery as m;
use Tests\TestCase;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Redis;
use App\Services\AdvertisementService;

class AdvertisementServiceTest extends TestCase
{
    /**
     * @group testGetAdvertisement
     **/
    public function testGetAdvertisementSuccess()
    { 
        $url       = 'wportal/content'; 
        $parameter = [
            "code"    => "truestore-advertising-pop-up",
            "section" => "wemall",
            "limit"   => 20,
            "fields"  => "group_title,group_name,sections(id,name,description,contents(id,title,banner,link,custom_fields))",
        ];
        
        $mock_response = '{"status_code":0,"status_txt":"OK","data":{"benchmark":"false","pagination":{"current":1,"limit":20,"total":3},"record":{"group_title":"truestore-advertising-pop-up","group_name":"truestore-advertising-pop-up","sections":[{"id":"399","name":"truestore-advertising-pop-up","description":"truestore-advertising-pop-up","contents":[{"id":"111153","title":{"en":"","th":"pop-up-1(&amp;)"},"banner":"399\/16431903640399.png","link":"https:\/\/pre-store.truecorp.co.th\/online-store\/berfuntong ","custom_fields":{"base_url":"https:\/\/www.wemall-dev.com\/upload\/"}},{"id":"111154","title":{"en":"","th":"pop-up-2"},"banner":"399\/16431903880399.png","link":"https:\/\/pre-store.truecorp.co.th\/online-store\/item\/L91597557","custom_fields":{"base_url":"https:\/\/www.wemall-dev.com\/upload\/"}},{"id":"111155","title":{"en":"","th":"pop-up-3"},"banner":"399\/16431904150399.png","link":"https:\/\/www.facebook.com\/truestore.fb\/","custom_fields":{"base_url":"https:\/\/www.wemall-dev.com\/upload\/"}}]}]}}}';

        $redis_key  = 'store-cache:api:url:' . $url . ':body:popup:content';
        Redis::shouldReceive('get')->with($redis_key)->andReturn(null);
        Redis::shouldReceive('set')->andReturn(1);

        $mock_model = m::mock('overload:App\Libraries\Clients\PortalApiClient')->makePartial();
        $mock_model->shouldReceive('get')
            ->with($url, $parameter)
            ->andReturn((array)json_decode($mock_response, true));
             
        $response = AdvertisementService::getAdvertisement();
         
        $this->assertNotEmpty($response);
        $this->assertEquals(3, count($response));
        $this->assertArrayHasKey('title', Arr::get($response, '0'));
        $this->assertEquals('pop-up-1(&)', Arr::get($response, '0.title.th'));
        $this->assertArrayHasKey('banner', Arr::get($response, '0'));
        $this->assertEquals('399/16431903640399.png', Arr::get($response, '0.banner'));
        $this->assertArrayHasKey('link', Arr::get($response, '0'));
        $this->assertEquals('https://pre-store.truecorp.co.th/online-store/berfuntong ', Arr::get($response, '0.link'));
        $this->assertArrayHasKey('custom_fields', Arr::get($response, '0'));
        $this->assertEquals('https://www.wemall-dev.com/upload/', Arr::get($response, '0.custom_fields.base_url'));
    }

     /**
     * @group testGetAdvertisement
     **/
    public function testGetCacheAdvertisementSuccess()
    { 
        $url       = 'wportal/content'; 
        $parameter = [
            "code"    => "truestore-advertising-pop-up",
            "section" => "wemall",
            "limit"   => 20,
            "fields"  => "group_title,group_name,sections(id,name,description,contents(id,title,banner,link,custom_fields))",
        ];
        
        $mock_response = '{"status_code":0,"status_txt":"OK","data":{"benchmark":"false","pagination":{"current":1,"limit":20,"total":3},"record":{"group_title":"truestore-advertising-pop-up","group_name":"truestore-advertising-pop-up","sections":[{"id":"399","name":"truestore-advertising-pop-up","description":"truestore-advertising-pop-up","contents":[{"id":"111153","title":{"en":"","th":"pop-up-1"},"banner":"399\/16431903640399.png","link":"https:\/\/pre-store.truecorp.co.th\/online-store\/berfuntong ","custom_fields":{"base_url":"https:\/\/www.wemall-dev.com\/upload\/"}},{"id":"111154","title":{"en":"","th":"pop-up-2"},"banner":"399\/16431903880399.png","link":"https:\/\/pre-store.truecorp.co.th\/online-store\/item\/L91597557","custom_fields":{"base_url":"https:\/\/www.wemall-dev.com\/upload\/"}},{"id":"111155","title":{"en":"","th":"pop-up-3"},"banner":"399\/16431904150399.png","link":"https:\/\/www.facebook.com\/truestore.fb\/","custom_fields":{"base_url":"https:\/\/www.wemall-dev.com\/upload\/"}}]}]}}}';

        $cache = '[ { "id":"111153", "title":{ "en":"", "th":"pop-up-1" }, "banner":"399\/16431903640399.png", "link":"https:\/\/pre-store.truecorp.co.th\/online-store\/berfuntong ", "custom_fields":{ "base_url":"https:\/\/www.wemall-dev.com\/upload\/" } }, { "id":"111154", "title":{ "en":"", "th":"pop-up-2" }, "banner":"399\/16431903880399.png", "link":"https:\/\/pre-store.truecorp.co.th\/online-store\/item\/L91597557", "custom_fields":{ "base_url":"https:\/\/www.wemall-dev.com\/upload\/" } }, { "id":"111155", "title":{ "en":"", "th":"pop-up-3" }, "banner":"399\/16431904150399.png", "link":"https:\/\/www.facebook.com\/truestore.fb\/", "custom_fields":{ "base_url":"https:\/\/www.wemall-dev.com\/upload\/" } } ]';

        $redis_key  = 'store-cache:api:url:' . $url . ':body:popup:content';
        Redis::shouldReceive('get')->with($redis_key)->andReturn($cache);
        Redis::shouldReceive('set')->andReturn(1);

        $mock_model = m::mock('overload:App\Libraries\Clients\PortalApiClient')->makePartial();
        $mock_model->shouldReceive('get')
            ->with($url, $parameter)
            ->andReturn((array)json_decode($mock_response, true));
             
        $response = AdvertisementService::getAdvertisement();
         
        $this->assertNotEmpty($response);
        $this->assertEquals(3, count($response));
        $this->assertArrayHasKey('title', Arr::get($response, '0'));
        $this->assertEquals('pop-up-1', Arr::get($response, '0.title.th'));
        $this->assertArrayHasKey('banner', Arr::get($response, '0'));
        $this->assertEquals('399/16431903640399.png', Arr::get($response, '0.banner'));
        $this->assertArrayHasKey('link', Arr::get($response, '0'));
        $this->assertEquals('https://pre-store.truecorp.co.th/online-store/berfuntong ', Arr::get($response, '0.link'));
        $this->assertArrayHasKey('custom_fields', Arr::get($response, '0'));
        $this->assertEquals('https://www.wemall-dev.com/upload/', Arr::get($response, '0.custom_fields.base_url'));
    }
} 