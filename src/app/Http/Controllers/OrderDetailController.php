<?php

namespace App\Http\Controllers;

use App\Facades\PaymentMethodService;
use App\Facades\VHora\VHoraService;
use App\Facades\OrderService;
use App\Services\GuzzleService;
use App\Services\LogService;
use App\Services\SimActivationService;
use App\Services\StoreService;
use App\Services\TyphoonService;
use App\Services\VHora\ReserveNumberService;
use App\Services\WeOmniService;
use App\Services\WlsService;
use App\Services\CreditokService;
use App\Services\EKycService;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use PDF;

class OrderDetailController extends Controller
{
    public function unique_multidim_array($array, $key)
    {
        $temp_array = [];
        $i          = 0;
        $key_array  = [];

        foreach ($array as $val) {
            if (!in_array($val[$key], $key_array)) {
                $key_array[$i]  = $val[$key];
                $temp_array[$i] = $val;
            }
            $i++;
        }

        return $temp_array;
    }

    public function getAddressRule()
    {
        return [
            'delivery_address.fax' => '',
            'billing_address.fax'  => '',

            'delivery_address.firstname'   => 'required|between:1,32',
            'delivery_address.lastname'    => 'required|between:1,32',
            'delivery_address.company'     => 'between:1,60',
            'delivery_address.address1'    => 'required|between:1,128',
            'delivery_address.address2'    => 'between:1,128',
            'delivery_address.district_id' => 'required|integer|digits_between:1,11',
            'delivery_address.city_id'     => 'required|integer|digits_between:1,11',
            'delivery_address.province_id' => 'required|integer|digits_between:1,11',
            'delivery_address.postcode'    => 'required|between:1,10',
            'delivery_address.country_id'  => 'required|integer|digits_between:1,11',
            'delivery_address.phone'       => 'required|string',
            'delivery_address.email'       => 'email:filter|required|between:1,50',
            'delivery_address.branch'      => 'between:1,5',

            'billing_address.firstname'   => 'between:1,32',
            'billing_address.lastname'    => 'between:1,32',
            'billing_address.company'     => 'between:1,60',
            'billing_address.address1'    => 'required|between:1,128',
            'billing_address.address2'    => 'between:1,128',
            'billing_address.district_id' => 'required|integer|digits_between:1,11',
            'billing_address.city_id'     => 'required|integer|digits_between:1,11',
            'billing_address.province_id' => 'required|integer|digits_between:1,11',
            'billing_address.postcode'    => 'required|between:1,10',
            'billing_address.country_id'  => 'required|integer|digits_between:1,11',
            'billing_address.phone'       => 'required|string',
            'billing_address.email'       => 'email:filter|required|between:1,50',
            'billing_address.branch'      => 'between:1,5',
            'billing_address.tax_no'      => 'numeric|digits_between:1,13',

        ];
    }

    public function array_remove_empty($haystack)
    {
        foreach ($haystack as $key => $value) {
            if (is_array($value)) {
                $haystack[$key] = App('App\Http\Controllers\OrderDetailController')->array_remove_empty($haystack[$key]);
            }

            if (empty($haystack[$key])) {
                unset($haystack[$key]);
            }
        }

        return $haystack;
    }

    public function store(Request $request)
    {
        // send postorder request
        $tmp_lrequest            = $request->all();
        $original_payment_method = $tmp_lrequest['payment_detail']['method']; // TEC-567 wrong-payment-channel-coupon-placeorder
        // not support muti store at one cart
        $tmh_sale_sms_id                          = Arr::get($tmp_lrequest, 'afc', false);
        $payment_method                           = PaymentMethodService::switchPaymentMethod(Arr::get($tmp_lrequest, 'payment_detail.method'), Arr::get($tmp_lrequest, 'products.0.store_id'));
        $tmp_lrequest['payment_detail']['method'] = (string) $payment_method;
        $request->replace($tmp_lrequest);
        // need access_token
        $lrequest    = $request;
        $coupon_code = $lrequest->input('coupon_code'); // TEC-19 coupon
        $gateway     = Arr::get($tmp_lrequest, 'payment_detail.gateway');

        $rule = [
            'oneTimeCardToken' => '',

            'payment_detail.method' => 'required',
            'point_idcard'          => 'digits_between:13,13',

            'customer_detail.first_name'    => 'required|string',
            'customer_detail.last_name'     => 'required|string',
            'customer_detail.email'         => 'required|email:filter', //email: rfc, strict, spoof, filter
            'customer_detail.telephone'     => 'required|string',
            'customer_detail.fax'           => '',
            'customer_detail.customer_note' => '',

            "products"                => "required|array",
            'products.*.product_id'   => 'required',
            'products.*.inventory_id' => 'required',
            'products.*.quantity'     => 'required|integer',

            'privilege'         => '',
            'cart_id'           => 'required',
            'sim_meta'          => 'array',
            'sim_meta_postpaid' => 'array',
        ];

        $address_rule = $this->getAddressRule();

        $rule = array_merge($rule, $address_rule);

        $tmp_input_filtered = App('App\Http\Controllers\OrderDetailController')->array_remove_empty($request->all());

        // convert input data to the one we can send
        $validator = Validator::make($tmp_input_filtered, $rule);

        if ($validator->fails()) {
            $errors = $validator->errors();

            return response()->json($errors, 400);
        }

        $request_parameter = [];

        $json_template_data = json_decode(
            '{
          "oneTimeCardToken": "",
          "config": {
            "app_id": 3,
            "redirect_url": "",
            "device": "web",
            "in_page": 1
          },
          "store_detail": [],
          "payment_detail": {
            "company": "wetrust",
            "currency_code": "THB",
            "discount": 0,
            "com_vat": 2,
            "com_ship_fee": 1.11
          },
          "shipping_detail": {
            "company": "Custom",
            "method": "WeMall",
            "weight_unit": "kg",
            "price": 0
          },
          "customer_detail": {
            "id": 0,
            "group_id": 1,
            "type": "email",
            "fax": "",
            "ip": "127.0.0.1",
            "customer_note": ""
          },
          "delivery_address": {},
          "address_location": {
            "lat": "",
            "lng": ""
          },
          "billing_address": {},
          "products": [{}],
          "promotions": [],
          "summaries": [],
          "section": "wemall",
          "channel": "TMH-Website",
          "employee_code": ""
        }',
            true
        );

        // TEC-468, random user id for WEOMNICCW method
        $request_payment_method = Arr::get($lrequest->payment_detail, 'method');
        if ($request_payment_method === "WEOMNICCW") {
            $number                                      = rand(1, 9998);
            $num_pad                                     = str_pad($number, 4, 0, STR_PAD_LEFT);
            $json_template_data["customer_detail"]["id"] = '9999' . $num_pad;
        }
        // end TEC-468, random user id for WEOMNICCW method

        // Add CLM Data to variable
        $clm_identity        = $lrequest->input('clm_upsell');
        $clm_data            = null;
        $clm_product_matcode = null;
        $clm_type            = null;
        $clm_pp_code_list    = [];
        $clm_matcode_list    = [];

        if ($clm_identity != null) {
            $clm_verify_data = Redis::get('truestore:clm_upsell:identity:' . $clm_identity . ':verify_data');
            if ($clm_verify_data != null) {
                $clm_data = json_decode($clm_verify_data, true);
            }
            $clm_type         = Arr::get($clm_data, 'input.type');
            $clm_product_id   = explode(',', Arr::get($clm_data, 'input.product_id', ''));
            $clm_pp_code_list = array_column(Arr::get($clm_data, 'clm_data.offeringBeanList', []), 'pricePlanCode');
            $clm_matcode_list = array_column(Arr::get($clm_data, 'clm_data.offeringBeanList', []), 'matCode');
        }

        // Set default new_mobile_number
        $new_mobile_number = '';

        $json_template_data["config"]["redirect_url"] = multiEnv(env('SUCCESS_PAGE_URL', false));
        if (!$json_template_data["config"]["redirect_url"]) {
            $status_code = 400;
            $body        = 'SUCCESS_PAGE_URL not found';

            return response()->json($body, $status_code);
        }
        $request_parameter = $json_template_data;

        foreach ($request->all() as $key => $value) {
            if ($key == "products") {
                $request_parameter[$key] = $value;
            } elseif (!empty($value) && isset($request_parameter[$key]) && gettype($request_parameter[$key]) == "array" && gettype($value) == "array") {
                $request_parameter[$key] = array_merge($request_parameter[$key], $value);
            } else {
                $request_parameter[$key] = $value;
            }
        }

        if ($request->headers->has('Authorization') &&
            !empty(\Illuminate\Support\Facades\Request::header('Authorization'))
        ) {
            $result = App('App\Http\Controllers\APIController')->postLogin($request);
            if (method_exists($result, 'getData')) {
                $result = (json_decode(json_encode($result->getData()), true));
                if ($result['status_code'] != 200 && $result['status_code'] != 0) {
                    return $result;
                }

                $result_from_login_api = $result["data"];

                if (isset($result_from_login_api["access_token"]) && !empty($result_from_login_api["access_token"])) {
                    $wemall_access_token = "Bearer " . $result_from_login_api["access_token"];
                    $lrequest_2          = new \Illuminate\Http\Request();
                    $lrequest_2->setMethod('GET');
                    $lrequest_2->headers->set('Authorization', $wemall_access_token);

                    $result = App('App\Http\Controllers\APIController')->getProfileContent($lrequest_2);

                    if (!(isset($result["status_code"]) && $result["status_code"] <= 200)) {
                        $status_code = 400;
                        $body        = ["message" => ["en" => "unable to fetch user detail when placeorder", "th" => "ไม่สามารถนำเข้าข้อมูลผู้ใช้ได้เมื่อสั่งซื้อสินค้า"]];

                        return response()->json($body, $status_code);
                    }

                    if (isset(json_decode($result["body"], true)["data"]["user_id"]) && !empty(json_decode($result["body"], true)["data"]["user_id"])) {
                        $wemall_user_id                             = json_decode($result["body"], true)["data"]["user_id"];
                        $request_parameter["customer_detail"]["id"] = $wemall_user_id;
                    }
                }

                if (!isset($request_parameter["customer_detail"]["id"])) {
                    $status_code                        = 400;
                    $result_body_array                  = [];
                    $result_body_array['message']       = [];
                    $result_body_array['message']['en'] = 'unable to process placeorder (userid problem)';
                    $result_body_array['message']['th'] = 'ไม่สามารถนำสั่งซื้อสินค้าได้ (ปัญหา userid)';

                    return response()->json($result_body_array, $status_code);
                }
            }
        }

        $result_body_array = [];
        $master_data_file  = [];

        foreach (["city", "district", "province"] as $suggest_type) {
            try {
                $result_body_array[$suggest_type] = json_decode(file_get_contents(storage_path("api/config/sample_page_when_offline/" . "th_" . $suggest_type . ".json")), true);
                $master_data_file[$suggest_type]  = $result_body_array[$suggest_type];
            } catch (\Exception $e) {
                $status_code = 400;
                $body        = 'master data file for address suggestion not found' . " $suggest_type";

                return response()->json($body, $status_code); //*/
            }
        }

        // Delivery Address Filter
        $tmp_district = "no_data";
        $tmp_city     = "no_data";
        $tmp_province = "no_data";

        if ($request_parameter["delivery_address"]["district_id"] != "0") {
            $parameter    = ["id" => $request_parameter["delivery_address"]["district_id"]];
            $tmp_district = $this->filter_only_answer($result_body_array["district"], $parameter)[0]["name"];
        }

        if ($request_parameter["delivery_address"]["city_id"] != "0") {
            $parameter = ["id" => $request_parameter["delivery_address"]["city_id"]];
            $tmp_city  = $this->filter_only_answer($result_body_array["city"], $parameter)[0]["name"];
        }

        if ($request_parameter["delivery_address"]["province_id"] != "0") {
            $parameter    = ["id" => $request_parameter["delivery_address"]["province_id"]];
            $tmp_province = $this->filter_only_answer($result_body_array["province"], $parameter)[0]["name"];
        }

        $request_parameter["delivery_address"]["district"] = $tmp_district;
        $request_parameter["delivery_address"]["city"]     = $tmp_city;
        $request_parameter["delivery_address"]["province"] = $tmp_province;

        $request_parameter["delivery_address"]["country_id"] = 209;
        $request_parameter["delivery_address"]["country"]    = "ประเทศไทย";

        // Billing Address Address Filter
        $tmp_district = "no_data";
        $tmp_city     = "no_data";
        $tmp_province = "no_data";

        if ($request_parameter["billing_address"]["district_id"] != "0") {
            $parameter    = ["id" => $request_parameter["billing_address"]["district_id"]];
            $tmp_district = $this->filter_only_answer($result_body_array["district"], $parameter)[0]["name"];
        }

        if ($request_parameter["billing_address"]["city_id"] != "0") {
            $parameter = ["id" => $request_parameter["billing_address"]["city_id"]];
            $tmp_city  = $this->filter_only_answer($result_body_array["city"], $parameter)[0]["name"];
        }

        if ($request_parameter["billing_address"]["province_id"] != "0") {
            $parameter    = ["id" => $request_parameter["billing_address"]["province_id"]];
            $tmp_province = $this->filter_only_answer($result_body_array["province"], $parameter)[0]["name"];
        }

        $request_parameter["billing_address"]["district"] = $tmp_district;
        $request_parameter["billing_address"]["city"]     = $tmp_city;
        $request_parameter["billing_address"]["province"] = $tmp_province;

        $request_parameter["billing_address"]["country_id"] = 209;
        $request_parameter["billing_address"]["country"]    = "ประเทศไทย";

        $parameter_name_list = ["address2", "firstname", "lastname", "branch", "company"];

        foreach ($parameter_name_list as $p_name) {
            if (!isset($request_parameter["billing_address"][$p_name]) ||
                (isset($request_parameter["billing_address"][$p_name]) && empty($request_parameter["billing_address"][$p_name]))
            ) {
                $request_parameter["billing_address"][$p_name] = "-";
            }
            if (!isset($request_parameter["delivery_address"][$p_name]) ||
                (isset($request_parameter["delivery_address"][$p_name]) && empty($request_parameter["delivery_address"][$p_name]))
            ) {
                $request_parameter["delivery_address"][$p_name] = "-";
            }
        }

        //payment gateway check these firstname, lastname.
        //I have to replace firstname, lastname with company name in case it's got filled with company name.
        //Thai is allowed.
        if (isset($request_parameter["billing_address"]["company"])
            && !empty($request_parameter["billing_address"]["company"])
            && $request_parameter["billing_address"]["company"] != "-") {
            $request_parameter["billing_address"]["firstname"] = substr($request_parameter["billing_address"]["company"], 0, 32);
            $request_parameter["billing_address"]["lastname"]  = substr($request_parameter["billing_address"]["company"], 0, 32);
        }
        if (isset($request_parameter["delivery_address"]["company"])
            && !empty($request_parameter["delivery_address"]["company"])
            && $request_parameter["delivery_address"]["company"] != "-") {
            $request_parameter["delivery_address"]["firstname"] = substr($request_parameter["delivery_address"]["company"], 0, 32);
            $request_parameter["delivery_address"]["lastname"]  = substr($request_parameter["delivery_address"]["company"], 0, 32);
        }
        if (!isset($request_parameter["billing_address"]["branch"]) ||
            (isset($request_parameter["billing_address"]["branch"]) && empty($request_parameter["billing_address"]["branch"]))
        ) {
            $request_parameter["billing_address"]["branch"] = "-";
        }
        if (!isset($request_parameter["delivery_address"]["branch"]) ||
            (isset($request_parameter["delivery_address"]["branch"]) && empty($request_parameter["delivery_address"]["branch"]))
        ) {
            $request_parameter["delivery_address"]["branch"] = "-";
        }

        if (!isset($request_parameter["billing_address"]["company"]) ||
            (isset($request_parameter["billing_address"]["company"]) && empty($request_parameter["billing_address"]["company"]))
        ) {
            $request_parameter["billing_address"]["company"] = "-";
        }
        if (!isset($request_parameter["delivery_address"]["company"]) ||
            (isset($request_parameter["delivery_address"]["company"]) && empty($request_parameter["delivery_address"]["company"]))
        ) {
            $request_parameter["delivery_address"]["company"] = "-";
        }

        if (!isset($request_parameter["billing_address"]["first_name"]) ||
            (isset($request_parameter["billing_address"]["first_name"]) && empty($request_parameter["billing_address"]["first_name"]))
        ) {
            $request_parameter["billing_address"]["first_name"] = "-";
        }
        if (!isset($request_parameter["delivery_address"]["first_name"]) ||
            (isset($request_parameter["delivery_address"]["first_name"]) && empty($request_parameter["delivery_address"]["first_name"]))
        ) {
            $request_parameter["delivery_address"]["first_name"] = "-";
        }

        if (!isset($request_parameter["billing_address"]["last_name"]) ||
            (isset($request_parameter["billing_address"]["last_name"]) && empty($request_parameter["billing_address"]["last_name"]))
        ) {
            $request_parameter["billing_address"]["last_name"] = "-";
        }
        if (!isset($request_parameter["delivery_address"]["last_name"]) ||
            (isset($request_parameter["delivery_address"]["last_name"]) && empty($request_parameter["delivery_address"]["last_name"]))
        ) {
            $request_parameter["delivery_address"]["last_name"] = "-";
        }

        $total        = 0;
        $shipping     = 0;
        $store_detail = [];
        // start of get cart api data
        $url          = "wportal/cart/" . $request_parameter['cart_id'];
        $tmp_lrequest = new \Illuminate\Http\Request();

