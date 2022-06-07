<?php

namespace Tests\Unit;

use Illuminate\Http\Request as LaravelRequest;
use Tests\TestCase;
use App\Http\Controllers\V2\QrCodeController;
use App\Facades\QrCode\OrderService;
use Illuminate\Support\Arr;
use Mockery as m;

class QrCodeControllerTest extends TestCase
{
    /**
     * @group testGetQrCodeGetOrder
     */
    public function testGetQrCodeGetOrderInvalidDataEmptyInput()
    {
        $input   = [];
        $request = new LaravelRequest();
        $request->setMethod(strtoupper("get"));
        $request->replace($input);

        $controller = new QrCodeController();
        $response   = $controller->getOrder($request);
        $response   = json_decode($response->getContent(), true);

        $this->assertEquals(400, Arr::get($response, 'status_code'));
        $this->assertEquals('Bad Request', Arr::get($response, 'status_txt'));
        $this->assertArrayHasKey("message", Arr::get($response, 'errors'));
        $this->assertArrayHasKey("order_code", Arr::get($response, 'errors.message'));
        $this->assertEquals('The order code field is required.', Arr::get($response, 'errors.message.order_code.0'));
    }

    /**
     * @group testGetQrCodeGetOrder
     */
    public function testGetQrCodeGetOrderInvalidDataOrderCodeMin()
    {
        $input   = ['order_code' => '1112'];
        $request = new LaravelRequest();
        $request->setMethod(strtoupper("get"));
        $request->replace($input);

        $controller = new QrCodeController();
        $response   = $controller->getOrder($request);
        $response   = json_decode($response->getContent(), true);

        $this->assertEquals(400, Arr::get($response, 'status_code'));
        $this->assertEquals('Bad Request', Arr::get($response, 'status_txt'));
        $this->assertArrayHasKey("message", Arr::get($response, 'errors'));
        $this->assertArrayHasKey("order_code", Arr::get($response, 'errors.message'));
        $this->assertEquals('The order code must be at least 13 characters.', Arr::get($response, 'errors.message.order_code.0'));
    }

    /**
     * @group testGetQrCodeGetOrder
     */
    public function testGetQrCodeGetOrderInvalidDataOrderCodeDecrypt()
    {
        $input   = ['order_code' => '111211121112111211121112'];
        $request = new LaravelRequest();
        $request->setMethod(strtoupper("get"));
        $request->replace($input);

        $controller = new QrCodeController();
        $response   = $controller->getOrder($request);
        $response   = json_decode($response->getContent(), true);

        $this->assertEquals(400, Arr::get($response, 'status_code'));
        $this->assertEquals('Bad Request', Arr::get($response, 'status_txt'));
        $this->assertArrayHasKey("message", Arr::get($response, 'errors'));
        $this->assertArrayHasKey("order_code", Arr::get($response, 'errors.message'));
        $this->assertEquals('The payload is invalid.', Arr::get($response, 'errors.message.order_code.0'));
    }

    /**
     * @group testGetQrCodeGetOrder
     */
    public function testGetQrCodeGetOrderSuccessDataNotFound()
    {
        $input = [
            'order_code' => 'eyJpdiI6Im44VWt1TldsWm9ZbXNmOGd3eXNaN0E9PSIsInZhbHVlIjoiNW5ZUDdBRXFFK2kyenlRd0JcL2JKcEdKVDR1VFUwMTNqUHpISG5nUHJmOGc9IiwibWFjIjoiODkwYjA1ODM2ZTFhZjcyNzZmNTAxZDJmODVlNjVhNTk2MDA1ZmVlMWMxNTkzNmQxYzAxMTBmZGQ4M2JkZTA1MiJ9'
        ];
        
        $order_service = OrderService::shouldReceive('findOrder');
        $order_service->with(['secure_key' => '800012096112']);
        $order_service->once();
        $order_service->andReturn(null);

        $request = new LaravelRequest();
        $request->setMethod(strtoupper("get"));
        $request->replace($input);

        $controller = new QrCodeController();
        $response   = $controller->getOrder($request);
        $response   = json_decode($response->getContent(), true);

        $this->assertEquals(200, Arr::get($response, 'status_code'));
        $this->assertEquals('OK', Arr::get($response, 'status_txt'));
        $this->assertEquals(null, Arr::get($response, 'data'));
        $this->assertEmpty(Arr::get($response, 'data'));
    }

