<?php

namespace App\Models;

use BaoPham\DynamoDb\DynamoDbModel;
use BaoPham\DynamoDb\ModelTrait;
use Illuminate\Support\Carbon;

class TruemovehOtpTransactionsModel extends DynamoDbModel
{
    use ModelTrait;

    public $timestamps    = false;
    protected $table      = 'truemoveh-otp-transactions';
    protected $primaryKey = 'ref_code';
    protected $fillable   = [
        'ref_code',
        'success',
        'msisdn',
        'created_at',
        'verified_at',
        'expired_at'
    ];

    /**
     * Find OTP this day
     *
     * @param array $msisdn
     *
     * @return array
     */
    public function findOtpThisDay($msisdn)
    {
        $query = self::where('msisdn', $msisdn)
                    ->where('success', true)
                    ->where('created_at', 'between', [
                        $this->getStartOfDay()->timestamp,
                        $this->getEndOfDay()->timestamp
                    ]);

        return $query->get()->toArray();
    }

    /**
     * Find pending OTP
     *
     * @param array $data
     *
     * @return array
     */
    public function findPendingOtp($data)
    {
        $query =  self::where('msisdn', array_get($data, 'msisdn'))
                    ->where('ref_code', array_get($data, 'ref_code'))
                    ->where('success', false)
                    ->where('created_at', 'between', [
                        $this->getStartOfDay()->timestamp,
                        $this->getEndOfDay()->timestamp
                    ]);

        return $query->get()->toArray();
    }

    /**
     * Filter first OTP with filter data sort DESC by ref_code
     *
     * @param array $data
     *
     * @return array
     */
    public function getFirstOtpWithFilterSortByDescRefcode($data)
    {
        $query = self::where('msisdn', array_get($data, 'msisdn'))
                    ->where('success', array_get($data, 'success', false))
                    ->where('created_at', 'between', [array_get($data, 'start'), array_get($data, 'end')]);

        return $query->get()->sortByDesc('ref_code')->first();
    }

    /**
     * Filter all OTP with filter data sort DESC by ref_code
     *
     * @param array $data
     *
     * @return array
     */
    public function getOtpWithFilterSortByDescRefcode($data)
    {
        $query = self::where('msisdn', array_get($data, 'msisdn'))
                    ->where('created_at', 'between', [array_get($data, 'start'), array_get($data, 'end')]);

        return $query->get()->sortByDesc('ref_code');
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
     * Get start of day
     *
     * @return object
     */
    public function getStartOfDay()
    {
        return Carbon::now()->setTimezone('Asia/Bangkok')->startOfDay();
    }

    /**
     * Get end of day
     *
     * @return object
     */
    public function getEndOfDay()
    {
        return Carbon::now()->setTimezone('Asia/Bangkok')->endOfDay();
    }

    /*
     * Filter success = true and varified witthin x minutes
     *
     * @param array $data
     *
     * @return array
     */
    public function getSuccessandVarified($data)
    {
        $query = self::where('ref_code', array_get($data, 'ref_code'))
                    ->where('success', array_get($data, 'success'))
                    ->where('verified_at', 'between', [array_get($data, 'start'), array_get($data, 'end')]);
                    
        return $query->get()->toArray();
    }
}
