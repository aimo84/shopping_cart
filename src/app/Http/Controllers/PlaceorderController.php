<?php

namespace App\Http\Controllers;

use App\Facades\OrderService;
use App\Http\Controllers\ApiParentController;
use App\Services\AwsService;
use App\Services\CreditokService;
use App\Services\EKycService;
use App\Services\LogService;
use App\Services\TyphoonService;
use App\Services\ImageService;
use App\Services\WlsService;
use App\Services\ElsaService;

use Illuminate\Http\Request as LaravelRequest;
use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Str;

class PlaceorderController extends ApiParentController
{

    /**
     * @OA\Info(
     *      version="1.0.0",
     *      title="Laravel OpenApi Demo Documentation",
     *      description="L5 Swagger OpenApi description",
     *      @OA\Contact(
     *          email="admin@admin.com"
     *      ),
     *      @OA\License(
     *          name="Apache 2.0",
     *          url="http://www.apache.org/licenses/LICENSE-2.0.html"
     *      )
     * )
     *
     * @OA\Server(
     *      url=L5_SWAGGER_CONST_HOST,
     *      description="Demo API Server"
     * )

     *
     * @OA\Tag(
     *     name="Projects",
     *     description="API Endpoints of Projects"
     * )
     */

    public function postIOActionLog($magic_function_method_name, $lrequest, $content)
    {
        $message_id      = Str::uuid()->toString();
        $log_message_str = "message_id = $message_id, $magic_function_method_name input: " . json_encode_unicode($lrequest->all()) . ", $magic_function_method_name result: " . json_encode_unicode(["content" => $content]);
        LogService::writeActionLog($lrequest, $log_message_str);

        return [$message_id];
    }

