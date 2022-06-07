<?php
namespace App\Models;

use BaoPham\DynamoDb\DynamoDbModel;
use BaoPham\DynamoDb\ModelTrait;

class TruemovehTogglePaymentModel extends DynamoDbModel
{
    use ModelTrait;

    public $timestamps    = false;
    protected $table      = 'toggle-payment-by-store';
    protected $primaryKey = 'store_id';
    protected $fillable   = [
        'store_id',
        'data',
        'status',
        'store_type'
    ];

    /**
     * Find Store by store_ids
     *
     * @param string $store_ids
     * @param string $status
     *
     * @return array
     */
    public function findStore($store_ids, $status = '')
    {
        if (is_array($store_ids)) {
            $query = $this->whereIn('store_id', $store_ids);
        } else {
            $query = $this->where('store_id', $store_ids);
        }

        if (is_bool($status)) {
            $query->where('status', $status);
        }

        return $query->get()->toArray();
    }

    /**
     * Find Store by active
     *
     * @return array
     */
    public function findStoreActive()
    {
        $query = self::where('status', true);
        return $query->get()->toArray();
    }

    /**
     * Find Stores
     *
     * @return array
     */
    public function getStores()
    {
        return self::get()->toArray();
    }
}
