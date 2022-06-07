<?php

namespace Tests\Unit;

use Illuminate\Http\Request as LaravelRequest;
use Illuminate\Support\Facades\Redis;
use Tests\TestCase;
use App\Facades\VHora\VHoraService;
use Mockery as m;

class VHoraPlaceOrderOfflineTest extends TestCase
{

    /**
     * @group testProcessPlaceOrderOffline
     * @group WLSFT-18628
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessPlaceOrderOfflineSuccessWithPlaceOrder()
    {
        $input   = json_decode('{"form":{"msisdn":"0850000994","ref_code":"08500009994000","firstname":"John","lastname":"Doe","birthdate":"07032540","birthtime":"01:01","timezone":"+0700","selected_msisdn":"0964234424","product_id":"L91587044","inventory_id":"3078153","store_id":"941527","companyCode":"RM"},"pricePlan":{"id":"9501","name":"Funtong 1199","code":"SMRTFP76","description":"Funtong 1199","sim_type":"postpaid","price":"1199","recommended":"1","proposition_nas_code":"0085779","proposition_term_short":"Funtong SIM Only 1199","campaign_code":"AN231"},"shopOffline":{"saleCode":"39004848","shopCode":"80000560","saleName":{"th":"\u0e19\u0e32\u0e22 \u0e2d\u0e14\u0e34\u0e28\u0e31\u0e01\u0e14\u0e34\u0e4c \u0e44\u0e15\u0e23\u0e40\u0e2a\u0e19\u0e35\u0e22\u0e4c","en":null},"shopName":{"en":"True Shop Central Plaza Westgate 01","th":"True Shop Central Plaza Westgate 01"}},"id":{"id":"5453707659698","correlationId":"dc0715da-ed7a-4231-ae6a-e1e57726c79e"}}', 1);
        $request = new LaravelRequest();
        $request->setMethod(strtoupper("post"));
        $request->replace($input);

        $mock_reserve_number_response = json_decode('{"0":200,"1":{"serviceResult":{"status":"success","code":200,"description":"Success."}},"is_pass":true,"code":"NAS201"}', 1);
        $mock_reserve_number_with = json_decode('{"correlatedId":"dc0715da-ed7a-4231-ae6a-e1e57726c79e","idType":"I","idNumber":"5453707659698","msisdn":"0964234424","pstId":"0085779","reserveDealer":"80000560","webMethodChannel":"FNT-OFFLINE","userLogin":"80000560"}', 1);
        $mock_reserve_number_service = m::mock('overload:App\Services\VHora\ReserveNumberService');
        $mock_reserve_number_service->shouldReceive('postReserveNumber')->with($mock_reserve_number_with)->andReturn($mock_reserve_number_response);

        $mock_order_response = json_decode('{"id":11650453,"secureKey":"800011650453","is_redirect":false,"redirectUrl":"https://order.wls-dev.com/v1/payment/foreground?payment_id=9191001891722","payment_id":"9191001891722","cybs_detail":null,"code":200,"message":"success"}', 1);
        $mock_order_service = m::mock('overload:App\Services\OrderService');
        $mock_order_service->shouldReceive('placeOrderOffline')->andReturn($mock_order_response);

        Redis::shouldReceive('set')->twice();

        $expected = ['response' => ['data' => $mock_order_response], 'code' => 200];
        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        $response = VHoraService::processPlaceOrderOffline($request);
        $this->assertEquals($expected, $response);
    }
    /**
     * @group testProcessPlaceOrderOffline
     * @group WLSFT-18628
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessPlaceOrderOfflineSuccessWithoutPlaceOrder()
    {
        $input   = json_decode('{"form":{"msisdn":"0850000994","ref_code":"08500009994000","firstname":"John","lastname":"Doe","birthdate":"07032540","birthtime":"01:01","timezone":"+0700","selected_msisdn":"0964234424","product_id":"L91587044","inventory_id":"3078153","store_id":"941527","companyCode":"RM"},"pricePlan":{"id":"9501","name":"Funtong 1199","code":"SMRTFP76","description":"Funtong 1199","sim_type":"postpaid","price":"1199","recommended":"1","proposition_nas_code":"0085779","proposition_term_short":"Funtong SIM Only 1199","campaign_code":"AN231"},"shopOffline":{"saleCode":"39004848","shopCode":"80000560","saleName":{"th":"\u0e19\u0e32\u0e22 \u0e2d\u0e14\u0e34\u0e28\u0e31\u0e01\u0e14\u0e34\u0e4c \u0e44\u0e15\u0e23\u0e40\u0e2a\u0e19\u0e35\u0e22\u0e4c","en":null},"shopName":{"en":"True Shop Central Plaza Westgate 01","th":"True Shop Central Plaza Westgate 01"}},"id":{"id":"5453707659698","correlationId":"dc0715da-ed7a-4231-ae6a-e1e57726c79e"}}', 1);
        $request = new LaravelRequest();
        $request->setMethod(strtoupper("post"));
        $request->replace($input);

        $mock_reserve_number_response = json_decode('{"0":200,"1":{"serviceResult":{"status":"success","code":200,"description":"Success."}},"is_pass":true,"code":"200"}', 1);
        $mock_reserve_number_service = m::mock('overload:App\Services\VHora\ReserveNumberService');
        $mock_reserve_number_service->shouldReceive('postReserveNumber')->andReturn($mock_reserve_number_response);

        $mock_order_response = json_decode('{"offline_skip":1,"redirect_url":"https:\/\/pre-store.truecorp.co.th\/api\/true\/success"}', 1);
        $mock_order_service = m::mock('overload:App\Services\OrderService');
        $mock_order_service->shouldReceive('placeOrderOffline')->andReturn($mock_order_response);

        Redis::shouldReceive('set')->twice();

        $expected = ['response' => ['data' => $mock_order_response], 'code' => 200];
        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        $response = VHoraService::processPlaceOrderOffline($request);
        $this->assertEquals($expected, $response);
    }

    /**
     * @group testProcessPlaceOrderOffline
     * @group WLSFT-18628
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessPlaceOrderOfflineErrorValidation()
    {
        $input   = json_decode('{"form":{"msisdn":"0850000994","ref_code":"08500009994000","firstname":"John","lastname":"Doe","birthdate":"07032540","birthtime":"01:01","timezone":"+0700","selected_msisdn":"0964234424","product_id":"L91587044","inventory_id":"3078153","store_id":"941527","companyCode":"RM"},"pricePlan":{"id":"9501","name":"Funtong 1199","code":"SMRTFP76","description":"Funtong 1199","sim_type":"postpaid","price":"1199","recommended":"1","proposition_nas_code":"0085779","proposition_term_short":"Funtong SIM Only 1199","campaign_code":"AN231"},"shopOffline":{"saleCode":"39004848","shopCode":"80000560","saleName":{"th":"\u0e19\u0e32\u0e22 \u0e2d\u0e14\u0e34\u0e28\u0e31\u0e01\u0e14\u0e34\u0e4c \u0e44\u0e15\u0e23\u0e40\u0e2a\u0e19\u0e35\u0e22\u0e4c","en":null},"shopName":{"en":"True Shop Central Plaza Westgate 01","th":"True Shop Central Plaza Westgate 01"}},"id":{"id":"5453707659698"}}', 1);
        $request = new LaravelRequest();
        $request->setMethod(strtoupper("post"));
        $request->replace($input);

        $mock_reserve_number_response = json_decode('{"0":200,"1":{"serviceResult":{"status":"success","code":200,"description":"Success."}},"is_pass":true,"code":"200"}', 1);
        $mock_reserve_number_service = m::mock('overload:App\Services\VHora\ReserveNumberService');
        $mock_reserve_number_service->shouldReceive('postReserveNumber')->andReturn($mock_reserve_number_response);

        $mock_order_response = json_decode('{"offline_skip":1,"redirect_url":"https:\/\/pre-store.truecorp.co.th\/api\/true\/success"}', 1);
        $mock_order_service = m::mock('overload:App\Services\OrderService');
        $mock_order_service->shouldReceive('placeOrderOffline')->andReturn($mock_order_response);

        $expected = ['response' => ['data' => 'The id.correlation id field is required.'], 'code' => 400];
        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        $response = VHoraService::processPlaceOrderOffline($request);
        $this->assertEquals($expected, $response);
    }

    /**
     * @group testProcessPlaceOrderOffline
     * @group WLSFT-18628
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessPlaceOrderOfflineErrorReserveNumber()
    {
        $input   = json_decode('{"form":{"msisdn":"0850000994","ref_code":"08500009994000","firstname":"John","lastname":"Doe","birthdate":"07032540","birthtime":"01:01","timezone":"+0700","selected_msisdn":"0964234424","product_id":"L91587044","inventory_id":"3078153","store_id":"941527","companyCode":"RM"},"pricePlan":{"id":"9501","name":"Funtong 1199","code":"SMRTFP76","description":"Funtong 1199","sim_type":"postpaid","price":"1199","recommended":"1","proposition_nas_code":"0085779","proposition_term_short":"Funtong SIM Only 1199","campaign_code":"AN231"},"shopOffline":{"saleCode":"39004848","shopCode":"80000560","saleName":{"th":"\u0e19\u0e32\u0e22 \u0e2d\u0e14\u0e34\u0e28\u0e31\u0e01\u0e14\u0e34\u0e4c \u0e44\u0e15\u0e23\u0e40\u0e2a\u0e19\u0e35\u0e22\u0e4c","en":null},"shopName":{"en":"True Shop Central Plaza Westgate 01","th":"True Shop Central Plaza Westgate 01"}},"id":{"id":"5453707659698","correlationId":"dc0715da-ed7a-4231-ae6a-e1e57726c79e"}}', 1);
        $request = new LaravelRequest();
        $request->setMethod(strtoupper("post"));
        $request->replace($input);

        $mock_reserve_number_response = json_decode('{"0":200,"1":{"serviceResult":{"status":"ERROR","code":"NAS201","description":"Msisdn not found."}},"is_pass":false,"code":"NAS201"}', 1);
        $mock_reserve_number_service = m::mock('overload:App\Services\VHora\ReserveNumberService');
        $mock_reserve_number_service->shouldReceive('postReserveNumber')->andReturn($mock_reserve_number_response);

        $mock_order_response = json_decode('{"offline_skip":1,"redirect_url":"https:\/\/pre-store.truecorp.co.th\/api\/true\/success"}', 1);
        $mock_order_service = m::mock('overload:App\Services\OrderService');
        $mock_order_service->shouldReceive('placeOrderOffline')->andReturn($mock_order_response);

        $expected = ['response' => ['data' => ['message' => 'Reserve number Error', 'code' => 'NAS201']], 'code' => 422];
        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        $response = VHoraService::processPlaceOrderOffline($request);
        $this->assertEquals($expected, $response);
    }

    /**
     * @group testProcessPlaceOrderOffline
     * @group WLSFT-18628
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessPlaceOrderOfflineErrorException()
    {
        $input   = json_decode('{"form":{"msisdn":"0850000994","ref_code":"08500009994000","firstname":"John","lastname":"Doe","birthdate":"07032540","birthtime":"01:01","timezone":"+0700","selected_msisdn":"0964234424","product_id":"L91587044","inventory_id":"3078153","store_id":"941527","companyCode":"RM"},"pricePlan":{"id":"9501","name":"Funtong 1199","code":"SMRTFP76","description":"Funtong 1199","sim_type":"postpaid","price":"1199","recommended":"1","proposition_nas_code":"0085779","proposition_term_short":"Funtong SIM Only 1199","campaign_code":"AN231"},"shopOffline":{"saleCode":"39004848","shopCode":"80000560","saleName":{"th":"\u0e19\u0e32\u0e22 \u0e2d\u0e14\u0e34\u0e28\u0e31\u0e01\u0e14\u0e34\u0e4c \u0e44\u0e15\u0e23\u0e40\u0e2a\u0e19\u0e35\u0e22\u0e4c","en":null},"shopName":{"en":"True Shop Central Plaza Westgate 01","th":"True Shop Central Plaza Westgate 01"}},"id":{"id":"5453707659698","correlationId":"dc0715da-ed7a-4231-ae6a-e1e57726c79e"}}', 1);
        $request = new LaravelRequest();
        $request->setMethod(strtoupper("post"));
        $request->replace($input);

        $mock_reserve_number_service = m::mock('overload:App\Services\VHora\ReserveNumberService');
        $mock_reserve_number_service->shouldReceive('postReserveNumber')->andThrow(new \Exception('test', 111));

        $expected = ['response' => ['data' => 'test'], 'code' => 406];
        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        $response = VHoraService::processPlaceOrderOffline($request);
        $this->assertEquals($expected, $response);
    }
}
