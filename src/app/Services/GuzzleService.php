<?php
namespace App\Services;

use App\Services\LogService;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;
use GuzzleHttp\Psr7\Response;
use GuzzzleHttp\Psr7\Request;
use Illuminate\Support\Str;

class GuzzleService
{
    public static function arrayRecursiveDiff($aArray1, $aArray2)
    {
        $aReturn = [];

        foreach ($aArray1 as $mKey => $mValue) {
            if (gettype($aArray2) != "array") {
                break;
            }
            if (array_key_exists($mKey, $aArray2)) {
                if (is_array($mValue)) {
                    $aRecursiveDiff = self::arrayRecursiveDiff($mValue, $aArray2[$mKey]);
                    if (count($aRecursiveDiff)) {$aReturn[$mKey] = $aRecursiveDiff;}
                } else {
                    if ($mValue != $aArray2[$mKey]) {
                        $aReturn[$mKey] = $mValue;
                    }
                }
            } else {
                $aReturn[$mKey] = $mValue;
            }
        }

        return $aReturn;
    }

    public static function convertXMLtoArray($xml)
    {
        try {
            if (empty($xml)) {
                throw new \UnexpectedValueException('Empty parameter xml', 422);
            }
            $simple_xml = @simplexml_load_string($xml);

            if ($simple_xml === false) {
                throw new \ErrorException('Cannot convert xml data', 422);
            }

            $json_encode = json_encode($simple_xml);

            if ($json_encode === false || is_null($json_encode)) {
                throw new \UnexpectedValueException('Cannot encode json data', 422);
            }

            $response = json_decode($json_encode, true);
        } catch (\Exception $e) {
            $response = [
                'ErrorCode' => 500,
                'ErrorDesc' => get_class($e) . ' : ' . $e->getMessage() . ' : ' . $e->getCode() . ' : ' . $xml,
            ];
        }

        return $response;
    }

