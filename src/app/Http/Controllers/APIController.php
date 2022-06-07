<?php

namespace App\Http\Controllers;

use App\Facades\VHora\VHoraService;
use App\Libraries\RequestData\OrderRequest;
use App\Models\TruemovehConfigModel;
use App\Services\AwsService;
use App\Services\CacheService;
use App\Services\CouponService;
use App\Services\CustomerExpService;
use App\Services\ElsaService;
use App\Services\EmailService;
use App\Services\ImageService;
use App\Services\LogService;
use App\Services\PreToPostService;
use App\Services\Sale\SaleSmsService;
use App\Services\SimActivationService;
use App\Services\TrueSdkService;
use App\Services\TyphoonService;
use App\Services\WeOmniService;
use App\Services\WlsService;
use CoderCat\JWKToPEM\JWKConverter;
use Illuminate\Http\Request as LaravelRequest;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Pdf;
use Illuminate\Support\Facades\Redis;
use \Firebase\JWT\JWT;

class APIController extends Controller
{
    public function callAPIContent($url, LaravelRequest $lrequest, $bypass = false)
    {
        $header = [];
        if (!empty($lrequest->headers->all())) {
            $header = $lrequest->headers->all();
        }

        $is_in_valid_method = false;
        foreach (["get", "post", "put", "delete"] as $method_name) {
            if ($lrequest->isMethod($method_name)) {
                $method             = $method_name;
                $is_in_valid_method = true;
            }
        }
        if (!$is_in_valid_method) {
            abort(500, 'Method other than specified will not be allowed');
        }

        $exploded_url = explode("/", $url);

        if ($exploded_url[0] == "oauth2" && $exploded_url[1] == "token") {
            $content = TrueSdkService::fetchTrueidBodyPost($url, $method, $lrequest, $header);
        } elseif ($exploded_url[0] == "account-app") {
            if ($exploded_url[1] == "login") {
                $content = WlsService::postLoginWls($url, $method, $lrequest, $header);
            } elseif ($exploded_url[1] == "profile") {
                $content = WlsService::getProfileWls($url, $method, $lrequest, $header);
            } elseif (
                $exploded_url[1] == "truecard" &&
                isset($exploded_url[2]) &&
                $exploded_url[2] == "get-status"
            ) {
                $content = WlsService::getTruecardStatus($url, $method, $lrequest, $header);
            }
        } elseif ($exploded_url[0] == "order" && $exploded_url[1] == "order") {
            $content = WlsService::getOrderWls($url, $method, $lrequest, $header);
        } elseif ($exploded_url[0] == 'user' && $exploded_url[2] == 'default' && $exploded_url[3] == 'address') {
            $user_id = $exploded_url[1];
            $content = WlsService::setDefaultUserAddress($user_id, $method, $lrequest);
            Redis::del("store-cache:api:user-address:$user_id");
        } elseif ($exploded_url[0] == 'user' && $exploded_url[2] == 'profile') {
            $user_id = $exploded_url[1];
            $content = WlsService::updateProfile($method, $lrequest);
        } elseif ($exploded_url[0] == 'user' && $exploded_url[2] == 'address') {
            $user_id = $exploded_url[1];
            if ($method == 'get') {
                $cache   = Redis::get("store-cache:api:user-address:$user_id");
                $content = json_decode($cache, 1);
                if (!$content) {
                    $content = WlsService::manageUserAddress($user_id, $method, $lrequest);
                    Redis::set("store-cache:api:user-address:$user_id", json_encode($content));
                }
            } else {
                $content = WlsService::manageUserAddress($user_id, $method, $lrequest);
                Redis::del("store-cache:api:user-address:$user_id");
            }
        } elseif ($exploded_url[0] == "wportal" && $exploded_url[1] == "product") {
            $product_id      = $exploded_url[2];
            $header_product  = [];
            $sim_family_info = [];
            $tmh_token_redis = "";
            if (array_get($header, 'tmvh-token')) {
                $tmh_token       = array_get($header, 'tmvh-token');
                $tmh_token_redis = $tmh_token;
                $raw_token       = WeOmniService::getAesWecamp($tmh_token[0]);
                $token_data      = explode('|', array_get($raw_token, '1.original_plaintext'));
                if (in_array(array_get($token_data, 2), ['E', 'F'])) {
                    $sim_family_info = [
                        'hdr_cp_fan_emp_id'        => array_get($token_data, 0, ""),
                        'hdr_cp_fan_company_group' => array_get($token_data, 1, ""),
                    ];

                    if (array_get($token_data, 3)) {
                        $sim_family_info['hdr_cp_fan_ref_code'] = array_get($token_data, 3, '');
                        unset($token_data[3]);
                    }

                    unset($token_data[0]);
                    $tmh_token = "|" . implode("|", $token_data);
                }
                $header_product['tmvh-token'] = $tmh_token;
            }

            if (array_get($header, 'use-thai-id')) {
                $header_product['use-thai-id'] = array_get($header, 'use-thai-id');
            }

            if (array_get($header, 'type')) {
                $header_product['type'] = array_get($header, 'type');
            }

            if (array_get($header, 'paysmooth-token')) {
                $header_product['paysmooth-token'] = array_get($header, 'paysmooth-token');
            }

            $request_all = $lrequest->all();
            unset($request_all['bench']);
            $request_json = json_encode($request_all);
            $header_json  = json_encode($header_product);
            $key_cache    = "product-level-d:api:product:$product_id:data:$request_json:header:$header_json";

            if (!$lrequest->get('bench')) {
                $tmp_redis_content = Redis::get($key_cache);
                if (!empty($tmp_redis_content)) {
                    list($product_header, $response_product) = WlsService::getPortalProduct($url, $method, $lrequest, ['x-api-auth' => env('X_API_AUTH', false)]);
                    $product_data                            = json_decode($response_product[1], true);
                    $inventory_list                          = array_column(array_get($product_data, 'data.record.inventories', []), null, 'id');

                    $cache_content = json_decode($tmp_redis_content, true);
                    $cache_data    = json_decode(array_get(array_get($cache_content, 'content'), 1), true);

                    $cache_inventories = array_get($cache_data, 'data.record.inventories', []);
                    foreach ($cache_inventories as $key => $cache_inventory) {
                        $cache_inventory_id                                            = array_get($cache_inventory, 'id');
                        $cache_data['data']['record']['inventories'][$key]['quantity'] = array_get($inventory_list, "$cache_inventory_id.quantity", 0);
                    }

                    if ($sim_family_info) {
                        $cache_data['data']['record']['sim_family_info'] = $sim_family_info;
                    }

                    return ['status_code' => 200, 'body' => json_encode($cache_data)];
                }
            }

            $content = WlsService::getPortalProductWls($url, $method, $lrequest, $header, $bypass);
            Redis::set($key_cache, json_encode(["content" => $content, "token" => $tmh_token_redis]));
        } elseif ($exploded_url[0] == "update" && $exploded_url[1] == "cache" && $exploded_url[2] == "product") {
            $content = $this->updateCacheProduct($lrequest, $bypass);
        } elseif ($method == 'delete' && $exploded_url[0] == "clear" && $exploded_url[1] == "cache" && array_get($exploded_url, 2) == 'product') {
            $content = CacheService::clearCacheProduct($lrequest);
        } elseif ($exploded_url[0] == 'clear' && $exploded_url[1] == 'cache') {
            $content = CacheService::clearCache($lrequest);
        } elseif ($exploded_url[0] == "cpoint" && $exploded_url[1] == "request-user") {
            $content = WlsService::getBalancePointWls($url, $method, $lrequest, $header);
        } elseif ($exploded_url[0] == "ecom" && $exploded_url[1] == "cart") {
            $content = WlsService::cartActionWls($url, $method, $lrequest, $header);
        } elseif ($exploded_url[0] == "wportal" && $exploded_url[1] == "cart") {
            $content = WlsService::cartActionWlsWithSimMeta($url, $method, $lrequest, $header);
        } elseif ($exploded_url[0] == "customer" && $exploded_url[1] == "get-related-list-tol") {
            $content = CustomerExpService::postCustomerGetRelateListTol($url, $method, $lrequest, $header);

            if (!($lrequest->has('is_feature_test') && $lrequest->input('is_feature_test') == true)) {
                $message_id      = Str::uuid()->toString();
                $log_message_str = "message_id = $message_id, verification-get_related_list_tol input: " . json_encode_unicode($lrequest->all()) . ", verification-get_related_list_tol result: " . json_encode_unicode(["content" => $content]);
                LogService::writeActionLog($lrequest, $log_message_str);
            }
        } elseif (isset($exploded_url[1]) && $exploded_url[1] == "placeorder") {
            $content = WlsService::postPlaceorderWls($url, $method, $lrequest, $header);
        } elseif ($exploded_url[0] == "verify" && $exploded_url[1] == "multi_campaign") {
            $message_id                 = Str::uuid()->toString();
            $lrequest["tmp_message_id"] = $message_id;
            $content                    = WlsService::postVerifyMultiCampaign($url, $method, $lrequest, $header);

            if (!($lrequest->has('is_feature_test') && $lrequest->input('is_feature_test') == true)) {
                $log_message_str = "message_id = $message_id, verification-multi_campaign input: " . json_encode_unicode($lrequest->all()) . ", verification-multi_campaign result: " . json_encode_unicode(["content" => $content]);
                LogService::writeActionLog($lrequest, $log_message_str);
            }
        } elseif ($exploded_url[0] == "verify" && $exploded_url[1] == "device_bundle_existing") {
            $message_id                 = Str::uuid()->toString();
            $lrequest["tmp_message_id"] = $message_id;
            $content                    = WlsService::postVerifyDeviceBundleExisting($url, $method, $lrequest, $header);

            if (!($lrequest->has('is_feature_test') && $lrequest->input('is_feature_test') == true)) {
                $log_message_str = "message_id = $message_id, verification-device_bundle_existing input: " . json_encode_unicode($lrequest->all()) . ", verification-device_bundle_existing result: " . json_encode_unicode(["content" => $content]);
                LogService::writeActionLog($lrequest, $log_message_str);
            }
        } elseif ($exploded_url[0] == "verify" && $exploded_url[1] == "device_bundle_new_customer") {
            $message_id                 = Str::uuid()->toString();
            $lrequest["tmp_message_id"] = $message_id;
            $content                    = WlsService::postVerifyDeviceBundleNewCustomer($url, $method, $lrequest, $header);

            if (
                $lrequest->has('face_recog_cust_capture') && $lrequest->has('face-recog-cust-certificate') &&
                !($lrequest->has('is_feature_test') && $lrequest->input('is_feature_test') == true)
            ) {
                $input_without_the_whole_image_but_with_filesize = [
                    "face_recog_cust_capture"     => $lrequest->input("face_recog_cust_capture"),
                    "face-recog-cust-certificate" => $lrequest->input("face-recog-cust-certificate"),
                ];
                if (isset($input_without_the_whole_image_but_with_filesize["face_recog_cust_capture"])) {
                    $data = $input_without_the_whole_image_but_with_filesize["face_recog_cust_capture"];

                    $raw_size                                                                                     = strlen(base64_decode($data));
                    $input_without_the_whole_image_but_with_filesize["face_recog_cust_capture_filesize_raw_size"] = ($raw_size / 1000.0) . "kB";

                    unset($input_without_the_whole_image_but_with_filesize["face_recog_cust_capture"]);
                }
                if (isset($input_without_the_whole_image_but_with_filesize["face-recog-cust-certificate"])) {
                    $data = $input_without_the_whole_image_but_with_filesize["face-recog-cust-certificate"];

                    $raw_size                                                                                         = strlen(base64_decode($data));
                    $input_without_the_whole_image_but_with_filesize["face-recog-cust-certificate_filesize_raw_size"] = ($raw_size / 1000.0) . "kB";

                    unset($input_without_the_whole_image_but_with_filesize["face-recog-cust-certificate"]);
                }
                if ($lrequest->has('face_recog_cust_capture_filename')) {
                    $input_without_the_whole_image_but_with_filesize["face_recog_cust_capture_filename"] = $lrequest->input('face_recog_cust_capture_filename');
                }
                if ($lrequest->has('face-recog-cust-certificate-filename')) {
                    $input_without_the_whole_image_but_with_filesize["face-recog-cust-certificate-filename"] = $lrequest->input('face-recog-cust-certificate-filename');
                }
                $face_recognition_log_message = "face recognition phase filesize detail: " . json_encode_unicode($input_without_the_whole_image_but_with_filesize);
            }

            if (!($lrequest->has('is_feature_test') && $lrequest->input('is_feature_test') == true)) {
                $tmp_lrequest = $lrequest->all();

                if (isset($tmp_lrequest["face_recog_cust_capture"])) {
                    unset($tmp_lrequest["face_recog_cust_capture"]);
                }
                if (isset($tmp_lrequest["face-recog-cust-certificate"])) {
                    unset($tmp_lrequest["face-recog-cust-certificate"]);
                }

                $log_message_str = "message_id = $message_id, verification-device_bundle_new_customer input: " . json_encode_unicode($tmp_lrequest) . ", verification-device_bundle_new_customer result: " . json_encode_unicode(["content" => $content]);
                if (isset($face_recognition_log_message)) {
                    $log_message_str .= ", " . $face_recognition_log_message;
                }
                LogService::writeActionLog($lrequest, $log_message_str);
            }
        } elseif ($exploded_url[0] == "register-campaign" && $exploded_url[1] == "vlearn") {
            $content         = WlsService::postRegisterCampaignVlearn($url, $method, $lrequest, $header);
            $message_id      = Str::uuid()->toString();
            $log_message_str = "message_id = $message_id, verification-vlearn input: " . json_encode_unicode($lrequest->all()) . ", verification-vlearn result: " . json_encode_unicode(["content" => $content]);
            LogService::writeActionLog($lrequest, $log_message_str);
        } elseif ($exploded_url[0] == "verify" && $exploded_url[1] == "trueid") {
            $message_id                 = Str::uuid()->toString();
            $lrequest["tmp_message_id"] = $message_id;
            $content                    = WlsService::postVerifyTrueidWls($url, $method, $lrequest, $header);

            if ($lrequest->has('face_recog_cust_capture') && $lrequest->has('face-recog-cust-certificate')) {
                $input_without_the_whole_image_but_with_filesize = [
                    "face_recog_cust_capture"     => $lrequest->input("face_recog_cust_capture"),
                    "face-recog-cust-certificate" => $lrequest->input("face-recog-cust-certificate"),
                ];
                if (isset($input_without_the_whole_image_but_with_filesize["face_recog_cust_capture"])) {
                    $data = $input_without_the_whole_image_but_with_filesize["face_recog_cust_capture"];

                    $raw_size                                                                                     = strlen(base64_decode($data));
                    $input_without_the_whole_image_but_with_filesize["face_recog_cust_capture_filesize_raw_size"] = ($raw_size / 1000.0) . "kB";

                    unset($input_without_the_whole_image_but_with_filesize["face_recog_cust_capture"]);
                }
                if (isset($input_without_the_whole_image_but_with_filesize["face-recog-cust-certificate"])) {
                    $data = $input_without_the_whole_image_but_with_filesize["face-recog-cust-certificate"];

                    $raw_size                                                                                         = strlen(base64_decode($data));
                    $input_without_the_whole_image_but_with_filesize["face-recog-cust-certificate_filesize_raw_size"] = ($raw_size / 1000.0) . "kB";

                    unset($input_without_the_whole_image_but_with_filesize["face-recog-cust-certificate"]);
                }
                if ($lrequest->has('face_recog_cust_capture_filename')) {
                    $input_without_the_whole_image_but_with_filesize["face_recog_cust_capture_filename"] = $lrequest->input('face_recog_cust_capture_filename');
                }
                if ($lrequest->has('face-recog-cust-certificate-filename')) {
                    $input_without_the_whole_image_but_with_filesize["face-recog-cust-certificate-filename"] = $lrequest->input('face-recog-cust-certificate-filename');
                }
                $face_recognition_log_message = "face recognition phase filesize detail: " . json_encode_unicode($input_without_the_whole_image_but_with_filesize);
            }

            if (isset($content["tmp_check_mini_step_result"]) && isset($content["case_criteria"]) && isset($content["is_pass_array"])) {
                $tmp_check_mini_step_result = $content["tmp_check_mini_step_result"];
                $case_criteria              = $content["case_criteria"];
                $is_pass_array              = $content["is_pass_array"];

                $tmp_lrequest = $lrequest->all();

                if (isset($tmp_lrequest["face_recog_cust_capture"])) {
                    unset($tmp_lrequest["face_recog_cust_capture"]);
                }
                if (isset($tmp_lrequest["face-recog-cust-certificate"])) {
                    unset($tmp_lrequest["face-recog-cust-certificate"]);
                }

                $log_message_str = "message_id = $message_id, verification-happy-digital input: " . json_encode_unicode($tmp_lrequest) . ", verification-happy-digital result: " . json_encode_unicode(["content" => $content, "tmp_check_mini_step_result" => $tmp_check_mini_step_result, "case_criteria" => $case_criteria, "is_pass_array" => $is_pass_array]);
                if (isset($face_recognition_log_message)) {
                    $log_message_str .= ", " . $face_recognition_log_message;
                }
                LogService::writeActionLog($lrequest, $log_message_str);
            }
        } elseif ($exploded_url[0] == "verify" && $exploded_url[1] == "postpaid") {
            $message_id                 = Str::uuid()->toString();
            $lrequest["tmp_message_id"] = $message_id;
            $content                    = WlsService::postVerifyPostpaidWls($url, $method, $lrequest, $header);

            if ($lrequest->has('face_recog_cust_capture') && $lrequest->has('face-recog-cust-certificate')) {
                $input_without_the_whole_image_but_with_filesize = [
                    "face_recog_cust_capture"     => $lrequest->input("face_recog_cust_capture"),
                    "face-recog-cust-certificate" => $lrequest->input("face-recog-cust-certificate"),
                ];
                if (isset($input_without_the_whole_image_but_with_filesize["face_recog_cust_capture"])) {
                    $data = $input_without_the_whole_image_but_with_filesize["face_recog_cust_capture"];

                    $raw_size                                                                                     = strlen(base64_decode($data));
                    $input_without_the_whole_image_but_with_filesize["face_recog_cust_capture_filesize_raw_size"] = ($raw_size / 1000.0) . "kB";

                    unset($input_without_the_whole_image_but_with_filesize["face_recog_cust_capture"]);
                }
                if (isset($input_without_the_whole_image_but_with_filesize["face-recog-cust-certificate"])) {
                    $data = $input_without_the_whole_image_but_with_filesize["face-recog-cust-certificate"];

                    $raw_size                                                                                         = strlen(base64_decode($data));
                    $input_without_the_whole_image_but_with_filesize["face-recog-cust-certificate_filesize_raw_size"] = ($raw_size / 1000.0) . "kB";

                    unset($input_without_the_whole_image_but_with_filesize["face-recog-cust-certificate"]);
                }
                if ($lrequest->has('face_recog_cust_capture_filename')) {
                    $input_without_the_whole_image_but_with_filesize["face_recog_cust_capture_filename"] = $lrequest->input('face_recog_cust_capture_filename');
                }
                if ($lrequest->has('face-recog-cust-certificate-filename')) {
                    $input_without_the_whole_image_but_with_filesize["face-recog-cust-certificate-filename"] = $lrequest->input('face-recog-cust-certificate-filename');
                }
                $face_recognition_log_message = "face recognition phase filesize detail: " . json_encode_unicode($input_without_the_whole_image_but_with_filesize);
            }

            if (isset($content["tmp_check_mini_step_result"])) {
                $tmp_check_mini_step_result = $content["tmp_check_mini_step_result"];
                $tmp_lrequest               = $lrequest->all();

                if (isset($tmp_lrequest["face_recog_cust_capture"])) {
                    unset($tmp_lrequest["face_recog_cust_capture"]);
                }
                if (isset($tmp_lrequest["face-recog-cust-certificate"])) {
                    unset($tmp_lrequest["face-recog-cust-certificate"]);
                }

                $log_message_str = "message_id = $message_id, verification-postpaid input: " . json_encode_unicode($tmp_lrequest) . ", verification-postpaid result: " . json_encode_unicode(["content" => $content, "tmp_check_mini_step_result" => $tmp_check_mini_step_result]);
                if (isset($face_recognition_log_message)) {
                    $log_message_str .= ", " . $face_recognition_log_message;
                }
                LogService::writeActionLog($lrequest, $log_message_str);
            }
        } elseif ($exploded_url[0] == "verify" && $exploded_url[1] == "family_black_truecard") {
            $message_id                 = Str::uuid()->toString();
            $lrequest["tmp_message_id"] = $message_id;
            $content                    = WlsService::postVerifyFamilyBlackTruecard($url, $method, $lrequest, $header);

            if ($lrequest->has('face_recog_cust_capture') && $lrequest->has('face-recog-cust-certificate')) {
                $input_without_the_whole_image_but_with_filesize = [
                    "face_recog_cust_capture"     => $lrequest->input("face_recog_cust_capture"),
                    "face-recog-cust-certificate" => $lrequest->input("face-recog-cust-certificate"),
                ];
                if (isset($input_without_the_whole_image_but_with_filesize["face_recog_cust_capture"])) {
                    $data = $input_without_the_whole_image_but_with_filesize["face_recog_cust_capture"];

                    $raw_size                                                                                     = strlen(base64_decode($data));
                    $input_without_the_whole_image_but_with_filesize["face_recog_cust_capture_filesize_raw_size"] = ($raw_size / 1000.0) . "kB";

                    unset($input_without_the_whole_image_but_with_filesize["face_recog_cust_capture"]);
                }
                if (isset($input_without_the_whole_image_but_with_filesize["face-recog-cust-certificate"])) {
                    $data = $input_without_the_whole_image_but_with_filesize["face-recog-cust-certificate"];

                    $raw_size                                                                                         = strlen(base64_decode($data));
                    $input_without_the_whole_image_but_with_filesize["face-recog-cust-certificate_filesize_raw_size"] = ($raw_size / 1000.0) . "kB";

                    unset($input_without_the_whole_image_but_with_filesize["face-recog-cust-certificate"]);
                }
                if ($lrequest->has('face_recog_cust_capture_filename')) {
                    $input_without_the_whole_image_but_with_filesize["face_recog_cust_capture_filename"] = $lrequest->input('face_recog_cust_capture_filename');
                }
                if ($lrequest->has('face-recog-cust-certificate-filename')) {
                    $input_without_the_whole_image_but_with_filesize["face-recog-cust-certificate-filename"] = $lrequest->input('face-recog-cust-certificate-filename');
                }
                $face_recognition_log_message = "face recognition phase filesize detail: " . json_encode_unicode($input_without_the_whole_image_but_with_filesize);
            }

            if (isset($content["tmp_check_mini_step_result"])) {
                $tmp_check_mini_step_result = $content["tmp_check_mini_step_result"];

                $tmp_lrequest = $lrequest->all();

                if (isset($tmp_lrequest["face_recog_cust_capture"])) {
                    unset($tmp_lrequest["face_recog_cust_capture"]);
                }
                if (isset($tmp_lrequest["face-recog-cust-certificate"])) {
                    unset($tmp_lrequest["face-recog-cust-certificate"]);
                }

                $log_message_str = "message_id = $message_id, save-temp-product, verification-family_black_truecard input: " . json_encode_unicode($tmp_lrequest) . ", verification-family_black_truecard result: " . json_encode_unicode(["content" => $content, "tmp_check_mini_step_result" => $tmp_check_mini_step_result]);
                if (isset($face_recognition_log_message)) {
                    $log_message_str .= ", " . $face_recognition_log_message;
                }
                LogService::writeActionLog($lrequest, $log_message_str);
            }
        } elseif (
            $exploded_url[0] == "wportal" && $exploded_url[1] == "otp"
            && isset($exploded_url[2]) && $exploded_url[2] == "request"
        ) {
            $content = WlsService::getOtpWls($url, $method, $lrequest, $header);
        } elseif (
            $exploded_url[0] == "truemoveh" && $exploded_url[1] == "bundle-campaigns"
            && isset($exploded_url[2]) && $exploded_url[2] == "max-discount-product"
        ) {
            $content = WlsService::getMaxDiscountProduct($url, $method, $lrequest, $header);
        } elseif (
            $exploded_url[0] == "truemoveh" && $exploded_url[1] == "bundle-campaigns"
            && isset($exploded_url[2]) && $exploded_url[2] == "verify"
        ) {
            $content = WlsService::postBundleCampaignsVerify($url, $method, $lrequest, $header);
        } elseif (
            $exploded_url[0] == "truemoveh" && $exploded_url[1] == "proposition"
            && isset($exploded_url[3]) && $exploded_url[3] == "price-plan"
        ) {
            $content = WlsService::getPropositionPricePlan($url, $method, $lrequest, $header);
        } elseif (
            $exploded_url[0] == "truemoveh" && $exploded_url[1] == "proposition"
            && isset($exploded_url[2]) && $exploded_url[2] == "list"
        ) {
            $content = WlsService::getPropositionList($url, $method, $lrequest, $header);
        } elseif (
            $exploded_url[0] == "truemoveh" && $exploded_url[1] == "proposition"
            && isset($exploded_url[2])
        ) {
            $content = WlsService::getPropositionInfo($url, $method, $lrequest, $header);
        } elseif ($exploded_url[0] == "truemoveh" && $exploded_url[1] == "proposition") {
            $content = WlsService::getPropositionListWithNasCode($url, $method, $lrequest, $header);
        } elseif (
            $exploded_url[0] == "truemoveh" && $exploded_url[1] == "order-payment"
            && isset($exploded_url[2]) && $method == "put"
        ) {
            $content = WlsService::putUpdateOrderPayment($url, $method, $lrequest, $header);
        } elseif (
            $exploded_url[0] == "truemoveh" && $exploded_url[1] == "mobile"
            && isset($exploded_url[2]) && $exploded_url[2] == "prefix"
        ) {
            $content = WlsService::getMobilePrefix($url, $method, $lrequest, $header);
        } elseif (
            $exploded_url[0] == "truemoveh" && $exploded_url[1] == "mobile"
            && isset($exploded_url[2]) && $exploded_url[2] == "search"
        ) {
            $content = WlsService::getMobileSearch($url, $method, $lrequest, $header);
        } elseif (
            $exploded_url[0] == "truemoveh" && $exploded_url[1] == "mobiles"
            && isset($exploded_url[2]) && $exploded_url[2] == "batch"
        ) {
            $content = WlsService::putMobilesBatch($url, $method, $lrequest, $header);
        } elseif (
            $exploded_url[0] == "truemoveh" && $exploded_url[1] == "mobiles"
            && isset($exploded_url[2]) && $method == "put"
        ) {
            $content = WlsService::putHoldNumber($url, $method, $lrequest, $header);
        } elseif ($exploded_url[0] == "truemoveh" && $exploded_url[1] == "mobiles") {
            $content = WlsService::getMobileAvailable($url, $method, $lrequest, $header);
        } elseif ($exploded_url[0] == "truemoveh" && $exploded_url[1] == "horoscopes") {
            $content = WlsService::getHoroscopes($url, $method, $lrequest, $header);
        } elseif (
            $exploded_url[0] == "truemoveh" && $exploded_url[1] == "product-verify"
            && isset($exploded_url[2])
        ) {
            $content = WlsService::getProductVerifySimPostpaid($url, $method, $lrequest, $header);
        } elseif ($exploded_url[0] == "merchant" && $exploded_url[1] == "configs") {
            $content = WlsService::getConfigAllowSelling($url, $method, $lrequest, $header);
        } elseif (
            $exploded_url[0] == "truemoveh" && $exploded_url[1] == "package"
            && isset($exploded_url[2]) && $exploded_url[2] == "search"
        ) {
            $content = WlsService::getSearchPackage($url, $method, $lrequest, $header);
        } elseif (
            $exploded_url[0] == "wportal" && $exploded_url[1] == "content"
            && isset($exploded_url[2]) && $exploded_url[2] == "banner"
        ) {
            $content = WlsService::getPortalContentBanner($url, $method, $lrequest, $header);
        } elseif ($exploded_url[0] == "search" && $exploded_url[1] == "product") {
            try {
                if (!$lrequest->get('bench')) {
                    $tmp_redis_content = Redis::get('store-cache:api:url:' . $url . ':body:' . json_encode($lrequest->all()) . ':content');

                    if (!empty($tmp_redis_content)) {
                        $content = json_decode($tmp_redis_content, true);

                        return ["status_code" => 200, "body" => $content[1]];
                    }
                }

                $lrequest_original_all = $lrequest->all();
                $content               = WlsService::getSearchProductCampaign($url, $method, $lrequest, $header);
                WlsService::setRedisCacheDir('store-cache:api:url:' . $url . ':body:' . json_encode($lrequest_original_all) . ':content', json_encode($content), 60 * 15);
            } catch (\Exception $e) {
                $content = ["status_code" => $e->getCode(), "body" => '{}'];
            }
        } elseif ($exploded_url[0] == "search-v2" && $exploded_url[1] == "filters") {
            // add cache
            $tmp_redis_content = Redis::get('store-cache:api:url:' . $url . ':body:' . json_encode($lrequest->all()) . ':content');

            if (!empty($tmp_redis_content)) {
                $content = json_decode($tmp_redis_content, true);

                return ["status_code" => 200, "body" => $content[1]];
            }

            $lrequest_original_all = $lrequest->all();
            $content               = WlsService::getFilterLvC($url, $method, $lrequest, $header);
            WlsService::setRedisCacheDir('store-cache:api:url:' . $url . ':body:' . json_encode($lrequest_original_all) . ':content', json_encode($content), 60);
        } elseif (
            $exploded_url[0] == "truemoveh" && $exploded_url[1] == "price-plan"
            && isset($exploded_url[2]) && $exploded_url[2] == "search"
        ) {
            $content = WlsService::getPricePlanSearch($url, $method, $lrequest, $header);
        } elseif ($exploded_url[0] == "truemoveh" && $exploded_url[1] == "price-plan") {
            $content = WlsService::getPricePlanList($url, $method, $lrequest, $header);
        } elseif (
            $exploded_url[0] == "json" && $exploded_url[1] == "product"
            && isset($exploded_url[2]) && $exploded_url[2] == "verify"
            && isset($exploded_url[3]) && $exploded_url[3] == "trueid"
        ) {
            $content = $this->getProductIdConfig($lrequest);
        } elseif (
            $exploded_url[0] == "wemall" && $exploded_url[1] == "save-temp-content" &&
            isset($exploded_url[2]) && $exploded_url[2] == "save-face-recognition"
        ) {
            $input_without_the_whole_image_but_with_filesize = $lrequest->all();

            if (isset($input_without_the_whole_image_but_with_filesize["content-base64"])) {
                $data = $input_without_the_whole_image_but_with_filesize["content-base64"];

                $raw_size                                                               = strlen(base64_decode($data));
                $input_without_the_whole_image_but_with_filesize["compressed_filesize"] = ($raw_size / 1000.0) . "kB";

                unset($input_without_the_whole_image_but_with_filesize["content-base64"]);
            }

            //face_recog_cust_capture_filename (front face)
            //face-recog-cust-certificate-filename (id card)

            $content         = WlsService::postSaveTempContent($url, $method, $lrequest, $header);
            $message_id      = Str::uuid()->toString();
            $log_message_str = "message_id = $message_id, save-temp-product, save-face-recognition result to server backend input: " . json_encode_unicode($input_without_the_whole_image_but_with_filesize) . ", save-temp-product, save-face-recognition result to server backend result: " . json_encode_unicode($content);
            LogService::writeActionLog($lrequest, $log_message_str);
        } elseif ($exploded_url[0] == "truemoveh" && $exploded_url[1] == "kyc-data") {
            $content = WlsService::postKycdata($url, $method, $lrequest, $header);
        } elseif ($exploded_url[0] == "true-black-card" && $exploded_url[1] == "checkBCStatus") {
            $content = WlsService::getTrueBlackCardCheckBcStatus($url, $method, $lrequest, $header);
        } elseif ($exploded_url[0] == "portal-v2" && $exploded_url[1] == "promotion-allow-add-cart") {
            $content = WlsService::postPromotionAllowAddCart($url, $method, $lrequest, $header);
        } elseif ($exploded_url[0] == "shop" && $exploded_url[1] == "config") {
            $input     = $lrequest->all();
            $shop_data = array_get($input, 'shop', []);
            if ($shop_data) {
                $shop_data = WlsService::getCampaignIdBySlug($shop_data);
            }

            $content = [
                'status_code' => 200,
                'body'        => $shop_data,
            ];
        } elseif ($exploded_url[0] == "sale" && $exploded_url[1] == "config" && isset($exploded_url[2])) {
            $shop_code   = $exploded_url[2];
            $config_data = SaleSmsService::getTmhSaleConFig($shop_code);
            $content     = [
                'status_code' => 200,
                'body'        => $config_data,
            ];
        } elseif ($exploded_url[0] == "sale" && $exploded_url[1] == "shop" && isset($exploded_url[2])) {
            $alias     = $exploded_url[2];
            $shop_data = SaleSmsService::getTmhSaleShopByAlias($alias);
            $content   = [
                'status_code' => 200,
                'body'        => $shop_data,
            ];
        } elseif ($exploded_url[0] == "sale" && $exploded_url[1] == "config") {
            $config_data = SaleSmsService::getTmhSaleChannelAndSaleAlias();
            $content     = [
                'status_code' => 200,
                'body'        => $config_data,
            ];
        } elseif (
            $exploded_url[0] == "wportal" && $exploded_url[1] == "content"
            && isset($exploded_url[2]) && $exploded_url[2] == "metadata"
        ) {
            $content = WlsService::getPortalContentMetadata($url, $method, $lrequest, $header);
        }

        if (isset($content[0]) && isset($content[1])) {
            $status_code = $content[0];
            $body        = $content[1];
        } elseif (isset($content["status_code"]) && isset($content["body"])) {
            $status_code = $content["status_code"];
            $body        = $content["body"];
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

        if (
            !($lrequest->has('is_feature_test') && $lrequest->input('is_feature_test')) &&
            (isset($result['error_message']) ||
                (gettype($result["body"]) == "string" &&
                    ($result["status_code"] >= 300 ||
                        (isset(json_decode($result["body"], true)["status_code"]) &&
                            json_decode($result["body"], true)["status_code"] >= 300))))
        ) {
            $message_id = Str::uuid()->toString();
            $data       = $lrequest->all();

            $log_message_str = "message_id = $message_id, error log, url = $url, data: " . json_encode_unicode($data) . ", body: " . json_encode_unicode($body) . ", additional_error: ";
            if (isset($result['error_message'])) {
                $log_message_str .= json_encode_unicode($result['error_message']);
            }
            LogService::writeActionLog($lrequest, $log_message_str);
        }

        return $result;
    }

    public function callAPI($url, LaravelRequest $lrequest)
    {
        $result      = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);
        $status_code = $result['status_code'];
        $body        = $result['body'];

        if ($status_code == 200) {
            return response($body)->header('Content-Type', 'application/json');
        } elseif (gettype($body) == "array" && isset($body["message"]["en"]) && isset($body["message"]["th"])) {
            return response()->json($body, $status_code);
        } elseif (gettype($body) == "string") {
            return response()->json(['message' => ["en" => $body, "th" => $body]], $status_code);
        } else {
            return response()->json(['message' => ["en" => "system error", "th" => "เกิดข้อผิดพลาดภายในระบบ"]], $status_code);
        }
    }

