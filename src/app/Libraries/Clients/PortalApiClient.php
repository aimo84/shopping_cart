<?php

namespace App\Libraries\Clients;

use App\Libraries\Clients\HttpClient;

class PortalApiClient extends HttpClient
{

    public function __construct()
    {
        parent::__construct();
        $this->setBaseUrl();
        $this->setHeaders();
    }

    /**
     * Set based URL
     *
     * @return void
     */
    public function setBaseUrl()
    {
        $this->base_url = env('WEMALL_ENDPOINT', 'https://api.wls-dev.com/');
    }

    /**
     * Set request headers
     *
     * @return void
     */
    public function setHeaders()
    {
        $this->headers = [
            "Content-Type" => "application/json",
            "x-api-auth"   => env("X_API_AUTH", false)
        ];
    }

    /**
     * Create an api request with GET method
     *
     * @param string $path
     * @param array $parameters
     *
     * @throws Exception
     *
     * @return array
     */
    public function get($path, $parameters = [])
    {
        $url      = $this->base_url . $path;
        $response = $this->client->get($url, [
            'headers' => $this->headers,
            'query'   => $parameters
        ]);

        if (200 !== $response->getStatusCode()) {
            throw new \Exception('Something went wrong', $response->getStatusCode());
        }

        return json_decode($response->getBody()->getContents(), true);
    }
}
