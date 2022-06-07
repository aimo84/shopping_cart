<?php

namespace App\Http\Controllers;

use App\Http\Controllers\ApiParentController;
use App\Services\ClmService;
use App\Services\ClmVasService;
use App\Services\LogService;
use Illuminate\Http\Request as LaravelRequest;
use Illuminate\Support\Str;

class ClmVasController extends ApiParentController
{
    public function postVerify($service, LaravelRequest $lrequest)
    {
        switch ($service) {
            case 'clm-tmvh-vas':
                $content = ClmService::postVerify($lrequest, true);
                break;

            case 'clm-tol-vas':
                $content = ClmVasService::postVerify($lrequest);
                break;

            default:
                $content = [
                    400,
                    [
                        'message' =>
                        [
                            'en' => 'Sorry, the system cannot process your request at the moment.',
                            'th' => 'ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้',
                        ],
                    ],
                ];
        }

        if (!($lrequest->input('is_feature_test') == true)) {
            $message_id      = Str::uuid()->toString();
            $log_message_str = "message_id = $message_id, verification-$service input: " . json_encode_unicode($lrequest->all()) . ", result: " . json_encode_unicode(["content" => $content]);
            LogService::writeActionLog($lrequest, $log_message_str);
            if (array_key_exists('tmp_check_result', $content[1])) {
                unset($content[1]['tmp_check_result']);
            }
        }

        return $this->processAPIController($content, $lrequest, "tmvh/clm/get-billing-profile-info");
    }

    public function postListPackage($service, LaravelRequest $lrequest)
    {
        $content = ClmVasService::postListPackage($lrequest, $service);

        return $this->processAPIController($content, $lrequest, "tmvh/clm/get-billing-profile-info");
    }

    public function postConfirmNewPackage($service, LaravelRequest $lrequest)
    {
        $content = ClmVasService::postConfirmNewPackage($lrequest);
        if (!($lrequest->input('is_feature_test') == true)) {
            $message_id      = Str::uuid()->toString();
            $log_message_str = "message_id = $message_id, confirm-new-package-$service input: " . json_encode_unicode($lrequest->all()) . ", result: " . json_encode_unicode(["content" => $content]);
            LogService::writeActionLog($lrequest, $log_message_str);
            if (array_key_exists('clm_verify_redis_data_json_decode', $content[1])) {
                unset($content[1]['clm_verify_redis_data_json_decode']);
            }
        }

        return $this->processAPIController($content, $lrequest, "tmvh/clm/get-billing-profile-info");
    }

    public function postSuccess($service, LaravelRequest $lrequest)
    {
        $content = ClmService::postSuccess($lrequest);

        return $this->processAPIController($content, $lrequest, "tmvh/clm/get-billing-profile-info");
    }

    public function postPreviewListPackage($service, LaravelRequest $lrequest)
    {
        $content = ClmVasService::postPreviewListPackage($lrequest, $service);

        return $this->processAPIController($content, $lrequest, "tmvh/clm/get-campaign-list");
    }
}
