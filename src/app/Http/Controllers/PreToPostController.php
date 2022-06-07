<?php
namespace App\Http\Controllers;

use App\Http\Controllers\ApiParentController;
use App\Services\AwsService;
use App\Services\ClmService;
use App\Services\ConfigService;
use App\Services\ImageService;
use App\Services\LogService;
use App\Services\PreToPostService;
use App\Services\WlsService;
use App\Services\OrderService;
use DateTime;
use Illuminate\Http\Request as LaravelRequest;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Support\Arr;
use Redis;

class PreToPostController extends ApiParentController
{
    public function postVerify(LaravelRequest $lrequest)
    {
        #region pre-step
        $body = [
            'is_pass'          => false,
            'tmp_check_result' => [],
        ];

        $rule = [
            'cart_hash' => 'required',

            'mobile_number' => 'required',
            'id_number'     => '',

            'redeem_code' => '',

            'birthday'       => 'required',
            'priceplan'      => 'required',
            'is_pre2post_ss' => '',

            'otp'                => '',
            'product_id_list'    => '',
            'product_sku_list'   => '',
            'campaign_code_list' => '',
        ];

        $tmp_input = $lrequest->all();
        // convert input data to the one we can send
        $validator = Validator::make($tmp_input, $rule);
        if ($validator->fails()) {
            $errors = [
                "message" => [
                    "en"                => "insufficient input",
                    "th"                => "กรุณากรอกข้อมูลให้ครบถ้วน",
                    "error_from_system" => implode(',', $validator->errors()->all()),
                ],
            ];

            return response($errors, 400);
        }

        $body['tmp_check_result']['input'] = $lrequest->all();

        $cart_hash        = $lrequest->input('cart_hash');
        $mobile_number    = $lrequest->input('mobile_number');
        $product_sku_list = $lrequest->input('product_sku_list');
        $birthday         = $lrequest->input('birthday');

        $body['cart_hash'] = $cart_hash;

        $age = DateTime::createFromFormat('d/m/Y', $birthday)->diff(new DateTime('now'))->y;
        if ($age < 17) {
            $errors = [
                "is_pass" => false,
                "message" => [
                    "en" => "not allow a customer below 17 years",
                    "th" => "ไม่อนุญาตสำหรับลูกค้าอายุต่ำกว่า 17 ปี",
                ],
            ];

            return response()->json($errors, 400);
        }

        // start of check for same sku in cart
        $tmp_same_sku_check_list = WlsService::getListCheckForSameSkuInCart($lrequest);
        if (isset($tmp_same_sku_check_list[$product_sku_list[0]])) {
            $content = WlsService::getResponseCheckForSameSkuInCart();

            return response()->json($content[1], $content[0]);
        }
        // end of check for same sku in cart
        #endregion

        $is_pre2post_self_service = false;
        $is_pre2post_bundle       = false;
        if ($lrequest->has('is_pre2post_ss') && $lrequest->input('is_pre2post_ss')) {
            // if correlation id exists in input, use pre2post self service redis db
            $is_pre2post_self_service = true;
            // check if pre2post ss hash exist to prevent security issue
            $tmp_redis_key = 'pre2post_self_service_data:cart_hash:' . $cart_hash . ':after_ekyc:data';
            $redis_data    = Redis::get($tmp_redis_key);

            if (empty($redis_data)) {
                $body                  = ['is_pass' => false, 'message' => []];
                $body['message']['en'] = 'no pre2post self service cart hash exist';
                $body['message']['th'] = 'ไม่พบ pre2post self service cart hash ที่ระบุ';

                return response()->json($body, 400);
            }

            $creditok_data = json_decode($redis_data, true);
            if (!empty(array_get($creditok_data, "tmp_check_result.input.mobile_number"))) {
                $mobile_number = array_get($creditok_data, "tmp_check_result.input.mobile_number");
            } else {
                $body                  = ['is_pass' => false, 'message' => []];
                $body['message']['en'] = 'no pre2post self service mobile number in pre ekyc verify exist';
                $body['message']['th'] = 'ไม่พบเบอร์โทรศัพท์ตอน verify pre ekyc pre2post self service';
                $body['redis_data']    = $redis_data;

                return response()->json($body, 400);
            }
        } elseif ($lrequest->has('is_pre2post_bundle') && $lrequest->input('is_pre2post_bundle')) {
            // if correlation id exists in input, use pre2post self service redis db
            $is_pre2post_bundle = true;
            // check if pre2post ss hash exist to prevent security issue
            $tmp_redis_key = 'pre2post_bundle_data:cart_hash:' . $cart_hash . ':after_ekyc:data';
            $redis_data    = Redis::get($tmp_redis_key);

            if (empty($redis_data)) {
                $body['message']['en'] = 'no pre2post bundle cart hash exist';
                $body['message']['th'] = 'ไม่พบ pre2post bundle cart hash ที่ระบุ';

                return response()->json($body, 400);
            }

            $creditok_data = json_decode($redis_data, true);
            if (!empty(array_get($creditok_data, "tmp_check_result.input.mobile_number"))) {
                $mobile_number = array_get($creditok_data, "tmp_check_result.input.mobile_number");
            } else {
                $body                  = ['is_pass' => false, 'message' => []];
                $body['message']['en'] = 'no pre2post bundle mobile number in pre ekyc verify exist';
                $body['message']['th'] = 'ไม่พบเบอร์โทรศัพท์ตอน verify pre ekyc pre2post bundle';
                $body['redis_data']    = $redis_data;

                return response()->json($body, 400);
            }

            $clm2_data = json_decode(array_get($creditok_data, 'tmp_check_result.CLM_2.1', ''), true);

            $id_number = array_get($clm2_data, 'getBillingProfileInfoResponse.return.billingProfileInfo.accountCustomerInfo.customer.certificateNumber');

            $body['tmp_check_result']['input']['mobile_number'] = array_get($creditok_data, 'tmp_check_result.input.mobile_number');
            $body['tmp_check_result']['input']['id_number']     = $id_number;
            $body['tmp_check_result']['customer_info']          = array_get($creditok_data, 'tmp_check_result.customer_info');
            $body['tmp_check_result']['image_liveness']         = array_get($creditok_data, 'tmp_check_result.image_liveness');
        } else {
            // another check input section for normal pre2post flow
            $rule = [
                'otp'                => 'required',
                'product_id_list'    => 'required|array',
                'product_sku_list'   => 'required|array',
                'campaign_code_list' => 'required|array',
            ];

            $tmp_input = $lrequest->all();
            // convert input data to the one we can send
            $validator = Validator::make($tmp_input, $rule);
            if ($validator->fails()) {
                $errors = [
                    "message" => [
                        "en"                => "insufficient input",
                        "th"                => "กรุณากรอกข้อมูลให้ครบถ้วน",
                        "error_from_system" => implode(',', $validator->errors()->all()),
                    ],
                ];

                return response($errors, 400);
            }
        }

        if (!($is_pre2post_self_service || $is_pre2post_bundle)) {
            #region step A (OTP)
            $step_name = 'A';

            $otp = $lrequest->input('otp');

            $url               = "wportal/otp/verify";
            $method            = "get";
            $tmp_lrequest      = new \Illuminate\Http\Request();
            $request_parameter = [
                "mobile_number" => $mobile_number,
                "otp"           => $otp,
            ];
            $tmp_lrequest->replace($request_parameter);
            $header     = [];
            $content    = WlsService::getVerifyOtpWls($url, $method, $tmp_lrequest, $header);
            $tmp_result = json_decode($content[1], true);

            $body['tmp_check_result'][$step_name]            = $content;
            $body['tmp_check_result'][$step_name]['is_pass'] = true;
            $body['tmp_check_result'][$step_name]['body']    = $tmp_result;
            $body['tmp_check_result'][$step_name]['input']   = $tmp_lrequest->all();

            if (array_get($tmp_result, 'status_code') !== 200 && !empty($tmp_result["data"])) {
                $body['tmp_check_result'][$step_name]['is_pass'] = false;

                $body["error_message"] = [
                    "en" => "not pass because of otp check",
                    "th" => "ไม่ผ่านเนื่องจากการตรวจสอบ otp",
                ];
                $body["message"] = [
                    "en" => "Sorry! You are not able to choose to buy a product.",
                    "th" => "ขออภัยค่ะ คุณไม่สามารถรับสิทธิพิเศษนี้",
                ];

                return response()->json($body, 400);
            }
            #endregion
        }

        if ($is_pre2post_bundle) {
            $step_name                                    = "CLM_2";
            $tmp_lrequest                                 = new \Illuminate\Http\Request();
            $tmp_lrequest['primResourceValue']            = $mobile_number;
            $tmp_lrequest['businessLine']                 = "MOBILE";
            $body['tmp_check_result'][$step_name]         = ClmService::getBillingProfileInfo($tmp_lrequest);
            $body['tmp_check_result'][$step_name]["body"] = json_decode($body['tmp_check_result'][$step_name][1], true);

            // start of tec-243 clm int is prepaid

            if ($body['tmp_check_result'][$step_name][0] >= 300) {
                $body                    = ["message" => ["en" => "Sorry! You are not able to choose to buy a product.", "th" => "ขออภัยค่ะ คุณไม่สามารถรับสิทธิพิเศษนี้"], "is_pass" => false, "tmp_check_result" => $body['tmp_check_result']];
                $body["reason_not_pass"] = "unable to contact CLM_2 server";

                return response()->json($body, 400);
            }
            $is_not_postpaid     = false;
            $customer_type_check = array_get($body['tmp_check_result'], "CLM_2.body.getBillingProfileInfoResponse.return.billingProfileInfo.accountCustomerInfo.customer.customerType.code");
            if (!empty($customer_type_check) && $customer_type_check === 'P'
            ) {
                $is_not_postpaid = true;
            }
            $body['tmp_check_result'][$step_name]["is_not_postpaid"] = $is_not_postpaid;

            if (!$is_not_postpaid) {
                $body               = ["message" => ["en" => "Sorry! You are not able to choose to buy a product.", "th" => "ขออภัยค่ะ คุณไม่สามารถรับสิทธิพิเศษนี้"], "is_pass" => false, "tmp_check_result" => $body['tmp_check_result']];
                $body["is_prepaid"] = false;

                return response()->json($body, 400);
            }

            if (isset($body['tmp_check_result'][$step_name]["body"]["getBillingProfileInfoResponse"]
                ["return"]["billingProfileInfo"]["accountCustomerInfo"]["customer"]["certificateNumber"])
            ) {
                $int_thai_id = $body['tmp_check_result'][$step_name]["body"]["getBillingProfileInfoResponse"]
                    ["return"]["billingProfileInfo"]["accountCustomerInfo"]["customer"]["certificateNumber"];
            }
        }

        #region bundle existing
        $step_name = 'bundle_existing';

        $campaign_code_list = $lrequest->input('campaign_code_list');
        $product_id_list    = $lrequest->input('product_id_list');
        $product_id         = $product_id_list[0];
        $campaign_id        = $campaign_code_list[0];
        $product_sku        = $product_sku_list[0];

        $aging            = ''; // durations of sim (days)
        $proposition_id   = '';
        $product_discount = 0;
        if (isset($product_sku) && isset($campaign_id)) {
            $url                   = "truemoveh/bundle-existing";
            $method                = "get";
            $header                = [];
            $tmp_lrequest          = new \Illuminate\Http\Request();
            $tmp_request_parameter = ["product_id" => explode("L", $product_id)[1]];
            $tmp_lrequest->replace($tmp_request_parameter);

            $content    = WlsService::getBundleExisting($url, $method, $tmp_lrequest, $header);
            $tmp_result = json_decode($content[1], true);

            if (!$is_pre2post_self_service && isset($tmp_result["data"]["record"])) {
                $pre2post_propo = Redis::get('pre2post:proposition');
                if (empty($pre2post_propo)) {
                    $body["message"] = [
                        "en" => "Not found proposition data",
                        "th" => "ไม่พบข้อมูล proposition",
                    ];

                    return response()->json($body, 400);
                }
                $pre2post_propo = json_decode($pre2post_propo, true);

                // if it is normal pre2post flow, just loop this
                foreach ($tmp_result["data"]["record"] as $bundle_existing) {
                    $campaign_type = array_get($bundle_existing, 'campaign_type');
                    // check campaign type 5 before find discount_list
                    if ($campaign_type !== '5') {
                        continue;
                    }

                    $discount_list = array_get($bundle_existing, 'discount_list', []);
                    foreach ($discount_list as $discount) {
                        $product_code  = array_get($discount, 'product_code');
                        $campaign_code = array_get($discount, 'campaign_code');
                        if ($product_code === $product_sku && $campaign_code === $campaign_id) {
                            $aging          = array_get($discount, 'aging', '');
                            $proposition_id = array_get($pre2post_propo, $aging, '');

                            $discount['proposition_amdoc'] = $proposition_id;

                            $product_discount               = $discount;
                            $product_discount['product_id'] = $product_id;

                            $body['tmp_check_result'][$step_name] = $discount;
                            $body['passed_output_H']              = [
                                $product_sku => $discount,
                            ];
                            break;
                        }
                    }
                }
            }
        }
        #endregion

        #region step g
        $redeem_code = $lrequest->input('redeem_code');
        if (!empty($redeem_code)) {
            $step_name = 'step_g';

            $tmp_lrequest = new \Illuminate\Http\Request();
            $request_parameter = [
                'thai_id'       => base64_encode($id_number),
                'privilege_uid' => $mobile_number,
                'service'       => 'truemove',
                'quantity'      => 1,
                'type'          => 'campaign_redeem',
                'campaigns'     => $campaign_code_list,
                'product_code'  => $product_sku_list[0],
                'redeem_code'   => $redeem_code,
            ];
            $tmp_lrequest->replace($request_parameter);

            $content = WlsService::postPortalPrivilegeCheck('', '', $tmp_lrequest, []);
            $tmp_result = json_decode($content[1], true);

            $body['tmp_check_result'][$step_name]            = $content;
            $body['tmp_check_result'][$step_name]['is_pass'] = true;
            $body['tmp_check_result'][$step_name]['body']    = $tmp_result;
            $body['tmp_check_result'][$step_name]['input']   = $tmp_lrequest->all();

            if (array_get($tmp_result, 'status_code') !== 0 && !empty($tmp_result["data"])) {
                $body['tmp_check_result'][$step_name]['is_pass'] = false;

                $body['error_message'] = [
                    'en' => 'not pass because of step g',
                    'th' => 'ไม่ผ่านเนื่องจากการตรวจสอบ privilege',
                ];
                $body['message'] = [
                    'en' => 'The code was incorrect. Please try again.',
                    'th' => 'รหัสไม่ถูกต้องกรุณาลองใหม่อีกครั้ง',
                ];

                return response()->json($body, 400);
            }
        }
        #endregion

        #region validate pre2post
        $step_name = 'pre2post';

        $id_number = $lrequest->input('id_number');
        if (isset($int_thai_id)) {
            $id_number = $int_thai_id;
        }

        $correlation_id = Str::uuid()->toString();

        $body['tmp_check_result']['correlation_id'] = $correlation_id;

        $tmp_lrequest = [
            'subscriber_number' => $mobile_number,
            'aging'             => $aging,
            'identification'    => $id_number,
            'proposition_id'    => $proposition_id,
            'birthday'          => $birthday,
        ];

        if ($is_pre2post_self_service) {
            // if it is pre2post self service flow, use aging 0
            $pre2post_propo = Redis::get('pre2post:proposition');
            if (empty($pre2post_propo)) {
                $body["message"] = [
                    "en" => "Not found proposition data",
                    "th" => "ไม่พบข้อมูล proposition",
                ];

                return response()->json($body, 400);
            }
            $pre2post_propo                 = json_decode($pre2post_propo, true);
            $tmp_lrequest['proposition_id'] = $pre2post_propo[0];

            // start of tec-1761 pre2post ss propo code
            if ($lrequest->has('nas_code')) {
                $tmp_lrequest['proposition_id'] = $lrequest->input('nas_code');
            }
            // start of tec-1761 pre2post ss propo code

            $tmp_lrequest['aging'] = "0";
        }

        $content    = PreToPostService::validate($correlation_id, $tmp_lrequest);
        $tmp_result = json_decode($content[1], true);

        $body['tmp_check_result'][$step_name]            = $content;
        $body['tmp_check_result'][$step_name]['is_pass'] = true;
        $body['tmp_check_result'][$step_name]['body']    = $tmp_result;
        $body['tmp_check_result'][$step_name]['input']   = $tmp_lrequest;

        $code = array_get($tmp_result, 'code');
        if ($content[0] !== 200 || $code !== '200') {
            $body['tmp_check_result'][$step_name]['is_pass'] = false;

            $body["error_message"] = [
                "en" => "not pass because of pre to post check",
                "th" => "ไม่ผ่านเนื่องจากการตรวจสอบ pre to post",
            ];
            $body["message"] = [
                "en" => "Sorry! You are not able to choose to buy a product.",
                "th" => "ขออภัยค่ะ คุณไม่สามารถรับสิทธิพิเศษนี้",
            ];

            return response()->json($body, 400);
        }
        #endregion
        $body['is_pass'] = true;

        // save to redis for 3 hours
        if (!($is_pre2post_self_service)) {
            $tmp_redis_key = 'pre2post_data:' . $cart_hash;
        } else {
            // check if pre2post ss hash exist to prevent security issue
            $tmp_redis_key = 'pre2post_self_service_data:cart_hash:' . $cart_hash . ':after_ekyc:data';
            $redis_data    = Redis::get($tmp_redis_key);
            if (empty($redis_data)) {
                $body                  = ['is_pass' => false, 'message' => []];
                $body['message']['en'] = 'no pre2post self service hash exist';
                $body['message']['th'] = 'ไม่พบ pre2post self service hash ที่ระบุ';

                return response()->json($body, 400);
            }
            $tmp_redis_key         = 'pre2post_self_service_data:cart_hash:' . $cart_hash . ':before_placeorder:data';
            $body['creditok_data'] = $creditok_data;
        }

        $body["is_pre2post_self_service"] = $is_pre2post_self_service;
        $body["is_pre2post_bundle"]       = $is_pre2post_bundle;

        $tmp_redis_value = json_encode($body, true);
        $set_redis       = Redis::set($tmp_redis_key, $tmp_redis_value, 'EX', 24 * 60 * 60);
        LogService::writeActionLog($lrequest, $tmp_redis_key . ':verify:set_redis: ' . $set_redis->getPayload());

        Redis::set('store:cart_id:' . $cart_hash, json_encode(["discount" => [$product_discount]]));

        $to_be_mock_privilege_data = [
            "product_id"    => $product_id,
            "product_code"  => $product_sku,
            "mobile_number" => $mobile_number,
            "id_number"     => $id_number,
            "product_type"  => "pre_to_post",
        ];
        if ($is_pre2post_self_service) {
            $to_be_mock_privilege_data["product_type"] = "pre_to_post_self_service";
        } elseif ($is_pre2post_bundle) {
            $to_be_mock_privilege_data["product_type"] = "pre_to_post";
        }
        $privilege_placeorder["passed_input"][] = $to_be_mock_privilege_data;
        WlsService::setRedisPrivilegePlaceorder($privilege_placeorder, $cart_hash, $product_id, $campaign_id);

        return response()->json($body, 200);
    }

