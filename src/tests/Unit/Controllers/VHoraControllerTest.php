<?php

namespace Tests\Unit;

use Illuminate\Http\Request as LaravelRequest;
use Tests\TestCase;
use App\Facades\VHora\VerifyService;
use App\Facades\VHora\VHoraService;
use App\Facades\VHora\FuntongNumbersService;
use App\Facades\VHora\RequestOtpService;
use App\Facades\OtpService;
use Illuminate\Support\Facades\Redis;
use Mockery as m;
use Illuminate\Support\Carbon;
use function GuzzleHttp\json_decode;
use Illuminate\Support\Arr;

class VHoraControllerTest extends TestCase
{
    private function mockInputs()
    {
        return json_decode('{"birthdate":"07032542","birthtime":"06:18","flag_unknow_time":true,"is_thailand":true,"timezone":"+0700","province":"กรุงเทพฯ"}', true);
    }

    public function testVerifyWithoutProvinceShouldBeFailed()
    {
        $parameters = $this->mockInputs();
        unset($parameters['province']);

        $res = $this->post('/api/true/v2/vhora/verify', $parameters);
        $response = json_decode($res->getContent(), true);

        $this->assertEquals(400, $response['status_code']);
        $this->assertEquals(
            'The province field is required when is thailand is true.',
            $response['errors']['description']['message']
        );
    }

    public function testVerifyWithInvalidParamShouldBeFailed()
    {
        $input = $this->mockInputs();
        VerifyService::shouldReceive('validate')->andThrow(new \InvalidArgumentException('{"message":"The msisdn field is required."}', 1002));

        $res      = $this->post('/api/true/v2/vhora/verify', $input);
        $response = json_decode($res->getContent(), true);

        $this->assertEquals(400, $response['status_code']);
        $this->assertEquals('Bad Request', $response['status_txt']);
        $this->assertNotEmpty($response['errors']);
        $this->assertEquals(1002, $response['errors']['message']['step_code']);
        $this->assertNotEmpty($response['errors']['description']);
        $this->assertEquals('The msisdn field is required.', $response['errors']['description']['message']);
    }

    public function testVerifyWithInvalidParamShouldBeFailedException()
    {
        $input = $this->mockInputs();
        VerifyService::shouldReceive('validate')->andThrow(new \Exception('Internal Server Error'));

        $res      = $this->post('/api/true/v2/vhora/verify', $input);
        $response = json_decode($res->getContent(), true);

        $this->assertEquals(500, $response['status_code']);
        $this->assertEquals('Internal Server Error', $response['status_txt']);
        $this->assertNotEmpty($response['errors']);
    }

    // public function testVerifyShouldBeFailedWithInvalidOTP()
    // {
    //     $input = $this->mockInputs();
    //     VerifyService::shouldReceive('validate')->andReturn(true);
    //     VerifyService::shouldReceive('checkRestrictionOtp')->andReturn(true);
    //     OtpService::shouldReceive('verify')->andReturn(json_decode('{"status_code":400,"status_txt":"Bad Request","data":{"message":"รหัสยืนยันของท่านไม่ถูกต้อง"}}', true));

    //     $res      = $this->post('/api/true/v2/vhora/verify', $input);
    //     $response = json_decode($res->getContent(), true);

    //     $this->assertEquals(400, $response['status_code']);
    //     $this->assertEquals('Bad Request', $response['status_txt']);
    //     $this->assertNotEmpty($response['errors']);
    //     $this->assertEquals(1003, $response['errors']['message']['step_code']);
    //     $this->assertNotEmpty($response['errors']['description']);
    // }

    public function testVerifyShouldBeFailedWithCannotGetCtoken()
    {
        $input = $this->mockInputs();
        VerifyService::shouldReceive('validate')->andReturn(true);
        // VerifyService::shouldReceive('checkRestrictionOtp')->andReturn(true);
        VerifyService::shouldReceive('getCToken')->andReturn(json_decode('{"status_code":429,"message":"API rate limit exceeded"}', true));
        // OtpService::shouldReceive('verify')->andReturn(json_decode('{"status_code":200,"status_txt":"OK","data":{}}', true));

        $res      = $this->post('/api/true/v2/vhora/verify', $input);
        $response = json_decode($res->getContent(), true);

        $this->assertEquals(429, $response['status_code']);
        $this->assertEquals('Too Many Requests', $response['status_txt']);
        $this->assertNotEmpty($response['errors']);
        $this->assertEquals(1004, $response['errors']['message']['step_code']);
        $this->assertNotEmpty($response['errors']['description']);
    }

    public function testVerifyShouldBeFailedWithServerError()
    {
        $input = $this->mockInputs();
        VerifyService::shouldReceive('validate')->andReturn(true);
        // VerifyService::shouldReceive('checkRestrictionOtp')->andReturn(true);
        VerifyService::shouldReceive('getCToken')->andReturn(null);
        // OtpService::shouldReceive('verify')->andReturn(json_decode('{"status_code":200,"status_txt":"OK","data":{}}', true));

        $res      = $this->post('/api/true/v2/vhora/verify', $input);
        $response = json_decode($res->getContent(), true);

        $this->assertEquals(400, $response['status_code']);
        $this->assertEquals('Bad Request', $response['status_txt']);
        $this->assertNotEmpty($response['errors']);
        $this->assertEquals(1005, $response['errors']['message']['step_code']);
    }

