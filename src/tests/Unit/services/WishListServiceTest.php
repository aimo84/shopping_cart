<?php

namespace Tests\Unit;

use Tests\TestCase;
// use App\Facades\WishListService;
use Mockery;

class OrderServiceTest extends TestCase
{
    public function testGetWishListFilterProductIdSuccess()
    {
        $expected = json_decode('{"response":{"data":{"user_id":"123456","products":{"L91512345":{"name":"","description":"","price":""}}}},"code":200}', true);
        $mock_wish_list_service = Mockery::mock('App\Services\WishListService')->makePartial();
        $mock_wish_list_service->shouldReceive('curlGetWishList')->once()->andReturn([200, json_decode('{"data":{"user_id":"123456","products":{"L91512345":{"name":"","description":"","price":""},"L91512346":{"name":"","description":"","price":""}}}}', true)]);
        $response = $mock_wish_list_service->getWishList(['user_id' => 123456, 'product_id' => 'L91512345']);
        $this->assertEquals($expected, $response);
    }

    public function testGetWishListNoFilterProductIdSuccess()
    {
        $expected = json_decode('{"response":{"data":{"user_id":"123456","products":{"L91512345":{"name":"","description":"","price":""},"L91512346":{"name":"","description":"","price":""}}}},"code":200}', true);
        $mock_wish_list_service = Mockery::mock('App\Services\WishListService')->makePartial();
        $mock_wish_list_service->shouldReceive('curlGetWishList')->once()->andReturn([200, json_decode('{"data":{"user_id":"123456","products":{"L91512345":{"name":"","description":"","price":""},"L91512346":{"name":"","description":"","price":""}}}}', true)]);
        $response = $mock_wish_list_service->getWishList(['user_id' => 123456]);
        $this->assertEquals($expected, $response);
    }

    /**
     * @expectedException InvalidArgumentException
     * @expectedExceptionMessage The user id field is required.
     * @expectedExceptionCode 400
     */
    public function testGetWishListValidateUserId()
    {
        $mock_wish_list_service = Mockery::mock('App\Services\WishListService')->makePartial();
        $mock_wish_list_service->getWishList([]);
    }

    /**
     * @expectedException InvalidArgumentException
     * @expectedExceptionMessage The user id field is required.
     * @expectedExceptionCode 400
     */
    public function testCreateWishListValidateUserId()
    {
        $mock_wish_list_service = Mockery::mock('App\Services\WishListService')->makePartial();
        $mock_wish_list_service->createWishList(['product_id' => 'L9999999']);
    }

    /**
     * @expectedException InvalidArgumentException
     * @expectedExceptionMessage The product id field is required.
     * @expectedExceptionCode 400
     */
    public function testCreateWishListValidateProductId()
    {
        $mock_wish_list_service = Mockery::mock('App\Services\WishListService')->makePartial();
        $mock_wish_list_service->createWishList(['user_id' => '12345']);
    }

    public function testCreateWishListSuccess()
    {
        $expected = json_decode('{"response":{"data":true},"code":200}', true);
        $mock_wish_list_service = Mockery::mock('App\Services\WishListService')->makePartial();
        $mock_wish_list_service->shouldReceive('curlCreateWishList')->once()->andReturn([200, json_decode('{"status_code":0,"status_txt":"Success","data":true}', true)]);
        $response = $mock_wish_list_service->createWishList(['user_id' => 123456, 'product_id' => 'L91512345']);
        $this->assertEquals($expected, $response);
    }

    /**
     * @expectedException UnexpectedValueException
     * @expectedExceptionMessage Create wish list error
     * @expectedExceptionCode 422
     */
    public function testCreateWishListResponseInvalid()
    {
        $expected = json_decode('{"response":{"data":true},"code":200}', true);
        $mock_wish_list_service = Mockery::mock('App\Services\WishListService')->makePartial();
        $mock_wish_list_service->shouldReceive('curlCreateWishList')->once()->andReturn([200, json_decode('{"status_code":999,"status_txt":"xxxxxx","data":"xxxxxx"}', true)]);
        $response = $mock_wish_list_service->createWishList(['user_id' => 123456, 'product_id' => 'L91512345']);
        $this->assertEquals($expected, $response);
    }

    /**
     * @expectedException InvalidArgumentException
     * @expectedExceptionMessage The user id field is required.
     * @expectedExceptionCode 400
     */
    public function testDeleteWishListValidateUserId()
    {
        $mock_wish_list_service = Mockery::mock('App\Services\WishListService')->makePartial();
        $mock_wish_list_service->deleteWishList(['product_id' => 'L9999999']);
    }

    /**
     * @expectedException InvalidArgumentException
     * @expectedExceptionMessage The product id field is required.
     * @expectedExceptionCode 400
     */
    public function testDeleteWishListValidateProductId()
    {
        $mock_wish_list_service = Mockery::mock('App\Services\WishListService')->makePartial();
        $mock_wish_list_service->deleteWishList(['user_id' => '12345']);
    }

    /**
     * @expectedException UnexpectedValueException
     * @expectedExceptionMessage Delete wish list error
     * @expectedExceptionCode 422
     */
    public function testDeleteWishListResponseInvalid()
    {
        $expected = json_decode('{"response":{"data":true},"code":200}', true);
        $mock_wish_list_service = Mockery::mock('App\Services\WishListService')->makePartial();
        $mock_wish_list_service->shouldReceive('curlDeleteWishList')->once()->andReturn([200, json_decode('{"status_code":999,"status_txt":"xxxxxx","data":"xxxxxx"}', true)]);
        $response = $mock_wish_list_service->deleteWishList(['user_id' => 123456, 'product_id' => 'L91512345']);
        $this->assertEquals($expected, $response);
    }

    public function testDeleteWishListSuccess()
    {
        $expected = json_decode('{"response":{"data":true},"code":200}', true);
        $mock_wish_list_service = Mockery::mock('App\Services\WishListService')->makePartial();
        $mock_wish_list_service->shouldReceive('curlDeleteWishList')->once()->andReturn([200, json_decode('{"status_code":0,"status_txt":"Success","data":1}', true)]);
        $response = $mock_wish_list_service->deleteWishList(['user_id' => 123456, 'product_id' => 'L91512345']);
        $this->assertEquals($expected, $response);
    }
}
