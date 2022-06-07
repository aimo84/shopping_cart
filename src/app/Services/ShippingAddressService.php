<?php
namespace App\Services;

use App\Services\LogService;
use Exception;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class ShippingAddressService
{
    public static function create($user_id, $lrequest)
    {
        $request_token = new \Illuminate\Http\Request();
        $request_token->setMethod('POST');
        $method = "POST";
        $url = "/accounts/user/{$user_id}/address";
        $request_token_parameter = [];
        $payload                 = $lrequest->post();
        foreach ($payload as $key => $value) {
          $request_token_parameter[$key] = $value;
        }
        $request_token_parameter['user_id']     = $user_id;
        $request_token->replace($request_token_parameter);

        $header = [
          "Content-Type" => "application/json",
          "x-api-auth"   => env('X_API_AUTH_SHIP_ADDR', false),
        ];
        if (!$header['x-api-auth']) {
          $status_code = 500;
          $body        = 'wemall X_API_AUTH is not set';

          return ['is_get_token' => false, 'message' => $body];
        }
        $content = GuzzleService::postGuzzleRequest(
          $url,
          $method,
          $request_token,
          $header,
          env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
        ); // wemall api

        $response['status_code'] = $content[0];
        $wemall_res = json_decode($content[1], true);

        if ($content[0] <= 200) {
          $response = $wemall_res;
          if (\Arr::get($wemall_res, 'data.address_default', 0) == 1) {
            $request_update = new \Illuminate\Http\Request();
            $request_update->request->add([ 'is_truestore' => 1 ]);
            $response['update_default'] = self::update($user_id, $wemall_res['data']['id'], $request_update);
            $response['update_default_req'] = $request_update;
          }
        } else {
          $response['error_message'] = \Arr::get($content, '2.error', '');
        }

        return $response;
    }

    public static function getAll($user_id, $params = [])
    {
        $request_token = new \Illuminate\Http\Request();
        $request_token->setMethod('GET');
        $method = "GET";
        $url = "/accounts/user/{$user_id}/address";

        $header = [
          "Content-Type" => "application/json",
          "x-api-auth"   => env('X_API_AUTH_SHIP_ADDR', false),
        ];

        if (!$header['x-api-auth']) {
          $status_code = 500;
          $body        = 'wemall X_API_AUTH is not set';

          return ['is_get_token' => false, 'message' => $body];
        }
        
        $content = GuzzleService::postGuzzleRequest(
          $url,
          $method,
          $request_token,
          $header,
          env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
        );

        $response['status_code'] = $content[0];
        $wemall_res = json_decode($content[1], true);

        if ($content[0] <= 200) {
          $response['data']['pagination'] = \Arr::get($wemall_res, 'data.pagination', null);
          $response['data']['record'] = \Arr::get($wemall_res, 'data.record', null);
        } else {
          $response['error_message'] = \Arr::get($content, '2.error', '');
        }

        return $response;
    }

    public static function update($user_id, $address_id, $lrequest)
    {
        $request_token = new \Illuminate\Http\Request();
        $request_token->setMethod('PUT');
        $method = "PUT";
        $url = "/accounts/user/{$user_id}/address/{$address_id}/default";
        $request_token_parameter = [];
        $payload                 = $lrequest->post();
        foreach ($payload as $key => $value) {
          $request_token_parameter[$key] = $value;
        }
        $request_token_parameter['user_id']     = $user_id;
        $request_token->replace($request_token_parameter);

        $header = [
          "Content-Type" => "application/json",
          "x-api-auth"   => env('X_API_AUTH_SHIP_ADDR', false),
        ];
        if (!$header['x-api-auth']) {
          $status_code = 500;
          $body        = 'wemall X_API_AUTH is not set';

          return ['is_get_token' => false, 'message' => $body];
        }
        $content = GuzzleService::postGuzzleRequest(
          $url,
          $method,
          $request_token,
          $header,
          env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
        ); // wemall api

        $response['status_code'] = $content[0];
        $wemall_res = json_decode($content[1], true);

        if ($content[0] <= 200) {
          $response = $wemall_res;
        } else {
          $response['error_message'] = \Arr::get($content, '2.error', '');
        }

        return $response;
    }

    public static function delete($user_id, $address_id)
    {
        $request_token = new \Illuminate\Http\Request();
        $request_token->setMethod('PUT');
        $method = "DELETE";
        $url = "/accounts/user/{$user_id}/address/{$address_id}";
        $request_token_parameter = [];
        $request_token_parameter['user_id']     = $user_id;
        $request_token->replace($request_token_parameter);

        $header = [
          "Content-Type" => "application/json",
          "x-api-auth"   => env('X_API_AUTH_SHIP_ADDR', false),
        ];
        if (!$header['x-api-auth']) {
          $status_code = 500;
          $body        = 'wemall X_API_AUTH is not set';

          return ['is_get_token' => false, 'message' => $body];
        }
        $content = GuzzleService::postGuzzleRequest(
          $url,
          $method,
          $request_token,
          $header,
          env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
        ); // wemall api

        $response['status_code'] = $content[0];
        $wemall_res = json_decode($content[1], true);

        if ($content[0] <= 200) {
          $response = $wemall_res;
        } else {
          $response['error_message'] = \Arr::get($content, 'status_txt', '');
        }

        return $response;
    }

}
