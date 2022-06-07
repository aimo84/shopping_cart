<?php

namespace Tests\Feature;

use Tests\TestCase;

class TrueIdTvBoxFreeTolErrorMessageTest extends TestCase
{
    public function testCase1NotBlacklistPpMoreThan599AndAgingMorethan1Year()
    {
        $url      = "verify/multi_campaign";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];

        $request_parameter = json_decode('{"id_number": "5714696398972",
            "service_name":"trueonline",
            "mobile_number" : "0938300242",
            "trueonline_number" : "882000050",
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

        $this->assertArrayHasKey("en", json_decode($content[1], true)["message"]);
        $this->assertArrayHasKey("th", json_decode($content[1], true)["message"]);
    }

    public function testCase2Blacklisted()
    {
        $url      = "verify/multi_campaign";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];

        $request_parameter = json_decode('{"id_number": "2988575667333",
            "service_name":"trueonline",
            "mobile_number" : "0938300242",
            "trueonline_number" : "9688000324",
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

        $this->assertArrayHasKey("en", json_decode($content[1], true)["message"]);
        $this->assertArrayHasKey("th", json_decode($content[1], true)["message"]);
    }

    public function testCase3NotPassPpTolLessThan599()
    {
        $url      = "verify/multi_campaign";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];

        $request_parameter = json_decode('{"id_number": "1446768259860",
            "service_name":"trueonline",
            "mobile_number" : "0938300242",
            "trueonline_number" : "9620000261",
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

        $this->assertArrayHasKey("en", json_decode($content[1], true)["message"]);
        $this->assertArrayHasKey("th", json_decode($content[1], true)["message"]);
    }

    public function testCase4AgingLessThan1Year()
    {
        $url      = "verify/multi_campaign";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];

        $request_parameter = json_decode('{"id_number": "1226897315059",
            "service_name":"trueonline",
            "mobile_number" : "0938300242",
            "trueonline_number" : "9104000453",
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

        $this->assertArrayHasKey("en", json_decode($content[1], true)["message"]);
        $this->assertArrayHasKey("th", json_decode($content[1], true)["message"]);
    }

    public function testCase8NotPassFromCollection()
    {
        $url      = "verify/multi_campaign";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];

        $request_parameter = json_decode('{"id_number": "9617777695183",
            "service_name":"trueonline",
            "mobile_number" : "0954200032",
            "trueonline_number" : "9104000453",
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

        $this->assertArrayHasKey("en", json_decode($content[1], true)["message"]);
        $this->assertArrayHasKey("th", json_decode($content[1], true)["message"]);
    }
}
