<?php

namespace Tests\Feature;

use Tests\TestCase;

class TolSelfServiceTest extends TestCase
{
    public function testRequestAccessToken()
    {
        $url      = "uaa/oauth/token";
        $lrequest = new \Illuminate\Http\Request();
        $method   = "post";
        $lrequest->setMethod(strtoupper($method));

        $response               = $this->call('POST', '/api/true/uaa/oauth/token', []);
        $status_code            = $response->status();
        $body                   = $response->getContent();
        $content                = [];
        $content["status_code"] = $status_code;
        $content["body"]        = $body;

        $this->assertEquals(200, $content["status_code"]);
        $content = json_decode($content["body"], true);

        $this->assertEquals("bearer", ($content["token_type"]));
    }

    public function testVerifyTolSsvBlacklist()
    {
        $url      = "verify/tol_ssv_blacklist";
        $lrequest = new \Illuminate\Http\Request();
        $method   = "post";
        $lrequest->setMethod(strtoupper($method));
        $request_parameter              = [];
        $request_parameter["id_number"] = "2988575667333";
        $lrequest->replace($request_parameter);
        $response               = $this->call('POST', '/api/true/verify/tol_ssv_blacklist', $request_parameter);
        $status_code            = $response->status();
        $body                   = $response->getContent();
        $content                = [];
        $content["status_code"] = $status_code;
        $content["body"]        = $body;

        $this->assertEquals(200, $content["status_code"]);
        $content = json_decode($content["body"], true);
    }
}
