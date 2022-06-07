<?php

namespace Tests\Feature;

use Tests\TestCase;

class CustomerExpTest extends TestCase
{
    public function testPassNewUxTolVerifyExpWithTolAndHomePhone()
    {
        $url      = "customer/get-related-list-tol";
        $lrequest = new \Illuminate\Http\Request();
        $method   = "post";
        $lrequest->setMethod(strtoupper($method));
        $request_parameter                    = [];
        $request_parameter["thai_id"]         = "3755772685684";
        $request_parameter["is_feature_test"] = true;
        $lrequest->replace($request_parameter);
        $content = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);

        $this->assertEquals(200, $content["status_code"]);
        $content = ($content["body"]);

        $this->assertEquals(10, strlen($content["trueonline_number_list"][0]["tol_number"]));

        $url      = "customer/get-related-list-tol";
        $lrequest = new \Illuminate\Http\Request();
        $method   = "post";
        $lrequest->setMethod(strtoupper($method));
        $request_parameter                    = [];
        $request_parameter["thai_id"]         = "7916355176551";
        $request_parameter["is_feature_test"] = true;
        $lrequest->replace($request_parameter);
        $content = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);

        $this->assertEquals(200, $content["status_code"]);
        $content = ($content["body"]);

        $this->assertEquals(10, strlen($content["trueonline_number_list"][0]["tol_number"]));

        $url      = "customer/get-related-list-tol";
        $lrequest = new \Illuminate\Http\Request();
        $method   = "post";
        $lrequest->setMethod(strtoupper($method));
        $request_parameter                    = [];
        $request_parameter["thai_id"]         = "9967471812848";
        $request_parameter["is_feature_test"] = true;
        $lrequest->replace($request_parameter);
        $content = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);

        $this->assertEquals(200, $content["status_code"]);
        $content = ($content["body"]);

        $this->assertEquals(10, strlen($content["trueonline_number_list"][0]["tol_number"]));
    }

    public function testPassNewUxTolVerifyExpWithTolOnly()
    {
        //only trueonline number
        $url      = "customer/get-related-list-tol";
        $lrequest = new \Illuminate\Http\Request();
        $method   = "post";
        $lrequest->setMethod(strtoupper($method));
        $request_parameter                    = [];
        $request_parameter["thai_id"]         = "2735266325127";
        $request_parameter["is_feature_test"] = true;
        $lrequest->replace($request_parameter);
        $content = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);

        $this->assertEquals(200, $content["status_code"]);
        $content = ($content["body"]);

        $this->assertEquals(10, strlen($content["trueonline_number_list"][0]["tol_number"]));
    }

    public function testNotPassNewUxTolVerifyExp()
    {
        $url      = "customer/get-related-list-tol";
        $lrequest = new \Illuminate\Http\Request();
        $method   = "post";
        $lrequest->setMethod(strtoupper($method));
        $request_parameter                    = [];
        $request_parameter["thai_id"]         = "a";
        $request_parameter["is_feature_test"] = true;
        $lrequest->replace($request_parameter);
        $content = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);

        $this->assertEquals(404, $content["status_code"]);
        $content = ($content["body"]);

        $this->assertEquals("unable to import trueonline number/circuit number", $content["message"]["en"]);
        $this->assertEquals("ไม่สามารถนำเข้าข้อมูล trueonline number/circuit number ได้", $content["message"]["th"]);
    }
}
