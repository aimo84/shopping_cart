<?php

namespace App\Models;

use BaoPham\DynamoDb\DynamoDbModel;
use BaoPham\DynamoDb\ModelTrait;

class TruemovehSimAutoSyncModel extends DynamoDbModel
{
    use ModelTrait;

    public $timestamps    = false;
    protected $table      = 'truemoveh-sim-auto-sync';
    protected $primaryKey = 'product_id';
    protected $fillable   = [
        'product_id',
    ];

    /**
     * Find product_id
     *
     * @param array $product_id
     *
     * @return array
     */
    public function findFirst($product_id)
    {
        $query = $this->where('product_id', $product_id);

        return $query->first();
    }
}
