<?php

namespace Tests\Unit;

use Tests\TestCase;
use Mockery;
use App\Facades\LvCService;
use Illuminate\Support\Facades\Redis;

class LvCServiceTest extends TestCase
{
    /**
     * @group testGetContentList
     **/
    public function testGetContentListEmptyConfig()
    {
        $input              = 'telephone';
        $expect             = (object) [];

        Redis::shouldReceive('get')->once()->with("truestore:truemoveh_level_c_list:$input")
        ->andReturn(null);

        $mock_model         = Mockery::mock('overload:App\Models\TruemovehLevelCListModel');
        $mock_model->shouldReceive('findFirst')
            ->once()
            ->andReturn(null)
            ->andReturn([]);

        Redis::shouldReceive('set')->never();

        $response = LvCService::getContentList($input);
        $this->assertEquals($expect, $response);
    }

    /**
     * @group testGetContentList
     **/
    public function testGetContentListSuccess()
    {
        $input              = 'mobile';
        $expect             = (object) array ('slug' => 'mobile', 'category_id' => '3366', 'brand_id' => '');

        Redis::shouldReceive('get')->once()->with("truestore:truemoveh_level_c_list:$input")
        ->andReturn(null);

        $mock_model         = Mockery::mock('overload:App\Models\TruemovehLevelCListModel');
        $mock_model->shouldReceive('findFirst')
                    ->with($input)
                    ->once()
                    ->andReturn($mock_model)
                    ->shouldReceive('toArray')
                    ->andReturn($expect);

        Redis::shouldReceive('set')->once()->andReturn(1);

        $response = LvCService::getContentList($input);
        $this->assertEquals($expect, $response);
    }

    /**
     * @group testGetContentList
     **/
    public function testGetContentListSuccessWithCacheRedis()
    {
        $input              = 'mobile-apple';
        $expect             = (object) json_decode('{"slug":"mobile-apple", "category_id":"3366", "brand_id":"893"}');

        Redis::shouldReceive('get')->once()->with("truestore:truemoveh_level_c_list:$input")->andReturn('{"slug":"mobile-apple","category_id":"3366","brand_id":"893"}');

        $mock_model         = Mockery::mock('overload:App\Models\TruemovehLevelCListModel');
        $mock_model->shouldReceive('findFirst')
            ->with($input)
            ->never();

        Redis::shouldReceive('set')->never();

        $response = LvCService::getContentList($input);
        $this->assertEquals($expect, $response);
    }

    /**
     * @group testGetContentList
     **/
    public function testGetContentListError()
    {
        $input              = 'mobile';
        $expect             = (object) [];

       Redis::shouldReceive('get')->once()->with("truestore:truemoveh_level_c_list:$input")
        ->andReturn(null);

        $mock_model         = Mockery::mock('overload:App\Models\TruemovehLevelCListModel');
        $mock_model->shouldReceive('findFirst')
                    ->with($input)
                    ->once()
                    ->andReturn($mock_model)
                    ->shouldReceive('toArray')
                    ->andThrow(new \Exception('Internal Server Error'));

        $response = LvCService::getContentList($input);
        $this->assertEquals($expect, $response);
    }

