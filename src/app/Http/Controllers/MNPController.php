<?php
namespace App\Http\Controllers;

use App\Http\Controllers\ApiParentController;
use App\Services\LogService;
use App\Services\MNPService;
use Illuminate\Http\Request as LaravelRequest;
use Illuminate\Support\Str;

class MNPController extends ApiParentController
{
    public function postIOActionLog($magic_function_method_name, $lrequest, $content)
    {
        $message_id      = Str::uuid()->toString();
        $log_message_str = "message_id = $message_id, $magic_function_method_name input: " . json_encode_unicode($lrequest->all()) . ", $magic_function_method_name result: " . json_encode_unicode(["content" => $content]);
        LogService::writeActionLog($lrequest, $log_message_str);

        return [$message_id];
    }

    public function checkOtpMNP(LaravelRequest $lrequest)
    {
        $final_response      = MNPService::checkOtp($lrequest);
        $tmp_action_log_data = self::postIOActionLog(__METHOD__, $lrequest, $final_response);

        return $this->processAPIController($final_response, $lrequest, "check-otp");
    }

    public function verifyPinCodeMNP(LaravelRequest $lrequest)
    {
        $final_response      = MNPService::checkPinCode($lrequest);
        $tmp_action_log_data = self::postIOActionLog(__METHOD__, $lrequest, $final_response);

        return $this->processAPIController($final_response, $lrequest, "verify-pin-code");
    }

    public function verifyPersonalInformationMNP(LaravelRequest $lrequest)
    {
        $final_response      = MNPService::verifyPersonalInformation($lrequest);
        $tmp_action_log_data = self::postIOActionLog(__METHOD__, $lrequest, $final_response);

        return $this->processAPIController($final_response, $lrequest, "verify-personal-information");
    }

    public function placeOrderMNP(LaravelRequest $lrequest)
    {
        $final_response      = MNPService::placeOrderMNP($lrequest);
        $tmp_action_log_data = self::postIOActionLog(__METHOD__, $lrequest, $final_response);

        return $this->processAPIController($final_response, $lrequest, "placeorder");
    }

    public function getRandomMobileNas(LaravelRequest $lrequest)
    {
        $final_response      = MNPService::getRandomMobileNas($lrequest);
        $tmp_action_log_data = self::postIOActionLog(__METHOD__, $lrequest, $final_response);

        return $this->processAPIController($final_response, $lrequest, "mnp/bundling/random/mobile/nas");
    }

    public function getPricePlanCodeTicket(LaravelRequest $lrequest)
    {
        $final_response      = MNPService::getPricePlanCodeTicket($lrequest);
        $tmp_action_log_data = self::postIOActionLog(__METHOD__, $lrequest, $final_response);

        return $this->processAPIController($final_response, $lrequest, "mnp/bundling/priceplan/code/ticket");
    }

    public function postVerifyMNPBundling(LaravelRequest $lrequest)
    {
        $final_response      = MNPService::postVerifyMNPBundling($lrequest);
        $tmp_action_log_data = self::postIOActionLog(__METHOD__, $lrequest, $final_response);

        return $this->processAPIController($final_response, $lrequest, "mnp/bundling/verify");
    }
}
