<?php

namespace App\Services\VHora;

use App\Libraries\Clients\AwsGatewayClient;
use App\Traits\VHoraResponsorTrait;
use App\Models\TruemovehOtpTransactionsModel;
use Illuminate\Support\Arr;
use GuzzleHttp\Exception\ClientException;
use Exception;
use App\Services\LogService;
use Illuminate\Support\Carbon;

class UpdateStatusService
{   
    use VHoraResponsorTrait;

    /**
     * Update status temp_reserve
     *
     * @param array $parameters
     * @return array
     */
    public function tempReserve($parameters = []) 
    {
        $client   = new AwsGatewayClient();
        $response = $client->postFormData('/vhora/update-status', $this->buildRequest($parameters));

        return $response;
    }

    /**
     * Update status temp_reserve v2
     *
     * @param array $parameters
     * @return array
     */
    public function tempReserveV2($parameters = []) 
    {
        $response = null;
        $client   = new AwsGatewayClient();
        
        try {
            $response = $client->postFormData('/vhora/v2/update-status', $this->buildRequestV2($parameters));
        } catch (ClientException $e) {
            if ($e->hasResponse()) {
                $response = json_decode($e->getResponse()->getBody()->getContents(), true);
                
                if (empty(Arr::get($response, 'code'))) {
                    $response = Arr::add($response, 'code', $e->getResponse()->getStatusCode());
                }
            }

            LogService::writeServiceLog(
                'UpdateStatusService::tempReserveV2',
                json_encode_unicode($parameters),
                json_encode_unicode($response),
                Carbon::now()->format('d/m/Y H:i:s')
            );
        } catch (Exception $e) {
            LogService::writeServiceLog(
                'UpdateStatusService::tempReserveV2',
                json_encode_unicode($parameters),
                json_encode_unicode($response),
                Carbon::now()->format('d/m/Y H:i:s')
            );

            throw new Exception('Internal Server Error', 500);
        }

        return $response;
    }

    /**
     * Update status temp_reserve
     *
     * @param array $parameters
     * @return array
     */
    private function buildRequest($parameters = [])
    {
        return [
            'msisdn'          => Arr::get($parameters, 'msisdn'),
            'status'          => 'temp_reserve',
            'temp_reserve_id' => Arr::get($parameters, 'ref_code'),
        ];
    }

    /**
     * Update status temp_reserve v2
     *
     * @param array $parameters
     * @return array
     */
    private function buildRequestV2($parameters = [])
    {
        return [
            'msisdn'          => Arr::get($parameters, 'msisdn'),
            'status'          => 'temp_reserve',
            'temp_reserve_id' => Arr::get($parameters, 'ref_code'),
            'pack'            => Arr::get($parameters, 'pack'),
        ];
    }

    /**
     * Update status temp_reserve
     *
     * @param array $parameters
     * @return array
     */
    public function verify($parameters = [])
    {   
        $model = new TruemovehOtpTransactionsModel;
        $start = $model->getDateNow()->subMinutes(30)->timestamp;
        $end   = $model->getDateNow()->timestamp;
        
        $result = $model->getSuccessandVarified([
            'ref_code' => Arr::get($parameters, 'ref_code'),
            'success'  => true,
            'start'    => $start,
            'end'      => $end,
        ]);

        if (empty($result)) {
            throw new Exception('Session Time Out', 400);
        }

        return $result;
    }

}