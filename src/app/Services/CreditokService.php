<?php
namespace App\Services;

use App\Facades\SSLcrypt;
use Illuminate\Http\Request as LaravelRequest;
use Illuminate\Support\Str;
use Illuminate\Support\Arr;
use Illuminate\Support\Carbon;
use Redis;
use Illuminate\Support\Facades\Validator;
use Exception;


class CreditokService
{
    public static function postCallbackSubmit(LaravelRequest $lrequest)
    {
        if (!($lrequest->headers->has('Authorization') &&
            !empty(\Illuminate\Support\Facades\Request::header('Authorization')) &&
            isset(explode(' ', \Illuminate\Support\Facades\Request::header('Authorization'))[1]) &&
            explode(' ', \Illuminate\Support\Facades\Request::header('Authorization'))[1] == env("CREDITOK_BASIC_AUTH"))) {
            $result = [
                400,
                [
                    'message' => [
                        'en' => 'No identity key relate to data.',
                        'th' => 'ไม่พบข้อมูล กรุณาลองใหม่อีกครั้ง',
                    ],
                ],
            ];

            return $result;
        }
        $content = $lrequest->all();

        if ($lrequest->has('answers')) {
            $answers_list = array_column($lrequest->input('answers'), "value", "question");
            $convert_list = ["district" => "city", "subdistrict" => "district"];

            foreach (["province", "district", "subdistrict"] as $field_name) {

                if (isset($answers_list["home_" . $field_name])) {
                    $suggest_type = isset($convert_list[$field_name]) ? $convert_list[$field_name] : $field_name;
                    $tmp_lrequest = new \Illuminate\Http\Request();
                    $tmp_lrequest->setMethod(strtoupper('GET'));
                    $tmp_lrequest["language"] = "th";

                    $list_raw = json_decode(json_encode(App('App\Http\Controllers\AddressSuggestionController')->getSuggestion($suggest_type, $tmp_lrequest)), true);
                    $list     = array_column($list_raw["original"], "id", "name");

                    $tmp_field_result = [];
                    if (isset($list[$answers_list["home_" . $field_name]])) {
                        $tmp_field_result["question"] = "home_" . $field_name . "_id";
                        $tmp_field_result["value"]    = $list[$answers_list["home_" . $field_name]];
                    } else {
                        $tmp_field_result["question"] = "home_" . $field_name . "_id";
                        $tmp_field_result["value"]    = "";
                    }
                    $content["answers"][] = $tmp_field_result;
                }
            }

            $key_list                                       = array_flip(array_keys($answers_list));
            $content["answers"][$key_list["date_of_birth"]] = ["question" => "date_of_birth", "value" => str_replace("-", "/", $answers_list["date_of_birth"])];
            $content["answers"]                             = array_values($content["answers"]);
        }

        // start of so-team-02, fix add log for image, redis, input of credit ok
        try {
            $content_image_liveness = file_get_contents($lrequest->input('ekyc.ekyc.liveness'));
        } catch (\Exception $e) {
            $content_image_liveness = null;
            LogService::writeServiceLog(
                "verifyCreditOkImageLivenessError",
                json_encode_unicode($content, true),
                json_encode_unicode(["line" => $e->getLine(), "message" => $e->getMessage(), "class" => get_class($e), "file" => $e->getFile(), "code" => $e->getCode()]),
                (new \DateTime())->format('d/m/Y H:i:s')
            );
        }

        try {
            $content_image_front = file_get_contents($lrequest->input('ekyc.ekyc.nid_card_front'));
        } catch (\Exception $e) {
            $content_image_front = null;
            LogService::writeServiceLog(
                "verifyCreditOkImageFrontError",
                json_encode_unicode($lrequest->all()),
                json_encode_unicode(["line" => $e->getLine(), "message" => $e->getMessage(), "class" => get_class($e), "file" => $e->getFile(), "code" => $e->getCode()]),
                (new \DateTime())->format('d/m/Y H:i:s')
            );
        }

        try {
            $content_image_card_face = file_get_contents($lrequest->input('extra.ekyc.identity_document.face_image_url'));
        } catch (\Exception $e) {
            $content_image_card_face = null;
            LogService::writeServiceLog(
                "verifyCreditOkImageFrontError",
                json_encode_unicode($lrequest->all()),
                json_encode_unicode(["line" => $e->getLine(), "message" => $e->getMessage(), "class" => get_class($e), "file" => $e->getFile(), "code" => $e->getCode()]),
                (new \DateTime())->format('d/m/Y H:i:s')
            );
        }

        if (self::isChannelTrueagent(array_get($content, 'ekyc.ekyc', []))) {
            $content_image_liveness = array_get($content, 'ekyc.ekyc.liveness');
            $content_image_front    = array_get($content, 'ekyc.ekyc.nid_card_front');
        }

        try {
            if (array_key_exists('answers', $content) && !is_null($content_image_liveness) && !is_null($content_image_front)) {
                Redis::set('store-creditok-face-recog:api:slug:' . $lrequest->input('application.slug') . ':content', json_encode($content), 'EX', 60 * 60);
            }
        } catch (\Exception $e) {
            $is_redis_slug_error = true;
            LogService::writeServiceLog(
                "verifyCreditOkRedisSlugError",
                json_encode_unicode($lrequest->all()),
                json_encode_unicode(["line" => $e->getLine(), "message" => $e->getMessage(), "class" => get_class($e), "file" => $e->getFile(), "code" => $e->getCode()]),
                (new \DateTime())->format('d/m/Y H:i:s')
            );
        }

        try {
            if (!is_null($content_image_liveness)) {
                Redis::set('store-creditok-face-recog:api:slug:' . $lrequest->input('application.slug') . ':liveness', $content_image_liveness, 'EX', 60 * 60);
            }
        } catch (\Exception $e) {
            $is_redis_liveness_error = true;
            LogService::writeServiceLog(
                "verifyCreditOkRedisLivenessError",
                json_encode_unicode($lrequest->all()),
                json_encode_unicode(["line" => $e->getLine(), "message" => $e->getMessage(), "class" => get_class($e), "file" => $e->getFile(), "code" => $e->getCode()]),
                (new \DateTime())->format('d/m/Y H:i:s')
            );
        }

        try {
            if (!is_null($content_image_front)) {
                Redis::set('store-creditok-face-recog:api:slug:' . $lrequest->input('application.slug') . ':front', $content_image_front, 'EX', 60 * 60);
            }
            if (!is_null($content_image_card_face)) {
                Redis::set('store-creditok-face-recog:api:slug:' . $lrequest->input('application.slug') . ':front_face', $content_image_card_face, 'EX', 60 * 60);
            }
        } catch (\Exception $e) {
            $is_redis_front_error = true;
            LogService::writeServiceLog(
                "verifyCreditOkRedisFrontError",
                json_encode_unicode($lrequest->all()),
                json_encode_unicode(["line" => $e->getLine(), "message" => $e->getMessage(), "class" => get_class($e), "file" => $e->getFile(), "code" => $e->getCode()]),
                (new \DateTime())->format('d/m/Y H:i:s')
            );
        }
        // end of so-team-02, fix add log for image, redis, input of credit ok

        if (self::isChannelTrueagent(array_get($content, 'ekyc.ekyc', []))) {
            $content_image_liveness = array_get($content, 'ekyc.ekyc.liveness');
            $content_image_front    = array_get($content, 'ekyc.ekyc.nid_card_front');
        }

        $result = [
            200,
            [
                'message' => [
                    'en' => 'submit callback data successful',
                    'th' => 'บันทึกข้อมูลที่เรียกกลับเรียบร้อยแล้ว',
                ],
            ],
        ];

        // start of so-team-02, fix add log for image, redis, input of credit ok
        if (is_null($content_image_liveness)) {
            $result[1]["is_null_content_image_liveness"] = true;
        }
        if (is_null($content_image_front)) {
            $result[1]["is_null_content_image_front"] = true;
        }
        if (is_null($content_image_card_face)) {
            $result[1]["is_null_content_image_card_face"] = true;
        }
        if (isset($is_redis_slug_error) && $is_redis_slug_error) {
            $result[1]["is_redis_slug_error"] = true;
        }
        if (isset($is_redis_liveness_error) && $is_redis_liveness_error) {
            $result[1]["is_redis_liveness_error"] = true;
        }
        if (isset($is_redis_front_error) && $is_redis_front_error) {
            $result[1]["is_redis_front_error"] = true;
        }
        // end of so-team-02, fix add log for image, redis, input of credit ok

        return $result;
    }

