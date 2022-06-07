<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Support\Facades\Redis;
use App\Facades\PaymentMethodService;
use App\Facades\Client;
use Illuminate\Support\Arr;

use Mockery as m;

class PaymentMethodServiceTest extends TestCase
{
    /**
     * @group testSwitchPaymentMethod
     **/
    public function testSwitchPaymentMethodFailedRedisKeyIsEmpty()
    {
        $this->getEmptyValueFromRedis();
        $this->findEmptyStoreDynamo();

        $response = PaymentMethodService::switchPaymentMethod('omiseaction', 'L950053');
        $this->assertEquals('omiseaction', $response);
    }
    /**
     * @group testSwitchPaymentMethod
     **/
    public function testSwitchPaymentMethodSuccess()
    {
        $this->getValueFromRedisSuccess();
        $this->findEmptyStoreDynamo();
        $this->getValueFromRedis2c2pCcwEmpty();

        $response = PaymentMethodService::switchPaymentMethod('EW', 'L950053');
        $this->assertEquals('OMISEEW', $response);
    }

    /**
     * @group testGetToggleOmise
     **/
    public function testGetToggleOmiseFailedRedisKeyIsEmpty()
    {
        $this->getEmptyValueFromRedis();
        $this->findEmptyStoreDynamo();

        $response = PaymentMethodService::getToggleOmise();
        $this->assertEmpty($response);
    }

    /**
     * @group testGetToggleOmise
     **/
    public function testGetToggleOmiseSuccess()
    {
        $this->getValueFromRedisSuccess();
        $this->findEmptyStoreDynamo();


        $response = PaymentMethodService::getToggleOmise();
        $this->assertArrayHasKey('omise_toggle', $response);
        $this->assertArrayHasKey('ccw', $response);
        $this->assertArrayHasKey('instm', $response);
        $this->assertArrayHasKey('ew', $response);
        $this->assertArrayHasKey('token_auth', $response);

        $this->assertEquals(true, array_get($response, 'omise_toggle'));
        $this->assertTrue(array_get($response, 'omise_toggle'));
        $this->assertEquals('OMISECCW', array_get($response, 'ccw'));
        $this->assertEquals('OMISEINSTM', array_get($response, 'instm'));
        $this->assertEquals('OMISEEW', array_get($response, 'ew'));
    }
 
    /**
     * @group testGetPaymentMethods
     */
    public function testGetPaymentMethodsFailValidationNoInput()
    {
        $response = PaymentMethodService::getPaymentMethods([]);

        $this->assertEmpty($response);
    }

    /**
     * @group testGetPaymentMethods
     */
    public function testGetPaymentMethodsFailValidation()
    {
        $this->findEmptyStoreDynamo();

        $response = PaymentMethodService::getPaymentMethods([
            'amount'      => 10.54345,
            'merchant_id' => 'L941527'
        ]);

        $this->assertEmpty($response);
    }

    /**
     * @group testGetPaymentMethods
     */
    public function testGetPaymentMethodsFailNotFound()
    {
        Client::shouldReceive('request')->once()->andReturnSelf()
            ->shouldReceive('getBody')->once()->andReturnSelf()
            ->shouldReceive('getContents')->once()->andReturn('{"code":404,"messages":["payment_methods not found"]}');
        $this->findEmptyStoreDynamo();

        $response = PaymentMethodService::getPaymentMethods([
            'amount'      => 999999999999999999,
            'merchant_id' => 'L941527'
        ]);

        $this->assertEmpty($response);
    }

    /**
     * @group testGetPaymentMethods
     */
    public function testGetPaymentMethodsFailInvalidMerchantId()
    {
        Client::shouldReceive('request')->once()->andReturnSelf()
            ->shouldReceive('getBody')->once()->andReturnSelf()
            ->shouldReceive('getContents')->once()->andReturn('{"code":401,"messages":["not_authorized"]}');
        $this->findEmptyStoreDynamo();

        $response = PaymentMethodService::getPaymentMethods([
            'amount'      => 10000,
            'merchant_id' => 'L941527'
        ]);

        $this->assertEmpty($response);
    }

