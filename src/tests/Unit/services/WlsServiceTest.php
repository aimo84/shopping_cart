<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Services\WlsService;
use Mockery as m;
use Illuminate\Support\Facades\Redis;
use Illuminate\Http\Request as LaravelRequest;
use Illuminate\Support\Arr;

class WlsServiceTest extends TestCase
{
    private function mockInputs()
    {
        return json_decode('{ "page":"1", "limit":"36", "section":"wemall", "order_out_of_stock":1, "order":"quantity", "sort":"desc" }', 1);
    }

    /**
     * @group testValidate
     **/
    public function testGetSearchProductCampaign()
    {
        $input   = $this->mockInputs();
        $request = new LaravelRequest();
        $request->setMethod(strtoupper("get"));
        $request->replace($input);

        Redis::shouldReceive('get')
        ->with('epp-sim:product')
        ->once()
        ->andReturn(false);  

        Redis::shouldReceive('hgetall')
        ->with('truestore:lv_c_set_price_to_free:product_id_list:redis_data')
        ->once()
        ->andReturn([]);  

        $mock_response       = $this->getFixture('search_product', 'search');
        $mock_guzzle_service = m::mock('alias:App\Services\GuzzleService');
        $mock_guzzle_service->shouldReceive('postGuzzleRequest')
            ->once()
            ->andReturn($mock_response);

        $coupon_service = m::mock('alias:App\Services\CouponService');
        $coupon_service->shouldReceive('getCouponByProductId')
            ->once()
            ->andReturn([]);

        Redis::shouldReceive('get')
            ->with('toggle-config:json:discount-level-c')
            ->once()
            ->andReturn(false);  

        $service  = new WlsService();
        $response = $service->getSearchProductCampaign('search/product', 'get', $request, []);

        $this->assertEquals(200, Arr::get($response, '0'));
        $record = json_decode(Arr::get($response, '1'), 1);
        $this->assertEquals(36, count(Arr::get($record, 'data.record')));
    }

    /**
     * @group testSendParameter
     **/
    public function testGetSearchProductCampaignWithParameterShouldBeSuccess()
    {
        $input   = $this->mockInputs();
        $request = new LaravelRequest();
        $request->setMethod(strtoupper("get"));
        $request->replace($input);
 
        Redis::shouldReceive('get')
        ->with('epp-sim:product')
        ->once()
        ->andReturn(false);  

        Redis::shouldReceive('hgetall')
        ->with('truestore:lv_c_set_price_to_free:product_id_list:redis_data')
        ->once()
        ->andReturn([]);  

        $mock_response       = $this->getFixture('search_product', 'search');
        $mock_guzzle_service = m::mock('alias:App\Services\GuzzleService');
        $mock_guzzle_service->shouldReceive('postGuzzleRequest')
            ->once()
            ->andReturn($mock_response);

        $coupon_service = m::mock('alias:App\Services\CouponService');
 
        $coupon_service->shouldReceive('getCouponByProductId')
            ->once()
            ->andReturn([]);

        Redis::shouldReceive('get')
            ->with('toggle-config:json:discount-level-c')
            ->once()
            ->andReturn(false);  

        $service  = new WlsService();
        $response = $service->getSearchProductCampaign('search/product', 'get', $request, []);

        $this->assertEquals(200, Arr::get($response, '0'));
        $record = json_decode(Arr::get($response, '1'), 1);
        $this->assertEquals(39, Arr::get($record, 'data.record.0.price'));
        $this->assertEquals(988, Arr::get($record, 'data.record.0.quantity'));
    }
}
