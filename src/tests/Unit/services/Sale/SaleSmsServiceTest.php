<?php

namespace Tests\Unit\services\Sale;

use App\Facades\Sale\SaleService;
use App\Services\Sale\SaleSmsService;
use Illuminate\Support\Facades\Redis;
use Tests\TestCase;
use Mockery as m;

class SaleSmsServiceTest extends TestCase
{
    private $mock_guzzle_service;
    private $tmh_config_model;
    private $tmh_sale_model;
    private $tmh_sale_shop_model;

    /**
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function setUp(): void
    {
        parent::setUp();
        $this->mock_guzzle_service      = m::mock('alias:App\Services\GuzzleService');
        $this->tmh_config_model         = m::mock('overload:App\Models\TruemovehConfigModel');
        $this->tmh_sale_model           = m::mock('overload:App\Models\TruemovehSaleModel');
        $this->tmh_sale_shop_model      = m::mock('overload:App\Models\TrueMovehSaleShopModel');
    }

    /**
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function tearDown(): void
    {
        parent::tearDown();
        m::close();
    }

    /**
     * @group processSaleSms
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessSaleSmsSuccess()
    {
        $this->mock_guzzle_service->shouldReceive('postGuzzleRequest')->times(1)->andReturn([200, '{"status_code":true,"data":{"sale_id":"NADECH","msisdn":"0942516369","sale_channel":"telesale","campaign":"AkCampaign","shop_code":"800000012","url":"https:\/\/pre-store.truecorp.co.th\/online-store\/item\/L91597145?matcode=3000080552","updated_at":"2021-07-22 18:13:56","created_at":"2021-07-22 18:13:56","id":97},"code":200,"message":"success"}']);
        $this->mock_guzzle_service->shouldReceive('postRequest')->times(1)->andReturn(json_decode('{"@attributes":{"id":"162695266286000006"},"rsr":{"@attributes":{"type":"ack"},"destination":{"@attributes":{"messageid":"162695266286000006"},"address":{"number":"66942516369"}},"source":{"address":{"number":"TrueMove H"}},"service-id":"2309721100","rsr_detail":{"@attributes":{"status":"Success"},"code":"000","description":"Success"}}}', true));

        $this->tmh_config_model->shouldReceive('findFirst')->andReturn($this->tmh_config_model);
        $this->tmh_config_model->shouldReceive('toArray')->andReturn(json_decode('\'{"key":"sms","value":"{\"language\": \"TH\", \"template\": \"01035675210004.2\", \"message\": \"{\\\"link\\\":\\\"$url\\\"}\"}"}\'', true));

        $input  = json_decode('{"sale_id":"NADECH","msisdn":"0942516369","sale_channel":"telesale","campaign":"AkCampaign","shop_code":"800000012","url":"https:\/\/pre-store.truecorp.co.th\/online-store\/item\/L91597145?matcode=3000080552"}', true);
        $result = SaleService::processSaleSms($input);

        $this->assertEquals(200, array_get($result, 'code'));
        $this->assertEquals('Success', array_get($result, 'response.data'));
    }

    /**
     * @group processSaleSms
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessSaleSmsFailValidation()
    {
        $input_list = [
            [
                'input' => '{"sale_idx":"NADECH","msisdn":"0942516369","sale_channel":"telesale","campaign":"AkCampaign","shop_code":"800000012","url":"https:\/\/pre-store.truecorp.co.th\/online-store\/item\/L91597145?matcode=3000080552"}',
                'expected' => '{"response":{"errors":{"description":"The sale id field is required."}},"code":400}'
            ],
            [
                'input' => '{"sale_id":"NADECH","msisdnx":"0942516369","sale_channel":"telesale","campaign":"AkCampaign","shop_code":"800000012","url":"https:\/\/pre-store.truecorp.co.th\/online-store\/item\/L91597145?matcode=3000080552"}',
                'expected' => '{"response":{"errors":{"description":"The msisdn field is required."}},"code":400}'
            ],
            [
                'input' => '{"sale_id":"NADECH","msisdn":"0942516369","sale_channelx":"telesale","campaign":"AkCampaign","shop_code":"800000012","url":"https:\/\/pre-store.truecorp.co.th\/online-store\/item\/L91597145?matcode=3000080552"}',
                'expected' => '{"response":{"errors":{"description":"The sale channel field is required."}},"code":400}'
            ],
            [
                'input' => '{"sale_id":"NADECH","msisdn":"0942516369","sale_channel":"telesale","campaign":"AkCampaign","shop_codex":"800000012","url":"https:\/\/pre-store.truecorp.co.th\/online-store\/item\/L91597145?matcode=3000080552"}',
                'expected' => '{"response":{"errors":{"description":"The shop code field is required."}},"code":400}'
            ],
            [
                'input' => '{"sale_id":"NADECH","msisdn":"0942516369","sale_channel":"telesale","campaign":"AkCampaign","shop_code":"800000012","urlx":"https:\/\/pre-store.truecorp.co.th\/online-store\/item\/L91597145?matcode=3000080552"}',
                'expected' => '{"response":{"errors":{"description":"The url field is required."}},"code":400}'
            ]
        ];

        foreach ($input_list as $value) {
            $result = SaleService::processSaleSms(json_decode(array_get($value, 'input'), true));
            $this->assertEquals(json_decode(array_get($value, 'expected'), true), $result);
        }
    }

    /**
     * @group processSaleSms
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessSaleSmsFailCreateSaleSms()
    {
        $this->mock_guzzle_service->shouldReceive('postGuzzleRequest')->times(1)->andReturn([400, '{"status_code":true,"data":{"sale_id":"NADECH","msisdn":"0942516369","sale_channel":"telesale","campaign":"AkCampaign","shop_code":"800000012","url":"https:\/\/pre-store.truecorp.co.th\/online-store\/item\/L91597145?matcode=3000080552","updated_at":"2021-07-22 18:13:56","created_at":"2021-07-22 18:13:56","id":97},"code":200,"message":"success"}']);

        $input  = json_decode('{"sale_id":"NADECH","msisdn":"0942516369","sale_channel":"telesale","campaign":"AkCampaign","shop_code":"800000012","url":"https:\/\/pre-store.truecorp.co.th\/online-store\/item\/L91597145?matcode=3000080552"}', true);
        $result = SaleService::processSaleSms($input);

        $this->assertEquals(406, array_get($result, 'code'));
        $this->assertEquals('Fail create sale sms', array_get($result, 'response.errors.description'));
    }

    /**
     * @group processSaleSms
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessSaleSmsFailNotFoundSaleSmsData()
    {
        $this->mock_guzzle_service->shouldReceive('postGuzzleRequest')->times(1)->andReturn([200, '{"status_code":true,"datax":{"sale_id":"NADECH","msisdn":"0942516369","sale_channel":"telesale","campaign":"AkCampaign","shop_code":"800000012","url":"https:\/\/pre-store.truecorp.co.th\/online-store\/item\/L91597145?matcode=3000080552","updated_at":"2021-07-22 18:13:56","created_at":"2021-07-22 18:13:56","id":97},"code":200,"message":"success"}']);

        $input  = json_decode('{"sale_id":"NADECH","msisdn":"0942516369","sale_channel":"telesale","campaign":"AkCampaign","shop_code":"800000012","url":"https:\/\/pre-store.truecorp.co.th\/online-store\/item\/L91597145?matcode=3000080552"}', true);
        $result = SaleService::processSaleSms($input);

        $this->assertEquals(406, array_get($result, 'code'));
        $this->assertEquals('Not found sale sms data', array_get($result, 'response.errors.description'));
    }

    /**
     * @group processSaleSms
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessSaleSmsFailSendSaleSms()
    {
        $this->mock_guzzle_service->shouldReceive('postGuzzleRequest')->times(1)->andReturn([200, '{"status_code":true,"data":{"sale_id":"NADECH","msisdn":"0942516369","sale_channel":"telesale","campaign":"AkCampaign","shop_code":"800000012","url":"https:\/\/pre-store.truecorp.co.th\/online-store\/item\/L91597145?matcode=3000080552","updated_at":"2021-07-22 18:13:56","created_at":"2021-07-22 18:13:56","id":97},"code":200,"message":"success"}']);
        $this->mock_guzzle_service->shouldReceive('postRequest')->times(1)->andReturn(json_decode('{"@attributes":{"id":"162695266286000006"},"rsr":{"@attributes":{"type":"ack"},"destination":{"@attributes":{"messageid":"162695266286000006"},"address":{"number":"66942516369"}},"source":{"address":{"number":"TrueMove H"}},"service-id":"2309721100","rsr_detail":{"@attributes":{"status":"Success"},"code":"400","descriptionx":"Success"}}}', true));

        $this->tmh_config_model->shouldReceive('findFirst')->andReturn($this->tmh_config_model);
        $this->tmh_config_model->shouldReceive('toArray')->andReturn(json_decode('\'{"key":"sms","value":"{\"language\": \"TH\", \"template\": \"01035675210004.2\", \"message\": \"{\\\"link\\\":\\\"$url\\\"}\"}"}\'', true));

        $input  = json_decode('{"sale_id":"NADECH","msisdn":"0942516369","sale_channel":"telesale","campaign":"AkCampaign","shop_code":"800000012","url":"https:\/\/pre-store.truecorp.co.th\/online-store\/item\/L91597145?matcode=3000080552"}', true);
        $result = SaleService::processSaleSms($input);

        $this->assertEquals(417, array_get($result, 'code'));
        $this->assertEquals('Fail send sale sms(400)', array_get($result, 'response.errors.description'));
    }

    /**
     * @group processSaleSms
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessSaleSmsFailException()
    {
        $this->mock_guzzle_service->shouldReceive('postGuzzleRequest')->times(1)->andThrow(new \Exception('Throw Exception', 400));

        $input  = json_decode('{"sale_id":"NADECH","msisdn":"0942516369","sale_channel":"telesale","campaign":"AkCampaign","shop_code":"800000012","url":"https:\/\/pre-store.truecorp.co.th\/online-store\/item\/L91597145?matcode=3000080552"}', true);
        $result = SaleService::processSaleSms($input);

        $this->assertEquals(400, array_get($result, 'code'));
        $this->assertEquals('Throw Exception', array_get($result, 'response.errors.description'));
    }

    /**
     * @group processSaleSms
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessSaleQrSuccess()
    {
        $this->mock_guzzle_service->shouldReceive('postGuzzleRequest')->times(1)->andReturn([200, '{"status_code":true,"data":{"sale_id":"NADECH","msisdn":"0942516369","sale_channel":"telesale","campaign":"AkCampaign","shop_code":"800000012","url":"https:\/\/pre-store.truecorp.co.th\/online-store\/item\/L91597145?matcode=3000080552","updated_at":"2021-07-22 18:13:56","created_at":"2021-07-22 18:13:56","id":97},"code":200,"message":"success"}']);

        $input  = json_decode('{"sale_id":"NADECH","msisdn":"0942516369","sale_channel":"telesale","campaign":"AkCampaign","shop_code":"800000012","url":"https:\/\/pre-store.truecorp.co.th\/online-store\/item\/L91597145?matcode=3000080552"}', true);
        $result = SaleService::processSaleQr($input);

        $this->assertEquals(200, array_get($result, 'code'));
        $this->assertEquals('https://pre-store.truecorp.co.th/online-store/item/L91597145?matcode=3000080552&afc=c21zMDAwMDAwOTc=&campaign=AkCampaign', array_get($result, 'response.data.url'));
    }

    /**
     * @group processSaleSms
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessSaleQrFailValidation()
    {
        $input_list = [
            [
                'input' => '{"sale_idx":"NADECH","msisdn":"0942516369","sale_channel":"telesale","campaign":"AkCampaign","shop_code":"800000012","url":"https:\/\/pre-store.truecorp.co.th\/online-store\/item\/L91597145?matcode=3000080552"}',
                'expected' => '{"response":{"errors":{"description":"The sale id field is required."}},"code":400}'
            ],
            [
                'input' => '{"sale_id":"NADECH","msisdnx":"0942516369","sale_channel":"telesale","campaign":"AkCampaign","shop_code":"800000012","url":"https:\/\/pre-store.truecorp.co.th\/online-store\/item\/L91597145?matcode=3000080552"}',
                'expected' => '{"response":{"errors":{"description":"The msisdn field is required."}},"code":400}'
            ],
            [
                'input' => '{"sale_id":"NADECH","msisdn":"0942516369","sale_channelx":"telesale","campaign":"AkCampaign","shop_code":"800000012","url":"https:\/\/pre-store.truecorp.co.th\/online-store\/item\/L91597145?matcode=3000080552"}',
                'expected' => '{"response":{"errors":{"description":"The sale channel field is required."}},"code":400}'
            ],
            [
                'input' => '{"sale_id":"NADECH","msisdn":"0942516369","sale_channel":"telesale","campaign":"AkCampaign","shop_codex":"800000012","url":"https:\/\/pre-store.truecorp.co.th\/online-store\/item\/L91597145?matcode=3000080552"}',
                'expected' => '{"response":{"errors":{"description":"The shop code field is required."}},"code":400}'
            ],
            [
                'input' => '{"sale_id":"NADECH","msisdn":"0942516369","sale_channel":"telesale","campaign":"AkCampaign","shop_code":"800000012","urlx":"https:\/\/pre-store.truecorp.co.th\/online-store\/item\/L91597145?matcode=3000080552"}',
                'expected' => '{"response":{"errors":{"description":"The url field is required."}},"code":400}'
            ]
        ];

        foreach ($input_list as $value) {
            $result = SaleService::processSaleQr(json_decode(array_get($value, 'input'), true));
            $this->assertEquals(json_decode(array_get($value, 'expected'), true), $result);
        }
    }

    /**
     * @group processSaleSms
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessSaleQrFailException()
    {
        $this->mock_guzzle_service->shouldReceive('postGuzzleRequest')->times(1)->andThrow(new \Exception('Throw Exception', 400));

        $input  = json_decode('{"sale_id":"NADECH","msisdn":"0942516369","sale_channel":"telesale","campaign":"AkCampaign","shop_code":"800000012","url":"https:\/\/pre-store.truecorp.co.th\/online-store\/item\/L91597145?matcode=3000080552"}', true);
        $result = SaleService::processSaleQr($input);

        $this->assertEquals(400, array_get($result, 'code'));
        $this->assertEquals('Throw Exception', array_get($result, 'response.errors.description'));
    }

    /**
     * @group processSaleSms
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessSaleQrFailCreateSaleSms()
    {
        $this->mock_guzzle_service->shouldReceive('postGuzzleRequest')->times(1)->andReturn([400, '{"status_code":true,"data":{"sale_id":"NADECH","msisdn":"0942516369","sale_channel":"telesale","campaign":"AkCampaign","shop_code":"800000012","url":"https:\/\/pre-store.truecorp.co.th\/online-store\/item\/L91597145?matcode=3000080552","updated_at":"2021-07-22 18:13:56","created_at":"2021-07-22 18:13:56","id":97},"code":200,"message":"success"}']);

        $input  = json_decode('{"sale_id":"NADECH","msisdn":"0942516369","sale_channel":"telesale","campaign":"AkCampaign","shop_code":"800000012","url":"https:\/\/pre-store.truecorp.co.th\/online-store\/item\/L91597145?matcode=3000080552"}', true);
        $result = SaleService::processSaleQr($input);

        $this->assertEquals(406, array_get($result, 'code'));
        $this->assertEquals('Fail create sale sms', array_get($result, 'response.errors.description'));
    }

    /**
     * @group processSaleSms
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessSaleQrFailNotFoundSaleSmsData()
    {
        $this->mock_guzzle_service->shouldReceive('postGuzzleRequest')->times(1)->andReturn([200, '{"status_code":true,"datax":{"sale_id":"NADECH","msisdn":"0942516369","sale_channel":"telesale","campaign":"AkCampaign","shop_code":"800000012","url":"https:\/\/pre-store.truecorp.co.th\/online-store\/item\/L91597145?matcode=3000080552","updated_at":"2021-07-22 18:13:56","created_at":"2021-07-22 18:13:56","id":97},"code":200,"message":"success"}']);

        $input  = json_decode('{"sale_id":"NADECH","msisdn":"0942516369","sale_channel":"telesale","campaign":"AkCampaign","shop_code":"800000012","url":"https:\/\/pre-store.truecorp.co.th\/online-store\/item\/L91597145?matcode=3000080552"}', true);
        $result = SaleService::processSaleQr($input);

        $this->assertEquals(406, array_get($result, 'code'));
        $this->assertEquals('Not found sale sms data', array_get($result, 'response.errors.description'));
    }

    /**
     * @group processSaleSms
     * @group sendSuccessSMS
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testSendSuccessSMS()
    {
        $input = [
            "id" => 74,
            "order_id" => 12121573,
            "sms_id" => 237,
            "created_at" => "2021-08-26 11:22:03",
            "updated_at" => "2021-08-26 11:22:03",
            "tmh_sale" => [
                "id" => 237,
                "sale_id" => "2",
                "msisdn" => "0909845050",
                "sale_alias" => null,
                "sale_channel" => "Telesale",
                "sale_mobile" => "0909845050",
                "campaign" => null,
                "shop_code" => "800000001",
                "url" => "https://pre-store.truecorp.co.th/online-store/item/L91597261?token=dBVS2nM%252FNJqVcjxYVTsHkmHd2oc%2520gWqFB5QoZ9LFRZYdZRP5NpE8r61NTaIRWYJ74cxr1ZM35bL0Lfa552XEWw%253D%253D&matcode=TP12345-1",
                "created_at" => "2021-08-16 11:21:47",
                "updated_at" => "2021-08-16 11:21:47",
            ],
            "delivery_phone" => "0895371514",
            "secure_key" => "800012121573"
        ];

        $this->mock_guzzle_service->shouldReceive('postRequest')->times(2)->andReturn(json_decode('{"@attributes":{"id":"163048304172600001"},"rsr":{"@attributes":{"type":"ack"},"destination":{"@attributes":{"messageid":"163048304172600001"},"address":{"number":"66942516369"}},"source":{"address":{"number":"TrueMove H"}},"service-id":"2309721100","rsr_detail":{"@attributes":{"status":"Success"},"code":"000","description":"Success"}}}', true));
        $this->tmh_config_model->shouldReceive('findFirst')->andReturn($this->tmh_config_model);
        $this->tmh_config_model->shouldReceive('toArray')->andReturn(json_decode('\'{"key":"sms","value":"{\"language\": \"TH\", \"template\": \"01035675210004.2\", \"message\": \"{\\\"link\\\":\\\"$url\\\"}\"}"}\'', true));

        SaleSmsService::sendSuccessSMS($input);

        $this->doesNotPerformAssertions(TRUE);
    }

    /**
     * @group testGetTmhSaleConFig
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testGetTmhSaleConFig()
    {
        $shop_code = '300200100';
        $expected_result = [
            'direct_url' => [
                [
                    'name' => 'berfuntong',
                    'url' => 'https://pre-store.truecorp.co.th/online-store/berfuntong/?',
                ],
                [
                    'name' => 'postpaidsim',
                    'url' => 'https://pre-store.truecorp.co.th/online-store/postpaid/L91580071?nas_code=post02',
                ]
            ],
            'config' => [
                [
                    'name' => 'ซื้อเครื่องพร้อมเปิดเบอร์ทุกรุ่น',
                    'url' => 'https://pre-store.truecorp.co.th/online-store/shop/7eleven?campaign=E2EP2',
                    'token' => 'dBVS2nM%2FNJqVcjxYVTsHkmHd2oc%20gWqFB5QoZ9LFRZYdZRP5NpE8r61NTaIRWYJ74cxr1ZM35bL0Lfa552XEWw%3D%3D',
                ],
                [
                    'name' => '5G VIP รับเครื่องฟรี',
                    'url' => 'https://pre-store.truecorp.co.th/online-store/shop/trueyou',
                ],
                [
                    'name' => '5G VIP รับส่วนลดเพิ่ม 3,000 บาท',
                    'url' => 'https://pre-store.truecorp.co.th/online-store/',
                ]
            ]
        ];

        Redis::shouldReceive('get')->andReturn(null);
        $this->tmh_sale_model->shouldReceive('findConfigByShopCode')->with($shop_code)->andReturn($this->tmh_sale_model);
        $this->tmh_sale_model->shouldReceive('toArray')->andReturn(array (
            'shop_code' => '80000084',
            'direct_url' => '[{"name":"berfuntong","url":"https://pre-store.truecorp.co.th/online-store/berfuntong/?"},{"name":"postpaidsim","url":"https://pre-store.truecorp.co.th/online-store/postpaid/L91580071?nas_code=post02"}]',
            'config' => '[{"name":"ซื้อเครื่องพร้อมเปิดเบอร์ทุกรุ่น","url":"https://pre-store.truecorp.co.th/online-store/shop/7eleven?campaign=E2EP2","token":"dBVS2nM%2FNJqVcjxYVTsHkmHd2oc%20gWqFB5QoZ9LFRZYdZRP5NpE8r61NTaIRWYJ74cxr1ZM35bL0Lfa552XEWw%3D%3D"},{"name":"5G VIP รับเครื่องฟรี","url":"https://pre-store.truecorp.co.th/online-store/shop/trueyou"},{"name":"5G VIP รับส่วนลดเพิ่ม 3,000 บาท","url":"https://pre-store.truecorp.co.th/online-store/"}]',
        ));
        Redis::shouldReceive('set')->andReturn(true);

        $result = SaleSmsService::getTmhSaleConFig($shop_code);

        $this->assertEquals($expected_result,$result);
    }

    /**
     * @group testGetTmhSaleShopByAlias
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testGetTmhSaleShopByAlias()
    {
        $alias = 'retail';
        $model_response = '[{"shop_code":"80000001","alias":"retail"},{"shop_code":"80000084","alias":"retail"}]';
        $expected_value = [
            'shop' => [
                0 => (object) [
                    'shop_code' => '80000001',
                    'alias' => 'retail',
                ],
                1 => (object) [
                    'shop_code' => '80000084',
                    'alias' => 'retail',
                ],
            ],
        ];

        Redis::shouldReceive('get')->andReturn(null);
        $this->tmh_sale_shop_model->shouldReceive('findConfigByAlias')->with($alias)->andReturn($this->tmh_sale_shop_model);
        $this->tmh_sale_shop_model->shouldReceive('toArray')->andReturn(json_decode($model_response));
        Redis::shouldReceive('set')->andReturn(true);

        $result = SaleSmsService::getTmhSaleShopByAlias($alias);

        $this->assertEquals($expected_value,$result);
    }

    /**
     * @group testGetTmhSaleChannelAndSaleAlias
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testGetTmhSaleChannelAndSaleAlias()
    {
        Redis::shouldReceive('get')->andReturn(null);
        $this->tmh_config_model->shouldReceive('findIn')->with(['sale_alias', 'sale_channel', 'sale_product_type', 'sale_ads_campaign_by_channel'])->andReturn($this->tmh_config_model);
        $this->tmh_config_model->shouldReceive('toArray')->andReturn(json_decode('[{"key":"sale_ads_campaign_by_channel","value":"[\"Ads Facebook\", \"Ads Facebook CLM\", \"Telesale CLM\"]"},{"key":"sale_channel","value":"[\"Telesale\",\"Knock Door\",\"POS\",\"Ads Facebook\", \"Ads Facebook CLM\", \"Telesale CLM\"]"},{"key":"sale_product_type","value":"{\"direct_url\": \"Sims\",\"config\": \"Devices\"}"},{"key":"sale_alias","value":"{\"MakroNoValidate\":{\"shop\":false,\"shop_code\":\"makro\",\"account_type\":\"no_validate\"},\"Retail\":{\"shop\":true,\"account_type\":\"true\"},\"Telesales\":{\"shop\":false,\"shop_code\":\"80000010\",\"account_type\":\"true\"},\"SF\":{\"shop\":false,\"shop_code\":\"30106401\",\"account_type\":\"true\"},\"Makro\":{\"shop\":true,\"account_type\":\"tsm\"}}"}]', true));

        Redis::shouldReceive('set')->andReturn(true);

        $result = SaleSmsService::getTmhSaleChannelAndSaleAlias();

        $this->assertEquals(json_decode('{"sale_ads_campaign_by_channel":["Ads Facebook","Ads Facebook CLM","Telesale CLM"],"sale_channel":["Telesale","Knock Door","POS","Ads Facebook","Ads Facebook CLM","Telesale CLM"],"sale_product_type":{"direct_url":"Sims","config":"Devices"},"sale_alias":{"MakroNoValidate":{"shop":false,"shop_code":"makro","account_type":"no_validate"},"Retail":{"shop":true,"account_type":"true"},"Telesales":{"shop":false,"shop_code":"80000010","account_type":"true"},"SF":{"shop":false,"shop_code":"30106401","account_type":"true"},"Makro":{"shop":true,"account_type":"tsm"}}}', true),$result);
    }

    /**
     * @group testProcessValidateShopCodeSuccess
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessValidateShopCodeSuccess()
    {
        $input = [
            'sale_code'     => '12345',
            'shop_code'     => 90000000,
            'account_type'   => 'true'
        ];

        $mock_wls_service_result = [
            0 => 200,
            1 => '{"uuid":"c2c23d06-ac1e-e616-180e-f153f5e7a2b6","errorCode":"INT00001","message":"Success.","backendResponseList":{"backendResponseInfoArray":[{"apiName":"getBranchList","errorCode":"OSBbllngA00001","message":"Success.","system":"OSB","url":"[hidden]"},{"apiName":"getCCBSProfileInfo","errorCode":"OSBbllngA00001","message":"Success.","system":"OSB","url":"[hidden]"}],"size":2},"validIndicator":"Y"}'
        ];

        $mock_response = json_decode('{"response":{"data":{"uuid":"c2c23d06-ac1e-e616-180e-f153f5e7a2b6","errorCode":"INT00001","message":"Success.","backendResponseList":{"backendResponseInfoArray":[{"apiName":"getBranchList","errorCode":"OSBbllngA00001","message":"Success.","system":"OSB","url":"[hidden]"},{"apiName":"getCCBSProfileInfo","errorCode":"OSBbllngA00001","message":"Success.","system":"OSB","url":"[hidden]"}],"size":2},"validIndicator":"Y"}},"code":200}', true);

        $mock_wls_service = m::mock('alias:App\Services\WlsService');
        $mock_wls_service->shouldReceive('operateRequestAction')->once()->andReturn($mock_wls_service_result);

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->once()->andReturn(true);

        $response = SaleService::processValidateShopCode($input);
        $this->assertEquals($mock_response, $response);
    }

    /**
     * @group testProcessValidateShopCodeFailWithSaleCodeAndShopCodeNotMatch
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessValidateShopCodeFailWithSaleCodeAndShopCodeNotMatch()
    {
        $input = [
            'sale_code' => '12345',
            'shop_code' => 90000000,
            'account_type'   => 'true'
        ];

        $mock_wls_service_result = [
            0 => 200,
            1 => '{"uuid":"c2c23d06-ac1e-e616-180e-f153f5e7a2b6","errorCode":"INT90031","message":"Invalid validation rule [Not valid shop code].","backendResponseList":{"backendResponseInfoArray":[{"apiName":"getBranchList","errorCode":"OSBbllngA00001","message":"Success.","system":"OSB","url":"[hidden]"},{"apiName":"getCCBSProfileInfo","errorCode":"OSBbllngA00001","message":"Success.","system":"OSB","url":"[hidden]"}],"size":2},"validIndicator":"N"}'
        ];

        $mock_response = json_decode('{"response":{"errors":{"description":"Validate shop code error."}},"code":406}', true);

        $mock_wls_service = m::mock('alias:App\Services\WlsService');
        $mock_wls_service->shouldReceive('operateRequestAction')->once()->andReturn($mock_wls_service_result);

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->twice()->andReturn(true);

        $response = SaleService::processValidateShopCode($input);
        $this->assertEquals($mock_response, $response);
    }

    /**
     * @group testProcessValidateShopCodeFailWithThrowException
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessValidateShopCodeFailWithThrowException()
    {
        $input = [
            'sale_code' => '12345',
            'shop_code' => 90000000,
            'account_type'   => 'true'
        ];

        $mock_response = json_decode('{"response":{"errors":{"description":"Internal Server Error"}},"code":500}', true);

        $mock_wls_service = m::mock('alias:App\Services\WlsService');
        $mock_wls_service->shouldReceive('operateRequestAction')->once()->andThrow(new \Exception('Internal Server Error', 500));;

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->once()->andReturn(true);

        $response = SaleService::processValidateShopCode($input);
        $this->assertEquals($mock_response, $response);
    }

    /**
     * @group testProcessValidateShopCodeFailValidation
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessValidateShopCodeFailValidation()
    {
        $input_list = [
            [
                'input' => [ 'sale_code2' => '12345', 'shop_code' => 90000000 ],
                'expected' => '{"response":{"errors":{"description":"The sale code field is required."}},"code":400}'
            ],
            [
                'input' => [ 'sale_code' => '', 'shop_code' => 90000000 ],
                'expected' => '{"response":{"errors":{"description":"The sale code field is required."}},"code":400}'
            ],
            [
                'input' => [ 'sale_code' => null, 'shop_code' => 90000000 ],
                'expected' => '{"response":{"errors":{"description":"The sale code field is required."}},"code":400}'
            ],
            [
                'input' => [ 'SALE_CODE' => '12345', 'shop_code' => 90000000 ],
                'expected' => '{"response":{"errors":{"description":"The sale code field is required."}},"code":400}'
            ],
            [
                'input' => [ 'shop_code' => 90000000 ],
                'expected' => '{"response":{"errors":{"description":"The sale code field is required."}},"code":400}'
            ],

            [
                'input' => [ 'sale_code' => '12345', 'shop_code2' => 90000000 ],
                'expected' => '{"response":{"errors":{"description":"The shop code field is required."}},"code":400}'
            ],
            [
                'input' => [ 'sale_code' => '12345', 'shop_code' => '' ],
                'expected' => '{"response":{"errors":{"description":"The shop code field is required."}},"code":400}'
            ],
            [
                'input' => [ 'sale_code' => '12345', 'shop_code' => null ],
                'expected' => '{"response":{"errors":{"description":"The shop code field is required."}},"code":400}'
            ],
            [
                'input' => [ 'sale_code' => '12345', 'SHOP_CODE' => 90000000 ],
                'expected' => '{"response":{"errors":{"description":"The shop code field is required."}},"code":400}'
            ],
            [
                'input' => [ 'sale_code' => '12345' ],
                'expected' => '{"response":{"errors":{"description":"The shop code field is required."}},"code":400}'
            ],
        ];

        foreach ($input_list as $value) {
            $result = SaleService::processValidateShopCode(\Arr::get($value, 'input', true));
            $this->assertEquals(json_decode(\Arr::get($value, 'expected'), true), $result);
        }
    }

    /**
     * @group testProcessValidateShopCodeWithNoValidateType
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessValidateShopCodeWithNoValidateType()
    {
        $input = [
            'sale_code'     => '12345',
            'shop_code'     => 90000000,
            'account_type'   => 'no_validate'
        ];

        $expected = json_decode('{"response":{"data":[]},"code":200}', true);

        $response = SaleService::processValidateShopCode($input);
        $this->assertEquals($expected, $response);
    }

    /**
     * @group testProcessValidateShopCodeWithNoValidateType
     * @group testProcessValidateShopCodeWithNoValidateTypeEmpty
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessValidateShopCodeWithNoValidateTypeEmpty()
    {
        $input = [
            'sale_code'     => '12345',
            'shop_code'     => 90000000,
            'account_type'   => ''
        ];

        $expected = json_decode('{"response":{"errors":{"description":"The account type field is required."}},"code":400}', true);

        $response = SaleService::processValidateShopCode($input);
        $this->assertEquals($expected, $response);
    }

    /**
     * @group testProcessValidateShopCodeWithNoValidateType
     * @group testProcessValidateShopCodeWithNoValidateAccountTypeWithoutAccountTypeParameter
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessValidateShopCodeWithNoValidateAccountTypeWithoutAccountTypeParameter()
    {
        $input = [
            'sale_code'     => '12345',
            'shop_code'     => 90000000,
        ];

        $expected = json_decode('{"response":{"errors":{"description":"The account type field is required."}},"code":400}', true);

        $response = SaleService::processValidateShopCode($input);
        $this->assertEquals($expected, $response);
    }

    /**
     * @group testProcessValidateShopCodeWithNoValidateType
     * @group testProcessValidateShopCodeWithNoValidateTypeWrongAccountType
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessValidateShopCodeWithNoValidateTypeWrongAccountType()
    {
        $input = [
            'sale_code'     => '12345',
            'shop_code'     => 90000000,
            'account_type'   => 'blablabla'
        ];

        $mock_wls_service_result = [
            0 => 200,
            1 => '{"uuid":"c2c23d06-ac1e-e616-180e-f153f5e7a2b6","errorCode":"INT00001","message":"Success.","backendResponseList":{"backendResponseInfoArray":[{"apiName":"getBranchList","errorCode":"OSBbllngA00001","message":"Success.","system":"OSB","url":"[hidden]"},{"apiName":"getCCBSProfileInfo","errorCode":"OSBbllngA00001","message":"Success.","system":"OSB","url":"[hidden]"}],"size":2},"validIndicator":"Y"}'
        ];

        $mock_response = json_decode('{"response":{"data":{"uuid":"c2c23d06-ac1e-e616-180e-f153f5e7a2b6","errorCode":"INT00001","message":"Success.","backendResponseList":{"backendResponseInfoArray":[{"apiName":"getBranchList","errorCode":"OSBbllngA00001","message":"Success.","system":"OSB","url":"[hidden]"},{"apiName":"getCCBSProfileInfo","errorCode":"OSBbllngA00001","message":"Success.","system":"OSB","url":"[hidden]"}],"size":2},"validIndicator":"Y"}},"code":200}', true);

        $mock_wls_service = m::mock('alias:App\Services\WlsService');
        $mock_wls_service->shouldReceive('operateRequestAction')->once()->andReturn($mock_wls_service_result);

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->once()->andReturn(true);

        $response = SaleService::processValidateShopCode($input);
        $this->assertEquals($mock_response, $response);
    }
}
