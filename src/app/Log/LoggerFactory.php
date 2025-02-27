<?php

namespace App\Log;

use Monolog\Formatter\LineFormatter;
use Monolog\Handler\StreamHandler;
use Request;

/**
 * Class LoggerFactory
 *
 * @package \App\Log
 */
class LoggerFactory
{

    /**
     * @param $name
     *
     * @return Logger
     */
    public static function create($name)
    {
        $logger        = new Logger($name);
        $streamHandler = self::streamHandler($name);
        $logger->pushHandler($streamHandler);
        $logger->setRequestId(Request::header('x-request-id'));

        return $logger;
    }

    /**
     * @param $name
     *
     * @return \Monolog\Handler\StreamHandler;
     */
    public static function streamHandler($name)
    {
        $suffix        = date('Y-m-d-H');
        $streamHandler = new StreamHandler(storage_path("logs/$name-$suffix.log"));
        $streamHandler->setFormatter(new LineFormatter(null, null, true, false));

        return $streamHandler;
    }

}
