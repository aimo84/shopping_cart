<?php

namespace App\Models;

use BaoPham\DynamoDb\DynamoDbModel;
use BaoPham\DynamoDb\ModelTrait;

class TruemovehProductDetailModel extends DynamoDbModel
{
    use ModelTrait;

    public $timestamps    = false;
    protected $table      = 'truemoveh-product-detail';
    protected $primaryKey = 'product_id';
    protected $fillable   = [
        'product_id',
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
        $query = $this->where('product_id', $value);

        return $query->first();
    }

    public function findIn($values)
    {
        $query = $this->whereIn('product_id', $values);

        return $query->get();
    }
}
