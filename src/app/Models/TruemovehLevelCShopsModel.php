<?php

namespace App\Models;

use BaoPham\DynamoDb\DynamoDbModel;
use BaoPham\DynamoDb\ModelTrait;
use Illuminate\Support\Carbon;

class TruemovehLevelCShopsModel extends DynamoDbModel
{
    use ModelTrait;

    public $timestamps    = false;
    protected $table      = 'truemoveh-level-c-shop';
    protected $primaryKey = 'slug';
    protected $fillable   = [
        'slug',
        'campaign_id',
    ];
    /**
     * Find Setting key
     *
     * @param array $parameters
     *
     * @return array
     */
    public function findFirst($slug)
    {
        $query = $this->where('slug', $slug);

        return $query->first();
    }

    public function getByCampaignList($campaign_ids)
    {
        $query = $this->whereIn('campaign_id', $campaign_ids);

        return $query->get();
    }
}
