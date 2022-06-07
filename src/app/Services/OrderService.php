<?php
namespace App\Services;

use App\Libraries\RequestData\OrderRequest;
use App\Services\AwsService;
use App\Services\CreditokService;
use Illuminate\Support\Carbon;
use Illuminate\Support\Arr;
use Illuminate\Http\Request;

class OrderService
{
    public function placeOrderOffline($lrequest)
    {
        $input = $lrequest->all();
        $request_place_order = new OrderRequest();
        $request_place_order->setRequestOfflinePlaceOrder($input);
        $lrequest->replace($request_place_order->getOfflinePlaceOrderData());

        $place_order_result = WlsService::postPlaceorderWls('', 'POST', $lrequest, []);
        $place_order_response = json_decode(array_get($place_order_result, 1, '{}'), true);

        if (array_get($place_order_result, 0) !== 200 || !$place_order_response) {
            $place_order_response = [
                'secureKey'   => array_get($input, 'id.correlationId'),
                'offline_skip' => 1,
                'redirect_url' => env('SUCCESS_PAGE_URL', false)
            ];
            LogService::writeServiceLog('Vhora:offline-confirm-place-order', json_encode($lrequest->all()), json_encode($place_order_response), date('d/m/Y H:i:s'));
        }

        return $place_order_response;
    }

    /**
     * checkOcrConsentSimMeta
     *
     * @param array $data
     * @param array $creditok_data
     * @return array
     */
    public static function checkOcrConsentSimMeta(array $data = [], array $creditok_data = [])
    {
        try {
            if (empty($data) || empty($creditok_data)) return $data;

            $answers_data = array_column(Arr::get($creditok_data, 'answers'), 'value', 'question');

            Arr::set($data, 'answers.placeorder_request.ocr_consent', false);

            if (!self::checkConditionConsent($answers_data)) {
                return $data;
            }
            
            Arr::set($data, 'answers.placeorder_request.ocr_consent', true);

            $national_id      = Arr::get($answers_data, 'national_id');
            $image_front      = Arr::get($creditok_data, 'image_front');
            $image_front_face = Arr::get($creditok_data, 'image_front_face');
            $image_liveness   = Arr::get($creditok_data, 'image_liveness');
            $products         = Arr::get($data, 'answers.placeorder_request.products', []);
            $thai_id          = '';

            foreach ($products as $key => $product) {
                
                if (empty(Arr::get($product, 'sim_meta'))) continue;

                $thai_id = Arr::get($product, 'sim_meta.0.thai_id', $national_id);
                Arr::set($data, "answers.placeorder_request.products.$key.sim_meta.0.kyc_image_liveness", 
                    $thai_id.'_liveness'. self::getExtensionImage($image_liveness));
                Arr::set($data, "answers.placeorder_request.products.$key.sim_meta.0.kyc_card_image", 
                    $thai_id.'_card_image'. self::getExtensionImage($image_front));
                Arr::set($data, "answers.placeorder_request.products.$key.sim_meta.0.kyc_card_face", 
                    $thai_id.'_card_face'. self::getExtensionImage($image_front_face));

                Arr::set($data, "answers.placeorder_request.products.$key.sim_meta.0.ocr_information.thai_id", $national_id);
                Arr::set($data, "answers.placeorder_request.products.$key.sim_meta.0.ocr_information.laser_id", Arr::get($answers_data, 'laser_id'));
                Arr::set($data, "answers.placeorder_request.products.$key.sim_meta.0.ocr_information.birth_date", str_replace('-', '/', Arr::get($answers_data, 'date_of_birth')));
                Arr::set($data, "answers.placeorder_request.products.$key.sim_meta.0.ocr_information.expiry_date", str_replace('-', '/', Arr::get($answers_data, 'date_of_expiration')));
                Arr::set($data, "answers.placeorder_request.products.$key.sim_meta.0.ocr_information.issue_date", str_replace('-', '/', Arr::get($answers_data, 'date_of_issue')));
                Arr::set($data, "answers.placeorder_request.products.$key.sim_meta.0.ocr_information.telephone", Arr::get($answers_data, 'mobile_no'));
                Arr::set($data, "answers.placeorder_request.products.$key.sim_meta.0.ocr_information.title", Arr::get($answers_data, 'prefix', ''));
                Arr::set($data, "answers.placeorder_request.products.$key.sim_meta.0.ocr_information.first_name", Arr::get($answers_data, 'first_name', ''));
                Arr::set($data, "answers.placeorder_request.products.$key.sim_meta.0.ocr_information.middle_name", Arr::get($answers_data, 'middle_name', ''));
                Arr::set($data, "answers.placeorder_request.products.$key.sim_meta.0.ocr_information.last_name", Arr::get($answers_data, 'last_name', ''));
                Arr::set($data, "answers.placeorder_request.products.$key.sim_meta.0.ocr_information.title_en", self::setDataEmptyString(Arr::get($answers_data, 'prefix_en', '')));
                Arr::set($data, "answers.placeorder_request.products.$key.sim_meta.0.ocr_information.first_name_en", self::setDataEmptyString(Arr::get($answers_data, 'first_name_en', '')));
                Arr::set($data, "answers.placeorder_request.products.$key.sim_meta.0.ocr_information.middle_name_en", self::setDataEmptyString(Arr::get($answers_data, 'middle_name_en', '')));
                Arr::set($data, "answers.placeorder_request.products.$key.sim_meta.0.ocr_information.last_name_en",self::setDataEmptyString(Arr::get($answers_data, 'last_name_en', '')));
                Arr::set($data, "answers.placeorder_request.products.$key.sim_meta.0.ocr_information.address", Arr::get($answers_data, 'home_address', ''));
                Arr::set($data, "answers.placeorder_request.products.$key.sim_meta.0.ocr_information.swine", Arr::get($answers_data, 'home_swine', ''));
                Arr::set($data, "answers.placeorder_request.products.$key.sim_meta.0.ocr_information.alley", Arr::get($answers_data, 'home_alley', ''));
                Arr::set($data, "answers.placeorder_request.products.$key.sim_meta.0.ocr_information.sub_street", Arr::get($answers_data, 'home_sub_street', ''));
                Arr::set($data, "answers.placeorder_request.products.$key.sim_meta.0.ocr_information.street", Arr::get($answers_data, 'home_street', ''));
                Arr::set($data, "answers.placeorder_request.products.$key.sim_meta.0.ocr_information.province", Arr::get($answers_data, 'home_province', ''));
                Arr::set($data, "answers.placeorder_request.products.$key.sim_meta.0.ocr_information.district", Arr::get($answers_data, 'home_district', ''));
                Arr::set($data, "answers.placeorder_request.products.$key.sim_meta.0.ocr_information.sub_district", Arr::get($answers_data, 'home_subdistrict', ''));
                Arr::set($data, "answers.placeorder_request.products.$key.sim_meta.0.ocr_information.zip_code", Arr::get($answers_data, 'home_zipcode', ''));
            }
            
            if (empty($thai_id)) return $data;

            self::uploadImageS3OcrConsent('ocr_consent/'.$thai_id.'_liveness', $image_liveness);
            self::uploadImageS3OcrConsent('ocr_consent/'.$thai_id.'_card_image', $image_front);
            self::uploadImageS3OcrConsent('ocr_consent/'.$thai_id.'_card_face', $image_front_face);

        } catch (\Exception $e) {
            LogService::writeServiceLog(
                "OrderService::checkOcrConsent",
                json_encode_unicode([$data, $creditok_data]),
                json_encode_unicode(["line" => $e->getLine(), "message" => $e->getMessage(), "class" => get_class($e), "file" => $e->getFile(), "code" => $e->getCode()]),
                Carbon::now()->format('d/m/Y H:i:s')
            );
        }

        return $data;
    }
    
