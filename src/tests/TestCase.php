<?php

namespace Tests;

use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;

    /**
     * Override GET function
     */
    public function get($uri, $parameters = [], $headers = [])
    {
        $headers = array_merge([
            'CONTENT_TYPE' => 'application/json',
            'Accept' => 'application/json',
        ], $headers);
        $server = $this->transformHeadersToServerVars($headers);
        return $this->call('GET', $uri, $parameters, [], [], $server);
    }

    /**
     * Get mock response
     */
    public function getFixture($name, $folder = null)
    {
        $path = '/Fixtures/' . $name . '.json';
        
        if (!empty($folder)) $path = '/Fixtures/' . $folder . '/' . $name . '.json';

        $fixture = __DIR__ . $path;
        $fixture = file_get_contents($fixture);

        return json_decode($fixture, 1);
    }

    /**
     * Get mock response
     */
    public function getFile($name, $folder = null)
    {
        $path = '/Fixtures/' . $name;
        
        if (!empty($folder)) $path = '/Fixtures/' . $folder . '/' . $name;
        $fixture = __DIR__ . $path;

        return file_get_contents($fixture);
    }
}