    public static function postCreateApplication(LaravelRequest $lrequest)
    {
        $header = [
            "x-api-key"    => env('X_API_KEY_TOL_SSV', false),
            'Content-Type' => 'application/json',
        ];
        $fixed_parameter_list = [
            'base_url' => env("AWS_GATEWAY_URL_TOL_SSV", false) . '/',
        ];

        $ekyc_hash = Str::uuid()->toString();
        if ($lrequest->has('ekyc_hash_ticket')) {
            $ekyc_hash = Redis::get('store-creditok-face-recog:api:ekyc_hash:' . $lrequest->input('ekyc_hash_ticket') . ':ekyc_hash_ticket');
            if (empty($ekyc_hash)) {
                $result = [400,
                    [
                        'message'          => [
                            'en' => 'No ekyc hash ticket found',
                            'th' => 'ไม่พบข้อมูล ekyc hash ticket',
                        ],
                        "is_pass"          => false,
                        "reason_for_debug" => "unable to get ekyc hash ticket",
                    ],
                ];

                return $result;
            }
        }

        if ($lrequest->has("answers.callback_url")) {
            $json = $lrequest->json()->all();
            $json["answers"]["callback_url"] .= (parse_url($json["answers"]["callback_url"], PHP_URL_QUERY) ? '&' : '?') . 'hash=' . $ekyc_hash;

            $tmp_lrequest = new \Illuminate\Http\Request();
            $tmp_lrequest->setMethod(strtoupper('GET'));
            $tmp_lrequest['answers'] = ["callback_url" => $json["answers"]["callback_url"]];
            $filtered_json           = ["answers" => ["callback_url" => $json["answers"]["callback_url"]]];
            $tmp_lrequest->json()->replace($filtered_json);
        }

        $result = WlsService::operateRequestAction("credit-ok/create-application", "POST", $tmp_lrequest, $header, $fixed_parameter_list);

        $tmp_json_decode_result = json_decode($result[1], true);
        if (isset($tmp_json_decode_result["detail"]["applied_form"])) {
            Redis::set('store-creditok-face-recog:api:ekyc_hash:' . $ekyc_hash . ':slug', $tmp_json_decode_result["detail"]["applied_form"], 'EX', 60 * 60);
            !empty($lrequest->input("answers")) ? Redis::set('store-creditok-face-recog:api:ekyc_hash:' . $ekyc_hash . ':additional_data', json_encode($lrequest["answers"]), 'EX', 60 * 60) : '';

            $tmp_json_decode_result["ekyc_hash"] = $ekyc_hash;
            $result[1]                           = json_encode($tmp_json_decode_result);
        }

        return $result;
    }

