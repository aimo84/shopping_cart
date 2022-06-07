<?php

namespace App\Log;

/**
 * Class Logger
 *
 * @package \App\Log
 */
class Logger extends \Monolog\Logger
{

    protected $requestId;

    public function removeHiddenFields(array $context = [])
    {
        $hiddenFields = config('logger.hidden_fields');
        foreach ($context as $key => $values) {
            if (is_array($values)) {
                $collection = collect($values);
                if ($key != 'errors') {
                    $collection = $collection->except($hiddenFields['all']);
                }

                if (in_array($key, array_keys($hiddenFields))) {
                    $collection = $collection->except($hiddenFields[$key]);
                }
                $context[$key] = $collection->all();
            }
        }

        return $context;
    }

    /**
     * @param         $action
     * @param         $message
     * @param array   $context
     * @param boolean $debug
     */
    public function action($action, $message, array $context = [], $debug = false)
    {

        $message = "$action $message";

        $context = $this->removeHiddenFields($context);

        if ($debug) {
            $this->debug($message, $context);
        } else {
            $this->info($message, $context);
        }

    }

    public function error($message, array $context = [])
    {
        return parent::error("{$this->requestId} $message", $context);
    }

    public function info($message, array $context = [])
    {
        return parent::info("{$this->requestId} $message", $context);
    }

    public function debug($message, array $context = [])
    {
        return parent::debug("{$this->requestId} $message", $context);
    }

    /**
     * @param mixed $requestId
     */
    public function setRequestId($requestId)
    {
        $this->requestId = $requestId;
    }

}
