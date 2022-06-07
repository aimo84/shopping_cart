<?php
namespace App\Services;

use Illuminate\Support\Str;
use Redis;

class CustomerExpService
{

    public static function postCustomerGetRelateListTol($url, $method, $lrequest, $header)
    {
        $is_enforce_random_hash_for_otp = true;

        if (($lrequest->has('otp') && $lrequest->has('mobile_number')) || $is_enforce_random_hash_for_otp) {
            if (!$lrequest->has('otp') || !$lrequest->has('mobile_number')) {
                $filtered_response = [
                    "status_code" => 400,
                    "body"        =>
                    [
                        "message" =>
                        [
                            "en" => "sms otp input is incorrect",
                            "th" => "รหัส otp จาก sms ที่นำเข้าไม่ถูกต้อง",
                        ],
                    ],
                ];

                return $filtered_response;
            }

            $body                                  = [];
            $is_enter_mini_step_result             = [];
            $tmp_check_result                      = [];
            $step_name                             = "A";
            $is_enter_mini_step_result[$step_name] = true;
            $mobile_number                         = $lrequest->input('mobile_number');
            $otp                                   = $lrequest->input('otp');
            $tmp_parameters                        = [
                "mobile_number" => $mobile_number,
                "otp"           => $otp,
            ];
            $tmp_check_result[$step_name]           = WlsService::checkForAOtp($step_name, $lrequest, $tmp_parameters);
            $tmp_check_mini_step_result[$step_name] = $tmp_check_result[$step_name]["is_pass"];
            if (!$tmp_check_mini_step_result[$step_name] && isset($tmp_check_result[$step_name]["failed_output"])) {
                if (!isset($body["failed_output"])) {
                    $body["failed_output"] = [$step_name => $tmp_check_result[$step_name]["failed_output"]];
                } else {
                    $body["failed_output"][$step_name] = $tmp_check_result[$step_name]["failed_output"];
                }
            }
            if (!$tmp_check_result[$step_name]["is_pass"]) {
                $filtered_response = [
                    "status_code" => 400,
                    "body"        =>
                    [
                        "message" =>
                        [
                            "en" => "sms otp is incorrect",
                            "th" => "รหัส otp จาก sms ไม่ถูกต้อง",
                        ],
                    ],
                ];

                return $filtered_response;
            }

            $random_hash_for_otp = Str::uuid()->toString();
            // expired in 15 minutes
            Redis::set('store-otp:mobile_number:' . $mobile_number . ':random_hash_for_otp:' . $random_hash_for_otp . ':temp', json_encode($tmp_parameters), 'EX', 60 * 15);
        }

        $url    = "trueit-uat-3/customer/get-related-list";
        $header = [
            "Content-Type" => "application/json",
            "x-api-auth"   => env('X_API_AUTH_BLACKLIST_TOL', false),
        ];
        $fixed_parameter_list = [];

        $method       = "post";
        $tmp_lrequest = new \Illuminate\Http\Request();
        $tmp_lrequest->setMethod(strtoupper($method));

        if (!$lrequest->has('thai_id')) {
            $filtered_response = [
                "status_code" => 400,
                "body"        => [
                    "message" =>
                    [
                        "en" => "please input thai id in correct format",
                        "th" => "กรุณาระบุข้อมูลเลขบัตรประชาชนให้ถูกตามรูปแบบ",
                    ],
                ],
            ];

            return $filtered_response;
        }

        $request_parameter = json_decode('{
            "pageSize": "50",
            "pageNumber": "1",
            "searchList": {
                "searchInfoArray": [
                    {
                        "type": "CERTIFICATE",
                        "value": "' . $lrequest->input('thai_id') . '"
                    },
                    {
                        "type": "ASSETINDICATOR",
                        "value": "Y"
                    },
                    {
                        "type": "ASSETSTATUS",
                        "value": "ACTIVEORTEMPDIS"
                    }
                ]
            }
        }', true);
        $tmp_lrequest->replace($request_parameter);

        $result = WlsService::operateRequestAction($url, $method, $tmp_lrequest, $header, $fixed_parameter_list);

        $filtered_result         = [];
        $allow_product_show_list = [
            "TRUFTTX" => 1,
            "INTCAB"  => 1,
            "TROINT"  => 1,
            "TRNINT"  => 1,
        ];

        if (isset($result[0]) && $result[0] < 400 && isset($result[1])) {
            $json_decode_body = json_decode($result[1], true);
            if (isset($json_decode_body["customerRelationList"]
                ["customerRelationInfoArray"][0]["accountList"]["accountInfoArray"])
            ) {
                $tmp_check_data = $json_decode_body["customerRelationList"]["customerRelationInfoArray"][0]
                    ["accountList"]["accountInfoArray"];
            }

            if (isset($tmp_check_data)) {
                foreach ($tmp_check_data as $tmp_result_each) {
                    if (isset($tmp_result_each["assetList"]["assetInfoArray"])) {
                        $filtered_tmp_result_each = $tmp_result_each["assetList"]["assetInfoArray"][0];

                        if (isset($filtered_tmp_result_each["product"]) &&
                            isset($allow_product_show_list[$filtered_tmp_result_each["product"]]) &&
                            isset($filtered_tmp_result_each["assetNumber"])
                        ) {
                            $filtered_address                 = "";
                            $address_arrange_order_index_list = [
                                "houseNo", "moo", "building", "floor", "roomNo", "soi", "street",
                                "subDistrict", "district", "city", "zipCode"];
                            $is_first = true;
                            foreach ($address_arrange_order_index_list as $tmp_index) {
                                $tmp_address_data = $filtered_tmp_result_each['installationAddress'][$tmp_index];
                                $filtered_address .= (!$is_first && !empty($tmp_address_data)) ? ', ' : '';
                                $filtered_address .= !empty($tmp_address_data) ? $tmp_address_data : '';
                                $is_first = false;
                            }
                            $filtered_address  = mb_substr($filtered_address, 0, 20, 'UTF-8');
                            $filtered_result[] = [
                                'tol_number' => $filtered_tmp_result_each["assetNumber"],
                                'address'    => $filtered_address,
                            ];
                        }
                    }
                }
            }

            if (!empty($filtered_result)) {
                $filtered_response = [
                    "status_code" => 200,
                    "body"        =>
                    [
                        "trueonline_number_list" => $filtered_result,
                    ],
                ];
            } else {
                $filtered_response = [
                    "status_code" => 404,
                    "body"        =>
                    [
                        "message" =>
                        [
                            "en" => "unable to import trueonline number/circuit number",
                            "th" => "ไม่สามารถนำเข้าข้อมูล trueonline number/circuit number ได้",
                        ],
                    ],
                ];
            }

            $filtered_response["output_from_api"]                     = [];
            $filtered_response["output_from_api"]["get_related_list"] = $json_decode_body;

            $filtered_response["input_from_api"]                     = [];
            $filtered_response["input_from_api"]["get_related_list"] = $request_parameter;
        } else {
            $filtered_response = [
                "status_code" => $result[0],
                "body"        =>
                [
                    "message" =>
                    [
                        "en" => "unable to import trueonline number/circuit number",
                        "th" => "ไม่สามารถนำเข้าข้อมูล trueonline number/circuit number ได้",
                    ],
                ],
            ];
        }

        if (isset($random_hash_for_otp)) {
            $filtered_response["body"]["random_hash_for_otp"] = $random_hash_for_otp;
        }

        return $filtered_response;
    }
}
