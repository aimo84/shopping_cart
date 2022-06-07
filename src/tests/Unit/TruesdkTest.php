<?php

namespace Tests\Unit;

use App\Services\TrueSdkService;
use Tests\TestCase;

class TruesdkTest extends TestCase
{
    public function testTestRefreshTokenIsSet()
    {
        $refresh_token = env("TEST_REFRESH_TOKEN", null);
        $this->assertTrue(!empty($refresh_token));
    }

    public function testFetchTrueidBodyPost()
    {
        $url      = "oauth2/token";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter                  = [];
        $request_parameter['refresh_token'] = env("TEST_REFRESH_TOKEN", null);
        $lrequest->replace($request_parameter);

        $header = [
            "Content-Type"  => "application/json",
            "Authorization" => "Bearer " . env("TEST_REFRESH_TOKEN", null),
        ];
        $content = TrueSdkService::fetchTrueidBodyPost($url, $method, $lrequest, $header);

        $this->assertArrayHasKey(0, $content);
        $this->assertArrayHasKey(1, $content);

        $this->assertEquals($content[0], 200);
        foreach (["access_token", "refresh_token", "token_type", "expires_in"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true));
        }
    }
}
