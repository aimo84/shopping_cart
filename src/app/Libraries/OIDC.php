<?php

namespace App\Libraries;
use Jumbojett\OpenIDConnectClient;
use Redis;

class OIDC extends OpenIDConnectClient
{
    private $unique_key;

    public function setUniqueKey($key) {
        return $this->unique_key = $key;
    }

    public function getUniqueKey() {
        return $this->unique_key;
    }

    public function getSessionKey($key) {
        return Redis::get("truestore:vhora:offline:oidc:$key:" . $this->getUniqueKey() . ':data');
    }

    public function setSessionKey($key, $value) {
        return Redis::set("truestore:vhora:offline:oidc:$key:" . $this->getUniqueKey() . ':data', $value, 'EX', 5 * 60);

    }

    public function unsetSessionKey($key) {
        return Redis::del("truestore:vhora:offline:oidc:$key:" . $this->getUniqueKey() . ':data');
    }
}
