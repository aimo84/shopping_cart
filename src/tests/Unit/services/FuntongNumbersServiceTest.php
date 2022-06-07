<?php

namespace Tests\Unit;

use Mockery as m;
use Tests\TestCase;
use App\Facades\VHora\FuntongNumbersService;
use Illuminate\Http\Request as LaravelRequest;
use Illuminate\Support\Facades\Redis;
use GuzzleHttp\Psr7\Request;
use GuzzleHttp\Psr7\Response;
use GuzzleHttp\Exception\ClientException;
use Illuminate\Support\Arr;

class FuntongNumbersServiceTest extends TestCase
{
    private function mockInputs()
    {
        return json_decode('{"msisdn":"0850000008","otp":"1234","ref_code":"0850000001801","firstname":"John","lastname":"Doe","birthdate":"07032542","birthtime":"01:01","flag_unknow_time":true,"is_thailand":true,"timezone":"+0700","province":"กรุงเทพฯ"}', true);
    }

    private function mockLogService()
    {
        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')
         ->andReturn(true);
    }

    private function mockVHoraOnlineService()
    {
        $mock = m::mock('overload:App\Services\VHora\VHoraOnlineService');
        $mock->shouldReceive('getDealerInfo')
            ->andReturn(true);
    }

    private function mockVHoraService()
    {
        $mock = m::mock('overload:App\Services\VHora\VHoraService');
        $mock->shouldReceive('getSetting')
            ->with('vhora_low_tier_configs')
            ->andReturn(json_decode('[{"created_at":1628576256,"key":"vhora_low_tier_configs","page_limit":25,"total":240}]', true));

        $mock->shouldReceive('getSetting')
            ->with('vhora_low_tier_online')
            ->andReturn(json_decode('[{"created_at":1628576631,"dealer_code":"80000084","key":"vhora_low_tier_online","packs":{"pos399":{"baseline":"399","code":"pos399","limit":25,"name":"ซิมรายเดือน","position":1,"type":"postpaid"}},"RF":{"pos399":{"propo_amdoc":"RMV000000023866","propo_code":"0094030"},"pre299":{"propo_amdoc":"PRE000000000010","propo_code":"0095097"}},"RM":{"pos399":{"propo_amdoc":"RMV000000023866","propo_code":"0094029"},"pre299":{"propo_amdoc":"PRE000000000010","propo_code":"0095096"}}}]', true));

        $mock->shouldReceive('getSetting')
            ->with('vhora_low_tier_offline')
            ->andReturn(json_decode('[{"created_at":1628576631,"dealer_code":"80000011","key":"vhora_low_tier_offline","packs":{"pos399":{"baseline":"399","code":"pos399","limit":15,"name":"ซิมรายเดือน","position":1,"type":"postpaid"},"pre299":{"baseline":"299","code":"pre299","limit":10,"name":"ซิมเติมเงิน","position":2,"type":"prepaid"}},"RF":{"pos399":{"propo_amdoc":"RMV000000023867","propo_code":"0094032"},"pre299":{"propo_amdoc":"PRE000000000010","propo_code":"0095097"}},"RM":{"pos399":{"propo_amdoc":"RMV000000023867","propo_code":"0094031", "bundling": { "proposition_amdoc": "RMV000000025613" , "proposition_code": "100074" }},"pre299":{"propo_amdoc":"PRE000000000010","propo_code":"0095096"}}}]', true));

        $mock->shouldReceive('getRefCode')
            ->andReturn('e36b01142496183c0d43d1c6c3e10983');

        $mock->shouldReceive('getOfflineShopConfigByShop')
            ->with(['channel' => 'offline', 'shop' => '7-11'])
            ->andReturn(json_decode('{ "7-11": { "shop_code": "711", "name": { "th": "7 Eleven สาขาใกล้บ้านท่าน" }, "channel": "3GW-TRUESTORE", "prepaid": { "campiagn_id": "TSIS_C017", "subscriber_type": "pre", "skip_bundle": true }, "postpaid": { "campiagn_id": "TSIS_C018", "subscriber_type": "pos", "skip_bundle": true } }, "lotus": { "shop_code": "lotus", "name": { "th": "lotus สาขาใกล้บ้านท่าน" }, "channel": "3GW-TRUESTORE", "prepaid": { "campiagn_id": "TSIS_C017", "subscriber_type": "pre", "skip_bundle": true }, "postpaid": { "campiagn_id": "TSIS_C018", "subscriber_type": "pos", "skip_bundle": false } } }', 1));

        $mock->shouldReceive('checkVhoraSkipBundle')
            ->andReturn(false);
    }

