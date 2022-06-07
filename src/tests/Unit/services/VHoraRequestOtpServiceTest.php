<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Facades\VHora\RequestOtpService;
use Illuminate\Support\Facades\Redis;
use Carbon\Carbon;
use Mockery as m;

class VHoraRequestOtpServiceTest extends TestCase
{
    private function mockInputs()
    {
        return json_decode('{"msisdn":"0850000008"}', true);
    }

    /**
     * @group testValidateOtpLimitShouldBeSuccess
     **/
    public function testValidateOtpLimitShouldBeSuccess()
    {
        $this->getValueFromRedisSuccess();

        $data       = $this->mockInputs();
        $mock_model = m::mock('overload:App\Models\TruemovehOtpTransactionsModel')->makePartial();
        $mock_model->shouldReceive('getOtpWithFilterSortByDescRefcode')
            ->once()
            ->andReturn([
                    'ref_code'   => '202105131220081419',
                    'created_at' => 1620883208,
                    'success'    => false,
                    'end_date'   => '1620950399',
                    'start_date' => '1620864000'
                ]);

        $response = RequestOtpService::validateOtpLimit($this->mockInputs());

        $this->assertEquals(true, $response);
    }

    /**
     * @group testValidateOtpOverLimitShouldBeFailed
     **/
    public function testValidateOtpOverLimitShouldBeFailed()
    {
        $this->getValueFromRedisSuccess();
        
        $data       = $this->mockInputs();
        $mock_model = m::mock('overload:App\Models\TruemovehOtpTransactionsModel')->makePartial();
        $mock_model->shouldReceive('getOtpWithFilterSortByDescRefcode')
            ->once()
            ->andReturn(json_decode('{"10":{"created_at":1620887502,"success":false,"end_date":1620950399,"ref_code":"202105131331427413","start_date":1620864000,"msisdn":"0956530646"},"9":{"created_at":1620887502,"success":false,"end_date":1620950399,"ref_code":"202105131331427413","start_date":1620864000,"msisdn":"0956530646"},"8":{"created_at":1620887502,"success":false,"end_date":1620950399,"ref_code":"202105131331427413","start_date":1620864000,"msisdn":"0956530646"},"7":{"created_at":1620887502,"success":false,"end_date":1620950399,"ref_code":"202105131331427413","start_date":1620864000,"msisdn":"0956530646"},"6":{"created_at":1620887502,"success":false,"end_date":1620950399,"ref_code":"202105131331427413","start_date":1620864000,"msisdn":"0956530646"},"5":{"created_at":1620887502,"success":false,"end_date":1620950399,"ref_code":"202105131331427413","start_date":1620864000,"msisdn":"0956530646"},"4":{"created_at":1620887502,"success":false,"end_date":1620950399,"ref_code":"202105131331427413","start_date":1620864000,"msisdn":"0956530646"},"3":{"created_at":1620887502,"success":false,"end_date":1620950399,"ref_code":"202105131331427413","start_date":1620864000,"msisdn":"0956530646"},"2":{"created_at":1620887502,"success":false,"end_date":1620950399,"ref_code":"202105131331427413","start_date":1620864000,"msisdn":"0956530646"},"1":{"created_at":1620887502,"success":false,"end_date":1620950399,"ref_code":"202105131331427413","start_date":1620864000,"msisdn":"0956530646"},"0":{"created_at":1620883208,"success":false,"end_date":1620950399,"ref_code":"202105131220081419","start_date":1620864000,"msisdn":"0956530646"}}', true));

        $response = RequestOtpService::validateOtpLimit($this->mockInputs());

        $this->assertEquals(true, $response);
    }

    /**
     * @group testinsertRequestOtpShouldBeSuccess
     **/
    public function testinsertRequestOtpShouldBeSuccess()
    {
        $mock_model = m::mock('overload:App\Models\TruemovehOtpTransactionsModel')->makePartial();
        $mock_model->shouldReceive('getDateNow')
            ->once()
            ->set('timestamp', 1622505600)
            ->andReturnSelf();

        $mock_model->shouldReceive('save')
            ->once()
            ->andReturn([
                'status_code' => 200
            ]);
        $mock_model->shouldReceive('addDays')
            ->set('timestamp', 1623715200)
            ->andReturnSelf();

        $response = RequestOtpService::insertRequestOtp([
            'ref_code'   => '202105131220081419',
            'created_at' => 1622505600,
            'msisdn'     => '0850000008',
            'success'    => false,
            'end_date'   => '1620950399',
            'start_date' => '1620864000'
        ]);

        $this->assertEquals(200, $response['status_code']);
    }

    private function getValueFromRedisSuccess()
    {
        Redis::shouldReceive('get')->once()->with("request-otp:limit-times")->andReturn(
            '100'
        );
    }
}