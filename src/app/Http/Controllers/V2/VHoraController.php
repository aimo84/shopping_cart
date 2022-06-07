<?php

namespace App\Http\Controllers\V2;

use App\Services\EmailService;
use Illuminate\Http\Request as LaravelRequest;
use Illuminate\Support\Facades\Input;
use App\Facades\VHora\VerifyService;
use App\Facades\VHora\VHoraService;
use App\Facades\VHora\RequestOtpService;
use App\Facades\OtpService;
use App\Facades\VHora\UpdateStatusService;
use App\Facades\VHora\FuntongNumbersService;

use App\Traits\VHoraResponsorTrait;

use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Str;
use App\Services\LogService;

use Illuminate\Support\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Arr;

use InvalidArgumentException;
use Exception;

class VHoraController extends BaseController
{
    use VHoraResponsorTrait;

    public function verify()
    {
        $response = [];
        $inputs   = Input::all();

        try {
            if (!isset($inputs['ref_code'])) {
                $inputs['ref_code'] = VHoraService::getRefCode();
            }

            VerifyService::validate($inputs);
            $response_ctoken = VerifyService::getCToken($inputs);
            $ctoken          = Arr::get($response_ctoken, 'ctoken');
            if (empty($ctoken)) {
                if (empty($response_ctoken)) {
                    throw new InvalidArgumentException('', 1005);
                }

                throw new InvalidArgumentException(json_encode($response_ctoken), 1004);
            }

            // unset province if is_thailand is false
            if (empty($inputs['is_thailand']) && isset($inputs['province'])) {
                unset($inputs['province']);
            }

            $response['data'] = array_merge($inputs, [
                'ctoken' => $ctoken
            ]);

            LogService::writeServiceLog(
                'VHora::get_ctoken',
                json_encode_unicode($inputs),
                json_encode_unicode($response),
                Carbon::now()->format('d/m/Y H:i:s')
            );
        } catch (InvalidArgumentException $e) {
            $error_message = json_decode($e->getMessage(), true);
            $status_code   = Arr::get($error_message, 'status_code', 400);

            $response = $this->createErrorMessage(
                $error_message,
                $e->getCode()
            );
            return $this->makeResponse($response, $status_code);
        } catch (Exception $e) {
            $response = $this->createErrorMessage(
                ['message' => 'Internal Server Error'],
                $e->getCode()
            );

            LogService::writeServiceLog(
                'VHora',
                'Connect DB',
                json_encode_unicode($e->getMessage()),
                Carbon::now()->format('d/m/Y H:i:s')
            );

            return $this->makeResponse($response, 500);
        }

        return $this->makeResponse($response, 200);
    }

    public function postRequestOtp()
    {
        $response = [];

        try {
            $inputs = Input::all();
            RequestOtpService::validate($inputs);
            RequestOtpService::validateOtpLimit($inputs);

            $params = [
                'mobile_number' => $inputs['msisdn'],
                'channel'       => 'web'
            ];

            $response_otp    = OtpService::requestOtp($params);
            $otp_data        = array_get($response_otp, 'data');
            $otp_status_code = array_get($response_otp, 'status_code');

            if ($otp_status_code !== 200) {
                throw new InvalidArgumentException(array_get($otp_data, 'message', 'Internal Server Error'), $otp_status_code);
            }

            $data = [
                'ref_code'   => array_get($otp_data, 'transaction_id'),
                'msisdn'     => array_get($otp_data, 'msisdn'),
                'success'    => false
            ];

            $response_insert_otp = RequestOtpService::insertRequestOtp($data);
            $insert_status_code  = array_get($response_insert_otp, 'status_code', 400);

            if ($insert_status_code !== 200) {
                throw new InvalidArgumentException(array_get($response_insert_otp, 'data.message', 'Internal Server Error'), $insert_status_code);
            }

            $response = [
                'data' => [
                    'code'         => array_get($otp_data, 'code'),
                    'description'  => array_get($otp_data, 'description'),
                    'msisdn'       => array_get($otp_data, 'msisdn'),
                    'operator'     => array_get($otp_data, 'operator'),
                    'refcode'      => array_get($otp_data, 'transaction_id'),
                    'method'       => array_get($otp_data, 'method'),
                    'execute_time' => array_get($otp_data, 'execute_time'),
                    'success'      => array_get($data, 'success')
                ]
            ];

        } catch (InvalidArgumentException $e) {
            $error_message = $e->getMessage();
            $status_code   = array_get($error_message, 'status_code', 400);

            $response = $this->createErrorMessage(
                $error_message,
                $e->getCode()
            );

            return $this->makeResponse($response, $status_code);
        } catch (Exception $e) {
            $response = $this->createErrorMessage(
                ['message' => 'Internal Server Error'],
                $e->getCode()
            );

            LogService::writeServiceLog(
                'VHora',
                'connect db',
                $e->getMessage(),
                Carbon::now()->format('d/m/Y H:i:s')
            );

            return $this->makeResponse($response, 500);
        }

        return $this->makeResponse($response, 200);
    }

