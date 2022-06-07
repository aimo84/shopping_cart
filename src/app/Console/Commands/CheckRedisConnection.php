<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Redis;

class CheckRedisConnection extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'check:redis-connection';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Check Redis connection';

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
        try {
            $redis = Redis::connect(env('REDIS_HOST'), env('REDIS_PORT'));
            $this->info('redis connected');
        } catch (\Predis\Connection\ConnectionException $e) {
            $this->info('error connection redis');
        }
    }
}