    /**
     * getExtensionImage
     *
     * @param string $data
     * @return string
     */
    public static function getExtensionImage(string $data): string
    {
        if (empty($data)) return '.jpg';

        $media_type = [
            'image/gif'  => '.gif',
            'image/jpeg' => '.jpg',
            'image/png'  => '.png',
        ];

        $image_information = getimagesizefromstring(base64_decode($data));
        $extension         = array_get($image_information, 'mime');

        return array_get($media_type, $extension, '.jpg');
    }

    /**
     * uploadImageS3OcrConsent
     *
     * @param string $path
     * @param string $image_base64
     * @return boolean
     */
    public static function uploadImageS3OcrConsent(string $path, string $image_base64): string
    {
        if (empty($image_base64)) return true;

        $response = AwsService::uploadS3([$path => $image_base64], 'PRE2POST');

        return (Arr::get($response, 0) == 200);
    }

    /**
     * setOcrConsentInfo
     *
     * @param array $data
     * @return array
     */
    public static function setOcrConsentInfo(array $data = [])
    {
        $answers          = Arr::get($data, 'answers');
        $image_front      = Arr::get($data, 'image_front', '');
        $image_front_face = Arr::get($data, 'image_front_face', '');
        $image_liveness   = Arr::get($data, 'image_liveness', '');
        $answers_data     = array_column($answers, 'value', 'question');
        $thai_id          = Arr::get($answers_data, 'national_id');

        if (!self::checkConditionConsent($answers_data)) return [];

        self::uploadImageS3OcrConsent('ocr_consent/'.$thai_id.'_liveness', Arr::get($data, 'image_liveness', ''));
        self::uploadImageS3OcrConsent('ocr_consent/'.$thai_id.'_card_image', Arr::get($data, 'image_front', ''));
        self::uploadImageS3OcrConsent('ocr_consent/'.$thai_id.'_card_face', Arr::get($data, 'image_front_face', ''));

        $ocr_consent = [
            "kyc_image_liveness" => $thai_id.'_liveness'. self::getExtensionImage($image_liveness),
            "kyc_card_image"     => $thai_id.'_card_image'. self::getExtensionImage($image_front),
            "kyc_card_face"      => $thai_id.'_card_face'. self::getExtensionImage($image_front_face),
            "ocr_information"    => [
                "thai_id"         => $thai_id,
                "laser_id"        => Arr::get($answers_data, 'laser_id'),
                "birth_date"      => str_replace('-', '/', Arr::get($answers_data, 'date_of_birth')),
                "issue_date"      => str_replace('-', '/', Arr::get($answers_data, 'date_of_issue')),
                "expiry_date"     => str_replace('-', '/', Arr::get($answers_data, 'date_of_expiration')),
                "title"           => Arr::get($answers_data, 'prefix', ''),
                "txt_title_other" => Arr::get($answers_data, 'txt_title_other', ''),
                "first_name"      => Arr::get($answers_data, 'first_name', ''),
                "middle_name"     => Arr::get($answers_data, 'middle_name', ''),
                "last_name"       => Arr::get($answers_data, 'last_name', ''),
                "title_en"        => self::setDataEmptyString(Arr::get($answers_data, 'prefix_en', '')),
                "first_name_en"   => self::setDataEmptyString(Arr::get($answers_data, 'first_name_en', '')),
                "middle_name_en"  => self::setDataEmptyString(Arr::get($answers_data, 'middle_name_en', '')),
                "last_name_en"    => self::setDataEmptyString(Arr::get($answers_data, 'last_name_en', '')),
                "email"           => Arr::get($answers_data, 'email', ''),
                "telephone"       => Arr::get($answers_data, 'mobile_no', ''),
                "address"         => Arr::get($answers_data, 'home_address', ''),
                "swine"           => Arr::get($answers_data, 'home_swine', ''),
                "village"         => Arr::get($answers_data, 'home_village', ''),
                "building"        => Arr::get($answers_data, 'home_building', ''),
                "floor"           => Arr::get($answers_data, 'home_floor', ''),
                "room_number"     => Arr::get($answers_data, 'home_room_number', ''),
                "alley"           => Arr::get($answers_data, 'home_alley', ''),
                "street_name"     => Arr::get($answers_data, 'home_street', ''),
                "province"        => Arr::get($answers_data, 'home_province', ''),
                "district"        => Arr::get($answers_data, 'home_district', ''),
                "sub_district"    => Arr::get($answers_data, 'home_subdistrict', ''),
                "zip_code"        => Arr::get($answers_data, 'home_zipcode', ''),
            ] 
        ];

        return $ocr_consent;
    }