    /**
     * @group testGetPortalContentSuccessWithCache
     **/
    public function testGetPortalContentSuccessWithCache()
    {
        $input = ['code' => 'Truestore_level_a_config'];
        $tmp_lrequest = new \Illuminate\Http\Request();
        $tmp_lrequest->replace($input);

        $mock_config = [
            0 => 200,
            1 => '{"status_code":0,"status_txt":"OK","data":{"benchmark":"false","pagination":{"current":1,"limit":20,"total":7},"record":{"group_id":"276","group_name":"Truestore_level_a_config","group_title":"Truestore_level_a_config","category_ids":"","sections":[{"id":"382","key":null,"name":"Truestore_level_a_config","description":"","type":"0","category_id":"0","tags":"","contents":[{"id":"6238","section_id":"382","custom_fields":{"base_url":"https:\/\/www.wemall-dev.com\/upload\/","cms_code":"Truestore_level_a_main_banner","template_type":"main_banner"},"title":{"en":"","th":"main_banner"},"description":{"en":"","th":"main_banner"},"slug":{"en":"","th":"main-banner"},"channel":["web"],"banner":"","link_type":"external","link_id":false,"link":"https:\/\/pre-store.truecorp.co.th\/online-store\/","link_to":false,"full_link":false,"event_tracking":false,"start_date":"2021-10-31 04:00:23","end_date":"2022-06-16 10:41:08","follow":true,"sort":"2","view_count":null,"flag_show":"1","status":"1","created_at":"2022-01-07 02:38:43","updated_at":"2022-02-25 04:12:28"},{"id":"6239","section_id":"382","custom_fields":{"base_url":"https:\/\/www.wemall-dev.com\/upload\/","cms_code":"Truestore_level_a_sticky_banner","template_type":"stick_banner"},"title":{"en":"","th":"stick_banner"},"description":{"en":"","th":"stick_banner"},"slug":{"en":"","th":"stick-banner"},"channel":["web"],"banner":"","link_type":"external","link_id":false,"link":"\/","link_to":false,"full_link":false,"event_tracking":false,"start_date":"2021-06-16 10:42:05","end_date":"2022-06-16 10:41:08","follow":true,"sort":"3","view_count":null,"flag_show":"1","status":"1","created_at":"2022-01-07 02:39:27","updated_at":"2022-02-25 04:12:28"},{"id":"6219","section_id":"382","custom_fields":{"icon":"382\/16402324711382.png","display_products":"10","base_url":"https:\/\/www.wemall-dev.com\/upload\/","template_type":"flash_sale","product_campaign_id":"16961"},"title":{"en":"Flash Sale","th":"Flash Sale"},"description":{"en":"Flash Sale","th":"Flash Sale"},"slug":{"en":"flash-sale","th":"flash-sale"},"channel":["web"],"banner":"","link_type":"external","link_id":false,"link":"https:\/\/pre-store.truecorp.co.th\/online-store\/shop\/flash-sale","link_to":false,"full_link":false,"event_tracking":false,"start_date":"2022-01-01 03:00:23","end_date":"2022-07-01 10:28:08","follow":true,"sort":"4","view_count":null,"flag_show":"1","status":"1","created_at":"2021-12-23 04:07:51","updated_at":"2022-04-04 07:33:09"},{"id":"6233","section_id":"382","custom_fields":{"base_url":"https:\/\/www.wemall-dev.com\/upload\/","icon":"382\/16412860361382.png","template_type":"exclusive","display_products":"10","product_campaign_id":"12858"},"title":{"en":"Exclusive on True Store","th":"Exclusive on True Store"},"description":{"en":"Exclusive on True Store Lorem ipsum dol or sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\r\nmagna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco","th":"\u0e1e\u0e34\u0e40\u0e28\u0e29\u0e40\u0e09\u0e1e\u0e32\u0e30\u0e17\u0e35\u0e48 True Store Lorem ipsum dol or sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\r\nmagna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"},"slug":{"en":"exclusive-on-true-store","th":"exclusive-on-true-store"},"channel":["web"],"banner":"","link_type":"external","link_id":false,"link":"https:\/\/pre-store.truecorp.co.th\/online-store\/shop\/exclusive-on-true-store","link_to":false,"full_link":false,"event_tracking":false,"start_date":"2021-12-27 04:23:17","end_date":"2022-05-09 04:23:17","follow":true,"sort":"6","view_count":null,"flag_show":"1","status":"1","created_at":"2021-12-31 06:29:46","updated_at":"2022-02-25 04:12:29"},{"id":"6221","section_id":"382","custom_fields":{"icon":"382\/16402333041382.png","display_products":"10","base_url":"https:\/\/www.wemall-dev.com\/upload\/","template_type":"best_seller","product_campaign_id":"16963"},"title":{"en":"Best Seller","th":"Best Seller"},"description":{"en":"Best Seller Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco","th":"\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32\u0e02\u0e32\u0e22\u0e14\u0e35 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"},"slug":{"en":"best-seller","th":"best-seller"},"channel":["web"],"banner":"","link_type":"external","link_id":false,"link":"https:\/\/pre-store.truecorp.co.th\/online-store\/shop\/best-seller","link_to":false,"full_link":false,"event_tracking":false,"start_date":"2021-10-31 04:00:23","end_date":"2022-06-16 10:28:08","follow":true,"sort":"8","view_count":null,"flag_show":"1","status":"1","created_at":"2021-12-23 04:21:45","updated_at":"2022-02-25 04:12:29"},{"id":"6225","section_id":"382","custom_fields":{"mobile_image":"382\/16448095842382.png","image":"382\/16406803760382.png","icon":"382\/16405801981382.png","base_url":"https:\/\/www.wemall-dev.com\/upload\/","display_products":"4","template_type":"new_arrivals_right","product_campaign_id":"16964"},"title":{"en":"New Arrivals","th":"New Arrivals"},"description":{"en":"New Arrivals Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\r\nmagna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco","th":"\u0e02\u0e2d\u0e07\u0e21\u0e32\u0e43\u0e2b\u0e21\u0e48 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\r\nmagna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"},"slug":{"en":"new-arrivals","th":"new-arrivals"},"channel":["web"],"banner":"","link_type":"external","link_id":false,"link":"https:\/\/pre-store.truecorp.co.th\/online-store\/shop\/new-arrivals","link_to":false,"full_link":false,"event_tracking":false,"start_date":"2021-12-27 04:39:19","end_date":"2022-12-31 04:39:19","follow":true,"sort":"11","view_count":null,"flag_show":"1","status":"1","created_at":"2021-12-27 04:43:18","updated_at":"2022-03-07 07:39:25"},{"id":"6231","section_id":"382","custom_fields":{"base_url":"https:\/\/www.wemall-dev.com\/upload\/","cms_code":"Truestore_level_a_top_brand","template_type":"top_brands","icon":"382\/16412868501382.png"},"title":{"en":"Top Brands","th":"Top Brands"},"description":{"en":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\r\nmagna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi","th":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\r\nmagna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"},"slug":{"en":"top-brands","th":"top-brands"},"channel":["web"],"banner":"","link_type":"external","link_id":false,"link":"https:\/\/pre-store.truecorp.co.th\/online-store\/shop\/top-brands","link_to":false,"full_link":false,"event_tracking":false,"start_date":"2021-10-31 04:00:23","end_date":"2022-06-16 10:28:08","follow":true,"sort":"12","view_count":null,"flag_show":"1","status":"1","created_at":"2021-12-29 07:05:34","updated_at":"2022-04-04 03:50:49"}]}]}}}'
        ];

        Redis::shouldReceive('get')->with('store-cache:api:url:wportal/content:body:' . json_encode($input) . ':content')->once()->andReturn(json_encode($mock_config));

        $result = LvCService::getPortalContent($tmp_lrequest);
        $this->assertEquals($mock_config, $result);
    }

