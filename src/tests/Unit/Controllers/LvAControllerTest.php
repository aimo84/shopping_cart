<?php

namespace Tests\Unit;

use App\Facades\LvAService;
use Tests\TestCase;
use function GuzzleHttp\json_decode;

class LvAControllerTest extends TestCase
{
    /**
     * @group testGetLevelAContentSuccess
     */
    public function testGetLevelAContentSuccess()
    {
        $mock_result = ['status_code' => 200, 'body' => ['mock_result']];

        LvAService::shouldReceive('getAllContent')->andReturn($mock_result);

        $res = $this->get('/api/true/level-a', ['code' => 'Truestore_level_a_config']);
        $response = json_decode($res->getContent(), true);

        $this->assertEquals(200, \Arr::get($response, 'status_code'));
        $this->assertEquals(['mock_result'], \Arr::get($response, 'body'));
    }

    /**
     * @group testGetLevelAContentFail
     */
    public function testGetLevelAContentFail()
    {
        $mock_result = ['status_code' => 500, 'response' => 'mock_error'];

        LvAService::shouldReceive('getAllContent')->andReturn($mock_result);

        $res = $this->get('/api/true/level-a', ['code' => 'Truestore_level_a_config']);
        $response = json_decode($res->getContent(), true);

        $this->assertEquals(500, \Arr::get($response, 'status_code'));
        $this->assertEquals('mock_error', \Arr::get($response, 'response'));
    }
}
