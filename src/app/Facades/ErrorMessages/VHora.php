<?php

namespace App\Facades\ErrorMessages;

use Illuminate\Support\Facades\Facade;

class VHora extends Facade
{
    /**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return 'App\Services\ErrorMessages\VHora';
    }
}
