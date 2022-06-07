<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Facades\VHora\VerifyService;
use Mockery as m;
use Illuminate\Support\Carbon;
use GuzzleHttp\Psr7\Request;
use GuzzleHttp\Psr7\Response;
use GuzzleHttp\Exception\ClientException;
use App\Models\TruemovehOtpTransactionsModel;

class VHoraVerifyServiceTest extends TestCase
{
    private function mockInputs()
    {
        return json_decode('{"msisdn":"0850000008","otp":"1234","ref_code":"0850000001801","firstname":"John","lastname":"Doe","birthdate":"07032542","birthtime":"01:01","flag_unknow_time":true,"is_thailand":true,"timezone":"+0700","province":"กรุงเทพฯ"}', true);
    }

    /**
     * @group testValidate
     **/
    public function testValidateShouldBeFailWithEmptyInputs()
    {
        $this->expectException(\InvalidArgumentException::class);
        $this->expectExceptionCode(1002);
        $this->expectExceptionMessage('{"message":"The ref code field is required."}');

        VerifyService::validate([]);
    }

    /**
     * @group testValidate
     **/
    public function testValidateShouldBeFailWithEmptyRefCode()
    {
        $this->expectException(\InvalidArgumentException::class);
        $this->expectExceptionCode(1002);
        $this->expectExceptionMessage('{"message":"The ref code field is required."}');

        VerifyService::validate([
            "msisdn" => "0850000008",
            "otp"    => "1234"
        ]);
    }

    /**
     * @group testValidate
     **/
    public function testValidateShouldBeFailWithInvalidBirthtime()
    {
        $this->expectException(\InvalidArgumentException::class);
        $this->expectExceptionCode(1002);
        $this->expectExceptionMessage('{"message":"The birthtime field is required when flag unknow time is not present."}');

        VerifyService::validate([
            "msisdn"    => "0850000008",
            "otp"       => "1234",
            "ref_code"  => "0850000001801",
            "firstname" => "John",
            "lastname"  => "Doe",
            "birthdate" => "07032542"
        ]);
    }

    /**
     * @group testValidate
     **/
    public function testValidateShouldBeFailWithInvalidIsThailand()
    {
        $this->expectException(\InvalidArgumentException::class);
        $this->expectExceptionCode(1002);
        $this->expectExceptionMessage('{"message":"The is thailand field is required when timezone is not present."}');

        VerifyService::validate([
            "msisdn"           => "0850000008",
            "otp"              => "1234",
            "ref_code"         => "0850000001801",
            "firstname"        => "John",
            "lastname"         => "Doe",
            "birthdate"        => "07032542",
            "flag_unknow_time" => true,
            "is_thailand"      => null
            // "timezone":"+0700"
        ]);
    }

    /**
     * @group testValidate
     **/
    public function testValidateShouldBeSuccess()
    {
        $response = VerifyService::validate($this->mockInputs());
        $this->assertTrue($response);
    }

    /**
     * @group testValidate
     **/
    public function testValidateWithoutNameShouldBeSuccess()
    {
        $params = $this->mockInputs();
        unset($params['firstname']);
        unset($params['lastname']);

        $response = VerifyService::validate($params);
        $this->assertTrue($response);
    }

    /**
     * @group testValidate
     **/
    public function testValidateWithoutLastNameShouldBeSuccess()
    {
        $params = $this->mockInputs();
        unset($params['lastname']);

        $response = VerifyService::validate($params);
        $this->assertTrue($response);
    }

    /**
     * @group testValidate
     **/
    public function testMissingProvinceShouldBeFailed()
    {
        $params = $this->mockInputs();
        unset($params['province']);

        $this->expectException(\InvalidArgumentException::class);
        $this->expectExceptionCode(1002);
        $this->expectExceptionMessage('{"message":"The province field is required when is thailand is true."}');
        VerifyService::validate($params);
    }