    public function testVerifyShouldBeSuccess()
    {
        $input = $this->mockInputs();

        VerifyService::shouldReceive('validate')->andReturn(true);
        // VerifyService::shouldReceive('checkRestrictionOtp')->andReturn(true);
        VerifyService::shouldReceive('getCToken')->andReturn(json_decode('{"status_code":200,"ctoken":"FGHJKL:LIUYTFDFGHJKLKJHGFGHJ"}', true));
        // VerifyService::shouldReceive('updateOtpStatus')->andReturn(json_decode('[{"created_at":1621312676,"success":true,"ref_code":"202105181137566507","msisdn":"0851946453","verified_at":1621313130}]', true));
        // OtpService::shouldReceive('verify')->andReturn(json_decode('{"status_code":200,"status_txt":"OK","data":{}}', true));

        $verified_at  = Carbon::createFromTimestamp(1621313130)
                                ->setTimezone('Asia/Bangkok')
                                ->toIso8601String();

        $res      = $this->post('/api/true/v2/vhora/verify', $input);
        $response = json_decode($res->getContent(), true);

        $this->assertEquals(200, $res->getStatusCode());
        $this->assertEquals('OK', $response['status_txt']);
        $this->assertNotEmpty($response['data']);
        $this->assertEquals('FGHJKL:LIUYTFDFGHJKLKJHGFGHJ', $response['data']['ctoken']);
        // $this->assertEquals($verified_at, $response['data']['verified_at']);
    }

    public function testVerifyWithIsThailandIsFalseShouldNotReturnProvince()
    {
        $parameters = $this->mockInputs();
        $parameters['is_thailand'] = false;

        VerifyService::shouldReceive('validate')->andReturn(true);
        // VerifyService::shouldReceive('checkRestrictionOtp')->andReturn(true);
        VerifyService::shouldReceive('getCToken')->andReturn(json_decode('{"status_code":200,"ctoken":"FGHJKL:LIUYTFDFGHJKLKJHGFGHJ"}', true));
        // VerifyService::shouldReceive('updateOtpStatus')->andReturn(json_decode('[{"created_at":1621312676,"success":true,"ref_code":"202105181137566507","msisdn":"0851946453","verified_at":1621313130}]', true));
        // OtpService::shouldReceive('verify')->andReturn(json_decode('{"status_code":200,"status_txt":"OK","data":{}}', true));

        // $verified_at  = Carbon::createFromTimestamp(1621313130)
        //                         ->setTimezone('Asia/Bangkok')
        //                         ->toIso8601String();

        $res      = $this->post('/api/true/v2/vhora/verify', $parameters);
        $response = json_decode($res->getContent(), true);

        $this->assertEquals(200, $res->getStatusCode());
        $this->assertArrayNotHasKey('province', $response['data']);
    }

    private function mockVHoraService($data)
    {
        $mock = m::mock('App\Services\VHora\VHoraService');
        $mock->shouldReceive('personalizeFuntong')->andReturn($data);
        $this->app->instance('App\Services\VHora\VHoraService', $mock);
    }

    public function testGetPersonalizeFuntongWithInvalidParamShouldBeFailed()
    {
        $parameters = [
            'cnt' => 3,
        ];
        $response = $this->post('/api/true/v2/vhora/post-personalize-funtong', $parameters);

        $this->assertEquals(400, $response->getStatusCode());
    }

    public function testGetPersonalizeFuntongWithInvalidParamShouldBeFailed401()
    {
        VHoraService::shouldReceive('personalizeFuntong')->andThrow(new \InvalidArgumentException('{"message":"Unauthorized credential time constraints exceeded"}', 401));
        $parameters = [
            'cnt' => 3,
            'ctoken' => 'eqweqeqdasd'
        ];

        $res = $this->post('/api/true/v2/vhora/post-personalize-funtong', $parameters);
        $response = json_decode($res->getContent(), 1);
        $this->assertEquals(401, $res->getStatusCode());
        $this->assertEquals('Unauthorized', array_get($response, 'status_txt'));
        $this->assertEquals('Unauthorized credential time constraints exceeded', array_get($response, 'errors.description.message'));
    }

    public function testGetPersonalizeFuntongWithInvalidParamShouldBeFailed500()
    {
        VHoraService::shouldReceive('personalizeFuntong')->andThrow(new \Exception('Error Server', 500));
        $parameters = [
            'cnt' => 3,
            'ctoken' => 'eqweqeqdasd'
        ];

        $res = $this->post('/api/true/v2/vhora/post-personalize-funtong', $parameters);
        $response = json_decode($res->getContent(), 1);
        $this->assertEquals(500, $res->getStatusCode());
        $this->assertEquals('Internal Server Error', array_get($response, 'status_txt'));
        $this->assertEquals('Error Server', array_get($response, 'errors.description.message'));
    }

    public function testGetPersonalizeFuntongShouldBeSuccess()
    {
        $data = $this->getFixture('personalize_funtong');
        $this->mockVHoraService($data);

        $parameters = [
            'ctoken' => 'eqweqeqdasd'
        ];

        $res = $this->post('/api/true/v2/vhora/post-personalize-funtong', $parameters);

        $response = json_decode($res->getContent(), true);
        $this->assertEquals(200, $res->getStatusCode());
        $this->assertEquals('OK', Arr::get($response, 'status_txt'));
        $this->assertEquals('0', array_get($response, 'resultCode'));
        $this->assertCount(3, array_get($response, 'numbering'));

        $this->assertEquals("A", array_get($response, 'numbering.0.grade'));
        $this->assertEquals("RM", array_get($response, 'numbering.0.company'));
        $this->assertEquals("0085777", array_get($response, 'numbering.0.proposition_code'));
        $this->assertEquals("การงาน", array_get($response, 'numbering.0.group_title'));
        $this->assertEquals("งานเด่น อุดมสุข", array_get($response, 'numbering.0.subgroup_title'));

        $this->assertEquals("A++", array_get($response, 'numbering.2.grade'));
        $this->assertEquals("RF", array_get($response, 'numbering.2.company'));
        $this->assertEquals("0085777", array_get($response, 'numbering.2.proposition_code'));
        $this->assertEquals("โชคลาภ", array_get($response, 'numbering.2.group_title'));
        $this->assertEquals("ปุ๊บปั๊บ รับโชค", array_get($response, 'numbering.2.subgroup_title'));
    }

