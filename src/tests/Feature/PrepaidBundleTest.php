<?php

namespace Tests\Feature;

use Tests\TestCase;

class PrepaidBundleTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testGetProductDetail()
    {
        $response = $this->get('/api/true/wportal/product/L91591800');

        $response->assertStatus(200);
    }
}
