<?php

namespace Tests\Feature;

use Tests\TestCase;

class TrueCardTest extends TestCase
{
    public function testGetCheckBlackCardStatus()
    {
        $url      = "account-app/truecard/get-status";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));

        $request_parameter = [];
        $lrequest->headers->set('Authorization', 'Bearer eyJraWQiOiJjNGNhNDIzOGEwYjkyMzgyMGRjYzUwOWE2Zjc1ODQ5YiIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIyMTk4NTE2MiIsImRldmljZV9pZCI6IlVOS05PV04iLCJ0cnVlaWQiOnsibW9iaWxlIjoiMDg4MjMzODg0NSIsImVtYWlsIjpudWxsfSwicHciOiIxIiwicHJvZmlsZSI6eyJiaXJ0aGRheSI6IiIsImdlbmRlciI6IiIsInRydWVpZCI6eyJtb2JpbGUiOiIwODgyMzM4ODQ1IiwiZW1haWwiOm51bGx9LCJsYXN0X25hbWUiOiIiLCJsb2dpbl9ieV9hY2NvdW50IjoiMDg4MjMzODg0NSIsImNvbnRhY3RfaW5mbyI6eyJhZGRyZXNzIjpudWxsLCJjb250YWN0X21vYmlsZSI6IjA4ODIzMzg4NDUiLCJjb250YWN0X2VtYWlsIjpudWxsfSwidmVyaWZpZWRfZW1haWwiOjEsImF2YXRhciI6Imh0dHBzOlwvXC9zdGctYXZhdGFyLmRtcGNkbi5jb21cL3AzMjB4MzIwXC8xMTYyXC8yMTk4NTE2Mi5wbmc_Y2hrPTAuODQ1MTU4NzU3OTA3ODgxMyIsImRpc3BsYXlfbmFtZSI6IjA4OCoqKioqKioiLCJ1aWQiOjIxOTg1MTYyLCJhY2NvdW50X2VtYWlsIjpudWxsLCJyZWdfZGF0ZSI6IjE1Njk4MjM2NzIiLCJyZWZzIjpudWxsLCJhY2NvdW50X21vYmlsZSI6bnVsbCwiZmlyc3RfbmFtZSI6IiJ9LCJpc3MiOiJodHRwczpcL1wvc2RrLWF1dGgudHJ1ZWlkLWRldi5uZXQiLCJhcGltX2FuIjoibnVsbCIsInJlcV9pZCI6IjE2MDA2NzMwNzEtNDkuNDkuMjM3LjIyOS1lNDIwYjQ2OS04NTg5LTQ4MzEtODY1Ny1mMzZiYjkzYjFhZmQiLCJhdWQiOiIyMzMxIiwic2NvcGUiOiJwdWJsaWNfcHJvZmlsZSIsInZlcmlmaWVkX2VtYWlsX2FjY291bnQiOiIwIiwiZXhwIjoxNjAwNjc2NjcxLCJpYXQiOjE2MDA2NzMwNzEsInRydXN0ZWRfb3duZXIiOiIwIiwidHplIjp7InRpbWV6b25lIjoiVVRDIiwidmFsdWUiOiIwIiwiZ210IjoiKzAwMDAifSwiYWNjb3VudCI6IjA4ODIzMzg4NDUiLCJhcGltX3BvIjoibnVsbCJ9.TE4xjKUYCL7iemGostRiD8xsuaq_AYYYKphbr7Jrb5jPslEfkW-DAMd_QD52bGMoNUUVJqY8fLwkYhu2aYeMRKyGHxJ19gl05ADI_62kNQGxGEhl5jFFHMWMRW4tPhNshNYZ5DiYhReh4NsL3uE7z4Bh62okYzLAwW5iivyYBJua5xP9rkDJR18kzJcF3Hm6AJXazO0h4Fp_7_U8fcy85R5EWldOWPsOckvGIAQ7tnIr377joycvaA8Bnxp0W-1feKi4uMyuCs2Fb-zGRKX51W4oGmh3oItufVcthykX-zThQjWRCrt__hBWtFjQDFKK2zuRPIDV8PLbPhR1XKTwIg');
        $request_parameter["customer_idn_no"] = "21985162";
        $lrequest->replace($request_parameter);

        $content = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);

        $this->assertEquals(200, $content["status_code"]);
        $content = json_decode($content["body"], true);
        foreach (["status_code", "status_txt", "data"] as $key_name) {
            $this->assertArrayHasKey($key_name, $content);
        }

        foreach (["description", "service_desc", "ext_transaction_id", "method", "channel", "transaction_id", "point_balance", "more_info", "product_detail"] as $key_name) {
            $this->assertArrayHasKey($key_name, $content["data"]);
        }
    }
}
