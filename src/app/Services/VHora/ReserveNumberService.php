<?php
namespace App\Services\VHora;

use App\Services\WlsService;
use App\Services\LogService;
use App\Libraries\Clients\AwsGatewayClient;
use Illuminate\Support\Arr;
use App\Libraries\Clients\BifrostClient;
use App\Services\WeOmniService;
use Illuminate\Support\Carbon;
use GuzzleHttp\Exception\RequestException;
use Exception;

class ReserveNumberService
{
    public static function postReserveNumber($data)
    {
        $headers = [
            'x-api-key'    => env('X_API_KEY_TOL_SSV', false),
            'Content-Type' => 'application/json',
        ];
        $fixed_parameter_list = [
            'base_url' => env('AWS_GATEWAY_URL_TOL_SSV', false),
        ];
        $tmp_lrequest = new \Illuminate\Http\Request();
        $tmp_lrequest->replace($data);
        $result = WlsService::operateRequestAction('/vhora/reserve-number', 'POST', $tmp_lrequest, $headers, $fixed_parameter_list);

        LogService::writeServiceLog(
            "VHora:offline-reserve-number",
            json_encode(["tmp_lrequest" => $tmp_lrequest->all(), 'fixed_parameter_list' => $fixed_parameter_list], true),
            json_encode($result, true),
            (new \DateTime())->format('d/m/Y H:i:s')
        );

        $result["is_pass"] = false;
        $response_data     = \json_decode(array_get($result, 1, '{}'), true);
        $code              = array_get($response_data, 'serviceResult.code', '');
        $result["code"]    = $code;
        if ($response_data && $code == 200) {
            $result["is_pass"] = true;

        }

        return $result;
    }

    /**
     * reserveNumberAllocate
     *
     * @param array $parameters
     *
     * @return boolean
     */
    public static function reserveNumberAllocate($parameters)
    {        
        $client         = new AwsGatewayClient();
        $reserve_result = $client->post('/vhora/reserve-number-allocate', $parameters);

        LogService::writeServiceLog(
            "ReserveAllocate:reserve-number-allocate",
            json_encode(["request" => $parameters]),
            json_encode(["response" => $reserve_result]),
            (new \DateTime())->format('d/m/Y H:i:s')
        );

        $reserve_result = Arr::get($reserve_result, 'serviceResult.code');

        return $reserve_result == '200' ? true : false;
    }

    /**
     * reserveNumberEsim
     *
     * @param array $parameters
     *
     * @return boolean
     */
    public static function reserveNumber3GW($parameters = [])
    {
        try {
            $response       = false;
            $response_token = WeOmniService::postRequestAccessToken();
            $response_token = array_get($response_token, '1');
            $response_token = json_decode($response_token, true);
            $access_token   = array_get($response_token, 'access_token', false);
            $project_id     = env('TOL_SSV_PROJECT_ID', '5ec74ca9dbfe8c0001edd2a9');
            $correlation_id = array_get($parameters, 'correlationId');

            if (empty($correlation_id)) return false;

            $bifrost = new BifrostClient([
                'Authorization'    => "Bearer $access_token",
                'X-Correlation-ID' => $correlation_id
            ]);

            $reserve_result = $bifrost->post("bifrost/api/true-it/projects/$project_id/order-sync/reserve-number/$correlation_id", $parameters);

            LogService::writeServiceLog(
                "ReserveNumber3GW:reserve-number",
                json_encode(["request" => $parameters]),
                json_encode(["response" => $reserve_result]),
                Carbon::now()->format('d/m/Y H:i:s')
            );

            $reserve_result = Arr::get($reserve_result, 'code');
            $response       = $reserve_result == '200' ? true : false;
        } catch (RequestException $error) {
            $error_message = [];
            if ($error->hasResponse()) {
                $error_message = json_decode($error->getResponse()->getBody()->getContents(), true);
            }

            LogService::writeServiceLog(
                "ReserveNumber3gwRequestException:reserve-number",
                json_encode(["request" => $parameters]),
                json_encode(["response" => !empty($error_message) ? $error_message : $error->getMessage()]),
                Carbon::now()->format('d/m/Y H:i:s')
            );
        } catch (Exception $error) {
            LogService::writeServiceLog(
                "ReserveNumber3gwException:reserve-number",
                json_encode(["request" => $parameters]),
                json_encode(["response" => $error->getMessage()]),
                Carbon::now()->format('d/m/Y H:i:s')
            );
        }

        return $response;
    }
}
