<?php
namespace App\Services\VHora;

use App\Libraries\Benchmark;
use App\Libraries\Clients\AwsGatewayClient;
use App\Services\LogService;
use App\Services\VHora\VHoraService;
use App\Traits\VHoraResponsorTrait;
use GuzzleHttp\Exception\ClientException;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Arr;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Facades\Validator;
use InvalidArgumentException;
use App\Models\TruemovehConfigModel;

class FuntongNumbersService
{
    use VHoraResponsorTrait;

    private $low_tier_configs  = 'vhora_low_tier_configs';
    private $funtong_whitelist = ['packs', 'zodiac_id', 'number_like', 'number_dislike', 'birthdate', 'birthtime', 'timezone', 'province', 'cnt', 'channel'];
    private $page_limit        = 25;
    private $zodiac_count      = 12;
    private $current_page      = 1;

    /**
     * Instantiate a new FuntongNumbersService instance.
     */
    public function __construct()
    {
        $this->current_page = LengthAwarePaginator::resolveCurrentPage();
        $this->benchmark    = new Benchmark();

    }

    /**
     * Get funtong numbers
     *
     * @param $lrequest
     * @return array
     */
    public function getNumbers($lrequest)
    {
        try {
            $this->benchmark->bench('total');
            $inputs = $lrequest->json()->all();
            $this->validate($inputs);

            $key_cache = "vhora:zodiac:" . md5(serialize($inputs)) . ":$this->current_page";
            $cache     = Redis::get($key_cache);
            if ($cache) {
                $this->benchmark->bench('total', 'end');

                return json_decode($cache, true);
            }

            $this->benchmark->bench('get-settings');
            $config                    = $this->getSettings($this->low_tier_configs);
            $this->page_limit          = Arr::get($config, 'page_limit', $this->page_limit);
            $channel                   = Arr::get($inputs, 'channel');
            $sorting                   = Arr::get($inputs, 'sort');

            $config_shop_offline = [];
            if (!empty($inputs['shop'])) {
                $config_shop_offline = $this->getOfflineShopConfigByShop($inputs);
                if (!empty($config_shop_offline)) {
                    $config['config_shop_offline'] = $config_shop_offline;
                    $channel = array_get($config_shop_offline, 'dynamo_channel_name');
                }
            }

            $config['channel_configs'] = $this->getSettings("vhora_low_tier_$channel");
            $dealer_code      = Arr::get($config, 'channel_configs.dealer_code', null);
            $collection_packs = collect(Arr::get($config['channel_configs'], 'packs', []))->sortBy('position', SORT_NATURAL);
            $config['packs']  = $collection_packs->all();
            $packs            = $collection_packs->transform(function (array $item) {
                return Arr::except($item, 'position');
            })->all();

            // start of tec-1731 berfuntong offline alias
            $inputs_alias          = Arr::get($inputs, "alias", Arr::get($inputs, 'shop'));
            $channel_configs_alias = Arr::get($config, "channel_configs.alias.$inputs_alias");
            if (!empty($inputs_alias) && !empty($channel_configs_alias)) {
                $packages_in_alias = $channel_configs_alias->toArray();
                // start of Filter pack (1)
                $packs_key_array_intersect = array_intersect($packages_in_alias, array_keys($packs));
                $packs                     = array_intersect_key($packs, array_flip($packs_key_array_intersect));
                // start of Filter pack (1)
            }
            // end of tec-1731 berfuntong offline alias

            $this->benchmark->bench('get-settings', 'end');

            $ref_code = $this->getRefCode();
            $inputs   = Arr::add($this->buildParam($inputs, $config), 'ref_code', $ref_code);

            $this->benchmark->bench('get-funtong');
            $response_numbers = $this->getFuntong($inputs);

            if ($sorting) {
                $response_numbers_key_msisdn = array_column(array_get($response_numbers, 'numbering'), null, 'msisdn');

                if ($sorting == 'desc'){
                    krsort($response_numbers_key_msisdn);
                } else {
                    ksort($response_numbers_key_msisdn);
                }

                $response_numbers['numbering'] = array_values($response_numbers_key_msisdn);
            }

            $error_message = Arr::get($response_numbers, 'message');
            if (!empty($error_message)) {
                throw new InvalidArgumentException($error_message, Arr::get($response_numbers, 'code', 500));
            }
            $this->benchmark->bench('get-funtong', 'end');

            $this->benchmark->bench('pick-numbers');
            $ascendant = Arr::get($response_numbers, 'ascendant', []);
            $numbers   = collect(Arr::get($response_numbers, 'numbering', []));

            if ($numbers->isNotEmpty()) {
                $numbers = $numbers->replace($this->pickNumbers($numbers, $config));
            }

            $this->benchmark->bench('pick-numbers', 'end');

            $result_pagination = $this->buildPagination(
                $numbers->forPage($this->current_page, $this->page_limit)->all(),
                $numbers->count(),
                $this->current_page
            );

            $pagination = Arr::get($result_pagination, 'pagination', []);
            $numbering  = array_values(Arr::get($result_pagination, 'items', []));

            $this->benchmark->bench('total', 'end');

            $vhora_online_service = new VHoraOnlineService();
            $dealer_info = $vhora_online_service->getDealerInfo($inputs);

            $result   = compact('pagination', 'ref_code', 'dealer_code', 'packs', 'numbering', 'ascendant', 'dealer_info');
            $response = ['response' => $result, 'code' => 200];

            if (!empty($numbering)) {
                Redis::set($key_cache, json_encode($response), 'EX', 60 * 5);
            }

            if ($lrequest->has('bench')) {
                $response['response']['benchmark'] = $this->benchmark->getBenchmark();
            }
        } catch (\InvalidArgumentException $e) {
            $response = $this->setException('VHora-LowTier-get-funtong-numbers', $inputs, $e->getMessage(), $e->getCode());
        } catch (\Exception $e) {
            $response = $this->setException('VHora-LowTier-exception', $inputs, $e->getMessage(), 500);
        }

        return $response;
    }

