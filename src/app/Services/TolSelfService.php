<?php
namespace App\Services;

use Exception;
use GuzzleHttp\Client;
use Illuminate\Http\Request as LaravelRequest;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Redis;

class TolSelfService
{
    public static function getHeader($type = 'default')
    {
        $header = [];
        switch ($type) {
            case "application/json":
                $header = [
                    "Content-Type"    => "application/json",
                    "x-api-key"       => env("X_API_KEY_TOL_SSV", false),
                    "APIKEY"          => env("TOL_API_KEY", false),
                    "Accept-Encoding" => 'gzip',
                    "accept"          => "*/*",
                ];

                break;

            case "application/x-www-form-urlencoded":
                $header = [
                    "Content-Type"    => "application/x-www-form-urlencoded",
                    "Accept-Encoding" => "application/gzip",
                ];

                break;

            case 'Authorization':
                $request_token        = WeOmniService::postRequestAccessToken('', 'POST', [], '');
                $request_token_decode = json_decode($request_token[1], true);
                $access_token         = array_get($request_token_decode, 'access_token', false);
                $header               = [
                    "Authorization" => "Bearer " . $access_token,
                    "Content-Type"  => "application/json",
                ];
                break;
            case 'xml':
                $header = [
                    "x-api-key"    => env('X_API_KEY_TOL_SSV', false),
                    "Content-Type" => "text/xml;charset=utf-8",
                ];
                break;
            case 'Authorization_cp_privilege':
                $request_token = SimActivationService::fetchAccessTokenCPPrivilege();
                if ($request_token[0] == 200) {
                    $access_token = array_get($request_token, '1.access_token', false);
                    $header       = [
                        "Authorization" => "Bearer " . $access_token,
                        "Content-Type"  => "application/json",
                        "x-api-key"     => env('AWS_GATEWAY_KEY', false),
                    ];
                } else {
                    $header = $request_token[1];
                }

                break;
            default:
                $header = [
                    "x-api-key"       => env('X_API_KEY_TOL_SSV', false),
                    'Accept-Encoding' => 'gzip',
                    "accept"          => "*/*",
                ];
                break;
        }

        return $header;
    }

    public static function getServiceCoverage(LaravelRequest $lrequest)
    {
        $request_input = $lrequest->input();
        $g_latitude    = array_get($request_input, 'G_LATITUDE');
        $g_longtitude  = array_get($request_input, 'G_LONGITUDE');
        $building_type = 'N';
        $house_no      = array_get($request_input, 'HOUSE_NO');
        $floor         = '';
        $room          = '';

        if (array_get($request_input, 'BUILDING_TYPE') === 'Y' || array_get($request_input, 'BUILDING_TYPE') === true) {
            $building_type = 'Y';
            $floor         = array_get($request_input, 'FLOOR');
            $room          = array_get($request_input, 'ROOM');
        }

        $url    = "tmvh/tol-ssv/get-service-coverage";
        $header = self::getHeader();

        $fixed_parameter_list = [];
        $method               = "get";

        $fixed_parameter_list = [
            'base_url'      => env("AWS_GATEWAY_URL_TOL_SSV", false) . '/',
            'G_LATITUDE'    => $g_latitude,
            'G_LONGITUDE'   => $g_longtitude,
            'BUILDING_TYPE' => $building_type,
            'HOUSE_NO'      => $house_no,
            'FLOOR'         => $floor,
            'ROOM'          => $room,
        ];

        $result = WlsService::operateRequestAction($url, $method, $lrequest, $header, $fixed_parameter_list);

        return $result;
    }

    public static function checkOtp($lrequest)
    {
        $mobile_number = $lrequest->input('mobile_number');
        $otp           = $lrequest->input('otp');

        $tmp_parameters = [
            "mobile_number" => $mobile_number,
            "otp"           => $otp,
        ];

        $check_otp = WlsService::checkForAOtp('', $lrequest, $tmp_parameters);

        if (array_get($check_otp, 'is_pass') === true) {
            $final_response = [
                200,
                [
                    'status'  => 'success',
                    'message' => [
                        'en' => 'otp check successful pass',
                        'th' => 'ตรวจสอบ otp ถูกต้อง',
                    ],
                ],
            ];
        } else {
            $final_response = [
                400,
                [
                    'status'  => 'fail',
                    'message' => [
                        'en' => 'otp check fail',
                        'th' => 'ตรวจสอบ otp ผิดพลาด',
                    ],
                ],
            ];
        }

        return $final_response;
    }

    public static function retrieveCalendars($lrequest)
    {
        $correlation_id_auth_token = $lrequest->input('correlationId');
        $url                       = "/tmvh/tol-ssv/retrieve-calendars/";
        $full_url                  = $url . $correlation_id_auth_token;
        $method                    = 'POST';
        $identity                  = $lrequest->input('_identity');
        $gis_data                  = Redis::get('tol-self-service:' . $identity);

        if ($gis_data == null) {
            $result = [
                400,
                [
                    'message' => [
                        'en' => 'No identity key relate to data.',
                        'th' => 'ไม่พบข้อมูล กรุณาลองใหม่อีกครั้ง',
                    ],
                ],
            ];
        } else {
            $gis_data         = json_decode($gis_data, true);
            $gis_data_service = [
                0 => [
                    'serviceName' => array_get($gis_data, 'service.0.SERVICE_NAME'),
                    'status'      => array_get($gis_data, 'service.0.STATUS'),
                ],
                1 => [
                    'serviceName' => array_get($gis_data, 'service.1.SERVICE_NAME'),
                    'status'      => array_get($gis_data, 'service.1.STATUS'),
                ],
                2 => [
                    'serviceName' => array_get($gis_data, 'service.2.SERVICE_NAME'),
                    'status'      => array_get($gis_data, 'service.2.STATUS'),
                ],
            ];

            $data = [
                'correlationId' => $lrequest->input('correlationId'),
                'certificateId' => $lrequest->input('certificateId'),
                'gisParams'     => [
                    'addressId'    => array_get($gis_data, 'gis_data.ADDRESS_ID'),
                    'equipmentNo'  => array_get($gis_data, 'gis_data.EQUIPMENT_NO'),
                    'buildingType' => array_get($gis_data, 'building_type'),
                    'houseNo'      => array_get($gis_data, 'gis_data.HOUSE_NO'),
                    'floor'        => array_get($gis_data, 'gis_data.FLOOR'),
                    'room'         => array_get($gis_data, 'gis_data.ROOM'),
                    'moo'          => array_get($gis_data, 'gis_data.MOO'),
                    'building'     => array_get($gis_data, 'gis_data.BUILDING'),
                    'soi'          => array_get($gis_data, 'gis_data.SOI'),
                    'subSoi'       => array_get($gis_data, 'gis_data.SUB_SOI'),
                    'street'       => array_get($gis_data, 'gis_data.STREET'),
                    'subDistrict'  => array_get($gis_data, 'gis_data.SUB_DISTRICT'),
                    'district'     => array_get($gis_data, 'gis_data.DISTRICT'),
                    'province'     => array_get($gis_data, 'gis_data.PROVINCE'),
                    'zipCode'      => array_get($gis_data, 'gis_data.ZIP_CODE'),
                    'cLatitude'    => array_get($gis_data, 'gis_data.CENTROID_LATITUDE'),
                    'cLongitude'   => array_get($gis_data, 'gis_data.CENTROID_LONGITUDE'),
                    'accessMode'   => array_get($gis_data, 'gis_data.ACCESS_MODE'),
                    'services'     => $gis_data_service,
                ],
                'qrunParams'    => array_get($gis_data, 'qrunParams'),
            ];

            $correlation_id_auth_token = $lrequest->input('correlationId');
            $header                    = self::getHeader('application/json');

            $tmp_lrequest = new \Illuminate\Http\Request();
            $tmp_lrequest->setMethod(strtoupper($method));
            $tmp_lrequest->replace($data);

            $fixed_parameter_list["base_url"] = env("AWS_GATEWAY_URL_TOL_SSV", false);

            $result = WlsService::operateRequestAction($full_url, $method, $tmp_lrequest, $header, $fixed_parameter_list);

            if (array_get($result, '0') !== 200) {
                $result = [
                    400,
                    [
                        'message' => [
                            'en' => 'Sorry, the system cannot process your request at the moment.',
                            'th' => 'ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้',
                        ],
                    ],
                ];
            }
        }

        return $result;
    }

