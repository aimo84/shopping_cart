<?php
namespace App\Services;

class TrueSdkService
{

    public static function fetchTrueidBodyPost($url, $method, $lrequest, $header)
    {
        $request_token = new \Illuminate\Http\Request();
        $request_token->setMethod('POST');
        $request_token_parameter = [];
        $payload                 = $lrequest->post();
        foreach ($payload as $key => $value) {
            $request_token_parameter[$key] = $value;
        }
        $request_token_parameter['client_id']     = env('TOKEN_CLIENT_ID', false);
        $request_token_parameter['client_secret'] = env('TOKEN_CLIENT_SECRET', false);
        $request_token_parameter['device_id']     = 'UNKNOWN';
        $request_token_parameter['device_model']  = 'UNKNOWN';
        $request_token_parameter['latlong']       = '0,0';
        $request_token_parameter['ip_address']    = '199.0.0.1';

        if (!$request_token_parameter['client_id'] || !$request_token_parameter['client_secret']) {
            $status_code = 500;
            $body        = 'token_client_id or token_client_secret is not set';

            return ['is_get_token' => false, 'message' => $body];
        }

        if (isset($request_token_parameter["refresh_token"])) {
            $request_token_parameter['grant_type'] = 'refresh_token';
        } else {
            $request_token_parameter['grant_type'] = 'authorization_code';
        }

        $request_token->replace($request_token_parameter);
        $content = GuzzleService::postGuzzleRequest(
            $url,
            $method,
            $request_token,
            [],
            env('TRUESDK_ENDPOINT', 'https://iam.trueid-preprod.net/auth/v4/')
        ); // true id api

        return $content;
    }

}
