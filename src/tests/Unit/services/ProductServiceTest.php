<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Facades\ProductService;
use Mockery as m;
use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Arr;
use Exception;

class ProductServiceTest extends TestCase
{
    /**
     * @group testGetConfigProductDescription
     **/
    public function testGetConfigProductDescriptionEmptyParameter()
    {
        $response = ProductService::getConfigProductDescription([]);
        $this->assertEmpty($response);
    }

    /**
     * @group testGetConfigProductDescription
     **/
    public function testGetConfigProductDescriptionEmptyConfig()
    {
        Redis::shouldReceive('get')->once()->with("product-description-custom:L91597372")->andReturn(null);
        $mock_model = m::mock('overload:App\Models\TruemovehProductDetailModel')->makePartial();
        $mock_model->shouldReceive('findFirst')
            ->once()
            ->andReturn(null);

        $response = ProductService::getConfigProductDescription('L91597372');
        $this->assertEmpty($response);
    }

    /**
     * @group testGetConfigProductDescription
     **/
    public function testGetConfigProductDescriptionSuccess()
    {
        $mock_data_aws = $this->getFile('index.html', 'product/lvd');

        Redis::shouldReceive('get')->once()->with("product-description-custom:L91597372")->andReturn(null);
        Redis::shouldReceive('set')->once()->andReturn(1);
        $mock_model = m::mock('overload:App\Models\TruemovehProductDetailModel')->makePartial();
        $mock_model->shouldReceive('findFirst')
            ->with('L91597372')
            ->once()
            ->andReturn($mock_model)
            ->shouldReceive('toArray')
            ->andReturn(json_decode('{"path":"upload\/product-description","file_name":"index.html","product_id":"L91597372","fonts":"SFProTH"}', 1));

        $mock_aws_service = m::mock('overload:App\Services\AwsService')->makePartial();
        $mock_aws_service->shouldReceive('getS3File')
            ->andReturn(['body' => $mock_data_aws]);                

        $response = ProductService::getConfigProductDescription('L91597372');

        $this->assertContains('s3.ap-southeast-1.amazonaws.com', Arr::get($response, 'th'));
        $this->assertContains('s3.ap-southeast-1.amazonaws.com', Arr::get($response, 'en'));
        $this->assertContains('/fonts/SFProTH/', Arr::get($response, 'th'));
        $this->assertContains('/fonts/SFProTH/', Arr::get($response, 'en'));
        $this->assertNotContains('<html', Arr::get($response, 'th'));
        $this->assertNotContains('<body', Arr::get($response, 'th'));
        $this->assertNotContains('<meta', Arr::get($response, 'th'));
        $this->assertNotContains('<html', Arr::get($response, 'en'));
        $this->assertNotContains('<body', Arr::get($response, 'en'));
        $this->assertNotContains('<meta', Arr::get($response, 'en'));
    }

    /**
     * @group testGetConfigProductDescription
     **/
    public function testGetConfigProductDescriptionSuccessWithCacheRedis()
    {
        $mock_data_aws = $this->getFile('index.html', 'product/lvd');

        Redis::shouldReceive('get')->once()->with("product-description-custom:L91597372")->andReturn('{"path":"upload\/product-description","file_name":"index.html","product_id":"L91597372","fonts":"SFProTH"}');
        $mock_model = m::mock('overload:App\Models\TruemovehProductDetailModel')->makePartial();
        $mock_model->shouldReceive('findFirst')
            ->with('L91597372')
            ->once()
            ->andReturn($mock_model)
            ->shouldReceive('toArray')
            ->andReturn(json_decode('{"path":"upload\/product-description","file_name":"index.html","product_id":"L91597372","fonts":"SFProTH"}', 1));

        $mock_aws_service = m::mock('overload:App\Services\AwsService')->makePartial();
        $mock_aws_service->shouldReceive('getS3File')
            ->andReturn(['body' => $mock_data_aws]);                

        $response = ProductService::getConfigProductDescription('L91597372');
        $this->assertContains('s3.ap-southeast-1.amazonaws.com', Arr::get($response, 'th'));
        $this->assertContains('s3.ap-southeast-1.amazonaws.com', Arr::get($response, 'en'));
        $this->assertContains('/fonts/SFProTH/', Arr::get($response, 'th'));
        $this->assertContains('/fonts/SFProTH/', Arr::get($response, 'en'));
        $this->assertNotContains('<html', Arr::get($response, 'th'));
        $this->assertNotContains('<body', Arr::get($response, 'th'));
        $this->assertNotContains('<meta', Arr::get($response, 'th'));
        $this->assertNotContains('<html', Arr::get($response, 'en'));
        $this->assertNotContains('<body', Arr::get($response, 'en'));
        $this->assertNotContains('<meta', Arr::get($response, 'en'));
    }

    /**
     * @group testGetConfigProductDescription
     **/
    public function testGetConfigProductDescriptionSuccessEmptyFile()
    {
        Redis::shouldReceive('get')->once()->with("product-description-custom:L91597372")->andReturn(null);
        Redis::shouldReceive('set')->once()->andReturn(1);
        $mock_model = m::mock('overload:App\Models\TruemovehProductDetailModel')->makePartial();
        $mock_model->shouldReceive('findFirst')
            ->with('L91597372')
            ->once()
            ->andReturn($mock_model)
            ->shouldReceive('toArray')
            ->andReturn(json_decode('{"path":"upload\/product-description","file_name":"index.html","product_id":"L91597372","fonts":"SFProTH"}', 1));

        $mock_aws_service = m::mock('overload:App\Services\AwsService')->makePartial();
        $mock_aws_service->shouldReceive('getS3File')
            ->andReturn(['body' => null]);                

        $response = ProductService::getConfigProductDescription('L91597372');
        $this->assertEmpty($response);
    }

    /**
     * @group testGetConfigProductDescription
     **/
    public function testGetConfigProductDescriptionError()
    {
        Redis::shouldReceive('get')->once()->with("product-description-custom:L91597372")->andThrow(new \Exception('Throw Exception', 500)); 
        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        $response = ProductService::getConfigProductDescription('L91597372');
        $this->assertEmpty($response);
    }

