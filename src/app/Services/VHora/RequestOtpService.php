<?php
namespace App\Services\VHora;

use Aws\DynamoDb\Exception\DynamoDbException;
use App\Libraries\Validation\MobileNumberFormat;
use App\Models\TruemovehOtpTransactionsModel;
use App\Services\LogService;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Arr;
use InvalidArgumentException;

class RequestOtpService
{
    // Set DynamoDB TTL expired date
    protected $transaction_expired_days = 14;

    /**
     * Validate parameters
     *
     * @param array $data
     *
     * @return boolean|exception
     */
    public function validate($data)
    {
        $validator = Validator::make($data, [
            'msisdn' => ['required', new MobileNumberFormat()]
        ]);

        if ($validator->fails()) {
            throw new InvalidArgumentException($validator->errors()->first(), 1002);
        }

        return true;
    }

    /**
     * Validate request otp limit
     *
     * @param array $data
     *
     * @return boolean|exception
     */
    public function validateOtpLimit($data)
    {
        $carbon          = Carbon::now();
        $msisdn          = Arr::get($data, 'msisdn');
        $otp_limit       = 10;
        $redis_otp_limit = Redis::get('request-otp:limit-times');

        if ($redis_otp_limit) {
            $otp_limit = intval($redis_otp_limit);
        }

        try {
            $time_now    = $carbon->timestamp;
            $time_past   = $carbon->subHours(1)->timestamp;
            $model       = new TruemovehOtpTransactionsModel;
            $otp_pending = $model->getOtpWithFilterSortByDescRefcode([
                                    'msisdn' => $msisdn,
                                    'start'  => $time_past,
                                    'end'    => $time_now,
                                ]);

            if ($this->countOtpLimit($otp_pending, $time_now) >= $otp_limit) {
                throw new InvalidArgumentException('Request otp over limit 10 times in 1 hours.', 1001);
            }
            
            return true;
        } catch (DynamoDbException $e) {
            LogService::writeServiceLog(
                'DynamoDB',
                'Count request otp',
                $e->getAwsErrorMessage(),
                $carbon->format('d/m/Y H:i:s')
            );

            $response = [
                'status_code' => $e->getStatusCode(),
                'data'        => [
                    'message' => $e->getAwsErrorMessage()
                ]
            ];
        }

        return $response;
    }

    /**
     * Count request otp
     *
     * @param array $otps
     * @param int $now
     *
     * @return int
     */
    private function countOtpLimit($otps, $now)
    {
        $carbon      = new Carbon();
        $now         = $carbon->createFromTimestamp($now);
        $otp_request = 0;

        foreach ($otps as $otp) {
            $past = $carbon->createFromTimestamp(Arr::get($otp, 'created_at'));

            if ($now->diffInHours($past) == 0) {
                $otp_request++;
            }
        }

        return $otp_request;
    }

    /**
     * Insert response otp to db
     *
     * @param array $data
     *
     * @return array
     */
    public function insertRequestOtp($data)
    {
        $response = [
            'status_code' => 200
        ];

        try {
            $model             = new TruemovehOtpTransactionsModel();
            $now               = $model->getDateNow();

            $model->ref_code   = Arr::get($data, 'ref_code');
            $model->msisdn     = Arr::get($data, 'msisdn');
            $model->created_at = $now->timestamp;
            $model->expired_at = $now->addDays($this->transaction_expired_days)->timestamp;
            $model->success    = Arr::get($data, 'success', false);
            
            $model->save();
        } catch (DynamoDbException $e) {
            LogService::writeServiceLog(
                'DynamoDB',
                'Insert request otp',
                $e->getAwsErrorMessage(),
                Carbon::now()->format('d/m/Y H:i:s')
            );

            $response = [
                'status_code' => $e->getStatusCode(),
                'data'        => [
                    'message' => $e->getAwsErrorMessage()
                ]
            ];
        }

        return $response;
    }
}