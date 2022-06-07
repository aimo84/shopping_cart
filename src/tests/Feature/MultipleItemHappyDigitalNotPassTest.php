<?php

namespace Tests\Feature;

use App\Services\WlsService;
use Tests\TestCase;

class MultipleItemHappyDigitalNotPassTest extends TestCase
{
    public function testPostVerifyTrueidThaiid1Tmh1Circuit16TrueidboxNotPassFamilysimNotPass()
    {
        $url      = "verify/trueid";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = json_decode('{
            "id_number": "1450011020193",
            "service_name":"all",
            "mobile_number" : "0830011185",
            "trueonline_number" : "9104000269",
            "otp": "1234",
            "date_birth": "03",
            "month_birth": "03",
            "year_birth": "1983",
            "product_id_list": ["L91580559","L91587044"],
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
        $this->assertEquals([], json_decode($content[1], true)["product_id_list_pass"]);
        $this->assertEquals(4, json_decode($content[1], true)["current_case"]);
    }

    public function testPostVerifyTrueidThaiid7Tmh18Circuit17TrueidboxNotPassFamilysimNotPass()
    {
        $url      = "verify/trueid";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = json_decode('{
            "id_number": "3918477777272",
            "service_name":"all",
            "mobile_number" : "0938300030",
            "trueonline_number" : "9688000324",
            "otp": "1234",
            "date_birth": "03",
            "month_birth": "03",
            "year_birth": "1983",
            "product_id_list": ["L91580559","L91587044"],
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
        $this->assertEquals([], json_decode($content[1], true)["product_id_list_pass"]);
        $this->assertEquals(4, json_decode($content[1], true)["current_case"]);
    }
}
