<?php

namespace App\Libraries\Clients;

use GuzzleHttp\Client;

class HttpClient
{
    public $client;
    public $base_url;
    public $headers;

    public function __construct()
    {
        $this->client = new Client();
    }
}