    /**
     * checkSimOnlyEppOcrConsent
     * @param $data array
     * @return array
     */
    public function checkSimOnlyEppOcrConsent(array $data): array
    {      
        $products = Arr::get($data, 'products', []);
        $sim_data = array_column($products, 'sim_meta');

        if (empty($sim_data)) return $data;

        foreach (Arr::get($data, 'products', []) as $key => $product) {
            $campaign_type = Arr::get($product, 'sim_meta.0.campaign_type');
            $ekyc_hash     = Arr::get($product, 'sim_meta.0.ekyc_hash');

            if ($campaign_type !== 'sim_only_epp' && empty($ekyc_hash)) continue;

            $creditok_data = CreditokService::getStatus(new Request(), $ekyc_hash);
            $creditok_data = Arr::get($creditok_data, '1', []);
            $answers_data  = array_column(Arr::get($creditok_data, 'answers', []), 'value', 'question');

            Arr::set($data, "ocr_consent", false);

            if (!self::checkConditionConsent($answers_data)) break;

            Arr::set($data, "ocr_consent", true);

            $image_front      = Arr::get($creditok_data, 'image_front', '');
            $image_front_face = Arr::get($creditok_data, 'image_front_face', '');
            $image_liveness   = Arr::get($creditok_data, 'image_liveness', '');
            $national_id      = Arr::get($answers_data, 'national_id');
            $thai_id          = Arr::get($product, 'sim_meta.0.thai_id', $national_id);

            Arr::set($data, "products.$key.sim_meta.0.kyc_image_liveness", 
                $thai_id.'_liveness'. self::getExtensionImage($image_liveness));
            Arr::set($data, "products.$key.sim_meta.0.kyc_card_image", 
                $thai_id.'_card_image'. self::getExtensionImage($image_front));
            Arr::set($data, "products.$key.sim_meta.0.kyc_card_face", 
                $thai_id.'_card_face'. self::getExtensionImage($image_front_face));

            Arr::forget($data, "products.$key.sim_meta.0.ekyc_hash");
            
            Arr::set($data, "products.$key.sim_meta.0.ocr_information.thai_id", $national_id);
            Arr::set($data, "products.$key.sim_meta.0.ocr_information.laser_id", Arr::get($answers_data, 'laser_id'));
            Arr::set($data, "products.$key.sim_meta.0.ocr_information.birth_date", str_replace('-', '/', Arr::get($answers_data, 'date_of_birth')));
            Arr::set($data, "products.$key.sim_meta.0.ocr_information.expiry_date", str_replace('-', '/', Arr::get($answers_data, 'date_of_expiration')));
            Arr::set($data, "products.$key.sim_meta.0.ocr_information.issue_date", str_replace('-', '/', Arr::get($answers_data, 'date_of_issue')));
            Arr::set($data, "products.$key.sim_meta.0.ocr_information.telephone", Arr::get($answers_data, 'mobile_no'));
            Arr::set($data, "products.$key.sim_meta.0.ocr_information.title", Arr::get($answers_data, 'prefix', ''));
            Arr::set($data, "products.$key.sim_meta.0.ocr_information.first_name", Arr::get($answers_data, 'first_name', ''));
            Arr::set($data, "products.$key.sim_meta.0.ocr_information.middle_name", Arr::get($answers_data, 'middle_name', ''));
            Arr::set($data, "products.$key.sim_meta.0.ocr_information.last_name", Arr::get($answers_data, 'last_name', ''));
            Arr::set($data, "products.$key.sim_meta.0.ocr_information.title_en", self::setDataEmptyString(Arr::get($answers_data, 'prefix_en', '')));
            Arr::set($data, "products.$key.sim_meta.0.ocr_information.first_name_en", self::setDataEmptyString(Arr::get($answers_data, 'first_name_en', '')));
            Arr::set($data, "products.$key.sim_meta.0.ocr_information.middle_name_en", self::setDataEmptyString(Arr::get($answers_data, 'middle_name_en', '')));
            Arr::set($data, "products.$key.sim_meta.0.ocr_information.last_name_en", self::setDataEmptyString(Arr::get($answers_data, 'last_name_en', '')));
            Arr::set($data, "products.$key.sim_meta.0.ocr_information.address", Arr::get($answers_data, 'home_address', ''));
            Arr::set($data, "products.$key.sim_meta.0.ocr_information.swine", Arr::get($answers_data, 'home_swine', ''));
            Arr::set($data, "products.$key.sim_meta.0.ocr_information.alley", Arr::get($answers_data, 'home_alley', ''));
            Arr::set($data, "products.$key.sim_meta.0.ocr_information.sub_street", Arr::get($answers_data, 'home_sub_street', ''));
            Arr::set($data, "products.$key.sim_meta.0.ocr_information.street", Arr::get($answers_data, 'home_street', ''));
            Arr::set($data, "products.$key.sim_meta.0.ocr_information.province", Arr::get($answers_data, 'home_province', ''));
            Arr::set($data, "products.$key.sim_meta.0.ocr_information.district", Arr::get($answers_data, 'home_district', ''));
            Arr::set($data, "products.$key.sim_meta.0.ocr_information.sub_district", Arr::get($answers_data, 'home_subdistrict', ''));
            Arr::set($data, "products.$key.sim_meta.0.ocr_information.zip_code", Arr::get($answers_data, 'home_zipcode', ''));
            
            self::uploadImageS3OcrConsent('ocr_consent/'.$thai_id.'_liveness', $image_liveness);
            self::uploadImageS3OcrConsent('ocr_consent/'.$thai_id.'_card_image', $image_front);
            self::uploadImageS3OcrConsent('ocr_consent/'.$thai_id.'_card_face', $image_front_face);

            break;
        }

        return $data;
    }

    /**
     * setDataEmptyString
     * @param $data
     * @return sting
     */
    public static function setDataEmptyString($data)
    {
        return is_null($data) === true ? '' : $data;
    }

    /**
     * checkConditionConsent
     * @param array $data
     * @return boolean
     */
    public static function checkConditionConsent($data)
    {   
        return in_array(strtolower(Arr::get($data, 'consent_flag', '')), ['consent', 'already_consent']) && Arr::get($data, 'dopa_flag', false);
    }
}
