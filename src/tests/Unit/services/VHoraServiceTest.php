<?php

namespace Tests\Unit;

use App\Facades\VHora\VHoraService;
use function GuzzleHttp\json_decode;
use Illuminate\Support\Facades\Redis;
use phpDocumentor\Reflection\Types\Object_;
use Tests\TestCase;
use Mockery as m;
use Illuminate\Support\Arr;

class VHoraServiceTest extends TestCase
{
    /**
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testGetPersonalizeFuntongShouldBeSuccess()
    {
        $fixture = $this->getFixture('personalize_funtong_gateway');
        $mock = m::mock('overload:App\Libraries\Clients\AwsGatewayClient');
        $mock->shouldReceive('get')->andReturn($fixture);

        $mock_response[] = [
            'configuration' => '{"rm":{"grades":[{"grade":"A++","synonym":"A","propo_code":"0085779"},{"grade":"A+","synonym":"B","propo_code":"0085778"},{"grade":"A","synonym":"C","propo_code":"0085777"}]},"rf":{"grades":[]}}'
        ];

        $mock_model = m::mock('overload:App\Models\TruemovehSettingsModel')->makePartial();
        $mock_model->shouldReceive('findSettingKey')
            ->with('vhora_propo_code_offline')
            ->andReturn($mock_response);
        $mock_model->shouldReceive('findFirstWithKey')
            ->with('vhora_high_tier_configs')
            ->andReturn($mock_model)
            ->shouldReceive('toArray')
            ->andReturn($this->getFixture('vhora/vhora_high_tier_configs'));
            
        $this->mockRedis();

        $response = VHoraService::personalizeFuntong([
            'ctoken'  => 'eaewaeqeasda',
            'cnt'     => 3,
            'channel' => 'offline'
        ]);

        $this->assertCount(13, array_get($response, 'numbering'));

        $this->assertEquals("A++", array_get($response, 'numbering.0.grade'));
        $this->assertEquals("RM", array_get($response, 'numbering.0.company'));
        $this->assertEquals("0085779", array_get($response, 'numbering.0.proposition_code'));
        $this->assertEquals("A++", array_get($response, 'numbering.3.grade'));
        $this->assertEquals("RM", array_get($response, 'numbering.3.company'));
        $this->assertEquals("0085779", array_get($response, 'numbering.3.proposition_code'));

        $this->assertEquals("A+", array_get($response, 'numbering.9.grade'));
        $this->assertEquals("RF", array_get($response, 'numbering.9.company'));
        $this->assertEquals(null, array_get($response, 'numbering.9.proposition_code'));
        $this->assertEquals("A++", array_get($response, 'numbering.10.grade'));
        $this->assertEquals("RF", array_get($response, 'numbering.10.company'));
        $this->assertEquals(null, array_get($response, 'numbering.10.proposition_code'));
        $this->assertEquals("A", array_get($response, 'numbering.11.grade'));
        $this->assertEquals("RF", array_get($response, 'numbering.11.company'));
        $this->assertEquals(null, array_get($response, 'numbering.11.proposition_code'));
        $this->assertEquals("A+", array_get($response, 'numbering.12.grade'));
        $this->assertEquals("RF", array_get($response, 'numbering.12.company'));
        $this->assertEquals(null, array_get($response, 'numbering.12.proposition_code'));
        $this->assertEquals(null, Arr::get($response, 'dealer_code'));
        $this->assertArrayHasKey('dealer_code', $response);

        $this->checkNumberingGroup(array_get($response, 'numbering', []));
    }

    /**
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testGetPersonalizeFuntongWithEmptyDBDataShouldBeSuccess()
    {
        $fixture = $this->getFixture('personalize_funtong_gateway');
        $mock = m::mock('overload:App\Libraries\Clients\AwsGatewayClient');
        $mock->shouldReceive('get')->andReturn($fixture);

        $mock_model = m::mock('overload:App\Models\TruemovehSettingsModel')->makePartial();
        $mock_model->shouldReceive('findSettingKey')
            ->andReturn([]);
        $mock_model->shouldReceive('findFirstWithKey')
            ->with('vhora_high_tier_configs')
            ->andReturn($mock_model)
            ->shouldReceive('toArray')
            ->andReturn($this->getFixture('vhora/vhora_high_tier_configs'));
            
        $this->mockRedis();

        $response = VHoraService::personalizeFuntong([
            'ctoken'  => 'eaewaeqeasda',
            'cnt'     => 3,
            'channel' => 'online'
        ]);

        $this->assertCount(13, array_get($response, 'numbering'));

        $this->assertEquals("A++", array_get($response, 'numbering.0.grade'));
        $this->assertEquals("RM", array_get($response, 'numbering.0.company'));
        $this->assertEquals(null, array_get($response, 'numbering.0.proposition_code'));
        $this->assertEquals("A++", array_get($response, 'numbering.3.grade'));
        $this->assertEquals("RM", array_get($response, 'numbering.3.company'));
        $this->assertEquals(null, array_get($response, 'numbering.3.proposition_code'));

        $this->assertEquals("A+", array_get($response, 'numbering.9.grade'));
        $this->assertEquals("RF", array_get($response, 'numbering.9.company'));
        $this->assertEquals(null, array_get($response, 'numbering.9.proposition_code'));
        $this->assertEquals("A++", array_get($response, 'numbering.10.grade'));
        $this->assertEquals("RF", array_get($response, 'numbering.10.company'));
        $this->assertEquals(null, array_get($response, 'numbering.10.proposition_code'));
        $this->assertEquals("A", array_get($response, 'numbering.11.grade'));
        $this->assertEquals("RF", array_get($response, 'numbering.11.company'));
        $this->assertEquals(null, array_get($response, 'numbering.11.proposition_code'));
        $this->assertEquals("A+", array_get($response, 'numbering.12.grade'));
        $this->assertEquals("RF", array_get($response, 'numbering.12.company'));
        $this->assertEquals(null, array_get($response, 'numbering.12.proposition_code'));

        $this->checkNumberingGroup(array_get($response, 'numbering', []));
    }

    /**
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testGetPersonalizeFuntongWithEmptyDBErrorDataShouldBeSuccess()
    {
        $fixture = $this->getFixture('personalize_funtong_gateway');
        $mock = m::mock('overload:App\Libraries\Clients\AwsGatewayClient');
        $mock->shouldReceive('get')->andReturn($fixture);

        $mock_model = m::mock('overload:App\Models\TruemovehSettingsModel')->makePartial();
        $mock_model->shouldReceive('findSettingKey')
            ->andThrow(new \Exception('Internal Server Error', 500));
        $mock_model->shouldReceive('findFirstWithKey')
            ->with('vhora_high_tier_configs')
            ->andReturn($mock_model)
            ->shouldReceive('toArray')
            ->andReturn($this->getFixture('vhora/vhora_high_tier_configs'));    

        $this->mockRedis();    

        $response = VHoraService::personalizeFuntong([
            'ctoken'  => 'eaewaeqeasda',
            'cnt'     => 3,
            'channel' => 'online'
        ]);

        $this->assertCount(13, array_get($response, 'numbering'));

        $this->assertEquals("A++", array_get($response, 'numbering.0.grade'));
        $this->assertEquals("RM", array_get($response, 'numbering.0.company'));
        $this->assertEquals(null, array_get($response, 'numbering.0.proposition_code'));
        $this->assertEquals("A++", array_get($response, 'numbering.3.grade'));
        $this->assertEquals("RM", array_get($response, 'numbering.3.company'));
        $this->assertEquals(null, array_get($response, 'numbering.3.proposition_code'));

        $this->assertEquals("A+", array_get($response, 'numbering.9.grade'));
        $this->assertEquals("RF", array_get($response, 'numbering.9.company'));
        $this->assertEquals(null, array_get($response, 'numbering.9.proposition_code'));
        $this->assertEquals("A++", array_get($response, 'numbering.10.grade'));
        $this->assertEquals("RF", array_get($response, 'numbering.10.company'));
        $this->assertEquals(null, array_get($response, 'numbering.10.proposition_code'));
        $this->assertEquals("A", array_get($response, 'numbering.11.grade'));
        $this->assertEquals("RF", array_get($response, 'numbering.11.company'));
        $this->assertEquals(null, array_get($response, 'numbering.11.proposition_code'));
        $this->assertEquals("A+", array_get($response, 'numbering.12.grade'));
        $this->assertEquals("RF", array_get($response, 'numbering.12.company'));
        $this->assertEquals(null, array_get($response, 'numbering.12.proposition_code'));

        $this->checkNumberingGroup(array_get($response, 'numbering', []));
    }

    /**
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testGetPersonalizeFuntongWithNullResponseShouldBeSuccess()
    {
        $mock = m::mock('overload:App\Libraries\Clients\AwsGatewayClient');
        $mock->shouldReceive('get')
             ->andReturn([]);

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')
             ->andReturn(true);
        try {
            $response = VHoraService::personalizeFuntong([
                'ctoken' => 'eaewaeqeasda'
            ]);
        } catch (\Exception $e) {
            $response = [
                'code'    => $e->getCode(),
                'message' => $e->getMessage()
            ];
        }
        $this->assertEquals(404, array_get($response, 'code'));
        $this->assertEquals('Data Not Found', array_get($response, 'message'));
    }

    /**
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testGetPersonalizeFuntongWithNumberingEmpty()
    {

        $fixture = $this->getFixture('personalize_funtong_gateway');
        unset($fixture['numbering']);

        $mock = m::mock('overload:App\Libraries\Clients\AwsGatewayClient');
        $mock->shouldReceive('get')->andReturn($fixture);

        $response = VHoraService::personalizeFuntong([
            'ctoken' => 'eaewaeqeasda',
        ]);

        $this->assertEquals('0', array_get($response, 'resultCode'));
        $this->assertCount(12, array_get($response, 'ascendant.position'));
        $this->assertEmpty(array_get($response, 'numbering'));

    }

    /**
     * @group processAuthentication
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessAuthenticationEmployeeSuccess()
    {
        $mock_request_user_info = new Object_();
        $mock_request_user_info->SALE_CODE = '39004848';
        $mock_request_user_info->THAINAME = 'สมชาย ใจดี';
        $mock_request_user_info->ENGLISHNAME = 'Somchai Jaidee';
        $mock_request_user_info->SHOPCODE = '80000011';
        $mock_request_user_info->CHANNEL_ALIAS = 'TLR';

        $mock_openid = m::mock('overload:App\Libraries\OIDC');
        $mock_openid->shouldReceive('setUniqueKey')->andReturn(true);
        $mock_openid->shouldReceive('setRedirectURL')->andReturn($mock_openid);
        $mock_openid->shouldReceive('addScope')->andReturn($mock_openid);
        $mock_openid->shouldReceive('authenticate')->andReturn($mock_openid);
        $mock_openid->shouldReceive('requestUserInfo')
            ->andReturn($mock_request_user_info);
        $mock_openid->shouldReceive('getAccessToken')
            ->andReturn('access_token');
        $mock_openid->shouldReceive('getIdToken')
            ->andReturn('id_token');

        $mock_aws_gateway = m::mock('overload:App\Libraries\Clients\AwsGatewayClient');
        $mock_aws_gateway->shouldReceive('post')
            ->andReturn(
                [
                    'wssoList' => [
                        'wssoInfoArray' => [
                            [
                                'shopCode' => 80000560,
                                'thaiName' => '- ทรูมูฟช้อป เซ็นทรัล พลาซ่า เวสท์เกต 01',
                                'englishName' => 'True Shop Central Plaza Westgate 01'
                            ],
                            [
                                'shopCode' => 80000561,
                                'thaiName' => '- ทรูมูฟช้อป เซ็นทรัล พลาซ่า เวสท์เกต 02',
                                'englishName' => 'True Shop Central Plaza Westgate 02'
                            ],
                        ]
                    ]
                ]);

        Redis::shouldReceive('set')->andReturn(true);

        $input = [
            'type' => 'employee',
            'state' => '5f0f1db9eea410e25258bc92ef053ce8',
            'session_state' => '0a6ff2e9-c822-4948-ab67-9e010f8c93a9&code=b5081af7-797b-46e3-b620-ceae2d945b53.0a6ff2e9-c822-4948-ab67-9e010f8c93a9.fdcaff50-3f85-44f9-bd94-afb73e08b7bb'
        ];

        $response = VHoraService::processAuthentication($input);

        $this->assertEquals(200, array_get($response, 'code'));
        $this->assertEquals('employee', array_get($response, 'response.data.type'));
        $this->assertEquals('39004848', array_get($response, 'response.data.sale_code'));
        $this->assertEquals('TLR', array_get($response, 'response.data.channel'));
        $this->assertNotEmpty(array_get($response, 'response.data.sale_name'));
        $this->assertNotEmpty(array_get($response, 'response.data.shop'));
    }

    /**
     * @group processAuthentication
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessAuthenticationDealerSuccess()
    {
        $mock_request_user_info = new Object_();
        $mock_request_user_info->SALE_CODE = '39004848';
        $mock_request_user_info->THAINAME = 'สมชาย ใจดี';
        $mock_request_user_info->ENGLISHNAME = 'Somchai Jaidee';
        $mock_request_user_info->SHOPCODE = '80000011|80000084';
        $mock_request_user_info->CHANNEL_ALIAS = 'TLR';

        $mock_openid = m::mock('overload:App\Libraries\OIDC');
        $mock_openid->shouldReceive('setUniqueKey')->andReturn(true);
        $mock_openid->shouldReceive('setRedirectURL')->andReturn($mock_openid);
        $mock_openid->shouldReceive('addScope')->andReturn($mock_openid);
        $mock_openid->shouldReceive('authenticate')->andReturn($mock_openid);
        $mock_openid->shouldReceive('requestUserInfo')
            ->andReturn($mock_request_user_info);
        $mock_openid->shouldReceive('getAccessToken')
            ->andReturn('access_token');
        $mock_openid->shouldReceive('getIdToken')
            ->andReturn('id_token');

        $mock_aws_gateway = m::mock('overload:App\Libraries\Clients\AwsGatewayClient');
        $mock_aws_gateway->shouldReceive('post')
            ->andReturn(
                [
                    'wssoList' => [
                        'wssoInfoArray' => [
                            [
                                'shopCode' => 80000560,
                                'thaiName' => '- ทรูมูฟช้อป เซ็นทรัล พลาซ่า เวสท์เกต 01',
                                'englishName' => 'True Shop Central Plaza Westgate 01'
                            ],
                            [
                                'shopCode' => 80000561,
                                'thaiName' => '- ทรูมูฟช้อป เซ็นทรัล พลาซ่า เวสท์เกต 02',
                                'englishName' => 'True Shop Central Plaza Westgate 02'
                            ],
                        ]
                    ]
                ]);

        Redis::shouldReceive('set')->andReturn(true);

        $input = [
            'type' => 'dealer',
            'state' => '5f0f1db9eea410e25258bc92ef053ce8',
            'session_state' => '0a6ff2e9-c822-4948-ab67-9e010f8c93a9&code=b5081af7-797b-46e3-b620-ceae2d945b53.0a6ff2e9-c822-4948-ab67-9e010f8c93a9.fdcaff50-3f85-44f9-bd94-afb73e08b7bb'
        ];

        $response = VHoraService::processAuthentication($input);

        $this->assertEquals(200, array_get($response, 'code'));
        $this->assertEquals('dealer', array_get($response, 'response.data.type'));
        $this->assertEquals('39004848', array_get($response, 'response.data.sale_code'));
        $this->assertEquals('TLR', array_get($response, 'response.data.channel'));
        $this->assertNotEmpty(array_get($response, 'response.data.sale_name'));
        $this->assertNotEmpty(array_get($response, 'response.data.shop'));
    }

    /**
     * @group processAuthentication
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessAuthenticationCustomerSuccess()
    {
        Redis::shouldReceive('get')->andReturn(json_encode([
            'name' => [
                'th' => '- ทรูมูฟช้อป เซ็นทรัล พลาซ่า เวสท์เกต 01',
                'en' => 'True Shop Central Plaza Westgate 01'
            ]
        ]));

        $input = [
            'shop_code' => '80000560'
        ];

        $response = VHoraService::processAuthentication($input);

        $this->assertEquals(200, array_get($response, 'code'));
        $this->assertEquals(null, array_get($response, 'response.data.type'));
        $this->assertEquals('80000560', array_get($response, 'response.data.shop.code'));
        $this->assertNotEmpty(array_get($response, 'response.data.shop.name'));
    }

    /**
     * @group processAuthentication
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessAuthenticationFailValidationNoQuery()
    {
        $input = [];
        $expected = [
            'code' => 400,
            'message' => 'The sale code field is required when shop code is not present.'
        ];

        $mock_openid = m::mock('overload:LogService');
        $mock_openid->shouldReceive('writeServiceLog')->andReturn(true);

        $response = VHoraService::processAuthentication($input);

        $this->assertEquals(array_get($expected, 'code'), array_get($response, 'code'));
        $this->assertEquals(array_get($expected, 'message'), array_get($response, 'response.errors.description'));
    }

    /**
     * @group processAuthentication
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessAuthenticationFailValidationTypeNotMatch()
    {
        $input = [
            'type' => 'x'
        ];
        $expected = [
            'code' => 400,
            'message' => 'The sale code field is required when shop code is not present.'
        ];

        $mock_openid = m::mock('overload:LogService');
        $mock_openid->shouldReceive('writeServiceLog')->andReturn(true);

        $response = VHoraService::processAuthentication($input);

        $this->assertEquals(array_get($expected, 'code'), array_get($response, 'code'));
        $this->assertEquals(array_get($expected, 'message'), array_get($response, 'response.errors.description'));
    }

    /**
     * @group processAuthentication
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessAuthenticationFailValidationShopCodeNull()
    {
        $input = [
            'shop_code' => null
        ];
        $expected = [
            'code' => 400,
            'message' => 'The sale code field is required when shop code is not present.'
        ];

        $mock_openid = m::mock('overload:LogService');
        $mock_openid->shouldReceive('writeServiceLog')->andReturn(true);

        $response = VHoraService::processAuthentication($input);

        $this->assertEquals(array_get($expected, 'code'), array_get($response, 'code'));
        $this->assertEquals(array_get($expected, 'message'), array_get($response, 'response.errors.description'));
    }

    /**
     * @group processAuthentication
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessAuthenticationFailValidationShopCodeEmpty()
    {
        $input = [
            'shop_code' => ''
        ];
        $expected = [
            'code' => 400,
            'message' => 'The sale code field is required when shop code is not present.'
        ];

        $mock_openid = m::mock('overload:LogService');
        $mock_openid->shouldReceive('writeServiceLog')->andReturn(true);

        $response = VHoraService::processAuthentication($input);

        $this->assertEquals(array_get($expected, 'code'), array_get($response, 'code'));
        $this->assertEquals(array_get($expected, 'message'), array_get($response, 'response.errors.description'));
    }

    /**
     * @group processAuthentication
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessAuthenticationNoRedis()
    {
        Redis::shouldReceive('get')->andReturn();

        $mock_openid = m::mock('overload:LogService');
        $mock_openid->shouldReceive('writeServiceLog')->andReturn(true);

        $mock_aws_gateway = m::mock('overload:App\Libraries\Clients\AwsGatewayClient');
        $mock_aws_gateway->shouldReceive('post')
            ->andReturn(
                [
                    'wssoList' => [
                        'wssoInfoArray' => [
                            [
                                'shopCode' => 80000560,
                                'thaiName' => '- ทรูมูฟช้อป เซ็นทรัล พลาซ่า เวสท์เกต 01',
                                'englishName' => 'True Shop Central Plaza Westgate 01'
                            ]
                        ]
                    ]
                ]);

        Redis::shouldReceive('set')->andReturn(true);

        $input = [
            'shop_code' => '80000560'
        ];

        $response = VHoraService::processAuthentication($input);

        $this->assertEquals(200, array_get($response, 'code'));
        $this->assertArrayHasKey('code', array_get($response, 'response.data.shop'));
        $this->assertArrayHasKey('th', array_get($response, 'response.data.shop.name'));
    }

    /**
     * @group processAuthentication
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessAuthenticationFailOIDC()
    {
        $mock_request_user_info = new Object_();
        $mock_request_user_info->SALE_CODE = '39004848';
        $mock_request_user_info->THAINAME = 'สมชาย ใจดี';
        $mock_request_user_info->ENGLISHNAME = 'Somchai Jaidee';

        $mock_openid = m::mock('overload:App\Libraries\OIDC');
        $mock_openid->shouldReceive('setUniqueKey')->andReturn(true);
        $mock_openid->shouldReceive('setRedirectURL')->andThrow(new \Exception('Throw Exception', 0));

        $mock_openid = m::mock('overload:LogService');
        $mock_openid->shouldReceive('writeServiceLog')->andReturn(true);

        $input = [
            'type' => 'dealer',
            'state' => '5f0f1db9eea410e25258bc92ef053ce8',
            'session_state' => '0a6ff2e9-c822-4948-ab67-9e010f8c93a9&code=b5081af7-797b-46e3-b620-ceae2d945b53.0a6ff2e9-c822-4948-ab67-9e010f8c93a9.fdcaff50-3f85-44f9-bd94-afb73e08b7bb'
        ];

        $response = VHoraService::processAuthentication($input);

        $this->assertEquals(406, array_get($response, 'code'));
        $this->assertEquals('Throw Exception', array_get($response, 'response.errors.description'));
    }

    /**
     * @group testProcessLoginEmployeeStoreOfflineSuccess
     * @group WLSFT-18623
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessLoginEmployeeStoreOfflineSuccess()
    {
        $mock_response = ['response' => ['data' => []], 'code' => 200];

        $mock_openid = m::mock('overload:App\Libraries\OIDC');
        $mock_openid->shouldReceive('setUniqueKey')->andReturn(true);
        $mock_openid->shouldReceive('setRedirectURL')->andReturn($mock_openid);
        $mock_openid->shouldReceive('addScope')->andReturn($mock_openid);
        $mock_openid->shouldReceive('authenticate')->andReturn(true);

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        $response = VHoraService::processLoginStoreOffline(['type' => 'employee']);

        $this->assertEquals($mock_response, $response);
    }

    /**
     * @group testProcessLoginEmployeeStoreOfflineSuccess
     * @group WLSFT-18623
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessLoginDealerStoreOfflineSuccess()
    {
        $mock_response = ['response' => ['data' => []], 'code' => 200];

        $mock_openid = m::mock('overload:App\Libraries\OIDC');
        $mock_openid->shouldReceive('setUniqueKey')->andReturn(true);
        $mock_openid->shouldReceive('setRedirectURL')->andReturn($mock_openid);
        $mock_openid->shouldReceive('addScope')->andReturn($mock_openid);
        $mock_openid->shouldReceive('authenticate')->andReturn(true);

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        $response = VHoraService::processLoginStoreOffline(['type' => 'dealer']);

        $this->assertEquals($mock_response, $response);
    }

    /**
     * @group testProcessLoginEmployeeStoreOfflineFailWithNoParameter
     * @group WLSFT-18623
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessLoginEmployeeStoreOfflineFailWithNoParameter()
    {
        $mock_response = ['response' => ['redirect' => '/offline-store/berfuntong/login?error=010']];

        $mock_openid = m::mock('overload:App\Libraries\OIDC');
        $mock_openid->shouldReceive('setUniqueKey')->andReturn(true);
        $mock_openid->shouldReceive('setRedirectURL')->andReturn($mock_openid);
        $mock_openid->shouldReceive('addScope')->andReturn($mock_openid);
        $mock_openid->shouldReceive('authenticate')->andReturn(true);

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        $response = VHoraService::processLoginStoreOffline(['type2' => 'employee']);

        $this->assertEquals($mock_response, $response);
    }

    /**
     * @group testProcessLoginEmployeeStoreOfflineFailWithInvalidParameter
     * @group WLSFT-18623
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessLoginEmployeeStoreOfflineFailWithInvalidParameter()
    {
        $mock_response = ['response' => ['redirect' => '/offline-store/berfuntong/login?error=010']];

        $mock_openid = m::mock('overload:App\Libraries\OIDC');
        $mock_openid->shouldReceive('setUniqueKey')->andReturn(true);
        $mock_openid->shouldReceive('setRedirectURL')->andReturn($mock_openid);
        $mock_openid->shouldReceive('addScope')->andReturn($mock_openid);
        $mock_openid->shouldReceive('authenticate')->andReturn(true);

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        $response = VHoraService::processLoginStoreOffline(['type' => 'test']);

        $this->assertEquals($mock_response, $response);
    }

    /**
     * @group testProcessLoginEmployeeStoreOfflineFailWithException
     * @group WLSFT-18623
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessLoginEmployeeStoreOfflineFailWithException()
    {
        $mock_response = ['response' => ['redirect' => '/offline-store/berfuntong/login?error=010']];

        $mock_openid = m::mock('overload:App\Libraries\OIDC');
        $mock_openid->shouldReceive('setUniqueKey')->andReturn(true);
        $mock_openid->shouldReceive('setRedirectURL')->andThrow(new \Exception('Internal Server Error', 500));

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        $response = VHoraService::processLoginStoreOffline(['type' => 'employee']);

        $this->assertEquals($mock_response, $response);
    }

    /**
     * @group testProcessVerifyOfflineSuccess
     * @group WLSFT-18623
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessVerifyOfflineSuccess()
    {
        $input = [
            'id_card'      => 1702270537035,
            'sim_type'     => 'postpaid',
            'shop_code'    => 80000084,
            'birth_date'   => '07032540',
            'company_code' => 'RM',
            'proposition'  => 'RMV000000022044'
        ];

        $result_validate    = '{"code":"200","description":"success","correlationId":"2021021217520001","3gwTrackingId":"637571152537165699"}';
        $mock_response_post = [
            0 => 200,
            1 => $result_validate
        ];

        $result = [
            'correlation_id'  => 'dd7b355e-5256-4a25-b3b6-978b7742af7c',
            'result'          => json_decode($result_validate, true),
            'is_exceed_limit' => false,
        ];

        $mock_response = ['response' => $result, 'code' => 200];

        $mock_sim_activation_service = m::mock('alias:App\Services\SimActivationService');
        $mock_sim_activation_service->shouldReceive('validate')->andReturn($mock_response_post);

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        $response = VHoraService::processVerifyOffline($input);

        $this->assertEquals($mock_response['response']['result'], $response['response']['result']);
        $this->assertEquals(false, $response['response']['is_exceed_limit']);
        $this->assertEquals($mock_response['code'], $response['code']);
    }

    /**
     * @group testProcessVerifyOfflineFailWithExceedLimit
     * @group WLSFT-18623
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessVerifyOfflineFailWithExceedLimit()
    {
        $input = [
            'id_card'      => 1702270537035,
            'sim_type'     => 'postpaid',
            'shop_code'    => 80000084,
            'birth_date'   => '07032540',
            'company_code' => 'RM',
            'proposition'  => 'RMV000000022044'
        ];

        $result_validate    = '{"code":"105","description":"Identification over max allow","correlationId":"f256cbb7-a56b-4e8b-80ea-d478d500aeeb","3gwTrackingId":"637572109624404297"}';
        $mock_response_post = [
            0 => 200,
            1 => $result_validate
        ];

        $result = [
            'correlation_id'  => 'dd7b355e-5256-4a25-b3b6-978b7742af7c',
            'result'          => json_decode($result_validate, true),
            'is_exceed_limit' => false,
        ];

        $mock_response = ['response' => $result, 'code' => 406];

        $mock_sim_activation_service = m::mock('alias:App\Services\SimActivationService');
        $mock_sim_activation_service->shouldReceive('validate')->andReturn($mock_response_post);

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        $response = VHoraService::processVerifyOffline($input);

        $this->assertEquals($mock_response['response']['result'], $response['response']['result']);
        $this->assertEquals(true, $response['response']['is_exceed_limit']);
        $this->assertEquals($mock_response['code'], $response['code']);
    }

    /**
     * @group testProcessVerifyOfflineFailWithErrorButHttpCodeIs200
     * @group WLSFT-18623
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessVerifyOfflineFailWithErrorButHttpCodeIs200()
    {
        $input = [
            'id_card'      => 1702270537035,
            'sim_type'     => 'postpaid',
            'shop_code'    => 80000084,
            'birth_date'   => '07032540',
            'company_code' => 'RM',
            'proposition'  => 'RMV000000022044'
        ];

        $result_validate = '{"code":"900","description":"SmartUI fail [code=TMV-PREVERIFY-11004, description=Your ID not correct]","correlationId":"f256cbb7-a56b-4e8b-80ea-d478d500aeeb","3gwTrackingId":"637571930053390561","backendResponseList":{"backendResponseInfoArray":[{"system":"SMARTUI","url":"http://172.19.192.116:8980/profiles/customer/preverify","apiName":"SmartUICustomerPreverifyResponse","code":"900","message":"SmartUI fail [code=TMV-PREVERIFY-11004, description=Your ID not correct]","elapsedTime":"176.8059"}]}}';
        $mock_response_post = [
            0 => 200,
            1 => $result_validate
        ];

        $result = [
            'correlation_id'  => 'dd7b355e-5256-4a25-b3b6-978b7742af7c',
            'result'          => json_decode($result_validate, true),
            'is_exceed_limit' => false,
        ];

        $mock_response = ['response' => $result, 'code' => 406];

        $mock_sim_activation_service = m::mock('alias:App\Services\SimActivationService');
        $mock_sim_activation_service->shouldReceive('validate')->andReturn($mock_response_post);

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        $response = VHoraService::processVerifyOffline($input);

        $this->assertEquals($mock_response['response']['result'], $response['response']['result']);
        $this->assertEquals(false, $response['response']['is_exceed_limit']);
        $this->assertEquals($mock_response['code'], $response['code']);
    }

    /**
     * @group testProcessVerifyOfflineFailWithErrorWithNoIdCard
     * @group WLSFT-18623
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessVerifyOfflineFailWithErrorWithNoIdCard()
    {
        $input = [
            'id_card2'   => 17022705370354,
            'sim_type'   => 'postpaid',
            'shop_code'  => 80000084,
            'birth_date' => '07032540'
        ];

        $mock_response = ['response' => ['data' => 'The id card field is required.'], 'code' => 400];

        $mock_sim_activation_service = m::mock('alias:App\Services\SimActivationService');
        $mock_sim_activation_service->shouldReceive('validate')->never()->andReturn([]);

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        $response = VHoraService::processVerifyOffline($input);

        $this->assertEquals($mock_response, $response);
    }

    /**
     * @group testProcessVerifyOfflineFailWithErrorWithIdCardMoreThan13
     * @group WLSFT-18623
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessVerifyOfflineFailWithErrorWithIdCardMoreThan13()
    {
        $input = [
            'id_card'    => 17022705370354,
            'sim_type'   => 'postpaid',
            'shop_code'  => 80000084,
            'birth_date' => '07032540'
        ];

        $mock_response = ['response' => ['data' => 'The id card must be 13 digits.'], 'code' => 400];

        $mock_sim_activation_service = m::mock('alias:App\Services\SimActivationService');
        $mock_sim_activation_service->shouldReceive('validate')->never()->andReturn([]);

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        $response = VHoraService::processVerifyOffline($input);

        $this->assertEquals($mock_response, $response);
    }

    /**
     * @group testProcessVerifyOfflineFailWithErrorWithNoSimType
     * @group WLSFT-18623
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessVerifyOfflineFailWithErrorWithNoSimType()
    {
        $input = [
            'id_card'    => 1702270537035,
            'sim_type2'  => 'postpaid',
            'shop_code'  => 80000084,
            'birth_date' => '07032540'
        ];

        $mock_response = ['response' => ['data' => 'The sim type field is required.'], 'code' => 400];

        $mock_sim_activation_service = m::mock('alias:App\Services\SimActivationService');
        $mock_sim_activation_service->shouldReceive('validate')->never()->andReturn([]);

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        $response = VHoraService::processVerifyOffline($input);

        $this->assertEquals($mock_response, $response);
    }

    /**
     * @group testProcessVerifyOfflineFailWithErrorWithSimTypeInvalid
     * @group WLSFT-18623
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessVerifyOfflineFailWithErrorWithSimTypeInvalid()
    {
        $input = [
            'id_card'    => 1702270537035,
            'sim_type'   => 'postpaid2',
            'shop_code'  => 80000084,
            'birth_date' => '07032540'
        ];

        $mock_response = ['response' => ['data' => 'The selected sim type is invalid.'], 'code' => 400];

        $mock_sim_activation_service = m::mock('alias:App\Services\SimActivationService');
        $mock_sim_activation_service->shouldReceive('validate')->never()->andReturn([]);

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        $response = VHoraService::processVerifyOffline($input);

        $this->assertEquals($mock_response, $response);
    }

    /**
     * @group testProcessVerifyOfflineFailWithErrorWithNoShopCode
     * @group WLSFT-18623
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessVerifyOfflineFailWithErrorWithNoShopCode()
    {
        $input = [
            'id_card'    => 1702270537035,
            'sim_type'   => 'postpaid',
            'shop_code2' => 80000084,
            'birth_date' => '07032540'
        ];

        $mock_response = ['response' => ['data' => 'The shop code field is required.'], 'code' => 400];

        $mock_sim_activation_service = m::mock('alias:App\Services\SimActivationService');
        $mock_sim_activation_service->shouldReceive('validate')->never()->andReturn([]);

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        $response = VHoraService::processVerifyOffline($input);

        $this->assertEquals($mock_response, $response);
    }

    /**
     * @group testProcessVerifyOfflineFailWithErrorWithNoBirthDate
     * @group WLSFT-18623
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessVerifyOfflineFailWithErrorWithNoBirthDate()
    {
        $input = [
            'id_card'     => 1702270537035,
            'sim_type'    => 'postpaid',
            'shop_code'   => 80000084,
            'birth_date2' => '07032540'
        ];

        $mock_response = ['response' => ['data' => 'The birth date field is required.'], 'code' => 400];

        $mock_sim_activation_service = m::mock('alias:App\Services\SimActivationService');
        $mock_sim_activation_service->shouldReceive('validate')->never()->andReturn([]);

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        $response = VHoraService::processVerifyOffline($input);

        $this->assertEquals($mock_response, $response);
    }

    /**
     * @group testProcessVerifyOfflineFailWithErrorWithBirthDateMoreThan8
     * @group WLSFT-18623
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessVerifyOfflineFailWithErrorWithBirthDateMoreThan8()
    {
        $input = [
            'id_card'    => 1702270537035,
            'sim_type'   => 'postpaid',
            'shop_code'  => 80000084,
            'birth_date' => '070325402'
        ];

        $mock_response = ['response' => ['data' => 'The birth date must be 8 digits.'], 'code' => 400];

        $mock_sim_activation_service = m::mock('alias:App\Services\SimActivationService');
        $mock_sim_activation_service->shouldReceive('validate')->never()->andReturn([]);

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        $response = VHoraService::processVerifyOffline($input);

        $this->assertEquals($mock_response, $response);
    }

    /**
     * @group testProcessVerifyOfflineFailWithErrorWithNoCompanyCode
     * @group WLSFT-18623
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessVerifyOfflineFailWithErrorWithNoCompanyCode()
    {
        $input = [
            'id_card'       => 1702270537035,
            'sim_type'      => 'postpaid',
            'shop_code'     => 80000084,
            'birth_date'    => '07032540',
            'company_code2' => 'RM',
            'proposition'   => 'RMV000000022044'
        ];

        $mock_response = ['response' => ['data' => 'The company code field is required.'], 'code' => 400];

        $mock_sim_activation_service = m::mock('alias:App\Services\SimActivationService');
        $mock_sim_activation_service->shouldReceive('validate')->never()->andReturn([]);

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        $response = VHoraService::processVerifyOffline($input);

        $this->assertEquals($mock_response, $response);
    }

    /**
     * @group testProcessVerifyOfflineFailWithErrorWithNoProposition
     * @group WLSFT-18623
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessVerifyOfflineFailWithErrorWithNoProposition()
    {
        $input = [
            'id_card'      => 1702270537035,
            'sim_type'     => 'postpaid',
            'shop_code'    => 80000084,
            'birth_date'   => '07032540',
            'company_code' => 'RM',
            'proposition2' => 'RMV000000022044'
        ];

        $mock_response = ['response' => ['data' => 'The proposition field is required.'], 'code' => 400];

        $mock_sim_activation_service = m::mock('alias:App\Services\SimActivationService');
        $mock_sim_activation_service->shouldReceive('validate')->never()->andReturn([]);

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        $response = VHoraService::processVerifyOffline($input);

        $this->assertEquals($mock_response, $response);
    }

    /**
     * @group testProcessVerifyOfflineFailWithException
     * @group WLSFT-18623
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessVerifyOfflineFailWithException()
    {
        $input = [
            'id_card'      => 1702270537035,
            'sim_type'     => 'postpaid',
            'shop_code'    => 80000084,
            'birth_date'   => '07032540',
            'company_code' => 'RM',
            'proposition'  => 'RMV000000022044'
        ];

        $mock_response = ['response' => ['data' => 'Internal Server Error'], 'code' => 500];

        $mock_sim_activation_service = m::mock('alias:App\Services\SimActivationService');
        $mock_sim_activation_service->shouldReceive('validate')->andThrow(new \Exception('Internal Server Error', 500));

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        $response = VHoraService::processVerifyOffline($input);
        $this->assertEquals($mock_response, $response);
    }

    /**
     * @group processAuthenticationLogout
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessAuthenticationLogoutSuccess()
    {
        Redis::shouldReceive('get')->andReturn([
            'access_token' => 'xxxxx',
            'id_token' => 'yyyyy'
        ]);

        Redis::shouldReceive('del')->andReturn(true);

        $mock_openid = m::mock('overload:App\Libraries\OIDC');
        $mock_openid->shouldReceive('signOut')->andReturn(true);

        $input = [
            'type' => 'employee',
            'key' => 'MzkwMDQ4NDgxNjIxODQ3NjM4'
        ];

        $response = VHoraService::processAuthenticationLogout($input);
        $this->assertEquals(200, array_get($response, 'code'));
        $this->assertTrue( array_get($response, 'response.data'));
    }

    /**
     * @group processAuthenticationLogout
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessAuthenticationLogoutSuccessWithErrorCode()
    {
        Redis::shouldReceive('get')->andReturn([
            'access_token' => 'xxxxx',
            'id_token' => 'yyyyy'
        ]);

        Redis::shouldReceive('del')->andReturn(true);

        $mock_openid = m::mock('overload:App\Libraries\OIDC');
        $mock_openid->shouldReceive('signOut')->andReturn(true);

        $input = [
            'type' => 'employee',
            'key' => 'MzkwMDQ4NDgxNjIxODQ3NjM4',
            'error' => 020
        ];

        $response = VHoraService::processAuthenticationLogout($input);
        $this->assertEquals(200, array_get($response, 'code'));
        $this->assertTrue( array_get($response, 'response.data'));
    }

    /**
     * @group processAuthenticationLogout
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessAuthenticationLogoutFailValidateType()
    {
        Redis::shouldReceive('get')->andReturn([
            'access_token' => 'xxxxx',
            'id_token' => 'yyyyy'
        ]);

        Redis::shouldReceive('del')->andReturn(true);

        $mock_openid = m::mock('overload:App\Libraries\OIDC');
        $mock_openid->shouldReceive('signOut')->andReturn(true);

        $input = [
            'typex' => 'employee',
            'key' => 'MzkwMDQ4NDgxNjIxODQ3NjM4'
        ];

        $response = VHoraService::processAuthenticationLogout($input);

        $this->assertEquals(400, array_get($response, 'code'));
        $this->assertEquals('The type field is required.',  array_get($response, 'response.errors.description'));
    }

    /**
     * @group processAuthenticationLogout
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessAuthenticationLogoutFailValidateTypeEmpty()
    {
        Redis::shouldReceive('get')->andReturn([
            'access_token' => 'xxxxx',
            'id_token' => 'yyyyy'
        ]);

        Redis::shouldReceive('del')->andReturn(true);

        $mock_openid = m::mock('overload:App\Libraries\OIDC');
        $mock_openid->shouldReceive('signOut')->andReturn(true);

        $input = [
            'type' => '',
            'key' => 'MzkwMDQ4NDgxNjIxODQ3NjM4'
        ];

        $response = VHoraService::processAuthenticationLogout($input);

        $this->assertEquals(400, array_get($response, 'code'));
        $this->assertEquals('The type field is required.',  array_get($response, 'response.errors.description'));
    }

    /**
     * @group processAuthenticationLogout
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessAuthenticationLogoutFailValidateTypeNull()
    {
        Redis::shouldReceive('get')->andReturn([
            'access_token' => 'xxxxx',
            'id_token' => 'yyyyy'
        ]);

        Redis::shouldReceive('del')->andReturn(true);

        $mock_openid = m::mock('overload:App\Libraries\OIDC');
        $mock_openid->shouldReceive('signOut')->andReturn(true);

        $input = [
            'type' => null,
            'key' => 'MzkwMDQ4NDgxNjIxODQ3NjM4'
        ];

        $response = VHoraService::processAuthenticationLogout($input);

        $this->assertEquals(400, array_get($response, 'code'));
        $this->assertEquals('The type field is required.',  array_get($response, 'response.errors.description'));
    }

    /**
     * @group processAuthenticationLogout
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessAuthenticationLogoutFailValidateKey()
    {
        Redis::shouldReceive('get')->andReturn([
            'access_token' => 'xxxxx',
            'id_token' => 'yyyyy'
        ]);

        Redis::shouldReceive('del')->andReturn(true);

        $mock_openid = m::mock('overload:App\Libraries\OIDC');
        $mock_openid->shouldReceive('signOut')->andReturn(true);

        $input = [
            'type' => 'employee',
            'keyx' => 'MzkwMDQ4NDgxNjIxODQ3NjM4'
        ];

        $response = VHoraService::processAuthenticationLogout($input);

        $this->assertEquals(400, array_get($response, 'code'));
        $this->assertEquals('The key field is required.',  array_get($response, 'response.errors.description'));
    }

    /**
     * @group processAuthenticationLogout
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessAuthenticationLogoutFailValidateKeyEmpty()
    {
        Redis::shouldReceive('get')->andReturn([
            'access_token' => 'xxxxx',
            'id_token' => 'yyyyy'
        ]);

        Redis::shouldReceive('del')->andReturn(true);

        $mock_openid = m::mock('overload:App\Libraries\OIDC');
        $mock_openid->shouldReceive('signOut')->andReturn(true);

        $input = [
            'type' => 'employee',
            'key' => ''
        ];

        $response = VHoraService::processAuthenticationLogout($input);

        $this->assertEquals(400, array_get($response, 'code'));
        $this->assertEquals('The key field is required.',  array_get($response, 'response.errors.description'));
    }

    /**
     * @group processAuthenticationLogout
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessAuthenticationLogoutFailValidateKeyNull()
    {
        Redis::shouldReceive('get')->andReturn([
            'access_token' => 'xxxxx',
            'id_token' => 'yyyyy'
        ]);

        Redis::shouldReceive('del')->andReturn(true);

        $mock_openid = m::mock('overload:App\Libraries\OIDC');
        $mock_openid->shouldReceive('signOut')->andReturn(true);

        $input = [
            'type' => 'employee',
            'key' => null
        ];

        $response = VHoraService::processAuthenticationLogout($input);

        $this->assertEquals(400, array_get($response, 'code'));
        $this->assertEquals('The key field is required.',  array_get($response, 'response.errors.description'));
    }

    /**
     * @group processAuthenticationLogout
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessAuthenticationLogoutFailException()
    {
        Redis::shouldReceive('get')->andReturn([
            'access_token' => 'xxxxx',
            'id_token' => 'yyyyy'
        ]);

        Redis::shouldReceive('del')->andReturn(true);

        $mock_openid = m::mock('overload:App\Libraries\OIDC');
        $mock_openid->shouldReceive('signOut')->andThrow(new \Exception('Throw Exception',  503));

        $input = [
            'type' => 'employee',
            'key' => 'MzkwMDQ4NDgxNjIxODQ3NjM4'
        ];

        $response = VHoraService::processAuthenticationLogout($input);

        $this->assertEquals(503, array_get($response, 'code'));
        $this->assertEquals('Throw Exception',  array_get($response, 'response.errors.description'));
    }

    /**
     * @group testProcessGetDealerInfoSuccessWithRedis
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessGetDealerInfoSuccessWithRedis()
    {
        Redis::shouldReceive('get')->andReturn('{"name":{"en":"RedisNameEN","th":"RedisNameTH"}}');

        $input = [
            'shop_code' => 80000011
        ];

        $response = VHoraService::processGetDealerInfo($input);

        $this->assertEquals(200, array_get($response, 'code'));
        $this->assertEquals('RedisNameEN', array_get($response, 'response.data.shop.name.en'));
        $this->assertEquals('RedisNameTH', array_get($response, 'response.data.shop.name.th'));
    }

    /**
     * @group processGetDealerInfo
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessGetDealerInfoSuccessWithShopCode()
    {
        Redis::shouldReceive('get')->andReturn(false);

        $mock_aws_gateway = m::mock('overload:App\Libraries\Clients\AwsGatewayClient');
        $mock_aws_gateway->shouldReceive('post')
            ->andReturn(
                [
                    'wssoList' => [
                        'wssoInfoArray' => [
                            [
                                'shopCode' => 80000560,
                                'thaiName' => '- ทรูมูฟช้อป เซ็นทรัล พลาซ่า เวสท์เกต 01',
                                'englishName' => 'True Shop Central Plaza Westgate 01'
                            ]
                        ]
                    ]
                ]);

        Redis::shouldReceive('set')->andReturn(true);

        $input = [
            'shop_code' => 80000011
        ];

        $response = VHoraService::processGetDealerInfo($input);

        $this->assertEquals(200, array_get($response, 'code'));
        $this->assertArrayHasKey('code', array_get($response, 'response.data.shop'));
        $this->assertArrayHasKey('th', array_get($response, 'response.data.shop.name'));
    }

    /**
     * @group processGetDealerInfo
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessGetDealerInfoSuccessWithSaleCode()
    {
        Redis::shouldReceive('get')->andReturn(false);

        $mock_aws_gateway = m::mock('overload:App\Libraries\Clients\AwsGatewayClient');
        $mock_aws_gateway->shouldReceive('post')
            ->andReturn(
                [
                    'wssoList' => [
                        'wssoInfoArray' => [
                            [
                                'shopCode' => 80000560,
                                'thaiName' => '- ทรูมูฟช้อป เซ็นทรัล พลาซ่า เวสท์เกต 01',
                                'englishName' => 'True Shop Central Plaza Westgate 01'
                            ]
                        ]
                    ]
                ]);

        Redis::shouldReceive('set')->andReturn(true);

        $input = [
            'sale_code' => 80000011
        ];

        $response = VHoraService::processGetDealerInfo($input);

        $this->assertEquals(200, array_get($response, 'code'));
        $this->assertArrayHasKey('code', array_get($response, 'response.data.shop'));
        $this->assertArrayHasKey('th', array_get($response, 'response.data.shop.name'));
    }

    /**
     * @group processGetDealerInfo
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessGetDealerInfoFailValidate()
    {
        $mock_log = m::mock('overload:LogService');
        $mock_log->shouldReceive('writeServiceLog')->andReturn(true);

        $input = [
            'sale_codex' => 80000011
        ];

        $response = VHoraService::processGetDealerInfo($input);

        $this->assertEquals(200, array_get($response, 'code'));
        $this->assertArrayHasKey('data', array_get($response, 'response'));
        $this->assertEmpty(array_get($response, 'data'));
    }

    /**
     * @group processGetDealerInfo
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessGetDealerInfoFailException()
    {
        $mock_log = m::mock('overload:LogService');
        $mock_log->shouldReceive('writeServiceLog')->andReturn(true);

        Redis::shouldReceive('get')->andThrow(new \Exception('Throw Exception', 406));

        $input = [
            'sale_code' => 80000011
        ];

        $response = VHoraService::processGetDealerInfo($input);

        $this->assertEquals(200, array_get($response, 'code'));
        $this->assertArrayHasKey('data', array_get($response, 'response'));
        $this->assertEmpty(array_get($response, 'data'));
    }

    /**
     * @group testGetPersonalizeFuntong
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testGetPersonalizeFuntongShouldBeSuccessWithBundling()
    {
        $fixture = $this->getFixture('personalize_funtong_gateway');
        $mock    = m::mock('overload:App\Libraries\Clients\AwsGatewayClient');
        $mock->shouldReceive('get')->andReturn($fixture);
        $mock_response[] = [
            'configuration' => '{"rm":{"grades":[{"grade":"A++","synonym":"A","propo_code":"0088971","propo_amdoc":"RMV000000022048","bundling":{"proposition_code":"0092943","proposition_amdoc":"RMV000000023449"}},{"grade":"A+","synonym":"B","propo_code":"0088970","propo_amdoc":"RMV000000022047","bundling":{"proposition_code":"0092945","proposition_amdoc":"RMV000000023450"}},{"grade":"A","synonym":"C","propo_code":"0088969","propo_amdoc":"RMV000000022046","bundling":{"proposition_code":"0092947","proposition_amdoc":"RMV000000023451"}}]},"rf":{"grades":[]}}'
        ];

        $mock_model = m::mock('overload:App\Models\TruemovehSettingsModel')->makePartial();
        $mock_model->shouldReceive('findSettingKey')
            ->andReturn($mock_response);
        $mock_model->shouldReceive('findFirstWithKey')
            ->with('vhora_high_tier_configs')
            ->andReturn($mock_model)
            ->shouldReceive('toArray')
            ->andReturn($this->getFixture('vhora/vhora_high_tier_configs'));      
            
        $this->mockRedis();    

        $response = VHoraService::personalizeFuntong([
            'ctoken'  => 'eaewaeqeasda',
            'cnt'     => 3,
            'channel' => 'offline'
        ]);
        foreach (Arr::get($response, 'response.numbering', []) as $record) {
            $this->assertArrayHasKey('bundling', $record);
            if (Arr::get($record, 'company') == "RM") $this->assertNotEmpty(Arr::get($record, 'bundling'));
        }

        $this->checkNumberingGroup(array_get($response, 'numbering', []));
    }
    /**
     * @group testGetPersonalizeFuntong
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testGetPersonalizeFuntongShouldBeSuccessWithNullBundling()
    {
        $fixture = $this->getFixture('personalize_funtong_gateway');
        $mock    = m::mock('overload:App\Libraries\Clients\AwsGatewayClient');
        $mock->shouldReceive('get')->andReturn($fixture);
        $mock_response[] = [
            'configuration' => '{"rm":{"grades":[{"grade":"A++","synonym":"A","propo_code":"0088971","propo_amdoc":"RMV000000022048","bundling":{"proposition_code":"0092943","proposition_amdoc":"RMV000000023449"}},{"grade":"A+","synonym":"B","propo_code":"0088970","propo_amdoc":"RMV000000022047","bundling":{"proposition_code":"0092945","proposition_amdoc":"RMV000000023450"}},{"grade":"A","synonym":"C","propo_code":"0088969","propo_amdoc":"RMV000000022046","bundling":{"proposition_code":"0092947","proposition_amdoc":"RMV000000023451"}}]},"rf":{"grades":[]}}'
        ];
        $mock_model = m::mock('overload:App\Models\TruemovehSettingsModel')->makePartial();
        $mock_model->shouldReceive('findSettingKey')
            ->andReturn($mock_response);
        $mock_model->shouldReceive('findFirstWithKey')
            ->with('vhora_high_tier_configs')
            ->andReturn($mock_model)
            ->shouldReceive('toArray')
            ->andReturn($this->getFixture('vhora/vhora_high_tier_configs'));      
        $this->mockRedis();

        $mock_model_config_skip = m::mock('overload:App\Models\TruemovehConfigModel')->makePartial();
        $mock_model_config_skip->shouldReceive('findFirst')
            ->with('vhora-offline-shop')
            ->andReturn([
                'value' => '{ "7-11": { "shop_code": "711", "name": { "th": "7 Eleven สาขาใกล้บ้านท่าน" }, "channel": "3GW-TRUESTORE", "prepaid": { "campiagn_id": "TSIS_C017", "subscriber_type": "pre", "skip_bundle": true }, "postpaid": { "campiagn_id": "TSIS_C018", "subscriber_type": "pos", "skip_bundle": true } }, "lotus": { "shop_code": "lotus", "name": { "th": "lotus สาขาใกล้บ้านท่าน" }, "channel": "3GW-TRUESTORE", "prepaid": { "campiagn_id": "TSIS_C017", "subscriber_type": "pre", "skip_bundle": true }, "postpaid": { "campiagn_id": "TSIS_C018", "subscriber_type": "pos", "skip_bundle": true } } }'
            ]);

        $response = VHoraService::personalizeFuntong([
            'channel' => 'offline',
            'shop'    => 'lotus'
        ]);
        foreach (Arr::get($response, 'numbering', []) as $record) {
            $this->assertArrayHasKey('bundling', $record);
            $this->assertEmpty(Arr::get($record, 'bundling'));
        }
        $this->checkNumberingGroup(array_get($response, 'numbering', []));
    }

    /**
     * @group testGetPersonalizeFuntong
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testGetPersonalizeFuntongShouldBeSuccessWithNullBundlingAndCacheNumberingGroup()
    {
        $fixture = $this->getFixture('personalize_funtong_gateway');
        $mock    = m::mock('overload:App\Libraries\Clients\AwsGatewayClient');
        $mock->shouldReceive('get')->andReturn($fixture);
        $mock_response[] = [
            'configuration' => '{"rm":{"grades":[{"grade":"A++","synonym":"A","propo_code":"0088971","propo_amdoc":"RMV000000022048","bundling":{"proposition_code":"0092943","proposition_amdoc":"RMV000000023449"}},{"grade":"A+","synonym":"B","propo_code":"0088970","propo_amdoc":"RMV000000022047","bundling":{"proposition_code":"0092945","proposition_amdoc":"RMV000000023450"}},{"grade":"A","synonym":"C","propo_code":"0088969","propo_amdoc":"RMV000000022046","bundling":{"proposition_code":"0092947","proposition_amdoc":"RMV000000023451"}}]},"rf":{"grades":[]}}'
        ];

        $vhora_high_tier_configs = $this->getFixture('vhora/vhora_high_tier_configs');

        $mock_model = m::mock('overload:App\Models\TruemovehSettingsModel')->makePartial();
        $mock_model->shouldReceive('findSettingKey')
            ->andReturn($mock_response);
        $mock_model->shouldReceive('findFirstWithKey')
            ->with('vhora_high_tier_configs')
            ->andReturn($mock_model)
            ->shouldReceive('toArray')
            ->andReturn($vhora_high_tier_configs);
        
        $vhora_high_tier_configs = Arr::get($vhora_high_tier_configs, 'value');

        Redis::shouldReceive('get')->andReturn($vhora_high_tier_configs);
        Redis::shouldReceive('set')->andReturn(true);

        $mock_model_config_skip = m::mock('overload:App\Models\TruemovehConfigModel')->makePartial();
        $mock_model_config_skip->shouldReceive('findFirst')
            ->with('vhora-offline-shop')
            ->andReturn([
                'value' => '{ "7-11": { "shop_code": "711", "name": { "th": "7 Eleven สาขาใกล้บ้านท่าน" }, "channel": "3GW-TRUESTORE", "prepaid": { "campiagn_id": "TSIS_C017", "subscriber_type": "pre", "skip_bundle": true }, "postpaid": { "campiagn_id": "TSIS_C018", "subscriber_type": "pos", "skip_bundle": true } }, "lotus": { "shop_code": "lotus", "name": { "th": "lotus สาขาใกล้บ้านท่าน" }, "channel": "3GW-TRUESTORE", "prepaid": { "campiagn_id": "TSIS_C017", "subscriber_type": "pre", "skip_bundle": true }, "postpaid": { "campiagn_id": "TSIS_C018", "subscriber_type": "pos", "skip_bundle": true } } }'
            ]);

        $response = VHoraService::personalizeFuntong([
            'channel' => 'offline',
            'shop'    => 'lotus'
        ]);
        foreach (Arr::get($response, 'numbering', []) as $record) {
            $this->assertArrayHasKey('bundling', $record);
            $this->assertEmpty(Arr::get($record, 'bundling'));
        }
        $this->checkNumberingGroup(array_get($response, 'numbering', []));
    }

    /*
    * @group testProcessPlaceOrderOfflineSuccessWithPos
    * @runInSeparateProcess
    * @preserveGlobalState disabled
    */
    public function testProcessPlaceOrderOfflineSuccessWithPos()
    {
        $input = json_decode('{"form":{"selected_msisdn":"0645902144","proposition_amdoc":"PRE000000000010","product_id":"L91597283","inventory_id":"3088880","store_id":"941527","companyCode":"RF","dealerCode":"80000011","birthdate":"09101978","phone_submit":"0890297909","shop_data_name":"7-11"},"pricePlan":{"price_plan":"SMRTEP87","id":"9525","description":"New Mat sim prepay 299Bt","name":"New Mat sim prepay 299Bt","code":"R21NDLUCK","sim_type":"prepaid","price":"0","recommended":"0","proposition_nas_code":"0095097","proposition_term_short":"\u0e40\u0e1a\u0e2d\u0e23\u0e4c\u0e1f\u0e31\u0e19\u0e18\u0e07 \u0e15\u0e23\u0e07\u0e25\u0e31\u0e04\u0e19\u0e32\u0e23\u0e32\u0e28\u0e35 - Prepaid (RF)","campaign_code":"AN547"},"shopOffline":{"type":null,"shopCode":"80000011","shopName":{"th":"\u0e17\u0e35\u0e40\u0e2d\u0e2a\u0e40\u0e2d\u0e47\u0e21127 \u0e17\u0e35\u0e2d\u0e32\u0e23\u0e4c\u0e40\u0e2d\u0e47\u0e19011","en":"TSM127 TRN011"}},"id":{"id":"1212121212121","correlationId":"4774e273-7258-4d61-8646-99413e25247d"},"cToken":null,"image":null}', true);

        $mock_input = m::mock('overload:input');
        $mock_input->shouldReceive('all')->andReturn($input);

        $mock_redis_data = '{"7-11":{"name":"7 Eleven สาขาใกล้บ้านท่าน","channel":"3GW-TRUESTORE","prepaid":{"campiagn_id":"TSIS_C017", "subscriber_type":"pre","skip_bundle" : true},"postpaid":{"campiagn_id":"TSIS_C018", "subscriber_type":"pos","skip_bundle" : true}},"lotus":{"name":"Lotus สาขาใกล้บ้านท่าน","channel":"3GW-TRUESTORE","prepaid":{"campiagn_id":"TSIS_C017","subscriber_type":"pre","skip_bundle" : true},"postpaid":{"campiagn_id":"TSIS_C018","subscriber_type":"pos","skip_bundle" : true}}}';

        $mock_reserve_number_service_result = ['is_pass' => true];
        $mock_wls_service_result = [
            0 => 200,
            1 => '{"code":"200","description":"Success","correlationId":"ADS2020111515120000001","orderId":"20210705486234712598","extraData":{"barcodeUrl ":"https://xxxx/55286888481912863559"}}'
        ];

        $mock_order_service_result = json_decode('{"id":11650453,"secureKey":"800011650453","is_redirect":false,"redirectUrl":"https://order.wls-dev.com/v1/payment/foreground?payment_id=9191001891722","payment_id":"9191001891722","cybs_detail":null,"code":200,"message":"success"}', true);

        $mock_response = ['response' => ['data' => $mock_order_service_result], 'code' => 200];

        $mock_reserve_number_service = m::mock('alias:App\Services\VHora\ReserveNumberService');
        $mock_reserve_number_service->shouldReceive('postReserveNumber')->once()->andReturn($mock_reserve_number_service_result);

        $mock_wls_service = m::mock('alias:App\Services\WlsService');
        $mock_wls_service->shouldReceive('operateRequestAction')->once()->andReturn($mock_wls_service_result);
        $mock_wls_service->shouldReceive('dateToThai')->once()->andReturn('วันที่ 23 กรกฎาคม 1996');

        $store_service = \Mockery::mock('overload:App\Services\StoreService');
        $store_service->shouldReceive('processGetExternalNasCodeByNasCode')->andReturn('0095097');
        $store_service->shouldReceive('processGetExternalPricePlanCodeByPricePlanCode')->andReturn('SMRTEP87');

        $mock_order_request = m::mock('overload:App\Libraries\RequestData\OrderRequest');
        $mock_order_request->shouldReceive('setFormatBirthDate')->once()->andReturn(date_create_from_format('jmY', '' . '2307' . '1453'));

        $mock_order_service = m::mock('overload:App\Services\OrderService');
        $mock_order_service->shouldReceive('placeOrderOffline')->once()->andReturn($mock_order_service_result);

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        Redis::shouldReceive('set')->andReturn(true);
        Redis::shouldReceive('get')->with('vhora-offline-shop')->andReturn($mock_redis_data);

        $response = VHoraService::processPlaceOrderOffline($mock_input);
        $this->assertEquals($mock_response, $response);
    }

