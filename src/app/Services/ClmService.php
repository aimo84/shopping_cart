<?php

namespace App\Services;

use Illuminate\Http\Request as LaravelRequest;
use Illuminate\Support\Str;
use Redis;

class ClmService
{
    public static function getHeader($type = 'default')
    {
        $header = [];
        switch ($type) {
            case "application/json":
                $header = [
                    "Content-Type" => "application/json",
                    "x-api-key"    => env("X_API_KEY_TOL_SSV", false),
                ];
                break;
            default:
                $header = [
                    "x-api-key" => env('X_API_KEY_TOL_SSV', false),
                ];
                break;
        }

        return $header;
    }

    public static function getImageCLM(LaravelRequest $lrequest, $imgPath)
    {
        $header                           = [
            "Authorization" => "Basic " . env("CLM_AUTHORIZATION", false),
            "apikey"        => env("CLM_API_KEY", false)
        ];
        $fixed_parameter_list["base_url"] = env("CLM_BASE_URL", false) . "/minio/getFile/";
        $result                           = WlsService::operateRequestAction($imgPath, 'GET', $lrequest, $header, $fixed_parameter_list);

        return $result;
    }

    public static function postGetCampTransClmList(LaravelRequest $lrequest)
    {
        $header                           = self::getHeader("application/json");
        $fixed_parameter_list["base_url"] = env("AWS_GATEWAY_URL_TOL_SSV", false) . "/";
        $result                           = WlsService::operateRequestAction('tmvh/clm/get-camp-trans-clm-list', 'POST', $lrequest, $header, $fixed_parameter_list);

        return $result;
    }

    public static function getValidateChangePricePlan(LaravelRequest $lrequest)
    {
        $header                           = self::getHeader();
        $fixed_parameter_list["base_url"] = env("AWS_GATEWAY_URL_TOL_SSV", false) . "/";
        $result                           = WlsService::operateRequestAction('tmvh/clm/validate-change-price-plan', 'GET', $lrequest, $header, $fixed_parameter_list);

        return $result;
    }

    public static function getSearchPricePlan(LaravelRequest $lrequest)
    {
        $header                           = self::getHeader();
        $fixed_parameter_list["base_url"] = env("AWS_GATEWAY_URL_TOL_SSV", false) . "/";
        $result                           = WlsService::operateRequestAction('tmvh/clm/search-price-plan', 'GET', $lrequest, $header, $fixed_parameter_list);

        return $result;
    }

    public static function postGetMobileOfferInventory(LaravelRequest $lrequest)
    {
        $header                           = self::getHeader("application/json");
        $fixed_parameter_list["base_url"] = env("AWS_GATEWAY_URL_TOL_SSV", false) . "/";
        $result                           = WlsService::operateRequestAction('tmvh/clm/get-mobile-offer-inventory', 'POST', $lrequest, $header, $fixed_parameter_list);

        return $result;
    }

    public static function postOrderChangePricePlan(LaravelRequest $lrequest, $param1)
    {
        $header                           = self::getHeader("application/json");
        $fixed_parameter_list["base_url"] = env("AWS_GATEWAY_URL_TOL_SSV", false) . "/";
        $result                           = WlsService::operateRequestAction("tmvh/clm/order-change-price-plan/{$param1}", 'POST', $lrequest, $header, $fixed_parameter_list);

        return $result;
    }

    public static function getBillingProfileInfo(LaravelRequest $lrequest)
    {
        $header                           = self::getHeader("application/json");
        $fixed_parameter_list["base_url"] = env("AWS_GATEWAY_URL_TOL_SSV", false) . "/";
        $result                           = WlsService::operateRequestAction('tmvh/clm/get-billing-profile-info', 'POST', $lrequest, $header, $fixed_parameter_list);

        return $result;
    }

    public static function postCallbackAddLeads(LaravelRequest $lrequest)
    {
        $header                           = self::getHeader("application/json");
        $fixed_parameter_list["base_url"] = env("AWS_GATEWAY_URL_TOL_SSV", false) . "/";
        $result                           = WlsService::operateRequestAction("tmvh/clm/callback/add-leads", 'POST', $lrequest, $header, $fixed_parameter_list);

        return $result;
    }

    public static function postGetCampaignList(LaravelRequest $lrequest)
    {
        $header                           = self::getHeader("application/json");
        $fixed_parameter_list["base_url"] = env("AWS_GATEWAY_URL_TOL_SSV", false) . "/";
        $result                           = WlsService::operateRequestAction('tmvh/clm/get-campaign-list', 'POST', $lrequest, $header, $fixed_parameter_list);

        return $result;
    }
    
    public static function postGetInstantBenefit(LaravelRequest $lrequest)
    {
        $header                           = self::getHeader("application/json");
        $fixed_parameter_list["base_url"] = env("AWS_GATEWAY_URL_TOL_SSV", false) . "/";
        $result                           = WlsService::operateRequestAction('tmvh/clm/get-instant-benefit', 'POST', $lrequest, $header, $fixed_parameter_list);

        return $result;
    }

    public static function postAddInstantBenefit(LaravelRequest $lrequest)
    {
        $header                           = self::getHeader("application/json");
        $fixed_parameter_list["base_url"] = env("AWS_GATEWAY_URL_TOL_SSV", false) . "/";
        $result                           = WlsService::operateRequestAction('tmvh/clm/add-instant-benefit', 'POST', $lrequest, $header, $fixed_parameter_list);

        return $result;
    }

    public static function findKey($array, $key_search)
    {
        foreach ($array as $key => $item) {
            if ($key == $key_search) {
                return [true, $key_search];
            } elseif (is_array($item)) {
                $tmp_check = self::findKey($item, $key_search);
                if ($tmp_check[0]) {
                    return [true, $key . "." . $tmp_check[1]];
                }
            }
        }

        return false;
    }

    public static function postVerify(LaravelRequest $lrequest, $skip_mobile = false)
    {
        $body             = ["is_pass" => false];
        $identity         = Str::uuid()->toString();
        $body["identity"] = $identity;

        $mobile_number = $lrequest->input('mobile_number');
        $otp           = $lrequest->input('otp');
        $camp_id       = $lrequest->input('camp_id');

        // step 1 in flow chart
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

        $tmp_check_result[$step_name]           = WlsService::checkForAOtp($step_name, $lrequest, $tmp_parameters);
        $tmp_check_mini_step_result[$step_name] = $tmp_check_result[$step_name]["is_pass"];
        if (!$tmp_check_mini_step_result[$step_name] && isset($tmp_check_result[$step_name]["failed_output"])) {
            if (!isset($body["failed_output"])) {
                $body["failed_output"] = [$step_name => $tmp_check_result[$step_name]["failed_output"]];
            } else {
                $body["failed_output"][$step_name] = $tmp_check_result[$step_name]["failed_output"];
            }
            // step a fail
            $body["message"] =
                [
                'en' => 'Sorry, you enter an OTP is incorrect.',
                'th' => 'ขออภัย คุณใส่รหัส OTP ไม่ถูกต้อง',
            ];
            $body["a_step_that_got_fail"] = $step_name;
            $body["tmp_check_result"]     = $tmp_check_result;
            $result                       = [400, $body];

            return $result;
        }
        // end of check A

        // start of step 2 int
        $step_name                            = "CLM_2";
        $tmp_lrequest                         = new \Illuminate\Http\Request();
        $tmp_lrequest['primResourceValue']    = $mobile_number;
        $tmp_lrequest['businessLine']         = "MOBILE";
        $tmp_check_result[$step_name]         = self::getBillingProfileInfo($tmp_lrequest);
        $tmp_check_result[$step_name]["body"] = json_decode($tmp_check_result[$step_name][1], true);

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

            return $result;
        }

        $tmp_check_result[$step_name]["is_pass"] = false;

        if (isset($tmp_check_result[$step_name]["body"]["getBillingProfileInfoResponse"]
            ["return"]["billingProfileInfo"]["accountCustomerInfo"]["customer"]["certificateNumber"])
        ) {
            $int_thai_id = $tmp_check_result[$step_name]["body"]["getBillingProfileInfoResponse"]
                ["return"]["billingProfileInfo"]["accountCustomerInfo"]["customer"]["certificateNumber"];
        }

        $is_not_postpaid = false;
        if (isset($tmp_check_result[$step_name]["body"]["getBillingProfileInfoResponse"]
            ["return"]["billingProfileInfo"]["accountCustomerInfo"]["account"]["classify"]) &&
            $tmp_check_result[$step_name]["body"]["getBillingProfileInfoResponse"]
            ["return"]["billingProfileInfo"]["accountCustomerInfo"]["account"]["classify"] == "R"
        ) {
            $is_not_postpaid = true;
        }
        $tmp_check_result[$step_name]["is_not_postpaid"] = $is_not_postpaid;

        $is_thai_id_check_correct = $skip_mobile;

        if (!$is_thai_id_check_correct &&
            isset($int_thai_id)
        ) {
            $is_thai_id_check_correct = true;
        }
        $tmp_check_result[$step_name]["is_thai_id_check_correct"] = $is_thai_id_check_correct;

        $tmp_check_result[$step_name]["customer_type_check"] = \Illuminate\Support\Arr::get($tmp_check_result[$step_name]["body"], "getBillingProfileInfoResponse.return.billingProfileInfo.accountCustomerInfo.customer.customerType.code");

        $tmp_check_result[$step_name]["is_status_description_active"] = \Illuminate\Support\Arr::get($tmp_check_result[$step_name]["body"], "getBillingProfileInfoResponse.return.billingProfileInfo.productInfo.subscriberInfo.status.statusDescription", "") == "Active";

