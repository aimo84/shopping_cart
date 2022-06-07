<?php

namespace App\Http\Controllers\V2;

use App\Facades\Sale\SaleService;
use Illuminate\Http\Request;

class SaleController extends BaseController
{
    public function postSaleSms(Request $request)
    {
        $response_data = SaleService::processSaleSms($request->all());
        return $this->makeResponse(array_get($response_data, 'response'), array_get($response_data, 'code'));
    }

    public function postSaleQr(Request $request)
    {
        $response = SaleService::processSaleQr($request->all());
        return $this->makeResponse(array_get($response,'response'),array_get($response,'code'));
    }

    public function postValidateShopCode(Request $request)
    {
        $response = SaleService::processValidateShopCode($request->all());
        return $this->makeResponse(\Arr::get($response,'response'), \Arr::get($response,'code'));
    }
}