    public function postCheck(LaravelRequest $lrequest)
    {
        $rule = [
            'cart_hash'      => 'required',
            'is_pre2post_ss' => '',
        ];

        $tmp_input = $lrequest->all();
        // convert input data to the one we can send
        $validator = Validator::make($tmp_input, $rule);
        if ($validator->fails()) {
            $errors = [
                "message" => [
                    "en"                => "insufficient input",
                    "th"                => "กรุณากรอกข้อมูลให้ครบถ้วน",
                    "error_from_system" => implode(',', $validator->errors()->all()),
                ],
                "is_pass" => false,
            ];

            return response()->json($errors, 400);

        }

        $cart_hash = $lrequest->input('cart_hash');

        $is_pre2post_self_service = false;
        $is_pre2post_bundle       = false;
        if ($lrequest->has('is_pre2post_ss') && $lrequest->input('is_pre2post_ss')) {
            $is_pre2post_self_service = true;
        } elseif ($lrequest->has('is_pre2post_bundle') && $lrequest->input('is_pre2post_bundle')) {
            $is_pre2post_bundle = true;
        }

        if ($is_pre2post_self_service) {
            $tmp_redis_key = 'pre2post_self_service_data:cart_hash:' . $cart_hash . ':after_ekyc:data';
        } elseif ($is_pre2post_bundle) {
            $tmp_redis_key = 'pre2post_bundle_data:cart_hash:' . $cart_hash . ':after_ekyc:data';
        } else {
            $tmp_redis_key = 'pre2post_data:' . $cart_hash;
        }

        $redis_data = Redis::get($tmp_redis_key);
        if (empty($redis_data)) {
            return response()->json(['is_pass' => false], 400);
        }

        $redis_data = json_decode($redis_data, true);

        // update customer_info to redis
        $answers = $lrequest->input('answers');
        if (!empty($answers)) {
            foreach ($answers as $answer) {
                $question = array_get($answer, 'question');
                $value    = array_get($answer, 'value');
                switch ($question) {
                    case 'prefix':
                        $redis_data['tmp_check_result']['customer_info']['title'] = $value;
                        break;

                    case 'first_name':
                        $redis_data['tmp_check_result']['customer_info']['first_name'] = $value;
                        break;

                    case 'last_name':
                        $redis_data['tmp_check_result']['customer_info']['last_name'] = $value;
                        break;

                    case 'home_district':
                        $redis_data['tmp_check_result']['customer_info']['amphur'] = $value;
                        break;

                    case 'home_province':
                        $redis_data['tmp_check_result']['customer_info']['city'] = $value;
                        break;

                    case 'home_address':
                        $redis_data['tmp_check_result']['customer_info']['house_no'] = explode(' ', $value)[0];
                        break;

                    case 'home_subdistrict':
                        $redis_data['tmp_check_result']['customer_info']['tumbon'] = $value;
                        break;

                    case 'home_zipcode':
                        $redis_data['tmp_check_result']['customer_info']['zip_code'] = $value;
                        break;

                    case 'date_of_expiration':
                        $redis_data['tmp_check_result']['customer_info']['identification_exp_date'] = $value;
                        break;

                    case 'gender':
                        $redis_data['tmp_check_result']['customer_info']['gender'] = $value;
                        break;

                    case 'mobile_no':
                        $redis_data['tmp_check_result']['customer_info']['mobile_no'] = $value;
                        break;
                }
            }

            Arr::set($redis_data, 'tmp_check_result.ocr_consent_info', OrderService::setOcrConsentInfo($tmp_input));

            $set_redis = Redis::set($tmp_redis_key, json_encode($redis_data, true), 'EX', 24 * 60 * 60);
            LogService::writeActionLog($lrequest, $tmp_redis_key . ':after_ekyc:set_redis: ' . $set_redis->getPayload());
        }

        // update image_liveness to redis
        $image_liveness = $lrequest->input('image_liveness');
        if (!empty($image_liveness)) {
            $redis_data['tmp_check_result']['image_liveness'] = $image_liveness;

            $set_redis = Redis::set($tmp_redis_key, json_encode($redis_data, true), 'EX', 24 * 60 * 60);
            LogService::writeActionLog($lrequest, $tmp_redis_key . ':after_ekyc:set_redis: ' . $set_redis->getPayload());
        }

        return response()->json(['is_pass' => true, 'redis_data' => $redis_data], 200);
    }

