<?php

namespace App\Http\Controllers;

use App\Services\LogService;
use App\Services\LvCService;
use Illuminate\Http\Request as LaravelRequest;
use Illuminate\Support\Str;

class LvCController extends ApiParentController
{
    public function getPortalCampaign($id, LaravelRequest $lrequest)
    {
        $response_data = LvCService::getPortalCampaign($id, $lrequest);
        $content       = [\Arr::get($response_data, 'code'), \Arr::get($response_data, 'response')];
        $controller_result = $this->processAPIController($content, $lrequest, "wportal/campaign/$id");

        $action_log_content                         = [];
        $action_log_content["content_src"]          = $content;
        $action_log_content["content_intermediate"] = $response_data;
        $action_log_content["content_processed"]    = json_decode($controller_result->content(), true);
        self::postIOActionLog(__METHOD__, $lrequest, $action_log_content);

        return $controller_result;
    }

    public function getMobilePattern(LaravelRequest $lrequest)
    {
        $url           = "truemoveh/mobile/pattern";
        $method        = "get";
        $header        = [];
        $response_data = LvCService::getMobilePattern($url, $method, $lrequest, $header);
        $content       = [\Arr::get($response_data, 'code'), \Arr::get($response_data, 'response')];

        $controller_result = $this->processAPIController($content, $lrequest, $url);

        $action_log_content                         = [];
        $action_log_content["content_src"]          = $content;
        $action_log_content["content_intermediate"] = $response_data;
        $action_log_content["content_processed"]    = json_decode($controller_result->content(), true);
        self::postIOActionLog(__METHOD__, $lrequest, $action_log_content);

        return $controller_result;
    }

    public function getPortalCampaignFlashsale(LaravelRequest $lrequest)
    {
        $response_data = LvCService::getPortalCampaignFlashsale($lrequest);
        $content       = [\Arr::get($response_data, 'code'), \Arr::get($response_data, 'response')];

        $controller_result = $this->processAPIController($content, $lrequest, "wportal/campaign");

        $action_log_content                         = [];
        $action_log_content["content_src"]          = $content;
        $action_log_content["content_intermediate"] = $response_data;
        $action_log_content["content_processed"]    = json_decode($controller_result->content(), true);
        self::postIOActionLog(__METHOD__, $lrequest, $action_log_content);

        return $controller_result;
    }

    public function postIOActionLog($magic_function_method_name, $lrequest, $content)
    {
        $message_id      = Str::uuid()->toString();
        $log_message_str = "message_id = $message_id, $magic_function_method_name input: " . json_encode_unicode($lrequest->all()) . ", $magic_function_method_name result: " . json_encode_unicode(["content" => $content]);
        LogService::writeActionLog($lrequest, $log_message_str);

        return [$message_id];
    }

    public function getPortalContent(LaravelRequest $lrequest)
    {
        $url               = "wportal/content";
        $content           = LvCService::getPortalContent($lrequest);
        $controller_result = $this->processAPIController($content, $lrequest, $url);

        return $controller_result;
    }

    public function getMenuContent()
    {
        $response_data = [
            'status_code' => 200,
            'data'        => LvCService::getMenuContent(),
        ];

        return response($response_data)->header('Content-Type', 'application/json');
    }

    public function getContentPartner($id, LaravelRequest $lrequest)
    {
        $response_data = LvCService::getContentPartner($id,$lrequest);
        $content       = [\Arr::get($response_data, 'code'), \Arr::get($response_data, 'response')];

        $controller_result = $this->processAPIController($content, $lrequest, "content-partner/$id");

        $action_log_content                         = [];
        $action_log_content["content_src"]          = $content;
        $action_log_content["content_intermediate"] = $response_data;
        $action_log_content["content_processed"]    = json_decode($controller_result->content(), true);
        self::postIOActionLog(__METHOD__, $lrequest, $action_log_content);

        return $controller_result;
    }
    public function getContentList($id)
    {
        $response_data = LvCService::getContentList($id);
        return ['status_code' => 200, 'body' => $response_data];
    }

}