    /**
     * @group testGetPortalContentSuccessWithNoCache
     **/
    public function testGetPortalContentSuccessWithNoCache()
    {
        $input = ['code' => 'Truestore_level_a_config', 'fields' => 'name'];
        $tmp_lrequest = new \Illuminate\Http\Request();
        $tmp_lrequest->replace($input);

        $mock_config = [
            0 => 200,
            1 => '{"status_code":0,"status_txt":"OK","data":{"benchmark":"false","pagination":{"current":1,"limit":20,"total":7},"record":{"group_id":"276","group_name":"Truestore_level_a_config","group_title":"Truestore_level_a_config","category_ids":"","sections":[{"id":"382","key":null,"name":"Truestore_level_a_config","description":"","type":"0","category_id":"0","tags":"","contents":[{"id":"6238","section_id":"382","custom_fields":{"base_url":"https:\/\/www.wemall-dev.com\/upload\/","cms_code":"Truestore_level_a_main_banner","template_type":"main_banner"},"title":{"en":"","th":"main_banner"},"description":{"en":"","th":"main_banner"},"slug":{"en":"","th":"main-banner"},"channel":["web"],"banner":"","link_type":"external","link_id":false,"link":"https:\/\/pre-store.truecorp.co.th\/online-store\/","link_to":false,"full_link":false,"event_tracking":false,"start_date":"2021-10-31 04:00:23","end_date":"2022-06-16 10:41:08","follow":true,"sort":"2","view_count":null,"flag_show":"1","status":"1","created_at":"2022-01-07 02:38:43","updated_at":"2022-02-25 04:12:28"},{"id":"6239","section_id":"382","custom_fields":{"base_url":"https:\/\/www.wemall-dev.com\/upload\/","cms_code":"Truestore_level_a_sticky_banner","template_type":"stick_banner"},"title":{"en":"","th":"stick_banner"},"description":{"en":"","th":"stick_banner"},"slug":{"en":"","th":"stick-banner"},"channel":["web"],"banner":"","link_type":"external","link_id":false,"link":"\/","link_to":false,"full_link":false,"event_tracking":false,"start_date":"2021-06-16 10:42:05","end_date":"2022-06-16 10:41:08","follow":true,"sort":"3","view_count":null,"flag_show":"1","status":"1","created_at":"2022-01-07 02:39:27","updated_at":"2022-02-25 04:12:28"},{"id":"6219","section_id":"382","custom_fields":{"icon":"382\/16402324711382.png","display_products":"10","base_url":"https:\/\/www.wemall-dev.com\/upload\/","template_type":"flash_sale","product_campaign_id":"16961"},"title":{"en":"Flash Sale","th":"Flash Sale"},"description":{"en":"Flash Sale","th":"Flash Sale"},"slug":{"en":"flash-sale","th":"flash-sale"},"channel":["web"],"banner":"","link_type":"external","link_id":false,"link":"https:\/\/pre-store.truecorp.co.th\/online-store\/shop\/flash-sale","link_to":false,"full_link":false,"event_tracking":false,"start_date":"2022-01-01 03:00:23","end_date":"2022-07-01 10:28:08","follow":true,"sort":"4","view_count":null,"flag_show":"1","status":"1","created_at":"2021-12-23 04:07:51","updated_at":"2022-04-04 07:33:09"},{"id":"6233","section_id":"382","custom_fields":{"base_url":"https:\/\/www.wemall-dev.com\/upload\/","icon":"382\/16412860361382.png","template_type":"exclusive","display_products":"10","product_campaign_id":"12858"},"title":{"en":"Exclusive on True Store","th":"Exclusive on True Store"},"description":{"en":"Exclusive on True Store Lorem ipsum dol or sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\r\nmagna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco","th":"\u0e1e\u0e34\u0e40\u0e28\u0e29\u0e40\u0e09\u0e1e\u0e32\u0e30\u0e17\u0e35\u0e48 True Store Lorem ipsum dol or sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\r\nmagna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"},"slug":{"en":"exclusive-on-true-store","th":"exclusive-on-true-store"},"channel":["web"],"banner":"","link_type":"external","link_id":false,"link":"https:\/\/pre-store.truecorp.co.th\/online-store\/shop\/exclusive-on-true-store","link_to":false,"full_link":false,"event_tracking":false,"start_date":"2021-12-27 04:23:17","end_date":"2022-05-09 04:23:17","follow":true,"sort":"6","view_count":null,"flag_show":"1","status":"1","created_at":"2021-12-31 06:29:46","updated_at":"2022-02-25 04:12:29"},{"id":"6221","section_id":"382","custom_fields":{"icon":"382\/16402333041382.png","display_products":"10","base_url":"https:\/\/www.wemall-dev.com\/upload\/","template_type":"best_seller","product_campaign_id":"16963"},"title":{"en":"Best Seller","th":"Best Seller"},"description":{"en":"Best Seller Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco","th":"\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32\u0e02\u0e32\u0e22\u0e14\u0e35 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"},"slug":{"en":"best-seller","th":"best-seller"},"channel":["web"],"banner":"","link_type":"external","link_id":false,"link":"https:\/\/pre-store.truecorp.co.th\/online-store\/shop\/best-seller","link_to":false,"full_link":false,"event_tracking":false,"start_date":"2021-10-31 04:00:23","end_date":"2022-06-16 10:28:08","follow":true,"sort":"8","view_count":null,"flag_show":"1","status":"1","created_at":"2021-12-23 04:21:45","updated_at":"2022-02-25 04:12:29"},{"id":"6225","section_id":"382","custom_fields":{"mobile_image":"382\/16448095842382.png","image":"382\/16406803760382.png","icon":"382\/16405801981382.png","base_url":"https:\/\/www.wemall-dev.com\/upload\/","display_products":"4","template_type":"new_arrivals_right","product_campaign_id":"16964"},"title":{"en":"New Arrivals","th":"New Arrivals"},"description":{"en":"New Arrivals Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\r\nmagna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco","th":"\u0e02\u0e2d\u0e07\u0e21\u0e32\u0e43\u0e2b\u0e21\u0e48 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\r\nmagna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"},"slug":{"en":"new-arrivals","th":"new-arrivals"},"channel":["web"],"banner":"","link_type":"external","link_id":false,"link":"https:\/\/pre-store.truecorp.co.th\/online-store\/shop\/new-arrivals","link_to":false,"full_link":false,"event_tracking":false,"start_date":"2021-12-27 04:39:19","end_date":"2022-12-31 04:39:19","follow":true,"sort":"11","view_count":null,"flag_show":"1","status":"1","created_at":"2021-12-27 04:43:18","updated_at":"2022-03-07 07:39:25"},{"id":"6231","section_id":"382","custom_fields":{"base_url":"https:\/\/www.wemall-dev.com\/upload\/","cms_code":"Truestore_level_a_top_brand","template_type":"top_brands","icon":"382\/16412868501382.png"},"title":{"en":"Top Brands","th":"Top Brands"},"description":{"en":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\r\nmagna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi","th":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\r\nmagna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"},"slug":{"en":"top-brands","th":"top-brands"},"channel":["web"],"banner":"","link_type":"external","link_id":false,"link":"https:\/\/pre-store.truecorp.co.th\/online-store\/shop\/top-brands","link_to":false,"full_link":false,"event_tracking":false,"start_date":"2021-10-31 04:00:23","end_date":"2022-06-16 10:28:08","follow":true,"sort":"12","view_count":null,"flag_show":"1","status":"1","created_at":"2021-12-29 07:05:34","updated_at":"2022-04-04 03:50:49"}]}]}}}'
        ];

        Redis::shouldReceive('get')->with('store-cache:api:url:wportal/content:body:' . json_encode($input) . ':content')->once()->andReturn(null);

        $mock_guzzle_service = Mockery::mock('alias:App\Services\GuzzleService');
        $mock_guzzle_service->shouldReceive('postGuzzleRequest')->once()->andReturn($mock_config);

        $mock_wls_service = Mockery::mock('alias:App\Services\WlsService');
        $mock_wls_service->shouldReceive('setRedisCacheDir')->once()->andReturn(true);

        $result = LvCService::getPortalContent($tmp_lrequest);
        $this->assertEquals($mock_config, $result);
    }