    public function verifyPreEkyc(LaravelRequest $lrequest)
    {
        $rule = [
            'otp'                => 'required',
            'mobile_number'      => 'required',
            'is_pre2post_bundle' => '',
        ];

        $tmp_input = $lrequest->all();
        // convert input data to the one we can send
        $validator = Validator::make($tmp_input, $rule);
        if ($validator->fails()) {
            $errors = [
                "message" => [
                    "en"                => "insufficient input",
                    "th"                => "กรุณากรอกข้อมูลให้ครบถ้วน",
                    "error_from_system" => implode(',', $validator->errors()->all()),
                ],
            ];

            return response($errors, 400);
        }

        $content = PreToPostService::verifyPreEkyc($lrequest);
        $body    = $content[1];

        $body['tmp_check_result']['input'] = $lrequest->all();
        $cart_hash                         = Str::uuid()->toString();
        $tmp_redis_key                     = 'pre2post_self_service_data:cart_hash:' . $cart_hash . ':after_ekyc:data';

        if ($lrequest->has('is_pre2post_bundle') && $lrequest->input('is_pre2post_bundle')) {
            $tmp_redis_key = 'pre2post_bundle_data:cart_hash:' . $cart_hash . ':after_ekyc:data';
        }

        $body['cart_hash'] = $cart_hash;
        $tmp_redis_value   = json_encode($body);
        Redis::set($tmp_redis_key, $tmp_redis_value, 'EX', 60 * 180);

        $content[1] = $body;

        return response()->json($content[1], $content[0]);
    }

