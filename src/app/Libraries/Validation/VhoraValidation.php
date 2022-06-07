<?php

namespace App\Libraries\Validation;

class VhoraValidation extends Validation
{
    public function rulesGetProphecy()
    {
        $rules = [
            'password' => 'required',
            'ref_code' => 'required',
            'birthdate' => 'required',
            'birthtime' => 'required_without:flag_unknow_time',
            'flag_unknow_time' => 'required_without:birthtime',
            'is_thailand' => 'required_without:timezone',
            'timezone' => 'required_without:is_thailand',
            'province' => 'required_if:is_thailand,true'
        ];

        $this->rules($rules);
    }

    public function rulesResendEmail()
    {
        $rules = [
            'birthdate' => 'required',
            'birthtime' => 'required',
            'select_number' => 'required',
            'email' => 'required',
            'vhora_image' => 'required',
            'fortune_funtong' => 'required',
        ];

        $this->rules($rules);
    }
}
