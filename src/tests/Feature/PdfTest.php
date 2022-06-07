<?php

namespace Tests\Feature;

use App\Services\ImageService;
use Tests\TestCase;

class PdfTest extends TestCase
{
    public function testGetImage()
    {
        $data = [
            'fullname'      => 'test test2',
            'thai_id'       => '1722222222222',
            'mobile_number' => '088888888',
            'transfer_date' => date('d/m/Y'),
            'transfer_code' => '05123456',
        ];
        $result_image_base64 = ImageService::generateAppForm($data);

        $this->assertEquals(true, strlen($result_image_base64) > 1);
    }
}