    public function placeorderSs(LaravelRequest $lrequest)
    {
        $rule = [
            'cart_id' => 'required',
        ];

        $tmp_input = $lrequest->all();
        // convert input data to the one we can send
        $validator = Validator::make($tmp_input, $rule);
        if ($validator->fails()) {
            $errors = [
                "message" => [
                    "en"                => "insufficient input",
                    "th"                => "กรุณากรอกข้อมูลให้ครบถ้วน",
                    "error_from_system" => implode(',', $validator->errors()->all()),
                ],
            ];

            return response($errors, 400);
        }

        $content                     = [200, []];
        $content[1]                  = [];
        $content[1]["is_pass"]       = false;
        $content[1]["message"]       = [];
        $content[1]["message"]["en"] = "end of processing";
        $content[1]["message"]["th"] = "จบการประมวลผล";

        $cart_hash = $lrequest->input('cart_id');

        $tmp_redis_key = 'pre2post_self_service_data:cart_hash:' . $cart_hash . ':before_placeorder:data';
        // submit pre2post
        $pre2post_redis = Redis::get($tmp_redis_key);
        LogService::writeActionLog($lrequest, 'pre2post_redis: ' . $pre2post_redis);
        if (empty($pre2post_redis)) {
            $body                  = ['is_pass' => false, 'message' => []];
            $body['message']['en'] = 'no pre2post self service cart hash exist';
            $body['message']['th'] = 'ไม่พบ pre2post self service cart hash ที่ระบุ';

            return response()->json($body, 400);
        }

        $pre2post_ss_data = json_decode($pre2post_redis, true);
        $tmp_check_result = array_get($pre2post_ss_data, "creditok_data.tmp_check_result");
        $correlation_id   = array_get($pre2post_ss_data, 'tmp_check_result.correlation_id');
        // generate and upload pre2post image
        $pre2post_data = [
            'correlation_id'          => $correlation_id,
            'mobile_number'           => array_get($tmp_check_result, 'input.mobile_number'),
            'kyc_image'               => array_get($tmp_check_result, 'image_liveness'),
            'id_number'               => array_get($pre2post_ss_data, 'tmp_check_result.input.id_number'),
            'identification_exp_date' => array_get($tmp_check_result, 'customer_info.identification_exp_date'),
            'birthday'                => array_get($pre2post_ss_data, 'tmp_check_result.input.birthday'),
            'title'                   => array_get($tmp_check_result, 'customer_info.title'),
            'first_name'              => array_get($tmp_check_result, 'customer_info.first_name'),
            'last_name'               => array_get($tmp_check_result, 'customer_info.last_name'),
            'amphur'                  => array_get($tmp_check_result, 'customer_info.amphur'),
            'city'                    => array_get($tmp_check_result, 'customer_info.city'),
            'house_no'                => array_get($tmp_check_result, 'customer_info.house_no'),
            'street_name'             => array_get($tmp_check_result, 'customer_info.street_name', '-'),
            'tumbon'                  => array_get($tmp_check_result, 'customer_info.tumbon'),
            'zip_code'                => array_get($tmp_check_result, 'customer_info.zip_code'),
            'gender'                  => array_get($tmp_check_result, 'customer_info.gender'),
            'priceplan'               => array_get($pre2post_ss_data, 'tmp_check_result.input.priceplan'),
            'proposition_id'          => array_get($pre2post_ss_data, 'tmp_check_result.pre2post.input.proposition_id'),
            'company_code'            => array_get($pre2post_ss_data, 'tmp_check_result.pre2post.body.companyCode'),
        ];

        $order_id = Str::random(6);

        $form_data = [
            'correlation_id' => $correlation_id,
            'fullname'       => array_get($pre2post_data, 'first_name') . ' ' . array_get($pre2post_data, 'last_name'),
            'thai_id'        => array_get($pre2post_data, 'id_number'),
            'mobile_number'  => array_get($pre2post_data, 'mobile_number'),
            'order_id'       => $order_id,
            'transfer_date'  => date('d/m/Y'),
        ];
        $pre2post_image    = ImageService::generatePreToPostAppForm($form_data);
        $pre2post_s3       = json_decode(array_get($pre2post_image, 's3_path.1', ''), true);
        $pre2post_filename = array_get($pre2post_s3, 'filename');
        // upload ekyc image
        $ekyc_data = [
            'ekyc/' . $correlation_id => array_get($pre2post_data, 'kyc_image'),
        ];

        $ekyc_image              = AwsService::uploadS3($ekyc_data, 'PRE2POST');
        $ekyc_image              = json_decode(array_get($ekyc_image, '1', ''), true);
        $ekyc_filename           = array_get($ekyc_image, 'filename');
        $birthday                = array_get($pre2post_data, 'birthday');
        $identification_exp_date = array_get($pre2post_data, 'identification_exp_date');

        // generate and upload pre2post image

        $pre2post_image    = ImageService::generatePreToPostAppForm($form_data);
        $pre2post_s3       = json_decode(array_get($pre2post_image, 's3_path.1', ''), true);
        $pre2post_filename = array_get($pre2post_s3, 'filename');

        // upload ekyc image
        $ekyc_data = [
            'ekyc/' . $correlation_id => array_get($pre2post_data, 'kyc_image'),
        ];
        $ekyc_image    = AwsService::uploadS3($ekyc_data, 'PRE2POST');
        $ekyc_image    = json_decode(array_get($ekyc_image, '1', ''), true);
        $ekyc_filename = array_get($ekyc_image, 'filename');

        $birthday                = array_get($pre2post_data, 'birthday');
        $identification_exp_date = array_get($pre2post_data, 'identification_exp_date');

        $submit_data = [
            'secure_key'              => $order_id,
            'mobile_number'           => array_get($pre2post_data, 'mobile_number'),
            'kyc_image'               => array_get(explode('/', $ekyc_filename), '1'),
            'doc_change_p2p_image'    => array_get(explode('/', $pre2post_filename), '1'),
            'id_number'               => array_get($pre2post_data, 'id_number'),
            'identification_exp_date' => date('Y-m-d\TH:i:s\Z', strtotime($identification_exp_date)),
            'birthday'                => date('Y-m-d\TH:i:s\Z', strtotime(str_replace('/', '-', $birthday))),
            'title'                   => array_get($pre2post_data, 'title'),
            'first_name'              => array_get($pre2post_data, 'first_name'),
            'last_name'               => array_get($pre2post_data, 'last_name'),
            'amphur'                  => array_get($pre2post_data, 'amphur'),
            'city'                    => array_get($pre2post_data, 'city'),
            'house_no'                => array_get($pre2post_data, 'house_no'),
            'street_name'             => array_get($pre2post_data, 'street_name', '-'),
            'tumbon'                  => array_get($pre2post_data, 'tumbon'),
            'zip_code'                => array_get($pre2post_data, 'zip_code'),
            'gender'                  => array_get($pre2post_data, 'gender') === 'ชาย' ? 'M' : 'F',
            'priceplan'               => array_get($pre2post_data, 'priceplan'),
            'proposition_id'          => array_get($pre2post_data, 'proposition_id'),
            'company_code'            => array_get($pre2post_data, 'company_code'),
        ];

        if (!empty(Arr::get($pre2post_ss_data, 'creditok_data.tmp_check_result.ocr_consent_info'))) {
            $submit_data['ocr_consent_info'] = Arr::get($pre2post_ss_data, 'creditok_data.tmp_check_result.ocr_consent_info');
        }

        $to_be_replace_list = [
            "first_name" => 'billing_address.firstname',
            "last_name"  => 'billing_address.lastname',
            "house_no"   => 'billing_address.address1',
            "zip_code"   => 'billing_address.postcode',
        ];

        // insert data from input from billing
        $submit_data = PreToPostService::replace_submit_data($to_be_replace_list, $submit_data, $tmp_input);

        foreach (["city", "district", "province"] as $suggest_type) {
            try {
                $result_body_array[$suggest_type] = json_decode(file_get_contents(storage_path("api/config/sample_page_when_offline/" . "th_" . $suggest_type . ".json")), true);
                $master_data_file[$suggest_type]  = $result_body_array[$suggest_type];
            } catch (\Exception $e) {
                $status_code = 400;
                $body        = 'master data file for address suggestion not found' . " $suggest_type";

                return response()->json($body, $status_code); //*/
            }
        }

        // Billing Address Address Filter
        $tmp_district = "no_data";
        $tmp_city     = "no_data";
        $tmp_province = "no_data";

        if (!empty(array_get($tmp_input, "billing_address.district_id"))) {
            $parameter    = ["id" => array_get($tmp_input, "billing_address.district_id")];
            $tmp_district = App('App\Http\Controllers\OrderDetailController')->filter_only_answer($result_body_array["district"], $parameter)[0]["name"];
        }

        if (!empty(array_get($tmp_input, "billing_address.city_id"))) {
            $parameter = ["id" => array_get($tmp_input, "billing_address.city_id")];
            $tmp_city  = App('App\Http\Controllers\OrderDetailController')->filter_only_answer($result_body_array["city"], $parameter)[0]["name"];
        }

        if (!empty(array_get($tmp_input, "billing_address.province_id"))) {
            $parameter    = ["id" => array_get($tmp_input, "billing_address.province_id")];
            $tmp_province = App('App\Http\Controllers\OrderDetailController')->filter_only_answer($result_body_array["province"], $parameter)[0]["name"];
        }

        if ($tmp_district != "no_data") {
            $submit_data['tumbon'] = $tmp_district;
        }
        if ($tmp_city != "no_data") {
            $submit_data['amphur'] = $tmp_city;
        }
        if ($tmp_province != "no_data") {
            $submit_data['city'] = $tmp_province;
        }

        $submit_data["type"] = "self_service";
        //customer_info
        $content[1]["submit_data"] = $submit_data;

        $resp = PreToPostService::submit($correlation_id, $submit_data);
        LogService::writeActionLog($lrequest, 'submit pre2post ss response: ' . json_encode_unicode($resp));
        // save redis for success page
        $new_redis = json_encode([
            'mobile_number' => array_get($pre2post_data, 'mobile_number'),
            'id_number'     => array_get($pre2post_data, 'id_number'),
            'submit_data'   => $submit_data,
        ]);
        $tmp_redis_key = 'pre2post_self_service_data:order_id:' . $order_id . ':after_submit:data';
        Redis::set($tmp_redis_key, $new_redis, 'EX', 60 * 60);

        // end submit pre2post
        if ($resp[0] < 300) {
            $content[1]["is_pass"] = true;
            unset($content[1]["message"]);
        } else {
            $content[0]                  = 400;
            $content[1]["message"]       = [];
            $content[1]['message']['en'] = 'unable to finish pre2post self service placeorder';
            $content[1]['message']['th'] = 'ไม่สามารถ placeorder pre2post self service ได้';
        }
        $content[1]["resp"] = $resp;

        return response()->json($content[1], $content[0]);
    }