    public static function getStatus(LaravelRequest $lrequest, $ekyc_hash)
    {
        $slug = Redis::get('store-creditok-face-recog:api:ekyc_hash:' . $ekyc_hash . ':slug');
        if ($slug == null) {
            $result = [400,
                [
                    'message'          => [
                        'en' => 'No identity key relate to data.',
                        'th' => 'ไม่พบข้อมูล กรุณาลองใหม่อีกครั้ง',
                    ],
                    "is_pass"          => false,
                    "reason_for_debug" => "unable to get slug",
                ],
            ];

            return $result;
        }

        $content_json_decode = json_decode(Redis::get('store-creditok-face-recog:api:slug:' . $slug . ':content'), true);
        if ($content_json_decode == null) {
            $result = [400,
                [
                    'message'          => [
                        'en' => 'No identity key relate to data.',
                        'th' => 'ไม่พบข้อมูล กรุณาลองใหม่อีกครั้ง',
                    ],
                    "is_pass"          => false,
                    "reason_for_debug" => "unable to get content",
                ],
            ];

            return $result;
        }

        $result            = [];
        $result["is_pass"] = false;

        if (isset($content_json_decode["ekyc"]["ekyc"]["face_compare"]["score"]) &&
            is_numeric($content_json_decode["ekyc"]["ekyc"]["face_compare"]["score"]) &&
            $content_json_decode["ekyc"]["ekyc"]["face_compare"]["score"] >= 65) {
            $result["is_pass"] = true;
        }

        if (isset($content_json_decode["answers"])) {
            $result["answers"] = $content_json_decode["answers"];
        }

        $content_image_front = Redis::get('store-creditok-face-recog:api:slug:' . $slug . ':front');
        if ($content_image_front == null) {
            $result = [400,
                [
                    'message'          => [
                        'en' => 'No identity key relate to data.',
                        'th' => 'ไม่พบข้อมูล กรุณาลองใหม่อีกครั้ง',
                    ],
                    "is_pass"          => false,
                    "reason_for_debug" => "unable to get front card image",
                ],
            ];

            return $result;
        }

        $content_image_front_face = Redis::get('store-creditok-face-recog:api:slug:' . $slug . ':front_face');
        if ($content_image_front_face == null) {
            // $result = [400,
            //     [
            //         'message'          => [
            //             'en' => 'No identity key relate to data.',
            //             'th' => 'ไม่พบข้อมูล กรุณาลองใหม่อีกครั้ง',
            //         ],
            //         "is_pass"          => false,
            //         "reason_for_debug" => "unable to get front face card image",
            //     ],
            // ];

            // return $result;
        }

        $content_image_liveness = Redis::get('store-creditok-face-recog:api:slug:' . $slug . ':liveness');
        if ($content_image_liveness == null) {
            $result = [400,
                [
                    'message'          => [
                        'en' => 'No identity key relate to data.',
                        'th' => 'ไม่พบข้อมูล กรุณาลองใหม่อีกครั้ง',
                    ],
                    "is_pass"          => false,
                    "reason_for_debug" => "unable to get liveness image",
                ],
            ];

            return $result;
        }

        $result["image_front"]      = base64_encode($content_image_front);
        $result["image_front_face"] = base64_encode($content_image_front_face);
        $result["image_liveness"]   = base64_encode($content_image_liveness);
        $ekyc                       = array_get($content_json_decode, 'ekyc.ekyc', []);
        $result["channel"]          = 'creditok';

        if (self::isChannelTrueagent($ekyc)) {
            $result["channel"]                   = 'trueagent';
            $result["image_liveness"]            = array_get($ekyc, 'liveness');
            $result["image_front"]               = array_get($ekyc, 'nid_card_front');
            $result["face_recognition_status"]   = array_get($ekyc, 'true_face_compare.face_recog_status', 'fail');
            $result["is_identical"]              = strtolower(array_get($ekyc, 'true_face_compare.face_recog_status', 'fail')) == 'pass' ? 'true' : 'false';
            $result['confident_raito']           = strval(array_get($ekyc, 'true_face_compare.score', 0) / 100);
            $result['cust_certificate_laser_id'] = array_get($ekyc, 'true_face_compare.laser_id', '-');
            $result["approver"]                  = array_get($ekyc, 'true_face_compare.second_authen_by');
            $result["is_pass"]                   = array_get($ekyc, 'true_face_compare.pass', false);
        }

        $content_additional_data = Redis::get('store-creditok-face-recog:api:ekyc_hash:' . $ekyc_hash . ':additional_data');
        if ($content_additional_data != null) {
            $result["additional_data"] = json_decode($content_additional_data, true);
        }

        $message_fails = [
            'th' => "ยืนยันตัวตนไม่สำเร็จ</br><div style='font-size:35px;'>หากยังต้องการรับโปรโมชั่นตามที่เลือกไว้ เจ้าหน้าที่ทรูยินดีให้บริการคุณ กรุณาติดต่อทรูช้อป</div>",
            'en' => "We were unable to verify your identity.</br><div style='font-size:35px;'>If you still would like to get this offer, please visit True Shop.</div>",
        ];

        if (!$result["is_pass"]) {
            $result["message"]       = [];
            $result["message"]["th"] = array_get($message_fails, "th");
            $result["message"]["en"] = array_get($message_fails, "en");

            return [400, $result];
        }

        return [200, $result];
    }

