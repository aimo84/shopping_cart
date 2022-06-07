<?php

namespace App\Traits;

use Illuminate\Support\Arr;
use App\Services\LogService;
use Illuminate\Support\Str;

trait ApiResponser
{
    protected function processAPIController($content, $lrequest, $url)
    {
        if (isset($content[0]) && isset($content[1])) {
            $status_code = $content[0];
            $body        = $content[1];
        } elseif (isset($content["status_code"]) && isset($content["body"])) {
            $status_code = $content["status_code"];
            $body        = $content["body"];
        } elseif (isset($content["code"]) && isset($content["response"])) {
            $status_code = $content["code"];
            $body        = $content["response"];
        } else {
            $status_code           = 500;
            $body                  = [];
            $body["message"]       = [];
            $body["message"]["en"] = "Error within middleware, unable to find url route for the api that got specified";
            $body["message"]["th"] = "เกิดข้อผิดพลาดภายใน middleware ไม่สามารถหาเส้นทาง middleware ให้กับ url api ที่ระบุมาได้";
        }

        $result = ['status_code' => $status_code, 'body' => $body];
        if (isset($content[2])) {
            $result['error_message'] = $content[2];
        }

        if (!($lrequest->has('is_feature_test') && $lrequest->input('is_feature_test')) &&
            (
                isset($result['error_message']) ||
                (
                    gettype($result["body"]) == "string" &&
                    (
                        $result["status_code"] >= 300 ||
                        (
                            isset(json_decode($result["body"], true)["status_code"]) &&
                            json_decode($result["body"], true)["status_code"] >= 300
                        )
                    )
                )
            )
        ) {
            $message_id = Str::uuid()->toString();
            $data       = $lrequest->all();

            $log_message_str = "message_id = $message_id, error log, url = $url, data: " . json_encode_unicode($data);
            $log_message_str .= ", body: " . json_encode_unicode($body) . ", additional_error: ";
            if (isset($result['error_message'])) {
                $log_message_str .= json_encode_unicode($result['error_message']);
            }
            LogService::writeActionLog($lrequest, $log_message_str);
        }

        $status_code = $result['status_code'];
        $body        = $result['body'];

        if ($status_code < 300) {
            return response($body)->header('Content-Type', 'application/json');
        } elseif (gettype($body) == "array" && !empty(\Arr::get($body, "message.en")) && !empty(\Arr::get($body, "message.th"))) {
            return response()->json($body, $status_code);
        } elseif (gettype($body) == "array" && !empty(\Arr::get($body, "message.0.en")) && !empty(\Arr::get($body, "message.0.th"))) {
            $response_to_be_return = ['message' => ["en" => \Arr::get($body, "message.0.en"), "th" => \Arr::get($body, "message.0.th")]];

            $param_include_list = ["result.code", "result.description", "result.correlationId", "result.3gwTrackingId", "is_pass"];
            foreach ($param_include_list as $each_param_to_include) {
                $each_param_check = \Arr::get($body, $each_param_to_include);
                if (!is_null($each_param_check)) {
                    \Arr::set($response_to_be_return, $each_param_to_include, $each_param_check);
                }
            }

            return response()->json($response_to_be_return, $status_code);
        } elseif (gettype(\Arr::get($body, "message")) == "string" && !empty(\Arr::get($body, "message"))) {
            $response_to_be_return = ['message' => ["en" => \Arr::get($body, "message"), "th" => \Arr::get($body, "message")]];

            return response()->json($response_to_be_return, $status_code);
        } elseif (gettype($body) == "array" && !empty(\Arr::get($body, "description"))) {
            $response_to_be_return = ['message' => ["en" => \Arr::get($body, "description"), "th" => \Arr::get($body, "description")]];
            $param_include_list    = ["code", "description", "correlationId", "3gwTrackingId", "original_response"];
            foreach ($param_include_list as $each_param_to_include) {
                $each_param_check = \Arr::get($body, $each_param_to_include);
                if (!is_null($each_param_check)) {
                    \Arr::set($response_to_be_return, $each_param_to_include, $each_param_check);
                }
            }

            return response()->json($response_to_be_return, $status_code);
        } elseif (gettype($body) == "string") {
            return response()->json(['message' => ["en" => $body, "th" => $body]], $status_code);
        } elseif (gettype(\Arr::get($body, "data")) == "string" && !empty(\Arr::get($body, "data"))) {
            return response()->json(['message' => ["en" => \Arr::get($body, "data"), "th" => \Arr::get($body, "data")]], $status_code);
        } else {
            return response()->json(['message' => ["en" => "system error", "th" => "เกิดข้อผิดพลาดภายในระบบ"]], $status_code);
        }
    }

    protected function processTMNResponse($content, $type)
    {
        $response    = [];
        $status_code = Arr::get($content, 'http_status');
        $data        = Arr::get($content, 'data');

        if (isset($status_code)) {

            if ($status_code == 200) {
                $response['statusCode'] = $status_code;
                $response['message']    = 'SUCCESSFUL';

                if ($type == 'get_consent') $response['consentStatus'] = Arr::get($data, 'data.consent_status');
                
            } elseif ($status_code == 400) {
                $response['statusCode'] = $status_code;
                $response['message']    = 'BAD_REQUEST';

                if (Arr::get($data, 'status.code') == 'ERROR.AGREEMENT_EXPIRED') {
                    $response['statusCode'] = 200;
                    $response['message']    = 'SUCCESSFUL';

                    if ($type == 'get_consent') $response['consentStatus'] = 'EXPIRED';

                }

            } else {                
                $response['statusCode'] = 503;
                $response['error']      = 'SERVICE_UNAVAILABLE';
                $response['message']    = 'Backend is down';
            }
        }

        if (Arr::get($content, 'status_code') == 400) {
            $status_code            = 400;
            $response['statusCode'] = 400;
            $response['message']    = Arr::get($content, 'message.error');
        
        }

        return response()->json($response, Arr::get($response, 'statusCode'));
    }
}