    public function testGetPersonalizeFuntongShouldBeSuccessWithFullParameters()
    {
        $data = $this->getFixture('personalize_funtong');
        $this->mockVHoraService($data);

        $parameters = [
            'cnt' => 3,
            'ctoken' => 'eqweqeqdasd'
        ];

        $res = $this->post('/api/true/v2/vhora/post-personalize-funtong', $parameters);

        $response = json_decode($res->getContent(), 1);
        $this->assertEquals(200, $res->getStatusCode());
        $this->assertEquals('OK', array_get($response, 'status_txt'));
        $this->assertEquals('0', array_get($response, 'resultCode'));
        $this->assertCount(3, array_get($response, 'numbering'));

        $this->assertEquals("A", array_get($response, 'numbering.0.grade'));
        $this->assertEquals("RM", array_get($response, 'numbering.0.company'));
        $this->assertEquals("0085777", array_get($response, 'numbering.0.proposition_code'));
        $this->assertEquals("การงาน", array_get($response, 'numbering.0.group_title'));
        $this->assertEquals("งานเด่น อุดมสุข", array_get($response, 'numbering.0.subgroup_title'));

        $this->assertEquals("A++", array_get($response, 'numbering.2.grade'));
        $this->assertEquals("RF", array_get($response, 'numbering.2.company'));
        $this->assertEquals("0085777", array_get($response, 'numbering.2.proposition_code'));
        $this->assertEquals("โชคลาภ", array_get($response, 'numbering.2.group_title'));
        $this->assertEquals("ปุ๊บปั๊บ รับโชค", array_get($response, 'numbering.2.subgroup_title'));
    }

    public function testRequestOtpShouldBeSuccess()
    {
        $input = $this->mockInputs();
        $input['msisdn'] = '0909990099';

        RequestOtpService::shouldReceive('validate')->andReturn(true);
        RequestOtpService::shouldReceive('validateOtpLimit')->andReturn(true);
        OtpService::shouldReceive('requestOtp')->andReturn(json_decode('{"status_code":200,"status_txt":"OK","data":{"code":200,"description":"OK","msisdn":"0850000008","operator":"realmove","transaction_id":"202105121801378559","method":"request_otp","execute_time":"0.0215"}}', true));
        RequestOtpService::shouldReceive('insertRequestOtp')->andReturn(['status_code' => 200]);

        $res      = $this->post('/api/true/v2/vhora/request-otp', $input);
        $response = json_decode($res->getContent(), true);

        $this->assertEquals(200, $res->getStatusCode());
        $this->assertEquals('OK', $response['status_txt']);
        $this->assertNotEmpty($response['data']);
        $this->assertEquals('0850000008', $response['data']['msisdn']);
    }

    public function testRequestOtpWithInvalidParamShouldBeFailed()
    {
        $input = $this->mockInputs();
        RequestOtpService::shouldReceive('validate')->andThrow(new \InvalidArgumentException('{"message":"The msisdn field is required."}', 1002));

        $res         = $this->post('/api/true/v2/vhora/request-otp', $input);
        $response    = json_decode($res->getContent(), true);
        $description = json_decode($response['errors']['description'], true);

        $this->assertEquals(400, $response['status_code']);
        $this->assertEquals('Bad Request', $response['status_txt']);
        $this->assertNotEmpty($response['errors']);
        $this->assertEquals(1002, $response['errors']['message']['step_code']);
        $this->assertNotEmpty($description);
        $this->assertEquals('The msisdn field is required.', $description['message']);
    }

    public function testRequestOtpWithInvalidParamShouldBeFailedException()
    {
        $input = $this->mockInputs();
        RequestOtpService::shouldReceive('validate')->andThrow(new \Exception('Internal Server Error'));

        $res      = $this->post('/api/true/v2/vhora/request-otp', $input);
        $response = json_decode($res->getContent(), true);

        $this->assertEquals(500, $response['status_code']);
        $this->assertEquals('Internal Server Error', $response['status_txt']);
        $this->assertNotEmpty($response['errors']);
    }

