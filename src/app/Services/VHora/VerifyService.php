<?php
namespace App\Services\VHora;

use Illuminate\Support\Facades\Validator;
use App\Libraries\Clients\AwsGatewayClient;
use App\Services\LogService;
use App\Models\TruemovehOtpTransactionsModel;
use Illuminate\Support\Carbon;
use InvalidArgumentException;
use GuzzleHttp\Exception\ClientException;
use Illuminate\Support\Arr;

class VerifyService
{
    public $rate_limit = 10;

    /**
     * Validate parameters
     *
     * @param array $data
     *
     * @return mixed
     */
    public function validate($data)
    {
        $validator  = Validator::make($data, [
            'ref_code'         => 'required',
            'birthdate'        => 'required',
            'birthtime'        => 'required_without:flag_unknow_time',
            'flag_unknow_time' => 'required_without:birthtime',
            'is_thailand'      => 'required_without:timezone',
            'timezone'         => 'required_without:is_thailand',
            'province'         => 'required_if:is_thailand,true'
        ]);

        if ($validator->fails()) {
            throw new InvalidArgumentException(json_encode(['message' => $validator->errors()->first()]), 1002);
        }

        return true;
    }

    /**
     * Get ctoken
     *
     * @param array $data
     *
     * @return mixed
     */
    public function getCToken($data)
    {
        $response = null;
        try {
            $client = new AwsGatewayClient([
                'refcode' => Arr::get($data, 'ref_code')
            ]);

            $response = $client->get('/vhora/ctoken', $this->buildParam($data));
        } catch (ClientException $e) {
            if ($e->hasResponse()) {
                $response                = json_decode($e->getResponse()->getBody()->getContents(), true);
                $response['status_code'] = $e->getResponse()->getStatusCode();
            }

            LogService::writeServiceLog(
                'VHora',
                'get ctoken',
                json_encode_unicode($response),
                Carbon::now()->format('d/m/Y H:i:s')
            );
        } catch (\Exception $e) {
            LogService::writeServiceLog(
                'VHora::Exception',
                json_encode_unicode($data),
                json_encode_unicode($e->getMessage()),
                Carbon::now()->format('d/m/Y H:i:s')
            );
        }

        return $response;
    }

    /**
     * Build parameter
     *
     * @param array $data
     *
     * @return array
     */
    public function buildParam($data)
    {
        $result = [];

        if (empty($data['is_thailand']) && isset($data['province'])) {
            unset($data['province']);
        }

        foreach ($data as $key => $value) {
            $result[camel_case($key)] = $value;
        }

        return $result;
    }

    /**
     * Check restriction OTP
     *
     * @param array $data
     *
     * @return void
     */
    public function checkRestrictionOtp($data)
    {
        $this->isAvailableOtp($data);
    }

    /**
     * Query OTP pending status
     *
     * @param array $data
     *
     * @return array
     */
    private function queryPendingOtp($data)
    {
        $model  = new TruemovehOtpTransactionsModel();
        return $model->findPendingOtp($data);
    }

    /**
     * Check OTP is available to varify
     *
     * @param array $data
     *
     * @return mixed
     */
    private function isAvailableOtp($data)
    {
        $msisdn   = array_get($data, 'msisdn');
        $model    = new TruemovehOtpTransactionsModel();
        $result   = $model->findOtpThisDay($msisdn);
        $verified = collect($result)->unique('ref_code')->count();

        if ($verified >= $this->rate_limit) {
            throw new InvalidArgumentException(json_encode([
                'status_code' => 429,
                'message'     => 'Rate limit exceeded'
            ]), 1004);
        }

        return true;
    }

    /**
     * Update OTP status
     *
     * @param array $data
     *
     * @return void
     */
    public function updateOtpStatus($data)
    {
        $data = $this->queryPendingOtp($data);
        data_set($data, '*.success', true);
        data_set($data, '*.verified_at', Carbon::now()->timestamp);

        foreach ($data as $value) {
            $model = new TruemovehOtpTransactionsModel();
            $model->update($value);
        }

        return $data;
    }
}
