<?php
namespace App\Http\Controllers;

use App\Http\Controllers\ApiParentController;
use App\Services\CreditokService;
use App\Services\EKycService;
use App\Services\LogService;
use App\Services\SimActivationService;
use App\Services\WeOmniService;
use Illuminate\Http\Request as LaravelRequest;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Redis;

class SimActivationController extends ApiParentController
{
    public function postVerify(LaravelRequest $lrequest)
    {
        $rule = [
            'sim_serial' => 'required',
            'method'     => 'required|in:scan,input',
            'sim_type'   => 'required|in:postpaid,prepaid',
        ];

        $tmp_input = $lrequest->all();
        // convert input data to the one we can send
        $validator = Validator::make($tmp_input, $rule);
        if ($validator->fails()) {
            $errors = [
                'message' => [
                    'en'                => 'insufficient input',
                    'th'                => 'กรุณากรอกข้อมูลให้ครบถ้วน',
                    'error_from_system' => implode(',', $validator->errors()->all()),
                ],
            ];

            return response($errors, 400);
        }

        $priceplan       = '';
        $amdoc           = '';
        $sku             = '';
        $msisdn_otp      = '';
        $type            = '';
        $group_type      = '';
        $body['is_pass'] = false;

        $sim_type = $lrequest->input('sim_type');
        $sim_type = $sim_type === 'prepaid' ? 'PRE' : 'POST';

        $group_type = '';

        if ($sim_type == 'PRE') {
            // check tmvh token
            $tmvh_token        = $lrequest->header('tmvh-token');
            $aes_wecamp_result = WeOmniService::getAesWecamp($tmvh_token);
            $msisdn_otp        = array_get($aes_wecamp_result, '1.phone_no');
            $type              = array_get($aes_wecamp_result, '1.cart_type');
            $group_type        = array_get($aes_wecamp_result, '1.type');
        }

        // validate
        $step_name = 'validate';

        $sim_serial     = $lrequest->input('sim_serial');
        $method         = $lrequest->input('method');
        $correlation_id = Str::uuid()->toString();

        $sim_types = [];
        $s_last    = 0;
        if ($sim_type == 'PRE') {
            $sim_types = ['PRE'];
            $s_last    = 0;
        } else {
            $sim_types = ['PRE', 'POST'];
            $s_last    = 1;
        }

        $tmp_result = [];

        foreach ($sim_types as $index => $s_type) {
            $tmp_lrequest = [
                'correlation_id' => $correlation_id,
                'sim_serial'     => $sim_serial,
                'sim_type'       => $s_type,
            ];
            $content    = SimActivationService::validate($tmp_lrequest);
            $tmp_result = json_decode($content[1], true);

            $body['correlation_id'] = $correlation_id;

            $body['tmp_check_result'][$step_name]            = $content;
            $body['tmp_check_result'][$step_name]['is_pass'] = true;
            $body['tmp_check_result'][$step_name]['body']    = $tmp_result;
            $body['tmp_check_result'][$step_name]['input']   = $tmp_lrequest;

            $code = array_get($tmp_result, 'code');

            if ($content[0] !== 200 || $code !== '200') {
                $body['tmp_check_result'][$step_name]['is_pass'] = false;

                if ($method === 'input') {
                    $body['message'] = [
                        'en' => 'Please make sure you enter the 18-digit number under barcode.',
                        'th' => 'ข้อมูลต้องเป็นตัวเลขใต้แถบบาร์โค้ด 18 หลัก',
                    ];
                } else {
                    $body['message'] = [
                        'en' => 'We can’t detect barcode. Please try again.',
                        'th' => 'บาร์โค้ดไม่ถูกต้อง ลองสแกนใหม่อีกครั้ง',
                    ];
                }

                if ($index < $s_last) {
                    continue;
                }

                return response()->json($body, 400);
            }
            $company_code = array_get($tmp_result, 'inventoryInfo.sim.simCompanyCode');
            $dealer_code  = array_get($tmp_result, 'inventoryInfo.sim.dealer');
            $fixed_dealer = explode(",", Redis::get("truestore:fixed_dealer:shop_code:string_delim_comma:sim_activation:redis_data"));

            if (empty($dealer_code) || !in_array($dealer_code, $fixed_dealer)) {
                $body['message'] = [
                    'en' => 'Sorry, not found dealer data.',
                    'th' => 'ขออภัย ไม่พบข้อมูล dealer',
                ];

                if ($index < $s_last) {
                    continue;
                }

                return response()->json($body, 400);
            }

            // get data from cms
            $step_name = 'cms-' . $s_type;

            $item_id = array_get($tmp_result, 'inventoryInfo.sim.itemId');
            if (empty($item_id)) {
                $body['tmp_check_result'][$step_name]['is_pass'] = false;

                if ($method === 'input') {
                    $body['message'] = [
                        'en' => 'SIM Serial is invalid condition',
                        'th' => 'SIM Serial นี้ไม่เข้าเงื่อนไขการใช้งาน กรุณาใช้ SIM serial ที่เข้าเงื่อนไข',
                    ];
                } else {
                    $body['message'] = [
                        'en' => 'Please scan SIM barcode that came in the same packaging as the QR code.',
                        'th' => 'กรุณาสแกนบาร์โค้ดบนซิมที่มาในซองเดียวกันกับคิวอาร์โคด',
                    ];
                }

                if ($index < $s_last) {
                    continue;
                }

                return response()->json($body, 400);
            }

            $content    = WeOmniService::getSimActivationData($s_type, $item_id);
            $tmp_result = json_decode($content[1], true);

            $body['tmp_check_result'][$step_name]            = $content;
            $body['tmp_check_result'][$step_name]['is_pass'] = true;
            $body['tmp_check_result'][$step_name]['body']    = $tmp_result;
            $body['tmp_check_result'][$step_name]['input']   = $item_id;

            if ($content[0] !== 200 || empty($tmp_result)) {
                $body['tmp_check_result'][$step_name]['is_pass'] = false;

                if ($method === 'input') {
                    $body['message'] = [
                        'en' => 'SIM Serial is invalid condition',
                        'th' => 'SIM Serial นี้ไม่เข้าเงื่อนไขการใช้งาน กรุณาใช้ SIM serial ที่เข้าเงื่อนไข',
                    ];
                } else {
                    $body['message'] = [
                        'en' => 'Please scan SIM barcode that came in the same packaging as the QR code.',
                        'th' => 'กรุณาสแกนบาร์โค้ดบนซิมที่มาในซองเดียวกันกับคิวอาร์โคด',
                    ];
                }

                if ($index < $s_last) {
                    continue;
                }

                return response()->json($body, 400);
            }

            $sim_type = $s_type;
            break;
        }

        $product_id        = array_get($tmp_result, '0.data.product_id');
        $nascode           = array_get($tmp_result, '0.data.nas_code');
        $priceplan         = array_get($tmp_result, '0.data.priceplan');
        $amdoc             = array_get($tmp_result, '0.data.amdoc');
        $sku               = array_get($tmp_result, '0.data.sku');
        $is_enabled_saleId = array_get($tmp_result, '0.data.is_enabled_saleId');

        $body['product_id']        = $product_id;
        $body['nascode']           = $nascode;
        $body['is_enabled_saleId'] = $is_enabled_saleId;
        $body['sim_type']          = $sim_type == 'POST' ? 'postpaid' : 'prepaid';

        $store_service = new \App\Services\StoreService();
        $redis_data = [
            'sim_type'     => $sim_type,
            'sim_serial'   => $sim_serial,
            'company_code' => $company_code,
            'nascode'      => $store_service->processGetExternalNasCodeByNasCode($nascode),
            'priceplan'    => $store_service->processGetExternalPricePlanCodeByPricePlanCode($priceplan),
            'amdoc'        => $amdoc,
            'product_id'   => $product_id,
            'sku'          => $sku,
            'msisdn_otp'   => $msisdn_otp,
            'type'         => $type,
            'group_type'   => $group_type,
            'dealer_code'  => $dealer_code,
        ];
        Redis::set('sim_activation:' . $correlation_id . ':redis_data', json_encode($redis_data, true), 'EX', 2 * 60 * 60);

        $body['is_pass'] = true;

        return response()->json($body);
    }