    /**
     * @group testGetPaymentMethods
     */
    public function testGetPaymentMethodsSuccess()
    {
        Client::shouldReceive('request')->once()->andReturnSelf()
            ->shouldReceive('getBody')->once()->andReturnSelf()
            ->shouldReceive('getContents')->once()->andReturn('{"payment_methods":{"card":[{"object":"payment_method","name":"card","currencies":["THB","JPY","USD","EUR","GBP","SGD","AUD","CHF","CNY","DKK","HKD"],"card_brands":["JCB","Visa","MasterCard"],"installment_terms":null,"banks":[],"monthly_minimum_interest":0,"type":"card","min":20,"max":150000}],"internet_banking":[{"object":"payment_method","name":"internet_banking_bay","currencies":["THB"],"card_brands":null,"installment_terms":null,"banks":[],"monthly_minimum_interest":0,"type":"internet_banking","min":0,"max":100000},{"object":"payment_method","name":"internet_banking_ktb","currencies":["THB"],"card_brands":null,"installment_terms":null,"banks":[],"monthly_minimum_interest":0,"type":"internet_banking","min":0,"max":100000},{"object":"payment_method","name":"internet_banking_scb","currencies":["THB"],"card_brands":null,"installment_terms":null,"banks":[],"monthly_minimum_interest":0,"type":"internet_banking","min":0,"max":100000},{"object":"payment_method","name":"internet_banking_bbl","currencies":["THB"],"card_brands":null,"installment_terms":null,"banks":[],"monthly_minimum_interest":0,"type":"internet_banking","min":0,"max":100000}],"alipay":[{"object":"payment_method","name":"alipay","currencies":["THB"],"card_brands":null,"installment_terms":null,"banks":[],"monthly_minimum_interest":0,"type":"alipay","min":100,"max":50000}],"installment":[{"object":"payment_method","name":"installment_bay","currencies":["THB"],"card_brands":null,"installment_terms":[3,4,6,9,10],"banks":[],"monthly_minimum_interest":500,"type":"installment","min":2000,"max":150000},{"object":"payment_method","name":"installment_kbank","currencies":["THB"],"card_brands":null,"installment_terms":[3,4,6,10],"banks":[],"monthly_minimum_interest":300,"type":"installment","min":2000,"max":150000},{"object":"payment_method","name":"installment_ktc","currencies":["THB"],"card_brands":null,"installment_terms":[3,4,5,6,7,8,9,10],"banks":[],"monthly_minimum_interest":300,"type":"installment","min":2000,"max":150000},{"object":"payment_method","name":"installment_bbl","currencies":["THB"],"card_brands":null,"installment_terms":[4,6,8,9,10],"banks":[],"monthly_minimum_interest":500,"type":"installment","min":2000,"max":150000},{"object":"payment_method","name":"installment_first_choice","currencies":["THB"],"card_brands":null,"installment_terms":[3,4,6,9,10,12,18,24],"banks":[],"monthly_minimum_interest":300,"type":"installment","min":2000,"max":150000},{"object":"payment_method","name":"installment_scb","currencies":["THB"],"card_brands":null,"installment_terms":[3,4,6,9,10],"banks":[],"monthly_minimum_interest":500,"type":"installment","min":2000,"max":150000}],"bill":[{"object":"payment_method","name":"bill_payment_tesco_lotus","currencies":["THB"],"card_brands":null,"installment_terms":null,"banks":[],"monthly_minimum_interest":0,"type":"bill","min":0,"max":100000}],"barcode":[{"object":"payment_method","name":"barcode_alipay","currencies":["THB"],"card_brands":null,"installment_terms":null,"banks":[],"monthly_minimum_interest":0,"type":"barcode","min":0,"max":100000}],"truemoney":[{"object":"payment_method","name":"truemoney","currencies":["THB"],"card_brands":null,"installment_terms":null,"banks":[],"monthly_minimum_interest":0,"type":"truemoney","min":20,"max":100000}],"promptpay":[{"object":"payment_method","name":"promptpay","currencies":["THB"],"card_brands":null,"installment_terms":null,"banks":[],"monthly_minimum_interest":0,"type":"promptpay","min":0,"max":100000}],"points":[{"object":"payment_method","name":"points_citi","currencies":["THB"],"card_brands":null,"installment_terms":null,"banks":[],"monthly_minimum_interest":0,"type":"points","min":0,"max":100000}],"mobile_banking":[{"object":"payment_method","name":"mobile_banking_scb","currencies":["THB"],"card_brands":null,"installment_terms":null,"banks":[],"monthly_minimum_interest":0,"type":"mobile_banking","min":0,"max":100000}]}}');
        $this->findEmptyStoreDynamo();

        $amount  = 10000;
        $response = PaymentMethodService::getPaymentMethods([
            'amount'      => $amount,
            'merchant_id' => 'L941527'
        ]);
        
        $this->assertArrayNotHasKey('payment_methods', $response);
        $this->assertArrayHasKey('card', $response);
        $this->assertArrayHasKey('internet_banking', $response);
        $this->assertArrayHasKey('alipay', $response);
        $this->assertArrayHasKey('installment', $response);
        $this->assertArrayHasKey('bill', $response);
        $this->assertArrayHasKey('barcode', $response);
        $this->assertArrayHasKey('truemoney', $response);
        $this->assertArrayHasKey('promptpay', $response);
        $this->assertArrayHasKey('points', $response);
        $this->assertArrayHasKey('mobile_banking', $response);

        foreach($response as $individual_data) {
            $this->isAllMaxMoreOrEqualThanAmount($amount, array_column($individual_data, 'max'));
        }
    }

    private function isAllMaxMoreOrEqualThanAmount($amount, $data)
    {
        foreach($data as $max_value) {
            $this->assertTrue($max_value >= $amount);
        }
    }

    private function getValueFromRedisSuccess()
    {
        Redis::shouldReceive('get')->once()->with("toggle-config:json:paymentmethod")->andReturn(
            '{"omise_toggle":true,"ccw":"OMISECCW","instm":"OMISEINSTM","ew":"OMISEEW"}'
        );
    }

    private function getEmptyValueFromRedis()
    {
        Redis::shouldReceive('get')->once()->with("toggle-config:json:paymentmethod")->andReturn(null);
    }

    private function findEmptyStoreDynamo()
    {
        $mock_model = m::mock('overload:App\Models\TruemovehTogglePaymentModel')->makePartial();
        $mock_model->shouldReceive('findStore')
            ->once()
            ->andReturn([]);
    }

    private function findStoreDynamo()
    {
        $mock_model = m::mock('overload:App\Models\TruemovehTogglePaymentModel')->makePartial();
        $mock_model->shouldReceive('findStore')
            ->once()
            ->andReturn([
                [
                    'store_type' => 'trueyou',
                    'key_auth'   => 'WEOMNI_TOKEN_AUTHORIZATION',
                    'status'     => true,
                    'store_id'   => 'L950053',
                    'data'       => '{"ccw":"WEOMNICCW","instm":"WEOMNIINSTM","ew":"WEOMNIEW"}'
                ]
            ]);
    }

    /**
     * @group testGetTogglePaymentByStoreId
     **/
    public function testGetTogglePaymentByStoreId()
    {
        $this->findStoreDynamo();
        $response = PaymentMethodService::getTogglePaymentByStoreId('L950053');
        
        $this->assertEquals('WEOMNI_TOKEN_AUTHORIZATION', array_get($response, 'key_auth'));
        $this->assertEquals('L950053', array_get($response, 'store_id'));
        $this->assertEquals('trueyou', array_get($response, 'store_type'));
        $this->assertEquals('{"ccw":"WEOMNICCW","instm":"WEOMNIINSTM","ew":"WEOMNIEW"}', array_get($response, 'data'));
    }

    /**
     * @group testGetTogglePaymentStoreActive
     **/
    public function testGetTogglePaymentStoreActive()
    {
        $mock_model = m::mock('overload:App\Models\TruemovehTogglePaymentModel')->makePartial();
        $mock_model->shouldReceive('findStoreActive')
            ->once()
            ->andReturn([
                [
                    'store_type' => 'trueyou',
                    'key_auth'   => 'WEOMNI_TOKEN_AUTHORIZATION',
                    'status'     => true,
                    'store_id'   => 'L950053',
                    'data'       => '{"ccw":"WEOMNICCW","instm":"WEOMNIINSTM","ew":"WEOMNIEW"}'
                ]
            ]);
        $response = PaymentMethodService::getTogglePaymentStoreActive();
        
        $this->assertEquals('WEOMNI_TOKEN_AUTHORIZATION', array_get($response, '0.key_auth'));
        $this->assertEquals('L950053', array_get($response, '0.store_id'));
        $this->assertEquals('trueyou', array_get($response, '0.store_type'));
        $this->assertEquals('{"ccw":"WEOMNICCW","instm":"WEOMNIINSTM","ew":"WEOMNIEW"}', array_get($response, '0.data'));
    }

