<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Services\AwsService;
use Mockery as m;
use Illuminate\Support\Arr;
use Aws\S3\Exception\S3Exception;
use Aws\CommandInterface;

class AwsServiceTest extends TestCase
{
    private $aws_service;

    /**
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function setUp(): void
    {
        parent::setUp();
        $this->aws_service = new AwsService();
    }

    /**
     * @group testGetS3File
     **/
    public function testGetS3FileSuccess()
    {
        $mock_s3_client = m::mock('overload:Aws\S3\S3Client')->makePartial();
        $mock_s3_client->shouldReceive('getObject')
            ->once()
            ->andReturn(new MockS3Client());

        $response = $this->aws_service->getS3File('upload/product-description/L91597372/images/camera_icon_ultra_wide_large_2x.png', 'wls-th-stg-store-upload');
        $this->assertNotEmpty($response);
    }

    /**
     * @group testGetS3File
     **/
    public function testGetS3FileError()
    {
        $mock_s3_client = m::mock('overload:Aws\S3\S3Client')->makePartial();
        $mock_s3_client->shouldReceive('getObject')
            ->once()
            ->andThrow(new \Exception('Throw Exception', 500));
        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);            

        $response = $this->aws_service->getS3File('upload/product-description/L91597372/images/camera_icon_ultra_wide_large_2x.png', 'wls-th-stg-store-upload');

        $this->assertNotEmpty($response);
        $this->assertEquals('Can not get image from server.', Arr::get($response, 'message.en'));
        $this->assertEquals('ไม่สามารถดึงข้อมูลได้', Arr::get($response, 'message.th'));
    }
}

class MockS3Client {

    public function get()
    {
        $aws = new AwsServiceTest();
        return $aws->getFile('index.html', 'product/lvd');
    }
}