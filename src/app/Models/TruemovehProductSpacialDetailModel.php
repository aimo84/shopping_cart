<?php

namespace App\Models;

use BaoPham\DynamoDb\DynamoDbModel;
use BaoPham\DynamoDb\ModelTrait;

class TruemovehProductSpacialDetailModel extends DynamoDbModel
{
    use ModelTrait;

    public $timestamps  = false;
    protected $table    = 'truemoveh-product-spacial-detail';
    protected $fillable = [
        'product_id',
    ];

    /**
     * @param string $product_id
     */
    public function findFirst(string $product_id)
    {
        return $this->where('product_id', $product_id)->first();
    }
}