    /**
     * @group testGetToggleOmise
     **/
    public function testGetToggleOmiseCaseWeomniSuccess()
    {
        $this->findStoreDynamo();


        $response = PaymentMethodService::getToggleOmise('L950053');

        $this->assertArrayHasKey('omise_toggle', $response);
        $this->assertArrayHasKey('ccw', $response);
        $this->assertArrayHasKey('instm', $response);
        $this->assertArrayHasKey('ew', $response);
        $this->assertArrayHasKey('token_auth', $response);

        $this->assertEquals(false, array_get($response, 'omise_toggle'));
        $this->assertEquals(true, array_get($response, 'weomni_toggle'));
        $this->assertFalse(array_get($response, 'omise_toggle'));
        $this->assertTrue(array_get($response, 'weomni_toggle'));
        $this->assertEquals('WEOMNICCW', array_get($response, 'ccw'));
        $this->assertEquals('WEOMNIINSTM', array_get($response, 'instm'));
        $this->assertEquals('WEOMNIEW', array_get($response, 'ew'));
        $this->assertEquals('L950053', array_get($response, 'store_id'));
    }

    /**
     * @group testGetToggleOmise
     **/
    public function testGetToggleOmiseCaseWeomniEmptySuccess()
    {
        $this->getValueFromRedisSuccess();
        $this->findEmptyStoreDynamo();

        $response = PaymentMethodService::getToggleOmise('L950053');
        $this->assertArrayHasKey('omise_toggle', $response);
        $this->assertArrayHasKey('ccw', $response);
        $this->assertArrayHasKey('instm', $response);
        $this->assertArrayHasKey('ew', $response);
        $this->assertArrayHasKey('token_auth', $response);

        $this->assertEquals(true, array_get($response, 'omise_toggle'));
        $this->assertTrue(array_get($response, 'omise_toggle'));
        $this->assertEquals('OMISECCW', array_get($response, 'ccw'));
        $this->assertEquals('OMISEINSTM', array_get($response, 'instm'));
        $this->assertEquals('OMISEEW', array_get($response, 'ew'));
    }

    /**
     * @group testSwitchPaymentMethodCaseWeomni
     **/
    public function testSwitchPaymentMethodCaseWeomniSuccess()
    {
        $this->findStoreDynamo();

        $response = PaymentMethodService::switchPaymentMethod('EW', 'L950053');
        $this->assertEquals('WEOMNIEW', $response);
    }

    /**
     * @group testSwitchPaymentMethodCaseWeomni
     **/
    public function testSwitchPaymentMethodCaseWeomniEmptySuccess()
    {
        $this->getValueFromRedisSuccess();
        $this->findEmptyStoreDynamo();
        $this->getValueFromRedis2c2pCcwEmpty();

        $response = PaymentMethodService::switchPaymentMethod('CCW', 'L950053');
        $this->assertEquals('OMISECCW', $response);
    }

    private function findStoreDynamoStatusfalse()
    {
        $mock_model = m::mock('overload:App\Models\TruemovehTogglePaymentModel')->makePartial();
        $mock_model->shouldReceive('findStore')
            ->once()
            ->andReturn([
                [
                    'store_type' => 'trueyou',
                    'key_auth'   => 'WEOMNI_TOKEN_AUTHORIZATION',
                    'status'     => false,
                    'store_id'   => 'L950053',
                    'data'       => '{"ccw":"WEOMNICCW","instm":"WEOMNIINSTM","ew":"WEOMNIEW"}'
                ]
            ]);
    }

    /**
     * @group testSwitchPaymentMethodCaseWeomni
     **/
    public function testSwitchPaymentMethodCaseWeomniStatusFalseSuccess()
    {
        $this->findStoreDynamoStatusfalse();
        $response = PaymentMethodService::switchPaymentMethod('EW', 'L950053');
        $this->assertEquals('EW', $response);
    }

    /**
     * @group testGetToggleOmise
     **/
    public function testGetToggleOmiseCaseWeomniStatusFalseSuccess()
    {
        $this->findStoreDynamoStatusfalse();
        $response = PaymentMethodService::getToggleOmise('L950053');

        $this->assertEmpty($response);
    }

    private function configWlsService()
    {

        return $mock_store_payment;
    }

    private function getEmptyValueFromWeomniRedis()
    {
        Redis::shouldReceive('get')->once()->andReturn(null);
    }

    private function findWeomniInstallmentsDynamo()
    {
        $mock_model = m::mock('overload:App\Models\TruemovehWeomniInstallmentsModel')->makePartial();
        $mock_model->shouldReceive('getWeomniInstallments')
            ->once()
            ->andReturn([
                [
                    'abbreviation'             => 'bay',
                    'created_at'               => '2021-06-30 16:29:27',
                    'max'                      => 600000,
                    'min'                      => 2000,
                    'monthly_minimum_interest' => 500,
                    'name'                     => 'installment_bay',
                    'update_at'                => "null",
                ]
            ]);
    }

