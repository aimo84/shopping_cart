<?php

namespace Tests\Unit;

use App\Services\WlsService;
use Tests\TestCase;

class VlearnTest extends TestCase
{

    public function testVerifyVlearn()
    {
        $url      = "register-campaign/vlearn";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter                       = [];
        $request_parameter["name"]               = "";
        $request_parameter["channel"]            = "tu-web";
        $request_parameter["msisdn"]             = "0865068377";
        $request_parameter["certificate-number"] = "4440412092386";

        $lrequest->replace($request_parameter);

        $header  = [];
        $content = WlsService::postRegisterCampaignVlearn($url, $method, $lrequest, $header);

        $this->assertArrayHasKey(0, $content);
        $this->assertArrayHasKey(1, $content);

        $this->assertArrayHasKey("tracking-id", $content[1]);
        $this->assertArrayHasKey("result", $content[1]);
        $this->assertArrayHasKey("is_pass", $content[1]);
        $this->assertEquals(false, $content[1]["is_pass"]);

        foreach (["code", "desc", "display-text-th", "display-text-en"] as $key_name) {
            $this->assertArrayHasKey($key_name, $content[1]["result"]);
        }
    }

    public function testVlearnProductDetail()
    {
        $url      = "wportal/product/" . "L91587156";
        $lrequest = new \Illuminate\Http\Request();
        $content  = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);

        $this->assertEquals(200, $content["status_code"]);
        $content = json_decode($content["body"], true);

        $this->assertEquals('vlearn', $content["data"]["record"]["product_type"]);

        //========================================
        $url      = "wportal/product/" . "L91587163";
        $lrequest = new \Illuminate\Http\Request();
        $content  = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);
        $this->assertEquals(200, $content["status_code"]);
        $content = json_decode($content["body"], true);

        $this->assertEquals('vlearn', $content["data"]["record"]["product_type"]);
        //========================================
        $url      = "wportal/product/" . "L91587164";
        $lrequest = new \Illuminate\Http\Request();
        $content  = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);

        $this->assertEquals(200, $content["status_code"]);
        $content = json_decode($content["body"], true);

        $this->assertEquals('vlearn', $content["data"]["record"]["product_type"]);
    }

    public function testSaveLogUniversityPass()
    {
        $url      = "truemoveh/verify/log";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter                 = [];
        $request_parameter["name"]         = "john doe";
        $request_parameter["id_card"]      = "QUE5OTE5OTk5";
        $request_parameter["mobile"]       = "0808881111";
        $request_parameter["organization"] = "Chulalongkorn University";
        $request_parameter["verify_type"]  = "University";

        $lrequest->replace($request_parameter);

        $header  = [];
        $content = WlsService::postSaveLogUniversity($url, $method, $lrequest, $header);

        $this->assertArrayHasKey(0, $content);
        $this->assertArrayHasKey(1, $content);

        $this->assertArrayHasKey("name", json_decode($content[1], true));
        $this->assertArrayHasKey("id_card", json_decode($content[1], true));
        $this->assertArrayHasKey("mobile", json_decode($content[1], true));
        $this->assertArrayHasKey("organization", json_decode($content[1], true));
        $this->assertArrayHasKey("verify_type", json_decode($content[1], true));
    }

    public function testSaveLogUniversityNotPass()
    {
        $url      = "truemoveh/verify/log";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];

        $lrequest->replace($request_parameter);

        $header  = [];
        $content = WlsService::postSaveLogUniversity($url, $method, $lrequest, $header);

        $this->assertEquals(400, $content[0]);
        $this->assertArrayHasKey(0, $content);
        $this->assertArrayHasKey(1, $content);
    }
}