    /**
     * checkIsChannelTrueagent
     *
     * @param array $ekyc
     *
     * @return boolean
     */
    public static function isChannelTrueagent($ekyc = [])
    {
        return array_key_exists('true_face_compare', $ekyc);
    }

    /**
     * postRetrieveConsent
     *
     * @param array $lrequest
     *
     * @return array
     */
    public static function postRetrieveConsent(LaravelRequest $lrequest) 
    {
        if (!($lrequest->headers->has('Authorization') &&
            !empty($lrequest->headers->get('Authorization')) &&
            Arr::get(explode(' ', $lrequest->headers->get('Authorization')), 1) == env("CREDITOK_BASIC_AUTH"))) {

            return ["status_code" => 400, "message" => ["error" => 'No identity key relate to data.']];
        }

        try {

            $rule = [
                'nId' => 'required',
            ];

            $message = [
                'nId.required' => 'The nId field is required.',
            ];

            $content   = $lrequest->all();
            $validator = Validator::make($content, $rule, $message);

            if ($validator->fails()) {
                
                return ["status_code" => 400, "message" => ["error" => implode(',', $validator->errors()->all())]];
            }

            $data = [
                'reference_type'  => 3,
                'reference_value' => SSLcrypt::encrypt(base64_decode(Arr::get($content, 'nId'))),
                'consent_number'  => 38,
                'consent_version' => 1,
            ];

            $response = self::postConsentTMN($data, 'truemoney/retrieve-consent');
        } catch (Exception $e) {
            LogService::writeServiceLog(
                "postRetrieveConsent",
                json_encode_unicode($content),
                json_encode_unicode($e->getMessage()),
                Carbon::now()->format('d/m/Y H:i:s')
            );
            $response = ["status_code" => 400, "message" => ["error" => $e->getMessage()]];
        }

        return $response;
    }

