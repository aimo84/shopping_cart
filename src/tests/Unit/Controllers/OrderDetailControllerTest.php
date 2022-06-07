<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Http\Controllers\OrderDetailController;

class OrderDetailControllerTest extends TestCase
{
    public function testBuildPromptpayResponse()
    {

        $controller = new OrderDetailController();
        $response   = $controller->buildPromptpayResponse('12345678');
        $response   = json_decode(json_encode($response), true);

        $this->assertNotEmpty($response);
    }

    /**
     * @group testBuildReserveNumberSuccessWithVhoraHighTier
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     **/
    public function testBuildReserveNumberSuccessWithVhoraHighTier()
    {
        $expect = json_decode('{"correlatedId":"deb62edf-b8dc-4f27-a19a-fc1c1d81b836","idType":"I","idNumber":"4814838852288","msisdn":"0954169061","pstId":"0085779","reserveDealer":"80100112","webMethodChannel":"FNT-ONLINE","userLogin":"80100112","pricePlanCode":"SMRTFP76"}', true);

        $input = json_decode('[{"number":"0954169061","sim_type":"postpaid","product_info":{"product_id":"91587044","product_type":"sim","store_id":"L941527","inventory_id":"3078153"},"price_plan":{"id":"9501","description":"5G Ultra Max Speed 1199","name":"5G Ultra Max Speed 1199","code":"SMRTFP76","sim_type":"postpaid","price":"1199","recommended":"0","proposition_nas_code":"0085779","proposition_term_short":"\u0e1e\u0e23\u0e49\u0e2d\u0e21\u0e41\u0e1e\u0e47\u0e01\u0e40\u0e01\u0e08 5G Ultra Max Speed (\u0e2a\u0e31\u0e0d\u0e0d\u0e32 12 \u0e40\u0e14\u0e37\u0e2d\u0e19)","campaign_code":"AN231","proposition_amdoc":"RMV000000022045","company_code":"RM"},"is_verify":"true","thai_id":"4814838852288","birth_date":"01\/01\/1962","user_information":{"thai_id":"4814838852288","birth_date":"01\/01\/1988","iden_type":"I","gender":"2","first_name":"adsdsda","last_name":"asdasdasd","address":"2113","province":"\u0e01\u0e23\u0e38\u0e07\u0e40\u0e17\u0e1e\u0e21\u0e2b\u0e32\u0e19\u0e04\u0e23","district":"\u0e1e\u0e23\u0e30\u0e19\u0e04\u0e23","sub_district":"\u0e1e\u0e23\u0e30\u0e1a\u0e23\u0e21\u0e21\u0e2b\u0e32\u0e23\u0e32\u0e0a\u0e27\u0e31\u0e07","zip_code":"10200"},"sim_image":"https:\/\/www.wemall-dev.com\/upload\/c\/qa_test\/TruemoveH\/bannerweb1199.png","campaign_type":"vhora","birth_time":"06:18","timezone":"+0700","correlation_id":"deb62edf-b8dc-4f27-a19a-fc1c1d81b836","dealer_code":"80100112","berfuntong":{"grade":"A++","group":"\u0e01\u0e31\u0e21\u0e21\u0e30","subgroup":"\u0e28\u0e38\u0e20\u0e30","group_title":"\u0e01\u0e32\u0e23\u0e07\u0e32\u0e19","subgroup_title":"\u0e07\u0e32\u0e19\u0e23\u0e38\u0e48\u0e07 \u0e1e\u0e38\u0e48\u0e07\u0e41\u0e23\u0e07"},"kyc_image":"4814838852288_liveness.jpg"}]', true);

        $store_service = \Mockery::mock('overload:App\Services\StoreService');
        $store_service->shouldReceive('processGetExternalNasCodeByNasCode')->once()->andReturn('0085779');
        $store_service->shouldReceive('processGetExternalPricePlanCodeByPricePlanCode')->once()->andReturn('9876767');

        $controller = new OrderDetailController();
        $response = $controller->buildReserveNumber($input);

        $this->assertEquals($expect, $response);
    }