    private function mockAwsGatewayClient($mock_response = false, $is_exception = false)
    {
        if (empty($mock_response)) $mock_response = $this->getFixture('funtong_gateway');

        $mock_aws_gateway = m::mock('overload:App\Libraries\Clients\AwsGatewayClient');


        if ($is_exception === true) {
            $mock_aws_gateway->shouldReceive('post')
                ->andThrow($mock_response);
        } else {
            $mock_aws_gateway->shouldReceive('post')
                ->andReturn($mock_response);
        }
    }

    private function mockRequest($inputs = [])
    {
        $request = new LaravelRequest();
        $request->setMethod('json');
        $request->json()->replace($inputs);

        return $request;
    }

    /**
     * @group testGetNumbers
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     **/
    public function testGetNumbersShouldBeFailWithEmptyInput()
    {
        $this->mockLogService();
        $this->mockVHoraOnlineService();
        $response = FuntongNumbersService::getNumbers($this->mockRequest());

        $this->assertEquals(400, $response['code']);
        $this->assertEquals('The channel field is required.', $response['response']['errors']['description']['message']);
    }

    /**
     * @group testGetNumbers
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     **/
    public function testGetNumbersShouldBeFailWithPacksInvalid()
    {
        $this->mockLogService();
        $this->mockVHoraOnlineService();
        $request = $this->mockRequest([
            'channel' => 'online',
            'packs'   => 'test'
        ]);

        $response = FuntongNumbersService::getNumbers($request);

        $this->assertEquals(400, $response['code']);
        $this->assertEquals('The packs must be an array.', $response['response']['errors']['description']['message']);
    }

    /**
     * @group testGetNumbers
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     **/
    public function testGetNumbersShouldBeFailWithZodiacIdInvalid()
    {
        $this->mockLogService();
        $this->mockVHoraOnlineService();
        $request = $this->mockRequest([
            'channel'   => 'online',
            'zodiac_id' => false
        ]);

        $response = FuntongNumbersService::getNumbers($request);

        $this->assertEquals(400, $response['code']);
        $this->assertEquals('The zodiac id must be an integer.', $response['response']['errors']['description']['message']);
    }

    /**
     * @group testGetNumbers
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     **/
    public function testGetNumbersShouldBeFailWithNumberLikeInvalid()
    {
        $this->mockLogService();
        $this->mockVHoraOnlineService();
        $request = $this->mockRequest([
            'channel'        => 'online',
            'number_like'    => '1',
            'number_dislike' => ['4' , '5'],
        ]);

        $response = FuntongNumbersService::getNumbers($request);

        $this->assertEquals(400, $response['code']);
        $this->assertEquals('The number like must be an array.', $response['response']['errors']['description']['message']);
    }

    /**
     * @group testGetNumbers
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     **/
    public function testGetNumbersShouldBeFailWithNumberDislikeInvalid()
    {
        $this->mockLogService();
        $this->mockVHoraOnlineService();
        $request = $this->mockRequest([
            'channel'        => 'online',
            'number_like'    => ['4' , '5'],
            'number_dislike' => '1',
        ]);

        $response = FuntongNumbersService::getNumbers($request);

        $this->assertEquals(400, $response['code']);
        $this->assertEquals('The number dislike must be an array.', $response['response']['errors']['description']['message']);
    }

    /**
     * @group testGetNumbers
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     **/
    public function testGetNumbersShouldBeFailWithPageInvalid()
    {
        $this->mockLogService();
        $this->mockVHoraOnlineService();
        $request = $this->mockRequest([
            'channel' => 'online',
            'packs'   => ["pre299", "pos399"],
            'page'    => 0
        ]);

        $response = FuntongNumbersService::getNumbers($request);

        $this->assertEquals(400, $response['code']);
        $this->assertEquals('The selected page is invalid.', $response['response']['errors']['description']['message']);
    }

