<?php

namespace Tests\Unit;

use App\Libraries\Validation\DecryptOrder;
use Illuminate\Support\Arr;
use Tests\TestCase;

class DecryptOrderTest extends TestCase
{
    /**
     * @group testDecryptOrder
     */
    public function testDecryptOrderSuccess()
    {
        $decrypt_order    = new DecryptOrder();
        $decrypt_response = $decrypt_order->decrypt('eyJpdiI6Im44VWt1TldsWm9ZbXNmOGd3eXNaN0E9PSIsInZhbHVlIjoiNW5ZUDdBRXFFK2kyenlRd0JcL2JKcEdKVDR1VFUwMTNqUHpISG5nUHJmOGc9IiwibWFjIjoiODkwYjA1ODM2ZTFhZjcyNzZmNTAxZDJmODVlNjVhNTk2MDA1ZmVlMWMxNTkzNmQxYzAxMTBmZGQ4M2JkZTA1MiJ9');

        $this->assertEquals("800012096112", $decrypt_response);
        $this->assertNotEmpty($decrypt_response);
    }

    /**
     * @group testDecryptOrder
     */
    public function testDecryptOrderFail()
    {
        $decrypt_order    = new DecryptOrder();
        $decrypt_response = $decrypt_order->decrypt('1eyJpdiI6Im44VWt1TldsWm9ZbXNmOGd3eXNaN0E9PSIsInZhbHVlIjoiNW5ZUDdBRXFFK2kyenlRd0JcL2JKcEdKVDR1VFUwMTNqUHpISG5nUHJmOGc9IiwibWFjIjoiODkwYjA1ODM2ZTFhZjcyNzZmNTAxZDJmODVlNjVhNTk2MDA1ZmVlMWMxNTkzNmQxYzAxMTBmZGQ4M2JkZTA1MiJ9');

        $this->assertArrayHasKey("code", $decrypt_response);
        $this->assertArrayHasKey("message", $decrypt_response);
        $this->assertEquals("400", Arr::get($decrypt_response, 'code'));
        $this->assertEquals('{"order_code":["The payload is invalid."]}', Arr::get($decrypt_response, 'message'));
        $this->assertNotEmpty($decrypt_response);
    }
}
