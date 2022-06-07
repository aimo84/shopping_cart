<?php

namespace Tests\Unit;

use App\Services\SimActivationService;
use function GuzzleHttp\json_decode;
use Tests\TestCase;
use Mockery as m;

class SimActivationServiceTest extends TestCase
{
    /**
     * @group testValidateSuccess
     * @group WLSFT-18623
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testValidateSuccess()
    {
        $input = [
            'correlation_id' => '2021021217520001',
            'sim_type'       => 'POST',
            'channel'        => '3GW-TRUESTORE',
            'dealer_code'    => '80000084',
            'sim_serial'     => 'sdasdasdsa',
            'customer_info'  => [
                'identification' => 1212121212121,
                'birth_date'     => '26/11/1993',
            ],
            'subscriber_info' => [
                'company_code' => 'RM',
                'proposition'  => 'RMV000000022044'
            ]
        ];

        $mock_response_post = '{"code":"200","description":"success","correlationId":"2021021217520001","3gwTrackingId":"637571152537165699"}';
        $mock_response_post = [
            0 => [],
            1 => $mock_response_post
        ];
        $mock_guzzle_service = m::mock('alias:App\Services\GuzzleService');
        $mock_guzzle_service->shouldReceive('postGuzzleRequest')->once()->andReturn($mock_response_post);

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        $response = SimActivationService::validate($input);

        $this->assertEquals($mock_response_post, $response);
    }

    /**
     * @group testValidateFail
     * @group WLSFT-18623
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testValidateFail()
    {
        $input = [
            'correlation_id' => '2021021217520001',
            'sim_type'       => 'POST',
            'channel'        => '3GW-TRUESTORE',
            'dealer_code'    => '80000084',
            'sim_serial'     => 'sdasdasdsa',
            'customer_info'  => [
                'identification' => 1212121212121,
                'birth_date'     => '26/11/1993',
            ],
            'subscriber_info' => [
                'company_code' => 'RM',
                'proposition'  => 'RMV000000022044'
            ]
        ];

        $mock_response_post = '{"code":"400","data":{"message":"no data"},"correlationId":"2021021217520001","3gwTrackingId":"637571152537165699"}';
        $mock_response_post = [
            0 => [],
            1 => $mock_response_post
        ];
        $mock_guzzle_service = m::mock('alias:App\Services\GuzzleService');
        $mock_guzzle_service->shouldReceive('postGuzzleRequest')->once()->andReturn($mock_response_post);

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        $mock_response = '{"code":"400","data":{"message":"no data"},"correlationId":"2021021217520001","3gwTrackingId":"637571152537165699","message":{"en":"no data","th":"no data"}}';
        $mock_response = [
            0 => [],
            1 => $mock_response
        ];

        $response = SimActivationService::validate($input);

        $this->assertEquals($mock_response, $response);
    }

    /**
     * @group testGetDeeplinkSuccess
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testGetDeeplinkSuccess()
    {
        $input  = [
            'correlation_id' => 'c9675b95-77d2-41d3-a797-4bdc6882c0ad',
            'msisdn'         => 'MDgzMDAxMzQ1NQ==',
            'sim_serial'     => '896600322100000152',
            'priceplan'      => 'SMRTGP04SUP',
            'sale_id'        => 'sale1234',
            'offer'          => 'RMV000000025091',
            'company_code'   => 'RM',
            'lang'           => 'TH',
            'dealer_code'    => '80100112',
        ];

        $mock_store_service = m::mock('overload:App\Services\StoreService');
        $mock_store_service->shouldReceive('processGetExternalPricePlanCodeByPricePlanCode')->with('SMRTGP04SUP')->once()->andReturn('SMRTGP04');

        $mock_response_post = '{"statusCode":200,"message":"SUCCESSFUL","deeplink":"https://p4p7p.app.goo.gl/yfMgXNihum562Ya6A"}';
        $mock_response_post = [
            0 => [],
            1 => $mock_response_post
        ];
        $mock_guzzle_service = m::mock('alias:App\Services\GuzzleService');
        $mock_guzzle_service->shouldReceive('postGuzzleRequest')->once()->andReturn($mock_response_post);

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        $response = SimActivationService::getDeeplink($input);

        $this->assertEquals($mock_response_post, $response);
    }

    /**
     * @group testGetDeeplinkFail
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testGetDeeplinkFail()
    {
        $input  = [
            'correlation_id' => 'c9675b95-77d2-41d3-a797-4bdc6882c0ad',
            'msisdn'         => 'MDgzMDAxMzQ1NQ==',
            'sim_serial'     => '896600322100000152',
            'priceplan'      => 'SMRTGP04SUP',
            'sale_id'        => 'sale1234',
            'offer'          => 'RMV000000025091',
            'company_code'   => 'RM',
            'lang'           => 'TH',
            'dealer_code'    => '80100112',
        ];

        $mock_store_service = m::mock('overload:App\Services\StoreService');
        $mock_store_service->shouldReceive('processGetExternalPricePlanCodeByPricePlanCode')->with('SMRTGP04SUP')->once()->andReturn('SMRTGP04');

        $mock_response_post = '{"code":"400","data":{"message":"no data"},"correlationId":"2021021217520001","3gwTrackingId":"637571152537165699","message":{"en":"no data","th":"no data"}}';
        $mock_response_post = [
            0 => 400,
            1 => $mock_response_post
        ];
        $mock_guzzle_service = m::mock('alias:App\Services\GuzzleService');
        $mock_guzzle_service->shouldReceive('postGuzzleRequest')->once()->andReturn($mock_response_post);

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        $response = SimActivationService::getDeeplink($input);

        $this->assertEquals($mock_response_post, $response);
    }
}
