<?php
namespace App\Services;

use App\Libraries\Clients\AwsGatewayClient;
use Illuminate\Support\Carbon;
use Exception;

class OtpService
{
    private $client;
    
    /**
     * Instantiate a new OtpService instance.
     */
    public function __construct()
    {
        $this->client = new AwsGatewayClient();
    }

    /**
     * Request an OTP
     *
     * @param array $data
     *
     * @return array
     */
    public function requestOtp($data)
    {   
        $response = $this->client->get('/otp/request', [
            'msisdn'  => array_get($data, 'mobile_number'),
            'channel' => array_get($data, 'channel')
        ]);
        
        $response = $this->buildResponse($response);

        if (array_get($response, 'status_code') !== 200) {
            LogService::writeServiceLog(
                'VHora',
                'Request OTP',
                json_encode_unicode($response),
                (new \DateTime())->format('d/m/Y H:i:s')
            );
        }

        return $response;
    }

    /**
     * Verify an OTP
     *
     * @param array $data
     *
     * @return mixed
     */
    public function verify($data)
    {   
        try {
            $response = $this->client->get('/otp/verify', [
                'otp'     => array_get($data, 'otp'),
                'msisdn'  => array_get($data, 'msisdn'),
                'channel' => 'web'
            ]);

            $response = $this->buildResponse($response);

            if (array_get($response, 'status_code') !== 200) {
                LogService::writeServiceLog(
                    'OTP',
                    'Verify OTP',
                    json_encode_unicode($response),
                    Carbon::now()->format('d/m/Y H:i:s')
                );
            }
        } catch (Exception $e) {
            LogService::writeServiceLog(
                'OTP',
                'Verify OTP exception',
                json_encode_unicode($e->getMessage()),
                (new \DateTime())->format('d/m/Y H:i:s')
            );
        }

        return $response;
    }

    /**
     * Build new response
     *
     * @param array $data
     *
     * @return array
     */
    private function buildResponse($data) {
        $status_code = array_get($data, 'code');
        if (!in_array(array_get($data, 'code'), [200, 500])) {
            $status_code = 400;
        }

        return [
            'status_code' => $status_code,
            'status_txt'  => array_get($data, 'description'),
            'data'        => $data
        ];
    }

    
}
