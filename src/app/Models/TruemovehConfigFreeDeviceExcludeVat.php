<?php

namespace App\Models;

use BaoPham\DynamoDb\DynamoDbModel;
use BaoPham\DynamoDb\ModelTrait;

class TruemovehConfigFreeDeviceExcludeVat extends DynamoDbModel
{
    use ModelTrait;

    public $timestamps = false;
    protected $table   = 'truemoveh-free-device-exclude-vat';

    public function findFirst($key)
    {
        $query = $this->where('product_id', $key);

        return $query->first();
    }
}
