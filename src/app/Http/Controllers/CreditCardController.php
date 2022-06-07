<?php
namespace App\Http\Controllers;

use App\Http\Controllers\ApiParentController;
use Illuminate\Http\Request as LaravelRequest;
use Illuminate\Support\Facades\Validator;
use Illuminate\Encryption\Encrypter;
use Illuminate\Support\Arr;

use App\Services\WeOmniService;

class CreditCardController extends ApiParentController
{
    public function postSetRedis(LaravelRequest $lrequest)
    {
        $rule = [
            'secure_key'  => 'required',
            'card_no'     => 'required',
            'card_expire' => 'required',
            'card_holder' => 'required',
        ];

        $tmp_input = $lrequest->all();
        // convert input data to the one we can send
        $validator = Validator::make($tmp_input, $rule);
        if ($validator->fails()) {
            $errors = [
                'message' => [
                    'en'                => 'insufficient input',
                    'th'                => 'กรุณากรอกข้อมูลให้ครบถ้วน',
                    'error_from_system' => implode(',', $validator->errors()->all()),
                ],
            ];

            return response($errors, 400);
        }

        $key = env('CCV_ENCRYPTION_KEY');
        $encryptor = new Encrypter($key, 'AES-256-CBC');
        $encrypted = $encryptor->encryptString(Arr::get($tmp_input, 'card_no', ''));

        $card_data = [
            'data' => [
                'secure_key'      => Arr::get($tmp_input, 'secure_key'),
                'ccv_number'      => $encrypted,
                'ccv_holder_name' => Arr::get($tmp_input, 'card_holder'),
                'ccv_expire'      => Arr::get($tmp_input, 'card_expire')
            ]
        ];

        $result = WeOmniService::postCreditCardData($card_data);

        return response()->json($result);
    }
}