    /**
     * @OA\Post(
     *      path="/api/true/pre_ekyc/placeorder",
     *      @OA\RequestBody(
     *        required=true,
     *        @OA\MediaType(
     *          mediaType="application/json",
     *          @OA\Schema(
     *            @OA\Property(
     *              property="oneTimeCardToken",
     *              description="callback url after the user finish creditok ekyc form",
     *
     *            ),
     *          ),
     *        ),
     *      ),
     *      operationId="postPreEkycPlaceorder",
     *      tags={"PreEkycPlaceorder"},
     *      summary="Post send data to creditok create application url with ekyc_hash",
     *      description="Returns creditok create application url with ekyc_hash",
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation"
     *       ),
     *      @OA\Response(
     *          response=401,
     *          description="Unauthenticated",
     *      ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      ),
     *      @OA\Response(
     *          response=500,
     *          description="Error: Internal Server Error"
     *      )
     *     )
     */
    public function postPreEkycPlaceorder(LaravelRequest $lrequest)
    {
        $content = [200, ["message" => ["en" => "stop", "th" => "stop"]]];

        $cart_hash = \Arr::get($lrequest, "cart_id");

        if (empty($cart_hash)) {
            $process_api_controller_result = $this->processAPIController($content, $lrequest, "pre_ekyc/placeorder");

            return $process_api_controller_result;
        }

        // check voucher status
        $ent_pack_cart = Redis::get('truestore:ent_pack_cart:' . $cart_hash . ':content');
        if (!empty($ent_pack_cart)) {
            $ent_pack_cart = json_decode($ent_pack_cart, true);

            $thai_id      = array_get($ent_pack_cart, 'thai_id');
            $voucher_code = array_get($ent_pack_cart, 'voucher_code');
            if (!empty($thai_id) && !empty($voucher_code)) {
                $check_status   = TyphoonService::checkStatus($voucher_code, $thai_id);
                $voucher_status = json_decode($check_status[1], true);
                $code           = \Arr::get($voucher_status, 'code');
                $status         = \Arr::get($voucher_status, 'voucher_status');

                if ($check_status[0] !== 200 || $code !== 200 || $status === 'used') {
                    $content                       = [200, ['message' => ['en' => 'invalid voucher code', 'th' => 'voucher code ไม่ถูกต้อง'], 'voucher_status' => $voucher_status]];
                    $process_api_controller_result = $this->processAPIController($content, $lrequest, 'pre_ekyc/placeorder');

                    return $process_api_controller_result;
                }
            }
        }
        // end check voucher status

        $prever_thai_id = \Arr::get($lrequest->all(), "privilege.0.id_number");

        // set new tmp_lrequest with bff-determined callback url
        $tmp_lrequest = new \Illuminate\Http\Request();

        $json          = $tmp_lrequest->json()->all();
        $json['field'] = 'new value';

        $json                                  = [];
        $json['answers']                       = [];
        $json['answers']['placeorder_request'] = $lrequest->all();

        if ($lrequest->has('ekyc_hash')) {
            $ekyc_hash = $lrequest->input('ekyc_hash');
            $ekyc_data = CreditokService::getStatus($lrequest, $ekyc_hash);
            LogService::writeServiceLog(
                "ekyc data placeorder (existing ekyc_hash)",
                json_encode_unicode($ekyc_data[0]),
                json_encode_unicode($ekyc_data[1]),
                (new \DateTime())->format('d/m/Y H:i:s')
            );

            if ($ekyc_data[0] == 200) {
                $env_host                        = multiEnv(env('APP_URL', false));
                $json['answers']['callback_url'] = "$env_host/api/true/ekyc/status/placeorder/ekyc_hash";
                $json['ekyc_hash_ticket']        = $ekyc_hash;
                unset($json['answers']['placeorder_request']['ekyc_hash']);

                $tmp_lrequest->json()->replace($json);
                $tmp_lrequest->replace($json);

                $pre_ekyc_redis_data                                  = Redis::set("truestore:placeorder:pre_ekyc:ekyc_hash:$ekyc_hash:redis_data", json_encode($tmp_lrequest->all()), 'EX', 60 * 60 * 1); // 1 hour
                $process_api_controller_ekyc_status_placeorder_result = $this->getEkycStatusPlaceorder($lrequest, $ekyc_hash);

                LogService::writeServiceLog(
                    "ekyc data placeorder (existing ekyc_hash) [response]",
                    json_encode_unicode($process_api_controller_ekyc_status_placeorder_result),
                    '',
                    (new \DateTime())->format('d/m/Y H:i:s')
                );

                return $process_api_controller_ekyc_status_placeorder_result; // should be a redirect route return, so just return them to frontend right away
            }
        }

        $ekyc_hash = Str::uuid()->toString();
        Redis::set('store-creditok-face-recog:api:ekyc_hash:' . $ekyc_hash . ':ekyc_hash_ticket', $ekyc_hash, 'EX', 60 * 60 * 1);

        $env_host                        = multiEnv(env('APP_URL', false));
        $json['answers']['callback_url'] = "$env_host/api/true/ekyc/status/placeorder/ekyc_hash";
        $json['ekyc_hash_ticket']        = $ekyc_hash;

        $tmp_lrequest->json()->replace($json);
        $tmp_lrequest->replace($json);

        //creditok controller postCreateApplication
        $process_api_controller_creditok_get_status_result = App('App\Http\Controllers\CreditokController')->postCreateApplication($tmp_lrequest); //public function postCreateApplication(LaravelRequest $lrequest)
        $content                                           = [0 => $process_api_controller_creditok_get_status_result->status(), 1 => ($process_api_controller_creditok_get_status_result->content())];
        $tmp_json_decode = json_decode($content[1], true);
        $form_url        = \Arr::get($tmp_json_decode, "form_url");
        if (!empty($form_url)) {
            \Arr::set($tmp_json_decode, "redirectUrl", $form_url);
            \Arr::set($tmp_json_decode, "code", 200);
        }
        $content[1] = json_encode($tmp_json_decode);

        $ekyc_hash           = \Arr::get(json_decode($content[1], true), "ekyc_hash");
        $pre_ekyc_redis_data = Redis::set("truestore:placeorder:pre_ekyc:ekyc_hash:$ekyc_hash:redis_data", json_encode($tmp_lrequest->all()), 'EX', 60 * 60 * 1); // 1 hour

        // store placeorder parameter to redis

        $process_api_controller_result = $this->processAPIController($content, $lrequest, "pre_ekyc/placeorder");
        $tmp_action_log_data           = $this->postIOActionLog(__METHOD__, $lrequest, $content);

        return $process_api_controller_result;
    }