    public static function postVerifyTolSsvBlacklistTol($lrequest)
    {
        $body = ["is_pass" => false];

        $is_pass_array    = [];
        $is_pass_array[0] = false;
        $is_pass_array[1] = false;
        $is_pass_array[2] = false;
        $is_pass_array[3] = false;

        $tmp_check_mini_step_result = ["A" => false, "B" => false, "C" => false, "D" => false, "E" => false, "F" => false, "G" => false];
        $is_enter_mini_step_result  = ["A" => false, "B" => false, "C" => false, "D" => false, "E" => false, "F" => false, "G" => false];

        $rule = [
            'id_number' => 'required',
        ];

        $tmp_input = $lrequest->all();
        // convert input data to the one we can send
        $validator = Validator::make($tmp_input, $rule);
        if ($validator->fails()) {
            $errors = ["message" => ["en" => "insufficient input", "th" => "กรุณากรอกข้อมูลให้ครบถ้วน", "error_from_system" => implode(',', $validator->errors()->all())]];

            return [400, $errors];
        }

        $id_number = $lrequest->input('id_number');

        $current_case     = 2;
        $tmp_check_result = [];

        // start of check B
        $step_name                             = "B";
        $is_enter_mini_step_result[$step_name] = true;
        $tmp_parameters                        = [
            "id_number" => $id_number,
        ];
        $tmp_check_result[$step_name]           = WlsService::checkForBBlacklistTol($step_name, $lrequest, $tmp_parameters);
        $tmp_check_mini_step_result[$step_name] = $tmp_check_result[$step_name]["is_pass"];
        if (!$tmp_check_mini_step_result[$step_name] && isset($tmp_check_result[$step_name]["failed_output"])) {
            if (!isset($body["failed_output"])) {
                $body["failed_output"] = [$step_name => $tmp_check_result[$step_name]["failed_output"]];
            } else {
                $body["failed_output"][$step_name] = $tmp_check_result[$step_name]["failed_output"];
            }
        }

        // end of check B
        if ($tmp_check_mini_step_result[$step_name]) {
            $is_pass_array[1] = true;
        }

        if ($is_pass_array[1]) {
            $body["is_pass"] = true;
        }

        if (!$is_pass_array[1] && !$tmp_check_mini_step_result["B"]) {
            $body["error_message"] = ["en" => "not pass because of blacklist check", "th" => "ไม่ผ่านเนื่องจากการตรวจสอบ blacklist"];
            if (isset($tmp_check_result["B"]["message"])) {
                $body["message"] = $tmp_check_result["B"]["message"];
            } else {
                $body["message"]       = [];
                $body["message"]["th"] = "ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้";
                $body["message"]["en"] = "Sorry, the system cannot process your request at the moment.";
            }
        } elseif (!$body["is_pass"]) {
            $body["error_message"] = ["en" => "Unable to identify verification problem, please contact callcenter", "th" => "ไม่สามารถระบุข้อผิดพลาดของการตรวจสอบได้ กรุณาติดต่อ callcenter"];
            $body["message"]       = [];
            $body["message"]["th"] = "ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้";
            $body["message"]["en"] = "Sorry, the system cannot process your request at the moment.";
        }
        $body["current_case"] = $current_case;

        if (isset($tmp_check_result)) {
            $body["tmp_check_result"] = $tmp_check_result;
        }

        $body              = json_encode($body);
        $tmp_last_big_body = [200, $body, "tmp_check_mini_step_result" => $tmp_check_mini_step_result, "is_pass_array" => $is_pass_array, "is_enter_mini_step_result" => $is_enter_mini_step_result, "current_case" => $current_case];

        return $tmp_last_big_body;
    }

    public static function registerTrueOnlineProduct($lrequest, $correlation_id_auth_token = '')
    {
        $full_url = '/tmvh/tol-ssv/register/' . $correlation_id_auth_token;
        $method   = 'POST';
        $header   = self::getHeader('application/json');

        $tmp_lrequest = new \Illuminate\Http\Request();
        $tmp_lrequest->setMethod(strtoupper($method));

        $fixed_parameter_list["base_url"] = env("AWS_GATEWAY_URL_TOL_SSV", false);

        $result = WlsService::operateRequestAction($full_url, $method, $lrequest, $header, $fixed_parameter_list);

        return $result;
    }

    public static function getAppointmentInfo($lrequest)
    {
        $url    = '/tmvh/tol-ssv/get-appointment-info';
        $method = 'POST';
        $header = self::getHeader('application/json');

        $tmp_lrequest = new \Illuminate\Http\Request();
        $tmp_lrequest->setMethod(strtoupper($method));

        $fixed_parameter_list["base_url"] = env("AWS_GATEWAY_URL_TOL_SSV", false);
        $result                           = WlsService::operateRequestAction($url, $method, $lrequest, $header, $fixed_parameter_list);

        return $result;
    }

    public static function getServiceArea($lrequest)
    {
        $get_service_coverage  = self::getServiceCoverage($lrequest);
        $service_coverage_json = json_decode(array_get($get_service_coverage, '1'), true);
        $tmp_lrequest          = new \Illuminate\Http\Request();
        $tmp_lrequest->setMethod(strtoupper('POST'));

        if (empty(array_get($service_coverage_json, 'RESULT_DATA', null))) {
            switch (array_get($service_coverage_json, 'RESULT_STATUS', null)) {
                case '002':
                    $final_response = [
                        400,
                        [
                            'message' => [
                                'en' => 'Please complete all addresses.',
                                'th' => 'กรุณาระบุที่อยู่ให้ครบถ้วน',
                            ],
                        ],
                    ];
                    break;
                case '017':
                    $final_response = [
                        400,
                        [
                            'message' => [
                                'en' => 'Sorry for your location True Online has been installed. Please contact our staff for further investigation, call 02-700-8080.',
                                'th' => 'ขออภัย พื้นที่ของคุณ มีการติดตั้งทรูออนไลน์แล้ว กรุณาติดต่อเจ้าหน้าที่เพื่อตรวจสอบเพิ่มเติม โทร 02-700-8080',
                            ],
                        ],
                    ];
                    break;
                default:
                    $final_response = [
                        400,
                        [
                            'message' => [
                                'en' => 'Sorry, the operation cannot be performed. Please contact our staff for further investigation, call 02-700-8080.',
                                'th' => 'ขออภัย ไม่สามารถดำเนินการได้ กรุณาติดต่อเจ้าหน้าที่เพื่อตรวจสอบเพิ่มเติม โทร 02-700-8080',
                            ],
                        ],
                    ];
                    break;
            }

            return $final_response;
        }
        $get_product_list_content = WeOmniService::tolProductListContent($tmp_lrequest);
        if (array_get($get_product_list_content, 0, null) !== 200) {
            return [
                400,
                [
                    'message' => [
                        'en' => 'Sorry, the system cannot process your request at the moment.',
                        'th' => 'ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้',
                    ],
                ],
            ];
        }
        $convert_result = [
            0 => 200,
            [],
        ];
        $max_upload                 = array_get($service_coverage_json, 'RESULT_DATA.0.MAX_UPLOAD_SPEED', 0);
        $max_download               = array_get($service_coverage_json, 'RESULT_DATA.0.MAX_DOWNLOAD_SPEED', 0);
        $product_list_content_array = array_get($get_product_list_content, '1', null);
        if (gettype($product_list_content_array) == 'string') {
            $product_list_content_array = json_decode($product_list_content_array, true);
        }
        foreach ($product_list_content_array as $product_item) {
            if ($max_upload >= array_get($product_item, 'product_data.upload') && $max_download >= array_get($product_item, 'product_data.download')) {
                $convert_result[1]['data'][] = $product_item;
            }
        }
        $customer_moo         = $lrequest->input('MOO');
        $customer_street_name = $lrequest->input('STREET');
        $customer_soi         = $lrequest->input('SOI');
        $customer_floor       = $lrequest->input('FLOOR');
        $customer_room        = $lrequest->input('ROOM');
        if (empty($lrequest->input('MOO')) || !$lrequest->has('MOO')) {
            $customer_moo = '-';
        }
        if (empty($lrequest->input('STREET')) || !$lrequest->has('STREET')) {
            $customer_street_name = '-';
        }
        if (empty($lrequest->input('SOI')) || !$lrequest->has('SOI')) {
            $customer_soi = '-';
        }
        if (empty($lrequest->input('FLOOR')) || !$lrequest->has('FLOOR')) {
            $customer_floor = '-';
        }
        if (empty($lrequest->input('ROOM')) || !$lrequest->has('ROOM')) {
            $customer_room = '-';
        }
        $gis_data = array_get($service_coverage_json, 'RESULT_DATA.0', 0);

        $gis_data['MOO']    = $customer_moo;
        $gis_data['STREET'] = $customer_street_name;
        $gis_data['SOI']    = $customer_soi;
        $gis_data['FLOOR']  = $customer_floor;
        $gis_data['ROOM']   = $customer_room;
        $identity           = Str::uuid()->toString();
        $correlation_id     = bin2hex(random_bytes(10));
        $certificate_id     = Str::uuid()->toString();
        Redis::set('tol-self-service:' . $identity, json_encode(
            [
                'building_type'  => $lrequest->input('BUILDING_TYPE'),
                'gis_data'       => $gis_data,
                'service'        => array_get($service_coverage_json, 'RESULT_DATA.0.SERVICES', 0),
                'qrunParams'     => [
                    'installationDate' => date("Y-m-d", strtotime("+ 2 days")),
                    'accessMode'       => array_get($service_coverage_json, 'RESULT_DATA.0.ACCESS_MODE', 0),
                    'prodSpecCode'     => 'HSI',
                    'days'             => 7,
                    'changeService'    => [
                        'prodSpecCode' => 'HSI',
                        "eventCode"    => "NEW",
                    ],
                ],
                'correlation_id' => $correlation_id,
                'certificate_id' => $certificate_id,
                'identity'       => $identity,
            ],
            true
        ), 'EX', 60 * 60 * 3);

        $convert_result[1]['_identity']     = $identity;
        $convert_result[1]['correlationId'] = $correlation_id;
        $convert_result[1]['certificateId'] = $certificate_id;

        return $convert_result;
    }

