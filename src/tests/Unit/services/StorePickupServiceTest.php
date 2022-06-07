<?php

namespace Tests\Unit;

use App\Services\StorePickupService;
use Tests\TestCase;
use Carbon\Carbon;
use Mockery as m;

class StorePickupServiceTest extends TestCase
{

    /**
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testGetNearmeShouldBeSuccess()
    {
        $fixture = $this->getFixture('nearme_gateway');

        $path = '/typhoon/seven/nearme';
        $parameters = [
            'rad' => 1200,
            'lang' => 'th',
            'limit' => 50,
            'at' => '13.731242,100.5252764'
        ];

        $mock = m::mock('overload:App\Libraries\Clients\AwsGatewayClient');
        $mock->shouldReceive('get')
             ->with($path, $parameters)
             ->andReturn($fixture);

        $mockNow = Carbon::create(2021, 4, 20);
        Carbon::setTestNow($mockNow);
        
        $banner_service = new StorePickupService();
        $result = $banner_service->nearme([
            'at' => '13.731242,100.5252764',
            'rad' => 1200
        ]);

        $this->assertCount(6, $result);
    }

    /**
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testGetNearmeWithNullResponseShouldBeSuccess()
    {
        $fixture = $this->getFixture('nearme_gateway');

        $path = '/typhoon/seven/nearme';
        $parameters = [
            'rad' => 1200,
            'lang' => 'th',
            'limit' => 50,
            'at' => '13.731242,100.5252764'
        ];

        $mock = m::mock('overload:App\Libraries\Clients\AwsGatewayClient');
        $mock->shouldReceive('get')
             ->with($path, $parameters)
             ->andReturn(null);

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')
             ->andReturn(true);

        $banner_service = new StorePickupService();
        $result = $banner_service->nearme([
            'at' => '13.731242,100.5252764',
            'rad' => 1200
        ]);
        $this->assertCount(0, $result);
    }

    public function testGenerateAppKey()
    {
        $mockNow = Carbon::create(2021, 1, 1);
        Carbon::setTestNow($mockNow);

        $service = new StorePickupService();
        $this->assertEquals('bBOkyWK3ChLc31iuoPdaEg==', $service->generateAppKey());
    }
}
