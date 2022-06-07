<?php

namespace Tests\Unit;

use App\Services\WlsService;
use Tests\TestCase;

class VerifyBeforeCartWlsTest extends TestCase
{
    public function testGetValidatePrivilegeSubscriberByMobile()
    {
        $url      = "check-preverify/wemall/sales/order/tmv/validate-privilege-subscriber-by-mobile";
        $method   = "get";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter                     = [];
        $request_parameter["service-id"]       = "EXTDEV";
        $request_parameter["subscriber"]       = "0830010173";
        $request_parameter["id-number"]        = "3470400326036";
        $request_parameter["partner-code"]     = "80000638";
        $request_parameter["company-code"]     = "RM";
        $request_parameter["proposition"]      = "0048011";
        $request_parameter["ccbs-proposition"] = "RMV000000009209";
        $request_parameter["customer-type"]    = "I";
        $request_parameter["campaign-code"]    = "WX868";
        $request_parameter["campaign-type"]    = "TRUE_ID_TV_MOBILE";

        $lrequest->replace($request_parameter);

        if (count($lrequest->all()) > 0 && $method == "get") {
            $url .= '?';
            foreach ($lrequest->all() as $key => $value) {
                $url .= $key . '=' . $value . '&';
            }
        }

        $header  = [];
        $content = WlsService::GetValidatePrivilegeSubscriberByMobile($url, $method, $lrequest, $header);

        $this->assertArrayHasKey(0, $content);
        $this->assertArrayHasKey(1, $content);

        $this->assertEquals($content[0], 200);
        foreach (["status", "trx-id", "process-instance", "response-data"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true));
        }

