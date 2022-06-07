<?php

namespace Tests\Feature;

use App\Services\WlsService;
use Tests\TestCase;

class WlsFeatureTest extends TestCase
{
    public function testVerifyTrueid()
    {
        $url      = "verify/trueid";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];

        $request_parameter = json_decode('{"id_number": "3470400326036",
            "service_name":"trueonline",
            "trueonline_number" : "8355080611220",
            "mobile_number" : "0647016834",
            "otp": "123",
            "date_birth": "03",
            "month_birth": "03",
            "year_birth": "1987",
            "product_id_list": ["L91580559"]}', true);

        $lrequest->replace($request_parameter);

        $header  = [];
        $content = WlsService::postVerifyTrueidWls($url, $method, $lrequest, $header);

        $this->assertArrayHasKey(0, $content);
        $this->assertArrayHasKey(1, $content);

        $this->assertEquals(200, $content[0]);
        $this->assertEquals(json_decode($content[1], true)["is_pass"], false);
    }

    public function testPostSuccessAndGotRedirect()
    {
        $lrequest = new \Illuminate\Http\Request();
        $method   = "post";
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];
        $request_parameter = json_decode('{
            "signature":null,
            "secure_key":"800011706766",
            "total":"9000.0000",
            "payment_company":"wetrust",
            "payment_method":"CCW",
            "payment_refno":"9200309931896",
            "payment_ref1":"01109250",
            "payment_ref2":"800011706766",
            "payment_ref3":null,
            "order_statuses_code":"100",
            "payment_status":"1",
            "payment_message":"SUCCESS",
            "payment_buyer_expired_time":"2020-03-10 13:07:28",
            "ship_expired_time":"2020-03-12 13:07:33",
            "created_at":"2020-03-09 13:07:28",
            "system_date":"2020-03-09 13:07:38",
            "barcode_number":null,
            "earnpoint":null,
            "is_feature_test":true
         }', true);
        $lrequest->replace($request_parameter);

        $content = App('App\Http\Controllers\APIController')->postSuccess($lrequest);

        $this->assertEquals($content->status(), 302);
        $this->assertEquals('0;url=\'/success', explode('?', explode('"', $content->content())[5])[0]); // in case need to change header accept-encoding
    }

    public function testPostSuccessAndGotError()
    {
        $lrequest = new \Illuminate\Http\Request();
        $method   = "post";
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];
        $request_parameter = json_decode('{
            "signature":null,
            "secure_key":"800011706766",
            "total":"9000.0000",
            "payment_company":"wetrust",
            "payment_method":"CCW",
            "payment_refno":"9200309931896",
            "payment_ref1":"01109250",
            "payment_ref2":"800011706766",
            "payment_ref3":null,
            "order_statuses_code":"001",
            "payment_status":"1",
            "payment_message":"SUCCESS",
            "payment_buyer_expired_time":"2020-03-10 13:07:28",
            "ship_expired_time":"2020-03-12 13:07:33",
            "created_at":"2020-03-09 13:07:28",
            "system_date":"2020-03-09 13:07:38",
            "barcode_number":null,
            "earnpoint":null,
            "is_feature_test":true
         }', true);
        $lrequest->replace($request_parameter);

        $content = App('App\Http\Controllers\APIController')->postSuccess($lrequest);
        $this->assertEquals($content->status(), 302);
        $this->assertEquals('0;url=\'/payment?error=001\'', explode('"', $content->content())[5]); // in case need to change header accept-encoding
    }

    public function testPostPlaceorderWithTamperedNopayment()
    {
        $url      = "ecom/placeorder";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));

        $string_to_be_url_decode = 'customer_detail%5Bfirst_name%5D=s&customer_detail%5Blast_name%5D=sa&customer_detail%5Bemail%5D=thanawatnew%40gmail.com&customer_detail%5Btelephone%5D=0814556678&customer_detail%5Bfax%5D=&customer_detail%5Bcustomer_note%5D=&oneTimeCardToken=&delivery_address%5Bdistrict_id%5D=1&delivery_address%5Bcity_id%5D=1&delivery_address%5Bprovince_id%5D=1&delivery_address%5Bcountry_id%5D=209&delivery_address%5Bpostcode%5D=10200&delivery_address%5Bfirstname%5D=s&delivery_address%5Blastname%5D=sa&delivery_address%5Baddress1%5D=d&delivery_address%5Baddress2%5D=e&delivery_address%5Bphone%5D=0814556678&delivery_address%5Bemail%5D=thanawatnew%40gmail.com&delivery_address%5Bdistrict%5D=%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%A3%E0%B8%A1%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%A7%E0%B8%B1%E0%B8%87&delivery_address%5Bcity%5D=%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%99%E0%B8%84%E0%B8%A3&delivery_address%5Bprovince%5D=%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3&billing_address%5Bfirstname%5D=s&billing_address%5Blastname%5D=sa&billing_address%5Baddress1%5D=d&billing_address%5Baddress2%5D=e&billing_address%5Bdistrict_id%5D=1&billing_address%5Bcity_id%5D=1&billing_address%5Bprovince_id%5D=1&billing_address%5Bpostcode%5D=10200&billing_address%5Bcountry_id%5D=209&billing_address%5Bphone%5D=0814556678&billing_address%5Bemail%5D=thanawatnew%40gmail.com&products%5B0%5D%5Bproduct_id%5D=L91587187&products%5B0%5D%5Binventory_id%5D=3078301&products%5B0%5D%5Bquantity%5D=1&cart_id=WJyoUdq10AfY9z7f0v1ivzsla0jK8CR52YYfuPfw&payment_detail%5Bmethod%5D=NOPAYMENT';

        $url_decoded_string = urldecode($string_to_be_url_decode);

        parse_str($url_decoded_string, $output_array);
        $lrequest->replace($output_array);

        $header  = [];
        $content = App('App\Http\Controllers\OrderDetailController')->store($lrequest);
        $this->assertEquals(400, $content->status());
        $content = json_decode($content->content(), true);

        foreach (["message"] as $key_name) {
            $this->assertArrayHasKey($key_name, $content);
        }

        foreach (["en", "th"] as $key_name) {
            $this->assertArrayHasKey($key_name, $content["message"]);
        }
    }
}
