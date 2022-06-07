<?php

namespace App\Models;

use BaoPham\DynamoDb\DynamoDbModel;
use BaoPham\DynamoDb\ModelTrait;
use Illuminate\Support\Carbon;

class TruemovehSettingsModel extends DynamoDbModel
{
    use ModelTrait;

    public $timestamps     = false;
    protected $table       = 'truemoveh-settings';
    protected $primary_key = 'key';

    /**
     * Find Setting key
     *
     * @param array $parameters
     *
     * @return array
     */
    public function findSettingKey($key)
    {
        $query = $this->where('key', $key);

        return $query->get()->toArray();
    }

    public function findFirstWithKey($key)
    {
        if (empty($key)) return null;
        
        return $this->where('key', $key)->first();
    }
}