    public static function checkBlackListandPendingStatus($lrequest)
    {
        $validateIdentity = self::validateIdentity($lrequest);
        if (array_get($validateIdentity, '0') !== 200) {
            return $validateIdentity;
        }
        $tmp_lrequest = new \Illuminate\Http\Request();
        $tmp_lrequest->setMethod(strtoupper('POST'));
        $black_list_request = [
            'id_number' => $lrequest->input('id_number'),
        ];

        $tmp_lrequest = new \Illuminate\Http\Request();
        $tmp_lrequest->setMethod(strtoupper('POST'));
        $tmp_lrequest->replace($black_list_request);

        $black_list_check       = self::postVerifyTolSsvBlacklistTol($tmp_lrequest);
        $black_list_check_array = json_decode(array_get($black_list_check, '1'), true);
        if (array_get($black_list_check, '0') === 200 && array_get($black_list_check_array, 'is_pass') === true) {
            $check_tol_register = WeOmniService::tolRegisterListContent($tmp_lrequest);

            $decode_check_tol = json_decode(array_get($check_tol_register, '1'), true);
            $pending_status   = 0;
            foreach ($decode_check_tol as $item_checking) {
                if (array_get($item_checking, 'data.status') == 'pending') {
                    $pending_status += 1;
                }
            }
            if ($pending_status >= 2) {
                $final_response = [
                    400,
                    [
                        'message' => [
                            'en' => 'Sorry, we are unable to process additional True Online accounts at this time. The service you have subscribed to is waiting for installation',
                            'th' => 'ขออภัย ไม่สามารถสมัครทรูออนไลน์เพิ่มได้ในขณะนี้ เนื่องจากบริการที่คุณสมัครไว้ อยู่ระหว่างรอการติดตั้ง',
                        ],
                    ],
                ];

                return $final_response;
            }

            $final_response = self::CheckContentListRegister($lrequest);

            return $final_response;
        } else {
            $final_response = [
                400,
                [
                    'message' => [
                        'en' => 'Your Thai ID or Passport is unable to register.',
                        'th' => 'ขออภัย ไม่สามารถดำเนินการได้ อาจเกิดจากมียอดค่าบริการค้างชำระ โปรดตรวจสอบและชำระค่าบริการ(ถ้ามี) ที่ทรูช็อปหรือเคาน์เตอร์เซอร์วิส',
                    ],
                ],
            ];

            return $final_response;
        }
    }

    public static function checkContentListRegister($lrequest)
    {
        $retrieved_calendar = self::retrieveCalendars($lrequest);
        if (array_get($retrieved_calendar, '0') === 200) {
            $calendar_data = json_decode(array_get($retrieved_calendar, '1'), true);
            if (!array_get($calendar_data, 'timeSlotList')) {
                $final_response = [
                    400,
                    [
                        'message' => [
                            'en' => 'Sorry, the operation cannot be performed. Please contact our staff for further investigation, call 02-700-8080.',
                            'th' => 'ขออภัย ไม่สามารถดำเนินการได้ กรุณาติดต่อเจ้าหน้าที่เพื่อตรวจสอบเพิ่มเติม โทร 02-700-8080',
                        ],
                    ],
                ];
            } else {
                $date_9t_timestamp                  = strtotime(date("Y-m-d", strtotime("+ 9 days")));
                $time_slot_calendar                 = json_decode(array_get($retrieved_calendar, '1'), true);
                $time_slot                          = array_get($time_slot_calendar, 'timeSlotList', false);
                $time_slot_new                      = self::sortComplete($time_slot, $date_9t_timestamp, 'register');
                $time_slot_calendar['timeSlotList'] = $time_slot_new;

                $final_response = [
                    200,
                    $time_slot_calendar,
                ];
            }
        } else {
            $final_response = $retrieved_calendar;
        }

        return $final_response;
    }