        if ($tmp_check_result[$step_name][0] >= 500) {
            $body["message"] =
                [
                'en' => 'Sorry, the system cannot process your request at the moment.',
                'th' => 'ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้',
            ];
            $body["a_step_that_got_fail"] = $step_name;
            $body["tmp_check_result"]     = $tmp_check_result;
            $result                       = [500, $body];

            return $result;
        } elseif ($skip_mobile || ($is_thai_id_check_correct && $is_not_postpaid &&
            (
                ($tmp_check_result[$step_name]["customer_type_check"] == "I") ||
                ($tmp_check_result[$step_name]["customer_type_check"] == "B")
            ) &&
            $tmp_check_result[$step_name]["is_status_description_active"])
        ) {
            $tmp_check_result[$step_name]["rcRate"] = \Illuminate\Support\Arr::get(
                $tmp_check_result[$step_name]["body"],
                "getBillingProfileInfoResponse.return.billingProfileInfo.offerDataInfo.currentOffer.offer.rcRate"
            );
            $tmp_check_result[$step_name]["is_pass"] = true;

            $tmp_output_for_detail_priceplan_get_current_package = \Illuminate\Support\Arr::get($tmp_check_result[$step_name]["body"], "getBillingProfileInfoResponse.return.billingProfileInfo.offerDataInfo.currentOffer");
            // TODO: check if output_for_detail_priceplan_get_current_package really have one or more package, will check with one package for now
            $tmp_check_result[$step_name]["body"]["output_for_detail_priceplan_get_current_package"] = [\Illuminate\Support\Arr::get($tmp_check_result[$step_name]["body"], "getBillingProfileInfoResponse.return.billingProfileInfo.offerDataInfo.currentOffer")["offer"]["name"]]; //currentOffer
        } elseif (isset($tmp_check_result[$step_name]["body"]["getBillingProfileInfoResponse"]["return"]["errorCode"])
            && !isset($tmp_check_result[$step_name]["body"]["getBillingProfileInfoResponse"]["return"]["billingProfileInfo"]["accountCustomerInfo"]["account"]["classify"]) // postpaid
             && !isset($tmp_check_result[$step_name]["body"]["getBillingProfileInfoResponse"]["return"]["billingProfileInfo"]["accountCustomerInfo"]["customer"]["certificateNumber"]) // thai id
             && $tmp_check_result[$step_name]["customer_type_check"] != "I"
            && !$tmp_check_result[$step_name]["is_status_description_active"]// suspend
        ) {
            // clm_2 fail data not found case
            $body["message"] =
                [
                'en' => 'Sorry, you are not eligible to receive this promotion.',
                'th' => 'ขออภัย คุณไม่สามารถร่วมรับสิทธิรายการส่งเสริมการขายนี้ได้',
            ];
            $body["a_step_that_got_fail"] = $step_name;
            $body["tmp_check_result"]     = $tmp_check_result;
            $result                       = [400, $body];

            return $result;
        } elseif (!$is_not_postpaid) {
            // clm_2 fail postpaid case
            $body["message"] =
                [
                'en' => 'Sorry, This phone number is not registered under TrueMove H Postpay Service',
                'th' => 'ขออภัย หมายเลขนี้ไม่อยู่ในระบบทรูมูฟ เอช แบบรายเดือน',
            ];
            $body["a_step_that_got_fail"] = $step_name;
            $body["tmp_check_result"]     = $tmp_check_result;
            $result                       = [400, $body];

            return $result;
        } elseif (!$tmp_check_result[$step_name]["is_status_description_active"]) {
            // clm_2 fail suspend case
            $body["message"] =
                [
                'en' => 'Sorry, can not do because your number is suspended.',
                'th' => 'ขออภัย ไม่สามารถทำรายการได้เนื่องจากหมายเลขของคุณมีการระงับบริการชั่วคราว',
            ];
            $body["a_step_that_got_fail"] = $step_name;
            $body["tmp_check_result"]     = $tmp_check_result;
            $result                       = [400, $body];

            return $result;
        } elseif (!$tmp_check_result[$step_name]["is_pass"] && !$is_thai_id_check_correct) {
            // clm_2 fail thai id number case
            $body["message"] =
                [
                'en' => 'Sorry, the number you provided does not match the number to be eligible. Please indicate the number granted again.',
                'th' => 'ขออภัย หมายเลขที่คุณระบุไม่ตรงกับหมายเลขที่ได้รับสิทธิ์ กรุณาระบุหมายเลขที่ได้รับสิทธิ์ใหม่อีกครั้ง',
            ];
            $body["a_step_that_got_fail"] = $step_name;
            $body["tmp_check_result"]     = $tmp_check_result;
            $result                       = [400, $body];

            return $result;
        } elseif ($tmp_check_result[$step_name]["customer_type_check"] != "I") {
            // clm_2 fail customer type check equal b or c or other
            $body["message"] =
                [
                'en' => 'Sorry, this privilege only to customers who registered as individual only.',
                'th' => 'ขออภัย สิทธิพิเศษนี้เฉพาะลูกค้าที่จดทะเบียนในนามบุคคลธรรมดาเท่านั้น',
            ];
            $body["a_step_that_got_fail"] = $step_name;
            $body["tmp_check_result"]     = $tmp_check_result;
            $result                       = [400, $body];

            return $result;
        } else {
            // clm_2 fail
            $body["message"] =
                [
                'en' => 'Sorry, This phone number is unable to change promotional package.',
                'th' => 'ขออภัย คุณไม่สามารถเปลี่ยนแปลงแพ็กเกจ',
            ];
            $body["a_step_that_got_fail"] = $step_name;
            $body["tmp_check_result"]     = $tmp_check_result;
            $result                       = [400, $body];

            return $result;
        }

        // end of step 2 int

        // start of step 3 clm post whitelist
        $step_name                 = "CLM_3";
        $tmp_lrequest              = new \Illuminate\Http\Request();
        $tmp_lrequest["serviceID"] = $mobile_number;
        $tmp_lrequest["campCode"]  = $camp_id;

        $tmp_lrequest["status"]              = ["New", "Consider"];
        $tmp_lrequest["activeCampFlag"]      = "Y";
        $tmp_lrequest["pageSize"]            = 200;
        $tmp_lrequest["pageNo"]              = 1;
        $tmp_lrequest["tierFlag"]            = "Y";
        $tmp_lrequest["knowledgeDetailFlag"] = "Y";

        $tmp_check_result[$step_name]            = self::postGetCampTransClmList($tmp_lrequest);
        $tmp_check_result[$step_name]["is_pass"] = false;
        $tmp_check_result[$step_name]["body"]    = json_decode($tmp_check_result[$step_name][1], true);

        if (isset($tmp_check_result[$step_name]["body"]["campaignInfoBeanList"][0]["campaignBean"]["mainProduct"])) {
            $tmp_check_result[$step_name]["is_cvg_main_product"] = $tmp_check_result[$step_name]["body"]["campaignInfoBeanList"][0]["campaignBean"]["mainProduct"] == "CVG"; //campaignInfoBeanList.mainProduct
        } else {
            $tmp_check_result[$step_name]["is_cvg_main_product"] = false;
        }

        $tmp_check_result[$step_name]["is_cvg_main_product"] = $tmp_check_result[$step_name]["is_cvg_main_product"] && !$skip_mobile;

        if ($tmp_check_result[$step_name][0] >= 500) {
            $body["message"] =
                [
                'en' => 'Sorry, the system cannot process your request at the moment.',
                'th' => 'ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้',
            ];
            $body["a_step_that_got_fail"] = $step_name;
            $body["tmp_check_result"]     = $tmp_check_result;
            $result                       = [500, $body];

            return $result;
        } elseif ($tmp_check_result[$step_name]["body"]["code"] == "0" &&
            $tmp_check_result[$step_name]["body"]["msg"] == "Success" &&
            !$tmp_check_result[$step_name]["is_cvg_main_product"]
        ) {
            $tmp_check_result[$step_name]["is_pass"] = true;
        } elseif (($tmp_check_result[$step_name]["is_cvg_main_product"])) {
            // clm_3 fail cvg convergence
            $body["message"] =
                [
                'en' => 'Sorry, your package can not participate in this promotion.',
                'th' => 'ขออภัย แพ็กเกจของคุณไม่สามารถเข้าร่วมรายการส่งเสริมการขายนี้ได้',
            ];
            $body["a_step_that_got_fail"] = $step_name;
            $body["tmp_check_result"]     = $tmp_check_result;
            $result                       = [400, $body];

            return $result;
        } elseif (isset($tmp_check_result[$step_name]["body"]["code"]) &&
            $tmp_check_result[$step_name]["body"]["code"] > 0
        ) {
            $body["message"] =
                [
                'en' => 'Sorry, the system cannot process your request at the moment.',
                'th' => 'ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้',
            ];
            $body["a_step_that_got_fail"] = $step_name;
            $body["tmp_check_result"]     = $tmp_check_result;
            $result                       = [500, $body];

            return $result;
        } else {
            // clm_3 fail
            $body["message"] =
                [
                'en' => 'Sorry, you are not eligible to receive this promotion.',
                'th' => 'ขออภัย คุณไม่สามารถร่วมรับสิทธิรายการส่งเสริมการขายนี้ได้',
            ];
            $body["a_step_that_got_fail"] = $step_name;
            $body["tmp_check_result"]     = $tmp_check_result;
            $result                       = [400, $body];

            return $result;
        }

        if ($tmp_check_result[$step_name]["is_pass"]) {
            $this_mobile_number_can_use_this_campaign_intersect_list =
                array_column(
                array_merge(
                    ...array_column(
                        array_column(
                            array_column(
                                $tmp_check_result[$step_name]["body"]["campaignInfoBeanList"],
                                "campaignBean"
                            ),
                            "tierBeanList"
                        )[0],
                        "offeringBeanList"
                    )
                ),
                "pricePlanCode"
            );

            $tmp_check_result[$step_name]["this_mobile_number_can_use_this_campaign_intersect_list"] = $this_mobile_number_can_use_this_campaign_intersect_list;
        }

        Redis::set('truestore:clm_upsell:identity:' . $identity . ':submodule',
            array_get($tmp_check_result, 'CLM_3.body.campaignInfoBeanList.0.campaignBean.subModule')
        , 'EX', 30 * 60);

        // end of step 3 clm post whitelist

