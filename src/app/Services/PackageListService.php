<?php
namespace App\Services;

use Illuminate\Support\Facades\Redis;
use App\Services\WlsService;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use App\Models\TruemovehConfigModel;

class PackageListService
{

    /**
    * For list sim only type postpaid with group in dynamo config
    * @param array $params
    * @return array
    *
    */
    public function listSimPostpaidGroup()
    {   
        $redis = Redis::get('api:truemoveh:true-package-list-group');
        
        if (!empty($redis)) return json_decode($redis, true);

        $model  = new TruemovehConfigModel();
        $result = $model->findFirst('package_list_group');
        $config = json_decode(Arr::get($result, 'value', '{}'), true);
        $build  = [];

        foreach ($config as $key => $value) {
            $search = $this->callService([
                'proposition_group_code' => $key
            ]);

            $build[] = [
                'title'  => Arr::get($value, 'title'),
                'record' => !empty($search) ? $search : []
            ];
        }

        Redis::set('api:truemoveh:true-package-list-group', json_encode($build), 'EX', 86400);

        return $build;
    }

    /**
    * Call service for searching packages
    * @param array $params
    * @return array
    *
    */
    private function callService($params = [])
    {
        $url                 = 'truemoveh/package/search';
        $method              = 'get';
        $request['sim_type'] = 'postpaid';

        foreach ($params as $key => $value) {
            $request[$key] = $value;
        }

        $lrequest = new Request();
        $lrequest->setMethod(strtoupper($method));
        $lrequest->replace($request);

        $get_search = WlsService::getSearchPackage($url, $method, $lrequest, []);
        $response   = json_decode(Arr::get($get_search, '1', '{}'), true);
        
        return Arr::get($response, 'data.record');
    }
}