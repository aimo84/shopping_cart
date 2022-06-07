<?php

namespace App\Http\Controllers;

use App\Services\LogService;
use App\Services\PaySmoothService;
use Illuminate\Http\Request as LaravelRequest;
use Illuminate\Support\Str;

class PaySmoothController extends ApiParentController
{
    public function postIOActionLog($magic_function_method_name, $lrequest, $content)
    {
        $message_id      = Str::uuid()->toString();
        $log_message_str = "message_id = $message_id, $magic_function_method_name input: " . json_encode_unicode($lrequest->all()) . ", $magic_function_method_name result: " . json_encode_unicode(["content" => $content]);
        LogService::writeActionLog($lrequest, $log_message_str);

        return [$message_id];
    }

    public function postVerify(LaravelRequest $lrequest)
    {
        $response_data = PaySmoothService::postVerify($lrequest);
        $content       = [\Arr::get($response_data, 'code'), \Arr::get($response_data, 'response')];

        $controller_result = $this->processAPIController($content, $lrequest, "pay-smooth/verify");

        $action_log_content                         = [];
        $action_log_content["content_src"]          = $content;
        $action_log_content["content_intermediate"] = $response_data;
        $action_log_content["content_processed"]    = json_decode($controller_result->content(), true);
        $tmp_action_log_data                        = self::postIOActionLog(__METHOD__, $lrequest, $action_log_content);

        return $controller_result;
    }
}