    /**
     * @group testBuildReserveNumberSuccessWithVhoraLowTier
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     **/
    public function testBuildReserveNumberSuccessWithVhoraLowTier()
    {
        $expect = json_decode('{"correlatedId":"deb62edf-b8dc-4f27-a19a-fc1c1d81b836","idType":"I","idNumber":"4814838852288","msisdn":"0954169061","pstId":"0085779","reserveDealer":"80100112","webMethodChannel":"FNT-ONLINE","userLogin":"80100112","pricePlanCode":"SMRTFP76","vhrPackageCode":"test124"}', true);

        $input = json_decode('[{"number":"0954169061","sim_type":"postpaid","product_info":{"product_id":"91587044","product_type":"sim","store_id":"L941527","inventory_id":"3078153"},"price_plan":{"id":"9501","description":"5G Ultra Max Speed 1199","name":"5G Ultra Max Speed 1199","code":"SMRTFP76","sim_type":"postpaid","price":"1199","recommended":"0","proposition_nas_code":"0085779","proposition_term_short":"\u0e1e\u0e23\u0e49\u0e2d\u0e21\u0e41\u0e1e\u0e47\u0e01\u0e40\u0e01\u0e08 5G Ultra Max Speed (\u0e2a\u0e31\u0e0d\u0e0d\u0e32 12 \u0e40\u0e14\u0e37\u0e2d\u0e19)","campaign_code":"AN231","proposition_amdoc":"RMV000000022045","company_code":"RM"},"is_verify":"true","thai_id":"4814838852288","birth_date":"01\/01\/1962","user_information":{"thai_id":"4814838852288","birth_date":"01\/01\/1988","iden_type":"I","gender":"2","first_name":"adsdsda","last_name":"asdasdasd","address":"2113","province":"\u0e01\u0e23\u0e38\u0e07\u0e40\u0e17\u0e1e\u0e21\u0e2b\u0e32\u0e19\u0e04\u0e23","district":"\u0e1e\u0e23\u0e30\u0e19\u0e04\u0e23","sub_district":"\u0e1e\u0e23\u0e30\u0e1a\u0e23\u0e21\u0e21\u0e2b\u0e32\u0e23\u0e32\u0e0a\u0e27\u0e31\u0e07","zip_code":"10200"},"sim_image":"https:\/\/www.wemall-dev.com\/upload\/c\/qa_test\/TruemoveH\/bannerweb1199.png","campaign_type":"vhora","birth_time":"06:18","timezone":"+0700","correlation_id":"deb62edf-b8dc-4f27-a19a-fc1c1d81b836","dealer_code":"80100112","berfuntong":{"package_code":"test124","grade":"A++","group":"\u0e01\u0e31\u0e21\u0e21\u0e30","subgroup":"\u0e28\u0e38\u0e20\u0e30","group_title":"\u0e01\u0e32\u0e23\u0e07\u0e32\u0e19","subgroup_title":"\u0e07\u0e32\u0e19\u0e23\u0e38\u0e48\u0e07 \u0e1e\u0e38\u0e48\u0e07\u0e41\u0e23\u0e07"},"kyc_image":"4814838852288_liveness.jpg"}]', true);

        $store_service = \Mockery::mock('overload:App\Services\StoreService');
        $store_service->shouldReceive('processGetExternalNasCodeByNasCode')->once()->andReturn('0085779');
        $store_service->shouldReceive('processGetExternalPricePlanCodeByPricePlanCode')->once()->andReturn('9876767');

        $controller = new OrderDetailController();
        $response = $controller->buildReserveNumber($input);

        $this->assertEquals($expect, $response);
    }

    /**
     * @group testBuildReserveNumberSuccessWithSimOnly
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     **/
    public function testBuildReserveNumberSuccessWithSimOnly()
    {
        $expect = json_decode('{"correlatedId":"deb62edf-b8dc-4f27-a19a-fc1c1d81b836","idType":"I","idNumber":"4814838852288","msisdn":"0954169061","pstId":"0085779","reserveDealer":"80100112","webMethodChannel":"FNT-ONLINE","userLogin":"80100112","pricePlanCode":"SMRTFP76"}', true);

        $input = json_decode('[{"number":"0954169061","sim_type":"postpaid","product_info":{"product_id":"91587044","product_type":"sim","store_id":"L941527","inventory_id":"3078153"},"price_plan":{"id":"9501","description":"5G Ultra Max Speed 1199","name":"5G Ultra Max Speed 1199","code":"SMRTFP76XXXX","sim_type":"postpaid","price":"1199","recommended":"0","proposition_nas_code":"0085779","proposition_term_short":"\u0e1e\u0e23\u0e49\u0e2d\u0e21\u0e41\u0e1e\u0e47\u0e01\u0e40\u0e01\u0e08 5G Ultra Max Speed (\u0e2a\u0e31\u0e0d\u0e0d\u0e32 12 \u0e40\u0e14\u0e37\u0e2d\u0e19)","campaign_code":"AN231","proposition_amdoc":"RMV000000022045","company_code":"RM"},"is_verify":"true","thai_id":"4814838852288","birth_date":"01\/01\/1962","user_information":{"thai_id":"4814838852288","birth_date":"01\/01\/1988","iden_type":"I","gender":"2","first_name":"adsdsda","last_name":"asdasdasd","address":"2113","province":"\u0e01\u0e23\u0e38\u0e07\u0e40\u0e17\u0e1e\u0e21\u0e2b\u0e32\u0e19\u0e04\u0e23","district":"\u0e1e\u0e23\u0e30\u0e19\u0e04\u0e23","sub_district":"\u0e1e\u0e23\u0e30\u0e1a\u0e23\u0e21\u0e21\u0e2b\u0e32\u0e23\u0e32\u0e0a\u0e27\u0e31\u0e07","zip_code":"10200"},"sim_image":"https:\/\/www.wemall-dev.com\/upload\/c\/qa_test\/TruemoveH\/bannerweb1199.png","campaign_type":"sim_only","birth_time":"06:18","timezone":"+0700","correlation_id":"deb62edf-b8dc-4f27-a19a-fc1c1d81b836","dealer_code":"80100112","berfuntong":{"grade":"A++","group":"\u0e01\u0e31\u0e21\u0e21\u0e30","subgroup":"\u0e28\u0e38\u0e20\u0e30","group_title":"\u0e01\u0e32\u0e23\u0e07\u0e32\u0e19","subgroup_title":"\u0e07\u0e32\u0e19\u0e23\u0e38\u0e48\u0e07 \u0e1e\u0e38\u0e48\u0e07\u0e41\u0e23\u0e07"},"kyc_image":"4814838852288_liveness.jpg"}]', true);

        $store_service = \Mockery::mock('overload:App\Services\StoreService');
        $store_service->shouldReceive('processGetExternalNasCodeByNasCode')->once()->andReturn('0085779');
        $store_service->shouldReceive('processGetExternalPricePlanCodeByPricePlanCode')->once()->andReturn('9876767');

        $controller = new OrderDetailController();
        $response = $controller->buildReserveNumber($input);

        $this->assertEquals($expect, $response);
    }
}