    /**
     * @group testGetQrCodeGetOrder
     */
    public function testGetQrCodeGetOrderFailException()
    {
        $order_service = OrderService::shouldReceive('findOrder');
        $order_service->with(['secure_key' => '800012096112']);
        $order_service->once();
        $order_service->andThrow(new \Exception('Internal Server Error'));

        $input = [
            'order_code' => 'eyJpdiI6Im44VWt1TldsWm9ZbXNmOGd3eXNaN0E9PSIsInZhbHVlIjoiNW5ZUDdBRXFFK2kyenlRd0JcL2JKcEdKVDR1VFUwMTNqUHpISG5nUHJmOGc9IiwibWFjIjoiODkwYjA1ODM2ZTFhZjcyNzZmNTAxZDJmODVlNjVhNTk2MDA1ZmVlMWMxNTkzNmQxYzAxMTBmZGQ4M2JkZTA1MiJ9'
        ];

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        $request = new LaravelRequest();
        $request->setMethod(strtoupper("get"));
        $request->replace($input);

        $controller = new QrCodeController();
        $response   = $controller->getOrder($request);
        $response   = json_decode($response->getContent(), true);

        $this->assertEquals(500, Arr::get($response, 'status_code'));
        $this->assertEquals('Internal Server Error', Arr::get($response, 'status_txt'));
        $this->assertArrayHasKey("message", Arr::get($response, 'errors'));
        $this->assertArrayHasKey("code", Arr::get($response, 'errors.message'));
        $this->assertArrayHasKey("message", Arr::get($response, 'errors.message'));
        $this->assertEquals(500, Arr::get($response, 'errors.message.code'));
        $this->assertEquals('Internal Server Error', Arr::get($response, 'errors.message.message'));
    }

    /**
     * @group testGetQrCodeGetOrder
     */
    public function testGetQrCodeGetOrderSuccess()
    {        
        $input = [
            'order_code' => 'eyJpdiI6Im44VWt1TldsWm9ZbXNmOGd3eXNaN0E9PSIsInZhbHVlIjoiNW5ZUDdBRXFFK2kyenlRd0JcL2JKcEdKVDR1VFUwMTNqUHpISG5nUHJmOGc9IiwibWFjIjoiODkwYjA1ODM2ZTFhZjcyNzZmNTAxZDJmODVlNjVhNTk2MDA1ZmVlMWMxNTkzNmQxYzAxMTBmZGQ4M2JkZTA1MiJ9'
        ];

        $order_service = OrderService::shouldReceive('findOrder');
        $order_service->with(['secure_key' => '800012096112']);
        $order_service->once();
        $order_service->andReturn(json_decode('{"created_at":1625022379,"secure_key":"800012096112","expired_at":1626231979,"payment_method":"OMISEPROMPTPAY","status":true}', true));

        $request = new LaravelRequest();
        $request->setMethod(strtoupper("get"));
        $request->replace($input);

        $controller = new QrCodeController();
        $response   = $controller->getOrder($request);
        $response   = json_decode($response->getContent(), true);

        $this->assertEquals(200, Arr::get($response, 'status_code'));
        $this->assertEquals('OK', Arr::get($response, 'status_txt'));
        $this->assertCount(5, Arr::get($response, 'data'));
        $this->assertArrayHasKey("secure_key", Arr::get($response, 'data'));
        $this->assertArrayHasKey("payment_method", Arr::get($response, 'data'));
        $this->assertArrayHasKey("status", Arr::get($response, 'data'));
        $this->assertArrayHasKey("created_at", Arr::get($response, 'data'));
        $this->assertArrayHasKey("expired_at", Arr::get($response, 'data'));
        $this->assertTrue(Arr::get($response, 'data.status'));
        $this->assertEquals('800012096112', Arr::get($response, 'data.secure_key'));
        $this->assertEquals('OMISEPROMPTPAY', Arr::get($response, 'data.payment_method'));
        $this->assertEquals('1625022379', Arr::get($response, 'data.created_at'));
        $this->assertEquals('1626231979', Arr::get($response, 'data.expired_at'));
    }