    /**
     * @group postAuthentication
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testPostAuthenticationEmployeeSuccess()
    {
        $input = [
            'type' => 'employee',
            'state' => '5f0f1db9eea410e25258bc92ef053ce8',
            'session_state' => '0a6ff2e9-c822-4948-ab67-9e010f8c93a9&code=b5081af7-797b-46e3-b620-ceae2d945b53.0a6ff2e9-c822-4948-ab67-9e010f8c93a9.fdcaff50-3f85-44f9-bd94-afb73e08b7bb'
        ];

        VHoraService::shouldReceive('processAuthentication')
            ->with($input)
            ->andReturn()
            ->andReturn([
                'code' => '200',
                'response' => [
                    'data' => json_decode('{"type":"employee","sale_code":"39004848","sale_name":{"th":"นาย อดิศักดิ์ ไตรเสนีย์","en":"- -"},"shop":[{"code":"80000560","name":{"th":"- ทรูมูฟช้อป เซ็นทรัล พลาซ่า เวสท์เกต 01","en":"True Shop Central Plaza Westgate 01"}},{"code":"80000560","name":{"th":"- ทรูมูฟช้อป เซ็นทรัล พลาซ่า เวสท์เกต 02","en":"True Shop Central Plaza Westgate 02"}}]}', true)
                ]
            ]);

        $res      = $this->post('/api/true/v2/vhora/offline/authentication', $input);
        $response = json_decode($res->getContent(), true);

        $this->assertEquals(200, $res->getStatusCode());
        $this->assertEquals('OK', array_get($response, 'status_txt'));
        $this->assertEquals('employee', array_get($response, 'data.type'));
        $this->assertNotEmpty(array_get($response, 'data.sale_code'));
        $this->assertNotEmpty(array_get($response, 'data.sale_name'));
        $this->assertNotEmpty(array_get($response, 'data.shop'));
    }

    /**
     * @group postAuthentication
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testPostAuthenticationDealerSuccess()
    {
        $input = [
            'type' => 'dealer',
            'state' => '5f0f1db9eea410e25258bc92ef053ce8',
            'session_state' => '0a6ff2e9-c822-4948-ab67-9e010f8c93a9&code=b5081af7-797b-46e3-b620-ceae2d945b53.0a6ff2e9-c822-4948-ab67-9e010f8c93a9.fdcaff50-3f85-44f9-bd94-afb73e08b7bb'
        ];

        VHoraService::shouldReceive('processAuthentication')
            ->with($input)
            ->andReturn()
            ->andReturn([
                'code' => '200',
                'response' => [
                    'data' => json_decode('{"type":"dealer","sale_code":"39004848","sale_name":{"th":"นาย อดิศักดิ์ ไตรเสนีย์","en":"- -"},"shop":[{"code":"80000560","name":{"th":"- ทรูมูฟช้อป เซ็นทรัล พลาซ่า เวสท์เกต 01","en":"True Shop Central Plaza Westgate 01"}},{"code":"80000560","name":{"th":"- ทรูมูฟช้อป เซ็นทรัล พลาซ่า เวสท์เกต 02","en":"True Shop Central Plaza Westgate 02"}}]}', true)
                ]
            ]);

        $res      = $this->post('/api/true/v2/vhora/offline/authentication', $input);
        $response = json_decode($res->getContent(), true);

        $this->assertEquals(200, $res->getStatusCode());
        $this->assertEquals('OK', array_get($response, 'status_txt'));
        $this->assertEquals('dealer', array_get($response, 'data.type'));
        $this->assertNotEmpty(array_get($response, 'data.sale_code'));
        $this->assertNotEmpty(array_get($response, 'data.sale_name'));
        $this->assertNotEmpty(array_get($response, 'data.shop'));
    }

    /**
     * @group postAuthentication
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testPostAuthenticationCustomerSuccess()
    {
        $input = [
            'shop_code' => '80000560'
        ];

        VHoraService::shouldReceive('processAuthentication')
            ->with($input)
            ->andReturn()
            ->andReturn([
                'code' => '200',
                'response' => [
                    'data' => json_decode('{"type":null,"shop":{"code":"80000560","name":{"th":"- ทรูมูฟช้อป เซ็นทรัล พลาซ่า เวสท์เกต 02","en":"True Shop Central Plaza Westgate 02"}}}', true)
                ]
            ]);

        $res      = $this->post('/api/true/v2/vhora/offline/authentication', $input);
        $response = json_decode($res->getContent(), true);

        $this->assertEquals(200, $res->getStatusCode());
        $this->assertEquals('OK', array_get($response, 'status_txt'));
        $this->assertEquals(null, array_get($response, 'data.type'));
        $this->assertNotEmpty(array_get($response, 'data.shop.code'));
        $this->assertNotEmpty(array_get($response, 'data.shop.name'));
    }

    /**
     * @group postAuthentication
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testPostAuthenticationFail()
    {
        $input = [
            'shop_code' => '80000560'
        ];

        VHoraService::shouldReceive('processAuthentication')
            ->with($input)
            ->andReturn()
            ->andReturn([
                'code' => '503',
                'response' => [
                    'error' => [
                        'description' => 'Shop data not found.'
                    ]
                ]
            ]);

        $res      = $this->post('/api/true/v2/vhora/offline/authentication', $input);
        $response = json_decode($res->getContent(), true);

        $this->assertEquals(503, $res->getStatusCode());
        $this->assertNotEquals('OK', array_get($response, 'status_txt'));
        $this->assertEquals(null, array_get($response, 'data.type'));
        $this->assertEmpty(array_get($response, 'data.shop'));
    }

    /* @group testPostLoginOfflineSuccess
    * @group WLSFT-18623
    */
    public function testPostLoginOfflineSuccess()
    {
        $mock_result = ['response' => ['data' => []], 'code' => 200];
        $input = ['type' => 'employee'];
        VHoraService::shouldReceive('processLoginStoreOffline')->with($input)->andReturn($mock_result);

        $this->get('/api/true/v2/vhora/offline/login', $input);
    }

    /**
     * @group testPostLoginOfflineFail
     * @group WLSFT-18623
     */
    public function testPostLoginOfflineFail()
    {
        $mock_result = ['response' => ['redirect' => '/offline-store/berfuntong/login?error=010']];
        $input = ['type2' => 'employee'];
        VHoraService::shouldReceive('processLoginStoreOffline')->with($input)->andReturn($mock_result);

        $this->get('/api/true/v2/vhora/offline/login', $input);
    }

