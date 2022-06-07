<?php
namespace App\Services;

use Exception;
use Illuminate\Support\Str;
use Redis;
use App\Facades\OrderService;
use Illuminate\Support\Arr;

class MNPService
{
    public static function validateSecurityMNP($lrequest)
    {
        $security_key = $lrequest->input('security_key');
        if (Redis::exists('mnp-product:' . $security_key) == null) {
            return [
                400,
                [
                    'message' => [
                        'en' => 'Invalid Authentication',
                        'th' => 'Invalid Authentication',
                    ],
                ],
            ];
        }

        $result = [
            200,
            [
                'message'          => [
                    'en' => 'pass',
                    'th' => 'ผ่าน',
                ],
                'mnp-product-data' => json_decode(Redis::get('mnp-product:' . $security_key), true),
            ],
        ];
        $result[1]['mnp-ussd-data'] = Redis::get('mnp-product:' . $security_key . ':pin_code');

        return $result;
    }

    public static function checkOtp($lrequest)
    {
        $mobile_number = $lrequest->input('mobile_number');
        $otp           = $lrequest->input('otp');

        if ($mobile_number == null || $otp == null) {
            $final_response = [
                400,
                [
                    'message' => [
                        'en' => 'please fill required field including Mobile Number and OTP.',
                        'th' => 'กรุณาระบุข้อมูลของเบอร์โทรศัพท์และรหัส OTP',
                    ],
                ],
            ];

            return $final_response;
        }

        $tmp_parameters = [
            "mobile_number" => $mobile_number,
            "otp"           => $otp,
        ];

        if ($lrequest->has("mnp_otp_key")) {
            $tmp_parameters["random_hash_for_otp"] = $lrequest->input("mnp_otp_key");
        }

        $check_otp = WlsService::checkForAOtp('', $lrequest, $tmp_parameters);

        if (array_get($check_otp, 'is_pass')) {
            $security_key      = Str::uuid()->toString();
            $data_inside_redis = [
                'security_key'  => $security_key,
                'mobile_number' => $mobile_number,
            ];
            $priceplan_code_ticket_hash_data = Redis::get("mnp-bundling-ticket:priceplan_code_ticket_hash:" . $lrequest->input("priceplan_code_ticket_hash") . ":verify");
            if ($priceplan_code_ticket_hash_data != null) {
                $data_inside_redis["priceplan_code"] = $priceplan_code_ticket_hash_data;
            }
            Redis::set('mnp-product:' . $security_key, json_encode(
                $data_inside_redis,
                true
            ), 'EX', 60 * 60 * 3);
            $final_response = [
                200,
                [
                    'status'       => 'success',
                    'message'      => [
                        'en' => 'otp check successful pass',
                        'th' => 'ตรวจสอบ otp ถูกต้อง',
                    ],
                    'security_key' => $security_key,
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

    public static function postVerifyMobileNumber($verify_mobile_params)
    {
        $mnp_request = [];
        $url         = '/mnp/verify-mobile-number';
        $headers     = [
            'x-api-key'    => env('X_API_KEY_TOL_SSV', false),
            'Content-Type' => 'application/json',
        ];
        $method               = 'POST';
        $fixed_parameter_list = [
            'base_url' => env('AWS_GATEWAY_URL_TOL_SSV', false),
        ];
        $tmp_lrequest                  = new \Illuminate\Http\Request();
        $tmp_lrequest['mobile_number'] = $verify_mobile_params['mobile_number'];

        $result = WlsService::operateRequestAction($url, $method, $tmp_lrequest, $headers, $fixed_parameter_list);

        LogService::writeServiceLog(
            "verifyMobileNumberMNP",
            json_encode_unicode(["tmp_lrequest" => $tmp_lrequest->all(), 'fixed_parameter_list' => $fixed_parameter_list], true),
            json_encode_unicode($result, true),
            (new \DateTime())->format('d/m/Y H:i:s')
        );

        $result["is_pass"]         = false;
        $json_decode_verify_result = [];

        if (isset($result[1])) {
            $json_decode_verify_result = json_decode($result[1], true);
        }

        if (isset($json_decode_verify_result["code"]) && $json_decode_verify_result["code"] == 200) {
            $result["is_pass"] = true;
        }

        return $result;
    }

    public static function checkPinCode($lrequest)
    {
        $validate_security = self::validateSecurityMNP($lrequest);
        if ($validate_security[0] !== 200) {
            return $validate_security;
        }

        if ($validate_security[1]["mnp-product-data"]["mobile_number"] == null ||
            ($lrequest->has('mobile_number') && $lrequest->input('mobile_number') != $validate_security[1]["mnp-product-data"]["mobile_number"])
        ) {
            $final_response = [
                400,
                [
                    'status'  => 'fail',
                    'message' => [
                        'en' => 'Sorry, unable to process because incorrect mobile phone input',
                        'th' => 'ไม่สามารถทำรายการได้ เนื่องจากข้อมูลเบอร์โทรศัพท์ไม่ถูกต้อง',
                    ],
                ],
            ];

            return $final_response;
        }

        $correlation_id = $lrequest->input('security_key');
        $service_id     = $validate_security[1]["mnp-product-data"]["mobile_number"]; // fix dp-92-2
        $mnp_type       = $lrequest->input('mnp_type');
        $order_date     = date("Y/m/d H:m:s");
        $sale_id        = env('SHOP_CODE', '80100964');
        $company        = 'RM';
        $pin_code       = $lrequest->input('pin_code');

        // Verify mobile has any pending MNP order
        $verify_mobile_params  = ['mobile_number' => $service_id];
        $verify_mobile_request = self::postVerifyMobileNumber($verify_mobile_params);

        if (!$verify_mobile_request["is_pass"]) {
            $final_response = [
                400,
                [
                    'status'  => 'fail',
                    'message' => [
                        'en' => 'Sorry, Can not do the transaction Because your phone number in-process MNP',
                        'th' => 'ไม่สามารถทำรายการได้ เนื่องหมายเลขของคุณอยู่ระหว่างการย้ายค่าย',
                    ],
                ],
            ];

            return $final_response;
        }

        // MNP 1002
        $step1002_params = [
            'step'                 => '1002',
            'correlation_id'       => $correlation_id,
            'mnp_type'             => $mnp_type,
            'service_id'           => $service_id,
            'order_date'           => $order_date,
            'iden_no'              => '',
            'iden_type'            => '',
            'iden_name_thai'       => '',
            'iden_name_eng'        => '',
            'iden_gender'          => '',
            'iden_birthday'        => '',
            'identity_expire_date' => '',
            'sale_id'              => $sale_id,
            'company'              => $company,
            'pic_id'               => '',
            'cust_photo'           => '',
            'appform_img'          => '',
            'pin_code'             => $pin_code,
        ];
        $step1002_request       = self::verifyMNPStep($step1002_params);
        $step1002_extract_array = json_decode(array_get($step1002_request, '1', []), true);

        $final_response = [
            200,
            [
                'status'  => 'success',
                'message' => [
                    'en' => 'USSD pin check successful pass',
                    'th' => 'ตรวจสอบรหัส USSD ถูกต้อง',
                ],
            ],
        ];
        if (array_get($step1002_request, '0') !== 200 || array_get($step1002_extract_array, 'code') != 0000) {
            $final_response                              = self::errorMessage(array_get($step1002_extract_array, 'code'));
            $final_response[1]['step1002_extract_array'] = $step1002_extract_array;
            $final_response[1]['step1002_request']       = $step1002_request;
            $final_response[1]['step1002_params']        = $step1002_params;
            LogService::writeServiceLog(
                "mnp_checkpin_code",
                json_encode_unicode($lrequest->all(), true),
                json_encode_unicode($step1002_request, true),
                (new \DateTime())->format('d/m/Y H:i:s')
            );

            return $final_response;
        }

        $security_key = $correlation_id;
        Redis::set('mnp-product:' . $security_key . ':pin_code', $pin_code, 'EX', 60 * 60 * 3);

        return $final_response;
    }

    public static function verifyPersonalInformation($lrequest)
    {
        $validate_security = self::validateSecurityMNP($lrequest);
        if ($validate_security[0] !== 200) {
            return $validate_security;
        }

        if ($validate_security[1]["mnp-product-data"]["mobile_number"] == null) {
            $final_response = [
                400,
                [
                    'status'  => 'fail',
                    'message' => [
                        'en' => 'Sorry, unable to process because incorrect mobile phone input',
                        'th' => 'ไม่สามารถทำรายการได้ เนื่องจากข้อมูลเบอร์โทรศัพท์ไม่ถูกต้อง',
                    ],
                ],
            ];

            return $final_response;
        }

        if ($validate_security[1]["mnp-ussd-data"] == null ||
            ($lrequest->has('ussd_pin_code') && $lrequest->input('ussd_pin_code') != $validate_security[1]["mnp-ussd-data"])
        ) {
            $final_response = [
                400,
                [
                    'status'  => 'fail',
                    'message' => [
                        'en' => 'Sorry, unable to process because incorrect ussd pin code input',
                        'th' => 'ไม่สามารถทำรายการได้ เนื่องจากข้อมูลนำเข้า เรื่องรหัส ussd pin codeไม่ถูกต้อง',
                    ],
                ],
            ];

            return $final_response;
        }

        $correlation_id       = $lrequest->input('security_key');
        $service_id           = $validate_security[1]["mnp-product-data"]["mobile_number"]; // fix dp-92-2
        $mnp_type             = $lrequest->input('mnp_type');
        $order_date           = date("Y/m/d H:m:s");
        $iden_no              = $lrequest->input('identity_id');
        $iden_type            = $lrequest->input('identity_type');
        $iden_gender          = $lrequest->input('gender');
        $iden_birthday        = $lrequest->input('birth_date');
        $identity_expire_date = $lrequest->input('identity_expire_date');
        $sale_id              = env('SHOP_CODE', '80100964');
        $company              = 'RM';
        $pic_id               = $lrequest->input('ekyc.id_card_picture');
        $cust_photo           = $lrequest->input('ekyc.profile_picture');
        $pin_code             = $validate_security[1]["mnp-ussd-data"];

        $sim_type = 'prepaid';
        if ($mnp_type == 'mnpoposs2') {
            $sim_type = 'postpaid';
        }

        $step1001_params = [
            'step'                 => '1001',
            'correlation_id'       => $correlation_id,
            'mnp_type'             => $mnp_type,
            'service_id'           => $service_id,
            'order_date'           => $order_date,
            'iden_no'              => $iden_no,
            'iden_type'            => $iden_type,
            'iden_gender'          => $iden_gender,
            'iden_birthday'        => $iden_birthday,
            'identity_expire_date' => $identity_expire_date,
            'sale_id'              => $sale_id,
            'company'              => $company,
            'pic_id'               => $pic_id,
            'cust_photo'           => $cust_photo,
            'pin_code'             => $pin_code,
            'iden_name_thai'       => $lrequest->input('customer_fullname_thai', ''),
            'iden_name_eng'        => $lrequest->input('customer_fullname_eng', ''),
        ];

        $step1001_params['lang'] = $lrequest->input('lang');

        try {
            // MNP 1001
            $step1001_request       = self::verifyMNPStep($step1001_params);
            $step1001_extract_array = json_decode(array_get($step1001_request, '1', []), true);
            if (array_get($step1001_request, '0') !== 200 || array_get($step1001_extract_array, 'code') != 0000) {
                $final_response = self::errorMessage(array_get($step1001_extract_array, 'code'));

                if (array_get($step1001_extract_array, 'code') == '0005') {
                    $final_response[1]['correlation_id'] = $correlation_id;
                }
                $final_response[1]['step1001_extract_array'] = $step1001_extract_array;
                $final_response[1]['step1001_request']       = $step1001_request;
                $final_response[1]['step1001_params']        = $step1001_params;

                LogService::writeServiceLog(
                    "mnp_verify_personal_information",
                    json_encode_unicode($lrequest->all(), true),
                    json_encode_unicode($step1001_request, true),
                    (new \DateTime())->format('d/m/Y H:i:s')
                );

                return $final_response;
            }

            $appform_img = array_get($step1001_request, '2.appform');

            //start of fix dp-92-2 price plan to get data from lv d product api (use nas_code instead)
            $tmp_lrequest = new \Illuminate\Http\Request();
            $tmp_lrequest->setMethod(strtoupper('GET'));
            $tmp_lrequest["nas_code"] = $lrequest->input('price_plan.proposition_nas_code');

            if ($lrequest->has('price_plan.code')) {
                $tmp_lrequest["priceplan_code"] = $lrequest->input('price_plan.code');
            }

            $result_priceplan_code_ticket = self::getPricePlanCodeTicket($tmp_lrequest);

            $price_plan = [];
            if ($result_priceplan_code_ticket[0] > 300) {
                $final_response = [
                    400,
                    [
                        'status'                       => 'fail',
                        'message'                      => [
                            'en' => 'Sorry, unable to process because incorrect price plan code input',
                            'th' => 'ไม่สามารถทำรายการได้ เนื่องจากข้อมูลนำเข้า เรื่องรหัส price plan ราคาของ package ไม่ถูกต้อง',
                        ],
                        'result_priceplan_code_ticket' => $result_priceplan_code_ticket,
                    ],
                ];

                return $final_response;
            }
            $price_plan = $result_priceplan_code_ticket[1]["priceplan_code_list_specific_data"];
            //end of fix dp-92-2 price plan to get data from lv d product api

            // TEC-2333 Fix postfix price plan code and nas code
            $store_service = new \App\Services\StoreService();

            $price_plan_code    = \Arr::get($price_plan, 'code');
            $price_plan['code'] = $store_service->processGetExternalPricePlanCodeByPricePlanCode($price_plan_code);

            $nas_code                           = \Arr::get($price_plan, 'proposition_nas_code');
            $price_plan['proposition_nas_code'] = $store_service->processGetExternalNasCodeByNasCode($nas_code);
            // end of TEC-2333

            unset($price_plan['long_description']);
            unset($price_plan['proposition_term_long']);

            $add_to_cart_params = [
                'product_id'   => $lrequest->input('product.product_id'),
                'user_id'      => $lrequest->input('user_id'),
                'inventory_id' => $lrequest->input('product.inventory_id'),
                'store_id'     => $lrequest->input('product.store_id'),
                'channel'      => 'tmh-website',
                'section'      => 'wemall',
                'quantity'     => 1,
                'type'         => 'all',
                'sim_meta'     => [
                    [
                        'identity_type'     => $lrequest->input('identity_type'),
                        'correlation_id'    => $correlation_id,
                        'number'            => $service_id,
                        'sim_type'          => $sim_type,
                        'product_info'      => $lrequest->input('product_info'),
                        'price_plan'        => $price_plan,
                        'is_verify'         => true,
                        'thai_id'           => $iden_no,
                        'verify_time'       => date("Y/m/d H:m:s"),
                        'birth_date'        => $lrequest->input('user_information.birth_date'),
                        'user_information'  => $lrequest->input('user_information'),
                        'pin_code'          => $pin_code,
                        'campaign_type'     => 'mnp',
                        'campaign_mnp_type' => $lrequest->input('campaign_mnp_type', 'sim_only'),
                    ],
                ],
            ];

            if ($lrequest->has('cart_hash')) {
                $add_to_cart_params["cart_hash"] = $lrequest->input('cart_hash');
            }

            // Add to Cart.
            $campaign_mnp_type_input       = $lrequest->input('campaign_mnp_type');
            $allow_campaign_mnp_type_array = array_flip(["one_step"]);
            $is_mnp_one_step               = $lrequest->has('campaign_mnp_type') && isset($allow_campaign_mnp_type_array[$campaign_mnp_type_input]);
            // add check mnp one step
            if ($is_mnp_one_step) {
                $add_to_cart_params["is_mnp_one_step"] = $is_mnp_one_step;
            }

            $add_to_cart = self::addToCartMNP($add_to_cart_params);
            if (array_get($add_to_cart, '0') !== 200) {
                $final_response = [
                    400,
                    [
                        'message'    => [
                            'en' => 'Unable to add to cart.',
                            'th' => 'ไม่สามารถเพิ่มตระกร้าสินค้าได้',
                        ],
                        'api_output' => $add_to_cart,
                        'api_input'  => $add_to_cart_params,
                    ],
                ];

                return $final_response;
            }

            Redis::set(
                'mnp-cart:' . array_get($add_to_cart, '1.hash'),
                json_encode(
                    [
                        'appform_img'      => $appform_img,
                        'birth_date'       => $lrequest->input('user_information.birth_date'),
                        'campaign_type'    => 'mnp',
                        'correlation_id'   => $correlation_id,
                        'is_verify'        => true,
                        'number'           => $service_id,
                        'pin_code'         => $pin_code,
                        'price_plan'       => $price_plan,
                        'product_info'     => $lrequest->input('product_info'),
                        'sim_type'         => $sim_type,
                        'thai_id'          => $iden_no,
                        'gender'           => $iden_gender,
                        'user_information' => $lrequest->input('user_information'),
                        'identity_type'    => $iden_type,
                        'iden_name_thai'   => $lrequest->input('customer_fullname_thai', ''),
                        'iden_name_eng'    => $lrequest->input('customer_fullname_eng', ''),
                    ],
                    true
                ),
                'EX',
                60 * 60 * 3
            );

            $final_response = [
                200,
                [
                    'status'    => 'success',
                    'message'   => [
                        'en' => 'Successful Verification and added product to cart',
                        'th' => 'ยืนยันตัวตนถูกต้องและเพิ่มสินค้าเข้าตระกร้าเรียบร้อย',
                    ],
                    'cart_hash' => array_get($add_to_cart, '1.hash'),
                ],
            ];

            $final_response["add_to_cart_params"]         = $add_to_cart_params;
            $final_response["add_to_cart_mnp_api_input"]  = $add_to_cart_params;
            $final_response["add_to_cart_mnp_api_output"] = $add_to_cart;

            return $final_response;
        } catch (Exception $error) {
            $final_response = self::errorMessage('');
            LogService::writeServiceLog(
                "mnp_verify_personal_information",
                json_encode_unicode($lrequest->all(), true),
                json_encode_unicode($error->getMessage(), true),
                (new \DateTime())->format('d/m/Y H:i:s')
            );

            return $final_response;
        }
    }

    public static function errorMessage($error_code)
    {
        $final_response = [];

        switch ($error_code) {
            case '0004':
                $error_message = [
                    'en' => 'Sorry, The system is unable to find this privilege campaign',
                    'th' => 'ไม่สามารถทำรายการได้ เนื่องจากไม่พบข้อมูลในระบบ กรุณาติดต่อทรูช็อป',
                ];
                break;
            case '0005':
                $error_message = [
                    'en' => 'Sorry, Cannot make a transaction because the transaction is duplicate',
                    'th' => 'ไม่สามารถทำรายการได้ เนื่องจาก transaction ซ้ำกัน',
                ];
                break;
            case '0008':
                $error_message = [
                    'en' => "Sorry, can not apply. Because the applicant's age is less than 17 years old",
                    'th' => 'ไม่สามารถสมัครบริการได้เนื่องจากอายุต่ำกว่า 17 ปี',
                ];
                break;
            case '0009':
                $error_message = [
                    'en' => "Sorry, This ID or ID card number Received the full amount of privileges",
                    'th' => 'หมายเลขหรือรหัสบัตรประชาชนนี้ รับสิทธิพิเศษครบตามจำนวนแล้ว',
                ];
                break;
            case '0016':
                $error_message = [
                    'en' => "Sorry, the operation cannot be performed. Please contact our staff for further investigation.",
                    'th' => 'ไม่สามารถทำรายการได้ เนื่องจากไม่พบข้อมูลในระบบ กรุณาติดต่อทรูช็อป',
                ];
                break;
            case '0017':
                $error_message = [
                    'en' => "Sorry, the operation cannot be performed. Please contact our staff for further investigation.",
                    'th' => 'ไม่สามารถทำรายการได้ เนื่องจากไม่พบข้อมูลในระบบ กรุณาติดต่อทรูช็อป',
                ];
                break;
            case '0019':
                $error_message = [
                    'en' => "Sorry, can not apply. Because your number does not meet the conditions.",
                    'th' => 'ไม่สามารถทำการได้ เนื่องจากหมายเลขของคุณไม่ตรงตามเงื่อนไข',
                ];
                break;
            case '0020':
                $error_message = [
                    'en' => "Sorry, Can not do the transaction Due to using duplicate SIM cards to complete the transaction.",
                    'th' => 'ไม่สามารทำรายการได้ เนื่องจากใช้ซิมการ์ดซ้ำกันเพื่อทำรายการ',
                ];
                break;
            case '0023':
                $error_message = [
                    'en' => "Sorry, Can not do the transaction Because the ID card number or passport has expired.",
                    'th' => 'ไม่สามารถทำรายการได้ เนื่องจากเลขบัตรประชาชนหรือพาสปอร์ตหมดอายุ',
                ];
                break;
            case '0024':
                $error_message = [
                    'en' => "Sorry, an not do the transaction Because your phone number is locked with the NBTC's Lock 3 application. Please unlock it and do it again.",
                    'th' => 'ไม่สามารถทำรายการได้ เนื่องจากหมายของคุณมีการล็อคด้วยแอปพลิเคชั่น Lock 3 ชั้น ของ กสทช. กรุณาปลดล็อคและทำรายการใหม่อีกครั้ง',
                ];
                break;
            case '0025':
                $error_message = [
                    'en' => "Sorry, the operation cannot be performed. Please contact our staff for further investigation.",
                    'th' => 'ไม่สามารถทำรายการได้ กรุณาติดต่อทรูช็อป',
                ];
                break;
            case '0026':
                $error_message = [
                    'en' => "Sorry, the operation cannot be performed. May be caused by an outstanding service balance. Please check and pay any out (if any) at True Shop.",
                    'th' => 'กรุณาตรวจสอบยอดค้างและติดต่อทรูช็อปเพื่อชำระค่าบริการ',
                ];
                break;
            case '0027':
                $error_message = [
                    'en' => "Sorry, the operation cannot be performed. May be caused by an outstanding service balance. Please check and pay any out (if any) at True Shop.",
                    'th' => 'กรุณาตรวจสอบยอดค้างและติดต่อทรูช็อปเพื่อชำระค่าบริการ',
                ];
                break;
            case '0028':
                $error_message = [
                    'en' => "You have reached the specified limit of mobile service number activations. Please contact True Shop to confirm your request.",
                    'th' => 'คุณเปิดบริการหมายเลขครบตามจำนวนที่กำหนดแล้ว กรุณาติดต่อทรูช็อปเพื่อยืนยันการทำรายการ',
                ];
                break;
            case '0029':
                $error_message = [
                    'en' => "Sorry, can not apply. Because your Simcard does not meet the conditions.",
                    'th' => 'ไม่สามารถทำรายการได้ เนื่องจากซิมการ์ดและหมายเลขของคุณไม่ถูกต้องตามเงื่อนไข',
                ];
                break;
            case '0030':
                $error_message = [
                    'en' => "Sorry, the operation cannot be performed. Please contact our staff for further investigation.",
                    'th' => 'ไม่สามารถทำรายการได้ กรุณาติดต่อทรูช็อป',
                ];
                break;
            case '0031':
                $error_message = [
                    'en' => "Sorry, the operation cannot be performed. Please contact our staff for further investigation.",
                    'th' => 'ไม่สามารถทำรายการได้ กรุณาติดต่อทรูช็อป',
                ];
                break;
            case '0032':
                $error_message = [
                    'en' => "Sorry, The transaction cannot be made because the Sim owner is invalid.",
                    'th' => 'ไม่สามารถทำรายการได้ เนื่องจาก Sim owner ไม่ถูกต้อง ',
                ];
                break;
            case '0033':
                $error_message = [
                    'en' => "Sorry, Can not do the transaction Because your number is already a TrueMove H number.",
                    'th' => 'ไม่สามารถทำรายการได้ เนื่องจากหมายเลขของคุณเป็นหมายเลข ทรูมูฟเอช อยู่แล้ว',
                ];
                break;
            case '0034':
                $error_message = [
                    'en' => "Sorry, Can not do the transaction Because the Pin is not 8 digits or incorrect, please check.",
                    'th' => 'ไม่สามารถทำรายการได้ เนื่องจากรหัสย้ายค่ายไม่ครบ 8 หลัก หรือ ไม่ถูกต้อง กรุณาตรวจสอบ',
                ];
                break;
            case '0035':
                $error_message = [
                    'en' => "Sorry, Can not do the transaction Because your phone number in-process MNP",
                    'th' => 'ไม่สามารถทำรายการได้ เนื่องหมายเลขของคุณอยู่ระหว่างการย้ายค่าย',
                ];
                break;
            case '0036':
                $error_message = [
                    'en' => "Sorry, Can not do the transaction Please upload the image again.",
                    'th' => 'ไม่สามารถทำรายการได้ กรุณาอัพโหลดรูปอีกครั้ง',
                ];
                break;
            case '0039':
                $error_message = [
                    'en' => "Sorry, Failed to MNP transaction request.",
                    'th' => 'ทำรายการย้ายขอโอนย้ายไม่สำเร็จ',
                ];
                break;
            case 'appform_error':
                $error_message = [
                    'th' => 'ไม่สามารถสร้างเอกสารสำหรับยืนยันตัวตนได้ (Application form)',
                    'en' => 'Unable to generate application form.',
                ];
                break;
            default:
                $error_message = [
                    'en' => 'Sorry, the system cannot process your request at the moment.',
                    'th' => 'ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้',
                ];
                break;
        }

        $final_response = [
            400,
            [
                'message' => $error_message,
            ],
        ];

        return $final_response;
    }

    public static function verifyMNPStep($params)
    {
        try {
            $mnp_request = [];
            $url         = '/mnp/validate-mnp/' . array_get($params, 'service_id', null);
            $headers     = [
                'x-api-key'    => env('X_API_KEY_TOL_SSV', false),
                'Content-Type' => 'application/json',
            ];

            $method               = 'POST';
            $fixed_parameter_list = [
                'base_url' => env('AWS_GATEWAY_URL_TOL_SSV', false),
            ];

            $tmp_lrequest = new \Illuminate\Http\Request();
            $tmp_lrequest->setMethod(strtoupper('POST'));

            $appform_img = '';

            switch (array_get($params, 'step')) {
                case '1001':
                    $mnp_request_object = self::convertMNP1001Step($params);
                    LogService::writeServiceLog(
                        "verifyMNPStep_1",
                        json_encode_unicode($params, true),
                        json_encode_unicode($mnp_request_object, true),
                        (new \DateTime())->format('d/m/Y H:i:s')
                    );
                    break;

                case '1002':
                    $mnp_request_object = self::convertMNP1002Step($params);
                    break;
            }

            if (array_get($mnp_request_object, '0') !== 200) {
                return $mnp_request_object;
            }

            $mnp_request = json_decode(array_get($mnp_request_object, '1'), true);
            $appform_img = array_get($mnp_request, 'saved_image_result.filename', '');

            $tmp_lrequest->replace($mnp_request);
            $result               = WlsService::operateRequestAction($url, $method, $tmp_lrequest, $headers, $fixed_parameter_list);
            $result[2]['appform'] = $appform_img;

            return $result;
        } catch (Exception $error) {
            return [
                400,
                json_encode([
                    'message' => [
                        'en' => $error->getMessage(),
                        'th' => $error->getMessage(),
                    ],
                ], true),
            ];
        }
    }

    public static function convertMNP1001Step($params)
    {
        $saved_image_result = [];
        $app_form_params    = [
            'thai_id'       => array_get($params, 'iden_no', null),
            'mobile_number' => array_get($params, 'service_id', null),
            'transfer_date' => date('d/m/Y'),
            'transfer_code' => array_get($params, 'pin_code'),
        ];

        if (array_get($params, 'lang') === 'th') {
            $app_form_params['fullname'] = array_get($params, 'iden_name_thai', '');
        } else {
            $app_form_params['fullname'] = array_get($params, 'iden_name_eng', '');
        }
        LogService::writeServiceLog(
            "convertMNP1001Step_1",
            json_encode_unicode($params, true),
            json_encode_unicode('1234', true),
            (new \DateTime())->format('d/m/Y H:i:s')
        );
        $appform_img = self::generateAppForm($app_form_params);
        LogService::writeServiceLog(
            "convertMNP1001Step_2",
            json_encode_unicode($params, true),
            json_encode_unicode($appform_img, true),
            (new \DateTime())->format('d/m/Y H:i:s')
        );
        if (array_get($appform_img, '0') !== 200) {
            return $appform_img;
        }

        $mnp_request = [
            'correlation_id' => array_get($params, 'correlation_id', null),
            'flow_id'        => 'mnponline',
            'function'       => 'validate',
            'service_id'     => array_get($params, 'service_id', null),
            'product_type'   => 'mobile',
            'campaign'       => array_get($params, 'mnp_type', null),
            'step_verify'    => '1001',
            'sale_id'        => array_get($params, 'sale_id', null),
            'channel'        => 'onlinestore',
            'order_date'     => array_get($params, 'order_date', null),
            'iden_info'      => [
                'iden_no'              => array_get($params, 'iden_no', null),
                'iden_type'            => array_get($params, 'iden_type', null),
                'iden_gender'          => array_get($params, 'iden_gender', null),
                'iden_name_thai'       => array_get($params, 'iden_name_thai', ''),
                'iden_name_eng'        => array_get($params, 'iden_name_eng', ''),
                'iden_birthday'        => array_get($params, 'iden_birthday', null),
                'iden_expiry_date'     => array_get($params, 'identity_expire_date', null),
                'iden_expiry_date_fmt' => 'YYYYMMDD',
                'iden_address'         => [
                    'house_no'      => '',
                    'moo'           => '',
                    'building_name' => '',
                    'floor'         => '',
                    'room_no'       => '',
                    'soi'           => '',
                    'street_name'   => '',
                    'tumbon'        => '',
                    'amphur'        => '',
                    'city'          => '',
                ],
            ],
            'extra_params'   => [
                [
                    'msisdn'           => '',
                    'msisdn_ref'       => array_get($params, 'service_id', null),
                    'pin_code'         => '',
                    'sim_serial'       => '',
                    'company'          => array_get($params, 'company', null),
                    'imei_device'      => '',
                    'priceplan'        => '',
                    'proposition'      => '',
                    'proposition_term' => '',
                    'proposition_fee'  => '0',
                    'cancel_order'     => '',
                    'pic_id'           => array_get($params, 'pic_id', null),
                    'cust_photo'       => array_get($params, 'cust_photo', null),
                    'appform_img'      => array_get($appform_img, '1.app_form'),
                ],
            ],
        ];

        $images_to_save_mnp = [
            array_get($params, 'correlation_id', null) => array_get($appform_img, '1.app_form'),
        ];
        $saved_image_result = AwsService::uploadS3($images_to_save_mnp);
        LogService::writeServiceLog(
            "convertMNP1001Step_3",
            json_encode_unicode($params, true),
            json_encode_unicode($appform_img, true),
            (new \DateTime())->format('d/m/Y H:i:s')
        );
        if (array_get($saved_image_result, '0') !== 200) {
            return $saved_image_result;
        }

        $mnp_request['saved_image_result'] = json_decode(array_get($saved_image_result, '1'), true);

        return [200, json_encode($mnp_request, true)];
    }

    public static function convertMNP1002Step($params)
    {
        $mnp_request = [
            'correlation_id' => array_get($params, 'correlation_id', null),
            'flow_id'        => 'mnponline',
            'function'       => 'validate',
            'service_id'     => array_get($params, 'service_id', null),
            'product_type'   => 'mobile',
            'campaign'       => array_get($params, 'mnp_type', null),
            'step_verify'    => '1002',
            'sale_id'        => array_get($params, 'sale_id', null),
            'channel'        => 'onlinestore',
            'order_date'     => array_get($params, 'order_date', null),
            'iden_info'      => [
                'iden_no'              => array_get($params, 'iden_no', null),
                'iden_type'            => array_get($params, 'iden_type', null),
                'iden_name_thai'       => array_get($params, 'iden_name_thai', null),
                'iden_name_eng'        => array_get($params, 'iden_name_eng', null),
                'iden_gender'          => array_get($params, 'iden_gender', null),
                'iden_birthday'        => array_get($params, 'iden_birthday', null),
                'iden_expiry_date'     => array_get($params, 'identity_expire_date', null),
                'iden_expiry_date_fmt' => 'YYYYMMDD',
                'iden_address'         => [
                    'house_no'      => '',
                    'moo'           => '',
                    'building_name' => '',
                    'floor'         => '',
                    'room_no'       => '',
                    'soi'           => '',
                    'street_name'   => '',
                    'tumbon'        => '',
                    'amphur'        => '',
                    'city'          => '',
                ],
            ],
            'extra_params'   => [
                [
                    'msisdn'           => '',
                    'msisdn_ref'       => array_get($params, 'service_id', null),
                    'pin_code'         => array_get($params, 'pin_code', null),
                    'sim_serial'       => '',
                    'company'          => '',
                    'imei_device'      => '',
                    'priceplan'        => '',
                    'proposition'      => '',
                    'proposition_term' => '',
                    'proposition_fee'  => '0',
                    'cancel_order'     => '',
                    'pic_id'           => '',
                    'cust_photo'       => '',
                    'appform_img'      => '',
                ],
            ],
        ];

        return [200, json_encode($mnp_request, true)];
    }

    public static function addToCartMNP($params)
    {
        $hash = bin2hex(random_bytes(10));
        if (isset($params["cart_hash"])) {
            $hash = $params["cart_hash"];
        }
        $url                  = 'portal-v2/promotion';
        $fixed_parameter_list = [
            'base_url' => env('WEMALL_ENDPOINT', false),
        ];
        $headers = [
            'x-api-auth'   => env('X_API_AUTH_VLEARN_VERIFY', false),
            'Content-Type' => 'application/json',
        ];
        $method = 'POST';

        $tmp_lrequest = new \Illuminate\Http\Request();
        $tmp_lrequest->setMethod(strtoupper($method));

        $request = [
            'product_id' => array_get($params, 'product_id', 0),
            'user_id'    => array_get($params, 'user_id', 0),
            'hash'       => $hash,
            'section'    => 'wemall',
            'channel'    => 'tmh-website',
        ];

        $tmp_lrequest->replace($request);
        $check_allow_add_to_cart = WlsService::operateRequestAction($url, $method, $tmp_lrequest, $headers, $fixed_parameter_list);

        $step_add_cart_array = json_decode(array_get($check_allow_add_to_cart, '1'), true);

        if (array_get($check_allow_add_to_cart, '0') !== 200) {
            $final_response = [
                400,
                [
                    'message'                 => [
                        'en' => 'Unable to add to cart.',
                        'th' => 'ไม่สามารถเพิ่มตระกร้าสินค้าได้',
                    ],
                    'reason'                  => 'check_allow_add_to_cart 1 error',
                    'check_allow_add_to_cart' => $check_allow_add_to_cart,
                ],
            ];

            return $final_response;
        }

        foreach (array_get($step_add_cart_array, 'data.allow_addcart') as $key => $value) {
            if (!$value) {
                $final_response = [
                    400,
                    [
                        'message'                 => [
                            'en' => 'Unable to add to cart.',
                            'th' => 'ไม่สามารถเพิ่มสินค้าใส่ตระกร้าได้',
                        ],
                        'reason'                  => 'check_allow_add_to_cart 2 error',
                        'check_allow_add_to_cart' => $step_add_cart_array,
                    ],
                ];

                return $final_response;
            }
        }

        $url                  = '/wportal/cart/' . $hash;
        $fixed_parameter_list = [
            'base_url' => env('WEMALL_ENDPOINT', false),
        ];
        $headers = [
            'x-api-auth'   => env('X_API_AUTH_VLEARN_VERIFY', false),
            'Content-Type' => 'application/x-www-form-urlencoded',
        ];
        $method = 'PUT';

        $tmp_lrequest = new \Illuminate\Http\Request();
        $tmp_lrequest->setMethod(strtoupper($method));

        $tmp_lrequest->replace($params);

        // start of TEC-1 add MNP One Step flow - skip add to cart mnp if is mnp one step flow
        if (!(isset($params["is_mnp_one_step"]) && $params["is_mnp_one_step"])) {
            $add_to_cart = WlsService::operateRequestAction($url, $method, $tmp_lrequest, $headers, $fixed_parameter_list);
        } else {
            $add_to_cart = [200, json_encode(["is_mnp_one_step" => $params["is_mnp_one_step"], "is_skip" => true])];
        }
        // end of TEC-1 add MNP One Step flow - skip add to cart mnp if is mnp one step flow

        $add_to_cart_array = json_decode(array_get($add_to_cart, '1'), true);
        if (array_get($add_to_cart, '0') !== 200 || array_get($add_to_cart_array, 'status') != 0) {
            $final_response = [
                400,
                [
                    'message'    => [
                        'en' => 'Unable to add to cart.',
                        'th' => 'ไม่สามารถเพิ่มสินค้าใส่ตระกร้าได้',
                    ],
                    'reason'     => 'cart_api_error',
                    'api_output' => $add_to_cart_array,
                ],
            ];

            return $final_response;
        }

        $final_response = [
            200,
            [
                'hash' => $hash,
            ],
        ];

        $final_response["api_output"] = $add_to_cart;

        return $final_response;
    }

    public static function placeOrderMNP($request)
    {
        $validate_security = self::validateSecurityMNP($request);
        if ($validate_security[0] !== 200) {
            return $validate_security;
        }

        try {
            // create template placeorder
            $cart_id                = $request->input('cart_id');
            $customer_detail        = $request->input('customer_detail');
            $payment_detail         = $request->input('payment_detail');
            $billing_address_input  = $request->input('billing_address');
            $delivery_address_input = $request->input('delivery_address');
            $installment_detail     = $request->input('installment_detail');
            $clm_identity           = $request->input('clm_upsell');
            $reference_product_id   = $request->input('reference_product_id');
            $campaign_weomni        = $request->input('campaign_weomni');
            $coupon_code            = $request->input('coupon_code');
            $tmh_sale_sms_id        = $request->input('afc');
            $ekyc_data              = [];

            $cart_data_saved           = json_decode(Redis::get('mnp-cart:' . $cart_id), true);
            $id_card_address           = array_get($cart_data_saved, 'user_information.idCardForm');
            $user_info_billing_addrrss = array_get($cart_data_saved, 'user_information.billingAddress');

            $placeorder_data = placeorder_initial_data($customer_detail, $billing_address_input, $delivery_address_input, $id_card_address, $user_info_billing_addrrss);

            if ($request->has('ocr_consent') && $request->input('ocr_consent') === true) {
                $placeorder_data['ocr_consent'] = $request->input('ocr_consent');
            }

            if ($request->has('ekyc_data')) {
                $ekyc_data = $request->input('ekyc_data');
            }

            // TEC-468, random user id for WEOMNICCW method
            $request_payment_method = array_get($payment_detail, 'method');
            if ($request_payment_method === "WEOMNICCW") {
                $number                                   = rand(1, 9998);
                $num_pad                                  = str_pad($number, 4, 0, STR_PAD_LEFT);
                $placeorder_data['customer_detail']['id'] = '9999' . $num_pad;
            }
            // end TEC-468, random user id for WEOMNICCW method

            if ($request->has('privilege.0')) {
                $placeorder_data["privilege"] = $request->input('privilege');

                // TEC-1, mnp one step, filter privilege
                if (!empty($placeorder_data["privilege"])) {
                    $disallow_product_types       = ['mnp_one_step' => false];
                    $placeorder_data["privilege"] = array_filter($placeorder_data["privilege"], function ($priv) use ($disallow_product_types) {
                        $product_type = array_get($priv, 'product_type');

                        return array_get($disallow_product_types, $product_type, true);
                    });
                }
                // TEC-1, mnp one step, end filter privilege
            }

            $billing_address               = $placeorder_data['billing_address'];
            $delivery_address              = $placeorder_data['delivery_address'];
            $id_card_address_map           = $placeorder_data['id_card_address'];
            $user_info_billing_addrrss_map = $placeorder_data['user_info_billing_addrrss'];

            $cart_data_saved['product_info']['penalty']  = "";
            $cart_data_saved['product_info']['contract'] = "12";

            // Add CLM Data to variable
            $clm_data            = null;
            $clm_product_matcode = null;
            $clm_type            = null;
            $clm_pp_code_list    = [];

            if ($clm_identity != null) {
                $clm_verify_data = Redis::get('truestore:clm_upsell:identity:' . $clm_identity . ':verify_data');
                if ($clm_verify_data != null) {
                    $clm_data = json_decode($clm_verify_data, true);
                }
                $clm_type         = array_get($clm_data, 'input.type');
                $clm_pp_code_list = array_column(array_get($clm_data, 'clm_data.offeringBeanList', []), 'pricePlanCode');
            }

            // get cart data from cart hash
            $lrequest                    = $request;
            $lrequest['payment_channel'] = $request->input('payment_detail.method');
            $content                     = WlsService::cartActionWlsWithSimMeta('wportal/cart/' . $cart_id, 'get', $lrequest, []);
            $tmp_result_cart             = json_decode($content[1], true);

            // start of TEC-419-420 add COD payment method
            $is_payment_method_placeorder_cod      = isset($payment_detail["method"]) && $payment_detail["method"] == "COD";
            $is_allow_payment_method_cod_from_cart = isset($tmp_result_cart["data"]["is_allow_payment_method_cod"]) && $tmp_result_cart["data"]["is_allow_payment_method_cod"];
            if ($is_payment_method_placeorder_cod && !$is_allow_payment_method_cod_from_cart) {
                $status_code       = 400;
                $result_body_array = [];

                $result_body_array['message']       = [];
                $result_body_array['message']['en'] = 'This payment method is not allowed.';
                $result_body_array['message']['th'] = 'ไม่อนุญาตให้จ่ายเงินด้วยวิธีที่ระบุ';

                LogService::writeServiceLog(
                    "mnp_placeorder_fail_placeorder_cod",
                    json_encode_unicode($lrequest->all()),
                    json_encode_unicode($content, true),
                    (new \DateTime())->format('d/m/Y H:i:s')
                );

                $result = ['status_code' => $status_code, 'body' => $result_body_array];

            }
            // end of TEC-419-420 add COD payment method

            $products          = [];
            $stores            = [];
            $promotions        = [];
            $new_mobile_number = '';
            $advance_payment   = null;

            // get main product id and main inventory id
            $ent_pack_cart     = Redis::get('truestore:ent_pack_cart:' . $cart_id . ':content');
            $main_product_id   = '';
            $main_inventory_id = '';
            $main_sku          = '';
            if (!empty($ent_pack_cart)) {
                $ent_pack_cart     = json_decode($ent_pack_cart, true);
                $main_product_id   = array_get($ent_pack_cart, 'entertainment_package_data.main_product_id');
                $main_inventory_id = array_get($ent_pack_cart, 'entertainment_package_data.main_inventory_id');
            }

            $is_mnp_one_step_exists_in_cart = false;

            for ($store_index = 0; $store_index < count($tmp_result_cart["data"]["record"]); $store_index++) {
                $cart_products = $tmp_result_cart["data"]["record"][$store_index]['products'];
                $tmp_store     = [];
                foreach ($cart_products as $cart_product) {
                    $content        = WlsService::getPortalProductWls("wportal/product/" . $cart_product['id'], 'get', $lrequest, [], true);
                    $product_detail = json_decode($content[1], true)['data']['record'];
                    $store_detail   = $product_detail['store'];

                    if ($cart_product['id'] === $main_product_id && $cart_product['inventory']['id'] == $main_inventory_id) {
                        $main_sku = $cart_product['inventory']['sku'];
                    }

                    // Store data
                    $tmp_store = convert_store_to_placeorder_object($store_detail);

                    if ($cart_product['product_type'] == "mnp_one_step") {
                        $is_mnp_one_step_exists_in_cart = true;
                    }

                    if (!in_array($cart_product['product_type'], ['mnp', 'sim'])) {
                        $product = convert_product_to_placeorder_object($cart_product, $store_detail, $product_detail);

                        $allow_advance_payment_product_type = array_flip(['mnp_one_step', 'device_mnp_bundle']);
                        if (isset($allow_advance_payment_product_type[$cart_product['product_type']])) {
                            $discount_from_bundle = 0;
                            $advance_payment      = array_get($cart_product, 'bundles.0.advance_payment');

                            if (array_get($cart_product, 'bundles.0.benefit.unit') == "PERCENT") {
                                $price_from_inventory_id = array_get($cart_product, 'inventory.price');
                                $discount_from_bundle    = array_get($cart_product, 'bundles.0.benefit.amount') / 100.0 * $price_from_inventory_id;
                            } else {
                                $discount_from_bundle = array_get($cart_product, 'bundles.0.benefit.amount');
                            }

                            $product["price"] -= $discount_from_bundle;
                            $product["final_price"] -= $discount_from_bundle;

                            $product["price"] += $advance_payment;
                            $product["final_price"] += $advance_payment;

                            $product["promotion"] = [
                                [
                                    "code"                => array_get($cart_product, 'bundles.0.ref_code'),
                                    "type"                => "2",
                                    "campaign_fee_active" => "0",
                                    "discount"            => $discount_from_bundle,
                                ],
                            ];

                            if (array_get($cart_product, 'meta')) {
                                $product["meta"] = json_encode_unicode(array_get($cart_product, 'meta'));
                            }

                            $promotions[] = [
                                "code"                => array_get($cart_product, 'bundles.0.ref_code'),
                                "type"                => "2",
                                "campaign_fee_active" => "0",
                                "value"               => $discount_from_bundle,
                                "name"                => array_get($cart_product, 'bundles.0.name'),
                                "detail"              => array_get($cart_product, 'bundles.0.description'),
                            ];
                        }

                        // start of fix TEC-19 add discount coupon
                        if (!empty($coupon_code) && isset($cart_product["discount_from_coupon_per_product"]) &&
                            !empty(array_get($tmp_result_cart, 'data.coupon_data_from_bff.is_pass')) &&
                            !empty($cart_product["discount_from_coupon_per_product"])
                        ) {
                            $discount_from_coupon = $cart_product["discount_from_coupon_per_product"];

                            $product["com_discount_price"]   = $discount_from_coupon;
                            $product["campaign_fee_percent"] = (!empty(array_get($tmp_result_cart, 'data.coupon_data_from_bff.has_fee')) && !empty(array_get($tmp_result_cart, 'data.coupon_data_from_bff.fee'))) ? array_get($tmp_result_cart, 'data.coupon_data_from_bff.fee') : "0";

                            if (!(isset($product["promotion"]) && gettype($product["promotion"]) == "array")) {
                                $product["promotion"] = [];
                            }

                            $tmp_promotion                         = [];
                            $tmp_promotion["code"]                 = $coupon_code;
                            $tmp_promotion["type"]                 = "6";
                            $tmp_promotion["name"]                 = array_get($tmp_result_cart, 'data.coupon_data_from_bff.name');
                            $tmp_promotion["discount"]             = $discount_from_coupon;
                            $tmp_promotion["condition"]            = array_get($tmp_result_cart, 'data.coupon_data_from_bff.condition_remark.remark_txt');
                            $tmp_promotion["discount_type"]        = "cart";
                            $tmp_promotion["subsidize_by"]         = "seller";
                            $tmp_promotion["subsidize_value"]      = array_get($tmp_result_cart, 'data.coupon_data_from_bff.discount_value_by_seller');
                            $tmp_promotion["campaign_fee_percent"] = (!empty(array_get($tmp_result_cart, 'data.coupon_data_from_bff.has_fee')) && !empty(array_get($tmp_result_cart, 'data.coupon_data_from_bff.fee'))) ? array_get($tmp_result_cart, 'data.coupon_data_from_bff.fee') : "";
                            $product["promotion"][]                = $tmp_promotion;
                        }
                        // end of fix TEC-19 add discount coupon

                        $products[] = $product;
                        continue;
                    }

                    $current_sim_meta         = array_get($cart_product, 'sim_meta.0');
                    $cart_product['sim_meta'] = [
                        'price_plan'   => array_get($current_sim_meta, 'price_plan'),
                        'product_info' => array_get($current_sim_meta, 'product_info'),
                        'sim_type'     => array_get($current_sim_meta, 'sim_type'),
                        'number'       => array_get($current_sim_meta, 'number'),
                        'is_verify'    => true,
                    ];

                    // use for mnp only
                    if ($cart_product['product_type'] == 'mnp') {
                        $cart_product['sim_meta']['appform_img']       = array_get($cart_data_saved, 'appform_img');
                        $cart_product['sim_meta']['campaign_type']     = array_get($cart_data_saved, 'campaign_type');
                        $cart_product['sim_meta']['correlation_id']    = array_get($cart_data_saved, 'correlation_id');
                        $cart_product['sim_meta']['pin_code']          = array_get($cart_data_saved, 'pin_code');
                        $cart_product['sim_meta']['campaign_mnp_type'] = array_get($current_sim_meta, 'campaign_mnp_type');

                        // Add MNP CLM
                        if ($clm_type == "simmnp") {
                            $current_pp_code = array_get($current_sim_meta, 'price_plan.code', '');
                            if (in_array($current_pp_code, $clm_pp_code_list)) {
                                $clm_product_matcode = array_get($cart_product, 'inventory.sku');
                            }
                        }
                    } else {
                        // new customer sim case
                        $new_mobile_number = array_get($current_sim_meta, 'number', '');
                    }

                    // normal sim meta
                    $cart_product['sim_meta']['birth_date']  = array_get($cart_data_saved, 'birth_date');
                    $cart_product['sim_meta']['thai_id']     = array_get($cart_data_saved, 'thai_id');
                    $cart_product['sim_meta']['verify_time'] = date("Y/m/d H:m:s");

                    if (Arr::get($placeorder_data, 'ocr_consent') === true) {
                        $cart_product['sim_meta'] = array_merge(
                            $cart_product['sim_meta'], 
                            OrderService::setOcrConsentInfo($ekyc_data)
                        );
                    }

                    // address mapping in sim_meta
                    $cart_product['sim_meta']['user_information']['email']        = array_get($cart_data_saved, 'user_information.email');
                    $cart_product['sim_meta']['user_information']['telephone']    = array_get($cart_data_saved, 'user_information.telephone');
                    $cart_product['sim_meta']['user_information']['address']      = array_get($id_card_address_map, 'address');
                    $cart_product['sim_meta']['user_information']['village']      = array_get($id_card_address_map, 'village');
                    $cart_product['sim_meta']['user_information']['building']     = array_get($id_card_address_map, 'building');
                    $cart_product['sim_meta']['user_information']['floor']        = array_get($id_card_address_map, 'floor');
                    $cart_product['sim_meta']['user_information']['room_number']  = array_get($id_card_address_map, 'room');
                    $cart_product['sim_meta']['user_information']['alley']        = array_get($id_card_address_map, 'alley');
                    $cart_product['sim_meta']['user_information']['street_name']  = array_get($id_card_address_map, 'road');
                    $cart_product['sim_meta']['user_information']['sub_district'] = array_get($id_card_address_map, 'district');
                    $cart_product['sim_meta']['user_information']['district']     = array_get($id_card_address_map, 'city');
                    $cart_product['sim_meta']['user_information']['province']     = array_get($id_card_address_map, 'province');
                    $cart_product['sim_meta']['user_information']['zip_code']     = array_get($id_card_address_map, 'postcode');
                    $cart_product['sim_meta']['user_information']['first_name']   = array_get($cart_data_saved, 'user_information.first_name');
                    $cart_product['sim_meta']['user_information']['last_name']    = array_get($cart_data_saved, 'user_information.last_name');

                    $cart_product['sim_meta']['user_information']['gender']               = array_get($cart_data_saved, 'gender');
                    $cart_product['sim_meta']['user_information']['moo']                  = '-';
                    $cart_product['sim_meta']['user_information']['thai_id']              = array_get($cart_data_saved, 'user_information.thai_id');
                    $cart_product['sim_meta']['user_information']['thai_id_expire_day']   = array_get($cart_data_saved, 'user_information.thai_id_expire_day');
                    $cart_product['sim_meta']['user_information']['thai_id_expire_month'] = array_get($cart_data_saved, 'user_information.thai_id_expire_month');
                    $cart_product['sim_meta']['user_information']['thai_id_expire_year']  = array_get($cart_data_saved, 'user_information.thai_id_expire_year');
                    $cart_product['sim_meta']['user_information']['title']                = array_get($cart_data_saved, 'user_information.title');
                    $cart_product['sim_meta']['user_information']['txt_title_other']      = array_get($cart_data_saved, 'user_information.txt_title_other');
                    $cart_product['sim_meta']['user_information']['iden_type']            = array_get($cart_data_saved, 'identity_type');
                    $cart_product['sim_meta']['user_information']['iden_name_thai']       = array_get($cart_data_saved, 'iden_name_thai');
                    $cart_product['sim_meta']['user_information']['iden_name_eng']        = array_get($cart_data_saved, 'iden_name_eng');

                    $cart_product['sim_meta']['user_information']['billing_address'] = [
                        "address"      => array_get($user_info_billing_addrrss_map, 'address'),
                        "village"      => array_get($user_info_billing_addrrss_map, 'village'),
                        "building"     => array_get($user_info_billing_addrrss_map, 'building'),
                        "floor"        => array_get($user_info_billing_addrrss_map, 'floor'),
                        "room_number"  => array_get($user_info_billing_addrrss_map, 'room'),
                        "alley"        => array_get($user_info_billing_addrrss_map, 'alley'),
                        "street_name"  => array_get($user_info_billing_addrrss_map, 'road'),
                        "province"     => array_get($user_info_billing_addrrss_map, 'province'),
                        "district"     => array_get($user_info_billing_addrrss_map, 'city'),
                        "sub_district" => array_get($user_info_billing_addrrss_map, 'district'),
                        "zip_code"     => array_get($user_info_billing_addrrss_map, 'postcode'),
                    ];
                    $cart_product['sim_meta']['user_information']['invoice_address_type'] = 'other_address';

                    $product    = convert_product_to_placeorder_object($cart_product, $store_detail, $product_detail);
                    $products[] = $product;
                }

                $stores[] = $tmp_store;
            }

            // combine product, store detail
            $placeorder_data = placeorder_add_payment_data($placeorder_data, $products, $stores, $payment_detail);

            // start of TEC-19 coupon
            if (!empty($coupon_code) &&
                !empty(array_get($tmp_result_cart, 'data.coupon_data_from_bff.is_pass'))
            ) {
                $tmp_promotions_bundle         = [];
                $tmp_promotions_bundle["code"] = $coupon_code;
                $tmp_promotions_bundle["type"] = "6";

                $tmp_promotions_bundle["value"] = array_get($tmp_result_cart, 'data.coupon_data_from_bff.total_coupon_discount_amount');
                $tmp_promotions_bundle["name"]  = array_get($tmp_result_cart, 'data.coupon_data_from_bff.name');

                $tmp_promotions_bundle["condition"]            = array_get($tmp_result_cart, 'data.coupon_data_from_bff.condition_remark.remark_txt');
                $tmp_promotions_bundle["discount_type"]        = "cart";
                $tmp_promotions_bundle["subsidize_by"]         = "seller";
                $tmp_promotions_bundle["subsidize_value"]      = array_get($tmp_result_cart, 'data.coupon_data_from_bff.discount_value_by_seller');
                $tmp_promotions_bundle["campaign_fee_percent"] = (!empty(array_get($tmp_result_cart, 'data.coupon_data_from_bff.has_fee')) && !empty(array_get($tmp_result_cart, 'data.coupon_data_from_bff.fee'))) ? array_get($tmp_result_cart, 'data.coupon_data_from_bff.fee') : "";

                $promotions[] = $tmp_promotions_bundle;

                $placeorder_data["summaries"][] = [
                    "code"  => "discount",
                    "title" => $coupon_code,
                    "value" => array_get($tmp_result_cart, "data.coupon_data_from_bff.total_coupon_discount_amount"),
                    "meta"  => "",
                ];
                $placeorder_data["payment_detail"]["total"] -= array_get($tmp_result_cart, "data.coupon_data_from_bff.total_coupon_discount_amount");
                $placeorder_data["payment_detail"]["discount"] = array_get($tmp_result_cart, "data.coupon_data_from_bff.total_coupon_discount_amount");
            }
            // end of TEC-19 coupon

            $placeorder_data['promotions'] = $promotions;

            if ($installment_detail != null) {
                $placeorder_data['installment_detail'] = $installment_detail;
            }

            // add advance payment in sim_meta product_type=sim
            if (isset($advance_payment)) {
                $tmp_products = array_get($placeorder_data, 'products', []);
                foreach ($tmp_products as $i => $tmp_product) {
                    if ($tmp_product['product_type'] == 'sim' || ($is_mnp_one_step_exists_in_cart && $tmp_product['product_type'] == 'mnp')) {
                        $placeorder_data['products'][$i]['sim_meta'][0]['advance_payment'] = $advance_payment;
                        break;
                    }
                }
            }

            if ($tmh_sale_sms_id) {
                $placeorder_data['tmh_sale'] = [
                    'tmh_sale_sms_id' => $tmh_sale_sms_id,
                ];
            }

            // combine cart
            $lrequest = $request;
            $lrequest->replace($placeorder_data);
            // send place order
            $content = WlsService::postPlaceorderWls('', 'POST', $lrequest, []);

            if (isset($content[0]) && isset($content[1])) {
                $status_code = $content[0];
                $body        = json_decode($content[1], true);

                LogService::writeServiceLog(
                    "mnp_placeorder",
                    json_encode_unicode($lrequest->all()),
                    json_encode_unicode($content, true),
                    (new \DateTime())->format('d/m/Y H:i:s')
                );

                if ($status_code > 300) {
                    $body["message"]       = [];
                    $body["message"]["en"] = "unable to process the payment at the moment, please try again, or choose another payment method.\nRemark: in case you redeem TruePoint, please contact Call Center 02-020-2354";
                    $body["message"]["th"] = "ไม่สามารถชำระเงินได้ในขณะนี้ กรุณาลองอีกครั้ง หรือ เลือกช่องทางการชำระเงินอื่น\nหมายเหตุ: กรณีแลกด้วย TruePoint กรุณาติดต่อ Call Center 02-020-2354";

                    $error_description = array_get($content, '2.description');
                    $wrap_error        = wrapPlaceOrderAmountGreaterError($error_description, $body, $status_code);
                    $body              = array_get($wrap_error, 'body');
                } else {
                    // add placeorder detail to redis
                    Redis::set('placeorder_detail:' . $cart_id, json_encode([
                        'order_id'          => array_get($body, 'secureKey'),
                        'mobile_no'         => array_get($customer_detail, 'telephone'),
                        'mnp_mobile_no'     => array_get($cart_data_saved, 'number', '-'),
                        'new_mobile_number' => $new_mobile_number,
                        'product_id'        => $main_product_id,
                        'sku'               => $main_sku,
                    ]), 'EX', 60 * 60);

                    if (array_get($body, 'secureKey') != null) {
                        $typhoon_save_data = [
                            'data' => [
                                "secure_key" => array_get($body, 'secureKey'),
                                "cart_hash"  => $cart_id,
                            ],
                        ];
                        // save to redis
                        Redis::set('truestore:typhoon_save_data:ent_pack_placeorder:' . array_get($body, 'secureKey') . ':data', json_encode($typhoon_save_data));
                    }

                    // Send to CLM
                    if ($clm_data != null && $clm_product_matcode != null && array_get($body, 'secureKey') != null) {
                        $weomni_clm_save_data = [
                            'data' => [
                                "secure_key" => array_get($body, 'secureKey'),
                                "camp_id"    => array_get($clm_data, 'input.camp_id'),
                                "service_id" => array_get($clm_data, 'input.mobile_number'),
                                "mat_code"   => $clm_product_matcode,
                                "amount"     => array_get($placeorder_data, 'payment_detail.total'),
                            ],
                        ];

                        // save to redis
                        Redis::set('weomni_clm_save_data:' . array_get($body, 'secureKey'), json_encode($weomni_clm_save_data));

                        LogService::writeServiceLog(
                            "mnp_placeorder_clm",
                            json_encode_unicode($weomni_clm_save_data),
                            json_encode_unicode($content, true),
                            (new \DateTime())->format('d/m/Y H:i:s')
                        );
                    }

                    // start of add fix dp-308 weomni_campaign_save_data:external-campaign-order redis
                    if (!empty($campaign_weomni) && array_get($body, 'secureKey') != null) {
                        $weomni_campaign_save_data = [
                            'data' => [
                                "secure_key" => array_get($body, 'secureKey'),
                                "campaign"   => $campaign_weomni,
                            ],
                        ];

                        // save to redis
                        Redis::set('weomni_campaign_save_data:external-campaign-order:' . array_get($body, 'secureKey') . ':data', json_encode($weomni_campaign_save_data));
                    }
                    // end of add fix dp-308 weomni_campaign_save_data:external-campaign-order redis

                    // start of fix TEC-19 add discount coupon
                    if (
                        !empty(array_get($tmp_result_cart, 'data.coupon_data_from_bff.is_pass')) &&
                        !empty($coupon_code) && array_get($body, 'secureKey') != null) {
                        $coupon_save_data = [
                            'data' => [
                                "coupon_id"   => array_get($tmp_result_cart, 'data.coupon_data_from_bff.id'),
                                "coupon_code" => $coupon_code,
                                "user_id"     => "0",
                                "store_id"    => array_get($stores, '0.store_id'),
                                "status"      => "",
                                "product_id"  => array_keys(array_get($placeorder_data, 'products', [])),
                                "order_id"    => array_get($body, 'secureKey'),
                            ],
                        ];

                        // save to redis
                        Redis::set('truestore:stamp_coupon_used:' . array_get($body, 'secureKey') . ':data', json_encode($coupon_save_data));
                    }
                    // end of fix TEC-19 add discount coupon

                    // start of add fix tmh-268-2 add reference_product_id to redis for send mnp email
                    if (!empty($reference_product_id) && array_get($body, 'secureKey') != null) {
                        $mnp_reference_product_id_save_data = [
                            'data' => [
                                "secure_key"           => array_get($body, 'secureKey'),
                                "reference_product_id" => $reference_product_id,
                            ],
                        ];

                        // save to redis
                        Redis::set('truestore:mnp_reference_product_id_save_data:' . array_get($body, 'secureKey') . ':data', json_encode($mnp_reference_product_id_save_data));
                    }
                    // end of add fix tmh-268-2 add reference_product_id to redis for send mnp email
                }
            } elseif (isset($content["status_code"]) && isset($content["body"])) {
                $status_code = $content["status_code"];
                $body        = $content["body"];
                LogService::writeServiceLog(
                    "mnp_placeorder_fail_placeorder",
                    json_encode_unicode($lrequest->all()),
                    json_encode_unicode($content, true),
                    (new \DateTime())->format('d/m/Y H:i:s')
                );
            } else {
                $status_code           = 500;
                $body                  = [];
                $body["message"]       = [];
                $body["message"]["en"] = "failed to finish payment";
                $body["message"]["th"] = "เกิดข้อผิดพลาดในระบบชำระเงิน";
            }

            $result = ['status_code' => $status_code, 'body' => $body];

            return $result;
        } catch (Exception $e) {
            $status_code = 400;
            $body        = 'cannot place order';
            LogService::writeServiceLog(
                "mnp_placeorder_fail_function",
                json_encode_unicode([$lrequest->all(), $e->getMessage(), "line" => $e->getLine(), "message" => $e->getMessage(), "class" => get_class($e), "file" => $e->getFile(), "code" => $e->getCode()]),
                '',
                (new \DateTime())->format('d/m/Y H:i:s')
            );

            return ['status_code' => $status_code, 'body' => $body, 'error_message' => $e->getMessage()];
        }
    }

    public static function generateAppForm($params)
    {
        try {
            $base64_app_form = ImageService::generateAppForm($params);
            LogService::writeServiceLog(
                "mnp_generate_app_form",
                json_encode_unicode($params, true),
                json_encode_unicode($base64_app_form, true),
                (new \DateTime())->format('d/m/Y H:i:s')
            );

            return [
                200,
                [
                    'app_form' => $base64_app_form,
                ],
            ];
        } catch (Exception $error) {
            return [
                400,
                json_encode([
                    'message' => [
                        'th' => 'ไม่สามารถสร้างเอกสารสำหรับยืนยันตัวตนได้ (Application form)',
                        'en' => 'Unable to generate application form.',
                    ],
                    'code'    => 'appform_error',
                    'error'   => $error->getMessage(),
                ], true),
            ];
        }
    }

    public static function getRandomMobileNas($lrequest)
    {
        if ($lrequest->has('reserve_hash')) {
            $reserve_hash                      = $lrequest->input('reserve_hash');
            $redis_number_random_ticket_result = Redis::get("mnp-bundling-ticket:number_random_ticket_hash:" . $reserve_hash . ":verify");
            if (!empty($redis_number_random_ticket_result)) {
                $result                                 = [200, ["number_random_result" => $redis_number_random_ticket_result]];
                $result[1]["number_random_ticket_hash"] = $reserve_hash;

                return $result;
            } else {
                return [400, [
                    "message"   => [
                        "en" => "reserve_hash you specified not exist in the list, please try again with another input",
                        "th" => "reserve_hash ที่ถูกระบุไม่พบอยู่ในรายการ กรุณาเรียกด้วยข้อมูลอื่นอีกครั้ง",
                    ],
                    "api_input" => $lrequest->all(),
                ],
                ];
            }
        }

        if (!$lrequest->has('mobile_number')) {
            $header = [
                "x-api-auth" => env("X_API_AUTH", false),
            ];

            $method = "get";
            $url    = "truemoveh/mobile/search";

            $fixed_parameter_list = ["limit" => 36, "page" => 1, "sim_type" => "postpaid", "section" => "wemall"];
            if ($lrequest->has('nas_code')) {
                $fixed_parameter_list["nas_code"] = $lrequest->input('nas_code');
            }
            $headers = $header;

            // start of TEC-587 lucky sim
            $url .= "?";
            $is_need_add_and = false;
            foreach ($fixed_parameter_list as $key => $value) {
                if (gettype($value) != "array") {
                    if ($is_need_add_and) {
                        $url .= '&';
                    }
                    $url .= $key . '=' . $value;
                } else {
                    foreach ($value as $v) {
                        if ($is_need_add_and) {
                            $url .= '&';
                        }
                        $url .= $key . '[]=' . $v;
                        $is_need_add_and = true;
                    }
                }
                $is_need_add_and = true;
            }
            // end of TEC-587 lucky sim

            $content = WlsService::operateRequestAction($url, $method, $lrequest, $headers, $fixed_parameter_list);

            $fixed_parameter_list = [];

            if (!isset(json_decode($content[1], true)["data"]["record"])) {
                return [400, [
                    "message" => [
                        "en" => "random number api problem, please try again",
                        "th" => "สุ่มเลขมีปัญหา กรุณาเรียกข้อมูลอีกครั้ง",
                    ],
                ],
                    'content' => $content,
                ];
            }

            $number_list              = array_column(json_decode($content[1], true)["data"]["record"], "number");
            $query_string_number_list = implode(',', $number_list);

            $url = "truemoveh/mobiles";

            $tmp_lrequest = new \Illuminate\Http\Request();
            $tmp_lrequest->setMethod(strtoupper($method));
            $tmp_lrequest["skip_cache"] = "true";
            $tmp_lrequest["available"]  = "true";
            $tmp_lrequest["mobiles"]    = $query_string_number_list;

            $content_number_avail_raw = WlsService::operateRequestAction($url, $method, $tmp_lrequest, $headers, $fixed_parameter_list);
            $number_list_avail        = array_column(json_decode($content_number_avail_raw[1], true)["record"], "mobile");
            $number_random_result     = $number_list_avail[rand(0, count($number_list_avail) - 1)];

            $tmp_decoded_content = json_decode($content[1], true);
            if (isset($content[1]) && isset($tmp_decoded_content["data"]["message"])) {
                $tmp_decoded_content["message"] = [
                    "en" => $tmp_decoded_content["data"]["message"],
                    "th" => $tmp_decoded_content["data"]["message"],
                ];
                $content[1] = json_encode($tmp_decoded_content);
            }
        } else {
            $number_random_result = $lrequest->input('mobile_number');
        }
        $result = [200, ["number_random_result" => $number_random_result]];

        $content_put_hold_number = WlsService::putHoldNumber("truemoveh/mobiles/" . $number_random_result, "", $lrequest, "");

        if ($content_put_hold_number[0] > 300 &&
            isset($content_put_hold_number[1]["message"]["en"]) &&
            $content_put_hold_number[1]["message"]["en"] == "this number got reserved or not exist in the system"
        ) {
            return [404, [
                "message"                 => [
                    "en" => "the number you specified got reserved or not exist in the list, please try again with another number",
                    "th" => "หมายเลขที่คุณเลือกถูกจองไว้ หรือไม่พบอยู่ในรายการ กรุณาเรียกข้อมูลด้วยเบอร์อื่นอีกครั้ง",
                ],
                "content_put_hold_number" => $content_put_hold_number,
                "api_input"               => $lrequest->all(),
            ],
            ];
        } elseif ($content_put_hold_number[0] > 300) {
            return [400, [
                "message"                 => [
                    "en" => "Sorry, the system cannot process your request. Please try again.",
                    "th" => "ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้ กรุณาทำรายการใหม่",
                ],
                "content_put_hold_number" => $content_put_hold_number,
                "api_input"               => $lrequest->all(),
            ],
            ];
        }

        $tmp_decoded_put_hold_number_content = json_decode($content_put_hold_number[1], true);

        if (isset($tmp_decoded_put_hold_number_content["data"]["mobile"]) &&
            isset($tmp_decoded_put_hold_number_content["data"]["hold_expired_date"])
        ) {
            $result[1]["number_random_ticket_hash"] = Str::uuid()->toString();
            $result[1]["hold_expired_date"]         = $tmp_decoded_put_hold_number_content["data"]["hold_expired_date"];
            Redis::set("mnp-bundling-ticket:number_random_ticket_hash:" . $result[1]["number_random_ticket_hash"] . ":verify", $number_random_result, 'EX', 60 * 60 * 2);
        }

        return $result;
    }

    public static function getPricePlanCodeTicket($lrequest)
    {
        if (!$lrequest->has('nas_code')) {
            $final_result                  = [];
            $final_result["message"]       = [];
            $final_result["message"]["en"] = "no nas_code input";
            $final_result["message"]["th"] = "ไม่มีข้อมูล nas_code";

            return [400, $final_result];
        }

        $header = [
            "x-api-auth" => env("X_API_AUTH", false),
        ];

        $method = "get";
        $url    = "truemoveh/price-plan/search";

        $content_priceplan_code_list_raw = WlsService::operateRequestAction($url, $method, $lrequest, $header, ["section" => "wemall", "sim_type" => "all"]);

        $tmp_decoded_content = json_decode($content_priceplan_code_list_raw[1], true);
        if (isset($content[1]) && isset($tmp_decoded_content["data"]["message"])) {
            $tmp_decoded_content["message"] = [
                "en" => $tmp_decoded_content["data"]["message"],
                "th" => $tmp_decoded_content["data"]["message"],
            ];
            $content[1] = json_encode($tmp_decoded_content);
        }

        if (!isset($tmp_decoded_content["data"]["record"])) {
            $final_result                  = [];
            $final_result["message"]       = [];
            $final_result["message"]["en"] = "no nas_code found";
            $final_result["message"]["th"] = "ไม่พบข้อมูล nas_code";

            return [404, $final_result];
        }

        $priceplan_code_list = (array_column($tmp_decoded_content["data"]["record"], "proposition_nas_code", "code"));

        $final_result                  = [];
        $final_result["message"]       = [];
        $final_result["message"]["en"] = "generate priceplan code ticket successfully";
        $final_result["message"]["th"] = "สร้าง priceplan code ticket สำเร็จแล้ว";

        $final_result["priceplan_code_ticket_hash"] = Str::uuid()->toString();
        Redis::set("mnp-bundling-ticket:priceplan_code_ticket_hash:" . $final_result["priceplan_code_ticket_hash"] . ":verify", $lrequest->input('priceplan_code'), 'EX', 60 * 60 * 3);
        //priceplan_code_list_specific_data
        $final_result['array_key_priceplan_code_list']  = array_keys($priceplan_code_list);
        $final_result['array_flip_priceplan_code_list'] = array_flip($final_result['array_key_priceplan_code_list']);

        if (isset($priceplan_code_list[$lrequest->input('priceplan_code')])) {
            $priceplan_index = $final_result['array_flip_priceplan_code_list'][$lrequest->input('priceplan_code')];
        } else {
            $priceplan_index = 0;
        }

        $final_result['priceplan_code_list_specific_data'] = $tmp_decoded_content["data"]["record"][$priceplan_index];

        return [200, $final_result];
    }

    public static function postVerifyMNPBundling($lrequest)
    {
        // check validation key for make sure pass MNP step
        $validate_security = self::validateSecurityMNP($lrequest);
        if ($validate_security[0] !== 200) {
            return $validate_security;
        }

        $tmp_lrequest = new \Illuminate\Http\Request();
        $tmp_lrequest->setMethod(strtoupper('post'));

        $tmp_lrequest["id_number"]             = $lrequest->input('identity_id');
        $tmp_lrequest["date_birth"]            = $lrequest->input('user_information.birth_date');
        $tmp_lrequest["product_id_list"]       = [$lrequest->input('new_cust_product_id_list')];
        $tmp_lrequest["inventory_id_list"]     = [$lrequest->input('new_cust_inventory_id')];
        $tmp_lrequest["product_bundle_id"]     = [$lrequest->input('new_cust_product_bundle_id')];
        $tmp_lrequest["product_nas_code_list"] = [$lrequest->input('new_cust_product_nas_code_list')];
        $tmp_lrequest["cart_hash"]             = $lrequest->input('cart_hash');
        $tmp_lrequest["mobile_number"]         = $validate_security[1]["mnp-product-data"]["mobile_number"];

        // Additional Product
        $additional_products = $lrequest->input('accessories', []);

        // start of TEC-1 add MNP One Step flow
        $campaign_mnp_type_input       = $lrequest->input('campaign_mnp_type');
        $allow_campaign_mnp_type_array = array_flip(["one_step"]);
        $is_mnp_one_step               = $lrequest->has('campaign_mnp_type') && isset($allow_campaign_mnp_type_array[$campaign_mnp_type_input]);
        if (!$is_mnp_one_step) {
            // New customer validation
            $content_raw_result_new_cust = self::postVerifySharedPlanNewCustomer('', '', $tmp_lrequest, []);
            $result_new_cust_body        = $content_raw_result_new_cust[1];
            $new_cust_decoded_content    = is_string($result_new_cust_body) ?
            json_decode($content_raw_result_new_cust[1], true) :
            $result_new_cust_body;

            if (($content_raw_result_new_cust[0] > 300) || !(isset($new_cust_decoded_content["is_pass"]) && $new_cust_decoded_content["is_pass"])) {
                $new_cust_decoded_content["is_pass"]                    = false;
                $content_raw_result_new_cust["is_not_pass_new_cust_ui"] = true;
                $new_cust_decoded_content["is_not_pass_new_cust_ui"]    = true;
                $content_raw_result_new_cust[1]                         = $new_cust_decoded_content;

                return $content_raw_result_new_cust;
            }

            // Add to cart device + sim, new customer
            $params["new_cust_random_number"] = Redis::get("mnp-bundling-ticket:number_random_ticket_hash:" . $lrequest->input("new_cust_random_number_ticket_hash") . ":verify");
            if ($params["new_cust_random_number"] == null || empty($lrequest->input("new_cust_random_number_ticket_hash"))) {
                $final_result                                       = [];
                $final_result["is_pass"]                            = false;
                $final_result["message"]                            = [];
                $final_result["message"]["en"]                      = "unable to add cart, number_random_ticket_hash input is incorrect";
                $final_result["message"]["th"]                      = "ไม่สามารถเพิ่มสินค้าเข้าตะกร้าได้ ข้อมูลของ number_random_ticket_hash ไม่ถูกต้อง";
                $final_result["step1001_response"]                  = $step1001_result;
                $final_result["new_cust_random_number_ticket_hash"] = $lrequest->input("new_cust_random_number_ticket_hash");

                return [400, $final_result];
            }
        }
        // end of TEC-1 add MNP One Step flow

        // Add MNP Product id for add to cart MNP
        $new_cust_priceplan = $lrequest->input('price_plan');

        $tmp_data                                       = $lrequest->all();
        $tmp_data['product']['product_id']              = Redis::get('store-mnp:content:sim_mnp_product_id') ?: 'L91591646';
        $tmp_data['product']['inventory_id']            = Redis::get('store-mnp:content:sim_mnp_inventory_id') ?: '3082437';
        $tmp_data['price_plan']['code']                 = Redis::get('store-mnp:content:sim_mnp_price_plan') ?: 'SMRTFP29';
        $tmp_data['price_plan']['proposition_nas_code'] = Redis::get('store-mnp:content:sim_mnp_price_propo') ?: 'RMV000000002882';
        $lrequest->replace($tmp_data);

        // MNP 1001 validation
        $step1001_result = self::verifyPersonalInformation($lrequest);

        if ($step1001_result[0] > 300) {
            $final_result                      = [];
            $final_result["is_pass"]           = false;
            $final_result["message"]           = [];
            $final_result["message"]["en"]     = \array_get($step1001_result, '1.message.en', 'unable to pass verify 1001');
            $final_result["message"]["th"]     = \array_get($step1001_result, '1.message.th', 'ไม่สามารถยืนยันตัวตนผ่านรูปแบบ 1001 ได้');
            $final_result["step1001_response"] = $step1001_result;

            return [400, $final_result];
        }

        $params["cart_hash"]          = $lrequest->input('cart_hash');
        $params["add_to_cart_params"] = $step1001_result["add_to_cart_params"];

        $params["new_cust_product_id_list"]         = $lrequest->input('new_cust_product_id_list');
        $params["new_cust_product_bundle_id"]       = $lrequest->input('new_cust_product_bundle_id');
        $params["new_cust_product_nas_code_list"]   = $lrequest->input('new_cust_product_nas_code_list');
        $params["store_id"]                         = $lrequest->input('product.store_id');
        $params["new_cust_priceplan"]               = $new_cust_priceplan;
        $params["new_cust_inventory_id"]            = $lrequest->input('new_cust_inventory_id');
        $params["new_cust_product_bundle_id"]       = $lrequest->input('new_cust_product_bundle_id');
        $params["new_cust_product_bundle_ref_code"] = $lrequest->input('new_cust_product_bundle_ref_code');
        $params["meta"]                             = $lrequest->input('meta');

        $params["new_cust_product_id_sim"]   = $lrequest->input('new_cust_product_id_sim');
        $params["new_cust_inventory_id_sim"] = $lrequest->input('new_cust_inventory_id_sim');

        $params["campaign_mnp_type"]             = $campaign_mnp_type_input;
        $params["allow_campaign_mnp_type_array"] = $allow_campaign_mnp_type_array;
        $params["is_mnp_one_step"]               = $is_mnp_one_step;

        if ($lrequest->input('is_mnp_auto')) {
            $result_addcart = self::addMNPAutoNewCustCart($params);
        } else {
            $result_addcart = self::addMNPBundlingNewCustCart($params, $additional_products);
        }

        if (!$result_addcart["is_add_cart_success"]) {
            $final_result                      = [];
            $final_result["is_pass"]           = false;
            $final_result["message"]           = [];
            $final_result["message"]["en"]     = "unable to add cart";
            $final_result["message"]["th"]     = "ไม่สามารถเพิ่มสินค้าเข้าตะกร้าได้";
            $final_result["step1001_response"] = $step1001_result;
            $final_result["addcart_response"]  = $result_addcart;

            return [400, $final_result];
        }

        // start of TEC-1 add MNP One Step flow
        if (!$is_mnp_one_step) {
            $final_result = $content_raw_result_new_cust;
            if (!isset($final_result) || !is_array($final_result[1])) {
                $final_result[1] = json_decode($final_result[1], true);
            }
            $final_result[1]["is_pass_full_verify_mnp_bundling"] = true;
        } else {
            $final_result = [0 => 200, 1 => []];
            if ($campaign_mnp_type_input == "one_step") {
                $final_result[1]["is_pass_full_verify_mnp_one_step"] = true;

                $campaign_id               = 0;
                $product_type              = "mnp_one_step";
                $product_id                = $params["new_cust_product_id_list"]; // LXXXXXXXX
                $product_code              = $lrequest->input("new_cust_product_code");
                $cart_hash                 = $params["cart_hash"];
                $privilege_placeorder_mock = ["passed_input" => ["product_code" => $product_code]];

                WlsService::setRedisPrivilegePlaceorder(["passed_input" => $privilege_placeorder_mock, "product_type" => $product_type], $cart_hash, $product_id, $campaign_id);
            }
        }
        // end of TEC-1 add MNP One Step flow

        $final_result[1]["mnp_1001_response"] = $step1001_result;
        $final_result[1]["result_addcart"]    = $result_addcart;

        $final_result[1]["is_pass"]   = true;
        $final_result[1]["cart_hash"] = $params["cart_hash"];

        return $final_result;
    }

    public static function addMNPBundlingNewCustCart($params, $additional_products = [])
    {
        $tmp_lrequest = new \Illuminate\Http\Request();
        $tmp_lrequest->setMethod(strtoupper('put'));

        $request_array_parameter['section']        = "wemall";
        $request_array_parameter['hash']           = $params["cart_hash"];
        $request_array_parameter['bundle_channel'] = "tmvh-official-website";
        $products                                  = [
            [
                "quantity"        => "1",
                "lang"            => "th",
                "section"         => "wemall",
                "user_id"         => "0",
                "is_catalog"      => "false",
                "channel"         => "tmh-website",
                "product_id"      => $params["new_cust_product_id_list"],
                "inventory_id"    => $params["new_cust_inventory_id"],
                "store_id"        => $params["store_id"],
                "bundle_hash"     => $params["new_cust_product_bundle_id"],
                "bundle_ref_code" => $params["new_cust_product_bundle_ref_code"],
                "meta"            => $params["meta"],
            ],
            [
                "quantity"        => "1",
                "lang"            => "th",
                "section"         => "wemall",
                "user_id"         => "0",
                "is_catalog"      => "false",
                "channel"         => "tmh-website",
                "sim_meta"        => $params["add_to_cart_params"]["sim_meta"],
                "product_id"      => $params["new_cust_product_id_sim"],
                "inventory_id"    => $params["new_cust_inventory_id_sim"],
                "store_id"        => $params["store_id"],
                "bundle_hash"     => $params["new_cust_product_bundle_id"],
                "bundle_ref_code" => $params["new_cust_product_bundle_ref_code"],
            ],
        ];

        // start of TEC-1 add MNP One Step flow
        $is_mnp_one_step = $params["is_mnp_one_step"];
        if (!$is_mnp_one_step) {
            $products[1]["sim_meta"][0]["number"]     = $params["new_cust_random_number"];
            $products[1]["sim_meta"][0]["price_plan"] = $params['new_cust_priceplan'];
        }
        // end of TEC-1 add MNP One Step flow

        // Add additinal product
        $products = array_merge($products, $additional_products);

        $request_array_parameter["products"] = $products;
        $request_array_parameter["lang"]     = "th";
        $request_array_parameter["section"]  = "wemall";
        $request_array_parameter["user_id"]  = "0";

        $tmp_lrequest->replace($request_array_parameter);

        $cart_api_url  = 'wportal/cart/';
        $tmp_cart_data = WlsService::cartActionWlsWithSimMeta($cart_api_url, 'put', $tmp_lrequest, []);

        if (json_decode($tmp_cart_data[1], true)["status_code"] > 300) {
            return ["is_add_cart_success" => false, "api_data" => $tmp_cart_data, "api_input" => $request_array_parameter];
        }

        $final_result = ["is_add_cart_success" => true, "api_data" => $tmp_cart_data, "api_data_add_cart" => $tmp_cart_data, "api_input_add_cart" => $request_array_parameter];

        return $final_result;
    }

    public static function addMNPAutoNewCustCart($params)
    {
        $tmp_lrequest = new \Illuminate\Http\Request();
        $tmp_lrequest->setMethod(strtoupper('post'));

        $request_array_parameter = [
            'product_id'   => $params['new_cust_product_id_list'],
            'inventory_id' => $params['new_cust_inventory_id'],
            'store_id'     => $params['store_id'],
            'section'      => 'wemall',
            'quantity'     => '1',
            'channel'      => 'tmh-website',
            'hash'         => $params['cart_hash'],
            'sim_meta'     => [
                array_merge(
                    $params['add_to_cart_params']['sim_meta'][0],
                    [
                        'number'     => $params['new_cust_random_number'],
                        'price_plan' => $params['new_cust_priceplan'],
                    ]
                ),
            ],
            'is_mnp_auto'  => true,
        ];

        $tmp_lrequest->replace($request_array_parameter);

        $cart_api_url  = 'wportal/cart/';
        $tmp_cart_data = WlsService::cartActionWlsWithSimMeta($cart_api_url, 'post', $tmp_lrequest, []);

        if (\Arr::get($tmp_cart_data, '1.status_code') > 300) {
            return ['is_add_cart_success' => false, 'api_data' => $tmp_cart_data, 'api_input' => $request_array_parameter];
        }

        $final_result = ['is_add_cart_success' => true, 'api_data' => $tmp_cart_data, 'api_data_add_cart' => $tmp_cart_data, 'api_input_add_cart' => $request_array_parameter];

        return $final_result;
    }

    public static function postVerifySharedPlanNewCustomer($url, $method, $lrequest, $header)
    {
        if (!$lrequest->has('cart_hash')) {
            $tmp_last_big_body[0] = 400;
            $tmp                  = ["is_pass" => false];

            $tmp["message"]       = [];
            $tmp["message"]["th"] = "กรุณาไปที่หน้าเลือกสินค้าอีกครั้ง";
            $tmp["message"]["en"] = "please go to product page and begin the process again";
            $tmp_last_big_body[1] = $tmp;

            return $tmp_last_big_body;
        }

        $tmp_last_big_body = WlsService::postVerifyPostpaidWls($url, $method, $lrequest, $header);

        $product_id_list       = $lrequest->input('product_id_list');
        $product_bundle_id     = $lrequest->input('product_bundle_id');
        $product_nas_code_list = $lrequest->input('product_nas_code_list');
        $inventory_id_list     = $lrequest->input('inventory_id_list');

        $mobile_number     = $lrequest->input('mobile_number');
        $id_number         = $lrequest->input('id_number');
        $trueonline_number = $lrequest->input('trueonline_number');

        $redeem_code = $lrequest->input('redeem_code');

        if (gettype($product_id_list) != "array") {
            $tmp_last_big_body[0] = 400;
            $tmp                  = json_decode($tmp_last_big_body[1], true);
            $tmp["message"]       = [];
            $tmp["message"]["th"] = "ไม่สามารถตรวจสอบสิทธิ์ได้เพราะการนำเข้าข้อมูลรหัสสินค้าผิดพลาด";
            $tmp["message"]["en"] = "unable to verify privilege because of invalid product id input";
            $tmp["is_pass"]       = false;
            $tmp_last_big_body[1] = $tmp;

            return $tmp_last_big_body;
        }

        $product_id_list_key_value = $product_id_list[0];

        $url          = "wportal/product/{$product_id_list_key_value}";
        $method       = "get";
        $tmp_lrequest = new \Illuminate\Http\Request();
        $tmp_lrequest->setMethod(strtoupper($method));
        $request_parameter = [];
        $tmp_lrequest->replace($request_parameter);
        $header = [
            "Content-Type" => "application/json",
        ];
        $paysmooth_token = $lrequest->input('paysmooth-token');
        if (!empty($paysmooth_token)) {
            $header["paysmooth-token"] = $paysmooth_token;
            $tmp_lrequest->headers->set('paysmooth-token', $paysmooth_token);
        }
        $portal_product_content     = WlsService::getPortalProductWls($url, $method, $tmp_lrequest, $header, true);
        $tmp_portal_product_content = json_decode($portal_product_content[1], true);

        if (!isset($tmp_portal_product_content["data"]["record"]["bundles"])) {
            $tmp_last_big_body[0] = 400;
            $tmp                  = json_decode($tmp_last_big_body[1], true);

            $tmp["message"]       = [];
            $tmp["message"]["th"] = "ไม่สามารถตรวจสอบสิทธิ์ได้เพราะการนำเข้าข้อมูลผิดพลาด";
            $tmp["message"]["en"] = "unable to verify privilege because of invalid input";
            $tmp["is_pass"]       = false;
            $tmp_last_big_body[1] = $tmp;

            return $tmp_last_big_body;
        }

        $tmp_bundle = [];

        foreach ($tmp_portal_product_content["data"]["record"]["bundles"] as $tmp_key => $tmp_value) {
            if ($tmp_value["id"] == $product_bundle_id[0]) {
                $tmp_bundle[$tmp_value["id"]] = $tmp_value;
                $tmp_bundle_key               = $tmp_value["id"];
                break;
            }
        }

        if (!isset($tmp_bundle_key) || !isset($tmp_bundle[$tmp_bundle_key])) {
            $tmp_last_big_body[0] = 400;
            $tmp                  = json_decode($tmp_last_big_body[1], true);

            $tmp["message"]       = [];
            $tmp["message"]["th"] = "ไม่สามารถตรวจสอบสิทธิ์ได้เพราะการนำเข้าข้อมูลผิดพลาด2";
            $tmp["message"]["en"] = "unable to verify privilege because of invalid input2";
            $tmp["is_pass"]       = false;
            $tmp_last_big_body[1] = $tmp;

            return $tmp_last_big_body;
        }

        $tmp_url      = "truemoveh/proposition";
        $tmp_method   = "get";
        $tmp_lrequest = new \Illuminate\Http\Request();
        $tmp_lrequest->setMethod(strtoupper($tmp_method));
        $request_parameter             = [];
        $request_parameter["nas_code"] = $product_nas_code_list[0];
        $request_parameter["scope"]    = "propositionMobile";
        $request_parameter["fields"]   = "id,nas_code,advance_payment,proposition_mobile,campaign_code";
        $tmp_lrequest->replace($request_parameter);
        if (count($tmp_lrequest->all()) > 0 && $tmp_method == "get") {
            $tmp_url .= '?';
            foreach ($tmp_lrequest->all() as $tmp_key_2 => $tmp_value_2) {
                $tmp_url .= $tmp_key_2 . '=' . $tmp_value_2 . '&';
            }
        }

        $tmp_header  = [];
        $tmp_content = WlsService::getPropositionListWithNasCode($tmp_url, $tmp_method, $tmp_lrequest, $tmp_header);
        if (!isset(json_decode($tmp_content[1], true)["record"][0]["advance_payment"])) {
            return [400, ["is_pass" => false, "message" => ["en" => "promotion code(advance_payment) is invalid, please contact call center", "th" => "รหัสของโปรโมชั่นไม่ถูกต้อง(advance_payment) กรุณาติดต่อ call center"]]];
        }
        $advance_payment                                      = json_decode($tmp_content[1], true)["record"][0]["advance_payment"];
        $proposition_mobile                                   = json_decode($tmp_content[1], true)["record"][0]["proposition_mobile"];
        $campaign_code                                        = json_decode($tmp_content[1], true)["record"][0]["campaign_code"];
        $nas_code                                             = $product_nas_code_list[0];
        $nas_code_data_array[$nas_code]                       = [];
        $nas_code_data_array[$nas_code]["advance_payment"]    = $advance_payment;
        $nas_code_data_array[$nas_code]["proposition_mobile"] = $proposition_mobile;
        $nas_code_data_array[$nas_code]["campaign_code"]      = $campaign_code;

        $product_id_list_pass       = [];
        $is_pass_array              = [];
        $tmp_check_mini_step_result = [];

        $passed_input_G  = [];
        $passed_output_G = [];

        $failed_output_G                          = [];
        $sample_request_body_privilege_check_days = [];

        foreach ($tmp_bundle[$tmp_bundle_key]["inventories"] as $product_id_list_key_2 => $product_id_list_key_value_2) {
            //product api to get sku
            if ($product_id_list_key_value_2["inventory_id"] != $inventory_id_list[0]) {
                continue;
            }
            $url                     = "wportal/product/" . $product_id_list_key_value_2["product_id"];
            $result                  = App('App\Http\Controllers\APIController')->callAPIContent($url, new \Illuminate\Http\Request(), true);
            $inventorySelected       = [];
            $product_detail_from_api = json_decode($result["body"], true)["data"]["record"];
            foreach ($product_detail_from_api["inventories"] as $key2 => $value2) {
                if ($value2["id"] == $product_id_list_key_value_2["inventory_id"]) {
                    $inventorySelected = $product_detail_from_api["inventories"][$key2];
                    break;
                }
            }
            // check for G

            //check privilege campaign = privilege existing days

            $is_enter_mini_step_result = [];

            $service_name = "truemove";
            $product_id   = $product_id_list_key_value_2["product_id"];

            $is_enter_mini_step_result["G"] = true;

            $url    = "wportal/privilege/check";
            $method = "post";

            $tmp_lrequest_2 = new \Illuminate\Http\Request();
            $tmp_lrequest_2->setMethod(strtoupper($method));
            $request_parameter            = [];
            $request_parameter["thai_id"] = base64_encode($id_number);

            if ($mobile_number != null) {
                $request_parameter["service"]       = 'truemove';
                $request_parameter["privilege_uid"] = $mobile_number;
            }

            $request_parameter["quantity"] = "1";

            // need to separate between familysim_postpaid and familysim_prepaid
            $request_parameter["product_code"]  = $inventorySelected["sku"];
            $request_parameter["campaigns[0]"]  = $nas_code_data_array[$nas_code]["campaign_code"]; // WX868 for trueidbox, familysim_postpaid = XN619
            $request_parameter["campaign_code"] = $nas_code_data_array[$nas_code]["campaign_code"]; // WX868 for trueidbox, familysim_postpaid = XN619
            $request_parameter["type"]          = "bundlesim";

            if (!empty($redeem_code)) {
                $request_parameter["redeem_code"] = $redeem_code;
                $request_parameter["type"]        = "campaign_redeem";
            }

            //quantity, product_code?
            $request_parameter["product_id"]            = $product_id;
            $sample_request_body_privilege_check_days[] = $request_parameter;
            $tmp_lrequest_2->replace($request_parameter);
            $header = [];

            if ($lrequest->has('tmp_message_id')) {
                $tmp_lrequest_2['tmp_message_id'] = $lrequest->input('tmp_message_id');
            }
            $content = WlsService::postPortalPrivilegeCheck($url, $method, $tmp_lrequest_2, $header);
            if ($content[0] <= 200 &&
                isset(json_decode($content[1], true)["status_code"]) &&
                json_decode($content[1], true)["status_code"] < 300 &&
                isset(json_decode($content[1], true)["data"]["campaign_code"])
            ) {
                $product_id_list_pass[]          = $product_id;
                $is_pass_array[3]                = true;
                $tmp_check_mini_step_result["G"] = true;

                $passed_input_G[]  = $request_parameter;
                $passed_output_G[] = $content;
            } else {
                $tmp_check_mini_step_result["G"] = false;
                $failed_output_G[]               = $content;
            }
        }

        $tmp = json_decode($tmp_last_big_body[1], true);
        if (count($passed_input_G) > 0 && json_decode($tmp_last_big_body[1], true)["is_pass"] == true) {
            $tmp["privilege_placeorder"] = $passed_input_G;

            // start of add cart_hash => privilege_placeorder to redis
            if (!isset($campaign_id)) {
                $campaign_id = null;
            }

            $cart_hash = $lrequest->input('cart_hash');
            if (empty($cart_hash) && $lrequest->has('cart_id')) {
                $cart_hash = $lrequest->input('cart_id');
            }
            WlsService::setRedisPrivilegePlaceorder(["passed_input" => $tmp["privilege_placeorder"], "product_type" => "device_mnp_bundle"], $cart_hash, $product_id, $campaign_id);

            // end of add cart_hash => privilege_placeorder to redis
        }
        $tmp["tmp_check_mini_step_result"] = $tmp_check_mini_step_result;
        $tmp_last_big_body[1]              = $tmp;

        if (isset($tmp_check_mini_step_result["G"]) && $tmp_check_mini_step_result["G"] == true &&
            \Arr::get($tmp_last_big_body, "1.is_pass")
        ) {
            return $tmp_last_big_body;
        } elseif (!\Arr::get($tmp_last_big_body, "1.is_pass")) {
            return $tmp_last_big_body;
        } else {
            return [400, ["is_pass" => false, "message" => ["en" => "check privilege is invalid", "th" => "การยืนยันสิทธิ์ไม่ถูกต้อง"], "sample_request_body_privilege_check_days" => $sample_request_body_privilege_check_days, "failed_output_G" => $failed_output_G, "tmp_last_big_body" => $tmp_last_big_body]];
        }
    }
}