    /**
     * @group testGetPaymentMethods
     */
    public function testGetPaymentMethodsSuccessStatusTrue()
    {
        $wemall_store_payment_channel = [200,'{"status_code":0,"status_txt":"Success","data":{"payment_channel":[{"company":"ewallet","sof":[{"sof_code":"ATM","sof_text":"ATM","can_pay_from":0,"can_pay_to":200000},{"sof_code":"BANKTRANS","sof_text":"Bank Tranfer","can_pay_from":0,"can_pay_to":200000},{"sof_code":"IBANK","sof_text":"I Banking","can_pay_from":0,"can_pay_to":200000},{"sof_code":"CS","sof_text":"Counter Service","can_pay_from":0,"can_pay_to":30000},{"sof_code":"EW","sof_text":"Ewallet","can_pay_from":0,"can_pay_to":200000},{"sof_code":"CCW","sof_text":"Credit Card","can_pay_from":0,"can_pay_to":200001},{"sof_code":"COD","sof_text":"Cash On Delivery","can_pay_from":0,"can_pay_to":200000}]}]}}'];
        $wemall_config_installment    = [200,'{"total":6,"data":[{"bank_id":10,"bank_name":"\u0e44\u0e17\u0e22\u0e1e\u0e32\u0e13\u0e34\u0e0a\u0e22\u0e4c","abbreviation":"scb","month":[3,4,6,10],"card_type":"creditcard","tmn_name":"scb","image_url":"https:\/\/www.wemall-dev.com\/upload\/c\/bank_icon\/scb.jpeg","status":0},{"bank_id":4,"bank_name":"\u0e40\u0e1f\u0e34\u0e23\u0e4c\u0e2a\u0e0a\u0e49\u0e2d\u0e22\u0e2a\u0e4c","abbreviation":"firstchoice","month":[3,6,10,18,24],"card_type":"loancard","tmn_name":"bay","image_url":"https:\/\/www.wemall-dev.com\/upload\/iconbank\/wemall-logo-157_Logo6-Krungsri-FirstChoice.png\n","status":1},{"bank_id":1,"bank_name":"\u0e01\u0e2a\u0e34\u0e01\u0e23\u0e44\u0e17\u0e22","abbreviation":"kbank","month":[3,6,10],"card_type":"creditcard","tmn_name":"kbank","image_url":"https:\/\/www.wemall-dev.com\/upload\/iconbank\/wemall-logo-157_Logo13-KBANK.png","status":1},{"bank_id":2,"bank_name":"\u0e01\u0e23\u0e38\u0e07\u0e28\u0e23\u0e35\u0e2d\u0e22\u0e38\u0e18\u0e22\u0e32","abbreviation":"bay","month":[3,6,10],"card_type":"creditcard","tmn_name":"bay","image_url":"https:\/\/www.wemall-dev.com\/upload\/iconbank\/wemall-logo-157_Logo1-Krungsri.png\n","status":1},{"bank_id":6,"bank_name":"\u0e40\u0e04\u0e17\u0e35\u0e0b\u0e35","abbreviation":"ktc","month":[3,6,10],"card_type":"creditcard","tmn_name":"ktc","image_url":"https:\/\/www.wemall-dev.com\/upload\/iconbank\/wemall-logo-157_Logo4-KTC.jpg","status":1},{"bank_id":7,"bank_name":"\u0e01\u0e23\u0e38\u0e07\u0e40\u0e17\u0e1e","abbreviation":"bbl","month":[6,8,10],"card_type":"creditcard","tmn_name":"bbl","image_url":"https:\/\/www.wemall-dev.com\/upload\/iconbank\/wemall-logo-157_Logo13-BBL.png","status":1}],"cache":true,"code":200,"message":"success"}'];
        $tol_self_service   = m::mock('overload:App\Services\TolSelfService');
        $config_wls_service = m::mock('overload:App\Services\WlsService');

        $tol_tmp_header = [
            "Content-Type"    => "application/json",
            "x-api-key"       => env("X_API_KEY_TOL_SSV", false),
            "APIKEY"          => env("TOL_API_KEY", false),
            "Accept-Encoding" => 'gzip',
            "accept"          => "*/*",
        ];
        $tol_self_service->shouldReceive('getHeader')->with('application/json')->andReturn($tol_tmp_header);

        $this->findWeomniInstallmentsDynamo();

        $config_wls_service->shouldReceive('operateRequestAction')
            -> times(1)
            ->andReturn($wemall_store_payment_channel);
        $config_wls_service->shouldReceive('operateRequestAction')
            ->times(2)
            ->andReturn($wemall_config_installment);


        $this->getEmptyValueFromWeomniRedis();
        $this->findStoreDynamo();
        
        Redis::shouldReceive('set')->andReturn(true);

        $response = PaymentMethodService::getPaymentMethods([
            'amount'      => 2100,
            'merchant_id' => 'L941527'
        ]);

        $this->assertArrayHasKey('truemoney', $response);
        $this->assertArrayHasKey('card', $response);
        $this->assertArrayHasKey('installment', $response);
        $this->assertEquals([3], array_get($response, 'installment.0.installment_terms'));
        $this->assertEquals(2000, array_get($response, 'installment.0.min'));
        $this->assertEquals(600000, array_get($response, 'installment.0.max'));
    }

    /**
     * @group testGetTogglePaymentStoreAll
     **/
    public function testGetTogglePaymentStoreAll()
    {
        $mock_model = m::mock('overload:App\Models\TruemovehTogglePaymentModel')->makePartial();
        $mock_model->shouldReceive('getStores')
            ->once()
            ->andReturn([
                [
                    'store_type' => 'trueyou',
                    'key_auth'   => 'WEOMNI_TOKEN_AUTHORIZATION',
                    'status'     => true,
                    'store_id'   => 'L950053',
                    'data'       => '{"ccw":"WEOMNICCW","instm":"WEOMNIINSTM","ew":"WEOMNIEW"}'
                ]
            ]);
        $response = PaymentMethodService::getTogglePaymentStoreAll();

        $response = array_get($response, '0', []);
        $this->assertEquals('WEOMNI_TOKEN_AUTHORIZATION', array_get($response, 'key_auth'));
        $this->assertEquals('L950053', array_get($response, 'store_id'));
        $this->assertEquals('trueyou', array_get($response, 'store_type'));
        $this->assertEquals('{"ccw":"WEOMNICCW","instm":"WEOMNIINSTM","ew":"WEOMNIEW"}', array_get($response, 'data'));
    }

    /**
     * @group testGetWeomniInstallmentsAll
     **/
    public function testGetWeomniInstallmentsAll()
    {
        $mock_model = m::mock('overload:App\Models\TruemovehWeomniInstallmentsModel')->makePartial();
        $mock_model->shouldReceive('getWeomniInstallments')
            ->once()
            ->andReturn([
                [
                    'abbreviation'             => 'bay',
                    'created_at'               => '2021-06-30 16:29:27',
                    'max'                      => 600000,
                    'min'                      => 2000,
                    'monthly_minimum_interest' => 500,
                    'name'                     => 'installment_bay',
                    'update_at'                => "null",
                ]
            ]);
        $response = PaymentMethodService::getWeomniInstallmentsAll();
        
        $this->assertEquals('bay', array_get($response, 'bay.abbreviation'));
        $this->assertEquals(600000, array_get($response, 'bay.max'));
        $this->assertEquals(2000, array_get($response, 'bay.min'));
        $this->assertEquals(500, array_get($response, 'bay.monthly_minimum_interest'));
    }

