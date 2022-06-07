<?php

namespace Tests\Unit;

use Illuminate\Http\Request as LaravelRequest;
use Tests\TestCase;
use App\Facades\OrderService;
use Mockery as m;
use Illuminate\Support\Arr;

class OrderServiceTest extends TestCase
{
    /**
     * @group testPlaceOrderOffline
     * @group WLSFT-18628
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testPlaceOrderOfflineSuccessWithPlaceOrder()
    {
        $input   = json_decode('{"form":{"msisdn":"0850000994","ref_code":"08500009994000","firstname":"John","lastname":"Doe","birthdate":"07032540","birthtime":"01:01","timezone":"+0700","selected_msisdn":"0964234424","product_id":"L91587044","inventory_id":"3078153","store_id":"941527","companyCode":"RM"},"pricePlan":{"id":"9501","name":"Funtong 1199","code":"SMRTFP76","description":"Funtong 1199","sim_type":"postpaid","price":"1199","recommended":"1","proposition_nas_code":"0085779","proposition_term_short":"Funtong SIM Only 1199","campaign_code":"AN231"},"shopOffline":{"saleCode":"39004848","shopCode":"80000560","saleName":{"th":"\u0e19\u0e32\u0e22 \u0e2d\u0e14\u0e34\u0e28\u0e31\u0e01\u0e14\u0e34\u0e4c \u0e44\u0e15\u0e23\u0e40\u0e2a\u0e19\u0e35\u0e22\u0e4c","en":null},"shopName":{"en":"True Shop Central Plaza Westgate 01","th":"True Shop Central Plaza Westgate 01"}},"id":{"id":"5453707659698","correlationId":"dc0715da-ed7a-4231-ae6a-e1e57726c79e"}}', 1);
        $request = new LaravelRequest();
        $request->setMethod(strtoupper("post"));
        $request->replace($input);

        $mock_wls_service = m::mock('overload:App\Services\WlsService');

        $mock_prepare_order_with = json_decode('{"user_id":0,"user_type":"guest","first_name":"John","last_name":"Doe","mobile":"0850000994","email":"vhora@wemall.com","quantity":1,"inventory_id":"3078153","product_id":"L91587044","store_id":"L941527","device":"web","app_id":"3","channel":"TMH-Website","redirect_url":false,"section":"wemall","payment_method":"STOREOFFLINE"}', 1);
        $mock_prepare_order_response = json_decode('{"oneTimeCardToken":"","address_location":{"lat":"","lng":""},"employee_code":"","ignore_address":"true","config":{"app_id":3,"redirect_url":"https:\/\/pre-store.truecorp.co.th\/api\/true\/success","device":"native","in_page":0},"store_detail":[{"store_id":"L941527","seller_id":1105904,"store_user":"truemovehsim","seller_name":"Test TruemoveH Sim","store_name":"TruemoveH Sim","address":"6\/49 \u0e16.\u0e01\u0e33\u0e41\u0e1e\u0e07\u0e40\u0e1e\u0e0a\u0e23 6 \u0e2a\u0e38\u0e40\u0e17\u0e1e \u0e40\u0e21\u0e37\u0e2d\u0e07\u0e40\u0e0a\u0e35\u0e22\u0e07\u0e43\u0e2b\u0e21\u0e48 \u0e40\u0e0a\u0e35\u0e22\u0e07\u0e43\u0e2b\u0e21\u0e48 10900 \u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28\u0e44\u0e17\u0e22","phone":"0647016834","email":"niti.tot@ascendcorp.com","category_id":3366,"corporate_account":1,"seller_wallet_token":""}],"shipping_detail":{"company":"Custom","method":"WeMall","weight_unit":"kg","price":0},"customer_detail":{"id":0,"group_id":1,"type":"guest","first_name":"John","last_name":"Doe","email":"vhora@wemall.com","telephone":"0850000994","fax":"","ip":"127.0.0.1","customer_note":""},"delivery_address":{"firstname":"John","lastname":"Doe","company":"","address1":"","address2":"","district_id":"","district":"","city_id":"","city":"","province_id":"","province":"","postcode":"","country":"","country_id":"","phone":"0850000994","email":"vhora@wemall.com"},"billing_address":{"firstname":"John","lastname":"Doe","company":"","address1":"","address2":"","district_id":"","district":"","city_id":"","city":"","province_id":"","province":"","postcode":"","country":"","country_id":"","phone":"0850000994","email":"vhora@wemall.com"},"products":[{"product_id":"L91587044","inventory_id":3078153,"sku":"3000071590","category_id":1972,"category_name":"\u0e0b\u0e34\u0e21","com_fee_percent":0,"title":"Happy Family Sim","option":"","price":49,"cost_price":0,"compare_at_price":0,"shipprice_peritem":0,"quantity":1,"weight":0.01,"discount":0,"final_price":49,"flashsale":0,"prepare_ship_time":3,"promotion":[],"image_url":"https:\/\/res.wemall-dev.com\/941527\/w_70,h_70,c_thumb\/ed19dc50201c92342fa9c5961a832fb0\/familysim.jpg","meta":"","campaign_fee_percent":0,"com_discount_price":0,"stock_type":"MF","store_id":"L941527","warehouse_code":"TH3846","warehouse_sku":"","has_verify":0,"is_freebie":false,"has_freebie":false,"freebies":[],"product_type":"sim","sim_meta":[{"number":"0964234424","sum":"","name":"Happy Family Sim","sim_type":"postpaid","advance_payment":"","product_info":{"product_id":"91587044","title":"Happy Family Sim","image":"https:\/\/res.wemall-dev.com\/941527\/w_70,h_70,c_thumb\/ed19dc50201c92342fa9c5961a832fb0\/familysim.jpg","price":"1199","product_type":"sim","sim_type":"postpaid","propo_code":"0085779","special_url":"https:\/\/alpha-www.wemall-dev.com\/tmvh\/sims\/90171217","status":"active","store_id":"L941527","inventory_id":3078153,"proposition_description":"Funtong SIM Only 1199","proposition_baseline":"0085779","price_plan_description":"Funtong 1199"},"is_verify":"false","thai_id":"5453707659698","verify_time":"","price_plan":{"id":"9501","name":"Funtong 1199","code":"SMRTFP76","description":"Funtong 1199","sim_type":"postpaid","price":"1199","recommended":"1","proposition_nas_code":"0085779","proposition_term_short":"Funtong SIM Only 1199","campaign_code":"AN231"},"campaign_type":"vhora"}]}],"payment_detail":{"company":"wetrust","method":"STOREOFFLINE","total":49,"currency_code":"THB","payment_amount":49,"discount":0,"com_vat":0,"com_ship_fee":0,"credit_number":""},"promotions":[],"summaries":[{"code":"sub_total","title":"Sub-Total","value":49,"meta":"meta"},{"code":"total","title":"Total","value":49,"meta":""}],"point_idcard":null,"section":"wemall","channel":"TMH-Website","seller_detail":{"sale_code":"39004848","shop_code":"80000560","shop_name":"True Shop Central Plaza Westgate 01","sale_name_th":"\u0e19\u0e32\u0e22 \u0e2d\u0e14\u0e34\u0e28\u0e31\u0e01\u0e14\u0e34\u0e4c \u0e44\u0e15\u0e23\u0e40\u0e2a\u0e19\u0e35\u0e22\u0e4c","sale_name_en":null,"meta":"{\"saleCode\":\"39004848\",\"shopCode\":\"80000560\",\"saleName\":{\"th\":\"\\u0e19\\u0e32\\u0e22 \\u0e2d\\u0e14\\u0e34\\u0e28\\u0e31\\u0e01\\u0e14\\u0e34\\u0e4c \\u0e44\\u0e15\\u0e23\\u0e40\\u0e2a\\u0e19\\u0e35\\u0e22\\u0e4c\",\"en\":null},\"shopName\":{\"en\":\"True Shop Central Plaza Westgate 01\",\"th\":\"True Shop Central Plaza Westgate 01\"}}"}}', 1);
        $mock_wls_service->shouldReceive('postPreparePlaceOrder')->with('POST', $mock_prepare_order_with)->andReturn($mock_prepare_order_response);

        $mock_order_response = [
            0 => 200,
            1 => '{"id":11650453,"secureKey":"800011650453","is_redirect":false,"redirectUrl":"https://order.wls-dev.com/v1/payment/foreground?payment_id=9191001891722","payment_id":"9191001891722","cybs_detail":null,"code":200,"message":"success"}'
        ];
        $mock_wls_service->shouldReceive('postPlaceorderWls')->with('', 'POST', $request, [])->andReturn($mock_order_response);


        $expected = json_decode($mock_order_response[1], 1);
        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        $response = OrderService::placeOrderOffline($request);
        $this->assertEquals($expected, $response);
    }

    /**
     * @group testPlaceOrderOffline
     * @group WLSFT-18628
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testPlaceOrderOfflineSuccessWithoutPlaceOrder()
    {
        $input   = json_decode('{"form":{"msisdn":"0850000994","ref_code":"08500009994000","firstname":"John","lastname":"Doe","birthdate":"07032540","birthtime":"01:01","timezone":"+0700","selected_msisdn":"0964234424","product_id":"L91587044","inventory_id":"3078153","store_id":"941527","companyCode":"RM"},"pricePlan":{"id":"9501","name":"Funtong 1199","code":"SMRTFP76","description":"Funtong 1199","sim_type":"postpaid","price":"1199","recommended":"1","proposition_nas_code":"0085779","proposition_term_short":"Funtong SIM Only 1199","campaign_code":"AN231"},"shopOffline":{"saleCode":"39004848","shopCode":"80000560","saleName":{"th":"\u0e19\u0e32\u0e22 \u0e2d\u0e14\u0e34\u0e28\u0e31\u0e01\u0e14\u0e34\u0e4c \u0e44\u0e15\u0e23\u0e40\u0e2a\u0e19\u0e35\u0e22\u0e4c","en":null},"shopName":{"en":"True Shop Central Plaza Westgate 01","th":"True Shop Central Plaza Westgate 01"}},"id":{"id":"5453707659698","correlationId":"dc0715da-ed7a-4231-ae6a-e1e57726c79e"}}', 1);
        $request = new LaravelRequest();
        $request->setMethod(strtoupper("post"));
        $request->replace($input);

        $mock_wls_service = m::mock('overload:App\Services\WlsService');

        $mock_prepare_order_with = json_decode('{"user_id":0,"user_type":"guest","first_name":"John","last_name":"Doe","mobile":"0850000994","email":"vhora@wemall.com","quantity":1,"inventory_id":"3078153","product_id":"L91587044","store_id":"L941527","device":"web","app_id":"3","channel":"TMH-Website","redirect_url":false,"section":"wemall","payment_method":"STOREOFFLINE"}', 1);
        $mock_prepare_order_response = json_decode('{"oneTimeCardToken":"","address_location":{"lat":"","lng":""},"employee_code":"","ignore_address":"true","config":{"app_id":3,"redirect_url":"https:\/\/pre-store.truecorp.co.th\/api\/true\/success","device":"native","in_page":0},"store_detail":[{"store_id":"L941527","seller_id":1105904,"store_user":"truemovehsim","seller_name":"Test TruemoveH Sim","store_name":"TruemoveH Sim","address":"6\/49 \u0e16.\u0e01\u0e33\u0e41\u0e1e\u0e07\u0e40\u0e1e\u0e0a\u0e23 6 \u0e2a\u0e38\u0e40\u0e17\u0e1e \u0e40\u0e21\u0e37\u0e2d\u0e07\u0e40\u0e0a\u0e35\u0e22\u0e07\u0e43\u0e2b\u0e21\u0e48 \u0e40\u0e0a\u0e35\u0e22\u0e07\u0e43\u0e2b\u0e21\u0e48 10900 \u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28\u0e44\u0e17\u0e22","phone":"0647016834","email":"niti.tot@ascendcorp.com","category_id":3366,"corporate_account":1,"seller_wallet_token":""}],"shipping_detail":{"company":"Custom","method":"WeMall","weight_unit":"kg","price":0},"customer_detail":{"id":0,"group_id":1,"type":"guest","first_name":"John","last_name":"Doe","email":"vhora@wemall.com","telephone":"0850000994","fax":"","ip":"127.0.0.1","customer_note":""},"delivery_address":{"firstname":"John","lastname":"Doe","company":"","address1":"","address2":"","district_id":"","district":"","city_id":"","city":"","province_id":"","province":"","postcode":"","country":"","country_id":"","phone":"0850000994","email":"vhora@wemall.com"},"billing_address":{"firstname":"John","lastname":"Doe","company":"","address1":"","address2":"","district_id":"","district":"","city_id":"","city":"","province_id":"","province":"","postcode":"","country":"","country_id":"","phone":"0850000994","email":"vhora@wemall.com"},"products":[{"product_id":"L91587044","inventory_id":3078153,"sku":"3000071590","category_id":1972,"category_name":"\u0e0b\u0e34\u0e21","com_fee_percent":0,"title":"Happy Family Sim","option":"","price":49,"cost_price":0,"compare_at_price":0,"shipprice_peritem":0,"quantity":1,"weight":0.01,"discount":0,"final_price":49,"flashsale":0,"prepare_ship_time":3,"promotion":[],"image_url":"https:\/\/res.wemall-dev.com\/941527\/w_70,h_70,c_thumb\/ed19dc50201c92342fa9c5961a832fb0\/familysim.jpg","meta":"","campaign_fee_percent":0,"com_discount_price":0,"stock_type":"MF","store_id":"L941527","warehouse_code":"TH3846","warehouse_sku":"","has_verify":0,"is_freebie":false,"has_freebie":false,"freebies":[],"product_type":"sim","sim_meta":[{"number":"0964234424","sum":"","name":"Happy Family Sim","sim_type":"postpaid","advance_payment":"","product_info":{"product_id":"91587044","title":"Happy Family Sim","image":"https:\/\/res.wemall-dev.com\/941527\/w_70,h_70,c_thumb\/ed19dc50201c92342fa9c5961a832fb0\/familysim.jpg","price":"1199","product_type":"sim","sim_type":"postpaid","propo_code":"0085779","special_url":"https:\/\/alpha-www.wemall-dev.com\/tmvh\/sims\/90171217","status":"active","store_id":"L941527","inventory_id":3078153,"proposition_description":"Funtong SIM Only 1199","proposition_baseline":"0085779","price_plan_description":"Funtong 1199"},"is_verify":"false","thai_id":"5453707659698","verify_time":"","price_plan":{"id":"9501","name":"Funtong 1199","code":"SMRTFP76","description":"Funtong 1199","sim_type":"postpaid","price":"1199","recommended":"1","proposition_nas_code":"0085779","proposition_term_short":"Funtong SIM Only 1199","campaign_code":"AN231"},"campaign_type":"vhora"}]}],"payment_detail":{"company":"wetrust","method":"STOREOFFLINE","total":49,"currency_code":"THB","payment_amount":49,"discount":0,"com_vat":0,"com_ship_fee":0,"credit_number":""},"promotions":[],"summaries":[{"code":"sub_total","title":"Sub-Total","value":49,"meta":"meta"},{"code":"total","title":"Total","value":49,"meta":""}],"point_idcard":null,"section":"wemall","channel":"TMH-Website","seller_detail":{"sale_code":"39004848","shop_code":"80000560","shop_name":"True Shop Central Plaza Westgate 01","sale_name_th":"\u0e19\u0e32\u0e22 \u0e2d\u0e14\u0e34\u0e28\u0e31\u0e01\u0e14\u0e34\u0e4c \u0e44\u0e15\u0e23\u0e40\u0e2a\u0e19\u0e35\u0e22\u0e4c","sale_name_en":null,"meta":"{\"saleCode\":\"39004848\",\"shopCode\":\"80000560\",\"saleName\":{\"th\":\"\\u0e19\\u0e32\\u0e22 \\u0e2d\\u0e14\\u0e34\\u0e28\\u0e31\\u0e01\\u0e14\\u0e34\\u0e4c \\u0e44\\u0e15\\u0e23\\u0e40\\u0e2a\\u0e19\\u0e35\\u0e22\\u0e4c\",\"en\":null},\"shopName\":{\"en\":\"True Shop Central Plaza Westgate 01\",\"th\":\"True Shop Central Plaza Westgate 01\"}}"}}', 1);
        $mock_wls_service->shouldReceive('postPreparePlaceOrder')->with('POST', $mock_prepare_order_with)->andReturn($mock_prepare_order_response);

        $mock_order_response = [
            0 => 404,
            1 => '{}'
        ];
        $mock_wls_service->shouldReceive('postPlaceorderWls')->with('', 'POST', $request, [])->andReturn($mock_order_response);


        $expected = [
            'offline_skip' => 1,
            'redirect_url' => false,
            'secureKey' => 'dc0715da-ed7a-4231-ae6a-e1e57726c79e'
        ];
        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        $response = OrderService::placeOrderOffline($request);
        $this->assertEquals($expected, $response);
    }

    /**
     * @group testPlaceOrderOffline
     * @group WLSFT-18628
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testPlaceOrderOfflineSuccessErrorPrepare()
    {
        $input   = json_decode('{"form":{"msisdn":"0850000994","ref_code":"08500009994000","firstname":"John","lastname":"Doe","birthdate":"07032540","birthtime":"01:01","timezone":"+0700","selected_msisdn":"0964234424","product_id":"L91587044","inventory_id":"3078153","store_id":"941527","companyCode":"RM"},"pricePlan":{"id":"9501","name":"Funtong 1199","code":"SMRTFP76","description":"Funtong 1199","sim_type":"postpaid","price":"1199","recommended":"1","proposition_nas_code":"0085779","proposition_term_short":"Funtong SIM Only 1199","campaign_code":"AN231"},"shopOffline":{"saleCode":"39004848","shopCode":"80000560","saleName":{"th":"\u0e19\u0e32\u0e22 \u0e2d\u0e14\u0e34\u0e28\u0e31\u0e01\u0e14\u0e34\u0e4c \u0e44\u0e15\u0e23\u0e40\u0e2a\u0e19\u0e35\u0e22\u0e4c","en":null},"shopName":{"en":"True Shop Central Plaza Westgate 01","th":"True Shop Central Plaza Westgate 01"}},"id":{"id":"5453707659698","correlationId":"dc0715da-ed7a-4231-ae6a-e1e57726c79e"}}', 1);
        $request = new LaravelRequest();
        $request->setMethod(strtoupper("post"));
        $request->replace($input);

        $mock_wls_service = m::mock('overload:App\Services\WlsService');

        $mock_prepare_order_with = json_decode('{"user_id":0,"user_type":"guest","first_name":"John","last_name":"Doe","mobile":"0850000994","email":"vhora@wemall.com","quantity":1,"inventory_id":"3078153","product_id":"L91587044","store_id":"L941527","device":"web","app_id":"3","channel":"TMH-Website","redirect_url":false,"section":"wemall","payment_method":"STOREOFFLINE"}', 1);
        $mock_wls_service->shouldReceive('postPreparePlaceOrder')->with('POST', $mock_prepare_order_with)->andReturn([]);

        $mock_order_response = [
            0 => 404,
            1 => '{}'
        ];
        $mock_wls_service->shouldReceive('postPlaceorderWls')->with('', 'POST', $request, [])->andReturn($mock_order_response);


        $expected = [
            'offline_skip' => 1,
            'redirect_url' => false,
            'secureKey' => 'dc0715da-ed7a-4231-ae6a-e1e57726c79e'
        ];
        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        $response = OrderService::placeOrderOffline($request);
        $this->assertEquals($expected, $response);
    }

    /**
     * @group testOcrConsent
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testCheckOcrConsentSimMetaIsConsent()
    {
        $answers_ekyc  = $this->getFixture('answers_ekyc');
        $creditok_data = $this->getFixture('ekyc_ocr_consent');
        
        $mock = m::mock('alias:App\Services\AwsService');
        $mock->shouldReceive('uploadS3')->andReturn(true);

        $response = OrderService::checkOcrConsentSimMeta($answers_ekyc, $creditok_data);
        $this->assertEquals(true, Arr::get($response, 'answers.placeorder_request.ocr_consent'));
    }

    /**
     * @group testOcrConsent
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testCheckOcrConsentSimMetaIsAlreadyConsent()
    {
        $answers_ekyc  = $this->getFixture('answers_ekyc');
        $creditok_data = $this->getFixture('ekyc_ocr_consent');
        $creditok_data['answers'][7]['value'] = 'already_consent';
        
        $mock = m::mock('alias:App\Services\AwsService');
        $mock->shouldReceive('uploadS3')->andReturn(true);

        $response = OrderService::checkOcrConsentSimMeta($answers_ekyc, $creditok_data);
        $this->assertEquals(true, Arr::get($response, 'answers.placeorder_request.ocr_consent'));
    }

    /**
     * @group testOcrConsent
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testCheckOcrConsentSimMetaSuccessNotConsnet()
    {
        $answers_ekyc  = $this->getFixture('answers_ekyc');
        $creditok_data = $this->getFixture('ekyc_ocr_consent');
        $creditok_data['answers'][7]['value'] = 'not_consent';

        $response = OrderService::checkOcrConsentSimMeta($answers_ekyc, $creditok_data);
        $this->assertEquals(false, Arr::get($response, 'answers.placeorder_request.ocr_consent'));
    }

    /**
     * @group testOcrConsent
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testCheckOcrConsentSimMetaIsConsentError()
    {
        $answers_ekyc  = $this->getFixture('answers_ekyc');
        $creditok_data = $this->getFixture('ekyc_ocr_consent');
        
        $mock = m::mock('alias:App\Services\AwsService');
        $mock->shouldReceive('uploadS3')->andThrow(new \Exception('Internal Server Error'));
        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        $response = OrderService::checkOcrConsentSimMeta($answers_ekyc, $creditok_data);
        $this->assertEquals(true, Arr::get($response, 'answers.placeorder_request.ocr_consent'));
    }

    /**
     * @group testOcrConsent
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testSetOcrConsentInfoEmpty()
    {
        $creditok_data = $this->getFixture('ekyc_ocr_consent');
        $creditok_data['answers'][7]['value'] = 'not_consent';
        
        $mock = m::mock('alias:App\Services\AwsService');
        $mock->shouldReceive('uploadS3')->andReturn(true);

        $response = OrderService::setOcrConsentInfo($creditok_data);
        $this->assertEmpty($response);
    }

    /**
     * @group testOcrConsent
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testSetOcrConsentInfoHaveData()
    {
        $creditok_data = $this->getFixture('ekyc_ocr_consent');
        
        $mock = m::mock('alias:App\Services\AwsService');
        $mock->shouldReceive('uploadS3')->andReturn(true);

        $response        = OrderService::setOcrConsentInfo($creditok_data);
        $ocr_information = Arr::get($response, 'ocr_information');

        $this->checkNodeNotNull($ocr_information);

        $this->assertArrayHasKey('laser_id', $ocr_information);
        $this->assertArrayHasKey('issue_date', $ocr_information);
        $this->assertArrayHasKey('laser_id', $ocr_information);
        $this->assertArrayHasKey('birth_date', $ocr_information);
        $this->assertArrayHasKey('expiry_date', $ocr_information);
        $this->assertArrayHasKey('issue_date', $ocr_information);
        $this->assertArrayHasKey('kyc_card_face', $response);
        $this->assertArrayHasKey('kyc_card_image', $response);
        $this->assertArrayHasKey('kyc_image_liveness', $response);

        $this->assertNotEmpty($response);
    }

    /**
     * @group testOcrConsent
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testSetOcrConsentInfoAlreadyConsentHaveData()
    {
        $creditok_data = $this->getFixture('ekyc_ocr_consent');
        $creditok_data['answers'][7]['value'] = 'already_consent';
        
        $mock = m::mock('alias:App\Services\AwsService');
        $mock->shouldReceive('uploadS3')->andReturn(true);

        $response        = OrderService::setOcrConsentInfo($creditok_data);
        $ocr_information = Arr::get($response, 'ocr_information');

        $this->checkNodeNotNull($ocr_information);

        $this->assertArrayHasKey('laser_id', $ocr_information);
        $this->assertArrayHasKey('issue_date', $ocr_information);
        $this->assertArrayHasKey('laser_id', $ocr_information);
        $this->assertArrayHasKey('birth_date', $ocr_information);
        $this->assertArrayHasKey('expiry_date', $ocr_information);
        $this->assertArrayHasKey('issue_date', $ocr_information);
        $this->assertArrayHasKey('kyc_card_face', $response);
        $this->assertArrayHasKey('kyc_card_image', $response);
        $this->assertArrayHasKey('kyc_image_liveness', $response);

        $this->assertNotEmpty($response);
    }

    /**
     * @group testOcrConsent
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testCheckSimOnlyEppOcrConsentSuccess()
    {
        $data      = $this->getFixture('placeorder_sim_only_epp');
        $ekyc_data = $this->getFixture('ekyc_get_status');
        
        $mock = m::mock('alias:App\Services\AwsService');
        $mock->shouldReceive('uploadS3')->andReturn(true);

        $mock = m::mock('alias:App\Services\CreditokService');
        $mock->shouldReceive('getStatus')->andReturn($ekyc_data);

        $response = OrderService::checkSimOnlyEppOcrConsent($data);
        
        $this->assertNotEmpty($response);

        $sim_meta        = Arr::get($response, 'products.0.sim_meta.0');
        $ocr_information = Arr::get($response, 'products.0.sim_meta.0.ocr_information');

        $this->checkNodeNotNull($ocr_information);
        $this->assertArrayHasKey('laser_id', $ocr_information);
        $this->assertArrayHasKey('issue_date', $ocr_information);
        $this->assertArrayHasKey('laser_id', $ocr_information);
        $this->assertArrayHasKey('birth_date', $ocr_information);
        $this->assertArrayHasKey('expiry_date', $ocr_information);
        $this->assertArrayHasKey('issue_date', $ocr_information);
        $this->assertArrayHasKey('kyc_card_face', $sim_meta);
        $this->assertArrayHasKey('kyc_card_image', $sim_meta);
        $this->assertArrayHasKey('kyc_image_liveness', $sim_meta);

        $this->assertArrayHasKey('ocr_consent', $response);
        $this->assertTrue(Arr::get($response, 'ocr_consent'));
    }

    /**
     * @group testOcrConsent
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testCheckSimOnlyEppOcrConsentAlreadyConsentSuccess()
    {
        $data      = $this->getFixture('placeorder_sim_only_epp');
        $ekyc_data = $this->getFixture('ekyc_get_status');

        Arr::set($ekyc_data, '1.answers.7.value', 'already_consent');

        $mock = m::mock('alias:App\Services\AwsService');
        $mock->shouldReceive('uploadS3')->andReturn(true);

        $mock = m::mock('alias:App\Services\CreditokService');
        $mock->shouldReceive('getStatus')->andReturn($ekyc_data);

        $response = OrderService::checkSimOnlyEppOcrConsent($data);

        $this->assertNotEmpty($response);

        $sim_meta        = Arr::get($response, 'products.0.sim_meta.0');
        $ocr_information = Arr::get($response, 'products.0.sim_meta.0.ocr_information');

        $this->checkNodeNotNull($ocr_information);
        $this->assertArrayHasKey('laser_id', $ocr_information);
        $this->assertArrayHasKey('issue_date', $ocr_information);
        $this->assertArrayHasKey('laser_id', $ocr_information);
        $this->assertArrayHasKey('birth_date', $ocr_information);
        $this->assertArrayHasKey('expiry_date', $ocr_information);
        $this->assertArrayHasKey('issue_date', $ocr_information);
        $this->assertArrayHasKey('kyc_card_face', $sim_meta);
        $this->assertArrayHasKey('kyc_card_image', $sim_meta);
        $this->assertArrayHasKey('kyc_image_liveness', $sim_meta);
        $this->assertArrayHasKey('ocr_consent', $response);
        $this->assertTrue(Arr::get($response, 'ocr_consent'));
    }

    /**
     * @group testOcrConsent
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testCheckSimOnlyEppOcrConsentAlreadyConsentButDopaFalse()
    {
        $data      = $this->getFixture('placeorder_sim_only_epp');
        $ekyc_data = $this->getFixture('ekyc_get_status');

        Arr::set($ekyc_data, '1.answers.7.value', 'already_consent');
        Arr::set($ekyc_data, '1.answers.6.value', false);

        $mock = m::mock('alias:App\Services\AwsService');
        $mock->shouldReceive('uploadS3')->andReturn(true);

        $mock = m::mock('alias:App\Services\CreditokService');
        $mock->shouldReceive('getStatus')->andReturn($ekyc_data);

        $response = OrderService::checkSimOnlyEppOcrConsent($data);

        $this->assertNotEmpty($response);

        $ocr_information = Arr::get($response, 'products.0.sim_meta.0.ocr_information');

        $this->assertEmpty($ocr_information);
        $this->assertFalse(Arr::get($response, 'ocr_consent'));
    }

    public function checkNodeNotNull($data = [])
    {
        if (!empty($data)) {
            foreach ($data as $ocr) {
                $this->assertNotNull($ocr);    
            }
        }
    }
}