        // if skip_mobile = true -> check only 3 steps
        if ($skip_mobile) {
            $body["message"] =
                [
                'en' => 'Sorry, This phone number is unable to use.',
                'th' => 'ขออภัย คุณไม่สามารถใช้สิทธิ์พิเศษได้',
            ];

            if ($tmp_check_result["A"]["is_pass"] &&
                $tmp_check_result["CLM_2"]["is_pass"] &&
                $tmp_check_result["CLM_3"]["is_pass"]
            ) {
                // get arbalance for prepaid
                if ($tmp_check_result["CLM_2"]["customer_type_check"] === "P") {
                    $step_name                                  = "orchestrated";
                    $tmp_lrequest                               = new \Illuminate\Http\Request();
                    $tmp_lrequest["getOrchestratedProductList"] = [
                        "pageSize"   => "10",
                        "pageNumber" => "1",
                        "searchList" => [
                            "searchInfoArray" => [
                                [
                                    "type"  => "PRIMRESOURCEVAL",
                                    "value" => $mobile_number,
                                ],
                                [
                                    "type"  => "BUSINESSLINE",
                                    "value" => "MOBILE",
                                ],
                                [
                                    "type"  => "SUBSTATUS",
                                    "value" => "ACTIVEORSUSPEND",
                                ],
                                [
                                    "type"  => "REALTHAIID",
                                    "value" => "N",
                                ],
                            ],
                        ],
                    ];
                    $tmp_check_result[$step_name] = ClmVasService::getOrchestratedProductList($tmp_lrequest);
                    LogService::writeServiceLog(
                        "getOrchestratedProductList",
                        json_encode_unicode($tmp_lrequest->all()),
                        json_encode_unicode($tmp_check_result[$step_name]),
                        (new \DateTime())->format('d/m/Y H:i:s')
                    );
                    if ($tmp_check_result[$step_name][0] === 200) {
                        $tmp_check_result[$step_name]["is_pass"] = true;
                        $tmp_check_result[$step_name]["body"]    = json_decode($tmp_check_result[$step_name][1], true);
                    }
                }
                // end get arbalance for prepaid

                $knowledge_detail_list = array_get($tmp_check_result, 'CLM_3.body.campaignInfoBeanList.0.campaignBean.knowledgeDetailList', []);
                foreach ($knowledge_detail_list as $k => $v) {
                    if ($v['topic'] == 'Headline') {
                        $attach_img_path = array_get($v, 'knowledgeAttachList.0.imgPath');
                        if ($attach_img_path) {
                            $rp_path = str_replace('/goapi/campaign/getFile/', '', $attach_img_path);
                            $imgRequest = new \Illuminate\Http\Request();
                            $imgResponse = self::getImageCLM($imgRequest, $rp_path);
                            $imgBase64 = base64_encode($imgResponse[1]);
                            $knowledge_detail_list[$k]['knowledgeAttachList'][0]['image'] = "data:image/jpeg;base64," . $imgBase64;
                        }
                    }
                }

                $body["is_pass"]          = true;
                $body["tmp_check_result"] = $tmp_check_result;
                $body["clm_data"]         = [
                    "campaignId"          => $camp_id,
                    "campTransID"         => array_get($body, 'tmp_check_result.CLM_3.body.campaignInfoBeanList.0.campTransID'),
                    "offeringBeanList"    => array_get($tmp_check_result, 'CLM_3.body.campaignInfoBeanList.0.campaignBean.tierBeanList.0.offeringBeanList'),
                    "knowledgeDetailList" => $knowledge_detail_list,
                ];

                $body["message"] =
                    [
                    'en' => 'Pass',
                    'th' => 'ผ่าน',
                ];

                $body["nas_code_redirect"] = array_get(array_column(array_get($tmp_check_result, 'CLM_3.body.campaignInfoBeanList.0.campaignBean.tierBeanList.0.offeringBeanList', []), 'nasCode'), '0', '');

                // Instant Benefit - After whitelist, if there is instant benefit listed. Call API to add instant benefit
                $instant_lrequest             = new \Illuminate\Http\Request();
                $instant_lrequest["campCode"] = $camp_id;
                $resp_instant_benefit         = self::postGetInstantBenefit($instant_lrequest);

                if ($resp_instant_benefit[0] != 200) {
                    $body["get_instant_benefit_result"] = json_decode($resp_instant_benefit[1], true);
                    $body["add_instant_benefit_result"] = null;
                } else {
                    $instant_benefit = json_decode($resp_instant_benefit[1], true);
                    $body["get_instant_benefit_result"] = $instant_benefit;

                    $benefit_id = array_get($instant_benefit, 'campaignBean.instantBenefitList.0.benefitID');
                    if ($benefit_id) {
                        $add_instant_lrequest              = new \Illuminate\Http\Request();
                        $add_instant_lrequest["benefitID"] = [$benefit_id];
                        $add_instant_lrequest["campCode"]  = $camp_id;
                        $add_instant_lrequest["serviceID"] = $mobile_number;
                        $add_instant_lrequest["thaiID"]    = array_get($tmp_check_result, "CLM_2.body.getBillingProfileInfoResponse.return.billingProfileInfo.accountCustomerInfo.customer.certificateNumber", "");
                        $resp_add_instant_benefit          = self::postAddInstantBenefit($add_instant_lrequest);
                        $body["add_instant_benefit_result"]["resp"] = json_decode($resp_add_instant_benefit[1], true);
                        $body["add_instant_benefit_result"]["req"] = [
                            "benefitID" => [$benefit_id],
                            "campCode"  => $camp_id,
                            "serviceID" => $mobile_number,
                            "thaiID"    => array_get($tmp_check_result, "CLM_2.body.getBillingProfileInfoResponse.return.billingProfileInfo.accountCustomerInfo.customer.certificateNumber", "")
                        ];
                        LogService::writeServiceLog(
                            "clm_add_instant_benefit",
                            json_encode_unicode($add_instant_lrequest->all()),
                            json_encode_unicode($resp_add_instant_benefit),
                            (new \DateTime())->format('d/m/Y H:i:s')
                        );
                    } else {
                        $body["add_instant_benefit_result"] = null;
                    }
                }
                // End Instant Benefit 

                Redis::set('truestore:clm_upsell:identity:' . $identity . ':verify_data', json_encode(
                    array_merge($body, [
                        "input" => $lrequest->all(),
                    ])
                ), 'EX', 30 * 60);

                unset($body["clm_data"]);

                return [200, $body];
            }

            return [400, $body];
        }
        // end of skip_mobile

        // start of step 4 validate change price plan
        $step_name                 = "CLM_4";
        $tmp_lrequest              = new \Illuminate\Http\Request();
        $tmp_lrequest["level"]     = "SUBSCRIBER";
        $tmp_lrequest["key_type"]  = "SUBSCRIBER";
        $tmp_lrequest["key_value"] = $mobile_number;

        $tmp_check_result[$step_name]            = self::getValidateChangePricePlan($tmp_lrequest);
        $tmp_check_result[$step_name]["is_pass"] = false;
        $tmp_check_result[$step_name]["body"]    = json_decode($tmp_check_result[$step_name][1], true);

        if (isset($tmp_check_result["CLM_4"]["body"]["customer"]["installed-products"])) {
            $tmp_installed_products             = array_column($tmp_check_result["CLM_4"]["body"]["customer"]["installed-products"], "product-type");
            $array_flip_index_installed_product = array_flip($tmp_installed_products);
        } else {
            $array_flip_index_installed_product = [];
        }

        if (isset($array_flip_index_installed_product["PRICEPLAN"])) {
            $is_multisim = (
                isset($tmp_check_result["CLM_4"]["body"]
                    ["customer"]["installed-products"][$array_flip_index_installed_product["PRICEPLAN"]]["product-properties"]["IS-MULTISIM"]) &&
                $tmp_check_result["CLM_4"]["body"]
                ["customer"]["installed-products"][$array_flip_index_installed_product["PRICEPLAN"]]["product-properties"]["IS-MULTISIM"] == "Y"
            );
            $is_shareplan = (
                isset($tmp_check_result["CLM_4"]["body"]
                    ["customer"]["installed-products"][$array_flip_index_installed_product["PRICEPLAN"]]["product-properties"]["NUMBER-SPECIAL-INFO"]) &&
                $tmp_check_result["CLM_4"]["body"]
                ["customer"]["installed-products"][$array_flip_index_installed_product["PRICEPLAN"]]["product-properties"]["NUMBER-SPECIAL-INFO"] == "SHAREPLAN"
            );
        } else {
            $is_multisim  = false;
            $is_shareplan = false;
        }

        $tmp_check_result["CLM_4"]["is_multisim"]  = $is_multisim;
        $tmp_check_result["CLM_4"]["is_shareplan"] = $is_shareplan;