        foreach (["subscriber", "validate-privilege"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true)["response-data"]);
        }

        foreach (["subscriber", "ban", "priceplan", "operator", "status", "remark", "renewal", "usim", "account-sub-type", "activate-date"
            , "port-in", "subscriber-id", "is-usim"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true)["response-data"]["subscriber"]);
        }

        $this->assertEquals(json_decode($content[1], true)["response-data"]["validate-privilege"], true);
    }

    public function testPostVerifyTrueidActionWlsForceReturnFalseForTest()
    {
        $url      = "verify/trueid";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = json_decode('{
            "id_number": "3470400326036",
            "service_name":"truemove",
            "mobile_number" : "0816511172",
            "otp": "6435",
            "date_birth": "03",
            "month_birth": "03",
            "year_birth": "1983",
            "product_id_list": ["L91580559", "L91580071"],
            "face_recog_cust_capture":"/9j/4AAQSkZJRgABAQAASABIAAD/4T4bRXhpZgAATU0AKgAAAAgABgESAAMAAAABAAEAAAEaAAUAAAABAAAAVgEbAAUAAAABAAAAXgEoAAMAAAABAAIAAAITAAMAAAABAAEAAIdpAAQAAAABAAAAZgAAAMAAAABIAAAAAQAAAEgAAAABAAeQAAAHAAAABDAyMjGRAQAHAAAABAECAwCgAAAHAAAABDAxMDCgAQADAAAAAQABAACgAgAEAAAAAQAAAtCgAwAEAAAAAQAAAsSkBgADAAAAAQAAAAAAAAAAAAYBAwADAAAAAQAGAAABGgAFAAAAAQAAAQ4BGwAFAAAAAQAAARYBKAADAAAAAQACAAACAQAEAAAAAQAAAR4CAgAEAAAAAQAAPPMAAAAAAAAASAAAAAEAAABIAAAAAf/Y/8AAEQgAnQCgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkK",
            "face-recog-cust-certificate":"/9j/4AAQSkZJRgABAQAASABIAAD/4T4bRXhpZgAATU0AKgAAAAgABgESAAMAAAABAAEAAAEaAAUAAAABAAAAVgEbAAUAAAABAAAAXgEoAAMAAAABAAIAAAITAAMAAAABAAEAAIdpAAQAAAABAAAAZgAAAMAAAABIAAAAAQAAAEgAAAABAAeQAAAHAAAABDAyMjGRAQAHAAAABAECAwCgAAAHAAAABDAxMDCgAQADAAAAAQABAACgAgAEAAAAAQAAAtCgAwAEAAAAAQAAAsSkBgADAAAAAQAAAAAAAAAAAAYBAwADAAAAAQAGAAABGgAFAAAAAQAAAQ4BGwAFAAAAAQAAARYBKAADAAAAAQACAAACAQAEAAAAAQAAAR4CAgAEAAAAAQAAPPMAAAAAAAAASAAAAAEAAABIAAAAAf/Y/8AAEQgAnQCgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkK"
        }', true);
        $lrequest->replace($request_parameter);

        $header  = [];
        $content = WlsService::postVerifyTrueidWls($url, $method, $lrequest, $header);

        $this->assertArrayHasKey(0, $content);
        $this->assertArrayHasKey(1, $content);

        $this->assertEquals($content[0], 200);
        $this->assertEquals(json_decode($content[1], true)["is_pass"], false);
    }

    public function testGetOtpWls()
    {
        $url      = "wportal/otp/request";
        $method   = "get";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter                  = [];
        $request_parameter["mobile_number"] = "0647016834";
        $lrequest->replace($request_parameter);

        $header  = [];
        $content = WlsService::getOtpWls($url, $method, $lrequest, $header);

        $this->assertArrayHasKey(0, $content);
        $this->assertArrayHasKey(1, $content);

        $this->assertEquals($content[0], 200);
        foreach (["status_code", "status_txt", "data"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true));
        }

        $this->assertEquals(json_decode($content[1], true)["status_code"], 200);
        $this->assertEquals(json_decode($content[1], true)["status_txt"], "OK");
    }

    public function testGetVerifyOtpWls()
    {
        $url      = "wportal/otp/verify";
        $method   = "get";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter                  = [];
        $request_parameter["mobile_number"] = "0647016834";
        $request_parameter["otp"]           = "1470";
        $lrequest->replace($request_parameter);

        $header  = [];
        $content = WlsService::getVerifyOtpWls($url, $method, $lrequest, $header);

        $this->assertArrayHasKey(0, $content);
        $this->assertArrayHasKey(1, $content);

        $this->assertEquals(200, $content[0]);
        foreach (["status_code", "status_txt", "data"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true));
        }
    }

    public function testPostCheckBlacklistTrueonlineGotError()
    {
        $url      = "check-blacklist/getTOLFraudAndBlackList";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter                                    = [];
        $request_parameter["searchList"]                      = ["searchInfoArray" => []];
        $request_parameter["searchList"]["searchInfoArray"][] = ["type" => "CERTIFICATE", "value" => "8355080611220"];
        $request_parameter["searchList"]["searchInfoArray"][] = ["type" => "BUSINESSLINE", "value" => "ONLINE"];
        $request_parameter["searchList"]["searchInfoArray"][] = ["type" => "CUSTOMERSEGMENT", "value" => "INDIVIDUAL"];
        $lrequest->replace($request_parameter);

        $header  = [];
        $content = WlsService::postCheckBlacklistTrueonline($url, $method, $lrequest, $header);

        $this->assertArrayHasKey(0, $content);
        $this->assertArrayHasKey(1, $content);

        $this->assertEquals($content[0], 200);
        foreach (["errorCode", "message", "uuid", "backendResponseList", "blackListDataInfo", "countTOLHomePack", "fraudDataInfo"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true));
        }

        foreach (["apiName", "errorCode", "message", "system", "url"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true)["backendResponseList"]["backendResponseInfoArray"][0]);
        }
        foreach (["apiName", "errorCode", "message", "system", "url"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true)["backendResponseList"]["backendResponseInfoArray"][1]);
        }
        foreach (["apiName", "errorCode", "message", "system", "url"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true)["backendResponseList"]["backendResponseInfoArray"][2]);
        }
        foreach (["apiName", "errorCode", "message", "system", "url"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true)["backendResponseList"]["backendResponseInfoArray"][3]);
        }
        $this->assertEquals(json_decode($content[1], true)["backendResponseList"]["size"], 4); //*/

        foreach (["blackList", "crmTransactionId", "status", "temporaryFlag"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true)["blackListDataInfo"]);
        }
        foreach (["count", "crmTransactionId"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true)["countTOLHomePack"]);
        }

        foreach (["crmTransactionId", "fraudList", "status", "temporaryFlag"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true)["fraudDataInfo"]);
        }

        $this->assertEquals(json_decode($content[1], true)["blackListDataInfo"]["status"], "false");
        $this->assertEquals(json_decode($content[1], true)["fraudDataInfo"]["status"], "false");
    }

    public function testPostCheckBlacklistTrueonlineGotSuccess()
    {
        $url      = "check-blacklist/getTOLFraudAndBlackList";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter                                    = [];
        $request_parameter["searchList"]                      = ["searchInfoArray" => []];
        $request_parameter["searchList"]["searchInfoArray"][] = ["type" => "CERTIFICATE", "value" => "4355885945331"];
        $request_parameter["searchList"]["searchInfoArray"][] = ["type" => "BUSINESSLINE", "value" => "ONLINE"];
        $request_parameter["searchList"]["searchInfoArray"][] = ["type" => "CUSTOMERSEGMENT", "value" => "INDIVIDUAL"];
        $lrequest->replace($request_parameter);

        $header  = [];
        $content = WlsService::postCheckBlacklistTrueonline($url, $method, $lrequest, $header);

        $this->assertArrayHasKey(0, $content);
        $this->assertArrayHasKey(1, $content);

        $this->assertEquals($content[0], 200);
        foreach (["errorCode", "message", "uuid", "backendResponseList", "blackListDataInfo", "countTOLHomePack", "fraudDataInfo"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true));
        }

        foreach (["apiName", "errorCode", "message", "system", "url"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true)["backendResponseList"]["backendResponseInfoArray"][0]);
        }
        foreach (["apiName", "errorCode", "message", "system", "url"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true)["backendResponseList"]["backendResponseInfoArray"][1]);
        }
        foreach (["apiName", "errorCode", "message", "system", "url"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true)["backendResponseList"]["backendResponseInfoArray"][2]);
        }
        foreach (["apiName", "errorCode", "message", "system", "url"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true)["backendResponseList"]["backendResponseInfoArray"][3]);
        }
        $this->assertEquals(json_decode($content[1], true)["backendResponseList"]["size"], 4); //*/

        foreach (["blackList", "crmTransactionId", "status", "temporaryFlag"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true)["blackListDataInfo"]);
        }
        foreach (["count", "crmTransactionId"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true)["countTOLHomePack"]);
        }

        foreach (["crmTransactionId", "fraudList", "status", "temporaryFlag"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true)["fraudDataInfo"]);
        }
    }

    public function testPostPortalPrivilegeCheck()
    {
        $url      = "wportal/privilege/check";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];
        $request_parameter = json_decode('{"thai_id":"MzQ3MDQwMDMyNjAzNg==",
            "privilege_uid":"0830010173",
            "service":"truemove",
            "quantity":"1",
            "campaigns[0]":"WX868",
            "product_code":"3000078509"
            }', true);
        $lrequest->replace($request_parameter);

        $header  = [];
        $content = WlsService::postPortalPrivilegeCheck($url, $method, $lrequest, $header);

        $this->assertEquals($content[0], 200);
        foreach (["status_code", "status_txt", "data"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true));
        }
    }

    public function testPostCustomerPreverifySuccess()
    {
        $url      = "check-preverify/wemall/profiles/customer/customer-preverify";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];
        $request_parameter = json_decode('{
            "accountCat":"I",
            "channel":"KYC_WEMALL",
            "companyCode":"RM",
            "idNumber":"3470400326036",
            "verifyType":"ALL"
         }', true);
        $lrequest->replace($request_parameter);

        $header  = [];
        $content = WlsService::postCustomerPreverify($url, $method, $lrequest, $header);

        $this->assertArrayHasKey(0, $content);
        $this->assertArrayHasKey(1, $content);

        $this->assertEquals($content[0], 200);
        foreach (["status", "trx-id", "process-instance", "response-data"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true));
        }

        foreach (["verifyCode", "mobileRelaxBlacklist", "remark"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true)["response-data"]);
        }

        $this->assertEquals(json_decode($content[1], true)["response-data"]["remark"], "ไม่ติด collection");
    }

    public function testPostCustomerPreverifyFail()
    {
        $url      = "check-preverify/wemall/profiles/customer/customer-preverify";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];
        $request_parameter = json_decode('{
            "accountCat":"I",
            "channel":"KYC_WEMALL",
            "companyCode":"RM",
            "idNumber":"1450011020193",
            "verifyType":"ALL"
         }', true);
        $lrequest->replace($request_parameter);

        $header  = [];
        $content = WlsService::postCustomerPreverify($url, $method, $lrequest, $header);

        $this->assertArrayHasKey(0, $content);
        $this->assertArrayHasKey(1, $content);

        $this->assertEquals($content[0], 200);
        foreach (["status", "trx-id", "process-instance", "response-data"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true));
        }

        foreach (["verifyCode", "mobileRelaxBlacklist", "remark"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true)["response-data"]);
        }
        $this->assertEquals(json_decode($content[1], true)["status"], "SUCCESSFUL");
        $this->assertEquals(json_decode($content[1], true)["display-messages"][0]["message-type"], "ERROR");
        $this->assertEquals(json_decode($content[1], true)["response-data"]["remark"], null);
    }

    public function testPostSaveTempContent()
    {
        $url      = "check-preverify/wemall/sales/order/pdf/save-temp-content";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];
        $request_parameter = json_decode('{
            "input-key": "1234567890123",
            "content-type": "PNG",
            "seq": "1",
            "form-type": "FACE_RECOG_CUST_CERTIFICATE",
            "content-base64": "/9j/4AAQSkZJRgABAQAASABIAAD/4T4bRXhpZgAATU0AKgAAAAgABgESAAMAAAABAAEAAAEaAAUAAAABAAAAVgEbAAUAAAABAAAAXgEoAAMAAAABAAIAAAITAAMAAAABAAEAAIdpAAQAAAABAAAAZgAAAMAAAABIAAAAAQAAAEgAAAABAAeQAAAHAAAABDAyMjGRAQAHAAAABAECAwCgAAAHAAAABDAxMDCgAQADAAAAAQABAACgAgAEAAAAAQAAAtCgAwAEAAAAAQAAAsSkBgADAAAAAQAAAAAAAAAAAAYBAwADAAAAAQAGAAABGgAFAAAAAQAAAQ4BGwAFAAAAAQAAARYBKAADAAAAAQACAAACAQAEAAAAAQAAAR4CAgAEAAAAAQAAPPMAAAAAAAAASAAAAAEAAABIAAAAAf/Y/8AAEQgAnQCgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkK"
            }', true);
        $lrequest->replace($request_parameter);

        $header  = [];
        $content = WlsService::postSaveTempContent($url, $method, $lrequest, $header);

        $this->assertEquals($content[0], 200);
        foreach (["status", "trx-id", "process-instance"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true));
        }

        $this->assertEquals(json_decode($content[1], true)["status"], "SUCCESSFUL");
    }

    public function testPostFullPreverifyFail()
    {
        $url      = "check-preverify/wemall/profiles/customer/preverify";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];
        $request_parameter = json_decode('{"transactionId":"111211",
        "accountCat":"I",
        "accountType":"RPI",
        "approveCode":"11111",
        "birthDate":"16/10/1989",
        "channel":"KYC_WEMALL",
        "companyCode":"AL",
        "dealerCode":"11111",
        "functionType":"11111",
        "idNumber":"1450011020193",
        "idType":"I",
        "propositionId":"PP001",
        "requestMsisdn":"11111",
        "requestSubscriber":"1",
        "userLogin":"11111"}', true);
        $lrequest->replace($request_parameter);

        $header  = [];
        $content = WlsService::postFullPreverify($url, $method, $lrequest, $header);

        $this->assertEquals($content[0], 200);
        foreach (["status", "trx-id", "process-instance", "fault", "display-messages"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true));
        }

        $this->assertEquals(json_decode($content[1], true)["status"], "SUCCESSFUL");
        $this->assertEquals(json_decode($content[1], true)["display-messages"][0]["message-type"], "ERROR");
    }

    public function testPostFullPreverifySuccess()
    {
        $url      = "check-preverify/wemall/profiles/customer/preverify";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];
        $request_parameter = json_decode('{
            "transactionId":"111211",
            "accountCat":"I",
            "accountType":"RPI",
            "approveCode":"11111",
            "birthDate":"16/10/1989",
            "channel":"KYC_WEMALL",
            "companyCode":"AL",
            "dealerCode":"11111",
            "functionType":"11111",
            "idNumber":"3100601946298",
            "idType":"I",
            "propositionId":"PP001",
            "requestMsisdn":"11111",
            "requestSubscriber":"1",
            "userLogin":"11111"
         }', true);
        $lrequest->replace($request_parameter);

        $header  = [];
        $content = WlsService::postFullPreverify($url, $method, $lrequest, $header);

        $this->assertEquals($content[0], 200);
        foreach (["status", "trx-id", "process-instance", "display-messages"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true));
        }

        $this->assertEquals(json_decode($content[1], true)["status"], "SUCCESSFUL");
        $this->assertEquals(json_decode($content[1], true)["display-messages"][0]["message-type"], "INFORMATION");
        $this->assertEquals(json_decode($content[1], true)["response-data"]["remark"], "ไม่ติด collection");
    }

    public function testGetPropositionListWithNasCode()
    {
        $url      = "truemoveh/proposition";
        $method   = "get";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter             = [];
        $request_parameter["nas_code"] = "post02";
        $lrequest->replace($request_parameter);

        if (count($lrequest->all()) > 0 && $method == "get") {
            $url .= '?';
            foreach ($lrequest->all() as $key => $value) {
                $url .= $key . '=' . $value . '&';
            }
        }

        $header  = [];
        $content = WlsService::getPropositionListWithNasCode($url, $method, $lrequest, $header);

        foreach (["benchmark", "pagination", "record"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true));
        }
    }

    public function testGetPropositionPricePlan()
    {

        $method   = "get";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter                      = [];
        $request_parameter["proposition_id"]    = "717";
        $request_parameter["price_plan_status"] = "active";
        $url                                    = "truemoveh/proposition/" . $request_parameter["proposition_id"] . "/price-plan";
        $lrequest->replace($request_parameter);

        if (count($lrequest->all()) > 0 && $method == "get") {
            $url .= '?';
            foreach ($lrequest->all() as $key => $value) {
                $url .= $key . '=' . $value . '&';
            }
        }

        $header  = [];
        $content = WlsService::getPropositionPricePlan($url, $method, $lrequest, $header);

        foreach (["record"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true));
        }
    }

    public function testGetPropositionList()
    {
        $method   = "get";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter          = [];
        $request_parameter["order"] = "created_at";
        $request_parameter["sort"]  = "desc";
        $url                        = "truemoveh/proposition";
        $lrequest->replace($request_parameter);

        if (count($lrequest->all()) > 0 && $method == "get") {
            $url .= '?';
            foreach ($lrequest->all() as $key => $value) {
                $url .= $key . '=' . $value . '&';
            }
        }

        $header  = [];
        $content = WlsService::getPropositionList($url, $method, $lrequest, $header);

        foreach (["benchmark", "pagination", "record"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true));
        }
    }

    public function testGetPropositionInfo()
    {

        $method   = "get";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];
        $url               = "truemoveh/proposition" . "/739";
        $lrequest->replace($request_parameter);

        if (count($lrequest->all()) > 0 && $method == "get") {
            $url .= '?';
            foreach ($lrequest->all() as $key => $value) {
                $url .= $key . '=' . $value . '&';
            }
        }

        $header  = [];
        $content = WlsService::getPropositionInfo($url, $method, $lrequest, $header);

        foreach (["id", "nas_code", "name", "pool_number", "baseline",
            "penalty", "advance_payment", "contract", "term_short", "term_long", "package_detail_desktop", "package_detail_mobile", "section", "sim_type", "mat_category", "status", "source_type", "campaign_code", "created_at", "updated_at"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true));
        }
    }

    public function testGetMobilePrefix()
    {

        $method   = "get";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];
        $url               = "truemoveh/mobile/prefix";
        $lrequest->replace($request_parameter);

        if (count($lrequest->all()) > 0 && $method == "get") {
            $url .= '?';
            foreach ($lrequest->all() as $key => $value) {
                $url .= $key . '=' . $value . '&';
            }
        }

        $header  = [];
        $content = WlsService::getMobilePrefix($url, $method, $lrequest, $header);

        foreach (["status_code", "status_txt", "data"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true));
        }
    }

    public function testGetMobileSearch()
    {
        $method   = "get";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter                      = [];
        $request_parameter["page"]              = "1";
        $request_parameter["nas_code"]          = "post02";
        $request_parameter["filter_prefix"]     = "060";
        $request_parameter["filter_search_p8"]  = "8";
        $request_parameter["filter_search_p10"] = "8";
        $request_parameter["filter_likes[]"]    = "5";
        $request_parameter["filter_dislikes[]"] = "6";
        $request_parameter["sim_type"]          = "postpaid";
        $url                                    = "truemoveh/mobile/search";
        $lrequest->replace($request_parameter);

        if (count($lrequest->all()) > 0 && $method == "get") {
            $url .= '?';
            foreach ($lrequest->all() as $key => $value) {
                $url .= $key . '=' . $value . '&';
            }
        }

        $header  = [];
        $content = WlsService::getMobileSearch($url, $method, $lrequest, $header);

        foreach (["status_code", "status_txt", "data"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true));
        }
    }

    public function testGetMobileAvailable()
    {

        $method   = "get";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter            = [];
        $request_parameter["mobiles"] = "0605381111";
        $url                          = "truemoveh/mobiles";
        $lrequest->replace($request_parameter);

        if (count($lrequest->all()) > 0 && $method == "get") {
            $url .= '?';
            foreach ($lrequest->all() as $key => $value) {
                $url .= $key . '=' . $value . '&';
            }
        }

        $header  = [];
        $content = WlsService::getMobileAvailable($url, $method, $lrequest, $header);

        foreach (["benchmark", "pagination", "record"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true));
        }
    }

    public function testGetHoroscopes()
    {

        $method   = "get";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];
        $url               = "truemoveh/horoscopes";

        $header  = [];
        $content = WlsService::getHoroscopes($url, $method, $lrequest, $header);

        foreach (["benchmark", "pagination", "record"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true));
        }
    }

    public function testGetProductVerifySimPostpaid()
    {

        $method   = "get";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];
        $url               = "truemoveh/product-verify" . "/91580071";

        $header  = [];
        $content = WlsService::getProductVerifySimPostpaid($url, $method, $lrequest, $header);

        foreach (["product_id", "merchant", "inventories", "product_type", "sim_type", "propo_code", "special_url", "status", "created_at", "title", "images"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true));
        }
    }

    public function testGetConfigAllowSelling()
    {
        $method   = "get";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];
        $url               = "merchant/configs";

        $header  = [];
        $content = WlsService::getConfigAllowSelling($url, $method, $lrequest, $header);

        foreach (["status_code", "status_txt", "data"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true));
        }
    }

    public function testGetSearchPackage()
    {
        $method   = "get";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter             = [];
        $request_parameter["page"]     = "1";
        $request_parameter["limit"]    = "8";
        $request_parameter["sim_type"] = "postpaid";
        $url                           = "truemoveh/package/search";
        $lrequest->replace($request_parameter);

        if (count($lrequest->all()) > 0 && $method == "get") {
            $url .= '?';
            foreach ($lrequest->all() as $key => $value) {
                $url .= $key . '=' . $value . '&';
            }
        }

        $header  = [];
        $content = WlsService::getSearchPackage($url, $method, $lrequest, $header);

        foreach (["status_code", "status_txt", "data"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true));
        }
    }

    public function testGetPortalContentBanner()
    {

        $method   = "get";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];
        $url               = "wportal/content";
        $lrequest->replace($request_parameter);

        if (count($lrequest->all()) > 0 && $method == "get") {
            $url .= '?';
            foreach ($lrequest->all() as $key => $value) {
                $url .= $key . '=' . $value . '&';
            }
        }

        $header  = [];
        $content = WlsService::getPortalContentBanner($url, $method, $lrequest, $header);

        foreach (["status_code", "status_txt", "data"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true));
        }
    }

    public function testGetPricePlanList()
    {
        $method   = "get";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];
        $url               = "truemoveh/price-plan";
        $lrequest->replace($request_parameter);

        if (count($lrequest->all()) > 0 && $method == "get") {
            $url .= '?';
            foreach ($lrequest->all() as $key => $value) {
                $url .= $key . '=' . $value . '&';
            }
        }

        $header  = [];
        $content = WlsService::getPricePlanList($url, $method, $lrequest, $header);

        foreach (["benchmark", "pagination", "record"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true));
        }
    }

    public function testGetPricePlanSearch()
    {

        $method   = "get";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter             = [];
        $request_parameter["nas_code"] = "post02";
        $request_parameter["sim_type"] = "postpaid";
        $url                           = "truemoveh/price-plan/search";
        $lrequest->replace($request_parameter);

        if (count($lrequest->all()) > 0 && $method == "get") {
            $url .= '?';
            foreach ($lrequest->all() as $key => $value) {
                $url .= $key . '=' . $value . '&';
            }
        }

        $header  = [];
        $content = WlsService::getPricePlanSearch($url, $method, $lrequest, $header);

        foreach (["status_code", "status_txt", "data"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true));
        }
    }

    public function testPutClearHoldExpireTime()
    {
        $method   = "put";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter                      = [];
        $request_parameter["hold_expired_date"] = "2020-03-13 01:29:59";
        $request_parameter["hold_ref_id"]       = null;
        $url                                    = "truemoveh/mobiles" . "/0625388881";
        $lrequest->replace($request_parameter);

        $header  = [];
        $content = WlsService::putClearHoldExpireTime($url, $method, $lrequest, $header);
        $this->assertEquals($content[0], 200);
        foreach (["status_code", "status_txt", "data"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true));
        }

        foreach (["hold_expired_date", "mobile"] as $key_name) {
            $this->assertArrayHasKey($key_name, json_decode($content[1], true)["data"]);
        }
    }
}