    public static function registerOrder($lrequest)
    {
        $final_response   = [];
        $validateIdentity = self::validateIdentity($lrequest);
        if (array_get($validateIdentity, '0') !== 200) {
            return $validateIdentity;
        }

        $pwd                  = env("PWD_ENCRYPT_FUNCTION_DEVICE_BUNDLE");
        $id_number_encrypt    = WlsService::postEncryptDeviceBundle($pwd, $lrequest->input('id_number'));
        $mobile_phone_encrypt = WlsService::postEncryptDeviceBundle($pwd, $lrequest->input('mobilePhone'));

        $document_to_true = [
            'correlation_id' => $lrequest->input('correlationId'),
            'certificate_id' => $lrequest->input('id_number'),
            'images'         => [
                'customer_image' => $lrequest->input('ekyc.upload_picture'),
                'id_card_image'  => $lrequest->input('ekyc.upload_id_card'),
            ],
        ];

        $upload_true_document = self::uploadDocumentForTrue($document_to_true);
        if (array_get($upload_true_document, '0') !== 200) {
            $final_response = [
                400,
                [
                    'message' => [
                        'en' => 'Sorry, the operation cannot be performed. Please contact our staff for further investigation, call 02-700-8080.',
                        'th' => 'ขออภัย ไม่สามารถดำเนินการได้ กรุณาติดต่อเจ้าหน้าที่เพื่อตรวจสอบเพิ่มเติม โทร 02-700-8080',
                    ],
                ],
            ];

            return $final_response;
        }

        $images_to_save = [
            $id_number_encrypt    => $lrequest->input('ekyc.upload_id_card'),
            $mobile_phone_encrypt => $lrequest->input('ekyc.upload_picture'),
        ];
        $saved_image_result = AwsService::uploadS3Image($images_to_save);
        if (array_get($saved_image_result, '0') !== 200) {
            return $saved_image_result;
        }
        $identity   = $lrequest->input('_identity');
        $gis_data   = json_decode(Redis::get('tol-self-service:' . $identity), true);
        $product_id = [
            'content_id' => $lrequest->input('product_id'),
        ];
        $tmp_lrequest = new \Illuminate\Http\Request();
        $tmp_lrequest->setMethod(strtoupper('GET'));
        $tmp_lrequest->replace($product_id);

        $get_product_data = WeOmniService::tolProductListContentwithContentId($tmp_lrequest);
        if (array_get($get_product_data, '0') === 200) {
            $get_product_data_array = json_decode(array_get($get_product_data, '1'), true);
        } else {
            $final_response = [
                400,
                'message' => [
                    'en' => 'Can not fetch product from server.',
                    'th' => 'ไม่สามารถดึงข้อมูลสินค้าจากระบบได้',
                ],
            ];

            return $final_response;
        }

        if ($lrequest->input('customerContactList.billMediaInfo.billMedia') == 'E' || $lrequest->input('customerContactList.billMediaInfo.billMedia') == 'PE') {
            $billMediaInfo = [
                "billMedia"    => $lrequest->input('customerContactList.billMediaInfo.billMedia'),
                'email'        => $lrequest->input('customerContactList.billMediaInfo.email'),
                "billLanguage" => $lrequest->input('customerContactList.billMediaInfo.billLanguage'),
            ];
        } elseif ($lrequest->input('customerContactList.billMediaInfo.billMedia') == 'S' || $lrequest->input('customerContactList.billMediaInfo.billMedia') == 'PS') {
            $billMediaInfo = [
                "billMedia"    => $lrequest->input('customerContactList.billMediaInfo.billMedia'),
                "telNumber"    => $lrequest->input('customerContactList.billMediaInfo.telNumber'),
                "billLanguage" => $lrequest->input('customerContactList.billMediaInfo.billLanguage'),
            ];
        } else {
            $billMediaInfo = [
                "billMedia"    => $lrequest->input('customerContactList.billMediaInfo.billMedia'),
                'email'        => $lrequest->input('customerContactList.billMediaInfo.email'),
                "telNumber"    => $lrequest->input('customerContactList.billMediaInfo.telNumber'),
                "billLanguage" => $lrequest->input('customerContactList.billMediaInfo.billLanguage'),
            ];
        }

        if (array_get($get_product_data_array, 'data.feature_code') == '3POTT') {
            $element_list = [
                [
                    "product"  => array_get($get_product_data_array, 'data.service_code'),
                    "quantity" => '1',
                ],
                [
                    'product'  => array_get($get_product_data_array, 'data.feature_code'),
                    'quantity' => '1',
                ],
                [
                    "product"   => "FXFL",
                    "quantity"  => "1",
                    "paramList" => [
                        [
                            "name"  => "Number of Voice",
                            "value" => "0",
                        ],
                    ],
                ],
                [
                    "product"  => "GPONMRF",
                    "quantity" => "1",
                ],
                [
                    "product"  => "TAIN",
                    "quantity" => "1",
                ],
                [
                    "product"   => array_get($get_product_data_array, 'data.entry_fee'),
                    "quantity"  => "1",
                    "paramList" => [
                        [
                            "name"  => "Contract End Date",
                            "value" => "12M",
                        ],
                    ],
                ],
                [
                    "product"   => array_get($get_product_data_array, 'data.contract_code'),
                    "quantity"  => "1",
                    "paramList" => [
                        [
                            "name"  => "Contract End Date",
                            "value" => "12M",
                        ],
                    ],
                ],
                [
                    "product"   => "TOLENTRY",
                    "quantity"  => "1",
                    "paramList" => [
                        [
                            "name"  => "Entry Fee",
                            "value" => array_get($get_product_data_array, 'data.tol_entry_fee'),
                        ],
                    ],
                ],
            ];
        } else {
            $element_list = [
                [
                    "product"  => array_get($get_product_data_array, 'data.service_code'),
                    "quantity" => '1',
                ],
                [
                    "product"   => "FXFL",
                    "quantity"  => "1",
                    "paramList" => [
                        [
                            "name"  => "Number of Voice",
                            "value" => "0",
                        ],
                    ],
                ],
                [
                    "product"  => "GPONMRF",
                    "quantity" => "1",
                ],
                [
                    "product"  => "TAIN",
                    "quantity" => "1",
                ],
                [
                    "product"   => array_get($get_product_data_array, 'data.entry_fee'),
                    "quantity"  => "1",
                    "paramList" => [
                        [
                            "name"  => "Contract End Date",
                            "value" => "24M",
                        ],
                    ],
                ],
                [
                    "product"   => array_get($get_product_data_array, 'data.contract_code'),
                    "quantity"  => "1",
                    "paramList" => [
                        [
                            "name"  => "Contract End Date",
                            "value" => "24M",
                        ],
                    ],
                ],
                [
                    "product"   => "TOLENTRY",
                    "quantity"  => "1",
                    "paramList" => [
                        [
                            "name"  => "Entry Fee",
                            "value" => array_get($get_product_data_array, 'data.tol_entry_fee'),
                        ],
                    ],
                ],
            ];

            if (!empty(array_get($get_product_data_array, 'data.feature_code'))) {
                $element_list[] = [
                    'product'  => array_get($get_product_data_array, 'data.feature_code'),
                    'quantity' => '1',
                ];
            }
        }

        $current_birth_date  = $lrequest->input('customerGeneralInfo.birthDate');
        $year                = explode('-', explode('T', $current_birth_date)[0])[2];
        $month               = explode('-', explode('T', $current_birth_date)[0])[1];
        $day                 = explode('-', explode('T', $current_birth_date)[0])[0];
        $converted_birthdate = ($year . '/' . $month . '/' . $day);

        $problem_description = '-';
        if (array_get($get_product_data_array, 'data.package_description') != null) {
            $problem_description = array_get($get_product_data_array, 'data.package_description');
        }

        $id_type = 'ID';
        if ($lrequest->input('customerGeneralInfo.identificationType') == 'P') {
            $id_type = 'PS';
        }

        // Add camp id to clm_data
        $clm_identity   = $lrequest->input('clm_upsell');
        $clm_data       = null;
        $is_found_offer = false;

        if ($clm_identity != null) {
            $clm_verify_data = Redis::get('truestore:clm_upsell:identity:' . $clm_identity . ':verify_data');
            if ($clm_verify_data != null) {
                $clm_data           = json_decode($clm_verify_data, true);
                $clm_offerbean_data = [];
                $mkt_code           = array_get($get_product_data_array, 'data.mkt_code');

                foreach (array_get($clm_data, 'clm_data.offeringBeanList', []) as $offeringBean) {
                    if (array_get($offeringBean, 'mktCode') == $mkt_code) {
                        $is_found_offer     = true;
                        $clm_offerbean_data = [
                            'offeringID'      => array_get($offeringBean, 'campOfferingID'),
                            'propositionCode' => array_get($offeringBean, 'propositionCode', ''),
                            'pricePlanCode'   => array_get($offeringBean, 'pricePlanCode', ''),
                            'nasCode'         => array_get($offeringBean, 'nasCode', ''),
                            'vasCode'         => array_get($offeringBean, 'vasCode', ''),
                            'mktCode'         => array_get($offeringBean, 'mktCode', ''),
                            'socCode'         => array_get($offeringBean, 'socCode', ''),
                            'cvgCode'         => array_get($offeringBean, 'cvgCode', ''),
                            'promoCode'       => array_get($offeringBean, 'promoCode', ''),
                            'campaignCode'    => array_get($offeringBean, 'campaignCode', ''),
                        ];
                    }
                }
            }
        }

        $front_end_form = [
            "correlationId" => $lrequest->input('correlationId'),
            "certificateId" => $lrequest->input('id_number'),
            "qrunParams"    => [
                'addressId'       => array_get($gis_data, 'gis_data.ADDRESS_ID'),
                'accessMode'      => array_get($gis_data, 'gis_data.ACCESS_MODE'),
                "appointmentDate" => $lrequest->input('appointmentDate'),
                "timeSlot"        => $lrequest->input('timeSlot'),
                'prodSpecCode'    => array_get($gis_data, 'qrunParams.prodSpecCode'),
                'changeService'   => [array_get($gis_data, 'qrunParams.changeService')],
                'ulRate'          => array_get($gis_data, 'gis_data.MAX_UPLOAD_SPEED'),
                'dlRate'          => array_get($gis_data, 'gis_data.MAX_DOWNLOAD_SPEED'),
            ],
            "omxParams"     => [
                "order" => [
                    "media"        => array_get($get_product_data_array, 'data.media'),
                    "createDate"   => date('Y-m-d') . "T00:00:00Z",
                    "subType"      => "SID",
                    "productList"  => [
                        [
                            "appointmentDate"     => $lrequest->input('appointmentDate') . "T00:00:00Z",
                            "appointmentTimeSlot" => $lrequest->input('timeSlot'),
                            "serviceActivateDate" => date('Y-m-d') . "T00:00:00Z",
                            "customerContactList" => [
                                "title"       => "T0037",
                                "name"        => $lrequest->input('customerContactList.firstname'),
                                "lastname"    => $lrequest->input('customerContactList.lastname'),
                                "mobilePhone" => $lrequest->input('mobilePhone'),
                            ],
                            "product"             => [
                                "productType"       => "TOL",
                                "productCode"       => "HSI",
                                "speed"             => array_get($gis_data, 'gis_data.MAX_UPLOAD_SPEED'),
                                "productAddressId"  => array_get($gis_data, 'gis_data.ADDRESS_ID'),
                                "serviceName"       => [
                                    'title'    => "T0037",
                                    'name'     => $lrequest->input('customerContactList.firstname'),
                                    'lastname' => $lrequest->input('customerContactList.lastname'),
                                ],
                                "serviceAddress"    => [
                                    "amphur"     => array_get($gis_data, 'gis_data.DISTRICT'),
                                    "city"       => array_get($gis_data, 'gis_data.PROVINCE'),
                                    "houseNo"    => array_get($gis_data, 'gis_data.HOUSE_NO'),
                                    "moo"        => array_get($gis_data, 'gis_data.MOO'),
                                    "streetName" => array_get($gis_data, 'gis_data.STREET'),
                                    "tumbon"     => array_get($gis_data, 'gis_data.SUB_DISTRICT'),
                                    "zip"        => array_get($gis_data, 'gis_data.ZIP_CODE'),
                                ],
                                "billingName"       => $lrequest->input('customerContactList.billingName'),
                                "billingAddress"    => $lrequest->input('customerContactList.billingAddress'),
                                "taxName"           => $lrequest->input('customerContactList.taxName'),
                                "taxAddress"        => $lrequest->input('customerContactList.taxAddress'),
                                "propertyList"      => [
                                    [
                                        "name"  => "installModemFlag",
                                        "value" => "Y",
                                    ],
                                    [
                                        "name"  => "marketingCode",
                                        "value" => array_get($get_product_data_array, 'data.mkt_code'),
                                    ],
                                    [
                                        "name"  => "promotion",
                                        "value" => array_get($get_product_data_array, 'data.mkt_code'),
                                    ],
                                    [
                                        "name"  => "idType",
                                        "value" => $id_type,
                                    ],
                                    [
                                        "name"  => "accountSubType",
                                        "value" => "RES",
                                    ],
                                    [
                                        "name"  => "accountCat",
                                        "value" => "RES",
                                    ],
                                ],
                                'discountList'      => [
                                    [
                                        "discountCode" => "",
                                    ],
                                ],
                                "elementList"       => $element_list,
                                "paymentMethodInfo" => [
                                    "paymentMethod" => "CA",
                                ],
                                "billMediaInfo"     => $billMediaInfo,
                                "serviceType"       => "TRUFTTX",
                                "serviceTypeId"     => "1-23FBL0N",
                            ],
                        ],
                    ],
                    "customer"     => [
                        "refId"               => $lrequest->input('correlationId'),
                        "customerAddress"     => [
                            "amphur"             => array_get($gis_data, 'gis_data.DISTRICT'),
                            "city"               => array_get($gis_data, 'gis_data.PROVINCE'),
                            "houseNo"            => array_get($gis_data, 'gis_data.HOUSE_NO'),
                            "streetName"         => array_get($gis_data, 'gis_data.STREET'),
                            "timeAtAddress"      => "0101",
                            "tumbon"             => array_get($gis_data, 'gis_data.SUB_DISTRICT'),
                            "typeOfAccomodation" => "NOT",
                            "zip"                => array_get($gis_data, 'gis_data.ZIP_CODE'),
                        ],
                        "customerGeneralInfo" => $lrequest->input('customerGeneralInfo'),
                        "customerIndyName"    => $lrequest->input('customerContactList.customerIndyName'),
                    ],
                    "extendedInfo" => [
                        [
                            "name"  => "equipmentNo",
                            "value" => array_get($gis_data, 'gis_data.EQUIPMENT_NO'),
                        ],
                    ],
                ],
            ],
        ];

        // add field when have feature code
        if (!empty(array_get($get_product_data_array, 'data.feature_code'))) {
            $front_end_form['omxParams']['order']['convergenceCode'] = array_get($get_product_data_array, 'data.feature_code');
            $front_end_form['omxParams']['order']['productList'][]   = [
                "appointmentDate"     => $lrequest->input('appointmentDate') . "T00:00:00Z",
                "appointmentTimeSlot" => $lrequest->input('timeSlot'),
                "serviceActivateDate" => date('Y-m-d') . "T00:00:00Z",
                "processParamList"    => [
                    [
                        'name'  => 'billMedia',
                        'value' => 'EM',
                    ],
                    [
                        'name'  => 'birthDate',
                        'value' => $converted_birthdate,
                    ],
                    [
                        'name'  => 'problemDesc',
                        'value' => $problem_description,
                    ],
                    [
                        'name'  => 'point',
                        'value' => array_get($get_product_data_array, 'data.point_available'),
                    ],
                    [
                        'name'  => 'sofwareCPPrd',
                        'value' => array_get($get_product_data_array, 'data.cp_id'),
                    ],
                    [
                        'name'  => 'tvsPromotionId',
                        'value' => array_get($get_product_data_array, 'data.promotion_id'),
                    ],
                ],
                "customerContactList" => [
                    "title"       => "T0037",
                    "name"        => $lrequest->input('customerContactList.firstname'),
                    "lastname"    => $lrequest->input('customerContactList.lastname'),
                    "mobilePhone" => $lrequest->input('mobilePhone'),
                ],
                "product"             => [
                    "productType"       => "TVS",
                    "productCode"       => "FIBERTV",
                    "speed"             => array_get($gis_data, 'gis_data.MAX_UPLOAD_SPEED'),
                    "productAddressId"  => array_get($gis_data, 'gis_data.ADDRESS_ID'),
                    "serviceName"       => [
                        'title'    => "T0037",
                        'name'     => $lrequest->input('customerContactList.firstname'),
                        'lastname' => $lrequest->input('customerContactList.lastname'),
                    ],
                    "serviceAddress"    => [
                        "amphur"     => array_get($gis_data, 'gis_data.DISTRICT'),
                        "city"       => array_get($gis_data, 'gis_data.PROVINCE'),
                        "houseNo"    => array_get($gis_data, 'gis_data.HOUSE_NO'),
                        "moo"        => array_get($gis_data, 'gis_data.MOO'),
                        "streetName" => array_get($gis_data, 'gis_data.STREET'),
                        "tumbon"     => array_get($gis_data, 'gis_data.SUB_DISTRICT'),
                        "zip"        => array_get($gis_data, 'gis_data.ZIP_CODE'),
                    ],
                    "billingName"       => $lrequest->input('customerContactList.billingName'),
                    "billingAddress"    => $lrequest->input('customerContactList.billingAddress'),
                    "taxName"           => $lrequest->input('customerContactList.taxName'),
                    "taxAddress"        => $lrequest->input('customerContactList.taxAddress'),
                    'discountList'      => [
                        [
                            "discountCode" => "",
                        ],
                    ],
                    "paymentMethodInfo" => [
                        "paymentMethod" => "CA",
                    ],
                    "billMediaInfo"     => $billMediaInfo,
                ],
            ];
        }

        // add CLM data to TOL register
        if ($is_found_offer) {
            $front_end_form['omxParams']['order']['extendedInfo'][] = [
                "name"  => "CLM_Source",
                "value" => "SMS",
            ];
            $front_end_form['clmParams'] = [
                "campaignId"        => array_get($clm_data, 'clm_data.campaignId', ''),
                "campTransID"       => array_get($clm_data, 'clm_data.campTransID', ''),
                "currentCampaignID" => "",
                "offerBeanList"     => $clm_offerbean_data,
            ];
        }

        $tmp_lrequest = new \Illuminate\Http\Request();
        $tmp_lrequest->setMethod(strtoupper('POST'));
        $tmp_lrequest->replace($front_end_form);

        try {
            $place_order = self::registerTrueOnlineProduct($tmp_lrequest, $lrequest->input('correlationId'));

            LogService::writeServiceLog(
                "register_order",
                json_encode_unicode($tmp_lrequest->all()),
                array_get($place_order, '1'),
                (new \DateTime())->format('d/m/Y H:i:s')
            );

            LogService::writeServiceLog(
                "register_order_clm",
                json_encode_unicode([
                    'clm_data' => [
                        'offeringBeanList' => array_get($clm_data, 'clm_data.offeringBeanList', []),
                        'mktCode'          => array_get($get_product_data_array, 'data.mkt_code')
                    ],
                ]),
                array_get($place_order, '1'),
                (new \DateTime())->format('d/m/Y H:i:s')
            );
        } catch (\Exception $error) {
            LogService::writeServiceLog(
                "register_order",
                json_encode_unicode($tmp_lrequest->all()),
                json_encode_unicode($error->getMessage()),
                (new \DateTime())->format('d/m/Y H:i:s')
            );

            return [
                400,
                [
                    'message' => [
                        'en' => 'Unable to place order to weomni',
                        'th' => 'ไม่สามารถลงทะเบียนสินค้า/บริการ ลง weomni ได้',
                    ],
                ],
            ];
        }

        if (array_get($place_order, '0') == 200) {
            $place_order_json_data = json_decode(array_get($place_order, '1'), true);

            ElsaService::createElsaLoggerTOLOrderFormat($lrequest->all(), json_decode(array_get($get_product_data, '1', []), true), $gis_data, $place_order_json_data);

            $place_order_weomni_object = [
                'data' => [
                    'code'               => array_get($place_order_json_data, 'code'),
                    'description'        => array_get($place_order_json_data, 'description'),
                    'correlation_id'     => array_get($place_order_json_data, 'correlationId'),
                    '3gw_tracking_id'    => array_get($place_order_json_data, '3gwTrackingId'),
                    'res_reservation_id' => array_get($place_order_json_data, 'resReservationId'),
                    'wf_reservation_id'  => array_get($place_order_json_data, 'wfReservationId'),
                    'omx_tracking_id'    => array_get($place_order_json_data, 'omxTrackingId'),
                    'id_card'            => $id_number_encrypt,
                    'mobile_number'      => $mobile_phone_encrypt,
                    'status'             => 'pending',
                    'access_mode'        => array_get($gis_data, 'gis_data.ACCESS_MODE'),
                    'media'              => array_get($gis_data, 'gis_data.ACCESS_MODE'),
                    'crm_flag'           => 'Y',
                    'name'               => $lrequest->input('customerContactList.firstname'),
                    'lastname'           => $lrequest->input('customerContactList.lastname'),
                    'address_id'         => array_get($gis_data, 'gis_data.ADDRESS_ID'),
                    'product_list'       => json_encode(array_get($place_order_json_data, 'productList'), true),
                ],
            ];

            // add camp_id to WLS Register
            if ($is_found_offer) {
                $place_order_weomni_object['data']['camp_id'] = array_get($clm_data, 'input.camp_id');
            }

            $tmp_lrequest_register_content = new \Illuminate\Http\Request();
            $tmp_lrequest_register_content->setMethod(strtoupper('POST'));
            $tmp_lrequest_register_content->replace($place_order_weomni_object);

            $place_order_weomni = WeOmniService::tolRegisterCreateContent($tmp_lrequest_register_content);

            if (array_get($place_order_weomni, '0') == 200 || array_get($place_order_weomni, '0') == 201) {
                if (env("IS_SMTP_ALLOWED", true)) {
                    $email_data = [
                        'order_no'  => array_get($place_order_json_data, 'wfReservationId'),
                        'product'   => [
                            'description_th' => array_get($get_product_data_array, 'data.description_th'),
                            'image_url'      => array_get($get_product_data_array, 'data.description_image.url'),
                            'price'          => array_get($get_product_data_array, 'data.price'),
                        ],
                        'user_data' => [
                            'firstname' => $lrequest->input('customerContactList.firstname'),
                            'lastname'  => $lrequest->input('customerContactList.lastname'),
                            'address'   => array_get($gis_data, 'gis_data.HOUSE_NO') . ' ' . array_get($gis_data, 'gis_data.STREET') . ' ' . array_get($gis_data, 'gis_data.MOO') . ' ' . array_get($gis_data, 'gis_data.SOI') . ' ' . array_get($gis_data, 'gis_data.SUB_DISTRICT') . ' ' . array_get($gis_data, 'gis_data.DISTRICT') . ' ' . array_get($gis_data, 'gis_data.PROVINCE') . ' ' . array_get($gis_data, 'gis_data.ZIP_CODE'),
                        ],
                    ];
                    try {
                        $email = EmailService::sendEmail('tol-email', [
                            'subject' => 'Payment Successful: หมายเลขการสั่งจอง ' . $email_data['order_no'],
                            'to'      => $lrequest->input('customerContactList.billMediaInfo.email'),
                            'data'    => $email_data,
                        ],
                            env('EMAIL_TOL_FROM'),
                            env('NAME_TOL_FROM'));
                    } catch (\Exception $error) {
                        LogService::writeServiceLog(
                            "email_service",
                            json_encode_unicode($tmp_lrequest->all()),
                            json_encode_unicode($error->getMessage()),
                            (new \DateTime())->format('d/m/Y H:i:s')
                        );
                    }
                }

                $final_response = [
                    200,
                    [
                        'status'      => 'success',
                        'status_code' => 200,
                        'message'     => 'create placeorder successful.',
                        'order_id'    => array_get($place_order_json_data, 'wfReservationId'),
                        'clm_data'    => [
                            'is_found_offer'   => $is_found_offer,
                            'offeringBeanList' => array_get($clm_data, 'clm_data.offeringBeanList', []),
                            'mktCode'          => array_get($get_product_data_array, 'data.mkt_code')
                        ],
                    ],
                ];
                Redis::del('tol-self-service:' . $identity);
            } else {
                $final_response = [
                    400,
                    [
                        'message' => [
                            'en' => 'Unable to place order to weomni',
                            'th' => 'ไม่สามารถลงทะเบียนสินค้า/บริการ ลง weomni ได้',
                        ],
                    ],
                ];
            }
        } else {
            LogService::writeServiceLog(
                "register_order_fail",
                json_encode_unicode($tmp_lrequest->all()),
                array_get($place_order, '1'),
                (new \DateTime())->format('d/m/Y H:i:s')
            );
            $final_response = [
                400,
                [
                    'message' => [
                        'en' => 'Unable to place order',
                        'th' => 'ไม่สามารถลงทะเบียนสินค้า/บริการได้',
                    ],
                ],
            ];
        }

        return $final_response;
    }

