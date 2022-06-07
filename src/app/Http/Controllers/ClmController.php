<?php

namespace App\Http\Controllers;

use App\Http\Controllers\ApiParentController;
use App\Services\ClmService;
use App\Services\LogService;
use Illuminate\Http\Request as LaravelRequest;
use Illuminate\Support\Str;

class ClmController extends ApiParentController
{
    public function postGetCampTransClmList(LaravelRequest $lrequest)
    {
        $content = ClmService::postGetCampTransClmList($lrequest);

        return $this->processAPIController($content, $lrequest, "tmvh/clm/get-camp-trans-clm-list");
    }

    public function getValidateChangePricePlan(LaravelRequest $lrequest)
    {
        $content = ClmService::getValidateChangePricePlan($lrequest);

        return $this->processAPIController($content, $lrequest, "tmvh/clm/validate-change-price-plan");
    }

    public function getSearchPricePlan(LaravelRequest $lrequest)
    {
        $content = ClmService::getSearchPricePlan($lrequest);

        return $this->processAPIController($content, $lrequest, "tmvh/clm/search-price-plan");
    }

    public function postGetMobileOfferInventory(LaravelRequest $lrequest)
    {
        $content = ClmService::postGetMobileOfferInventory($lrequest);

        return $this->processAPIController($content, $lrequest, "tmvh/clm/get-mobile-offer-inventory");
    }

    public function postOrderChangePricePlan(LaravelRequest $lrequest, $param1)
    {
        $content = ClmService::postOrderChangePricePlan($lrequest, $param1);

        return $this->processAPIController($content, $lrequest, "tmvh/clm/order-change-price-plan/{$param1}");
    }

    public function getBillingProfileInfo(LaravelRequest $lrequest)
    {
        $content = ClmService::getBillingProfileInfo($lrequest);

        return $this->processAPIController($content, $lrequest, "tmvh/clm/get-billing-profile-info");
    }

    public function postVerify(LaravelRequest $lrequest)
    {
        $content = ClmService::postVerify($lrequest);
        if (!($lrequest->has('is_feature_test') && $lrequest->input('is_feature_test') == true)) {
            $message_id      = Str::uuid()->toString();
            $log_message_str = "message_id = $message_id, verification-clm-up-pack input: " . json_encode_unicode($lrequest->all()) . ", verification-postVerifyTolSsvBlacklist result: " . json_encode_unicode(["content" => $content]);
            LogService::writeActionLog($lrequest, $log_message_str);
        }

        return $this->processAPIController($content, $lrequest, "tmvh/clm/get-billing-profile-info");
    }

    public function postVerifyMobileOnly(LaravelRequest $lrequest)
    {
        $content = ClmService::postVerify($lrequest, true);
        if (!($lrequest->has('is_feature_test') && $lrequest->input('is_feature_test') == true)) {
            $message_id      = Str::uuid()->toString();
            $log_message_str = "message_id = $message_id, verification-clm-up-pack mobile input: " . json_encode_unicode($lrequest->all()) . ", verification-postVerifyTolSsvBlacklist result: " . json_encode_unicode(["content" => $content]);
            LogService::writeActionLog($lrequest, $log_message_str);
            if (array_key_exists('tmp_check_result', $content[1])) {
                unset($content[1]['tmp_check_result']);
            }
        }

        return $this->processAPIController($content, $lrequest, "tmvh/clm/get-billing-profile-info");
    }

    public function postGetCurrentPackage(LaravelRequest $lrequest)
    {
        $content = ClmService::postGetCurrentPackage($lrequest);

        return $this->processAPIController($content, $lrequest, "tmvh/clm/get-billing-profile-info");
    }

    public function postListPackage(LaravelRequest $lrequest)
    {
        $content = ClmService::postListPackage($lrequest);

        return $this->processAPIController($content, $lrequest, "tmvh/clm/get-billing-profile-info");
    }

    public function postConfirmNewPackage(LaravelRequest $lrequest)
    {
        $content = ClmService::postConfirmNewPackage($lrequest);
        if (!($lrequest->has('is_feature_test') && $lrequest->input('is_feature_test') == true)) {
            $message_id      = Str::uuid()->toString();
            $log_message_str = "message_id = $message_id, confirm-new-package-clm input: " . json_encode_unicode($lrequest->all()) . ", verification-postVerifyTolSsvBlacklist result: " . json_encode_unicode(["content" => $content]);
            LogService::writeActionLog($lrequest, $log_message_str);
        }

        return $this->processAPIController($content, $lrequest, "tmvh/clm/get-billing-profile-info");
    }

    public function postSuccess(LaravelRequest $lrequest)
    {
        $content = ClmService::postSuccess($lrequest);

        return $this->processAPIController($content, $lrequest, "tmvh/clm/get-billing-profile-info");
    }

    public function getBenefitOnTop(LaravelRequest $lrequest)
    {
        $content = ClmService::getBenefitOnTop($lrequest);

        return $this->processAPIController($content, $lrequest, "tmvh/clm/get-billing-profile-info");
    }

    public function postAddLeads(LaravelRequest $lrequest)
    {
        $content = ClmService::postAddLeads($lrequest);

        return $this->processAPIController($content, $lrequest, "tmvh/clm/callback/add-leads");
    }

    public function getPreviewListPackage(LaravelRequest $lrequest)
    {
        $content = ClmService::getPreviewListPackage($lrequest);

        return $this->processAPIController($content, $lrequest, "tmvh/clm/get-campaign-list");
    }

    public function getPreviewBenefitOnTop(LaravelRequest $lrequest)
    {
        $content = ClmService::getPreviewBenefitOnTop($lrequest);

        return $this->processAPIController($content, $lrequest, "tmvh/clm/get-campaign-list");
    }
    
    public function postGetCampaignInstantBenefit(LaravelRequest $lrequest)
    {
        $content = ClmService::postGetCampaignInstantBenefit($lrequest);

        return $this->processAPIController($content, $lrequest, "tmvh/clm/get-instant-benefit");
    }
}
