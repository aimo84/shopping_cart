<?php

namespace App\Services;

use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use App\Services\LogService;
use App\Services\WlsService;
use Illuminate\Support\Carbon;
use App\Services\WeOmniService;
use Illuminate\Support\Facades\Redis;
use App\Libraries\Clients\BifrostClient;
use GuzzleHttp\Exception\RequestException;
use App\Services\StoreService;
use Exception;

class MobileAllocateService
{
    public $request_no  = 1;
    public $max_request = 2;
    public $cache_time  = 13 * 60;
    private $key_cookie = 'tos-list-allocate-msisdn';

    public function getMobileAllocateFromCache()
    {
        $redis_data       = Redis::get('mobile-allocate-data:' . $this->nas_code . ':' . $this->session_id);
        $data_on_cache    = json_decode($redis_data, 1);
        $this->request_no = Arr::get($data_on_cache, 'request', 0) + 1;

        return Arr::get($data_on_cache, 'mobile') ?? [];
    }

    public function setMobileAllocateToCache($data)
    {
        if (empty($this->session_id)) {
            $this->session_id = Str::uuid()->toString();
            $this->setCookie($this->session_id, time() + ((3600 * 24) * 30), "/");
        }

        $mobile_data = [];
        $results     = [];
        $mobiles     = Arr::get($data, 'data.listMsisdn') ?? [];

        foreach ($mobiles as $mobile) {
            $mobile['ref_id']    = Arr::get($data, 'data.refId');
            $mobile['is_assign'] = Arr::get($data, 'data.isAssign');
            $mobile_data[]       = $mobile;
        }

        $data_on_cache      = json_decode(Redis::get('mobile-allocate-data:' . $this->nas_code . ':' . $this->session_id), true) ?? [];
        $mobile_on_cache    = Arr::get($data_on_cache, 'mobile', []);
        $results['mobile']  = array_merge($mobile_on_cache, $mobile_data);
        $results['request'] = $this->request_no;

        Redis::set('mobile-allocate-data:' . $this->nas_code . ':' . $this->session_id, json_encode($results), 'EX', $this->cache_time);

        return $mobile_data;
    }

    public function getMobile($data = [])
    {
        $this->session_id  = Arr::get($_COOKIE, $this->key_cookie, '');
        $this->limit       = Arr::get($data, 'limit', 10);
        $this->page        = Arr::get($data, 'page');
        $this->offset      = Arr::get($data, 'offset', 0);
        $this->noOfReq     = Arr::get($data, 'noOfReq', 10);
        $this->nas_code    = Arr::get($data, 'nas_code');
        $this->sim_type    = Arr::get($data, 'sim_type');
        $this->max_page    = false;
        $validation        = $this->validate();

        Arr::set($data, 'service_type', ['postpaid' => 'R1', 'prepaid' => 'R2']);

        if (!empty($validation)) return $validation;

        $response_mobile = $this->getMobileAllocateFromCache();

        if ($this->request_no <= 2) {
            $request         = $this->buildRequest($data);
            $response_mobile = $this->callListAllocateMsisdn($request);
            $response_code   = (int) Arr::get($response_mobile, 'serviceResult.code');

            if ($response_code != 200) {
                return $this->listResultsError();
            }

            $response_mobile = $this->setMobileAllocateToCache($response_mobile);
        }

        if ($this->request_no >= $this->max_request) {
            $this->max_page  = true;
        }

        if ($this->request_no > $this->max_request) {
            $response_mobile = $this->slicePage($response_mobile);
        }

        $content_product     = $this->getProductVerify($data);
        $response_data       = $this->buildResponse($content_product, $response_mobile);
        $response_pagination = $this->makePagination();
        $results             = $this->listResults($response_data, $response_pagination, $response_mobile);

        return $results;
    }

    public function getProductVerify($request)
    {
        $product_verify_data = [];
        $product_id          = Arr::get($request, 'product_id');
        $product_id          = explode("L", $product_id)[1];
        $mothod              = "get";
        $url                 = "truemoveh/product-verify/$product_id";
        $content_product     = WlsService::getProductVerifySimPostpaid($url, $mothod, new \Illuminate\Http\Request(), []);

        if (!empty(json_decode(Arr::get($content_product, 1), true))) {
            $product_verify_data = json_decode(Arr::get($content_product, 1), true);
        }

        return $product_verify_data;
    }

    public function buildRequest($data)
    {
        $service_type  = Arr::get($data, 'service_type');
        $sim_type      = Arr::get($data, 'sim_type');
        $service_type  = Arr::get($service_type, $sim_type);
        $store_service = new StoreService();

        $params['correlatedId']     = Str::uuid()->toString();
        $params['companyCode']      = 'AL';
        $params['dealerCode']       = '';
        $params['poolName']         = 'PRETUCESIM';
        $params['pstId']            = $store_service->processGetExternalNasCodeByNasCode($this->nas_code);
        $params['serviceType']      = $service_type;
        $params['webMethodChannel'] = 'TOS-PRE-ESIM';
        $params['noOfReq']          = $this->noOfReq;

        return $params;
    }

