<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Facades\StockReminderService;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\V2\BaseController;
use Illuminate\Support\Arr;
use App\Services\LogService;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Redis;
use Exception;

class StockReminderController extends BaseController
{
    /**
     * post save stock reminder
     *
     * @return array
     */
    public function postSaveStockReminder(Request $request)
    {
        try {
            $inputs    = $request->all();
            $validator = Validator::make($inputs, [
                'mobile'          => 'required|regex:/^0[0-9]{9,9}+$/',
                'product_id'      => 'required',
                'type'            => 'required|in:inventory,size',
                'option_value_id' => 'required_without:inventory_id',
                'inventory_id'    => 'required_without:option_value_id',
            ]);

            if ($validator->fails()) {
                $errors   = $validator->errors();
                $response = $this->createErrorMessage($errors, 400);

                return $this->makeResponse($response, 400);
            }

            $toggle = Redis::get('toggle-config:truemoveh-stock-reminder');

            if (!$toggle) {
                Arr::set($inputs, 'key', '');

                return $this->makeResponse(['data' => $inputs], 200);
            }

            $mobile          = Arr::get($inputs, 'mobile');
            $product_id      = Arr::get($inputs, 'product_id');
            $option_value_id = Arr::get($inputs, 'option_value_id');
            $inventory_id    = Arr::get($inputs, 'inventory_id');
            $string_key      = $mobile . '-' . $product_id;
            $key             = $string_key . '-' . $option_value_id;

            if ($inventory_id) $key = $string_key . '-' . $inventory_id;

            $check_reminder = StockReminderService::findReminder($key);

            if ($check_reminder) {
                $result['errors'] = 'Data Duplicate';

                return $this->makeResponse($result, 400);
            }

            Arr::set($inputs, 'key', $key);
            StockReminderService::insertStockRemider($inputs);

            $response = $this->makeResponse(['data' => $inputs], 200);
        } catch (Exception $e) {
            $error_message = $this->createErrorMessage([
                'code'    => 500,
                'message' => 'Internal Server Error',
            ]);

            LogService::writeServiceLog(
                'StockReminderController',
                json_encode_unicode($inputs),
                json_encode_unicode($e->getMessage()),
                Carbon::now()->format('d/m/Y H:i:s')
            );

            $response = $this->makeResponse($error_message, 500);
        }

        return $response;
    }

    /**
     * Create error message
     * @param $response_error
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
