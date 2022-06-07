<?php

namespace App\Facades\Sale;

use Illuminate\Support\Facades\Facade;

class SaleService extends Facade
{
    /**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return 'App\Services\Sale\SaleSmsService';
    }
}
