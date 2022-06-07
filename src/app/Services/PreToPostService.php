<?php
namespace App\Services;
use Illuminate\Support\Arr;

class PreToPostService
{
    public static function validate($correlation_id, $body)
    {
        $header = [
            "Content-Type" => "application/json",
            "x-api-key"    => env("X_API_KEY_TOL_SSV", false),
        ];

        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod('POST');
        $tmp_lrequest = [
            'correlationId'      => $correlation_id,
            'channel'            => '3GW-TRUESTORE',
            'subscriberNumber'   => array_get($body, 'subscriber_number'),
            'aging'              => array_get($body, 'aging'),
            'identification'     => array_get($body, 'identification'),
            'identificationType' => 'I',
            'propositionId'      => array_get($body, 'proposition_id'),
            'birthday'           => array_get($body, 'birthday'),
            'dealerCode'         => env('SHOP_CODE', '80100964'),
        ];
        $lrequest->replace($tmp_lrequest);

        $content = GuzzleService::postGuzzleRequest(
            'pre2post/3gw/validate/' . $correlation_id,
            'post',
            $lrequest,
            $header,
            env("AWS_GATEWAY_URL_TOL_SSV", false) . "/"
        );
        LogService::writeServiceLog(
            "verify_pre_to_post",
            json_encode_unicode($lrequest->all()),
            json_encode_unicode($content),
            (new \DateTime())->format('d/m/Y H:i:s')
        );

        $tmp_decoded_content = json_decode($content[1], true);
        if (isset($content[1]) && isset($tmp_decoded_content["data"]["message"])) {
            $tmp_decoded_content["message"] = [
                "en" => $tmp_decoded_content["data"]["message"],
                "th" => $tmp_decoded_content["data"]["message"],
            ];
            $content[1] = json_encode($tmp_decoded_content);
        }

        return $content;
    }

    public static function submit($correlation_id, $body)
    {
        $header = [
            "Content-Type" => "application/json",
            "x-api-key"    => env("X_API_KEY_TOL_SSV", false),
        ];

        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod('POST');
        $tmp_lrequest = [
            "secure_key"           => array_get($body, 'secure_key'),
            "correlation_id"       => $correlation_id,
            "type"                 => array_get($body, 'type'),
            "subscriber_number"    => array_get($body, 'mobile_number'),
            "kyc_image"            => array_get($body, 'kyc_image'),
            "doc_change_p2p_image" => array_get($body, 'doc_change_p2p_image'),
            "customer_info"        => [
                "language"                => "TH",
                "grading"                 => "NON-TOP",
                "identification"          => array_get($body, 'id_number'),
                "identification_exp_date" => array_get($body, 'identification_exp_date'),
                "identification_type"     => "I",
                "birth_date"              => array_get($body, 'birthday'),
                "occupation"              => "N",
                "nationality"             => "THA",
                "init_time_in_address"    => "0101",
                "customer_type"           => "80",
                "customer_indy_name"      => [
                    "title"          => 'T5%PSP%คุณ',
                    "first_name"     => array_get($body, 'first_name'),
                    "last_name"      => array_get($body, 'last_name'),
                    "marital_status" => "N",
                    "gender"         => array_get($body, 'gender'),
                    "customer_type"  => "73",
                ],
                "customer_address"        => [
                    "amphur"               => array_get($body, 'amphur'),
                    "city"                 => array_get($body, 'city'),
                    "house_no"             => array_get($body, 'house_no'),
                    "street_name"          => array_get($body, 'street_name', '-'),
                    "time_at_address"      => "0101",
                    "tumbon"               => array_get($body, 'tumbon'),
                    "type_of_accomodation" => "NOT",
                    "zip"                  => array_get($body, 'zip_code'),
                ],
            ],
            "account_info"         => [
                "pay_channel_category"            => "POST",
                "pay_channel_description"         => "CASH",
                "accounting_management"           => [
                    "company_code"     => array_get($body, 'company_code'),
                    "account_sub_type" => array_get($body, 'company_code') === "RM" ? "RPI" : "FIN",
                ],
                "billing_arrangement_bill_info"   => [
                    "bill_format"   => "S",
                    "bill_language" => "TH",
                ],
                "pay_channel_payment_method_info" => [
                    "payment_method" => "CA",
                ],
            ],
            "ou"                   => [
                "agreement"  => [
                    "agreement_type" => array_get($body, 'company_code'),
                ],
                "subscriber" => [
                    "activity_reason"         => "MGP2P",
                    "user_text"               => "Prepaid to Postpaid via Affiliate Link TrueStore",
                    "offers"                  => [
                        "priceplan"   => [
                            "offer_name"   => array_get($body, 'priceplan'),
                            "service_type" => "80",
                        ],
                        "proposition" => [
                            "offer_name"   => array_get($body, 'proposition_id'),
                            "service_type" => "85",
                            "contract"     => [
                                "start_date" => date('Y-m-d H:i:s'),
                            ],
                        ],
                    ],
                    "subscriber_general_info" => [
                        "effective_date" => date('Y-m-d\TH:i:s\Z'),
                        "proof_date"     => date('Y-m-d\TH:i:s\Z'),
                        "proof_doc"      => "Y",
                    ],
                ],
            ],
        ];

        if (isset($body["type"])) {
            $tmp_lrequest["type"] = $body["type"];
        } else {
            $tmp_lrequest["type"] = "pre2post";
        }
        
        if (!empty(Arr::get($body, 'ocr_consent_info', []))) {
            Arr::set($tmp_lrequest, 'ocr_consent', Arr::get($body, 'ocr_consent_info', []));
        }

        $lrequest->replace($tmp_lrequest);

        $content = GuzzleService::postGuzzleRequest(
            'pre2post/submit',
            'post',
            $lrequest,
            $header,
            env("AWS_GATEWAY_URL_TOL_SSV", false) . "/"
        );
        LogService::writeServiceLog(
            "submit_pre_to_post",
            json_encode_unicode($lrequest->all()),
            json_encode_unicode($content),
            (new \DateTime())->format('d/m/Y H:i:s')
        );

        $tmp_decoded_content = json_decode($content[1], true);
        if (isset($content[1]) && isset($tmp_decoded_content["data"]["message"])) {
            $tmp_decoded_content["message"] = [
                "en" => $tmp_decoded_content["data"]["message"],
                "th" => $tmp_decoded_content["data"]["message"],
            ];
            $content[1] = json_encode($tmp_decoded_content);
        }

        return $content;
    }

