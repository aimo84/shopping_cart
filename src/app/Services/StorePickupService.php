<?php

namespace App\Services;

use Illuminate\Support\Arr;
use Carbon\Carbon;
use App\Libraries\Clients\AwsGatewayClient;

class StorePickupService
{

    /**
     * Get list of nearby store
     *
     * @param array $parameters
     * @return array
     */
    public function nearme($parameters = [])
    {
        $headers = [
            'appId' => env('ALL_MAP_SERVICE_APP', ''),
            'appKey' => $this->generateAppKey()
        ];

        $default_params = [
            'rad' => 2000,
            'lang' => 'th',
            'limit' => 50
        ];

        $parameters = array_merge(
            $default_params,
            $parameters
        );

        try {
            $client = new AwsGatewayClient($headers);
            $response = $client->get('/typhoon/seven/nearme', $parameters);
            $response = $this->buildResponse($response);
        } catch (\Exception $e) {
            LogService::writeServiceLog(
                "StorePickupService:nearme",
                json_encode_unicode($parameters),
                json_encode_unicode(["message" => $e->getMessage()]),
                date('d/m/Y H:i:s')
            );
            $response = [];
        }

        return $response;
    }

    /**
     * Build nearme response
     * - unset renovating store if exists
     *
     * @param array $data
     * @return mixed
     */
    public function buildResponse($data = [])
    {
        if (!is_array($data)) {
            throw new \Exception('Invalid Response');
        }

        foreach ($data as $k => $v) {
            if (isset($v['renovate_start_date'])) {
                $is_renovate = $this->isRenovate(
                    $v['renovate_start_date'],
                    Arr::get($v, 'renovate_end_date')
                );

                if ($is_renovate) {
                    unset($data[$k]);
                }
            }
        }

        return array_values($data);
    }

    /**
     * store renovation calculation
     *
     * @param string $start_date
     * @param string $end_date
     *
     * @return boolean
     */
    public function isRenovate($start_date, $end_date)
    {
        $today = Carbon::now()->timestamp;
        $start = Carbon::parse($start_date)->timestamp;
        $is_renovate = false;

        if ($today >= $start) {
            $is_renovate = true;
            if (!empty($end_date)) {
                $end = Carbon::parse($end_date)->timestamp;
                if ($today > $end) {
                    $is_renovate = false;
                }
            }
        }

        return $is_renovate;
    }

    /**
     * Generate app key
     *
     * @return string
     */
    public function generateAppKey()
    {
        $secret_key = env('ALL_MAP_SERVICE_KEY', '');
        $app_name   = env('ALL_MAP_SERVICE_APP', '');
        $now = Carbon::now('Asia/Bangkok')->format('Ymd');
        $plain_text = $now . '|' . $app_name;

        return base64_encode(openssl_encrypt($plain_text, 'aes-128-ecb', $secret_key, OPENSSL_RAW_DATA));
    }
}