        // start of fix TEC-19 add discount coupon
        if (!empty($coupon_code)) {
            $tmp_lrequest['coupon_code']     = $coupon_code;
            $tmp_lrequest['payment_channel'] = strtoupper($original_payment_method); // TEC-567 wrong-payment-channel-coupon-placeorder
            $tmp_lrequest['payment_channel'] = PaymentMethodService::switchPaymentMethodByGateway([
                'payment_detail' => ['gateway' => $gateway],
            ], strtoupper($original_payment_method));
        }
        // end of fix TEC-19 add discount coupon

        $tmp_lrequest->setMethod('GET');
        $result = App('App\Http\Controllers\APIController')->callAPIContent($url, $tmp_lrequest);
        if (!(isset($result["body"]) && gettype($result["body"]) == "string")) {
            $status_code       = 400;
            $result_body_array = [];

            $result_body_array['message']       = [];
            $result_body_array['message']['en'] = 'unable to get products from cart';
            $result_body_array['message']['th'] = 'ไม่พบข้อมูลสินค้าในตะกร้า';

            return response()->json($result_body_array, $status_code);
        }
        $tmp_result_cart                            = json_decode($result["body"], true);
        $is_bundle                                  = false;
        $product_detail_from_cart_api_by_product_id = [];
        $cart_hash                                  = $request_parameter["cart_id"];

        // start of TEC-419-420 add COD payment method
        $is_payment_method_placeorder_cod      = isset($request_parameter["payment_detail"]["method"]) && $request_parameter["payment_detail"]["method"] == "COD";
        $is_allow_payment_method_cod_from_cart = isset($tmp_result_cart["data"]["is_allow_payment_method_cod"]) && $tmp_result_cart["data"]["is_allow_payment_method_cod"];
        if ($is_payment_method_placeorder_cod && !$is_allow_payment_method_cod_from_cart) {
            $status_code       = 400;
            $result_body_array = [];

            $result_body_array['message']       = [];
            $result_body_array['message']['en'] = 'This payment method is not allowed.';
            $result_body_array['message']['th'] = 'ไม่อนุญาตให้จ่ายเงินด้วยวิธีที่ระบุ';

            return response()->json($result_body_array, $status_code);
        }
        // end of TEC-419-420 add COD payment method

        // get main product id and main inventory id
        $ent_pack_cart     = Redis::get('truestore:ent_pack_cart:' . $cart_hash . ':content');
        $main_product_id   = '';
        $main_inventory_id = '';
        $main_sku          = '';
        $thai_id           = '';
        $voucher_code      = '';
        if (!empty($ent_pack_cart)) {
            $ent_pack_cart = json_decode($ent_pack_cart, true);

            $main_product_id   = Arr::get($ent_pack_cart, 'entertainment_package_data.main_product_id');
            $main_inventory_id = Arr::get($ent_pack_cart, 'entertainment_package_data.main_inventory_id');
            $thai_id           = Arr::get($ent_pack_cart, 'thai_id');
            $voucher_code      = Arr::get($ent_pack_cart, 'voucher_code');
        }

        // check voucher status
        if (!empty($thai_id) && !empty($voucher_code)) {
            $check_status   = TyphoonService::checkStatus($voucher_code, $thai_id);
            $voucher_status = json_decode($check_status[1], true);
            $code           = Arr::get($voucher_status, 'code');
            $status         = Arr::get($voucher_status, 'voucher_status');

            if ($check_status[0] !== 200 || $code !== 200 || $status === 'used') {
                $result_body_array = [];

                $result_body_array['tmp_data']['voucher_status'] = $voucher_status;

                $result_body_array['message']       = [];
                $result_body_array['message']['en'] = 'invalid voucher code';
                $result_body_array['message']['th'] = 'voucher code ไม่ถูกต้อง';

                return response()->json($result_body_array, 400);
            }
        }
        // end check voucher status

        $pickup_at_seven_in_cart = false;
        $product_in_cart_count   = 0;

        // loop store id in cart
        if (isset($tmp_result_cart["data"]["record"])) {
            for ($store_index = 0; $store_index < count($tmp_result_cart["data"]["record"]); $store_index++) {
                if (isset($tmp_result_cart["data"]["record"][$store_index]["products"]) && count($tmp_result_cart["data"]["record"][$store_index]["products"]) > 0) {
                    foreach ($tmp_result_cart["data"]["record"][$store_index]["products"] as $tmp_product) {
                        $verification_required = TyphoonService::getVerificationRequiredRedis($tmp_product['id']);
                        if ($verification_required) {
                            // verify thai id
                            $content    = SimActivationService::verifyThaiId($thai_id);
                            $tmp_result = json_decode($content[1], true);

                            $status = Arr::get($tmp_result, 'status');
                            if ($content[0] !== 200 || $status !== 'success') {
                                $result_body_array = [];

                                $result_body_array['tmp_data']['verify_thai_id'] = $tmp_result;

                                $result_body_array['message']       = [];
                                $result_body_array['message']['en'] = 'unable to fetch product data';
                                $result_body_array['message']['th'] = 'ไม่สามารถนำเข้าข้อมูลสินค้าได้';

                                return response()->json($result_body_array, 400);
                            }
                        }

                        if (isset($tmp_product["is_bundle"]) &&
                            $tmp_product["is_bundle"] == true
                        ) {
                            $is_bundle = true;
                        }

                        if (
                            in_array($tmp_product["inventory"]["sku"], $clm_matcode_list) &&
                            (
                                ($clm_type == "bundle" && in_array($tmp_product["product_type"], ["device_bundle_new_customer", "device_bundle_existing"])) ||
                                (($clm_type == "sim" && in_array($tmp_product["product_type"], ["sim", "postpaid"]) && in_array($tmp_product["id"], $clm_product_id))) ||
                                (($clm_type == "devices" && ($tmp_product["product_type"] == "product") && in_array($tmp_product["id"], $clm_product_id)))
                            )
                        ) {
                            $clm_product_matcode = $tmp_product["inventory"]["sku"];
                        }

                        if ($tmp_product["id"] === $main_product_id && $tmp_product["inventory"]["id"] == $main_inventory_id) {
                            $main_sku = $tmp_product["inventory"]["sku"];
                        }

                        if (!isset($product_detail_from_cart_api_by_product_id[$tmp_product["id"]])) {
                            $product_detail_from_cart_api_by_product_id[$tmp_product["id"]] = [];
                        }

                        $product_detail_from_cart_api_by_product_id[$tmp_product["id"]][$tmp_product["inventory"]["sku"]] = $tmp_product;
                        if (in_array($product_detail_from_cart_api_by_product_id[$tmp_product["id"]][$tmp_product["inventory"]["sku"]]["product_type"], ["device_bundle_new_customer", "device_bundle_prepaid"])) {
                            if (strtoupper($product_detail_from_cart_api_by_product_id[$tmp_product["id"]][$tmp_product["inventory"]["sku"]]["bundles"][0]["benefit"]["unit"]) == "PERCENT") {
                                $price_from_inventory_id = $product_detail_from_cart_api_by_product_id[$tmp_product["id"]][$tmp_product["inventory"]["sku"]]["inventory"]["price"];
                                $discount_from_bundle    = $product_detail_from_cart_api_by_product_id[$tmp_product["id"]][$tmp_product["inventory"]["sku"]]["bundles"][0]["benefit"]["amount"] / 100.0 * $price_from_inventory_id;
                            } else {
                                $discount_from_bundle = $product_detail_from_cart_api_by_product_id[$tmp_product["id"]][$tmp_product["inventory"]["sku"]]["bundles"][0]["benefit"]["amount"];
                            }
                            $bundle_ref_code        = $product_detail_from_cart_api_by_product_id[$tmp_product["id"]][$tmp_product["inventory"]["sku"]]["bundles"][0]["ref_code"];
                            $bundle_name            = $product_detail_from_cart_api_by_product_id[$tmp_product["id"]][$tmp_product["inventory"]["sku"]]["bundles"][0]["name"];
                            $bundle_description     = $product_detail_from_cart_api_by_product_id[$tmp_product["id"]][$tmp_product["inventory"]["sku"]]["bundles"][0]["description"];
                            $bundle_advance_payment = $product_detail_from_cart_api_by_product_id[$tmp_product["id"]][$tmp_product["inventory"]["sku"]]["bundles"][0]["advance_payment"];
                        }
                    }
                } else {
                    $status_code                        = 400;
                    $result_body_array                  = [];
                    $result_body_array['message']       = [];
                    $result_body_array['message']['en'] = 'unable to get products from cart';
                    $result_body_array['message']['th'] = 'ไม่พบข้อมูลสินค้าในตะกร้า';

                    return response()->json($result_body_array, $status_code);
                }

                // start of check pickup at seven
                $product_in_cart_count += Arr::get($tmp_result_cart, 'data.record.' . $store_index . '.total_quantity', 0);
                if (
                    Arr::get($tmp_result_cart, 'data.record.' . $store_index . '.store.shipping_method.PICKUP') === true
                ) {
                    $pickup_at_seven_in_cart = true;
                }
                // end of check pickup at seven
            }
        } else {
            $message_body                  = ["message" => []];
            $message_body["message"]["en"] = "server connection unavailable, please try again";
            $message_body["message"]["th"] = "ไม่สามารถติดต่อกับเว็บไซต์ได้ กรุณาลองทำรายการใหม่อีกครั้ง";

            return response()->json($message_body, 503);
        }

        // end of get cart api data

        // Add Privilege
        if (!isset($request_parameter['cart_id'])) {
            $status_code                        = 400;
            $result_body_array['message']       = [];
            $result_body_array['message']['en'] = 'cart_id not found';
            $result_body_array['message']['th'] = 'ไม่พบ cart_id เลขระบุะกร้าสินค้า';
            if (isset($result_body_array["city"])) {
                unset($result_body_array["city"]);
            }
            if (isset($result_body_array["country"])) {
                unset($result_body_array["country"]);
            }
            if (isset($result_body_array["district"])) {
                unset($result_body_array["district"]);
            }
            if (isset($result_body_array["province"])) {
                unset($result_body_array["province"]);
            }

            return response()->json($result_body_array, $status_code);
        }

        // start of get privilege placeorder redis
        $cart_privilege_placeorder_data        = Redis::get("store:verify:cart_id:$cart_hash:privilege_placeorder");
        $redis_privilege_placeorder_body_array = json_decode($cart_privilege_placeorder_data, true);

        $data_privilege = Arr::get($request_parameter, 'privilege.0', []);
        $redis_privilege_key = Arr::get($data_privilege, 'product_id', '') . '.' . Arr::get($data_privilege, 'product_code', '');
        $redis_privilege_placeorder_detail = Arr::get($redis_privilege_placeorder_body_array, $redis_privilege_key);
        // end of get privilege placeorder redis

        // privilege / discount setup
        $cart_privilege_data = Redis::get("store:cart_id:" . $request_parameter['cart_id']);
        unset($request_parameter['cart_id']);

        $cart_discount_hash = [];
        $have_discount      = false;

        if (!empty($cart_privilege_data)) {
            $cart_privilege_data = json_decode($cart_privilege_data, true);

            // samsung privilege setup
            if (array_key_exists('privilege_samsung', $cart_privilege_data)) {
                $request_parameter["privilege"] = json_decode($cart_privilege_data, true)['privilege_samsung']['privilege'];

                // change discount to privilege type
                $discount_to_be_subtract_samsung = $request_parameter["privilege"]["discount"];
                unset($request_parameter["privilege"]["discount"]);
                $request_parameter["privilege"]["type"] = "booking_samsung";

                $to_be_input_privilege_samsung = $request_parameter["privilege"];
                unset($request_parameter["privilege"]);
            }

            // discount setup
            if (array_key_exists('discount', $cart_privilege_data)) {
                $have_discount = true;
                foreach ($cart_privilege_data['discount'] as $discount_d) {
                    $cart_discount_hash[$discount_d['product_code']] = $discount_d['discount'];
                }
            }
        }

        $content_get_product_id_config = App('App\Http\Controllers\APIController')->getProductIdConfig($lrequest);
        if (empty($content_get_product_id_config) || $content_get_product_id_config[0] > 200) {
            return $content_get_product_id_config;
        }
        $tmp_product_id_list_config = [];

        $promotion_id_by_product_id = [];

        $is_device_bundle_new_customer = false;
        $is_device_bundle_prepaid      = false;

        $product_in_request_count = 0;

        // start of fix province, district, sub district with number replace with name
        $tmp_prefix     = "billing_address";
        $check_raw_data = Arr::get($request_parameter, "$tmp_prefix.sub_district");
        if (!empty($check_raw_data) && $check_raw_data != "0") {
            $parameter = ["id" => $check_raw_data];
            $tmp_data  = Arr::get($this->filter_only_answer($master_data_file["district"], $parameter), "0.name");
            if (!empty($tmp_data)) {
                Arr::set($request_parameter, "$tmp_prefix.sub_district", $tmp_data);
            }
        }
        $check_raw_data = Arr::get($request_parameter, "$tmp_prefix.district");
        if (!empty($check_raw_data) && $check_raw_data != "0") {
            $parameter = ["id" => $check_raw_data];
            $tmp_data  = Arr::get($this->filter_only_answer($master_data_file["city"], $parameter), "0.name");
            if (!empty($tmp_data)) {
                Arr::set($request_parameter, "$tmp_prefix.district", $tmp_data);
            }
        }
        $check_raw_data = Arr::get($request_parameter, "$tmp_prefix.province");
        if (!empty($check_raw_data) && $check_raw_data != "0") {
            $parameter = ["id" => $check_raw_data];
            $tmp_data  = Arr::get($this->filter_only_answer($master_data_file["province"], $parameter), "0.name");
            if (!empty($tmp_data)) {
                Arr::set($request_parameter, "$tmp_prefix.province", $tmp_data);
            }
        }
        $tmp_prefix     = "delivery_address";
        $check_raw_data = Arr::get($request_parameter, "$tmp_prefix.sub_district");
        if (!empty($check_raw_data) && $check_raw_data != "0") {
            $parameter = ["id" => $check_raw_data];
            $tmp_data  = Arr::get($this->filter_only_answer($master_data_file["district"], $parameter), "0.name");
            if (!empty($tmp_data)) {
                Arr::set($request_parameter, "$tmp_prefix.sub_district", $tmp_data);
            }
        }
        $check_raw_data = Arr::get($request_parameter, "$tmp_prefix.district");
        if (!empty($check_raw_data) && $check_raw_data != "0") {
            $parameter = ["id" => $check_raw_data];
            $tmp_data  = Arr::get($this->filter_only_answer($master_data_file["city"], $parameter), "0.name");
            if (!empty($tmp_data)) {
                Arr::set($request_parameter, "$tmp_prefix.district", $tmp_data);
            }
        }
        $check_raw_data = Arr::get($request_parameter, "$tmp_prefix.province");
        if (!empty($check_raw_data) && $check_raw_data != "0") {
            $parameter = ["id" => $check_raw_data];
            $tmp_data  = Arr::get($this->filter_only_answer($master_data_file["province"], $parameter), "0.name");
            if (!empty($tmp_data)) {
                Arr::set($request_parameter, "$tmp_prefix.province", $tmp_data);
            }
        }

        // end of fix province, district, sub district with number replace with name

