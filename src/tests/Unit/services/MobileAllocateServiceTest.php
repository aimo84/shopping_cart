<?php

namespace Tests\Unit;

use Exception;
use Mockery as m;
use Tests\TestCase;
use Illuminate\Support\Arr;
use App\Services\WlsService;
use Illuminate\Support\Facades\Redis;
use App\Services\MobileAllocateService;
use GuzzleHttp\Exception\RequestException;
use GuzzleHttp\Psr7\Request;
use GuzzleHttp\Psr7\Response;

class MobileAllocateServiceTest extends TestCase
{
    /**
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testValidateNoOfRequest()
    {
        $method   = "get";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));

        $url = 'truemoveh/mobile/search';
        $request_parameter['section']    = 'wemall';
        $request_parameter['sim_type']   = 'prepaid';
        $request_parameter['nas_code']   = '0106551';
        $request_parameter['page']       = 1;
        $request_parameter['product_id'] = 'L91597857';
        $request_parameter['noOfReq']    = 12;

        $lrequest->replace($request_parameter);

        if (count($lrequest->all()) > 0 && $method == "get") {
            $url .= '?';
            foreach ($lrequest->all() as $key => $value) {
                $url .= $key . '=' . $value . '&';
            }
        }

        $header  = [];
        $mock_model_config_skip = m::mock('overload:App\Models\TruemovehSimAutoSyncModel')->makePartial();
        $mock_model_config_skip->shouldReceive('findFirst')
            ->with('L91597857')
            ->andReturn(['product_id' => 'L91597857']);

        Redis::shouldReceive('get')->with('truestore:typhoon_filter_sim_nascode:product_id:L91597857:redis_data')->andReturn(null);

        $content = WlsService::getMobileSearch($url, $method, $lrequest, $header);

        $data = json_decode($content[1], true);

        $this->assertArrayHasKey('status_txt', json_decode($content[1], true));
        $this->assertEquals('Invalid validation rule', Arr::get($data, 'status_txt'));
        $this->assertEquals('The "noOfReq" field must be an integer and a maximum of 10 characters.', Arr::get($data, 'data.error.message'));
    }

    /**
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testRequestException()
    {
        $input['correlatedId'] = 'iIsInR5cCI6IkpXVCJ9';

        $mock_access_response = '[200,"{\"access_token\":\"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJncmFudF90eXBlIjoiY2xpZW50X2NyZWRlbnRpYWxzIiwic2NvcGUiOlsiY21zLmN0LnciLCJjbXMuY3QuZCIsImNtcy5jdC5zIiwiY21zLmN0LnIiLCJjbXMuY3QuKiJdLCJleHAiOjE2NDkzMzU0ODgsImlhdCI6MTY0OTMzNDg4OCwianRpIjoiYThkZGFlMjAtMzU4NS00ZWQxLTk4OTctYzdmNjdkZmM3OTU0IiwiY2xpZW50X2lkIjoiNjY2NDIzNTktYWRiMi00NzJlLWJmMmQtOTYzZmIyY2M1ZWY2In0.j2F2voLqsqDNH336bLhTQiYlPphhagOMd_W1jgHQrcpIKD-5cyIrUwqFpgAnmR1p_srq83dGoNqPxN26FamowujPRTjWrlPs60e-JO_-uYyjJBit3I45PiCUsDuPfpeKgOPGgVYo6psohqjML0JAXGRwhT3ZGdOZwpiIZhU9J9dDuV3ManUA7upNNx49eL49mTvTTSI_NEH7RbDwpOEyQsYmaV53iyN80D4ZrYr0Csu9B5PegT0Dvf8KLHm56lwjjlLqFPxdu5fdelJ5puTlVEOFsGzA2uxjh8RMvfwklnh0TzuHNbM9VriVKyqmkId5z9FYD3LyeXjMPU7BypBL1Q\",\"token_type\":\"bearer\",\"expires_in\":599,\"scope\":\"cms.ct.w cms.ct.d cms.ct.s cms.ct.r cms.ct.*\",\"grant_type\":\"client_credentials\",\"iat\":1649334888,\"jti\":\"a8ddae20-3585-4ed1-9897-c7f67dfc7954\"}"]';
        $mock_access_response = json_decode($mock_access_response, true);

        $request_access_token = m::mock('overload:App\Services\WeOmniService');
        $request_access_token->shouldReceive('postRequestAccessToken')->andReturn($mock_access_response);

        $mock_response = '{ "code": "400", "description": "Bad Request", "correlationId": "iIsInR5cCI6IkpXVCJ9", "3gwTrackingId": "aae10bc6-faea-4920-bae3-5d4ec7ae574a", "inputRequire": "CompanyCode", "message": { "messageTh": "Bad Request", "messageEn": "Bad Request" }, "errors": [ { "param": "xxxx", "message": "required" } ] }';

        $response = new Response(
            400,
            ['Content-Type' => 'application/json'],
            json_encode($mock_response)
        );

        $exception = new RequestException('Mock Client Exception', new Request('POST', ''), $response);
        $mock_client   = m::mock('overload:App\Libraries\Clients\BifrostClient');
        $mock_client->shouldReceive('post')->andThrow($exception);

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        $mock_mobile = new MobileAllocateService();
        $content = $mock_mobile->callListAllocateMsisdn($input);

        $this->assertEquals(404,  Arr::get($content, 'serviceResult.code'));
    }

    /**
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testGetMobileFromRedisSuccess()
    {
        $method   = "get";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));

        $url = 'truemoveh/mobile/search';
        $request_parameter['section']    = 'wemall';
        $request_parameter['sim_type']   = 'prepaid';
        $request_parameter['nas_code']   = '0106551';
        $request_parameter['page']       = 1;
        $request_parameter['product_id'] = 'L91597857';
        $request_parameter['noOfReq']    = 10;

        $lrequest->replace($request_parameter);

        if (count($lrequest->all()) > 0 && $method == "get") {
            $url .= '?';
            foreach ($lrequest->all() as $key => $value) {
                $url .= $key . '=' . $value . '&';
            }
        }

        $header  = [];
        $mock_model_config_skip = m::mock('overload:App\Models\TruemovehSimAutoSyncModel')->makePartial();
        $mock_model_config_skip->shouldReceive('findFirst')
            ->with('L91597857')
            ->andReturn(['product_id' => 'L91597857']);

        $redis_data = '{"mobile":[{"msisdn":"0610014426","sum":"26","pool":"PRETUCESIM","level":"eSIM","priceLevel":"ESIM-PLATINUM","poolDesc":"Prepaid Special E-Sim","companyCode":"RF","rc":null,"contract":null,"actType":"R2","zone":"BKPRE","ref_id":"2ca12a4d-020b-4265-aaa9-4d40d13ddf3b","is_assign":"N"},{"msisdn":"0610014466","sum":"24","pool":"PRETUCESIM","level":"eSIM","priceLevel":"ESIM-PLATINUM","poolDesc":"Prepaid Special E-Sim","companyCode":"RF","rc":null,"contract":null,"actType":"R2","zone":"BKPRE","ref_id":"2ca12a4d-020b-4265-aaa9-4d40d13ddf3b","is_assign":"N"},{"msisdn":"0610014467","sum":"34","pool":"PRETUCESIM","level":"eSIM","priceLevel":"ESIM-PLATINUM","poolDesc":"Prepaid Special E-Sim","companyCode":"RF","rc":null,"contract":null,"actType":"R2","zone":"BKPRE","ref_id":"2ca12a4d-020b-4265-aaa9-4d40d13ddf3b","is_assign":"N"},{"msisdn":"0610014460","sum":"26","pool":"PRETUCESIM","level":"eSIM","priceLevel":"ESIM-PLATINUM","poolDesc":"Prepaid Special E-Sim","companyCode":"RF","rc":null,"contract":null,"actType":"R2","zone":"BKPRE","ref_id":"2ca12a4d-020b-4265-aaa9-4d40d13ddf3b","is_assign":"N"},{"msisdn":"0610014439","sum":"38","pool":"PRETUCESIM","level":"eSIM","priceLevel":"ESIM-PLATINUM","poolDesc":"Prepaid Special E-Sim","companyCode":"RF","rc":null,"contract":null,"actType":"R2","zone":"BKPRE","ref_id":"2ca12a4d-020b-4265-aaa9-4d40d13ddf3b","is_assign":"N"},{"msisdn":"0610014447","sum":"15","pool":"PRETUCESIM","level":"eSIM","priceLevel":"ESIM-PLATINUM","poolDesc":"Prepaid Special E-Sim","companyCode":"RF","rc":null,"contract":null,"actType":"R2","zone":"BKPRE","ref_id":"2ca12a4d-020b-4265-aaa9-4d40d13ddf3b","is_assign":"N"},{"msisdn":"0610014437","sum":"26","pool":"PRETUCESIM","level":"eSIM","priceLevel":"ESIM-PLATINUM","poolDesc":"Prepaid Special E-Sim","companyCode":"RF","rc":null,"contract":null,"actType":"R2","zone":"BKPRE","ref_id":"2ca12a4d-020b-4265-aaa9-4d40d13ddf3b","is_assign":"N"},{"msisdn":"0610014474","sum":"26","pool":"PRETUCESIM","level":"eSIM","priceLevel":"ESIM-PLATINUM","poolDesc":"Prepaid Special E-Sim","companyCode":"RF","rc":null,"contract":null,"actType":"R2","zone":"BKPRE","ref_id":"2ca12a4d-020b-4265-aaa9-4d40d13ddf3b","is_assign":"N"},{"msisdn":"0610014428","sum":"10","pool":"PRETUCESIM","level":"eSIM","priceLevel":"ESIM-PLATINUM","poolDesc":"Prepaid Special E-Sim","companyCode":"RF","rc":null,"contract":null,"actType":"R2","zone":"BKPRE","ref_id":"2ca12a4d-020b-4265-aaa9-4d40d13ddf3b","is_assign":"N"},{"msisdn":"0610014479","sum":"26","pool":"PRETUCESIM","level":"eSIM","priceLevel":"ESIM-PLATINUM","poolDesc":"Prepaid Special E-Sim","companyCode":"RF","rc":null,"contract":null,"actType":"R2","zone":"BKPRE","ref_id":"2ca12a4d-020b-4265-aaa9-4d40d13ddf3b","is_assign":"N"}],"request":2}';

        Redis::shouldReceive('get')->with('mobile-allocate-data:0106551:')->andReturn($redis_data);
        Redis::shouldReceive('set')->with('mobile-allocate-data:0106551:')->andReturn($redis_data);


        Redis::shouldReceive('get')->with('truestore:typhoon_filter_sim_nascode:product_id:L91597857:redis_data')->andReturn(null);

        $store_service = m::mock('overload:App\Services\StoreService');
        $store_service->shouldReceive('processGetExternalNasCodeByNasCode')->with('0106551')->andReturn('0106551');

        $mock_access_response = '[200,"{\"access_token\":\"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJncmFudF90eXBlIjoiY2xpZW50X2NyZWRlbnRpYWxzIiwic2NvcGUiOlsiY21zLmN0LnciLCJjbXMuY3QuZCIsImNtcy5jdC5zIiwiY21zLmN0LnIiLCJjbXMuY3QuKiJdLCJleHAiOjE2NDkzMzU0ODgsImlhdCI6MTY0OTMzNDg4OCwianRpIjoiYThkZGFlMjAtMzU4NS00ZWQxLTk4OTctYzdmNjdkZmM3OTU0IiwiY2xpZW50X2lkIjoiNjY2NDIzNTktYWRiMi00NzJlLWJmMmQtOTYzZmIyY2M1ZWY2In0.j2F2voLqsqDNH336bLhTQiYlPphhagOMd_W1jgHQrcpIKD-5cyIrUwqFpgAnmR1p_srq83dGoNqPxN26FamowujPRTjWrlPs60e-JO_-uYyjJBit3I45PiCUsDuPfpeKgOPGgVYo6psohqjML0JAXGRwhT3ZGdOZwpiIZhU9J9dDuV3ManUA7upNNx49eL49mTvTTSI_NEH7RbDwpOEyQsYmaV53iyN80D4ZrYr0Csu9B5PegT0Dvf8KLHm56lwjjlLqFPxdu5fdelJ5puTlVEOFsGzA2uxjh8RMvfwklnh0TzuHNbM9VriVKyqmkId5z9FYD3LyeXjMPU7BypBL1Q\",\"token_type\":\"bearer\",\"expires_in\":599,\"scope\":\"cms.ct.w cms.ct.d cms.ct.s cms.ct.r cms.ct.*\",\"grant_type\":\"client_credentials\",\"iat\":1649334888,\"jti\":\"a8ddae20-3585-4ed1-9897-c7f67dfc7954\"}"]';
        $mock_access_response = json_decode($mock_access_response, true);

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        $content = WlsService::getMobileSearch($url, $method, $lrequest, $header);

        $data = json_decode($content[1], true);

        $this->assertEquals(200,  Arr::get($data, 'status_code'));
        $this->assertEquals('OK', Arr::get($data, 'status_txt'));
        $this->assertEquals(10,   Arr::get($data, 'data.pagination.total'));
        $this->assertEquals(10,   count(Arr::get($data, 'data.record')));
        $this->assertArrayHasKey('refId', Arr::get($data, 'data.record.0'));
        $this->assertArrayHasKey('isAssign', Arr::get($data, 'data.record.0'));
    }

    /**
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testSetMobileToRedisSuccess()
    {
        $method   = "get";
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod(strtoupper($method));

        $url = 'truemoveh/mobile/search';
        $request_parameter['section']    = 'wemall';
        $request_parameter['sim_type']   = 'prepaid';
        $request_parameter['nas_code']   = '0106551';
        $request_parameter['page']       = 2;
        $request_parameter['product_id'] = 'L91597857';
        $request_parameter['noOfReq']    = 10;

        $lrequest->replace($request_parameter);

        if (count($lrequest->all()) > 0 && $method == "get") {
            $url .= '?';
            foreach ($lrequest->all() as $key => $value) {
                $url .= $key . '=' . $value . '&';
            }
        }

        $header  = [];
        $mock_model_config_skip = m::mock('overload:App\Models\TruemovehSimAutoSyncModel')->makePartial();
        $mock_model_config_skip->shouldReceive('findFirst')
            ->with('L91597857')
            ->andReturn(['product_id' => 'L91597857']);

        $redis_data = '{"mobile":[{"msisdn":"0610014426","sum":"26","pool":"PRETUCESIM","level":"eSIM","priceLevel":"ESIM-PLATINUM","poolDesc":"Prepaid Special E-Sim","companyCode":"RF","rc":null,"contract":null,"actType":"R2","zone":"BKPRE","ref_id":"2ca12a4d-020b-4265-aaa9-4d40d13ddf3b","is_assign":"N"},{"msisdn":"0610014466","sum":"24","pool":"PRETUCESIM","level":"eSIM","priceLevel":"ESIM-PLATINUM","poolDesc":"Prepaid Special E-Sim","companyCode":"RF","rc":null,"contract":null,"actType":"R2","zone":"BKPRE","ref_id":"2ca12a4d-020b-4265-aaa9-4d40d13ddf3b","is_assign":"N"},{"msisdn":"0610014467","sum":"34","pool":"PRETUCESIM","level":"eSIM","priceLevel":"ESIM-PLATINUM","poolDesc":"Prepaid Special E-Sim","companyCode":"RF","rc":null,"contract":null,"actType":"R2","zone":"BKPRE","ref_id":"2ca12a4d-020b-4265-aaa9-4d40d13ddf3b","is_assign":"N"},{"msisdn":"0610014460","sum":"26","pool":"PRETUCESIM","level":"eSIM","priceLevel":"ESIM-PLATINUM","poolDesc":"Prepaid Special E-Sim","companyCode":"RF","rc":null,"contract":null,"actType":"R2","zone":"BKPRE","ref_id":"2ca12a4d-020b-4265-aaa9-4d40d13ddf3b","is_assign":"N"},{"msisdn":"0610014439","sum":"38","pool":"PRETUCESIM","level":"eSIM","priceLevel":"ESIM-PLATINUM","poolDesc":"Prepaid Special E-Sim","companyCode":"RF","rc":null,"contract":null,"actType":"R2","zone":"BKPRE","ref_id":"2ca12a4d-020b-4265-aaa9-4d40d13ddf3b","is_assign":"N"},{"msisdn":"0610014447","sum":"15","pool":"PRETUCESIM","level":"eSIM","priceLevel":"ESIM-PLATINUM","poolDesc":"Prepaid Special E-Sim","companyCode":"RF","rc":null,"contract":null,"actType":"R2","zone":"BKPRE","ref_id":"2ca12a4d-020b-4265-aaa9-4d40d13ddf3b","is_assign":"N"},{"msisdn":"0610014437","sum":"26","pool":"PRETUCESIM","level":"eSIM","priceLevel":"ESIM-PLATINUM","poolDesc":"Prepaid Special E-Sim","companyCode":"RF","rc":null,"contract":null,"actType":"R2","zone":"BKPRE","ref_id":"2ca12a4d-020b-4265-aaa9-4d40d13ddf3b","is_assign":"N"},{"msisdn":"0610014474","sum":"26","pool":"PRETUCESIM","level":"eSIM","priceLevel":"ESIM-PLATINUM","poolDesc":"Prepaid Special E-Sim","companyCode":"RF","rc":null,"contract":null,"actType":"R2","zone":"BKPRE","ref_id":"2ca12a4d-020b-4265-aaa9-4d40d13ddf3b","is_assign":"N"},{"msisdn":"0610014428","sum":"10","pool":"PRETUCESIM","level":"eSIM","priceLevel":"ESIM-PLATINUM","poolDesc":"Prepaid Special E-Sim","companyCode":"RF","rc":null,"contract":null,"actType":"R2","zone":"BKPRE","ref_id":"2ca12a4d-020b-4265-aaa9-4d40d13ddf3b","is_assign":"N"},{"msisdn":"0610014479","sum":"26","pool":"PRETUCESIM","level":"eSIM","priceLevel":"ESIM-PLATINUM","poolDesc":"Prepaid Special E-Sim","companyCode":"RF","rc":null,"contract":null,"actType":"R2","zone":"BKPRE","ref_id":"2ca12a4d-020b-4265-aaa9-4d40d13ddf3b","is_assign":"N"}],"request":1}';

        Redis::shouldReceive('get')->andReturn($redis_data);
        Redis::shouldReceive('set')->andReturn($redis_data);
        Redis::shouldReceive('get')->with('truestore:typhoon_filter_sim_nascode:product_id:L91597857:redis_data')->andReturn(null);

        $store_service = m::mock('overload:App\Services\StoreService');
        $store_service->shouldReceive('processGetExternalNasCodeByNasCode')->with('0106551')->andReturn('0106551');

        $mock_access_response = '[200,"{\"access_token\":\"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJncmFudF90eXBlIjoiY2xpZW50X2NyZWRlbnRpYWxzIiwic2NvcGUiOlsiY21zLmN0LnciLCJjbXMuY3QuZCIsImNtcy5jdC5zIiwiY21zLmN0LnIiLCJjbXMuY3QuKiJdLCJleHAiOjE2NDkzMzU0ODgsImlhdCI6MTY0OTMzNDg4OCwianRpIjoiYThkZGFlMjAtMzU4NS00ZWQxLTk4OTctYzdmNjdkZmM3OTU0IiwiY2xpZW50X2lkIjoiNjY2NDIzNTktYWRiMi00NzJlLWJmMmQtOTYzZmIyY2M1ZWY2In0.j2F2voLqsqDNH336bLhTQiYlPphhagOMd_W1jgHQrcpIKD-5cyIrUwqFpgAnmR1p_srq83dGoNqPxN26FamowujPRTjWrlPs60e-JO_-uYyjJBit3I45PiCUsDuPfpeKgOPGgVYo6psohqjML0JAXGRwhT3ZGdOZwpiIZhU9J9dDuV3ManUA7upNNx49eL49mTvTTSI_NEH7RbDwpOEyQsYmaV53iyN80D4ZrYr0Csu9B5PegT0Dvf8KLHm56lwjjlLqFPxdu5fdelJ5puTlVEOFsGzA2uxjh8RMvfwklnh0TzuHNbM9VriVKyqmkId5z9FYD3LyeXjMPU7BypBL1Q\",\"token_type\":\"bearer\",\"expires_in\":599,\"scope\":\"cms.ct.w cms.ct.d cms.ct.s cms.ct.r cms.ct.*\",\"grant_type\":\"client_credentials\",\"iat\":1649334888,\"jti\":\"a8ddae20-3585-4ed1-9897-c7f67dfc7954\"}"]';
        $mock_access_response = json_decode($mock_access_response, true);

        $request_access_token = m::mock('overload:App\Services\WeOmniService');
        $request_access_token->shouldReceive('postRequestAccessToken')->andReturn($mock_access_response);

        $mock_response_bifrost = '{ "transactionID":"8b8c2704-4216-40fa-b493-653b6e8703bc", "serviceResult":{ "status":"OK", "code":"200", "description":"Success" }, "message":null, "data":{ "refId":"d2e3a732-ab7d-4e9c-8a23-d4707945d5f4", "isAssign":"N", "listMsisdn":[ { "msisdn":"0610014426", "sum":"26", "pool":"PRETUCESIM", "level":"eSIM", "priceLevel":"ESIM-PLATINUM", "poolDesc":"Prepaid Special E-Sim", "companyCode":"RF", "rc":null, "contract":null, "actType":"R2", "zone":"BKPRE", "ref_id":"2ca12a4d-020b-4265-aaa9-4d40d13ddf3b", "is_assign":"N" }, { "msisdn":"0610014466", "sum":"24", "pool":"PRETUCESIM", "level":"eSIM", "priceLevel":"ESIM-PLATINUM", "poolDesc":"Prepaid Special E-Sim", "companyCode":"RF", "rc":null, "contract":null, "actType":"R2", "zone":"BKPRE", "ref_id":"2ca12a4d-020b-4265-aaa9-4d40d13ddf3b", "is_assign":"N" }, { "msisdn":"0610014467", "sum":"34", "pool":"PRETUCESIM", "level":"eSIM", "priceLevel":"ESIM-PLATINUM", "poolDesc":"Prepaid Special E-Sim", "companyCode":"RF", "rc":null, "contract":null, "actType":"R2", "zone":"BKPRE", "ref_id":"2ca12a4d-020b-4265-aaa9-4d40d13ddf3b", "is_assign":"N" }, { "msisdn":"0610014460", "sum":"26", "pool":"PRETUCESIM", "level":"eSIM", "priceLevel":"ESIM-PLATINUM", "poolDesc":"Prepaid Special E-Sim", "companyCode":"RF", "rc":null, "contract":null, "actType":"R2", "zone":"BKPRE", "ref_id":"2ca12a4d-020b-4265-aaa9-4d40d13ddf3b", "is_assign":"N" }, { "msisdn":"0610014439", "sum":"38", "pool":"PRETUCESIM", "level":"eSIM", "priceLevel":"ESIM-PLATINUM", "poolDesc":"Prepaid Special E-Sim", "companyCode":"RF", "rc":null, "contract":null, "actType":"R2", "zone":"BKPRE", "ref_id":"2ca12a4d-020b-4265-aaa9-4d40d13ddf3b", "is_assign":"N" }, { "msisdn":"0610014447", "sum":"15", "pool":"PRETUCESIM", "level":"eSIM", "priceLevel":"ESIM-PLATINUM", "poolDesc":"Prepaid Special E-Sim", "companyCode":"RF", "rc":null, "contract":null, "actType":"R2", "zone":"BKPRE", "ref_id":"2ca12a4d-020b-4265-aaa9-4d40d13ddf3b", "is_assign":"N" }, { "msisdn":"0610014437", "sum":"26", "pool":"PRETUCESIM", "level":"eSIM", "priceLevel":"ESIM-PLATINUM", "poolDesc":"Prepaid Special E-Sim", "companyCode":"RF", "rc":null, "contract":null, "actType":"R2", "zone":"BKPRE", "ref_id":"2ca12a4d-020b-4265-aaa9-4d40d13ddf3b", "is_assign":"N" }, { "msisdn":"0610014474", "sum":"26", "pool":"PRETUCESIM", "level":"eSIM", "priceLevel":"ESIM-PLATINUM", "poolDesc":"Prepaid Special E-Sim", "companyCode":"RF", "rc":null, "contract":null, "actType":"R2", "zone":"BKPRE", "ref_id":"2ca12a4d-020b-4265-aaa9-4d40d13ddf3b", "is_assign":"N" }, { "msisdn":"0610014428", "sum":"10", "pool":"PRETUCESIM", "level":"eSIM", "priceLevel":"ESIM-PLATINUM", "poolDesc":"Prepaid Special E-Sim", "companyCode":"RF", "rc":null, "contract":null, "actType":"R2", "zone":"BKPRE", "ref_id":"2ca12a4d-020b-4265-aaa9-4d40d13ddf3b", "is_assign":"N" }, { "msisdn":"0610014479", "sum":"26", "pool":"PRETUCESIM", "level":"eSIM", "priceLevel":"ESIM-PLATINUM", "poolDesc":"Prepaid Special E-Sim", "companyCode":"RF", "rc":null, "contract":null, "actType":"R2", "zone":"BKPRE", "ref_id":"2ca12a4d-020b-4265-aaa9-4d40d13ddf3b", "is_assign":"N" } ] } }';
        $mock_response_bifrost = json_decode($mock_response_bifrost, true);

        $mock_client = m::mock('overload:App\Libraries\Clients\BifrostClient');
        $mock_client->shouldReceive('post')->andReturn($mock_response_bifrost);

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        $content = WlsService::getMobileSearch($url, $method, $lrequest, $header);

        $data = json_decode($content[1], true);

        $this->assertEquals(200,  Arr::get($data, 'status_code'));
        $this->assertEquals('OK', Arr::get($data, 'status_txt'));
        $this->assertEquals(10,   Arr::get($data, 'data.pagination.total'));
        $this->assertEquals(10,   count(Arr::get($data, 'data.record')));

        $this->assertArrayHasKey('refId',    Arr::get($data, 'data.record.0'));
        $this->assertArrayHasKey('isAssign', Arr::get($data, 'data.record.0'));
    }

    /**
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testGetMobileAllocateServiceSuccess()
    {
        $request_parameter['section']    = 'wemall';
        $request_parameter['sim_type']   = 'prepaid';
        $request_parameter['nas_code']   = '0106551';
        $request_parameter['page']       = 2;
        $request_parameter['product_id'] = 'L91597857';
        $request_parameter['noOfReq']    = 10;

        $redis_data = '{"mobile":[{"msisdn":"0610014426","sum":"26","pool":"PRETUCESIM","level":"eSIM","priceLevel":"ESIM-PLATINUM","poolDesc":"Prepaid Special E-Sim","companyCode":"RF","rc":null,"contract":null,"actType":"R2","zone":"BKPRE","ref_id":"2ca12a4d-020b-4265-aaa9-4d40d13ddf3b","is_assign":"N"},{"msisdn":"0610014466","sum":"24","pool":"PRETUCESIM","level":"eSIM","priceLevel":"ESIM-PLATINUM","poolDesc":"Prepaid Special E-Sim","companyCode":"RF","rc":null,"contract":null,"actType":"R2","zone":"BKPRE","ref_id":"2ca12a4d-020b-4265-aaa9-4d40d13ddf3b","is_assign":"N"},{"msisdn":"0610014467","sum":"34","pool":"PRETUCESIM","level":"eSIM","priceLevel":"ESIM-PLATINUM","poolDesc":"Prepaid Special E-Sim","companyCode":"RF","rc":null,"contract":null,"actType":"R2","zone":"BKPRE","ref_id":"2ca12a4d-020b-4265-aaa9-4d40d13ddf3b","is_assign":"N"},{"msisdn":"0610014460","sum":"26","pool":"PRETUCESIM","level":"eSIM","priceLevel":"ESIM-PLATINUM","poolDesc":"Prepaid Special E-Sim","companyCode":"RF","rc":null,"contract":null,"actType":"R2","zone":"BKPRE","ref_id":"2ca12a4d-020b-4265-aaa9-4d40d13ddf3b","is_assign":"N"},{"msisdn":"0610014439","sum":"38","pool":"PRETUCESIM","level":"eSIM","priceLevel":"ESIM-PLATINUM","poolDesc":"Prepaid Special E-Sim","companyCode":"RF","rc":null,"contract":null,"actType":"R2","zone":"BKPRE","ref_id":"2ca12a4d-020b-4265-aaa9-4d40d13ddf3b","is_assign":"N"},{"msisdn":"0610014447","sum":"15","pool":"PRETUCESIM","level":"eSIM","priceLevel":"ESIM-PLATINUM","poolDesc":"Prepaid Special E-Sim","companyCode":"RF","rc":null,"contract":null,"actType":"R2","zone":"BKPRE","ref_id":"2ca12a4d-020b-4265-aaa9-4d40d13ddf3b","is_assign":"N"},{"msisdn":"0610014437","sum":"26","pool":"PRETUCESIM","level":"eSIM","priceLevel":"ESIM-PLATINUM","poolDesc":"Prepaid Special E-Sim","companyCode":"RF","rc":null,"contract":null,"actType":"R2","zone":"BKPRE","ref_id":"2ca12a4d-020b-4265-aaa9-4d40d13ddf3b","is_assign":"N"},{"msisdn":"0610014474","sum":"26","pool":"PRETUCESIM","level":"eSIM","priceLevel":"ESIM-PLATINUM","poolDesc":"Prepaid Special E-Sim","companyCode":"RF","rc":null,"contract":null,"actType":"R2","zone":"BKPRE","ref_id":"2ca12a4d-020b-4265-aaa9-4d40d13ddf3b","is_assign":"N"},{"msisdn":"0610014428","sum":"10","pool":"PRETUCESIM","level":"eSIM","priceLevel":"ESIM-PLATINUM","poolDesc":"Prepaid Special E-Sim","companyCode":"RF","rc":null,"contract":null,"actType":"R2","zone":"BKPRE","ref_id":"2ca12a4d-020b-4265-aaa9-4d40d13ddf3b","is_assign":"N"},{"msisdn":"0610014479","sum":"26","pool":"PRETUCESIM","level":"eSIM","priceLevel":"ESIM-PLATINUM","poolDesc":"Prepaid Special E-Sim","companyCode":"RF","rc":null,"contract":null,"actType":"R2","zone":"BKPRE","ref_id":"2ca12a4d-020b-4265-aaa9-4d40d13ddf3b","is_assign":"N"}],"request":1}';

        Redis::shouldReceive('get')->andReturn($redis_data);
        Redis::shouldReceive('set')->andReturn($redis_data);

        $store_service = m::mock('overload:App\Services\StoreService');
        $store_service->shouldReceive('processGetExternalNasCodeByNasCode')->with('0106551')->andReturn('0106551');

        $mock_access_response = '[200,"{\"access_token\":\"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJncmFudF90eXBlIjoiY2xpZW50X2NyZWRlbnRpYWxzIiwic2NvcGUiOlsiY21zLmN0LnciLCJjbXMuY3QuZCIsImNtcy5jdC5zIiwiY21zLmN0LnIiLCJjbXMuY3QuKiJdLCJleHAiOjE2NDkzMzU0ODgsImlhdCI6MTY0OTMzNDg4OCwianRpIjoiYThkZGFlMjAtMzU4NS00ZWQxLTk4OTctYzdmNjdkZmM3OTU0IiwiY2xpZW50X2lkIjoiNjY2NDIzNTktYWRiMi00NzJlLWJmMmQtOTYzZmIyY2M1ZWY2In0.j2F2voLqsqDNH336bLhTQiYlPphhagOMd_W1jgHQrcpIKD-5cyIrUwqFpgAnmR1p_srq83dGoNqPxN26FamowujPRTjWrlPs60e-JO_-uYyjJBit3I45PiCUsDuPfpeKgOPGgVYo6psohqjML0JAXGRwhT3ZGdOZwpiIZhU9J9dDuV3ManUA7upNNx49eL49mTvTTSI_NEH7RbDwpOEyQsYmaV53iyN80D4ZrYr0Csu9B5PegT0Dvf8KLHm56lwjjlLqFPxdu5fdelJ5puTlVEOFsGzA2uxjh8RMvfwklnh0TzuHNbM9VriVKyqmkId5z9FYD3LyeXjMPU7BypBL1Q\",\"token_type\":\"bearer\",\"expires_in\":599,\"scope\":\"cms.ct.w cms.ct.d cms.ct.s cms.ct.r cms.ct.*\",\"grant_type\":\"client_credentials\",\"iat\":1649334888,\"jti\":\"a8ddae20-3585-4ed1-9897-c7f67dfc7954\"}"]';
        $mock_access_response = json_decode($mock_access_response, true);

        $request_access_token = m::mock('overload:App\Services\WeOmniService');
        $request_access_token->shouldReceive('postRequestAccessToken')->andReturn($mock_access_response);

        $mock_response_bifrost = '{ "transactionID":"8b8c2704-4216-40fa-b493-653b6e8703bc", "serviceResult":{ "status":"OK", "code":"200", "description":"Success" }, "message":null, "data":{ "refId":"d2e3a732-ab7d-4e9c-8a23-d4707945d5f4", "isAssign":"N", "listMsisdn":[ { "msisdn":"0610014426", "sum":"26", "pool":"PRETUCESIM", "level":"eSIM", "priceLevel":"ESIM-PLATINUM", "poolDesc":"Prepaid Special E-Sim", "companyCode":"RF", "rc":null, "contract":null, "actType":"R2", "zone":"BKPRE", "ref_id":"2ca12a4d-020b-4265-aaa9-4d40d13ddf3b", "is_assign":"N" }, { "msisdn":"0610014466", "sum":"24", "pool":"PRETUCESIM", "level":"eSIM", "priceLevel":"ESIM-PLATINUM", "poolDesc":"Prepaid Special E-Sim", "companyCode":"RF", "rc":null, "contract":null, "actType":"R2", "zone":"BKPRE", "ref_id":"2ca12a4d-020b-4265-aaa9-4d40d13ddf3b", "is_assign":"N" }, { "msisdn":"0610014467", "sum":"34", "pool":"PRETUCESIM", "level":"eSIM", "priceLevel":"ESIM-PLATINUM", "poolDesc":"Prepaid Special E-Sim", "companyCode":"RF", "rc":null, "contract":null, "actType":"R2", "zone":"BKPRE", "ref_id":"2ca12a4d-020b-4265-aaa9-4d40d13ddf3b", "is_assign":"N" }, { "msisdn":"0610014460", "sum":"26", "pool":"PRETUCESIM", "level":"eSIM", "priceLevel":"ESIM-PLATINUM", "poolDesc":"Prepaid Special E-Sim", "companyCode":"RF", "rc":null, "contract":null, "actType":"R2", "zone":"BKPRE", "ref_id":"2ca12a4d-020b-4265-aaa9-4d40d13ddf3b", "is_assign":"N" }, { "msisdn":"0610014439", "sum":"38", "pool":"PRETUCESIM", "level":"eSIM", "priceLevel":"ESIM-PLATINUM", "poolDesc":"Prepaid Special E-Sim", "companyCode":"RF", "rc":null, "contract":null, "actType":"R2", "zone":"BKPRE", "ref_id":"2ca12a4d-020b-4265-aaa9-4d40d13ddf3b", "is_assign":"N" }, { "msisdn":"0610014447", "sum":"15", "pool":"PRETUCESIM", "level":"eSIM", "priceLevel":"ESIM-PLATINUM", "poolDesc":"Prepaid Special E-Sim", "companyCode":"RF", "rc":null, "contract":null, "actType":"R2", "zone":"BKPRE", "ref_id":"2ca12a4d-020b-4265-aaa9-4d40d13ddf3b", "is_assign":"N" }, { "msisdn":"0610014437", "sum":"26", "pool":"PRETUCESIM", "level":"eSIM", "priceLevel":"ESIM-PLATINUM", "poolDesc":"Prepaid Special E-Sim", "companyCode":"RF", "rc":null, "contract":null, "actType":"R2", "zone":"BKPRE", "ref_id":"2ca12a4d-020b-4265-aaa9-4d40d13ddf3b", "is_assign":"N" }, { "msisdn":"0610014474", "sum":"26", "pool":"PRETUCESIM", "level":"eSIM", "priceLevel":"ESIM-PLATINUM", "poolDesc":"Prepaid Special E-Sim", "companyCode":"RF", "rc":null, "contract":null, "actType":"R2", "zone":"BKPRE", "ref_id":"2ca12a4d-020b-4265-aaa9-4d40d13ddf3b", "is_assign":"N" }, { "msisdn":"0610014428", "sum":"10", "pool":"PRETUCESIM", "level":"eSIM", "priceLevel":"ESIM-PLATINUM", "poolDesc":"Prepaid Special E-Sim", "companyCode":"RF", "rc":null, "contract":null, "actType":"R2", "zone":"BKPRE", "ref_id":"2ca12a4d-020b-4265-aaa9-4d40d13ddf3b", "is_assign":"N" }, { "msisdn":"0610014479", "sum":"26", "pool":"PRETUCESIM", "level":"eSIM", "priceLevel":"ESIM-PLATINUM", "poolDesc":"Prepaid Special E-Sim", "companyCode":"RF", "rc":null, "contract":null, "actType":"R2", "zone":"BKPRE", "ref_id":"2ca12a4d-020b-4265-aaa9-4d40d13ddf3b", "is_assign":"N" } ] } }';
        $mock_response_bifrost = json_decode($mock_response_bifrost, true);

        $mock_client = m::mock('overload:App\Libraries\Clients\BifrostClient');
        $mock_client->shouldReceive('post')->andReturn($mock_response_bifrost);

        $mock_product_verify = '[200,"{\"product_id\":91597857,\"merchant\":{\"id\":7,\"label\":\"TruemoveH Sim\",\"store_id\":941527},\"inventories\":[{\"id\":\"3089537\",\"sim_type_id\":1,\"product_id\":\"91597857\",\"sku\":\"7000013181\",\"price\":49,\"compare_at_price\":0,\"weight\":20,\"quantity\":1000,\"hold\":0,\"status\":\"true\",\"length\":\"20.0000\",\"width\":\"20.0000\",\"height\":\"20.0000\"}],\"product_type\":\"sim\",\"sim_type\":\"prepaid\",\"sim_source_type\":[\"e-sim\"],\"sim_sub_type\":null,\"special_url\":\"https:\\\/\\\/www.wemall-dev.com\\\/tmvh\\\/sims\\\/91597857\",\"status\":\"active\",\"created_at\":\"2022-03-23 13:50:00\",\"propo_code\":\"0106551EX1\",\"title\":{\"th\":\"SIM Prepaid (Mass)\"},\"images\":[{\"id\":\"7533b9eead7911a8e9c09853de89dd4d\",\"name\":\"social-100\",\"mime\":\"image\\\/jpeg\",\"width\":1400,\"height\":1400,\"extension\":\"jpg\",\"position\":1,\"url\":\"https:\\\/\\\/store.wls-dev.com\\\/upload\\\/gallery5\\\/941527\\\/d\\\/d4\\\/7533b9eead7911a8e9c09853de89dd4d.jpg\"}]}"]';
        $mock_product_verify = json_decode($mock_product_verify, true);

        $mock_wls_service = m::mock('overload:App\Services\WlsService');
        $mock_wls_service->shouldReceive('getProductVerifySimPostpaid')->andReturn($mock_product_verify);

        $mock_mobile = new MobileAllocateService();
        $content = $mock_mobile->getMobile($request_parameter);

        $data = json_decode($content[1], true);

        $this->assertEquals(200,  Arr::get($data, 'status_code'));
        $this->assertEquals('OK', Arr::get($data, 'status_txt'));
        $this->assertEquals(10,   Arr::get($data, 'data.pagination.total'));
        $this->assertEquals(10,   count(Arr::get($data, 'data.record')));
    }

    /**
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testGetAllocateMobileThrowException()
    {
        $request_parameter['section']    = 'wemall';
        $request_parameter['sim_type']   = 'prepaid';
        $request_parameter['nas_code']   = '0106551';
        $request_parameter['page']       = 2;
        $request_parameter['product_id'] = 'L91597857';
        $request_parameter['noOfReq']    = 10;

        $mock_access_response = '[200,"{\"access_token\":\"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJncmFudF90eXBlIjoiY2xpZW50X2NyZWRlbnRpYWxzIiwic2NvcGUiOlsiY21zLmN0LnciLCJjbXMuY3QuZCIsImNtcy5jdC5zIiwiY21zLmN0LnIiLCJjbXMuY3QuKiJdLCJleHAiOjE2NDkzMzU0ODgsImlhdCI6MTY0OTMzNDg4OCwianRpIjoiYThkZGFlMjAtMzU4NS00ZWQxLTk4OTctYzdmNjdkZmM3OTU0IiwiY2xpZW50X2lkIjoiNjY2NDIzNTktYWRiMi00NzJlLWJmMmQtOTYzZmIyY2M1ZWY2In0.j2F2voLqsqDNH336bLhTQiYlPphhagOMd_W1jgHQrcpIKD-5cyIrUwqFpgAnmR1p_srq83dGoNqPxN26FamowujPRTjWrlPs60e-JO_-uYyjJBit3I45PiCUsDuPfpeKgOPGgVYo6psohqjML0JAXGRwhT3ZGdOZwpiIZhU9J9dDuV3ManUA7upNNx49eL49mTvTTSI_NEH7RbDwpOEyQsYmaV53iyN80D4ZrYr0Csu9B5PegT0Dvf8KLHm56lwjjlLqFPxdu5fdelJ5puTlVEOFsGzA2uxjh8RMvfwklnh0TzuHNbM9VriVKyqmkId5z9FYD3LyeXjMPU7BypBL1Q\",\"token_type\":\"bearer\",\"expires_in\":599,\"scope\":\"cms.ct.w cms.ct.d cms.ct.s cms.ct.r cms.ct.*\",\"grant_type\":\"client_credentials\",\"iat\":1649334888,\"jti\":\"a8ddae20-3585-4ed1-9897-c7f67dfc7954\"}"]';
        $mock_access_response = json_decode($mock_access_response, true);

        $request_access_token = m::mock('overload:App\Services\WeOmniService');
        $request_access_token->shouldReceive('postRequestAccessToken')->andReturn($mock_access_response);

        $store_service = m::mock('overload:App\Services\StoreService');
        $store_service->shouldReceive('processGetExternalNasCodeByNasCode')->with('0106551')->andReturn('0106551');

        Redis::shouldReceive('get')->andReturn('');

        $mock_client = m::mock('overload:App\Libraries\Clients\BifrostClient');
        $mock_client->shouldReceive('post')
            ->andThrow(new Exception('Not Found', 404));

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        $mock_mobile = new MobileAllocateService();
        $content = $mock_mobile->getMobile($request_parameter);

        $data = json_decode($content[1], true);

        $this->assertEquals(404,  Arr::get($data, 'status_code'));
        $this->assertEquals('Not Found', Arr::get($data, 'status_txt'));
    }
}
