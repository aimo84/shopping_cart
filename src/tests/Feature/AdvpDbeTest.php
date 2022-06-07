<?php

namespace Tests\Feature;

use App\Services\WlsService;
use Tests\TestCase;

class AdvpDbeTest extends TestCase
{
    public function testGetBundleExisting()
    {
        $url    = "truemoveh/bundle-existing";
        $method = "get";

        foreach (["91580447", "91588003", "91588003", "91580446"] as $product_id) {
            $lrequest = new \Illuminate\Http\Request();
            $lrequest->setMethod(strtoupper($method));
            $request_parameter = json_decode('{
                "product_id" : "' . $product_id . '"
            }', true);
            $lrequest->replace($request_parameter);

            $header  = [];
            $content = WlsService::getBundleExisting($url, $method, $lrequest, $header);

            $this->assertArrayHasKey(0, $content);
            $this->assertArrayHasKey(1, $content);
            $pwd = env("PWD_ENCRYPT_FUNCTION_DEVICE_BUNDLE");
        }
    }

    public function testPostBundleCampaignsVerifyPass()
    {
        $url      = "truemoveh/bundle-campaigns/verify";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter                 = [];
        $request_parameter["product_code"] = "3000081509";
        $request_parameter["mobile"]       = "015e5e99f10887b667ce";
        $request_parameter["thai_id"]      = "00565d90fe0c87be69cb81ee73";

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

    public function testAdvpDbeProductDetail()
    {
        $url      = "wportal/product/" . "L91580447";
        $lrequest = new \Illuminate\Http\Request();
        $content  = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);

        $this->assertEquals(200, $content["status_code"]);
        $content = json_decode($content["body"], true);

        $this->assertEquals('device_bundle_new_customer', $content["data"]["record"]["product_type"]);

        $this->assertArrayHasKey('discount', $content["data"]["record"]["bundle_existing"][0]["discount_list"][0]);
    }

    public function testStepHCheckRc()
    {
        $url      = "truemoveh/bundle-campaigns/verify";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter                  = [];
        $request_parameter["product_code"]  = "3000081509";
        $request_parameter["mobile"]        = "015e5e99f10887b667ce";
        $request_parameter["thai_id"]       = "00565d90fe0c87be69cb81ee73";
        $request_parameter["campaign_type"] = "1";

        $lrequest->replace($request_parameter);

        $header  = [];
        $content = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);

        $this->assertArrayHasKey("status_code", $content);
        $this->assertArrayHasKey("body", $content);

        $this->assertEquals($content["status_code"], 200);

        foreach (["data", "status_code", "status_txt"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content["body"], true));
        }
    }

    public function testStepHCheckRcTwo()
    {
        $url      = "truemoveh/bundle-campaigns/verify";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter                  = [];
        $request_parameter["product_code"]  = "3000081509";
        $request_parameter["mobile"]        = "0939740185";
        $request_parameter["thai_id"]       = "1100800960367";
        $request_parameter["campaign_type"] = "1";

        $lrequest->replace($request_parameter);

        $header  = [];
        $content = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);

        $this->assertArrayHasKey("status_code", $content);
        $this->assertArrayHasKey("body", $content);

        $this->assertEquals($content["status_code"], 200);

        foreach (["data", "status_code", "status_txt"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content["body"], true));
        }
    }

    public function testStepHCheckRcThree()
    {
        $url      = "truemoveh/bundle-campaigns/verify";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter                  = [];
        $request_parameter["product_code"]  = "3000081509";
        $request_parameter["mobile"]        = "0939740185";
        $request_parameter["thai_id"]       = "1100800960367";
        $request_parameter["campaign_type"] = "3";
        $request_parameter["rc"]            = "1099";

        $lrequest->replace($request_parameter);

        $header  = [];
        $content = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);

        $this->assertArrayHasKey("status_code", $content);
        $this->assertArrayHasKey("body", $content);

        $this->assertEquals($content["status_code"], 200);

        foreach (["data", "status_code", "status_txt"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content["body"], true));
        }
    }
}