    public static function checkCustomerAppointment($lrequest)
    {
        $pwd                          = env("PWD_ENCRYPT_FUNCTION_DEVICE_BUNDLE");
        $id_number_encrypt            = WlsService::postEncryptDeviceBundle($pwd, $lrequest->input('id_number'));
        $mobile_phone_encrypt         = WlsService::postEncryptDeviceBundle($pwd, $lrequest->input('phone_number'));
        $available_appointment        = [];
        $available_appointment_status = false;
        $list_create_customer         = WeOmniService::tolRegisterListContent($lrequest);
        if (array_get($list_create_customer, '0') == 200) {
            $list_create_customer_data = json_decode(array_get($list_create_customer, '1'), true);
            foreach ($list_create_customer_data as $item) {
                if ($id_number_encrypt == array_get($item, 'data.id_card', 0) && $mobile_phone_encrypt == array_get($item, 'data.mobile_number', 0)) {
                    $item['id_number']            = $lrequest->input('id_number');
                    $item['phone_number']         = $lrequest->input('phone_number');
                    $item['id_number_encrypt']    = $id_number_encrypt;
                    $item['mobile_phone_encrypt'] = $mobile_phone_encrypt;
                    $available_appointment[]      = $item;
                    $available_appointment_status = true;
                }
            }
            if ($available_appointment_status !== false) {
                $identity = Str::uuid()->toString();
                Redis::set('tol-self-service-customer-register:' . $identity, json_encode($available_appointment, true), 'EX', 60 * 60 * 2);

                $final_response = [
                    200,
                    [
                        'status'      => 'success',
                        'status_code' => 200,
                        'data'        => $available_appointment,
                        '_identity'   => $identity,
                    ],
                ];
            } else {
                $final_response = [
                    200,
                    [
                        'status'      => 'fail',
                        'status_code' => 400,
                        'message'     => [
                            'en' => 'No customer registeration in database.',
                            'th' => 'ไม่พบการลงทะเบียนในระบบ',
                        ],
                    ],
                ];
            }
        } else {
            $final_response = [
                400,
                [
                    'message' => [
                        'en' => 'server is not available, Connection is loss.',
                        'th' => 'มีปัญหาที่การเชื่อมต่อระบบ.',
                    ],
                ],
            ];
        }

        return $final_response;
    }

