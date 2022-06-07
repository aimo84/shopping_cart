<?php

namespace Tests\Feature;

use Tests\TestCase;

class ErrorMessageMappingTrueIdTvBoxFreeTolGoogleHomeNestTest extends TestCase
{
    public function testCase1TrueidtvboxFreeTolBlacklistByBlacklist()
    {
        $url      = "verify/multi_campaign";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];

        $request_parameter = json_decode('{"id_number": "7110815181775",
            "service_name":"trueonline",
            "mobile_number" : "0938300242",
            "trueonline_number" : "9104000269",
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
    }

    public function testCase2RcTolLessThan599()
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
    }

    public function testCase3AgingLessThan1Year()
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
    }

    public function testCase4PrivilegeUidAlreadyUsed()
    {
        $url      = "verify/multi_campaign";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];

        $request_parameter = json_decode('{"id_number": "7578662628870",
            "service_name":"trueonline",
            "mobile_number" : "0938300242",
            "trueonline_number" : "NF2002077",
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
    }

    public function testCase5TolStatusNotActive()
    {
        $url      = "verify/multi_campaign";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];

        $request_parameter = json_decode('{"id_number": "6772286816517",
            "service_name":"trueonline",
            "mobile_number" : "0938300242",
            "trueonline_number" : "9100012335",
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
    }

    public function testCase10GoogleNest100PercentRcLessThan899()
    {
        $url      = "verify/multi_campaign";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];

        $request_parameter = json_decode('{"id_number": "8711776155393",
            "service_name":"trueonline",
            "mobile_number" : "0938300242",
            "trueonline_number" : "9104000070",
            "otp": "1234",
            "date_birth": "03",
            "month_birth": "03",
            "year_birth": "1983",
            "product_id_list": ["L91587167"],
            "product_sku_list": ["3000085627"],
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
        $this->assertEquals(false, json_decode($content[1], true)["is_pass"]);
    }

    public function testCase11GoogleNestNotPayEntryFee()
    {
        $url      = "verify/multi_campaign";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];

        $request_parameter = json_decode('{"id_number": "4529776474584",
            "service_name":"trueonline",
            "mobile_number" : "0938300242",
            "trueonline_number" : "9620002813",
            "otp": "1234",
            "date_birth": "03",
            "month_birth": "03",
            "year_birth": "1983",
            "product_id_list": ["L91587167"],
            "product_sku_list": ["3000085627"],
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
        $this->assertEquals(false, json_decode($content[1], true)["is_pass"]);
    }

    public function testCase14GoogleNestDontPay()
    {
        $url      = "verify/multi_campaign";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];

        $request_parameter = json_decode('{"id_number": "0732052160683",
            "service_name":"trueonline",
            "mobile_number" : "0938300242",
            "trueonline_number" : "9100013553",
            "otp": "1234",
            "date_birth": "03",
            "month_birth": "03",
            "year_birth": "1983",
            "product_id_list": ["L91587167"],
            "product_sku_list": ["3000085627"],
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
        $this->assertEquals(false, json_decode($content[1], true)["is_pass"]);
    }

    public function testCase15GoogleNestStatusNotActive()
    {
        $url      = "verify/multi_campaign";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];

        $request_parameter = json_decode('{"id_number": "6772286816517",
            "service_name":"trueonline",
            "mobile_number" : "0938300242",
            "trueonline_number" : "9100012335",
            "otp": "1234",
            "date_birth": "03",
            "month_birth": "03",
            "year_birth": "1983",
            "product_id_list": ["L91587167"],
            "product_sku_list": ["3000085627"],
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
        $this->assertEquals(false, json_decode($content[1], true)["is_pass"]);
    }
}