    /**
     * @OA\Get(
     *      path="/api/true/ekyc/status/placeorder/ekyc_hash",
     *      operationId="postPreEkycPlaceorder",
     *      tags={"PreEkycPlaceorder"},
     *      summary="Get send data to creditok create application url with ekyc hash",
     *      description="Returns creditok create application url with ekyc hash",
     *      @OA\Parameter(
     *         name="hash",
     *         description="",
     *          in = "path",
     *         required=true,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation"
     *       ),
     *      @OA\Response(
     *          response=401,
     *          description="Unauthenticated",
     *      ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      ),
     *      @OA\Response(
     *          response=500,
     *          description="Error: Internal Server Error"
     *      )
     *     )
     */
    // get creditok data and placeorder
    public function getEkycStatusPlaceorder(LaravelRequest $lrequest, $pre_ekyc_hash = '')
    {
        $content = [200, ["message" => ["en" => "stop", "th" => "stop"]]];

        if ($lrequest->has('hash')) {
            $ekyc_hash        = $lrequest->input('hash');
            $lrequest['hash'] = $lrequest->input('hash');
        } elseif (!empty($pre_ekyc_hash)) {
            $ekyc_hash        = $pre_ekyc_hash;
            $lrequest['hash'] = $pre_ekyc_hash;
        } else {
            $default_error_status_code = 'invalid_ekyc_no_hash_found';
            $tmp_action_log_data       = $this->postIOActionLog(__METHOD__ . "|" . $default_error_status_code, $lrequest, $content);

            return redirect()->away('/payment?error=' . $default_error_status_code);
        }
        $default_error_status_code = 'invalid_ekyc';
        $pre_ekyc_redis_data       = Redis::get("truestore:placeorder:pre_ekyc:ekyc_hash:$ekyc_hash:redis_data"); // 1 hour
        $prever_thai_id            = \Arr::get(json_decode($pre_ekyc_redis_data, true), "answers.placeorder_request.privilege.0.id_number");
        $is_mnp                    = \Arr::get(json_decode($pre_ekyc_redis_data, true), "answers.placeorder_request.is_mnp");
        $is_new_customer           = \Arr::get(json_decode($pre_ekyc_redis_data, true), "answers.placeorder_request.is_new_customer", false);

        if (empty($prever_thai_id)) {
            $prever_thai_id = \Arr::get(json_decode($pre_ekyc_redis_data, true), "answers.placeorder_request.privilege.0.thai_id");
        }

        if (!empty($prever_thai_id) || $is_mnp) {
            $lrequest['ekyc_hash']  = $ekyc_hash;
            $raw_data_check_thai_id = $this->getCheckThaiIdPreverCreditokSame($lrequest);
            $is_pass_check_thai_id  = \Arr::get($raw_data_check_thai_id, "1.is_pass");
            if (gettype($is_pass_check_thai_id) == "boolean" && !$is_pass_check_thai_id) {
                $body            = [];
                $body['is_pass'] = false;
                $body['reason'] = "thai id 2";

                $body['message'] = [
                    'en' => 'Thai Id Preverify and Credit ok Ekyc is not the same',
                    'th' => 'รหัสบัตรประชาชนระหว่าง Preverify และ Credit ok Ekyc ไม่ตรงกัน',
                ];

                $default_error_status_code = 'invalid_ekyc_2';
                $tmp_action_log_data       = $this->postIOActionLog(__METHOD__ . "|" . $default_error_status_code, $lrequest, $raw_data_check_thai_id);

                // Clear redis ekyc for retry ekyc again
                if(env("IS_CREDITOK_DEBUG_NOT_SKIP_DEL", true)) {
                    Redis::del('store-creditok-face-recog:api:ekyc_hash:' . $ekyc_hash . ':slug');
                    Redis::del('store-creditok-face-recog:api:ekyc_hash:' . $ekyc_hash . ':ekyc_hash_ticket');
                }
                
                return redirect()->away('/payment?error=' . $default_error_status_code);
            }
        }

        // check if creditok pass or not, if not, return errors to frontend checkout page

        // get ekyc data from redis
        $body      = ["tmp_check_result" => ["ekyc_redis" => []]];
        $step_name = 'ekyc_redis';

        $ekyc_data = CreditokService::getStatus($lrequest, $ekyc_hash);
        
        if ($ekyc_data[0] !== 200) {
            $body['tmp_check_result']['is_pass'] = false;
            $body['tmp_check_result']['reason'] = "invalid_ekyc_3, different thai id";
            $body['tmp_check_result']["debug_data"] = $ekyc_data;
            $body['message'] = [
                'en' => 'Not found ekyc data',
                'th' => 'ไม่พบข้อมูล ekyc',
            ];

            $default_error_status_code = 'invalid_ekyc_3';
            $tmp_action_log_data       = $this->postIOActionLog(__METHOD__ . "|" . $default_error_status_code, $lrequest, $content);

            return redirect()->away('/payment?error=' . $default_error_status_code);
        }
        $ekyc_data = array_get($ekyc_data, 1);

        // start of post Check
        $is_pre2post = false;

        $cart_id       = \Arr::get(json_decode($pre_ekyc_redis_data, true), "answers.placeorder_request.cart_id");
        $tmp_redis_key = 'pre2post_data:' . $cart_id;
        if (!empty($redis_data)) {
            $is_pre2post = true;
        }
        $tmp_lrequest = new \Illuminate\Http\Request($ekyc_data);

        $tmp_lrequest['cart_hash'] = $cart_id;
        $is_pass_post_check        = App('App\Http\Controllers\PreToPostController')->postCheck($tmp_lrequest);
        $content                   = [0 => $is_pass_post_check->status(), 1 => $is_pass_post_check->content()];
        if (($is_pre2post) && !json_decode($content[1], true)["is_pass"]) {
            $default_error_status_code = "invalid_ekyc_5";
            $tmp_action_log_data       = $this->postIOActionLog(__METHOD__ . "|" . $default_error_status_code, $lrequest, $content);

            return redirect()->away('/payment?error=' . $default_error_status_code);
        }
        // end of post Check

        $body['tmp_check_result'][$step_name]['ekyc_hash'] = $ekyc_hash;

        $customer_info = [];
        $answers       = array_get($ekyc_data, 'answers');
        $answers       = EKycService::formatAnswers($answers);
        $customer_info = [
            'title'                   => array_get($answers, 'prefix'),
            'first_name'              => array_get($answers, 'first_name'),
            'last_name'               => array_get($answers, 'last_name'),
            'amphur'                  => array_get($answers, 'home_district'),
            'city'                    => array_get($answers, 'home_province'),
            'house_no'                => explode(' ', array_get($answers, 'home_address'))[0],
            'tumbon'                  => array_get($answers, 'home_subdistrict'),
            'zip_code'                => array_get($answers, 'home_zipcode'),
            'identification_exp_date' => date('Y-m-d\TH:i:s\Z', strtotime(array_get($answers, 'date_of_expiration'))),
            'gender'                  => array_get($answers, 'gender'),
            'birthday'                => array_get($answers, 'date_of_birth'),
            'id_number'               => array_get($answers, 'national_id'),
        ];
        $body['tmp_check_result'][$step_name]['customer_info'] = $customer_info;

        $birth_day = array_get($customer_info, 'birthday');
        $id_number = array_get($customer_info, 'id_number');

        $body['tmp_check_result'][$step_name]['ekyc_data'] = $ekyc_data;
        $body['tmp_check_result'][$step_name]['is_pass']   = array_get($ekyc_data, 'is_pass');
        $body['tmp_check_result']['is_pass']               = $body['tmp_check_result'][$step_name]['is_pass'];
        $is_pass                                           = $body['tmp_check_result']['is_pass'];

        if (!$is_pass) {
            // return to frontend with errors
            $body['message'] = [
                'en' => 'ekyc data is incorrect',
                'th' => 'ข้อมูล ekyc ไม่ถูกต้อง',
            ];

            return response()->json($body, 400);
        }

        // placeorder
        $pre_ekyc_redis_data = Redis::get("truestore:placeorder:pre_ekyc:ekyc_hash:$ekyc_hash:redis_data"); // 1 hour

        $content = [200, ["message" => ["en" => "stop", "th" => "stop"]]];
        if (!empty($pre_ekyc_redis_data)) {
            $json_decode_pre_ekyc_redis_data = json_decode($pre_ekyc_redis_data, true);

            // Ekyc Success send log to elsa    
            ElsaService::createElsaLoggerEkycFormat($json_decode_pre_ekyc_redis_data, $answers);
            
            $json_decode_pre_ekyc_redis_data = OrderService::checkOcrConsentSimMeta($json_decode_pre_ekyc_redis_data, $ekyc_data);

            $tmp_lrequest = new \Illuminate\Http\Request(\Arr::get($json_decode_pre_ekyc_redis_data, "answers.placeorder_request"));
            $tmp_lrequest->setMethod('POST');
            $is_mnp                    = \Arr::get($json_decode_pre_ekyc_redis_data, "answers.placeorder_request.is_mnp");
            $process_controller_result = '';

            if ($is_mnp) {
                $tmp_lrequest["ekyc_data"] = $ekyc_data;
                $process_controller_result = App('App\Http\Controllers\MNPController')->placeOrderMNP($tmp_lrequest);
            } else {
                $tmp_lrequest["ekyc_hash"] = $ekyc_hash;
                $process_controller_result = App('App\Http\Controllers\OrderDetailController')->store($tmp_lrequest);
            }
            if (gettype($process_controller_result) == "object") {
                $content = [0 => $process_controller_result->status(), 1 => $process_controller_result->content()];
            }

            $lrequest["ekyc_hash"] = $ekyc_hash; // fix so-team-02, fix add log for get-status input credit ok
        }

        $tmp_action_log_data = self::postIOActionLog(__METHOD__, $lrequest, $content);

        $this->processAPIController($content, $lrequest, "ekyc/status/placeorder/ekyc_hash/$ekyc_hash");
        if (isset($content[1])) {
            $response = json_decode($content[1], true);
            LogService::writeServiceLog(
                "payment placeorder",
                json_encode_unicode($response),
                '',
                (new \DateTime())->format('d/m/Y H:i:s')
            );

            if (!empty($pre_ekyc_hash)) {
                return $response;
            }

            if (\Arr::get($response, 'code') == '200') {
                $image_type_array = [["image_front", "FACE_RECOG_CUST_CAPTURE"], ["image_liveness", "FACE_RECOG_CUST_CERTIFICATE"]]; // image_front, image_liveness, image_front_face
                foreach ($image_type_array as $tmp_image_type_key => $tmp_image_type_val) {
                    $tmp_url    = "check-preverify/wemall/sales/order/pdf/save-temp-content";
                    $tmp_method = "post";
                    $tmp_header = [];

                    $tmp_request_data = [];

                    $tmp_request_data["input-key"]      = $id_number; // filename
                    $tmp_request_data["content-base64"] = (\Arr::get($ekyc_data, $tmp_image_type_val[0]));
                    $tmp_request_data["form-type"]      = $tmp_image_type_val[1];

                    $tmp_lrequest = new \Illuminate\Http\Request($tmp_request_data);
                    $tmp_lrequest->setMethod('POST');

                    if (empty($tmp_request_data["content-base64"])) {
                        $this->postIOActionLog(__METHOD__ . "|empty_img_no_upload", $tmp_lrequest, []);
                        break;
                    }

                    $save_img_to_s3_result = WlsService::postSaveTempContent($tmp_url, $tmp_method, $tmp_lrequest, $tmp_header);

                    unset($tmp_request_data["content-base64"]);
                    $tmp_lrequest = new \Illuminate\Http\Request($tmp_request_data);
                    $tmp_lrequest->setMethod('POST');

                    $this->postIOActionLog(__METHOD__ . "|upload_image_after_creditok_result", $tmp_lrequest, $save_img_to_s3_result);

                    // start of old log from APIController
                    $message_id      = Str::uuid()->toString();
                    $log_message_str = "message_id = $message_id, save-temp-product, save-face-recognition result to server backend input: " . json_encode_unicode($tmp_request_data) . ", save-temp-product, save-face-recognition result to server backend result: " . json_encode_unicode($save_img_to_s3_result);
                    LogService::writeActionLog($tmp_lrequest, $log_message_str);

                    $this->processAPIController($save_img_to_s3_result, $tmp_lrequest, $tmp_url);
                    // end of old log from APIController

                    if ($save_img_to_s3_result[0] != 200) {
                        // handle unable to upload case
                        $default_error_status_code = "invalid_ekyc_6";

                        $this->postIOActionLog(__METHOD__ . "|" . $default_error_status_code, $tmp_lrequest, $save_img_to_s3_result);

                        return redirect()->away('/payment?error=' . $default_error_status_code);
                    }
                }

                if (!empty($is_new_customer)) {
                    $body["content_finish_placeorder"] = $content;
                    $response_data_upload_img = ImageService::getOrderSyncAppForm($body);

                    // upload ekyc image
                    $content_image_front = (\Arr::get($ekyc_data, "image_front"));
                    $upload_card_data = [
                        'auto_sync/kyc_image/' . $id_number . '_card_image' => $content_image_front,
                    ];
                    $card_image          = AwsService::uploadS3($upload_card_data, 'PRE2POST');
                    $card_image          = json_decode(array_get($card_image, '1', ''), true);
                    $card_image_filename = array_get($card_image, 'filename');

                    $content_image_liveness = (\Arr::get($ekyc_data, "image_liveness"));
                    $upload_liveness_data = [
                        'auto_sync/kyc_image/' . $id_number . '_liveness' => $content_image_liveness,
                    ];
                    $liveness_image    = AwsService::uploadS3($upload_liveness_data, 'PRE2POST');
                    $liveness_image    = json_decode(array_get($liveness_image, '1', ''), true);
                    $liveness_filename = array_get($liveness_image, 'filename');
                    // end upload ekyc image
                }

                $payment_method = \Arr::get($json_decode_pre_ekyc_redis_data, "answers.placeorder_request.payment_detail.method");
                if ($payment_method == "TMNPAYSMOOTH") {
                    $url_redirect         = \Arr::get($response, 'redirectUrl');
                    $explode_url_redirect = explode("ascendmoney", $url_redirect);

                    if (count($explode_url_redirect) > 0) {
                        return redirect()->away("/paysmooth-payment?deep-link=" . urlencode($explode_url_redirect[0]) . "ascendmoney" . $explode_url_redirect[1]);
                    }
                }
                
                return redirect()->away(\Arr::get($response, 'redirectUrl'));
            }
        }

        $tmp_action_log_data = $this->postIOActionLog(__METHOD__ . "|" . $default_error_status_code . "_error_ekyc_4", $lrequest, $content);
        
        return redirect()->away('/payment?error=' . $default_error_status_code . "_error_ekyc_4"); //$default_error_status_code = 'invalid_ekyc';, should be invalid_ekyc_error_ekyc_4
        
    }

