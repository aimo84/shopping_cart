<?php

namespace App\Http\Controllers;

use App\Facades\LvAService;
use Illuminate\Http\Request as LaravelRequest;

class LvAController extends ApiParentController
{
    public function getLevelAContent(LaravelRequest $lrequest)
    {
        return LvAService::getAllContent($lrequest);
    }
}
