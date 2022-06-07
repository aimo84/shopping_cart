<?php

namespace App\Models;

use BaoPham\DynamoDb\DynamoDbModel;
use BaoPham\DynamoDb\ModelTrait;

class TruemovehIotConfigModel extends DynamoDbModel
{
    use ModelTrait;

    public $timestamps    = false;
    protected $table      = 'truemoveh-iot-config';
    protected $primaryKey = 'key';
    protected $fillable   = [
        'key',
    ];

    /**
     * Find Setting key
     *
     * @param array $key
     *
     * @return array
     */
    public function findFirst($value)
    {
        $query = $this->where('key', $value);

        return $query->first();
    }
}
