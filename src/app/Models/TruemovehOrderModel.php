<?php

namespace App\Models;

use BaoPham\DynamoDb\DynamoDbModel;
use BaoPham\DynamoDb\ModelTrait;
use Illuminate\Support\Carbon;
use Illuminate\Support\Arr;

class TruemovehOrderModel extends DynamoDbModel
{
    use ModelTrait;

    public $timestamps    = false;
    protected $table      = 'truemoveh-orders';
    protected $primaryKey = 'secure_key';
    protected $fillable   = [
        'secure_key',
        'status',
        'payment_method',
        'created_at',
        'expired_at',
    ];

    /**
     * Find Order
     *
     * @param array $parameters
     *
     * @return array
     */
    public function getOrder($parameters)
    {
        $secure_key     = strval(Arr::get($parameters, 'secure_key'));
        $payment_method = Arr::get($parameters, 'payment_method');

        $query = self::where('secure_key', $secure_key);

        if ($payment_method) {
            $query->where('status', $payment_method);
        }

        if (empty($query->first())) {
            return $query->first();
        }

        return $query->first()->toArray();
    }

    /**
     * Get day now UTC timezone
     *
     * @return object
     */
    public function getDateNow()
    {
        return Carbon::now()->setTimezone('UTC');
    }

    /**
     * Get end of day
     *
     * @return object
     */
    public function getTwoWeek()
    {
        return Carbon::now()->setTimezone('UTC')->addWeeks(2);
    }
}