    /**
     * Set exception
     *
     * @param $step
     * @param $input
     * @param $message
     * @param $code
     * @return array
     */
    private function setException($step, $input, $message, $code)
    {
        LogService::writeServiceLog($step, json_encode($input), json_encode($message), Carbon::now()->format('d/m/Y H:i:s'));

        if ($code === 500) {
            $message = 'Internal Server Error';
        }

        $response = $this->createErrorMessage(['message' => $message], $code);

        return ['response' => $response, 'code' => $code];
    }

    /**
     * Pick numbers
     *
     * @param object $numbers
     * @param array $config
     * @return array
     */
    private function pickNumbers($numbers, $config)
    {
        $numbering           = [];
        $propositions        = Arr::get($config, 'channel_configs');
        $number_grouped      = $numbers->whereIn('pack', array_keys(Arr::get($config, 'packs', [])))->groupBy('pack');
        $config_shop_offline = Arr::get($config, 'config_shop_offline', []);

        $keys = collect(Arr::get($config, 'packs', []))
            ->sortBy('position', SORT_NATURAL)
            ->whereIn('code', $number_grouped->keys()->all())
            ->pluck('code')->all();

        if (empty($keys)) {
            return collect([]);
        }

        $index       = 0;
        $count_items = 0;
        $key_items   = [];
        $total_count = $number_grouped->values()->flatten(1)->count();

        do {
            $pack_code   = Arr::get($keys, $index);
            $limit       = Arr::get($config, "packs.$pack_code.limit", $this->page_limit);
            $count_items = Arr::get($key_items, $pack_code, 0);

            $chunk_item            = $number_grouped->get($pack_code)->slice($count_items, $limit);
            $key_items[$pack_code] = $count_items + $chunk_item->count();
            $chunk_item            = $this->mapPropposition($chunk_item, $propositions, $config_shop_offline);

            data_set($chunk_item, '*.position', Arr::get($config, "packs.$pack_code.position", 0));
            $numbering = array_merge($numbering, $chunk_item);

            $index++;
            if ($index >= count($keys)) {
                $index = 0;
            }

        } while ($total_count > count($numbering));

        return collect($numbering)->transform(function (array $item) {
            return Arr::except($item, 'position');
        })->values();
    }

    /**
     * Get ref code
     *
     * @return string
     */
    public function getRefCode()
    {
        $vhora_service = new VHoraService();

        return $vhora_service->getRefCode();
    }

    /**
     * Get Settings
     *
     * @param array $key
     *
     * @return array
     */
    public function getSettings($key)
    {
        $vhora_service = new VHoraService();
        $config        = $vhora_service->getSetting($key);

        return Arr::get($config, '0', []);
    }

    /**
     * Build pagination
     *
     * @param array $items
     * @param array $total
     * @param array $current_page
     *
     * @return array
     */
    public function buildPagination($items, $total, $current_page)
    {
        $paginate = new LengthAwarePaginator($items, $total, $this->page_limit, $current_page);
        $result   = [
            'pagination' => [
                'page'      => $paginate->currentPage(),
                'limit'     => $paginate->perPage(),
                'last_page' => $paginate->lastPage(),
                'total'     => $paginate->total(),
            ],
            'items'      => $paginate->items(),
        ];

        return $result;
    }