        foreach ($request_parameter["products"] as $key => $value) {
            $url               = "wportal/product/" . $value["product_id"];
            $result            = App('App\Http\Controllers\APIController')->callAPIContent($url, new \Illuminate\Http\Request(), true);
            $result_body_array = json_decode($result["body"], true);

            $tmp_content_get_product_id_config = $content_get_product_id_config[1];
            foreach ($tmp_content_get_product_id_config["verify"] as $v) {
                $tmp_product_id_list_config[$value["product_id"]] = true;
                if ($v["id"] == $value["product_id"] && ($v["type"] == "postpaid")) {
                    //convert name and change into its wording
                    if ($request_parameter["sim_meta"][0]["user_information"]["sub_district"] != "0") {
                        $parameter        = ["id" => $request_parameter["sim_meta"][0]["user_information"]["sub_district"]];
                        $tmp_sub_district = $this->filter_only_answer($master_data_file["district"], $parameter)[0]["name"];
                    }

                    if ($request_parameter["sim_meta"][0]["user_information"]["district"] != "0") {
                        $parameter    = ["id" => $request_parameter["sim_meta"][0]["user_information"]["district"]];
                        $tmp_district = $this->filter_only_answer($master_data_file["city"], $parameter)[0]["name"];
                    }

                    if ($request_parameter["sim_meta"][0]["user_information"]["province"] != "0") {
                        $parameter    = ["id" => $request_parameter["sim_meta"][0]["user_information"]["province"]];
                        $tmp_province = $this->filter_only_answer($master_data_file["province"], $parameter)[0]["name"];
                    }

                    $request_parameter["sim_meta"][0]["user_information"]["sub_district"] = $tmp_sub_district;
                    $request_parameter["sim_meta"][0]["user_information"]["district"]     = $tmp_district;
                    $request_parameter["sim_meta"][0]["user_information"]["province"]     = $tmp_province;

                    //convert name and change into its wording
                    if ($request_parameter["sim_meta"][0]["user_information"]["billing_address"]["sub_district"] != "0") {
                        $parameter        = ["id" => $request_parameter["sim_meta"][0]["user_information"]["billing_address"]["sub_district"]];
                        $tmp_sub_district = $this->filter_only_answer($master_data_file["district"], $parameter)[0]["name"];
                    }

                    if ($request_parameter["sim_meta"][0]["user_information"]["billing_address"]["district"] != "0") {
                        $parameter    = ["id" => $request_parameter["sim_meta"][0]["user_information"]["billing_address"]["district"]];
                        $tmp_district = $this->filter_only_answer($master_data_file["city"], $parameter)[0]["name"];
                    }

                    if ($request_parameter["sim_meta"][0]["user_information"]["billing_address"]["province"] != "0") {
                        $parameter    = ["id" => $request_parameter["sim_meta"][0]["user_information"]["billing_address"]["province"]];
                        $tmp_province = $this->filter_only_answer($master_data_file["province"], $parameter)[0]["name"];
                    }

                    $request_parameter["sim_meta"][0]["user_information"]["billing_address"]["sub_district"] = $tmp_sub_district;
                    $request_parameter["sim_meta"][0]["user_information"]["billing_address"]["district"]     = $tmp_district;
                    $request_parameter["sim_meta"][0]["user_information"]["billing_address"]["province"]     = $tmp_province;

                    $request_parameter["products"][$key]["sim_meta"] = $request_parameter["sim_meta"];
                    unset($request_parameter["sim_meta"]);
                    break;
                }
            }

            // start of fix province, district, sub district with number replace with name
            $tmp_prefix     = "sim_meta.0.user_information";
            $check_raw_data = Arr::get($request_parameter, "products.$key.$tmp_prefix.sub_district");

            if (!empty($check_raw_data) && $check_raw_data != "0") {
                $parameter = ["id" => $check_raw_data];
                $tmp_data  = Arr::get($this->filter_only_answer($master_data_file["district"], $parameter), "0.name");
                if (!empty($tmp_data)) {
                    Arr::set($request_parameter, "products.$key.$tmp_prefix.sub_district", $tmp_data);
                }
            }
            $check_raw_data = Arr::get($request_parameter, "products.$key.$tmp_prefix.district");
            if (!empty($check_raw_data) && $check_raw_data != "0") {
                $parameter = ["id" => $check_raw_data];
                $tmp_data  = Arr::get($this->filter_only_answer($master_data_file["city"], $parameter), "0.name");
                if (!empty($tmp_data)) {
                    Arr::set($request_parameter, "products.$key.$tmp_prefix.district", $tmp_data);
                }
            }
            $check_raw_data = Arr::get($request_parameter, "products.$key.$tmp_prefix.province");
            if (!empty($check_raw_data) && $check_raw_data != "0") {
                $parameter = ["id" => $check_raw_data];
                $tmp_data  = Arr::get($this->filter_only_answer($master_data_file["province"], $parameter), "0.name");
                if (!empty($tmp_data)) {
                    Arr::set($request_parameter, "products.$key.$tmp_prefix.province", $tmp_data);
                }
            }
            $tmp_prefix     = "sim_meta.0.user_information.billing_address";
            $check_raw_data = Arr::get($request_parameter, "products.$key.$tmp_prefix.sub_district");

            if (!empty($check_raw_data) && $check_raw_data != "0") {
                $parameter = ["id" => $check_raw_data];
                $tmp_data  = Arr::get($this->filter_only_answer($master_data_file["district"], $parameter), "0.name");
                if (!empty($tmp_data)) {
                    Arr::set($request_parameter, "products.$key.$tmp_prefix.sub_district", $tmp_data);
                }
            }
            $check_raw_data = Arr::get($request_parameter, "products.$key.$tmp_prefix.district");
            if (!empty($check_raw_data) && $check_raw_data != "0") {
                $parameter = ["id" => $check_raw_data];
                $tmp_data  = Arr::get($this->filter_only_answer($master_data_file["city"], $parameter), "0.name");
                if (!empty($tmp_data)) {
                    Arr::set($request_parameter, "products.$key.$tmp_prefix.district", $tmp_data);
                }
            }
            $check_raw_data = Arr::get($request_parameter, "products.$key.$tmp_prefix.province");
            if (!empty($check_raw_data) && $check_raw_data != "0") {
                $parameter = ["id" => $check_raw_data];
                $tmp_data  = Arr::get($this->filter_only_answer($master_data_file["province"], $parameter), "0.name");
                if (!empty($tmp_data)) {
                    Arr::set($request_parameter, "products.$key.$tmp_prefix.province", $tmp_data);
                }
            }
            // end of fix province, district, sub district with number replace with name

            // start of add sim_info, sync order data TEC-2854
            if(!empty(\Arr::get($request_parameter, "products.$key.sim_meta.0"))) {
                $sim_info = [];
                $nas_code = \Arr::get($request_parameter, "products.$key.sim_meta.0.price_plan.proposition_nas_code");
                
                $tmp_lrequest = new \Illuminate\Http\Request();
                $tmp_lrequest->replace(['nas_code' => $nas_code]);
                $tmp_header = ["x-api-auth"=> env("X_API_AUTH")];
                $fixed_parameter_list = [];
                $tmp_proposition_data = WlsService::operateRequestAction("truemoveh/proposition", 'GET', $tmp_lrequest, $tmp_header, $fixed_parameter_list);

                $response_data     = \json_decode(\Arr::get($tmp_proposition_data, 1, '{}'), true);    
                $tmp_proposition_result              = \Arr::get($response_data, 'record.0', []);

                $field_list_sim_info = ["proposition_amdoc", "proposition_rms","promotion_set","product_name","campaign_name","discount","discount_code","other_pay_amount_code","other_pay_amount"];
                foreach ( $field_list_sim_info as $tmp_field) {
                    \Arr::set($sim_info, $tmp_field, \Arr::get($tmp_proposition_result, $tmp_field));
                }
                \Arr::set($sim_info, "proposition_nas_code", \Arr::get($tmp_proposition_result, "external_nas_code"));

                $tmp_advance_payment_info = [];

                if(!empty(\Arr::get($request_parameter, "products.$key.sim_meta.0.advance_payment"))) {
                    \Arr::set($tmp_advance_payment_info, "product_code", \Arr::get($tmp_proposition_result, "advance_payment_code"));
                    \Arr::set($tmp_advance_payment_info, "promotion_set", \Arr::get($tmp_proposition_result, "promotion_set"));
                    \Arr::set($tmp_advance_payment_info, "advance_payment", \Arr::get($tmp_proposition_result, "advance_payment"));
                }

                $tmp_thai_id = \Arr::get($request_parameter, "products.$key.sim_meta.0.thai_id");
                if(!empty(\Arr::get($request_parameter, "products.$key.sim_meta.0.thai_id")) &&
                !empty(\Arr::get($request_parameter, "products.$key.sim_meta.0.price_plan"))
                ) {
                    \Arr::set($request_parameter, "products.$key.sim_meta.0.price_plan.verify_key", "ThaiId=" . $tmp_thai_id);

                    $company_code = \Arr::get($request_parameter, "products.$key.sim_meta.0.price_plan.company_code");
                    if (empty($company_code)) {
                        $tmp_lrequest = new \Illuminate\Http\Request();
                        $tmp_lrequest->replace(['nas_code' => $nas_code, 'sim_type' => \Arr::get($request_parameter, "products.$key.sim_meta.0.price_plan.sim_type")]);
                        $tmp_header = ["x-api-auth"=> env("X_API_AUTH")];

                        $fixed_parameter_list             = [];
                        $fixed_parameter_list["nas_code"] = $nas_code;
                        $fixed_parameter_list["sim_type"] = \Arr::get($request_parameter, "products.$key.sim_meta.0.price_plan.sim_type");

                        $tmp_mobile_data = WlsService::getMobileSearch("truemoveh/mobile/search", 'GET', $tmp_lrequest, $tmp_header);

                        $response_data     = \json_decode(\Arr::get($tmp_mobile_data, 1, '{}'), true);
                        $tmp_mobile_result = \Arr::get($response_data, 'data.record.0', []);
                        $company_code      = \Arr::get($tmp_mobile_result, "company_code");
                        \Arr::set($request_parameter, "products.$key.sim_meta.0.price_plan.company_code", $company_code);
                    }

                    \Arr::set($request_parameter, "products.$key.sim_meta.0.price_plan.proposition_nas_code", \Arr::get($tmp_proposition_result, "external_nas_code"));

                    $price_plan_code = \Arr::get($request_parameter, "products.$key.sim_meta.0.price_plan.code", '');

                    $store_service = new StoreService();
                    $external_code = $store_service->processGetExternalPricePlanCodeByPricePlanCode($price_plan_code);

                    \Arr::set($request_parameter, "products.$key.sim_meta.0.price_plan.code", $external_code);
                }

                \Arr::set($request_parameter, "products.$key.sim_meta.0.advance_payment_info", $tmp_advance_payment_info);

                \Arr::set($request_parameter, "products.$key.sim_meta.0.sim_info", $sim_info);
                \Arr::set($request_parameter, "products.$key.sim_meta.0.iden_type", "I");
                $ekyc_hash = \Arr::get($request_parameter, "ekyc_hash");
                $ekyc_data = CreditokService::getStatus($lrequest, $ekyc_hash);
                if(\Arr::get($ekyc_data, 0) == 200) {
                    $ekyc_callback_data = \Arr::get($ekyc_data, 1);
                    $ekyc_answers          = EKycService::formatAnswers(\Arr::get($ekyc_callback_data, 'answers'));
                    $ekyc_gender = \Arr::get($ekyc_answers, 'gender') == "ชาย"? "1":"2"; //gender male 1 female 2
                    \Arr::set($request_parameter, "products.$key.sim_meta.0.gender", $ekyc_gender);

                    // start of add file name
                    //kyc_card_face
                    //kyc_card_image
                    //kyc_image_liveness
                    //\Arr::set($request_parameter, "products.$key.sim_meta.0.kyc_card_face", $tmp_thai_id . '_card_face.jpg');
                    \Arr::set($request_parameter, "products.$key.sim_meta.0.kyc_card_image", $tmp_thai_id . '_card_image.jpg');
                    \Arr::set($request_parameter, "products.$key.sim_meta.0.kyc_image_liveness", $tmp_thai_id . '_liveness.jpg');

                    \Arr::set($request_parameter, "products.$key.sim_meta.0.correlation_id", $ekyc_hash);
                    \Arr::set($request_parameter, "products.$key.sim_meta.0.app_form", $ekyc_hash . '.pdf');
                    // end of add file name
                }
                
            }
            // start of add sim_info, sync order data TEC-2854
            

            foreach ($tmp_content_get_product_id_config["prepaid_search"] as $v) {
                $tmp_product_id_list_config[$value["product_id"]] = true;
                if ($v == $value["product_id"]) {
                    $request_parameter["products"][$key]["sim_meta"] = Arr::get($request_parameter, "sim_meta");
                    unset($request_parameter["sim_meta"]);
                    break;
                }
            }

            if (!(isset($result_body_array["status_code"]) && $result_body_array["status_code"] == "0")) {
                if (isset($result_body_array["city"])) {
                    unset($result_body_array["city"]);
                }
                if (isset($result_body_array["country"])) {
                    unset($result_body_array["country"]);
                }
                if (isset($result_body_array["district"])) {
                    unset($result_body_array["district"]);
                }
                if (isset($result_body_array["province"])) {
                    unset($result_body_array["province"]);
                }
                $status_code                        = 400;
                $result_body_array['message']       = [];
                $result_body_array['message']['en'] = 'unable to fetch product data';
                $result_body_array['message']['th'] = 'ไม่สามารถนำเข้าข้อมูลสินค้าได้';

                return response()->json($result_body_array, $status_code);
            }

            $product_detail_from_api = json_decode($result["body"], true)["data"]["record"];
            // start of set bundle in product for device bundle new customer

            // Search inventory
            $inventory_selected = [];
            foreach ($product_detail_from_api["inventories"] as $key2 => $value2) {
                if ($value2["id"] == $request_parameter["products"][$key]["inventory_id"]) {
                    $inventory_selected = $product_detail_from_api["inventories"][$key2];
                    break;
                }
            }

            // Handle Error Case
            if (empty($inventory_selected)) {
                $inventory_selected = $product_detail_from_api["inventories"][0];
            }
            $request_parameter["products"][$key]["sku"] = $inventory_selected["sku"];

            $tmp_product_type = array_get($product_detail_from_cart_api_by_product_id, implode('.', [$value["product_id"], $inventory_selected["sku"], "product_type"]));

            // check for product-verify sim_type == "postpaid" that is outside of happy digital flow
            if (isset($request_parameter["sim_meta_postpaid"][0]["user_information"]["thai_id"]) && !in_array($tmp_product_type, ["device_bundle_new_customer"]) ) {
                //&& $value["product_id"] != "L91587233"
                // check if it's the product within postpaid flow
                $content_product_verify_postpaid = WlsService::getProductVerifySimPostpaid("truemoveh/product-verify/" . explode("L", $value["product_id"])[1], "get", new \Illuminate\Http\Request(), []);
                $tmp                             = json_decode($content_product_verify_postpaid[1], true);
                if (isset($tmp["sim_type"]) && isset($tmp["status"]) && $tmp["status"] == "active") {
                    // add new number (for send to wecms)
                    $new_mobile_number = Arr::get($request_parameter, 'sim_meta_postpaid.0.number', '');

                    // insert sim_meta_postpaid into placeorder request body of this product

                    if ($clm_type == "sim") {
                        $current_pp_code = Arr::get($request_parameter, 'sim_meta_postpaid.0.price_plan.code', '');
                        if (!in_array($current_pp_code, $clm_pp_code_list)) {
                            $clm_product_matcode = null;
                        }
                    }
                    if (isset($request_parameter["sim_meta_postpaid"][0]["user_information"]["sub_district"])) {
                        if ($request_parameter["sim_meta_postpaid"][0]["user_information"]["sub_district"] != "0") {
                            $parameter        = ["id" => $request_parameter["sim_meta_postpaid"][0]["user_information"]["sub_district"]];
                            $tmp_sub_district = $this->filter_only_answer($master_data_file["district"], $parameter)[0]["name"];
                        }

                        if ($request_parameter["sim_meta_postpaid"][0]["user_information"]["district"] != "0") {
                            $parameter    = ["id" => $request_parameter["sim_meta_postpaid"][0]["user_information"]["district"]];
                            $tmp_district = $this->filter_only_answer($master_data_file["city"], $parameter)[0]["name"];
                        }

                        if ($request_parameter["sim_meta_postpaid"][0]["user_information"]["province"] != "0") {
                            $parameter    = ["id" => $request_parameter["sim_meta_postpaid"][0]["user_information"]["province"]];
                            $tmp_province = $this->filter_only_answer($master_data_file["province"], $parameter)[0]["name"];
                        }

                        $request_parameter["sim_meta_postpaid"][0]["user_information"]["sub_district"] = $tmp_sub_district;
                        $request_parameter["sim_meta_postpaid"][0]["user_information"]["district"]     = $tmp_district;
                        $request_parameter["sim_meta_postpaid"][0]["user_information"]["province"]     = $tmp_province;

                        //convert name and change into its wording
                        if ($request_parameter["sim_meta_postpaid"][0]["user_information"]["billing_address"]["sub_district"] != "0") {
                            $parameter        = ["id" => $request_parameter["sim_meta_postpaid"][0]["user_information"]["billing_address"]["sub_district"]];
                            $tmp_sub_district = $this->filter_only_answer($master_data_file["district"], $parameter)[0]["name"];
                        }

                        if ($request_parameter["sim_meta_postpaid"][0]["user_information"]["billing_address"]["district"] != "0") {
                            $parameter    = ["id" => $request_parameter["sim_meta_postpaid"][0]["user_information"]["billing_address"]["district"]];
                            $tmp_district = $this->filter_only_answer($master_data_file["city"], $parameter)[0]["name"];
                        }

                        if ($request_parameter["sim_meta_postpaid"][0]["user_information"]["billing_address"]["province"] != "0") {
                            $parameter    = ["id" => $request_parameter["sim_meta_postpaid"][0]["user_information"]["billing_address"]["province"]];
                            $tmp_province = $this->filter_only_answer($master_data_file["province"], $parameter)[0]["name"];
                        }

                        $request_parameter["sim_meta_postpaid"][0]["user_information"]["billing_address"]["sub_district"] = $tmp_sub_district;
                        $request_parameter["sim_meta_postpaid"][0]["user_information"]["billing_address"]["district"]     = $tmp_district;
                        $request_parameter["sim_meta_postpaid"][0]["user_information"]["billing_address"]["province"]     = $tmp_province;
                    }

                    $request_parameter["products"][$key]["sim_meta"] = $request_parameter["sim_meta_postpaid"];
                    unset($request_parameter["sim_meta_postpaid"]);

                    // TEC-1518 no-ekyc fill sim_meta.user_information
                    if (!isset($request_parameter['products'][0]['sim_meta'][0]['user_information']['first_name'])) {
                        $tmp_user_info     = Arr::get($request_parameter, 'products.0.sim_meta.0.user_information', []);
                        $tmp_delivery_addr = $request_parameter['delivery_address'];

                        $filled_user_info = array_merge(
                            $tmp_user_info,
                            [
                                'first_name'   => $tmp_delivery_addr['firstname'],
                                'last_name'    => $tmp_delivery_addr['lastname'],
                                'address'      => $tmp_delivery_addr['address1'],
                                'province'     => $tmp_delivery_addr['province'],
                                'district'     => $tmp_delivery_addr['city'],
                                'sub_district' => $tmp_delivery_addr['district'],
                                'zip_code'     => $tmp_delivery_addr['postcode'],
                            ]
                        );

                        $request_parameter['products'][$key]['sim_meta'][0]['user_information'] = $filled_user_info;
                    }
                }
            }

            if (isset($product_detail_from_cart_api_by_product_id[$value["product_id"]][$inventory_selected["sku"]]["is_bundle"]) &&
                $product_detail_from_cart_api_by_product_id[$value["product_id"]][$inventory_selected["sku"]]["is_bundle"] == true &&
                isset($discount_from_bundle) && isset($bundle_ref_code) && in_array($tmp_product_type, ["device_bundle_new_customer", "device_bundle_prepaid_sim"])
            ) {
                $tmp_promotion_array   = [];
                $tmp_promotion         = [];
                $tmp_promotion["code"] = $bundle_ref_code;

                if ($tmp_product_type == "device_bundle_new_customer") {
                    $tmp_promotion["type"]         = "2";
                    $is_device_bundle_new_customer = true;
                } elseif ($tmp_product_type == "device_bundle_prepaid_sim") {
                    $tmp_promotion["type"]    = "12";
                    $is_device_bundle_prepaid = true;
                } else {
                    $status_code                        = 400;
                    $result_body_array                  = [];
                    $result_body_array['message']       = [];
                    $result_body_array['message']['en'] = 'unable to checkout, please contact call center';
                    $result_body_array['message']['th'] = 'ไม่สามารถชำระเงินได้ กรุณาติดต่อ call center';
                    $result_body_array["error_detail"]  = ["position" => "promotion", "product_id" => $value["product_id"], "sku" => $inventory_selected["sku"], "tmp_product_type" => $tmp_product_type];

                    return response()->json($result_body_array, $status_code);
                }

                $tmp_promotion["campaign_fee_active"]             = "0";
                $tmp_promotion["discount"]                        = $discount_from_bundle;
                $tmp_promotion_array[]                            = $tmp_promotion;
                $request_parameter["products"][$key]["promotion"] = $tmp_promotion_array;
            }
            // end of set bundle in product for device bundle new customer

            // start of bundle_info sync order tec 2854
            if(isset($product_detail_from_cart_api_by_product_id[$value["product_id"]][$inventory_selected["sku"]]["is_bundle"]) &&
                $product_detail_from_cart_api_by_product_id[$value["product_id"]][$inventory_selected["sku"]]["is_bundle"] == true &&
                isset($discount_from_bundle) && isset($bundle_ref_code) && in_array($tmp_product_type, ["device_bundle_new_customer"])) {
                    $tmp_bundle_info = [];
                    foreach (["device_discount_code", "device_product_name", "device_promotion_rms", "device_promotion_set"] as $tmp_field) {
                        \Arr::set($tmp_bundle_info, $tmp_field, \Arr::get($product_detail_from_cart_api_by_product_id, $tmp_product["id"] . "." . $tmp_product["inventory"]["sku"] . ".bundles.0.$tmp_field"));
                    }
                    
                    \Arr::set($tmp_bundle_info, "discount", strval(\Arr::get($product_detail_from_cart_api_by_product_id, $tmp_product["id"] . "." . $tmp_product["inventory"]["sku"] . ".bundles.0.benefit.amount")));

                    \Arr::set($request_parameter, "products.$key.bundle_info", $tmp_bundle_info);
                }
            // end of bundle_info sync order tec 2854

            if (!isset($request_parameter["products"][$key]["promotion"])) {
                $request_parameter["products"][$key]["promotion"] = [];
            }
            if ($product_detail_from_cart_api_by_product_id[$value["product_id"]][$inventory_selected["sku"]]["product_type"] == "product_device_only") {
                $tmp_promotion                                      = [];
                $tmp_promotion["code"]                              = $product_detail_from_cart_api_by_product_id[$value["product_id"]][$inventory_selected["sku"]]["inventory"]["device_only_action_ref"]; //campaign.refCode
                $tmp_promotion["type"]                              = 11;
                $tmp_promotion["discount"]                          = intval($product_detail_from_cart_api_by_product_id[$value["product_id"]][$inventory_selected["sku"]]["inventory"]["device_only_amount"]);
                $tmp_promotion["campaign_fee_active"]               = 1;
                $request_parameter["products"][$key]["promotion"][] = $tmp_promotion;
            }

            // start of set bundle in product for device bundle existing
            $discount_field_index_array = [$value["product_id"], $inventory_selected["sku"], "existing_campaign"];
            $tmp_existing_campaign_data = Arr::get($product_detail_from_cart_api_by_product_id, implode(".", $discount_field_index_array));

            if (!empty(Arr::get($tmp_existing_campaign_data, "id")) &&
                !empty(Arr::get($tmp_existing_campaign_data, "discount"))
            ) {

                $tmp_promotion_array                              = [];
                $tmp_promotion                                    = [];
                $tmp_promotion["code"]                            = Arr::get($tmp_existing_campaign_data, "id");
                $tmp_promotion["campaign_fee_active"]             = "1";
                $tmp_promotion["discount"]                        = Arr::get($tmp_existing_campaign_data, "discount");
                $tmp_promotion["type"]                            = "10";
                $tmp_promotion_array[]                            = $tmp_promotion;
                $request_parameter["products"][$key]["promotion"] = $tmp_promotion_array;

                if (!empty(Arr::get($tmp_existing_campaign_data, "advance_payment"))) {
                    $request_parameter["products"][$key]["advance_payment"] = Arr::get($tmp_existing_campaign_data, "advance_payment");
                }

                $tmp_promotions             = [];
                $tmp_promotions["code"]     = Arr::get($tmp_existing_campaign_data, "id");
                $tmp_promotions["discount"] = Arr::get($tmp_existing_campaign_data, "discount");
                $tmp_promotions["type"]     = "10";

                $tmp_promotions["campaign_fee_percent"] = "";
                $tmp_promotions["discount_type"]        = "item";
                $tmp_promotions["subsidize_by"]         = "";
                $tmp_promotions["subsidize_value"]      = "";
                $tmp_promotions["value"]                = Arr::get($tmp_existing_campaign_data, "discount");
                $tmp_promotions["name"]                 = "existing campaign";
                $tmp_promotions["detail"]               = !empty(Arr::get($tmp_existing_campaign_data, implode(".", ["price_plan", "code"]))) ? Arr::get($tmp_existing_campaign_data, implode(".", ["price_plan", "code"])) : "existing campaign";

                $request_parameter["promotions"] = self::createOrUpdateArrayIfExists($request_parameter, "promotions", $tmp_promotions);
            }

            if ($product_detail_from_cart_api_by_product_id[$value["product_id"]][$inventory_selected["sku"]]["product_type"] == "product_device_only") {
                $tmp_promotions           = [];
                $tmp_promotions["code"]   = $product_detail_from_cart_api_by_product_id[$value["product_id"]][$inventory_selected["sku"]]["inventory"]["device_only_action_ref"]; //campaign.refCode
                $tmp_promotions["name"]   = $product_detail_from_cart_api_by_product_id[$value["product_id"]][$inventory_selected["sku"]]["inventory"]["device_only_name"]; // campaign.name
                $tmp_promotions["type"]   = 11;
                $tmp_promotions["detail"] = $product_detail_from_cart_api_by_product_id[$value["product_id"]][$inventory_selected["sku"]]["inventory"]["device_only_name"]; //"existing campaign"; campaign.name

                $tmp_promotions["value"]         = intval($product_detail_from_cart_api_by_product_id[$value["product_id"]][$inventory_selected["sku"]]["inventory"]["device_only_amount"]);
                $tmp_promotions["condition"]     = "";
                $tmp_promotions["discount_type"] = "item";

                $tmp_promotions["subsidize_by"]    = "";
                $tmp_promotions["subsidize_value"] = "";

                $tmp_promotions["campaign_fee_percent"] = "";

                $request_parameter["promotions"] = self::createOrUpdateArrayIfExists($request_parameter, "promotions", $tmp_promotions);
            }

            // end of set bundle in product for device bundle existing

            // start of set truecard meta
            if (isset($product_detail_from_cart_api_by_product_id[$value["product_id"]][$inventory_selected["sku"]]["product_type"]) &&
                $product_detail_from_cart_api_by_product_id[$value["product_id"]][$inventory_selected["sku"]]["product_type"] == "truecard" &&
                isset($product_detail_from_cart_api_by_product_id[$value["product_id"]][$inventory_selected["sku"]]["true_card"]["grade"]["level"]) &&
                isset($result_from_login_api["user_id"])
            ) {
                $tmp_truecard_meta                 = $product_detail_from_cart_api_by_product_id[$value["product_id"]][$inventory_selected["sku"]]["true_card"]["grade"];
                $tmp_truecard_meta["idn_type"]     = "TRUEID";
                $tmp_truecard_meta["idn_no"]       = strval($result_from_login_api["user_id"]);
                $tmp_truecard_meta["first_time"]   = $product_detail_from_cart_api_by_product_id[$value["product_id"]][$inventory_selected["sku"]]["true_card"]["first_time"];
                $tmp_truecard_meta["card_upgrade"] = $product_detail_from_cart_api_by_product_id[$value["product_id"]][$inventory_selected["sku"]]["true_card"]["card_upgrade"];

                $tmp_truecard_meta["true_card"]              = $product_detail_from_cart_api_by_product_id[$value["product_id"]][$inventory_selected["sku"]]["true_card"];
                $tmp_truecard_meta["image_url"]              = $product_detail_from_cart_api_by_product_id[$value["product_id"]][$inventory_selected["sku"]]["images"][0]["url"];
                $request_parameter["products"][$key]["meta"] = json_encode($tmp_truecard_meta);
            } elseif (!isset($product_detail_from_cart_api_by_product_id[$value["product_id"]][$inventory_selected["sku"]]["product_type"])) {
                $status_code                        = 400;
                $result_body_array                  = [];
                $result_body_array['message']       = [];
                $result_body_array['message']['en'] = 'unable to checkout with certain product with different store, please contact callcenter';
                $result_body_array['message']['th'] = 'ไม่สามารถชำระเงินด้วยสินค้าบางอย่างได้ ด้วยปัญหามีสินค้าที่อยู่ร้านต่างกัน กรุณาติดต่อ callcenter';

                return response()->json($result_body_array, $status_code);
            }
            if (isset($product_detail_from_cart_api_by_product_id[$value["product_id"]][$inventory_selected["sku"]]["allow_checkout"]) &&
                !$product_detail_from_cart_api_by_product_id[$value["product_id"]][$inventory_selected["sku"]]["allow_checkout"]
            ) {
                $status_code                        = 400;
                $result_body_array                  = [];
                $result_body_array['message']       = [];
                $result_body_array['message']['en'] = 'unable to checkout with certain product';
                $result_body_array['message']['th'] = 'ไม่สามารถชำระเงินด้วยสินค้าบางอย่างได้';

                return response()->json($result_body_array, $status_code);
            }
            // end of set truecard meta

            // Option inventory
            $optionString = '';
            if (isset($inventory_selected['options'])) {
                foreach ($inventory_selected['options'] as $options) {
                    $optionString .= $options['title']['th'] . ': ' . $options['values']['title']['th'] . ' ';
                }
            }

            $request_parameter["products"][$key]["cost_price"]       = $inventory_selected["cost_price"];
            $request_parameter["products"][$key]["compare_at_price"] = $inventory_selected["compare_at_price"];
            $request_parameter["products"][$key]["image_url"]        = $product_detail_from_api["images"][0]["url"];
            $request_parameter["products"][$key]["warehouse_code"]   = $product_detail_from_api["warehouse"]["code"];

            $tmp_option_sku = $product_detail_from_api["option_sku"];
            if (gettype($tmp_option_sku) == "array") {
                $tmp_option_sku_key = array_keys($tmp_option_sku)[0];
                // want to check how key come from this "k2590205", so I just leave it as a comment here
                $request_parameter["products"][$key]["is_freebie"] = $product_detail_from_api["option_sku"][$tmp_option_sku_key]["is_freebie"];
            }

            $request_parameter["products"][$key] = array_merge($request_parameter["products"][$key], [
                "store_id"             => $product_detail_from_api["store_id"],
                "has_freebie"          => false,
                "freebies"             => [],
                "has_verify"           => 0,
                "warehouse_sku"        => "",
                "weight"               => $inventory_selected["weight"],
                "prepare_ship_time"    => $inventory_selected["shipping_period"],
                "category_id"          => $product_detail_from_api["last_plaza_category"],
                "category_name"        => implode('/', array_map(function ($el) {
                    return $el['title'];
                }, array_reverse($product_detail_from_api["category_list"]))),
                "com_fee_percent"      => 0,
                "title"                => $product_detail_from_api["title"]["th"],
                "option"               => $optionString,
                "shipprice_peritem"    => 0,
                "discount"             => 0,
                "flashsale"            => 0,
                "campaign_fee_percent" => 0,
                "com_discount_price"   => 0,
                "images"               => $product_detail_from_api["images"][0]["url"],
                "stock_type"           => $product_detail_from_api["warehouse"]["stock_type"],
            ]);
            if (!isset($request_parameter["products"][$key]["meta"])) {
                $request_parameter["products"][$key]["meta"] = "";
            }

            // start of check discount for device bundle existing and add discount to product data for placeorder with debug for tmh-252
            if ($have_discount && array_key_exists($inventory_selected["sku"], $cart_discount_hash) &&
                (
                    $product_detail_from_cart_api_by_product_id[$value["product_id"]][$inventory_selected["sku"]]["product_type"] == "device_bundle_existing" ||
                    $product_detail_from_cart_api_by_product_id[$value["product_id"]][$inventory_selected["sku"]]["product_type"] == "pre_to_post" ||
                    $product_detail_from_cart_api_by_product_id[$value["product_id"]][$inventory_selected["sku"]]["product_type"] == "mnp_two_step"
                )
            ) {
                $inventory_selected["price"] -= $cart_discount_hash[$inventory_selected["sku"]];
                $request_parameter["products"][$key]["is_discount_device_bundle_existing"] = true;
                $request_parameter["products"][$key]["device_bundle_existing_discount"]    = $cart_discount_hash[$inventory_selected["sku"]];
            }
            // end of check discount for device bundle existing and add discount to product data for placeorder with debug for tmh-252

            if (isset($product_detail_from_api["product_type"]) &&
                $tmp_product_type != 'multi_campaign_type' &&
                isset($product_detail_from_api["price"]) && $product_detail_from_api["price"] == 0 &&
                isset($inventory_selected["compare_at_price"]) && $inventory_selected["compare_at_price"] > 0
            ) {
                $request_parameter["products"][$key]["price"]       = 0;
                $request_parameter["products"][$key]["final_price"] = 0;
            } else {
                $request_parameter["products"][$key]["price"]       = $inventory_selected["price"];
                $request_parameter["products"][$key]["final_price"] = $inventory_selected["price"];
            }

            if ($product_detail_from_cart_api_by_product_id[$value["product_id"]][$inventory_selected["sku"]]["product_type"] == "truecard") {
                $request_parameter["products"][$key]["price"]       = $product_detail_from_cart_api_by_product_id[$value["product_id"]][$inventory_selected["sku"]]["inventory"]["price"];
                $request_parameter["products"][$key]["final_price"] = $product_detail_from_cart_api_by_product_id[$value["product_id"]][$inventory_selected["sku"]]["inventory"]["price"];
            }
            if ($product_detail_from_cart_api_by_product_id[$value["product_id"]][$inventory_selected["sku"]]["product_type"] == "product_device_only") {
                $request_parameter["products"][$key]["price"]       = $product_detail_from_cart_api_by_product_id[$value["product_id"]][$inventory_selected["sku"]]["inventory"]["price"];
                $request_parameter["products"][$key]["final_price"] = $product_detail_from_cart_api_by_product_id[$value["product_id"]][$inventory_selected["sku"]]["inventory"]["price"];
            }

            if ($product_detail_from_cart_api_by_product_id[$value["product_id"]][$inventory_selected["sku"]]["product_type"] == "one_campaign_type" ||
                $product_detail_from_cart_api_by_product_id[$value["product_id"]][$inventory_selected["sku"]]["product_type"] == "multi_campaign_type"
            ) {
                $request_parameter["products"][$key]["price"]       = $product_detail_from_cart_api_by_product_id[$value["product_id"]][$inventory_selected["sku"]]["inventory"]["price"];
                $request_parameter["products"][$key]["final_price"] = $product_detail_from_cart_api_by_product_id[$value["product_id"]][$inventory_selected["sku"]]["inventory"]["price"];
            }

            if (
                (
                    $product_detail_from_cart_api_by_product_id[$value["product_id"]][$inventory_selected["sku"]]["product_type"] == "device_bundle_existing" ||
                    $product_detail_from_cart_api_by_product_id[$value["product_id"]][$inventory_selected["sku"]]["product_type"] == "pre_to_post" ||
                    $product_detail_from_cart_api_by_product_id[$value["product_id"]][$inventory_selected["sku"]]["product_type"] == "mnp_two_step"
                )
            ) {
                if (isset($product_detail_from_cart_api_by_product_id[$value["product_id"]][$inventory_selected["sku"]]["existing_campaign"]["advance_payment"]) &&
                    is_numeric($product_detail_from_cart_api_by_product_id[$value["product_id"]][$inventory_selected["sku"]]["existing_campaign"]["advance_payment"])
                ) {
                    $request_parameter["products"][$key]["price"] += $product_detail_from_cart_api_by_product_id[$value["product_id"]][$inventory_selected["sku"]]["existing_campaign"]["advance_payment"];
                    $request_parameter["products"][$key]["final_price"] += $product_detail_from_cart_api_by_product_id[$value["product_id"]][$inventory_selected["sku"]]["existing_campaign"]["advance_payment"];
                }
            }

            if (Arr::get($product_detail_from_cart_api_by_product_id, implode(".", [$value["product_id"], $inventory_selected["sku"], "product_type"])) == "device_bundle_prepaid_sim") {
                $request_parameter["products"][$key]["sim_meta"]                        = Arr::get($product_detail_from_cart_api_by_product_id, implode(".", [$value["product_id"], $inventory_selected["sku"], "sim_meta"]));
                $request_parameter["products"][$key]["sim_meta"][0]["user_information"] = json_decode('{
                    "thai_id":"",
                    "title":"",
                    "txt_title_other":"",
                    "first_name":"",
                    "last_name":"",
                    "thai_id_expire_day":"",
                    "thai_id_expire_month":"",
                    "thai_id_expire_year":"",
                    "email":"",
                    "telephone":"",
                    "address":"",
                    "swine":"",
                    "village":"",
                    "building":"",
                    "floor":"",
                    "room_number":"",
                    "alley":"",
                    "street_name":"",
                    "province":"",
                    "district":"",
                    "sub_district":"",
                    "zip_code":"",
                    "billing_address":{
                       "address":"",
                       "swine":"",
                       "village":"",
                       "building":"",
                       "floor":"",
                       "room_number":"",
                       "alley":"",
                       "street_name":"",
                       "province":"",
                       "district":"",
                       "sub_district":"",
                       "zip_code":""
                    },
                    "invoice_address_type":""
                }', true);
                $request_parameter["products"][$key]["sim_meta"][0]["user_information"]["first_name"]   = Arr::get($request_parameter, "customer_detail.first_name");
                $request_parameter["products"][$key]["sim_meta"][0]["user_information"]["last_name"]    = Arr::get($request_parameter, "customer_detail.last_name");
                $request_parameter["products"][$key]["sim_meta"][0]["user_information"]["email"]        = Arr::get($request_parameter, "customer_detail.email");
                $request_parameter["products"][$key]["sim_meta"][0]["user_information"]["telephone"]    = Arr::get($request_parameter, "customer_detail.telephone");
                $request_parameter["products"][$key]["sim_meta"][0]["user_information"]["address"]      = Arr::get($request_parameter, "delivery_address.address1");
                $request_parameter["products"][$key]["sim_meta"][0]["user_information"]["alley"]        = Arr::get($request_parameter, "delivery_address.address2");
                $request_parameter["products"][$key]["sim_meta"][0]["user_information"]["province"]     = Arr::get($request_parameter, "delivery_address.district");
                $request_parameter["products"][$key]["sim_meta"][0]["user_information"]["district"]     = Arr::get($request_parameter, "delivery_address.province");
                $request_parameter["products"][$key]["sim_meta"][0]["user_information"]["sub_district"] = Arr::get($request_parameter, "delivery_address.city");
                $request_parameter["products"][$key]["sim_meta"][0]["user_information"]["zip_code"]     = Arr::get($request_parameter, "delivery_address.postcode");

                $request_parameter["products"][$key]["sim_meta"][0]["user_information"]["billing_address"]["address"]      = Arr::get($request_parameter, "billing_address.address1");
                $request_parameter["products"][$key]["sim_meta"][0]["user_information"]["billing_address"]["alley"]        = Arr::get($request_parameter, "billing_address.address2");
                $request_parameter["products"][$key]["sim_meta"][0]["user_information"]["billing_address"]["province"]     = Arr::get($request_parameter, "billing_address.district");
                $request_parameter["products"][$key]["sim_meta"][0]["user_information"]["billing_address"]["district"]     = Arr::get($request_parameter, "billing_address.province");
                $request_parameter["products"][$key]["sim_meta"][0]["user_information"]["billing_address"]["sub_district"] = Arr::get($request_parameter, "billing_address.city");
                $request_parameter["products"][$key]["sim_meta"][0]["user_information"]["billing_address"]["zip_code"]     = Arr::get($request_parameter, "billing_address.postcode");
            }

            if (!isset($request_parameter["products"][$key]["promotion"])) {
                $request_parameter["products"][$key]["promotion"] = [];
            }
            if (isset($discount_from_bundle) &&
                in_array($product_detail_from_cart_api_by_product_id[$request_parameter["products"][$key]["product_id"]][$inventory_selected["sku"]]["product_type"], ["device_bundle_new_customer", "device_bundle_prepaid"])
            ) {
                $request_parameter["products"][$key]["price"] -= $discount_from_bundle;
                $request_parameter["products"][$key]["final_price"] -= $discount_from_bundle;

                $request_parameter["products"][$key]["price"] += $bundle_advance_payment;
                $request_parameter["products"][$key]["final_price"] += $bundle_advance_payment;
            }

            // TEC-2576 add ecoupon discount final price
            if (isset($redis_privilege_placeorder_detail['ecoupon_serial']) &&
                isset($redis_privilege_placeorder_detail['ecoupon_discount']) &&
                $redis_privilege_placeorder_detail['ecoupon_discount'] > 0
            ) {
                $request_parameter["products"][$key]["price"] -= $redis_privilege_placeorder_detail['ecoupon_discount'];
                $request_parameter["products"][$key]["final_price"] -= $redis_privilege_placeorder_detail['ecoupon_discount'];
            }
            // end of TEC-2576 add ecoupon discount final price

            $request_parameter["products"][$key]["product_type"] = $product_detail_from_cart_api_by_product_id[$request_parameter["products"][$key]["product_id"]][$inventory_selected["sku"]]["product_type"];

            if (isset($inventory_selected["warehouse_sku"])) {
                $request_parameter["products"][$key]["warehouse_sku"] = $inventory_selected["warehouse_sku"];
            }
            if (isset($product_detail_from_api["store"]["warehouse"]["warehouse_code"])) {
                $request_parameter["products"][$key]["warehouse_code"] = $product_detail_from_api["store"]["warehouse"]["warehouse_code"];
            }

            // start of fix TEC-19 add discount coupon
            if (!empty($coupon_code) && isset($tmp_result_cart["data"]["coupon_data_from_bff"]["is_pass"]) && $tmp_result_cart["data"]["coupon_data_from_bff"]["is_pass"] &&
                !empty(Arr::get($product_detail_from_cart_api_by_product_id, implode(".", [$value["product_id"], $inventory_selected["sku"], "discount_from_coupon_per_product"])))
            ) {
                $request_parameter["products"][$key]["com_discount_price"]   = Arr::get($product_detail_from_cart_api_by_product_id, implode(".", [$value["product_id"], $inventory_selected["sku"], "discount_from_coupon_per_product"]));
                $request_parameter["products"][$key]["campaign_fee_percent"] = (!empty(Arr::get($tmp_result_cart, 'data.coupon_data_from_bff.has_fee')) && !empty(Arr::get($tmp_result_cart, 'data.coupon_data_from_bff.fee'))) ? Arr::get($tmp_result_cart, 'data.coupon_data_from_bff.fee') : "0";

                $tmp_promotion                                      = [];
                $tmp_promotion["code"]                              = $coupon_code;
                $tmp_promotion["type"]                              = "6";
                $tmp_promotion["name"]                              = $tmp_result_cart["data"]["coupon_data_from_bff"]["name"];
                $tmp_promotion["discount"]                          = Arr::get($product_detail_from_cart_api_by_product_id, implode(".", [$value["product_id"], $inventory_selected["sku"], "discount_from_coupon_per_product"]));
                $tmp_promotion["condition"]                         = $tmp_result_cart["data"]["coupon_data_from_bff"]["condition_remark"]["remark_txt"];
                $tmp_promotion["discount_type"]                     = $tmp_result_cart["data"]["coupon_data_from_bff"]["discount_type"];
                $tmp_promotion["subsidize_by"]                      = "seller";
                $tmp_promotion["subsidize_value"]                   = $tmp_result_cart["data"]["coupon_data_from_bff"]["discount_value_by_seller"];
                $tmp_promotion["campaign_fee_percent"]              = (!empty(Arr::get($tmp_result_cart, 'data.coupon_data_from_bff.has_fee')) && !empty(Arr::get($tmp_result_cart, 'data.coupon_data_from_bff.fee'))) ? Arr::get($tmp_result_cart, 'data.coupon_data_from_bff.fee') : "";
                $request_parameter["products"][$key]["promotion"][] = $tmp_promotion;
            }
            // end of fix TEC-19 add discount coupon

            // TEC-2576 add ecoupon promotion
            if (isset($redis_privilege_placeorder_detail['ecoupon_serial'])
                && isset($redis_privilege_placeorder_detail['ecoupon_discount']) &&
                $redis_privilege_placeorder_detail['ecoupon_discount'] > 0
            ) {
                // add promotion of product
                $tmp_promotion                                      = [];
                $tmp_promotion["code"]                              = (string) $redis_privilege_placeorder_detail['ecoupon_serial'];
                $tmp_promotion["discount"]                          = $redis_privilege_placeorder_detail['ecoupon_discount'];
                $tmp_promotion["type"]                              = "13";
                $tmp_promotion["campaign_fee_active"]               = "1";
                $request_parameter["products"][$key]["promotion"][] = $tmp_promotion;

                // add promotion main
                $tmp_promotions_bundle              = [];
                $tmp_promotions_bundle["code"]      = (string) $redis_privilege_placeorder_detail['ecoupon_serial'];
                $tmp_promotions_bundle["name"]      = "E-Coupon";
                $tmp_promotions_bundle["type"]      = "13";
                $tmp_promotions_bundle["detail"]    = "E-Coupon";
                $tmp_promotions_bundle["value"]     = $redis_privilege_placeorder_detail['ecoupon_discount'];
                $tmp_promotions_bundle["condition"]            = "";
                $tmp_promotions_bundle["discount_type"]        = "item";
                $tmp_promotions_bundle["subsidize_by"]         = "";
                $tmp_promotions_bundle["subsidize_value"]      = "";
                $tmp_promotions_bundle["campaign_fee_percent"] = "";

                $request_parameter["promotions"] = self::createOrUpdateArrayIfExists($request_parameter, "promotions", $tmp_promotions_bundle);
            }
            // end TEC-2576 add ecoupon promotion

            if ($request_parameter["products"][$key]["quantity"] > 0) {
                $total += $request_parameter["products"][$key]["final_price"] * $request_parameter["products"][$key]["quantity"];
                $request_parameter["products"][$key]["final_price"] = $request_parameter["products"][$key]["final_price"] * $request_parameter["products"][$key]["quantity"];
            }

            $product_in_request_count += $request_parameter["products"][$key]["quantity"];

            $tmp_store = [
                "store_id"    => $product_detail_from_api["store"]["id"],
                "seller_id"   => $product_detail_from_api["store"]["user_id"],
                "store_user"  => $product_detail_from_api["store"]["slug"],
                "seller_name" => $product_detail_from_api["store"]["first_name"] . ' ' . $product_detail_from_api["store"]["last_name"],
                "store_name"  => $product_detail_from_api["store"]["title"]["th"],
                "address"     => "123", // dont know how to fetch this,
                "phone"       => isset($product_detail_from_api["store"]["phone"]) && !empty($product_detail_from_api["store"]["phone"]) ? $product_detail_from_api["store"]["phone"] : "0123456789",
                "email"       => $product_detail_from_api["store"]["email"],
                "category_id" => $product_detail_from_api["store"]["category_id"],
            ];

            $store_detail[] = $tmp_store;

            $tmp_shipping_price = $product_detail_from_api["shipping"]["custom"][0]["value"][0]["price"];
            /* shipping when used with api, disabled out but keep for later use
            if(is_numeric($tmp_shipping_price))
            {
            // $shipping += $tmp_shipping_price;
            }
             */

            $tmp_product_id   = $value["product_id"];
            $tmp_product_code = $request_parameter["products"][$key]["sku"];

            if (isset($product_detail_from_api["promotion"]) && gettype($product_detail_from_api["promotion"]) == "array") {

                if (!isset($promotion_id_by_product_id[$value["product_id"]])) {
                    $promotion_id_by_product_id[$value["product_id"]] = [];
                }

                foreach ($product_detail_from_api["promotion"] as $tmp_promotion_key => $tmp_promotion_value) {
                    $promotion_id_by_product_id[$value["product_id"]][$tmp_promotion_value["id"]] = true;
                }
            }

            // start of prevent placeorder negative product price in multiple case except mnp
            if ($request_parameter["products"][$key]["price"] < 0 || $request_parameter["products"][$key]["final_price"] < 0) {
                $status_code                        = 400;
                $result_body_array                  = [];
                $result_body_array['product_id']    = $request_parameter["products"][$key]["product_id"];
                $result_body_array['message']       = [];
                $result_body_array['message']['en'] = 'negative product price, step 001, product_id = ' . $request_parameter["products"][$key]["product_id"];
                $result_body_array['message']['th'] = 'ราคาสินค้ามีปัญหา ตำแหน่ง 001 รหัสสินค้า = ' . $request_parameter["products"][$key]["product_id"];

                return response()->json($result_body_array, $status_code);
            }
            // end of prevent placeorder negative product price in multiple case except mnp

        }

