<?php

namespace App\Libraries\Clients;

use App\Libraries\Clients\HttpClient;

class BifrostClient extends HttpClient
{
    public function __construct($headers = [])
    {
        parent::__construct();
        $this->setBaseUrl();
        $this->setHeaders($headers);
    }

    /**
     * Set based URL
     *
     * @return void
     */
    public function setBaseUrl()
    {
        $this->base_url = env('BIFROST_URL', 'https://platform.weomni-test.com/');
    }

    /**
     * Set request headers
     *
     * @return void
     */
    public function setHeaders($headers = [])
    {
        $this->headers = array_merge([
            'Content-Type'    => 'application/json',
            'Accept-Encoding' => 'gzip, deflate, br'
        ], $headers);
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

    /**
     * Create an api request with POST method
     *
     * @param string $path
     * @param array $parameters
     *
     * @throws Exception
     *
     * @return array
     */
    public function postFormData($path, $parameters = [])
    {
        $url      = $this->base_url . $path;
        $response = $this->client->post($url, [
            'headers'     => array_merge($this->headers, ['Content-Type' => 'application/x-www-form-urlencoded']),
            'form_params' => $parameters
        ]);

        if (200 !== $response->getStatusCode()) {
            throw new \Exception('Something went wrong', $response->getStatusCode());
        }

        return json_decode($response->getBody()->getContents(), true);
    }

     /**
     * Create an api request with POST Json method
     *
     * @param string $path
     * @param array $parameters
     *
     * @throws Exception
     *
     * @return array
     */
    public function post($path, $parameters = [])
    {
        $url      = $this->base_url . $path;
        $response = $this->client->post($url, [
            'headers' => $this->headers,
            'json'    => $parameters
        ]);

        if (200 !== $response->getStatusCode()) {
            throw new \Exception('Something went wrong', $response->getStatusCode());
        }

        return json_decode($response->getBody()->getContents(), true);
    }
}
