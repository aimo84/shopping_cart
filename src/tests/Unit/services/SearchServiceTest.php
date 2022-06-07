<?php

namespace Tests\Unit;

use App\Facades\SearchService;
use Tests\TestCase;
use Mockery as m;

class SearchServiceTest extends TestCase
{
    /**
     * @group testGetSearchHistorySuccessWithNoCookie
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testGetSearchHistorySuccessWithNoCookie()
    {
        $mock_response = ['response' => ['data' => []], 'code' => 200];

        $response = SearchService::getSearchHistory();
        $this->assertEquals($mock_response, $response);
    }

    /**
     * @group testGetSearchHistorySuccessWithHaveCookie
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testGetSearchHistorySuccessWithHaveCookie()
    {
        $_COOKIE['tos-search-history'] = json_encode([
            'mock_search'
        ]);

        $mock_response = ['response' => ['data' => ['mock_search']], 'code' => 200];

        $response = SearchService::getSearchHistory();
        $this->assertEquals($mock_response, $response);
    }

    /**
     * @group testGetSearchHistoryFailWithThrowException
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testGetSearchHistoryFailWithThrowException()
    {
        $_COOKIE['tos-search-history'] = [];

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')
            ->andReturn(true);

        $response = SearchService::getSearchHistory();
        $this->assertEquals(406, \Arr::get($response, 'code'));
    }

    /**
     * @group testSetSearchHistorySuccessWithNoHistoryBefore
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testSetSearchHistorySuccessWithNoHistoryBefore()
    {
        $mock_response = ['response' => ['data' => ['iphone']], 'code' => 200];

        $response = SearchService::setSearchHistory(['keyword' => 'iphone']);
        $this->assertEquals($mock_response, $response);
    }

    /**
     * @group testSetSearchHistorySuccessWithHaveHistoryBefore
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testSetSearchHistorySuccessWithHaveHistoryBefore()
    {
        $_COOKIE['tos-search-history'] = json_encode([
            'iphone'
        ]);

        $mock_response = ['response' => ['data' => ['hua', 'iphone']], 'code' => 200];

        $response = SearchService::setSearchHistory(['keyword' => 'hua']);
        $this->assertEquals($mock_response, $response);
    }

    /**
     * @group testSetSearchHistorySuccessWithHaveTheSameKeywordHistoryBefore
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testSetSearchHistorySuccessWithHaveTheSameKeywordHistoryBefore()
    {
        $_COOKIE['tos-search-history'] = json_encode(['hua', 'iphone']);

        $mock_response = ['response' => ['data' => ['iphone', 'hua']], 'code' => 200];

        $response = SearchService::setSearchHistory(['keyword' => 'IPHONE ']);
        $this->assertEquals($mock_response, $response);
    }

    /**
     * @group testSetSearchHistoryFailWithInvalidKeyword
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testSetSearchHistoryFailWithInvalidKeyword()
    {
        $list_input = ['', '     ', [], null];
        foreach ($list_input as $input) {
            $mock_response = ['response' => ['data' => 'The keyword field is required.'], 'code' => 400];

            $mock = m::mock('alias:App\Services\LogService');
            $mock->shouldReceive('writeServiceLog')
                ->andReturn(true);

            $response = SearchService::setSearchHistory(['keyword' => $input]);
            $this->assertEquals($mock_response, $response);
        }
    }

    /**
     * @group testSetSearchHistoryFailWithThrowException
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testSetSearchHistoryFailWithThrowException()
    {
        $mock_search_service = m::mock('App\Services\SearchService')->makePartial();
        $mock_search_service->shouldReceive('clearCookie')->andThrow(new \Exception('Internal Server Error'));

        $mock_response = ['response' => ['data' => 'Internal Server Error'], 'code' => 406];
        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')
            ->andReturn(true);

        $response = $mock_search_service->setSearchHistory(['keyword' => 'IPHONE ']);
        $this->assertEquals($mock_response, $response);
    }

    /**
     * @group testClearSearchHistorySuccess
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testClearSearchHistorySuccess()
    {
        $mock_response = ['response' => ['data' => 'success'], 'code' => 200];

        $response = SearchService::clearSearchHistory();
        $this->assertEquals($mock_response, $response);
    }

    /**
     * @group testClearSearchHistoryFailWithThrowException
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testClearSearchHistoryFailWithThrowException()
    {
        $mock_search_service = m::mock('App\Services\SearchService')->makePartial();
        $mock_search_service->shouldReceive('clearCookie')->andThrow(new \Exception('Internal Server Error'));

        $mock_response = ['response' => ['data' => 'Internal Server Error'], 'code' => 406];
        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')
            ->andReturn(true);

        $response = $mock_search_service->clearSearchHistory(['keyword' => 'IPHONE ']);
        $this->assertEquals($mock_response, $response);
    }
}
