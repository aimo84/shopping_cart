<?php

namespace App\Repositories;

use App\Adapters\WemallConfigInboundAdapter;
use Illuminate\Contracts\Cache\Repository;
use Illuminate\Support\Collection;

class PaymentMethodRepository
{
    const STORAGE_KEY = 'payment_channels';
    const EXPIRE = 3600;

    /**
     * @var Repository $storage
     */
    private $storage;


    /**
     * @var WemallConfigInboundAdapter $inboundAdapter
     */
    private $inboundAdapter;

    public function __construct(Repository $storage, WemallConfigInboundAdapter $inboundAdapter)
    {
        $this->storage = $storage;
        $this->inboundAdapter = $inboundAdapter;
    }

    /**
     * @param $channel
     * @return array|null
     */
    public function getPaymentChannelByName(string $channel): ?array
    {
        return $this->getPaymentChannels()->get(strtolower($channel));
    }

    /**
     * @return Collection
     * @throws \Psr\SimpleCache\InvalidArgumentException
     */
    public function getPaymentChannels(): Collection
    {
        if (!$this->storage->has(self::STORAGE_KEY)) {
            $serialized = json_encode($this->inboundAdapter->getConfig());
            $this->storage->set(self::STORAGE_KEY, $serialized, self::EXPIRE);
        }

        return new Collection(json_decode($this->storage->get(self::STORAGE_KEY), true));
    }
}
