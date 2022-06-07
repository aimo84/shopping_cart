<?php
namespace App\Services;

use Illuminate\Http\Request as LaravelRequest;
use Illuminate\Support\Str;
use Redis;

class PaySmoothService
{
    public static function postWhiteListInquiry(LaravelRequest $lrequest)
    {
        try {
            $data_to_be_validate = ["mobile" => $lrequest->input("mobile")];

            $data_validate = PaySmoothService::postWhitelistInquiryAPI($data_to_be_validate);
            $status_code   = $data_validate[0];

            $result = json_decode($data_validate[1], true);

            if (array_get($data_validate, 0, 200) != 200 && isset($data_validate[2])) {
                $original_result = $data_validate[1];
                $result          = $data_validate[2];
            }

            $code              = array_get($result, 'result_code');
            $result['is_pass'] = false;
            if (array_get($data_validate, 0, 200) != 200 || $code != '0') {

                $result['message'] = ErrorMessageService::getErrorMessagePaySmoothWhiteList($code);
            } else {
                $result['is_pass'] = true;
            }

            $response = ['response' => $result, 'code' => $status_code, 'request' => $data_to_be_validate];
            if (isset($data_validate[2])) {
                $response['original_text_response'] = $original_result;
            }

        } catch (\InvalidArgumentException $e) {
            $response = PaySmoothService::setException('pay-smooth:white-list-inquiry-invalid-arg-exception', $input, $e->getMessage(), $e->getCode());
        } catch (Exception $e) {
            $response = PaySmoothService::setException('pay-smooth:white-list-inquiry-exception', $input, $e->getMessage(), 500);
        }

        return $response;
    }

    public static function postVerify(LaravelRequest $lrequest)
    {
        $is_enforce_random_hash_for_otp = false;
        $mobile_number                  = $lrequest->input("mobile_number");
        $otp                            = $lrequest->input("otp");
        $tmp_message_id                 = Str::uuid()->toString();

        $is_enter_mini_step_result = ["A" => false, "white_list_inquiry" => false];
        $tmp_check_result          = [];
        $body                      = [];
        // start of check A
        $step_name                             = "A";
        $is_enter_mini_step_result[$step_name] = true;
        $tmp_parameters                        = [
            "mobile_number" => $mobile_number,
            "otp"           => $otp,
        ];

        if ($lrequest->has('tmp_message_id')) {
            $tmp_parameters["tmp_message_id"] = $tmp_message_id;
        }

        if ($lrequest->has('random_hash_for_otp')) {
            $tmp_parameters["random_hash_for_otp"] = $lrequest->input('random_hash_for_otp');
        }

        $tmp_check_result[$step_name]           = WlsService::checkForAOtp($step_name, $lrequest, $tmp_parameters, $is_enforce_random_hash_for_otp);
        $tmp_check_mini_step_result[$step_name] = $tmp_check_result[$step_name]["is_pass"];

        // end of check A

        // start of check white_list_inquiry
        $step_name                             = "white_list_inquiry";
        $is_enter_mini_step_result[$step_name] = true;
        $tmp_lrequest                          = new \Illuminate\Http\Request();
        $method                                = "get";
        $tmp_lrequest->setMethod(strtoupper($method));
        $request_parameter           = [];
        $request_parameter["mobile"] = $mobile_number;
        $tmp_lrequest->replace($request_parameter);

        $tmp_check_result[$step_name]           = PaySmoothService::postWhiteListInquiry($tmp_lrequest);
        $tmp_check_mini_step_result[$step_name] = $tmp_check_result[$step_name]["response"]["is_pass"];
        // end of check white_list_inquiry

        $status_code         = 400;
        $data_to_be_validate = $lrequest->all();
        $body["is_pass"]     = false;

        if ($tmp_check_mini_step_result["A"] && $tmp_check_mini_step_result["white_list_inquiry"]) {
            $status_code     = 200;
            $body["is_pass"] = true;
            $body["credit"]  = \Arr::get($tmp_check_result, "white_list_inquiry.response.credit");

            $paysmooth_token         = Str::uuid()->toString();
            $body["paysmooth_token"] = $paysmooth_token;
            $result                  = $body;
            $data_for_redis          = ['response' => $result, 'request' => $data_to_be_validate];
            // expired in 3 hours
            Redis::set('truestore:pay-smooth:verify:paysmooth_token:' . $paysmooth_token . ':result', json_encode($data_for_redis), 'EX', 3 * 60 * 60);
        }

        if (!$tmp_check_mini_step_result["A"]) {
            $body["error_message"] = ["en" => "not pass because of otp check", "th" => "ไม่ผ่านเนื่องจากการตรวจสอบ otp"];
            if (isset($tmp_check_result["A"]["message"])) {
                $body["message"] = $tmp_check_result["A"]["message"];
            } else {
                $body["message"]       = [];
                $body["message"]["th"] = "ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้";
                $body["message"]["en"] = "Sorry, the system cannot process your request at the moment.";
            }
        } elseif (!$tmp_check_mini_step_result["white_list_inquiry"]) {
            $body["error_message"] = ["en" => "not pass because of white list inquiry check", "th" => "ไม่ผ่านเนื่องจากการตรวจสอบ white list inquiry"];
            if (isset($tmp_check_result["white_list_inquiry"]["response"]["message"])) {
                $body["message"]     = $tmp_check_result["white_list_inquiry"]["response"]["message"];
                $body["result_code"] = \Arr::get($tmp_check_result, "white_list_inquiry.response.result_code");
            } else {
                $body["message"]       = [];
                $body["message"]["th"] = "ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้";
                $body["message"]["en"] = "Sorry, the system cannot process your request at the moment.";
            }
        }

        $result = $body;

        $response = ['response' => $result, 'code' => $status_code, 'request' => $data_to_be_validate];
        $response = array_merge($response, ["tmp_check_mini_step_result" => $tmp_check_mini_step_result, "is_enter_mini_step_result" => $is_enter_mini_step_result, "tmp_check_result" => $tmp_check_result]);

        return $response;
    }