    public static function replace_submit_data($to_be_replace_list, $submit_data, $tmp_input)
    {
        foreach ($to_be_replace_list as $key => $value) {
            if (!empty(array_get($tmp_input, $value))) {
                $submit_data[$key] = array_get($tmp_input, $value);
            }
        }

        return $submit_data;
    }

    public static function verifyPreEkyc($lrequest)
    {
        $tmp_check_result          = [];
        $is_enter_mini_step_result = [];

        $mobile_number = $lrequest->input('mobile_number');
        $otp           = $lrequest->input('otp');

        // step0 (step 1 in flow chart)
        // start of check A
        $step_name                             = "A";
        $is_enter_mini_step_result[$step_name] = true;
        $tmp_parameters                        = [
            "mobile_number" => $mobile_number,
            "otp"           => $otp,
        ];

        if ($lrequest->has('tmp_message_id')) {
            $tmp_parameters["tmp_message_id"] = $lrequest->input('tmp_message_id');
        }

        $service_name                           = "truemove";
        $tmp_check_result[$step_name]           = WlsService::checkForAOtp($step_name, $lrequest, $tmp_parameters, $service_name == "trueonline");
        $tmp_check_mini_step_result[$step_name] = $tmp_check_result[$step_name]["is_pass"];

        if (!$tmp_check_mini_step_result[$step_name] && isset($tmp_check_result[$step_name]["failed_output"])) {
            $body                  = ["message" => ["en" => "Sorry, the system cannot process your request at the moment.", "th" => "ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้"], "is_pass" => false, "tmp_check_result" => $tmp_check_result];
            $body["error_message"] = ["en" => "not pass because of otp check", "th" => "ไม่ผ่านเนื่องจากการตรวจสอบ otp"];

            return [400, $body];
        }
        // end of check A

        // start of step 2 int
        $step_name                             = "CLM_2";
        $tmp_lrequest                          = new \Illuminate\Http\Request();
        $tmp_lrequest['primResourceValue']     = $mobile_number;
        $tmp_lrequest['businessLine']          = "MOBILE";
        $tmp_check_result[$step_name]          = ClmService::getBillingProfileInfo($tmp_lrequest);
        $tmp_check_result[$step_name]["body"]  = json_decode($tmp_check_result[$step_name][1], true);
        $is_enter_mini_step_result[$step_name] = true;

        if ($tmp_check_result[$step_name][0] >= 300) {
            $body                    = ["message" => ["en" => "Sorry! You are not able to choose to buy a product.", "th" => "ขออภัยค่ะ คุณไม่สามารถรับสิทธิพิเศษนี้"], "is_pass" => false, "tmp_check_mini_step_result" => $tmp_check_mini_step_result, "is_enter_mini_step_result" => $is_enter_mini_step_result, "tmp_check_result" => $tmp_check_result];
            $body["reason_not_pass"] = "unable to contact CLM_2 server";

            return [400, $body];
        }
        if (isset($tmp_check_result[$step_name]["body"]["getBillingProfileInfoResponse"]
            ["return"]["billingProfileInfo"]["accountCustomerInfo"]["customer"]["certificateNumber"])
        ) {
            $int_thai_id = $tmp_check_result[$step_name]["body"]["getBillingProfileInfoResponse"]
                ["return"]["billingProfileInfo"]["accountCustomerInfo"]["customer"]["certificateNumber"];
        } else {
            $body                         = ["message" => ["en" => "Not Found Thai ID", "th" => "ไม่พบเลขบัตรประชาชน"], "is_pass" => false, "tmp_check_result" => $tmp_check_result];
            $body["is_not_found_thai_id"] = true;

            return [400, $body];
        }

        $message = array_get($tmp_check_result[$step_name], 'body.getBillingProfileInfoResponse.return.message');
        if ($message !== 'Success.') {
            // clm_2 fail
            $body["message"] =
                [
                'en' => 'Sorry, This phone number is unable to change promotional package.',
                'th' => 'ขออภัย คุณไม่สามารถเปลี่ยนแปลงแพ็กเกจ',
            ];
            $body["a_step_that_got_fail"] = $step_name;
            $body["tmp_check_result"]     = $tmp_check_result;
            $result                       = [400, $body];
        }

        $tmp_check_result[$step_name]["is_pass"] = true;

        $is_not_postpaid     = false;
        $customer_type_check = array_get($tmp_check_result, "CLM_2.body.getBillingProfileInfoResponse.return.billingProfileInfo.accountCustomerInfo.customer.customerType.code");
        if (!empty($customer_type_check) && $customer_type_check === 'P'
        ) {
            $is_not_postpaid = true;
        } else {
            $tmp_check_result[$step_name]["is_pass"] = false;
        }
        $tmp_check_result[$step_name]["is_not_postpaid"] = $is_not_postpaid;

        $content = [400, ["is_pass" => false, "tmp_check_result" => $tmp_check_result, "tmp_check_mini_step_result" => $tmp_check_mini_step_result, "is_prepaid" => false]];

        if (!empty(array_get($tmp_check_result, "A.is_pass")) && $is_not_postpaid) {
            $content[0]            = 200;
            $content[1]["is_pass"] = true;
        } elseif (empty(array_get($tmp_check_result, "A.is_pass"))) {
            $content[1]["error_message"] = [
                "en" => "not pass because of otp check",
                "th" => "ไม่ผ่านเนื่องจากการตรวจสอบ otp",
            ];
            $content[1]["message"] = [
                "en" => "Sorry! You are not able to choose to buy a product.",
                "th" => "ขออภัยค่ะ คุณไม่สามารถรับสิทธิพิเศษนี้",
            ];
        } elseif (!$is_not_postpaid) {
            $content[1]["message"] = [
                "th" => "แคมเปญนี้สำหรับลูกค้าระบบเติมเงินเท่านั้น",
                "en" => "This campaign privilege is for prepaid only.",
            ];
        } else {
            $content[1]["message"] = [
                "en" => "Sorry! You are not able to choose to buy a product.",
                "th" => "ขออภัยค่ะ คุณไม่สามารถรับสิทธิพิเศษนี้",
            ];
        }

        if ($is_not_postpaid) {
            $content[1]["is_prepaid"] = true;
        }
        $content[1]["is_not_found_thai_id"] = false;

        LogService::writeServiceLog(
            "verify_pre_to_post_self_service",
            json_encode_unicode($lrequest->all()),
            json_encode_unicode($content),
            (new \DateTime())->format('d/m/Y H:i:s')
        );

        return $content;
    }
}