    public function postDeeplink(LaravelRequest $lrequest)
    {
        $rule = [
            'correlation_id' => 'required',
            'phone_no'       => 'required',
            'priceplan'      => 'required',
            'sale_id'        => 'nullable',
            'lang'           => 'required|in:TH,EN',
        ];

        $tmp_input = $lrequest->all();
        // convert input data to the one we can send
        $validator = Validator::make($tmp_input, $rule);
        if ($validator->fails()) {
            $errors = [
                'message' => [
                    'en'                => 'insufficient input',
                    'th'                => 'กรุณากรอกข้อมูลให้ครบถ้วน',
                    'error_from_system' => implode(',', $validator->errors()->all()),
                ],
            ];

            return response($errors, 400);
        }

        $correlation_id = $lrequest->input('correlation_id');
        $phone_no       = $lrequest->input('phone_no');
        $priceplan      = $lrequest->input('priceplan');
        $sale_id        = ($lrequest->input('sale_id') == null) ? "" : $lrequest->input('sale_id');
        $lang           = $lrequest->input('lang');

        $body['correlation_id'] = $correlation_id;
        $body['is_pass']        = false;

        $redis_data = SimActivationService::getRedis($correlation_id);
        if (empty($redis_data)) {
            $body['message'] = [
                'en' => 'Sorry, not found sim data.',
                'th' => 'ขออภัย ไม่พบข้อมูล sim',
            ];

            return response()->json($body, 400);
        }

        $msisdn = base64_encode($phone_no);

        // getDeeplink
        $step_name    = 'deeplink';
        $tmp_lrequest = [
            'correlation_id' => $correlation_id,
            'msisdn'         => $msisdn,
            'sim_serial'     => array_get($redis_data, 'sim_serial'),
            'priceplan'      => $priceplan,
            'sale_id'        => $sale_id,
            'offer'          => array_get($redis_data, 'amdoc'),
            'company_code'   => array_get($redis_data, 'company_code'),
            'lang'           => $lang,
            'dealer_code'    => array_get($redis_data, 'dealer_code'),
        ];
        $content    = SimActivationService::getDeeplink($tmp_lrequest);
        $tmp_result = json_decode($content[1], true);

        $body['tmp_check_result'][$step_name]            = $content;
        $body['tmp_check_result'][$step_name]['is_pass'] = true;
        $body['tmp_check_result'][$step_name]['body']    = $tmp_result;
        $body['tmp_check_result'][$step_name]['input']   = $tmp_lrequest;

        if ($content[0] !== 200) {
            $body['tmp_check_result'][$step_name]['is_pass'] = false;

            $body['message'] = [
                'en' => 'Sorry, cannot get deeplink.',
                'th' => 'ขออภัย ไม่สามารถเรียก deeplink ได้',
            ];

            return response()->json($body, 400);
        }

        $body['deeplink'] = array_get($tmp_result, 'deeplink');

        // createSim
        $step_name    = 'create_sim';
        $tmp_lrequest = [
            'correlation_id' => $correlation_id,
            'sim_serial'     => array_get($redis_data, 'sim_serial'),
            'msisdn'         => $msisdn,
        ];
        $content    = SimActivationService::createSim($tmp_lrequest);
        $tmp_result = json_decode($content[1], true);

        $body['tmp_check_result'][$step_name]            = $content;
        $body['tmp_check_result'][$step_name]['is_pass'] = true;
        $body['tmp_check_result'][$step_name]['body']    = $tmp_result;
        $body['tmp_check_result'][$step_name]['input']   = $tmp_lrequest;

        if ($content[0] !== 201) {
            $body['tmp_check_result'][$step_name]['is_pass'] = false;

            $body['message'] = [
                'en' => 'Sorry, this sim serial cannot be created.',
                'th' => 'ขออภัย sim serial นี้ไม่สามารถลงทะเบียนได้',
            ];

            return response()->json($body, 400);
        }

        Redis::del('sim_activation:' . $correlation_id . ':redis_data');
        $body['is_pass'] = true;

        return response()->json($body);
    }

