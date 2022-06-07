<?php

namespace App\Models;

use BaoPham\DynamoDb\DynamoDbModel;
use BaoPham\DynamoDb\ModelTrait;
use Illuminate\Support\Carbon;

class TruemovehStockReminderModel extends DynamoDbModel
{
    use ModelTrait;

    public $timestamps    = false;
    protected $table      = 'truemoveh-stock-reminder';
    protected $primaryKey = 'key';
    protected $fillable   = [
        'mobile',
        'product_id',
        'inventory_id',
        'type',
        'created_at',
        'expired_at',
    ];

    /**
     * Find Reminder
     * @param sting $key
     * @return array
     */
    public function getReminder($key)
    {
        return self::where('key', $key)->first();
    }

    /**
     * Get day now UTC timezone
     * @return object
     */
    public function getDateNow()
    {
        return Carbon::now()->setTimezone('UTC');
    }

    /**
     * Get expired_at
     * @return object
     */
    public function getExpireDate()
    {
        return Carbon::now()->setTimezone('UTC')->addWeek(2);
    }
}
