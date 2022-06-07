<?php

namespace Tests\Feature;

use Tests\TestCase;

class DeviceBundleNewCustomerTest extends TestCase
{
    public function testNotPassPreverCase5()
    {
        $url      = "verify/device_bundle_new_customer";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];

        $request_parameter = json_decode('{"id_number": "2019061218108",
        "date_birth": "03",
        "month_birth": "03",
        "year_birth": "1987",
        "product_id_list": ["L91587233"],
        "product_bundle_id": ["5ec64375ed35060001340d09"],
        "product_nas_code_list": ["0049457"],
        "face_recog_cust_capture":"/9j/4AAQSkZJRgABAQAASABIAAD/4T4bRXhpZgAATU0AKgAAAAgABgESAAMAAAABAAEAAAEaAAUAAAABAAAAVgEbAAUAAAABAAAAXgEoAAMAAAABAAIAAAITAAMAAAABAAEAAIdpAAQAAAABAAAAZgAAAMAAAABIAAAAAQAAAEgAAAABAAeQAAAHAAAABDAyMjGRAQAHAAAABAECAwCgAAAHAAAABDAxMDCgAQADAAAAAQABAACgAgAEAAAAAQAAAtCgAwAEAAAAAQAAAsSkBgADAAAAAQAAAAAAAAAAAAYBAwADAAAAAQAGAAABGgAFAAAAAQAAAQ4BGwAFAAAAAQAAARYBKAADAAAAAQACAAACAQAEAAAAAQAAAR4CAgAEAAAAAQAAPPMAAAAAAAAASAAAAAEAAABIAAAAAf/Y/8AAEQgAnQCgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkK",
        "face-recog-cust-certificate":"/9j/4AAQSkZJRgABAQAASABIAAD/4T4bRXhpZgAATU0AKgAAAAgABgESAAMAAAABAAEAAAEaAAUAAAABAAAAVgEbAAUAAAABAAAAXgEoAAMAAAABAAIAAAITAAMAAAABAAEAAIdpAAQAAAABAAAAZgAAAMAAAABIAAAAAQAAAEgAAAABAAeQAAAHAAAABDAyMjGRAQAHAAAABAECAwCgAAAHAAAABDAxMDCgAQADAAAAAQABAACgAgAEAAAAAQAAAtCgAwAEAAAAAQAAAsSkBgADAAAAAQAAAAAAAAAAAAYBAwADAAAAAQAGAAABGgAFAAAAAQAAAQ4BGwAFAAAAAQAAARYBKAADAAAAAQACAAACAQAEAAAAAQAAAR4CAgAEAAAAAQAAPPMAAAAAAAAASAAAAAEAAABIAAAAAf/Y/8AAEQgAnQCgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkK",
        "is_feature_test": true
        }', true);

        $lrequest->replace($request_parameter);