    public static function postRequest($url, $method, $data, $header)
    {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $method);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $header);

        $output   = curl_exec($ch);
        $response = $output . PHP_EOL;
        curl_close($ch);
        $response = self::convertXMLtoArray($response);

        return $response;
    }

    /**
     * @param $url
     * @param $method
     * @param $lrequest
     * @param $header
     * @param $baseUrl
     * @return array
     */
    public static function postGuzzleRequest($url, $method, $lrequest, $header, $baseUrl): array
    {
        $payload                                      = $lrequest->post();
        $get_payload                                  = self::arrayRecursiveDiff($lrequest->all(), $payload);
        $client_parameter                             = [];
        $client_parameter['headers']                  = $header;
        $client_parameter['headers']['Cache-Control'] = 'no-cache, private';

        // add this to make get wportal/cart able to work properly in local staging
        $is_enable_header_accept_encoding = false;
        $tmp_explode_url                  = explode("/", $url);
        if (
            $is_enable_header_accept_encoding &&
            isset($tmp_explode_url[1]) &&
            (
                (
                    $tmp_explode_url[0] == "wportal" &&
                    $tmp_explode_url[1] == "cart" &&
                    strtoupper($method) == "GET"
                ) ||
                $tmp_explode_url[0] == "placeorder" ||
                (
                    $tmp_explode_url[0] == "truemoveh" &&
                    $tmp_explode_url[1] == "package" &&
                    $tmp_explode_url[2] == "search"
                )
            )
        ) {
            $client_parameter['headers']['accept-encoding'] = 'gzip, deflate';
        }

        if (isset($header["Content-Type"]) && $header["Content-Type"] == "application/json") {
            $client_parameter['json'] = $lrequest->all();
        }

        // remove header from frontend
        $remove_header_keys = ['host', 'x-xsrf-token', 'dnt', 'content-length', 'origin', 'referer', 'cookie'];

        foreach ($remove_header_keys as $remove_key) {
            if (isset($client_parameter['headers'][$remove_key])) {
                unset($client_parameter['headers'][$remove_key]);
            }
        }

        $client = new Client($client_parameter);

        $myBody = [];
        foreach ($payload as $key => $value) {
            $myBody[$key] = $value;
        }

        $to_be_used_url = $baseUrl . $url;

        $exploded_route_name_with_question_mark_and_slash = explode('/', explode('?', $url)[0]);
        if (count($get_payload) > 0 &&
            !(array_get($exploded_route_name_with_question_mark_and_slash, '1') == "mobile" && array_get($exploded_route_name_with_question_mark_and_slash, '2') == "search") &&
            !(array_get($exploded_route_name_with_question_mark_and_slash, '0') == "check-preverify" && array_get($exploded_route_name_with_question_mark_and_slash, '1') == "wemall")

        ) {
            $to_be_used_url .= '?';
            $to_be_add_query_str = '';
            foreach ($get_payload as $key => $value) {
                if (!is_array($value)) {
                    $to_be_add_query_str .= $key . '=' . $value . '&';
                }

                $myBody[$key] = $value;
            }
            $to_be_used_url .= $to_be_add_query_str;
            $to_be_used_url = substr($to_be_used_url, 0, -1);
        }

        $parameter = [];
        if (isset($myBody) && count($myBody) > 0) {
            $parameter['form_params'] = $myBody;
        }
        try
        {
            $is_read_from_mock_file = false;

            if (!empty(\Arr::get($parameter, "content-base64"))) {
                unset($parameter["content-base64"]);
            }

            if (!empty(\Arr::get($parameter, "form_params.content-base64"))) {
                unset($parameter["form_params"]["content-base64"]);
            }

            $test_data_filename      = $to_be_used_url . "|" . $method . "|" . json_encode($client_parameter) . "|" . json_encode($parameter);
            $sha1_test_data_filename = sha1($test_data_filename) . ".txt";
            $mock_response_pathname  = storage_path("api/config/mock_response_for_test/" . $sha1_test_data_filename);

            LogService::writeServiceLog(
                "guzzleService:normal_access_request",
                $sha1_test_data_filename,
                $test_data_filename,
                date('d/m/Y H:i:s')
            );

            $sha1_test_data_request_detail_filename = sha1($test_data_filename) . "_requestDetail" . ".txt";
            $mock_response_request_detail_pathname  = storage_path("api/config/mock_response_for_test/" . $sha1_test_data_request_detail_filename);

            $sha1_test_data_status_code_filename = sha1($test_data_filename) . "_statusCode" . ".txt";
            $mock_response_status_code_pathname  = storage_path("api/config/mock_response_for_test/" . $sha1_test_data_status_code_filename);
            if (file_exists($mock_response_pathname)) {
                $mock_response_content     = file_get_contents($mock_response_pathname);
                $mock_response_status_code = file_get_contents($mock_response_status_code_pathname);
            } else {
                $mock_response_content = null;
            }
            if ($mock_response_content && env("IS_ENABLE_MOCK_RESPONSE_FOR_OFFLINE_TEST", false)) {
                // for testing purpose
                // read from mock file
                $request = new Response($mock_response_status_code, ['Content-Type' => 'application/json'], $mock_response_content);

                $is_read_from_mock_file = true;
            } else {
                $request = $client->{$method}($to_be_used_url, $parameter);
            }
            $status_code = $request->getStatusCode();
            $body        = $request->getBody()->getContents();
        } catch (\GuzzleHttp\Exception\RequestException $e) {
            if ($e->hasResponse()) {
                $error_message = json_decode($e->getResponse()->getBody()->getContents(), true);
                $status_code   = $e->getResponse()->getStatusCode();
                $body          = $e->getResponse()->getReasonPhrase();

                // start of error log
                $message_id      = Str::uuid()->toString();
                $log_message_str = "message_id = $message_id, error from connection, request data = " . json_encode_unicode($to_be_used_url) . "|" . $method . "|" . json_encode_unicode($client_parameter) . "|" . json_encode_unicode($parameter);
                $log_message_str .= "|" . json_encode_unicode([$status_code, $body, $error_message]);

                if ($lrequest->is('api/*')) {
                    LogService::writeActionLog($lrequest, $log_message_str);
                } // TODO: handle else for this case
                // end of error log
            } else {
                // start of error log
                $message_id      = Str::uuid()->toString();
                $log_message_str = "message_id = $message_id, error from connection, request data = " . json_encode_unicode($to_be_used_url) . "|" . $method . "|" . json_encode_unicode($client_parameter) . "|" . json_encode_unicode($parameter);
                $log_message_str .= ", exception_class_detail:" . get_class($e) . ", exception_line:" . $e->getMessage();
                if ($lrequest->is('api/*')) {
                    LogService::writeActionLog($lrequest, $log_message_str);
                }
                // end of error log
                $body          = "server connection unavailable, please try again";
                $error_message = "server connection unavailable, please try again";
                $status_code   = 503;
            }

            if ($status_code == 503) {
                //stop this service from save mock response
                $is_read_from_mock_file = true;
            } else {
                $is_read_from_mock_file = false;
            }

        } catch (\Exception $e) {
            // start of error log
            $message_id      = Str::uuid()->toString();
            $log_message_str = "message_id = $message_id, error from connection, request data = " . json_encode_unicode($to_be_used_url . "|" . $method . "|" . json_encode_unicode($client_parameter) . "|" . json_encode_unicode($parameter));
            if ($lrequest->is('api/*')) {
                LogService::writeActionLog($lrequest, $log_message_str);
            }
            // end of error log
            $body          = "server connection unavailable with reason unknown, please try again";
            $error_message = "server connection unavailable with reason unknown, please try again";
            $status_code   = 503;
            //stop this service from save mock response
            $is_read_from_mock_file = true;
        }

        $test_data_filename                     = $to_be_used_url . "|" . $method . "|" . json_encode($client_parameter) . "|" . json_encode($parameter);
        $sha1_test_data_filename                = sha1($test_data_filename) . ".txt";
        $mock_response_pathname                 = storage_path("api/config/mock_response_for_test/" . $sha1_test_data_filename);
        $sha1_test_data_request_detail_filename = sha1($test_data_filename) . "_requestDetail" . ".txt";
        $mock_response_request_detail_pathname  = storage_path("api/config/mock_response_for_test/" . $sha1_test_data_request_detail_filename);

        $sha1_test_data_status_code_filename = sha1($test_data_filename) . "_statusCode" . ".txt";
        $mock_response_status_code_pathname  = storage_path("api/config/mock_response_for_test/" . $sha1_test_data_status_code_filename);

        if (!$is_read_from_mock_file && env("IS_ENABLE_FILE_SAVE_MOCK_RESPONSE_FOR_OFFLINE_TEST", false)) {
            // write file
            file_put_contents($mock_response_pathname, $body);
            file_put_contents($mock_response_request_detail_pathname, $test_data_filename);
            file_put_contents($mock_response_status_code_pathname, $status_code);
        }

        $result = [$status_code, $body];
        if (isset($error_message)) {
            $result[] = $error_message;
        }

        return $result;
    }

    public static function fetchAccessTokenFromTheServer()
    {
        $url    = 'ecom/oauth/client_credential/accesstoken?grant_type=client_credentials';
        $method = 'post';

        $request_access_token = new \Illuminate\Http\Request();
        $request_access_token->setMethod('POST');
        $request_parameter                  = [];
        $request_parameter['client_id']     = env('CLIENT_ID', false);
        $request_parameter['client_secret'] = env('CLIENT_SECRET', false);
        $header                             = [];

        if (!$request_parameter['client_id'] || !$request_parameter['client_secret']) {
            $status_code = 400;
            $body        = 'client_id or client_secret is not set';

            return ['is_get_token' => false, 'message' => $body];
        }

        $request_access_token->replace($request_parameter);

        $content_token     = self::postGuzzleRequest($url, $method, $request_access_token, $header, env('WEMALL_ECOM_ENDPOINT', "https://kritsanunnun-eval-test.apigee.net/"));
        $status_code_token = $content_token[0];
        $body_token        = $content_token[1];

        if ($status_code_token != 200) {
            $status_code = 400;
            $body        = 'unable to fetch token';

            return ['is_get_token' => false, 'message' => $body];
        }

        $json_result_array = json_decode($body_token, true);
        $token             = $json_result_array['access_token'];

        try
        {
            file_put_contents('sample_page_when_offline/token.json', ['content' => $token, 'created_at' => date('Y-m-d H:i:s')]);
        } catch (\Exception $e) {
            $status_code = 400;
            $body        = 'unable to save token';

            return ['is_get_token' => false, 'message' => $body];
        }

        return ['is_get_token' => true, 'token' => $token];
    }

    public static function showResponse($result, $url)
    {
        $result_body_array = json_decode($result["body"], true);
        if (isset($result["status_code"]) && $result["status_code"] == "200") {
            $status_code = 200;

            return response()->json($result_body_array, $status_code);
        } else {
            $status_code          = 400;
            $server_error_message = '';
            $debug_body_data      = [];

            if (isset($result["error_message"]) && isset($result["error_message"]["data"]["system"])) {
                $server_error_message = $result["error_message"]["data"]["system"];
            }
            if (isset($result["body"])) {
                $body = $result["body"];
            }

            $status_code = $result["status_code"];

            if (isset($server_error_message) && gettype($server_error_message) == "string" && ($server_error_message == "Out of stock" || $server_error_message == "can't connect api store") && $url == "ecom/placeorder") {
                if (gettype($body) != "array" || empty($body) || !isset($body)) {
                    $body = [];
                }
                $body["message"]                         = [];
                $body["message"]["en"]                   = "Out of stock";
                $body["message"]["th"]                   = "สินค้าหมดสต๊อก";
                $debug_body_data["server_error_message"] = $server_error_message;
                $debug_body_data["url"]                  = $url;

            } elseif (isset($server_error_message) && gettype($server_error_message) == "string" && ($server_error_message == "failed to finish payment") && $url == "ecom/placeorder") {
                if (gettype($body) != "array" || empty($body) || !isset($body)) {
                    $body = [];
                }
                $body["message"]                         = [];
                $body["message"]["en"]                   = "unable to process the payment at the moment, please try again, or choose another payment method.\nRemark: in case you redeem TruePoint, please contact Call Center 02-020-2354";
                $body["message"]["th"]                   = "ไม่สามารถชำระเงินได้ในขณะนี้ กรุณาลองอีกครั้ง หรือ เลือกช่องทางการชำระเงินอื่น\nหมายเหตุ: กรณีแลกด้วย TruePoint กรุณาติดต่อ Call Center 02-020-2354";
                $debug_body_data["server_error_message"] = $server_error_message;
                $debug_body_data["url"]                  = $url;

            } elseif (isset($server_error_message) && gettype($server_error_message) == "string" && ($server_error_message == "please contact callcenter to correct this problem") && $url == "ecom/placeorder") {
                if (gettype($body) != "array" || empty($body) || !isset($body)) {
                    $body = [];
                }
                $body["message"]                         = [];
                $body["message"]["en"]                   = "unable to process the payment at the moment, please try again, or choose another payment method.\nRemark: in case you redeem TruePoint, please contact Call Center 02-020-2354";
                $body["message"]["th"]                   = "ไม่สามารถชำระเงินได้ในขณะนี้ กรุณาลองอีกครั้ง หรือ เลือกช่องทางการชำระเงินอื่น\nหมายเหตุ: กรณีแลกด้วย TruePoint กรุณาติดต่อ Call Center 02-020-2354";
                $debug_body_data["server_error_message"] = $server_error_message;
                $debug_body_data["url"]                  = $url;
            } elseif (isset($server_error_message) && gettype($server_error_message) == "string") {
                if (gettype($body) != "array" || empty($body) || !isset($body)) {
                    $body = [];
                }
                $body["message"]       = [];
                $body["message"]["en"] = $server_error_message;
                if (isset($result["error_message"])) {
                    if (isset($result["error_message"]["description"]) && gettype($result["error_message"]["description"]) == "string" && strrpos($result["error_message"]["description"], "SQL:") === false) {
                        $body["message"]["en"]     = "unable to process the payment at the moment, please try again, or choose another payment method.\nRemark: in case you redeem TruePoint, please contact Call Center 02-020-2354";
                        $body["message"]["th"]     = "ไม่สามารถชำระเงินได้ในขณะนี้ กรุณาลองอีกครั้ง หรือ เลือกช่องทางการชำระเงินอื่น\nหมายเหตุ: กรณีแลกด้วย TruePoint กรุณาติดต่อ Call Center 02-020-2354";
                        $debug_body_data["result"] = $result;
                        $debug_body_data["url"]    = $url;
                    } elseif (isset($result["error_message"]["description"]) && gettype($result["error_message"]["description"]) == "string") {
                        $body["message"]["en"]     = "unable to process the payment at the moment, please try again, or choose another payment method.\nRemark: in case you redeem TruePoint, please contact Call Center 02-020-2354";
                        $body["message"]["th"]     = "ไม่สามารถชำระเงินได้ในขณะนี้ กรุณาลองอีกครั้ง หรือ เลือกช่องทางการชำระเงินอื่น\nหมายเหตุ: กรณีแลกด้วย TruePoint กรุณาติดต่อ Call Center 02-020-2354";
                        $debug_body_data["result"] = $result;
                        $debug_body_data["url"]    = $url;
                    } else {
                        $body["message"]["en"]     = "unable to process the payment at the moment, please try again, or choose another payment method.\nRemark: in case you redeem TruePoint, please contact Call Center 02-020-2354";
                        $body["message"]["th"]     = "ไม่สามารถชำระเงินได้ในขณะนี้ กรุณาลองอีกครั้ง หรือ เลือกช่องทางการชำระเงินอื่น\nหมายเหตุ: กรณีแลกด้วย TruePoint กรุณาติดต่อ Call Center 02-020-2354";
                        $status_code               = 400;
                        $debug_body_data["result"] = $result;
                        $debug_body_data["url"]    = $url;
                    }
                    $error_description = array_get($result, 'error_message.description');
                    $wrap_error        = wrapPlaceOrderAmountGreaterError($error_description, $body, $status_code);
                    $body              = array_get($wrap_error, 'body');
                    $status_code       = array_get($wrap_error, 'status_code');

                    LogService::writeServiceLog(
                        "guzzleService0",
                        $url . "|" . json_encode_unicode($result),
                        json_encode_unicode([$error_description, $body, $status_code, $debug_body_data]),
                        (new \DateTime())->format('d/m/Y H:i:s')
                    );
                }
            }
            LogService::writeServiceLog(
                "guzzleService1",
                $url . "|" . json_encode_unicode($result),
                json_encode_unicode([$body, $status_code, $debug_body_data]),
                (new \DateTime())->format('d/m/Y H:i:s')
            );

            return response()->json($body, $status_code);
        }
    }
}
