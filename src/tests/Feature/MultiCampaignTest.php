<?php

namespace Tests\Feature;

use App\Services\WlsService;
use Redis;
use Tests\TestCase;

class MultiCampaignTest extends TestCase
{
    public function testPostPromotionAllowAddCart()
    {
        $url      = "portal-v2/promotion-allow-add-cart";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = json_decode('{
            "product_id" : "L91200164",
            "hash" : "1"
        }', true);
        $lrequest->replace($request_parameter);

        $header  = [];
        $content = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);

        $this->assertArrayHasKey("status_code", $content);
        $this->assertArrayHasKey("body", $content);
    }

    public function testVerifyPassRedis()
    {
        $url      = "verify/multi_campaign";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];

        $request_parameter = json_decode('{"id_number": "3755772685684",
            "service_name":"trueonline",
            "mobile_number" : "0938300242",
            "trueonline_number":"9620000296",
            "otp": "1234",
            "product_id_list": ["L91587167"],
            "product_sku_list": ["3000085626"],
            "campaign_id_list": ["12996"],
            "cart_hash": "multiCampaignVerifyPassRedis",
            "is_feature_test": true
        }', true);
        $lrequest->replace($request_parameter);

        $header     = [];
        $content    = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);
        $content[0] = $content["status_code"];
        $content[1] = $content["body"];

        $this->assertArrayHasKey(0, $content);
        $this->assertArrayHasKey(1, $content);

        $this->assertEquals(200, $content[0]);
        $this->assertEquals(true, json_decode($content[1], true)["is_pass"]);
        $this->assertEquals("array", gettype(json_decode($content[1], true)["privilege_placeorder"]));

        foreach (["thai_id", "privilege_uid", "service", "quantity", "product_code", "campaigns[0]", "campaign_code", "type", "product_id", "tmn_account_cash_back"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true)["privilege_placeorder"][0]);
        }

        $cart_hash                      = $request_parameter["cart_hash"];
        $cart_privilege_placeorder_data = Redis::get("store:verify:cart_id:$cart_hash:privilege_placeorder");
        $product_id                     = $request_parameter["product_id_list"][0];
        $product_code                   = $request_parameter["product_sku_list"][0];
        $redis_body_array               = json_decode($cart_privilege_placeorder_data, true);

        foreach (["thai_id", "privilege_uid", "service", "quantity", "product_code", "campaigns[0]", "campaign_code", "type", "product_id", "tmn_account_cash_back", "date_created", "timestamp_created", "date_expired", "timestamp_expired"] as $key_name) {
            $this->assertArrayHasKey($key_name, $redis_body_array[$product_id][$product_code]);
        }

        Redis::del("store:verify:cart_id:$cart_hash:privilege_placeorder");

    }

    public function testVerifyPassGetCartRedisRemoveOneItem()
    {
        $url      = "verify/multi_campaign";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];

        $request_parameter = json_decode('{"id_number": "3755772685684",
            "service_name":"trueonline",
            "mobile_number" : "0938300242",
            "trueonline_number":"9620000296",
            "otp": "1234",
            "product_id_list": ["L91587167"],
            "product_sku_list": ["3000085626"],
            "campaign_id_list": ["12996"],
            "cart_hash": "multiCampaignVerifyPassRedis",
            "is_feature_test": true
        }', true);
        $lrequest->replace($request_parameter);

        $header     = [];
        $content    = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);
        $content[0] = $content["status_code"];
        $content[1] = $content["body"];

        $this->assertArrayHasKey(0, $content);
        $this->assertArrayHasKey(1, $content);

        $this->assertEquals(200, $content[0]);
        $this->assertEquals(true, json_decode($content[1], true)["is_pass"]);
        $this->assertEquals("array", gettype(json_decode($content[1], true)["privilege_placeorder"]));

        foreach (["thai_id", "privilege_uid", "service", "quantity", "product_code", "campaigns[0]", "campaign_code", "type", "product_id", "tmn_account_cash_back"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true)["privilege_placeorder"][0]);
        }

        $cart_hash = $request_parameter["cart_hash"];
        $url       = "wportal/cart";
        $method    = "post";
        $lrequest  = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = json_decode('{"product_id":"L91587167",
            "inventory_id":"3078271",
            "store_id":"L941527",
            "quantity":"1",
            "section":"wemall",
            "hash":"multiCampaignVerifyPassRedis",
            "campaign_id":"12996"}', true);

        $lrequest->replace($request_parameter);

        $lrequest->headers->set('Content-Type', 'application/x-www-form-urlencoded');

        $header  = [];
        $content = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);

        $this->assertArrayHasKey("status_code", $content);
        $this->assertArrayHasKey("body", $content);
        $this->assertEquals($content["status_code"], 200);

        foreach (["data", "status_code", "status_txt", "cart_hash"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content["body"], true));
        }
        $this->assertEquals(json_decode($content["body"], true)["cart_hash"], "multiCampaignVerifyPassRedis");

        $url      = "ecom/cart/multiCampaignVerifyPassRedis";
        $method   = "delete";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter                 = [];
        $request_parameter["product_id"]   = "L91587167";
        $request_parameter["inventory_id"] = "3078271";
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

        $this->assertEquals(json_decode($content[1], true)["status_code"], 0);
        $this->assertEquals(json_decode($content[1], true)["status_txt"], "OK");
        $this->assertEquals(json_decode($content[1], true)["data"], "The cart item was deleted successfully!");

        $this->assertEquals(json_decode($content[1], true)["cart_hash"], "multiCampaignVerifyPassRedis");

        $cart_privilege_placeorder_data = Redis::get("store:verify:cart_id:$cart_hash:privilege_placeorder");
        $this->assertEquals(null, $cart_privilege_placeorder_data);
    }

    public function testVerifyPassGetCartRedisRemoveCart()
    {
        $url      = "verify/multi_campaign";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];

        $request_parameter = json_decode('{"id_number": "3755772685684",
            "service_name":"trueonline",
            "mobile_number" : "0938300242",
            "trueonline_number":"9620000296",
            "otp": "1234",
            "product_id_list": ["L91587167"],
            "product_sku_list": ["3000085626"],
            "campaign_id_list": ["12996"],
            "cart_hash": "multiCampaignVerifyPassRedis",
            "is_feature_test": true
        }', true);
        $lrequest->replace($request_parameter);

        $header     = [];
        $content    = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);
        $content[0] = $content["status_code"];
        $content[1] = $content["body"];

        $this->assertArrayHasKey(0, $content);
        $this->assertArrayHasKey(1, $content);

        $this->assertEquals(200, $content[0]);
        $this->assertEquals(true, json_decode($content[1], true)["is_pass"]);
        $this->assertEquals("array", gettype(json_decode($content[1], true)["privilege_placeorder"]));

        foreach (["thai_id", "privilege_uid", "service", "quantity", "product_code", "campaigns[0]", "campaign_code", "type", "product_id", "tmn_account_cash_back"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true)["privilege_placeorder"][0]);
        }

        $cart_hash = $request_parameter["cart_hash"];
        $url       = "wportal/cart";
        $method    = "post";
        $lrequest  = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = json_decode('{"product_id":"L91587167",
            "inventory_id":"3078271",
            "store_id":"L941527",
            "quantity":"1",
            "section":"wemall",
            "hash":"multiCampaignVerifyPassRedis",
            "campaign_id":"12996"}', true);

        $lrequest->replace($request_parameter);

        $lrequest->headers->set('Content-Type', 'application/x-www-form-urlencoded');

        $header  = [];
        $content = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);

        $this->assertArrayHasKey("status_code", $content);
        $this->assertArrayHasKey("body", $content);

        $this->assertEquals($content["status_code"], 200);

        foreach (["data", "status_code", "status_txt", "cart_hash"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content["body"], true));
        }
        $this->assertEquals(json_decode($content["body"], true)["cart_hash"], "multiCampaignVerifyPassRedis");

        $url      = "wportal/cart/multiCampaignVerifyPassRedis";
        $method   = "get";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];

        $lrequest->replace($request_parameter);

        $header  = [];
        $content = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);

        $this->assertArrayHasKey("status_code", $content);
        $this->assertArrayHasKey("body", $content);

        $this->assertEquals($content["status_code"], 200);

        foreach (["data", "status_code", "status_txt", "cart_hash"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content["body"], true));
        }

        foreach (["service", "quantity", "product_code", "type", "product_id", "date_created", "timestamp_created", "date_expired", "timestamp_expired"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content["body"], true)["data"]["privilege_placeorder"]["L91587167"]["3000085626"]);
        }

        $url      = "ecom/cart/multiCampaignVerifyPassRedis";
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

        $this->assertEquals(json_decode($content[1], true)["cart_hash"], "multiCampaignVerifyPassRedis");

        $cart_privilege_placeorder_data = Redis::get("store:verify:cart_id:$cart_hash:privilege_placeorder");
        $this->assertEquals(null, $cart_privilege_placeorder_data);

    }

    public function testPrivilegePlaceorder()
    {
        $url      = "verify/multi_campaign";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];

        $request_parameter = json_decode('{"id_number": "3755772685684",
            "service_name":"trueonline",
            "mobile_number" : "0938300242",
            "trueonline_number":"9620000296",
            "otp": "1234",
            "product_id_list": ["L91587167"],
            "product_sku_list": ["3000085626"],
            "campaign_id_list": ["12996"],
            "cart_hash": "multiCampaignVerifyPassRedis",
            "is_feature_test": true
        }', true);
        $lrequest->replace($request_parameter);

        $header     = [];
        $content    = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);
        $content[0] = $content["status_code"];
        $content[1] = $content["body"];

        $this->assertArrayHasKey(0, $content);
        $this->assertArrayHasKey(1, $content);

        $this->assertEquals(200, $content[0]);
        $this->assertEquals(true, json_decode($content[1], true)["is_pass"]);
        $this->assertEquals("array", gettype(json_decode($content[1], true)["privilege_placeorder"]));

        foreach (["thai_id", "privilege_uid", "service", "quantity", "product_code", "campaigns[0]", "campaign_code", "type", "product_id", "tmn_account_cash_back"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true)["privilege_placeorder"][0]);
        }

        $cart_hash = $request_parameter["cart_hash"];
        $url       = "wportal/cart";
        $method    = "post";
        $lrequest  = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = json_decode('{"product_id":"L91587167",
            "inventory_id":"3078271",
            "store_id":"L941527",
            "quantity":"1",
            "section":"wemall",
            "hash":"multiCampaignVerifyPassRedis",
            "campaign_id":"12996"}', true);

        $lrequest->replace($request_parameter);

        $lrequest->headers->set('Content-Type', 'application/x-www-form-urlencoded');

        $header  = [];
        $content = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);

        $this->assertArrayHasKey("status_code", $content);
        $this->assertArrayHasKey("body", $content);

        $this->assertEquals($content["status_code"], 200);

        foreach (["data", "status_code", "status_txt", "cart_hash"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content["body"], true));
        }
        $this->assertEquals(json_decode($content["body"], true)["cart_hash"], "multiCampaignVerifyPassRedis");

        // start of test privilege placeorder

        $request_parameter = json_decode(
            '{
                "is_feature_test":true,
                "oneTimeCardToken":null,
                "config":{
                   "app_id":3,
                   "redirect_url":"http:\/\/pre-store.truecorp.co.th\/api\/true\/success",
                   "device":"web",
                   "in_page":1
                },
                "store_detail":[

                ],
                "payment_detail":{
                   "company":"wetrust",
                   "currency_code":"THB",
                   "discount":0,
                   "com_vat":2,
                   "com_ship_fee":1.11,
                   "method":"CCW",
                   "credit_number":"411111"
                },
                "shipping_detail":{
                   "company":"Custom",
                   "method":"WeMall",
                   "weight_unit":"kg",
                   "price":0
                },
                "customer_detail":{
                   "id":0,
                   "group_id":1,
                   "type":"email",
                   "fax":null,
                   "ip":"127.0.0.1",
                   "customer_note":null,
                   "first_name":"a",
                   "last_name":"b",
                   "email":"new@new.com",
                   "telephone":"0812345678"
                },
                "delivery_address":{
                   "district_id":"1",
                   "city_id":"1",
                   "province_id":"1",
                   "country_id":"209",
                   "postcode":"10200",
                   "firstname":"a",
                   "lastname":"b",
                   "address1":"c",
                   "address2":"d",
                   "phone":"0812345678",
                   "email":"new@new.com",
                   "district":"\u0e1e\u0e23\u0e30\u0e1a\u0e23\u0e21\u0e21\u0e2b\u0e32\u0e23\u0e32\u0e0a\u0e27\u0e31\u0e07",
                   "city":"\u0e1e\u0e23\u0e30\u0e19\u0e04\u0e23",
                   "province":"\u0e01\u0e23\u0e38\u0e07\u0e40\u0e17\u0e1e\u0e21\u0e2b\u0e32\u0e19\u0e04\u0e23"
                },
                "address_location":{
                   "lat":"",
                   "lng":""
                },
                "billing_address":{
                   "firstname":"a",
                   "lastname":"b",
                   "address1":"c",
                   "address2":"d",
                   "district_id":"1",
                   "city_id":"1",
                   "province_id":"1",
                   "postcode":"10200",
                   "country_id":"209",
                   "phone":"0812345678",
                   "email":"new@new.com"
                },
                "products":[
                   {
                      "product_id":"L91587167",
                      "inventory_id":"3078271",
                      "quantity":"1"
                   }
                ],
                "promotions":[

                ],
                "summaries":[

                ],
                "section":"wemall",
                "channel":"TMH-Website",
                "employee_code":"",
                "cart_id":"multiCampaignVerifyPassRedis",
                "privilege":[{
                    "thai_id":"Mzc1NTc3MjY4NTY4NA==",
                    "privilege_uid":"9620000296",
                    "service":"trueonline",
                    "quantity":"1",
                    "product_code":"3000085626",
                    "campaigns[0]":"XD515",
                    "campaign_code":"XD515",
                    "type":"google_home",
                    "product_id":"L91587167",
                    "tmn_account_cash_back":"0938300242",
                    "date_created":"2020-09-03 15:44:26",
                    "timestamp_created":1599122666,
                    "date_expired":"2020-09-03 23:44:26",
                    "timestamp_expired":1599151466,
                    "campaign_id":"12996"
                 }],
                "is_placeorder_input_test":"yes_it_is_a_test"
             }

             ', true);

        $lrequest->replace($request_parameter);

        $header  = [];
        $content = App('App\Http\Controllers\OrderDetailController')->store($lrequest);
        $this->assertEquals(200, $content[0]);

        foreach (["thai_id", "privilege_uid", "service", "quantity", "product_code", "campaigns[0]", "campaign_code", "type", "product_id", "tmn_account_cash_back", "date_created", "timestamp_created", "date_expired", "timestamp_expired"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true)["privilege"][0]);
        }

        // end of test privilege placeorder

        $url      = "ecom/cart/multiCampaignVerifyPassRedis";
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

        $this->assertEquals(json_decode($content[1], true)["cart_hash"], "multiCampaignVerifyPassRedis");

        $cart_privilege_placeorder_data = Redis::get("store:verify:cart_id:$cart_hash:privilege_placeorder");
        $this->assertEquals(null, $cart_privilege_placeorder_data);
    }

    public function testDeviceOnlyToCartWithCorrectPrice()
    {
        $url      = "wportal/cart";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = json_decode('{"product_id":"L91587724",
            "inventory_id":"3079087",
            "store_id":"L941527",
            "quantity":"1",
            "section":"wemall",
            "hash":"multiCampaignDeviceOnly"}', true);
        $cart_hash = $request_parameter["hash"];
        $lrequest->replace($request_parameter);

        $lrequest->headers->set('Content-Type', 'application/x-www-form-urlencoded');

        $header  = [];
        $content = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);

        $this->assertArrayHasKey("status_code", $content);
        $this->assertArrayHasKey("body", $content);

        $this->assertEquals($content["status_code"], 200);

        foreach (["data", "status_code", "status_txt", "cart_hash"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content["body"], true));
        }
        $this->assertEquals(json_decode($content["body"], true)["cart_hash"], "multiCampaignDeviceOnly");

        $url      = "wportal/cart/multiCampaignDeviceOnly";
        $method   = "get";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];

        $lrequest->replace($request_parameter);

        $header  = [];
        $content = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);

        $this->assertArrayHasKey("status_code", $content);
        $this->assertArrayHasKey("body", $content);

        $this->assertEquals($content["status_code"], 200);

        foreach (["data", "status_code", "status_txt", "cart_hash"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content["body"], true));
        }
        $this->assertEquals(2290, json_decode($content["body"], true)["data"]["record"][0]["products"][0]["inventory"]["price"]);

        $url      = "ecom/cart/multiCampaignDeviceOnly";
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
        $this->assertEquals(json_decode($content[1], true)["cart_hash"], "multiCampaignDeviceOnly");

        $cart_privilege_placeorder_data = Redis::get("store:verify:cart_id:$cart_hash:privilege_placeorder");
        $this->assertEquals(null, $cart_privilege_placeorder_data);
    }

    public function testDeviceOnlyToCartWithCorrectPriceTwo()
    {
        $url      = "wportal/cart";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = json_decode('{"product_id":"L91588148",
            "inventory_id":"3079496",
            "store_id":"L941527",
            "quantity":"1",
            "section":"wemall",
            "hash":"multiCampaignDeviceOnly2"}', true);
        $cart_hash = $request_parameter["hash"];
        $lrequest->replace($request_parameter);

        $lrequest->headers->set('Content-Type', 'application/x-www-form-urlencoded');

        $header  = [];
        $content = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);

        $this->assertArrayHasKey("status_code", $content);
        $this->assertArrayHasKey("body", $content);

        $this->assertEquals($content["status_code"], 200);

        foreach (["data", "status_code", "status_txt", "cart_hash"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content["body"], true));
        }
        $this->assertEquals(json_decode($content["body"], true)["cart_hash"], "multiCampaignDeviceOnly2");

        $url      = "wportal/cart/multiCampaignDeviceOnly2";
        $method   = "get";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];

        $lrequest->replace($request_parameter);

        $header  = [];
        $content = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);

        $this->assertArrayHasKey("status_code", $content);
        $this->assertArrayHasKey("body", $content);

        $this->assertEquals($content["status_code"], 200);

        foreach (["data", "status_code", "status_txt", "cart_hash"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content["body"], true));
        }
        $this->assertEquals(1300, json_decode($content["body"], true)["data"]["record"][0]["products"][0]["inventory"]["price"]);

        $url      = "ecom/cart/multiCampaignDeviceOnly2";
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
        $this->assertEquals(json_decode($content[1], true)["cart_hash"], "multiCampaignDeviceOnly2");

        $cart_privilege_placeorder_data = Redis::get("store:verify:cart_id:$cart_hash:privilege_placeorder");
        $this->assertEquals(null, $cart_privilege_placeorder_data);
    }

    public function testCartShippingPriceForPrice499Criteria()
    {
        $url      = "wportal/cart";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = json_decode('{"product_id":"L91587074",
            "inventory_id":"3078180",
            "quantity":"1",
            "hash":"prepaidSimQuantity1"}', true); // price 399 each
        $cart_hash = $request_parameter["hash"];
        $lrequest->replace($request_parameter);

        $lrequest->headers->set('Content-Type', 'application/x-www-form-urlencoded');

        $header  = [];
        $content = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);

        $this->assertArrayHasKey("status_code", $content);
        $this->assertArrayHasKey("body", $content);

        $this->assertEquals($content["status_code"], 200);

        foreach (["data", "status_code", "status_txt", "cart_hash"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content["body"], true));
        }
        $url      = "wportal/cart/" . $cart_hash;
        $method   = "get";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];

        $lrequest->replace($request_parameter);

        $header  = [];
        $content = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);

        $this->assertArrayHasKey("status_code", $content);
        $this->assertArrayHasKey("body", $content);

        $this->assertEquals($content["status_code"], 200);

        foreach (["data", "status_code", "status_txt", "cart_hash"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content["body"], true));
        }
        // check shipping price 45 for quantity = 1
        $this->assertEquals(45, json_decode($content["body"], true)["data"]["shipping_fee"]);

        $url      = "ecom/cart/" . $cart_hash;
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

        $url      = "wportal/cart";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = json_decode('{"product_id":"L91587074",
            "inventory_id":"3078180",
            "quantity":"2",
            "hash":"prepaidSimQuantity2"}', true); // price 399 each *2 = 798.00 < if($total_product_price > 499) -> $shipping = 0;)
        $cart_hash = $request_parameter["hash"];
        $lrequest->replace($request_parameter);

        $lrequest->headers->set('Content-Type', 'application/x-www-form-urlencoded');

        $header  = [];
        $content = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);

        $this->assertArrayHasKey("status_code", $content);
        $this->assertArrayHasKey("body", $content);

        $this->assertEquals($content["status_code"], 200);

        foreach (["data", "status_code", "status_txt", "cart_hash"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content["body"], true));
        }
        $url      = "wportal/cart/" . $cart_hash;
        $method   = "get";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];

        $lrequest->replace($request_parameter);

        $header  = [];
        $content = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);

        $this->assertArrayHasKey("status_code", $content);
        $this->assertArrayHasKey("body", $content);

        $this->assertEquals($content["status_code"], 200);

        foreach (["data", "status_code", "status_txt", "cart_hash"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content["body"], true));
        }
        // check shipping price 0 for quantity = 2
        $this->assertEquals(0, json_decode($content["body"], true)["data"]["shipping_fee"]);

        $url      = "ecom/cart/" . $cart_hash;
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
    }
}
