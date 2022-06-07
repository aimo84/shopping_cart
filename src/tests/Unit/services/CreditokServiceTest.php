<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Services\CreditokService;
use Illuminate\Http\Request as LaravelRequest;
use Mockery as m;
use Illuminate\Support\Arr;

class ProductServiceTest extends TestCase
{
    /**
     * @group tmnConsent
     **/
    public function testGetConsentNotAuthorization()
    {
        $input   = json_decode('{"nId": "NTI1OTc4MTk3MjcxNw=="}',true);
        $request = new LaravelRequest();
        $request->setMethod(strtoupper("post"));
        $request->replace($input);

        $response = CreditokService::postRetrieveConsent($request);

        $this->assertNotEmpty($response);
        $this->assertEquals(400,Arr::get($response,'status_code'));
        $this->assertEquals('No identity key relate to data.',Arr::get($response,'message.error'));
    }
        /**
     * @group tmnConsent
     **/
    public function testGetConsentInvalidRequest()
    {
        $input   = json_decode('{"nIds": "NTI1OTc4MTk3MjcxNw=="}',true);
        $request = new LaravelRequest();
        $request->setMethod(strtoupper("post"));
        $request->headers->set('Authorization', 'Basic '.base64_encode(''.''));
        $request->replace($input);

        $response = CreditokService::postRetrieveConsent($request);

        $this->assertNotEmpty($response);
        $this->assertEquals(400,Arr::get($response,'status_code'));
        $this->assertEquals('The nId field is required.',Arr::get($response,'message.error'));
    }
    /**
     * @group tmnConsent
     **/
    public function testGetConsentException()
    {
        $input   = json_decode('{"nId": "NTI1OTc4MTk3MjcxNw=="}',true);
        $request = new LaravelRequest();
        $request->setMethod(strtoupper("post"));
        $request->headers->set('Authorization', 'Basic '.base64_encode(''.''));
        $request->replace($input);

        $mock_guzzle_service = m::mock('alias:App\Services\GuzzleService');
        $mock_guzzle_service->shouldReceive('postGuzzleRequest')->andThrow(new \Exception('Throw Exception', 400));

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);
        
        $response = CreditokService::postRetrieveConsent($request);
        $this->assertEquals(400,Arr::get($response,'status_code'));


    }
    /**
     * @group tmnConsent
     **/
    public function testGetConsentSuccess()
    {
        $input   = json_decode('{"nId": "NTI1OTc4MTk3MjcxNw=="}',true);
        $request = new LaravelRequest();
        $request->setMethod(strtoupper("post"));
        $request->headers->set('Authorization', 'Basic '.base64_encode(''.''));
        $request->replace($input);

        $response = CreditokService::postRetrieveConsent($request);
        $this->assertNotEmpty($response);
        $this->assertEquals(200,Arr::get($response,'http_status'));
        $data  = Arr::get($response, 'data');
        $this->assertEquals('SUCCESS',Arr::get($data,'status.code'));
        $this->assertEquals('ACCEPT',Arr::get($data,'data.consent_status'));
    }

        /**
     * @group tmnConsent
     **/
    public function testSaveConsentNotAuthorization()
    {
        $input   = json_decode('{"nId": "NTI1OTc4MTk3MjcxNw=="}',true);
        $request = new LaravelRequest();
        $request->setMethod(strtoupper("post"));
        $request->replace($input);

        $response = CreditokService::postSaveConsent($request);

        $this->assertNotEmpty($response);
        $this->assertEquals(400,Arr::get($response,'status_code'));
        $this->assertEquals('No identity key relate to data.',Arr::get($response,'message.error'));
    }
        /**
     * @group tmnConsent
     **/
    public function testSaveConsentInvalidRequest()
    {
        $input   = json_decode('{"nId": "NTI1OTc4MTk3MjcxNw=="}',true);
        $request = new LaravelRequest();
        $request->setMethod(strtoupper("post"));
        $request->headers->set('Authorization', 'Basic '.base64_encode(''.''));
        $request->replace($input);

        $response = CreditokService::postSaveConsent($request);

        $this->assertNotEmpty($response);
        $this->assertEquals(400,Arr::get($response,'status_code'));
        $this->assertEquals('The consent status field is required.',Arr::get($response,'message.error'));
    }
    /**
     * @group tmnConsent
     **/
    public function testSaveConsentException()
    {


        $input   = json_decode('{ "nId": "Mzk4NDY1OTkxNDYzOA==", "consentStatus": 1 }',true);
        $request = new LaravelRequest();
        $request->setMethod(strtoupper("post"));
        $request->headers->set('Authorization', 'Basic '.base64_encode(''.''));
        $request->replace($input);

        $mock_guzzle_service = m::mock('alias:App\Services\GuzzleService');
        $mock_guzzle_service->shouldReceive('postGuzzleRequest')->andThrow(new \Exception('Throw Exception', 400));

        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);
        
        $response = CreditokService::postSaveConsent($request);
        $this->assertEquals(400,Arr::get($response,'status_code'));
    }
    /**
     * @group tmnConsent
     **/
    public function testSaveConsentSuccess()
    {
        $input   = json_decode('{ "nId": "Mzk4NDY1OTkxNDYzOA==", "consentStatus": 1 }',true);
        $request = new LaravelRequest();
        $request->setMethod(strtoupper("post"));
        $request->headers->set('Authorization', 'Basic '.base64_encode(''.''));
        $request->replace($input);

        $response = CreditokService::postSaveConsent($request);

        $this->assertNotEmpty($response);
        $this->assertEquals(200,Arr::get($response,'http_status'));
        $data  = Arr::get($response, 'data');
        $this->assertEquals('SUCCESS',Arr::get($data,'status.code'));
    }
}
