<?php

namespace Tests\Feature;

use Tests\TestCase;

class ProductListLvCTest extends TestCase
{
    public function testSearchProductCampaign()
    {
        $url      = "search/product";
        $method   = "get";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));

        $request_parameter = [];
        $lrequest->replace($request_parameter);

        $content = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);

        $this->assertEquals(200, $content["status_code"]);
        $content = json_decode($content["body"], true);
        foreach (["status_code", "status_txt", "data"] as $key_name) {
            $this->assertArrayHasKey($key_name, $content);
        }
        $this->assertArrayHasKey("id", $content["data"]["record"][0]);
    }

    public function testGetFilterLvC()
    {
        $url      = "search-v2/filters";
        $method   = "get";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));

        $request_parameter = [];
        $lrequest->replace($request_parameter);

        $content = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);

        $this->assertEquals(200, $content["status_code"]);
        $content = json_decode($content["body"], true);
        foreach (["status_code", "status_txt", "data"] as $key_name) {
            $this->assertArrayHasKey($key_name, $content);
        }

        $this->assertArrayHasKey("options", $content["data"]["record"][0]);
    }
}
