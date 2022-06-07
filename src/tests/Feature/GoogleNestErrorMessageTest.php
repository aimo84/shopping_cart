<?php

namespace Tests\Feature;

use Tests\TestCase;

class GoogleNestErrorMessageTest extends TestCase
{
    public function testCase17Blacklisted()
    {
        $url      = "verify/multi_campaign";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];

        $request_parameter = json_decode('{"id_number": "2988575667333",
            "service_name":"trueonline",
            "trueonline_number" : "9688000324",
            "mobile_number" : "0830011185",
            "otp": "123",
            "date_birth": "03",
            "month_birth": "03",
            "year_birth": "1987",
            "product_id_list": ["L91586968"],
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

        $this->assertArrayHasKey("en", json_decode($content[1], true)["message"]);
        $this->assertArrayHasKey("th", json_decode($content[1], true)["message"]);
    }
}
