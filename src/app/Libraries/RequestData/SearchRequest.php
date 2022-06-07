<?php

namespace App\Libraries\RequestData;

use App\Libraries\Validation\SearchValidation;

class SearchRequest extends BaseRequest
{
    private $keyword;

    public function setSearchHistory($input)
    {
        $validation = new SearchValidation();
        $validation->parameter($input);
        $validation->rulesSetSearchHistory();
        $validation->exec();

        $this->request = \Arr::get($input, 'keyword');
    }

    public function setSearchSuggestRequest($input)
    {
        $validation = new SearchValidation();
        $validation->parameter($input);
        $validation->rulesGetSearchSuggest();
        $validation->exec();

        $keyword = strtolower(trim(\Arr::get($input, 'q')));
        $this->setKeyword($keyword);

        $this->request = [
            'limit' => \Arr::get($input, 'limit', 8),
            'q' => $this->getKeyword(),
            'section' => 'wemall',
            'fields' => 'name',
            'campaign_non_join' => \Arr::get($input, 'campaign_id', env('CAMPAIGN_ID_LV_C', false))
        ];
    }

    public function setKeyword($keyword) {
        $this->keyword = $keyword;
    }

    public function getKeyword() {
        return $this->keyword;
    }
}