    /**
     * @group testGetPortalContentSuccessWithCannotFindData
     **/
    public function testGetPortalContentSuccessWithCannotFindData()
    {
        $input = ['code' => 'Truestore_level_a_config', 'fields' => 'name'];
        $tmp_lrequest = new \Illuminate\Http\Request();
        $tmp_lrequest->replace($input);

        $mock_config = [
            0 => 400,
            1 => '{"status_code":0,"status_txt":"OK","data":{"message":"error"}}'
        ];

        $mock_expect = [
            0 => 400,
            1 => '{"status_code":0,"status_txt":"OK","data":{"message":"error"},"message":{"en":"error","th":"error"}}'
        ];

        Redis::shouldReceive('get')->with('store-cache:api:url:wportal/content:body:' . json_encode($input) . ':content')->once()->andReturn(null);

        $mock_guzzle_service = Mockery::mock('alias:App\Services\GuzzleService');
        $mock_guzzle_service->shouldReceive('postGuzzleRequest')->once()->andReturn($mock_config);

        $mock_wls_service = Mockery::mock('alias:App\Services\WlsService');
        $mock_wls_service->shouldReceive('setRedisCacheDir')->once()->andReturn(true);

        $result = LvCService::getPortalContent($tmp_lrequest);
        $this->assertEquals($mock_expect, $result);
    }

    /**
     * @group testGetPortalContentFailWithThrowException
     **/
    public function testGetPortalContentFailWithThrowException()
    {
        $input = ['code' => 'Truestore_level_a_config'];
        $tmp_lrequest = new \Illuminate\Http\Request();
        $tmp_lrequest->replace($input);

        Redis::shouldReceive('get')->with('store-cache:api:url:wportal/content:body:' . json_encode($input) . ':content')->once()->andThrow(new \Exception('Internal Server Error'));

        $result = LvCService::getPortalContent($tmp_lrequest);
        $this->assertEquals([], $result);
    }
}
