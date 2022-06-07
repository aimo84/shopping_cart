<?php
namespace App\Models;

use BaoPham\DynamoDb\DynamoDbModel;
use BaoPham\DynamoDb\ModelTrait;

class TruemovehWeomniInstallmentsModel extends DynamoDbModel
{
    use ModelTrait;

    public $timestamps    = false;
    protected $table      = 'weomni_installments';
    protected $primaryKey = 'abbreviation';
    protected $fillable   = [
        'abbreviation',
        'created_at',
        'max',
        'min',
        'monthly_minimum_interest',
        'name',
        'update_at'
    ];

    /**
     * Find Stores
     *
     * @return array
     */
    public function getWeomniInstallments()
    {
        return self::get()->toArray();
    }
}
