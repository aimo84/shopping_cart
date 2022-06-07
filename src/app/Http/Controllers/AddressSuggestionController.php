<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AddressSuggestionController extends Controller
{
    public function getSuggestion($suggest_type, Request $request)
    {
        switch ($suggest_type) {
            case 'country':
            case 'province':
            case 'city':
            case 'district':
                break;
            default:
                $status_code = 404;
                $body        = ["message" => ["en" => 'suggest type not found', "th" => "ไม่พบชนิดของที่อยู่ดังกล่าว"]];

                return response()->json($body, $status_code); //*/
                break;
        }

        $language_with_underscore = "";
        if ($request->has('language')) {
            $language_with_underscore = $request->input('language') . "_";
        }

        try
        {
            $result_body_array = json_decode(file_get_contents(storage_path("api/config/sample_page_when_offline/" . $language_with_underscore . $suggest_type . ".json")), true);
        } catch (\Exception $e) {
            $status_code = 500;
            $body        = ["message" => ["en" => 'master data file for address suggestion not found', "th" => "ไม่พบไฟล์สำหรับแนะนำที่อยู่"]];

            return response()->json($body, $status_code);
        }
        $status_code = 200;

        switch ($suggest_type) {
            case 'country':
            case 'province':
            case 'city':
            case 'district':
                $parameter                  = $request->all();
                $filtered_result_body_array = [];
                foreach ($result_body_array as $r) {
                    $is_skip = false;
                    foreach ($parameter as $key => $value) {
                        if (isset($r[$key]) && $r[$key] != $value) {
                            $is_skip = true;
                            break;
                        }
                    }
                    if ($is_skip) {
                        continue;
                    }
                    $filtered_result_body_array[] = $r;
                }
                $status_code = 200;
                if (empty($filtered_result_body_array)) {
                    $status_code                           = 404;
                    $filtered_result_body_array["message"] = ["en" => 'suggest address not found', "th" => "ไม่พบที่อยู่ดังกล่าว"];
                }
                break;
            default:
                $status_code                           = 404;
                $filtered_result_body_array            = [];
                $filtered_result_body_array["message"] = ["en" => 'suggest type not found', "th" => "ไม่พบชนิดของที่อยู่ดังกล่าว"];
                break;
        }

        return response()->json($filtered_result_body_array, $status_code); //*/
    }

    public function postAddressCheck(Request $request)
    {
        $rule = App('App\Http\Controllers\OrderDetailController')->getAddressRule();

        $response_param = ["is_address_valid" => true];

        $tmp_input_filtered = App('App\Http\Controllers\OrderDetailController')->array_remove_empty($request->all());

        // convert input data to the one we can send
        $validator = Validator::make($tmp_input_filtered, $rule);

        if ($validator->fails()) {
            $errors                             = $validator->errors();
            $response_param["is_address_valid"] = false;
            $response_param["error_message"]    = $errors;

            return response()->json($response_param, 400);
        }

        return response()->json($response_param, 200);

    }

    public function getUniversityList(Request $request)
    {
        $path_name = "api/config/sample_page_when_offline/university.json";
        if (!$path_name) {
            $response_param = [500, ['message' => ["en" => "system error", "th" => "เกิดข้อผิดพลาดภายในระบบ"]]];

            return response()->json($response_param[1], $response_param[0]);
        }
        $tmp_content = file_get_contents(storage_path($path_name));
        if (!$tmp_content) {
            $response_param = [500, ['message' => ["en" => "system error 2", "th" => "เกิดข้อผิดพลาดภายในระบบ 2"]]];

            return response()->json($response_param[1], $response_param[0]);
        }
        $json_decode_content = json_decode($tmp_content, true);
        $result              = $json_decode_content;

        $status_code    = 200;
        $response_param = [$status_code, $result];

        return response()->json($response_param[1], $response_param[0]);
    }
}