    public static function customerAppointmentInfo($lrequest)
    {
        $identity           = $lrequest->input('_identity');
        $customer_list_info = json_decode(Redis::get('tol-self-service-customer-register:' . $identity), true);
        $appoint_list       = [
            'canChangeAppiontmentList' => [],
            'appointmentTimeSlot'      => [],
        ];

        try {
            foreach ($customer_list_info as $item) {
                $old_timeslot      = [];
                $recent_status     = array_get($item, 'data.status', 'pending');
                $product_list_data = json_decode(array_get($item, 'data.product_list'), true);
                if ($product_list_data == null) {
                    continue;
                }
                $product_list_data_item = [];
                foreach ($product_list_data as $item_product_list) {
                    if (array_get($item_product_list, 'productOrderId') != null) {
                        $product_list_data_item[] = array_get($item_product_list, 'productOrderId');
                    }
                }
                $data = [
                    'correlatedId'           => array_get($item, 'data.omx_tracking_id'),
                    'customerOrderNumber'    => array_get($item, 'data.correlation_id'),
                    'productOrderNumberList' => $product_list_data_item,
                ];

                $tmp_lrequest = new \Illuminate\Http\Request();
                $tmp_lrequest->setMethod(strtoupper('POST'));
                $tmp_lrequest->replace($data);

                try {
                    $result = self::getAppointmentInfo($tmp_lrequest);
                } catch (\Exception $error) {
                    $message_id      = Str::uuid()->toString();
                    $log_message_str = "message_id = $message_id, body: " . json_encode_unicode($tmp_lrequest->all());
                    LogService::writeActionLog($lrequest, $log_message_str);

                    return [
                        400,
                        [
                            'message' => [
                                'en'   => 'Cannot change due date',
                                'th'   => 'ไม่มีข้อมูลสำหรับการ change due date',
                                'step' => '1',
                            ],
                        ],
                    ];
                }
                if (array_get($result, '0') !== 200) {
                    $final_response = [
                        400,
                        [
                            'message' => [
                                'en'   => 'Cannot change due date',
                                'th'   => 'ไม่มีข้อมูลสำหรับการ change due date',
                                'step' => '2',
                            ],
                        ],
                    ];

                    return $final_response;
                }

                $result_array = json_decode(array_get($result, '1'), true);

                if ((array_get($item, 'data.status') == 'completed')
                    && !array_get($result_array, 'appointmentTimeSlot', null) == null
                ) {
                    $old_timeslot                          = array_get($result_array, 'appointmentTimeSlot');
                    $convert_time                          = explode('T', array_get($old_timeslot, 'appointmentDate'))[0];
                    $old_timeslot['appointmentDate']       = $convert_time;
                    $old_timeslot['register_id']           = array_get($item, 'id');
                    $appoint_list['appointmentTimeSlot'][] = $old_timeslot;
                    continue;
                } elseif (array_get($item, 'data.status') == 'pending') {
                    $recheck_status_json = self::getEnquiryStatus(array_get($item, 'data.omx_tracking_id'));
                    if (array_get($recheck_status_json, '0') !== 200) {
                        return [
                            400,
                            [
                                'message' => [
                                    'en' => 'failed to update enquiry status',
                                    'th' => 'อัพเดทสถานะของ enquiry status ไม่สำเร็จ',
                                ],
                            ],
                        ];
                    }
                    $recheck_status = json_decode(array_get($recheck_status_json, '1'), true);
                    $recent_status  = array_get($recheck_status, 'orderStatus', 'pending');
                    if ($recent_status == 'COMPLETED') {
                        $old_timeslot                          = array_get($result_array, 'appointmentTimeSlot');
                        $convert_time                          = explode('T', array_get($old_timeslot, 'appointmentDate'))[0];
                        $old_timeslot['appointmentDate']       = $convert_time;
                        $old_timeslot['register_id']           = array_get($item, 'id');
                        $appoint_list['appointmentTimeSlot'][] = $old_timeslot;
                        continue;
                    }
                }

                if (array_get($result_array, 'canChangeAppiontmentList', null) == null && array_get($result_array, 'appointmentTimeSlot', null) == null) {
                    continue;
                }

                $old_timeslot                    = array_get($result_array, 'appointmentTimeSlot');
                $convert_time                    = explode('T', array_get($old_timeslot, 'appointmentDate'))[0];
                $old_timeslot['appointmentDate'] = $convert_time;
                $can_change                      = 'Y';

                $status_text            = self::statusTOLMapping($recent_status);
                $old_timeslot['status'] = $status_text;

                foreach (array_get($result_array, 'canChangeAppiontmentList.canChangeAppointmentInfoArray') as $item_can_list) {
                    if (array_get($item_can_list, 'canChangeFlag', null) == 'N') {
                        $can_change = 'N';
                    }
                }

                if ($can_change === 'N') {
                    $old_timeslot['register_id']           = array_get($item, 'id');
                    $appoint_list['appointmentTimeSlot'][] = $old_timeslot;
                } else {
                    $old_timeslot['register_id']                = array_get($item, 'id');
                    $appoint_list['canChangeAppiontmentList'][] = $old_timeslot;
                }
            }
        } catch (\Exception $error) {
            return [
                400,
                [
                    'message' => [
                        'en'   => 'Cannot change due date',
                        'th'   => 'ไม่มีข้อมูลสำหรับการ change due date',
                        'step' => '3',
                    ],
                ],
            ];
        }

        if (!array_get($appoint_list, 'canChangeAppiontmentList') && !array_get($appoint_list, 'appointmentTimeSlot')) {
            return [
                400,
                [
                    'message' => [
                        'en'   => 'Cannot change due date',
                        'th'   => 'ไม่มีข้อมูลสำหรับการ change due date',
                        'step' => '4',
                    ],
                ],
            ];
        }
        $final_response = [
            200,
            [
                'canChangeAppiontmentList' => array_get($appoint_list, 'canChangeAppiontmentList'),
                'appointmentTimeSlot'      => array_get($appoint_list, 'appointmentTimeSlot'),
                'first_name'               => array_get($customer_list_info, '0.data.name', null),
                'last_name'                => array_get($customer_list_info, '0.data.lastname', null),
            ],
        ];

        return $final_response;
    }

    public static function validateIdentity($lrequest)
    {
        $identity       = $lrequest->input('_identity');
        $correlation_id = $lrequest->input('correlationId');
        $certificate_id = $lrequest->input('certificateId');
        if (Redis::get('tol-self-service:' . $identity) == null) {
            return [
                400,
                [
                    'message' => [
                        'en' => 'Sorry, the system cannot process your request at the moment.',
                        'th' => 'ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้',
                    ],
                ],
            ];
        }
        $data_to_validate = json_decode(Redis::get('tol-self-service:' . $identity), true);
        if (array_get($data_to_validate, 'correlation_id') != $correlation_id || array_get($data_to_validate, 'certificate_id') != $certificate_id) {
            return [
                400,
                [
                    'message' => [
                        'en' => 'authecation is invalide.',
                        'th' => 'authecation is invalide.',
                    ],
                ],
            ];
        }

        return [
            200,
            [
                'message' => [
                    'en' => 'pass',
                    'th' => 'ผ่าน',
                ],
            ],
        ];
    }

    public static function getAddressforRegister($lrequest)
    {
        $validateIdentity = self::validateIdentity($lrequest);
        if (array_get($validateIdentity, '0') !== 200) {
            return $validateIdentity;
        }
        $identity      = $lrequest->input('_identity');
        $gis_data      = json_decode(Redis::get('tol-self-service:' . $identity), true);
        $coverage_data = array_get($gis_data, 'gis_data');

        return [200, $coverage_data];
    }

    public static function getEnquiryStatus($omx_tracking_id)
    {
        $url          = "tmvh/tol-ssv/get-enquiry-order-status";
        $header       = self::getHeader();
        $method       = "GET";
        $tmp_lrequest = new \Illuminate\Http\Request();
        $tmp_lrequest->setMethod(strtoupper($method));
        $tmp_lrequest->replace([]);

        $fixed_parameter_list = [
            'base_url'        => env("AWS_GATEWAY_URL_TOL_SSV", false) . '/',
            'product'         => 'tol',
            'omx_tracking_id' => $omx_tracking_id,
        ];

        $result = WlsService::operateRequestAction($url, $method, $tmp_lrequest, $header, $fixed_parameter_list);

        return $result;
    }

