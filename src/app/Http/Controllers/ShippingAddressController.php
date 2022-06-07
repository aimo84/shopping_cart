<?php

namespace App\Http\Controllers;

use App\Services\ShippingAddressService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ShippingAddressController extends Controller
{
    /**
     * add new address to selected user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  integer  $user_id
     * @return \Illuminate\Http\Response
     */
    public function postShippingAddress($user_id, Request $request)
    {
        // validate input address
        $validator = Validator::make($request->all(), [
            'user_id' => 'required',
            'title' => 'required',
            'firstname' => 'required',
            'lastname' => 'required',
            'address_1' => 'required',
            'district_id' => 'required|integer',
            'district' => 'required',
            'city_id' => 'required|integer',
            'city' => 'required',
            'province_id' => 'required|integer',
            'province' => 'required',
            'postcode' => 'required|integer',
            'phone' => 'required',
            'country_id' => 'required|integer',
            'shipping_email' => 'required|email'
        ]);

        if ($validator->fails()) {
            $errors = $validator->errors();
            return response()->json($errors, 400);
        }

        $response = ShippingAddressService::create($user_id, $request);
        return response()->json($response, $response['status_code'] == 0 ? 200 : 400);

    }

    /**
     * Get all address of specific user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  integer  $user_id
     * @return \Illuminate\Http\Response
     */
    public function getShippingAddress($user_id, Request $request)
    {
        $response = ShippingAddressService::getAll($user_id);
        if ($response['status_code'] > 200) {
            return response()->json([
                "message" => [
                    "en" => "Error please try agian",
                    "th" => "ไม่สำเร็จ โปรดลองใหม่อีกครั้ง"
                ]
            ], 400);
        }
        return response()->json($response['data'], 200);
    }

    /**
     * update existing address of selected user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  integer  $user_id
     * @param  integer  $address_id
     * @return \Illuminate\Http\Response
     */
    public function putShippingAddress($user_id, $address_id, Request $request)
    {
        // validate input address
        $validator = Validator::make($request->all(), [
            'district_id' => 'integer',
            'city_id' => 'integer',
            'province_id' => 'integer',
            'postcode' => 'integer',
            'country_id' => 'integer',
            'shipping_email' => 'email'
        ]);

        if ($validator->fails()) {
            $errors = $validator->errors();
            return response()->json($errors, 400);
        }

        $response = ShippingAddressService::update($user_id, $address_id, $request);
        return response()->json($response, $response['status_code'] == 0 ? 200 : 400);

    }

    /**
     * delete existing address of selected user.
     *
     * @param  integer  $user_id
     * @param  integer  $address_id
     * @return \Illuminate\Http\Response
     */
    public function deleteShippingAddress($user_id, $address_id)
    {
        $response = ShippingAddressService::delete($user_id, $address_id );
        return response()->json($response, $response['status_code'] == 0 ? 200 : 400);
    }
}
