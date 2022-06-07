<?php

namespace App\Libraries\Validation;
use App\Services\LogService;
use Illuminate\Support\Facades\Validator;
use InvalidArgumentException;

class Validation
{
    protected $parameter;
    protected $rules;
    protected $message = [];

    /**
     * @param array $rules
     * @return $this
     */
    public function rules(array $rules)
    {
        $this->rules = $rules;
        return $this;
    }

    /**
     * @param array $parameter
     * @return $this
     */
    public function parameter(array $parameter)
    {
        $this->parameter = $parameter;
        return $this;
    }

    public function message($message)
    {
        $this->message = $message;
        return $this;
    }

    /**
     * @param $log_name
     * @throws ValidateException
     */
    public function exec($log_name = false)
    {
        $validator = Validator::make($this->parameter, $this->rules, $this->message);
        if ($validator->fails()) {
            if ($log_name ) {
                LogService::writeServiceLog($log_name, json_encode($this->parameter), json_encode($this->message), date('d/m/Y H:i:s'));
            } else {
                throw new InvalidArgumentException($validator->messages()->first(), 400);
            }
        }
    }
}
