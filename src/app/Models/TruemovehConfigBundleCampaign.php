<?php

namespace App\Models;

use BaoPham\DynamoDb\DynamoDbModel;
use BaoPham\DynamoDb\ModelTrait;

class TruemovehConfigBundleCampaign extends DynamoDbModel
{
    use ModelTrait;

    public $timestamps = false;
    protected $table   = 'truemoveh-bundles-product';

    public function getAll(string $product_id)
    {
        $query = $this->where('product_id', $product_id);

        return $query->get()->toArray();
    }
}
