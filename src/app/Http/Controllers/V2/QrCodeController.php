<?php

namespace App\Http\Controllers\V2;

use App\Facades\QrCode\OrderService;
use App\Services\LogService;
use App\Libraries\Validation\DecryptOrder;
use Illuminate\Support\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Illuminate\Support\Arr;
use Exception,InvalidArgumentException;

class QrCodeController extends BaseController
{
    /**
     * Get Order
     */
    public function getOrder(Request $request)
    {
        try {
            $response  = [];
            $input     = $request->query();
            $validator = Validator::make($input, [
                'order_code' => 'required|min:13',
            ]);
            
            if ($validator->fails()) {
                throw new InvalidArgumentException($validator->errors(), 400);
            }

            $order_code     = Arr::get($input, 'order_code');
            $decrypt_order  = new DecryptOrder();
            $result_decrypt = $decrypt_order->decrypt($order_code);

            if (!empty($result_decrypt['message'])) {
                throw new InvalidArgumentException(Arr::get($result_decrypt, 'message'), 400);
            }

            $order_data = OrderService::findOrder([
                'secure_key' => $result_decrypt
            ]);

            $response = $this->makeResponse(['data' => $order_data], 200);
        } catch (InvalidArgumentException $e) {
            $error_message = $this->createErrorMessage(json_decode($e->getMessage(), 1));
            $response      = $this->makeResponse($error_message, $e->getCode());
        } catch (Exception $e) {
            $error_message = $this->createErrorMessage([
                'code'    => 500,
                'message' => 'Internal Server Error'
            ]);

            LogService::writeServiceLog(
                'QrCodeControllerFetch',
                json_encode_unicode($input),
                json_encode_unicode($e->getMessage()),
                Carbon::now()->format('d/m/Y H:i:s')
            );

            $response = $this->makeResponse($error_message, 500);
        }

        return $response;
    }

    /**
     * Post Save Order Status
     */
    public function postStatus(Request $request)
    {
        try {
            $response  = [];
            $input     = $request->json()->all();
            $validator = Validator::make($input, [
                'secure_key'     => 'required|string|min:12',
                'payment_method' => 'required|string',
                'status'         => [
                    'required',
                    Rule::in(['success', 'fail']),
                ]
            ]);

            if ($validator->fails()) {
                throw new InvalidArgumentException($validator->errors(), 400);
            }
            
            $parameters = OrderService::buildParameters($input);
            $order_data = OrderService::findOrder([
                'secure_key' => Arr::get($input, 'secure_key')
            ]);

            if (!empty($order_data)) {
                throw new InvalidArgumentException(
                    json_encode(['secure_key' => ['Duplicate secure_key']]), 
                    400
                );
            }
            
            if (!OrderService::insertOrder($parameters)) {
                throw new Exception("Can't Insert Order.", 500);
            }

            $input['trigger'] = false;
            if (Arr::get($parameters, 'status') === true) {
                $result_trigger = OrderService::triggerPostSuccessOrder($parameters);
                $input          = array_merge($input, $result_trigger);
            }

            $response = $this->makeResponse(['data' => $input], 200);
        } catch (InvalidArgumentException $e) {
            $error_message = $this->createErrorMessage(json_decode($e->getMessage(), 1));
            $response      = $this->makeResponse($error_message, $e->getCode());
        } catch (Exception $e) {
            $error_message = $this->createErrorMessage([
                'code'    => 500,
                'message' => 'Internal Server Error',
            ]);

            LogService::writeServiceLog(
                'QrCodeControllerPostStatus',
                json_encode_unicode($input),
                json_encode_unicode($e->getMessage()),
                Carbon::now()->format('d/m/Y H:i:s')
            );

            $response = $this->makeResponse($error_message, 500);
        }

        return $response;
    }

     /**
     * Create error message
     *
     * @param $response_error
     *
     * @return array
     */
    private function createErrorMessage($response_error)
    {   
        $errors            = [];
        $result            = [];
        $errors['message'] = $response_error;

        if (!empty($errors)) {
            $result['errors'] = $errors;
        }
        
        return $result;
    }
}
