<?php

namespace App\Http\Controllers;

use App\Services\ElsaService;
use Illuminate\Http\Request;

class ElsaController extends ApiParentController
{
    public function sendLog(Request $request)
    {
        return ElsaService::sendLog($request);
    }
}