    /**
     * @group testPostVerifyOfflineSuccess
     * @group WLSFT-18623
     */
    public function testPostVerifyOfflineSuccess()
    {
        $input = [
            'id_card'    => 1702270537035,
            'sim_type'   => 'postpaid',
            'shop_code'  => 80000084,
            'birth_date' => '07032540'
        ];
        $result_validate = json_decode('{"code":"200","description":"success","correlationId":"2021021217520001","3gwTrackingId":"637571152537165699"}', true);
        $result          = [
            'correlation_id'  => 'dd7b355e-5256-4a25-b3b6-978b7742af7c',
            'result'          => $result_validate,
            'is_exceed_limit' => false,
        ];

        $mock_result = ['response' => $result, 'code' => 200];

        VHoraService::shouldReceive('processVerifyOffline')->with($input)->andReturn($mock_result);

        $res      = $this->post('/api/true/v2/vhora/offline/verify', $input);
        $response = json_decode($res->getContent(), true);

        $this->assertEquals(200, $response['status_code']);
        $this->assertEquals('OK', $response['status_txt']);
        $this->assertEquals('dd7b355e-5256-4a25-b3b6-978b7742af7c', $response['correlation_id']);
        $this->assertEquals($result_validate, $response['result']);
    }

    /**
     * @group testPostVerifyOfflineFail
     * @group WLSFT-18623
     */
    public function testPostVerifyOfflineFail()
    {
        $mock_result = ['response' => ['data' => 'The id card field is required.'], 'code' => 400];
        $input = [
            'sim_type'   => 'postpaid',
            'shop_code'  => 80000084,
            'birth_date' => '07032540'
        ];
        VHoraService::shouldReceive('processVerifyOffline')->with($input)->andReturn($mock_result);

        $res      = $this->post('/api/true/v2/vhora/offline/verify', $input);
        $response = json_decode($res->getContent(), true);

        $this->assertEquals(400, $response['status_code']);
        $this->assertEquals('Bad Request', $response['status_txt']);
        $this->assertEquals('The id card field is required.', $response['data']);
    }

    /* @group testPostPlaceOrderOffline
     * @group WLSFT-18628
     */
    public function testPostPlaceOrderOfflineSuccessWithPlaceOrder()
    {
        $input   = json_decode('{"form":{"msisdn":"0850000994","ref_code":"08500009994000","firstname":"John","lastname":"Doe","birthdate":"07032540","birthtime":"01:01","timezone":"+0700","selected_msisdn":"0964234424","product_id":"L91587044","inventory_id":"3078153","store_id":"941527","companyCode":"RM"},"pricePlan":{"id":"9501","name":"Funtong 1199","code":"SMRTFP76","description":"Funtong 1199","sim_type":"postpaid","price":"1199","recommended":"1","proposition_nas_code":"0085779","proposition_term_short":"Funtong SIM Only 1199","campaign_code":"AN231"},"shopOffline":{"saleCode":"39004848","shopCode":"80000560","saleName":{"th":"\u0e19\u0e32\u0e22 \u0e2d\u0e14\u0e34\u0e28\u0e31\u0e01\u0e14\u0e34\u0e4c \u0e44\u0e15\u0e23\u0e40\u0e2a\u0e19\u0e35\u0e22\u0e4c","en":null},"shopName":{"en":"True Shop Central Plaza Westgate 01","th":"True Shop Central Plaza Westgate 01"}},"id":{"id":"5453707659698","correlationId":"dc0715da-ed7a-4231-ae6a-e1e57726c79e"}}', 1);
        $request = new LaravelRequest();
        $request->setMethod(strtoupper("post"));
        $request->replace($input);

        $mock_result = json_decode('{"response":{"data":{"id":11650453,"secureKey":"800011650453","is_redirect":false,"redirectUrl":"https://order.wls-dev.com/v1/payment/foreground?payment_id=9191001891722","payment_id":"9191001891722","cybs_detail":null,"code":200,"message":"success"}},"code":200}', 1);
        VHoraService::shouldReceive('processPlaceOrderOffline')->andReturn($mock_result);

        $res         = $this->post('/api/true/v2/vhora/offline/placeorder', $input);
        $response    = json_decode($res->getContent(), true);
        $this->assertEquals(200, $response['status_code']);
        $this->assertEquals($mock_result['response']['data'], $response['data']);

    }

    /* @group testPostPlaceOrderOffline
     * @group WLSFT-18628
     */
    public function testPostPlaceOrderOfflineSuccessWithoutPlaceOrder()
    {
        $input   = json_decode('{"form":{"msisdn":"0850000994","ref_code":"08500009994000","firstname":"John","lastname":"Doe","birthdate":"07032540","birthtime":"01:01","timezone":"+0700","selected_msisdn":"0964234424","product_id":"L91587044","inventory_id":"3078153","store_id":"941527","companyCode":"RM"},"pricePlan":{"id":"9501","name":"Funtong 1199","code":"SMRTFP76","description":"Funtong 1199","sim_type":"postpaid","price":"1199","recommended":"1","proposition_nas_code":"0085779","proposition_term_short":"Funtong SIM Only 1199","campaign_code":"AN231"},"shopOffline":{"saleCode":"39004848","shopCode":"80000560","saleName":{"th":"\u0e19\u0e32\u0e22 \u0e2d\u0e14\u0e34\u0e28\u0e31\u0e01\u0e14\u0e34\u0e4c \u0e44\u0e15\u0e23\u0e40\u0e2a\u0e19\u0e35\u0e22\u0e4c","en":null},"shopName":{"en":"True Shop Central Plaza Westgate 01","th":"True Shop Central Plaza Westgate 01"}},"id":{"id":"5453707659698","correlationId":"dc0715da-ed7a-4231-ae6a-e1e57726c79e"}}', 1);
        $request = new LaravelRequest();
        $request->setMethod(strtoupper("post"));
        $request->replace($input);

        $mock_result = json_decode('{"response":{"data":{"offline_skip":1,"redirect_url":"https:\/\/pre-store.truecorp.co.th\/api\/true\/success"}},"code":200}', 1);
        VHoraService::shouldReceive('processPlaceOrderOffline')->andReturn($mock_result);

        $res         = $this->post('/api/true/v2/vhora/offline/placeorder', $input);
        $response    = json_decode($res->getContent(), true);
        $this->assertEquals(200, $response['status_code']);
        $this->assertEquals($mock_result['response']['data'], $response['data']);
    }

