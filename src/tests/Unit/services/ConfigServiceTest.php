<?php

namespace Tests\Unit;

use App\Services\ConfigService;
use Tests\TestCase;

class ConfigServiceTest extends TestCase
{
    private $mock_redis;
    private $mock_truemoveh_config_bundle_campaign;
    private $mock_truemoveh_config_free_device;

    /**
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function setUp(): void
    {
        parent::setUp();
        $this->mock_redis = \Mockery::mock('overload:Redis');
        $this->mock_truemoveh_config_bundle_campaign = \Mockery::mock('overload:App\Models\TruemovehConfigBundleCampaign');
        $this->mock_truemoveh_config = \Mockery::mock('overload:App\Models\TruemovehConfigModel');
        $this->mock_truemoveh_config_free_device = \Mockery::mock('overload:App\Models\TruemovehConfigFreeDeviceExcludeVat');
    }

    /**
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function tearDown(): void
    {
        parent::tearDown();
        \Mockery::close();
    }

    /**
     * @group testGetBundleCampaignSuccessWithGetRedis
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testGetBundleCampaignSuccessWithGetRedis()
    {
        $mock_result_redis = '{"typhoon-black":{"bundle_ref_codes":["YN940-iPhone12-1399-mnp-one-step-black","YN943-iPhone12-1699-mnp-typhoon"],"bundle_existing_ref_codes":["TM007","TM370","TM371","TM006","TM027"],"special_campaign":[{"type":"mnp-bundle","html":"<ul><li>Upgrade to TrueBlack for 12 months when apply package 899 or above</li></ul>"},{"type":"new-customer","html":"<ul><li>Upgrade to TrueBlack for 12 months when apply package 899 or above</li></ul>"}]},"typhoon-red":{"special_campaign":[{"type":"mnp-bundle","html":"<ul><li>Upgrade to TrueBlack for 12 months when apply package 899 or above</li></ul>"},{"type":"new-customer","html":"<ul><li>Upgrade to TrueBlack for 12 months when apply package 899 or above</li></ul>"}]}}';

        $this->mock_redis->shouldReceive('get')->once()->with('truestore:whitelist:bundle_campaign')->andReturn(json_encode(['L915201']));
        $this->mock_redis->shouldReceive('get')->with('truestore:typhoon_filter_refcode_node_bundles:product_id:L915201:redis_data')->andReturn($mock_result_redis);

        $response = ConfigService::getBundleCampaign('L915201');
        $this->assertEquals($mock_result_redis, $response);
    }

    /**
     * @group testGetBundleCampaignSuccessWithGetDataSuccessFromDynamoDB
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testGetBundleCampaignSuccessWithGetDataSuccessFromDynamoDB()
    {
        $mock_result = '[{"bundle_ref_codes":["YN940-iPhone12-1399-mnp-one-step-black","YN943-iPhone12-1699-mnp-typhoon"],"bundle_existing_ref_codes":["TM007","TM370","TM371","TM006","TM027"],"campaign":"typhoon-black","product_id":"L9159XXXXXX","special_campaign":[{"type":"mnp-bundle","html":"<ul><li>Free Lucky number</li></ul>"},{"type":"new-customer","html":"<ul><li>Upgrade to TrueBlack for 12 months when apply package 899 or above</li></ul>"}]},{"campaign":"typhoon-red","product_id":"L9159XXXXXX","special_campaign":[{"type":"mnp-bundle","html":"<ul><li>Free Lucky number</li></ul>"},{"type":"new-customer","html":"<ul><li>Upgrade to TrueBlack for 12 months when apply package 899 or above</li></ul>"}]}]';
        $result = '{"typhoon-black":{"bundle_ref_codes":["YN940-iPhone12-1399-mnp-one-step-black","YN943-iPhone12-1699-mnp-typhoon"],"bundle_existing_ref_codes":["TM007","TM370","TM371","TM006","TM027"],"special_campaign":[{"type":"mnp-bundle","html":"<ul><li>Free Lucky number<\/li><\/ul>"},{"type":"new-customer","html":"<ul><li>Upgrade to TrueBlack for 12 months when apply package 899 or above<\/li><\/ul>"}]},"typhoon-red":{"special_campaign":[{"type":"mnp-bundle","html":"<ul><li>Free Lucky number<\/li><\/ul>"},{"type":"new-customer","html":"<ul><li>Upgrade to TrueBlack for 12 months when apply package 899 or above<\/li><\/ul>"}]}}';

        $this->mock_redis->shouldReceive('get')->once()->with('truestore:whitelist:bundle_campaign')->andReturn(json_encode(['L915201']));
        $this->mock_redis->shouldReceive('get')->once()->with('truestore:typhoon_filter_refcode_node_bundles:product_id:L915201:redis_data')->andReturn(null);
        $this->mock_truemoveh_config_bundle_campaign->shouldReceive('getAll')->once()->with('L915201')->andReturn(json_decode($mock_result, true));
        $this->mock_redis->shouldReceive('set')->once()->with('truestore:typhoon_filter_refcode_node_bundles:product_id:L915201:redis_data', $result)->andReturn(true);

        $response = ConfigService::getBundleCampaign('L915201');
        $this->assertEquals($result, $response);
    }

    /**
     * @group testGetBundleCampaignSuccessWithGetDataFailWithThrowFromDynamoDB
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testGetBundleCampaignSuccessWithGetDataFailWithThrowFromDynamoDB()
    {
        $result = '{"typhoon-black":{"bundle_ref_codes":["YN940-iPhone12-1399-mnp-one-step-black","YN943-iPhone12-1699-mnp-typhoon"],"bundle_existing_ref_codes":["TM007","TM370","TM371","TM006","TM027"],"special_campaign":[{"type":"mnp-bundle","html":"<ul><li>Free Lucky number<\/li><\/ul>"},{"type":"new-customer","html":"<ul><li>Upgrade to TrueBlack for 12 months when apply package 899 or above<\/li><\/ul>"}]},"typhoon-red":{"special_campaign":[{"type":"mnp-bundle","html":"<ul><li>Free Lucky number<\/li><\/ul>"},{"type":"new-customer","html":"<ul><li>Upgrade to TrueBlack for 12 months when apply package 899 or above<\/li><\/ul>"}]}}';

        $this->mock_redis->shouldReceive('get')->once()->with('truestore:whitelist:bundle_campaign')->andReturn(json_encode(['L915201']));
        $this->mock_redis->shouldReceive('get')->once()->with('truestore:typhoon_filter_refcode_node_bundles:product_id:L915201:redis_data')->andReturn(null);
        $this->mock_truemoveh_config_bundle_campaign->shouldReceive('getAll')->once()->with('L915201')->andThrow(new \Exception('error'));
        $this->mock_redis->shouldReceive('set')->never()->with('truestore:typhoon_filter_refcode_node_bundles:product_id:L915201:redis_data', $result)->andReturn(true);

        $response = ConfigService::getBundleCampaign('L915201');
        $this->assertEquals('', $response);
    }

    /**
     * @group testGetBundleCampaignSuccessWithGetDataFailFromDynamoDB
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testGetBundleCampaignSuccessWithGetDataFailFromDynamoDB()
    {
        $this->mock_redis->shouldReceive('get')->once()->with('truestore:whitelist:bundle_campaign')->andReturn(json_encode(['L915201']));

        $this->mock_redis->shouldReceive('get')->once()->with('truestore:typhoon_filter_refcode_node_bundles:product_id:L915201:redis_data')->andReturn(null);
        $this->mock_truemoveh_config_bundle_campaign->shouldReceive('getAll')->once()->with('L915201')->andReturn([]);

        $response = ConfigService::getBundleCampaign('L915201');
        $this->assertEquals('', $response);
    }

    /**
     * @group testGetBundleCampaignWithWhiteListReturnNullProductFromRedis
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testGetBundleCampaignWithWhiteListReturnNullProductFromRedis()
    {
        $mock_result_redis = '{"typhoon-black":{"bundle_ref_codes":["YN940-iPhone12-1399-mnp-one-step-black","YN943-iPhone12-1699-mnp-typhoon"],"bundle_existing_ref_codes":["TM007","TM370","TM371","TM006","TM027"],"special_campaign":[{"type":"mnp-bundle","html":"<ul><li>Upgrade to TrueBlack for 12 months when apply package 899 or above</li></ul>"},{"type":"new-customer","html":"<ul><li>Upgrade to TrueBlack for 12 months when apply package 899 or above</li></ul>"}]},"typhoon-red":{"special_campaign":[{"type":"mnp-bundle","html":"<ul><li>Upgrade to TrueBlack for 12 months when apply package 899 or above</li></ul>"},{"type":"new-customer","html":"<ul><li>Upgrade to TrueBlack for 12 months when apply package 899 or above</li></ul>"}]}}';

        $this->mock_redis->shouldReceive('get')->with('truestore:typhoon_filter_refcode_node_bundles:product_id:L915201:redis_data')->andReturn($mock_result_redis);
        $this->mock_redis->shouldReceive('get')->once()->with('truestore:whitelist:bundle_campaign')->andReturn(null);

        $response = ConfigService::getBundleCampaign('L915201');
        $this->assertEquals($mock_result_redis, $response);
    }

    /**
     * @group testGetBundleCampaignWithAllRedisReturnNull
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testGetBundleCampaignWithAllRedisReturnNull()
    {
        $mock_result = '[{"bundle_ref_codes":["YN940-iPhone12-1399-mnp-one-step-black","YN943-iPhone12-1699-mnp-typhoon"],"bundle_existing_ref_codes":["TM007","TM370","TM371","TM006","TM027"],"campaign":"typhoon-black","product_id":"L9159XXXXXX","special_campaign":[{"type":"mnp-bundle","html":"<ul><li>Free Lucky number</li></ul>"},{"type":"new-customer","html":"<ul><li>Upgrade to TrueBlack for 12 months when apply package 899 or above</li></ul>"}]},{"campaign":"typhoon-red","product_id":"L9159XXXXXX","special_campaign":[{"type":"mnp-bundle","html":"<ul><li>Free Lucky number</li></ul>"},{"type":"new-customer","html":"<ul><li>Upgrade to TrueBlack for 12 months when apply package 899 or above</li></ul>"}]}]';
        $result = '{"typhoon-black":{"bundle_ref_codes":["YN940-iPhone12-1399-mnp-one-step-black","YN943-iPhone12-1699-mnp-typhoon"],"bundle_existing_ref_codes":["TM007","TM370","TM371","TM006","TM027"],"special_campaign":[{"type":"mnp-bundle","html":"<ul><li>Free Lucky number<\/li><\/ul>"},{"type":"new-customer","html":"<ul><li>Upgrade to TrueBlack for 12 months when apply package 899 or above<\/li><\/ul>"}]},"typhoon-red":{"special_campaign":[{"type":"mnp-bundle","html":"<ul><li>Free Lucky number<\/li><\/ul>"},{"type":"new-customer","html":"<ul><li>Upgrade to TrueBlack for 12 months when apply package 899 or above<\/li><\/ul>"}]}}';

        $this->mock_redis->shouldReceive('get')->once()->with('truestore:whitelist:bundle_campaign')->andReturn(null);
        $this->mock_redis->shouldReceive('get')->once()->with('truestore:typhoon_filter_refcode_node_bundles:product_id:L915201:redis_data')->andReturn(null);
        $this->mock_truemoveh_config_bundle_campaign->shouldReceive('getAll')->once()->with('L915201')->andReturn(json_decode($mock_result, true));
        $this->mock_redis->shouldReceive('set')->once()->with('truestore:typhoon_filter_refcode_node_bundles:product_id:L915201:redis_data', $result)->andReturn(true);

        $response = ConfigService::getBundleCampaign('L915201');
        $this->assertEquals($result, $response);
    }

    /**
     * @group testGetBundleCampaignWithAllRedisReturnEmpty
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testGetBundleCampaignWithAllRedisReturnEmpty()
    {
        $mock_result = '[{"bundle_ref_codes":["YN940-iPhone12-1399-mnp-one-step-black","YN943-iPhone12-1699-mnp-typhoon"],"bundle_existing_ref_codes":["TM007","TM370","TM371","TM006","TM027"],"campaign":"typhoon-black","product_id":"L9159XXXXXX","special_campaign":[{"type":"mnp-bundle","html":"<ul><li>Free Lucky number</li></ul>"},{"type":"new-customer","html":"<ul><li>Upgrade to TrueBlack for 12 months when apply package 899 or above</li></ul>"}]},{"campaign":"typhoon-red","product_id":"L9159XXXXXX","special_campaign":[{"type":"mnp-bundle","html":"<ul><li>Free Lucky number</li></ul>"},{"type":"new-customer","html":"<ul><li>Upgrade to TrueBlack for 12 months when apply package 899 or above</li></ul>"}]}]';
        $result = '{"typhoon-black":{"bundle_ref_codes":["YN940-iPhone12-1399-mnp-one-step-black","YN943-iPhone12-1699-mnp-typhoon"],"bundle_existing_ref_codes":["TM007","TM370","TM371","TM006","TM027"],"special_campaign":[{"type":"mnp-bundle","html":"<ul><li>Free Lucky number<\/li><\/ul>"},{"type":"new-customer","html":"<ul><li>Upgrade to TrueBlack for 12 months when apply package 899 or above<\/li><\/ul>"}]},"typhoon-red":{"special_campaign":[{"type":"mnp-bundle","html":"<ul><li>Free Lucky number<\/li><\/ul>"},{"type":"new-customer","html":"<ul><li>Upgrade to TrueBlack for 12 months when apply package 899 or above<\/li><\/ul>"}]}}';

        $this->mock_redis->shouldReceive('get')->once()->with('truestore:whitelist:bundle_campaign')->andReturn('[]');
        $this->mock_redis->shouldReceive('get')->once()->with('truestore:typhoon_filter_refcode_node_bundles:product_id:L915201:redis_data')->andReturn(null);
        $this->mock_truemoveh_config_bundle_campaign->shouldReceive('getAll')->once()->with('L915201')->andReturn(json_decode($mock_result, true));
        $this->mock_redis->shouldReceive('set')->once()->with('truestore:typhoon_filter_refcode_node_bundles:product_id:L915201:redis_data', $result)->andReturn(true);

        $response = ConfigService::getBundleCampaign('L915201');
        $this->assertEquals($result, $response);
    }

    /**
     * @group testIsNoFreeShippingProductSuccessWithGetRedis
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testIsNoFreeShippingProductSuccessWithGetRedis()
    {
        $mock_result_redis = '["L91591800"]';

        $this->mock_redis->shouldReceive('get')->with('truestore:no_free_shipping_products:redis_data')->andReturn($mock_result_redis);

        $response = ConfigService::isNoFreeShippingProduct('L91591800');
        $this->assertEquals(true, $response);
    }

    /**
     * @group testIsNoFreeShippingProductSuccessWithNoProductInRedis
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testIsNoFreeShippingProductSuccessWithNoProductInRedis()
    {
        $mock_result_redis = '["L91591800"]';

        $this->mock_redis->shouldReceive('get')->with('truestore:no_free_shipping_products:redis_data')->andReturn($mock_result_redis);

        $response = ConfigService::isNoFreeShippingProduct('L91591801');
        $this->assertEquals(false, $response);
    }

    /**
     * @group testIsNoFreeShippingProductSuccessWithGetDataSuccessFromDynamoDB
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testIsNoFreeShippingProductSuccessWithGetDataSuccessFromDynamoDB()
    {
        $mock_result = '{"key":"no_free_shipping_products","value":"[\"L91591800\"]"}';

        $this->mock_redis->shouldReceive('get')->with('truestore:no_free_shipping_products:redis_data')->andReturn(null);
        $this->mock_truemoveh_config->shouldReceive('findFirst')->once()->with('no_free_shipping_products')->andReturn($this->mock_truemoveh_config);
        $this->mock_truemoveh_config->shouldReceive('toArray')->withNoArgs()->andReturn(json_decode($mock_result, true));
        $this->mock_redis->shouldReceive('set')->once()->with('truestore:no_free_shipping_products:redis_data', '["L91591800"]')->andReturn(true);

        $response = ConfigService::isNoFreeShippingProduct('L91591800');
        $this->assertEquals(true, $response);
    }

    /**
     * @group testIsNoFreeShippingProductSuccessWithGetDataSuccessFromDynamoDBButNoProduct
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testIsNoFreeShippingProductSuccessWithGetDataSuccessFromDynamoDBButNoProduct()
    {
        $mock_result = '{"key":"no_free_shipping_products","value":"[\"L91591800\"]"}';

        $this->mock_redis->shouldReceive('get')->with('truestore:no_free_shipping_products:redis_data')->andReturn(null);
        $this->mock_truemoveh_config->shouldReceive('findFirst')->once()->with('no_free_shipping_products')->andReturn($this->mock_truemoveh_config);
        $this->mock_truemoveh_config->shouldReceive('toArray')->withNoArgs()->andReturn(json_decode($mock_result, true));
        $this->mock_redis->shouldReceive('set')->once()->with('truestore:no_free_shipping_products:redis_data', '["L91591800"]')->andReturn(true);

        $response = ConfigService::isNoFreeShippingProduct('L91591801');
        $this->assertEquals(false, $response);
    }

    /**
     * @group testIsNoFreeShippingProductFailWithNoDataFromDynamoDB
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testIsNoFreeShippingProductFailWithNoDataFromDynamoDB()
    {
        $this->mock_redis->shouldReceive('get')->with('truestore:no_free_shipping_products:redis_data')->andReturn(null);
        $this->mock_truemoveh_config->shouldReceive('findFirst')->once()->with('no_free_shipping_products')->andReturn(null);
        $this->mock_redis->shouldReceive('set')->never()->with('truestore:no_free_shipping_products:redis_data', '["L91591800"]')->andReturn(true);

        $response = ConfigService::isNoFreeShippingProduct('L91591800');
        $this->assertEquals(false, $response);
    }

    /**
     * @group testIsNoFreeShippingProductFailWithThrowFromDynamoDB
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testIsNoFreeShippingProductFailWithThrowFromDynamoDB()
    {
        $this->mock_redis->shouldReceive('get')->with('truestore:no_free_shipping_products:redis_data')->andReturn(null);
        $this->mock_truemoveh_config->shouldReceive('findFirst')->once()->with('no_free_shipping_products')->andThrow(new \Exception('error'));
        $this->mock_redis->shouldReceive('set')->never()->with('truestore:no_free_shipping_products:redis_data', '["L91591800"]')->andReturn(true);

        $response = ConfigService::isNoFreeShippingProduct('L91591800');
        $this->assertEquals(false, $response);
    }

    /**
     * @group testGetExceptionPackagesSuccessWithGetRedis
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testGetExceptionPackagesSuccessWithGetRedis()
    {
        $mock_result_redis = json_decode('{"0095320":"1","super4g":"1","0050210":"1","RMV000000021280":"1","RMV000000021282":"1","RMV000000022128":"1","RMV000000024631":"1","RMV000000011530":"1","RMV000000003296":"1","RMV000000003297":"1","RMV000000003298":"1","0094029":"1","0094030":"1","0095096":"1","0095097":"1","0094031":"1","0094032":"1","RMV000000023866":"1","RMV000000023867":"1","PRE000000000010":"1","0085777":"1","0085778":"1","0085779":"1","0088969":"1","0088970":"1","0088971":"1","0096675":"1","0096677":"1","0096679":"1","0096681":"1"}', true);

        $this->mock_redis->shouldReceive('hgetall')->with('truestore:nas_code_exception_list:search_package:redis_data')->andReturn($mock_result_redis);

        $response = ConfigService::getExceptionPackages();
        $this->assertEquals($mock_result_redis, $response);
    }

    /**
     * @group testGetExceptionPackagesSuccessWithGetDataSuccessFromDynamoDB
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testGetExceptionPackagesSuccessWithGetDataSuccessFromDynamoDB()
    {
        $mock_result = '{"0095320":"1","super4g":"1","0050210":"1","RMV000000021280":"1","RMV000000021282":"1","RMV000000022128":"1","RMV000000024631":"1","RMV000000011530":"1","RMV000000003296":"1","RMV000000003297":"1","RMV000000003298":"1","0094029":"1","0094030":"1","0095096":"1","0095097":"1","0094031":"1","0094032":"1","RMV000000023866":"1","RMV000000023867":"1","PRE000000000010":"1","0085777":"1","0085778":"1","0085779":"1","0088969":"1","0088970":"1","0088971":"1","0096675":"1","0096677":"1","0096679":"1","0096681":"1"}';
        $mock_result_dynamo = [
            'key' => 'exception_sim_package_page',
            'value' => $mock_result
        ];

        $this->mock_redis->shouldReceive('hgetall')->with('truestore:nas_code_exception_list:search_package:redis_data')->andReturn(null);
        $this->mock_truemoveh_config->shouldReceive('findFirst')->once()->with('exception_sim_package_page')->andReturn($this->mock_truemoveh_config);
        $this->mock_truemoveh_config->shouldReceive('toarray')->withNoArgs()->andReturn($mock_result_dynamo);
        $this->mock_redis->shouldReceive('hmset')->once()->with('truestore:nas_code_exception_list:search_package:redis_data', json_decode($mock_result, true))->andReturn(true);

        $response = ConfigService::getExceptionPackages();
        $this->assertEquals(json_decode($mock_result, true), $response);
    }

    /**
     * @group testGetExceptionPackagesFailWithNoDataFromDynamoDB
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testGetExceptionPackagesFailWithNoDataFromDynamoDB()
    {
        $this->mock_redis->shouldReceive('hgetall')->with('truestore:nas_code_exception_list:search_package:redis_data')->andReturn(null);
        $this->mock_truemoveh_config->shouldReceive('findFirst')->once()->with('exception_sim_package_page')->andReturn(null);
        $this->mock_redis->shouldReceive('hmset')->never()->andReturn(true);

        $response = ConfigService::getExceptionPackages();
        $this->assertEquals([], $response);
    }

    /**
     * @group testGetExceptionPackagesFailWithThrowFromDynamoDB
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testGetExceptionPackagesFailWithThrowFromDynamoDB()
    {
        $this->mock_redis->shouldReceive('hgetall')->with('truestore:nas_code_exception_list:search_package:redis_data')->andReturn(null);
        $this->mock_truemoveh_config->shouldReceive('findFirst')->once()->with('exception_sim_package_page')->andThrow(new \Exception('error'));
        $this->mock_redis->shouldReceive('hmset')->never()->andReturn(true);

        $response = ConfigService::getExceptionPackages();
        $this->assertEquals([], $response);
    }

    /**
     * @group testGetFreeDeviceExcludeVatSuccessWithGetRedis
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testGetFreeDeviceExcludeVatSuccessWithGetRedis()
    {
        $product_id = 'L91597600';
        $mock_result_redis = '{"device_bundle_existing":{"label_black_card":{"th":"รับเครื่องฟรี <br/>  ชําระภาษีมูลค่าเพิ่ม","en":"Free! <br/>  Not including vat"},"label_package":{"th":"รับเครื่องฟรี <br/>  ชําระภาษีมูลค่าเพิ่ม","en":"Free! <br/>  Not including vat"},"label_promotion":{"th":"รับเครื่องฟรี <br/>  ชําระภาษีมูลค่าเพิ่ม","en":"Free! <br/> Not including vat"},"label_sticky":{"th":"รับเครื่องฟรี <br/> ชําระเฉพาะภาษีมูลค่าเพิ่ม","en":"Free! <br/> Not including vat"},"label_remind":{"th":"กรุณาใส่รหัสคูปองสิทธิพิเศษ True card เพื่อรับสิทธิ์รับเครื่องฟรี ไม่รวมภาษีมูลค่าเพิ่ม","en":"Please fill in Redeem Code from True Card privilege to receive a free device, not including VAT."},"label_cart":{"th":"ภาษีมูลค่าเพิ่ม","en":"VAT"},"label_checkout":{"th":"รวมภาษีมูลค่าเพิ่ม","en":"Included VAT"}}}';

        $this->mock_redis->shouldReceive('get')->once()->with("truestore:free_device_exclude_vat_products:$product_id:redis_data")->andReturn($mock_result_redis);
        $this->mock_redis->shouldReceive('set')->never()->andReturnTrue();

        $response = ConfigService::getFreeDeviceExcludeVat($product_id);
        $this->assertEquals(json_decode($mock_result_redis, true), $response);
    }

    /**
     * @group testGetFreeDeviceExcludeVatSuccessFromDynamoDB
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testGetFreeDeviceExcludeVatSuccessFromDynamoDB()
    {
        $product_id = 'L91597600';
        $mock_result = '{"product_id":"L91597600","value":"{\"device_bundle_existing\":{\"label_black_card\":{\"th\":\"\u0e23\u0e31\u0e1a\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e1f\u0e23\u0e35 <br\/>  \u0e0a\u0e4d\u0e32\u0e23\u0e30\u0e20\u0e32\u0e29\u0e35\u0e21\u0e39\u0e25\u0e04\u0e48\u0e32\u0e40\u0e1e\u0e34\u0e48\u0e21\",\"en\":\"Free! <br\/>  Not including vat\"},\"label_package\":{\"th\":\"\u0e23\u0e31\u0e1a\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e1f\u0e23\u0e35 <br\/>  \u0e0a\u0e4d\u0e32\u0e23\u0e30\u0e20\u0e32\u0e29\u0e35\u0e21\u0e39\u0e25\u0e04\u0e48\u0e32\u0e40\u0e1e\u0e34\u0e48\u0e21\",\"en\":\"Free! <br\/>  Not including vat\"},\"label_promotion\":{\"th\":\"\u0e23\u0e31\u0e1a\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e1f\u0e23\u0e35 <br\/>  \u0e0a\u0e4d\u0e32\u0e23\u0e30\u0e20\u0e32\u0e29\u0e35\u0e21\u0e39\u0e25\u0e04\u0e48\u0e32\u0e40\u0e1e\u0e34\u0e48\u0e21\",\"en\":\"Free! <br\/> Not including vat\"},\"label_sticky\":{\"th\":\"\u0e23\u0e31\u0e1a\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e1f\u0e23\u0e35 <br\/> \u0e0a\u0e4d\u0e32\u0e23\u0e30\u0e40\u0e09\u0e1e\u0e32\u0e30\u0e20\u0e32\u0e29\u0e35\u0e21\u0e39\u0e25\u0e04\u0e48\u0e32\u0e40\u0e1e\u0e34\u0e48\u0e21\",\"en\":\"Free! <br\/> Not including vat\"},\"label_remind\":{\"th\":\"\u0e01\u0e23\u0e38\u0e13\u0e32\u0e43\u0e2a\u0e48\u0e23\u0e2b\u0e31\u0e2a\u0e04\u0e39\u0e1b\u0e2d\u0e07\u0e2a\u0e34\u0e17\u0e18\u0e34\u0e1e\u0e34\u0e40\u0e28\u0e29 True card \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e23\u0e31\u0e1a\u0e2a\u0e34\u0e17\u0e18\u0e34\u0e4c\u0e23\u0e31\u0e1a\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e1f\u0e23\u0e35 \u0e44\u0e21\u0e48\u0e23\u0e27\u0e21\u0e20\u0e32\u0e29\u0e35\u0e21\u0e39\u0e25\u0e04\u0e48\u0e32\u0e40\u0e1e\u0e34\u0e48\u0e21\",\"en\":\"Please fill in Redeem Code from True Card privilege to receive a free device, not including VAT.\"},\"label_cart\":{\"th\":\"\u0e20\u0e32\u0e29\u0e35\u0e21\u0e39\u0e25\u0e04\u0e48\u0e32\u0e40\u0e1e\u0e34\u0e48\u0e21\",\"en\":\"VAT\"},\"label_checkout\":{\"th\":\"\u0e23\u0e27\u0e21\u0e20\u0e32\u0e29\u0e35\u0e21\u0e39\u0e25\u0e04\u0e48\u0e32\u0e40\u0e1e\u0e34\u0e48\u0e21\",\"en\":\"Included VAT\"}}}"}';
        $mock_result_value = '{"device_bundle_existing":{"label_black_card":{"th":"รับเครื่องฟรี <br/>  ชําระภาษีมูลค่าเพิ่ม","en":"Free! <br/>  Not including vat"},"label_package":{"th":"รับเครื่องฟรี <br/>  ชําระภาษีมูลค่าเพิ่ม","en":"Free! <br/>  Not including vat"},"label_promotion":{"th":"รับเครื่องฟรี <br/>  ชําระภาษีมูลค่าเพิ่ม","en":"Free! <br/> Not including vat"},"label_sticky":{"th":"รับเครื่องฟรี <br/> ชําระเฉพาะภาษีมูลค่าเพิ่ม","en":"Free! <br/> Not including vat"},"label_remind":{"th":"กรุณาใส่รหัสคูปองสิทธิพิเศษ True card เพื่อรับสิทธิ์รับเครื่องฟรี ไม่รวมภาษีมูลค่าเพิ่ม","en":"Please fill in Redeem Code from True Card privilege to receive a free device, not including VAT."},"label_cart":{"th":"ภาษีมูลค่าเพิ่ม","en":"VAT"},"label_checkout":{"th":"รวมภาษีมูลค่าเพิ่ม","en":"Included VAT"}}}';

        $this->mock_redis->shouldReceive('get')->once()->with("truestore:free_device_exclude_vat_products:$product_id:redis_data")->andReturn(null);
        $this->mock_truemoveh_config_free_device->shouldReceive('findFirst')->once()->with($product_id)->andReturn($this->mock_truemoveh_config_free_device);
        $this->mock_truemoveh_config_free_device->shouldReceive('toarray')->withNoArgs()->andReturn(json_decode($mock_result, true));
        $this->mock_redis->shouldReceive('set')->once()->with("truestore:free_device_exclude_vat_products:$product_id:redis_data", $mock_result_value)->andReturn(true);

        $response = ConfigService::getFreeDeviceExcludeVat($product_id);
        $this->assertEquals(json_decode($mock_result_value, true), $response);
    }

    /**
     * @group testGetFreeDeviceExcludeVatFailWithThrowFromDynamoDB
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testGetFreeDeviceExcludeVatFailWithThrowFromDynamoDB()
    {
        $product_id = 'L91597600';

        $this->mock_redis->shouldReceive('get')->once()->with("truestore:free_device_exclude_vat_products:$product_id:redis_data")->andReturn(null);
        $this->mock_truemoveh_config_free_device->shouldReceive('findFirst')->once()->with($product_id)->andThrow(new \Exception('error'));
        $this->mock_redis->shouldReceive('set')->never()->andReturnTrue();

        $response = ConfigService::getFreeDeviceExcludeVat($product_id);
        $this->assertEquals([], $response);
    }

    /**
     * @group testGetFreeDeviceExcludeVatSuccessWithNoDataFromDynamoDB
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testGetFreeDeviceExcludeVatSuccessWithNoDataFromDynamoDB()
    {
        $product_id = 'L91597600';

        $this->mock_redis->shouldReceive('get')->once()->with("truestore:free_device_exclude_vat_products:$product_id:redis_data")->andReturn(null);
        $this->mock_truemoveh_config_free_device->shouldReceive('findFirst')->once()->with($product_id)->andReturn([]);
        $this->mock_redis->shouldReceive('set')->never()->andReturnTrue();

        $response = ConfigService::getFreeDeviceExcludeVat($product_id);
        $this->assertEquals([], $response);
    }
}
