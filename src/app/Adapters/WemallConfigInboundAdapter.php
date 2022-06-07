<?php

namespace App\Adapters;

use App\Services\GuzzleService;
use Illuminate\Support\Arr;

class WemallConfigInboundAdapter
{
    /**
     * @return array
     */
    private function queryConfig(): array
    {
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod('GET');
        $lrequest->replace(['key' => 'payment_channel', 'section' => 'wemall']);

        $url = 'wportal/settings';
        $result = [];
        $header["Content-Type"] = "application/json";
        $header["x-api-auth"]   = env('X_API_AUTH_VLEARN_VERIFY', false);

        $baseUrl = env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/');

        $response = GuzzleService::postGuzzleRequest($url, 'GET', $lrequest, $header, $baseUrl);
        if (Arr::get($response, 0) === 200) {
            $result = json_decode(Arr::get($response, 1), true);
        }

        return $result;
    }

    /**
     * @return array
     */
    public function getConfig(): array
    {
        $wemall_config = $this->queryConfig();

        $transformedData = [
            "ew" => [
                "config" => Arr::get($wemall_config, 'data.record.0.configuration.EW', false),
                "limit" => Arr::get($wemall_config, 'data.record.0.limit.EW', 0)
            ],
            "paynext" => [
                "config" => Arr::get($wemall_config, 'data.record.0.configuration.P2C2PPAYNEXT', false),
                "limit" => Arr::get($wemall_config, 'data.record.0.limit.P2C2PPAYNEXT', 0)
            ],
            "weomniew" => [
                "config" => Arr::get($wemall_config, 'data.record.0.configuration.WEOMNIEW', false),
                "limit" => Arr::get($wemall_config, 'data.record.0.limit.WEOMNIEW', 0)
            ],
            "ccp" => [
                "config" => Arr::get($wemall_config, 'data.record.0.configuration.CCP', false),
                "limit" => Arr::get($wemall_config, 'data.record.0.limit.CCP', 0)
            ],
            "cs" => [
                "config" => Arr::get($wemall_config, 'data.record.0.configuration.CS', false),
                "limit" => Arr::get($wemall_config, 'data.record.0.limit.CS', 0)
            ],
            "instm" => [
                "config" => Arr::get($wemall_config, 'data.record.0.configuration.INSTM', false),
                "limit" => Arr::get($wemall_config, 'data.record.0.limit.INSTM', 0)
            ],
            "weomniinstm" => [
                "config" => Arr::get($wemall_config, 'data.record.0.configuration.WEOMNIINSTM', false),
                "limit" => Arr::get($wemall_config, 'data.record.0.limit.WEOMNIINSTM', 0)
            ],
            "ccw" => [
                "config" => Arr::get($wemall_config, 'data.record.0.configuration.CCW', false),
                "limit" => Arr::get($wemall_config, 'data.record.0.limit.CCW', 0)
            ],
            "weomniccw" => [
                "config" => Arr::get($wemall_config, 'data.record.0.configuration.WEOMNICCW', false),
                "limit" => Arr::get($wemall_config, 'data.record.0.limit.WEOMNICCW', 0)
            ],
            "cod" => [
                "config" => Arr::get($wemall_config, 'data.record.0.configuration.COD', false),
                "limit" => Arr::get($wemall_config, 'data.record.0.limit.COD', 0)
            ],
            "nopayment" => [
                "config" => Arr::get($wemall_config, 'data.record.0.configuration.NOPAYMENT', false),
                "limit" => Arr::get($wemall_config, 'data.record.0.limit.NOPAYMENT', 0)
            ],
            "atm" => [
                "config" => Arr::get($wemall_config, 'data.record.0.configuration.ATM', false),
                "limit" => Arr::get($wemall_config, 'data.record.0.limit.ATM', 0)
            ],
            "omiseccw" => [
                "config" => Arr::get($wemall_config, 'data.record.0.configuration.OMISECCW', false),
                "limit" => Arr::get($wemall_config, 'data.record.0.limit.OMISECCW', 0)
            ],
            "omiseinstm" => [
                "config" => Arr::get($wemall_config, 'data.record.0.configuration.OMISEINSTM', false),
                "limit" => Arr::get($wemall_config, 'data.record.0.limit.OMISEINSTM', 0)
            ],
            "omiseew" => [
                "config" => Arr::get($wemall_config, 'data.record.0.configuration.OMISEEW', false),
                "limit" => Arr::get($wemall_config, 'data.record.0.limit.OMISEEW', 0)
            ],
            'omisepromptpay' => [
                'config' => Arr::get($wemall_config, 'data.record.0.configuration.OMISEPROMPTPAY', false),
                'limit' => Arr::get($wemall_config, 'data.record.0.limit.OMISEPROMPTPAY', 0)
            ],
            "p2c2pinstm" => [
                "config" => Arr::get($wemall_config, 'data.record.0.configuration.P2C2PINSTM', false),
                "limit" => Arr::get($wemall_config, 'data.record.0.limit.P2C2PINSTM', 0)
            ],
            "p2c2pccw" => [
                "config" => Arr::get($wemall_config, 'data.record.0.configuration.P2C2PCCW', false) ,
                "limit" => Arr::get($wemall_config, 'data.record.0.limit.P2C2PCCW', 0)
            ],
            "p2c2pew" => [
                "config" => Arr::get($wemall_config, 'data.record.0.configuration.P2C2PEW', false) ,
                "limit" => Arr::get($wemall_config, 'data.record.0.limit.P2C2PEW', 0)
            ]
        ];

        return $transformedData;
    }
}