    /**
     * @group testGetPaymentMethods
     */
    public function testGetPaymentMethodsSuccessStatusTrueCaseConfigEmpty()
    {
        $wemall_store_payment_channel = [200,'{"status_code":0,"status_txt":"Success","data":{"payment_channel":[{"company":"ewallet","sof":[{"sof_code":"ATM","sof_text":"ATM","can_pay_from":0,"can_pay_to":200000},{"sof_code":"BANKTRANS","sof_text":"Bank Tranfer","can_pay_from":0,"can_pay_to":200000},{"sof_code":"IBANK","sof_text":"I Banking","can_pay_from":0,"can_pay_to":200000},{"sof_code":"CS","sof_text":"Counter Service","can_pay_from":0,"can_pay_to":30000},{"sof_code":"EW","sof_text":"Ewallet","can_pay_from":0,"can_pay_to":200000},{"sof_code":"CCW","sof_text":"Credit Card","can_pay_from":0,"can_pay_to":200001},{"sof_code":"COD","sof_text":"Cash On Delivery","can_pay_from":0,"can_pay_to":200000}]}]}}'];
        $wemall_config_installment    = [200,'{}'];
        $tol_self_service   = m::mock('overload:App\Services\TolSelfService');
        $config_wls_service = m::mock('overload:App\Services\WlsService');

        $tol_tmp_header = [
            "Content-Type"    => "application/json",
            "x-api-key"       => env("X_API_KEY_TOL_SSV", false),
            "APIKEY"          => env("TOL_API_KEY", false),
            "Accept-Encoding" => 'gzip',
            "accept"          => "*/*",
        ];
        $tol_self_service->shouldReceive('getHeader')->with('application/json')->andReturn($tol_tmp_header);

        $this->findWeomniInstallmentsDynamo();

        $config_wls_service->shouldReceive('operateRequestAction')
            -> times(1)
            ->andReturn($wemall_store_payment_channel);
        $config_wls_service->shouldReceive('operateRequestAction')
            ->times(2)
            ->andReturn($wemall_config_installment);


        $this->getEmptyValueFromWeomniRedis();
        $this->findStoreDynamo();
        Redis::shouldReceive('set')->andReturn(true);

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        $response = PaymentMethodService::getPaymentMethods([
            'amount'      => 2100,
            'merchant_id' => 'L941527'
        ]);

        $this->assertArrayHasKey('truemoney', $response);
        $this->assertArrayHasKey('card', $response);
        $this->assertArrayNotHasKey('installment', $response);
        $this->assertEquals(200001, array_get($response, 'card.max'));
        $this->assertEquals(200000, array_get($response, 'truemoney.max'));
    }

    /**
     * @group testGetPaymentMethods
     */
    public function testGetPaymentMethodsSuccessStatusTrueCaseConfigPaymentEmpty()
    {
        $wemall_store_payment_channel = [200,'{}'];
        $wemall_config_installment    = [200,'{"total":6,"data":[{"bank_id":10,"bank_name":"\u0e44\u0e17\u0e22\u0e1e\u0e32\u0e13\u0e34\u0e0a\u0e22\u0e4c","abbreviation":"scb","month":[3,4,6,10],"card_type":"creditcard","tmn_name":"scb","image_url":"https:\/\/www.wemall-dev.com\/upload\/c\/bank_icon\/scb.jpeg","status":0},{"bank_id":4,"bank_name":"\u0e40\u0e1f\u0e34\u0e23\u0e4c\u0e2a\u0e0a\u0e49\u0e2d\u0e22\u0e2a\u0e4c","abbreviation":"firstchoice","month":[3,6,10,18,24],"card_type":"loancard","tmn_name":"bay","image_url":"https:\/\/www.wemall-dev.com\/upload\/iconbank\/wemall-logo-157_Logo6-Krungsri-FirstChoice.png\n","status":1},{"bank_id":1,"bank_name":"\u0e01\u0e2a\u0e34\u0e01\u0e23\u0e44\u0e17\u0e22","abbreviation":"kbank","month":[3,6,10],"card_type":"creditcard","tmn_name":"kbank","image_url":"https:\/\/www.wemall-dev.com\/upload\/iconbank\/wemall-logo-157_Logo13-KBANK.png","status":1},{"bank_id":2,"bank_name":"\u0e01\u0e23\u0e38\u0e07\u0e28\u0e23\u0e35\u0e2d\u0e22\u0e38\u0e18\u0e22\u0e32","abbreviation":"bay","month":[3,6,10],"card_type":"creditcard","tmn_name":"bay","image_url":"https:\/\/www.wemall-dev.com\/upload\/iconbank\/wemall-logo-157_Logo1-Krungsri.png\n","status":1},{"bank_id":6,"bank_name":"\u0e40\u0e04\u0e17\u0e35\u0e0b\u0e35","abbreviation":"ktc","month":[3,6,10],"card_type":"creditcard","tmn_name":"ktc","image_url":"https:\/\/www.wemall-dev.com\/upload\/iconbank\/wemall-logo-157_Logo4-KTC.jpg","status":1},{"bank_id":7,"bank_name":"\u0e01\u0e23\u0e38\u0e07\u0e40\u0e17\u0e1e","abbreviation":"bbl","month":[6,8,10],"card_type":"creditcard","tmn_name":"bbl","image_url":"https:\/\/www.wemall-dev.com\/upload\/iconbank\/wemall-logo-157_Logo13-BBL.png","status":1}],"cache":true,"code":200,"message":"success"}'];
        $tol_self_service   = m::mock('overload:App\Services\TolSelfService');
        $config_wls_service = m::mock('overload:App\Services\WlsService');

        $tol_tmp_header = [
            "Content-Type"    => "application/json",
            "x-api-key"       => env("X_API_KEY_TOL_SSV", false),
            "APIKEY"          => env("TOL_API_KEY", false),
            "Accept-Encoding" => 'gzip',
            "accept"          => "*/*",
        ];
        $tol_self_service->shouldReceive('getHeader')->with('application/json')->andReturn($tol_tmp_header);

        $this->findWeomniInstallmentsDynamo();

        $config_wls_service->shouldReceive('operateRequestAction')
            -> times(1)
            ->andReturn($wemall_store_payment_channel);
        $config_wls_service->shouldReceive('operateRequestAction')
            ->times(2)
            ->andReturn($wemall_config_installment);


        $this->getEmptyValueFromWeomniRedis();
        $this->findStoreDynamo();

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        $response = PaymentMethodService::getPaymentMethods([
            'amount'      => 2100,
            'merchant_id' => 'L941527'
        ]);

        $this->assertEmpty($response);
    }

