<?php

namespace App\Services;

use Illuminate\Http\Request as LaravelRequest;
use Illuminate\Support\Str;
use Redis;

class ClmVasService
{
    public static function getCampTrans($service_id, $thai_id, $camp_id)
    {
        // start of step 3 clm post whitelist
        $step_name                 = "CLM_3";
        $tmp_lrequest              = new \Illuminate\Http\Request();
        $tmp_lrequest["serviceID"] = $service_id;
        $tmp_lrequest["campCode"]  = $camp_id;
        if (!empty($thai_id)) {
            $tmp_lrequest["idNo"] = $thai_id;
        }

        $tmp_lrequest["status"]              = ["New", "Consider"];
        $tmp_lrequest["activeCampFlag"]      = "Y";
        $tmp_lrequest["pageSize"]            = 200;
        $tmp_lrequest["pageNo"]              = 1;
        $tmp_lrequest["tierFlag"]            = "Y";
        $tmp_lrequest["knowledgeDetailFlag"] = "Y";

        $tmp_check_result[$step_name]            = ClmService::postGetCampTransClmList($tmp_lrequest);
        $tmp_check_result[$step_name]["is_pass"] = false;
        $tmp_check_result[$step_name]["body"]    = json_decode($tmp_check_result[$step_name][1], true);

        if (isset($tmp_check_result[$step_name]["body"]["campaignInfoBeanList"][0]["campaignBean"]["mainProduct"])) {
            $tmp_check_result[$step_name]["is_cvg_main_product"] = $tmp_check_result[$step_name]["body"]["campaignInfoBeanList"][0]["campaignBean"]["mainProduct"] == "CVG"; //campaignInfoBeanList.mainProduct
        } else {
            $tmp_check_result[$step_name]["is_cvg_main_product"] = false;
        }

        $tmp_check_result[$step_name]["is_cvg_main_product"] = $tmp_check_result[$step_name]["is_cvg_main_product"];

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
        // end of step 3 clm post whitelist

        return [200, $tmp_check_result];
    }

