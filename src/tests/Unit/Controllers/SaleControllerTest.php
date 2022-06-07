<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Support\Arr;
use Mockery as m;

class SaleControllerTest extends TestCase
{
    public function testPostSaleSMS()
    {
        $input = [
            'sale_id' => 'graphtest',
            'msisdn' => '0909845050',
            'sale_channel' => 'telesale',
            'campaign' => 'graphcampaign',
            'shop_code' => 'graphshop',
            'url' => 'https://pre-store.truecorp.co.th/online-store/item/L91580446?matcode=3000081227&selected_campaign=existing_postpaid'
        ];

        $result = [
            "response" => [
                "data" => "Success"
            ],
            "code" => 200
        ];


        $mock = m::mock('overload:App\Services\Sale\SaleSmsService');
        $mock->shouldReceive('processSaleSms')->andReturn($result);

        $response = $this->postJson('/api/true/v2/sale/sms', $input);
        $response = json_decode($response->getContent(), true);
        $this->assertEquals(200, Arr::get($response, 'status_code'));
        $this->assertEquals('OK', Arr::get($response, 'status_txt'));
    }

    public function testPostSaleQR()
    {
        $input = [
            'sale_id' => 'graphtest',
            'msisdn' => '0909845050',
            'sale_channel' => 'telesale',
            'campaign' => 'graphcampaign',
            'shop_code' => 'graphshop',
            'url' => 'https://pre-store.truecorp.co.th/online-store/item/L91580446?matcode=3000081227&selected_campaign=existing_postpaid'
        ];

        $result = ["response" =>
            [
                "data" => ["url" => "https:\/\/pre-store.truecorp.co.th\/online-store\/item\/L91580446?matcode=3000081227&selected_campaign=existing_postpaid&afc=c21zMDAwMDAxNjI=&campaign=graphcampaign"]
            ],
            "code" => 200];

        $mock =  m::mock('overload:App\Services\Sale\SaleSmsService');
        $mock->shouldReceive('processSaleQr')->andReturn($result);

        $response = $this->postJson('/api/true/v2/sale/qr', $input);
        $response = json_decode($response->getContent(), true);
        $this->assertEquals(200, Arr::get($response, 'status_code'));
        $this->assertEquals('OK', Arr::get($response, 'status_txt'));
    }

    public function testPostSaleQREmptyInputValidate()
    {
        $input = [];

        $response = $this->postJson('api/true/v2/sale/qr', $input);
        $response = json_decode($response->getContent(), true);
        $this->assertEquals(400, Arr::get($response, 'status_code'));
        $this->assertEquals('Bad Request', Arr::get($response, 'status_txt'));
    }

    public function testPostSaleSmsEmptyInputValidate()
    {
        $input = [];

        $response = $this->postJson('api/true/v2/sale/sms', $input);
        $response = json_decode($response->getContent(), true);
        $this->assertEquals(400, Arr::get($response, 'status_code'));
        $this->assertEquals('Bad Request', Arr::get($response, 'status_txt'));
    }

    public function testPostSaleQRInvalidInPutValidate()
    {
        $input = ['sale_id' => 'graphtest',
        'msisdn' => '0909845050',
        'sale_channel' => 'telesale',
        'campaign' => 'graphcampaign',
        'url' => 'https://pre-store.truecorp.co.th/online-store/item/L91580446?matcode=3000081227&selected_campaign=existing_postpaid'
    ];

        $result = ["response" =>
        [
            "error" => ["description" => "The shop code field is required."]
        ],
        "code" => 400];

        $mock =  m::mock('overload:App\Services\Sale\SaleSmsService');
        $mock->shouldReceive('processSaleQr')->andReturn($result);

        $response = $this->postJson('/api/true/v2/sale/qr', $input);
        $response = json_decode($response->getContent(), true);
        $this->assertEquals(400, Arr::get($response, 'status_code'));
        $this->assertEquals('Bad Request', Arr::get($response, 'status_txt'));
    }

    public function testPostSaleSMSInvalidInPutValidate()
    {
        $input = ['sale_id' => 'graphtest',
        'msisdn' => '0909845050',
        'sale_channel' => 'telesale',
        'campaign' => 'graphcampaign',
        'url' => 'https://pre-store.truecorp.co.th/online-store/item/L91580446?matcode=3000081227&selected_campaign=existing_postpaid'
    ];

        $result = ["response" =>
        [
            "error" => ["description" => "The shop code field is required."]
        ],
        "code" => 400];

        $mock =  m::mock('overload:App\Services\Sale\SaleSmsService');
        $mock->shouldReceive('processSaleSms')->andReturn($result);

        $response = $this->postJson('/api/true/v2/sale/sms', $input);
        $response = json_decode($response->getContent(), true);
        $this->assertEquals(400, Arr::get($response, 'status_code'));
        $this->assertEquals('Bad Request', Arr::get($response, 'status_txt'));
    }

    /**
     * @group testValidateShopCodeSuccess
     */
    public function testValidateShopCodeSuccess()
    {
        $input = [
            'sale_code' => '12345',
            'shop_code' => 90000000
        ];

        $result = json_decode('{"response":{"data":{"uuid":"c2c23d06-ac1e-e616-180e-f153f5e7a2b6","errorCode":"INT00001","message":"Success.","backendResponseList":{"backendResponseInfoArray":[{"apiName":"getBranchList","errorCode":"OSBbllngA00001","message":"Success.","system":"OSB","url":"[hidden]"},{"apiName":"getCCBSProfileInfo","errorCode":"OSBbllngA00001","message":"Success.","system":"OSB","url":"[hidden]"}],"size":2},"validIndicator":"Y"}},"code":200}', true);

        $mock = m::mock('overload:App\Services\Sale\SaleSmsService');
        $mock->shouldReceive('processValidateShopCode')->once()->andReturn($result);

        $response = $this->postJson('/api/true/v2/sale/validate-shop-code', $input);
        $response = json_decode($response->getContent(), true);
        $this->assertEquals(200, Arr::get($response, 'status_code'));
        $this->assertEquals('OK', Arr::get($response, 'status_txt'));
        $this->assertEquals(Arr::get($result, 'response.data'), Arr::get($response, 'data'));
    }

    /**
     * @group testValidateShopCodeFail
     */
    public function testValidateShopCodeFail()
    {
        $input = [
            'sale_code' => '12345'
        ];

        $result = json_decode('{"response":{"errors":{"description":"The shop code field is required."}},"code":400}', true);

        $mock = m::mock('overload:App\Services\Sale\SaleSmsService');
        $mock->shouldReceive('processValidateShopCode')->once()->andReturn($result);

        $response = $this->postJson('/api/true/v2/sale/validate-shop-code', $input);
        $response = json_decode($response->getContent(), true);
        $this->assertEquals(400, Arr::get($response, 'status_code'));
        $this->assertEquals('Bad Request', Arr::get($response, 'status_txt'));
        $this->assertEquals(Arr::get($result, 'response.errors'), Arr::get($response, 'errors'));
    }
}
