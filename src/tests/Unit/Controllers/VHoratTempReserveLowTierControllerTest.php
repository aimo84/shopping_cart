<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Facades\VHora\UpdateStatusService;
use Illuminate\Support\Arr;
use Exception;
use InvalidArgumentException;
use Mockery as m;
use Illuminate\Support\Facades\Redis;

class VHoraPostTempReserveControllerTest extends TestCase
{   
    private function input() {
        return [
            'msisdn'   => '0831234567',
            'ref_code' => '202105191428478822',
            'pack'     => 'pos399',
        ];
    }

    /**
     * @group testTempReserveLowTier
     */
    public function testPostTempReserveShouldbeValidateFailsRequest()
    {
        $response = $this->postJson('/api/true/v2/vhora/mobile-numbers/temp-reserve', []);
        $response = json_decode($response->getContent(), true);

        $this->assertEquals(400, Arr::get($response, 'status_code'));
        $this->assertEquals('Bad Request', Arr::get($response, 'status_txt'));
        $this->assertEquals('The msisdn field is required.', Arr::get($response, 'errors.description.msisdn.0'));
        $this->assertEquals('The ref code field is required.', Arr::get($response, 'errors.description.ref_code.0'));
        $this->assertEquals('The pack field is required.', Arr::get($response, 'errors.description.pack.0'));
    }   

    /**
     * @group testTempReserveLowTier
     */
    public function testTempReserveLowTierShouldbeSuccess()
    {           
        UpdateStatusService::shouldReceive('tempReserveV2')
            ->andReturn(json_decode('{"code":0,"message":"success","temp_reserve_id":"202105191428478822"}', true));
        
        Redis::shouldReceive('get')->with('no-ekyc')->andReturn('true');    
        
        $response = $this->postJson('/api/true/v2/vhora/mobile-numbers/temp-reserve', $this->input());
        $response = json_decode($response->getContent(), true);

        $this->assertEquals(200, Arr::get($response, 'status_code'));
        $this->assertEquals('OK', Arr::get($response, 'status_txt'));
        $this->assertEquals(0, Arr::get($response, 'data.code'));
        $this->assertEquals('success', Arr::get($response, 'data.message'));
        $this->assertEquals('202105191428478822', Arr::get($response, 'data.temp_reserve_id'));
        $this->assertEquals(true, Arr::get($response, 'data.no_ekyc'));
    }

    /**
     * @group testTempReserveLowTier
     */
    public function testTempReserveLowTierShouldbeBadRequest()
    {
        UpdateStatusService::shouldReceive('tempReserveV2')
            ->andReturn([
                "code" => 400,
                "message" => "length must be 10"
            ]);

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')
            ->andReturn(true);

        $response = $this->postJson('/api/true/v2/vhora/mobile-numbers/temp-reserve', $this->input());
        $response = json_decode($response->getContent(), true);

        $this->assertEquals(400, Arr::get($response, 'status_code'));
        $this->assertEquals('Bad Request', Arr::get($response, 'status_txt'));
        $this->assertEquals("length must be 10", Arr::get($response, 'errors.description.message'));
    }

    /**
     * @group testTempReserveLowTier
     */
    public function testTempReserveLowTierShouldbeUnauthorized()
    {
        UpdateStatusService::shouldReceive('tempReserveV2')
            ->andReturn([
                "code" => 401,
                "message" => "Invalid authentication credentials"
            ]);

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')
            ->andReturn(true);

        $response = $this->postJson('/api/true/v2/vhora/mobile-numbers/temp-reserve', $this->input());
        $response = json_decode($response->getContent(), true);

        $this->assertEquals(401, Arr::get($response, 'status_code'));
        $this->assertEquals('Unauthorized', Arr::get($response, 'status_txt'));
        $this->assertEquals("Invalid authentication credentials", Arr::get($response, 'errors.description.message'));
    }

    /**
     * @group testTempReserveLowTier
     */
    public function testTempReserveLowTierShouldbeForbidden()
    {
        UpdateStatusService::shouldReceive('tempReserveV2')
            ->andReturn([
                "code" => 403,
                "message" => "Forbidden"
            ]);

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')
            ->andReturn(true);

        $response = $this->postJson('/api/true/v2/vhora/mobile-numbers/temp-reserve', $this->input());
        $response = json_decode($response->getContent(), true);

        $this->assertEquals(403, Arr::get($response, 'status_code'));
        $this->assertEquals('Forbidden', Arr::get($response, 'status_txt'));
        $this->assertEquals("Forbidden", Arr::get($response, 'errors.description.message'));
    }

    /**
     * @group testTempReserveLowTier
     */
    public function testTempReserveLowTierShouldbeError()
    {
        UpdateStatusService::shouldReceive('tempReserveV2')
            ->andThrow(new Exception('Internal Server Error', 500));

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')
            ->andReturn(true);

        $response = $this->postJson('/api/true/v2/vhora/mobile-numbers/temp-reserve', $this->input());
        $response = json_decode($response->getContent(), true);

        $this->assertEquals(500, Arr::get($response, 'status_code'));
        $this->assertEquals('Internal Server Error', Arr::get($response, 'status_txt'));
        $this->assertEquals("Internal Server Error", Arr::get($response, 'errors.description.message'));
    }

    /**
     * @group testTempReserveLowTier
     */
    public function testTempReserveLowTierAlreadyTempReserved()
    {   
        UpdateStatusService::shouldReceive('tempReserveV2')
            ->andReturn(json_decode('{"code":2001,"message":"Already Temp Reserved","temp_reserve_id":"202105191428478822"}', true));

        Redis::shouldReceive('get')->with('no-ekyc')->andReturn('true');    

        $response = $this->postJson('/api/true/v2/vhora/mobile-numbers/temp-reserve', $this->input());
        $response = json_decode($response->getContent(), true);

        $this->assertEquals(200, Arr::get($response, 'status_code'));
        $this->assertEquals('OK', Arr::get($response, 'status_txt'));
        $this->assertEquals(2001, Arr::get($response, 'data.code'));
        $this->assertEquals('Already Temp Reserved', Arr::get($response, 'data.message'));
        $this->assertEquals('202105191428478822', Arr::get($response, 'data.temp_reserve_id'));
        $this->assertEquals(true, Arr::get($response, 'data.no_ekyc'));
    }

    /**
     * @group testTempReserveLowTier
     */
    public function testTempReserveLowTierMsisdnNotFund()
    {   
        UpdateStatusService::shouldReceive('tempReserveV2')
            ->andReturn(json_decode('{"code":2002,"message":"msisdn not found","temp_reserve_id":""}', true));

        Redis::shouldReceive('get')->with('no-ekyc')->andReturn('true');    

        $response = $this->postJson('/api/true/v2/vhora/mobile-numbers/temp-reserve', $this->input());
        $response = json_decode($response->getContent(), true);

        $this->assertEquals(200, Arr::get($response, 'status_code'));
        $this->assertEquals('OK', Arr::get($response, 'status_txt'));
        $this->assertEquals(2002, Arr::get($response, 'data.code'));
        $this->assertEquals('msisdn not found', Arr::get($response, 'data.message'));
        $this->assertEquals('', Arr::get($response, 'data.temp_reserve_id'));
        $this->assertEquals(true, Arr::get($response, 'data.no_ekyc'));
    }
}