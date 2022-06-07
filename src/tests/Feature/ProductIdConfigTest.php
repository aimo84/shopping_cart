<?php

namespace Tests\Feature;

use Tests\TestCase;

class ProductIdConfigTest extends TestCase
{
    public function testProductIdConfig()
    {
        $url      = "json/product/verify/trueid";
        $lrequest = new \Illuminate\Http\Request();
        $content  = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);
        $this->assertEquals(true, count($content["body"]["postpaid"]) > 1);
    }
}