    /**
     * @group testPaySmooth
     **/
    public function testGetConfigPaySmoothEmptyConfig()
    {
        Redis::shouldReceive('get')->once()->with("config-pay-smooth")->andReturn(null);
        $mock_model = m::mock('overload:App\Models\TruemovehPaySmoothConfigModel')->makePartial();
        $mock_model->shouldReceive('findFirst')
            ->once()
            ->andReturn(null);

        $response = ProductService::getConfigPaySmooth();
        $this->assertEmpty($response);
    }

    /**
     * @group testPaySmooth
     **/
    public function testGetConfigPaySmoothSuccess()
    {
        Redis::shouldReceive('get')->once()->with("config-pay-smooth")->andReturn(null);
        Redis::shouldReceive('set')->once()->andReturn(1);
        $mock_model = m::mock('overload:App\Models\TruemovehPaySmoothConfigModel')->makePartial();
        $mock_model->shouldReceive('findFirst')
            ->with('config')
            ->once()
            ->andReturn($mock_model)
            ->shouldReceive('toArray')
            ->andReturn(json_decode('{
                "key": "config",
                "ternor": [
                    12,
                    18,
                    24
                ],
                "down_payment_rate": [
                    25,
                    40,
                    60
                ],
                "interest": 20
            }', 1));

        $response = ProductService::getConfigPaySmooth();

        $this->assertArrayHasKey('ternor', $response);
        $this->assertArrayHasKey('down_payment_rate', $response);
        $this->assertArrayHasKey('interest', $response);
    }

    /**
     * @group testPaySmooth
     **/
    public function testGetConfigPaySmoothError()
    {
        Redis::shouldReceive('get')->once()->with("config-pay-smooth")->andReturn(null);

        $mock_model = m::mock('overload:App\Models\TruemovehPaySmoothConfigModel')->makePartial();
        $mock_model->shouldReceive('findFirst')
            ->with('config')
            ->once()
            ->andReturn($mock_model)
            ->shouldReceive('toArray')
            ->andThrow(new Exception("Internal Server Errors", 500));
        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);    

        $response = ProductService::getConfigPaySmooth();

        $this->assertEmpty($response);
    }

    /**
     * @group testPaySmooth
     **/
    public function testCheckProductPaySmoothEmptyConfig()
    {
        Redis::shouldReceive('get')->once()->with("product-ids-paysmooth")->andReturn(null);
        $mock_model = m::mock('overload:App\Models\TruemovehPaySmoothConfigModel')->makePartial();
        $mock_model->shouldReceive('findFirst')
            ->once()
            ->andReturn(null);

        $this->assertFalse(ProductService::checkProductPaySmooth('L91591801'));
    }

    /**
     * @group testPaySmooth
     **/
    public function testCheckProductPaySmoothSuccess()
    {
        Redis::shouldReceive('get')->once()->with("product-ids-paysmooth")->andReturn(null);
        Redis::shouldReceive('set')->once()->andReturn(1);
        $mock_model = m::mock('overload:App\Models\TruemovehPaySmoothConfigModel')->makePartial();
        $mock_model->shouldReceive('findFirst')
            ->with('product_ids')
            ->once()
            ->andReturn($mock_model)
            ->shouldReceive('toArray')
            ->andReturn(json_decode('{
                "key": "product_ids",
                "product_ids": {
                 "L91591801" : {} ,
                 "L91597470" : {}
                }
               }', 1));

        $this->assertTrue(ProductService::checkProductPaySmooth('L91591801'));
    }

    /**
     * @group testPaySmooth
     **/
    public function testCheckProductPaySmoothError()
    {
        Redis::shouldReceive('get')->once()->with("product-ids-paysmooth")->andReturn(null);

        $mock_model = m::mock('overload:App\Models\TruemovehPaySmoothConfigModel')->makePartial();
        $mock_model->shouldReceive('findFirst')
            ->with('product_ids')
            ->once()
            ->andReturn($mock_model)
            ->shouldReceive('toArray')
            ->andThrow(new Exception("Internal Server Errors", 500));
        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);    

        $this->assertFalse(ProductService::checkProductPaySmooth('L91591801'));
    }

