<?php

namespace App\Services\QrCode;

use App\Models\TruemovehOrderModel;
use App\Facades\Client;
use Illuminate\Support\Arr;
use App\Services\LogService;
use Illuminate\Support\Carbon;
use Exception;

class OrderService
{   
    /**
     * Build Parameters
     *
     * @param array $parameters
     * 
     * @return array
     */
    public function buildParameters($parameters = [])
    {
        $data = [
            'secure_key'     => Arr::get($parameters, 'secure_key'),
            'payment_method' => Arr::get($parameters, 'payment_method'),
            'status'         => true,
        ];

        if (strtolower(Arr::get($parameters, 'status')) === 'fail') {
            $data['status'] = false;
        }

        return $data;
    }

    /**
     * Find Order
     *
     * @param array $parameters
     * 
     * @return array
     */
    public function findOrder($parameters)
    {   
        $model = new TruemovehOrderModel;
        
        return $model->getOrder($parameters);
    }

    /**
     * Insert Order
     *
     * @param array $data
     * 
     * @return array
     */
    public function insertOrder($data)
    {   
        $model                 = new TruemovehOrderModel();
        $model->secure_key     = Arr::get($data, 'secure_key');
        $model->payment_method = Arr::get($data, 'payment_method');
        $model->status         = Arr::get($data, 'status');
        $model->created_at     = $model->getDateNow()->timestamp;
        $model->expired_at     = $model->getTwoWeek()->timestamp;

        return $model->save();
    }

    /**
     * Trigger Post Success Order
     *
     * @param array $data
     * 
     * @return array
     */
    public function triggerPostSuccessOrder($data)
    {   
        try {
            $result                       = [];
            $parameters                   = [];
            $parameters['secure_key']     = Arr::get($data, 'secure_key');
            $parameters['payment_method'] = Arr::get($data, 'payment_method');

            $url      = env('APP_URL') . "/api/true/success";
            $response = Client::request('POST', $url , 
                [
                    'headers' => ['Content-Type' => 'application/json'],
                    'json'    => $parameters,
                ]
            );
            $result['trigger'] = $response->getStatusCode();
        } catch (Exception $e) {
            $result['trigger'] = $e->getCode();
            LogService::writeServiceLog(
                'QrCodeOrderServiceTriggerPostSuccess',
                json_encode_unicode($parameters),
                json_encode_unicode($e->getMessage()),
                Carbon::now()->format('d/m/Y H:i:s')
            );
        }

        $result['trigger'] = Arr::get($result, 'trigger') !== 200 ? false: true;
    
        return $result;
    }
}