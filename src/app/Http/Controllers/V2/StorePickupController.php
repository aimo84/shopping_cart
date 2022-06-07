<?php

namespace App\Http\Controllers\V2;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\V2\BaseController;
use App\Services\StorePickupService;

class StorePickupController extends BaseController
{

    public function __construct(StorePickupService $store_pickup_service)
    {
        $this->store_pickup_service = $store_pickup_service;
    }

    /**
     * Get list of nearby store
     *
     * Parameters
     * - lat (required)
     * - lng (required)
     * - rad
     * - lang
     */
    public function nearme(Request $request)
    {
        $validator = Validator::make($request->query(), [
            'lat' => 'required',
            'lng' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => 'lat, lng required'], 400);
        }

        if ($request->query('rad')) {
            $parameters['rad'] = $request->query('rad');
        }

        if ($request->query('lang')) {
            $parameters['lang'] = $request->query('lang');
        }

        $parameters['at'] = $request->query('lat') . ',' . $request->query('lng');
        $result = $this->store_pickup_service->nearme($parameters);

        return response()->json($result, 200);
    }
}
