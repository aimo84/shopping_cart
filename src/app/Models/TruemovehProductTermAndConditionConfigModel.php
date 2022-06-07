<?php

namespace App\Models;

use BaoPham\DynamoDb\DynamoDbModel;
use BaoPham\DynamoDb\ModelTrait;
use Illuminate\Support\Arr;

class TruemovehProductTermAndConditionConfigModel extends DynamoDbModel
{
    use ModelTrait;

    public $timestamps    = false;
    protected $table      = 'truemoveh-product-term-and-condition';
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
    public function getData($value)
    {
        $configs = $this->where('product_id', $value)
                        ->orWhere('product_id', 'default')->get();

        foreach ($configs as $data){
            $product_id = Arr::get($data,'product_id');

            if ($product_id == $value){
                return $data;
            }
        }

        return $configs->first();
    }
}
