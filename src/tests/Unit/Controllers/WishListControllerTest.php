<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Facades\WishListService;
use Exception;
use Mockery;

class WishListControllerTest extends TestCase
{
    public function testGetWishListSuccess()
    {
        WishListService::shouldReceive('getWishList')->once()->andReturn(json_decode('{"response":{"data":{"user_id":"123456","products":{"L91512345":{"name":"","description":"","price":""}}}},"code":200}', true));
        $res = $this->get('/api/true/v2/wishlist', ['user_id' => 123456, 'product_id' => 'L91512345']);
        $response = json_decode($res->getContent(), true);
        $this->assertEquals(200, $response['status_code']);
        $this->assertEquals(json_decode('{"user_id":"123456","products":{"L91512345":{"name":"","description":"","price":""}}}', true), $response['data']);
    }

    public function testGetWishListFailInvalidArgumentException()
    {
        $mock = Mockery::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);
        WishListService::shouldReceive('getWishList')->once()->andThrow(new \InvalidArgumentException('{"message":"The user id field is required."}', 400));
        $res = $this->get('/api/true/v2/wishlist', ['product_id' => 'L91512345']);
        $response = json_decode($res->getContent(), true);
        $this->assertEquals(400, $response['status_code']);
        $this->assertEquals('{"message":"The user id field is required."}', $response['errors']['description']);
    }

    public function testGetWishListFailException()
    {
        $mock = Mockery::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);
        WishListService::shouldReceive('getWishList')->once()->andThrow(new Exception('xxxxx', 400));
        $res = $this->get('/api/true/v2/wishlist', ['product_id' => 'L91512345']);
        $response = json_decode($res->getContent(), true);
        $this->assertEquals(400, $response['status_code']);
        $this->assertEquals('xxxxx', $response['errors']['description']);
    }

    public function testCreateWishListSuccess()
    {
        WishListService::shouldReceive('createWishList')->once()->andReturn(json_decode('{"response":{"data":true},"code":200}', true));
        $res = $this->post('/api/true/v2/wishlist', ['user_id' => 123456, 'product_id' => 'L91512345']);
        $response = json_decode($res->getContent(), true);
        $this->assertEquals(200, $response['status_code']);
        $this->assertEquals(true, $response['data']);
    }

    public function testCreateWishListFailInvalidArgumentException()
    {
        $mock = Mockery::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);
        WishListService::shouldReceive('createWishList')->once()->andThrow(new \InvalidArgumentException('{"message":"The user id field is required."}', 400));
        $res = $this->post('/api/true/v2/wishlist', ['product_id' => 'L91512345']);
        $response = json_decode($res->getContent(), true);
        $this->assertEquals(400, $response['status_code']);
        $this->assertEquals('{"message":"The user id field is required."}', $response['errors']['description']);
    }

    public function testCreateWishListFailException()
    {
        $mock = Mockery::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);
        WishListService::shouldReceive('createWishList')->once()->andThrow(new Exception('xxxxx', 400));
        $res = $this->post('/api/true/v2/wishlist', ['product_id' => 'L91512345']);
        $response = json_decode($res->getContent(), true);
        $this->assertEquals(400, $response['status_code']);
        $this->assertEquals('xxxxx', $response['errors']['description']);
    }

    public function testCreateWishListFailUnexpectedValueException()
    {
        $mock = Mockery::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);
        WishListService::shouldReceive('createWishList')->once()->andThrow(new \UnexpectedValueException('Create wish list error', 422));
        $res = $this->post('/api/true/v2/wishlist', ['product_id' => 'L91512345']);
        $response = json_decode($res->getContent(), true);
        $this->assertEquals(422, $response['status_code']);
        $this->assertEquals('Create wish list error', $response['errors']['description']);
    }

    public function testDeleteWishListSuccess()
    {
        WishListService::shouldReceive('deleteWishList')->once()->andReturn(json_decode('{"response":{"data":true},"code":200}', true));
        $res = $this->delete('/api/true/v2/wishlist', ['user_id' => 123456, 'product_id' => 'L91512345']);
        $response = json_decode($res->getContent(), true);
        $this->assertEquals(200, $response['status_code']);
        $this->assertEquals(true, $response['data']);
    }

    public function testDeleteWishListFailUnexpectedValueException()
    {
        $mock = Mockery::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);
        WishListService::shouldReceive('deleteWishList')->once()->andThrow(new \UnexpectedValueException('Delete wish list error', 422));
        $res = $this->delete('/api/true/v2/wishlist', ['product_id' => 'L91512345']);
        $response = json_decode($res->getContent(), true);
        $this->assertEquals(422, $response['status_code']);
        $this->assertEquals('Delete wish list error', $response['errors']['description']);
    }

    public function testDeleteWishListFailInvalidArgumentException()
    {
        $mock = Mockery::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);
        WishListService::shouldReceive('deleteWishList')->once()->andThrow(new \InvalidArgumentException('{"message":"The user id field is required."}', 400));
        $res = $this->delete('/api/true/v2/wishlist', ['product_id' => 'L91512345']);
        $response = json_decode($res->getContent(), true);
        $this->assertEquals(400, $response['status_code']);
        $this->assertEquals('{"message":"The user id field is required."}', $response['errors']['description']);
    }

    public function testDeleteWishListFailException()
    {
        $mock = Mockery::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);
        WishListService::shouldReceive('deleteWishList')->once()->andThrow(new Exception('xxxxx', 400));
        $res = $this->delete('/api/true/v2/wishlist', ['product_id' => 'L91512345']);
        $response = json_decode($res->getContent(), true);
        $this->assertEquals(400, $response['status_code']);
        $this->assertEquals('xxxxx', $response['errors']['description']);
    }
}