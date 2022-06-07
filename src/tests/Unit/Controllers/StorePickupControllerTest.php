<?php

namespace Tests\Unit;

use Tests\TestCase;

use Mockery as m;

class StorePickupControllerTest extends TestCase
{

    public function testGetNearmeWithInvalidParamShoudBeFailed()
    {
        $parameters = [
            'lat' => 13.731242,
        ];
        $response = $this->get('/api/true/v2/store-pickup/nearme', $parameters);
        $this->assertEquals(400, $response->getStatusCode());
    }

    public function testGetNearmeShouldBeSuccess()
    {
        $fixture = $this->getFixture('nearme');
        $mock = m::mock('App\Services\StorePickupService');
        $mock->shouldReceive('nearme')->andReturn($fixture);
        $this->app->instance('App\Services\StorePickupService', $mock);

        $parameters = [
            'lat' => 13.731242,
            'lng' => 100.5252764,
            'rad' => 1200,
            'lang' => 'th'
        ];

        $response = $this->get('/api/true/v2/store-pickup/nearme', $parameters);

        $data = json_decode($response->getContent(), 1);
        $this->assertCount(10, $data);
    }
}
