<?php

namespace App\Services;

use App\Libraries\RequestData\SearchRequest;
use Illuminate\Support\Facades\Redis;

class SearchService
{
    private $search_history_cookie = 'tos-search-history';

    public function getSearchHistory()
    {
        try {
            $search_history = \Arr::get($_COOKIE, $this->search_history_cookie, '{}');
            $search_history_list = json_decode($search_history, true);

            $response = ['response' => ['data' => $search_history_list], 'code' => 200];
        } catch (\Exception $e) {
            $response = $this->setException('Search:get-history:exception', '', $e->getMessage(), 406);
        }

        return $response;
    }

    public function setSearchHistory($input)
    {
        try {
            $request_search = new SearchRequest();
            $request_search->setSearchHistory($input);
            $keyword = trim(strtolower($request_search->getRequest()));
            $search_history = \Arr::get($_COOKIE, $this->search_history_cookie, '{}');
            $search_history_list = json_decode($search_history, true);

            foreach ($search_history_list as $index => $each_keyword) {
                if ($keyword == trim(strtolower($each_keyword))) {
                    unset($search_history_list[$index]);
                }
            }

            array_unshift($search_history_list, $keyword);
            $search_history_list = array_slice($search_history_list, 0, 6);

            $this->clearCookie();
            $this->setCookie(json_encode($search_history_list), time() + ((3600 * 24) * 30));

            $response = ['response' => ['data' => $search_history_list], 'code' => 200];

        } catch (\InvalidArgumentException $e) {
            $response = $this->setException('Search:set-history:validate', $input, $e->getMessage(), 400);
        } catch (\Exception $e) {
            $response = $this->setException('Search:set-history:exception', $input, $e->getMessage(), 406);
        }

        return $response;
    }

    public function clearSearchHistory()
    {
        try {
            $this->clearCookie();
            $response = ['response' => ['data' => 'success'], 'code' => 200];
        } catch (\Exception $e) {
            $response = $this->setException('Search:clear-history:exception', '', $e->getMessage(), 406);
        }

        return $response;
    }

    public function clearCookie()
    {
        $this->setCookie('', time() - 3600);
    }

    public function setCookie($cookie_data, $time)
    {
        setcookie($this->search_history_cookie, $cookie_data, $time, '/');
    }

    private function setException($step, $input, $result, $code)
    {
        LogService::writeServiceLog($step, json_encode($input), json_encode($result), date('d/m/Y H:i:s'));
        return ['response' => ['data' => $result], 'code' => $code];
    }

    public function processGetSearchSuggestion($input)
    {
        try {
            $request = new SearchRequest();
            $request->setSearchSuggestRequest($input);

            $keyword = $request->getKeyword();

            $result = Redis::get("truestore:search_suggestion:q:$keyword:redis_data");
            if (empty($result)) {
                $result = $this->callGetSearchSuggestion($request->getRequest());
                Redis::set("truestore:search_suggestion:q:$keyword:redis_data", $result, 'EX', 60);
            }

            $response = ['response' => ['data' => json_decode($result, true)], 'code' => 200];
        } catch (\InvalidArgumentException $e) {
            $response = $this->setException('Search:get-suggest:validate', $input, $e->getMessage(), 400);
        } catch (\UnexpectedValueException $e) {
            $response = $this->setException('Search:get-suggest:unexpected-value-exception', $input, $e->getMessage(), 422);
        } catch (\Exception $e) {
            $response = $this->setException('Search:get-suggest:exception', $input, $e->getMessage(), 406);
        }

        return $response;
    }

    private function callGetSearchSuggestion($data) {
        $headers = [
            "Content-Type" => "application/json",
            "x-api-auth"   => env("X_API_AUTH_VLEARN_VERIFY", false),
        ];

        $result = WlsService::operateRequestAction('search/suggest', 'get', new \Illuminate\Http\Request(), $headers, $data);

        $response_data   = \json_decode(\Arr::get($result, 1, '{}'), true);
        $data = \Arr::get($response_data, 'data', '');
        $status_code = \Arr::get($response_data, 'status_code', 400);
        if ($status_code !== 0 || !$data) {
            throw new \UnexpectedValueException('Get search suggestion error', 422);
        }

        return json_encode(array_column(\Arr::get($response_data, 'data.record', []), 'name'));
    }
}
