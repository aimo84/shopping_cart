<?php
namespace App\Services;

use App\Services\WeOmniService;
use Illuminate\Http\Request as LaravelRequest;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Redis;

class SimActivationService
{
    public static function getRedis($correlation_id)
    {
        $redis_data = Redis::get('sim_activation:' . $correlation_id . ':redis_data');
        if (empty($redis_data)) {
            return false;
        }

        return json_decode($redis_data, true);
    }

    public static function validate($body)
    {
        $header = [
            'Content-Type' => 'application/json',
            'x-api-key'    => env('X_API_KEY_TOL_SSV', false),
        ];

        $correlation_id = array_get($body, 'correlation_id');

        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod('POST');
        $tmp_lrequest = [
            'correlationId'  => $correlation_id,
            'channel'        => '3GW-TRUESTORE',
            'saleRepInfo'    => [
                'dealerCode' => array_get($body, 'dealer_code', env('SHOP_CODE', '80100964')),
            ],
            'subscriberInfo' => [
                'simType' => array_get($body, 'sim_type'),
            ],
        ];

        $each_param_to_include = "validateDopa";

        $each_param_check = \Arr::get($body, $each_param_to_include);
        if (!is_null($each_param_check)) {
            \Arr::set($tmp_lrequest, $each_param_to_include, $each_param_check);
        }

        $sim_serial = array_get($body, 'sim_serial');
        if ($sim_serial) {
            $tmp_lrequest['inventoryInfo']['sim']['serial'] = array_get($body, 'sim_serial');
        }

        $subscriber_info = array_get($body, 'subscriber_info');
        if (!empty($subscriber_info)) {
            $tmp_lrequest['subscriberInfo']['companyCode'] = array_get($subscriber_info, 'company_code');
            $tmp_lrequest['subscriberInfo']['proposition'] = array_get($subscriber_info, 'proposition');
        }

        $customer_info = array_get($body, 'customer_info');
        if (!empty($customer_info)) {
            $tmp_lrequest['customerInfo']['identification'] = array_get($customer_info, 'identification');
            $tmp_lrequest['customerInfo']['birthDate']      = array_get($customer_info, 'birth_date');
        }
        $lrequest->replace($tmp_lrequest);

        $content = GuzzleService::postGuzzleRequest(
            'sim-activation/validate/' . $correlation_id,
            'post',
            $lrequest,
            $header,
            env('AWS_GATEWAY_URL_TOL_SSV', false) . '/'
        );

        LogService::writeServiceLog(
            "sim-activation:validate",
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

    public static function getDeeplink($body)
    {
        $header = [
            'Content-Type' => 'application/json',
            'x-api-key'    => env('X_API_KEY_TOL_SSV', false),
        ];

        $store_service = new StoreService();

        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod('POST');
        $tmp_lrequest = [
            'correlationId'    => array_get($body, 'correlation_id'),
            'msisdn'           => array_get($body, 'msisdn'),
            'simSerial'        => array_get($body, 'sim_serial'),
            'priceplan'        => $store_service->processGetExternalPricePlanCodeByPricePlanCode(array_get($body, 'priceplan')),
            'offer'            => array_get($body, 'offer'),
            'dealerCode'       => array_get($body, 'dealer_code'),
            'saleId'           => array_get($body, 'sale_id'),
            'companyCode'      => array_get($body, 'company_code'),
            'subscriptionType' => 'POSTPAID',
            'lang'             => array_get($body, 'lang'),
        ];
        $lrequest->replace($tmp_lrequest);

        $content = GuzzleService::postGuzzleRequest(
            'sim-activation/deeplink',
            'post',
            $lrequest,
            $header,
            env('AWS_GATEWAY_URL_TOL_SSV', false) . '/'
        );

        LogService::writeServiceLog(
            "sim-activation:getDeeplink",
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

    public static function createSim($body)
    {
        $header = [
            'Content-Type' => 'application/json',
            'x-api-key'    => env('X_API_KEY_TOL_SSV', false),
        ];

        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod('POST');
        $tmp_lrequest = [
            'sim_serial'     => array_get($body, 'sim_serial'),
            'correlation_id' => array_get($body, 'correlation_id'),
            'msisdn'         => array_get($body, 'msisdn'),
        ];
        $lrequest->replace($tmp_lrequest);

        $content = GuzzleService::postGuzzleRequest(
            'sim-activation/sim-serials',
            'post',
            $lrequest,
            $header,
            env('AWS_GATEWAY_URL_TOL_SSV', false) . '/'
        );

        LogService::writeServiceLog(
            'sim-activation:createSim',
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

    public static function updateSim($body)
    {
        $header = [
            'Content-Type' => 'application/json',
            'x-api-key'    => env('X_API_KEY_TOL_SSV', false),
        ];

        $sim_serial = array_get($body, 'sim_serial');

        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod('PUT');
        $tmp_lrequest = [
            'sim_serial'     => $sim_serial,
            'correlation_id' => array_get($body, 'correlation_id'),
            'msisdn'         => array_get($body, 'msisdn'),
            'status'         => 'success',
        ];
        $lrequest->replace($tmp_lrequest);

        $content = GuzzleService::postGuzzleRequest(
            'sim-activation/sim-serials/' . $sim_serial,
            'put',
            $lrequest,
            $header,
            env('AWS_GATEWAY_URL_TOL_SSV', false) . '/'
        );

        LogService::writeServiceLog(
            'sim-activation:updateSim',
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

    public static function submit($body)
    {
        $header = [
            'Content-Type' => 'application/json',
            'x-api-key'    => env('X_API_KEY_TOL_SSV', false),
        ];

        $correlation_id = array_get($body, 'correlation_id');

        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod('POST');
        $tmp_lrequest = [
            'correlationId'   => $correlation_id,
            'channel'         => '3GW-TRUESTORE',
            'validateProfile' => 'Y',
            'submitDate'      => date('Y-m-d\TH:i:s\Z'),
            'saleRepInfo'     => [
                'dealerCode' => array_get($body, 'dealer_code'),
            ],
            'subscriberInfo'  => [
                'simType'          => 'PRE',
                'subscriberNumber' => array_get($body, 'subscriber_number'),
                'priceplan'        => array_get($body, 'priceplan'),
                'proposition'      => array_get($body, 'proposition'),
                'companyCode'      => array_get($body, 'company_code'),
                'billFormat'       => 'S',
                'billLanguage'     => 'TH',
            ],
            'inventoryInfo'   => [
                'sim' => [
                    'serial' => array_get($body, 'sim_serial'),
                ],
            ],
            'customerInfo'    => [
                'identification'        => array_get($body, 'id_number'),
                'identificationExpDate' => array_get($body, 'identification_exp_date'),
                'identificationType'    => 'I',
                'birthDate'             => array_get($body, 'birthday'),
                'language'              => 'TH',
                'firstName'             => array_get($body, 'first_name'),
                'lastName'              => array_get($body, 'last_name'),
                'kycImage'              => array_get($body, 'kyc_image'),
                'kycImageType'          => 'image/jpeg',
                'customerAddress'       => [
                    'amphur'     => array_get($body, 'amphur'),
                    'city'       => array_get($body, 'city'),
                    'houseNo'    => array_get($body, 'house_no'),
                    'streetName' => array_get($body, 'street_name'),
                    'tumbon'     => array_get($body, 'tumbon'),
                    'zip'        => array_get($body, 'zip_code'),
                ],
            ],
        ];
        $lrequest->replace($tmp_lrequest);

        $content = GuzzleService::postGuzzleRequest(
            'sim-activation/submit/' . $correlation_id,
            'post',
            $lrequest,
            $header,
            env('AWS_GATEWAY_URL_TOL_SSV', false) . '/'
        );

        LogService::writeServiceLog(
            'sim-activation:submit',
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

    public static function markUseSim($body)
    {
        $header = [
            'Content-Type' => 'application/json',
            'x-api-key'    => env('X_API_KEY_TOL_SSV', false),
        ];

        $lrequest  = new \Illuminate\Http\Request();
        $plaintext = 'msisdn_otp=' . array_get($body, 'msisdn_otp') .
        '|type=' . array_get($body, 'type') .
        '|status=success' .
        '|sku=' . array_get($body, 'sku') .
        '|product_id=' . array_get($body, 'product_id') .
        '|order_id=' . array_get($body, 'order_id') .
        '|group_type=' . array_get($body, 'group_type', 'typhoon') .
        '|thai_id=' . array_get($body, 'thai_id') .
        '|activated_sim=' . array_get($body, 'activated_sim') .
        '|action=' . array_get($body, 'action') .
        '|channel=' . array_get($body, 'channel');
        $token = WeOmniService::encryptAesToken($plaintext);
        $lrequest->setMethod('POST');
        $lrequest->replace(['token' => $token]);

        $content = GuzzleService::postGuzzleRequest(
            'sim-activation/mark-use-sim',
            'post',
            $lrequest,
            $header,
            env('AWS_GATEWAY_URL_TOL_SSV', false) . '/'
        );

        LogService::writeServiceLog(
            'sim-activation:mark-use-sim',
            json_encode_unicode(['plaintext' => $plaintext, 'token' => $token]),
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

    public static function verifyThaiId($thai_id)
    {
        $header = [
            'Content-Type' => 'application/json',
            'x-api-key'    => env('X_API_KEY_TOL_SSV', false),
        ];

        $lrequest  = new \Illuminate\Http\Request();
        $plaintext = 'thai_id=' . $thai_id;
        $token     = WeOmniService::encryptAesToken($plaintext);
        $lrequest->setMethod('POST');
        $lrequest->replace(['token' => $token]);

        $content = GuzzleService::postGuzzleRequest(
            'sim-activation/mark-use-sim/verify',
            'post',
            $lrequest,
            $header,
            env('AWS_GATEWAY_URL_TOL_SSV', false) . '/'
        );

        LogService::writeServiceLog(
            'sim-activation:verify-thai-id',
            json_encode_unicode(['plaintext' => $plaintext, 'token' => $token]),
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

    public static function postPostpaidVerify($input, LaravelRequest $lrequest)
    {
        try {
            //shop_code
            \Arr::set($input, "shop_code", env("SHOP_CODE", false));

            $sim_type       = array_get($input, 'sim_type') === 'prepaid' ? 'PRE' : 'POST';
            $correlation_id = \Illuminate\Support\Str::uuid()->toString();

            $birth_date = str_split(array_get($input, 'birth_date'), 4);
            $date_month = array_get($birth_date, 0);
            $year       = array_get($birth_date, 1);
            $birth_date = date_create_from_format('jmY', '' . $date_month . $year);

            $sim_source_type = $lrequest->input('sim_source_type');
            if ($sim_source_type === 'e-sim') {
                $tmp_request = [
                    'correlationId' => $correlation_id,
                    'channel'        => '3GW-TRUESTORE',
                    'saleRepInfo'    => [
                        'dealerCode' => '' . array_get($input, 'shop_code'),
                    ],
                    'customerInfo'   => [
                        'identification'     => '' . array_get($input, 'id_card'),
                        'identificationType' => 'I',
                        'birthDate'          => date_format($birth_date, 'd/m/Y'),
                    ],
                ];

                if ($sim_type === 'POST') {
                    $tmp_request['flowID']         = 'F002';
                    $tmp_request['subscriberInfo'] = [
                        'companyCode' => array_get($input, 'company_code'),
                        'propoId'     => array_get($input, 'proposition'),
                    ];
                } else {
                    $tmp_request['flowID'] = 'F001';
                }

                $tmp_lrequest = new \Illuminate\Http\Request();
                $tmp_lrequest->replace($tmp_request);

                $data_to_be_validate = $tmp_lrequest;
                $data_validate       = WeOmniService::postPrevalidation($data_to_be_validate);
            } else {
                $tmp_request = [
                    'correlation_id'  => $correlation_id,
                    'sim_type'        => $sim_type,
                    'dealer_code'     => '' . array_get($input, 'shop_code'),
                    'subscriber_info' => [
                        'company_code' => array_get($input, 'company_code'),
                        'proposition'  => array_get($input, 'proposition'),
                    ],
                    'customer_info'   => [
                        'identification' => '' . array_get($input, 'id_card'),
                        'birth_date'     => date_format($birth_date, 'd/m/Y'),
                    ],
                ];

                $to_be_add_param     = [];
                $input_validate_dopa = \Arr::get($input, "validateDopa");
                if (!empty($input_validate_dopa)) {
                    $to_be_add_param["validateDopa"] = $input_validate_dopa;
                }

                $data_to_be_validate = array_merge($tmp_request, $to_be_add_param);
                $data_validate       = SimActivationService::validate($data_to_be_validate);
            }

            $result_validate = json_decode(array_get($data_validate, 1, '{}'), true);

            $result = [
                'correlation_id'  => $correlation_id,
                'result'          => $result_validate,
                'is_exceed_limit' => false,
                'dealer_code'     => env("SHOP_CODE", false),
            ];

            $status_code = 200;

            $code = array_get($result_validate, 'code');

            $result['is_pass'] = false;
            if (array_get($data_validate, 0, 200) != 200 || $code != '200') {
                if (empty($result_validate) && !empty(\Arr::get($data_validate, 2))) {
                    $result_validate['result'] = \Arr::get($data_validate, 2);
                    $result_validate['code']   = \Arr::get($data_validate, "2.code");
                    $result['result']          = \Arr::get($data_validate, 2);

                    $code = array_get($result_validate, 'code');
                }
                $status_code = 406;
                if ($code == 105) {
                    $result['is_exceed_limit'] = true;
                }

                $result['message'] = ErrorMessageService::getErrorMessageVerifyOfflineVhora($code);
            } else {
                $result['is_pass'] = true;
            }

            // start of TEC-1901 fnf reserve privilege api
            $token                               = $lrequest->header('tmvh-token');
            $is_enable_fnf_reserve_privilege_api = Redis::get("truestore:is_enable_by_1:disable_by_0_or_del_key:fnf_reserve_privilege_api:redis_data");
            if ($result['is_pass'] && !empty($token) && $is_enable_fnf_reserve_privilege_api) {
                $aes_wecamp_result             = WeOmniService::getAesWecamp($token);
                $tmp_explode_aes_wecamp_result = explode('|', \Arr::get($aes_wecamp_result, '1.original_plaintext'));
                $emp_id                        = \Arr::get($tmp_explode_aes_wecamp_result, '0');
                $company_group                 = \Arr::get($tmp_explode_aes_wecamp_result, '1');
                $user_type                     = \Arr::get($tmp_explode_aes_wecamp_result, '2');
                $ref_code                      = \Arr::get($tmp_explode_aes_wecamp_result, '3');

                if (in_array(strtoupper($user_type), ["E", "F"])) {
                    $tmp_lrequest = new \Illuminate\Http\Request();
                    $tmp_lrequest->setMethod('POST');

                    $tmp_lrequest["empId"]         = $emp_id;
                    $tmp_lrequest["empThaiId"]     = '' . array_get($input, 'id_card');
                    $tmp_lrequest["companyGroup"]  = $company_group; // can be empty string
                    $tmp_lrequest["serviceNo"]     = '' . array_get($input, 'mobile_number');
                    $tmp_lrequest["product"]       = "mobile";
                    $tmp_lrequest["privilegeType"] = (strtoupper($user_type) == "E") ? "emp" : "fnf";

                    if ($tmp_lrequest["privilegeType"] == "fnf") {
                        $tmp_lrequest["refCode"]   = $ref_code;
                        $tmp_lrequest["fnfThaiId"] = '' . array_get($input, 'id_card');
                    }

                    $response_data                        = SimActivationService::postReservePrivilege($tmp_lrequest->post());
                    $result["reserve_privilege_response"] = $response_data;
                    $tmp_data_to_be_validate              = [];
                    $tmp_data_to_be_validate[0]           = $data_to_be_validate;
                    $tmp_data_to_be_validate[1]           = $tmp_lrequest->post();
                    $data_to_be_validate                  = $tmp_data_to_be_validate;
                }
            }
            // end of TEC-1901 fnf reserve privilege api

            $response = ['response' => $result, 'code' => $status_code, 'request' => $data_to_be_validate];

        } catch (\InvalidArgumentException $e) {
            $response = SimActivationService::setException('sim-activation:verify-postpaid-invalid-arg-exception', $input, $e->getMessage(), $e->getCode());
        } catch (Exception $e) {
            $response = SimActivationService::setException('sim-activation:verify-postpaid-exception', $input, $e->getMessage(), 500);
        }

        return $response;
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

    public static function postReservePrivilege($input)
    {
        $rule = [
            "empId"         => "required|string",
            "empThaiId"     => "required|string",
            "companyGroup"  => "string",
            "serviceNo"     => "required|string",
            "product"       => "required|string",
            "privilegeType" => "required|string",
            "refCode"       => "string",
            "fnfThaiId"     => "string",

            "firstName"     => "string",
            "lastName"      => "string",
            "omxTrackingId" => "string",
        ];

        $tmp_input = $input;
        // convert input data to the one we can send
        $validator = Validator::make($tmp_input, $rule);
        if ($validator->fails()) {
            $errors = ["message" => ["en" => "insufficient input", "th" => "กรุณากรอกข้อมูลให้ครบถ้วน"], "error_from_system" => implode(',', $validator->errors()->all())];

            $content_array             = [];
            $content_array["request"]  = $tmp_input;
            $content_array["response"] = $errors;
            $content_array["code"]     = 400;
            LogService::writeServiceLog(
                "sim-activation:postReservePrivilege:1",
                json_encode_unicode($input),
                json_encode_unicode($content_array),
                date('d/m/Y H:i:s')
            );

            return $content_array;
        }

        $tmp_header  = TolSelfService::getHeader('Authorization_cp_privilege');
        $tmp_message = \Arr::get($tmp_header, "message.en");
        if (!empty($tmp_message)) {
            $content_array             = [];
            $content_array["request"]  = $tmp_input;
            $content_array["response"] = $tmp_header;
            $content_array["code"]     = 400;
            LogService::writeServiceLog(
                "sim-activation:postReservePrivilege:2",
                json_encode_unicode($input),
                json_encode_unicode($content_array),
                date('d/m/Y H:i:s')
            );

            return $content_array;
        }

        $tmp_header["correlation_id"] = Str::uuid()->toString();
        $header                       = $tmp_header;
        $current_url                  = "/cp-privilege/reserve-privilege";
        $url                          = $current_url;

        $tmp_lrequest      = new \Illuminate\Http\Request();
        $request_parameter = $tmp_input;
        $tmp_lrequest->setMethod('POST');
        $tmp_lrequest->replace($request_parameter);
        $method = 'post';

        $content = GuzzleService::postGuzzleRequest($url, $method, $tmp_lrequest, $header, env('AWS_GATEWAY_URL', false));

        $patterned_content             = [];
        $patterned_content["code"]     = $content[0];
        $patterned_content["response"] = json_decode($content[1], true);
        if ($patterned_content["code"] != 200) {
            $patterned_content["response"]                      = $content[2];
            $patterned_content["response"]["original_response"] = $content[1];
        }

        $patterned_content["request"] = $tmp_lrequest->post();
        LogService::writeServiceLog(
            "sim-activation:postReservePrivilege:3",
            json_encode_unicode($input),
            json_encode_unicode($content),
            date('d/m/Y H:i:s')
        );

        return $patterned_content;
    }

    public static function fetchAccessTokenCPPrivilege()
    {
        $redis_key_name = 'truestore:oauth_token:privilege:redis_data';
        $token          = Redis::get($redis_key_name);
        if (!empty($token)) {
            $content                    = [];
            $content[0]                 = 200;
            $content[1]                 = [];
            $content[1]['is_get_token'] = true;
            $content[1]['access_token'] = $token;

            LogService::writeServiceLog(
                "sim-activation:fetchAccessTokenCPPrivilege:1",
                "no_input",
                json_encode_unicode($content),
                date('d/m/Y H:i:s')
            );

            return $content;
        }

        $url    = '/cp-privilege/auth-token';
        $method = 'post';

        $request_access_token = new \Illuminate\Http\Request();
        $request_access_token->setMethod('POST');
        $request_parameter                  = [];
        $request_parameter['client_id']     = env('CP_PRIVILEGE_CLIENT_ID', false);
        $request_parameter['client_secret'] = env('CP_PRIVILEGE_CLIENT_SECRET', false);
        $request_parameter['grant_type']    = "client_credentials";
        $request_access_token->replace($request_parameter);

        $fixed_parameter_list["base_url"] = env('AWS_GATEWAY_URL', false) . "/";

        $header = TolSelfService::getHeader();

        if (!$request_parameter['client_id'] || !$request_parameter['client_secret']) {
            $message_str = 'CP_PRIVILEGE_CLIENT_ID or CP_PRIVILEGE_CLIENT_SECRET is not set';

            $content                    = [];
            $content[0]                 = 400;
            $content[1]                 = [];
            $content[1]['message']      = ["en" => $message_str, "th" => $message_str];
            $content[1]['is_get_token'] = false;

            LogService::writeServiceLog(
                "sim-activation:fetchAccessTokenCPPrivilege:2",
                "no_input",
                json_encode_unicode($content),
                date('d/m/Y H:i:s')
            );

            return $content;
        }

        $request_access_token->replace($request_parameter);

        $content_token     = GuzzleService::postGuzzleRequest($url, $method, $request_access_token, $header, env('AWS_GATEWAY_URL', false));
        $status_code_token = $content_token[0];
        $body_token        = $content_token[1];

        if ($status_code_token != 200) {
            $status_code = 400;
            $message_str = "unable to fetch token";

            $content                    = [];
            $content[0]                 = 400;
            $content[1]                 = [];
            $content[1]['message']      = ["en" => $message_str, "th" => $message_str];
            $content[1]['body']         = $body_token;
            $content[1]['is_get_token'] = false;

            LogService::writeServiceLog(
                "sim-activation:fetchAccessTokenCPPrivilege:3",
                "no_input",
                json_encode_unicode($content),
                date('d/m/Y H:i:s')
            );

            return $content;
        }

        $json_result_array = json_decode($body_token, true);
        $token             = $json_result_array['access_token'];

        try
        {
            Redis::set($redis_key_name, $token, 'EX', 5 * 60); // 9 minutes
        } catch (\Exception $e) {
            $status_code = 400;
            $message_str = "unable to save token";

            $content                    = [];
            $content[0]                 = 400;
            $content[1]                 = [];
            $content[1]['message']      = ["en" => $message_str, "th" => $message_str];
            $content[1]['is_get_token'] = false;

            LogService::writeServiceLog(
                "sim-activation:fetchAccessTokenCPPrivilege:4",
                "no_input",
                json_encode_unicode($content),
                date('d/m/Y H:i:s')
            );

            return $content;
        }

        $content                    = [];
        $content[0]                 = 200;
        $content[1]                 = [];
        $content[1]['is_get_token'] = true;
        $content[1]['access_token'] = $token;
        LogService::writeServiceLog(
            "sim-activation:fetchAccessTokenCPPrivilege:5",
            "no_input",
            json_encode_unicode($content),
            date('d/m/Y H:i:s')
        );

        return $content;
    }
}
