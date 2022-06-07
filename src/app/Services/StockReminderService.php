<?php

namespace App\Services;

use App\Models\TruemovehStockReminderModel;
use Illuminate\Support\Arr;

class StockReminderService
{
    /**
     * Insert StockRemider
     * @param array $data
     * @return boolean
     */
    public function insertStockRemider($data)
    {
        $model                  = new TruemovehStockReminderModel();
        $model->key             = Arr::get($data, 'key');
        $model->mobile          = Arr::get($data, 'mobile');
        $model->product_id      = Arr::get($data, 'product_id');
        $model->inventory_id    = Arr::get($data, 'inventory_id', '');
        $model->option_value_id = Arr::get($data, 'option_value_id', '');
        $model->type            = Arr::get($data, 'type');
        $model->created_at      = $model->getDateNow()->timestamp;
        $model->expired_at      = $model->getExpireDate()->timestamp;

        return $model->save();
    }

    /**
     * Find Reminder
     * @param sting $key
     * @return array
     */
    public function findReminder($key)
    {
        $model = new TruemovehStockReminderModel;

        return $model->getReminder($key);
    }
}