    /**
     * @group testGetCToken
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testGetCTokenShouldBeSuccess()
    {
        $mock = m::mock('overload:App\Libraries\Clients\AwsGatewayClient');
        $mock->shouldReceive('get')
             ->with('/vhora/ctoken', json_decode('{"msisdn":"0850000008","otp":"1234","refCode":"0850000001801","firstname":"John","lastname":"Doe","birthdate":"07032542","birthtime":"01:01","flagUnknowTime":true,"isThailand":true,"timezone":"+0700","province":"กรุงเทพฯ"}', true))
             ->andReturn(json_decode('{"code":200,"message":"succes","ctoken":"eyJhbGciOiJSUzI1NiJ9.eyJiaXJ0aGRhdGUiOiIwNzAzMjUzMSIsImJpcnRodGltZSI6IjAwOjMwIiwiZXhwIjoxNjIwNzQ4MzA5LCJmbGFnVW5rbm93VGltZSI6ZmFsc2UsImlhdCI6MTYyMDc0ODAwOSwiaXNUaGFpbGFuZCI6dHJ1ZSwiaXNzIjoidkhvcmEiLCJ0aW1lem9uZSI6IiswNzAwIn0"}', true));

        $response = VerifyService::getCToken($this->mockInputs());

        $this->assertEquals(200, $response['code']);
        $this->assertEquals('succes', $response['message']);
        $this->assertEquals('eyJhbGciOiJSUzI1NiJ9.eyJiaXJ0aGRhdGUiOiIwNzAzMjUzMSIsImJpcnRodGltZSI6IjAwOjMwIiwiZXhwIjoxNjIwNzQ4MzA5LCJmbGFnVW5rbm93VGltZSI6ZmFsc2UsImlhdCI6MTYyMDc0ODAwOSwiaXNUaGFpbGFuZCI6dHJ1ZSwiaXNzIjoidkhvcmEiLCJ0aW1lem9uZSI6IiswNzAwIn0', $response['ctoken']);
    }

    /**
     * @group testGetCToken
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testGetCTokenShouldBeFailException()
    {
        $mock = m::mock('overload:App\Libraries\Clients\AwsGatewayClient');
        $mock->shouldReceive('get')
             ->with('/vhora/ctoken', [
                'msisdn'         => '0850000008', 
                'otp'            => '1234', 
                'refCode'        => '0850000001801', 
                'firstname'      => 'John', 
                'lastname'       => 'Doe', 
                'birthdate'      => '07032542', 
                'birthtime'      => '01:01', 
                'flagUnknowTime' => true, 
                'isThailand'     => true, 
                'timezone'       => '+0700', 
                'province'       => 'กรุงเทพฯ'
            ])
             ->andThrow(new \Exception('Internal Server Error'));

        $response = VerifyService::getCToken($this->mockInputs());
        $this->assertEmpty($response);
    }

    /**
     * @group testGetCToken
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testGetCTokenShouldBeFailClientException()
    {
        $response = new Response(429, ['Content-Type' => 'application/json'], '{"message": "API rate limit exceeded"}');
        $exception = new ClientException('Mock Client Exception', new Request('GET', ''), $response);

        $mock = m::mock('overload:App\Libraries\Clients\AwsGatewayClient');
        $mock->shouldReceive('get')
             ->with('/vhora/ctoken', [
                    'msisdn'         => '0850000008', 
                    'otp'            => '1234', 
                    'refCode'        => '0850000001801', 
                    'firstname'      => 'John', 
                    'lastname'       => 'Doe', 
                    'birthdate'      => '07032542', 
                    'birthtime'      => '01:01', 
                    'flagUnknowTime' => true, 
                    'isThailand'     => true, 
                    'timezone'       => '+0700', 
                    'province'       => 'กรุงเทพฯ'
                ])
             ->andThrow($exception);

        $response = VerifyService::getCToken($this->mockInputs());

        $this->assertEquals(429, $response['status_code']);
        $this->assertEquals('API rate limit exceeded', $response['message']);
    }

    /**
     * @group testCheckRestrictionOtp
     **/
    public function testCheckRestrictionOtpShouldBeSuccess()
    {
        $data       = $this->mockInputs();
        $mock_model = m::mock('overload:App\Models\TruemovehOtpTransactionsModel');
        $mock_model->shouldReceive('findOtpThisDay')
            ->with('0850000008')
            ->andReturn(null);

        $mock_model->shouldReceive('findPendingOtp')
                ->with($data)
            ->andReturn(json_decode('[{"created_at":1620797357,"success":false,"ref_code":"0850000001801","end_date":1620863999,"start_date":1620777600,"msisdn":"0850000008"}]', true));

        $response = VerifyService::checkRestrictionOtp($this->mockInputs());
        
        $this->assertEmpty($response);
    }

    /**
     * @group testCheckRestrictionOtp
     **/
    public function testCheckRestrictionOtpShouldBeFailLimitExceeded()
    {
        $this->expectException(\InvalidArgumentException::class);
        $this->expectExceptionCode(1004);
        $this->expectExceptionMessage('{"status_code":429,"message":"Rate limit exceeded"}');

        $mock_model = m::mock('overload:App\Models\TruemovehOtpTransactionsModel');
        $mock_model->shouldReceive('findOtpThisDay')
            ->with('0850000008')
            ->andReturn(json_decode('[{"created_at":1620797357,"success":true,"ref_code":"0850000001801","end_date":1620863999,"start_date":1620777600,"msisdn":"0850000008"},{"created_at":1620797357,"success":true,"ref_code":"0850000001802","end_date":1620863999,"start_date":1620777600,"msisdn":"0850000008"},{"created_at":1620797357,"success":true,"ref_code":"0850000001803","end_date":1620863999,"start_date":1620777600,"msisdn":"0850000008"}]', true));

        VerifyService::getFacadeRoot()->rate_limit = 3;
        VerifyService::checkRestrictionOtp($this->mockInputs());
    }

    /**
     * @group testUpdateOtpStatus
     **/
    public function testUpdateOtpStatusShouldBeSuccess()
    {
        $mock_model = m::mock('overload:App\Models\TruemovehOtpTransactionsModel')->makePartial();
        $mock_model->shouldReceive('update')
            ->andReturn(true);

        $mock_model->shouldReceive('findPendingOtp')
        ->andReturn(json_decode('[{"created_at":1620797357,"success":true,"ref_code":"0850000001801","end_date":1620863999,"start_date":1620777600,"msisdn":"0850000008"}]', true));
        $test_date = Carbon::create(2021, 6, 18, 12);
        Carbon::setTestNow($test_date);

        $response = VerifyService::updateOtpStatus($this->mockInputs());
        $this->assertNotEmpty($response);
        $this->assertEquals(true, $response[0]['success']);
        $this->assertEquals('0850000001801', $response[0]['ref_code']);
        $this->assertEquals(1624017600, $response[0]['verified_at']);
    }

    public function testbuildParamWithThailandIsFalseShoudRemoveProvince()
    {
        $data = $this->mockInputs();
        $data['is_thailand'] = false;

        $response = VerifyService::buildParam($data);
        $this->assertFalse($response['isThailand']);
        $this->assertArrayNotHasKey('province', $response);
    }

    public function testGetStartOfDayShouldReturn5PMOfPreviousDay()
    {
        $now = Carbon::create(2021, 4, 20);
        Carbon::setTestNow($now);

        $model = new TruemovehOtpTransactionsModel();
        $start = $model->getStartOfDay();
        $end = $model->getEndOfDay();

        $this->assertEquals(1618851600, $start->timestamp);
        $this->assertEquals(1618937999, $end->timestamp);
    }
}