    public static function getVerify($paysmooth_token)
    {
        $data_to_be_validate = ["paysmooth_token" => $paysmooth_token];

        $result                   = [];
        $status_code              = 400;
        $pay_smooth_verify_result = json_decode(Redis::get('truestore:pay-smooth:verify:paysmooth_token:' . $paysmooth_token . ':result'), true);

        if (empty($pay_smooth_verify_result)) {
            $result["message"]         = ["th" => "ไม่พบข้อมูล", "en" => "data not found"];
            $result["paysmooth_token"] = $paysmooth_token;

        } else {
            $status_code                        = 200;
            $result["pay_smooth_verify_result"] = $pay_smooth_verify_result;
        }

        $response = ['response' => $result, 'code' => $status_code, 'request' => $data_to_be_validate];

        return $response;
    }

    public static function postWhiteListInquiryAPI($body)
    {
        $header = [
            'Content-Type' => 'application/json',
            'x-api-key'    => env('X_API_KEY_TOL_SSV', false),
        ];

        $correlation_id = array_get($body, 'correlation_id');

        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod('POST');
        $tmp_lrequest = [
            'mobile' => array_get($body, 'mobile'),
        ];

        $lrequest->replace($tmp_lrequest);

        $content = GuzzleService::postGuzzleRequest(
            'pay-smooth/white-list-inquiry',
            'post',
            $lrequest,
            $header,
            env('AWS_GATEWAY_URL_TOL_SSV', false) . '/'
        );

        LogService::writeServiceLog(
            "pay-smooth:white-list-inquiry",
            json_encode_unicode($lrequest->all()),
            json_encode_unicode($content),
            date('d/m/Y H:i:s')
        );

        $tmp_decoded_content = json_decode($content[1], true);
        if (isset($content[1]) && isset($tmp_decoded_content['data']['message'])) {
            $tmp_decoded_content['message'] = [
                'en' => $tmp_decoded_content['data']['message'],
                'th' => $tmp_decoded_content['data']['message'],
            ];
            $content[1] = json_encode($tmp_decoded_content);
        }

        return $content;
    }

    /**
     * @param $input
     * @param $result
     * @param $code
     * @return array
     */
    private static function setException($step, $input, $result, $code)
    {
        LogService::writeServiceLog($step, json_encode($input), json_encode($result), date('d/m/Y H:i:s'));
        $response = ['response' => ['data' => $result], 'code' => $code];

        return $response;
    }
}