    /**
     * @group testProcessPlaceOrderOfflineSuccessWithPosAndHaveConfigNasChannel
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessPlaceOrderOfflineSuccessWithPosAndHaveConfigNasChannel()
    {
        $input = json_decode('{"form":{"selected_msisdn":"0645902144","proposition_amdoc":"PRE000000000010","product_id":"L91597283","inventory_id":"3088880","store_id":"941527","companyCode":"RF","dealerCode":"80000011","package_code":"pre299","birthdate":"09101978","phone_submit":"0890297909","shop_data_name":"7-11"},"pricePlan":{"price_plan":"SMRTEP87","id":"9525","description":"New Mat sim prepay 299Bt","name":"New Mat sim prepay 299Bt","code":"R21NDLUCK","sim_type":"prepaid","price":"0","recommended":"0","proposition_nas_code":"0095097","proposition_term_short":"\u0e40\u0e1a\u0e2d\u0e23\u0e4c\u0e1f\u0e31\u0e19\u0e18\u0e07 \u0e15\u0e23\u0e07\u0e25\u0e31\u0e04\u0e19\u0e32\u0e23\u0e32\u0e28\u0e35 - Prepaid (RF)","campaign_code":"AN547"},"shopOffline":{"type":null,"shopCode":"80000011","shopName":{"th":"\u0e17\u0e35\u0e40\u0e2d\u0e2a\u0e40\u0e2d\u0e47\u0e21127 \u0e17\u0e35\u0e2d\u0e32\u0e23\u0e4c\u0e40\u0e2d\u0e47\u0e19011","en":"TSM127 TRN011"}},"id":{"id":"1212121212121","correlationId":"4774e273-7258-4d61-8646-99413e25247d"},"cToken":null,"image":null}', true);

        $mock_input = m::mock('overload:input');
        $mock_input->shouldReceive('all')->andReturn($input);

        $mock_redis_data = '{"7-11":{"name":"7 Eleven สาขาใกล้บ้านท่าน","nas_channel":"FNT-711","channel":"3GW-TRUESTORE","prepaid":{"campiagn_id":"TSIS_C017", "subscriber_type":"pre","skip_bundle" : true},"postpaid":{"campiagn_id":"TSIS_C018", "subscriber_type":"pos","skip_bundle" : true}},"lotus":{"name":"Lotus สาขาใกล้บ้านท่าน","channel":"3GW-TRUESTORE","prepaid":{"campiagn_id":"TSIS_C017","subscriber_type":"pre","skip_bundle" : true},"postpaid":{"campiagn_id":"TSIS_C018","subscriber_type":"pos","skip_bundle" : true}}}';

        $mock_reserve_number_service_result = ['is_pass' => true];
        $mock_wls_service_result = [
            0 => 200,
            1 => '{"code":"200","description":"Success","correlationId":"ADS2020111515120000001","orderId":"20210705486234712598","extraData":{"barcodeUrl ":"https://xxxx/55286888481912863559"}}'
        ];

        $mock_order_service_result = json_decode('{"id":11650453,"secureKey":"800011650453","is_redirect":false,"redirectUrl":"https://order.wls-dev.com/v1/payment/foreground?payment_id=9191001891722","payment_id":"9191001891722","cybs_detail":null,"code":200,"message":"success"}', true);

        $mock_response = ['response' => ['data' => $mock_order_service_result], 'code' => 200];

        $mock_reserve_number_service = m::mock('alias:App\Services\VHora\ReserveNumberService');
        $mock_reserve_number_service->shouldReceive('postReserveNumber')->once()->andReturn($mock_reserve_number_service_result);

        $store_service = \Mockery::mock('overload:App\Services\StoreService');
        $store_service->shouldReceive('processGetExternalNasCodeByNasCode')->andReturn('0095097');
        $store_service->shouldReceive('processGetExternalPricePlanCodeByPricePlanCode')->andReturn('SMRTEP87');

        $mock_wls_service = m::mock('alias:App\Services\WlsService');
        $mock_wls_service->shouldReceive('operateRequestAction')->once()->andReturn($mock_wls_service_result);
        $mock_wls_service->shouldReceive('dateToThai')->once()->andReturn('วันที่ 23 กรกฎาคม 1996');

        $mock_order_request = m::mock('overload:App\Libraries\RequestData\OrderRequest');
        $mock_order_request->shouldReceive('setFormatBirthDate')->once()->andReturn(date_create_from_format('jmY', '' . '2307' . '1453'));

        $mock_order_service = m::mock('overload:App\Services\OrderService');
        $mock_order_service->shouldReceive('placeOrderOffline')->once()->andReturn($mock_order_service_result);

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        Redis::shouldReceive('set')->andReturn(true);
        Redis::shouldReceive('get')->with('vhora-offline-shop')->andReturn($mock_redis_data);

        $response = VHoraService::processPlaceOrderOffline($mock_input);
        $this->assertEquals($mock_response, $response);
    }

    /**
     * @group testProcessPlaceOrderOfflineWithPosFailShopNameNotFound
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessPlaceOrderOfflineWithPosFailShopNameNotFound()
    {
        $input = json_decode('{"form":{"selected_msisdn":"0645902144","proposition_amdoc":"PRE000000000010","product_id":"L91597283","inventory_id":"3088880","store_id":"941527","companyCode":"RF","dealerCode":"80000011","package_code":"pre299","birthdate":"09101978","phone_submit":"0890297909","shop_data_name":"cp"},"pricePlan":{"id":"9525","description":"New Mat sim prepay 299Bt","name":"New Mat sim prepay 299Bt","code":"R21NDLUCK","sim_type":"prepaid","price":"0","recommended":"0","proposition_nas_code":"0095097","proposition_term_short":"\u0e40\u0e1a\u0e2d\u0e23\u0e4c\u0e1f\u0e31\u0e19\u0e18\u0e07 \u0e15\u0e23\u0e07\u0e25\u0e31\u0e04\u0e19\u0e32\u0e23\u0e32\u0e28\u0e35 - Prepaid (RF)","campaign_code":"AN547"},"shopOffline":{"type":null,"shopCode":"80000011","shopName":{"th":"\u0e17\u0e35\u0e40\u0e2d\u0e2a\u0e40\u0e2d\u0e47\u0e21127 \u0e17\u0e35\u0e2d\u0e32\u0e23\u0e4c\u0e40\u0e2d\u0e47\u0e19011","en":"TSM127 TRN011"}},"id":{"id":"1212121212121","correlationId":"4774e273-7258-4d61-8646-99413e25247d"},"cToken":null,"image":null}', true);

        $mock_input = m::mock('overload:input');
        $mock_input->shouldReceive('all')->andReturn($input);

        $mock_redis_data = '{"7-11":{"name":"7 Eleven สาขาใกล้บ้านท่าน","channel":"3GW-TRUESTORE","prepaid":{"campiagn_id":"TSIS_C017", "subscriber_type":"pre","skip_bundle" : true},"postpaid":{"campiagn_id":"TSIS_C018", "subscriber_type":"pos","skip_bundle" : true}},"lotus":{"name":"Lotus สาขาใกล้บ้านท่าน","channel":"3GW-TRUESTORE","prepaid":{"campiagn_id":"TSIS_C017","subscriber_type":"pre","skip_bundle" : true},"postpaid":{"campiagn_id":"TSIS_C018","subscriber_type":"pos","skip_bundle" : true}}}';

        $mock_reserve_number_service_result = ['is_pass' => true];
        $mock_wls_service_result = [
            0 => 200,
            1 => '{"code":"200","description":"Success","correlationId":"ADS2020111515120000001","orderId":"20210705486234712598","extraData":{"barcodeUrl ":"https://xxxx/55286888481912863559"}}'
        ];

        $mock_order_service_result = json_decode('{"id":11650453,"secureKey":"800011650453","is_redirect":false,"redirectUrl":"https://order.wls-dev.com/v1/payment/foreground?payment_id=9191001891722","payment_id":"9191001891722","cybs_detail":null,"code":200,"message":"success"}', true);

        $mock_response = ['response' => ['data' => 'Shop name is invalid'], 'code' => 404];

        $mock_reserve_number_service = m::mock('alias:App\Services\VHora\ReserveNumberService');
        $mock_reserve_number_service->shouldReceive('postReserveNumber')->never()->andReturn($mock_reserve_number_service_result);

        $store_service = \Mockery::mock('overload:App\Services\StoreService');
        $store_service->shouldReceive('processGetExternalNasCodeByNasCode')->never()->andReturn('0095097');

        $mock_wls_service = m::mock('alias:App\Services\WlsService');
        $mock_wls_service->shouldReceive('operateRequestAction')->never()->andReturn($mock_wls_service_result);

        $mock_order_service = m::mock('overload:App\Services\OrderService');
        $mock_order_service->shouldReceive('placeOrderOffline')->never()->andReturn($mock_order_service_result);

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        Redis::shouldReceive('get')->with('vhora-offline-shop')->andReturn($mock_redis_data);

        $response = VHoraService::processPlaceOrderOffline($mock_input);
        $this->assertEquals($mock_response, $response);
    }

    /**
     * @group testProcessPlaceOrderOfflineWithPosFailCannotSubmitPartialOrder
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessPlaceOrderOfflineWithPosFailCannotSubmitPartialOrder()
    {
        $input = json_decode('{"form":{"selected_msisdn":"0645902144","proposition_amdoc":"PRE000000000010","product_id":"L91597283","inventory_id":"3088880","store_id":"941527","companyCode":"RF","dealerCode":"80000011","package_code":"pre299","birthdate":"09101978","phone_submit":"0890297909","shop_data_name":"7-11"},"pricePlan":{"price_plan":"SMRTEP87","id":"9525","description":"New Mat sim prepay 299Bt","name":"New Mat sim prepay 299Bt","code":"R21NDLUCK","sim_type":"prepaid","price":"0","recommended":"0","proposition_nas_code":"0095097","proposition_term_short":"\u0e40\u0e1a\u0e2d\u0e23\u0e4c\u0e1f\u0e31\u0e19\u0e18\u0e07 \u0e15\u0e23\u0e07\u0e25\u0e31\u0e04\u0e19\u0e32\u0e23\u0e32\u0e28\u0e35 - Prepaid (RF)","campaign_code":"AN547"},"shopOffline":{"type":null,"shopCode":"80000011","shopName":{"th":"\u0e17\u0e35\u0e40\u0e2d\u0e2a\u0e40\u0e2d\u0e47\u0e21127 \u0e17\u0e35\u0e2d\u0e32\u0e23\u0e4c\u0e40\u0e2d\u0e47\u0e19011","en":"TSM127 TRN011"}},"id":{"id":"1212121212121","correlationId":"4774e273-7258-4d61-8646-99413e25247d"},"cToken":null,"image":null}', true);

        $mock_input = m::mock('overload:input');
        $mock_input->shouldReceive('all')->andReturn($input);

        $mock_redis_data = '{"7-11":{"name":"7 Eleven สาขาใกล้บ้านท่าน","channel":"3GW-TRUESTORE","prepaid":{"campiagn_id":"TSIS_C017", "subscriber_type":"pre","skip_bundle" : true},"postpaid":{"campiagn_id":"TSIS_C018", "subscriber_type":"pos","skip_bundle" : true}},"lotus":{"name":"Lotus สาขาใกล้บ้านท่าน","channel":"3GW-TRUESTORE","prepaid":{"campiagn_id":"TSIS_C017","subscriber_type":"pre","skip_bundle" : true},"postpaid":{"campiagn_id":"TSIS_C018","subscriber_type":"pos","skip_bundle" : true}}}';

        $mock_reserve_number_service_result = ['is_pass' => true, 'code' => 200];
        $mock_wls_service_result = [
            0 => 404,
            1 => '{"code":"404","description":"Data Not Found","text":"Data Not Found","correlation_id":"25241535552721655422","orderId":"09ffb722d0c2464b96060fd38a1ed21c"}'
        ];

        $mock_order_service_result = json_decode('{"id":11650453,"secureKey":"800011650453","is_redirect":false,"redirectUrl":"https://order.wls-dev.com/v1/payment/foreground?payment_id=9191001891722","payment_id":"9191001891722","cybs_detail":null,"code":200,"message":"success"}', true);

        $mock_response = ['response' => ['data' => 'Submit partial order error'], 'code' => 422];

        $store_service = \Mockery::mock('overload:App\Services\StoreService');
        $store_service->shouldReceive('processGetExternalNasCodeByNasCode')->andReturn('0095097');
        $store_service->shouldReceive('processGetExternalPricePlanCodeByPricePlanCode')->andReturn('SMRTEP87');

        $mock_reserve_number_service = m::mock('alias:App\Services\VHora\ReserveNumberService');
        $mock_reserve_number_service->shouldReceive('postReserveNumber')->once()->andReturn($mock_reserve_number_service_result);

        $mock_wls_service = m::mock('alias:App\Services\WlsService');
        $mock_wls_service->shouldReceive('operateRequestAction')->once()->andReturn($mock_wls_service_result);

        $mock_order_service = m::mock('overload:App\Services\OrderService');
        $mock_order_service->shouldReceive('placeOrderOffline')->once()->andReturn($mock_order_service_result);

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        Redis::shouldReceive('set')->andReturn(true);
        Redis::shouldReceive('get')->with('vhora-offline-shop')->andReturn($mock_redis_data);

        $response = VHoraService::processPlaceOrderOffline($mock_input);
        $this->assertEquals($mock_response, $response);
    }

    /**
     * @group testProcessPlaceOrderOfflineWithPosFailThrowException
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessPlaceOrderOfflineWithPosFailThrowException()
    {
        $input = json_decode('{"form":{"selected_msisdn":"0645902144","proposition_amdoc":"PRE000000000010","product_id":"L91597283","inventory_id":"3088880","store_id":"941527","companyCode":"RF","dealerCode":"80000011","birthdate":"09101978","phone_submit":"0890297909","shop_data_name":"7-11"},"pricePlan":{"price_plan":"SMRTEP87","id":"9525","description":"New Mat sim prepay 299Bt","name":"New Mat sim prepay 299Bt","code":"R21NDLUCK","sim_type":"prepaid","price":"0","recommended":"0","proposition_nas_code":"0095097","proposition_term_short":"\u0e40\u0e1a\u0e2d\u0e23\u0e4c\u0e1f\u0e31\u0e19\u0e18\u0e07 \u0e15\u0e23\u0e07\u0e25\u0e31\u0e04\u0e19\u0e32\u0e23\u0e32\u0e28\u0e35 - Prepaid (RF)","campaign_code":"AN547"},"shopOffline":{"type":null,"shopCode":"80000011","shopName":{"th":"\u0e17\u0e35\u0e40\u0e2d\u0e2a\u0e40\u0e2d\u0e47\u0e21127 \u0e17\u0e35\u0e2d\u0e32\u0e23\u0e4c\u0e40\u0e2d\u0e47\u0e19011","en":"TSM127 TRN011"}},"id":{"id":"1212121212121","correlationId":"4774e273-7258-4d61-8646-99413e25247d"},"cToken":null,"image":null}', true);

        $mock_input = m::mock('overload:input');
        $mock_input->shouldReceive('all')->andReturn($input);

        $mock_redis_data = '{"7-11":{"name":"7 Eleven สาขาใกล้บ้านท่าน","channel":"3GW-TRUESTORE","prepaid":{"campiagn_id":"TSIS_C017", "subscriber_type":"pre","skip_bundle" : true},"postpaid":{"campiagn_id":"TSIS_C018", "subscriber_type":"pos","skip_bundle" : true}},"lotus":{"name":"Lotus สาขาใกล้บ้านท่าน","channel":"3GW-TRUESTORE","prepaid":{"campiagn_id":"TSIS_C017","subscriber_type":"pre","skip_bundle" : true},"postpaid":{"campiagn_id":"TSIS_C018","subscriber_type":"pos","skip_bundle" : true}}}';

        $mock_reserve_number_service_result = ['is_pass' => true];
        $mock_wls_service_result = [
            0 => 200,
            1 => '{"code":"200","description":"Success","correlationId":"ADS2020111515120000001","orderId":"20210705486234712598","extraData":{"barcodeUrl ":"https://xxxx/55286888481912863559"}}'
        ];

        $mock_response = ['response' => ['data' => 'Internal Server Error'], 'code' => 406];

        $store_service = \Mockery::mock('overload:App\Services\StoreService');
        $store_service->shouldReceive('processGetExternalNasCodeByNasCode')->once()->andReturn('0095097');

        $mock_reserve_number_service = m::mock('alias:App\Services\VHora\ReserveNumberService');
        $mock_reserve_number_service->shouldReceive('postReserveNumber')->once()->andReturn($mock_reserve_number_service_result);

        $mock_wls_service = m::mock('alias:App\Services\WlsService');
        $mock_wls_service->shouldReceive('operateRequestAction')->never()->andReturn($mock_wls_service_result);

        $mock_order_service = m::mock('overload:App\Services\OrderService');
        $mock_order_service->shouldReceive('placeOrderOffline')->once()->andThrow(new \Exception('Internal Server Error', 500));

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        Redis::shouldReceive('set')->andReturn(true);
        Redis::shouldReceive('get')->with('vhora-offline-shop')->andReturn($mock_redis_data);

        $response = VHoraService::processPlaceOrderOffline($mock_input);
        $this->assertEquals($mock_response, $response);
    }

    /**
     * @group testProcessPlaceOrderOfflineWithPosFailInvalidInput
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessPlaceOrderOfflineWithPosFailInvalidInput()
    {
        $input = json_decode('{"form":{"selected_msisdn":"0645902144","proposition_amdoc":"PRE000000000010","product_id":"L91597283","inventory_id":"3088880","store_id":"941527","companyCode":"RF","dealerCode":"80000011","package_code":"pre299","birthdate":"09101978","shop_data_name":"7-11"},"pricePlan":{"id":"9525","description":"New Mat sim prepay 299Bt","name":"New Mat sim prepay 299Bt","code":"R21NDLUCK","sim_type":"prepaid","price":"0","recommended":"0","proposition_nas_code":"0095097","proposition_term_short":"\u0e40\u0e1a\u0e2d\u0e23\u0e4c\u0e1f\u0e31\u0e19\u0e18\u0e07 \u0e15\u0e23\u0e07\u0e25\u0e31\u0e04\u0e19\u0e32\u0e23\u0e32\u0e28\u0e35 - Prepaid (RF)","campaign_code":"AN547"},"shopOffline":{"type":null,"shopCode":"80000011","shopName":{"th":"\u0e17\u0e35\u0e40\u0e2d\u0e2a\u0e40\u0e2d\u0e47\u0e21127 \u0e17\u0e35\u0e2d\u0e32\u0e23\u0e4c\u0e40\u0e2d\u0e47\u0e19011","en":"TSM127 TRN011"}},"id":{"id":"1212121212121","correlationId":"4774e273-7258-4d61-8646-99413e25247d"},"cToken":null,"image":null}', true);

        $mock_input = m::mock('overload:input');
        $mock_input->shouldReceive('all')->andReturn($input);

        $mock_redis_data = '{"7-11":{"name":"7 Eleven สาขาใกล้บ้านท่าน","channel":"3GW-TRUESTORE","prepaid":{"campiagn_id":"TSIS_C017", "subscriber_type":"pre","skip_bundle" : true},"postpaid":{"campiagn_id":"TSIS_C018", "subscriber_type":"pos","skip_bundle" : true}},"lotus":{"name":"Lotus สาขาใกล้บ้านท่าน","channel":"3GW-TRUESTORE","prepaid":{"campiagn_id":"TSIS_C017","subscriber_type":"pre","skip_bundle" : true},"postpaid":{"campiagn_id":"TSIS_C018","subscriber_type":"pos","skip_bundle" : true}}}';

        $mock_reserve_number_service_result = ['is_pass' => true];
        $mock_wls_service_result = [
            0 => 200,
            1 => '{"code":"200","description":"Success","correlationId":"ADS2020111515120000001","orderId":"20210705486234712598","extraData":{"barcodeUrl ":"https://xxxx/55286888481912863559"}}'
        ];

        $mock_order_service_result = json_decode('{"id":11650453,"secureKey":"800011650453","is_redirect":false,"redirectUrl":"https://order.wls-dev.com/v1/payment/foreground?payment_id=9191001891722","payment_id":"9191001891722","cybs_detail":null,"code":200,"message":"success"}', true);

        $mock_response = ['response' => ['data' => 'The form.phone submit field is required.'], 'code' => 400];

        $store_service = \Mockery::mock('overload:App\Services\StoreService');
        $store_service->shouldReceive('processGetExternalNasCodeByNasCode')->once()->andReturn('0095097');

        $mock_reserve_number_service = m::mock('alias:App\Services\VHora\ReserveNumberService');
        $mock_reserve_number_service->shouldReceive('postReserveNumber')->once()->andReturn($mock_reserve_number_service_result);

        $mock_wls_service = m::mock('alias:App\Services\WlsService');
        $mock_wls_service->shouldReceive('operateRequestAction')->never()->andReturn($mock_wls_service_result);

        $mock_order_service = m::mock('overload:App\Services\OrderService');
        $mock_order_service->shouldReceive('placeOrderOffline')->once()->andReturn($mock_order_service_result);

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        Redis::shouldReceive('set')->andReturn(true);
        Redis::shouldReceive('get')->with('vhora-offline-shop')->andReturn($mock_redis_data);

        $response = VHoraService::processPlaceOrderOffline($mock_input);
        $this->assertEquals($mock_response, $response);
    }

    /**
     * @group testProcessPlaceOrderOfflineSuccessFailWithCannotReserve
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testProcessPlaceOrderOfflineSuccessFailWithCannotReserve()
    {
        $input = json_decode(
            '{"form":{"selected_msisdn":"0645902144","proposition_amdoc":"PRE000000000010","product_id":"L91597283","inventory_id":"3088880","store_id":"941527","companyCode":"RF","dealerCode":"80000011","package_code":"pre299","birthdate":"09101978","phone_submit":"0890297909","shop_data_name":"7-11"},"pricePlan":{"price_plan":"SMRTEP87","id":"9525","description":"New Mat sim prepay 299Bt","name":"New Mat sim prepay 299Bt","code":"R21NDLUCK","sim_type":"prepaid","price":"0","recommended":"0","proposition_nas_code":"0095097","proposition_term_short":"\u0e40\u0e1a\u0e2d\u0e23\u0e4c\u0e1f\u0e31\u0e19\u0e18\u0e07 \u0e15\u0e23\u0e07\u0e25\u0e31\u0e04\u0e19\u0e32\u0e23\u0e32\u0e28\u0e35 - Prepaid (RF)","campaign_code":"AN547"},"shopOffline":{"type":null,"shopCode":"80000011","shopName":{"th":"\u0e17\u0e35\u0e40\u0e2d\u0e2a\u0e40\u0e2d\u0e47\u0e21127 \u0e17\u0e35\u0e2d\u0e32\u0e23\u0e4c\u0e40\u0e2d\u0e47\u0e19011","en":"TSM127 TRN011"}},"id":{"id":"1212121212121","correlationId":"4774e273-7258-4d61-8646-99413e25247d"},"cToken":null,"image":null}',
            true
        );

        $mock_input = m::mock('overload:input');
        $mock_input->shouldReceive('all')->andReturn($input);

        $mock_redis_data = '{"7-11":{"name":"7 Eleven สาขาใกล้บ้านท่าน","channel":"3GW-TRUESTORE","prepaid":{"campiagn_id":"TSIS_C017", "subscriber_type":"pre","skip_bundle" : true},"postpaid":{"campiagn_id":"TSIS_C018", "subscriber_type":"pos","skip_bundle" : true}},"lotus":{"name":"Lotus สาขาใกล้บ้านท่าน","channel":"3GW-TRUESTORE","prepaid":{"campiagn_id":"TSIS_C017","subscriber_type":"pre","skip_bundle" : true},"postpaid":{"campiagn_id":"TSIS_C018","subscriber_type":"pos","skip_bundle" : true}}}';

        $mock_reserve_number_service_result = ['is_pass' => false, 'code' => 'nas200'];
        $mock_wls_service_result = [
            0 => 200,
            1 => '{"code":"200","description":"Success","correlationId":"ADS2020111515120000001","orderId":"20210705486234712598","extraData":{"barcodeUrl ":"https://xxxx/55286888481912863559"}}'
        ];

        $mock_order_service_result = json_decode(
            '{"id":11650453,"secureKey":"800011650453","is_redirect":false,"redirectUrl":"https://order.wls-dev.com/v1/payment/foreground?payment_id=9191001891722","payment_id":"9191001891722","cybs_detail":null,"code":200,"message":"success"}',
            true
        );

        $mock_response = [
            'response' => ['data' => ['message' => 'Reserve number Error', 'code' => 'nas200']],
            'code' => 422
        ];

        $store_service = \Mockery::mock('overload:App\Services\StoreService');
        $store_service->shouldReceive('processGetExternalNasCodeByNasCode')->once()->andReturn('0095097');

        $mock_reserve_number_service = m::mock('alias:App\Services\VHora\ReserveNumberService');
        $mock_reserve_number_service->shouldReceive('postReserveNumber')->once()->andReturn(
            $mock_reserve_number_service_result
        );

        $mock_wls_service = m::mock('alias:App\Services\WlsService');
        $mock_wls_service->shouldReceive('operateRequestAction')->never()->andReturn($mock_wls_service_result);

        $mock_order_service = m::mock('overload:App\Services\OrderService');
        $mock_order_service->shouldReceive('placeOrderOffline')->never()->andReturn($mock_order_service_result);

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        Redis::shouldReceive('set')->andReturn(true);
        Redis::shouldReceive('get')->with('vhora-offline-shop')->andReturn($mock_redis_data);

        $response = VHoraService::processPlaceOrderOffline($mock_input);
        $this->assertEquals($mock_response, $response);
    }

    private function mockRedis()
    {
        Redis::shouldReceive('get')->andReturn(false);
        Redis::shouldReceive('set')->andReturn(true);
    }

    private function checkNumberingGroup($datas = [])
    {
        $this->assertNotEmpty($datas);
        
        foreach ($datas as $numbering) {
            $this->assertArrayHasKey('group_title', $numbering);
            $this->assertArrayHasKey('subgroup_title', $numbering);
            $this->assertArrayHasKey('subgroup_detail', $numbering);
            $this->assertArrayHasKey('pop_up', $numbering);
            $this->assertNotEmpty(Arr::get($numbering, 'group_title'));
            $this->assertNotEmpty(Arr::get($numbering, 'subgroup_title'));
            $this->assertNotEmpty(Arr::get($numbering, 'subgroup_detail'));
            $this->assertNotEmpty(Arr::get($numbering, 'pop_up'));
        }
    }
}
