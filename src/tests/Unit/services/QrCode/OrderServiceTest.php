<?php

namespace Tests\Unit;

use App\Facades\QrCode\OrderService;
use Illuminate\Support\Arr;
use App\Facades\Client;
use Tests\TestCase;
use Mockery as m;

class OrderServiceTest extends TestCase
{
    /**
     * @group testOrderService
     */
    public function testOrderServiceBuildParameterStatusSuccess()
    {
        $response = OrderService::buildParameters([
            'secure_key'     => "800012096112",
            'payment_method' => "OMISEPROMPTPAY",
            'status'         => "success",
        ]);

        $this->assertNotEmpty($response);
        $this->assertArrayHasKey("secure_key", $response);
        $this->assertArrayHasKey("payment_method", $response);
        $this->assertArrayHasKey('status', $response);
        $this->assertEquals("800012096112", Arr::get($response, 'secure_key'));
        $this->assertEquals("OMISEPROMPTPAY", Arr::get($response, 'payment_method'));
        $this->assertEquals(true, Arr::get($response, 'status'));
    }

    /**
     * @group testOrderService
     */
    public function testOrderServiceBuildParameterStatusFail()
    {
        $response = OrderService::buildParameters([
            'secure_key'     => "800012096112",
            'payment_method' => "OMISEPROMPTPAY",
            'status'         => "fail",
        ]);

        $this->assertNotEmpty($response);
        $this->assertArrayHasKey("secure_key", $response);
        $this->assertArrayHasKey("payment_method", $response);
        $this->assertArrayHasKey('status', $response);
        $this->assertEquals("800012096112", Arr::get($response, 'secure_key'));
        $this->assertEquals("OMISEPROMPTPAY", Arr::get($response, 'payment_method'));
        $this->assertEquals(false, Arr::get($response, 'status'));
    }

    /**
     * @group testOrderService
     */
    public function testOrderServiceFindOrderSuccess()
    {
        $mock_response = '{"created_at":1625022379,"secure_key":"800012096112","expired_at":1626231979,"payment_method":"OMISEPROMPTPAY","status":true}';
        $mock_response = json_decode($mock_response, 1);
        
        $mock_model = m::mock('overload:App\Models\TruemovehOrderModel');
        $mock_model->shouldReceive('getOrder')
            ->with(['secure_key' => "800012096112",])
            ->once()
            ->andReturn($mock_response);

        $response = OrderService::findOrder(['secure_key' => "800012096112"]);    


        $this->assertNotEmpty($response);
        $this->assertArrayHasKey("secure_key", $response);
        $this->assertArrayHasKey("payment_method", $response);
        $this->assertArrayHasKey("status", $response);
        $this->assertArrayHasKey("created_at", $response);
        $this->assertArrayHasKey("expired_at", $response);
        $this->assertEquals('800012096112', Arr::get($response, 'secure_key'));
        $this->assertEquals('OMISEPROMPTPAY', Arr::get($response, 'payment_method'));
        $this->assertEquals(true, Arr::get($response, 'status'));
        $this->assertEquals('1625022379', Arr::get($response, 'created_at'));
        $this->assertEquals('1626231979', Arr::get($response, 'expired_at'));
    }

    /**
     * @group testOrderService
     */
    public function testOrderServiceFindOrderSuccessReturnEmpty()
    {
        $mock_response = '{}';
        $mock_response = json_decode($mock_response, 1);
        
        $mock_model = m::mock('overload:App\Models\TruemovehOrderModel');
        $mock_model->shouldReceive('getOrder')
            ->with(['secure_key' => "800012096112"])
            ->once()
            ->andReturn($mock_response);

        $response = OrderService::findOrder(['secure_key' => "800012096112"]);    

        $this->assertEmpty($response);
    }

    /**
     * @group testOrderService
     */
    public function testOrderServiceInsertOrderSuccess()
    {
        $parameters = OrderService::buildParameters([
            'secure_key'     => "800012096112",
            'payment_method' => "OMISEPROMPTPAY",
            'status'         => "fail",
        ]);

        $mock_model = m::mock('overload:App\Models\TruemovehOrderModel');
        $mock_model->shouldReceive('getDateNow')
            ->set('timestamp', 1625022379)
            ->andReturnSelf()
            ->shouldReceive('getTwoWeek')
            ->set('timestamp', 1626231979)
            ->andReturnSelf()
            ->shouldReceive('save')
            ->andReturn(true);
        
        $response = OrderService::insertOrder($parameters);    

        $this->assertTrue($response);
    }

    /**
     * @group testOrderService
     */
    public function testOrderServiceInsertOrderFail()
    {
        $parameters = OrderService::buildParameters([
            'secure_key'     => "800012096112",
            'payment_method' => "OMISEPROMPTPAY",
            'status'         => "fail",
        ]);

        $mock_model = m::mock('overload:App\Models\TruemovehOrderModel');
        $mock_model->shouldReceive('getDateNow')
            ->set('timestamp', 1625022379)
            ->andReturnSelf()
            ->shouldReceive('getTwoWeek')
            ->set('timestamp', 1626231979)
            ->andReturnSelf()
            ->shouldReceive('save')
            ->andReturn(false);
        
        $response = OrderService::insertOrder($parameters);    

        $this->assertFalse($response);
    }

    /**
     * @group testOrderService
     */
    public function testOrderServiceTriggerPostSuccessPass()
    {
        $parameters = [
            'secure_key'     => "800012096112",
            'payment_method' => "OMISEPROMPTPAY",
        ];

        Client::shouldReceive('request')->once()->andReturnSelf()
            ->shouldReceive('getStatusCode')->once()->andReturn(200);

        $response = OrderService::triggerPostSuccessOrder($parameters);

        $this->assertArrayHasKey("trigger", $response);
        $this->assertTrue(Arr::get($response, 'trigger'));
    }

    /**
     * @group testOrderService
     */
    public function testOrderServiceTriggerPostSuccessFail()
    {
        $parameters = [
            'secure_key'     => "800012096112",
            'payment_method' => "OMISEPROMPTPAY",
        ];

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        Client::shouldReceive('request')
            ->once()
            ->andReturnSelf()
            ->shouldReceive('getStatusCode')
            ->once()
            ->andThrow(new \Exception('Internal Server Error'));

        $response = OrderService::triggerPostSuccessOrder($parameters);

        $this->assertArrayHasKey("trigger", $response);
        $this->assertFalse(Arr::get($response, 'trigger'));
    }
}