    /**
     * @group testGetNumbers
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     **/
    public function testGetNumbersShouldBeSuccessWithCache()
    {
        $this->mockLogService();
        $this->mockVHoraOnlineService();
        $request = $this->mockRequest([
            'channel' => 'online',
            'packs'   => ["pre299", "pos399"],
            'page'    => 1
        ]);

        Redis::shouldReceive('get')
            ->andReturn($this->mockFuntongSuccess());

        $response = FuntongNumbersService::getNumbers($request);

        $this->assertEquals(200, $response['code']);
        $this->assertNotEmpty($response['response']['pagination']);
        $this->assertNotEmpty($response['response']['packs']);
        $this->assertNotEmpty($response['response']['ref_code']);
        $this->assertNotEmpty($response['response']['numbering']);
    }

    /**
     * @group testGetNumbers
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     **/
    public function testGetNumbersShouldBeFailWithException()
    {
        $this->mockLogService();
        $this->mockVHoraOnlineService();
        $request = $this->mockRequest([
            'channel' => 'online',
            'packs'   => ["pre299", "pos399"],
            'page'    => 1
        ]);

        Redis::shouldReceive('get')
            ->andThrow(new \Exception('Throw Exception', 500));

        $response = FuntongNumbersService::getNumbers($request);

        $this->assertEquals(500, $response['code']);
        $this->assertEquals('Internal Server Error', $response['response']['errors']['description']['message']);
    }

    /**
     * @group testGetNumbers
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     **/
    public function testGetNumbersShouldBeSuccessWithNotFoundNumber()
    {
        $this->mockAwsGatewayClient(json_decode('{"resultCode":0,"message":"","ascendant":{}}', true));
        $this->mockVHoraService();
        $this->mockLogService();
        $this->mockVHoraOnlineService();
        $request = $this->mockRequest([
            'channel' => 'online',
            'packs'   => ["pre299", "pos399"],
            'page'    => 1
        ]);

        Redis::shouldReceive('get')->andReturn(null)
                ->shouldReceive('set')->andReturn(true);

        $response = FuntongNumbersService::getNumbers($request);


        $this->assertEquals(200, $response['code']);
        $this->assertNotEmpty($response['response']['pagination']);
        $this->assertNotEmpty($response['response']['packs']);
        $this->assertNotEmpty($response['response']['ref_code']);
        $this->assertEmpty($response['response']['numbering']);
        $this->assertEmpty($response['response']['ascendant']);
    }

    /**
     * @group testGetNumbers
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     **/
    public function testGetNumbersShouldBeSuccessWithEmptySettings()
    {
        $this->mockAwsGatewayClient();
        $this->mockLogService();

        $mock = m::mock('overload:App\Services\VHora\VHoraService');
        $mock->shouldReceive('getSetting')
            ->with('vhora_low_tier_configs')
            ->andReturn(null);

        $mock->shouldReceive('getSetting')
            ->with('vhora_low_tier_online')
            ->andReturn(null);

        $mock->shouldReceive('getSetting')
            ->with('vhora_low_tier_offline')
            ->andReturn(null);

        $mock->shouldReceive('getRefCode')
            ->andReturn('e36b01142496183c0d43d1c6c3e10983');

        $this->mockVHoraOnlineService();

        $request = $this->mockRequest([
            'channel' => 'online',
            'packs'   => ["pre299", "pos399"],
            'page'    => 1
        ]);

        Redis::shouldReceive('get')->andReturn(null)
            ->shouldReceive('set')->andReturn(true);
        $response = FuntongNumbersService::getNumbers($request);

        $this->assertEquals(200, $response['code']);
        $this->assertNotEmpty($response['response']['pagination']);
        $this->assertEmpty($response['response']['packs']);
        $this->assertNotEmpty($response['response']['ref_code']);
        $this->assertNotEmpty($response['response']['numbering']);
    }

