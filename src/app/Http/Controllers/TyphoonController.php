<?php
namespace App\Http\Controllers;

use App\Http\Controllers\ApiParentController;
use App\Services\LogService;
use App\Services\TyphoonService;
use Illuminate\Http\Request as LaravelRequest;
use Illuminate\Support\Str;
use Redis;

class TyphoonController extends ApiParentController
{
    public function postIOActionLog($magic_function_method_name, $lrequest, $content)
    {
        $message_id      = Str::uuid()->toString();
        $log_message_str = "message_id = $message_id, $magic_function_method_name input: " . json_encode_unicode($lrequest->all()) . ", $magic_function_method_name result: " . json_encode_unicode(["content" => $content]);
        LogService::writeActionLog($lrequest, $log_message_str);

        return [$message_id];
    }

    public function putEntPack(LaravelRequest $lrequest)
    {
        $final_response      = TyphoonService::putEntPack($lrequest);
        $tmp_action_log_data = self::postIOActionLog(__METHOD__, $lrequest, $final_response);

        return $this->processAPIController($final_response, $lrequest, "typhoon");
    }

    public function putEntPackPlaceorder(LaravelRequest $lrequest)
    {
        $final_response      = TyphoonService::putEntPackPlaceorder($lrequest);
        $tmp_action_log_data = self::postIOActionLog(__METHOD__, $lrequest, $final_response);

        return $this->processAPIController($final_response, $lrequest, "typhoon/placeorder");
    }

    public function postEntPackPlaceorder(LaravelRequest $lrequest)
    {
        $matcode   = $lrequest->input('matcode');
        $cart_hash = $lrequest->input('cart_hash');

        // find ent pack name from redis
        $ent_pack_cart = Redis::get('truestore:ent_pack_cart:' . $cart_hash . ':content');
        if (empty($ent_pack_cart)) {
            return response()->json([
                'message' => [
                    'en' => 'Not found entertainment packages',
                    'th' => 'ไม่พบข้อมูลแพ็คเกจความบันเทิง',
                ],
                'is_pass' => false,
            ], 404);
        }
        $ent_pack_cart = json_decode($ent_pack_cart, true);

        // get placeorder detail from redis to send place order ent pack
        $placeorder_detail = Redis::get('placeorder_detail:' . $cart_hash);
        if (empty($placeorder_detail)) {
            return response()->json([
                'message' => [
                    'en' => 'Not found placeorder detail',
                    'th' => 'ไม่พบข้อมูลการสั่งซื้อ',
                ],
                'is_pass' => false,
            ], 404);
        }
        $placeorder_detail = json_decode($placeorder_detail, true);

        $entertainment_package = array_get($ent_pack_cart, 'entertainment_package_data');
        if (!empty($matcode) && $matcode !== array_get($entertainment_package, 'matcode')) {
            return response()->json([
                'message' => [
                    'en' => 'Not found selected entertainment package',
                    'th' => 'ไม่พบข้อมูลแพ็คเกจความบันเทิงที่เลือก',
                ],
                'is_pass' => false,
            ], 404);
        }
        $secure_key     = array_get($placeorder_detail, 'order_id');
        $mobile_number  = array_get($placeorder_detail, 'mobile_no');
        $package_detail = [
            'package_name'      => array_get($entertainment_package, 'name'),
            'package_image_url' => array_get($entertainment_package, 'image_url'),
            'package_matcode'   => array_get($entertainment_package, 'matcode'),
            'package_option'    => array_get($entertainment_package, 'option'),
            'package_code'      => array_get($entertainment_package, 'package_code'),
        ];
        $mnp_mobile_number = array_get($placeorder_detail, 'mnp_mobile_no', '-');
        $new_mobile_number = array_get($placeorder_detail, 'new_mobile_number', '-');

        $original_plaintext = explode('|', array_get($ent_pack_cart, 'original_plaintext', '|||'));

        $token_type       = array_get($ent_pack_cart, 'cart_type');
        $token_group_type = array_get($ent_pack_cart, 'type');
        // end of get token_type, token_group_type to placeorder typhoon request

        self::postIOActionLog(__METHOD__ . ' input_before_action', $lrequest, ['parameters' => [$secure_key, $mobile_number, $package_detail, $mnp_mobile_number, $new_mobile_number, $token_type, $token_group_type]]);
        $response = TyphoonService::entPackPlaceorder($secure_key, $mobile_number, $package_detail, $mnp_mobile_number, $new_mobile_number, $token_type, $token_group_type);
        self::postIOActionLog(__METHOD__ . ' output_after_action', $lrequest, $response);
        if ($response[0] !== 201) {
            return response()->json([
                'message'  => [
                    'en' => 'Cannot place entertainment package order',
                    'th' => 'ไม่สามารถสั่งซื้อแพ็คเกจความบันเทิงได้',
                ],
                'is_pass'  => false,
                'response' => $response,
            ], 400);
        }

        // send mobile number (from egg token) to mark use
        $markuse_parameters = [
            'msisdn_otp' => array_get($original_plaintext, '0'),
            'msisdn'     => array_get($original_plaintext, '0'),
            'type'       => $token_type,
            'group_type' => $token_group_type,
            'sku'        => array_get($placeorder_detail, 'sku'),
            'product_id' => array_get($placeorder_detail, 'product_id'),
            'order_id'   => array_get($placeorder_detail, 'order_id'),
        ];
        self::postIOActionLog(__METHOD__ . ' input_before_action', $lrequest, ['parameters' => $markuse_parameters]);
        $markuse_response = TyphoonService::markUse($markuse_parameters);
        self::postIOActionLog(__METHOD__ . ' output_after_action', $lrequest, $markuse_response);

        return response()->json([
            'message'  => [
                'en' => 'placeorder successful',
                'th' => 'ส่งคำสั่งซื้อเรียบร้อยแล้ว',
            ],
            'is_pass'  => true,
            'response' => empty($response) ? $markuse_response : $response,
        ], 200);
    }
}
