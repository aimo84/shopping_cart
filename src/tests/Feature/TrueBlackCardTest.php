<?php

namespace Tests\Feature;

use Tests\TestCase;

class TrueBlackCardTest extends TestCase
{

    public function testGetCheckBlackCardStatus()
    {
        $url      = "true-black-card/checkBCStatus";
        $method   = "get";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));

        $request_parameter            = [];
        $request_parameter["NThaiID"] = "1234567890123";
        $request_parameter['OfferID'] = "CS_CL_824_1";
        $lrequest->replace($request_parameter);

        $content = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);

        $this->assertEquals(200, $content["status_code"]);
        $content = json_decode($content["body"], true);
        foreach (["Result_code", "Result_Desc", "Data"] as $key_name) {
            $this->assertArrayHasKey($key_name, $content);
        }

        foreach (["ECustomerID", "NThaiID", "cmx_id"] as $key_name) {
            $this->assertArrayHasKey($key_name, $content["Data"]);
        }
    }

    public function testVerifyBlackTrueCard()
    {
        $url      = "verify/family_black_truecard";
        $method   = "get";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));

        $request_parameter                = [];
        $request_parameter["id_number"]   = "3470400326036";
        $request_parameter['date_birth']  = "03";
        $request_parameter['month_birth'] = "03";
        $request_parameter["year_birth"]  = "1987";

        $lrequest->replace($request_parameter);

        $content = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);

        $this->assertEquals(400, $content["status_code"]);
        $content = $content["body"];
        foreach (["is_pass", "message"] as $key_name) {
            $this->assertArrayHasKey($key_name, $content);
        }

        foreach (["en", "th"] as $key_name) {
            $this->assertArrayHasKey($key_name, $content["message"]);
        }
    }
}