        // start of check pickup at seven
        if ($pickup_at_seven_in_cart) {
            if ($product_in_cart_count > 1 || $product_in_request_count > 1) {
                $status_code                  = 400;
                $result_body_array            = [];
                $result_body_array['message'] = [
                    'en' => 'pickup at 7 product limit 1',
                    'th' => 'สินค้า pickup at seven มีได้เพียงชิ้นเดียว',
                ];

                return response()->json($result_body_array, $status_code);
            }
            Arr::set($request_parameter, 'shipping_detail.method', 'PICKUP');
        }
        // end of check pickup at seven

        // start of fix TEC-19 add discount coupon
        if (!empty($coupon_code) && isset($tmp_result_cart["data"]["coupon_data_from_bff"]["is_pass"]) && $tmp_result_cart["data"]["coupon_data_from_bff"]["is_pass"] &&
            isset($tmp_result_cart["data"]["coupon_data_from_bff"]["total_coupon_discount_amount"])) {
            $tmp_promotions_bundle         = [];
            $tmp_promotions_bundle["code"] = $coupon_code;
            $tmp_promotions_bundle["type"] = "6";

            $tmp_promotions_bundle["value"] = $tmp_result_cart["data"]["coupon_data_from_bff"]["total_coupon_discount_amount"];
            $tmp_promotions_bundle["name"]  = $tmp_result_cart["data"]["coupon_data_from_bff"]["name"];

            $tmp_promotions_bundle["condition"]            = $tmp_result_cart["data"]["coupon_data_from_bff"]["condition_remark"]["remark_txt"];
            $tmp_promotions_bundle["discount_type"]        = $tmp_result_cart["data"]["coupon_data_from_bff"]["discount_type"];
            $tmp_promotions_bundle["subsidize_by"]         = "seller";
            $tmp_promotions_bundle["subsidize_value"]      = $tmp_result_cart["data"]["coupon_data_from_bff"]["discount_value_by_seller"];
            $tmp_promotions_bundle["campaign_fee_percent"] = (!empty(Arr::get($tmp_result_cart, 'data.coupon_data_from_bff.has_fee')) && !empty(Arr::get($tmp_result_cart, 'data.coupon_data_from_bff.fee'))) ? Arr::get($tmp_result_cart, 'data.coupon_data_from_bff.fee') : "";

            $request_parameter["promotions"] = self::createOrUpdateArrayIfExists($request_parameter, "promotions", $tmp_promotions_bundle);
        }
        // end of fix TEC-19 add discount coupon

