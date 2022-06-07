<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Redis;

class ListRedisKeys extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'list:redis-keys';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'List redis key';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $keys = Redis::keys('*');
        var_dump($keys);
        $this->info('done');
    }
}
