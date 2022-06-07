<?php
namespace App\Libraries;

class Benchmark
{
    private $bench_stat   = false;

    public function bench($name, $step = 'start')
    {
        $this->bench_stat[$name][$step] = microtime(true);
    }

    public function getBenchmark()
    {
        if ($this->bench_stat) {
            foreach ($this->bench_stat as $key => $value) {
                $used_time                    = array_get($value, 'end', 0) - array_get($value, 'start', 0);
                $this->bench_stat[$key]['used_time'] = $used_time;
            }
        }

        return $this->bench_stat;
    }
}