        $header     = [];
        $content    = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);
        $content[0] = $content["status_code"];
        $content[1] = $content["body"];

        $this->assertArrayHasKey(0, $content);
        $this->assertArrayHasKey(1, $content);

        $this->assertEquals(200, $content[0]);
        $this->assertEquals(false, json_decode($content[1], true)["is_pass"]);
        $this->assertEquals("กรุณาตรวจสอบยอดค้างและติดต่อทรูช็อปเพื่อชำระค่าบริการ", json_decode($content[1], true)["message"]["th"]);
        $this->assertEquals("Please check your outstanding balance and pay at True Shop.", json_decode($content[1], true)["message"]["en"]);
    }

    public function testNotPassPreverCase6()
    {
        $url      = "verify/device_bundle_new_customer";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];

        $request_parameter = json_decode('{"id_number": "2005031811079",
        "date_birth": "03",
        "month_birth": "03",
        "year_birth": "1987",
        "product_id_list": ["L91587233"],
        "product_bundle_id": ["5ec64375ed35060001340d09"],
        "product_nas_code_list": ["0049457"],
        "face_recog_cust_capture":"/9j/4AAQSkZJRgABAQAASABIAAD/4T4bRXhpZgAATU0AKgAAAAgABgESAAMAAAABAAEAAAEaAAUAAAABAAAAVgEbAAUAAAABAAAAXgEoAAMAAAABAAIAAAITAAMAAAABAAEAAIdpAAQAAAABAAAAZgAAAMAAAABIAAAAAQAAAEgAAAABAAeQAAAHAAAABDAyMjGRAQAHAAAABAECAwCgAAAHAAAABDAxMDCgAQADAAAAAQABAACgAgAEAAAAAQAAAtCgAwAEAAAAAQAAAsSkBgADAAAAAQAAAAAAAAAAAAYBAwADAAAAAQAGAAABGgAFAAAAAQAAAQ4BGwAFAAAAAQAAARYBKAADAAAAAQACAAACAQAEAAAAAQAAAR4CAgAEAAAAAQAAPPMAAAAAAAAASAAAAAEAAABIAAAAAf/Y/8AAEQgAnQCgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkK",
        "face-recog-cust-certificate":"/9j/4AAQSkZJRgABAQAASABIAAD/4T4bRXhpZgAATU0AKgAAAAgABgESAAMAAAABAAEAAAEaAAUAAAABAAAAVgEbAAUAAAABAAAAXgEoAAMAAAABAAIAAAITAAMAAAABAAEAAIdpAAQAAAABAAAAZgAAAMAAAABIAAAAAQAAAEgAAAABAAeQAAAHAAAABDAyMjGRAQAHAAAABAECAwCgAAAHAAAABDAxMDCgAQADAAAAAQABAACgAgAEAAAAAQAAAtCgAwAEAAAAAQAAAsSkBgADAAAAAQAAAAAAAAAAAAYBAwADAAAAAQAGAAABGgAFAAAAAQAAAQ4BGwAFAAAAAQAAARYBKAADAAAAAQACAAACAQAEAAAAAQAAAR4CAgAEAAAAAQAAPPMAAAAAAAAASAAAAAEAAABIAAAAAf/Y/8AAEQgAnQCgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkK",
        "is_feature_test": true
        }', true);

        $lrequest->replace($request_parameter);

        $header     = [];
        $content    = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);
        $content[0] = $content["status_code"];
        $content[1] = $content["body"];

        $this->assertArrayHasKey(0, $content);
        $this->assertArrayHasKey(1, $content);

        $this->assertEquals(200, $content[0]);
        $this->assertEquals(false, json_decode($content[1], true)["is_pass"]);
        $this->assertEquals("กรุณาตรวจสอบยอดค้างและติดต่อทรูช็อปเพื่อชำระค่าบริการ", json_decode($content[1], true)["message"]["th"]);
        $this->assertEquals("Please check your outstanding balance and pay at True Shop.", json_decode($content[1], true)["message"]["en"]);
    }

    public function testNotPassPreverCase7()
    {
        $url      = "verify/device_bundle_new_customer";
        $method   = "post";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter = [];

        $request_parameter = json_decode('{"id_number": "4567809876552",
        "date_birth": "03",
        "month_birth": "03",
        "year_birth": "1987",
        "product_id_list": ["L91587233"],
        "product_bundle_id": ["5ec64375ed35060001340d09"],
        "product_nas_code_list": ["0049457"],
        "face_recog_cust_capture":"/9j/4AAQSkZJRgABAQAASABIAAD/4T4bRXhpZgAATU0AKgAAAAgABgESAAMAAAABAAEAAAEaAAUAAAABAAAAVgEbAAUAAAABAAAAXgEoAAMAAAABAAIAAAITAAMAAAABAAEAAIdpAAQAAAABAAAAZgAAAMAAAABIAAAAAQAAAEgAAAABAAeQAAAHAAAABDAyMjGRAQAHAAAABAECAwCgAAAHAAAABDAxMDCgAQADAAAAAQABAACgAgAEAAAAAQAAAtCgAwAEAAAAAQAAAsSkBgADAAAAAQAAAAAAAAAAAAYBAwADAAAAAQAGAAABGgAFAAAAAQAAAQ4BGwAFAAAAAQAAARYBKAADAAAAAQACAAACAQAEAAAAAQAAAR4CAgAEAAAAAQAAPPMAAAAAAAAASAAAAAEAAABIAAAAAf/Y/8AAEQgAnQCgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkK",
        "face-recog-cust-certificate":"/9j/4AAQSkZJRgABAQAASABIAAD/4T4bRXhpZgAATU0AKgAAAAgABgESAAMAAAABAAEAAAEaAAUAAAABAAAAVgEbAAUAAAABAAAAXgEoAAMAAAABAAIAAAITAAMAAAABAAEAAIdpAAQAAAABAAAAZgAAAMAAAABIAAAAAQAAAEgAAAABAAeQAAAHAAAABDAyMjGRAQAHAAAABAECAwCgAAAHAAAABDAxMDCgAQADAAAAAQABAACgAgAEAAAAAQAAAtCgAwAEAAAAAQAAAsSkBgADAAAAAQAAAAAAAAAAAAYBAwADAAAAAQAGAAABGgAFAAAAAQAAAQ4BGwAFAAAAAQAAARYBKAADAAAAAQACAAACAQAEAAAAAQAAAR4CAgAEAAAAAQAAPPMAAAAAAAAASAAAAAEAAABIAAAAAf/Y/8AAEQgAnQCgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkK",
        "is_feature_test": true
        }', true);

        $lrequest->replace($request_parameter);

        $header     = [];
        $content    = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);
        $content[0] = $content["status_code"];
        $content[1] = $content["body"];

        $this->assertArrayHasKey(0, $content);
        $this->assertArrayHasKey(1, $content);

        $this->assertEquals(200, $content[0]);
        $this->assertEquals(false, json_decode($content[1], true)["is_pass"]);
        $this->assertEquals("ขออภัย ไม่สามารถทำรายการได้ \n กรุณาติดต่อทรูช็อป", json_decode($content[1], true)["message"]["th"]);
        $this->assertEquals("Sorry, the system cannot process your request at the moment.", json_decode($content[1], true)["message"]["en"]);
    }
}