        // check for discount and subtract from total price (privilege samsung case)
        if (isset($discount_to_be_subtract_samsung)
            && is_numeric($discount_to_be_subtract_samsung)
            && $discount_to_be_subtract_samsung > 0
            && count($request_parameter["products"]) == 1
            && $inventory_selected["sku"] == $to_be_input_privilege_samsung["product_code"]
            && isset($to_be_input_privilege_samsung["quantity"])
            && $request_parameter["products"][0]["quantity"] == $to_be_input_privilege_samsung["quantity"]
        ) {
            $request_parameter["privilege"] = $to_be_input_privilege_samsung;
            $total -= floatval($discount_to_be_subtract_samsung);
        }

        if (isset($discount_from_bundle) && isset($bundle_ref_code)) {
            $tmp_promotions_bundle         = [];
            $tmp_promotions_bundle["code"] = $bundle_ref_code;

            if ($is_device_bundle_new_customer) {
                $tmp_promotions_bundle["type"] = "2";
            } elseif ($is_device_bundle_prepaid) {
                $tmp_promotions_bundle["type"] = "12";
            } else {
                $status_code                        = 400;
                $result_body_array                  = [];
                $result_body_array['message']       = [];
                $result_body_array['message']['en'] = 'unable to checkout, please contact call center';
                $result_body_array['message']['th'] = 'ไม่สามารถชำระเงินได้ กรุณาติดต่อ call center';
                $result_body_array["error_detail"]  = ["position" => "promotions", "product_id" => $value["product_id"], "sku" => $inventory_selected["sku"]];

                return response()->json($result_body_array, $status_code);
            }

            $tmp_promotions_bundle["campaign_fee_active"] = "0";
            $tmp_promotions_bundle["value"]               = $discount_from_bundle;
            $tmp_promotions_bundle["name"]                = $bundle_name;
            $tmp_promotions_bundle["detail"]              = $bundle_description;
            $request_parameter["promotions"]              = self::createOrUpdateArrayIfExists($request_parameter, "promotions", $tmp_promotions_bundle);
        }

        $shipping = 0;
        if (isset($tmp_result_cart["data"]["shipping_fee"])) {
            $shipping = $tmp_result_cart["data"]["shipping_fee"];
        }

        $trueidbox_happy_digital = [];
        foreach ($content_get_product_id_config[1]["verify"] as $key => $value) {
            if ($value["type"] == "trueidtv") {
                $trueidbox_happy_digital[$value["id"]] = $value;
            }
        }

        // start of check condition before NOPAYMENT
        // check for campaign that have shipping_free
        $is_allow_nopayment_product_by_product_id  = [];
        $is_allow_nopayment_product_by_campaign_id = [];
        foreach ($content_get_product_id_config[1]["campaigns"] as $tmp_key => $tmp_value) {
            if ((isset($tmp_value["options"]["shipping_free"]) &&
                $tmp_value["options"]["shipping_free"] == true)
            ) {
                $is_allow_nopayment_product_by_campaign_id[$tmp_key] = true;
            }
        }

        // check for campaign that should have shipping_free campaign id
        $tmp_product_id = $request_parameter["products"][0]["product_id"];
        if (isset($promotion_id_by_product_id[$tmp_product_id])) {
            foreach (array_keys($promotion_id_by_product_id[$tmp_product_id]) as $tmp_promotion_id) {
                if (isset($is_allow_nopayment_product_by_campaign_id[$tmp_promotion_id])) {
                    $is_allow_nopayment_product_by_product_id[$tmp_product_id] = true;
                }
            }
        }
        // end of check condition before NOPAYMENT

