<?php

namespace App\Http\Controllers\V2;

use Illuminate\Support\Facades\Validator;
use App\Services\LogService;
use App\Facades\PaymentMethodService;
use Illuminate\Http\Request;
use Exception;

class PaymentMethodController extends BaseController
{

    public function getPaymentMethods(Request $request)
    {
        try {
            $data = [
                'merchant_id' => $request->query('merchant_id'),
                'amount'      => $request->query('amount')
            ];

            $validator = Validator::make($data, [
                'amount'      => 'required|regex:/^\d+(\.\d{1,2})?$/m',
                'merchant_id' => 'required'
            ]);

            if ($validator->fails()) {
                throw new Exception($validator->errors(), 400);
            }

            $response = PaymentMethodService::getPaymentMethods($data);

            $ew_config = PaymentMethodService::getChannelConfigByName('p2c2pew', $request->query('amount'));
            $response['truemoney']['disable'] = array_get($ew_config, 'disable', false);

            $paynext_config = PaymentMethodService::getChannelConfigByName('paynext', $request->query('amount'));
            $response['payNext']['disable'] = array_get($paynext_config, 'disable', false);

        } catch (Exception $e) {
            LogService::writeServiceLog(
                "route_get_omise_payment_methods",
                json_encode_unicode($data),
                json_encode_unicode($e->getMessage()),
                (new \DateTime())->format('d/m/Y H:i:s')
            );

            $response = [
                'code'    => $e->getCode(),
                'message' => json_decode($e->getMessage(), true)
            ];
        }

        return $response;
    }
}
