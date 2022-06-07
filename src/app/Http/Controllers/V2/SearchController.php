<?php

namespace App\Http\Controllers\V2;

use App\Facades\SearchService;
use Illuminate\Http\Request as LaravelRequest;

class SearchController extends BaseController
{
    public function getSearchHistory()
    {
        $response = SearchService::getSearchHistory();
        return $this->makeResponse(\Arr::get($response, 'response'), \Arr::get($response, 'code'));
    }

    public function setSearchHistory(LaravelRequest $lrequest)
    {
        $response = SearchService::setSearchHistory($lrequest->all());
        return $this->makeResponse(\Arr::get($response, 'response'), \Arr::get($response, 'code'));
    }

    public function deleteSearchHistory()
    {
        $response = SearchService::clearSearchHistory();
        return $this->makeResponse(\Arr::get($response, 'response'), \Arr::get($response, 'code'));
    }

    public function getSearchSuggestion(LaravelRequest $lrequest)
    {
        $response_data = SearchService::processGetSearchSuggestion($lrequest->all());
        return $this->makeResponse(\Arr::get($response_data, 'response'), \Arr::get($response_data, 'code'));
    }
}
