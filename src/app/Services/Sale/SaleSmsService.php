<?php

namespace App\Services\Sale;

use App\Facades\ErrorMessages\VHora as VHoraMessages;
use App\Libraries\Clients\AwsGatewayClient;
use App\Libraries\RequestData\SaleRequest;
use App\Models\TruemovehConfigModel;
use App\Models\TruemovehSaleModel;
use App\Models\TruemovehSaleShopModel;
use App\Services\GuzzleService;
use App\Services\LogService;
use App\Services\WlsService;
use Illuminate\Support\Facades\Redis;

class SaleSmsService
{
    private $input;

    public function manageException($e, $step = 'SaleSmsService')
    {
        $code    = $e->getCode();
        $code    = $code == 0 ? 406 : $code;
        $message = $e->getMessage();

        LogService::writeServiceLog($step, json_encode_unicode($this->input), json_encode_unicode(["message" => $message]), date('d/m/Y H:i:s'));

        return [
            'response' => $this->createErrorMessage($message),
            'code'     => $code
        ];
    }

    private function createErrorMessage($response_error = [])
    {
        $result        = [];
        if ($response_error) {
            $result['errors']['description'] = $response_error;
        }

        return $result;
    }

    public function processSaleSms($input)
    {
        try {
            $this->input = $input;
            $request     = new SaleRequest();

            $request->setRequestInputProcessSaleSms($input);
            $result_create_sms = $this->callCreateSaleSms($request->getRequest());

            $request->setRequestSendSms($result_create_sms);
            $result = $this->callSendSms($request->getRequest());

            $response = ['response' => ['data' => $result], 'code' => 200];
        } catch (\InvalidArgumentException $e) {
            $response = $this->manageException($e);
        } catch (\UnexpectedValueException $e) {
            $response = $this->manageException($e);
        } catch (\OutOfBoundsException $e) {
            $response = $this->manageException($e);
        } catch (\Exception $e) {
            $response = $this->manageException($e);
        }

        return $response;
    }

    private function callCreateSaleSms($input)
    {
        $request_token = new \Illuminate\Http\Request();
        $request_token->setMethod('POST');

        $request_token->replace($input);

        $url                    = "order/tmh/sale/sms";
        $header["x-api-auth"]   = env('X_API_AUTH', false);
        $header["Content-Type"] = "application/json";
        $content                = GuzzleService::postGuzzleRequest(
            $url,
            'POST',
            $request_token,
            $header,
            env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/')
        );

        $content_code = array_get($content, 0, 400);
        $content_data = json_decode(array_get($content, 1, '{}'), true);

        if ($content_code != 200) {
            throw new \UnexpectedValueException('Fail create sale sms', 406);
        }

        $data = array_get($content_data, 'data');
        if (!$data) {
            throw new \OutOfBoundsException('Not found sale sms data', 406);
        }

        return $data;
    }

    private function callSendSms($input)
    {
        $response_data = GuzzleService::postRequest(
            env('SMS_URL', 'https://api.wls-dev.com/') . 'whatsup-sa/smsg-template',
            'POST',
            array_get($input, 'body'),
            array_get($input, 'header')
        );

        $response_code        = (int) array_get($response_data, 'rsr.rsr_detail.code', '400');
        $response_description = array_get($response_data, 'rsr.rsr_detail.description', 'Fail send sale sms');
        if ($response_code != 0) {
            throw new \UnexpectedValueException($response_description . "($response_code)", 417);
        }

        return $response_description;
    }

    public function processSaleQr($input)
    {
        try {
            $this->input = $input;
            $request     = new SaleRequest();
            $request->setRequestInputProcessSaleSms($input);
            $result_create_sms = $this->callCreateSaleSms($request->getRequest());
            $request->setRequestQr($result_create_sms);
            $result = $request->getRequest();
            $response = ['response' => ['data' => ['url' => $result]], 'code' => 200];
        } catch (\InvalidArgumentException $e) {
            $response = $this->manageException($e);
        } catch (\UnexpectedValueException $e) {
            $response = $this->manageException($e);
        } catch (\OutOfBoundsException $e) {
            $response = $this->manageException($e);
        } catch (\Exception $e) {
            $response = $this->manageException($e);
        }

        return $response;
    }

