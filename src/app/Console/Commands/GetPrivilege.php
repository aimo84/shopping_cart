<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Redis;

class GetPrivilege extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'get:privilege {cart_id}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Get privilege';

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
        $cart_id   = $this->argument('cart_id');
        $cart_data = Redis::get("store:cart_id:$cart_id");
        $this->info($cart_data);
    }
}