        if ($tmp_check_result[$step_name][0] >= 500) {
            $body["message"] =
                [
                'en' => 'Sorry, the system cannot process your request at the moment.',
                'th' => 'ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้',
            ];
            $body["a_step_that_got_fail"] = $step_name;
            $body["tmp_check_result"]     = $tmp_check_result;
            $result                       = [500, $body];

            return $result;
        } elseif ($tmp_check_result[$step_name]["body"]["status"] == "SUCCESSFUL" &&
            gettype($tmp_check_result[$step_name]["body"]["display-messages"]) == "array" &&
            empty($tmp_check_result[$step_name]["body"]["display-messages"]) &&
            !$is_multisim && !$is_shareplan
        ) {
            $tmp_check_result[$step_name]["is_pass"] = true;
        } elseif ($is_shareplan) {
            $body["message"] =
                [
                'en' => 'Sorry, your package can not participate in this promotion.',
                'th' => 'ขออภัย แพ็กเกจของคุณไม่สามารถเข้าร่วมรายการส่งเสริมการขายนี้ได้',
            ];
            $body["a_step_that_got_fail"] = $step_name;
            $body["tmp_check_result"]     = $tmp_check_result;
            $result                       = [500, $body];

            return $result;
        } elseif ($is_multisim) {
            $body["message"] =
                [
                'en' => 'Sorry, your package can not participate in this promotion.',
                'th' => 'ขออภัย แพ็กเกจของคุณไม่สามารถเข้าร่วมรายการส่งเสริมการขายนี้ได้',
            ];
            $body["a_step_that_got_fail"] = $step_name;
            $body["tmp_check_result"]     = $tmp_check_result;
            $result                       = [500, $body];

            return $result;
        } elseif (isset($tmp_check_result["CLM_4"]["body"]["display-messages"][0])) {
            // clm_4 fail
            $error_message_list =
                [
                "TMV-CHANGE-PP-00000"    =>
                [
                    "th" => "ขออภัย หมายเลขนี้ไม่อยู่ในระบบทรูมูฟ เอช แบบรายเดือน",
                    "en" => "Sorry, This phone number is not registered under TrueMove H Postpay Service",
                ],
                "TMV-CHANGE-PP-00001"    =>
                [
                    "th" => "หมายเลขนี้ไม่สามารถเปลี่ยนแปลงแพ็กเกจหลักได้ เนืองจากมีสิทธิพิเศษการใช้งานอยู่ในปัจจุบัน",
                    "en" => "Sorry, This phone number currently has special privilege which is unable to change promotion.",
                ],
                "TMV-CHANGE-PP-00002"    =>
                [
                    "th" => "หมายเลขนี้ไม่สามารถเปลี่ยนแปลงแพ็กเกจหลักได้ เนืองจากมีสิทธิพิเศษการใช้งานอยู่ในปัจจุบัน",
                    "en" => "Sorry, This phone number currently has special privilege which is unable to change promotion.",
                ],
                "TMV-CHANGE-PP-00003"    =>
                [
                    "th" => "หมายเลขนี้ไม่สามารถเปลี่ยนแปลงแพ็กเกจหลักได้ เนืองจากมีสิทธิพิเศษการใช้งานอยู่ในปัจจุบัน",
                    "en" => "Sorry, This phone number currently has special privilege which is unable to change promotion.",
                ],
                "TMV-CHANGE-PP-00004"    =>
                [
                    "th" => "ขออภัย คุณไม่สามารถเปลี่ยนแปลงแพ็กเกจ",
                    "en" => "Sorry, This phone number is unable to change promotional package",
                ],
                "TMV-CHANGE-PP-00005"    =>
                [
                    "th" => "ขออภัย คุณไม่สามารถเปลี่ยนแปลงแพ็กเกจ",
                    "en" => "Sorry, This phone number is unable to change promotional package",
                ],
                "TMV-CHANGE-PP-00006"    =>
                [
                    "th" => "ขออภัย คุณไม่สามารถเปลี่ยนแปลงแพ็กเกจ",
                    "en" => "Sorry, This phone number is unable to change promotional package",
                ],
                "TMV-CHANGE-PP-00007"    =>
                [
                    "th" => "ขออภัย คุณไม่สามารถเปลี่ยนแปลงแพ็กเกจ",
                    "en" => "Sorry, This phone number is unable to change promotional package",
                ],
                "TMV-CHANGE-PP-00008"    =>
                [
                    "th" => "ขออภัย คุณไม่สามารถเปลี่ยนแปลงแพ็กเกจ",
                    "en" => "Sorry, This phone number is unable to change promotional package",
                ],
                "TMV-CHANGE-PP-00009"    =>
                [
                    "th" => "ขออภัย ไม่สามารถทำรายการได้เนื่องจากหมายเลขของคุณยกเลิกบริการแล้ว",
                    "en" => "Sorry, could not make the list because the number of canceled services.",
                ],
                "TMV-CHANGE-PP-00010"    =>
                [
                    "th" => "ขออภัย คุณไม่สามารถเปลี่ยนแปลงแพ็กเกจ",
                    "en" => "Sorry, This phone number is unable to change promotional package",
                ],
                "TMV-CHANGE-PP-00011"    =>
                [
                    "th" => "ขออภัย คุณไม่สามารถเปลี่ยนแปลงแพ็กเกจ",
                    "en" => "Sorry, This phone number is unable to change promotional package",
                ],
                "TMV-CHANGE-PP-00012"    =>
                [
                    "th" => "ขออภัย หมายเลขนี้ไม่อยู่ในระบบทรูมูฟ เอช แบบรายเดือน",
                    "en" => "Sorry, This phone number is not registered under TrueMove H Postpay Service",
                ],
                "TMV-CHANGE-PP-00013"    =>
                [
                    "th" => "ขออภัย คุณไม่สามารถเปลี่ยนแปลงแพ็กเกจหลัก",
                    "en" => "Sorry, This phone number is unable to change promotional package",
                ],
                "TMV-CHANGE-PP-00014"    =>
                [
                    "th" => "หมายเลขนี้ไม่สามารถเปลี่ยนแปลงแพ็กเกจหลักได้ เนืองจากมีสิทธิพิเศษการใช้งานอยู่ในปัจจุบัน",
                    "en" => "Sorry, This phone number currently has special privilege which is unable to change promotional package",
                ],
                "TMV-VALIDATE-IOT-00001" =>
                [
                    "th" => "ขออภัย แพ็กเกจของคุณไม่สามารถเข้าร่วมรายการส่งเสริมการขายนี้ได้",
                    "en" => "Sorry, your package can not participate in this promotion.",
                ],
            ];
            if (isset($tmp_check_result["CLM_4"]["body"]["display-messages"][0]) &&
                isset($error_message_list[$tmp_check_result["CLM_4"]["body"]["display-messages"][0]["message-code"]])
            ) {
                $body["message"] = $error_message_list[$tmp_check_result["CLM_4"]["body"]["display-messages"][0]["message-code"]];
            } else {
                $body["message"] = [
                    "th" => "ขออภัย แพ็กเกจของคุณไม่สามารถเข้าร่วมรายการส่งเสริมการขายนี้ได้",
                    "en" => "Sorry, your package can not participate in this promotion.",
                ];
            }
            $body["a_step_that_got_fail"] = $step_name;
            $body["tmp_check_result"]     = $tmp_check_result;
            $result                       = [400, $body];

            return $result;
        } else {
            $body["message"] =
                [
                'en' => 'Sorry, This phone number is unable to change promotional package.',
                'th' => 'ขออภัย คุณไม่สามารถเปลี่ยนแปลงแพ็กเกจ',
            ];
        }

        if (!isset($array_flip_index_installed_product["PROPOSITION"]) ||
            !isset($tmp_check_result["CLM_4"]["body"]
                ["customer"]["installed-products"][$array_flip_index_installed_product["PROPOSITION"]]["product-properties"]["IS-CONTRACT"])
        ) {
            $is_skip_step_5 = true;
        } else {
            $is_skip_step_5 = $tmp_check_result["CLM_4"]["body"]
                ["customer"]["installed-products"][$array_flip_index_installed_product["PROPOSITION"]]["product-properties"]["IS-CONTRACT"] == "N";
        }

        $tmp_check_result["CLM_4"]["is_skip_step_5"] = $is_skip_step_5;

        // end of step 4 validate change price plan

        // start of step 5 get search price plan
        $step_name       = "CLM_5";
        $tmp_lrequest    = new \Illuminate\Http\Request();
        $is_enable_clm_5 = false;

        if (isset($tmp_check_result["CLM_4"]["body"]["customer"]["installed-products"][1]) &&
            (
                !isset($is_skip_step_5) || (isset($is_skip_step_5) && !$is_skip_step_5)
            )
        ) {
            $tmp_lrequest["customer-type"] = $tmp_check_result["CLM_4"]["body"]["customer"]["id-type"]; // id-type

            // check "product-type": "PRICEPLAN" and "product-type": "PROPOSITION"
            $tmp_lrequest["company-code"] = $tmp_check_result["CLM_4"]["body"]["customer"]["installed-products"]
                [$array_flip_index_installed_product["PRICEPLAN"]]["company-code"];
            $tmp_lrequest["customer-subtype"] = $tmp_check_result["CLM_4"]["body"]["customer"]["installed-products"]
                [$array_flip_index_installed_product["PRICEPLAN"]]["account-sub-type"]; // account-sub-type

            $tmp_lrequest["current-priceplan"] = $tmp_check_result["CLM_4"]["body"]["customer"]["installed-products"]
                [$array_flip_index_installed_product["PRICEPLAN"]]["product-id"]; // product-id [product-type='PRICEPLAN']
            $tmp_lrequest["current-propositions"] = $tmp_check_result["CLM_4"]["body"]["customer"]["installed-products"]
                [$array_flip_index_installed_product["PROPOSITION"]]["product-id"]; // product-id [product-type='PROPOSITION']
            $tmp_lrequest["service-level"] = $tmp_check_result["CLM_4"]["body"]["customer"]["installed-products"]
                [$array_flip_index_installed_product["PRICEPLAN"]]["service-level"]; //service-level [product-type='PRICEPLAN']
            $is_enable_clm_5 = true;
        }

        if ($is_enable_clm_5) {
            $tmp_check_result[$step_name]         = self::getSearchPricePlan($tmp_lrequest);
            $tmp_check_result[$step_name]["body"] = json_decode($tmp_check_result[$step_name][1], true);
        }
        $tmp_check_result[$step_name]["is_enable_clm_5"] = $is_enable_clm_5;
        $tmp_check_result[$step_name]["is_pass"]         = false;

        if ($is_enable_clm_5 &&
            isset($tmp_check_result[$step_name]["body"]["response-data"][0]["name"]) &&
            isset($tmp_check_result["CLM_3"]["this_mobile_number_can_use_this_campaign_intersect_list"])
        ) {
            $step_3_intersect_list                                                        = $tmp_check_result["CLM_3"]["this_mobile_number_can_use_this_campaign_intersect_list"];
            $enter_the_campaign_price_plan                                                = array_column($tmp_check_result[$step_name]["body"]["response-data"], "name");
            $tmp_check_result[$step_name]["enter_the_campaign_price_plan_intersect_list"] = $enter_the_campaign_price_plan;
            $step_5_intersect_list                                                        = $enter_the_campaign_price_plan;
            $array_price_plan_intersect_result                                            = array_intersect($step_3_intersect_list, $step_5_intersect_list);
            $count_array_intersect                                                        = count($array_price_plan_intersect_result);
            $tmp_check_result[$step_name]["array_price_plan_intersect_result"]            = $array_price_plan_intersect_result;
            $tmp_check_result[$step_name]["count_array_intersect"]                        = $count_array_intersect;
            $tmp_check_result[$step_name]["is_pass"]                                      = $count_array_intersect > 0;
        }

        if (!$is_skip_step_5 && $tmp_check_result[$step_name][0] >= 500) {
            $body["message"] =
                [
                'en' => 'Sorry, the system cannot process your request at the moment.',
                'th' => 'ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้',
            ];
            $body["a_step_that_got_fail"] = $step_name;
            $body["tmp_check_result"]     = $tmp_check_result;
            $result                       = [500, $body];

            return $result;
        } elseif (!$tmp_check_result[$step_name]["is_pass"] && !$is_skip_step_5) {
            // clm_5 fail
            $body["message"] =
                [
                'en' => 'Sorry, This phone number is unable to change promotional package',
                'th' => 'ขออภัย คุณไม่สามารถเปลี่ยนแปลงแพ็กเกจ',
            ];
            $body["a_step_that_got_fail"] = $step_name;
            $body["tmp_check_result"]     = $tmp_check_result;
            $result                       = [400, $body];

            return $result;
        }
        // end of step 5 get search price plan

