<?php

namespace App\Http\Controllers;

use App\Services\LogService;
use App\Services\TolSelfService;
use App\Services\WeOmniService;
use Illuminate\Http\Request as LaravelRequest;
use Illuminate\Support\Str;

class TolSelfServiceController extends Controller
{
    public function postVerifyTolSsvBlacklistTol(LaravelRequest $lrequest)
    {
        $content = TolSelfService::postVerifyTolSsvBlacklistTol($lrequest);

        if (!($lrequest->has('is_feature_test') && $lrequest->input('is_feature_test') == true)) {
            $message_id      = Str::uuid()->toString();
            $log_message_str = "message_id = $message_id, verification-postVerifyTolSsvBlacklist input: " . json_encode_unicode($lrequest->all()) . ", verification-postVerifyTolSsvBlacklist result: " . json_encode_unicode(["content" => $content]);
            LogService::writeActionLog($lrequest, $log_message_str);
        }

        return self::processAPIController($content, $lrequest, "verify/tol_ssv_blacklist");
    }

    public function getAppointmentInfo(LaravelRequest $lrequest)
    {
        $content = TolSelfService::getAppointmentInfo($lrequest);

        return self::processAPIController($content, $lrequest, "tmvh/tol-ssv/get-appointment-info");
    }

    public function registerTrueOnlineProduct(LaravelRequest $lrequest, $param_correlation_id)
    {
        $content = TolSelfService::registerTrueOnlineProduct($lrequest);

        return self::processAPIController($content, $lrequest, "tmvh/tol-ssv/register/{$param_correlation_id}");
    }

    public function getServiceArea(LaravelRequest $lrequest)
    {
        $content = TolSelfService::getServiceArea($lrequest);

        return self::processAPIController($content, $lrequest, 'get-service-area');
    }

    // to return json data for testing.
    public function mockFunction(LaravelRequest $lrequest)
    {
        $content = TolSelfService::mockFunction('');

        return self::processAPIController($content, $lrequest, '');
    }

    public function registerOrder(LaravelRequest $lrequest)
    {
        $content = TolSelfService::registerOrder($lrequest);

        return self::processAPIController($content, $lrequest, "tol/register-order");
    }

    public function checkInstallationStatus(LaravelRequest $lrequest)
    {
        $content = TolSelfService::checkInstallationStatus($lrequest);

        return self::processAPIController($content, $lrequest, "tol/check-otp-update-status");
    }

    public function getAddressforRegister(LaravelRequest $lrequest)
    {
        $content = TolSelfService::getAddressforRegister($lrequest);

        return self::processAPIController($content, $lrequest, "tol/get-address");
    }

    public function tolProductListContent(LaravelRequest $lrequest)
    {
        $content = WeOmniService::tolProductListContent($lrequest);

        return self::processAPIController($content, $lrequest, "tol-product-list-content");
    }

    public function tolProductListContentwithContentId(LaravelRequest $lrequest)
    {
        $content = WeOmniService::tolProductListContentwithContentId($lrequest);

        return self::processAPIController($content, $lrequest, "tol-product-get-content");
    }

    public function tolRegisterListContent(LaravelRequest $lrequest)
    {
        $content = WeOmniService::tolRegisterListContent($lrequest);

        return self::processAPIController($content, $lrequest, "tol-register-list-content");
    }

    public function tolRegisterCreateContent(LaravelRequest $lrequest)
    {
        $content    = WeOmniService::tolRegisterCreateContent($lrequest);
        $content[1] = json_decode($content[1], true);

        return self::processAPIController($content, $lrequest, "tol-register-create-content");
    }

    public function tolRegisterUpdateContent(LaravelRequest $lrequest)
    {
        $content = WeOmniService::tolRegisterUpdateContent($lrequest);

        return self::processAPIController($content, $lrequest, "tol-register-update-content");
    }

    public function processAPIController($content, $lrequest, $url)
    {
        if (isset($content[0]) && isset($content[1])) {
            $status_code = $content[0];
            $body        = $content[1];
        } elseif (isset($content["status_code"]) && isset($content["body"])) {
            $status_code = $content["status_code"];
            $body        = $content["body"];
        } else {
            $status_code           = 500;
            $body                  = [];
            $body["message"]       = [];
            $body["message"]["en"] = "Error within middleware, unable to find url route for the api that got specified";
            $body["message"]["th"] = "เกิดข้อผิดพลาดภายใน middleware ไม่สามารถหาเส้นทาง middleware ให้กับ url api ที่ระบุมาได้";
        }

        $result = ['status_code' => $status_code, 'body' => $body];
        if (isset($content[2])) {
            $result['error_message'] = $content[2];
        }

        if (!($lrequest->has('is_feature_test') && $lrequest->input('is_feature_test')) &&
            (
                isset($result['error_message']) ||
                (
                    gettype($result["body"]) == "string" &&
                    (
                        $result["status_code"] >= 300 ||
                        (
                            isset(json_decode($result["body"], true)["status_code"]) &&
                            json_decode($result["body"], true)["status_code"] >= 300
                        )
                    )
                )
            )
        ) {
            $message_id = Str::uuid()->toString();
            $data       = $lrequest->all();

            $log_message_str = "message_id = $message_id, error log, url = $url, data: " . json_encode_unicode($data) . ", body: " . json_encode_unicode($body) . ", additional_error: ";
            if (isset($result['error_message'])) {
                $log_message_str .= json_encode_unicode($result['error_message']);
            }
            LogService::writeActionLog($lrequest, $log_message_str);
        }

        $status_code = $result['status_code'];
        $body        = $result['body'];

        if ($status_code < 300) {
            return response($body)->header('Content-Type', 'application/json');
        } elseif (gettype($body) == "array" && isset($body["message"]["en"]) && isset($body["message"]["th"])) {
            return response()->json($body, $status_code);
        } elseif (gettype($body) == "string") {
            return response()->json(['message' => ["en" => $body, "th" => $body]], $status_code);
        } else {
            return response()->json(['message' => ["en" => "system error", "th" => "เกิดข้อผิดพลาดภายในระบบ"]], $status_code);
        }
    }

    public function getServiceCoverage(LaravelRequest $lrequest)
    {
        $content = TolSelfService::getServiceCoverage($lrequest);

        return self::processAPIController($content, $lrequest, "tmvh/tol-ssv/get-service-coverage");
    }

    public function changeInstallationDate(LaravelRequest $lrequest)
    {
        $content = TolSelfService::changeInstallationDate($lrequest);

        return self::processAPIController($content, $lrequest, "tmvh/tol-ssv/change-installation-date/");
    }

    public function postRequestAccessToken(LaravelRequest $lrequest)
    {
        $content = WeOmniService::postRequestAccessToken();

        return self::processAPIController($content, $lrequest, "uaa/oauth/token");
    }

    public function checkBlackListandPendingStatus(LaravelRequest $lrequest)
    {
        $content = TolSelfService::checkBlackListandPendingStatus($lrequest);

        return self::processAPIController($content, $lrequest, "tol/check-blacklist-retrieve-calendar");
    }

    public function checkCustomerAppointment(LaravelRequest $lrequest)
    {
        $content = TolSelfService::checkCustomerAppointment($lrequest);

        return self::processAPIController($content, $lrequest, "tol/check-customer-appointment");
    }

    public function retriveNewTimeslot(LaravelRequest $lrequest)
    {
        $content = TolSelfService::retriveNewTimeslot($lrequest);

        return self::processAPIController($content, $lrequest, '/tmvh/tol-ssv/query-appointment-capability');
    }
}
