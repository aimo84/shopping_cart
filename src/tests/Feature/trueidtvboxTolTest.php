<?php

namespace Tests\Feature;

use Tests\TestCase;

class trueidtvboxTolTest extends TestCase
{
    public function testVerifyTrueidtvboxtolFailBlacklist()
    {
        $url      = "verify/multi_campaign";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];

        $request_parameter = json_decode('{"id_number": "3918477777272",
            "service_name":"trueonline",
            "mobile_number" : "0938300242",
            "trueonline_number" : "9104000240",
            "otp": "1234",
            "date_birth": "03",
            "month_birth": "03",
            "year_birth": "1983",
            "product_id_list": ["L91587165"],
            "is_feature_test": true
        }', true);

        $lrequest->replace($request_parameter);

        $header  = [];
        $content = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);

        $content[0] = $content["status_code"];
        $content[1] = $content["body"];
        $this->assertArrayHasKey(0, $content);
        $this->assertArrayHasKey(1, $content);

        $this->assertEquals($content[0], 200);
        $this->assertEquals(false, json_decode($content[1], true)["is_pass"]);
        $this->assertTrue(empty(json_decode($content[1], true)["product_id_list_pass"]));
        $this->assertEquals(["L91587165"], json_decode($content[1], true)["product_id_list_not_pass"]);
        $this->assertEquals(2, json_decode($content[1], true)["current_case"]);

    }

    public function testGetOrderWemallWithProductTypePostpaid()
    {
        $parameter = ["secure_key" => "800011710834", "show_all" => true, "is_success_check" => true];
        $result    = App('App\Http\Controllers\OrderDetailController')->showTrackingContent($parameter);
        $content   = $result;

        $content[0] = $content["status_code"];
        $content[1] = $content["body"];
        $this->assertArrayHasKey(0, $content);
        $this->assertArrayHasKey(1, $content);

        $this->assertEquals($content[0], 200);
        foreach (["data", "system_date", "benchmark", "code", "message"] as $key_name) {
            $this->assertArrayHasKey($key_name, $content[1]);
        }

        foreach (["id", "secure_key", "app_id", "device"] as $key_name) {
            $this->assertArrayHasKey($key_name, $content[1]["data"][0]);
        }

        $this->assertEquals("postpaid", $content[1]["data"][0]["order_product"][0]["product_type"]);

    }

    //check order_point from success tracking api
    public function testGetOrderWemallWithOrderPointIdcardField()
    {
        $parameter = ["secure_key" => "800011710876", "show_all" => true, "is_success_check" => true];
        $result    = App('App\Http\Controllers\OrderDetailController')->showTrackingContent($parameter);
        $content   = $result;

        $content[0] = $content["status_code"];
        $content[1] = $content["body"];
        $this->assertArrayHasKey(0, $content);
        $this->assertArrayHasKey(1, $content);

        $this->assertEquals($content[0], 200);
        foreach (["data", "system_date", "benchmark", "code", "message"] as $key_name) {
            $this->assertArrayHasKey($key_name, $content[1]);
        }

        foreach (["id", "secure_key", "app_id", "device"] as $key_name) {
            $this->assertArrayHasKey($key_name, $content[1]["data"][0]);
        }

        $this->assertEquals("40", $content[1]["data"][0]["order_point_idcard"]["point"]);
    }
}
