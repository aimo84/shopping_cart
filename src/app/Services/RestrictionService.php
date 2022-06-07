<?php
namespace App\Services;

class RestrictionService
{
    public static function validate($body)
    {
        $header = [
            "Content-Type" => "application/json",
            "x-api-key"    => env("X_API_KEY_TOL_SSV", false),
        ];

        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod('POST');
        $tmp_lrequest = [
            'thai_id'    => array_get($body, 'thai_id'),
            'product_id' => array_get($body, 'product_id'),
            'quantity'   => array_get($body, 'quantity'),
            'channel'    => 'tmh-website',
        ];
        $lrequest->replace($tmp_lrequest);

        $content = GuzzleService::postGuzzleRequest(
            'restrictions/validate',
            'post',
            $lrequest,
            $header,
            env("AWS_GATEWAY_URL_TOL_SSV", false) . "/"
        );
        LogService::writeServiceLog(
            "verify_restrictions",
            json_encode_unicode($lrequest->all()),
            json_encode_unicode($content),
            (new \DateTime())->format('d/m/Y H:i:s')
        );

        $tmp_decoded_content = json_decode($content[1], true);
        if (isset($content[1]) && isset($tmp_decoded_content["data"]["message"])) {
            $tmp_decoded_content["message"] = [
                "en" => $tmp_decoded_content["data"]["message"],
                "th" => $tmp_decoded_content["data"]["message"],
            ];
            $content[1] = json_encode($tmp_decoded_content);
        }

        return $content;
    }
}