    public static function postVerify(LaravelRequest $lrequest)
    {
        $body             = ["is_pass" => false];
        $identity         = Str::uuid()->toString();
        $body["identity"] = $identity;

        $circuit_id = $lrequest->input('circuit_id');
        $thai_id    = $lrequest->input('thai_id');
        $camp_id    = $lrequest->input('camp_id');

        $tmp_check_result = self::getCampTrans($circuit_id, $thai_id, $camp_id);
        if ($tmp_check_result[0] !== 200) {
            return $tmp_check_result;
        }
        $tmp_check_result = $tmp_check_result[1];

        $body["message"] =
            [
            'en' => 'Sorry, This phone number is unable to use.',
            'th' => 'ขออภัย คุณไม่สามารถใช้สิทธิ์พิเศษได้',
        ];

        if (!$tmp_check_result["CLM_3"]["is_pass"]) {
            return [400, $body];
        }

        $knowledge_detail_list = array_get($tmp_check_result, 'CLM_3.body.campaignInfoBeanList.0.campaignBean.knowledgeDetailList', []);
        foreach ($knowledge_detail_list as $k => $v) {
            if ($v['topic'] == 'Headline') {
                $attach_img_path = array_get($v, 'knowledgeAttachList.0.imgPath');
                if ($attach_img_path) {
                    $rp_path = str_replace('/goapi/campaign/getFile/', '', $attach_img_path);
                    $imgRequest = new \Illuminate\Http\Request();
                    $imgResponse = ClmService::getImageCLM($imgRequest, $rp_path);
                    $imgBase64 = base64_encode($imgResponse[1]);
                    $knowledge_detail_list[$k]['knowledgeAttachList'][0]['image'] = "data:image/jpeg;base64," . $imgBase64;
                }
            }
        }

        $body["is_pass"]          = true;
        $body["tmp_check_result"] = $tmp_check_result;
        $body["clm_data"]         = [
            'mobile_phone'        => array_get($tmp_check_result, 'CLM_2.body.getBillingProfileInfoResponse.return.billingProfileInfo.productInfo.subscriberInfo.primResourceValue'),
            'circuit_id'          => array_get($tmp_check_result, 'CLM_2.body.getBillingProfileInfoResponse.return.billingProfileInfo.productInfo.subscriberInfo.primResourceValue'),
            'prepaid_balance'     => array_get($tmp_check_result, 'CLM_2.body.getBillingProfileInfoResponse.return.billingProfileInfo.accountCustomerInfo.account.arBalance'),
            "offeringBeanList"    => array_get($tmp_check_result, 'CLM_3.body.campaignInfoBeanList.0.campaignBean.tierBeanList.0.offeringBeanList'),
            "knowledgeDetailList" => $knowledge_detail_list,
        ];

        // Instant Benefit - After whitelist, if there is instant benefit listed. Call API to add instant benefit
        $instant_lrequest             = new \Illuminate\Http\Request();
        $instant_lrequest["campCode"] = $camp_id;
        $resp_instant_benefit         = ClmService::postGetInstantBenefit($instant_lrequest);

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
                $add_instant_lrequest["serviceID"] = $circuit_id;
                $add_instant_lrequest["thaiID"]    = $thai_id;
                $resp_add_instant_benefit          = ClmService::postAddInstantBenefit($add_instant_lrequest);
                $body["add_instant_benefit_result"]["resp"] = json_decode($resp_add_instant_benefit[1], true);
                $body["add_instant_benefit_result"]["req"] = [
                    "benefitID" => [$benefit_id],
                    "campCode"  => $camp_id,
                    "serviceID" => $circuit_id,
                    "thaiID"    => $thai_id
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
        
        $body["message"] =
            [
            'en' => 'Pass',
            'th' => 'ผ่าน',
        ];

        Redis::set('truestore:clm_upsell:identity:' . $identity . ':verify_data', json_encode(
            array_merge($body, [
                "input" => $lrequest->all(),
            ])
        ), 'EX', 30 * 60);

        unset($body["clm_data"]);

        return [200, $body];
    }

    public static function postListPackage(LaravelRequest $lrequest, $service)
    {
        $identity              = $lrequest->input('identity');
        $clm_verify_redis_data = Redis::get('truestore:clm_upsell:identity:' . $identity . ':verify_data');

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

        // CLM_2
        $clm_2               = array_get($clm_verify_redis_data_json_decode, 'tmp_check_result.CLM_2.body');
        $clm_3               = array_get($clm_verify_redis_data_json_decode, 'tmp_check_result.CLM_3.body');
        $clm_data            = array_get($clm_verify_redis_data_json_decode, 'clm_data');
        $orchestrated        = array_get($clm_verify_redis_data_json_decode, 'tmp_check_result.orchestrated.body');
        $input               = array_get($clm_verify_redis_data_json_decode, 'input');
        $customer_type_check = array_get($clm_2, "getBillingProfileInfoResponse.return.billingProfileInfo.accountCustomerInfo.customer.customerType.code");

        $mobile_phone = $service === 'clm-tol-vas' ?
        array_get($clm_3, 'campaignInfoBeanList.0.contactBean.contact_no1') :
        array_get($clm_2, 'getBillingProfileInfoResponse.return.billingProfileInfo.productInfo.subscriberInfo.primResourceValue');

        $tier_bean_list = array_get($clm_3, 'campaignInfoBeanList.0.campaignBean.tierBeanList', []);

        foreach ($tier_bean_list as $tier) {
            $tier_map[] = [
                "tier"              => $tier["tier"], 
                "offeringBeanList"  => $tier["offeringBeanList"]
            ];
        }

        $type_tmvh = empty($customer_type_check) ? null : ($customer_type_check === 'P' ? 'prepaid' : 'postpaid');
        if ($type_tmvh == 'postpaid') {
            foreach ($tier_bean_list as $elm_tier) {
                foreach (array_get($elm_tier, "offeringBeanList") as $elm_offer) {
                    $moi_code[] = array_get($elm_offer, "socCode");
                }
            }
    
            $moi_tier_lrequest                   = new \Illuminate\Http\Request();
            $moi_tier_lrequest["channel"]        = "Ascend ECM Affiliate";
            $moi_tier_lrequest["customerType"]   = "I";
            $moi_tier_lrequest["searchCriteria"] = "OfferInfo,BundleInfo,MessageInfo,MarketingInfo,TermConditionInfo";
            $moi_tier_lrequest["offerList"]      = $moi_code;
    
            $resp_moi_tier      = json_decode(ClmService::postGetMobileOfferInventory($moi_tier_lrequest)[1], true);
            $moi_list           = array_column($resp_moi_tier["offerSummaryList"], "offerSummaryInfo");
            $offer_name_list    = array_map(function ($offer) { return array_get($offer, "0.offerInfo.offerName"); }, $moi_list);

            foreach ($tier_map as $idx_tier=>$elm_tier_map) {
                foreach (array_get($elm_tier_map, "offeringBeanList") as $idx_offer=>$elm_offer_map) {
                    $found_index = array_search(array_get($elm_offer_map, "socCode"), $offer_name_list);
                    if ($found_index !== false) {
                        $text_desc = array_get($moi_list[$found_index], "0.offerInfo.offerDescription");
                    } else {
                        $text_desc = array_get($elm_offer_map, "socDesc") ? array_get($elm_offer_map, "socDesc") : array_get($elm_offer_map, "vasDesc");
                    }
                    $tier_map[$idx_tier]["offeringBeanList"][$idx_offer]["convertDesc"] = $text_desc;
                }
            }
        } else {
            foreach ($tier_map as $idx_tier=>$elm_tier_map) {
                foreach (array_get($elm_tier_map, "offeringBeanList") as $idx_offer=>$elm_offer_map) {
                    $tier_map[$idx_tier]["offeringBeanList"][$idx_offer]["convertDesc"] = array_get($elm_offer_map, "socDesc") ? array_get($elm_offer_map, "socDesc") : array_get($elm_offer_map, "vasDesc");
                }
            }
        }

        $result = [
            200, [
                'type'                => $type_tmvh,
                'mobile_phone'        => $mobile_phone,
                'prepaid_balance'     => array_get($orchestrated, 'getOrchestratedProductListResponse.return.prepayList.orchestratedProductList.orchestratedProductInfoArray.0.account.arBalance'),
                'circuit_id'          => array_get($input, 'circuit_id'),
                "offeringBeanList"    => array_get($clm_3, 'campaignInfoBeanList.0.campaignBean.tierBeanList.0.offeringBeanList'),
                "knowledgeDetailList" => array_get($clm_data, 'knowledgeDetailList', []),
                "tierBeanList"        => $tier_map,
            ],
        ];

        return $result;
    }

    public static function setTOLRequestData($tmp_lrequest, $clm_3, $offering)
    {
        $campaign_info             = array_get($clm_3, 'campaignInfoBeanList.0');
        $tmp_lrequest['intParams'] = [
            "media"           => "FTTH",
            "productId"       => array_get($campaign_info, 'serviceID'),
            "selectedVasCode" => array_get($offering, 'vasCode'),
            "validateChannel" => "SELFSERVICE",
        ];
        $tmp_lrequest['omxParams'] = [
            'order' => [
                "channel"      => "ACS",
                "media"        => "FTTH",
                "createDate"   => date("Y-m-d") . 'T' . date("H:i:s") . 'Z',
                "productList"  => [
                    "customerContactList" => [
                        "title"       => "คุณ",
                        "name"        => array_get($campaign_info, 'contactBean.firstName'),
                        "lastname"    => array_get($campaign_info, 'contactBean.lastName'),
                        "mobilePhone" => array_get($campaign_info, 'contactBean.contact_no1'),
                    ],
                    "product"             => [
                        "productType"  => "TOL",
                        "productCode"  => "HSI",
                        "command"      => "C",
                        "accessNumber" => array_get($campaign_info, 'serviceID'),
                        "elementList"  => [
                            "action"       => "Add",
                            "duration"     => "30",
                            "durationUOM"  => "D",
                            "product"      => array_get($offering, 'vasCode'),
                            "productName"  => array_get($offering, 'vasDesc'),
                            "productType"  => "OC",
                            "groupProduct" => "UPSPEED",
                            "SEFCode"      => "VAS_SPEED",
                        ],
                        "attrList"     => [
                            "attrCode"    => "VAS",
                            "attrName"    => array_get($offering, 'vasCode'),
                            "attrValue"   => array_get($offering, 'vasCode'),
                            "description" => array_get($offering, 'vasDesc'),
                        ],
                    ],
                ],
                "customer"     => [
                    "customerGeneralInfo" => [
                        "identification" => array_get($campaign_info, 'contactBean.idNo'),
                    ],
                    "customerIndyName"    => [
                        "identification" => array_get($campaign_info, 'contactBean.idNo'),
                        "firstName"      => array_get($campaign_info, 'contactBean.firstName'),
                        "lastName"       => array_get($campaign_info, 'contactBean.lastName'),
                    ],
                ],
                "extendedInfo" => [
                    [
                        "name"  => "TOL_CHANGE_MAIN_PACK",
                        "value" => "N",
                    ],
                    [
                        "name"  => "SEND_SMS_FLAG",
                        "value" => "N",
                    ],
                    [
                        "name"  => "CLM_Source",
                        "value" => "SMS",
                    ],
                ],
            ],
        ];

        return $tmp_lrequest;
    }

    public static function postConfirmNewPackage(LaravelRequest $lrequest)
    {
        $identity       = $lrequest->input('identity');
        $selected_offer = $lrequest->input('selected_offer');

        $clm_verify_redis_data = Redis::get('truestore:clm_upsell:identity:' . $identity . ':verify_data');
        if (empty($clm_verify_redis_data)) {
            return [
                400,
                [
                    'message' =>
                    [
                        'en' => 'Sorry not made within the time limit. Please do it again',
                        'th' => 'ขออภัย ไม่ได้ทำรายการภายในเวลาที่กำหนด กรุณาทำรายการใหม่อีกครั้ง',
                    ],
                ],
            ];
        }
        $clm_verify_redis_data_json_decode = json_decode($clm_verify_redis_data, true);

        $tmp_lrequest   = new \Illuminate\Http\Request();
        $correlation_id = Str::uuid()->toString();

        $tmp_lrequest["correlationId"] = $correlation_id;
        $tmp_lrequest["channel"]       = "3GW-TRUESTORE";

        $clm_3              = array_get($clm_verify_redis_data_json_decode, "tmp_check_result.CLM_3.body");
        $offering_bean_list = array_get($clm_3, 'campaignInfoBeanList.0.campaignBean.tierBeanList.0.offeringBeanList', []);
        $key                = array_search($selected_offer, array_column($offering_bean_list, 'campOfferingID'));
        $offering           = $key !== false ? $offering_bean_list[$key] : [];

        $tmp_lrequest["clmParams"] = [
            "campaignId"        => array_get($clm_3, 'campaignInfoBeanList.0.campaignBean.campCode', ''),
            "campTransID"       => array_get($clm_3, 'campaignInfoBeanList.0.campTransID', ''),
            "currentCampaignID" => '',
            "source"            => 'SMS',
            "offerBeanList"     => [
                "offeringID"      => array_get($offering, 'campOfferingID', ''),
                "propositionCode" => array_get($offering, 'propositonCode', ''),
                "pricePlanCode"   => array_get($offering, 'pricePlanCode', ''),
                "nasCode"         => array_get($offering, 'nasCode', ''),
                "vasCode"         => array_get($offering, 'vasCode', ''),
                "mktCode"         => array_get($offering, 'mktCode', ''),
                "socCode"         => array_get($offering, 'socCode', ''),
                "cvgCode"         => array_get($offering, 'cvgCode', ''),
                "promoCode"       => array_get($offering, 'promoCode', ''),
                "campaignCode"    => array_get($offering, 'campaignCode', ''),
            ],
        ];

        $customer_type_check = array_get($clm_verify_redis_data_json_decode, "tmp_check_result.CLM_2.body.getBillingProfileInfoResponse.return.billingProfileInfo.accountCustomerInfo.customer.customerType.code");
        $tmp_content         = [];

        if (!empty($customer_type_check)) {
            // TMVH VAS
            $tmp_lrequest["subscriberNumber"] = array_get($clm_verify_redis_data_json_decode, "input.mobile_number", '');
            $tmp_lrequest["offerName"]        = array_get($offering, 'socCode', '');

            if ($customer_type_check === 'P') {
                $tmp_lrequest["serviceType"] = "85";
                LogService::writeServiceLog(
                    "before_3gw_clm_add_topping_pre",
                    json_encode_unicode($tmp_lrequest->all()),
                    json_encode_unicode([]),
                    (new \DateTime())->format('d/m/Y H:i:s')
                );
                $tmp_content = self::addToppingPrepaid($tmp_lrequest, $correlation_id);
                LogService::writeServiceLog(
                    "after_3gw_clm_add_topping_pre",
                    json_encode_unicode($tmp_lrequest->all()),
                    json_encode_unicode($tmp_content),
                    (new \DateTime())->format('d/m/Y H:i:s')
                );
                $content_3gw = json_decode($tmp_content[1], true);
            } else {
                $tmp_lrequest["serviceType"]    = "86";
                $tmp_lrequest["activityReason"] = "CREQ";
                $tmp_lrequest["operatorId"]     = "123";
                $tmp_lrequest["dealerCode"]     = "01014740";
                $tmp_lrequest["userText"]       = "Change package by CLM truemoveh";
                LogService::writeServiceLog(
                    "before_3gw_clm_add_topping_post",
                    json_encode_unicode($tmp_lrequest->all()),
                    json_encode_unicode([]),
                    (new \DateTime())->format('d/m/Y H:i:s')
                );
                $tmp_content = self::addToppingPostpaid($tmp_lrequest, $correlation_id);
                LogService::writeServiceLog(
                    "after_3gw_clm_add_topping_post",
                    json_encode_unicode($tmp_lrequest->all()),
                    json_encode_unicode($tmp_content),
                    (new \DateTime())->format('d/m/Y H:i:s')
                );
                $content_3gw = json_decode($tmp_content[1], true);
            }

            ElsaService::createElsaLoggerCLMOrderFormat('CLM TMVH Vas package', $lrequest->all(), $tmp_content, $clm_verify_redis_data_json_decode);
        } else {
            // TOL VAS
            $correlation_id                = \DateTime::createFromFormat('U.u', microtime(true))->format('YmdHisu');
            $tmp_lrequest["correlationId"] = $correlation_id;

            $tmp_lrequest = self::setTOLRequestData($tmp_lrequest, $clm_3, $offering);
            LogService::writeServiceLog(
                "before_3gw_clm_add_upspeed",
                json_encode_unicode($tmp_lrequest->all()),
                json_encode_unicode([]),
                (new \DateTime())->format('d/m/Y H:i:s')
            );
            $tmp_content = self::addUpSpeed($tmp_lrequest, $correlation_id);

            ElsaService::createElsaLoggerCLMOrderFormat('CLM TOL Vas package', $lrequest->all(), $tmp_content, $clm_verify_redis_data_json_decode);

            LogService::writeServiceLog(
                "after_3gw_clm_add_upspeed",
                json_encode_unicode($tmp_lrequest->all()),
                json_encode_unicode($tmp_content),
                (new \DateTime())->format('d/m/Y H:i:s')
            );
            $content_3gw = json_decode($tmp_content[1], true);
        }

        if (!($tmp_content[0] >= 200 && $tmp_content[0] < 300)) {
            return [
                400,
                [
                    "message"     =>
                    [
                        'en' => 'Sorry, can not do that now. Please try again',
                        'th' => 'ขออภัย ระบบไม่สามารถดำเนินการได้ในขณะนี้ กรุณาทำรายการใหม่อีกครั้ง',
                    ],
                    "3gw_content" => $tmp_content,
                ],
            ];
        }

        Redis::set(
            'truestore:clm_upsell:identity:' . $identity . ':3gw_data',
            json_encode(["content_3gw" => $content_3gw, "selected_offer" => $lrequest->input('selected_offer')]),
            'EX',
            24 * 60 * 60
        );
        Redis::set(
            'truestore:clm_upsell:identity:' . $identity . ':longtime_oneday_verify_data',
            json_encode($clm_verify_redis_data_json_decode),
            'EX',
            24 * 60 * 60
        );
        $result = [
            200,
            [
                "identity"                          => $identity,
                "3gw"                               => $content_3gw,
                "clm_verify_redis_data_json_decode" => $clm_verify_redis_data_json_decode,
            ],
        ];

        return $result;
    }

    public static function postSuccess(LaravelRequest $lrequest)
    {
        $identity               = $lrequest->input('identity');
        $correlation_id         = $lrequest->input('correlation_id');
        $confirm_3gw_redis_data = Redis::get('truestore:clm_upsell:identity:' . $identity . ':3gw_data');
        $clm_verify_redis_data  = Redis::get('truestore:clm_upsell:identity:' . $identity . ':longtime_oneday_verify_data');
        if ($confirm_3gw_redis_data == null || $clm_verify_redis_data == null) {
            return [
                400,
                [
                    'message' =>
                    [
                        'en' => 'Sorry not made within the time limit. Please do it again',
                        'th' => 'ขออภัย ไม่ได้ทำรายการภายในเวลาที่กำหนด กรุณาทำรายการใหม่อีกครั้ง',
                    ],
                ],
            ];
        }
        $confirm_3gw_redis_data_json_decode = json_decode($confirm_3gw_redis_data, true);
        $clm_verify_redis_data_json_decode  = json_decode($clm_verify_redis_data, true);
        $result                             = [200, [
            "is_pass"                            => false,
            "identity"                           => $identity,
            'mobile_no'                          => array_get($clm_verify_redis_data_json_decode, 'tmp_check_result.CLM_2.body.getBillingProfileInfoResponse.return.billingProfileInfo.productInfo.subscriberInfo.primResourceValue'),
            'circuit_id'                         => array_get($clm_verify_redis_data_json_decode, 'input.circuit_id'),
            "confirm_3gw_redis_data_json_decode" => $confirm_3gw_redis_data_json_decode,
            "clm_verify_redis_data_json_decode"  => $clm_verify_redis_data_json_decode,
        ]];

        if (isset($confirm_3gw_redis_data_json_decode["content_3gw"]["correlationId"]) &&
            $correlation_id == $confirm_3gw_redis_data_json_decode["content_3gw"]["correlationId"]
        ) {
            $result[1]["is_pass"] = true;
        }

        return $result;
    }

    public static function getHeader($type = 'default', $correlation_id = false)
    {
        $header = [];
        switch ($type) {
            case "application/json":
                $header = [
                    "Content-Type"     => "application/json",
                    "x-api-key"        => env("X_API_KEY_TOL_SSV", false),
                    "X-Correlation-ID" => $correlation_id,
                ];
                break;
            default:
                $header = [
                    "x-api-key"        => env('X_API_KEY_TOL_SSV', false),
                    "X-Correlation-ID" => $correlation_id,
                ];
                break;
        }

        if (empty($correlation_id)) {
            unset($header["X-Correlation-ID"]);
        }

        return $header;
    }

    public static function addToppingPrepaid(LaravelRequest $lrequest, $correlation_id)
    {
        $header                           = self::getHeader("application/json", $correlation_id);
        $fixed_parameter_list["base_url"] = env("AWS_GATEWAY_URL_TOL_SSV", false) . "/";
        $result                           = WlsService::operateRequestAction("tmvh/clm/order-tmh-pre-topping-add/{$correlation_id}", 'POST', $lrequest, $header, $fixed_parameter_list);

        return $result;
    }

    public static function addToppingPostpaid(LaravelRequest $lrequest, $correlation_id)
    {
        $header                           = self::getHeader("application/json", $correlation_id);
        $fixed_parameter_list["base_url"] = env("AWS_GATEWAY_URL_TOL_SSV", false) . "/";
        $result                           = WlsService::operateRequestAction("tmvh/clm/order-tmh-post-topping-add/{$correlation_id}", 'POST', $lrequest, $header, $fixed_parameter_list);

        return $result;
    }

    public static function addUpSpeed(LaravelRequest $lrequest, $correlation_id)
    {
        $header                           = self::getHeader("application/json", $correlation_id);
        $fixed_parameter_list["base_url"] = env("AWS_GATEWAY_URL_TOL_SSV", false) . "/";
        $result                           = WlsService::operateRequestAction("tmvh/clm/order-tol-vas-upspeed-add/{$correlation_id}", 'POST', $lrequest, $header, $fixed_parameter_list);

        return $result;
    }

    public static function getOrchestratedProductList(LaravelRequest $lrequest)
    {
        $header                           = self::getHeader("application/json");
        $fixed_parameter_list["base_url"] = env("AWS_GATEWAY_URL_TOL_SSV", false) . "/";
        $result                           = WlsService::operateRequestAction("tmvh/clm/get-orchestrated-product-list", 'POST', $lrequest, $header, $fixed_parameter_list);

        return $result;
    }

    public static function postPreviewListPackage(LaravelRequest $lrequest, $service)
    {
        $identity                       = 'xxx';
        $circuit_id                     = '9688002333';
        $prepaid_balance                = '1000.00';
        $mobile_phone                   = '0899999999';
        $camp_code                      = $lrequest->input("campCode");
        $type_tmvh                      = $lrequest->input("tmvhType");
        
        if ($service === 'clm-tol-vas') {
            $type_tmvh = null;
            $prepaid_balance = null;
        }
        
        $get_camp_lrequest              = new \Illuminate\Http\Request();
        $get_camp_lrequest["campCode"]  = $camp_code;
        $get_camp_lrequest["campGroup"]  = ["CLM"];
        $get_camp_lrequest["pageSize"]  = 200; 
        $get_camp_lrequest["pageNo"]    = 1;
        $get_camp_lrequest["tierFlag"]  = "Y";
        $get_camp_lrequest["knowledgeDetailFlag"]  = "Y";

        $get_camp_lrequest_resp = ClmService::postGetCampaignList($get_camp_lrequest);
        $clm_3                  = json_decode($get_camp_lrequest_resp[1], true);

        $knowledge_detail_list = array_get($clm_3, "campaignBeanList.0.knowledgeDetailList", []);
        
        foreach ($knowledge_detail_list as $k => $v) {
            if ($v["topic"] == "Headline") {
                $attach_img_path = array_get($v, "knowledgeAttachList.0.imgPath");
                if ($attach_img_path) {
                    $rp_path = str_replace('/goapi/campaign/getFile/', '', $attach_img_path);
                    $imgRequest = new \Illuminate\Http\Request();
                    $imgResponse = ClmService::getImageCLM($imgRequest, $rp_path);
                    $imgBase64 = base64_encode($imgResponse[1]);
                    $knowledge_detail_list[$k]["knowledgeAttachList"][0]["image"] = "data:image/jpeg;base64," . $imgBase64;
                }
            }
        }
        $clm_3["campaignBeanList"][0]["knowledgeDetailList"] = $knowledge_detail_list;

        $tier_bean_list = array_get($clm_3, 'campaignBeanList.0.tierList', []);
        
        foreach ($tier_bean_list as $tier) {
            $tier_map[] = [
                "tier"          => $tier["tier"], 
                "offeringList"  => $tier["offeringList"]
            ];
        }

        if ($type_tmvh == 'postpaid') {
            foreach ($tier_bean_list as $elm_tier) {
                foreach (array_get($elm_tier, "offeringList") as $elm_offer) {
                    $moi_code[] = array_get($elm_offer, "socCode");
                }
            }
    
            $moi_tier_lrequest                   = new \Illuminate\Http\Request();
            $moi_tier_lrequest["channel"]        = "Ascend ECM Affiliate";
            $moi_tier_lrequest["customerType"]   = "I";
            $moi_tier_lrequest["searchCriteria"] = "OfferInfo,BundleInfo,MessageInfo,MarketingInfo,TermConditionInfo";
            $moi_tier_lrequest["offerList"]      = $moi_code;
    
            $resp_moi_tier      = json_decode(ClmService::postGetMobileOfferInventory($moi_tier_lrequest)[1], true);
            $moi_list           = [];
            if (isset($resp_moi_tier["offerSummaryList"])) {
                $moi_list = array_column($resp_moi_tier["offerSummaryList"], "offerSummaryInfo");
            }
            $offer_name_list    = array_map(function ($offer) { return array_get($offer, "0.offerInfo.offerName"); }, $moi_list);

            foreach ($tier_map as $idx_tier=>$elm_tier_map) {
                foreach (array_get($elm_tier_map, "offeringList") as $idx_offer=>$elm_offer_map) {
                    $found_index = array_search(array_get($elm_offer_map, "socCode"), $offer_name_list);
                    if ($found_index !== false) {
                        $text_desc = array_get($moi_list[$found_index], "0.offerInfo.offerDescription");
                    } else {
                        $text_desc = array_get($elm_offer_map, "socDesc") ? array_get($elm_offer_map, "socDesc") : array_get($elm_offer_map, "vasDesc");
                    }
                    $tier_map[$idx_tier]["offeringList"][$idx_offer]["convertDesc"] = $text_desc;
                }
            }
        } else {
            foreach ($tier_map as $idx_tier=>$elm_tier_map) {
                foreach (array_get($elm_tier_map, "offeringList") as $idx_offer=>$elm_offer_map) {
                    $tier_map[$idx_tier]["offeringList"][$idx_offer]["convertDesc"] = array_get($elm_offer_map, "socDesc") ? array_get($elm_offer_map, "socDesc") : array_get($elm_offer_map, "vasDesc");
                }
            }
        }

        $result = [
            200, [
                'type'                => $type_tmvh,
                'mobile_phone'        => $mobile_phone,
                'prepaid_balance'     => $prepaid_balance,
                'circuit_id'          => $circuit_id,
                "knowledgeDetailList" => array_get($clm_3, 'campaignBeanList.0.knowledgeDetailList', []),
                "tierBeanList"        => $tier_map,
            ],
        ];

        return $result;
    }
}
