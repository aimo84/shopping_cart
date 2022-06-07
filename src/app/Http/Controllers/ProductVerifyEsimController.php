<?php

namespace App\Http\Controllers;

use App\Facades\ProductService;

class ProductVerifyEsimController extends ApiParentController
{
    public function getProductVerifyEsim($product_id)
    {
        $response_data = [
            'status_code' => 200,
            'data'        => ProductService::getProductVerifyEsim($product_id),
        ];
        
        return response($response_data)->header('Content-Type', 'application/json');
    }
}
