<?php

namespace Tests\Feature;

use App\Services\WlsService;
use Tests\TestCase;

class CartProductTypeTest extends TestCase
{
    public function testCartProductTypeHappyDigital()
    {
        $url      = "ecom/cart/test_cart_happy_digital";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter                 = [];
        $request_parameter["product_id"]   = "L91587044";
        $request_parameter["inventory_id"] = "3078153";
        $request_parameter["quantity"]     = "1";

        $lrequest->replace($request_parameter);

        $header  = [];
        $content = WlsService::cartActionWls($url, $method, $lrequest, $header);

        $url      = "ecom/cart/test_cart_happy_digital";
        $method   = "get";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];

        $lrequest->replace($request_parameter);

        $header  = [];
        $content = WlsService::cartActionWls($url, $method, $lrequest, $header);
        var_dump($content);
        $this->assertEquals("happy_digital", (json_decode($content[1], true)["data"]["record"][0]["products"][0]["product_type"]));

        $url      = "ecom/cart/test_cart_happy_digital";
        $method   = "delete";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];

        $lrequest->replace($request_parameter);

        $header  = [];
        $content = WlsService::cartActionWls($url, $method, $lrequest, $header);
    }
}
