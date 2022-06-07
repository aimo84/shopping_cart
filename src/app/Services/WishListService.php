<?php

namespace App\Services;

use App\Libraries\RequestData\WishListRequest;
use UnexpectedValueException;

class WishListService
{
    public function getWishList($input): array
    {
        $request = new WishListRequest();
        $request->setRequestGetWishList($input);
        [$status_code, $result] = $this->curlGetWishList($request->getRequest());
        $product_id = array_get($request->getRequest(), 'product_id');
        $products = array_get($result, 'data.products');
        if ($products && $product_id) {
            $result['data']['products'] = array_filter($products, function ($key) use ($product_id) {
                return ($key === $product_id);
            }, ARRAY_FILTER_USE_KEY);
        }
        return ['response' => $result, 'code' => $status_code];
    }

    public function curlGetWishList($request): array
    {
        $curl_request = new \Illuminate\Http\Request();
        $curl_request->setMethod('GET');

        $curl_request->replace($request);
        $header = [
            "x-api-auth"   => env('X_API_AUTH', false),
        ];
        $content = GuzzleService::postGuzzleRequest(
            'account-app/wish-list',
            'GET',
            $curl_request,
            $header,
            env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
        );

        $content_code = array_get($content, 0, 400);
        $content_data = json_decode(array_get($content, 1, '{}'), true);

        return [$content_code, $content_data];
    }

    public function createWishList($input): array
    {
        $request = new WishListRequest();
        $request->setRequestCreateWishList($input);
        [$status_code, $result] = $this->curlCreateWishList($request->getRequest());
        if (array_get($result, 'status_code') !== 0 || empty(array_get($result, 'data'))) {
            throw new UnexpectedValueException('Create wish list error', 422);
        }
        return ['response' => ['data' => true], 'code' => $status_code];
    }

    public function curlCreateWishList($request): array
    {
        $curl_request = new \Illuminate\Http\Request();
        $curl_request->setMethod('GET');

        $curl_request->replace($request);
        $header = [
            "Content-Type" => "application/x-www-form-urlencoded",
            "x-api-auth"   => env('X_API_AUTH', false),
        ];
        $content = GuzzleService::postGuzzleRequest(
            'account-app/wish-list',
            'POST',
            $curl_request,
            $header,
            env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
        );

        $content_code = array_get($content, 0, 400);
        $content_data = json_decode(array_get($content, 1, '{}'), true);

        return [$content_code, $content_data];
    }

    public function deleteWishList($input): array
    {
        $request = new WishListRequest();
        $request->setRequestDeleteWishList($input);
        [$status_code, $result] = $this->curlDeleteWishList($request->getRequest());
        if (array_get($result, 'status_code') !== 0 || empty(array_get($result, 'data'))) {
            throw new UnexpectedValueException("Delete wish list error", 422);
        }
        return ['response' => ['data' => true], 'code' => $status_code];
    }

    public function curlDeleteWishList($request): array
    {
        $curl_request = new \Illuminate\Http\Request();
        $curl_request->setMethod('GET');

        $curl_request->replace($request);
        $header = [
            "Content-Type" => "application/x-www-form-urlencoded",
            "x-api-auth"   => env('X_API_AUTH', false),
        ];
        $content = GuzzleService::postGuzzleRequest(
            'account-app/wish-list',
            'DELETE',
            $curl_request,
            $header,
            env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
        );

        $content_code = array_get($content, 0, 400);
        $content_data = json_decode(array_get($content, 1, '{}'), true);

        return [$content_code, $content_data];
    }
}