    /**
     * Get Personalize Funtong
     */
    public function postPersonalizeFuntong(Request $request)
    {
        $lrequest  = $request->all();
        $validator = Validator::make($lrequest, [
            'ctoken'  => 'required',
        ]);

        if ($validator->fails()) {
            $errors   = $validator->errors();
            $response = $this->createErrorMessage($errors, 400);
            return $this->makeResponse($response, 400);
        }

        $parameters = [
            'ctoken'  => Arr::get($lrequest, 'ctoken'),
            'channel' => strtolower(Arr::get($lrequest, 'channel', 'online')),
            'cnt'     => 10,
            'shop'    => Arr::get($lrequest, 'shop')
        ];

        if (!in_array($parameters['channel'], ['online', 'offline'])) {
            $parameters['channel'] = 'online';
        }

        try {
            $result = VHoraService::personalizeFuntong($parameters);
            $result = $this->makeResponse($result, 200);
        } catch (InvalidArgumentException $e) {
            $error_message = json_decode($e->getMessage(), true);
            $status_code   = Arr::get($error_message, 'code', 401);
            $response = $this->createErrorMessage(
                $error_message,
                $e->getCode()
            );
            return $this->makeResponse($response, $status_code);
        } catch (Exception $e) {
            $response = [
                'code'    => $e->getCode(),
                'message' => $e->getMessage()
            ];

            $response = $this->createErrorMessage($response, $e->getCode());
            return $this->makeResponse($response, $e->getCode());
        }

        return $result;
    }

    /*
    * Update status as temp_reserve
    *
    */
    public function postTempReserve(Request $request)
    {
        $lrequest  = $request->all();
        $validator = Validator::make($lrequest, [
            'msisdn'         => 'required',
            'ref_code'       => 'required'
        ]);

        if ($validator->fails()) {
            $errors   = $validator->errors();
            $response = $this->createErrorMessage($errors, 400);

            return $this->makeResponse($response, 400);
        }

        try {
            $result  = UpdateStatusService::tempReserve($lrequest);
            $no_ekyc = $this->getNoEKYCEnableStatus();

            $response = [
                'data' => [
                    'code'            => array_get($result, 'code'),
                    'temp_reserve_id' => array_get($result, 'temp_reserve_id', ''),
                    'message'         => array_get($result, 'message'),
                    'no_ekyc'         => $no_ekyc
                ]
            ];

            return $this->makeResponse($response, 200);
        } catch (Exception $e) {
            $response = [
                'code'    => $e->getCode(),
                'message' => $e->getMessage()
            ];

            return $this->makeResponse($this->createErrorMessage($response, $e->getCode()), $e->getCode());
        }
    }

