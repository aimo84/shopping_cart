<?php

namespace Tests\Unit;

use App\Facades\VHora\UpdateStatusService;
use Tests\TestCase;
use App\Traits\VHoraResponsorTrait;
use Mockery as m;
use Illuminate\Support\Arr;
use InvalidArgumentException;
use Exception;
use GuzzleHttp\Psr7\Request;
use GuzzleHttp\Psr7\Response;
use GuzzleHttp\Exception\ClientException;

class UpdateStatusServiceTest extends TestCase
{   
    private function input() {
        return [
            'msisdn'   => '0831234567',
            'ref_code' => '202105191428478822',
            'pack'     => 'pos399'
        ];
    }

    /**
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testPostTempReserverseShouldbeSuccess()
    {   
        $mock_input = json_decode('{"code":200,"message":"success","temp_reserve_id":"202105191428478822"}', true);

        $mock = m::mock('overload:App\Libraries\Clients\AwsGatewayClient');
        $mock->shouldReceive('postFormData')
             ->andReturn($mock_input);

        $response = UpdateStatusService::tempReserve($this->input());
        
        $this->assertEquals(200, Arr::get($response, 'code'));
        $this->assertEquals('success', Arr::get($response, 'message'));
        $this->assertEquals('202105191428478822', Arr::get($response, 'temp_reserve_id'));
    }

    /**
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testPostTempReserverseShouldbeThrowException()
    {
        $mock = m::mock('overload:App\Libraries\Clients\AwsGatewayClient');
        $mock->shouldReceive('postFormData')
             ->andReturn(json_decode('{"status_code":400,"status_txt":"Bad Request","errors":{"description":{"code":400,"message":"Client error: `POST https:\/\/gateway.wls-dev.com\/vhora\/update-status` resulted in a `400 Bad Request` response:\n{\"code\":400,\"message\":\"length must be 10\"}\n"}}}', true));

        $response = UpdateStatusService::tempReserve($this->input());
        
        $this->assertEquals(400, Arr::get($response, 'status_code'));
        $this->assertEquals('Bad Request', Arr::get($response, 'status_txt'));
    }

    public function testVerifyShouldBeSuccess()
    {
        $mock = m::mock('overload:App\Models\TruemovehOtpTransactionsModel');
        $mock->shouldReceive('getDateNow')->andReturnSelf()
             ->shouldReceive('subMinutes')
             ->set('timestamp', 1621490720)->andReturnSelf();

        $mock->shouldReceive('getDateNow')
             ->set('timestamp', 1621492612)->andReturnSelf();

        $mock->shouldReceive('getSuccessandVarified')
             ->andReturn([
            'verified_at' => 1621409342,
            'created_at' => 1621409327,
            'success' => true,
            'ref_code' => '202105191428478822',
            'msisdn' => '0830053853',              
        ]);

        $response = UpdateStatusService::verify($this->input());

        $this->assertNotEmpty($response);
    }

    public function testVerifyShouldBeThrowExeption()
    {   
        $this->expectException(Exception::class);
        $this->expectExceptionCode(400);
        $this->expectExceptionMessage('Session Time Out');

        $mock = m::mock('overload:App\Models\TruemovehOtpTransactionsModel');
        $mock->shouldReceive('getDateNow')->andReturnSelf()
             ->shouldReceive('subMinutes')
             ->set('timestamp', 1621490720)->andReturnSelf();

        $mock->shouldReceive('getDateNow')
             ->set('timestamp', 1621492612)->andReturnSelf();

        $mock->shouldReceive('getSuccessandVarified')
             ->andReturn([]);

        $response = UpdateStatusService::verify($this->input());
    }

    /**
     * @group testUpdateStatusLowTier
     **/
    public function testUpdateStatusLowTierFail()
    {   
        $mock_input = json_decode('{"code":2001,"message":"Already Temp Reserved","temp_reserve_id":"202105191428478822"}', true);

        $mock = m::mock('overload:App\Libraries\Clients\AwsGatewayClient');
        $mock->shouldReceive('postFormData')
             ->andReturn($mock_input);

        $response = UpdateStatusService::tempReserveV2($this->input());
        
        $this->assertEquals(2001, Arr::get($response, 'code'));
        $this->assertEquals('Already Temp Reserved', Arr::get($response, 'message'));
        $this->assertEquals('202105191428478822', Arr::get($response, 'temp_reserve_id'));
    }

