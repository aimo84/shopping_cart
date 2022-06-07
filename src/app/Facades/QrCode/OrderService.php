<?php

namespace App\Facades\QrCode;

use Illuminate\Support\Facades\Facade;

class OrderService extends Facade
{
    /**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return 'App\Services\QrCode\OrderService';
    }
}