    public static function getProductIdConfigJsonFile()
    {
        $path_name = env("PRODUCT_ID_CONFIG_DIRECTORY", false);
        if (!$path_name) {
            return [500, ['message' => ["en" => "system error", "th" => "เกิดข้อผิดพลาดภายในระบบ"]]];
        }
        $tmp_content = Redis::get("store-config:json:product_id_config");
        if (!$tmp_content) {
            $tmp_content = file_get_contents(storage_path($path_name));
            if (!$tmp_content) {
                return [500, ['message' => ["en" => "system error 2", "th" => "เกิดข้อผิดพลาดภายในระบบ 2"]]];
            }
        }
        $json_decode_content = json_decode($tmp_content, true);

        return $json_decode_content;
    }

    public static function getProductIdConfig($lrequest)
    {
        $update_cache = $lrequest->get('update_cache');
        $content      = Redis::get('store-config:cache_json_product_verify_trueid');
        if (!empty($content) && $update_cache !== 1) {
            $content = json_decode($content, true);

            return [200, $content[1]];
        }

        $json_decode_content = App('App\Http\Controllers\APIController')->getProductIdConfigJsonFile();
        if (isset($json_decode_content[0]) && $json_decode_content[0] == 500) {
            return $json_decode_content;
        }

        $result = $json_decode_content;

        // edit type postpaid
        $method   = "get";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));
        $request_parameter             = [];
        $request_parameter["sim_type"] = "postpaid";
        $url                           = "truemoveh/package/search";
        $lrequest->replace($request_parameter);

        $header                 = [];
        $content_search_package = WlsService::getSearchPackage($url, $method, $lrequest, $header);
        if (isset(json_decode($content_search_package[1], true)["data"]["record"])) {
            $package_list = json_decode($content_search_package[1], true)["data"]["record"];
        }

        $postpaid_product_id_list = [];

        $happy_digital_id_list = [];
        foreach ($json_decode_content["verify"] as $j) {
            $happy_digital_id_list[$j["id"]] = true;
        }

        if (isset($package_list)) {
            foreach ($package_list as $package_list_item) {
                if (!isset($happy_digital_id_list["L" . $package_list_item["product_id"]])) {
                    // add this product to postpaid_product_id_list
                    $postpaid_product_id_list[] = "L" . $package_list_item["product_id"];
                }
            }
        } else {
            $message_body                  = ["message" => []];
            $message_body["message"]["en"] = "server connection unavailable, please try again";
            $message_body["message"]["th"] = "ไม่สามารถติดต่อกับเว็บไซต์ได้ กรุณาลองทำรายการใหม่อีกครั้ง";

            return [503, $message_body];
        }

        $result["postpaid"] = $postpaid_product_id_list;

        foreach ($json_decode_content["campaigns"] as $each_campaign_from_json) {
            $url          = "search/product";
            $method       = "get";
            $tmp_lrequest = new \Illuminate\Http\Request();
            $tmp_lrequest->setMethod(strtoupper($method));

            $request_parameter                    = [];
            $request_parameter["campaign_id"]     = $each_campaign_from_json["id"];
            $request_parameter["bypass_discount"] = true;
            $request_parameter["limit"]           = "200";
            $tmp_lrequest->replace($request_parameter);

            $content_search_product_campaign = App('App\Http\Controllers\APIController')->callAPIContent($url, $tmp_lrequest);

            $tmp_search_product_campaign = json_decode($content_search_product_campaign["body"], true);

            if (!isset($tmp_search_product_campaign["data"]["record"])) {
                continue;
            }
            foreach ($tmp_search_product_campaign["data"]["record"] as $each_campaign_inside_search_product_campaign) {
                $json_name = $each_campaign_from_json["json_name"];

                $tmp_body_to_be_input_to_json = ["id" => $each_campaign_inside_search_product_campaign["id"]];
                if (isset($each_campaign_from_json["type_for_verify"])) {
                    $tmp_body_to_be_input_to_json["type_for_verify"] = $each_campaign_from_json["type_for_verify"];
                }
                $tmp_body_to_be_input_to_json["type"] = $json_name;

                if (isset($each_campaign_from_json["campaign_code"])) {
                    $tmp_body_to_be_input_to_json["campaign_code"] = $each_campaign_from_json["campaign_code"];
                }
                if (isset($each_campaign_from_json["campaign_code_trueonline"])) {
                    $tmp_body_to_be_input_to_json["campaign_code_trueonline"] = $each_campaign_from_json["campaign_code_trueonline"];
                }
                if (isset($each_campaign_from_json["campaign_code_truemove"])) {
                    $tmp_body_to_be_input_to_json["campaign_code_truemove"] = $each_campaign_from_json["campaign_code_truemove"];
                }

                $tmp_body_to_be_input_to_json["sku"] = "1";

                if (isset($result[$json_name])) {
                    $result[$json_name][] = $tmp_body_to_be_input_to_json;
                } else {
                    $result[$json_name] = [$tmp_body_to_be_input_to_json];
                }
            }
        }

        $status_code          = 200;
        $to_be_return_content = [$status_code, $result];
        Redis::set('store-config:cache_json_product_verify_trueid', json_encode($to_be_return_content));
        Redis::set("api:truemoveh:discount:product-id-config", json_encode($to_be_return_content));

        return $to_be_return_content;
    }

    public static function fetchTrueidApi($lrequest)
    {
        if ($lrequest->headers->has('Authorization')) {
            $tmp_authorization = explode(' ', $lrequest->header('Authorization'));
        } else {
            $tmp_authorization = [];
        }

        if ($lrequest->has('type') && $lrequest->input('type') == "refresh_token" && count($tmp_authorization) >= 2) {
            $request_parameter                  = [];
            $request_parameter['refresh_token'] = $tmp_authorization[1];
            $lrequest->replace($request_parameter);
            $result                = [];
            $result["status_code"] = 200;
            $result["body"]        = json_encode(["refresh_token" => $lrequest->input('refresh_token')]);

            $url    = "oauth2/token";
            $result = (App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest));

            if ($result['status_code'] == 400) {
                $status_code = 400;
                $body        = ["message" => ["en" => "please renew your code or contact administrator", "th" => "กรุณารับ code ใหม่อีกครั้ง หรือติดต่อผู้ดูแลระบบ"]];

                return ["status_code" => $status_code, "body" => $body];
            }
        } elseif (count($tmp_authorization) >= 2) {
            $request_parameter                 = [];
            $request_parameter['access_token'] = $tmp_authorization[1];
            $lrequest->replace($request_parameter);
            $result                = [];
            $result["status_code"] = 200;
            $result["body"]        = json_encode(["access_token" => $lrequest->input('access_token')]);
        } elseif ($lrequest->has('code')) {
            $lrequest2 = new \Illuminate\Http\Request();
            $lrequest2->setMethod('POST');
            $request_parameter         = [];
            $request_parameter['code'] = $lrequest->input('code');

            $header = [];

            $lrequest2->replace($request_parameter);
            $url    = "oauth2/token";
            $result = (App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest2));

            if ($result['status_code'] == 400) {
                $status_code = 400;
                $body        = ["message" => ["en" => "please renew your code or contact administrator", "th" => "กรุณารับ code ใหม่อีกครั้ง หรือติดต่อผู้ดูแลระบบ"]];

                return ["status_code" => $status_code, "body" => $body];
            }
        } else {
            $status_code = 400;
            $body        = ["message" => ["en" => "neither access token or no code found", "th" => "ไม่พบทั้ง access_token หรือ code"]];

            return ["status_code" => $status_code, "body" => $body];
        }

        return $result;
    }

    public static function decodeFromTrueidApi($result_from_trueid_api)
    {
        $jwk = [
            "kty" => env('JWK_KTY', false),
            "kid" => env('JWK_KID', false),
            "use" => env('JWK_USE', false),
            "alg" => "RS256",
            "e"   => env('JWK_E', false),
            "n"   => env('JWK_N', false),
        ];
        if (!$jwk['kty'] || !$jwk['kid'] || !$jwk['use'] || !$jwk['e'] || !$jwk['n']) {
            $status_code   = 500;
            $body          = 'jwk is not set properly or access_token is not correct';
            $result_return = ['is_get_token' => false, 'message' => ["en" => $body, "th" => "ค่า jwk หรือ access_token ไม่ถูกต้อง"]];
            $body          = $result_return;
        }

        $is_pass_decode = false;
        JWT::$leeway    = 5;
        $attempt        = 0;

        $exception_reason = "";

        do {
            try {
                $jwkConverter   = new JWKConverter();
                $convertedJwk   = $jwkConverter->toPEM($jwk);
                $uid            = JWT::decode($result_from_trueid_api["access_token"], $convertedJwk, ['RS256']);
                $status_code    = 200;
                $body           = ["uid" => $uid];
                $is_pass_decode = true;
                $retry          = false;
            } catch (\Firebase\JWT\BeforeValidException $e) {
                $attempt++;
                $retry            = $attempt < 2;
                $exception_reason = "BeforeValidException";
            } catch (\Firebase\JWT\ExpiredException $e) {
                $retry            = false;
                $is_pass_decode   = false;
                $exception_reason = "ExpiredException";
            } catch (\Exception $e) {
                $attempt++;
                $retry            = $attempt < 2;
                $exception_reason = get_class($e);
            }
        } while ($retry);

        if (!$is_pass_decode) {
            $status_code   = 500;
            $body          = 'jwk or access_token is not set properly when used';
            $result_return = ['is_get_token' => false, 'message' => ["en" => $body, "th" => "ค่า jwk หรือ access_token ไม่ถูกต้องขณะถูกใช้งาน"], "exception_reason" => $exception_reason];
            $body          = $result_return;
        }

        return ["status_code" => $status_code, "body" => $body];
    }

    public function postLogin(LaravelRequest $lrequest)
    {
        $result = App('App\Http\Controllers\APIController')->fetchTrueidApi($lrequest);

        if ($result['status_code'] != 0 && $result['status_code'] != 200) {
            return $result;
        }

        $result_from_trueid_api = json_decode($result["body"], true);
        $result                 = App('App\Http\Controllers\APIController')->decodeFromTrueidApi($result_from_trueid_api);

        if ($result['status_code'] != 0 && $result['status_code'] != 200) {
            if (
                !($lrequest->has('is_feature_test') && $lrequest->input('is_feature_test')) &&
                (isset($result["status_code"]) &&
                    $result["status_code"] >= 300)
            ) {
                $message_id = Str::uuid()->toString();
                $data       = $lrequest->all();

                $log_message_str = "message_id = $message_id, error log login, data: " . json_encode_unicode($data) . ", body: " . json_encode_unicode($result["body"]);
                LogService::writeActionLog($lrequest, $log_message_str);
            }

            return $result;
        }

        $uid   = $result["body"]["uid"];
        $array = get_object_vars($uid);
        $url   = "account-app/login";
        // get input from decoded jwt access token
        $access_token = $result_from_trueid_api["access_token"];
        $user_id      = array_get($array, 'sub', array_get(get_object_vars(array_get($array, "profiles", json_decode(json_encode((object) [])))), 'uid'));

        $lrequest3 = new \Illuminate\Http\Request();
        $lrequest3->setMethod('POST');
        $request_parameter                 = [];
        $request_parameter['access_token'] = $access_token;
        $request_parameter['username']     = $user_id;

        $lrequest3->replace($request_parameter);
        $result = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest3);

        $body = json_decode($result["body"], true);

        if (isset($body["status_code"]) && $body["status_code"] == "99999") {
            $body_2            = [];
            $body_2["message"] = ["en" => "unable to connect with trueid login", "th" => "ไม่สามารถเชื่อมต่อกับ trueid login ได้"];

            return response()->json($body_2, 500);
        }

        if (isset($body["data"]) && gettype($body["data"]) == "array") {
            $body["data"]["trueid_access_token"] = $result_from_trueid_api["access_token"];
        }

        $tmp_refresh_token = \Arr::get($result_from_trueid_api, "refresh_token");
        if (gettype(\Arr::get($body, "data")) == "array" && !empty($tmp_refresh_token)) {
            \Arr::set($body, "data.trueid_refresh_token", $tmp_refresh_token);
        } elseif (!empty($tmp_refresh_token)) {
            \Arr::set($body, "debug.trueid_refresh_token", $tmp_refresh_token);
        }

        if (gettype(\Arr::get($body, "data")) == "array") {
            \Arr::set($body, "data.user_id", $user_id);
        } else {
            \Arr::set($body, "debug.user_id", $user_id);
        }
        if ($result['status_code'] == 500) {
            return response()->json($body, 500);
        } elseif ($result['status_code'] == 0 || $result['status_code'] == 0) {
            return response()->json($body, 200);
        } else {
            return response()->json($body, $result['status_code']);
        }
    }

    public function getProfileContent(LaravelRequest $lrequest_input)
    {
        $result      = [];
        $status_code = 200;

        $url      = 'account-app/profile';
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod('GET');
        $request_parameter = [];

        if (!$lrequest_input->headers->has('Authorization')) {
            $status_code = 500;
            $body        = ["message" => ["en" => "authorization token not set properly", "th" => "ตั้งค่า authorization ไม่ถูกต้อง"]];

            return response()->json($body, $status_code);
        }
        $tmp_authorization = explode(' ', $lrequest_input->header('Authorization'));
        if (count($tmp_authorization) < 2) {
            $status_code = 500;
            $body        = ["message" => ["en" => "authorization not set properly", "th" => "ตั้งค่า authorization ไม่ถูก"]];

            return response()->json($body, $status_code);
        }
        $request_parameter['access_token'] = $tmp_authorization[1];
        $request_parameter['client_id']    = env('WEMALL_CLIENT_ID', false);
        if (!$request_parameter['client_id']) {
            $status_code = 500;
            $body        = 'wemall_client_id is not set';

            return ['is_get_token' => false, 'message' => $body];
        }

        $lrequest->replace($request_parameter);
        $result = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);

        return $result;
    }

    public function getProfile(LaravelRequest $lrequest)
    {
        $result = App('App\Http\Controllers\APIController')->getProfileContent($lrequest);

        if (isset($result["status_code"]) && $result["status_code"] == "200") {
            $status_code = 200;
            $body        = json_decode($result["body"], true);

            return response()->json($body, $status_code);
        } elseif (isset($result["message"])) {
            $status_code = 500;
            $body        = ["message" => ["en" => $result["message"], "th" => $result["message"]]];

            return response()->json($body, $status_code);
        } else {
            $status_code = 500;
            $body        = ["message" => ["en" => "server connection unavailable, please try again later", "th" => "server connection unavailable, please try again later"]];

            return response()->json($body, $status_code);
        }
    }

    public function postSuccess(LaravelRequest $lrequest)
    {
        $data = $lrequest->all();

        if (!$lrequest->has('secure_key')) {
            return response()->json(["message" => ["en" => "secure_key (order id) not found in input", "th" => "ไม่พบ secure_key (order id) ในข้อมูลนำเข้า"]], 400);
        }

        $secure_key = $lrequest->input('secure_key');

        if (array_get($data, 'payment_method', '') === 'STOREOFFLINE') {
            $redirect_url = $this->goSuccessPage($data);
            if (array_get($data, 'offline_skip')) {
                $response = response(['status_code' => 200, 'status_txt' => "Success", "data" => ["redirect_url" => $redirect_url]], 200);
            } else {
                $response = redirect()->away($redirect_url);
            }

            return $response;
        }

        //find email and product data from secure key
        $parameter = ["secure_key" => $data['secure_key'], "show_all" => true, "is_success_check" => true, "wepayment_status" => true];
        $result    = App('App\Http\Controllers\OrderDetailController')->showTrackingContent($parameter);

        if (!($lrequest->has('is_feature_test') && $lrequest->input('is_feature_test'))) {
            $message_id      = Str::uuid()->toString();
            $log_message_str = "message_id = $message_id, success page data: " . json_encode_unicode($data) . ", success page result: " . json_encode_unicode($result);
            LogService::writeActionLog($lrequest, $log_message_str);
        }

        $default_error_status_code = 'invalid_payment';

        if (!array_key_exists("body", $result)) {
            // Fobbidden case (in prod): return response()->json(["message" => $result->original["message"]], 404);
            return redirect()->away('/payment?error=' . $default_error_status_code);
        }
        if (!isset($result["body"]["data"][0])) {
            return response()->json(["message" => "secure_key not found from api"], 404);
        }
        $result_from_tracking_api = $result["body"]["data"][0];
        $data                     = $this->wrapPayment($result_from_tracking_api, $data);
        $payment_method           = strtoupper(array_get($result_from_tracking_api, 'payment_method'));

        if (array_get($data, 'payment_cancel') === true) {
            $payment_failure_code    = array_get($result_from_tracking_api, 'order_omise.failure_code');
            $payment_failure_message = array_get($result_from_tracking_api, 'order_omise.failure_message');
            $card_type               = array_get($result_from_tracking_api, 'order_omise.card.financing');
            $map_failure_code        = '';

            if ($payment_failure_code === 'insufficient_fund') {
                $map_failure_code = 'insufficient_fund_' . getShortPaymentMethod($payment_method);

                if (!empty($card_type)) {
                    $map_failure_code = 'insufficient_fund_' . $card_type;
                }
            } elseif ($payment_failure_code === 'payment_rejected') {
                if ($payment_failure_message === 'payment rejected') {
                    if (!empty($card_type)) {
                        $map_failure_code = 'payment_rejected_' . $card_type;
                    }
                } elseif ($payment_failure_message === '3d secure verification failed') {
                    $map_failure_code = '3d_secure_verification_failed';
                } elseif ($payment_failure_message === '3d secure is requested but card is not enrolled') {
                    $map_failure_code = 'card_not_enrolled_' . $card_type;
                }
            }

            /*
            * P2C2P Failure
            */
            if (in_array(array_get($result_from_tracking_api, 'payment_method'), ['P2C2PINSTM', 'P2C2PCCW'])
                && in_array($payment_failure_code, ['4001', '4005', '4081', '4051'])) {

                $map_failure_code = strtolower(str_replace(' ', '_', $payment_failure_message));

                if ($payment_failure_code == '4051') {
                    $map_failure_code .= '_'.$card_type;
                }
            }

            if ($map_failure_code === '') {
                $map_failure_code = $default_error_status_code;
            }

            return redirect()->away('/payment?error=' . $map_failure_code);
        }

        if(in_array(array_get($result_from_tracking_api, 'payment_method'), ['P2C2PPAYNEXT', 'P2C2PEW']) && $result_from_tracking_api['order_statuses_code'] === '002') {
            $payment_failure_code       = array_get($result_from_tracking_api, 'order_omise.failure_code', '');
            $payment_failure_message    = array_get($result_from_tracking_api, 'order_omise.failure_message', '');
            $map_failure_code           = '';

            if(array_get($result_from_tracking_api, 'payment_method') === 'P2C2PPAYNEXT') {
                $map_failure_code = 'invalid_paynext_payment';
                return redirect()->away('/payment/error?error=' . $map_failure_code);
            }

            if(in_array($payment_failure_code, ['0001', '0003', '0999', '2001', '2002', '2003', '4013', '4014', '4054'])) {
                $map_failure_code = trim(strtolower(str_replace(' ', '_', $payment_failure_message)),'.');
            }

            if ($map_failure_code === '') {
                $map_failure_code = $default_error_status_code;
            }
            return redirect()->away('/payment?error=' . $map_failure_code);

        }

        $order_statuses_code = \Arr::get($data, 'order_statuses_code', '-1');
        if (intval($order_statuses_code) !== 100) {
            return redirect()->away('/payment?error=' . strval($order_statuses_code));
        }

        // send data to Weomni
        $unix_timestamp_placeorder = time();
        $weomni_clm_save_data      = Redis::get('weomni_clm_save_data:' . $secure_key);
        LogService::writeActionLog($lrequest, "redis_data weomni_clm_save_data:" . $secure_key . " = " . json_encode_unicode($weomni_clm_save_data));
        if (!empty($weomni_clm_save_data)) {
            $weomni_clm_save_data = json_decode($weomni_clm_save_data, true);

            $tmp_lrequest = new \Illuminate\Http\Request();
            $tmp_lrequest->setMethod(strtoupper('POST'));
            $tmp_lrequest->replace($weomni_clm_save_data);

            $clm_request = WeOmniService::postClmCampaign($tmp_lrequest);

            $log_message_str = "unix_time = $unix_timestamp_placeorder, clm send_data: " . json_encode_unicode($weomni_clm_save_data) . ', clm result: ' . json_encode_unicode($clm_request);
            LogService::writeActionLog($lrequest, $log_message_str);

            if (array_get($clm_request, '0') === 201) {
                Redis::del('weomni_clm_save_data:' . $secure_key);
            }
        }

        // start of add fix tmh-268-2 add reference_product_id to redis for send mnp email
        $redis_key_name                     = 'truestore:mnp_reference_product_id_save_data:' . $secure_key . ':data';
        $mnp_reference_product_id_save_data = Redis::get($redis_key_name);
        LogService::writeActionLog($lrequest, "redis_data $redis_key_name:" . $secure_key . " = " . json_encode_unicode($mnp_reference_product_id_save_data));
        if (!empty($mnp_reference_product_id_save_data)) {
            $json_decode_mnp_reference_product_id_save_data = json_decode($mnp_reference_product_id_save_data, true);
            $email_mnp_reference_product_id_save_data       = $json_decode_mnp_reference_product_id_save_data["data"]["reference_product_id"];
        }
        // start of end fix tmh-268-2 add reference_product_id to redis for send mnp email

        // start of add fix tmh-274 typhoon placeorder ent pack in postSuccess
        $redis_key_name    = 'truestore:typhoon_save_data:ent_pack_placeorder:' . $secure_key . ':data';
        $typhoon_save_data = Redis::get($redis_key_name);
        LogService::writeActionLog($lrequest, "redis_data $redis_key_name:" . $secure_key . " = " . json_encode_unicode($typhoon_save_data));
        if (!empty($typhoon_save_data)) {
            $json_decode_typhoon_save_data = json_decode($typhoon_save_data, true);

            $tmp_array_data = [];

            $tmp_array_data["cart_hash"] = $json_decode_typhoon_save_data["data"]["cart_hash"];
            $cart_hash                   = $tmp_array_data["cart_hash"];

            // start of get matcode from redis
            $get_redis_ent_pack_from_cart             = Redis::get('truestore:ent_pack_cart:' . $cart_hash . ':content');
            $json_decode_get_redis_ent_pack_from_cart = json_decode($get_redis_ent_pack_from_cart, true);

            Redis::set('elsalog:typhoon_type:' . $secure_key, $get_redis_ent_pack_from_cart);

            if (
                isset($json_decode_get_redis_ent_pack_from_cart) &&
                is_array($json_decode_get_redis_ent_pack_from_cart) &&
                !empty($json_decode_get_redis_ent_pack_from_cart['matcode'])
            ) {
                $tmp_array_data["mat_code"] = $json_decode_get_redis_ent_pack_from_cart["matcode"];
            }
            $tmp_lrequest = new \Illuminate\Http\Request();
            $tmp_lrequest->setMethod(strtoupper('POST'));
            $tmp_lrequest->replace($tmp_array_data);
            // end of get matcode from redis

            $content_get_typhoon_ent_pack_placeorder = App('App\Http\Controllers\TyphoonController')->postEntPackPlaceorder($tmp_lrequest);

            // mark use sim
            if (!empty($json_decode_get_redis_ent_pack_from_cart)) {
                $product_id   = array_get($json_decode_get_redis_ent_pack_from_cart, 'entertainment_package_data.main_product_id');
                $thai_id      = \Arr::get($json_decode_get_redis_ent_pack_from_cart, 'thai_id');
                $voucher_code = \Arr::get($json_decode_get_redis_ent_pack_from_cart, 'voucher_code');

                $verification_required = TyphoonService::getVerificationRequiredRedis($product_id);
                if ($verification_required) {
                    $pickup = array_get($json_decode_typhoon_save_data, 'data.pickup', false);
                    $body   = [
                        'msisdn_otp'    => array_get($json_decode_get_redis_ent_pack_from_cart, 'phone_no'),
                        'type'          => array_get($json_decode_get_redis_ent_pack_from_cart, 'cart_type'),
                        'group_type'    => array_get($json_decode_get_redis_ent_pack_from_cart, 'type'),
                        'sku'           => array_get($json_decode_get_redis_ent_pack_from_cart, 'entertainment_package_data.main_inventory_id'),
                        'product_id'    => $product_id,
                        'order_id'      => $secure_key,
                        'thai_id'       => $thai_id,
                        'activated_sim' => '',
                        'action'        => 'request',
                        'channel'       => empty($pickup) ? '2.1.1' : '2.1.2',
                    ];

                    SimActivationService::markUseSim($body);
                }

                // markuse voucher
                if (!empty($thai_id) && !empty($voucher_code)) {
                    TyphoonService::markuseVoucher($voucher_code, $thai_id, $secure_key);
                }
                // end markuse voucher
            }
            // end move mark use sim

            Redis::del([$redis_key_name, 'truestore:ent_pack_cart:' . $cart_hash . ':content']);
        }
        // end of add fix tmh-274 typhoon placeorder ent pack in postSuccess

        // start of add fix dp-308 weomni_campaign_save_data:external-campaign-order redis
        $redis_key_name            = 'weomni_campaign_save_data:external-campaign-order:' . $secure_key . ':data';
        $weomni_campaign_save_data = Redis::get($redis_key_name);
        LogService::writeActionLog($lrequest, "redis_data $redis_key_name:" . $secure_key . " = " . json_encode_unicode($weomni_campaign_save_data));
        if (!empty($weomni_campaign_save_data)) {
            $weomni_campaign_save_data = json_decode($weomni_campaign_save_data, true);

            $tmp_lrequest = new \Illuminate\Http\Request();
            $tmp_lrequest->setMethod(strtoupper('POST'));
            $tmp_lrequest->replace($weomni_campaign_save_data);

            $weomni_campaign_request = WeOmniService::postExternalCampaign($tmp_lrequest);

            $log_message_str = "unix_time = $unix_timestamp_placeorder, weomni campaign send_data: " . json_encode_unicode($weomni_campaign_save_data) . ', campaign result: ' . json_encode_unicode($weomni_campaign_request);
            LogService::writeActionLog($lrequest, $log_message_str);

            if (array_get($weomni_campaign_request, '0') === 201) {
                Redis::del($redis_key_name);
            }
        }
        // end of add fix dp-308 weomni_campaign_save_data:external-campaign-order redis

        // start of fix TEC-19 add discount coupon
        $redis_key_name   = 'truestore:stamp_coupon_used:' . $secure_key . ':data';
        $coupon_save_data = Redis::get($redis_key_name);
        LogService::writeActionLog($lrequest, "redis_data $redis_key_name:" . $secure_key . " = " . json_encode_unicode($coupon_save_data));
        if (!empty($coupon_save_data)) {
            $coupon_save_data = json_decode($coupon_save_data, true);

            $tmp_lrequest = new \Illuminate\Http\Request();
            $tmp_lrequest->setMethod(strtoupper('POST'));
            $tmp_lrequest->replace($coupon_save_data);

            $stamp_coupon_request = CouponService::postCouponStamp($tmp_lrequest);

            $log_message_str = "unix_time = $unix_timestamp_placeorder, stamp_coupon send_data: " . json_encode_unicode($coupon_save_data) . ', stamp_coupon result: ' . json_encode_unicode($stamp_coupon_request);
            LogService::writeActionLog($lrequest, $log_message_str);

            if (array_get($stamp_coupon_request, '0') === 200) {
                Redis::del($redis_key_name);
            }
        }
        // end of fix TEC-19 add discount coupon

        ElsaService::createElsaLoggerOrderFormat($result_from_tracking_api);

        // start of set success page url for redirection
        $item_code_for_tracking = "";
        if (count($result_from_tracking_api["order_product"]) == 1) {
            $item_code_for_tracking = $result_from_tracking_api["order_product"][0]["sku"];
        }

        $success_code_from_secure_key_encrypted = encrypt($result_from_tracking_api['secure_key']);

        $parameter_to_be_appended = "";
        if (!empty($item_code_for_tracking)) {
            $parameter_to_be_appended .= "item={$item_code_for_tracking}&";
        }
        $parameter_to_be_appended .= "success_code={$success_code_from_secure_key_encrypted}";

        $success_url = "/success?{$parameter_to_be_appended}";
        // end of set success page url for redirection

        $paymentMethod = 'บัตรเครดิต/เดบิต';

        if (in_array($payment_method, ['EW', 'OMISEEW', 'WEOMNIEW'])) {
            $paymentMethod = 'True Wallet';
        } elseif (in_array($payment_method, ['INSTM', 'WEOMNIINSTM', 'OMISEINSTM', 'P2C2PINSTM'])) {
            $paymentMethod = 'ผ่อนชำระ';
        } elseif ($payment_method == 'COD') {
            $paymentMethod = 'ชำระเงินปลายทาง';
        } elseif ($payment_method == 'OMISEPROMPTPAY') {
            $paymentMethod = 'พร้อมเพย์';
        } elseif ($payment_method == 'NOPAYMENT') {
            $paymentMethod = 'ไม่มียอดต้องชำระ';
        }

        // submit pre2post
        $pre2post_redis = Redis::get('pre2post_data:' . $result_from_tracking_api['secure_key']);
        LogService::writeActionLog($lrequest, 'pre2post_data:success:' . $result_from_tracking_api['secure_key'] . ': ' . $pre2post_redis);
        if (!empty($pre2post_redis)) {
            $pre2post_data  = json_decode($pre2post_redis, true);
            $correlation_id = array_get($pre2post_data, 'correlation_id');

            // generate and upload pre2post image
            $form_data = [
                'correlation_id' => $correlation_id,
                'fullname'       => array_get($pre2post_data, 'first_name') . ' ' . array_get($pre2post_data, 'last_name'),
                'thai_id'        => array_get($pre2post_data, 'id_number'),
                'mobile_number'  => array_get($pre2post_data, 'mobile_number'),
                'order_id'       => $result_from_tracking_api['secure_key'],
                'transfer_date'  => date('d/m/Y'),
            ];
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
            $submit_data             = [
                'secure_key'              => $result_from_tracking_api['secure_key'],
                'type'                    => 'pre2post',
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
                'ocr_consent_info'        => array_get($pre2post_data, 'ocr_consent_info', []),
            ];
            $resp = PreToPostService::submit($correlation_id, $submit_data);
            LogService::writeActionLog($lrequest, 'submit pre2post response: ' . json_encode_unicode($resp));

            // remove pre2post redis after submit
            $cart_hash = array_get($pre2post_data, 'cart_hash');
            Redis::del(['pre2post_data:' . $cart_hash, 'pre2post_data:' . $result_from_tracking_api['secure_key']]);

            // save redis for success page
            $new_redis = json_encode([
                'mobile_number' => array_get($pre2post_data, 'mobile_number'),
                'id_number'     => array_get($pre2post_data, 'id_number'),
            ]);
            Redis::set('pre2post_data:' . $result_from_tracking_api['secure_key'], $new_redis, 'EX', 24 * 60 * 60);
        }
        // end submit pre2post

        if (env("IS_SMTP_ALLOWED", true)) {
            $email_info = [
                'subject' => "Payment Successful: หมายเลขการสั่งจอง " . $result_from_tracking_api['secure_key'],
                'to'      => $result_from_tracking_api['email'], //order email
                'data'    => [
                    'firstname'                  => $result_from_tracking_api['order_address']['delivery_firstname'],
                    'lastname'                   => $result_from_tracking_api['order_address']['delivery_lastname'],
                    'secure_key'                 => $result_from_tracking_api['secure_key'],
                    'payment_ref1'               => $result_from_tracking_api['payment_ref1'],
                    'payment_ref2'               => $result_from_tracking_api['payment_ref2'],
                    'total'                      => $result_from_tracking_api['total'],
                    'payment_method'             => $paymentMethod,
                    'payment_buyer_expired_time' => $result_from_tracking_api['payment_buyer_expired_time'],
                    'products'                   => $result_from_tracking_api['order_product'],
                    'success_url'                => env('APP_URL') . $success_url,
                    'order_address'              => $result_from_tracking_api['order_address'],
                    'shipping_price'             => $result_from_tracking_api['shipping_price'],
                ],
            ];

            if (isset($result_from_tracking_api['order_address']['delivery_company'])) {
                $email_info['delivery_company'] = $result_from_tracking_api['order_address']['delivery_company'];
            }

            if (isset($result_from_tracking_api['order_address']['billing_company'])) {
                $email_info['billing_company'] = $result_from_tracking_api['order_address']['billing_company'];
            }

            // start of TEC-419-420 add COD payment method
            if ($payment_method == 'COD') {
                $email_info['subject'] = "ยืนยันคำสั่งซื้อหมายเลข " . $result_from_tracking_api['secure_key'];
            }
            // end of TEC-419-420 add COD payment method

            if (isset($result_from_tracking_api["sim_meta"][0]["appform_img"])) {
                $image_response = AwsService::getS3Image($result_from_tracking_api["sim_meta"][0]["appform_img"]);
                if ($image_response[0] === 200) {
                    $image_result      = $image_response[1]['image'];
                    $tmp_image_id      = Str::uuid()->toString();
                    $file_name         = "image_appform_" . $tmp_image_id;
                    $file_storage_path = storage_path('app/jpg/');
                    file_put_contents($file_storage_path . $file_name . '.jpg', $image_result);
                    $email_info['attach']         = [];
                    $email_info['attach']['path'] = $file_storage_path . $file_name . '.jpg';
                    $email_info['attach']['name'] = 'ใบยืนยันคำขอโอนย้ายเครือข่าย' . '.jpg';
                    $email_info['attach']['mime'] = mime_content_type($file_storage_path . $file_name . '.jpg');
                }
            }

            if (!empty($pre2post_image)) {
                $image_result      = array_get($pre2post_image, 'base64');
                $tmp_image_id      = Str::uuid()->toString();
                $file_name         = "move_tous_appform_" . $tmp_image_id;
                $file_storage_path = storage_path('app/jpg/');
                file_put_contents($file_storage_path . $file_name . '.jpg', base64_decode($image_result));
                $email_info['attach']         = [];
                $email_info['attach']['path'] = $file_storage_path . $file_name . '.jpg';
                $email_info['attach']['name'] = 'ใบยืนยันคำขอเปลี่ยนแปลงบริการ.jpg';
                $email_info['attach']['mime'] = mime_content_type($file_storage_path . $file_name . '.jpg');
            }

            // start of tec-1151 vhora pdf email
            $json_decode_sim_meta = array_get($result_from_tracking_api, 'order_product.0.sim_meta', []);

            if (gettype($json_decode_sim_meta) == "string") {
                $json_decode_sim_meta = json_decode(array_get($result_from_tracking_api, 'order_product.0.sim_meta'), true);
            }

            $is_vhora = false;
            if (array_get($json_decode_sim_meta, '0.campaign_type') == 'vhora') {
                $is_vhora = true;
            }
            $ctoken = Redis::get("truestore:ctoken:orderid:$secure_key:value");
            if ($is_vhora && !empty($ctoken)) {

                $fixed_parameter_list           = [];
                $fixed_parameter_list["msisdn"] = array_get($json_decode_sim_meta, '0.number');
                $fixed_parameter_list["ctoken"] = $ctoken;

                try {
                    $vhora_result                                    = VHoraService::getFortuneFuntong($fixed_parameter_list["msisdn"], $fixed_parameter_list["ctoken"]);
                    $result_from_tracking_api["fortune_funtong"]     = $vhora_result;
                    $image_result                                    = Redis::get('truestore:vhora_image:orderid:' . $secure_key . ':value');
                    $result_from_tracking_api["file_name_2_content"] = $image_result;
                    $result_from_tracking_api["signature"]           = \file_get_contents(storage_path('app/') . "dr_luck_sign_encode.txt");

                    if (!empty(array_get($result_from_tracking_api, "sim_meta.0.berfuntong.group"))) {
                        $v = [
                            "group"    => array_get($result_from_tracking_api, "sim_meta.0.berfuntong.group"),
                            "subgroup" => array_get($result_from_tracking_api, "sim_meta.0.berfuntong.subgroup"),
                            "grade"    => array_get($result_from_tracking_api, "sim_meta.0.berfuntong.grade"),
                        ];
                        $numbering_group_settings                         = VHoraService::getNumberingGroup();
                        $result_from_tracking_api['vhora_group_title']    = array_get($numbering_group_settings['groups'], $v['group'], '');
                        $result_from_tracking_api['vhora_subgroup_title'] = array_get($numbering_group_settings['subgroups'], $v['group'] . '.' . $v['subgroup'], '');
                        $result_from_tracking_api['vhora_grade']          = $v['grade'];
                        $vhora_color_group                                = [
                            "กัมมะ"    => ['blue', "#20639B"],
                            "กฎุมพะ" => ['green', "#219653"],
                            "ปัตนิ"    => ['red', "#DD2D4A"],
                            "ลาภะ"       => ['orange', "#F2994A"],
                        ];
                        $result_from_tracking_api["vhora_icon"]         = "data:image/png;base64," . base64_encode(\file_get_contents(storage_path('imgs/') . $vhora_color_group[$v['group']][0] . ".png"));
                        $result_from_tracking_api["vhora_mobile_color"] = $vhora_color_group[$v['group']][1];
                    }

                    $base64_encode_image = '';
                    if (empty(array_get($result_from_tracking_api, "sim_meta.0.berfuntong.package_code"))) {
                        $pdf = mb_convert_encoding(\View::make('success-vhora-pdf', $result_from_tracking_api), 'HTML-ENTITIES', 'UTF-8');

                        $tmp_file_id       = Str::uuid()->toString();
                        $file_name         = "vhora_" . $tmp_file_id;
                        $file_storage_path = storage_path('app/');
                        $pdf_output        = \PDF::loadHtml($pdf)->output();
                        file_put_contents($file_storage_path . $file_name . '.pdf', $pdf_output);
                        $email_info['attach']         = [];
                        $email_info['attach']['path'] = $file_storage_path . $file_name . '.pdf';
                        $email_info['attach']['name'] = 'คำทำนายดวงชะตาเบอร์ฟันธง.pdf';
                        $email_info['attach']['mime'] = mime_content_type($file_storage_path . $file_name . '.pdf');
                    }
                } catch (\Exception $e) {
                    LogService::writeActionLog($lrequest, 'vhora pdf error response: ' . json_encode_unicode([
                        array_get($json_decode_sim_meta, '0.number'),
                        $e->getMessage(),
                    ]));
                }
            }
            // end of tec-1151 vhora pdf email

            // start of dp-150 mnp bundling email
            $product_type_list              = array_flip(array_column($result_from_tracking_api['order_product'], 'product_type'));
            $product_type_mnp_bundling_list = ["device_mnp_bundle", "mnp", "sim"];

            $is_mnp_bundling = true;
            foreach ($product_type_mnp_bundling_list as $product_type_each) {
                if (!isset($product_type_list[$product_type_each])) {
                    $is_mnp_bundling = false;
                    break;
                }
            }
            $email_info['data']['is_mnp_bundling'] = $is_mnp_bundling;
            // end of dp-150 mnp bundling email

            // start of add fix tmh-268-2 add reference_product_id to redis for send mnp email
            if (isset($email_mnp_reference_product_id_save_data)) {
                $email_info['data']['mnp_reference_product_id'] = $email_mnp_reference_product_id_save_data;
            }
            // end of add fix tmh-268-2 add reference_product_id to redis for send mnp email

            EmailService::sendEmail('email', $email_info, env('EMAIL_FROM'), env('NAME_FROM'));

            if (isset($file_storage_path) && isset($file_name) && !$is_vhora) {
                unlink($file_storage_path . $file_name . '.jpg');
            } elseif (isset($file_storage_path) && isset($file_name) && $is_vhora) {
                unlink($file_storage_path . $file_name . '.pdf');
            }
        }
        $tmh_sale = array_get($result_from_tracking_api, 'order_tmh_sale', []);
        if ($tmh_sale) {
            $tmh_sale['delivery_phone'] = array_get($result_from_tracking_api, 'order_address.delivery_phone');
            $tmh_sale['secure_key']     = $secure_key;
            SaleSmsService::sendSuccessSMS($tmh_sale);
        }

        return redirect()->away($success_url . '&ft=true');
    }

    public function getPrivilege($cart_id)
    {
        $cart_data = Redis::get("store:cart_id:$cart_id");

        $check_cart_data = json_decode($cart_data, true);

        if (!(!empty($check_cart_data) && is_array($check_cart_data))) {
            return response()->json([
                "privilege_trueidbox" => true,
                "privilege_samsung"   => false,
            ]);
        }

        return response()->json([
            "privilege_trueidbox" => [
                "is_correct" => true,
            ],
            "privilege_samsung"   => [
                "is_correct" => isset(array_keys($check_cart_data)[0]) ? array_keys($check_cart_data)[0] == "privilege_samsung" : false,
                "data"       => [
                    "product_code" => isset($check_cart_data["privilege_samsung"]["privilege"]["product_code"]) ? $check_cart_data["privilege_samsung"]["privilege"]["product_code"] : false,
                    "discount"     => isset($check_cart_data["privilege_samsung"]["privilege"]["discount"]) ? $check_cart_data["privilege_samsung"]["privilege"]["discount"] : false,
                ],
            ],
        ]);
    }

    public function wrapPayment($order, $data)
    {
        $default_error_status_code = 'invalid_payment';

        if (in_array(strtoupper(array_get($order, 'payment_method')), ['WEOMNICCW', 'WEOMNIINSTM'])) {
            $order_statuses_code = 100;

            if (!in_array(strtoupper(array_get($order, 'wepayment_status', '')), ['AUTHORIZED', 'APPROVE', 'SETTLED'])) {
                $order_statuses_code    = $default_error_status_code;
                $data["payment_cancel"] = true;
            }
            $data["order_statuses_code"] = $order_statuses_code;
        } elseif (in_array(strtoupper(array_get($order, 'payment_method')), ['OMISECCW', 'OMISEEW', 'OMISEINSTM', 'OMISEPROMPTPAY'])) {
            $order_statuses_code = 100;

            if (!in_array(strtoupper(array_get($order, 'omise_status', '')), ['SUCCESS'])) {
                $order_statuses_code    = $default_error_status_code;
                $data["payment_cancel"] = true;
            }
            $data["order_statuses_code"] = $order_statuses_code;
        } elseif (in_array(strtoupper(array_get($order, 'payment_method')), ['P2C2PINSTM', 'P2C2PCCW'])) {
            $data["order_statuses_code"] = 100;
            $gateway_status              = strtoupper(Arr::get($order, 'order_omise.gateway_status', ''));

            if (!in_array($gateway_status, ['SUCCESS'])) {
                $order_statuses_code    = $default_error_status_code;
                $data["payment_cancel"] = true;
            }
        } elseif (in_array(strtoupper(array_get($order, 'payment_method')), ['TMNPAYSMOOTH'])) {
            $data["order_statuses_code"] = Arr::get($order, 'order_statuses_code');
            $transaction_id              = Arr::get($order, 'transaction_id');

            if (!in_array(Arr::get($order, 'order_statuses_code'), ['100']) || empty($transaction_id)) {
                $order_statuses_code    = $default_error_status_code;
                $data["payment_cancel"] = true;
            }
        }

        return $data;
    }

    public static function postSaveTempContentToS3(LaravelRequest $lrequest)
    {
        $url    = "save-temp-content";
        $method = "post";
        $header = [];

        return WlsService::postSaveTempContentToS3($url, $method, $lrequest, $header);
    }

    public function goSuccessPage($data)
    {
        try {
            $secure_key                             = array_get($data, 'secure_key');
            $success_code_from_secure_key_encrypted = encrypt($secure_key);
            $parameter_to_be_appended               = "success_code={$success_code_from_secure_key_encrypted}";

            $redirect_url = "/offline-store/berfuntong/success?{$parameter_to_be_appended}";

            if (!array_get($data, 'offline_skip')) {
                $parameter     = ["secure_key" => $data['secure_key'], "show_all" => true, "is_success_check" => true, "wepayment_status" => true];
                $order_result  = App('App\Http\Controllers\OrderDetailController')->showTrackingContent($parameter);
                $data['order'] = array_get($order_result, 'body.data.0');
            }

            $firstname = array_get($data, 'order.firstname', array_get($data, 'form.firstname', ''));
            $lastname  = array_get($data, 'order.lastname', array_get($data, 'form.lastname', ''));
            $msisdn    = array_get($data, 'order.sim_meta.0.number', array_get($data, 'form.selected_msisdn', ''));

            $firstname = $firstname != 'vhora_firstname' && !is_null($firstname) ? $firstname : '';
            $lastname  = $lastname != 'vhora_lastname' && !is_null($lastname) ? $lastname : '';

            $vhora_offline_data         = Redis::get("truestore:vhora:offline:orderid:$secure_key:data");
            $vhora_offline_success_data = $vhora_offline_data ? json_decode($vhora_offline_data, true) : [];

            if (!$vhora_offline_success_data) {
                $birth_date = array_get($data, 'order.sim_meta.0.birth_date');
                if (array_get($data, 'form.birthdate', false)) {
                    $request_place_order = new OrderRequest();
                    $birth_date          = date_format($request_place_order->setFormatBirthDate(array_get($data, 'form.birthdate')), 'd/m/Y');
                }

                $vhora_offline_success_data = [
                    'firstname'       => $firstname,
                    'lastname'        => $lastname,
                    'birthtime'       => array_get($data, 'order.sim_meta.0.birth_time', array_get($data, 'form.birthtime')),
                    'birthdate'       => $birth_date,
                    'selected_msisdn' => $msisdn,
                    'birthdate_thai'  => WlsService::dateToThai($birth_date),
                    'package_code'    => array_get($data, 'order.sim_meta.0.berfuntong.package_code', ''),
                ];

                Redis::set("truestore:vhora:offline:orderid:$secure_key:data", json_encode($vhora_offline_success_data), 'EX', 48 * 60 * 60);
            }
            $data['sim_meta'] = $vhora_offline_success_data;

            $email = array_get($data, 'order.order_address.delivery_email', array_get($data, 'form.email', false));

            $is_lowtier = !empty(array_get($data, 'order.sim_meta.0.berfuntong.package_code'));
            if ($is_lowtier) {
                return $redirect_url;
            }

            if (env("IS_SMTP_ALLOWED", true) && $email && $email !== 'vhora@wemall.com') {
                $email_info = [
                    'subject' => "คำทำนายพื้นฐานและเจาะลึกเปิดดวงชะตา ของคุณ $firstname $lastname",
                    'to'      => $email,
                    'data'    => [
                        'firstname'      => $firstname,
                        'lastname'       => $lastname,
                        'secure_key'     => $secure_key,
                        'payment_method' => array_get($data, 'payment_method'),
                        'number'         => $msisdn,
                    ],
                ];

                $ctoken                     = Redis::get("truestore:ctoken:orderid:$secure_key:value");
                $data['sim_meta']['ctoken'] = $ctoken;

                if (!empty($ctoken)) {
                    $vhora_result                = VHoraService::getFortuneFuntong($msisdn, $ctoken);
                    $data["fortune_funtong"]     = $vhora_result;
                    $image_result                = Redis::get("truestore:vhora_image:orderid:$secure_key:value");
                    $data['sim_meta']['image']   = $ctoken;
                    $data["file_name_2_content"] = $image_result;

                    if (!empty(array_get($data, "order.sim_meta.0.berfuntong.group"))) {
                        $v = [
                            "group"    => array_get($data, "order.sim_meta.0.berfuntong.group"),
                            "subgroup" => array_get($data, "order.sim_meta.0.berfuntong.subgroup"),
                            "grade"    => array_get($data, "order.sim_meta.0.berfuntong.grade"),
                        ];
                        $numbering_group_settings     = VHoraService::getNumberingGroup();
                        $data['vhora_group_title']    = array_get($numbering_group_settings['groups'], $v['group'], '');
                        $data['vhora_subgroup_title'] = array_get($numbering_group_settings['subgroups'], $v['group'] . '.' . $v['subgroup'], '');
                        $data['vhora_grade']          = $v['grade'];
                        $vhora_color_group            = [
                            "กัมมะ"    => ['blue', "#20639B"],
                            "กฎุมพะ" => ['green', "#219653"],
                            "ปัตนิ"    => ['red', "#DD2D4A"],
                            "ลาภะ"       => ['orange', "#F2994A"],
                        ];
                        $data["vhora_icon"]         = "data:image/png;base64," . base64_encode(\file_get_contents(storage_path('imgs/') . $vhora_color_group[$v['group']][0] . ".png"));
                        $data["vhora_mobile_color"] = $vhora_color_group[$v['group']][1];
                    }

                    list($file_name, $file_storage_path) = $this->setPDF('success-vhora-offline-pdf', $data);
                    $email_info['attach']                = [];
                    $email_info['attach']['path']        = $file_storage_path . $file_name . '.pdf';
                    $email_info['attach']['name']        = 'คำทำนายดวงชะตาเบอร์ฟันธง.pdf';
                    $email_info['attach']['mime']        = mime_content_type($file_storage_path . $file_name . '.pdf');
                }
                if (!$is_lowtier) {
                    EmailService::sendEmail('email-offline', $email_info, env('EMAIL_FROM'), env('NAME_FROM'));
                }

                unlink($file_storage_path . $file_name . '.pdf');
            }
        } catch (\Exception $e) {
            $error = [
                $e->getMessage(),
                $e->getFile(),
                $e->getLine(),
            ];
            LogService::writeServiceLog('VHora:success-offline-exception', json_encode(array_get($data, 'sim_meta')), json_encode($error), date('d/m/Y H:i:s'));
            $error_code = 001;
            if (!array_get($data, 'offline_skip')) {
                $error_code = 002;
            }
            $redirect_url = "/offline-store/berfuntong/success?{$parameter_to_be_appended}" . "&error=$error_code";
        }

        return $redirect_url;
    }

    /**
     * @param $name
     * @param $data
     * @return array
     */
    public function setPDF($name, $data)
    {
        $pdf = mb_convert_encoding(\View::make($name, $data), 'HTML-ENTITIES', 'UTF-8');

        $tmp_file_id       = Str::uuid()->toString();
        $file_name         = "vhora_" . $tmp_file_id;
        $file_storage_path = storage_path('app/pdf/');
        $pdf_output        = \PDF::loadHtml($pdf)->output();
        file_put_contents($file_storage_path . $file_name . '.pdf', $pdf_output);

        return [$file_name, $file_storage_path];
    }

    public function updateCacheProduct($lrequest, $bypass)
    {
        try {
            $product_ids  = $lrequest->get('product_ids');
            $product_list = explode(',', $product_ids);
            foreach ($product_list as $product_id) {
                $get_redis_key   = Redis::keys('product-level-d:api:product:' . trim($product_id) . ':*');
                $tmh_token_redis = '';
                foreach ($get_redis_key as $redis_key) {
                    $key_split_1 = explode(':data:', $redis_key);
                    $key_split   = explode(':header:', array_get($key_split_1, 1, ''));
                    $data        = json_decode($key_split[0], 1);
                    $headers     = json_decode($key_split[1], 1);
                    $request     = new LaravelRequest();
                    $request->replace($data);
                    foreach ($headers as $key => $header) {
                        if ($key == 'tmvh-token') {
                            $redis_value     = Redis::get($redis_key);
                            $tmh_token_redis = array_get(json_decode($redis_value, true), 'token');
                            $request->headers->set($key, $tmh_token_redis);
                        } else {
                            $request->headers->set($key, $header);
                        }
                    }

                    $content = WlsService::getPortalProductWls("wportal/product/$product_id", 'GET', $request, $headers, $bypass);
                    Redis::set($redis_key, json_encode(["content" => $content, "token" => $tmh_token_redis]));
                }
            }
            $status_code = 200;
            $body        = ["message" => 'update cache successful'];
        } catch (\Exception $e) {
            $status_code = 400;
            $body        = ["message" => 'no data removed, reason: ' . get_class($e) . ', ' . $e->getMessage()];
        }

        $content = [
            'status_code' => $status_code,
            'body'        => $body,
        ];

        return $content;
    }

    public function getLucky9999()
    {
        try {
            $content = WlsService::getLucky9999Config();
            $status_code = 200;
            $body        = json_decode($content, true);
        } catch (\Exception $e) {
            $status_code = 400;
            $body        = [
                "message" => [
                    "th" => get_class($e) . ', ' . $e->getMessage(),
                    "en" => get_class($e) . ', ' . $e->getMessage(),
                ]
            ];
        }

        $content = [
            'status_code' => $status_code,
            'body'        => $body,
        ];

        return $content;
    }
}