    /**
     * @group testGet2c2pPaymentMethod
     **/
    public function testGet2c2pGatewaySuccess()
    {
        $mock = $this->getFixture('p2c2p_installments_config', 'payment');
        Redis::shouldReceive('get')->once()->with("p2cp2-config-installment")->andReturn(null);
        Redis::shouldReceive('set')->once()->with('p2cp2-config-installment', '[{"bank_name":"\u0e0b\u0e34\u0e15\u0e35\u0e49","abbreviation":"citi","image_url":"https:\/\/www.wemall-dev.com\/upload\/iconbank\/citi.png"},{"bank_name":"\u0e22\u0e39\u0e42\u0e2d\u0e1a\u0e35","abbreviation":"uob","image_url":"https:\/\/www.wemall-dev.com\/upload\/iconbank\/uob.png"},{"bank_name":"\u0e17\u0e35\u0e17\u0e35\u0e1a\u0e35","abbreviation":"ttb","image_url":"https:\/\/www.wemall-dev.com\/upload\/iconbank\/ttb.png"}]', 'EX', 86400)->andReturn($mock);
        $this->mockTruemovehSetting();

        $mock_cart = $this->getFixture('cart_installment_2gateway', 'cart');
        $response  = PaymentMethodService::get2c2pGateway(Arr::get($mock_cart, 'data', []));

        foreach ($response as $products) {
            foreach (Arr::get($products, 'products') as $product) {
                $this->assertArrayHasKey('installments', $product);
                $this->assertGreaterThan(0, count(Arr::get($product, 'installments')));
                foreach (Arr::get($product, 'installments') as $key => $installment) {
                    $this->assertArrayHasKey('bank_name', $installment);
                    $this->assertArrayHasKey('abbreviation', $installment);
                    $this->assertArrayHasKey('image_url', $installment);
                    $this->assertArrayHasKey('month', $installment);
                    $this->assertGreaterThan(0, count(Arr::get($installment, 'month')));
                    
                    $abbreviation = Arr::get($installment, 'abbreviation');
                    $this->assertTrue(in_array($abbreviation, ['firstchoice','kbank','bay','ktc','bbl','citi','uob','ttb'])); 
                }
            }
        }
    }

    /**
     * @group testGet2c2pPaymentMethod
     **/
    public function testGet2c2pGatewayEmptyUOBSuccess()
    {
        $mock = $this->getFixture('p2c2p_installments_config', 'payment');
        Redis::shouldReceive('get')->once()->with("p2cp2-config-installment")->andReturn(null);
        Redis::shouldReceive('set')->once()->with('p2cp2-config-installment', '[{"bank_name":"\u0e0b\u0e34\u0e15\u0e35\u0e49","abbreviation":"citi","image_url":"https:\/\/www.wemall-dev.com\/upload\/iconbank\/citi.png"},{"bank_name":"\u0e22\u0e39\u0e42\u0e2d\u0e1a\u0e35","abbreviation":"uob","image_url":"https:\/\/www.wemall-dev.com\/upload\/iconbank\/uob.png"},{"bank_name":"\u0e17\u0e35\u0e17\u0e35\u0e1a\u0e35","abbreviation":"ttb","image_url":"https:\/\/www.wemall-dev.com\/upload\/iconbank\/ttb.png"}]', 'EX', 86400)->andReturn($mock);
        $this->mockTruemovehSetting();

        $mock_cart = $this->getFixture('cart_installment_2gateway', 'cart');
        unset($mock_cart['data']['store_payment_methods']['installment'][7]);
        $response  = PaymentMethodService::get2c2pGateway(Arr::get($mock_cart, 'data', []));

        foreach ($response as $products) {
            foreach (Arr::get($products, 'products') as $product) {
                $this->assertArrayHasKey('installments', $product);
                $this->assertGreaterThan(0, count(Arr::get($product, 'installments')));
                foreach (Arr::get($product, 'installments') as $key => $installment) {
                    $this->assertArrayHasKey('bank_name', $installment);
                    $this->assertArrayHasKey('abbreviation', $installment);
                    $this->assertArrayHasKey('image_url', $installment);
                    $this->assertArrayHasKey('month', $installment);
                    $this->assertGreaterThan(0, count(Arr::get($installment, 'month')));
                    
                    $abbreviation = Arr::get($installment, 'abbreviation');
                    $this->assertTrue(in_array($abbreviation, ['firstchoice','kbank','bay','ktc','bbl','citi','ttb'])); 
                    $this->assertTrue(!in_array($abbreviation, ['uob'])); 
                }
            }
        }
    }

    /**
     * @group testGet2c2pPaymentMethod
     **/
    public function testSwitchPaymentMethodByGatewaySuccess()
    {
        $mock_input = [
            'payment_detail' => [
                'gateway' => '2c2p'
            ]
        ];

        $response = PaymentMethodService::switchPaymentMethodByGateway($mock_input, 'INSTM');

        $this->assertEquals('P2C2PINSTM', $response);
    }

    private function mockTruemovehSetting()
    {
        $mock       = $this->getFixture('p2c2p_installments_config', 'payment');
        $mock_model = m::mock('overload:App\Models\TruemovehSettingsModel')->makePartial();
        $mock_model->shouldReceive('findSettingKey')
            ->once()
            ->andReturn($mock);
    }

    private function mockTruemovehSettingEmpty()
    {
        $mock_model = m::mock('overload:App\Models\TruemovehSettingsModel')->makePartial();
        $mock_model->shouldReceive('findSettingKey')
            ->once()
            ->andReturn([]);
    }

    private function getValueFromRedis2c2pCcwSuccess()
    {
        Redis::shouldReceive('get')
            ->once()
            ->with("truestore:is_enable_by_string_true:disable_by_other_or_del_key:is_2c2p_ccw:frontend:redis_data")
            ->andReturn('true');
    }

    private function getValueFromRedis2c2pCcwEmpty()
    {
        Redis::shouldReceive('get')
            ->once()
            ->with("truestore:is_enable_by_string_true:disable_by_other_or_del_key:is_2c2p_ccw:frontend:redis_data")
            ->andReturn('false');
    }

    public function testSwitchPaymentMethodCaseP2c2pCcwSuccess()
    {
        $this->getValueFromRedisSuccess();
        $this->findEmptyStoreDynamo();
        $this->getValueFromRedis2c2pCcwSuccess();

        $response = PaymentMethodService::switchPaymentMethod('CCW', 'L950053');
        $this->assertEquals('P2C2PCCW', $response);
    }

