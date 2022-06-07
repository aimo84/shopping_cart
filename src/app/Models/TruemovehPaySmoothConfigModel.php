<?php

namespace App\Models;

use BaoPham\DynamoDb\DynamoDbModel;
use BaoPham\DynamoDb\ModelTrait;

class TruemovehPaySmoothConfigModel extends DynamoDbModel
{
    use ModelTrait;

    public $timestamps    = false;
    protected $table      = 'truemoveh-paysmooth-config';
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
