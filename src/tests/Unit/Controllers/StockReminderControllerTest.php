<?php

namespace Tests\Unit;

use Illuminate\Http\Request as LaravelRequest;
use Tests\TestCase;
use App\Http\Controllers\StockReminderController;
use App\Facades\StockReminderService;
use Illuminate\Support\Arr;
use Mockery as m;
use Illuminate\Support\Facades\Redis;

class StockReminderControllerTest extends TestCase
{
    /**
     * @group postSaveStockReminder
     */
    public function testPostSaveStockReminderSuccess()
    {
        Redis::shouldReceive('get')->andReturn(1);

        $input   = json_decode('{ "mobile": "0812312322", "product_id": "L91597372", "inventory_id": "3089023", "type": "inventory" }', 1);
        $order_service = StockReminderService::shouldReceive('findReminder');
        $order_service->andReturn();

        $order_service = StockReminderService::shouldReceive('insertStockRemider');
        $order_service->andReturn(true);

        $request = new LaravelRequest();
        $request->setMethod(strtoupper("post"));
        $request->replace($input);

        $controller = new StockReminderController();
        $response   = $controller->postSaveStockReminder($request);
        $response   = json_decode($response->getContent(), true);
        $this->assertEquals(200, Arr::get($response, 'status_code'));
        $this->assertEquals('OK', Arr::get($response, 'status_txt'));
        $this->assertCount(5, Arr::get($response, 'data'));
        $this->assertArrayHasKey("mobile", Arr::get($response, 'data'));
        $this->assertArrayHasKey("product_id", Arr::get($response, 'data'));
        $this->assertArrayHasKey("inventory_id", Arr::get($response, 'data'));
        $this->assertArrayHasKey("type", Arr::get($response, 'data'));
        $this->assertArrayHasKey("key", Arr::get($response, 'data'));
        $this->assertEquals('0812312322', Arr::get($response, 'data.mobile'));
        $this->assertEquals('L91597372', Arr::get($response, 'data.product_id'));
        $this->assertEquals('3089023', Arr::get($response, 'data.inventory_id'));
        $this->assertEquals('inventory', Arr::get($response, 'data.type'));
        $this->assertEquals('0812312322-L91597372-3089023', Arr::get($response, 'data.key'));
    }

    /**
     * @group postSaveStockReminder
     */
    public function testPostSaveStockReminderToggleOff()
    {
        Redis::shouldReceive('get')->andReturnNull();

        $input   = json_decode('{ "mobile": "0812312322", "product_id": "L91597372", "inventory_id": "3089023", "type": "inventory" }', 1);
        $order_service = StockReminderService::shouldReceive('findReminder');
        $order_service->andReturn();

        $order_service = StockReminderService::shouldReceive('insertStockRemider');
        $order_service->andReturn(true);

        $request = new LaravelRequest();
        $request->setMethod(strtoupper("post"));
        $request->replace($input);

        $controller = new StockReminderController();
        $response   = $controller->postSaveStockReminder($request);
        $response   = json_decode($response->getContent(), true);

        $this->assertEquals(200, Arr::get($response, 'status_code'));
        $this->assertEquals('OK', Arr::get($response, 'status_txt'));
        $this->assertCount(5, Arr::get($response, 'data'));
        $this->assertArrayHasKey("mobile", Arr::get($response, 'data'));
        $this->assertArrayHasKey("product_id", Arr::get($response, 'data'));
        $this->assertArrayHasKey("inventory_id", Arr::get($response, 'data'));
        $this->assertArrayHasKey("type", Arr::get($response, 'data'));
        $this->assertArrayHasKey("key", Arr::get($response, 'data'));
        $this->assertEquals('0812312322', Arr::get($response, 'data.mobile'));
        $this->assertEquals('L91597372', Arr::get($response, 'data.product_id'));
        $this->assertEquals('3089023', Arr::get($response, 'data.inventory_id'));
        $this->assertEquals('inventory', Arr::get($response, 'data.type'));
        $this->assertEquals('', Arr::get($response, 'data.key'));
    }

    /**
     * @group postSaveStockReminder
     */
    public function testPostSaveStockReminderDuplicate()
    {
        Redis::shouldReceive('get')->andReturn(1);
        $input   = json_decode('{ "mobile": "0812312322", "product_id": "L91597372", "inventory_id": "3089023", "type": "inventory" }', 1);
        $order_service = StockReminderService::shouldReceive('findReminder');
        $order_service->andReturn($input);

        $order_service = StockReminderService::shouldReceive('insertStockRemider');
        $order_service->andReturn(true);

        $request = new LaravelRequest();
        $request->setMethod(strtoupper("post"));
        $request->replace($input);

        $controller = new StockReminderController();
        $response   = $controller->postSaveStockReminder($request);
        $response   = json_decode($response->getContent(), true);

        $this->assertEquals(400, Arr::get($response, 'status_code'));
        $this->assertEquals('Bad Request', Arr::get($response, 'status_txt'));
        $this->assertEquals('Data Duplicate', Arr::get($response, 'errors'));
    }

    /**
     * @group postSaveStockReminder
     */
    public function testPostSaveStockReminderValidate()
    {
        Redis::shouldReceive('get')->andReturn(1);
        $input   = json_decode('{ "mobile": "", "product_id": "L91597372", "inventory_id": "3089023", "type": "so" }', 1);
        $order_service = StockReminderService::shouldReceive('findReminder');
        $order_service->andReturn($input);

        $order_service = StockReminderService::shouldReceive('insertStockRemider');
        $order_service->andReturn(true);

        $request = new LaravelRequest();
        $request->setMethod(strtoupper("post"));
        $request->replace($input);

        $controller = new StockReminderController();
        $response   = $controller->postSaveStockReminder($request);
        $response   = json_decode($response->getContent(), true);

        $this->assertEquals(400, Arr::get($response, 'status_code'));
        $this->assertEquals('Bad Request', Arr::get($response, 'status_txt'));
        $this->assertEquals('The mobile field is required.', Arr::get($response, 'errors.message.mobile.0'));
        $this->assertEquals('The selected type is invalid.', Arr::get($response, 'errors.message.type.0'));
    }

    /**
     * @group postSaveStockReminder
     */
    public function testPostSaveStockReminderException()
    {
        Redis::shouldReceive('get')->andReturn(1);
        $input   = json_decode('{ "mobile": "0812312322", "product_id": "L91597372", "inventory_id": "3089023", "type": "inventory" }', 1);
        $order_service = StockReminderService::shouldReceive('findReminder');
        $order_service->once();
        $order_service->andThrow(new \Exception('Internal Server Error'));

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        $request = new LaravelRequest();
        $request->setMethod(strtoupper("post"));
        $request->replace($input);

        $controller = new StockReminderController();
        $response   = $controller->postSaveStockReminder($request);
        $response   = json_decode($response->getContent(), true);

        $this->assertEquals(500, Arr::get($response, 'status_code'));
        $this->assertEquals('Internal Server Error', Arr::get($response, 'status_txt'));
        $this->assertEquals(500, Arr::get($response, 'errors.message.code'));
        $this->assertEquals('Internal Server Error', Arr::get($response, 'errors.message.message'));
    }
}