    /**
     * @group testPostPlaceOrderOffline
     * @group WLSFT-18628
     */
    public function testPostPlaceOrderOfflineFail()
    {
        $input = json_decode('{"form":{"msisdn":"0850000994","ref_code":"08500009994000","firstname":"John","lastname":"Doe","birthdate":"07032540","birthtime":"01:01","timezone":"+0700","selected_msisdn":"0964234424","product_id":"L91587044","inventory_id":"3078153","store_id":"941527","companyCode":"RM"},"pricePlan":{"id":"9501","name":"Funtong 1199","code":"SMRTFP76","description":"Funtong 1199","sim_type":"postpaid","price":"1199","recommended":"1","proposition_nas_code":"0085779","proposition_term_short":"Funtong SIM Only 1199","campaign_code":"AN231"},"shopOffline":{"saleCode":"39004848","shopCode":"80000560","saleName":{"th":"\u0e19\u0e32\u0e22 \u0e2d\u0e14\u0e34\u0e28\u0e31\u0e01\u0e14\u0e34\u0e4c \u0e44\u0e15\u0e23\u0e40\u0e2a\u0e19\u0e35\u0e22\u0e4c","en":null},"shopName":{"en":"True Shop Central Plaza Westgate 01","th":"True Shop Central Plaza Westgate 01"}},"id":{"id":"5453707659698","correlationId":"dc0715da-ed7a-4231-ae6a-e1e57726c79e"}}', 1);
        $request = new LaravelRequest();
        $request->setMethod(strtoupper("post"));
        $request->replace($input);

        $mock_result = json_decode('{"response":{"data":"Reserve number Error"},"code":422}', 1);
        VHoraService::shouldReceive('processPlaceOrderOffline')->andReturn($mock_result);

        $res = $this->post('/api/true/v2/vhora/offline/placeorder', $input);
        $response = json_decode($res->getContent(), true);
        $this->assertEquals(422, $response['status_code']);
        $this->assertEquals($mock_result['response']['data'], $response['data']);
    }

    public function testRequestOtpWithOtpRequestFailShouldBeFailed()
    {
        $input = $this->mockInputs();
        $input['msisdn'] = '0909990099';

        RequestOtpService::shouldReceive('validate')->andReturn(true);
        RequestOtpService::shouldReceive('validateOtpLimit')->andReturn(true);
        OtpService::shouldReceive('requestOtp')->andReturn(null);

        $res      = $this->post('/api/true/v2/vhora/request-otp', $input);
        $response = json_decode($res->getContent(), true);

        $this->assertEquals(400, $response['status_code']);
        $this->assertEquals('Bad Request', $response['status_txt']);
        $this->assertNotEmpty($response['errors']);
    }

    public function testRequestOtpInsertRequestOtpShouldBeFailed()
    {
        $input = $this->mockInputs();
        $input['msisdn'] = '0909990099';

        RequestOtpService::shouldReceive('validate')->andReturn(true);
        RequestOtpService::shouldReceive('validateOtpLimit')->andReturn(true);
        OtpService::shouldReceive('requestOtp')->andReturn(json_decode('{"status_code":200,"status_txt":"OK","data":{"code":200,"description":"OK","msisdn":"0850000008","operator":"realmove","transaction_id":"202105121801378559","method":"request_otp","execute_time":"0.0215"}}', true));
        RequestOtpService::shouldReceive('insertRequestOtp')->andReturn(null);

        $res      = $this->post('/api/true/v2/vhora/request-otp', $input);
        $response = json_decode($res->getContent(), true);

        $this->assertEquals(400, $response['status_code']);
        $this->assertNotEmpty($response['errors']);
    }

    /**
     * @group getFortuneFuntong
     */
    public function testGetFortuneFuntongWithInvalidBodyShouldBeFailed()
    {
        $input = [
            'ctoken' => 'jUVaqFi.4ZzpICaHixZs7Qw'
        ];
        $response = $this->post('/api/true/v2/vhora/fortune-funtong', $input);
        $response = json_decode($response->getContent(), true);

        $this->assertEquals(400, $response['status_code']);
        $this->assertNotEmpty($response['errors']);
    }

    /**
     * @group getFortuneFuntong
     */
    public function testGetFortuneFuntongShouldBeSuccess()
    {
        $fixture = $this->getFixture('get_fortune_funtong');
        VHoraService::shouldReceive('getFortuneFuntong')->andReturn($fixture);

        $input = [
            'ctoken' => 'jUVaqFi.4ZzpICaHixZs7Qw',
            'msisdn' => '0964235554'
        ];
        $response = $this->post('/api/true/v2/vhora/fortune-funtong', $input);
        $response = json_decode($response->getContent(), true);

        $this->assertEquals(200, $response['status_code']);
        $this->assertEquals('OK', $response['status_txt']);
        $this->assertNotEmpty($response['ascendant']);
    }