    public function buildResponse($product_data, $mobiles)
    {
        $main_data   = [];
        $this->total = count($mobiles);

        foreach ($mobiles as $data) {

            $product_info = [
                'product_id'           => Arr::get($product_data, 'product_id'),
                'title'                => Arr::get($product_data, 'title.th'),
                'image'                => Arr::get($product_data, 'images.0.url'),
                'price'                => Arr::get($product_data, 'inventories.0.price'),
                'product_type'         => Arr::get($product_data, 'product_type'),
                'sim_type'             => Arr::get($product_data, 'sim_type'),
                'propo_code'           => Arr::get($product_data, 'propo_code'),
                'special_url'          => Arr::get($product_data, 'special_url'),
                'status'               => Arr::get($product_data, 'status'),
                'store_id'             => Arr::get($product_data, 'merchant.store_id'),
                'inventory_id'         => Arr::get($product_data, 'inventories.0.id'),
                'proposition_baseline' => Arr::get($product_data, 'proposition_baseline', ''),
            ];

            $main_data[] = [
                'number'            => Arr::get($data, 'msisdn'),
                'sum'               => Arr::get($data, 'sum'),
                'name'              => Arr::get($product_data, 'title.th'),
                'sim_type'          => Arr::get($product_data, 'sim_type'),
                'company_code'      => Arr::get($data, 'companyCode'),
                'mobile_pattern_id' => Arr::get($product_data, ''),
                'product_info'      => $product_info,
                'refId'             => Arr::get($data, 'ref_id'),
                'isAssign'          => Arr::get($data, 'is_assign')
            ];
        }

        $response['record']      = $main_data;
        $response['max_request'] = $this->max_page;

        return $response;
    }

    public function callListAllocateMsisdn($parameters = [])
    {
        try {
            $response_token = WeOmniService::postRequestAccessToken();
            $response_token = Arr::get($response_token, '1');
            $response_token = json_decode($response_token, true);
            $access_token   = Arr::get($response_token, 'access_token', false);
            $project_id     = env('TOL_SSV_PROJECT_ID', '5ec74ca9dbfe8c0001edd2a9');
            $correlation_id = Arr::get($parameters, 'correlatedId');

            if (empty($correlation_id)) return false;

            $bifrost = new BifrostClient([
                'Authorization' => "Bearer $access_token",
                'Content-Type'  => 'application/json',
            ]);

            $url      = "order-sync/list-allocate-msisdn";
            $response = $bifrost->post("bifrost/api/true-it/projects/$project_id/$url", $parameters);

            LogService::writeServiceLog(
                "listAllocateMsisdn:get-allocate-msisdn",
                json_encode(["request"  => $parameters]),
                json_encode(["response" => $response]),
                Carbon::now()->format('d/m/Y H:i:s')
            );
        } catch (RequestException $error) {
            $error_message = [];

            if ($error->hasResponse()) {
                $error_message = json_decode($error->getResponse()->getBody()->getContents(), true);
            }

            LogService::writeServiceLog(
                "listAllocateMsisdnRequestException:get-allocate-msisdn",
                json_encode(["request"  => $parameters]),
                json_encode(["response" => !empty($error_message) ? $error_message : $error->getMessage()]),
                Carbon::now()->format('d/m/Y H:i:s')
            );

            $response['serviceResult'] = [
                'code' => 404
            ];
        } catch (Exception $error) {
            LogService::writeServiceLog(
                "listAllocateMsisdnException:get-allocate-msisdn",
                json_encode(["request"  => $parameters]),
                json_encode(["response" => $error->getMessage()]),
                Carbon::now()->format('d/m/Y H:i:s')
            );

            $response['serviceResult'] = [
                'code' => 404
            ];
        }

        return $response ?? [];
    }

    public function slicePage($data)
    {
        $offset = $this->noOfReq * ($this->page - 1);

        return array_slice($data, $offset, $this->noOfReq);
    }

    public function makePagination()
    {
        $pagination = [
            'current' => (int) $this->page,
            'limit'   => (int) $this->limit,
            'total'   => (int) $this->total
        ];

        return [
            'pagination' => $pagination,
        ];
    }

    public function listResults($records, $pagination, $response_mobile)
    {
        $main['benchmark']      = 'false';
        $main['pagination']     = Arr::get($pagination, 'pagination');
        $status_txt             = Arr::get($response_mobile, 'serviceResult.status', 'OK');
        $results['status_code'] = Arr::get($response_mobile, 'serviceResult.code', 200);
        $results['status_txt']  = $status_txt;
        $results['data']        = array_merge($main, $records);

        return [200, json_encode($results)];
    }

    public function listResultsError()
    {
        $results['status_code']   = 404;
        $results['status_txt']    = 'Not Found';
        $results['data']['error'] = [
            'message' => 'Data not found',
            'code'    => 404
        ];

        return [200, json_encode($results)];
    }

    public function validate()
    {
        if (!(int)($this->noOfReq) || $this->noOfReq > 10) {

            $results['status_code']   = 400;
            $results['status_txt']    = 'Invalid validation rule';
            $results['data']['error'] = [
                'message' => 'The "noOfReq" field must be an integer and a maximum of 10 characters.',
                'code'    => 400
            ];

            return [200, json_encode($results)];
        }

        return [];
    }

    public function setCookie($cookie_data, $time)
    {
        setcookie($this->key_cookie, $cookie_data, $time, '/');
    }
}