    /**
     * @group testPostStatusQrCodeOrder
     */
    public function testPostStatusQrCodeOrderInvalidEmptyInput()
    {
        $input    = [];
        $response = $this->postJson('/api/true/v2/qrcode/status', $input);
        $response = json_decode($response->getContent(), true);

        $this->assertEquals(400, Arr::get($response, 'status_code'));
        $this->assertEquals('Bad Request', Arr::get($response, 'status_txt'));
        $this->assertArrayHasKey("message", Arr::get($response, 'errors'));
        $this->assertArrayHasKey("secure_key", Arr::get($response, 'errors.message'));
        $this->assertArrayHasKey("payment_method", Arr::get($response, 'errors.message'));
        $this->assertArrayHasKey("status", Arr::get($response, 'errors.message'));
        $this->assertEquals('The secure key field is required.', Arr::get($response, 'errors.message.secure_key.0'));
        $this->assertEquals('The payment method field is required.', Arr::get($response, 'errors.message.payment_method.0'));
        $this->assertEquals('The status field is required.', Arr::get($response, 'errors.message.status.0'));
    }

    /**
     * @group testPostStatusQrCodeOrder
     */
    public function testPostStatusQrCodeOrderInvalidInput()
    {
        $input = [
            'secure_key'     => 800012096112,
            'payment_method' => 123,
            'status'         => "failed",
        ];
        $response = $this->postJson('/api/true/v2/qrcode/status', $input);
        $response = json_decode($response->getContent(), true);

        $this->assertEquals(400, Arr::get($response, 'status_code'));
        $this->assertEquals('Bad Request', Arr::get($response, 'status_txt'));
        $this->assertArrayHasKey("message", Arr::get($response, 'errors'));
        $this->assertArrayHasKey("secure_key", Arr::get($response, 'errors.message'));
        $this->assertArrayHasKey("payment_method", Arr::get($response, 'errors.message'));
        $this->assertArrayHasKey("status", Arr::get($response, 'errors.message'));
        $this->assertEquals('The secure key must be a string.', Arr::get($response, 'errors.message.secure_key.0'));
        $this->assertEquals('The payment method must be a string.', Arr::get($response, 'errors.message.payment_method.0'));
        $this->assertEquals('The selected status is invalid.', Arr::get($response, 'errors.message.status.0'));
    }

    /**
     * @group testPostStatusQrCodeOrder
     */
    public function testPostStatusQrCodeOrderFailDuplicate()
    {
        $input = [
            'secure_key'     => "800012096112",
            'payment_method' => "OMISEPROMPTPAY",
            'status'         => "fail",
        ];
        $parameters           = $input;
        $parameters['status'] = false;

        OrderService::shouldReceive('buildParameters')
            ->andReturn($parameters);
        OrderService::shouldReceive('findOrder')
            ->andReturn(json_decode('{"created_at":1625022379,"secure_key":"800012096112","expired_at":1626231979,"payment_method":"OMISEPROMPTPAY","status":true}', true));

        $response = $this->postJson('/api/true/v2/qrcode/status', $input);
        $response = json_decode($response->getContent(), true);

        $this->assertEquals(400, Arr::get($response, 'status_code'));
        $this->assertEquals('Bad Request', Arr::get($response, 'status_txt'));
        $this->assertArrayHasKey("message", Arr::get($response, 'errors'));
        $this->assertArrayHasKey("secure_key", Arr::get($response, 'errors.message'));
        $this->assertEquals('Duplicate secure_key', Arr::get($response, 'errors.message.secure_key.0'));
    }

    /**
     * @group testPostStatusQrCodeOrder
     */
    public function testPostStatusQrCodeOrderErrorInsert()
    {
        $input = [
            'secure_key'     => "800012096112",
            'payment_method' => "OMISEPROMPTPAY",
            'status'         => "fail",
        ];
        $parameters           = $input;
        $parameters['status'] = false;

        OrderService::shouldReceive('buildParameters')
            ->andReturn($parameters);
        OrderService::shouldReceive('findOrder')
            ->andReturn(null);
        OrderService::shouldReceive('insertOrder')
            ->andReturn(false);

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);    