    public function testFindCampaignTypeAndSwitchPaymentMethodIsNotMnp()
    {   
        $placeorder_data = json_decode('{"oneTimeCardToken":null,"config":{"app_id":3,"redirect_url":"https:\/\/0.0.0.0\/api\/true\/success","device":"web","in_page":1},"store_detail":[{"store_id":"L941527","seller_id":1105904,"store_user":"truemovehsim","seller_name":"Test TruemoveH Sim","store_name":"True Store","address":"123","phone":"0123456789","email":"niti.tot@ascendcorp.com","category_id":3366}],"payment_detail":{"company":"wetrust","currency_code":"THB","discount":0,"com_vat":2,"com_ship_fee":1.11,"method":"P2C2PCCW","credit_number":"555555","card_token":"tokn_test_5qjhhasrqfohfjnafmc","o_card_id":"card_test_5qjhhasr6c57prrhnnf","total":4999,"payment_amount":4999},"shipping_detail":{"company":"Custom","method":"WeMall","weight_unit":"kg","price":0},"customer_detail":{"id":0,"group_id":1,"type":"email","fax":null,"ip":"127.0.0.1","customer_note":null,"first_name":"Skyline","last_name":"R34","email":"vorapol8377@gmail.com","telephone":"0865068377"},"delivery_address":{"district_id":"1","city_id":"1","province_id":"1","country_id":209,"postcode":"10200","firstname":"Skyline","lastname":"R34","phone":"0865068377","email":"vorapol8377@gmail.com","address1":"100\/205","address2":"-","useIdForm":"true","district":"\u0e1e\u0e23\u0e30\u0e1a\u0e23\u0e21\u0e21\u0e2b\u0e32\u0e23\u0e32\u0e0a\u0e27\u0e31\u0e07","city":"\u0e1e\u0e23\u0e30\u0e19\u0e04\u0e23","province":"\u0e01\u0e23\u0e38\u0e07\u0e40\u0e17\u0e1e\u0e21\u0e2b\u0e32\u0e19\u0e04\u0e23","country":"\u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28\u0e44\u0e17\u0e22","branch":"-","company":"-","first_name":"-","last_name":"-"},"address_location":{"lat":"","lng":""},"billing_address":{"firstname":"Skyline","lastname":"R34","address1":"100\/205","address2":"-","district_id":"1","city_id":"1","province_id":"1","postcode":"10200","country_id":209,"phone":"0865068377","email":"vorapol8377@gmail.com","district":"\u0e1e\u0e23\u0e30\u0e1a\u0e23\u0e21\u0e21\u0e2b\u0e32\u0e23\u0e32\u0e0a\u0e27\u0e31\u0e07","city":"\u0e1e\u0e23\u0e30\u0e19\u0e04\u0e23","province":"\u0e01\u0e23\u0e38\u0e07\u0e40\u0e17\u0e1e\u0e21\u0e2b\u0e32\u0e19\u0e04\u0e23","country":"\u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28\u0e44\u0e17\u0e22","branch":"-","company":"-","first_name":"-","last_name":"-"},"products":[{"product_id":"L91597599","inventory_id":"3089281","quantity":"1","store_id":"L941527","sku":"3000092889","promotion":[],"cost_price":0,"compare_at_price":4999,"image_url":"https:\/\/cdn-img.wemall-dev.com\/941527\/w_1400,h_1400,c_thumb\/5e72492022d7ce7fe5da4fab66e8a665\/1846711ffe96ee4363b3257c8d285fcc.jpg","warehouse_code":"TH3846","is_freebie":false,"has_freebie":false,"freebies":[],"has_verify":0,"warehouse_sku":"200011954411","weight":20,"prepare_ship_time":3,"category_id":3368,"category_name":"\u0e42\u0e17\u0e23\u0e28\u0e31\u0e1e\u0e17\u0e4c\u0e21\u0e37\u0e2d\u0e16\u0e37\u0e2d\/\u0e42\u0e17\u0e23\u0e28\u0e31\u0e1e\u0e17\u0e4c\u0e21\u0e37\u0e2d\u0e16\u0e37\u0e2d\/\u0e2a\u0e21\u0e32\u0e23\u0e4c\u0e17\u0e42\u0e1f\u0e19","com_fee_percent":0,"title":"Oppo -  A15 New Lock KNOX","option":"\u0e2a\u0e35: Rainbow Silver ","shipprice_peritem":0,"discount":0,"flashsale":0,"campaign_fee_percent":0,"com_discount_price":0,"images":"https:\/\/cdn-img.wemall-dev.com\/941527\/w_1400,h_1400,c_thumb\/5e72492022d7ce7fe5da4fab66e8a665\/1846711ffe96ee4363b3257c8d285fcc.jpg","stock_type":"MF","meta":"","price":4999,"final_price":4999,"product_type":"product"}],"promotions":[],"summaries":[{"code":"sub_total","title":"Sub-Total","value":4999,"meta":"meta"},{"code":"total","title":"Total","value":4999,"meta":""}],"section":"wemall","channel":"TMH-Website","employee_code":""}', true);

        $response = PaymentMethodService::findCampaignTypeAndSwitchPaymentMethod($placeorder_data, 'P2C2PCCW');
        $this->assertEquals('P2C2PCCW', $response);
    }