    /**
     * @group testGetNumbers
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     **/
    public function testGetNumbersShouldBeSuccessWithSuccess()
    {
        $this->mockAwsGatewayClient();
        $this->mockLogService();
        $this->mockVHoraService();
        $request = $this->mockRequest([
            'channel' => 'online',
            'packs'   => ["pre299", "pos399"],
            'page'    => 1
        ]);

        $this->mockVHoraOnlineService();

        Redis::shouldReceive('get')->andReturn(null)
            ->shouldReceive('set')->andReturn(true);
        $response = FuntongNumbersService::getNumbers($request);

        $this->assertEquals(200, $response['code']);
        $this->assertNotEmpty($response['response']['pagination']);
        $this->assertNotEmpty($response['response']['packs']);
        $this->assertNotEmpty($response['response']['ref_code']);
        $this->assertNotEmpty($response['response']['numbering']);
    }

    /**
     * @group testGetNumbers
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     **/
    public function testGetNumbersShouldBeSuccessWithEmptyPacks()
    {
        $this->mockAwsGatewayClient();
        $this->mockLogService();
        $this->mockVHoraService();
        $request = $this->mockRequest([
            'channel' => 'online',
            'page'    => 1
        ]);

        $this->mockVHoraOnlineService();

        Redis::shouldReceive('get')->andReturn(null)
            ->shouldReceive('set')->andReturn(true);
        $response = FuntongNumbersService::getNumbers($request);

        $this->assertEquals(200, $response['code']);
        $this->assertNotEmpty($response['response']['pagination']);
        $this->assertNotEmpty($response['response']['packs']);
        $this->assertNotEmpty($response['response']['ref_code']);
        $this->assertNotEmpty($response['response']['numbering']);
    }

    /**
     * @group testGetNumbers
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     **/
    public function testGetNumbersShouldBeSuccessWithZodiac()
    {
        $this->mockAwsGatewayClient();
        $this->mockLogService();
        $this->mockVHoraService();
        $request = $this->mockRequest([
            'channel'   => 'online',
            'page'      => 1,
            'zodiac_id' => 0
        ]);

        $this->mockVHoraOnlineService();

        Redis::shouldReceive('get')->andReturn(null)
            ->shouldReceive('set')->andReturn(true);
        $response = FuntongNumbersService::getNumbers($request);

        $this->assertEquals(200, $response['code']);
        $this->assertNotEmpty($response['response']['pagination']);
        $this->assertNotEmpty($response['response']['packs']);
        $this->assertNotEmpty($response['response']['ref_code']);
        $this->assertNotEmpty($response['response']['numbering']);
    }

    /**
     * @group testGetNumbers
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     **/
    public function testGetNumbersShouldBeSuccessWithBirthdate()
    {
        $this->mockAwsGatewayClient();
        $this->mockLogService();
        $this->mockVHoraService();
        $request = $this->mockRequest([
            'channel'   => 'online',
            'page'      => 1,
            'birthdate' => '07031991',
            'birthtime' => '00:30',
            'timezone'  => '+0700',
            'province'  => 'กรุงเทพฯ'
        ]);

        $this->mockVHoraOnlineService();

        Redis::shouldReceive('get')->andReturn(null)
            ->shouldReceive('set')->andReturn(true);
        $response = FuntongNumbersService::getNumbers($request);

        $this->assertEquals(200, $response['code']);
        $this->assertNotEmpty($response['response']['pagination']);
        $this->assertNotEmpty($response['response']['packs']);
        $this->assertNotEmpty($response['response']['ref_code']);
        $this->assertNotEmpty($response['response']['numbering']);
    }

    /**
     * @group testGetNumbersShouldBeSuccessWithNodeBundling
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     **/
    public function testGetNumbersShouldBeSuccessWithNodeBundling()
    {
        $this->mockAwsGatewayClient();
        $this->mockLogService();
        $this->mockVHoraService();
        $request = $this->mockRequest([
            'channel'   => 'online',
            'page'      => 1,
            'birthdate' => '07031991',
            'birthtime' => '00:30',
            'timezone'  => '+0700',
            'province'  => 'กรุงเทพฯ'
        ]);

        $this->mockVHoraOnlineService();

        Redis::shouldReceive('get')->andReturn(null)
            ->shouldReceive('set')->andReturn(true);
        $response = FuntongNumbersService::getNumbers($request);

        foreach (Arr::get($response, 'response.numbering', []) as $record) {
            $this->assertArrayHasKey('bundling', $record);
        }
    }