    public function postCreateSim(LaravelRequest $lrequest)
    {
        $rule = [
            'correlation_id' => 'required',
            'phone_no'       => 'required',
        ];

        $tmp_input = $lrequest->all();
        // convert input data to the one we can send
        $validator = Validator::make($tmp_input, $rule);
        if ($validator->fails()) {
            $errors = [
                'message' => [
                    'en'                => 'insufficient input',
                    'th'                => 'กรุณากรอกข้อมูลให้ครบถ้วน',
                    'error_from_system' => implode(',', $validator->errors()->all()),
                ],
            ];

            return response($errors, 400);
        }

        $correlation_id = $lrequest->input('correlation_id');
        $phone_no       = $lrequest->input('phone_no');

        $body['correlation_id'] = $correlation_id;
        $body['is_pass']        = false;

        $redis_data = SimActivationService::getRedis($correlation_id);
        if (empty($redis_data)) {
            $body['message'] = [
                'en' => 'Sorry, not found sim data.',
                'th' => 'ขออภัย ไม่พบข้อมูล sim',
            ];

            return response()->json($body, 400);
        }

        $msisdn = base64_encode($phone_no);

        // createSim
        $step_name    = 'create_sim';
        $tmp_lrequest = [
            'correlation_id' => $correlation_id,
            'sim_serial'     => array_get($redis_data, 'sim_serial'),
            'msisdn'         => $msisdn,
        ];
        $content    = SimActivationService::createSim($tmp_lrequest);
        $tmp_result = json_decode($content[1], true);

        $body['tmp_check_result'][$step_name]            = $content;
        $body['tmp_check_result'][$step_name]['is_pass'] = true;
        $body['tmp_check_result'][$step_name]['body']    = $tmp_result;
        $body['tmp_check_result'][$step_name]['input']   = $tmp_lrequest;

        $body['is_pass'] = true;

        $redis_data['phone_no'] = $phone_no;
        Redis::set('sim_activation:' . $correlation_id . ':redis_data', json_encode($redis_data, true), 'EX', 2 * 60 * 60);

        return response()->json($body);
    }

