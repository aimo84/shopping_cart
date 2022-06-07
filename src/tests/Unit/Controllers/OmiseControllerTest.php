<?php

namespace Tests\Unit;

use Illuminate\Http\Request as LaravelRequest;
use Tests\TestCase;
use App\Http\Controllers\OmiseController;
use App\Facades\PaymentMethodService;

class OmiseControllerTest extends TestCase
{
    /**
     * @group testSetValidationRulesShouldBeSuccess
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testSetValidationRulesShouldBeSuccess()
    {
        $service = PaymentMethodService::shouldReceive('getToggleOmise');
        $service->andReturn(json_decode('{"omise_toggle":true,"ccw":"OMISECCW","instm":"OMISEINSTM","ew":"OMISEEW","omise_token_auth":"xxxxxxxxx"}', true));

        $input = [
            'store_id' => 'L12123'
        ];

        $request = new LaravelRequest();
        $request->setMethod(strtoupper("post"));
        $request->replace($input);

        $controller = new OmiseController();
        $response   = $controller->getToggleOmise($request);
        $response   = json_decode(json_encode($response), true);

        $this->assertTrue(array_get($response, 'omise_toggle'));
        $this->assertEquals('OMISECCW', array_get($response, 'ccw'));
        $this->assertEquals('OMISEINSTM', array_get($response, 'instm'));
        $this->assertEquals('OMISEEW', array_get($response, 'ew'));
        $this->assertEquals('xxxxxxxxx', $response['omise_token_auth']);
    }

    /**
     * @group getToggleOmise
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testSetValidationRulesShouldBeFailValidation()
    {
        $service = PaymentMethodService::shouldReceive('getToggleOmise');
        $service->andReturn(json_decode('{"omise_toggle":true,"ccw":"OMISECCW","instm":"OMISEINSTM","ew":"OMISEEW","omise_token_auth":"xxxxxxxxx"}', true));

        $input = [
            'products' => [
                [
                    'store_idx' => 'L12123'
                ]
            ]
        ];

        $request = new LaravelRequest();
        $request->setMethod(strtoupper("post"));
        $request->replace($input);

        $controller = new OmiseController();
        $response   = $controller->getToggleOmise($request);
        $response   = json_decode($response->getContent(), true);

        $this->assertEquals(400, array_get($response, 'status_code'));
        $this->assertEquals('Bad Request', array_get($response, 'status_txt'));
        $this->assertEquals('The store id field is required.', array_get($response, 'errors.description.store_id.0'));
    }

}