    public static function getTmhSaleConFig($shop_code)
    {
        try {
            $result = [];
            $cache = Redis::get("truestore:truemoveh_sale_config:$shop_code");

            if ($cache) {
                $result = json_decode($cache, 1);
            }

            if(!$result) {
                $model  = new TruemovehSaleModel();
                $result = $model->findConfigByShopCode($shop_code);
                $result = $result ? $result->toArray() : [];
                if ($result) {
                    Redis::set("truestore:truemoveh_sale_config:$shop_code", json_encode($result));
                }
            }
            $response['direct_url'] = json_decode(array_get($result, 'direct_url'), 1);
            $response['config']     = json_decode(array_get($result, 'config'), 1);
        } catch (Exception $e) {
            $response = [];
        }

        return $response;
    }

    public static function getTmhSaleShopByAlias($alias)
    {
        try {
            $result = [];
            $cache = Redis::get("truestore:truemoveh_sale_shop:$alias");

            if ($cache) {
                $result = json_decode($cache, 1);
            }

            if(!$result) {
                $model        = new TrueMovehSaleShopModel();
                $result       = $model->findConfigByAlias($alias);
                $result       = $result ? $result->toArray() : [];
                if ($result) {
                    Redis::set("truestore:truemoveh_sale_shop:$alias", json_encode($result));
                }
            }
            $response = ['shop' => $result];
        } catch (Exception $e) {
            $response = [];
        }

        return $response;
    }

    public static function getTmhSaleChannelAndSaleAlias()
    {
        try{
            $response = [];
            $cache = Redis::get('truemoveh:sale_config');

            if ($cache) {
                $response = json_decode($cache, 1);
            }

            if(!$response) {
                $config_model = new TruemovehConfigModel();
                $result       = $config_model->findIn(['sale_alias', 'sale_channel', 'sale_product_type', 'sale_ads_campaign_by_channel']);
                $data         = $result ? $result->toArray() : [];
                $response = array_map('json_decode',array_column($data, 'value', 'key'));
                Redis::set('truemoveh:sale_config', json_encode($response));
            }

        }catch(Exception $e){
            $response = [];
        }

        return $response;
    }

    public static function sendSuccessSMS($input)
    {
        $request            = new SaleRequest;
        $sale_sms_service   = new SaleSmsService();

        $request->setRequestSendSmsSuccessSelller($input);
        $sale_sms_service->callSendSms($request->getRequest());

        $request->setRequestSendSmsSuccessBuyer($input);
        $sale_sms_service->callSendSms($request->getRequest());
    }

    public function processValidateShopCode($input)
    {
        try {
            $request     = new SaleRequest();
            $request->setRequestValidateShopCode($input);
            $account_type = array_get($input, 'account_type', 'true');

            if ($account_type == 'no_validate') {
                $result_validate_shop_code = [];
            } else {
                $result_validate_shop_code = $this->callValidateShopCode($request->getRequest());
            }

            $response = ['response' => ['data' => $result_validate_shop_code], 'code' => 200];
        } catch (\InvalidArgumentException $e) {
            $response = $this->manageException($e, 'SalesChannel:validate-shop-code-validate-exception');
        } catch (\UnexpectedValueException $e) {
            $response = $this->manageException($e, 'SalesChannel:validate-shop-code-unexpected-exception');
        } catch (\Exception $e) {
            $response = $this->manageException($e, 'SalesChannel:validate-shop-code-exception');
        }

        return $response;
    }

    private function callValidateShopCode($data) {
        $headers = [
            'x-api-key'    => env('X_API_KEY_TOL_SSV', false),
            'Content-Type' => 'application/json',
        ];
        $fixed_parameter_list = [
            'base_url' => env('AWS_GATEWAY_URL_TOL_SSV', false),
        ];
        $tmp_lrequest = new \Illuminate\Http\Request();
        $tmp_lrequest->replace($data);
        $result = WlsService::operateRequestAction('/sales-channel/validate-shop-code', 'POST', $tmp_lrequest, $headers, $fixed_parameter_list);

        LogService::writeServiceLog(
            'SalesChannel:validate-shop-code',
            json_encode(["tmp_lrequest" => $tmp_lrequest->all(), 'fixed_parameter_list' => $fixed_parameter_list], true),
            json_encode($result, true),
            (new \DateTime())->format('d/m/Y H:i:s')
        );

        $response_data   = \json_decode(\Arr::get($result, 1, '{}'), true);
        $code            = \Arr::get($response_data, 'errorCode', '');
        $message         = \Arr::get($response_data, 'message', '');
        $valid_indicator = \Arr::get($response_data, 'validIndicator', '');
        if ($message != 'Success.' || $code != 'INT00001' || $valid_indicator != 'Y') {
            throw new \UnexpectedValueException('Validate shop code error.', 406);
        }

        return $response_data;
    }
}