    /**
     * @OA\Post(
     *      path="/api/true/check/thai_id/prever_and_creditok_same",
     *      operationId="getCheckThaiIdPreverCreditokSame",
     *      tags={"getCheckThaiIdPreverCreditokSame"},
     *      summary="Get check prever thai_id and creditok to be the same with ekyc_hash",
     *      description="Get check prever thai_id and creditok to be the same with ekyc_hash",
     *      @OA\Parameter(
     *         name="ekyc_hash",
     *         description="",
     *          in = "path",
     *         required=true,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation"
     *       ),
     *      @OA\Response(
     *          response=401,
     *          description="Unauthenticated",
     *      ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      ),
     *      @OA\Response(
     *          response=500,
     *          description="Error: Internal Server Error"
     *      )
     *     )
     */
    public function getCheckThaiIdPreverCreditokSame(LaravelRequest $lrequest)
    {
        $ekyc_hash           = $lrequest->input('ekyc_hash');
        $pre_ekyc_redis_data = Redis::get("truestore:placeorder:pre_ekyc:ekyc_hash:$ekyc_hash:redis_data"); // 1 hour

        $raw_prever_thai_id  = \Arr::get(json_decode($pre_ekyc_redis_data, true), "answers.placeorder_request.privilege.0.id_number");
        $prever_product_type = \Arr::get(json_decode($pre_ekyc_redis_data, true), "answers.placeorder_request.privilege.0.product_type");
        $is_mnp              = \Arr::get(json_decode($pre_ekyc_redis_data, true), "answers.placeorder_request.is_mnp");
        $cart_hash           = \Arr::get(json_decode($pre_ekyc_redis_data, true), "answers.placeorder_request.cart_id");

        $disallow_product_types = ['pre_to_post' => false, 'restriction' => false, 'device_bundle_prepaid' => false, 'device_bundle_prepaid_sim' => false];

        if (empty($raw_prever_thai_id)) {
            $raw_prever_thai_id = \Arr::get(json_decode($pre_ekyc_redis_data, true), "answers.placeorder_request.privilege.0.thai_id");
        }
        $prever_thai_id = $raw_prever_thai_id;
        if (!isset($disallow_product_types[$prever_product_type])) {
            $prever_thai_id = base64_decode($raw_prever_thai_id);
        }

        // get ekyc data from redis
        $body      = ["tmp_check_result" => ["ekyc_redis" => []]];
        $step_name = 'ekyc_redis';

        $ekyc_data = CreditokService::getStatus($lrequest, $ekyc_hash);
        if ($ekyc_data[0] !== 200) {
            $body['tmp_check_result']['is_pass'] = false;

            $body['message'] = [
                'en' => 'Not found ekyc data',
                'th' => 'ไม่พบข้อมูล ekyc',
            ];
            $default_error_status_code = 'invalid_ekyc';
            $is_pass                   = false;
            $content                   = [400, ["is_pass" => $is_pass, "reason" => "ekyc data not found from ekyc_hash", "ekyc_hash" => $ekyc_hash]];
            $tmp_action_log_data       = self::postIOActionLog(__METHOD__, $lrequest, $content);

            return $content;
        }
        $ekyc_data = array_get($ekyc_data, 1);

        $answers          = array_get($ekyc_data, 'answers');
        $answers          = EKycService::formatAnswers($answers);
        $creditok_thai_id = array_get($answers, 'national_id');

        $is_pass     = false;
        $mnp_thai_id = '';

        if (!empty($creditok_thai_id)) {
            if ($is_mnp) {
                $mnp_cart        = Redis::get('mnp-cart:' . $cart_hash);
                $cart_data_saved = empty($mnp_cart) ? [] : json_decode($mnp_cart, true);
                $mnp_thai_id     = array_get($cart_data_saved, 'thai_id');
                $is_pass         = ($mnp_thai_id == $creditok_thai_id);
            } else {
                $is_pass = ($prever_thai_id == $creditok_thai_id);
            }
        }

        LogService::writeServiceLog(
            "credit ok check thai_id",
            json_encode_unicode($is_pass),
            json_encode_unicode([$mnp_thai_id, $prever_thai_id]),
            (new \DateTime())->format('d/m/Y H:i:s')
        );

        $content = [200, ["is_pass" => $is_pass, "reason"=>"thai_id"]];
        if (!$is_pass) {
            $content[0]                           = 400;
            $content[1]["prever_thai_id"]         = $prever_thai_id;
            $content[1]["creditok_thai_id"]       = $creditok_thai_id;
            $content[1]["disallow_product_types"] = $disallow_product_types;
            $content[1]["prever_product_type"]    = $prever_product_type;
        }
        $tmp_action_log_data = self::postIOActionLog(__METHOD__, $lrequest, $content);

        return $content;
    }

}
