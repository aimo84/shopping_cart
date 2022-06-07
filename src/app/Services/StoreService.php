<?php
namespace App\Services;

class StoreService
{
    public function getPropositionData($data)
    {
        $fixed_parameter_list = [
            'base_url' => env('WEMALL_ENDPOINT', false),
        ];
        $headers = [
            "Content-Type"       => "application/json",
            "WEB_METHOD_CHANNEL" => "KYC_WEMALL",
            "apikey"             => env("KYC_WEMALL_API_KEY", false),
            "x-api-auth"         => env("X_API_AUTH_VLEARN_VERIFY", false),
        ];
        $tmp_lrequest = new \Illuminate\Http\Request();
        $tmp_lrequest->replace($data);
        $result = WlsService::operateRequestAction("truemoveh/proposition/get-data", 'GET', $tmp_lrequest, $headers, $fixed_parameter_list);

        LogService::writeServiceLog(
            "PrefixSuffix:get-proposition-data",
            json_encode(["tmp_lrequest" => $tmp_lrequest->all(), 'fixed_parameter_list' => $fixed_parameter_list], true),
            json_encode($result, true),
            (new \DateTime())->format('d/m/Y H:i:s')
        );

        $response_data     = \json_decode(\Arr::get($result, 1, '{}'), true);
        $code              = \Arr::get($response_data, 'code', '');
        $data              = \Arr::get($response_data, 'record', []);
        if ($data && $code == 200) {
            $result['is_pass'] = true;
            $result['data'] = $data;
        }

        return $result;
    }

    public function processGetPropositionDataByNasCode($nas_code) {
        $data_from_redis = \Redis::get("truestore:get_proposition_data_by_nas_code:$nas_code:redis_data");

        if (empty($data_from_redis)) {
            $result = [];
            $proposition_response = $this->getPropositionData(['nas_code' => $nas_code]);
            if (\Arr::get($proposition_response, 'is_pass')) {
                $result = \Arr::get($proposition_response, 'data.0');
                \Redis::set("truestore:get_proposition_data_by_nas_code:$nas_code:redis_data", json_encode($result), 'EX', 15 * 60);
            }
        } else {
            $result = \json_decode($data_from_redis, true);
        }

        return $result;
    }

    public function processGetExternalNasCodeByNasCode($nas_code)
    {
        $proposition_data = [];
        if ($nas_code) {
            $proposition_data = $this->processGetPropositionDataByNasCode($nas_code);
        }

        return \Arr::get($proposition_data, 'external_nas_code', $nas_code);
    }

    public function processGetExternalPricePlanCodeByPricePlanCode($price_plan_code)
    {
        $price_plan_response = [];

        if ($price_plan_code) {
            $tmp_lrequest = new \Illuminate\Http\Request();
            $tmp_lrequest->replace(['code' => $price_plan_code]);
            $response = WlsService::getPricePlanList("", "GET", $tmp_lrequest, "");
            $result = \Arr::get($response, '1', '');
            $price_plan_response = \Arr::get(json_decode($result, 1), 'record.0', '');
        }

        return \Arr::get($price_plan_response, 'external_code', $price_plan_code);
    }
}