    /**
     * @group getFortuneFuntong
     */
    public function testGetFortuneFuntongWithExceptionShouldBeFailed()
    {
        VHoraService::shouldReceive('getFortuneFuntong')->andThrow(
            new \Exception('msisdn not found in reserve', 403)
        );

        $input = [
            'ctoken' => 'jUVaqFi.4ZzpICaHixZs7Qw',
            'msisdn' => '0964235554'
        ];
        $response = $this->post('/api/true/v2/vhora/fortune-funtong', $input);
        $response = json_decode($response->getContent(), true);

        $this->assertEquals(403, $response['status_code']);
        $this->assertEquals('Forbidden', $response['status_txt']);
    }

    /**
     * @group getFortuneFuntong
     */
    public function testGetFortuneFuntongWithExpiredTokenShouldBeFailed()
    {
        VHoraService::shouldReceive('getFortuneFuntong')->andThrow(
            new \Exception('Unauthorized credentials denied with jwt: signature mismatch', 401)
        );

        $input = [
            'ctoken' => 'jUVaqFi.4ZzpICaHixZs7Qw',
            'msisdn' => '0964235554'
        ];
        $response = $this->post('/api/true/v2/vhora/fortune-funtong', $input);
        $response = json_decode($response->getContent(), true);

        $this->assertEquals(401, $response['status_code']);
        $this->assertEquals('Unauthorized', $response['status_txt']);
    }

    /**
     * @group getAuthenticationLogout
     * @group WLSFT-18623
     */
    public function testGetAuthenticationLogoutSuccess()
    {
        $mock_result = ['response' => ['data' => []], 'code' => 200];
        $input = [
            'type' => 'employee',
            'key' => 'MzkwMDQ4NDgxNjIxODQ3NjM4'
        ];
        VHoraService::shouldReceive('processAuthenticationLogout')->with($input)->andReturn($mock_result);

        $this->get('/api/true/v2/vhora/offline/logout', $input);
    }

    /**
     * @group getAuthenticationLogout
     * @group WLSFT-18623
     */
    public function testGetAuthenticationLogoutFail()
    {
        $mock_result = ['response' => ['redirect' => '/offline-store/berfuntong/login']];
        $input = [
            'typex' => 'employee',
            'key' => 'MzkwMDQ4NDgxNjIxODQ3NjM4'
        ];
        VHoraService::shouldReceive('processAuthenticationLogout')->with($input)->andReturn($mock_result);

        $this->get('/api/true/v2/vhora/offline/logout', $input);
    }

    /**
     * @group getDealerInfo
     * @group WLSFT-18797
     */
    public function testGetDealerInfoSuccess()
    {
        $mock_result = ['response' => ['data' => ['code' => 80000011, 'name' => ['en' => 'Name EN', 'th' => 'Name TH']]], 'code' => 200];
        $input = [
            'sale_code' => '80000011'
        ];
        VHoraService::shouldReceive('processGetDealerInfo')->with($input)->andReturn($mock_result);

        $this->get('/api/true/v2/vhora/offline/dealer-info', $input);
    }

    /**
     * @group getDealerInfo
     * @group WLSFT-18797
     */
    public function testGetDealerInfoFail()
    {
        $mock_result = ['response' => [], 'code' => 200];
        $input = [
            'sale_codex' => '80000011'
        ];
        VHoraService::shouldReceive('processGetDealerInfo')->with($input)->andReturn($mock_result);

        $this->get('/api/true/v2/vhora/offline/dealer-info', $input);
    }

    /**
     * @group getDealerInfo
     * @group WLSFT-18797
     */
    public function testFuntongShouldBeSuccess()
    {
        $mock_result = json_decode('{"response":{"pagination":{"page":1,"limit":25,"last_page":10,"total":240},"ref_code":"62a4aace0efeaf0d30934e3848dbe62d","packs":{"pos399":{"limit":15,"name":"ซิมรายเดือน","code":"pos399","baseline":"399","type":"postpaid"},"pre299":{"limit":10,"name":"ซิมเติมเงิน","code":"pre299","baseline":"250","type":"prepaid"}},"numbering":[{"msisdn":"0646250882","company":"RM","zodiac_id":0,"pack":"pos399"},{"msisdn":"0938987991","company":"RF","zodiac_id":0,"pack":"pos399"},{"msisdn":"0646692477","company":"RF","zodiac_id":1,"pack":"pos399"},{"msisdn":"0646685123","company":"RF","zodiac_id":1,"pack":"pos399"},{"msisdn":"0646174771","company":"RM","zodiac_id":0,"pack":"pos399"},{"msisdn":"0646378005","company":"RM","zodiac_id":1,"pack":"pos399"},{"msisdn":"0641054342","company":"RM","zodiac_id":1,"pack":"pos399"},{"msisdn":"0646452117","company":"RM","zodiac_id":1,"pack":"pos399"},{"msisdn":"0646199002","company":"RM","zodiac_id":0,"pack":"pos399"},{"msisdn":"0903212711","company":"RM","zodiac_id":0,"pack":"pos399"},{"msisdn":"0973068618","company":"RM","zodiac_id":0,"pack":"pos399"},{"msisdn":"0646243995","company":"RM","zodiac_id":0,"pack":"pos399"},{"msisdn":"0638070012","company":"RM","zodiac_id":0,"pack":"pos399"},{"msisdn":"0973085105","company":"RM","zodiac_id":0,"pack":"pos399"},{"msisdn":"0646545002","company":"RF","zodiac_id":0,"pack":"pos399"},{"msisdn":"0645836855","company":"RF","zodiac_id":0,"pack":"pre299"},{"msisdn":"0645960477","company":"RF","zodiac_id":0,"pack":"pre299"},{"msisdn":"0646015855","company":"RF","zodiac_id":0,"pack":"pre299"},{"msisdn":"0646053770","company":"RF","zodiac_id":0,"pack":"pre299"},{"msisdn":"0645900188","company":"RF","zodiac_id":0,"pack":"pre299"},{"msisdn":"0938971186","company":"RF","zodiac_id":0,"pack":"pre299"},{"msisdn":"0645792771","company":"RF","zodiac_id":0,"pack":"pre299"},{"msisdn":"0645856833","company":"RF","zodiac_id":0,"pack":"pre299"},{"msisdn":"0646130511","company":"RF","zodiac_id":0,"pack":"pre299"},{"msisdn":"0645759588","company":"RF","zodiac_id":0,"pack":"pre299"}],"ascendant":{"zodiac_id":0}},"code":200}', true);
        $input = [
                "packs"  => ["pre299", "pos399"],
                "channel" => "online",
                "page"    => 1
            ];
        FuntongNumbersService::shouldReceive('getNumbers')->andReturn($mock_result);

        $response = $this->post('/api/true/v2/vhora/funtong', $input);
        $response = json_decode($response->getContent(), true);

        $this->assertEquals(200, $response['status_code']);
        $this->assertEquals('OK', $response['status_txt']);
        $this->assertNotEmpty($response['pagination']);
        $this->assertNotEmpty($response['numbering']);
    }

