<?php

namespace App\Models;
use BaoPham\DynamoDb\DynamoDbModel;

class TruemovehLevelCListModel extends DynamoDbModel
{
    public $timestamps    = false;
    protected $table      = 'truemoveh-level-c-list';
    protected $primaryKey = 'slug';
    protected $fillable   = [
        'slug',
    ];

    public function findFirst($slug)
    {
        $query = $this->where('slug', $slug);
        return $query->first();
    }
}