        // start of money-related total price
        $request_parameter["summaries"] = [
            [
                "code"  => "sub_total",
                "title" => "Sub-Total",
                "value" => $total,
                "meta"  => "meta",
            ],
            [
                "code"  => "total",
                "title" => "Total",
                "value" => $total,
                "meta"  => "",
            ],
        ];

        if ($shipping > 0) {
            $request_parameter["summaries"][] =
                [
                "code"  => "shipping",
                "title" => "Shipping",
                "value" => $shipping,
                "meta"  => "",
            ];

            $request_parameter["shipping_detail"]["price"] = $shipping;
            $request_parameter["summaries"][1]["value"]    = $total + $shipping;
        }

        $request_parameter["payment_detail"]["total"]          = $total + $shipping;
        $request_parameter["payment_detail"]["payment_amount"] = $total;

        // start of fix TEC-19 add discount coupon
        if (!empty($coupon_code) && isset($tmp_result_cart["data"]["coupon_data_from_bff"]["is_pass"]) && $tmp_result_cart["data"]["coupon_data_from_bff"]["is_pass"] &&
            isset($tmp_result_cart["data"]["coupon_data_from_bff"]["total_coupon_discount_amount"])) {

            $request_parameter["summaries"][] =
                [
                "code"  => "discount",
                "title" => $coupon_code,
                "value" => Arr::get($tmp_result_cart, "data.coupon_data_from_bff.total_coupon_discount_amount"),
                "meta"  => "",
            ];

            $request_parameter["payment_detail"]["discount"] = Arr::get($tmp_result_cart, "data.coupon_data_from_bff.total_coupon_discount_amount");
            $request_parameter["payment_detail"]["total"] -= Arr::get($tmp_result_cart, "data.coupon_data_from_bff.total_coupon_discount_amount");
        }
        // end of fix TEC-19 add discount coupon

        // start TEC-2756 ecoupon
        if (isset($redis_privilege_placeorder_detail['ecoupon_serial']) &&
            isset($redis_privilege_placeorder_detail['ecoupon_discount']) &&
            $redis_privilege_placeorder_detail['ecoupon_discount'] > 0
        ) {
            // can stack with normal coupon
            if (isset($request_parameter["payment_detail"]["discount"])) {
                $request_parameter["payment_detail"]["discount"] += $redis_privilege_placeorder_detail['ecoupon_discount'];
            } else {
                $request_parameter["payment_detail"]["discount"] = $redis_privilege_placeorder_detail['ecoupon_discount'];
            }

            $request_parameter["payment_detail"]["total"] -= Arr::get($tmp_result_cart, "ecoupon_discount");
        }
        // end of TEC-2756 ecoupon

        // end of money-related total price

        $request_parameter["store_detail"] = $store_detail;
        if (count($store_detail) > 1) {
            $request_parameter["store_detail"] = $this->unique_multidim_array($request_parameter["store_detail"], "store_id");
        }
        if (isset($request_parameter["point"]) && count($request_parameter["products"]) == 1
            && $request_parameter["products"][0]["quantity"] == 1) {
            unset($request_parameter["point"]);

            $tmp_point               = [];
            $tmp_point["partner_id"] = 1;

            if (!isset($true_user_id)) {
                $result = App('App\Http\Controllers\APIController')->fetchTrueidApi($lrequest);

                if ($result['status_code'] != 0 && $result['status_code'] != 200) {
                    return $result;
                }

                $result_from_trueid_api = json_decode($result["body"], true);

                $result = App('App\Http\Controllers\APIController')->decodeFromTrueidApi($result_from_trueid_api);
                if ($result['status_code'] != 0 && $result['status_code'] != 200) {
                    return $result;
                }
                $uid   = $result["body"]["uid"];
                $array = get_object_vars($uid);

                $user_id      = Arr::get($array, 'sub', Arr::get(get_object_vars(Arr::get($array, "profiles", json_decode(json_encode((object) [])))), 'uid'));
                $true_user_id = $user_id;
            }
            $tmp_point["user_id"] = $true_user_id;
            $parameter_name       = "campaign_code";

            if (!isset($product_detail_from_api["points"][0]["inventories"][0]["campaign_code"])
                && !isset($product_detail_from_api["points"][0]["inventories"][0]["point"])
                && !isset($product_detail_from_api["points"][0]["inventories"][0]["discount"])) {
                $status_code                        = 400;
                $result_body_array['message']       = [];
                $result_body_array['message']['en'] = 'unable to fetch product truepoint data, please contact call center';
                $result_body_array['message']['th'] = 'ไม่สามารถนำเข้าข้อมูลสินค้า ในส่วนของ truepoint ได้ กรุณาติดต่อ call center';

                return response()->json($result_body_array, $status_code);
            }
            $tmp_point["campaign_code"]     = $product_detail_from_api["points"][0]["inventories"][0][$parameter_name];
            $parameter_name                 = "point";
            $tmp_point["total_point"]       = $product_detail_from_api["points"][0]["inventories"][0][$parameter_name];
            $parameter_name                 = "discount";
            $tmp_point["total_point_money"] = $product_detail_from_api["points"][0]["inventories"][0][$parameter_name];

            $tmp_point["keys"]                = [[]];
            $tmp_point["keys"][0]["sequence"] = 0;

            $tmp_point["keys"][0]["key"]   = $request_parameter["products"][0]["inventory_id"];
            $tmp_point["keys"][0]["price"] = $request_parameter["products"][0]["price"];

            // discount properly when the user used their point
            $request_parameter["summaries"][0]["value"] = $total - $product_detail_from_api["points"][0]["inventories"][0][$parameter_name];
            $request_parameter["summaries"][1]["value"] = $total - $product_detail_from_api["points"][0]["inventories"][0][$parameter_name];

            $request_parameter["payment_detail"]["total"]          = $request_parameter["summaries"][0]["value"];
            $request_parameter["payment_detail"]["payment_amount"] = $request_parameter["summaries"][0]["value"];
            $request_parameter["products"][0]["price"]             = $total - $product_detail_from_api["points"][0]["inventories"][0][$parameter_name];
            $request_parameter["products"][0]["final_price"]       = $total - $product_detail_from_api["points"][0]["inventories"][0][$parameter_name];

            if ($total - $product_detail_from_api["points"][0]["inventories"][0][$parameter_name] <= 499) {
                $request_parameter["shipping_detail"]["price"] = $shipping;
                $request_parameter["summaries"][0]["value"] += $shipping;
                $request_parameter["summaries"][1]["value"] += $shipping;
                $request_parameter["payment_detail"]["total"] += $shipping;
                $request_parameter["products"][0]["price"] += $shipping;
                $request_parameter["products"][0]["final_price"] += $shipping;
            }

            $tmp_point["keys"][0]["quantity"] = $request_parameter["products"][0]["quantity"];

            foreach (["campaign_code", "point"] as $parameter_name) {
                $tmp_point["keys"][0][$parameter_name] = $product_detail_from_api["points"][0]["inventories"][0][$parameter_name];
            }
            $parameter_name                         = "discount";
            $tmp_point["keys"][0]["money"]          = $product_detail_from_api["points"][0]["inventories"][0][$parameter_name];
            $parameter_name                         = "pay_more";
            $tmp_point["keys"][0]["money_original"] = $product_detail_from_api["points"][0]["inventories"][0][$parameter_name];

            $request_parameter["point"] = $tmp_point;
        } elseif (isset($request_parameter["point"])) {
            unset($request_parameter["point"]);
        }

        $request_parameter["employee_code"] = "";

        // filter privilege
        if (!empty(Arr::get($request_parameter, 'privilege'))) {
            $disallow_product_types         = ['pre_to_post' => false, 'restriction' => false, 'device_bundle_prepaid' => false, 'device_bundle_prepaid_sim' => false];
            $request_parameter['privilege'] = array_filter($request_parameter['privilege'],
                function ($priv) use ($disallow_product_types, &$request_parameter) {
                    $product_type = Arr::get($priv, 'product_type');
                    if ($product_type === 'restriction') {
                        $request_parameter['privilege_restriction'][] = [
                            'thai_id'    => Arr::get($priv, 'thai_id'),
                            'product_id' => Arr::get($priv, 'product_id'),
                            'quantity'   => Arr::get($priv, 'quantity'),
                        ];
                    }

                    return Arr::get($disallow_product_types, $product_type, true);
                }
            );
        }
        // end filter privilege

        if (Arr::get($request_parameter, "products.0.sim_meta.0.campaign_type") == "vhora") {
            array_set($request_parameter, "products.0.sim_meta.0.kyc_image", Arr::get($request_parameter, "products.0.sim_meta.0.thai_id") . "_liveness.jpg");
        }

        if (isset($request_parameter["ctoken"])) {
            $ctoken      = $request_parameter["ctoken"];
            $vhora_image = $request_parameter["vhora_image"];
            unset($request_parameter["ctoken"]);
            unset($request_parameter["vhora_image"]);
        }

        if ($tmh_sale_sms_id) {
            $request_parameter['tmh_sale'] = [
                'tmh_sale_sms_id' => $tmh_sale_sms_id,
            ];
            unset($request_parameter['afc']);
        }

        $ekyc_hash = Arr::get($request_parameter, "ekyc_hash");
        if (!empty($ekyc_hash)) {
            unset($request_parameter["ekyc_hash"]);
        }

        $request_parameter = OrderService::checkSimOnlyEppOcrConsent($request_parameter);

        $lrequest->replace($request_parameter);

        // start of prevent placeorder negative product price in case truepoint
        $key = 0;
        if ($request_parameter["products"][$key]["price"] < 0 || $request_parameter["products"][$key]["final_price"] < 0) {
            $status_code                        = 400;
            $result_body_array                  = [];
            $result_body_array['product_id']    = $request_parameter["products"][$key]["product_id"];
            $result_body_array['message']       = [];
            $result_body_array['message']['en'] = 'negative product price, step 002, product_id = ' . $request_parameter["products"][$key]["product_id"];
            $result_body_array['message']['th'] = 'ราคาสินค้ามีปัญหา ตำแหน่ง 002 รหัสสินค้า = ' . $request_parameter["products"][$key]["product_id"];

            return response()->json($result_body_array, $status_code);
        }
        // end of prevent placeorder negative product price in case truepoint

        if ($lrequest->has('is_placeorder_input_test') &&
            $lrequest->input('is_placeorder_input_test') == "yes_it_is_a_test"
        ) {
            return [200, json_encode($request_parameter)];
        }

        $products = Arr::get($request_parameter, "products", []);

        foreach ($products as $product) {
            $sim_meta = Arr::get($product, "sim_meta");

            if (empty($sim_meta)) {
                continue;
            }

            $campaign_type   = Arr::get($sim_meta, "0.campaign_type");
            $sim_source_type = Arr::get($sim_meta, "0.sim_source_type");
            $branch_code     = Arr::get($sim_meta, "0.branch_code");

            if (!empty($branch_code)) {
                $payment_method          = 'STOREOFFLINE';
                $reference_partial_order = 'ASC' . Str::random(12);
                Arr::set($request_parameter, "payment_detail.method", $payment_method);
                Arr::set($product, "sim_meta.0.payment_method", $payment_method);
                Arr::set($product, "sim_meta.0.reference_partial_order", $reference_partial_order);
                Arr::set($request_parameter, "products.0.sim_meta", $sim_meta);
            }

            if (checkReserveNumber($campaign_type)) {
                $params         = ['campaign_type' => $campaign_type, 'sim_source_type' => $sim_source_type, 'payment_method' => $payment_method];
                $campaign_type  = check3GwAndConvertType($params);
                $reserve_result = $this->reserveNumber($campaign_type, $this->buildReserveNumber($product));

                if (!$reserve_result) {
                    return response()->json($this->buildErrorResponseReserveNumber(), 400);
                }
            }

            break;
        }

        // request placeorder api
        $url                       = 'ecom/placeorder';
        $unix_timestamp_placeorder = time();

        if (!($lrequest->has('is_feature_test') && $lrequest->input('is_feature_test'))) {
            $message_id      = Str::uuid()->toString();
            $log_message_str = "unix_time = $unix_timestamp_placeorder, before placeorder: " . json_encode_unicode($request_parameter);
            LogService::writeActionLog($lrequest, $log_message_str);
        }
        $request->request->remove('access_token');

