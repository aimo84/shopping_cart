<?php

namespace Tests\Feature;

use App\Services\WlsService;
use Redis;
use Tests\TestCase;

class MultiCampaignLvDMixWithDevicebundleTest extends TestCase
{
    public function testCase1MultiCampaignAloneGoogleNestHundredPercents()
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

        $this->assertEquals(0, json_decode($content[1], true)["products"][0]["final_price"]);
        $this->assertEquals("multi_campaign_type", json_decode($content[1], true)["products"][0]["product_type"]);
        $this->assertEquals(45, json_decode($content[1], true)["summaries"][1]["value"]); // total
        $this->assertEquals(45, json_decode($content[1], true)["summaries"][2]["value"]); // shipping

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
}