    public static function checkInstallationStatus($lrequest)
    {
        $identity               = $lrequest->input('_identity');
        $check_otp              = self::checkOtp($lrequest);
        $method                 = "GET";
        $list_register_customer = json_decode(Redis::get('tol-self-service-customer-register:' . $identity), true);

        if (array_get($check_otp, '0') != 200) {
            $final_response = [
                400,
                [
                    'message' => [
                        'en' => 'failed to verify otp',
                        'th' => 'ยืนยัน otp และช้อมูลสำเร็จ',
                    ],
                ],
            ];

            return $final_response;
        }

        try {
            foreach ($list_register_customer as $item) {
                try {
                    $result = self::getEnquiryStatus(array_get($item, 'data.omx_tracking_id'));
                } catch (\Exception $error) {
                    $message_id      = Str::uuid()->toString();
                    $log_message_str = "message_id = $message_id, body: " . json_encode_unicode($lrequest->all());
                    LogService::writeActionLog($lrequest, $log_message_str);

                    return [
                        400,
                        [
                            'message' => [
                                'en' => 'failed to update enquiry status',
                                'th' => 'อัพเดทสถานะของ enquiry status ไม่สำเร็จ',
                            ],
                        ],
                    ];
                }
                if (array_get($result, '0') !== 200) {
                    $final_response = [
                        400,
                        [
                            'message' => [
                                'en' => 'failed to update enquiry status',
                                'th' => 'อัพเดทสถานะของ enquiry status ไม่สำเร็จ',
                            ],
                        ],
                    ];

                    return $final_response;
                }

                $result_data          = json_decode(array_get($result, '1'), true);
                $order_status_enquiry = '';
                switch (array_get($result_data, 'orderStatus', 'pending')) {
                    case 'COMPLETED':
                        $order_status_enquiry = 'completed';
                        break;
                    case 'CANCEL':
                        $order_status_enquiry = 'cancelled';
                        break;
                    case 'CANCELLED':
                        $order_status_enquiry = 'cancelled';
                        break;
                    case 'FAILED':
                        $order_status_enquiry = 'fail';
                        break;
                    case 'FAIL':
                        $order_status_enquiry = 'fail';
                        break;
                    default:
                        $order_status_enquiry = 'pending';
                        break;
                }

                $content_id          = array_get($item, 'id');
                $update_tol_register = [
                    'data' => [
                        'code'               => array_get($result_data, 'respCode'),
                        'description'        => array_get($result_data, 'respMsg'),
                        'correlation_id'     => array_get($item, 'data.correlation_id'),
                        '3gw_tracking_id'    => array_get($item, 'data.3gw_tracking_id'),
                        'res_reservation_id' => array_get($item, 'data.res_reservation_id'),
                        'wf_reservation_id'  => array_get($item, 'data.wf_reservation_id'),
                        'omx_tracking_id'    => array_get($item, 'data.omx_tracking_id'),
                        'id_card'            => array_get($item, 'data.id_card'),
                        'mobile_number'      => array_get($item, 'data.mobile_number'),
                        'status'             => $order_status_enquiry,
                        'access_mode'        => array_get($item, 'data.access_mode'),
                        'media'              => array_get($item, 'data.media'),
                        'crm_flag'           => 'Y',
                        'name'               => array_get($item, 'data.name'),
                        'lastname'           => array_get($item, 'data.lastname'),
                        'address_id'         => array_get($item, 'data.address_id'),
                        'product_list'       => array_get($item, 'data.product_list'),
                    ],
                ];

                $tmp_lrequest = new \Illuminate\Http\Request();
                $tmp_lrequest->setMethod(strtoupper($method));
                $tmp_lrequest->replace($update_tol_register);
                $result_update = WeOmniService::TolRegisterUpdateContent($tmp_lrequest, $content_id);
                if (array_get($result_update, '0') !== 200) {
                    $final_response = [
                        400,
                        [
                            'message' => [
                                'en' => 'failed to update weomni status',
                                'th' => 'อัพเดทสถานะของ weomni status ไม่สำเร็จ',
                            ],
                        ],
                    ];

                    return $final_response;
                }
                $final_response = [
                    200,
                    [
                        'status'  => 'success',
                        'message' => [
                            'en' => 'successfully otp & data update',
                            'th' => 'ยืนยัน otp และช้อมูลสำเร็จ',
                        ],
                    ],
                ];
            }
        } catch (\Exception $error) {
            $final_response = [
                400,
                [
                    'message' => [
                        'en'   => 'Cannot change due date',
                        'th'   => 'ไม่มีข้อมูลสำหรับการ change due date',
                        'step' => '5',
                    ],
                ],
            ];

            return $final_response;
        }

        if (array_get($final_response, '0') === 200) {
            $final_response = self::customerAppointmentInfo($lrequest);
        }

        return $final_response;
    }

    public static function changeInstallationDate($lrequest)
    {
        $identity = $lrequest->input('_identity');
        $id       = $lrequest->input('register_id');
        $old_date = $lrequest->input('oldAppointmentDate');
        $old_time = $lrequest->input('oldTimeSlot');
        $new_date = $lrequest->input('newAppointmentDate');
        $new_time = $lrequest->input('newTimeSlot');

        $tol_register_data = json_decode(Redis::get('tol-self-service-customer-register:' . $identity), true);
        $update_data       = [];
        foreach ($tol_register_data as $item) {
            if (array_get($item, 'id') == $id) {
                $update_data = $item;
                break;
            }
        }

        $correlation_id_auth_token = array_get($update_data, 'data.correlation_id');
        $method                    = 'POST';
        $url                       = '/tmvh/tol-ssv/change-installation-date/' . $correlation_id_auth_token;
        $header                    = self::getHeader('application/json');

        $request_data = [
            'correlationId' => array_get($update_data, 'data.correlation_id'),
            'certificateId' => array_get($update_data, 'id_number'),
            'qrunParams'    => [
                'addressId'       => array_get($update_data, 'data.address_id'),
                'accessMode'      => array_get($update_data, 'data.access_mode'),
                'appointmentDate' => $new_date,
                'timeSlot'        => $new_time,
                'prodSpecCode'    => array_get($update_data, 'data.access_mode'),
                'changeService'   => [
                    [
                        'prodSpecCode' => 'HSI',
                        'eventCode'    => 'NEW',
                    ],
                    [
                        'prodSpecCode' => 'FIBERTV',
                        'eventCode'    => 'NEW',
                    ],
                ],
            ],
            'omxParams'     => [
                'Order' => [
                    'refOmxTrackingId' => array_get($update_data, 'data.omx_tracking_id'),
                    'media'            => array_get($update_data, 'data.access_mode'),
                    'createDate'       => date('Y-m-d') . "T00:00:00Z",
                    'productList'      => [
                        [
                            'appointmentDate'     => $new_date . 'T00:00:00Z',
                            'appointmentTimeSlot' => $new_time,
                            'product'             => [
                                "productType"  => "TOL",
                                "productCode"  => "HSI",
                                "accessNumber" => "960000001",
                                "crmFlag"      => "Y",
                            ],
                            'customerContactList' => [
                                "title"       => "T0037",
                                "name"        => array_get($update_data, 'data.name'),
                                "lastname"    => array_get($update_data, 'data.lastname'),
                                "mobilePhone" => array_get($update_data, 'phone_number'),
                            ],
                        ],
                        [
                            'appointmentDate'     => $new_date . 'T00:00:00Z',
                            'appointmentTimeSlot' => $new_time,
                            'product'             => [
                                "productType"  => "TVS",
                                "productCode"  => "FIBERTV",
                                "accessNumber" => "xxxxxxxxx",
                                "crmFlag"      => "Y",
                            ],
                            'customerContactList' => [
                                "title"       => "T0037",
                                "name"        => array_get($update_data, 'data.name'),
                                "lastname"    => array_get($update_data, 'data.lastname'),
                                "mobilePhone" => array_get($update_data, 'phone_number'),
                            ],
                        ],
                    ],
                ],
            ],
        ];

        $tmp_lrequest = new \Illuminate\Http\Request();
        $tmp_lrequest->setMethod(strtoupper($method));
        $tmp_lrequest->replace($request_data);

        $final_response = [];

        $fixed_parameter_list["base_url"] = env("AWS_GATEWAY_URL_TOL_SSV", false);
        $result                           = WlsService::operateRequestAction($url, $method, $tmp_lrequest, $header, $fixed_parameter_list);

        if (array_get($result, '0') !== 200) {
            $final_response = [
                400,
                [
                    'message' => [
                        'en' => 'Cannot get timeslot',
                        'th' => 'ไม่สามารถเปลี่ยนวันได้',
                    ],
                ],
            ];

            return $final_response;
        }

        $final_response = [
            200,
            [
                'message' => [
                    'en' => 'The system will make an appointment for a technician to install the service on the date you have selected. Please wait for confirmation from the technician team.',
                    'th' => 'ระบบนัดช่างเข้าบริการตามวันที่คุณเลือกเรียบร้อยแล้ว กรุณารอการติดต่อยืนยันจากทีมช่างอีกครั้ง',
                ],
            ],
        ];

        return $final_response;
    }

