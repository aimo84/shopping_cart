<?php

namespace App\Services\VHora;

use App\Libraries\Clients\AwsGatewayClient;
use App\Traits\VHoraResponsorTrait;
use Illuminate\Support\Facades\Redis;

use App\Models\TruemovehConfigModel;
use App\Libraries\RequestData\VhoraOfflineRequest;

class VHoraOnlineService
{
    use VHoraResponsorTrait;
    private $input;

    public function getDealerInfo($tmp_input)
    {
        $funtong_numbers_service = new FuntongNumbersService();
        $channel = "online"; //"online","configs"
        $channel_config = $funtong_numbers_service->getSettings("vhora_low_tier_$channel");
        $input = ["shop_code" => \Arr::get($channel_config, 'dealer_code')];

        $request = new VhoraOfflineRequest();
        $request->setRequestGetDealerInfo($input);

        $shop_config = $this->getShopConfig(\Arr::get($tmp_input, 'channel'));
        $shop_config = array_get($shop_config, 'default');

        $shop_code = $input["shop_code"];
        $shop_name = Redis::get("vhora-online-data:mapping-shop-code-name:$shop_code");

        if (!$shop_name) {
            $client               = new AwsGatewayClient();
            $response_dealer_info = $client->post('/vhora/dealer-info', $request->getRequest());
            $dealer_info          = array_get($response_dealer_info, 'wssoList.wssoInfoArray.0', []);
            $set_shop_name        = [
                'th' => array_get($dealer_info, 'thaiName'),
                'en' => array_get($dealer_info, 'englishName'),
            ];
            $shop_name = json_encode($set_shop_name);
            Redis::set("vhora-online-data:mapping-shop-code-name:$shop_code", $shop_name);
        }

        return [
            'code' => $shop_code,
            'name' => json_decode($shop_name, true),
            'config' => $shop_config,
        ];
    }

    private function getShopConfig($channel)
    {
        $vhora_online_shop_key = "vhora-$channel-shop";
        $shop_config = Redis::get($vhora_online_shop_key);
        if (!$shop_config) {
            $config_model = new TruemovehConfigModel();
            $result = $config_model->findFirst($vhora_online_shop_key);
            $data = $result ? $result->toArray() : [];
            $shop_config = array_get($data, 'value');
            Redis::set($vhora_online_shop_key, $shop_config);
        }
        return json_decode($shop_config, 1);
    }
}
