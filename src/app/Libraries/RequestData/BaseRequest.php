<?php

namespace App\Libraries\RequestData;

class BaseRequest
{
    protected $request = [];

    public function setRequest($request)
    {
        $this->request = $request;
    }

    public function getRequest()
    {
        return $this->request;
    }
}