    /**
     * @group testGetNumbersShouldBeSuccessWithNodeBundling
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     **/
    public function testGetNumbersShouldBeSuccessWithNodeBundlingHaveData()
    {
        $this->mockAwsGatewayClient();
        $this->mockLogService();
        $this->mockVHoraService();
        $request = $this->mockRequest([
            'channel' => 'offline',
            'shop'    => '7-11'
        ]);

        $this->mockVHoraOnlineService();

        Redis::shouldReceive('get')->andReturn(null)
            ->shouldReceive('set')->andReturn(true);
        $response = FuntongNumbersService::getNumbers($request);

        foreach (Arr::get($response, 'response.numbering', []) as $record) {
            $this->assertArrayHasKey('bundling', $record);
            if (Arr::get($record, 'company') == "RM") $this->assertNotEmpty(Arr::get($record, 'bundling'));
        }
    }

    /**
     * @group testGetNumbers
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     **/
    public function testGetNumbersShouldBeFailWithGatewayClientException()
    {
        $response = new Response(
                            400,
                            ['Content-Type' => 'application/json'],
                            '{
                                "code": 400,
                                "message": "parsing time \"15081993 \" as \"02012006 15:04\": cannot parse \"\" as \"15\""
                            }'
                        );
        $exception = new ClientException('Mock Client Exception', new Request('POST', ''), $response);

        $this->mockAwsGatewayClient($exception, true);
        $this->mockLogService();
        $this->mockVHoraService();
        $request = $this->mockRequest([
            'channel'   => 'online',
            'page'      => 1,
            'birthdate' => '07031991',
            'birthtime' => '00:30',
            'timezone'  => '+0700',
            'province'  => 'กรุงเทพฯ'
        ]);

        $this->mockVHoraOnlineService();

        Redis::shouldReceive('get')->andReturn(null)
            ->shouldReceive('set')->andReturn(true);
        $response = FuntongNumbersService::getNumbers($request);