        $response = $this->postJson('/api/true/v2/qrcode/status', $input);
        $response = json_decode($response->getContent(), true);

        $this->assertEquals(500, Arr::get($response, 'status_code'));
        $this->assertEquals('Internal Server Error', Arr::get($response, 'status_txt'));
        $this->assertArrayHasKey("message", Arr::get($response, 'errors'));
        $this->assertArrayHasKey("code", Arr::get($response, 'errors.message'));
        $this->assertArrayHasKey("message", Arr::get($response, 'errors.message'));
        $this->assertEquals(500, Arr::get($response, 'errors.message.code'));
        $this->assertEquals('Internal Server Error', Arr::get($response, 'errors.message.message'));
    }

    /**
     * @group testPostStatusQrCodeOrder
     */
    public function testPostStatusQrCodeOrderSuccessStatusFail()
    {
        $input = [
            'secure_key'     => "800012096112",
            'payment_method' => "OMISEPROMPTPAY",
            'status'         => "fail",
        ];
        $parameters           = $input;
        $parameters['status'] = false;

        OrderService::shouldReceive('buildParameters')
            ->andReturn($parameters);
        OrderService::shouldReceive('findOrder')
            ->andReturn(null);
        OrderService::shouldReceive('insertOrder')
            ->andReturn(true);

        $response = $this->postJson('/api/true/v2/qrcode/status', $input);
        $response = json_decode($response->getContent(), true);

        $this->assertEquals(200, Arr::get($response, 'status_code'));
        $this->assertEquals('OK', Arr::get($response, 'status_txt'));
        $this->assertCount(4, Arr::get($response, 'data'));
        $this->assertArrayHasKey("secure_key", Arr::get($response, 'data'));
        $this->assertArrayHasKey("payment_method", Arr::get($response, 'data'));
        $this->assertArrayHasKey("status", Arr::get($response, 'data'));
        $this->assertArrayHasKey("trigger", Arr::get($response, 'data'));
        $this->assertEquals('800012096112', Arr::get($response, 'data.secure_key'));
        $this->assertEquals('OMISEPROMPTPAY', Arr::get($response, 'data.payment_method'));
        $this->assertEquals('fail', Arr::get($response, 'data.status'));
        $this->assertFalse(Arr::get($response, 'data.trigger'));
    }

    /**
     * @group testPostStatusQrCodeOrder
     */
    public function testPostStatusQrCodeOrderSuccessStatusSuccess()
    {
        $input = [
            'secure_key'     => "800012096112",
            'payment_method' => "OMISEPROMPTPAY",
            'status'         => "success",
        ];
        $parameters           = $input;
        $parameters['status'] = true;

        OrderService::shouldReceive('buildParameters')
            ->andReturn($parameters);
        OrderService::shouldReceive('findOrder')
            ->andReturn(null);
        OrderService::shouldReceive('insertOrder')
            ->andReturn(true);
        OrderService::shouldReceive('triggerPostSuccessOrder')
            ->andReturn(['trigger' => true]);

        $response = $this->postJson('/api/true/v2/qrcode/status', $input);
        $response = json_decode($response->getContent(), true);

        $this->assertEquals(200, Arr::get($response, 'status_code'));
        $this->assertEquals('OK', Arr::get($response, 'status_txt'));
        $this->assertCount(4, Arr::get($response, 'data'));
        $this->assertArrayHasKey("secure_key", Arr::get($response, 'data'));
        $this->assertArrayHasKey("payment_method", Arr::get($response, 'data'));
        $this->assertArrayHasKey("status", Arr::get($response, 'data'));
        $this->assertArrayHasKey("trigger", Arr::get($response, 'data'));
        $this->assertEquals('800012096112', Arr::get($response, 'data.secure_key'));
        $this->assertEquals('OMISEPROMPTPAY', Arr::get($response, 'data.payment_method'));
        $this->assertEquals('success', Arr::get($response, 'data.status'));
        $this->assertTrue(Arr::get($response, 'data.trigger'));
    }
}