        // start of step 6
        $step_name = "CLM_6";

        $tmp_lrequest                   = new \Illuminate\Http\Request();
        $tmp_lrequest["channel"]        = "Ascend ECM Affiliate";
        $tmp_lrequest["customerType"]   = "I";
        $tmp_lrequest["searchCriteria"] = "OfferInfo,BundleInfo,MessageInfo,MarketingInfo,TermConditionInfo";

        // change offerList for input
        if (isset($tmp_check_result["CLM_5"]["array_price_plan_intersect_result"])) {
            $tmp_lrequest["offerList"] = array_values($tmp_check_result["CLM_5"]["array_price_plan_intersect_result"]); //intersect 3,5
        } else {
            $tmp_lrequest["offerList"] = array_values($tmp_check_result["CLM_3"]["this_mobile_number_can_use_this_campaign_intersect_list"]); // step 3
        }

        $tmp_check_result[$step_name]            = self::postGetMobileOfferInventory($tmp_lrequest);
        $tmp_check_result[$step_name]["body"]    = json_decode($tmp_check_result[$step_name][1], true);
        $tmp_check_result[$step_name]["is_pass"] = false;

        if (isset($tmp_check_result[$step_name]["body"]["offerSummaryList"])) {
            $tmp_moi_offerinfo =
                array_column(
                array_column(
                    array_merge(...array_column($tmp_check_result[$step_name]["body"]["offerSummaryList"], 'offerSummaryInfo')),
                    "offerInfo"
                ),
                "price"
            );
        } else {
            $tmp_moi_offerinfo = [];
        }

        $tmp_moi_offerinfo_before_remove_anything                                 = $tmp_moi_offerinfo;
        $tmp_check_result[$step_name]["tmp_moi_offerinfo_before_remove_anything"] = $tmp_moi_offerinfo;

        $is_use_unset = false;
        foreach ($tmp_moi_offerinfo as $tmp_moi_offerinfo_key => $tmp_moi_offerinfo_value) {
            if (!(floatval($tmp_moi_offerinfo_value) > floatval($tmp_check_result["CLM_2"]["rcRate"]))) {
                // not pass=> filter out
                unset($tmp_check_result[$step_name]["body"]["offerSummaryList"][$tmp_moi_offerinfo_key]);
                $is_use_unset = true;
            }
        }

        if ($is_use_unset) {
            $tmp_check_result[$step_name]["body"]["offerSummaryList"] = array_values($tmp_check_result[$step_name]["body"]["offerSummaryList"]); // add this to make array after unset work properly
        }

        if (isset($tmp_check_result[$step_name]["body"]["offerSummaryList"]) &&
            count($tmp_check_result[$step_name]["body"]["offerSummaryList"]) > 0
        ) {
            $tmp_moi_offerinfo =
                array_column(
                array_column(
                    array_merge(...array_column($tmp_check_result[$step_name]["body"]["offerSummaryList"], 'offerSummaryInfo')),
                    "offerInfo"
                ),
                "price"
            );
        } else {
            $tmp_moi_offerinfo = [];
        }
        $tmp_check_result[$step_name]["tmp_moi_offerinfo"] = $tmp_moi_offerinfo;

        if (count($tmp_moi_offerinfo) > 0) {
            $tmp_check_result[$step_name]["is_pass"] = true;
        } elseif (is_null($tmp_check_result[$step_name]["body"]) || $tmp_check_result[$step_name][0] >= 500) {
            // clm_6 fail bad request
            $body["message"] =
                [
                'en' => 'Sorry, the system cannot process your request at the moment.',
                'th' => 'ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้',
            ];
            $body["a_step_that_got_fail"] = $step_name;
            $body["tmp_check_result"]     = $tmp_check_result;
            $result                       = [400, $body];

            return $result;
        } else {
            // clm_6 fail
            $body["message"] =
                [
                'en' => 'Sorry, your package can not participate in this promotion.',
                'th' => 'ขออภัย คุณไม่สามารถร่วมรับสิทธิรายการส่งเสริมการขายนี้ได้',
            ];
            $body["a_step_that_got_fail"] = $step_name;
            $body["tmp_check_result"]     = $tmp_check_result;
            $result                       = [400, $body];

            return $result;
        }
        // end of step 6

        if ($tmp_check_result["A"]["is_pass"] &&
            $tmp_check_result["CLM_2"]["is_pass"] &&
            $tmp_check_result["CLM_3"]["is_pass"] &&
            $tmp_check_result["CLM_4"]["is_pass"] &&
            (
                $tmp_check_result["CLM_5"]["is_pass"] ||
                $tmp_check_result["CLM_4"]["is_skip_step_5"]
            ) &&
            $tmp_check_result["CLM_6"]["is_pass"]
        ) {
            $body["is_pass"] = true;
        }

        if (!$body["is_pass"]) {
            $body["message"] = [
                'en' => 'Sorry, This phone number is unable to change promotional package.',
                'th' => 'ขออภัย คุณไม่สามารถเปลี่ยนแปลงแพ็กเกจ',
            ];
        }

        $body["tmp_check_result"] = $tmp_check_result;

        // Instant Benefit - After whitelist, if there is instant benefit listed. Call API to add instant benefit
        $instant_lrequest             = new \Illuminate\Http\Request();
        $instant_lrequest["campCode"] = $camp_id;
        $resp_instant_benefit         = self::postGetInstantBenefit($instant_lrequest);

        if ($resp_instant_benefit[0] != 200) {
            $body["get_instant_benefit_result"] = json_decode($resp_instant_benefit[1], true);
            $body["add_instant_benefit_result"] = null;
        } else {
            $instant_benefit = json_decode($resp_instant_benefit[1], true);
            $body["get_instant_benefit_result"] = $instant_benefit;

            $benefit_id = array_get($instant_benefit, 'campaignBean.instantBenefitList.0.benefitID');
            if ($benefit_id) {
                $add_instant_lrequest              = new \Illuminate\Http\Request();
                $add_instant_lrequest["benefitID"] = [$benefit_id];
                $add_instant_lrequest["campCode"]  = $camp_id;
                $add_instant_lrequest["serviceID"] = $mobile_number;
                $add_instant_lrequest["thaiID"]    = array_get($tmp_check_result, "CLM_2.body.getBillingProfileInfoResponse.return.billingProfileInfo.accountCustomerInfo.customer.certificateNumber", "");
                $resp_add_instant_benefit          = self::postAddInstantBenefit($add_instant_lrequest);
                $body["add_instant_benefit_result"]["resp"] = json_decode($resp_add_instant_benefit[1], true);
                $body["add_instant_benefit_result"]["req"] = [
                    "benefitID" => [$benefit_id],
                    "campCode"  => $camp_id,
                    "serviceID" => $mobile_number,
                    "thaiID"    => array_get($tmp_check_result, "CLM_2.body.getBillingProfileInfoResponse.return.billingProfileInfo.accountCustomerInfo.customer.certificateNumber", "")
                ];
                LogService::writeServiceLog(
                    "clm_add_instant_benefit",
                    json_encode_unicode($add_instant_lrequest->all()),
                    json_encode_unicode($resp_add_instant_benefit),
                    (new \DateTime())->format('d/m/Y H:i:s')
                );
            } else {
                $body["add_instant_benefit_result"] = null;
            }
        }
        // End Instant Benefit 

        Redis::set('truestore:clm_up_pack:identity:' . $identity . ':verify_data', json_encode(
            array_merge($body, [
                "input" => $lrequest->all(),
            ])
        ), 'EX', 30 * 60);

        // [1,2] ['a' => 1]
        // [ 0 => 1, 1=> 2, 'a' => 1]
        LogService::writeServiceLog(
            "verify_clm_up_pack",
            json_encode_unicode($tmp_lrequest->all()),
            json_encode_unicode($body),
            (new \DateTime())->format('d/m/Y H:i:s')
        );

        $result = [200, $body];