    public function getOrder(LaravelRequest $lrequest, $order_id)
    {
        $tmp_redis_key = 'pre2post_self_service_data:order_id:' . $order_id . ':after_submit:data';
        // submit pre2post
        $pre2post_redis = Redis::get($tmp_redis_key);
        LogService::writeActionLog($lrequest, 'get pre2post_ss_redis from order id: ' . $pre2post_redis);
        if (empty($pre2post_redis)) {
            $body                  = ['is_pass' => false, 'message' => []];
            $body['message']['en'] = 'no pre2post self service order_id exist';
            $body['message']['th'] = 'ไม่พบ pre2post self service order_id ที่ระบุ';

            return response()->json($body, 400);
        }

        $pre2post_ss_data            = json_decode($pre2post_redis, true);
        $content                     = [200, []];
        $content[1]                  = [];
        $content[1]["is_pass"]       = true;
        $content[1]["message"]       = [];
        $content[1]["message"]["en"] = "end of processing";
        $content[1]["message"]["th"] = "จบการประมวลผล";

        return response()->json($content[1], $content[0]);
    }

    public function getQandA()
    {
        try {
            $body = ConfigService::getQandAConfig();
            $content = ['status_code' => 200, 'body' => $body,];
        } catch (\Exception $e) {
            $content = [
                'status_code' => 400,
                'body' => [
                    'message' => [
                        'th' => get_class($e) . ', ' . $e->getMessage(),
                        'en' => get_class($e) . ', ' . $e->getMessage(),
                    ]
                ]
            ];
        }

        return $content;
    }
}
