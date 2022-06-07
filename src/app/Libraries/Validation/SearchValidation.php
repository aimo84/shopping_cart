<?php

namespace App\Libraries\Validation;

class SearchValidation extends Validation
{
    public function rulesSetSearchHistory()
    {
        $rules = [
            'keyword' => 'required',
        ];

        $this->rules($rules);
    }
    public function rulesGetSearchSuggest()
    {
        $rules = [
            'q' => 'required',
        ];

        $this->rules($rules);
    }
}