        $result = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);
        if (!($lrequest->has('is_feature_test') && $lrequest->input('is_feature_test'))) {
            $message_id      = Str::uuid()->toString();
            $log_message_str = "unix_time = $unix_timestamp_placeorder, before placeorder: " . json_encode_unicode($request_parameter) . ", after placeorder: " . json_encode_unicode($result);
            LogService::writeActionLog($lrequest, $log_message_str);
        }

        $tmp_result_body       = json_decode($result["body"], true);
        $payment_detail_method = strtoupper(Arr::get($lrequest->input('payment_detail'), 'method'));

        if (!isset($result["error_message"])) {
            if ($payment_detail_method === "CCW" &&
                empty($tmp_result_body["cybs_detail"]) &&
                !isset($result["error_message"]["description"])
            ) {
                $tmp_result_body = $this->warpErrorTmpResultBody($tmp_result_body);
                $result          = $this->warpErrorResultBody($result);
            }
        } elseif (isset($result["error_message"]["description"]) && $result["error_message"]["description"] == "cannotConnectPartner") {
            $result["error_message"]["data"]           = [];
            $result["error_message"]["data"]["system"] = "please contact callcenter to correct this problem";
        }

        if ($payment_detail_method === "WEOMNICCW" && Arr::get($tmp_result_body, 'code') !== 200) {
            $tmp_result_body = $this->warpErrorTmpResultBody($tmp_result_body);
            $result          = $this->warpErrorResultBody($result);
        }

        /*if(!isset($tmp_result_body["error_message"])) // commented out as not used yet
        {
        $check_cart_data = $cart_privilege_data;
        if(!empty($cart_privilege_data) && is_array($check_cart_data) && isset($check_cart_data["discount"]))
        {
        Redis::set('store:success:order_id:' . $tmp_result_body["secureKey"], json_encode( [ "discount" => $check_cart_data['discount']]));
        }
        }//*/

        // add placeorder detail to redis
        $mnp_cart   = Redis::get('mnp-cart:' . $cart_hash);
        $mnp_cart   = empty($mnp_cart) ? [] : json_decode($mnp_cart, true);
        $secure_key = Arr::get($tmp_result_body, 'secureKey');

        /*
         * Build response for promptpay
         */
        if ($payment_detail_method === 'OMISEPROMPTPAY') {
            $tmp_result_body['redirectUrl'] = $this->buildPromptpayResponse($secure_key);
        }

        Redis::set('placeorder_detail:' . $cart_hash, json_encode([
            'order_id'          => $secure_key,
            'mobile_no'         => Arr::get($request_parameter, 'customer_detail.telephone'),
            'mnp_mobile_no'     => Arr::get($mnp_cart, 'number', '-'),
            'new_mobile_number' => $new_mobile_number,
            'product_id'        => $main_product_id,
            'sku'               => $main_sku,
        ]), 'EX', 60 * 60);

        if ($clm_data != null && $clm_product_matcode != null && $secure_key != null) {
            $weomni_clm_save_data = [
                'data' => [
                    "secure_key" => $secure_key,
                    "camp_id"    => $clm_data['input']['camp_id'],
                    "service_id" => $clm_data['input']['mobile_number'],
                    "mat_code"   => $clm_product_matcode,
                    "amount"     => $total,
                ],
            ];

            // save to redis
            Redis::set('weomni_clm_save_data:' . $secure_key, json_encode($weomni_clm_save_data));

            Redis::set('weomni_clm_camp_id:' . $secure_key, $clm_data['input']['camp_id']);
        }

        // start of add fix dp-308 weomni_campaign_save_data:external-campaign-order redis
        if (isset($request_parameter["campaign_weomni"]) && $secure_key != null) {
            $weomni_campaign_save_data = [
                'data' => [
                    "secure_key" => $secure_key,
                    "campaign"   => $request_parameter["campaign_weomni"],
                ],
            ];

            // save to redis
            Redis::set('weomni_campaign_save_data:external-campaign-order:' . $secure_key . ':data', json_encode($weomni_campaign_save_data));
        }
        // end of add fix dp-308 weomni_campaign_save_data:external-campaign-order redis

        // start of fix TEC-19 add discount coupon
        if (!empty($coupon_code) && $secure_key != null) {
            $coupon_save_data = [
                "coupon_id"   => Arr::get($tmp_result_cart, "data.coupon_data_from_bff.id"),
                "coupon_code" => $coupon_code,
                "user_id"     => "0",
                "store_id"    => Arr::get($request_parameter, "store_detail.0.store_id"),
                "status"      => "",
                "product_id"  => array_keys($request_parameter["products"]),
                "order_id"    => $secure_key,
            ];

            // save to redis
            Redis::set('truestore:stamp_coupon_used:' . $secure_key . ':data', json_encode($coupon_save_data));
        }
        // end of fix TEC-19 add discount coupon

        // move pre2post redis from cart_hash to secure_key
        $pre2post_redis = Redis::get('pre2post_data:' . $cart_hash);
        LogService::writeActionLog($lrequest, 'pre2post_data:placeoreder:' . $cart_hash . ':' . $secure_key . ': ' . $pre2post_redis);
        if (!empty($pre2post_redis)) {
            $pre2post_data    = json_decode($pre2post_redis, true);
            $tmp_check_result = Arr::get($pre2post_data, 'tmp_check_result');

            $data = [
                'correlation_id'          => Arr::get($tmp_check_result, 'correlation_id'),
                'mobile_number'           => Arr::get($tmp_check_result, 'input.mobile_number'),
                'kyc_image'               => Arr::get($tmp_check_result, 'image_liveness'),
                'id_number'               => Arr::get($tmp_check_result, 'input.id_number'),
                'identification_exp_date' => Arr::get($tmp_check_result, 'customer_info.identification_exp_date'),
                'birthday'                => Arr::get($tmp_check_result, 'input.birthday'),
                'title'                   => Arr::get($tmp_check_result, 'customer_info.title'),
                'first_name'              => Arr::get($tmp_check_result, 'customer_info.first_name'),
                'last_name'               => Arr::get($tmp_check_result, 'customer_info.last_name'),
                'amphur'                  => Arr::get($tmp_check_result, 'customer_info.amphur'),
                'city'                    => Arr::get($tmp_check_result, 'customer_info.city'),
                'house_no'                => Arr::get($tmp_check_result, 'customer_info.house_no'),
                'street_name'             => Arr::get($tmp_check_result, 'customer_info.street_name', '-'),
                'tumbon'                  => Arr::get($tmp_check_result, 'customer_info.tumbon'),
                'zip_code'                => Arr::get($tmp_check_result, 'customer_info.zip_code'),
                'gender'                  => Arr::get($tmp_check_result, 'customer_info.gender'),
                'priceplan'               => Arr::get($tmp_check_result, 'input.priceplan'),
                'proposition_id'          => Arr::get($tmp_check_result, 'bundle_existing.proposition_amdoc'),
                'company_code'            => Arr::get($tmp_check_result, 'pre2post.body.companyCode'),
                'cart_hash'               => $cart_hash,
                'ocr_consent_info'        => Arr::get($tmp_check_result, 'ocr_consent_info', []),
            ];

            $set_redis = Redis::set('pre2post_data:' . $secure_key, json_encode($data), 'EX', 24 * 60 * 60);
            LogService::writeActionLog($lrequest, 'pre2post_data:placeoreder:' . $cart_hash . ':' . $secure_key . ':set_redis: ' . $set_redis->getPayload());
        }
        // end move pre2post redis from cart_hash to secure_key

        // start of add fix tmh-274 typhoon placeorder ent pack in postSuccess
        if ($secure_key != null) {
            $typhoon_save_data = [
                'data' => [
                    "secure_key" => $secure_key,
                    "cart_hash"  => $cart_hash,
                    "pickup"     => $pickup_at_seven_in_cart,
                ],
            ];

            // save to redis
            Redis::set('truestore:typhoon_save_data:ent_pack_placeorder:' . $secure_key . ':data', json_encode($typhoon_save_data));

            Redis::set('elsalog:session_id:' . $secure_key, session()->getId());

            if (Arr::get($request_parameter, "products.0.sim_meta.0.campaign_type") == "vhora") {
                if (isset($ctoken)) {
                    Redis::set('truestore:ctoken:orderid:' . $secure_key . ':value', $ctoken, 'EX', 24 * 60 * 60);
                    Redis::set('truestore:vhora_image:orderid:' . $secure_key . ':value', $vhora_image);
                }
            }

            if (isset($tmp_existing_campaign_data)) {
                Redis::set('truestore:existing_campaign:' . $secure_key . ':data', json_encode($tmp_existing_campaign_data), 'EX', 60 * 60);
            }
        }
        // end of add fix tmh-274 typhoon placeorder ent pack in postSuccess

        if (!empty($tmp_result_body)) {
            $result["body"] = json_encode($tmp_result_body);
        }

        $final_response       = GuzzleService::showResponse($result, $url, $clm_data);
        $check_final_response = json_decode(json_encode($final_response), true);

        // return input
        $placeorder_input_request_body = [];
        $placeorder_input_request_body["request_parameter"] = $request_parameter;
        $placeorder_input_request_body["product_detail_from_cart_api_by_product_id"] = $product_detail_from_cart_api_by_product_id;
        \Arr::set($check_final_response, "original.input", $placeorder_input_request_body);
        //$final_response = json_encode($check_final_response);//response()->json($check_final_response, 200);
        $final_response = response()->json(\Arr::get($check_final_response, "original"), 200);//response()->json($check_final_response, 200);


        $pre_ekyc_redis_data = Redis::get("truestore:placeorder:pre_ekyc:ekyc_hash:$ekyc_hash:redis_data"); // 1 hour

        if ($secure_key != null && $original_payment_method == "TMNPAYSMOOTH" && empty($pre_ekyc_redis_data)) {
            $url_redirect         = Arr::get($check_final_response, 'original.redirectUrl');
            $explode_url_redirect = explode("ascendmoney", $url_redirect);

            if (count($explode_url_redirect) > 0) {
                $env_host = env("APP_URL");
                Arr::set($check_final_response, "original.redirectUrl", $env_host . "/paysmooth-payment?deep-link=" . urlencode($explode_url_redirect[0]) . "ascendmoney" . $explode_url_redirect[1]);

                return response()->json(Arr::get($check_final_response, "original"), 200);
            }
        }
        return $final_response;
        // end of request placeorder api

        // debug code when placeorder api not working
        /*
        $result = [];
        $result_body_array = json_decode(file_get_contents("sample_page_when_offline/placeorder.json"), true);
        $status_code = 200;
        return response()->json($result_body_array, $status_code);
         */
        //comment this line out when placeorder api is working
    }

    public function createOrUpdateArrayIfExists($arr, $key, $val)
    {
        if (!isset($arr[$key])) {
            $arr[$key] = [$val];
        } else {
            $arr[$key][] = $val;
        }

        return $arr[$key];
    }

    public function getOrderHistoryContent($parameter)
    {
        $result      = [];
        $status_code = 200;

        $url      = 'order/order';
        $lrequest = new \Illuminate\Http\Request();
        $lrequest->setMethod('GET');
        $request_parameter              = [];
        $request_parameter['scope']     = 'orderProduct,orderPaymentMethod,orderStoreInfo,orderRequestRefund,orderPromotion,orderInstallment,orderPointIdcard,orderAddress,orderOmise,orderTmhSale,orderTracking';
        $request_parameter['user_type'] = 'buyer';
        $request_parameter['section']   = 'wemall';
        $request_parameter['user_id']   = '0';
        if (isset($parameter['user_id'])) {
            $request_parameter['user_id'] = $parameter['user_id'];
        }
        if (isset($parameter['page'])) {
            $request_parameter['page'] = $parameter['page'];
        }

        if (isset($parameter['order_statuses_code'])) {
            $request_parameter['order_statuses_code'] = $parameter['order_statuses_code'];
        }

        if (isset($parameter['limit'])) {
            $request_parameter['limit'] = $parameter['limit'];
        }

        if (isset($parameter['is_success_check'])) {
            unset($request_parameter['user_id']);
        }

        $request_parameter['readonly'] = 'readonly';

        if (isset($parameter["secure_key"])) {
            $request_parameter['secure_key'] = $parameter['secure_key'];
        }

        if (isset($parameter['wepayment_status'])) {
            $request_parameter['wepayment_status'] = Arr::get($parameter, 'wepayment_status');
        }

        $request_parameter['order_by']   = "id";
        $request_parameter['order_sort'] = "DESC";
        $request_parameter['t']          = Carbon::now()->timestamp;

        $lrequest->replace($request_parameter);
        $result = App('App\Http\Controllers\APIController')->callAPIContent($url, $lrequest);

        return $result;
        if (isset($result["status_code"]) && $result["status_code"] == "200") {
            $status_code = 200;
            $body        = json_decode($result["body"], true);

            return response()->json($body, $status_code);
        } else {
            $status_code = 400;
            $body        = ["message" => $result["message"]];

            return response()->json($body, $status_code);
        }
    }

    public function getTrackingSuccess($secure_key)
    {
        if (strlen($secure_key) < 13 && !env('IS_ENABLE_DEBUG_SUCCESS_ORDER_ID', false)) {
            // if not debug, just check for proper encrypted secure_code, use the next line
            return response()->json(["message" =>
                [
                    "en" => "success_code not in correct format",
                    "th" => "success_code อยู่ในรูปแบบที่ไม่ถูกต้อง",
                ]], 400);
        } elseif (!env('IS_ENABLE_DEBUG_SUCCESS_ORDER_ID', false)) {
            $secure_key = decrypt($secure_key);
        }
        $parameter = ["secure_key" => $secure_key, "is_success" => 1, 'is_success_check' => true];
        $result    = $this->showTrackingContent($parameter);

        // Get Entertainment
        $secure_key = Arr::get($result, 'body.data.0.order_id');
        if (!empty($secure_key)) {
            $content = WeOmniService::getTrueIdEntertainmentPackage($secure_key);

            if ($content[0] === 200) {
                $entertainment_data = Arr::get(json_decode($content[1], true), '0.data');
                if (!empty($entertainment_data) && !empty(Arr::get($entertainment_data, 'package_matcode'))) {
                    $result['entertainment'] = [
                        'name'      => Arr::get($entertainment_data, 'package_name'),
                        'image_url' => Arr::get($entertainment_data, 'package_image_url'),
                        'matcode'   => Arr::get($entertainment_data, 'package_matcode'),
                        'option'    => Arr::get($entertainment_data, 'package_option'),
                    ];
                }
            }
        }

        // Get Vhora Information set truestore:ctoken:orderid:800012109802:value 12345
        if (Arr::get($result, 'body.data.0.sim_meta.0.campaign_type', '') == 'vhora') {
            $vhora_ctoken = Redis::get("truestore:ctoken:orderid:$secure_key:value");
            if (!empty($vhora_ctoken)) {
                try {
                    $vhora_result = VHoraService::getFortuneFuntong(
                        Arr::get($result, 'body.data.0.sim_meta.0.number', ''),
                        $vhora_ctoken
                    );
                    $result['fortune_funtong'] = $vhora_result;
                } catch (\Exception $e) {
                    $response = [
                        'code'    => $e->getCode(),
                        'message' => $e->getMessage(),
                    ];

                    LogService::writeServiceLog(
                        'fortune_funtong_fail',
                        json_encode_unicode($result),
                        json_encode_unicode($response),
                        ''
                    );
                }
            }
        }

        return $result;
    }

    public function getPDFSuccess($secure_key)
    {
        if (strlen($secure_key) < 13 && !env('IS_ENABLE_DEBUG_SUCCESS_ORDER_ID', false)) {
            // if not debug, just check for proper encrypted secure_code, use the next line
            return response()->json(["message" =>
                [
                    "en" => "success_code not in correct format",
                    "th" => "success_code อยู่ในรูปแบบที่ไม่ถูกต้อง",
                ]], 400);
        } elseif (!env('IS_ENABLE_DEBUG_SUCCESS_ORDER_ID', false)) {
            $secure_key = decrypt($secure_key);
        }
        $parameter = ["secure_key" => $secure_key, "is_success" => 1, 'is_success_check' => true];
        $result    = $this->showTrackingContent($parameter);

        $pdf = mb_convert_encoding(\View::make('successpdf', $result['body']['data'][0]), 'HTML-ENTITIES', 'UTF-8');

        return PDF::loadHtml($pdf)->download('invoice.pdf');
    }

    public function getFetchQRcode(Request $request)
    {
        try {
            return file_get_contents($request->input("url"));
        } catch (\Exception $error) {
            $response = [
                'code'    => $error->getCode(),
                'message' => $error->getMessage(),
            ];

            LogService::writeServiceLog(
                'fetch_qr_code_fail',
                json_encode_unicode($request->input("url")),
                json_encode_unicode($response),
                ''
            );

            return response()->json(
                Arr::get($response, 'message'),
                Arr::get($response, 'code')
            );
        }
    }

    public function getOrderHistory(Request $request)
    {
        $tmp_authorization = explode(' ', \Illuminate\Support\Facades\Request::header('Authorization'));
        if (count($tmp_authorization) < 2) {
            $status_code = 400;
            $body        = ["message" => "authorization token not set properly"];

            return response()->json($body, $status_code);
        }
        $request_parameter['access_token'] = $tmp_authorization[1];
        $result                            = App('App\Http\Controllers\APIController')->getProfileContent($request);

        $user_id   = json_decode($result["body"], true)["data"]["user_id"];
        $parameter = ["user_id" => $user_id];

        if ($request->has("secure_key")) {
            $parameter["secure_key"] = $request->input("secure_key");
        }

        if ($request->has("page")) {
            $parameter["page"] = $request->input("page");
        }

        if ($request->has("limit")) {
            $parameter["limit"] = $request->input("limit");
        }

        if ($request->has('is_success')) {
            $parameter['is_success'] = $request->input('is_success');
        }

        if ($request->has("order_statuses_code")) {
            $parameter["order_statuses_code"] = $request->input("order_statuses_code");
        }

        if ($request->has('show_all')) {
            $parameter['show_all'] = $request->input('show_all');
        }

        return $this->showTrackingContent($parameter);
    }

    public function show($secure_key)
    {
        $parameter = ["secure_key" => $secure_key, "is_success_check" => true];
        $result    = ($this->showTrackingContent($parameter));
        $result2   = (json_decode(json_encode($result), true));
        if (isset($result2["original"]["message"]) && $result2["original"]["message"] == "Not Found") {
            return response()->json(["message" => ["en" => "Not Found", "th" => "ไม่พบข้อมูล"]], 404);
        }

        $result3 = ["body" => ["data" => [0 => []]], "status_code" => $result2["status_code"]];
        foreach (["order_id", "created_at", "price", "status", "order_tracking"] as $key_name) {
            if (isset($result2["body"]["data"][0][$key_name])) {
                $result3["body"]["data"][0][$key_name] = $result2["body"]["data"][0][$key_name];
            }
        }
        // "order_product"
        $key_name = "order_product";
        if (isset($result2["body"]["data"][0][$key_name])) {
            $tmp_order_product = [];
            foreach ($result2["body"]["data"][0][$key_name] as $tmp_product_key => $tmp_product_value) {
                foreach (["title", "option", "sim_meta", "quantity", "tracking_id", "meta"] as $allow_product_field) {
                    $tmp_field_value = Arr::get($result2, "body.data.0.$key_name.$tmp_product_key.$allow_product_field");
                    if (!empty($tmp_field_value)) {
                        Arr::set($tmp_order_product, "$tmp_product_key.$allow_product_field", $tmp_field_value);
                        if ($allow_product_field == "meta") {
                            Arr::set($tmp_order_product, "$tmp_product_key.$allow_product_field", json_decode($tmp_field_value, true));
                        }
                        if ($allow_product_field == "sim_meta") {
                            $tmp_sim_meta            = [];
                            $json_decode_field_value = json_decode($tmp_field_value, true);
                            $key_to_be_add           = "0.price_plan.name";
                            $tmp_sim_meta_data_add   = Arr::get($json_decode_field_value, $key_to_be_add);
                            if (!empty($tmp_sim_meta_data_add)) {
                                Arr::set($tmp_sim_meta, $key_to_be_add, $tmp_sim_meta_data_add);
                            }
                            Arr::set($tmp_order_product, "$tmp_product_key.$allow_product_field", $tmp_sim_meta);
                        }
                    }
                }

            }
            $result3["body"]["data"][0][$key_name] = $tmp_order_product;
        }

        return response()->json($result3, $result2["status_code"]);
    }

    public function showTrackingContent($parameter)
    {
        $result          = $this->getOrderHistoryContent($parameter);
        $result_body     = json_decode($result["body"], true);
        $tmp_order_array = [];

        if (empty($result_body)) {
            return response()->json(["message" => $result["body"]], $result["status_code"]);
        }

        $secure_key = Arr::get($result_body, 'data.0.secure_key');

        if (!isset($parameter["show_all"])) {
            foreach ($result_body["data"] as $result_body_data) {
                if ((in_array($result_body_data["order_statuses_code"], ["001", "100", "200", "301"]))) {
                    $tmp = [
                        "order_id"                   => $result_body_data["secure_key"],
                        "payment_date"               => $result_body_data["payment_date"],
                        "payment_verified_date"      => $result_body_data["payment_verified_date"],
                        "created_at"                 => $result_body_data["created_at"],
                        "updated_at"                 => $result_body_data["updated_at"],
                        "payment_expired_time"       => $result_body_data["payment_expired_time"],
                        "price"                      => $result_body_data["total"],
                        "status"                     => $result_body_data["order_statuses_code"],
                        "payment_buyer_expired_time" => $result_body_data["payment_buyer_expired_time"],
                        "order_product"              => $result_body_data["order_product"],
                        "order_point_idcard"         => ["point" => $result_body_data["order_point_idcard"]["point"]],

                        "payment_method" => $result_body_data["payment_method"], // TEC-419-420 add COD payment method
                        "order_tracking" => $result_body_data["order_tracking"], // TEC-2170 Improve Order Status detail
                    ];
                    if (isset($parameter["is_success"])) {
                        $tmp["order_address"] = $result_body["data"][0]["order_address"];
                    }
                    $tmp['order_omise']  = Arr::get($result_body_data, 'order_omise');
                    $tmp['omise_status'] = Arr::get($result_body_data, 'omise_status');
                    $tmp['tmh_sale']     = Arr::get($result_body_data, 'tmh_sale');
                    $tmp_order_array[]   = $tmp;
                }
            }

            $result_body["data"] = $tmp_order_array;
        }

        for ($i = 0; $i < count($result_body["data"]); $i++) {
            $result_body["data"][$i]["shipping_price"] = array_sum(array_column($result_body["data"][$i]["order_product"], 'shipprice_peritem'));
        }

        if (isset($result_body["data"]) && empty($result_body["data"])) {
            $result["status_code"]  = 400;
            $result_body["code"]    = 400;
            $result_body["message"] = "Bad request";
        }

        $result["body"] = ($result_body);
        if (isset($result["body"]["data"][0]["total"])) {
            $result["body"]["data"][0]["total"] = $result["body"]["data"][0]["total"];
        }
        if (isset($result["body"]["data"][0]["order_product"])) {
            $new_customer_index                                         = -1;
            $result["body"]["data"][0]["total_discount_from_promotion"] = 0;
            $product_type_list                                          = [];

            foreach ($result["body"]["data"][0]["order_product"] as $key_product => $value_product) {
                $result["body"]["data"][0]["order_product"][$key_product]["price"] = $result["body"]["data"][0]["order_product"][$key_product]["price"];

                $product_id = $result["body"]["data"][0]["order_product"][$key_product]["product_id"];
                $tmp_url    = "wportal/product/" . $product_id; //. "?product_status=all";

                $request_token = new \Illuminate\Http\Request();
                $request_token->setMethod('GET');
                $request_token['product_status'] = "all";
                $result_product_api              = App('App\Http\Controllers\APIController')->callAPIContent($tmp_url, $request_token, true);
                $result_body_array               = json_decode($result_product_api["body"], true);

                if (!(isset($result_body_array["status_code"]) && $result_body_array["status_code"] == "0")) {
                    $status_code = 400;
                    $body        = ["message" => ["en" => "unable to fetch product data", "th" => "ไม่สามารถนำเข้าข้อมูลสินค้าได้"]];
                    $content     = ["status_code" => $status_code, "body" => $body];

                    return $content;
                }

                $product_detail_from_api = json_decode($result_product_api["body"], true)["data"]["record"];

                if ($result["body"]["data"][0]["order_product"][$key_product]["product_type"] == 'pre_to_pos') {
                    $result["body"]["data"][0]["order_product"][$key_product]["product_type"] = 'pre_to_post';
                    // Get pre2post data
                    $pre2post_redis = Redis::get('pre2post_data:' . $secure_key);
                    if (!empty($pre2post_redis)) {
                        $pre2post_data = json_decode($pre2post_redis, true);

                        $result["body"]["data"][0]["order_product"][$key_product]["sim_meta"] = [
                            "user_information" => [
                                "telephone" => Arr::get($pre2post_data, 'mobile_number'),
                                "thai_id"   => Arr::get($pre2post_data, 'id_number'),
                            ],
                        ];
                    }
                } else {
                    $result["body"]["data"][0]["order_product"][$key_product]["product_type"] = $product_detail_from_api["product_type"];

                    if ($result["body"]["data"][0]["order_product"][$key_product]["product_type"] == 'device_bundle_new_customer') {
                        $new_customer_index = $key_product;
                    }
                }

                $product_type_list[] = $result["body"]["data"][0]["order_product"][$key_product]["product_type"];

                if (isset($result["body"]["data"][0]["order_product"][$key_product]["advance_payment"])) {
                    if (floatval($result["body"]["data"][0]["order_product"][$key_product]["advance_payment"]) > 0) {
                        $result["body"]["data"][0]["advance_payment"] = $result["body"]["data"][0]["order_product"][$key_product]["advance_payment"];
                    }

                    // get contract
                    if (isset($result["body"]["data"][0]["order_product"][$key_product]["sim_meta"][0])) {
                        $tmp_sim_meta                          = json_decode($result["body"]["data"][0]["order_product"][$key_product]["sim_meta"], true);
                        $result["body"]["data"][0]["sim_meta"] = $tmp_sim_meta;

                        if (isset($tmp_sim_meta[0]["contract"])) {
                            $result["body"]["data"][0]["contract"] = $tmp_sim_meta[0]["contract"];
                        }
                    }
                }

                // set product type sim to have sim_meta
                if ($result["body"]["data"][0]["order_product"][$key_product]["product_type"] == "sim") {
                    $product_sim_index = $key_product;
                }

                if (!empty(Arr::get($result, "body.data.0.order_product." . $key_product . ".order_product_promotion.0.discount"))) {
                    $order_product_promotion_list = Arr::get($result, "body.data.0.order_product." . $key_product . ".order_product_promotion");
                    foreach ($order_product_promotion_list as $tmp_promotion_key => $tmp_promotion_value) {
                        // filter discount for device only out of success page
                        if (Arr::get($tmp_promotion_value, 'order_promotion.type') != '11') {
                            $result["body"]["data"][0]["total_discount_from_promotion"] += floatval($tmp_promotion_value['discount']);
                        }
                    }
                }
            }

            $existing_campaign = Redis::get('truestore:existing_campaign:' . $secure_key . ':data');

            // Convert product type for detect in frontend in Success page
            $product_convert_list = [];
            for ($key_product = 0; $key_product < count(Arr::get($result, "body.data.0.order_product", [])); $key_product++) {
                $current_product_type = Arr::get($result, "body.data.0.order_product.$key_product.product_type");
                $current_sku          = Arr::get($result, "body.data.0.order_product.$key_product.sku");
                $order_promotion_name = Arr::get($result, "body.data.0.order_product.$key_product.order_product_promotion.0.order_promotion.name");
                $order_promotion_type = Arr::get($result, "body.data.0.order_product.$key_product.order_product_promotion.0.order_promotion.type");

                if ($current_product_type == 'prepaid' && in_array('device_bundle_new_customer', $product_type_list)) {
                    $current_product_type = 'device_bundle_prepaid_sim';
                }

                if ($current_product_type == 'device_bundle_new_customer') {
                    if ($order_promotion_name == 'existing campaign') {
                        $current_product_type = 'device_bundle_existing';
                    } elseif (in_array('prepaid', $product_type_list)) {
                        $current_product_type = 'device_bundle_prepaid';
                    } elseif (in_array('mnp', $product_type_list)) {
                        if (in_array('sim', $product_type_list)) {
                            $current_product_type = 'device_mnp_bundle';
                        } else {
                            $current_product_type = 'mnp_one_step';
                        }
                    } else {
                        if ($order_promotion_type != 2) {
                            $current_product_type = 'product';
                        }
                    }
                }

                if (isset($existing_campaign)) {
                    $result["body"]["data"][0]["existing_campaign"] = json_decode($existing_campaign, true);

                    if (Arr::get($result, 'body.data.0.existing_campaign.product_code') == $current_sku &&
                        Arr::get($result, 'body.data.0.existing_campaign.campaign_type') == 4) {
                        $current_product_type = 'mnp_two_step';
                    }
                }

                if (Arr::get($result, 'body.data.0.sim_meta.0.campaign_type') == 'vhora') {
                    $current_product_type = 'postpaid';
                }

                $result["body"]["data"][0]["order_product"][$key_product]["product_type"] = $current_product_type;
            }

            // Reorder new customer to top
            if ($new_customer_index >= 0 && count($result["body"]["data"][0]["order_product"]) > 1) {
                $temp_order_product                                              = $result["body"]["data"][0]["order_product"];
                $result["body"]["data"][0]["order_product"][0]                   = $temp_order_product[$new_customer_index];
                $result["body"]["data"][0]["order_product"][$new_customer_index] = $temp_order_product[0];
            }

            if (isset($product_sim_index)) {
                $key_product = $product_sim_index;
                if (isset($result["body"]["data"][0]["advance_payment"])) {
                    $result["body"]["data"][0]["order_product"][$key_product]["advance_payment"] = $result["body"]["data"][0]["advance_payment"];
                }
                if (isset($result["body"]["data"][0]["contract"])) {
                    $result["body"]["data"][0]["order_product"][$key_product]["contract"] = $result["body"]["data"][0]["contract"];
                }
            }
        }

        return $result;
    }

    public function filter_only_answer($result_body_array, $parameter)
    {
        $filtered_result_body_array = [];
        foreach ($result_body_array as $r) {
            $is_result = false;
            foreach ($parameter as $key => $value) {
                if (isset($r[$key]) && $r[$key] == $value) {
                    $is_result = true;
                    break;
                }
            }

            if ($is_result) {
                $filtered_result_body_array[] = $r;
                break;
            }
        }

        return $filtered_result_body_array;
    }

    public function warpErrorTmpResultBody($tmp_result_body)
    {
        $tmp_result_body["message"]     = ["en" => "failed to finish payment", "th" => "เกิดข้อผิดพลาดในระบบชำระเงิน"];
        $tmp_result_body["status_code"] = 400;
        $tmp_result_body["status_txt"]  = ["en" => "failed to finish payment", "th" => "เกิดข้อผิดพลาดในระบบชำระเงิน"];
        $tmp_result_body["code"]        = 500;

        return $tmp_result_body;
    }

    public function warpErrorResultBody($result)
    {
        $result["status_code"]                     = 400;
        $result["error_message"]                   = [];
        $result["error_message"]["data"]           = [];
        $result["error_message"]["data"]["system"] = "failed to finish payment";

        return $result;
    }

    public function buildPromptpayResponse($secure_key)
    {
        $redirect_url = multiEnv(env('PROMPTPAY_APP_URL', '')) . '?order_code=' . encrypt($secure_key);

        return $redirect_url;
    }

    /**
     * reserveNumber
     * @param string $campaign_type
     * @param array $sim_meta
     * @return boolean
     */
    public function reserveNumber($campaign_type, $parameters)
    {
        $result = false;

        switch (strtolower($campaign_type)) {
            case 'vhora':
                $result = ReserveNumberService::postReserveNumber($parameters);
                $result = Arr::get($result, 'is_pass', false);
                break;
            case 'sim_only':
                $result = ReserveNumberService::reserveNumberAllocate($parameters);
                break;
            case 'sim_only_3gw':
                $result = ReserveNumberService::reserveNumber3GW($parameters);
                break;
        }

        return $result;
    }

    /**
     * buildReserveNumber
     * @param array $sim_meta
     * @return array
     */
    public function buildReserveNumber($product)
    {
        $sim_meta        = Arr::get($product, "sim_meta");
        $payment_method  = Arr::get($sim_meta, "0.payment_method");
        $branch_code     = Arr::get($sim_meta, "0.branch_code");
        $campaign_type   = strtolower(Arr::get($sim_meta, "0.campaign_type"));
        $sim_source_type = strtolower(Arr::get($sim_meta, "0.sim_source_type"));
        $sim_type        = strtolower(Arr::get($sim_meta, "0.sim_type"));
        $parameters      = [
            "correlatedId"     => Arr::get($sim_meta, '0.correlation_id'),
            "idType"           => "I",
            "idNumber"         => Arr::get($sim_meta, '0.thai_id'),
            "msisdn"           => Arr::get($sim_meta, '0.number'),
            "reserveDealer"    => Arr::get($sim_meta, '0.dealer_code'),
            "webMethodChannel" => "FNT-ONLINE",
            "userLogin"        => Arr::get($sim_meta, '0.dealer_code'),
        ];

        $store_service = new StoreService();

        if (!empty(Arr::get($sim_meta, '0.price_plan.code'))) {
            $parameters['pricePlanCode'] = $store_service->processGetExternalPricePlanCodeByPricePlanCode(Arr::get($sim_meta, '0.price_plan.code'));
        }

        $store_service       = new StoreService();
        $parameters['pstId'] = $store_service->processGetExternalNasCodeByNasCode(Arr::get($sim_meta, '0.price_plan.proposition_nas_code'));

        if ($campaign_type === 'vhora' && !empty(Arr::get($sim_meta, '0.berfuntong.package_code'))) {
            $parameters['vhrPackageCode'] = Arr::get($sim_meta, '0.berfuntong.package_code');
        }

        if (strtolower($sim_source_type) === 'e-sim' && $payment_method !== 'STOREOFFLINE') {
            $reserve_parameters = [
                'correlationId'    => Arr::get($sim_meta, '0.correlation_id'),
                'channel'          => '3GW-TRUESTORE',
                'flowID'           => $sim_type === 'postpaid' ? 'F002' : 'F001',
                'saleRepInfo' => [
                    'dealerCode'       => Arr::get($sim_meta, '0.dealer_code'),
                    'webMethodChannel' => 'FNT-ONLINE',
                ],
                'subscriberInfo' => [
                    'subscriberNumber' => Arr::get($sim_meta, '0.number'),
                    'propoId'          => Arr::get($parameters, 'pstId'),
                ],
                'customerInfo' => [
                    'identification'     => Arr::get($sim_meta, '0.thai_id'),
                    'identificationType' => Arr::get($parameters, 'idType', 'I')
                ]
            ];

            if ($sim_type === 'postpaid') {
                array_set($reserve_parameters, 'customerInfo.birthDate', Arr::get($sim_meta, '0.birth_date'));
                array_set($reserve_parameters, 'subscriberInfo.companyCode', Arr::get($sim_meta, '0.price_plan.company_code'));
            }

            $parameters = $reserve_parameters;
        }

        if ($payment_method == 'STOREOFFLINE' && !empty($branch_code)) {
            $parameters = $this->buildRequestReserveNumberPickupAtShop($sim_meta, $parameters, $product);
        }

        return $parameters;
    }

    /**
     * buildErrorResponseReserveNumber
     * @return array
     */
    public function buildErrorResponseReserveNumber()
    {
        return [
            "status_code" => 400,
            "message"     => [
                "th" => "ไม่สามารถชำระเงินได้ กรุณาติดต่อ call center",
                "en" => "unable to checkout, please contact call center",
            ],
            "step"        => 'reserve_number_online',
        ];
    }

    /**
     * buildRequestReserveNumberPickupAtShop
     * @return array
     */
    public function buildRequestReserveNumberPickupAtShop($sim_meta, $parameters, $product)
    {
        return [
            'correlationId'    => Arr::get($sim_meta, '0.correlation_id'),
            'channel'          => '3GW-TRUESTORE',
            'flowID'           => 'F016',
            'saleRepInfo' => [
                'dealerCode'              => Arr::get($sim_meta, '0.dealer_code'),
                'dealerCodeTarget'        => Arr::get($sim_meta, '0.branch_code'),
                'ownerDealer'             => Arr::get($sim_meta, '0.dealer_code'),
                'ownerSaleId'             => env('SALE_CODE'),
                'ownerSaleName'           => urldecode(env('SALE_NAME')),
                'webMethodChannel'        => 'FNT-ONLINE',
                'referenceIdPartialOrder' => Arr::get($sim_meta, '0.reference_partial_order'),
            ],
            'orderInfo' => [
                'orderNo'   => Arr::get($sim_meta, '0.reference_partial_order'),
                'orderDate' => date('Y-m-d') . 'T' . date('H:i:s.u')
            ],
            'subscriberInfo' => [
                'subscriberNumber' => Arr::get($sim_meta, '0.number'),
                'priceplan'        => Arr::get($parameters, 'pricePlanCode'),
                'companyCode'      => Arr::get($sim_meta, '0.price_plan.company_code'),
                'propoId'          => Arr::get($parameters, 'pstId'),
            ],
            'campaignInfo' => [
                'campaignCode' => Arr::get($sim_meta, '0.price_plan.campaign_code'),
                'campaignName' => Arr::get($sim_meta, '0.sim_info.campaign_name'),
                'productCode'  => Arr::get($product, 'sku')
            ],
            'customerInfo' => [
                'identification'     => Arr::get($sim_meta, '0.thai_id'),
                'identificationType' => Arr::get($parameters, 'idType', 'I'),
                'firstName'          => Arr::get($sim_meta, '0.user_information.first_name'),
                'lastName'           => Arr::get($sim_meta, '0.user_information.last_name'),
                'birthDate'          => Arr::get($sim_meta, '0.birth_date'),
                'customerAddress'    => [
                    'houseNo'      => Arr::get($sim_meta, '0.user_information.address', '-'),
                    'buildingName' => Arr::get($sim_meta, '0.user_information.building', '-'),
                    'tumbon'       => Arr::get($sim_meta, '0.user_information.sub_district'),
                    'amphur'       => Arr::get($sim_meta, '0.user_information.district'),
                    'city'         => Arr::get($sim_meta, '0.user_information.province'),
                    'zip'          => Arr::get($sim_meta, '0.user_information.zip_code'),
                ]
            ],
            'payment' => [
                'amount'    => [
                    'totalAmount'         => (float) Arr::get($sim_meta, '0.price', 0),
                    'billDiscountAmt'     => (float) Arr::get($sim_meta, '0.sim_info.discount', 0),
                    'billOtherPaymentAmt' => (float) Arr::get($sim_meta, '0.sim_info.other_pay_amount', 0),
                    'paymentAmount'       => (float) Arr::get($sim_meta, '0.price', 0),
                ]
            ],
            'inventoryInfo' => [
                [
                    'productCode'   => Arr::get($product, 'sku'),
                    'promotionSet'  => Arr::get($sim_meta, '0.sim_info.promotion_set', ''),
                    'proposition'   => Arr::get($sim_meta, '0.sim_info.proposition_rms', ''),
                    'promotionType' => '0',
                    'groupId'       => '1',
                    'productType'   => 'P',
                    'inventoryType' => strtoupper(Arr::get($sim_meta, '0.product_info.product_type')),
                    'amount'        => [
                        'price'      => (float) Arr::get($product, 'price', 0),
                        'qty'        => (float) Arr::get($product, 'quantity', 1),
                        'depositAmt' => (float) Arr::get($sim_meta, '0.advance_payment_info.deposit_amt', 0),
                        'discount'   => [
                            'totalDiscountAmt' => (float) Arr::get($sim_meta, '0.sim_info.discount', 0),
                            'discount' => [
                                'discountCode' => Arr::get($sim_meta, '0.sim_info.discount_code'),
                                'discountAmt'  => (float) Arr::get($sim_meta, '0.sim_info.discount', 0)
                            ]
                        ],
                        'otherpayment' => [
                            'totalOtherAmt' => (float) Arr::get($sim_meta, '0.sim_info.other_pay_amount', 0),
                            'otherpayment'  => [
                                'otherpaymentCode' => Arr::get($sim_meta, '0.sim_info.other_pay_amount_code'),
                                'otherpaymentAmt'  => (float) Arr::get($sim_meta, '0.sim_info.other_pay_amount', 0)
                            ]
                        ],
                    ]
                ]
            ],
        ];
    }
}