        return $result;
    }

    public static function postGetCurrentPackage(LaravelRequest $lrequest)
    {
        $identity              = $lrequest->input('identity');
        $clm_verify_redis_data = Redis::get('truestore:clm_up_pack:identity:' . $identity . ':verify_data');
        if ($clm_verify_redis_data == null) {
            $result =
                [
                400,
                [
                    'message' =>
                    [
                        'en' => 'Sorry not made within the time limit. Please do it again',
                        'th' => 'ขออภัย ไม่ได้ทำรายการภายในเวลาที่กำหนด กรุณาทำรายการใหม่อีกครั้ง',
                    ],
                ],
            ];

            return $result;
        }
        $clm_verify_redis_data_json_decode = json_decode($clm_verify_redis_data, true);

        // start of check if camp_id input is the same as in verify
        if (!(isset($clm_verify_redis_data_json_decode["input"]["camp_id"]) && $lrequest->has('camp_id') &&
            $clm_verify_redis_data_json_decode["input"]["camp_id"] == $lrequest->input('camp_id'))
        ) {
            $result =
                [
                400,
                [
                    'message' =>
                    [
                        'en' => 'Sorry, the system cannot process your request at the moment.',
                        'th' => 'ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้',
                    ],
                ],
            ];

            return $result;
        }
        // end of check if camp_id input is the same as in verify

        $tmp_lrequest                   = new \Illuminate\Http\Request();
        $tmp_lrequest["channel"]        = "Ascend ECM Affiliate";
        $tmp_lrequest["customerType"]   = "I";
        $tmp_lrequest["searchCriteria"] = "OfferInfo,BundleInfo,MessageInfo,MarketingInfo,TermConditionInfo";

        // change offerList for input
        $tmp_lrequest["offerList"] = $clm_verify_redis_data_json_decode["tmp_check_result"]["CLM_2"]["body"]["output_for_detail_priceplan_get_current_package"];

        $content_moi = json_decode(self::postGetMobileOfferInventory($tmp_lrequest)[1], true);

        $tmp_lrequest                 = new \Illuminate\Http\Request();
        $tmp_lrequest["businessLine"] = "MOBILE";

        // change offerList for input
        $tmp_lrequest["primResourceValue"] = $clm_verify_redis_data_json_decode["input"]["mobile_number"]; // input user verify

        $content_int = json_decode(self::getBillingProfileInfo($tmp_lrequest)[1], true);

        $result = [200, ["identity" => $identity, "moi" => $content_moi, "int" => $content_int, "clm_verify_redis_data_json_decode" => $clm_verify_redis_data_json_decode]];

        return $result;
    }

    public static function postListPackage(LaravelRequest $lrequest)
    {
        $identity              = $lrequest->input('identity');
        $clm_verify_redis_data = Redis::get('truestore:clm_up_pack:identity:' . $identity . ':verify_data');
        if ($clm_verify_redis_data == null) {
            $result =
                [
                400,
                [
                    'message' =>
                    [
                        'en' => 'Sorry not made within the time limit. Please do it again',
                        'th' => 'ขออภัย ไม่ได้ทำรายการภายในเวลาที่กำหนด กรุณาทำรายการใหม่อีกครั้ง',
                    ],
                ],
            ];

            return $result;
        }
        $clm_verify_redis_data_json_decode = json_decode($clm_verify_redis_data, true);

        // start of check if camp_id input is the same as in verify
        if (!(isset($clm_verify_redis_data_json_decode["input"]["camp_id"]) && $lrequest->has('camp_id') &&
            $clm_verify_redis_data_json_decode["input"]["camp_id"] == $lrequest->input('camp_id'))
        ) {
            $result =
                [
                400,
                [
                    'message' =>
                    [
                        'en' => 'Sorry, the system cannot process your request at the moment.',
                        'th' => 'ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้',
                    ],
                ],
            ];

            return $result;
        }
        // end of check if camp_id input is the same as in verify

        // start of step 6
        $tmp_lrequest                   = new \Illuminate\Http\Request();
        $tmp_lrequest["channel"]        = "Ascend ECM Affiliate";
        $tmp_lrequest["customerType"]   = "I";
        $tmp_lrequest["searchCriteria"] = "OfferInfo,BundleInfo,MessageInfo,MarketingInfo,TermConditionInfo";

        // change offerList for input
        if (isset($clm_verify_redis_data_json_decode["tmp_check_result"]["CLM_5"]["array_price_plan_intersect_result"])) {
            $tmp_lrequest["offerList"] = array_values($clm_verify_redis_data_json_decode["tmp_check_result"]["CLM_5"]["array_price_plan_intersect_result"]); //intersect 3,5
        } else {
            $tmp_lrequest["offerList"] = array_values($clm_verify_redis_data_json_decode["tmp_check_result"]["CLM_3"]["this_mobile_number_can_use_this_campaign_intersect_list"]); // step 3
        }

        $content_moi       = json_decode(self::postGetMobileOfferInventory($tmp_lrequest)[1], true);
        $tmp_moi_offerinfo =
            array_column(
            array_column(
                array_merge(...array_column($content_moi["offerSummaryList"], 'offerSummaryInfo')),
                "offerInfo"
            ),
            "price"
        );

        $is_use_unset = false;
        foreach ($tmp_moi_offerinfo as $tmp_moi_offerinfo_key => $tmp_moi_offerinfo_value) {
            if (!(floatval($tmp_moi_offerinfo_value) > floatval($clm_verify_redis_data_json_decode["tmp_check_result"]["CLM_2"]["rcRate"]))) {
                // not pass=> filter out
                unset($content_moi["offerSummaryList"][$tmp_moi_offerinfo_key]);
                $is_use_unset = true;
            }
        }

        if ($is_use_unset) {
            $content_moi["offerSummaryList"] = array_values($content_moi["offerSummaryList"]); // add this to make array after unset work properly
        }

        if (count($content_moi["offerSummaryList"]) > 0) {
            $tmp_moi_offerinfo =
                array_column(
                array_column(
                    array_merge(...array_column($content_moi["offerSummaryList"], 'offerSummaryInfo')),
                    "offerInfo"
                ),
                "price"
            );
        } else {
            $tmp_moi_offerinfo = [];
        }
        // end of step 6

        $clm_3                 = array_get($clm_verify_redis_data_json_decode, "tmp_check_result.CLM_3.body");
        $knowledge_detail_list = array_get($clm_3, 'campaignInfoBeanList.0.campaignBean.knowledgeDetailList', []);
                foreach ($knowledge_detail_list as $k => $v) {
                    if ($v['topic'] == 'Headline') {
                        $attach_img_path = array_get($v, 'knowledgeAttachList.0.imgPath');
                        if ($attach_img_path) {
                            $rp_path = str_replace('/goapi/campaign/getFile/', '', $attach_img_path);
                            $imgRequest = new \Illuminate\Http\Request();
                            $imgResponse = self::getImageCLM($imgRequest, $rp_path);
                            $imgBase64 = base64_encode($imgResponse[1]);
                            $knowledge_detail_list[$k]['knowledgeAttachList'][0]['image'] = "data:image/jpeg;base64," . $imgBase64;
                        }
                    }
                }
        $clm_3["campaignInfoBeanList"][0]["campaignBean"]["knowledgeDetailList"] = $knowledge_detail_list;

        $tier_bean_list = array_get($clm_3, "campaignInfoBeanList.0.campaignBean.tierBeanList", []);

        foreach ($tier_bean_list as $elm_tier) {
            foreach (array_get($elm_tier, "offeringBeanList") as $elm_offer) {
                $moi_code[] = array_get($elm_offer, "pricePlanCode");
            }
        }

        $moi_tier_lrequest                   = new \Illuminate\Http\Request();
        $moi_tier_lrequest["channel"]        = "Ascend ECM Affiliate";
        $moi_tier_lrequest["customerType"]   = "I";
        $moi_tier_lrequest["searchCriteria"] = "OfferInfo,BundleInfo,MessageInfo,MarketingInfo,TermConditionInfo";
        $moi_tier_lrequest["offerList"]      = $moi_code;

        $resp_moi_tier       = json_decode(self::postGetMobileOfferInventory($moi_tier_lrequest)[1], true);

        foreach ($tier_bean_list as $tier) {
            $tier_map[] = [
                "tier"              => $tier["tier"], 
                "offeringBeanList"  => $tier["offeringBeanList"]
            ];
        }

        $result = [
            200,
            [
                "identity"                          => $identity,
                "moi"                               => $content_moi,
                "tmp_moi_offerinfo"                 => $tmp_moi_offerinfo,
                "clm_verify_redis_data_json_decode" => $clm_verify_redis_data_json_decode,
                "tierBeanList"                      => $tier_map,
                "moiTierList"                       => $resp_moi_tier
            ],
        ];
        if (isset($clm_verify_redis_data_json_decode["tmp_check_result"]["CLM_3"]["body"])) {
            $result[1]["step_3_clm"] = $clm_3;
        }

        return $result;
    }

    public static function postConfirmNewPackage(LaravelRequest $lrequest)
    {
        $identity              = $lrequest->input('identity');
        $clm_verify_redis_data = Redis::get('truestore:clm_up_pack:identity:' . $identity . ':verify_data');
        if ($clm_verify_redis_data == null) {
            $result = [
                400,
                [
                    'message' =>
                    [
                        'en' => 'Sorry not made within the time limit. Please do it again',
                        'th' => 'ขออภัย ไม่ได้ทำรายการภายในเวลาที่กำหนด กรุณาทำรายการใหม่อีกครั้ง',
                    ],
                ],
            ];

            return $result;
        }
        $clm_verify_redis_data_json_decode = json_decode($clm_verify_redis_data, true);

        // start of check if camp_id input is the same as in verify
        if (!(isset($clm_verify_redis_data_json_decode["input"]["camp_id"]) && $lrequest->has('camp_id') &&
            $clm_verify_redis_data_json_decode["input"]["camp_id"] == $lrequest->input('camp_id'))
        ) {
            $result =
                [
                400,
                [
                    'message' =>
                    [
                        'en' => 'Sorry, the system cannot process your request at the moment.',
                        'th' => 'ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้',
                    ],
                ],
            ];

            return $result;
        }
        // end of check if camp_id input is the same as in verify

        $result[1]["identity"] = $identity;

        // if is_pass true go for moi with selected_offer

        $tmp_lrequest                     = new \Illuminate\Http\Request();
        $tmp_lrequest["correlationId"]    = Str::uuid()->toString();
        $tmp_lrequest["subscriberNumber"] = $clm_verify_redis_data_json_decode["input"]["mobile_number"]; // input identity
        $tmp_lrequest["clmCampaignId"]    = $lrequest->input('camp_id'); // input identity

        // change offerList for input
        $tmp_lrequest["offerName"] = $lrequest->input('selected_offer'); // wait for frontend selected_offer

        $tmp_lrequest["serviceType"]    = "80";
        $tmp_lrequest["activityReason"] = "CREQ";
        $tmp_lrequest["userText"]       = "Change package by CLM truemoveh";

        $step_name      = "CLM_3_ANOTHER";
        $tmp_lrequest_2 = new \Illuminate\Http\Request();
        $mobile_number  = $tmp_lrequest["subscriberNumber"];

        $tmp_lrequest_2["serviceID"] = $mobile_number;

        $tmp_lrequest_2["status"]             = ["Accept"];
        $tmp_lrequest_2["benefitStatus"]      = ["Pending"];
        $tmp_lrequest_2["orderType"]          = "CHANGE_PP";
        $tmp_lrequest_2["pageSize"]           = 1;
        $tmp_lrequest_2["pageNo"]             = 1;
        $tmp_check_result[$step_name]         = self::postGetCampTransClmList($tmp_lrequest_2);
        $tmp_check_result[$step_name]["body"] = json_decode($tmp_check_result[$step_name][1], true);

        //these 2 fields got described, and need detailed check to make sure this thing can be used properly

        if (isset($tmp_check_result["CLM_3_ANOTHER"]["body"]["campaignInfoBeanList"][0]["campaignBean"]["campCode"])) {
            $tmp_lrequest["clmCurrentCampaignID"] = $tmp_check_result["CLM_3_ANOTHER"]["body"]["campaignInfoBeanList"][0]["campaignBean"]["campCode"]; // campCode from CLM API (Check current campaign) Accept  campaignInfoBeanList[0].campaignBean.campCode
        } else {
            $tmp_lrequest["clmCurrentCampaignID"] = "";
        }

        if (isset($clm_verify_redis_data_json_decode["tmp_check_result"]["CLM_3"]["body"]["campaignInfoBeanList"][0]["campTransID"])) {
            $tmp_lrequest["clmCampTransID"] = $clm_verify_redis_data_json_decode["tmp_check_result"]["CLM_3"]["body"]["campaignInfoBeanList"][0]["campTransID"]; // campTransID from CLM API (Check whitelist) same with verify  campaignInfoBeanList[0].campTransID
        } else {
            $tmp_lrequest["clmCampTransID"] = "";
        }

        $param1 = $tmp_lrequest["correlationId"];

        LogService::writeServiceLog(
            "before_3gw_clm_up_pack",
            json_encode_unicode($tmp_lrequest->all()),
            json_encode_unicode([]),
            (new \DateTime())->format('d/m/Y H:i:s')
        );
        $tmp_content = self::postOrderChangePricePlan($tmp_lrequest, $param1);
        ElsaService::createElsaLoggerCLMOrderFormat('CLM uppack package', $lrequest->all(), $tmp_content, $clm_verify_redis_data_json_decode);
        LogService::writeServiceLog(
            "after_3gw_clm_up_pack",
            json_encode_unicode($tmp_lrequest->all()),
            json_encode_unicode($tmp_content),
            (new \DateTime())->format('d/m/Y H:i:s')
        );
        $content_3gw = json_decode($tmp_content[1], true);
        if (!($tmp_content[0] >= 200 && $tmp_content[0] < 300)) {
            return [400, ["message" =>
                [
                    'en' => 'Sorry, can not do that now. Please try again',
                    'th' => 'ขออภัย ระบบไม่สามารถดำเนินการได้ในขณะนี้ กรุณาทำรายการใหม่อีกครั้ง',
                ],
            ]];
        }

        Redis::set(
            'truestore:clm_up_pack:identity:' . $identity . ':3gw_data',
            json_encode(["content_3gw" => $content_3gw, "selected_offer" => $lrequest->input('selected_offer')]),
            'EX',
            24 * 60 * 60
        );
        Redis::set(
            'truestore:clm_up_pack:identity:' . $identity . ':longtime_oneday_verify_data',
            json_encode($clm_verify_redis_data_json_decode),
            'EX',
            24 * 60 * 60
        );
        $result = [200, ["identity" => $identity, "3gw" => $content_3gw, "clm_verify_redis_data_json_decode" => $clm_verify_redis_data_json_decode]];

        return $result;
    }

    public static function postSuccess(LaravelRequest $lrequest)
    {
        $identity               = $lrequest->input('identity');
        $correlation_id         = $lrequest->input('correlation_id');
        $confirm_3gw_redis_data = Redis::get('truestore:clm_up_pack:identity:' . $identity . ':3gw_data');
        $clm_verify_redis_data  = Redis::get('truestore:clm_up_pack:identity:' . $identity . ':longtime_oneday_verify_data');
        if ($confirm_3gw_redis_data == null || $clm_verify_redis_data == null) {
            $result = [
                400,
                [
                    'message' =>
                    [
                        'en' => 'Sorry not made within the time limit. Please do it again',
                        'th' => 'ขออภัย ไม่ได้ทำรายการภายในเวลาที่กำหนด กรุณาทำรายการใหม่อีกครั้ง',
                    ],
                ],
            ];

            return $result;
        }
        $confirm_3gw_redis_data_json_decode = json_decode($confirm_3gw_redis_data, true);
        $clm_verify_redis_data_json_decode  = json_decode($clm_verify_redis_data, true);
        $result                             = [200, [
            "is_pass"                            => false,
            "identity"                           => "1234",
            "confirm_3gw_redis_data_json_decode" => $confirm_3gw_redis_data_json_decode,
            "clm_verify_redis_data_json_decode"  => $clm_verify_redis_data_json_decode,
        ]];

        $result[1]["identity"] = $identity;
        if (isset($confirm_3gw_redis_data_json_decode["content_3gw"]["correlationId"]) &&
            $correlation_id == $confirm_3gw_redis_data_json_decode["content_3gw"]["correlationId"]
        ) {
            $result[1]["is_pass"] = true;
        }
        // if is_pass true go for moi with selected_offer

        if ($result[1]["is_pass"]) {
            $tmp_lrequest                   = new \Illuminate\Http\Request();
            $tmp_lrequest["channel"]        = "Ascend ECM Affiliate";
            $tmp_lrequest["customerType"]   = "I";
            $tmp_lrequest["searchCriteria"] = "OfferInfo,BundleInfo,MessageInfo,MarketingInfo,TermConditionInfo";

            // change offerList for input
            $tmp_lrequest["offerList"] = [$confirm_3gw_redis_data_json_decode["selected_offer"]];
            $content_moi               = json_decode(self::postGetMobileOfferInventory($tmp_lrequest)[1], true);
            $result[1]["moi"]          = $content_moi;
        }

        return $result;
    }

    public static function getBenefitOnTop(LaravelRequest $lrequest)
    {
        $identity           = $lrequest->input('identity');
        $verify_data        = Redis::get('truestore:clm_upsell:identity:' . $identity . ':verify_data');
        $submodule          = Redis::get('truestore:clm_upsell:identity:' . $identity . ':submodule');
        $content            = json_decode($verify_data, true);
        $verify_type        = array_get($content, 'input.type');
        $camp_id            = array_get($content, 'input.camp_id');
        $offering_bean_list = [];
        $nascode_list       = [];
        $priceplancode_list = [];

        if ($verify_type == 'trueonline') {
            $offering_bean_list = array_column(array_get($content, 'clm_data.offeringBeanList', []), 'mktCode');
        } else {
            $offering_bean_list = array_column(array_get($content, 'clm_data.offeringBeanList', []), 'matCode');
            $priceplancode_list = array_column(array_get($content, 'clm_data.offeringBeanList', []), 'pricePlanCode');
            $nascode_list       = array_column(array_get($content, 'clm_data.offeringBeanList', []), 'nasCode');
        }
        $knowledge_detail_list = array_get($content, 'clm_data.knowledgeDetailList', []);

        if (empty($knowledge_detail_list)) {
            return [404, [
                'message' => [
                    'en' => 'Not found benefit on top.',
                    'th' => 'ไม่พบสิทธิประโยชน์',
                ],
            ]];
        }

        return [200, [
            "offeringBeanList"    => $offering_bean_list,
            "propocodeList"       => $priceplancode_list,
            "nasCodeList"         => $nascode_list,
            "knowledgeDetailList" => $knowledge_detail_list,
            "subModule"           => $submodule,
            "product"             => [
                "type"       => array_get($content, 'input.type'),
                "product_id" => array_get($content, 'input.product_id'),
            ],
            "campId"              => $camp_id,
            "campaignName"        => array_get($content, 'clm_data.offeringBeanList.0.campaignDesc'),
        ]];
    }

    public static function postAddLeads(LaravelRequest $lrequest)
    {
        $contact_name = $lrequest->input('contact_name');
        $offer_product = $lrequest->input('offer_product');
        $mobile_number = $lrequest->input('mobile_number');
        $camp_code = $lrequest->input('camp_code');
        $error_response = [400, ["message" =>
            [
                'en' => 'Sorry, we cannot complete your request now. Please try again in a moment.',
                'th' => 'ระบบไม่สามารถดำเนินการในขณะนี้ กรุณาทำรายการใหม่อีกครั้ง',
            ],
        ]];

        $tmp_lrequest = new \Illuminate\Http\Request();
        $tmp_lrequest["serviceID"] = $mobile_number;
        $tmp_lrequest["campCode"] = $camp_code;
        $tmp_lrequest["status"] = ["New", "Consider"]; 
        $tmp_lrequest["activeCampFlag"] = "Y"; 
        $tmp_lrequest["pageSize"] = 200; 
        $tmp_lrequest["pageNo"] = 1; 
        $tmp_lrequest["tierFlag"] = "Y"; 
        $tmp_lrequest["knowledgeDetailFlag"] = "Y"; 

        $resp_camp_info = self::postGetCampTransClmList($tmp_lrequest);

        LogService::writeServiceLog(
            "after_get_camp_trans_clm_list",
            json_encode_unicode($tmp_lrequest->all()),
            json_encode_unicode($resp_camp_info),
            (new \DateTime())->format('d/m/Y H:i:s')
        );
        
        if (!($resp_camp_info[0] >= 200 && $resp_camp_info[0] < 300)) {
            return $error_response;
        }

        $resp_camp_info_json_decode = json_decode($resp_camp_info[1], true);

        if (array_get($resp_camp_info_json_decode, "code") != "0") {
            return [
                $error_response[0],
                array_merge($error_response[1], ["debug" => $resp_camp_info_json_decode]),
            ];
        }

        $add_lead_lrequest = new \Illuminate\Http\Request();
        $add_lead_lrequest["CamsTransID"] = array_get($resp_camp_info_json_decode, "campaignInfoBeanList.0.campTransID");
        $add_lead_lrequest["CampaignCode"] = $camp_code;
        $add_lead_lrequest["ProjectName"] = "CLM AFF Digital";
        $add_lead_lrequest["ContactNo1"] = $mobile_number;
        $add_lead_lrequest["CustermerName"] = $contact_name;
        $add_lead_lrequest["DataSource"] = "CLM";
        $add_lead_lrequest["Product"] = $offer_product;
        $add_lead_lrequest["ProductNumber"] = $mobile_number;
        $add_lead_lrequest["ExistingProduct"] = "True Mobile";

        $hop_hoz_code = array_get($resp_camp_info_json_decode, "campaignInfoBeanList.0.hopHozCode");
        if ($hop_hoz_code) {
            $add_lead_lrequest["HophozName"] = $hop_hoz_code;
        }

        $life_stage = array_get($resp_camp_info_json_decode, "campaignInfoBeanList.0.contactBean.lifeStage");
        if ($life_stage) {
            $add_lead_lrequest["LifeStage"] = $life_stage;
        }
        
        $life_style = array_get($resp_camp_info_json_decode, "campaignInfoBeanList.0.contactBean.lifeStyle");
        if ($life_style) {
            $add_lead_lrequest["LifeStyle"] = $life_style;
        }

        $camp_name = array_get($resp_camp_info_json_decode, "campaignInfoBeanList.0.campaignBean.campName");
        if ($camp_name) {
            $add_lead_lrequest["Campaign"] = $camp_name; 
        }

        $price_plan_desc = array_get($resp_camp_info_json_decode, "campaignInfoBeanList.0.pricePlanDesc");
        if ($price_plan_desc) {
            $add_lead_lrequest["CurrentPP"] = $price_plan_desc;
        }
        
        $usageAccum = array_get($resp_camp_info_json_decode, "campaignInfoBeanList.0.usageAccum");
        if ($usageAccum) {
            $add_lead_lrequest["Usage"] = strval($usageAccum);
        }
        
        $resp_add_lead = self::postCallbackAddLeads($add_lead_lrequest);

        LogService::writeServiceLog(
            "after_callback_add_leads",
            json_encode_unicode($add_lead_lrequest->all()),
            json_encode_unicode($resp_add_lead),
            (new \DateTime())->format('d/m/Y H:i:s')
        );

        if ($resp_add_lead[0] != 200) {
            return [
                $error_response[0],
                array_merge($error_response[1], [ "debug" => $resp_add_lead[2] ]),
            ];
        }

        $resp_add_lead_json_decode = json_decode($resp_add_lead[1], true);
        if ($resp_add_lead_json_decode["errorCode"]["status"] == "Error") {
            return [
                $error_response[0],
                array_merge($error_response[1], [ "debug" => $resp_add_lead_json_decode ]),
            ];
        }
        $result = [
            $resp_add_lead[0],
            $resp_add_lead_json_decode,
        ];
        return $result;
    }

    public static function getPreviewListPackage(LaravelRequest $lrequest)
    {
        $identity               = "xxx";
        $camp_code              = $lrequest->input("campCode");
        $error_response         = [400, ["message" =>
            [
                "en" => "Sorry, can not do that now. Please try again",
                "th" => "ขออภัย ระบบไม่สามารถดำเนินการได้ในขณะนี้ กรุณาทำรายการใหม่อีกครั้ง",
            ],
        ]];

        if (!$camp_code) {
            $result = $error_response;
            return $result;
        }

        $get_camp_lrequest              = new \Illuminate\Http\Request();
        $get_camp_lrequest["campCode"]  = $camp_code;
        $get_camp_lrequest["campGroup"] = ["CLM"];
        $get_camp_lrequest["pageSize"]  = 200; 
        $get_camp_lrequest["pageNo"]    = 1;
        $get_camp_lrequest["tierFlag"]  = "Y";
        $get_camp_lrequest["knowledgeDetailFlag"] = "Y";

        $get_camp_lrequest_resp = self::postGetCampaignList($get_camp_lrequest);
        $clm_3                  = json_decode($get_camp_lrequest_resp[1], true);

        $knowledge_detail_list = array_get($clm_3, "campaignBeanList.0.knowledgeDetailList", []);
        foreach ($knowledge_detail_list as $k => $v) {
            if ($v["topic"] == "Headline") {
                $attach_img_path = array_get($v, "knowledgeAttachList.0.imgPath");
                if ($attach_img_path) {
                    $rp_path = str_replace('/goapi/campaign/getFile/', '', $attach_img_path);
                    $imgRequest = new \Illuminate\Http\Request();
                    $imgResponse = self::getImageCLM($imgRequest, $rp_path);
                    $imgBase64 = base64_encode($imgResponse[1]);
                    $knowledge_detail_list[$k]["knowledgeAttachList"][0]["image"] = "data:image/jpeg;base64," . $imgBase64;
                }
            }
        }
        $clm_3["campaignBeanList"][0]["knowledgeDetailList"] = $knowledge_detail_list;

        $tier_bean_list = array_get($clm_3, "campaignBeanList.0.tierList", []);

        $moi_code = [""];
        foreach ($tier_bean_list as $elm_tier) {
            foreach (array_get($elm_tier, "offeringList", []) as $elm_offer) {
                $moi_code[] = array_get($elm_offer, "pricePlanCode");
            }
        }

        $moi_tier_lrequest                   = new \Illuminate\Http\Request();
        $moi_tier_lrequest["channel"]        = "Ascend ECM Affiliate";
        $moi_tier_lrequest["customerType"]   = "I";
        $moi_tier_lrequest["searchCriteria"] = "OfferInfo,BundleInfo,MessageInfo,MarketingInfo,TermConditionInfo";
        $moi_tier_lrequest["offerList"]      = $moi_code;

        $resp_moi_tier  = json_decode(self::postGetMobileOfferInventory($moi_tier_lrequest)[1], true);
        $tier_map       = [];
        foreach ($tier_bean_list as $tier) {
            $tier_map[] = [
                "tier"              => array_get($tier,"tier",[]), 
                "offeringBeanList"  => array_get($tier,"offeringList",[])
            ];
        }

        $result = [
            200,
            [
                "identity"                          => $identity,
                "tierBeanList"                      => $tier_map,
                "moiTierList"                       => $resp_moi_tier,
                "step_3_clm"                        => $clm_3
            ],
        ];

        return $result;
    }

    public static function getPreviewBenefitOnTop(LaravelRequest $lrequest)
    {
        $identity           = 'xxx';
        $camp_code          = $lrequest->input('campCode');
        $product_id         = $lrequest->input('productId');
        $verify_type        = $lrequest->input('verifyType');

        $get_camp_lrequest              = new \Illuminate\Http\Request();
        $get_camp_lrequest["campCode"]  = $camp_code;
        $get_camp_lrequest["campGroup"] = ["CLM"];
        $get_camp_lrequest["pageSize"]  = 200; 
        $get_camp_lrequest["pageNo"]    = 1;
        $get_camp_lrequest["tierFlag"]  = "Y";
        $get_camp_lrequest["knowledgeDetailFlag"] = "Y";

        $get_camp_lrequest_resp = self::postGetCampaignList($get_camp_lrequest);
        $clm_3                  = json_decode($get_camp_lrequest_resp[1], true);
        $knowledge_detail_list  = array_get($clm_3, "campaignBeanList.0.knowledgeDetailList", []);
        foreach ($knowledge_detail_list as $k => $v) {
            if ($v["topic"] == "Headline") {
                $attach_img_path = array_get($v, "knowledgeAttachList.0.imgPath");
                if ($attach_img_path) {
                    $rp_path = str_replace('/goapi/campaign/getFile/', '', $attach_img_path);
                    $imgRequest     = new \Illuminate\Http\Request();
                    $imgResponse    = self::getImageCLM($imgRequest, $rp_path);
                    $imgBase64      = base64_encode($imgResponse[1]);
                    $knowledge_detail_list[$k]["knowledgeAttachList"][0]["image"] = "data:image/jpeg;base64," . $imgBase64;
                }
            }
        }
        $clm_3["campaignBeanList"][0]["knowledgeDetailList"] = $knowledge_detail_list;

        $submodule          = array_get($clm_3, "campaignBeanList.0.subModule");
        $offering_bean_list = [];
        $nascode_list       = [];
        $priceplancode_list = [];

        $tiers = array_get($clm_3, "campaignBeanList.0.tierList", []);
        foreach ($tiers as $elm_tier) {
            foreach (array_get($elm_tier, "offeringList") as $elm_offer) {
                if ($verify_type == 'trueonline') {
                    if (array_get($elm_offer, "mktCode")) {
                        $offering_bean_list[] = array_get($elm_offer, "mktCode");
                    }
                } else {
                    if (array_get($elm_offer, "matCode")) {
                        $offering_bean_list[] = array_get($elm_offer, "matCode");
                    }
                    if (array_get($elm_offer, "pricePlanCode")) {
                        $priceplancode_list[] = array_get($elm_offer, "pricePlanCode");
                    }
                    if (array_get($elm_offer, "nasCode")) {
                        $nascode_list[]       = array_get($elm_offer, "nasCode");
                    }
                }
            }
        }

        $knowledge_detail_list = array_get($clm_3, 'campaignBeanList.0.knowledgeDetailList', []);

        if (empty($knowledge_detail_list)) {
            return [404, [
                'message' => [
                    'en' => 'Not found benefit on top.',
                    'th' => 'ไม่พบสิทธิประโยชน์',
                ],
            ]];
        }

        return [200, [
            "offeringBeanList"    => $offering_bean_list,
            "propocodeList"       => $priceplancode_list,
            "nasCodeList"         => $nascode_list,
            "knowledgeDetailList" => $knowledge_detail_list,
            "subModule"           => $submodule,
            "product"             => [
                "type"       => $verify_type,
                "product_id" => $product_id,
            ],
            "campId"              => $camp_code,
        ]];
    }

    public static function postGetCampaignInstantBenefit(LaravelRequest $lrequest)
    {
        $camp_code = $lrequest->input('campCode');

        $tmp_lrequest             = new \Illuminate\Http\Request();
        $tmp_lrequest["campCode"] = $camp_code;
        $resp_instant_benefit     = self::postGetInstantBenefit($tmp_lrequest);

        if ($resp_instant_benefit[0] != 200) {
            return [200, [
                "debug"         => json_decode($resp_instant_benefit[1], true),
                "knowledgeList" => []
            ]];
        }

        $instant_benefit        = json_decode($resp_instant_benefit[1], true);
        $knowledge_detail_list  = array_get($instant_benefit, 'campaignBean.knowledgeList', []);
        
        if ($knowledge_detail_list != null) {
            foreach ($knowledge_detail_list as $k => $v) {
                if ($v['topic'] == 'Instant Benefit Banner') {
                    $attach_img_path = array_get($v, 'imgPath');
                    if ($attach_img_path) {
                        $rp_path = str_replace('/goapi/campaign/getFile/', '', $attach_img_path);
                        $imgRequest = new \Illuminate\Http\Request();
                        $imgResponse = self::getImageCLM($imgRequest, $rp_path);
                        $imgBase64 = base64_encode($imgResponse[1]);
                        $knowledge_detail_list[$k]['image'] = "data:image/jpeg;base64," . $imgBase64;
                    }
                }
            }
        } else {
            $knowledge_detail_list = [];
        }

        return [200, ["knowledgeList" => $knowledge_detail_list]];
    }
}
