<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Facades\SearchService;
use function GuzzleHttp\json_decode;

class SearchControllerTest extends TestCase
{
    /**
     * @group testGetSearchHistorySuccess
     */
    public function testGetSearchHistorySuccess()
    {
        $mock_result = ['response' => ['data' => ['mock_search']], 'code' => 200];

        SearchService::shouldReceive('getSearchHistory')->withNoArgs()->andReturn($mock_result);

        $res = $this->get('/api/true/v2/search/history');
        $response = json_decode($res->getContent(), true);

        $this->assertEquals(200, \Arr::get($response, 'status_code'));
        $this->assertEquals('OK', \Arr::get($response, 'status_txt'));
        $this->assertEquals(['mock_search'], \Arr::get($response, 'data'));
    }

    /**
     * @group testGetSearchHistoryFail
     */
    public function testGetSearchHistoryFail()
    {
        $mock_result = ['response' => ['data' => 'Fail'], 'code' => 406];

        SearchService::shouldReceive('getSearchHistory')->withNoArgs()->andReturn($mock_result);

        $res = $this->get('/api/true/v2/search/history');
        $response = json_decode($res->getContent(), true);

        $this->assertEquals(406, \Arr::get($response, 'status_code'));
        $this->assertEquals('Not Acceptable', \Arr::get($response, 'status_txt'));
        $this->assertEquals('Fail', \Arr::get($response, 'data'));
    }

    /**
     * @group testSetSearchHistorySuccess
     */
    public function testSetSearchHistorySuccess()
    {
        $mock_result = ['response' => ['data' => ['mock_search']], 'code' => 200];
        $input = ['keyword' => 'mock_search'];

        SearchService::shouldReceive('setSearchHistory')->with($input)->andReturn($mock_result);

        $res = $this->post('/api/true/v2/search/history', $input);
        $response = json_decode($res->getContent(), true);

        $this->assertEquals(200, \Arr::get($response, 'status_code'));
        $this->assertEquals('OK', \Arr::get($response, 'status_txt'));
        $this->assertEquals(['mock_search'], \Arr::get($response, 'data'));
    }

    /**
     * @group testSetSearchHistoryFail
     */
    public function testSetSearchHistoryFail()
    {
        $mock_result = ['response' => ['data' => 'Fail'], 'code' => 406];
        $input = ['keyword' => 'mock_search'];

        SearchService::shouldReceive('setSearchHistory')->with($input)->andReturn($mock_result);

        $res = $this->post('/api/true/v2/search/history', $input);
        $response = json_decode($res->getContent(), true);

        $this->assertEquals(406, \Arr::get($response, 'status_code'));
        $this->assertEquals('Not Acceptable', \Arr::get($response, 'status_txt'));
        $this->assertEquals('Fail', \Arr::get($response, 'data'));
    }

    /**
     * @group testDeleteSearchHistorySuccess
     */
    public function testDeleteSearchHistorySuccess()
    {
        $mock_result = ['response' => ['data' => ['mock_search']], 'code' => 200];
        $input = ['keyword' => 'mock_search'];

        SearchService::shouldReceive('clearSearchHistory')->withNoArgs()->andReturn($mock_result);

        $res = $this->delete('/api/true/v2/search/history');
        $response = json_decode($res->getContent(), true);

        $this->assertEquals(200, \Arr::get($response, 'status_code'));
        $this->assertEquals('OK', \Arr::get($response, 'status_txt'));
        $this->assertEquals(['mock_search'], \Arr::get($response, 'data'));
    }

    /**
     * @group testDeleteSearchHistoryFail
     */
    public function testDeleteSearchHistoryFail()
    {
        $mock_result = ['response' => ['data' => 'Fail'], 'code' => 406];
        $input = ['keyword' => 'mock_search'];

        SearchService::shouldReceive('clearSearchHistory')->withNoArgs()->andReturn($mock_result);

        $res = $this->delete('/api/true/v2/search/history');
        $response = json_decode($res->getContent(), true);

        $this->assertEquals(406, \Arr::get($response, 'status_code'));
        $this->assertEquals('Not Acceptable', \Arr::get($response, 'status_txt'));
        $this->assertEquals('Fail', \Arr::get($response, 'data'));
    }
}
