<?php
namespace App\Services;
use App\Facades\PaymentMethodService;

class CouponService
{
    public static function getCouponByProductId($product_id_list_str, $page_site = '')
    {
        $tmp_header  = TolSelfService::getHeader('application/json');
        $current_url = "/coupon/product";

        $tmp_fixed_parameter_list["id"]        = $product_id_list_str;
        $tmp_fixed_parameter_list["page_site"] = $page_site;
        $tmp_fixed_parameter_list["section"]   = "wemall";
        $tmp_fixed_parameter_list["channel"]   = "tmh-website";
        $tmp_fixed_parameter_list["base_url"]  = env('AWS_GATEWAY_URL_TOL_SSV', false);
        $tmp_lrequest                          = new \Illuminate\Http\Request();
        $tmp_lrequest->replace($tmp_fixed_parameter_list);
        $tmp_content_get_coupon_by_product_id = WlsService::operateRequestAction(
            $current_url, "get", new \Illuminate\Http\Request(), $tmp_header, $tmp_fixed_parameter_list);

        return json_decode($tmp_content_get_coupon_by_product_id[1], true);
    }

    public static function getCouponCheckCode($coupon_code, $payment_channel, $store_id)
    {
        $tmp_header  = TolSelfService::getHeader('application/json');
        $current_url = "/coupon/check/" . $coupon_code;

        $tmp_fixed_parameter_list["payment_channel"] = PaymentMethodService::switchPaymentMethod($payment_channel, $store_id);
        $tmp_fixed_parameter_list["section"]         = "wemall";
        $tmp_fixed_parameter_list["channel"]         = "tmh-website";
        $tmp_fixed_parameter_list["base_url"]        = env('AWS_GATEWAY_URL_TOL_SSV', false);
        $tmp_lrequest                                = new \Illuminate\Http\Request();
        $tmp_lrequest->replace($tmp_fixed_parameter_list);
        $tmp_content_get_coupon_code = WlsService::operateRequestAction(
            $current_url, "get", new \Illuminate\Http\Request(), $tmp_header, $tmp_fixed_parameter_list);

        if (isset(json_decode($tmp_content_get_coupon_code[1], true)["data"]["record"])) {
            $tmp = $tmp_content_get_coupon_code[1];
            $tmp = json_decode($tmp, true);

            if (isset($tmp["data"]["record"]["created_by"])) {
                unset($tmp["data"]["record"]["created_by"]);
            }
            if (isset($tmp["data"]["record"]["updated_by"])) {
                unset($tmp["data"]["record"]["updated_by"]);
            }

            $tmp                            = json_encode($tmp);
            $tmp_content_get_coupon_code[1] = $tmp;
        }

        return json_decode($tmp_content_get_coupon_code[1], true);
    }

    public static function getErrorMessageByCode($error_code)
    {
        if (isset(ErrorMessageService::getErrorMessageCouponArray()[$error_code])) {
            return ErrorMessageService::getErrorMessageCouponArray()[$error_code];
        }

        return [
            "th" => "กรุณาใส่โค้ดส่วนลดที่ถูกต้อง",
            "en" => "Please enter a correct code.",
        ];
    }

    public static function postCouponStamp($tmp_lrequest)
    {
        $current_url = "/coupon/stamp";

        $method                 = 'POST';
        $header                 = TolSelfService::getHeader('application/json');
        $header["Content-Type"] = "application/x-www-form-urlencoded";

        $fixed_parameter_list["base_url"] = env("AWS_GATEWAY_URL_TOL_SSV", false);

        $result = WlsService::operateRequestAction($current_url, $method, $tmp_lrequest, $header, $fixed_parameter_list);

        return $result;
    }
}
