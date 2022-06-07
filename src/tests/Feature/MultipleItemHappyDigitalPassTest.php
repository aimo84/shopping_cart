<?php

namespace Tests\Feature;

use App\Services\WlsService;
use Tests\TestCase;

class MultipleItemHappyDigitalPassTest extends TestCase
{
    public function testverifyTrueidAFromTestcaseTrueidboxPrepaidsimShouldPassBoth()
    {
        $url      = "verify/trueid";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = json_decode('{
            "id_number": "3470400326036",
            "service_name":"truemove",
            "mobile_number" : "0830010173",
            "otp": "1234",
            "date_birth": "03",
            "month_birth": "03",
            "year_birth": "1983",
            "product_id_list": ["L91580559","L91587074"]
        }', true);
        $lrequest->replace($request_parameter);

        $header  = [];
        $content = WlsService::postVerifyTrueidWls($url, $method, $lrequest, $header);

        $this->assertArrayHasKey(0, $content);
        $this->assertArrayHasKey(1, $content);

        $this->assertEquals($content[0], 200);
        $this->assertEquals(json_decode($content[1], true)["is_pass"], true);
        $this->assertEquals(["L91587074", "L91580559"], json_decode($content[1], true)["product_id_list_pass"]);
        $this->assertEquals(1, json_decode($content[1], true)["current_case"]);
        $this->assertArrayHasKey("privilege_placeorder", json_decode($content[1], true));
        $this->assertTrue(!empty(json_decode($content[1], true)["privilege_placeorder"]));
    }
}
