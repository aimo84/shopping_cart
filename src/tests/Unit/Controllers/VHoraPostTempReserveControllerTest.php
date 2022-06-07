<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Facades\VHora\UpdateStatusService;
use App\Facades\OtpService;
use Mockery as m;
use Illuminate\Support\Carbon;
use function GuzzleHttp\json_decode;
use Exception;

class VHoraPostTempReserveControllerTest extends TestCase
{   
    private function input() {
        return [
            'msisdn'   => '0831234567',
            'ref_code' => '202105191428478822'
        ];
    }

    private function verify() {
        return [
            'verified_at' => 1621409342,
            'created_at' => 1621409327,
            'success' => true,
            'ref_code' => '202105191428478822',
            'msisdn' => '0830053853',              
        ];
    }

    public function testPostTempReserveShouldbeSuccess()
    {   
        // UpdateStatusService::shouldReceive('verify')
        //     ->andReturn($this->verify());

        UpdateStatusService::shouldReceive('tempReserve')
            ->andReturn(json_decode('{"code":200,"message":"success","temp_reserve_id":"202105191428478822"}', true));

        $response = $this->post('/api/true/v2/vhora/mobile-numbers', $this->input());
        $response = json_decode($response->getContent(), true);

        $this->assertEquals(200, array_get($response, 'status_code'));
        $this->assertEquals('success', array_get($response, 'data.message'));
        $this->assertEquals('202105191428478822', array_get($response, 'data.temp_reserve_id'));
    }

    public function testPostTempReserveShouldbeValidateFails()
    {
        $response = $this->post('/api/true/v2/vhora/mobile-numbers', []);
        $response = json_decode($response->getContent(), true);

        $this->assertEquals(400, array_get($response, 'status_code'));
        $this->assertEquals('Bad Request', array_get($response, 'status_txt'));
    }

    // public function testPostTempReserveShouldbeVerifyFails()
    // {
    //     UpdateStatusService::shouldReceive('verify')
    //         ->andThrow(new Exception('Session Time Out', 400));

    //     $response = $this->post('/api/true/v2/vhora/mobile-numbers', $this->input());
    //     $response = json_decode($response->getContent(), true);

    //     $this->assertEquals(400, array_get($response, 'status_code'));
    //     $this->assertEquals('Bad Request', array_get($response, 'status_txt'));
    //     $this->assertEquals('Session Time Out', array_get($response, 'errors.description.message'));
    // }

    public function testPostTempReserveShouldbeBadRequest()
    {
        // UpdateStatusService::shouldReceive('verify')
        //     ->andReturn($this->verify());

        UpdateStatusService::shouldReceive('tempReserve')
            ->andThrow(new Exception('Client error: `POST https://gateway.wls-dev.com/vhora/update-status` resulted in a `400 Bad Request` response: {"code":400,"message":"length must be 10"}', 400));

        $response = $this->post('/api/true/v2/vhora/mobile-numbers', $this->input());
        $response = json_decode($response->getContent(), true);

        $this->assertEquals(400, array_get($response, 'status_code'));
        $this->assertEquals('Bad Request', array_get($response, 'status_txt'));
    }

    public function testPostTempReserveShouldbeAlreadyTempReserved()
    {   
        // UpdateStatusService::shouldReceive('verify')
        //     ->andReturn($this->verify());

        UpdateStatusService::shouldReceive('tempReserve')
            ->andReturn(json_decode('{"code":2001,"message":"Already Temp Reserved","temp_reserve_id":"202105191428478822"}', true));

        $response = $this->post('/api/true/v2/vhora/mobile-numbers', $this->input());
        $response = json_decode($response->getContent(), true);

        $this->assertEquals(200, array_get($response, 'status_code'));
        $this->assertEquals('Already Temp Reserved', array_get($response, 'data.message'));
        $this->assertEquals('202105191428478822', array_get($response, 'data.temp_reserve_id'));
    }
}