    /**
     * Get fortune funtong
     */
    public function getFortuneFuntong(Request $request)
    {
        $lrequest = $request->post();
        $validator = Validator::make($lrequest, [
            'msisdn' => 'required',
            'ctoken' => 'required',
        ]);

        if ($validator->fails()) {
            $errors   = $validator->errors();
            $response = $this->createErrorMessage($errors, 400);
            return $this->makeResponse($response, 400);
        }

        try {
            $result = VHoraService::getFortuneFuntong(
                Arr::get($lrequest, 'msisdn'),
                Arr::get($lrequest, 'ctoken')
            );

            $result = $this->makeResponse($result, 200);
        } catch (Exception $e) {
            $response = [
                'code'    => $e->getCode(),
                'message' => $e->getMessage()
            ];

            $response = $this->createErrorMessage($response, $e->getCode());
            return $this->makeResponse($response, $e->getCode());
        }

        return $result;
    }

    public function postLogin(Request $request)
    {
        $response_data = VHoraService::processLoginStoreOffline($request->all());
        $redirect = array_get($response_data, 'response.redirect');
        if ($redirect) {
            return redirect()->away($redirect);
        }
    }

    public function postVerify(Request $request)
    {
        $response_data = VHoraService::processVerifyOffline($request->post());
        return $this->makeResponse(array_get($response_data, 'response'), array_get($response_data, 'code'));
    }

    public function postAuthentication(Request $request)
    {
        $response_data = VHoraService::processAuthentication($request->all());
        return $this->makeResponse(array_get($response_data, 'response'), array_get($response_data, 'code'));
    }

    public function getAuthChannel(Request $request)
    {
        $response_data = VHoraService::processGetAuthChannel($request->all());
        return $this->makeResponse(array_get($response_data, 'response'), array_get($response_data, 'code'));
    }

    public function getDealerInfo(Request $request)
    {
        $response_data = VHoraService::processGetDealerInfo($request->all());
        return $this->makeResponse(array_get($response_data, 'response'), array_get($response_data, 'code'));
    }

    public function getAuthenticationLogout(Request $request)
    {
        $response_data = VHoraService::processAuthenticationLogout($request->all());
        return $this->makeResponse(array_get($response_data, 'response'), array_get($response_data, 'code'));
    }