    /**
     * Map propposition
     *
     * @param array $items
     * @param array $propositions
     * @param array $config_shop_offline
     * @return array
     */
    public function mapPropposition($items, $propositions, $config_shop_offline)
    {
        $items_data = [];
        foreach ($items as $item) {
            $company      = strtoupper(Arr::get($item, 'company'));
            $pack         = Arr::get($item, 'pack');
            $proposition  = Arr::get($propositions, "$company.$pack", []);

            if (empty($proposition['bundling'])) $proposition['bundling'] = null;

            if (!empty($config_shop_offline)) {
                $pack_type = 'postpaid';
                if (strpos($pack, 'pos') === false) $pack_type = 'prepaid';

                $is_skip = $this->checkVhoraSkipBundle($config_shop_offline, $pack_type);
                if ($is_skip === true) $proposition['bundling'] = null;
            }
            $items_data[] = array_merge($item, $proposition);
        }
        return $items_data;
    }

    /**
     * Get funtong numbers
     *
     * @param array $data
     *
     * @return mixed
     */
    public function getFuntong($data)
    {
        $response = null;
        try {
            $client = new AwsGatewayClient([
                'refcode' => Arr::get($data, 'ref_code'),
            ]);

            Arr::forget($data, 'ref_code');
            Arr::forget($data, 'channel');
            $response = $client->post('/vhora/v2/funtong', $data);
        } catch (ClientException $e) {
            if ($e->hasResponse()) {
                $response = json_decode($e->getResponse()->getBody()->getContents(), true);
            }

            LogService::writeServiceLog(
                'VHora',
                json_encode_unicode($data),
                json_encode_unicode($response),
                Carbon::now()->format('d/m/Y H:i:s')
            );
        } catch (\Exception $e) {
            LogService::writeServiceLog(
                'VHora-Exception',
                json_encode_unicode($data),
                json_encode_unicode($e->getMessage()),
                Carbon::now()->format('d/m/Y H:i:s')
            );

            $response = ['code' => 500, 'message' => 'Internal Server Error'];
        }

        return $response;
    }

    /**
     * Build parameter
     *
     * @param array $data
     *
     * @return array
     */
    public function buildParam($inputs, $config)
    {
        $packs_config = Arr::pluck(Arr::get($config, 'packs', []), 'code');

        if (empty(Arr::get($inputs, 'packs'))) {
            $inputs['packs'] = $packs_config;
        }

        $inputs['packs'] = collect(Arr::get($inputs, 'packs', []))->intersect($packs_config)->values()->all();

        // start of tec-1731 berfuntong offline alias
        $inputs_alias          = Arr::get($inputs, 'alias', Arr::get($inputs, 'shop'));
        $channel_configs_alias = Arr::get($config, "channel_configs.alias.$inputs_alias");
        if (!empty($inputs_alias) && !empty($channel_configs_alias)) {
            $packages_in_alias = $channel_configs_alias->toArray();
            // start of Filter pack (2)
            if (isset($inputs['packs']) && is_array($inputs['packs'])) {
                $inputs['packs'] = array_values(array_intersect($packages_in_alias, $inputs['packs']));
            }
            // end of Filter pack (2)
        }
        // end of tec-1731 berfuntong offline alias

        $zodiac_id = Arr::get($inputs, 'zodiac_id');
        if (!empty(Arr::get($inputs, 'birthdate')) || !empty($zodiac_id) || $zodiac_id === '0' || $zodiac_id === 0) {
            $this->zodiac_count = 1;
        }

        $total         = (int) Arr::get($config, 'total', 240);
        $pack_count    = count($inputs['packs']);
        $pack_count    = ($pack_count > 0) ? $pack_count : 1;
        $inputs['cnt'] = $total / $pack_count / $this->zodiac_count;

        return array_filter(arrayWhitelist($inputs, $this->funtong_whitelist), function ($value) {
            return (!empty($value) || $value === 0 || $value === '0');
        });
    }

    /**
     * Validate parameters
     *
     * @param array $data
     *
     * @return mixed
     */
    public function validate($data)
    {
        $validator = Validator::make($data, [
            'channel'        => 'required',
            'packs'          => 'array',
            'number_like'    => 'array',
            'number_dislike' => 'array',
            'page'           => 'integer|regex:/^[0-9]+$/|not_in:0',
            'zodiac_id'      => 'integer|regex:/^[0-9]+$/',
        ]);

        if ($validator->fails()) {
            throw new InvalidArgumentException($validator->errors()->first(), 400);
        }

        return true;
    }

    /**
     * getOfflineShopConfigByShop
     *
     * @param array $inputs
     *
     * @return array
     */
    public function getOfflineShopConfigByShop($inputs)
    {
        $vhora_service = new VHoraService();

        return $vhora_service->getOfflineShopConfigByShop($inputs);
    }

    /**
     * checkVhoraSkipBundle
     *
     * @param array $config_shop_offline
     * @param sting $pack_type Ex. postpaid,prepaid
     *
     * @return boolean
     */
    public function checkVhoraSkipBundle($config_shop_offline, $pack_type)
    {
        $vhora_service = new VHoraService();

        return $vhora_service->checkVhoraSkipBundle($config_shop_offline, $pack_type);
    }
}