    /**
     * @group getDealerInfo
     * @group WLSFT-18797
     */
    public function testFuntongShouldBeValidateFail()
    {
        $mock_result = json_decode('{"response":{"errors":{"description":{"message":"The channel field is required."}}},"code":400}', true);
        FuntongNumbersService::shouldReceive('getNumbers')->andReturn($mock_result);

        $response = $this->post('/api/true/v2/vhora/funtong', []);
        $response = json_decode($response->getContent(), true);

        $this->assertEquals(400, $response['status_code']);
        $this->assertEquals('Bad Request', $response['status_txt']);
        $this->assertEquals('The channel field is required.', $response['errors']['description']['message']);
    }

    /**
     * @group getFortuneFuntongForRedis
     */
    public function testGetFortuneFuntongForRedisSuccess()
    {
        $input = [
            'secure_key' => 'eyJpdiI6IjhxSVpFU1IwWVdcL0Uxa2ZucUxCVXVBPT0iLCJ2YWx1ZSI6ImQyRnNlVURoS0crd0hydEQ5VXJwYUc2bHZoaENhQWJHU1RcL3RMOGJcL3Q5OD0iLCJtYWMiOiJjZGY4YTZmNTI1YzNjMWZlNGI2N2VkYjkzNjI3OWY5N2RiODA1ZGIyY2U2OGFjMTMyM2QyN2MzODVjMWJjNjE4In0='
        ];
        $keys = [
            "truestore:ctoken:orderid:800012126321:value",
            "truestore:vhora:offline:orderid:800012126321:data",
            "truestore:vhora:offline:pos:800012126321:data"
        ];
        $return_redis = [
            "",
            '{"firstname":"","lastname":"","birthtime":null,"birthdate":"06\/08\/1450","selected_msisdn":"0645989866","birthdate_thai":"\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48 6 \u0e2a\u0e34\u0e07\u0e2b\u0e32\u0e04\u0e21 1993","package_code":"pre299"}',
            '{"order_id":"27866779448584914745","barcode_url":"http:\/\/172.19.217.125:8080\/Kxv22LP"}'
        ];
        Redis::shouldReceive('mget')->with($keys)->andReturn($return_redis);
        $response = $this->post('/api/true/v2/vhora/fortune-funtong-redis', $input);
        $this->assertEquals(200,$response->getStatusCode());
    }

    /**
     * @group getFortuneFuntongForRedis
     */
    public function testGetFortuneFuntongForRedisDataNotFound()
    {
        $input = [
            'secure_key' => 'eyJpdiI6IjhxSVpFU1IwWVdcL0Uxa2ZucUxCVXVBPT0iLCJ2YWx1ZSI6ImQyRnNlVURoS0crd0hydEQ5VXJwYUc2bHZoaENhQWJHU1RcL3RMOGJcL3Q5OD0iLCJtYWMiOiJjZGY4YTZmNTI1YzNjMWZlNGI2N2VkYjkzNjI3OWY5N2RiODA1ZGIyY2U2OGFjMTMyM2QyN2MzODVjMWJjNjE4In0='
        ];
        $keys = [
            "truestore:ctoken:orderid:800012126321:value",
            "truestore:vhora:offline:orderid:800012126321:data",
            "truestore:vhora:offline:pos:800012126321:data"
        ];
        $return_redis = [
            "",
            '{"firstname":"","lastname":"","birthtime":null,"birthdate":"06\/08\/1450","selected_msisdn":"0645989866","birthdate_thai":"\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48 6 \u0e2a\u0e34\u0e07\u0e2b\u0e32\u0e04\u0e21 1993","package_code":""}',
            '{"order_id":"27866779448584914745","barcode_url":"http:\/\/172.19.217.125:8080\/Kxv22LP"}'
        ];
        Redis::shouldReceive('mget')->with($keys)->andReturn($return_redis);
        $response = $this->post('/api/true/v2/vhora/fortune-funtong-redis', $input);
        $this->assertEquals(404,$response->getStatusCode());
    }
}
