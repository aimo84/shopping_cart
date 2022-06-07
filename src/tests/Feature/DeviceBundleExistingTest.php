<?php

namespace Tests\Feature;

use App\Services\WlsService;
use Redis;
use Tests\TestCase;

class DeviceBundleExistingTest extends TestCase
{
    public function testPostBundleCampaignsVerifyNotPass()
    {
        $url      = "truemoveh/bundle-campaigns/verify";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter                 = [];
        $request_parameter["product_code"] = "3000081198";
        $request_parameter["mobile"]       = "2d32e80ed135f08d6ab2";
        $request_parameter["thai_id"]      = "2f3bec05d336f08b62b0302d45";

        $lrequest->replace($request_parameter);

        $header  = [];
        $content = WlsService::postBundleCampaignsVerify($url, $method, $lrequest, $header);

        $this->assertArrayHasKey(0, $content);
        $this->assertArrayHasKey(1, $content);

        $this->assertEquals(200, $content[0]);

        foreach (["data", "status_code", "status_txt"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true));
        }
        $this->assertEquals("The mobile is invalid.", json_decode($content[1], true)["data"]["message"][0]);
    }

    public function testPostEncryptDeviceBundle()
    {
        $mobile_number = "0812345678";
        $pwd           = env("PWD_ENCRYPT_FUNCTION_DEVICE_BUNDLE");
        $data          = $mobile_number;

        $content = WlsService::postEncryptDeviceBundle($pwd, $data);
        $this->assertEquals(true, strlen($content) > 1);
    }

    public function testPostBundleCampaignsVerifyPass()
    {
        $url      = "truemoveh/bundle-campaigns/verify";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter                 = [];
        $request_parameter["product_code"] = "3000081509";
        $request_parameter["mobile"]       = "015e5c97f20987b666c9";
        $request_parameter["thai_id"]      = "00565d91f30c87bf6dc385ec74";

        $lrequest->replace($request_parameter);

        $header  = [];
        $content = WlsService::postBundleCampaignsVerify($url, $method, $lrequest, $header);

        $this->assertArrayHasKey(0, $content);
        $this->assertArrayHasKey(1, $content);

        $this->assertEquals(200, $content[0]);

        foreach (["data", "status_code", "status_txt"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true));
        }
    }

    public function testVerifyDeviceBundleExistingPass()
    {
        $url      = "verify/device_bundle_existing";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];

        $request_parameter = json_decode('{"id_number": "1100800960367",
            "service_name":"truemove",
            "mobile_number" : "0917450194",
            "otp": "123",
            "product_id_list": ["L91587176"],
            "product_sku_list": ["3000081509"],
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
        $this->assertEquals(true, $content["body"]["is_pass"]);
        $this->assertEquals("array", gettype($content["body"]["privilege_placeorder"]));

        foreach (["thai_id", "privilege_uid", "service", "quantity", "product_code", "campaigns[0]", "campaign_code", "type", "product_id", "tmn_account_cash_back"] as $key_name) {
            $this->assertArrayHasKey($key_name, $content["body"]["privilege_placeorder"][0]);
        }
    }

    public function testMaxDiscountProduct()
    {
        $url      = "truemoveh/bundle-campaigns/max-discount-product";
        $method   = "get";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];

        $request_parameter = json_decode('{"product_code": "3000081196"
        }', true);

        $lrequest->replace($request_parameter);

        $header     = [];
        $content    = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);
        $content[0] = $content["status_code"];
        $content[1] = $content["body"];

        $this->assertArrayHasKey(0, $content);
        $this->assertArrayHasKey(1, $content);

        $this->assertEquals(200, $content[0]);
        foreach (["status_code", "status_txt", "data"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true));
        }

    }

    public function testVerifyDeviceBundleExistAddCartAndVerifyAndGetCart()
    {
        $url      = "ecom/cart/new_test_device_bundle_cart_one_product_before_verify";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter                    = [];
        $request_parameter["product_id"]      = "L91201541";
        $request_parameter["inventory_id"]    = "2592268";
        $request_parameter["quantity"]        = "1";
        $request_parameter["is_feature_test"] = true;

        $lrequest->replace($request_parameter);

        $header  = [];
        $content = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);

        $url      = "verify/device_bundle_existing";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];

        $request_parameter = json_decode('{"id_number": "1100800960367",
            "service_name":"truemove",
            "mobile_number" : "0917450194",
            "otp": "123",
            "product_id_list": ["L91587176"],
            "product_sku_list": ["3000081509"],
            "is_feature_test": true,
            "cart_hash": "new_test_device_bundle_cart_one_product_before_verify"
        }', true);

        $lrequest->replace($request_parameter);

        $header     = [];
        $content    = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);
        $content[0] = $content["status_code"];
        $content[1] = $content["body"];
        $cart_id    = $content["body"]["cart_hash"];
        $this->assertArrayHasKey(0, $content);
        $this->assertArrayHasKey(1, $content);

        $this->assertEquals(200, $content[0]);
        $this->assertEquals(true, $content["body"]["is_pass"]);
        $this->assertEquals("array", gettype($content["body"]["privilege_placeorder"]));

        foreach (["thai_id", "privilege_uid", "service", "quantity", "product_code", "campaigns[0]", "campaign_code", "type", "product_id", "tmn_account_cash_back"] as $key_name) {
            $this->assertArrayHasKey($key_name, $content["body"]["privilege_placeorder"][0]);
        }
        $cart_id = "new_test_device_bundle_cart_one_product_before_verify";

        $cart_data = Redis::get("store:cart_id:$cart_id");

        $check_cart_data = json_decode($cart_data, true);

        $url      = "ecom/cart/" . $cart_id;
        $method   = "get";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];

        $lrequest->replace($request_parameter);

        $header  = [];
        $content = WlsService::cartActionWls($url, $method, $lrequest, $header);

        $url      = "ecom/cart/" . $cart_id;
        $method   = "delete";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];

        $lrequest->replace($request_parameter);

        $header  = [];
        $content = WlsService::cartActionWls($url, $method, $lrequest, $header);
    }

    public function testVerifyDeviceBundleExistingNotPassFromRcErrorGetRc()
    {
        $url      = "verify/device_bundle_existing";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];

        $request_parameter = json_decode('{
            "is_feature_test": true,
            "id_number": "2019110511071",
            "service_name":"truemove",
            "mobile_number" : "0969241886",
            "otp": "123",
            "product_id_list": ["L91587176"],
            "product_sku_list": ["3000081509"]
        }', true);

        $lrequest->replace($request_parameter);

        $header     = [];
        $content    = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);
        $content[0] = $content["status_code"];
        $content[1] = $content["body"];

        $this->assertArrayHasKey(0, $content);
        $this->assertArrayHasKey(1, $content);

        $this->assertEquals(400, $content[0]);
        $this->assertEquals(false, $content[1]["is_pass"]);
        $this->assertEquals("Incorrect/invalid service ID or citizen ID number. Please try again.", $content[1]["message"]["en"]);
        $this->assertEquals("ระบุหมายเลขหรือบัตรประชาชนไม่ถูกต้อง กรุณาทำรายการใหม่อีกครั้ง", $content[1]["message"]["th"]);

    }

    public function testVerifyDeviceBundleExistingNotPassFromRcCampaignNotFound2()
    {
        $url      = "verify/device_bundle_existing";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];

        $request_parameter = json_decode('{
            "is_feature_test": true,
            "id_number": "2621170012516",
            "service_name":"truemove",
            "mobile_number" : "0830011677",
            "otp": "123",
            "product_id_list": ["L91587176"],
            "product_sku_list": ["3000081509"]
        }', true);

        $lrequest->replace($request_parameter);

        $header     = [];
        $content    = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);
        $content[0] = $content["status_code"];
        $content[1] = $content["body"];

        $this->assertArrayHasKey(0, $content);
        $this->assertArrayHasKey(1, $content);

        $this->assertEquals(400, $content[0]);
        $this->assertEquals(false, $content[1]["is_pass"]);
    }

    public function testVerifyDeviceBundleExistingNotPassFromRcErrorGetRc2()
    {
        $url      = "verify/device_bundle_existing";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];

        $request_parameter = json_decode('{
            "is_feature_test": true,
            "id_number": "1141200146376",
            "service_name":"truemove",
            "mobile_number" : "0969241622",
            "otp": "123",
            "product_id_list": ["L91587176"],
            "product_sku_list": ["3000081509"]
        }', true);

        $lrequest->replace($request_parameter);

        $header     = [];
        $content    = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);
        $content[0] = $content["status_code"];
        $content[1] = $content["body"];

        $this->assertArrayHasKey(0, $content);
        $this->assertArrayHasKey(1, $content);

        $this->assertEquals(400, $content[0]);
        $this->assertEquals(false, $content[1]["is_pass"]);
        $this->assertEquals("Incorrect/invalid service ID or citizen ID number. Please try again.", $content[1]["message"]["en"]);
        $this->assertEquals("ระบุหมายเลขหรือบัตรประชาชนไม่ถูกต้อง กรุณาทำรายการใหม่อีกครั้ง", $content[1]["message"]["th"]);

    }

    public function testVerifyDeviceBundleExistingNotPassFromRcErrorGetRc3()
    {
        $url      = "verify/device_bundle_existing";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];

        $request_parameter = json_decode('{
            "is_feature_test": true,
            "id_number": "1141200146376",
            "service_name":"truemove",
            "mobile_number" : "0830010595",
            "otp": "123",
            "product_id_list": ["L91587176"],
            "product_sku_list": ["3000081509"]
        }', true);

        $lrequest->replace($request_parameter);

        $header     = [];
        $content    = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);
        $content[0] = $content["status_code"];
        $content[1] = $content["body"];

        $this->assertArrayHasKey(0, $content);
        $this->assertArrayHasKey(1, $content);

        $this->assertEquals(400, $content[0]);
        $this->assertEquals(false, $content[1]["is_pass"]);
        $this->assertEquals("Incorrect/invalid service ID or citizen ID number. Please try again.", $content[1]["message"]["en"]);
        $this->assertEquals("ระบุหมายเลขหรือบัตรประชาชนไม่ถูกต้อง กรุณาทำรายการใหม่อีกครั้ง", $content[1]["message"]["th"]);
    }

    public function testVerifyDeviceBundleExistingNotPassFromRcErrorGetRc4()
    {
        $url      = "verify/device_bundle_existing";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];

        $request_parameter = json_decode('{
            "is_feature_test": true,
            "id_number": "9921315527362",
            "service_name":"truemove",
            "mobile_number" : "0811111111",
            "otp": "123",
            "product_id_list": ["L91587176"],
            "product_sku_list": ["3000081509"]
        }', true);

        $lrequest->replace($request_parameter);

        $header     = [];
        $content    = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);
        $content[0] = $content["status_code"];
        $content[1] = $content["body"];

        $this->assertArrayHasKey(0, $content);
        $this->assertArrayHasKey(1, $content);

        $this->assertEquals(400, $content[0]);
        $this->assertEquals(false, $content[1]["is_pass"]);
        $this->assertEquals("Incorrect/invalid service ID or citizen ID number. Please try again.", $content[1]["message"]["en"]);
        $this->assertEquals("ระบุหมายเลขหรือบัตรประชาชนไม่ถูกต้อง กรุณาทำรายการใหม่อีกครั้ง", $content[1]["message"]["th"]);
    }

    public function testVerifyDeviceBundleExistingNotPassFromRcErrorGetRc5()
    {
        $url      = "verify/device_bundle_existing";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];

        $request_parameter = json_decode('{
            "is_feature_test": true,
            "id_number": "2022071011151",
            "service_name":"truemove",
            "mobile_number" : "0830011005",
            "otp": "123",
            "product_id_list": ["L91587176"],
            "product_sku_list": ["3000081509"]
        }', true);
        $lrequest->replace($request_parameter);

        $header     = [];
        $content    = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);
        $content[0] = $content["status_code"];
        $content[1] = $content["body"];

        $this->assertArrayHasKey(0, $content);
        $this->assertArrayHasKey(1, $content);

        $this->assertEquals(400, $content[0]);
        $this->assertEquals(false, $content[1]["is_pass"]);
        $this->assertEquals("Incorrect/invalid service ID or citizen ID number. Please try again.", $content[1]["message"]["en"]);
        $this->assertEquals("ระบุหมายเลขหรือบัตรประชาชนไม่ถูกต้อง กรุณาทำรายการใหม่อีกครั้ง", $content[1]["message"]["th"]);
    }

    public function testVerifyDeviceBundleExistingNotPassFromRcInvalidParameter()
    {
        $url      = "verify/device_bundle_existing";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];

        $request_parameter = json_decode('{
            "is_feature_test": true,
            "id_number": "1234567890123",
            "service_name":"truemove",
            "mobile_number" : "0811111111",
            "otp": "123",
            "product_id_list": ["L91587176"],
            "product_sku_list": ["3000081509"]
        }', true);

        $lrequest->replace($request_parameter);

        $header     = [];
        $content    = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);
        $content[0] = $content["status_code"];
        $content[1] = $content["body"];

        $this->assertArrayHasKey(0, $content);
        $this->assertArrayHasKey(1, $content);

        $this->assertEquals(400, $content[0]);
        $this->assertEquals(false, $content[1]["is_pass"]);
        $this->assertEquals("Sorry, the system cannot process your request at the moment.", $content[1]["message"]["en"]);
        $this->assertEquals("ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้", $content[1]["message"]["th"]);
    }

    public function testAddDeviceBundleExistingDeviceOnlyButtonGetCartDeleteCart()
    {
        $url      = "ecom/cart/ExistingDeviceOnlyButtonGetCart";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];

        $request_parameter = json_decode('{
            "product_id": "L91587178",
            "inventory_id":"3078286",
            "quantity" : 1
        }', true);
        $lrequest->replace($request_parameter);

        $header     = [];
        $content    = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);
        $content[0] = $content["status_code"];
        $content[1] = $content["body"];

        $this->assertArrayHasKey(0, $content);
        $this->assertArrayHasKey(1, $content);

        $this->assertEquals(200, $content[0]);

        //get
        $url      = "wportal/cart/ExistingDeviceOnlyButtonGetCart";
        $method   = "get";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];
        $lrequest->replace($request_parameter);

        $header     = [];
        $content    = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);
        $content[0] = $content["status_code"];
        $content[1] = $content["body"];

        $this->assertArrayHasKey("status_code", $content);
        $this->assertArrayHasKey("body", $content);

        $this->assertEquals(200, $content["status_code"]);
        $this->assertEquals("product", $content["body"]["data"]["record"][0]["products"][0]["product_type"]);

        $url      = "ecom/cart/ExistingDeviceOnlyButtonGetCart";
        $method   = "delete";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];

        $lrequest->replace($request_parameter);

        $header     = [];
        $content    = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);
        $content[0] = $content["status_code"];
        $content[1] = $content["body"];

        $this->assertArrayHasKey(0, $content);
        $this->assertArrayHasKey(1, $content);

        $this->assertEquals(200, $content[0]);

    }
}