    public static function retriveNewTimeslot($lrequest)
    {
        $identity         = $lrequest->input('_identity');
        $appointment_date = $lrequest->input('appointmentDate');
        $time_slot        = $lrequest->input('timeSlot');
        $register_id      = $lrequest->input('register_id');

        $customer_list_info = json_decode(Redis::get('tol-self-service-customer-register:' . $identity), true);
        $url                = env('AWS_GATEWAY_URL_TOL_SSV', false);
        $update_data        = [];
        foreach ($customer_list_info as $item) {
            if (array_get($item, 'id') == $register_id) {
                $update_data = $item;
                break;
            }
        }
        $date_2t           = date("Y-m-d", strtotime("+ 2 days"));
        $date_9t_timestamp = strtotime(date("Y-m-d", strtotime("+ 9 days")));
        $access_mode       = array_get($update_data, 'data.access_mode');
        $address_id        = array_get($update_data, 'data.address_id');
        if ($access_mode === null || $address_id === null) {
            return [
                400,
                [
                    'message' => [
                        'th' => 'ไม่สามารถเปลี่ยนวันได้',
                        'en' => 'Cannot get timeslot',
                    ],
                ],
            ];
        }
        $request = "<?xml version='1.0' encoding='utf-8'?>
<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/'
    xmlns:typ='http://oss.zsmart.ztesoft.com/om/webservice/types/'>
    <soapenv:Header />
    <soapenv:Body>
        <typ:queryAppointmentCapabilityMessage>
            <INSTALLATION_DATE>$date_2t</INSTALLATION_DATE>
            <ACCESS_MODE>$access_mode</ACCESS_MODE>
            <PROD_SPEC_CODE>HSI</PROD_SPEC_CODE>
            <ADDRESS_ID>$address_id</ADDRESS_ID>
            <DAYS>30</DAYS>
            <CUST_ORDER_NBR></CUST_ORDER_NBR>
            <ORDER_NBR></ORDER_NBR>
            <CHANGE_MEDIA></CHANGE_MEDIA>
            <SALE_CODE></SALE_CODE>
            <DP_NAME />
            <CHANGE_SERVICE>
                <PROD_SPEC_CODE>HSI</PROD_SPEC_CODE>
                <EVENT_CODE>NEW</EVENT_CODE>
                <PARAM1>xxxxx</PARAM1>
                <PARAM2 />
                <PARAM3 />
            </CHANGE_SERVICE>
            <TEMPLATE>
                <PROD_SPEC_CODE>HSI</PROD_SPEC_CODE>
                <TEMPLATE_ID>NONE</TEMPLATE_ID>
            </TEMPLATE>
        </typ:queryAppointmentCapabilityMessage>
    </soapenv:Body>
</soapenv:Envelope>";

        try {
            $header = self::getHeader('xml');
            $client = new Client();
            $result = $client->request('POST', $url . '/tmvh/tol-ssv/query-appointment-capability', [
                'headers' => $header,
                'body'    => $request,
            ]);
            $status_code = $result->getStatusCode();
            if ($status_code !== 200) {
                $final_response = [
                    400,
                    [
                        'message' => [
                            'th' => 'ไม่สามารถเปลี่ยนวันได้',
                            'en' => 'Cannot get timeslot',
                        ],
                    ],
                ];

                return $final_response;
            }
            $result_xml    = $result->getBody()->getContents();
            $response      = preg_replace("/(<\ /?)(\w+):([^>]*>)/", "$1$2$3", $result_xml);
            $xml_string    = new \SimpleXMLElement($response);
            $body          = $xml_string->xpath('//soapenvBody');
            $array         = json_decode(json_encode((array) $body), true);
            $time_slot     = array_get($array, '0.ns1queryAppointmentCapabilityResponse.TIME_SLOT_LIST', false);
            $time_slot_new = self::sortComplete($time_slot, $date_9t_timestamp);

            $final_response = [
                200,
                $time_slot_new,
            ];
        } catch (Exception $e) {
            $final_response = [
                400,
                [
                    'message' => [
                        'th' => 'ไม่สามารถเปลี่ยนวันได้',
                        'en' => 'Cannot get timeslot',
                    ],
                ],
            ];
        }

        return $final_response;
    }

    public static function sortTimeslot($array_one, $array_two)
    {
        return strtotime($array_one[0]) - strtotime($array_two[0]);
    }

    public static function joinTimeslot($time_slot)
    {
        $time_slot_new = [];
        foreach ($time_slot as $time_slot_item) {
            $time_slot_new[] = [
                'appointmentDate'      => array_get($time_slot_item, '1'),
                'timeSlot'             => array_get($time_slot_item, '2'),
                'installationCapacity' => array_get($time_slot_item, '3'),
            ];
        }

        return $time_slot_new;
    }

    public static function sortComplete($time_slot, $date_9t_timestamp, $step = null)
    {
        $text_appointment_date       = 'APPOINTMENT_DATE';
        $text_time_slot              = 'TIME_SLOT';
        $text_insatallation_capacity = 'INSTALLATION_CAPACITY';
        $new_convert_timeslot        = [];
        if ($step === 'register') {
            $text_appointment_date       = 'appointmentDate';
            $text_time_slot              = 'timeSlot';
            $text_insatallation_capacity = 'installationCapacity';
        }
        foreach ($time_slot as $item_time_slot) {
            $time_to_array = '';
            $current_date  = strtotime(array_get($item_time_slot, $text_appointment_date));
            if ($current_date >= $date_9t_timestamp) {
                continue;
            }
            $time_to_array = [
                array_get($item_time_slot, $text_appointment_date) . ' ' . explode('-', array_get($item_time_slot,
                    $text_time_slot))[0],
                array_get($item_time_slot, $text_appointment_date),
                array_get($item_time_slot, $text_time_slot),
                array_get($item_time_slot, $text_insatallation_capacity),
            ];

            $new_convert_timeslot[] = $time_to_array;
        }

        uasort($new_convert_timeslot, 'self::sortTimeslot');
        $new_convert_timeslot = self::joinTimeslot($new_convert_timeslot);

        return $new_convert_timeslot;
    }

    public static function uploadDocumentForTrue($reques_to_send)
    {

        $url                              = '/tmvh/tol-ssv/upload-documents/' . array_get($reques_to_send, 'correlation_id', '');
        $fixed_parameter_list["base_url"] = env("AWS_GATEWAY_URL_TOL_SSV", false);
        $header                           = self::getHeader('application/json');

        $file_extension = [];
        foreach (array_get($reques_to_send, 'images', []) as $keyname => $value) {
            $image_information        = getimagesizefromstring(base64_decode($value));
            $extension                = array_get($image_information, 'mime');
            $file_extension[$keyname] = $extension;
        }

        $build_request = [
            'correlationId'     => array_get($reques_to_send, 'correlation_id', null),
            'certificateId'     => array_get($reques_to_send, 'certificate_id', null),
            'customerImage'     => array_get($reques_to_send, 'images.customer_image', null),
            'customerImageType' => array_get($file_extension, 'customer_image', 'image/jpeg'),
            'idCardImage'       => array_get($reques_to_send, 'images.id_card_image', null),
            'idCardImageType'   => array_get($file_extension, 'id_card_image', 'image/jpeg'),
        ];

        $tmp_lrequest = new \Illuminate\Http\Request();
        $tmp_lrequest->setMethod(strtoupper('POST'));
        $tmp_lrequest->replace($build_request);

        $result = WlsService::operateRequestAction($url, 'POST', $tmp_lrequest, $header, $fixed_parameter_list);

        return $result;
    }

    public static function statusTOLMapping($recent_status)
    {
        $status_text   = [];
        $recent_status = strtolower($recent_status);
        switch ($recent_status) {
            case 'completed':
                $status_text = [
                    'en' => 'Completed',
                    'th' => 'ติดตั้งสำเร็จ',
                ];
                break;
            case 'cancelled':
                $status_text = [
                    'en' => 'Cancelled',
                    'th' => 'ถูกยกเลิก',
                ];
                break;
            case 'fail':
                $status_text = [
                    'en' => 'Failed',
                    'th' => 'ไม่สำเร็จ',
                ];
                break;
            case 'in_progress':
                $status_text = [
                    'en' => 'In progress',
                    'th' => 'กำลังดำเนินการ',
                ];
                break;
            default:
                $status_text = [
                    'en' => 'Pending',
                    'th' => 'รอการดำเนินการ',
                ];
                break;
        }

        return $status_text;
    }

    public static function mockFunction($url = '')
    {
        $path = storage_path() . '/POSTMAN_response';
        switch ($url) {
            case 'black-list-tol':
                $json_content = file_get_contents($path . '/Check Blacklist Trueonline.json', true);
                break;
            case 'get-appointment-info':
                $json_content = file_get_contents($path . '/Get Appointment Info.json', true);
                break;
            case 'get-appointment':
                $json_content = file_get_contents($path . '/Get Appointment.json', true);
                break;
            case 'get-enquiry-order-status':
                $json_content = file_get_contents($path . '/Get Enquiry Order Status.json', true);
                break;
            case 'get-service-coverage':
                $json_content = file_get_contents($path . '/Get Service Coverage.json', true);
                break;
            case 'register-true-online-product':
                $json_content = file_get_contents($path . '/Register True Online Product 1.0.4.json', true);
                break;
            case 'retrieve-calendars':
                $json_content = file_get_contents($path . '/Retrieve Calendar.json', true);
                break;
            case 'tol-register-create-content':
                $json_content = file_get_contents($path . '/Weomni Create Content (TOL Register).json', true);
                break;
            case 'tol-register-list-content':
                $json_content = file_get_contents($path . '/Weomni List Content (TOL Register).json', true);
                break;
            case 'tol-product-list-content':
                $json_content = file_get_contents($path . '/Weomni List Content (TOL Products).json', true);
                break;
            case 'tol-register-update-content':
                $json_content = file_get_contents($path . '/Weomni Update Content (TOL Register).json', true);
                break;
            default:
                $json_content = ['status' => 'nothing'];
                break;
        }

        return [200, $json_content];
    }
}
