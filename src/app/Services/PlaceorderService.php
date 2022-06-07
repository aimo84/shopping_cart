<?php
namespace App\Services;

use Illuminate\Support\Arr;
use App\Facades\PaymentMethodService;

class PlaceorderService
{
    public static function getPreEkycPlaceorder($lrequest, $ekyc_hash)
    {
        // do things
        return [200, ["message" => ["en" => "stop", "th" => "stop"]]];
    }

    public static function postPlaceorderWls($lrequest, $ekyc_hash)
    {
        // do things
        return [200, ["message" => ["en" => "stop", "th" => "stop"]]];
    }

    public static function postPlaceorderWls_2($url, $method, $lrequest, $header)
    {
        //var_dump(["postPlaceorderWls_2", $url, $method, $lrequest->all(), $header]);
        $tmp_lrequest                             = $lrequest->all();
        $payment_method                           = PaymentMethodService::switchPaymentMethod(Arr::get($tmp_lrequest, 'payment_detail.method'), Arr::get($tmp_lrequest, 'products.0.store_id'));
        $payment_method                           = PaymentMethodService::switchPaymentMethodByGateway($tmp_lrequest, $payment_method);
        $tmp_lrequest['payment_detail']['method'] = (string) $payment_method;
        $lrequest->replace($tmp_lrequest);

        $url                    = "order/process/placeorder";
        $header["x-api-auth"]   = env('X_API_AUTH', false);
        $header["Content-Type"] = "application/json";
        $content                = GuzzleService::postGuzzleRequest(
            $url,
            $method,
            $lrequest,
            $header,
            env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
        );

        return $content;
    }
}
