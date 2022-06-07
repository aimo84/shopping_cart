<?php

namespace App\Http\Controllers;

use App\Facades\AdvertisementService;

class AdvertisementController extends ApiParentController
{
    public function getAdvertisement()
    {
        $response_data = [
            'status_code' => 200,
            'data'        => AdvertisementService::getAdvertisement(),
        ];

        return response($response_data)->header('Content-Type', 'application/json');
    }
}
