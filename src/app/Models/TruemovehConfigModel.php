<?php

namespace App\Models;

use BaoPham\DynamoDb\DynamoDbModel;
use BaoPham\DynamoDb\ModelTrait;
use Illuminate\Support\Carbon;

class TruemovehConfigModel extends DynamoDbModel
{
    use ModelTrait;

    public $timestamps    = false;
    protected $table      = 'truemoveh-config';
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
    public function findFirst($key)
    {
        $query = $this->where('key', $key);

        return $query->first();
    }

    public function findIn($keys)
    {
        $query = $this->whereIn('key', $keys);

        return $query->get();
    }
}
