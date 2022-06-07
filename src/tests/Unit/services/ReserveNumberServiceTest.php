<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Facades\VHora\ReserveNumberService;
use Mockery as m;
use GuzzleHttp\Exception\RequestException;
use GuzzleHttp\Psr7\Request;
use GuzzleHttp\Psr7\Response;
use Exception;

class ReserveNumberServiceTest extends TestCase
{

    /**
     * @group testPostReserveNumber
     * @group WLSFT-18628
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testPostReserveNumberSuccess()
    {
        $input   = json_decode('{"correlatedId":"dc0715da-ed7a-4231-ae6a-e1e57726c79e","idType":"I","idNumber":"5453707659698","msisdn":"0964234424","pstId":"0085779","reserveDealer":"80000560","webMethodChannel":"FNT-OFFLINE","userLogin":"80000560"}', 1);

        $mock_reserve_number_response = [200,'{"serviceResult":{"status":"success","code":200,"description":"Success."}}'];
        $mock_wls_service = m::mock('overload:App\Services\WlsService');
        $mock_wls_service->shouldReceive('operateRequestAction')->andReturn($mock_reserve_number_response);

        $expect = [0 => 200, 1 => '{"serviceResult":{"status":"success","code":200,"description":"Success."}}','is_pass' => true,'code' => 200];
        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        $response = ReserveNumberService::postReserveNumber($input);
        $this->assertEquals($expect, $response);
    }

    /**
     * @group testPostReserveNumber
     * @group WLSFT-18628
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testPostReserveNumberFail()
    {
        $input   = json_decode('{"correlatedId":"dc0715da-ed7a-4231-ae6a-e1e57726c79e","idType":"I","idNumber":"5453707659698","msisdn":"0964234424","pstId":"0085779","reserveDealer":"80000560","webMethodChannel":"FNT-OFFLINE","userLogin":"80000560"}', 1);

        $mock_reserve_number_response = [200,'{"serviceResult":{"status":"ERROR","code":"NAS201","description":"Msisdn not found."}}'];
        $mock_wls_service = m::mock('overload:App\Services\WlsService');
        $mock_wls_service->shouldReceive('operateRequestAction')->andReturn($mock_reserve_number_response);

        $expect = [0 => 200, 1 => '{"serviceResult":{"status":"ERROR","code":"NAS201","description":"Msisdn not found."}}','is_pass' => false, 'code' => 'NAS201'];
        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        $response = ReserveNumberService::postReserveNumber($input);
        $this->assertEquals($expect, $response);
    }

    /**
     * @group testPostReserveNumberAllocate
     * @group WLSFT-18628
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testPostReserveNumberAllocateSuccess()
    {
        $input = json_decode('{
            "correlatedId": "dc0715da-ed7a-4231-ae6a-e1e57726c79e",
            "idType": "I",
            "idNumber": "5453707659698",
            "msisdn": "0964234424",
            "pstId": "0085779",
            "reserveDealer": "80000560",
            "webMethodChannel": "FNT-OFFLINE",
            "userLogin": "80000560"
        }', 1);

        $mock_response = '{"serviceResult":{"status":"success","code":"200","description":"Success."}}';
        $mock_client   = m::mock('overload:App\Libraries\Clients\AwsGatewayClient');
        $mock_client->shouldReceive('post')
            ->with('/vhora/reserve-number-allocate', $input)
            ->andReturn(json_decode($mock_response, 1));

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        $this->assertTrue(ReserveNumberService::reserveNumberAllocate($input));
    }

    /**
     * @group testPostReserveNumberAllocate
     * @group WLSFT-18628
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testPostReserveNumberAllocateFail()
    {
        $input = json_decode('{
            "correlatedId": "dc0715da-ed7a-4231-ae6a-e1e57726c79e",
            "idType": "I",
            "idNumber": "5453707659698",
            "msisdn": "0964234424",
            "pstId": "0085779",
            "reserveDealer": "80000560",
            "webMethodChannel": "FNT-OFFLINE",
            "userLogin": "80000560"
        }', 1);

        $mock_response = '{"serviceResult":{"status":"ERROR","code":NAS201,"description":"Msisdn not found."}}';
        $mock_client   = m::mock('overload:App\Libraries\Clients\AwsGatewayClient');
        $mock_client->shouldReceive('post')
            ->with('/vhora/reserve-number-allocate', $input)
            ->andReturn($mock_response);

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        $this->assertFalse(ReserveNumberService::reserveNumberAllocate($input));
    }

    /**
     * @group testPostReserveNumberEsim
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testPostReserveNumberEsimPostPaidFail()
    {
        $input         = $this->getFixture('request_reserve_number', 'reserve_number');
        $mock_response = $this->getFixture('reserve_number_400', 'reserve_number');
        $path          = '/bifrost/api/true-it/projects/5ec74ca9dbfe8c0001edd2a9/order-sync/reserve-number/7308c55e-c361-41be-baa8-bd1d3fb9c188';
        $mock_token    = m::mock('overload:App\Services\WeOmniService');
        $mock_token->shouldReceive('postRequestAccessToken')
            ->andReturn($this->getFixture('response_token', 'reserve_number'));

        $response = new Response(400, [
            'Content-Type' => 'application/json'], 
            json_encode($mock_response)
        );
        $exception = new RequestException('Mock Client Exception', new Request('POST', ''), $response);    
        $mock_client   = m::mock('overload:App\Libraries\Clients\BifrostClient');
        $mock_client->shouldReceive('post')
            ->with($path, $input)
            ->andThrow($exception);

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        $this->assertFalse(ReserveNumberService::reserveNumber3GW($input));
    }

    /**
     * @group testPostReserveNumberEsim
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testPostReserveNumberEsimPostPaidFail500()
    {
        $input         = $this->getFixture('request_reserve_number', 'reserve_number');
        $mock_response = $this->getFixture('reserve_number_500', 'reserve_number');
        $path          = '/bifrost/api/true-it/projects/5ec74ca9dbfe8c0001edd2a9/order-sync/reserve-number/7308c55e-c361-41be-baa8-bd1d3fb9c188';
        $mock_token    = m::mock('overload:App\Services\WeOmniService');
        $mock_token->shouldReceive('postRequestAccessToken')
            ->andReturn($this->getFixture('response_token', 'reserve_number'));

        $response = new Response(500, [
            'Content-Type' => 'application/json'], 
            json_encode($mock_response)
        );
        $exception = new RequestException('Mock Client Exception', new Request('POST', ''), $response);    
        $mock_client   = m::mock('overload:App\Libraries\Clients\BifrostClient');
        $mock_client->shouldReceive('post')
            ->with($path, $input)
            ->andThrow($exception);

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        $this->assertFalse(ReserveNumberService::reserveNumber3GW($input));
    }

    /**
     * @group testPostReserveNumberEsim
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testPostReserveNumberEsimPostPaidInternalServerError()
    {
        $input         = $this->getFixture('request_reserve_number', 'reserve_number');
        $mock_response = $this->getFixture('reserve_number_500', 'reserve_number');
        $path          = '/bifrost/api/true-it/projects/5ec74ca9dbfe8c0001edd2a9/order-sync/reserve-number/7308c55e-c361-41be-baa8-bd1d3fb9c188';
        $mock_token    = m::mock('overload:App\Services\WeOmniService');
        $mock_token->shouldReceive('postRequestAccessToken')
            ->andReturn($this->getFixture('response_token', 'reserve_number'));
        $mock_client   = m::mock('overload:App\Libraries\Clients\BifrostClient');
        $mock_client->shouldReceive('post')
            ->with($path, $input)
            ->andThrow(new Exception('Internal Server Error', 500));

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        $this->assertFalse(ReserveNumberService::reserveNumber3GW($input));
    }

    /**
     * @group testPostReserveNumberEsim
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testPostReserveNumberEsimPostPaidSuccess()
    {
        $input         = $this->getFixture('request_reserve_number', 'reserve_number');
        $mock_response = $this->getFixture('reserve_number_200', 'reserve_number');
        $path          = '/bifrost/api/true-it/projects/5ec74ca9dbfe8c0001edd2a9/order-sync/reserve-number/7308c55e-c361-41be-baa8-bd1d3fb9c188';
        $mock_token    = m::mock('overload:App\Services\WeOmniService');
        $mock_token->shouldReceive('postRequestAccessToken')
            ->andReturn($this->getFixture('response_token', 'reserve_number'));
        $mock_client   = m::mock('overload:App\Libraries\Clients\BifrostClient');
        $mock_client->shouldReceive('post')
            ->with($path, $input)
            ->andReturn($mock_response);

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        $this->assertTrue(ReserveNumberService::reserveNumber3GW($input));
    }

    /**
     * @group testPostReserveNumberEsim
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testPostReserveNumberEsimPrePaidSuccess()
    {
        $input         = $this->getFixture('request_reserve_number', 'reserve_number');
        unset($input['subscriberInfo']['companyCode'], $input['customerInfo']['birthDate']);

        $mock_response = $this->getFixture('reserve_number_200', 'reserve_number');
        $path          = '/bifrost/api/true-it/projects/5ec74ca9dbfe8c0001edd2a9/order-sync/reserve-number/7308c55e-c361-41be-baa8-bd1d3fb9c188';
        $mock_token    = m::mock('overload:App\Services\WeOmniService');
        $mock_token->shouldReceive('postRequestAccessToken')
            ->andReturn($this->getFixture('response_token', 'reserve_number'));
        $mock_client   = m::mock('overload:App\Libraries\Clients\BifrostClient');
        $mock_client->shouldReceive('post')
            ->with($path, $input)
            ->andReturn($mock_response);

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        $this->assertTrue(ReserveNumberService::reserveNumber3GW($input));
    }

    /**
     * @group testPostReserveNumberPostPaidPickupAtShop
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testPostReserveNumberPostPaidPickupAtShopSuccess()
    {
        $input         = $this->getFixture('request_reserve_number_pickup_at_shop', 'reserve_number');
        $mock_response = $this->getFixture('reserve_number_200', 'reserve_number');
        $path          = '/bifrost/api/true-it/projects/5ec74ca9dbfe8c0001edd2a9/order-sync/reserve-number/7308c55e-c361-41be-baa8-bd1d3fb9c188';
        $mock_token    = m::mock('overload:App\Services\WeOmniService');
        $mock_token->shouldReceive('postRequestAccessToken')
            ->andReturn($this->getFixture('response_token', 'reserve_number'));
        $mock_client   = m::mock('overload:App\Libraries\Clients\BifrostClient');
        $mock_client->shouldReceive('post')
            ->with($path, $input)
            ->andReturn($mock_response);

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        $this->assertTrue(ReserveNumberService::reserveNumber3GW($input));
    }

    /**
     * @group testPostReserveNumberPostPaidPickupAtShop
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testPostReserveNumberPostPaidPickupAtShopFail()
    {
        $input         = $this->getFixture('request_reserve_number_pickup_at_shop', 'reserve_number');
        $mock_response = $this->getFixture('reserve_number_400', 'reserve_number');
        $path          = '/bifrost/api/true-it/projects/5ec74ca9dbfe8c0001edd2a9/order-sync/reserve-number/7308c55e-c361-41be-baa8-bd1d3fb9c188';
        $mock_token    = m::mock('overload:App\Services\WeOmniService');
        $mock_token->shouldReceive('postRequestAccessToken')
            ->andReturn($this->getFixture('response_token', 'reserve_number'));

        $response = new Response(
            400,
            [
                'Content-Type' => 'application/json'
            ],
            json_encode($mock_response)
        );
        $exception = new RequestException('Mock Client Exception', new Request('POST', ''), $response);
        $mock_client   = m::mock('overload:App\Libraries\Clients\BifrostClient');
        $mock_client->shouldReceive('post')
            ->with($path, $input)
            ->andThrow($exception);

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        $this->assertFalse(ReserveNumberService::reserveNumber3GW($input));
    }
}