    public function postSubmit(LaravelRequest $lrequest)
    {
        $rule = [
            'correlation_id' => 'required',
            'ekyc_hash'      => 'required',
        ];

        $tmp_input = $lrequest->all();
        // convert input data to the one we can send
        $validator = Validator::make($tmp_input, $rule);
        if ($validator->fails()) {
            $errors = [
                'message' => [
                    'en'                => 'insufficient input',
                    'th'                => 'กรุณากรอกข้อมูลให้ครบถ้วน',
                    'error_from_system' => implode(',', $validator->errors()->all()),
                ],
            ];

            return response($errors, 400);
        }

        $correlation_id = $lrequest->input('correlation_id');

        $body['correlation_id'] = $correlation_id;
        $body['is_pass']        = false;

        $redis_data = SimActivationService::getRedis($correlation_id);
        if (empty($redis_data)) {
            $body['message'] = [
                'en' => 'Sorry, not found sim data.',
                'th' => 'ขออภัย ไม่พบข้อมูล sim',
            ];

            return response()->json($body, 400);
        }

        $phone_no   = array_get($redis_data, 'phone_no');
        $sim_type   = array_get($redis_data, 'sim_type');
        $sim_serial = array_get($redis_data, 'sim_serial');

        // get ekyc data from redis
        $step_name = 'ekyc_redis';

        $ekyc_hash = $lrequest->input('ekyc_hash');
        $ekyc_data = CreditokService::getStatus($lrequest, $ekyc_hash);
        if ($ekyc_data[0] !== 200) {
            $body['tmp_check_result']['is_pass'] = false;

            $body['message'] = [
                'en' => 'Not found ekyc data',
                'th' => 'ไม่พบข้อมูล ekyc',
            ];

            return response()->json($body, 400);
        }
        $ekyc_data = array_get($ekyc_data, 1);

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

        // validate
        $step_name = 'validate';

        $tmp_lrequest = [
            'correlation_id'  => $correlation_id,
            'sim_serial'      => $sim_serial,
            'sim_type'        => $sim_type,
            'dealer_code'     => array_get($redis_data, 'dealer_code'),
            'subscriber_info' => [
                'company_code' => array_get($redis_data, 'company_code'),
                'proposition'  => array_get($redis_data, 'nascode'),
            ],
            'customer_info'   => [
                'identification' => $id_number,
                'birth_date'     => $birth_day,
            ],
        ];
        $content    = SimActivationService::validate($tmp_lrequest);
        $tmp_result = json_decode($content[1], true);

        $body['tmp_check_result'][$step_name]            = $content;
        $body['tmp_check_result'][$step_name]['is_pass'] = true;
        $body['tmp_check_result'][$step_name]['body']    = $tmp_result;
        $body['tmp_check_result'][$step_name]['input']   = $tmp_lrequest;

        $code = array_get($tmp_result, 'code');
        if ($content[0] !== 200 || $code !== '200') {
            $body['tmp_check_result']['is_pass'] = false;

            $body['message'] = [
                'en' => 'Sorry, this data is invalid.',
                'th' => 'ขออภัย ข้อมูลไม่ถูกต้อง',
            ];

            return response()->json($body, 400);
        }

        // submit sim
        $step_name = 'submit_sim';

        $tmp_lrequest = [
            'correlation_id'          => $correlation_id,
            'dealer_code'             => array_get($redis_data, 'dealer_code'),
            'sim_serial'              => array_get($redis_data, 'sim_serial'),
            'subscriber_number'       => $phone_no,
            'priceplan'               => array_get($redis_data, 'priceplan'),
            'proposition'             => array_get($redis_data, 'amdoc'),
            'company_code'            => array_get($redis_data, 'company_code'),
            'kyc_image'               => array_get($ekyc_data, 'image_liveness'),
            'id_number'               => $id_number,
            'identification_exp_date' => array_get($customer_info, 'identification_exp_date'),
            'birthday'                => date('Y-m-d\TH:i:s\Z', strtotime(str_replace('/', '-', $birth_day))),
            'first_name'              => array_get($customer_info, 'first_name'),
            'last_name'               => array_get($customer_info, 'last_name'),
            'street_name'             => '-',
            'amphur'                  => array_get($customer_info, 'amphur'),
            'city'                    => array_get($customer_info, 'city'),
            'house_no'                => array_get($customer_info, 'house_no'),
            'tumbon'                  => array_get($customer_info, 'tumbon'),
            'zip_code'                => array_get($customer_info, 'zip_code'),
        ];

        $content    = SimActivationService::submit($tmp_lrequest);
        $tmp_result = json_decode($content[1], true);

        $body['tmp_check_result'][$step_name]            = $content;
        $body['tmp_check_result'][$step_name]['is_pass'] = true;
        $body['tmp_check_result'][$step_name]['body']    = $tmp_result;
        $body['tmp_check_result'][$step_name]['input']   = $tmp_lrequest;

        $code = array_get($tmp_result, 'code');
        if ($content[0] !== 200 || $code !== '200') {
            $body['tmp_check_result']['is_pass'] = false;

            $body['message'] = [
                'en' => 'Sorry, this sim serial cannot be submited.',
                'th' => 'ขออภัย sim serial นี้ไม่สามารถยืนยันได้',
            ];

            return response()->json($body, 400);
        }

        // mark use sim
        $step_name = 'mark_use_sim';

        $tmp_lrequest = [
            'msisdn_otp'    => array_get($redis_data, 'msisdn_otp'),
            'type'          => array_get($redis_data, 'type'),
            'group_type'    => array_get($redis_data, 'group_type'),
            'sku'           => array_get($redis_data, 'sku'),
            'product_id'    => array_get($redis_data, 'product_id'),
            'order_id'      => array_get($redis_data, 'order_id'),
            'thai_id'       => $id_number,
            'activated_sim' => $phone_no,
            'action'        => 'activate',
            'channel'       => '1.0.0',
        ];
        $content    = SimActivationService::markUseSim($tmp_lrequest);
        $tmp_result = json_decode($content[1], true);

        $body['tmp_check_result'][$step_name]            = $content;
        $body['tmp_check_result'][$step_name]['is_pass'] = true;
        $body['tmp_check_result'][$step_name]['body']    = $tmp_result;
        $body['tmp_check_result'][$step_name]['input']   = $tmp_lrequest;

        // update sim
        $step_name = 'update_sim';

        $msisdn = base64_encode($phone_no);

        $tmp_lrequest = [
            'correlation_id' => $correlation_id,
            'sim_serial'     => array_get($redis_data, 'sim_serial'),
            'msisdn'         => $msisdn,
        ];
        $content    = SimActivationService::updateSim($tmp_lrequest);
        $tmp_result = json_decode($content[1], true);

        $body['tmp_check_result'][$step_name]            = $content;
        $body['tmp_check_result'][$step_name]['is_pass'] = true;
        $body['tmp_check_result'][$step_name]['body']    = $tmp_result;
        $body['tmp_check_result'][$step_name]['input']   = $tmp_lrequest;

        Redis::del('sim_activation:' . $correlation_id . ':redis_data');
        $body['is_pass']           = true;
        $body['subscriber_number'] = $phone_no;
        $body['id_number']         = $id_number;

        return response()->json($body);
    }

    public function postPostpaidVerify(LaravelRequest $lrequest)
    {
        $response_data = SimActivationService::postPostpaidVerify($lrequest->post(), $lrequest);
        $content       = [\Arr::get($response_data, 'code'), \Arr::get($response_data, 'response')];

        $controller_result = $this->processAPIController($content, $lrequest, "sim-activation/postpaid/verify");

        $action_log_content                         = [];
        $action_log_content["content_src"]          = $content;
        $action_log_content["content_intermediate"] = $response_data;
        $action_log_content["content_processed"]    = json_decode($controller_result->content(), true);
        $tmp_action_log_data                        = self::postIOActionLog(__METHOD__, $lrequest, $action_log_content);

        return $controller_result;
    }

    public function postIOActionLog($magic_function_method_name, $lrequest, $content)
    {
        $message_id      = Str::uuid()->toString();
        $log_message_str = "message_id = $message_id, $magic_function_method_name input: " . json_encode_unicode($lrequest->all()) . ", $magic_function_method_name result: " . json_encode_unicode(["content" => $content]);
        LogService::writeActionLog($lrequest, $log_message_str);

        return [$message_id];
    }
}
