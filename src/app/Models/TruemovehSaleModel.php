<?php

namespace App\Models;

use BaoPham\DynamoDb\DynamoDbModel;
use BaoPham\DynamoDb\ModelTrait;

class TruemovehSaleModel extends DynamoDbModel
{
    use ModelTrait;

    public $timestamps    = false;
    protected $table      = 'truemoveh-sale';
    protected $primaryKey = 'shop_code';
    protected $fillable   = [
        'shop_code',
        'config',
        'direct_url'
    ];

    /**
     * Find Config By Shopcode
     *
     * @param array $shop_code
     *
     * @return array
     */
    public function findConfigByShopCode($shop_code)
    {
        $query = $this->where('shop_code', $shop_code);

        return $query->first();
    }
}
