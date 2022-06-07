<?php

namespace App\Models;

use BaoPham\DynamoDb\DynamoDbModel;
use BaoPham\DynamoDb\ModelTrait;

class TruemovehSaleShopModel extends DynamoDbModel
{
    use ModelTrait;

    public $timestamps    = false;
    protected $table      = 'truemoveh-sale-shop';
    protected $primaryKey = 'shop_code';
    protected $fillable   = [
        'shop_code',
        'alias'
    ];

     /**
     * Find Config By type
     *
     * @param array $type
     *
     * @return array
     */
    public function findConfigByAlias($alias)
    {
        $query = $this->where('alias', $alias);

        return $query->get();
    }
}