        $this->assertEquals(400, $response['code']);
        $this->assertEquals('parsing time "15081993 " as "02012006 15:04": cannot parse "" as "15"', $response['response']['errors']['description']['message']);
    }

    /**
     * @group testGetNumbers
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     **/
    public function testGetNumbersShouldBeFailWithGatewayException()
    {
        $exception = new \Exception('Internal Server Error');

        $this->mockAwsGatewayClient($exception, true);
        $this->mockLogService();
        $this->mockVHoraService();
        $request = $this->mockRequest([
            'channel'   => 'online',
            'page'      => 1,
            'birthdate' => '07031991',
            'birthtime' => '00:30',
            'timezone'  => '+0700',
            'province'  => 'กรุงเทพฯ'
        ]);

        $this->mockVHoraOnlineService();

        Redis::shouldReceive('get')->andReturn(null)
            ->shouldReceive('set')->andReturn(true);
        $response = FuntongNumbersService::getNumbers($request);

        $this->assertEquals(500, $response['code']);
        $this->assertEquals('Internal Server Error', $response['response']['errors']['description']['message']);
    }

    private function mockFuntongSuccess()
    {
        return '{"response":{"pagination":{"page":1,"limit":25,"last_page":10,"total":240},"ref_code":"d54c0e36d045d3c3ad59b41520f7fe8c","packs":{"pos399":{"limit":15,"name":"\u0e0b\u0e34\u0e21\u0e23\u0e32\u0e22\u0e40\u0e14\u0e37\u0e2d\u0e19","code":"pos399","baseline":"399","type":"postpaid"},"pre299":{"limit":10,"name":"\u0e0b\u0e34\u0e21\u0e40\u0e15\u0e34\u0e21\u0e40\u0e07\u0e34\u0e19","code":"pre299","baseline":"250","type":"prepaid"}},"numbering":[{"msisdn":"0938707955","company":"RF","zodiac_id":0,"pack":"pos399"},{"msisdn":"0646246110","company":"RM","zodiac_id":0,"pack":"pos399"},{"msisdn":"0834037683","company":"RM","zodiac_id":1,"pack":"pos399"},{"msisdn":"0646695765","company":"RF","zodiac_id":1,"pack":"pos399"},{"msisdn":"0646320876","company":"RM","zodiac_id":0,"pack":"pos399"},{"msisdn":"0834035129","company":"RM","zodiac_id":1,"pack":"pos399"},{"msisdn":"0641028076","company":"RM","zodiac_id":1,"pack":"pos399"},{"msisdn":"0646457933","company":"RM","zodiac_id":1,"pack":"pos399"},{"msisdn":"0938102789","company":"RF","zodiac_id":0,"pack":"pos399"},{"msisdn":"0646195044","company":"RM","zodiac_id":0,"pack":"pos399"},{"msisdn":"0646539500","company":"RF","zodiac_id":0,"pack":"pos399"},{"msisdn":"0938697822","company":"RF","zodiac_id":0,"pack":"pos399"},{"msisdn":"0646313105","company":"RM","zodiac_id":0,"pack":"pos399"},{"msisdn":"0938782588","company":"RF","zodiac_id":0,"pack":"pos399"},{"msisdn":"0938241663","company":"RF","zodiac_id":0,"pack":"pos399"},{"msisdn":"0646083228","company":"RF","zodiac_id":0,"pack":"pre299"},{"msisdn":"0645911066","company":"RF","zodiac_id":0,"pack":"pre299"},{"msisdn":"0645961171","company":"RF","zodiac_id":0,"pack":"pre299"},{"msisdn":"0646064511","company":"RF","zodiac_id":0,"pack":"pre299"},{"msisdn":"0938978864","company":"RF","zodiac_id":0,"pack":"pre299"},{"msisdn":"0646020242","company":"RF","zodiac_id":0,"pack":"pre299"},{"msisdn":"0646094227","company":"RF","zodiac_id":0,"pack":"pre299"},{"msisdn":"0646055116","company":"RF","zodiac_id":0,"pack":"pre299"},{"msisdn":"0645987244","company":"RF","zodiac_id":0,"pack":"pre299"},{"msisdn":"0938974085","company":"RF","zodiac_id":0,"pack":"pre299"}],"ascendant":[]},"code":200}';
    }

    /**
     * @group testGetNumbers
     * @group testGetNumbersShouldBeSuccessWithSuccessWithSort
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     **/
    public function testGetNumbersShouldBeSuccessWithSuccessWithSort()
    {
        $this->mockAwsGatewayClient();
        $this->mockLogService();
        $this->mockVHoraService();
        $request = $this->mockRequest([
            'channel' => 'online',
            'packs'   => ["pre299", "pos399"],
            'page'    => 1,
            'sort'    => 'asc'
        ]);

        $this->mockVHoraOnlineService();

        Redis::shouldReceive('get')->andReturn(null)
            ->shouldReceive('set')->andReturn(true);
        $response = FuntongNumbersService::getNumbers($request);

        $this->assertEquals(200, $response['code']);
        $this->assertNotEmpty($response['response']['pagination']);
        $this->assertNotEmpty($response['response']['packs']);
        $this->assertNotEmpty($response['response']['ref_code']);
        $this->assertNotEmpty($response['response']['numbering']);
    }

    /**
     * @group testGetNumbers
     * @group testGetNumbersShouldBeSuccessWithSuccessWithSortDesc
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     **/
    public function testGetNumbersShouldBeSuccessWithSuccessWithSortDesc()
    {
        $this->mockAwsGatewayClient();
        $this->mockLogService();
        $this->mockVHoraService();
        $request = $this->mockRequest([
            'channel' => 'online',
            'packs'   => ["pre299", "pos399"],
            'page'    => 1,
            'sort'    => 'desc'
        ]);

        $this->mockVHoraOnlineService();

        Redis::shouldReceive('get')->andReturn(null)
            ->shouldReceive('set')->andReturn(true);
        $response = FuntongNumbersService::getNumbers($request);

        $this->assertEquals(200, $response['code']);
        $this->assertNotEmpty($response['response']['pagination']);
        $this->assertNotEmpty($response['response']['packs']);
        $this->assertNotEmpty($response['response']['ref_code']);
        $this->assertNotEmpty($response['response']['numbering']);
    }
}
