<?php

namespace App\Services;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Redis;

class ElsaService
{
    public static function sendLog(Request $request)
    {
        $elsa_enable = Redis::get('elsa:is_enable');
        if (empty($elsa_enable)) {
            return response()->json('');
        }

        $validator = Validator::make($request->all(), [
            'data' => 'required|string',
        ]);

        if ($validator->fails()) {
            $errors = $validator->errors();

            return response()->json($errors, 400);
        }

        $concat_data   = self::concatDataLog($request);
        $elsa_response = self::sendLogToElsa($concat_data);

        return $elsa_response;
    }

    private static function sendLogToElsa(Request $request)
    {

        $elsa_project_id = env('TOL_SSV_PROJECT_ID', false);
        $current_url     = "/bifrost/api/elsa/projects/$elsa_project_id/event";

        $method = 'POST';
        $header = TolSelfService::getHeader('Authorization');

        $fixed_parameter_list["base_url"] = env("WEOMNI_URL_TOL_SSV", false);
        $result                           = WlsService::operateRequestAction($current_url, $method, $request, $header, $fixed_parameter_list);

        return response(null, $result[0]);
    }

    private static function concatDataLog(Request $request)
    {
        $data   = $request->data;
        $header = session()->getId() ?: session()->get('session_id');

        $now              = Carbon::now();
        $format_date_time = $now->format('Y-m-d H:i:s');

        $concat = $data . "|{$header}" . "|{$format_date_time}";

        $json_decode         = json_decode($concat);
        $json_decode['data'] = $concat;

        $new_request = $request;
        $new_request->replace($json_decode);

        return $new_request;
    }

    public static function createElsaLoggerOrderFormat($data)
    {

        $keys = [
            "elsalog:session_id:" . $data['secure_key'],
            'weomni_clm_camp_id:' . $data['secure_key'],
            'elsalog:typhoon_type:' . $data['secure_key'],
        ];
        $redis_data   = Redis::mget($keys);
        $session_id   = array_get($redis_data, 0);
        $camp_id      = array_get($redis_data, 1);
        $typhoon_type = array_get($redis_data, 2);

        $typhoon_data = '';

        if (!empty($typhoon_type)) {
            $json_decode  = json_decode($typhoon_type, true);
            $typhoon_data = $json_decode['cart_type'] . '-' . $json_decode['type'];
        }

        foreach ($data['order_product'] as $product) {

            $arr = ['Payment', 'success', $product['product_id'], $product['sku'], $product['quantity'], $product['price'], $camp_id, $typhoon_data, '', $data['secure_key'], $data['created_at']];

            $pipe_separated = implode("|", $arr);

            $request = new Request();
            $request->setMethod('POST');
            session()->put('session_id', $session_id);
            $request->replace(['data' => $pipe_separated]);

            self::sendLog($request);
        }

        Redis::del($keys);
    }

    public static function createElsaLoggerTOLOrderFormat($tolInputData, $tolProductData, $tolGISData, $tolOrderData)
    {
        $tolProductLog = [
            array_get($tolProductData, 'data.contract_code'),
            array_get($tolProductData, 'data.entry_fee'),
            array_get($tolProductData, 'data.media'),
            array_get($tolProductData, 'data.service_code'),
        ];

        $tolProductLog = implode('|', $tolProductLog);

        $tolGISAddress = [
            array_get($tolGISData, 'gis_data.CENTROID_LATITUDE'),
            array_get($tolGISData, 'gis_data.CENTROID_LONGITUDE'),
            array_get($tolGISData, 'gis_data.STREET'),
            array_get($tolGISData, 'gis_data.SOI'),
            array_get($tolGISData, 'gis_data.SUB_DISTRICT'),
            array_get($tolGISData, 'gis_data.DISTRICT'),
            array_get($tolGISData, 'gis_data.PROVINCE'),
            array_get($tolGISData, 'gis_data.ZIP_CODE'),
        ];

        $tolGISAddress = implode('|', $tolGISAddress);

        $tolUserAddress = [
            array_get($tolInputData, 'customerContactList.firstname'),
            array_get($tolInputData, 'customerContactList.lastname'),
            array_get($tolInputData, 'billingAddress.houseNo'),
            array_get($tolInputData, 'billingAddress.soi'),
            array_get($tolInputData, 'billingAddress.streetName'),
            array_get($tolInputData, 'billingAddress.tumbon'),
            array_get($tolInputData, 'billingAddress.amphur'),
            array_get($tolInputData, 'billingAddress.city'),
            array_get($tolInputData, 'billingAddress.zip'),
        ];

        $tolUserAddress = implode('|', $tolUserAddress);
        $clm_code       = array_get($tolInputData, 'clm_upsell', '');

        $now              = Carbon::now();
        $format_date_time = $now->format('Y-m-d H:i:s');

        $arr = [
            'TOL user order',
            'success',
            $tolProductLog,
            array_get($tolProductData, 'data.price', ''),
            array_get($tolProductData, 'data.invoice_tol', ''),
            array_get($tolProductData, 'data.tol_entry_fee', ''),
            $tolGISAddress,
            $clm_code,
            $tolUserAddress,
            array_get($tolOrderData, 'wfReservationId'),
            $format_date_time,
        ];

        $pipe_separated = implode("|", $arr);

        $request = new Request();
        $request->setMethod('POST');
        $request->replace(['data' => $pipe_separated]);

        self::sendLog($request);
    }

    public static function createElsaLoggerCLMOrderFormat($clmType, $clmUserInputData, $clmOrderData, $clmRedisData)
    {
        $now              = Carbon::now();
        $format_date_time = $now->format('Y-m-d H:i:s');

        $arr = [
            $clmType,
            'success',
            array_get($clmRedisData, 'input.camp_id'),
            array_get($clmRedisData, 'input.thai_id'),
            array_get($clmRedisData, 'input.mobile_number') . array_get($clmRedisData, 'input.circuit_id'),
            array_get($clmUserInputData, 'selected_package'),
            array_get($clmUserInputData, 'selected_price'),
            array_get($clmOrderData, 'correlationId'),
            $format_date_time,
        ];

        $pipe_separated = implode("|", $arr);

        $request = new Request();
        $request->setMethod('POST');
        $request->replace(['data' => $pipe_separated]);

        self::sendLog($request);
    }

    public static function createElsaLoggerEkycFormat($json_decode_pre_ekyc_redis_data, $answers) {
        $ekyc_log = join('|', [
            'event'         => 'Ekyc',
            'status'        => 'success',
            'productId'     => array_get($json_decode_pre_ekyc_redis_data, 'answers.placeorder_request.privilege.0.product_id'),
            'matcode'       => array_get($json_decode_pre_ekyc_redis_data, 'answers.placeorder_request.privilege.0.product_code'),
            'addressData'   => join(',', [
                array_get($answers, 'first_name'),
                array_get($answers, 'last_name'),
                array_get($answers, 'email'),
                array_get($answers, 'home_address'),
                array_get($answers, 'home_district'),
                array_get($answers, 'home_subdistrict'),
                array_get($answers, 'home_province'),
                array_get($answers, 'home_zipcode'),
                array_get($answers, 'mobile_no'),
                array_get($answers, 'national_id')
            ])
        ]);

        $request = new Request();
        $request->setMethod('POST');
        $request->replace(['data' => $ekyc_log]);

        self::sendLog($request);
    }
}
