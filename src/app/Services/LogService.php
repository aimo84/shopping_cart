<?php
namespace App\Services;

use App\Log\LoggerFactory;

class LogService
{
    public static function writeActionLog($request, $description)
    {
        $currentAction = \Route::currentRouteAction();
        if (!empty($currentAction)) {
            list($controller, $method) = explode('@', $currentAction);

            $controller = preg_replace('/.*\\\/', '', $controller);

            if (is_string($controller) && is_string($method) && is_string($description)) {
                $logger = LoggerFactory::create("action_api");
                $logger->info("$controller@$method [$description]");
            }
        }

    }

    public static function writeServiceLog($type, $req, $resp, $time, $error = '-')
    {
        $logger = LoggerFactory::create("service");
        if (gettype($resp) != "string") {
            $resp = json_encode($resp);
        }
        $logger->info("[$type] req:$req resp:$resp time:$time error:$error");
    }

    public static function writeCommandLog($command, $body)
    {
        $logger = LoggerFactory::create("command.$command");
        $logger->info("[$command] $body");
    }
}