    /**
     * @param LaravelRequest $lrequest
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function postPlaceOrderOffline(LaravelRequest $lrequest)
    {
        $response_data = VHoraService::processPlaceOrderOffline($lrequest);
        return $this->makeResponse(array_get($response_data, 'response'), array_get($response_data, 'code'));
    }

    public function getFortuneFuntongForRedis(Request $request)
    {
        $lrequest   = $request->all();
        $validator = Validator::make($lrequest, [
            'secure_key' => 'required'
        ]);

        if ($validator->fails()) {
            $errors   = $validator->errors();
            $response = $this->createErrorMessage($errors, 400);
            return $this->makeResponse($response, 400);
        }

        $encrypt_secure_key = array_get($lrequest, 'secure_key');
        $secure_key = decrypt($encrypt_secure_key);
        $keys = [
            "truestore:ctoken:orderid:$secure_key:value",
            "truestore:vhora:offline:orderid:$secure_key:data",
            "truestore:vhora:offline:pos:$secure_key:data"
        ];
        $redis_data   = Redis::mget($keys);
        $vhora_ctoken = array_get($redis_data, 0, '');
        $vhora_data   = json_decode(array_get($redis_data, 1, '{}'), true);
        $msisdn       = array_get($vhora_data, 'selected_msisdn');
        $package_code = array_get($vhora_data, 'package_code');
        $pos_data     = json_decode(array_get($redis_data, 2, '{}'), true);

        if (!empty($vhora_ctoken) && !empty($msisdn) && empty($package_code)) {
            try {
                $vhora_result = VHoraService::getFortuneFuntong($msisdn, $vhora_ctoken);

                if (empty($vhora_result)) {
                    return $this->makeResponse(['message' => 'Data Not Found'], 404);
                }
                $result['data']['fortune'] = $vhora_result;
                $result['data']['order']   = $vhora_data;
                $result['data']['pos']     = $pos_data;
                $result                    = $this->makeResponse($result, 200);
            } catch (Exception $e) {
                $response = [
                    'code'    => $e->getCode(),
                    'message' => $e->getMessage(),
                ];
                $result = $this->makeResponse($response, 400);

                LogService::writeServiceLog(
                    'fortune_funtong_fail',
                    json_encode_unicode($result),
                    json_encode_unicode($response),
                    (new \DateTime())->format('d/m/Y H:i:s')
                );
            }
        } else if (!empty($package_code)) {
            $result = $this->makeResponse([
                'data' => [
                    'fortune' => [
                        'lowtier' => true
                    ],
                    'order' => $vhora_data,
                    'pos'   => $pos_data
                ]
            ], 200);
        } else {
            $result = $this->makeResponse(['message' => 'Data Not Found'], 404);
        }

        return $result;
    }

    /*
    * Update status as temp_reserve Low Tier
    *
    */
    public function tempReserveLowTier(Request $request)
    {
        $input     = $request->json()->all();
        $validator = Validator::make($input, [
            'msisdn'   => 'required',
            'ref_code' => 'required',
            'pack'     => 'required',
        ]);

        if ($validator->fails()) {
            $errors   = $validator->errors();
            $response = $this->createErrorMessage($errors, 400);

            return $this->makeResponse($response, 400);
        }

        try {
            $response = [];
            $result   = UpdateStatusService::tempReserveV2($input);

            if (in_array(Arr::get($result, 'code'), [400, 401, 403])) {
                throw new InvalidArgumentException(Arr::get($result, 'message'), Arr::get($result, 'code', 400));
            }

            $data = [
                'data' => [
                    'code'            => Arr::get($result, 'code'),
                    'temp_reserve_id' => Arr::get($result, 'temp_reserve_id', ''),
                    'message'         => Arr::get($result, 'message'),
                    'no_ekyc'         => $this->getNoEKYCEnableStatus()
                ]
            ];

            $response['code']     = 200;
            $response['response'] = $data;
        } catch (InvalidArgumentException $e) {
            $response = $this->setException('VHora::tempReserveLowTier', $input, $e->getMessage(), $e->getCode());
        } catch (Exception $e) {
            $response = $this->setException('VHora::tempReserveLowTier', $input, $e->getMessage(), 500);
        }

        return $this->makeResponse(
            Arr::get($response, 'response'),
            Arr::get($response, 'code')
        );
    }

    public function getNoEKYCEnableStatus() {
        $no_ekyc_key            = 'no-ekyc';
        $no_ekyc_enable_status  = Redis::get($no_ekyc_key) === 'true'? true: false;

        return $no_ekyc_enable_status;
    }

    /**
     * @param LaravelRequest $lrequest
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function funtong(LaravelRequest $lrequest)
    {
        $response = FuntongNumbersService::getNumbers($lrequest);
        return $this->makeResponse(Arr::get($response, 'response'), Arr::get($response, 'code'));
    }

    private function setException($step, $input, $message, $code)
    {
        LogService::writeServiceLog(
            $step,
            json_encode($input),
            json_encode($message),
            Carbon::now()->format('d/m/Y H:i:s')
        );

        if ($code === 500) $message = 'Internal Server Error';

        $response = $this->createErrorMessage(['message' => $message], $code);

        return ['response' => $response, 'code' => $code];
    }

    /**
     * @param LaravelRequest $lrequest
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function postProphecy(LaravelRequest $lrequest)
    {
        $response = VHoraService::processProphecy($lrequest);
        return $this->makeResponse(Arr::get($response, 'response'), Arr::get($response, 'code'));
    }

    public function postResendEmail(LaravelRequest $lrequest)
    {
        $response = VHoraService::processResendEmail($lrequest);
        return $this->makeResponse(Arr::get($response, 'response'), Arr::get($response, 'code'));
    }
}