    /**
     * @group testPaySmooth
     **/
    public function testCheckCartProductPaySmoothSuccess()
    {
        Redis::shouldReceive('get')->times(2)->with("product-ids-paysmooth")->andReturn(null);
        Redis::shouldReceive('set')->times(2)->andReturn(1);
        $mock_model = m::mock('overload:App\Models\TruemovehPaySmoothConfigModel')->makePartial();
        $mock_model->shouldReceive('findFirst')
            ->with('product_ids')
            ->once()
            ->andReturn($mock_model)
            ->shouldReceive('toArray')
            ->andReturn(json_decode('{
                "key": "product_ids",
                "product_ids": {
                 "L91591801" : {} ,
                 "L91597470" : {}
                }
               }', 1));

        $mock_cart = json_decode($this->getFile('cart_pay_smooth.json', 'cart'), 1);
        $response  = ProductService::checkCartProductPaySmooth($mock_cart);

        foreach (Arr::get($response, 'data.record') as $cart) {
            foreach (Arr::get($cart, 'products') as $product) {
                $this->assertArrayHasKey('is_pay_smooth', $product);
                $this->assertTrue(Arr::get($product, 'is_pay_smooth'));
            }
        }
    }

    /**
     * @group testPaySmooth
     **/
    public function testCheckCartProductPaySmoothSuccessNotProductMatchConfig()
    {
        Redis::shouldReceive('get')->times(2)->with("product-ids-paysmooth")->andReturn(null);
        Redis::shouldReceive('set')->times(2)->andReturn(1);
        $mock_model = m::mock('overload:App\Models\TruemovehPaySmoothConfigModel')->makePartial();
        $mock_model->shouldReceive('findFirst')
            ->with('product_ids')
            ->once()
            ->andReturn($mock_model)
            ->shouldReceive('toArray')
            ->andReturn(json_decode('{
                "key": "product_ids",
                "product_ids": {
                 "L91591802" : {} ,
                 "L91597472" : {}
                }
               }', 1));

        $mock_cart = json_decode($this->getFile('cart_pay_smooth.json', 'cart'), 1);
        $response  = ProductService::checkCartProductPaySmooth($mock_cart);

        foreach (Arr::get($response, 'data.record', []) as $cart) {
            foreach (Arr::get($cart, 'products') as $product) {
                $this->assertArrayHasKey('is_pay_smooth', $product);
                $this->assertFalse(Arr::get($product, 'is_pay_smooth'));
            }
        }
    }

    /**
     * @group testPaySmooth
     **/
    public function testCheckAllCartProductIsPaySmoothSuccess()
    {   
        Redis::shouldReceive('get')->times(2)->with("product-ids-paysmooth")->andReturn(null);
        Redis::shouldReceive('set')->times(2)->andReturn(1);
        $mock_model = m::mock('overload:App\Models\TruemovehPaySmoothConfigModel')->makePartial();
        $mock_model->shouldReceive('findFirst')
            ->with('product_ids')
            ->once()
            ->andReturn($mock_model)
            ->shouldReceive('toArray')
            ->andReturn(json_decode('{
                "key": "product_ids",
                "product_ids": {
                 "L91591801" : {} ,
                 "L91597470" : {}
                }
               }', 1));
        
        $mock_cart = json_decode($this->getFile('cart_pay_smooth.json', 'cart'), 1);
        $response  = ProductService::checkAllCartProductIsPaySmooth(ProductService::checkCartProductPaySmooth($mock_cart));

        $this->assertNotEmpty($response);
    }

    /**
     * @group testPaySmooth
     **/
    public function testCheckAllCartProductIsPaySmoothSuccessWithCartNotPaySmooth()
    {   
        Redis::shouldReceive('get')->times(2)->with("product-ids-paysmooth")->andReturn(null);
        Redis::shouldReceive('set')->times(2)->andReturn(1);
        $mock_model = m::mock('overload:App\Models\TruemovehPaySmoothConfigModel')->makePartial();
        $mock_model->shouldReceive('findFirst')
            ->with('product_ids')
            ->once()
            ->andReturn($mock_model)
            ->shouldReceive('toArray')
            ->andReturn(json_decode('{
                "key": "product_ids",
                "product_ids": {
                 "L91591802" : {} ,
                 "L91597472" : {}
                }
               }', 1));
        
        $mock_cart = json_decode($this->getFile('cart_pay_smooth.json', 'cart'), 1);
        $response  = ProductService::checkAllCartProductIsPaySmooth(ProductService::checkCartProductPaySmooth($mock_cart));

        $this->assertEmpty($response);
    }

    /**
     * @group testPaySmooth
     **/
    public function testMapProductInventoryPaySmooth()
    {   
        Redis::shouldReceive('get')->times(1)->with("product-ids-paysmooth")->andReturn(null);
        Redis::shouldReceive('set')->times(1)->andReturn(1);
        $mock_model = m::mock('overload:App\Models\TruemovehPaySmoothConfigModel')->makePartial();
        $mock_model->shouldReceive('findFirst')
            ->with('product_ids')
            ->once()
            ->andReturn($mock_model)
            ->shouldReceive('toArray')
            ->andReturn(json_decode('{ "key": "product_ids", "product_ids": { "L91597470": {}, "L91597372": { "i13-14": [ [ 40, 60 ] ], "i13-11": [ [ 40, 60 ] ], "i13-8": [ [ 40, 60 ] ], "i13-5": [ [ 40, 60 ] ], "i13-4": [ [ 40, 60 ] ] } } }', 1));
        
        $mock_product = json_decode($this->getFile('product_pay_smooth.json', 'product'), 1);
        $response     = ProductService::mapProductInventoryPaySmooth($mock_product);
        
        $this->assertNotEmpty($response);

        foreach ($response as $inv) {
            $down_payment_rate = Arr::get($inv, 'down_payment_rate');
            $sku               = Arr::get($inv, 'sku');
            
            if (in_array($sku, ["i13-14","i13-11","i13-8","i13-5","i13-4"])) {
                $this->assertEquals(2, count($down_payment_rate));
            } else {
                $this->assertEquals(3, count($down_payment_rate));
            }
        }
    }

     /**
     * @group testPaySmooth
     **/
    public function testMapProductInventoryPaySmoothError()
    {   
        Redis::shouldReceive('get')->times(1)->with("product-ids-paysmooth")->andReturn(null);
        $mock_model = m::mock('overload:App\Models\TruemovehPaySmoothConfigModel')->makePartial();
        $mock_model->shouldReceive('findFirst')
            ->with('product_ids')
            ->once()
            ->andReturn($mock_model)
            ->shouldReceive('toArray')
            ->andThrow(new Exception("Internal Server Errors", 500));
        
        $mock_product = json_decode($this->getFile('product_pay_smooth.json', 'product'), 1);
        $response     = ProductService::mapProductInventoryPaySmooth($mock_product);
        $this->assertNotEmpty($response);

        foreach ($response as $inv) {
            $down_payment_rate = Arr::get($inv, 'down_payment_rate', []);
            $this->assertEquals(3, count($down_payment_rate));
        }
    }

    /**
     * @group testPaySmooth
     **/
    public function testCheckAllCartProductIsPaySmoothSuccessWithInputEmpty()
    {   
        $this->assertEmpty(ProductService::checkAllCartProductIsPaySmooth([]));
    }

    /**
     * @group testPaySmooth
     **/
    public function testCheckCartProductPaySmoothSuccessWithInputEmpty()
    {   
        $this->assertEmpty(ProductService::checkCartProductPaySmooth([]));
    }

    /**
     * @group testIot
     **/
    public function testCheckCartProductIotSuccessWithInputEmpty()
    {   
        $this->assertEmpty(ProductService::checkCartProductIot([]));
    }

    /**
     * @group testIot
     **/
    public function testGetConfigProductIotEmptyConfig()
    {
        Redis::shouldReceive('get')->once()->with("product-ids-iot")->andReturn(null);
        $mock_model = m::mock('overload:App\Models\TruemovehIotConfigModel')->makePartial();
        $mock_model->shouldReceive('findFirst')
            ->once()
            ->andReturn(null);

        $this->assertEmpty(ProductService::getConfigProductIot());
    }

    /**
     * @group testIot
     **/
    public function testGetConfigProductIotException()
    {
        Redis::shouldReceive('get')->once()->with("product-ids-iot")->andThrow(new \Exception('Throw Exception', 500)); 
        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);

        $this->assertEmpty(ProductService::getConfigProductIot());
    }

    /**
     * @group testIot
     **/
    public function testGetConfigProductIotSuccess()
    {
        Redis::shouldReceive('get')->once()->with("product-ids-iot")->andReturn(null);
        Redis::shouldReceive('set')->once()->andReturn(1);
        $mock_model = m::mock('overload:App\Models\TruemovehIotConfigModel')->makePartial();
        $mock_model->shouldReceive('findFirst')
            ->with('product_ids')
            ->once()
            ->andReturn($mock_model)
            ->shouldReceive('toArray')
            ->andReturn(json_decode('{
                "key": "product_ids",
                "product_ids": {
                 "L91597506" : { "verify" : "truemoveh" } ,
                 "L91597508" : { "verify" : "trueonline" }
                }
               }', 1));

        $this->assertNotEmpty(ProductService::getConfigProductIot());
    }

    /**
     * @group testIot
     **/
    public function testGetConfigIotEmptyConfig()
    {
        Redis::shouldReceive('get')->once()->with("config-iot")->andReturn(null);
        $mock_model = m::mock('overload:App\Models\TruemovehIotConfigModel')->makePartial();
        $mock_model->shouldReceive('findFirst')
            ->once()
            ->andReturn(null);

        $this->assertEmpty(ProductService::getConfigIot());
    }

    /**
     * @group testIot
     **/
    public function testGetConfigIotException()
    {
        Redis::shouldReceive('get')->once()->with("config-iot")->andThrow(new \Exception('Throw Exception', 500)); 
        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);
        
        $this->assertEmpty(ProductService::getConfigIot());
    }

    /**
     * @group testIot
     **/
    public function testGetConfigIotSuccess()
    {
        Redis::shouldReceive('get')->once()->with("config-iot")->andReturn(null);
        Redis::shouldReceive('set')->once()->andReturn(1);
        $mock_model = m::mock('overload:App\Models\TruemovehIotConfigModel')->makePartial();
        $mock_model->shouldReceive('findFirst')
            ->with('config')
            ->once()
            ->andReturn($mock_model)
            ->shouldReceive('toArray')
            ->andReturn($this->mockConfigIot());
        
        $response = ProductService::getConfigIot();

        $this->assertNotEmpty($response);
        $this->assertArrayHasKey('cloud_service', $response);
    }

    /**
     * @group testIot
     **/
    public function testCheckProductIotEmptyParam()
    {
        $response = ProductService::checkProductIot("");
        $this->assertEmpty($response);
    }

    /**
     * @group testIot
     **/
    public function testCheckProductIotSuccess()
    {
        Redis::shouldReceive('get')->once()->with("product-ids-iot")->andReturn('{
            "key": "product_ids",
            "product_ids": {
                "L91597506" : { "verify" : "truemoveh" } ,
                "L91597508" : { "verify" : "trueonline" }
            }
        }');

        $response = ProductService::checkProductIot("L91597506");
        $this->assertTrue($response);
    }

    /**
     * @group testIot
     **/
    public function testCheckProductIotSuccessWithReturnFalse()
    {
        Redis::shouldReceive('get')->once()->with("product-ids-iot")->andReturn('{
            "key": "product_ids",
            "product_ids": {
                "L91597506" : { "verify" : "truemoveh" } ,
                "L91597508" : { "verify" : "trueonline" }
            }
        }');

        $response = ProductService::checkProductIot("L91597507");
        $this->assertFalse($response);
    }

    /**
     * @group testIot
     **/
    public function testCheckCartProductIotSuccess()
    {
        $mock_cart = json_decode($this->getFile('cart_iot.json', 'cart'), 1);
        $response  = ProductService::checkCartProductIot($mock_cart);

        foreach (Arr::get($response, 'data.record') as $cart) {
            foreach (Arr::get($cart, 'products') as $product) {
                $this->assertArrayHasKey('is_iot', $product);
                $this->assertTrue(Arr::get($product, 'is_iot'));
            }
        }
    }

    /**
     * @group testIot
     **/
    public function testCheckCartProductIotSuccessWithFalse()
    {
        $mock_cart = json_decode($this->getFile('cart_pay_smooth.json', 'cart'), 1);
        $response  = ProductService::checkCartProductIot($mock_cart);

        foreach (Arr::get($response, 'data.record') as $cart) {
            foreach (Arr::get($cart, 'products') as $product) {
                $this->assertArrayHasKey('is_iot', $product);
                $this->assertFalse(Arr::get($product, 'is_iot'));
            }
        }
    }

    /**
     * @group testIot
     **/
    public function testMapConfigProductIotTOLSuccess()
    {
        $mock_cart = json_decode($this->getFile('product_iot_tol.json', 'product'), 1);
        $response  = ProductService::mapConfigProductIot($mock_cart);
        $product   = Arr::get($response, 'data.record');
        
        $this->assertArrayHasKey('is_iot', $product);
        $this->assertArrayHasKey('iot_config', $product);
        $this->assertArrayHasKey('iot_type', $product);
        $this->assertTrue(Arr::get($product, 'is_iot'));
        $this->assertNotEmpty(Arr::get($product, 'iot_config'));
        $this->assertEquals('trueonline', Arr::get($product, 'iot_type'));
    }

    /**
     * @group testIot1
     **/
    public function testMapConfigProductIotTMVHSuccess()
    {
        Redis::shouldReceive('get')->once()->with("config-iot")->andReturn(null);
        Redis::shouldReceive('set')->once()->andReturn(1);
        $mock_model = m::mock('overload:App\Models\TruemovehIotConfigModel')->makePartial();
        $mock_model->shouldReceive('findFirst')
            ->with('config')
            ->once()
            ->andReturn($mock_model)
            ->shouldReceive('toArray')
            ->andReturn($this->mockConfigIot());

        $mock_cart = json_decode($this->getFile('product_iot_tmvh_299.json', 'product'), 1);
        $response  = ProductService::mapConfigProductIot($mock_cart);
        $product   = Arr::get($response, 'data.record');
        
        $this->assertArrayHasKey('is_iot', $product);
        $this->assertArrayHasKey('iot_config', $product);
        $this->assertArrayHasKey('iot_type', $product);
        $this->assertTrue(Arr::get($product, 'is_iot'));
        $this->assertNotEmpty(Arr::get($product, 'iot_config'));
        $this->assertEquals('truemoveh', Arr::get($product, 'iot_type'));

        foreach (Arr::get($product, 'bundles', []) as $bundle) {
            $this->assertArrayHasKey('cloud_campaign', $bundle);
            $this->assertNotEmpty(Arr::get($bundle, 'cloud_campaign'));
        }

        foreach (Arr::get($product, 'bundle_existing', []) as $bundle_existing) {
            foreach (Arr::get($bundle_existing, 'discount_list', []) as $campaign) {
                if (Arr::get($campaign, 'rc') == 299) {
                    $this->assertArrayHasKey('cloud_campaign', $campaign);
                    $this->assertNotEmpty(Arr::get($campaign, 'cloud_campaign'));
                }
            }
        }
    }

    /**
     * @group testIot
     **/
    public function testMapConfigProductIotTMVHSuccessWithRCNotMatch()
    {
        $mock_cart = json_decode($this->getFile('product_iot_tmvh_not_match_rc.json', 'product'), 1);
        $response  = ProductService::mapConfigProductIot($mock_cart);
        $product  = Arr::get($response, 'data.record');
        
        $this->assertArrayHasKey('is_iot', $product);
        $this->assertArrayHasKey('iot_config', $product);
        $this->assertArrayHasKey('iot_type', $product);
        $this->assertTrue(Arr::get($product, 'is_iot'));
        $this->assertNotEmpty(Arr::get($product, 'iot_config'));
        $this->assertEquals('truemoveh', Arr::get($product, 'iot_type'));

        foreach (Arr::get($product, 'bundles', []) as $bundle) {
            $this->assertArrayHasKey('cloud_campaign', $bundle);
            $this->assertNull(Arr::get($bundle, 'cloud_campaign'));
        }

        foreach (Arr::get($product, 'bundle_existing', []) as $bundle_existing) {
            foreach (Arr::get($bundle_existing, 'discount_list', []) as $campaign) {
                $this->assertArrayHasKey('cloud_campaign', $campaign);
                $this->assertNull(Arr::get($campaign, 'cloud_campaign'));
            }
        }
    }

    /**
     * @return array
     **/
    private function mockConfigIot(): array
    {
        return json_decode('{
            "key": "config",
            "cloud_service": {
                "299": [
                    {
                        "campaign_codes" : [
                            "CN776",
                            "CM777",
                            "CX778",
                            "CP781"
                        ],
                        "header": {
                            "th": "รับ CCTV 1 เครื่อง",
                            "en": "CCTV x1"
                        },
                        "campaign": [
                            {
                                "title": {
                                    "th": "CCTV Cloud 99 บาท/เดือน ดูย้อนหลัง 7 วัน",
                                    "en": "CCTV Cloud 99 ฿( 7-day video history )"
                                },
                                "cloud": "99"
                            },
                            {
                                "title": {
                                    "th": "CCTV Cloud 159 บาท/เดือน ดูย้อนหลัง 14 วัน",
                                    "en": "CCTV Cloud 159 ฿ ( 14-day video history )"
                                },
                                "cloud": "159"
                            }
                        ]
                    },
                    {
                        "campaign_codes" : [
                            "CM783",
                            "CN782",
                            "CX784",
                            "CP786",
                            "CX785"
                        ],
                        "header": {
                            "th": "รับ CCTV 2 เครื่อง",
                            "en": "CCTV x2"
                        },
                        "campaign": [
                            {
                                "title": {
                                    "th": "CCTV Cloud 99x2 บาท/เดือน ดูย้อนหลัง 7 วัน (2 รายการ)",
                                    "en": "CCTV Cloud 99 ฿ x 2 ( 7-day video history )"
                                },
                                "cloud": "99x2"
                            },
                            {
                                "title": {
                                    "th": "CCTV Cloud 159x2 บาท/เดือน ดูย้อนหลัง 14 วัน (2 รายการ)",
                                    "en": "CCTV Cloud 159 ฿ x 2 ( 14-day video history )"
                                },
                                "cloud": "159x2"
                            }
                        ]
                    }
                ]
            }
        }', 1);
    }

    /**
     * @group testGetSpacialDetail
     **/
    public function testGetSpacialDetail()
    {
        Redis::shouldReceive('get')->once()->with("truemoveh-product-spacial-detail-L91597557")->andReturn(null);
        Redis::shouldReceive('set')->andReturn(true);
        $mock_model = m::mock('overload:App\Models\TruemovehProductSpacialDetailModel')->makePartial();
        $mock_model->shouldReceive('findFirst')
            ->with('L91597557')
            ->andReturn($mock_model)
            ->shouldReceive('toArray')
            ->andReturn(json_decode('{
                "product_id": "L91597557",
                "sub_header":{
                   "th":"สมาชิกเอไอเอ ไวทัลลิตี้ พลัส ซื้อ Apple Watch รับทรูมันนี่ 2,022 บาท ตั้งแต่ 11 ธ.ค. 64 - 31 ธ.ค. 64 เงื่อนไขเป็นไปตามที่บริษัทฯ กำหนด",
                   "en":"For AIA Vitality Plus members when buy Apple Watch get 2,022 THB TrueMoney Wallet. Since 11 Dec 64 - 31 Dec 64. Conditions are as specified by the company."
                },
                "promotion_remark":{
                   "th":"*สมาชิกเอไอเอ ไวทัลลิตี้ พลัส สถานะซิลเวอร์ โกลด์ และแพลทินัม ได้รับทรูมันนี่ 2,022 บาท เมื่อซื้อ Apple Watch รุ่นใดก็ได้",
                   "en":"*For AIA Vitality Plus members Silver, Gold and Platinum get 2,022 THB TrueMoney Wallet when buy Apple Watch any series."
                }
             }', 1));
        $response = ProductService::getSpacialDetail('L91597557');

        $this->assertNotEmpty($response);
        $this->assertArrayHasKey('sub_header', $response);
        $this->assertArrayHasKey('promotion_remark', $response);
        $this->assertArrayHasKey('th', Arr::get($response, 'sub_header'));
        $this->assertArrayHasKey('th', Arr::get($response, 'promotion_remark'));
        $this->assertArrayHasKey('en', Arr::get($response, 'sub_header'));
        $this->assertArrayHasKey('en', Arr::get($response, 'promotion_remark'));  
    }

    /**
     * @group testGetSpacialDetail
     **/
    public function testGetSpacialDetailNull()
    {
        Redis::shouldReceive('get')->once()->with("truemoveh-product-spacial-detail-L91597557")->andReturn(null);
        Redis::shouldReceive('set')->andReturn(true);
        $mock_model = m::mock('overload:App\Models\TruemovehProductSpacialDetailModel')->makePartial();
        $mock_model->shouldReceive('findFirst')
            ->with('L91597557')
            ->andReturn($mock_model)
            ->shouldReceive('toArray')
            ->andReturn(json_decode('{
                "product_id": "L91597557",
                "sub_header": null,
                "promotion_remark": null
             }', 1));
        $response = ProductService::getSpacialDetail('L91597557');

        $this->assertEquals(null,  Arr::get($response, 'sub_header'));
        $this->assertEquals(null,  Arr::get($response, 'promotion_remark'));
    }


    /**
     * @group testGetSpacialDetail
     **/
    public function testGetSpacialDetailWithRedis()
    {
        Redis::shouldReceive('get')
        ->once()
        ->with("truemoveh-product-spacial-detail-L91597557")
        ->andReturn('{
            "product_id": "L91597557",
            "sub_header":{
               "th":"สมาชิกเอไอเอ ไวทัลลิตี้ พลัส ซื้อ Apple Watch รับทรูมันนี่ 2,022 บาท ตั้งแต่ 11 ธ.ค. 64 - 31 ธ.ค. 64 เงื่อนไขเป็นไปตามที่บริษัทฯ กำหนด",
               "en":"For AIA Vitality Plus members when buy Apple Watch get 2,022 THB TrueMoney Wallet. Since 11 Dec 64 - 31 Dec 64. Conditions are as specified by the company."
            },
            "promotion_remark":{
               "th":"*สมาชิกเอไอเอ ไวทัลลิตี้ พลัส สถานะซิลเวอร์ โกลด์ และแพลทินัม ได้รับทรูมันนี่ 2,022 บาท เมื่อซื้อ Apple Watch รุ่นใดก็ได้",
               "en":"*For AIA Vitality Plus members Silver, Gold and Platinum get 2,022 THB TrueMoney Wallet when buy Apple Watch any series."
            }
         }');

        $response = ProductService::getSpacialDetail('L91597557');

        $this->assertNotEmpty($response);
        $this->assertArrayHasKey('sub_header', $response);
        $this->assertArrayHasKey('promotion_remark', $response);
        $this->assertArrayHasKey('th', Arr::get($response, 'sub_header'));
        $this->assertArrayHasKey('th', Arr::get($response, 'promotion_remark'));
        $this->assertArrayHasKey('en', Arr::get($response, 'sub_header'));
        $this->assertArrayHasKey('en', Arr::get($response, 'promotion_remark'));
    }

    /**
     * @group testGetSpacialDetail
     **/
    public function testGetSpacialDetailException()
    {
        Redis::shouldReceive('get')->once()->with("truemoveh-product-spacial-detail-L91597372")->andThrow(new \Exception('Throw Exception', 500));
        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);
        
        $this->assertEmpty(ProductService::getSpacialDetail('L91597372'));
    }

    /**
     * @group testTermAndCondition
     **/
    public function testGetConfigProductTermAndCondition()
    {
        Redis::shouldReceive('get')->once()->with("truemoveh-product-term-and-condition-L91597557")->andReturn(null);
        Redis::shouldReceive('set')->andReturn(true);
        $mock_model = m::mock('overload:App\Models\TruemovehProductTermAndConditionConfigModel')->makePartial();
        $mock_model->shouldReceive('getData')
            ->with('L91597557')
            ->andReturn($mock_model)
            ->shouldReceive('toArray')
            ->andReturn(json_decode('{
                "product_id":"L91597557",
                "detail":{
                   "th":"*หลังจากได้รับสินค้า (สำหรับ Apple Watch) กรุณาตรวจสอบสินค้าภายในเวลาที่กำหนด เพื่อรักษาสิทธิประโยชน์สูงสุดจาก TRUE STORE ตรวจสอบสินค้าภายใน 24 ชั่วโมง เพื่อรับสิทธิ์เปลี่ยน/คืนสินค้าในกรณี สินค้าเกิดรอยขีดข่วน หรือ เสียหายจากการขนส่ง ตรวจสอบสินค้าภายใน 7 วัน เพื่อรับสิทธิ์เปลี่ยน/คืนสินค้าในกรณี ระบบภายในตัวเครื่องมีปัญหา **เงื่อนไขในการเปลี่ยน/คืนสินค้า เป็นไปตามที่บริษัทฯ กำหนด",
                   "en":"*Upon receiving your device (For Apple Watch), kindly open and check your device as per the allotted timeline in order to maintain the following privileges with True Store: Return or change your device if you notice scratches and/or other physical damages on your device within 24 hours Return or change your device if you experience any software malfunctions within 7 days **Returning or changing devices are subject to True’s terms and conditions"
                }
             }', 1));
        $response = ProductService::getConfigProductTermAndCondition('L91597557');
        $this->assertNotEmpty($response);
        $product   = Arr::get($response, 'detail');
        $this->assertArrayHasKey('th', $product);
        $this->assertArrayHasKey('en', $product);
    }

    /**
     * @group testTermAndCondition
     **/
    public function testGetConfigProductTermAndConditionDefault()
    {
        Redis::shouldReceive('get')->once()->with("truemoveh-product-term-and-condition-L91597554")->andReturn(null);
        Redis::shouldReceive('set')->andReturn(true);
        $mock_model = m::mock('overload:App\Models\TruemovehProductTermAndConditionConfigModel')->makePartial();
        $mock_model->shouldReceive('getData')
            ->with('L91597554')
            ->andReturn($mock_model)
            ->shouldReceive('toArray')
            ->andReturn(json_decode('{
                "product_id":"default",
                "detail":{
                   "th":"*หลังจากได้รับสินค้า กรุณาตรวจสอบสินค้าภายในเวลาที่กำหนด เพื่อรักษาสิทธิประโยชน์สูงสุดจาก TRUE STORE ตรวจสอบสินค้าภายใน 24 ชั่วโมง เพื่อรับสิทธิ์เปลี่ยน/คืนสินค้าในกรณี สินค้าเกิดรอยขีดข่วน หรือ เสียหายจากการขนส่ง ตรวจสอบสินค้าภายใน 7 วัน เพื่อรับสิทธิ์เปลี่ยน/คืนสินค้าในกรณี ระบบภายในตัวเครื่องมีปัญหา **เงื่อนไขในการเปลี่ยน/คืนสินค้า เป็นไปตามที่บริษัทฯ กำหนด",
                   "en":"*Upon receiving your device, kindly open and check your device as per the allotted timeline in order to maintain the following privileges with True Store: Return or change your device if you notice scratches and/or other physical damages on your device within 24 hours Return or change your device if you experience any software malfunctions within 7 days **Returning or changing devices are subject to True’s terms and conditions"
                }
             }', 1));
        $response = ProductService::getConfigProductTermAndCondition('L91597554');
        $this->assertNotEmpty($response);
        $this->assertEquals('default', Arr::get($response, 'product_id'));
        $product   = Arr::get($response, 'detail');
        $this->assertArrayHasKey('th', $product);
        $this->assertArrayHasKey('en', $product);
    }
    
    /**
     * @group testTermAndCondition
     **/
    public function testGetConfigProductTermAndConditionWithRedis()
    {
        Redis::shouldReceive('get')
        ->once()
        ->with("truemoveh-product-term-and-condition-L91597557")
        ->andReturn('{
            "product_id": "L91597557",
            "detail": {
                "th":"*หลังจากได้รับสินค้า (สำหรับ Apple Watch) กรุณาตรวจสอบสินค้าภายในเวลาที่กำหนด เพื่อรักษาสิทธิประโยชน์สูงสุดจาก TRUE STORE ตรวจสอบสินค้าภายใน 24 ชั่วโมง เพื่อรับสิทธิ์เปลี่ยน/คืนสินค้าในกรณี สินค้าเกิดรอยขีดข่วน หรือ เสียหายจากการขนส่ง ตรวจสอบสินค้าภายใน 7 วัน เพื่อรับสิทธิ์เปลี่ยน/คืนสินค้าในกรณี ระบบภายในตัวเครื่องมีปัญหา **เงื่อนไขในการเปลี่ยน/คืนสินค้า เป็นไปตามที่บริษัทฯ กำหนด",
                "en":"*Upon receiving your device (For Apple Watch), kindly open and check your device as per the allotted timeline in order to maintain the following privileges with True Store: Return or change your device if you notice scratches and/or other physical damages on your device within 24 hours Return or change your device if you experience any software malfunctions within 7 days **Returning or changing devices are subject to True’s terms and conditions"
            }
        }');

        $response = ProductService::getConfigProductTermAndCondition('L91597557');
        $this->assertNotEmpty($response);
        $product   = Arr::get($response, 'detail');
        $this->assertArrayHasKey('th', $product);
        $this->assertArrayHasKey('en', $product);
    }

    /**
     * @group testTermAndCondition
     **/
    public function testGetConfigProductTermAndConditionException()
    {
        Redis::shouldReceive('get')->once()->with("truemoveh-product-term-and-condition-L91597557")->andThrow(new \Exception('Throw Exception', 500)); 
        $mock = m::mock('alias:App\Services\LogService');
        $mock->shouldReceive('writeServiceLog')->andReturn(true);
        
        $this->assertEmpty(ProductService::getConfigProductTermAndCondition('L91597557'));
    }

    /**
     * @group buildNodeProductSim
     **/
    public function testbuildNodeProductSimWithDataSuccess()
    {

        $mock_data = '{ "product_id":91587688, "merchant":{ "id":7, "label":"TruemoveH Sim", "store_id":941527 }, "inventories":[ { "id":"3079050", "sim_type_id":1, "product_id":"91587688", "sku":"AUTO-SIM-PRE-1", "price":49, "compare_at_price":0, "weight":20, "quantity":999, "hold":0, "status":"true", "length":"20.0000", "width":"20.0000", "height":"20.0000" } ], "product_type":"sim", "sim_type":"prepaid", "sim_source_type":"physical-sim", "sim_sub_type":"ir", "special_url":"https://www.wemall-dev.com/tmvh/sims/91587688", "status":"active", "created_at":"2020-06-19 15:35:59", "propo_code":"Social4G", "title":{ "th":"[Automation] ซิมโซเชียล 4G++" }, "images":[ { "id":"d0f99c5495faeaadb35692dc749a58ba", "name":"sim-social-1", "mime":"image/png", "width":450, "height":450, "extension":"png", "position":1, "url":"https://store.wls-dev.com/upload/gallery5/941527/a/8b/d0f99c5495faeaadb35692dc749a58ba.png" } ] }';

        $response = ProductService::buildNodeProductSim((array)json_decode($mock_data));
        $this->assertNotEmpty($response);
        $this->assertArrayHasKey('sim_source_type', $response);
        $this->assertEquals('physical-sim', Arr::get($response, 'sim_source_type'));
        $this->assertArrayHasKey('sim_type', $response);
        $this->assertEquals('prepaid', Arr::get($response, 'sim_type'));
        $this->assertArrayHasKey('sim_sub_type', $response);
        $this->assertEquals('ir', Arr::get($response, 'sim_sub_type'));
    }

    /**
     * @group buildNodeSimSourceType
     **/
    public function testbuildNodeSimSourceTypeReturnTrue()
    {
        $mock_product = json_decode($this->getFile('product_esim.json', 'product'), 1);
        $mock_model = m::mock('overload:App\Models\TruemovehProductEsimConfigModel')->makePartial();
        $mock_model->shouldReceive('findFirst')
            ->with('L91587233')
            ->once()
            ->andReturn($mock_model)
            ->shouldReceive('toArray')
            ->andReturn(json_decode('{"product_id":"L91587233"}', 1));
        
        $mock_product_id = 'L91587233';
        $header_product_type = ['sim'];
        $response = ProductService::buildNodeSimSourceType($mock_product, $mock_product_id, $header_product_type);
        $this->assertNotEmpty($response);
        $this->assertEquals(true, Arr::get($response, 'data.record.product_sim_source_type'));
    }

    /**
     * @group buildNodeSimSourceType
     **/
    public function testbuildNodeSimSourceTypeReturnFalse()
    {
        $mock_product = json_decode($this->getFile('product_esim.json', 'product'), 1);
        $mock_model = m::mock('overload:App\Models\TruemovehProductEsimConfigModel')->makePartial();
        $mock_model->shouldReceive('findFirst')
            ->once()
            ->andReturn(null);
        
        $mock_product_id = 'L91587234';
        $header_product_type = ['sim'];
        $response = ProductService::buildNodeSimSourceType($mock_product, $mock_product_id, $header_product_type);
        $this->assertEquals(false, Arr::get($response, 'data.record.product_sim_source_type'));

    }

    /**
     * @group buildNodeSimSourceType
     **/
    public function testbuildNodeSimSourceTypeNotSimReturnFalse()
    {
        $mock_product = json_decode($this->getFile('product_esim.json', 'product'), 1);
        $mock_model = m::mock('overload:App\Models\TruemovehProductEsimConfigModel')->makePartial();
        $mock_model->shouldReceive('findFirst')
            ->once()
            ->andReturn(null);
        
        $mock_product_id = 'L91587234';
        $header_product_type = [];
        $response = ProductService::buildNodeSimSourceType($mock_product, $mock_product_id, $header_product_type);
        $this->assertEquals(false, Arr::get($response, 'data.record.product_sim_source_type'));

    }

    /**
     * @group buildNodeSimSourceType
     **/
    public function testbuildNodeSimSourceTypeException()
    {
        $mock_product = json_decode($this->getFile('product_esim.json', 'product'), 1);
        $mock_model = m::mock('overload:App\Models\TruemovehProductEsimConfigModel')->makePartial();
        $mock_model->shouldReceive('findFirst')
            ->once()->with("L91587233")->andThrow(new \Exception('Throw Exception', 500)); 

        $mock_product_id = 'L91587233';
        $header_product_type = ['sim'];
        $response = ProductService::buildNodeSimSourceType($mock_product, $mock_product_id, $header_product_type);
        $this->assertEquals(false, Arr::get($response, 'data.record.product_sim_source_type'));
    }

    /**
     * @group GetProductVerifyEsim
     **/
    public function testGetProductVerifyEsimHaveData()
    {
        $mock_response = '{ "product_id":91587234, "merchant":{ "id":7, "label":"TruemoveH Sim", "store_id":941527 }, "inventories":[ { "id":"3078353", "sim_type_id":1, "product_id":"91587234", "sku":"3000085736", "price":49, "compare_at_price":0, "weight":1, "quantity":9584, "hold":376, "status":"true", "length":"2.0000", "width":"2.0000", "height":"2.0000" } ], "product_type":"sim", "sim_type":"postpaid", "sim_source_type":["physical-sim","e-sim"], "sim_sub_type":null, "special_url":"https://www.wemall-dev.com/tmvh/sims/91587234", "status":"active", "created_at":"2022-01-13 15:42:51", "propo_code":"super4g", "title":{ "th":"4G+ Unlimited SIM รายเดือน" }, "images":[ { "id":"328f1820270c77c130f170785febdbca", "name":"5458c7515318e9326156ecb0694df7b0", "mime":"image/jpeg", "width":1000, "height":1000, "extension":"jpg", "position":1, "url":"https://store.wls-dev.com/upload/gallery5/941527/a/bc/328f1820270c77c130f170785febdbca.jpg" } ] }';
        $mock_product_id = 'L91587234';
        $url       = 'truemoveh/product-verify/' . Arr::get(explode('L', $mock_product_id), '1'); 
        $mock_model = m::mock('overload:App\Libraries\Clients\PortalApiClient')->makePartial();
        $mock_model->shouldReceive('get')
            ->with($url)
            ->andReturn((array)json_decode($mock_response));

        $response = ProductService::getProductVerifyEsim($mock_product_id);
        $this->assertNotEmpty($response);
        $this->assertArrayHasKey('product_id', $response);
        $this->assertEquals('91587234', Arr::get($response, 'product_id'));
        $this->assertArrayHasKey('product_type', $response);
        $this->assertEquals('sim', Arr::get($response, 'product_type'));
        $this->assertArrayHasKey('sim_type', $response);
        $this->assertEquals('postpaid', Arr::get($response, 'sim_type'));
        $this->assertArrayHasKey('sim_source_type', $response);
        $this->assertIsArray(Arr::get($response, 'sim_source_type'));
        $this->assertContains('physical-sim', Arr::get($response, 'sim_source_type'));
        $this->assertArrayHasKey('sim_sub_type', $response);
        $this->assertEquals(null, Arr::get($response, 'sim_sub_type'));
    } 

    /**
     * @group GetProductVerifyEsim
     **/
    public function testGetProductVerifyEsimNotFoundData()
    {
        $mock_product_id = 'L91587234';
        $url       = 'truemoveh/product-verify/' . Arr::get(explode('L', $mock_product_id), '1'); 
        $mock_model = m::mock('overload:App\Libraries\Clients\PortalApiClient')->makePartial();
        $mock_model->shouldReceive('get')
            ->with($url)
            ->andReturn([]);

        $response = ProductService::getProductVerifyEsim($mock_product_id);
        $this->assertEmpty($response);
    } 

    /**
     * @group GetProductVerifyEsim
     **/
    public function testGetProductVerifyEsimException()
    {
        $mock_product_id = 'L91587233';
        $url       = 'truemoveh/product-verify/' . Arr::get(explode('L', $mock_product_id), '1'); 
        $mock_model = m::mock('overload:App\Libraries\Clients\PortalApiClient')->makePartial();
        $mock_model->shouldReceive('get')
            ->with($url)            
            ->andThrow(new \Exception('Throw Exception', 500)); 

        $response = ProductService::getProductVerifyEsim($mock_product_id);
        $this->assertEmpty($response);
    }

}