    /**
     * postRetrieveConsent
     *
     * @param array $lrequest
     *
     * @return array
     */
    public static function postSaveConsent(LaravelRequest $lrequest) 
    {
        if (!($lrequest->headers->has('Authorization') &&
            !empty($lrequest->headers->get('Authorization')) &&
            Arr::get(explode(' ', $lrequest->headers->get('Authorization')), 1) == env("CREDITOK_BASIC_AUTH"))) {

            return ["status_code" => 400, "message" => ["error" => 'No identity key relate to data.']];
        }

        try {
            $rule = [
                'nId'           => 'required',
                'consentStatus' => 'required'
            ];

            $message = [
                'nId.required' => 'The nId field is required.',
            ];

            $content   = $lrequest->all();
            $validator = Validator::make($content, $rule, $message );

            if ($validator->fails()) {
                return ["status_code" => 400, "message" => ["error" => implode(',', $validator->errors()->all())]];
            }

            $data = [
                'reference_type'  => 3,
                'reference_value' => SSLcrypt::encrypt(base64_decode(Arr::get($content, 'nId'))),
                'consent_status'  => Arr::get($content, 'consentStatus'),
                'consent_number'  => 38,
                'consent_version' => 1,
            ];

            $response = self::postConsentTMN($data, 'truemoney/save-consent');

        } catch (Exception $e) {
            LogService::writeServiceLog(
                "postSaveConsent",
                json_encode_unicode($content),
                json_encode_unicode($e->getMessage()),
                Carbon::now()->format('d/m/Y H:i:s')
            );
            $response = ["status_code" => 400, "message" => ["error" => $e->getMessage()]];
        }

        return $response;
    }

    public static function postConsentTMN($data = [], $url)
    {
        $time         = time();
        $encrypt_data = '';

        if  (!empty($data)) { 
            $encrypt_data = $time.json_encode($data);
        }
        
        $header = [
            'Content-Type'      => 'application/json',
            'x-api-key'         => env("X_API_KEY_TOL_SSV", false),
            'Content-Signature' => 'digest-alg=RSA-SHA; key-id=KEY:RSA:rsf.org; data=' . SSLcrypt::encryptTMNCCP($encrypt_data),
            'timestamp'         => $time,
        ];
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod('POST');
        $lrequest->replace($data);

        $response = GuzzleService::postGuzzleRequest(
            $url,
            'post',
            $lrequest,
            $header,
            env('AWS_GATEWAY_URL_TOL_SSV', false) . '/'
        );

        LogService::writeServiceLog(
            'post_consent_tmn',
            json_encode_unicode($lrequest->all()),
            json_encode_unicode($response),
            (new \DateTime())->format('d/m/Y H:i:s')
        );

        $http_status   = json_decode(Arr::get($response, '0'), true);
        $data_response = json_decode(Arr::get($response, '1'), true);

        if ($http_status != '200') $data_response = Arr::get($response, '2');

        return ['http_status' => $http_status, 'data' => $data_response];
    }
}