    /**
     * @group testUpdateStatusLowTier
     **/
    public function testUpdateStatusLowTierMsisdnNotFound()
    {   
        $mock_input = json_decode('{"code":2002,"message":"msisdn not found","temp_reserve_id":""}', true);

        $mock = m::mock('overload:App\Libraries\Clients\AwsGatewayClient');
        $mock->shouldReceive('postFormData')
             ->andReturn($mock_input);

        $response = UpdateStatusService::tempReserveV2($this->input());
        
        $this->assertEquals(2002, Arr::get($response, 'code'));
        $this->assertEquals('msisdn not found', Arr::get($response, 'message'));
        $this->assertEquals('', Arr::get($response, 'temp_reserve_id'));
    }

    /**
     * @group testUpdateStatusLowTier
     **/
    public function testUpdateStatusLowBadRequest()
    {   
        $response = new Response(400, [
            'Content-Type' => 'application/json'], 
            '{"code": 400, "message": "length must be 10"}'
        );
        $exception = new ClientException('Mock Client Exception', new Request('POST', ''), $response);

        $mock = m::mock('overload:App\Libraries\Clients\AwsGatewayClient');
        $mock->shouldReceive('postFormData')
             ->andThrow($exception);

        $mock_logs = m::mock('alias:App\Services\LogService');
        $mock_logs->shouldReceive('writeServiceLog')
            ->andReturn(true);

        $response = UpdateStatusService::tempReserveV2($this->input());
        
        $this->assertEquals(400, Arr::get($response, 'code'));
        $this->assertEquals('length must be 10', Arr::get($response, 'message'));
    }

    /**
     * @group testUpdateStatusLowTier
     **/
    public function testUpdateStatusLowUnauthorized()
    {   
        $response = new Response(401, [
            'Content-Type' => 'application/json'], 
            '{"message": "Invalid authentication credentials"}'
        );
        $exception = new ClientException('Mock Client Exception', new Request('POST', ''), $response);

        $mock = m::mock('overload:App\Libraries\Clients\AwsGatewayClient');
        $mock->shouldReceive('postFormData')
             ->andThrow($exception);

        $mock_logs = m::mock('alias:App\Services\LogService');
        $mock_logs->shouldReceive('writeServiceLog')
            ->andReturn(true);

        $response = UpdateStatusService::tempReserveV2($this->input());
        
        $this->assertEquals(401, Arr::get($response, 'code'));
        $this->assertEquals('Invalid authentication credentials', Arr::get($response, 'message'));
    }

    /**
     * @group testUpdateStatusLowTier
     **/
    public function testUpdateStatusLowForbiddenGW()
    {   
        $response = new Response(403, [
            'Content-Type' => 'application/json'], 
            '{"message": "Forbidden"}'
        );
        $exception = new ClientException('Mock Client Exception', new Request('POST', ''), $response);

        $mock = m::mock('overload:App\Libraries\Clients\AwsGatewayClient');
        $mock->shouldReceive('postFormData')
             ->andThrow($exception);

        $mock_logs = m::mock('alias:App\Services\LogService');
        $mock_logs->shouldReceive('writeServiceLog')
            ->andReturn(true);

        $response = UpdateStatusService::tempReserveV2($this->input());
        
        $this->assertEquals(403, Arr::get($response, 'code'));
        $this->assertEquals('Forbidden', Arr::get($response, 'message'));
    }

    /**
     * @group testUpdateStatusLowTier
     **/
    public function testUpdateStatusLowError()
    {   
        $mock = m::mock('overload:App\Libraries\Clients\AwsGatewayClient');
        $mock->shouldReceive('postFormData')
             ->andThrow(new Exception("Internal Server Error", 500));

        $mock_logs = m::mock('alias:App\Services\LogService');
        $mock_logs->shouldReceive('writeServiceLog')
            ->andReturn(true);             

        $this->expectException(\Exception::class);
        $this->expectExceptionCode(500);
        $this->expectExceptionMessage('Internal Server Error');             

        UpdateStatusService::tempReserveV2($this->input());
    }

    /**
     * @group testUpdateStatusLowTier
     **/
    public function testUpdateStatusLowTierSuccess()
    {   
        $mock_input = json_decode('{"code":0,"message":"success","temp_reserve_id":"202105191428478822"}', true);

        $mock = m::mock('overload:App\Libraries\Clients\AwsGatewayClient');
        $mock->shouldReceive('postFormData')
             ->andReturn($mock_input);

        $response = UpdateStatusService::tempReserveV2($this->input());
        
        $this->assertEquals(0, Arr::get($response, 'code'));
        $this->assertEquals('success', Arr::get($response, 'message'));
        $this->assertEquals('202105191428478822', Arr::get($response, 'temp_reserve_id'));
    }
}