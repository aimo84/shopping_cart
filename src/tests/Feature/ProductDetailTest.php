<?php

namespace Tests\Feature;

use Tests\TestCase;

class ProductDetailTest extends TestCase
{
    public function testHappyDigitalProductDetailType()
    {
        $url      = "wportal/product/" . "L91580559";
        $lrequest = new \Illuminate\Http\Request();
        $content  = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);

        $this->assertEquals(200, $content["status_code"]);
        $content = json_decode($content["body"], true);

        $this->assertEquals('happy_digital', $content["data"]["record"]["product_type"]);

        $url      = "wportal/product/" . "L91587044";
        $lrequest = new \Illuminate\Http\Request();
        $content  = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);

        $this->assertEquals(200, $content["status_code"]);
        $content = json_decode($content["body"], true);

        $this->assertEquals('happy_digital', $content["data"]["record"]["product_type"]);

        $url      = "wportal/product/" . "L91587067";
        $lrequest = new \Illuminate\Http\Request();
        $content  = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);

        $this->assertEquals(200, $content["status_code"]);
        $content = json_decode($content["body"], true);

        $this->assertEquals('happy_digital', $content["data"]["record"]["product_type"]);

        $url      = "wportal/product/" . "L91587074";
        $lrequest = new \Illuminate\Http\Request();
        $content  = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);

        $this->assertEquals(200, $content["status_code"]);
        $content = json_decode($content["body"], true);

        $this->assertEquals('happy_digital', $content["data"]["record"]["product_type"]);

        $url      = "wportal/product/" . "L91580006";
        $lrequest = new \Illuminate\Http\Request();
        $content  = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);

        $this->assertEquals(200, $content["status_code"]);
        $content = json_decode($content["body"], true);

        $this->assertEquals('happy_digital', $content["data"]["record"]["product_type"]);
    }

    public function testPostpaidProductDetail()
    {
        $url      = "wportal/product/" . "L91580071";
        $lrequest = new \Illuminate\Http\Request();
        $content  = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);

        $this->assertEquals(200, $content["status_code"]);
        $content = json_decode($content["body"], true);

        $this->assertEquals('postpaid', $content["data"]["record"]["product_type"]);
    }

    public function testNormalProductProductDetail()
    {
        $url      = "wportal/product/" . "L91580843";
        $lrequest = new \Illuminate\Http\Request();
        $content  = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);

        $this->assertEquals(200, $content["status_code"]);
        $content = json_decode($content["body"], true);

        $this->assertEquals('product', $content["data"]["record"]["product_type"]);

    }

    public function testGigatexProductProductDetail()
    {
        $url      = "wportal/product/" . "L91587066";
        $lrequest = new \Illuminate\Http\Request();
        $content  = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);

        $this->assertEquals(200, $content["status_code"]);
        $content = json_decode($content["body"], true);

        $this->assertEquals('gigatex', $content["data"]["record"]["product_type"]);
    }

    public function testNotfoundProductDetail()
    {
        $url               = "wportal/product/" . "1234";
        $lrequest          = new \Illuminate\Http\Request();
        $request_parameter = ["is_feature_test" => true];
        $lrequest->replace($request_parameter);
        $content = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);

        $this->assertEquals(404, $content["status_code"]);
        $content = json_decode($content["body"], true);
    }
}
