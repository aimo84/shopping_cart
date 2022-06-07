<?php
namespace App\Http\Controllers;

use App\Http\Controllers\ApiParentController;
use App\Http\Controllers\V2\BaseController;
use App\Facades\PaymentMethodService;
use App\Traits\VHoraResponsorTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class OmiseController extends ApiParentController
{
    use VHoraResponsorTrait;

    /**
     * get toggle omise.
     * @return array
     */
    public function getToggleOmise(Request $request)
    {
        $lrequest  = $request->all();
        $validator = Validator::make($lrequest, [
            'store_id' => 'required',
        ]);

        if ($validator->fails()) {
            $base_controller = new BaseController();
            $errors          = $validator->errors();
            $response        = $this->createErrorMessage($errors, 400);

            return $base_controller->makeResponse($response, 400);
        }

        return PaymentMethodService::getToggleOmise(array_get($lrequest, 'store_id'));
    }
}