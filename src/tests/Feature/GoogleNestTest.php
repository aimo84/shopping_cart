<?php

namespace Tests\Feature;

use Tests\TestCase;

class GoogleNestTest extends TestCase
{
    public function testGoogleNestProductDetail()
    {
        $url      = "wportal/product/" . "L91586968";
        $lrequest = new \Illuminate\Http\Request();
        $content  = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);

        $this->assertEquals(200, $content["status_code"]);
        $content = json_decode($content["body"], true);

        $url      = "wportal/product/" . "L91587167";
        $lrequest = new \Illuminate\Http\Request();
        $content  = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);

        $this->assertEquals(200, $content["status_code"]);
        $content = json_decode($content["body"], true);

        $this->assertEquals('one_campaign_type', $content["data"]["record"]["product_type"]);

        $url      = "wportal/product/" . "L91587168";
        $lrequest = new \Illuminate\Http\Request();
        $content  = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);

        $this->assertEquals(200, $content["status_code"]);
        $content = json_decode($content["body"], true);

        $this->assertEquals('one_campaign_type', $content["data"]["record"]["product_type"]);

    }
}
