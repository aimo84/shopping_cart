<?php

namespace App\Http\Controllers;

use App\Facades\PackageListService;

class PackageListController extends ApiParentController
{   
    /**
    * For list sim only type postpaid with group
    * @return array
    *
    */
    public function group()
    {   
        $response_data = [
            'status_code' => 0,
            'status_txt'  => 'OK',
            'data'        => PackageListService::listSimPostpaidGroup()
        ];
        
        return response($response_data);
    }
}