    public function testFindCampaignTypeAndSwitchPaymentMethodIsMnp()
    {   
        $placeorder_data = json_decode('{"oneTimeCardToken":null,"config":{"app_id":3,"redirect_url":"https:\/\/0.0.0.0\/api\/true\/success","device":"web","in_page":1},"store_detail":[{"store_id":"L941527","seller_id":1105904,"store_user":"truemovehsim","seller_name":"Test TruemoveH Sim","store_name":"True Store","address":"123","phone":"0123456789","email":"niti.tot@ascendcorp.com","category_id":3366}],"payment_detail":{"company":"wetrust","currency_code":"THB","discount":0,"com_vat":2,"com_ship_fee":1.11,"method":"OMISEEW","total":49,"payment_amount":49},"shipping_detail":{"company":"Custom","method":"WeMall","weight_unit":"kg","price":0},"customer_detail":{"id":0,"group_id":1,"type":"email","fax":null,"ip":"127.0.0.1","customer_note":null,"first_name":"\u0e01\u0e34\u0e01\u0e34","last_name":"\u0e27\u0e34\u0e0a\u0e0a\u0e4c","email":"mc.qatesting01@gmail.com","telephone":"0647016834"},"delivery_address":{"district_id":"5632","city_id":"721","province_id":"59","country_id":209,"postcode":"75000","firstname":"\u0e01\u0e34\u0e01\u0e34","lastname":"\u0e27\u0e34\u0e0a\u0e0a\u0e4c","address1":"133\/51 \u0e0b.\u0e1a\u0e32\u0e07\u0e41\u0e01\u0e49\u0e27 \u0e16.\u0e17\u0e32\u0e07\u0e40\u0e02\u0e49\u0e32\u0e40\u0e21\u0e37\u0e2d\u0e07 \u0e15.\u0e41\u0e21\u0e48\u0e01\u0e25\u0e2d\u0e07","address2":"-","phone":"0647016834","email":"mc.qatesting01@gmail.com","district":"\u0e41\u0e21\u0e48\u0e01\u0e25\u0e2d\u0e07","city":"\u0e40\u0e21\u0e37\u0e2d\u0e07\u0e2a\u0e21\u0e38\u0e17\u0e23\u0e2a\u0e07\u0e04\u0e23\u0e32\u0e21","province":"\u0e2a\u0e21\u0e38\u0e17\u0e23\u0e2a\u0e07\u0e04\u0e23\u0e32\u0e21","country":"\u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28\u0e44\u0e17\u0e22","branch":"-","company":"-","first_name":"-","last_name":"-"},"address_location":{"lat":"","lng":""},"billing_address":{"firstname":"\u0e01\u0e34\u0e01\u0e34","lastname":"\u0e27\u0e34\u0e0a\u0e0a\u0e4c","address1":"133\/51 \u0e0b.\u0e1a\u0e32\u0e07\u0e41\u0e01\u0e49\u0e27 \u0e16.\u0e17\u0e32\u0e07\u0e40\u0e02\u0e49\u0e32\u0e40\u0e21\u0e37\u0e2d\u0e07 \u0e15.\u0e41\u0e21\u0e48\u0e01\u0e25\u0e2d\u0e07","address2":"-","district_id":"5632","city_id":"721","province_id":"59","postcode":"75000","country_id":209,"phone":"0647016834","email":"mc.qatesting01@gmail.com","district":"\u0e41\u0e21\u0e48\u0e01\u0e25\u0e2d\u0e07","city":"\u0e40\u0e21\u0e37\u0e2d\u0e07\u0e2a\u0e21\u0e38\u0e17\u0e23\u0e2a\u0e07\u0e04\u0e23\u0e32\u0e21","province":"\u0e2a\u0e21\u0e38\u0e17\u0e23\u0e2a\u0e07\u0e04\u0e23\u0e32\u0e21","country":"\u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28\u0e44\u0e17\u0e22","branch":"-","company":"-","first_name":"-","last_name":"-"},"products":[{"product_id":"L91587044","inventory_id":"3078153","quantity":"1","store_id":"L941527","sim_meta":[{"number":"0956737814","sim_type":"postpaid","product_info":{"product_id":"91587044","product_type":"sim","store_id":"L941527","inventory_id":"3078153"},"price_plan":{"id":"9501","description":"5G Ultra Max Speed 1199","name":"5G Ultra Max Speed 1199","code":"SMRTFP76","sim_type":"postpaid","price":"1199","recommended":"0","proposition_nas_code":"0085779","proposition_term_short":"\u0e1e\u0e23\u0e49\u0e2d\u0e21\u0e41\u0e1e\u0e47\u0e01\u0e40\u0e01\u0e08 5G Ultra Max Speed (\u0e2a\u0e31\u0e0d\u0e0d\u0e32 12 \u0e40\u0e14\u0e37\u0e2d\u0e19)","campaign_code":"AN231","proposition_amdoc":"RMV000000022045","company_code":"RM"},"is_verify":"true","thai_id":"1620700063041","birth_date":"01\/11\/2551","user_information":{"thai_id":"1620700063041","birth_date":"15\/09\/2453","iden_type":"I","gender":"2","first_name":"\u0e01\u0e34\u0e01\u0e34","last_name":"\u0e27\u0e34\u0e0a\u0e0a\u0e4c","address":"133\/51 \u0e0b.\u0e1a\u0e32\u0e07\u0e41\u0e01\u0e49\u0e27 \u0e16.\u0e17\u0e32\u0e07\u0e40\u0e02\u0e49\u0e32\u0e40\u0e21\u0e37\u0e2d\u0e07 \u0e15.\u0e41\u0e21\u0e48\u0e01\u0e25\u0e2d\u0e07","province":"\u0e2a\u0e21\u0e38\u0e17\u0e23\u0e2a\u0e07\u0e04\u0e23\u0e32\u0e21","district":"\u0e40\u0e21\u0e37\u0e2d\u0e07\u0e2a\u0e21\u0e38\u0e17\u0e23\u0e2a\u0e07\u0e04\u0e23\u0e32\u0e21","sub_district":"\u0e41\u0e21\u0e48\u0e01\u0e25\u0e2d\u0e07","zip_code":"75000"},"sim_image":"https:\/\/www.wemall-dev.com\/upload\/c\/qa_test\/TruemoveH\/bannerweb1199.png","campaign_type":"mnp","campaign_mnp_type":"one_step","birth_time":"12:45","timezone":"+0700","correlation_id":"4cc8414d-2bca-4053-9e93-804ef8dc672b","dealer_code":"80000084","berfuntong":{"package_code":"post299"}}],"sku":"3000071590","promotion":[],"cost_price":0,"compare_at_price":49,"image_url":"https:\/\/cdn-img.wemall-dev.com\/941527\/w_1400,h_1400,c_thumb\/ae3037ac997f03a20ecef66efab9b330\/bannerweba.png","warehouse_code":"TH3846","is_freebie":false,"has_freebie":false,"freebies":[],"has_verify":0,"warehouse_sku":"200011189411","weight":0.01,"prepare_ship_time":3,"category_id":1972,"category_name":"\u0e0b\u0e34\u0e21","com_fee_percent":0,"title":"\u0e40\u0e1a\u0e2d\u0e23\u0e4c\u0e1f\u0e31\u0e19\u0e18\u0e07 (\u0e41\u0e1e\u0e47\u0e01\u0e40\u0e01\u0e08\u0e23\u0e32\u0e22\u0e40\u0e14\u0e37\u0e2d\u0e19)","option":"","shipprice_peritem":0,"discount":0,"flashsale":0,"campaign_fee_percent":0,"com_discount_price":0,"images":"https:\/\/cdn-img.wemall-dev.com\/941527\/w_1400,h_1400,c_thumb\/ae3037ac997f03a20ecef66efab9b330\/bannerweba.png","stock_type":"MF","meta":"","price":49,"final_price":49,"product_type":"postpaid"}],"promotions":[],"summaries":[{"code":"sub_total","title":"Sub-Total","value":49,"meta":"meta"},{"code":"total","title":"Total","value":49,"meta":""}],"section":"wemall","channel":"TMH-Website","employee_code":""}', true);

        $response = PaymentMethodService::findCampaignTypeAndSwitchPaymentMethod($placeorder_data, 'OMISECCW');
        $this->assertEquals('OMISECCW', $response);
    }
}
