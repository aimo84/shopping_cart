<?php

namespace App\Http\Controllers;

use App\Http\Controllers\ApiParentController;
use App\Services\CreditokService;
use App\Services\LogService;
use Illuminate\Http\Request as LaravelRequest;
use Illuminate\Support\Str;

class CreditokController extends ApiParentController
{
    public function postIOActionLog($magic_function_method_name, $lrequest, $content)
    {
        $message_id      = Str::uuid()->toString();
        $log_message_str = "message_id = $message_id, $magic_function_method_name input: " . json_encode_unicode($lrequest->all()) . ", $magic_function_method_name result: " . json_encode_unicode(["content" => $content]);
        LogService::writeActionLog($lrequest, $log_message_str);

        return [$message_id];
    }

    public function postCallbackSubmit(LaravelRequest $lrequest)
    {
        header("Access-Control-Allow-Origin: *");
        $content             = CreditokService::postCallbackSubmit($lrequest);
        $tmp_action_log_data = self::postIOActionLog(__METHOD__, $lrequest, $content);

        return $this->processAPIController($content, $lrequest, "creditok/callback/submit");
    }

    public function postCreateApplication(LaravelRequest $lrequest)
    {
        $content             = CreditokService::postCreateApplication($lrequest);
        $tmp_action_log_data = self::postIOActionLog(__METHOD__, $lrequest, $content);

        return $this->processAPIController($content, $lrequest, "creditok/create-application");
    }

    public function getStatus(LaravelRequest $lrequest, $ekyc_hash)
    {
        $content             = CreditokService::getStatus($lrequest, $ekyc_hash);
        $lrequest["ekyc_hash"] = $ekyc_hash; // fix so-team-02, fix add log for get-status input credit ok
        $tmp_action_log_data = self::postIOActionLog(__METHOD__, $lrequest, $content);

        return $this->processAPIController($content, $lrequest, "creditok/get-status/$ekyc_hash");
    }

    public function postRetrieveConsent(LaravelRequest $lrequest)
    { 
        $content = CreditokService::postRetrieveConsent($lrequest);
        self::postIOActionLog(__METHOD__, $lrequest, $content);
        return $this->processTMNResponse($content,'get_consent');
    }

    public function postSaveConsent(LaravelRequest $lrequest)
    {   
        $content = CreditokService::postSaveConsent($lrequest);
        self::postIOActionLog(__METHOD__, $lrequest, $content);
        return $this->processTMNResponse($content,'save_consent');
    }
}
