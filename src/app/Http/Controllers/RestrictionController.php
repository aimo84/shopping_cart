<?php
namespace App\Http\Controllers;

use App\Http\Controllers\ApiParentController;
use App\Services\RestrictionService;
use App\Services\WlsService;
use Illuminate\Http\Request as LaravelRequest;
use Illuminate\Support\Facades\Validator;

class RestrictionController extends ApiParentController
{
    public function postVerify(LaravelRequest $lrequest)
    {
        #region pre-step
        $rule = [
            'cart_hash'   => 'required',
            'id_number'   => 'required',
            'product_id'  => 'required',
            'product_sku' => 'required',
            'g_recaptcha' => 'required|captcha'
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

        $cart_hash   = $lrequest->input('cart_hash');
        $id_number   = $lrequest->input('id_number');
        $product_id  = $lrequest->input('product_id');
        $product_sku = $lrequest->input('product_sku');

        $body['is_pass']                   = false;
        $body['cart_hash']                 = $cart_hash;
        $body['tmp_check_result']['input'] = $lrequest->all();
        #endregion

        #region validate restriction
        $step_name = 'restriction';

        $pwd          = env("PWD_ENCRYPT_FUNCTION_DEVICE_BUNDLE");
        $tmp_lrequest = [
            'thai_id'    => WlsService::postEncryptDeviceBundle($pwd, $id_number),
            'product_id' => $product_id,
            'quantity'   => 1,
        ];

        $content    = RestrictionService::validate($tmp_lrequest);
        $tmp_result = json_decode($content[1], true);

        $body['tmp_check_result'][$step_name]            = $content;
        $body['tmp_check_result'][$step_name]['is_pass'] = true;
        $body['tmp_check_result'][$step_name]['body']    = $tmp_result;
        $body['tmp_check_result'][$step_name]['input']   = $tmp_lrequest;

        $code = array_get($tmp_result, 'code');
        if ($content[0] !== 200 || $code !== 200) {
            $body['tmp_check_result'][$step_name]['is_pass'] = false;

            $body['error_message'] = [
                'en' => 'not pass because of restrictions check',
                'th' => 'ไม่ผ่านเนื่องจากการตรวจสอบ restrictions',
            ];
            $body['message'] = [
                'en' => 'Sorry, this ID card has been granted this privilege.',
                'th' => 'ขออภัย หมายเลขบัตรประชนนี้ได้รับสิทธิพิเศษนี้ไปแล้ว',
            ];

            return response()->json($body, 400);
        }
        #endregion
        $body['is_pass'] = true;

        // save to redis for 3 hours
        $tmp_lrequest['product_type']           = 'restriction';
        $tmp_lrequest['product_code']           = $product_sku;
        $privilege_placeorder['passed_input'][] = $tmp_lrequest;
        WlsService::setRedisPrivilegePlaceorder($privilege_placeorder, $cart_hash, $product_id, 0);

        return response()->json($body, 200);
    }
}
