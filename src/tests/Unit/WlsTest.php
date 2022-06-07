<?php

namespace Tests\Unit;

use App\Services\WlsService;
use Tests\TestCase;

class WlsTest extends TestCase
{
    /**
     * Wls unit test.
     *
     * @return void
     */
    public function testGetOrderWemall()
    {
        $id_for_test = 800011705438;
        $url         = "order/order/{$id_for_test}";
        $method      = "get";
        $lrequest    = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];
        $lrequest->replace($request_parameter);

        $header = [
            "Content-Type" => "application/json",
        ];
        $content = WlsService::getOrderWls($url, $method, $lrequest, $header);

        $this->assertArrayHasKey(0, $content);
        $this->assertArrayHasKey(1, $content);

        $this->assertEquals($content[0], 200);
        foreach (["data", "system_date", "benchmark", "code", "message"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true));
        }

        foreach (["id", "secure_key", "app_id", "device"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true)["data"]);
        }
    }

    public function testGetPortalProduct()
    {
        $id_for_test = "L91556718";
        $url         = "wportal/product/{$id_for_test}";
        $method      = "get";
        $lrequest    = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];
        $lrequest->replace($request_parameter);

        $header = [
            "Content-Type" => "application/json",
        ];
        $content = WlsService::getPortalProductWls($url, $method, $lrequest, $header);

        $this->assertArrayHasKey(0, $content);
        $this->assertArrayHasKey(1, $content);

        $this->assertEquals($content[0], 200);
        foreach (["data", "status_code", "status_txt"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true));
        }
        foreach (["benchmark", "record"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true)["data"]);
        }

        $key_list = ["id"
            , "seq_id"
            , "viewed"
            , "store_id"
            , "section"
            , "type"
            , "position"
            , "price"
            , "price_min"
            , "price_max"
            , "compare_at_price_min"
            , "compare_at_price_max"
            , "status"
            , "show"
            , "title"
            , "seo"
            , "category"
            , "last_plaza_category"
            , "promotions"
            , "inventories"
            , "features"
            , "wetrust"
            , "package"
            , "images"
            , "tags"
            , "monitor_status"
            , "warehouse"
            , "created_at"
            , "updated_at"
            , "migrated_at"
            , "product_type"
            , "category_list"
            , "store"
            , "shipping_detail"
            , "shipping"
            , "body_html"
            , "options"
            , "option_sku"
            , "flashsale"
            , "promotion"
            , "campaign"
            , "coupon"
            , "related_campaign"];
        foreach ($key_list as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true)["data"]["record"]);
        }
    }

    public function testPostCartWithCartId()
    {
        $url      = "ecom/cart/new_unit_test_cart_api";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter                 = [];
        $request_parameter["product_id"]   = "L91201541";
        $request_parameter["inventory_id"] = "2592268";
        $request_parameter["quantity"]     = "1";

        $lrequest->replace($request_parameter);

        $header  = [];
        $content = WlsService::cartActionWls($url, $method, $lrequest, $header);

        $this->assertArrayHasKey(0, $content);
        $this->assertArrayHasKey(1, $content);

        $this->assertEquals($content[0], 200);

        foreach (["data", "status_code", "status_txt", "cart_hash"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true));
        }
        $this->assertEquals(json_decode($content[1], true)["cart_hash"], "new_unit_test_cart_api");
    }

    public function testGetCart()
    {
        $url      = "ecom/cart/new_unit_test_cart_api";
        $method   = "get";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];

        $lrequest->replace($request_parameter);

        $header  = [];
        $content = WlsService::cartActionWls($url, $method, $lrequest, $header);

        $this->assertArrayHasKey("status_code", $content);
        $this->assertArrayHasKey("body", $content);

        $this->assertEquals($content["status_code"], 200);
    }

    public function testDeleteCart()
    {
        $url      = "ecom/cart/new_unit_test_cart_api";
        $method   = "delete";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];

        $lrequest->replace($request_parameter);

        $header  = [];
        $content = WlsService::cartActionWls($url, $method, $lrequest, $header);

        $this->assertArrayHasKey(0, $content);
        $this->assertArrayHasKey(1, $content);

        $this->assertEquals($content[0], 200);

        foreach (["data", "status_code", "status_txt", "cart_hash"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true));
        }

        $this->assertEquals(json_decode($content[1], true)["status_code"], 0);
        $this->assertEquals(json_decode($content[1], true)["status_txt"], "OK");
        $this->assertEquals(json_decode($content[1], true)["data"], "The cart was deleted successfully!");

        $this->assertEquals(json_decode($content[1], true)["cart_hash"], "new_unit_test_cart_api");
    }

    public function testGetDeletedCart()
    {
        $url      = "ecom/cart/new_unit_test_cart_api_2";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter                 = [];
        $request_parameter["product_id"]   = "L91201541";
        $request_parameter["inventory_id"] = "2592268";
        $request_parameter["quantity"]     = "1";

        $lrequest->replace($request_parameter);

        $header  = [];
        $content = WlsService::cartActionWls($url, $method, $lrequest, $header);

        $this->assertArrayHasKey(0, $content);
        $this->assertArrayHasKey(1, $content);

        $this->assertEquals($content[0], 200);

        foreach (["data", "status_code", "status_txt", "cart_hash"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true));
        }
        $this->assertEquals(json_decode($content[1], true)["cart_hash"], "new_unit_test_cart_api_2");

        $url      = "ecom/cart/new_unit_test_cart_api_2";
        $method   = "delete";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];

        $lrequest->replace($request_parameter);

        $header  = [];
        $content = WlsService::cartActionWls($url, $method, $lrequest, $header);

        $this->assertArrayHasKey(0, $content);
        $this->assertArrayHasKey(1, $content);

        $this->assertEquals($content[0], 200);

        foreach (["data", "status_code", "status_txt", "cart_hash"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true));
        }

        $this->assertEquals(json_decode($content[1], true)["status_code"], 0);
        $this->assertEquals(json_decode($content[1], true)["status_txt"], "OK");
        $this->assertEquals(json_decode($content[1], true)["data"], "The cart was deleted successfully!");

        $this->assertEquals(json_decode($content[1], true)["cart_hash"], "new_unit_test_cart_api_2");

        $url      = "ecom/cart/new_unit_test_cart_api_2";
        $method   = "get";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];

        $lrequest->replace($request_parameter);

        $header  = [];
        $content = WlsService::cartActionWls($url, $method, $lrequest, $header);

        $this->assertArrayHasKey("status_code", $content);
        $this->assertArrayHasKey("body", $content);

        $this->assertEquals(200, $content["status_code"]); // front end said this is fine so left it as fine for now

        foreach (["en", "th"] as $key_name) {
            $this->assertArrayHasKey($key_name, $content["body"]["message"]);
        }
        $this->assertEquals($content["body"]["message"]["en"], "product not found in the cart");
        $this->assertEquals($content["body"]["message"]["th"], "ไม่พบสินค้าในตะกร้า");
    }
}
