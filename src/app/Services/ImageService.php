<?php
namespace App\Services;

use Illuminate\Support\Str;

class ImageService
{
    public static function generateAppForm($data)
    {
        $imagick      = new \Imagick();
        $draw         = new \ImagickDraw();
        $new_filename = Str::uuid()->toString() . '.jpg';
        /* Black text */
        $draw->setFillColor('black');
        /* Font properties */
        $draw->setFont(public_path('fonts/Tahoma/Tahoma Bold.ttf'));
        $draw->setFontSize(28);
        $path = storage_path() . '/imgs';
        $imagick->readImage($path . '/template.png');
        $imagick->annotateImage($draw, 180, 480, 0, array_get($data, 'fullname', ''));
        $imagick->annotateImage($draw, 1150, 480, 0, array_get($data, 'thai_id', ''));
        $imagick->annotateImage($draw, 450, 520, 0, array_get($data, 'mobile_number', ''));
        $imagick->annotateImage($draw, 490, 595, 0, array_get($data, 'transfer_code', ''));
        $imagick->annotateImage($draw, 850, 595, 0, array_get($data, 'transfer_date', ''));
        $imagick->annotateImage($draw, 2550, 90, 0, array_get($data, 'transfer_date', ''));
        $imagick->annotateImage($draw, 2100, 1190, 0, array_get($data, 'fullname', ''));
        $imagick->annotateImage($draw, 2370, 1280, 0, array_get($data, 'transfer_date', ''));
        $imagick->writeImage($path . "/$new_filename");
        $base64_file_images = base64_encode(file_get_contents($path . "/$new_filename"));
        unlink($path . "/$new_filename");

        return $base64_file_images;
    }

    public static function generatePreToPostAppForm($data)
    {
        $imagick      = new \Imagick();
        $draw         = new \ImagickDraw();
        $new_filename = Str::uuid()->toString() . '.jpg';
        /* Black text */
        $draw->setFillColor('black');
        /* Font properties */
        $draw->setFont(public_path('fonts/Tahoma/Tahoma Bold.ttf'));
        $draw->setFontSize(24);
        $path = storage_path() . '/imgs';
        $imagick->readImage($path . '/pre2post-template.jpg');
        $imagick->annotateImage($draw, 190, 315, 0, array_get($data, 'fullname', ''));
        $imagick->annotateImage($draw, 190, 415, 0, array_get($data, 'thai_id', ''));
        $imagick->annotateImage($draw, 400, 603, 0, array_get($data, 'mobile_number', ''));
        $draw->setFontSize(20);
        $imagick->annotateImage($draw, 190, 1565, 0, array_get($data, 'fullname', ''));
        $imagick->annotateImage($draw, 230, 1600, 0, array_get($data, 'transfer_date', ''));
        $draw->setFontSize(18);
        $imagick->annotateImage($draw, 830, 85, 0, array_get($data, 'order_id', ''));
        $imagick->annotateImage($draw, 1010, 65, 0, array_get($data, 'transfer_date', ''));
        $imagick->writeImage($path . "/$new_filename");
        $base64_file_images = base64_encode(file_get_contents($path . "/$new_filename"));

        $result = ['base64' => $base64_file_images];

        $correlation_id = array_get($data, 'correlation_id', '');
        if (!empty($correlation_id)) {
            $saved_image_result = AwsService::uploadS3(['pre2post/' . $correlation_id => $base64_file_images], 'PRE2POST');
            $result['s3_path']  = $saved_image_result;
        }

        unlink($path . "/$new_filename");

        return $result;
    }

    public static function getOrderSyncAppForm($data)
    {
        $is_allow_compression = env("SYNC_ORDER_PDF_IS_ALLOW_COMPRESSION", true); 
        $compress_percent     = env("SYNC_ORDER_PDF_COMPRESSION_PERCENT", 85); //40 or less for less than 2MB
        $font_size            = env("SYNC_ORDER_PDF_FRONT_SIZE", 12); 
        $is_unlink_raw_img    = env("SYNC_ORDER_PDF_IS_DELETE_RAW_IMG", true);

        $uuid           = \Arr::get($data, "tmp_check_result.ekyc_redis.ekyc_hash");
        $new_filename_1 = $uuid . '.jpg';
        $new_filename_2 = $uuid . '_2.jpg';
        $new_filename_3 = $uuid . '_3.jpg';
        $new_filename_4 = $uuid . '_4.jpg';
        $imagick        = new \Imagick();
        $draw           = new \ImagickDraw();
        /* Black text */
        $draw->setFillColor('black');
        /* Font properties */
        $draw->setFont(public_path('fonts/Tahoma/Tahoma.ttf'));
        $draw->setFontSize($font_size);
        $path = storage_path() . '/imgs';
        $imagick->readImage($path . '/TC_True_Application_Form_11Jun_2021_1.jpg'); 

        $image_front = base64_decode(\Arr::get($data, "tmp_check_result.ekyc_redis.ekyc_data.image_front"));
        $overlay     = new \Imagick();
        $overlay->readimageblob($image_front);
        $overlay->scaleImage(484, 308, true);

        $imagick->compositeImage($overlay, \Imagick::COMPOSITE_DEFAULT, 656, 219);

        $title = \Arr::get($data, "tmp_check_result.ekyc_redis.customer_info.title");

        $json_content_finish_placeorder = json_decode(\Arr::get($data, "content_finish_placeorder.1"), true);

        $tmp_array = $json_content_finish_placeorder;

        $main_product_data = [];
        foreach (\Arr::get($json_content_finish_placeorder, "input.request_parameter.products") as $current_product) {
            if ($current_product["product_type"] == "device_bundle_new_customer") {
                $main_product_data = $current_product;
            } else {
                $sim_product_data = $current_product;
            }

        }

        $placeorder_request = \Arr::get($data, "tmp_check_result.ekyc_redis.ekyc_data.additional_data.placeorder_request");
        $sim_meta           = \Arr::get($sim_product_data, "sim_meta.0"); //\Arr::get($placeorder_request, "sim_meta_postpaid.0");

        $fullname = \Arr::get($data, "tmp_check_result.ekyc_redis.customer_info.first_name") . " " . \Arr::get($data, "tmp_check_result.ekyc_redis.customer_info.last_name");

        $products = \Arr::get($placeorder_request, "products");

        $delivery_address = \Arr::get($placeorder_request, "delivery_address");

        $advance_payment = \Arr::get($sim_meta, "advance_payment");


        $thai_id             = \Arr::get($sim_meta, "user_information.thai_id");
        $birth_date          = \Arr::get($sim_meta, "birth_date");
        $thai_id_expire_date = implode("/", [\Arr::get($sim_meta, "user_information.thai_id_expire_day"), \Arr::get($sim_meta, "user_information.thai_id_expire_month"), \Arr::get($sim_meta, "user_information.thai_id_expire_year")]);
        $address             = \Arr::get($sim_meta, "user_information.address");
        $swine               = \Arr::get($sim_meta, "user_information.swine");
        $village             = \Arr::get($sim_meta, "user_information.village");
        $building            = \Arr::get($sim_meta, "user_information.building");
        $floor               = \Arr::get($sim_meta, "user_information.floor");
        $room_number         = \Arr::get($sim_meta, "user_information.room_number");
        $alley               = \Arr::get($sim_meta, "user_information.alley");
        $street_name         = \Arr::get($sim_meta, "user_information.street_name");

        $province     = \Arr::get($delivery_address, "province"); 
        $district     = \Arr::get($delivery_address, "city"); 
        $sub_district = \Arr::get($delivery_address, "district"); 

        $zip_code                  = \Arr::get($sim_meta, "user_information.zip_code");
        $telephone                 = \Arr::get($sim_meta, "user_information.telephone");
        $transaction_mobile_number = \Arr::get($sim_meta, "number");
        $price_plan_name           = \Arr::get($sim_meta, "price_plan.name");
        $price_plan_description    = \Arr::get($sim_meta, "price_plan.description"); 
        $price_plan_code           = \Arr::get($sim_meta, "price_plan.code");
        $current_transaction_date  = date('d', time());
        $current_transaction_month = date('m', time());
        $current_transaction_year  = date('Y', time());

        $contract = \Arr::get($json_content_finish_placeorder, "input.product_detail_from_cart_api_by_product_id." . \Arr::get($sim_product_data, "product_id") . "." . \Arr::get($sim_product_data, "sku") . ".contract"); //"1"; //\Arr::get($json_content_finish_placeorder, "input.product_detail_from_cart_api_by_product_id." . \Arr::get($main_product_data, "product_id"). ".". \Arr::get($main_product_data, "sku")) \Arr::get($main_product_data, "sku") product_id

        $index_pos_x = 1;
        $index_pos_y = 2;
        $index_info  = 0;

        $check_mark         = "√"; //square root
        $annotate_info_list = [
            [$check_mark, 1122, 825], //individual

            [$fullname, 1912, 956],
            ["บัตรประจำตัวประชาชน", 1070, 1056],
            [$thai_id, 593, 1273],
            [$birth_date, 1738, 1275],
            [$thai_id_expire_date, 2279, 1274],
            [$address, 1811, 2233],

            [$street_name, 488, 2315],
            [$province, 2952, 2315],

            [$zip_code, 4223, 2315],
            [$telephone, 1622, 2468],
            [$transaction_mobile_number, 3587, 3373],
            [$price_plan_name, 3415, 3597],
            //sign borrow
            [$check_mark, 3237, 3154], //register truemoveh
            [$check_mark, 3242, 3317], // new cust
            [$fullname, 3398, 5492],
            [$check_mark, 3501, 3959], // pay each month
            [$current_transaction_date, 3353, 5569],
            [$current_transaction_month, 3543, 5569],
            [$current_transaction_year, 3741, 5569],

            [$check_mark, 2468, 4885], // agree TrueWallet

            [$check_mark, 3131, 5776], //truemoveh agree payment
            [$check_mark, 488, 4180], //allow pdpa privacy

            //sign payment
            [$fullname, 1164, 6315],
            [$current_transaction_date, 1159, 6446],
            [$current_transaction_month, 1325, 6446],
            [$current_transaction_year, 1504, 6446],
        ];

        foreach ($annotate_info_list as $tmp_info) {
            $imagick->annotateImage($draw, $tmp_info[$index_pos_x] / 4, $tmp_info[$index_pos_y] / 4, 0, $tmp_info[$index_info]);
        }

        // 294 1467
        $imagick->annotateImage($draw, 294, 1467, 0, $title . " " . $fullname);

        $imagick->annotateImage($draw, 360, 580, 0, $sub_district);
        $imagick->annotateImage($draw, 535, 580, 0, $district);
        $imagick->annotateImage($draw, 310, 351, 0, $check_mark); // marriage status: other
        $imagick->annotateImage($draw, 290, 398, 0, $check_mark); // job: other

        //[$address, 1811, 2233], /4 = 452.75 558.25
        // village building floor room_number
        $village = \Arr::get($sim_meta, "user_information.village");
        $building = \Arr::get($sim_meta, "user_information.building");
        $floor = \Arr::get($sim_meta, "user_information.floor");
        $room_number = \Arr::get($sim_meta, "user_information.room_number");
        $village = !empty($village) ? $village:"-";
        $building = !empty($building) ? $building:"-";
        $floor = !empty($floor) ? $floor:"-";
        $room_number = !empty($room_number) ? $room_number:"-";
        $draw->setFontSize($font_size-2); 

        $thai_str_to_add = $village;

        if (env("SYNC_ORDER_IS_ALLOW_ADDRESS_LENGTH_1", false)) {
            $tmp_thai_str_array = [$building, $floor, $room_number];
            $current_length = self::getThaiStringLength($thai_str_to_add);
            foreach($tmp_thai_str_array as $tmp_thai_str) {
                $str_length_to_add = self::getThaiStringLength($tmp_thai_str);
                if ($current_length + $str_length_to_add <= env("SYNC_ORDER_ADDRESS_LENGTH_1", 30)) {
                    $thai_str_to_add .= "/" . $tmp_thai_str;
                    $current_length += $str_length_to_add;
                } else {
                    break;
                }
                
            }
        } else {
            $thai_str_to_add = "-";
        }

        if(env("SYNC_ORDER_IS_ALLOW_ADDRESS_LENGTH_1_BEGIN", false)) {
            $current_length = self::getThaiStringLength($thai_str_to_add);
            if ($current_length > env("SYNC_ORDER_ADDRESS_LENGTH_1", 30) || $current_length > env("SYNC_ORDER_ADDRESS_LENGTH_2", 30)) {
                $thai_str_to_add = "-";
            }
        }

        $imagick->annotateImage($draw, 635, 558.25, 0, $thai_str_to_add);
        $draw->setFontSize($font_size);
        // moo tee? // swine?
        $moo = \Arr::get($sim_meta, "user_information.swine");
        $moo = !empty($moo) ? $moo:"-";
        $imagick->annotateImage($draw, 852, 558.25, 0, $moo);
        // alley
        $alley = \Arr::get($sim_meta, "user_information.alley");
        $alley = !empty($alley) ? $alley:"-";
        $imagick->annotateImage($draw, 926, 558.25, 0, $alley);
        
        $imagick->annotateImage($draw, 916, 990, 0, "1"); // make payment every month
        
        $draw->setFontSize($font_size-2); 
        $imagick->annotateImage($draw, 281, 1651, 0, env("SYNC_ORDER_PDF_SALE_NUMBER","01074757")); // sale number
        $imagick->annotateImage($draw, 414, 1651, 0, env("SYNC_ORDER_PDF_DEALER_NUMBER","80100474")); // dealer number
        $imagick->annotateImage($draw, 562, 1651, 0, env("SYNC_ORDER_PDF_DEALER_NAME","บริษัท ไวร์เออ แอนด์ ไวร์เลส จำกัด (สาขา WW")); // dealer name
        $draw->setFontSize($font_size);

        if ($title == "นาย") {
            $imagick->annotateImage($draw, 93.5, 240.5, 0, $check_mark);
        } elseif ($title == "นาง") {
            $imagick->annotateImage($draw, 136, 240.5, 0, $check_mark);
        } elseif ($title == "นางสาว") {
            $imagick->annotateImage($draw, 183, 240.5, 0, $check_mark);
        } else {
            $imagick->annotateImage($draw, 247, 240.5, 0, $check_mark);
            $imagick->annotateImage($draw, 340, 240.5, 0, $title);
        }

        $draw->setFontSize($font_size+10);
        $order_id = \Arr::get($json_content_finish_placeorder,"secureKey");
        $imagick->annotateImage($draw, 718, 104, 0, "เลขที่คำขอ $order_id");
        $draw->setFontSize($font_size);

        if ($is_allow_compression) {
            $imagick->setImageCompression(true);
            $imagick->setImageCompression(\Imagick::COMPRESSION_JPEG);
            $imagick->setImageCompressionQuality($compress_percent);
        }
        $imagick->writeImage($path . "/$new_filename_1");
        $imagick->clear();
        $imagick->destroy();

        // start of pg2
        $imagick = new \Imagick();
        $draw    = new \ImagickDraw();
        /* Black text */
        $draw->setFillColor('black');
        /* Font properties */
        $draw->setFont(public_path('fonts/Tahoma/Tahoma.ttf'));
        $draw->setFontSize($font_size);
        $path = storage_path() . '/imgs';
        $imagick->readImage($path . '/TC_True_Application_Form_11Jun_2021_2.jpg'); 


        //$current_transaction_month
        $date_in_thai = WlsService::dateToThai(implode("/", [ltrim($current_transaction_date, '0'), ltrim($current_transaction_month, '0'), $current_transaction_year]));
        $date_in_thai = trim(str_replace("วันที่","", $date_in_thai));

        $annotate_info_list = [
            [$check_mark, 450, 1031], //Individual
            [$date_in_thai, 3880, 893],//transaction date month year
            [$title . $fullname . " บัตรประจำตัวประชาชนเลขที่ " . $thai_id, 721, 1035], // fullname, cardid
            [$transaction_mobile_number, 721, 1580],//[$transaction_mobile_number, 721, 1580], //transaction mobile no
            [$date_in_thai, 762, 1647], //transaction date month year
            [$fullname, 2851, 5108], //fullname

        ];

        foreach ($annotate_info_list as $tmp_info) {
            $imagick->annotateImage($draw, $tmp_info[$index_pos_x] / 4, $tmp_info[$index_pos_y] / 4, 0, $tmp_info[$index_info]);
        }

        $device_price_for_pdf = floatval(\Arr::get($main_product_data, "final_price")) - floatval($advance_payment);
        $annotate_info_list = [
            [number_format($device_price_for_pdf, 2, '.', ','), 242, 538], //250 538
            [number_format(\Arr::get($main_product_data, "compare_at_price"), 2, '.', ','), 436, 538], //other field for debug: compare_at_price,final_price, discount
            [number_format($advance_payment, 2, '.', ','), 539, 614],
            [number_format(\Arr::get($sim_meta, "price_plan.price"), 2, '.', ','), 622, 478],
            [$contract, 165, 463],
        ];
        foreach ($annotate_info_list as $tmp_info) {
            $imagick->annotateImage($draw, $tmp_info[$index_pos_x], $tmp_info[$index_pos_y], 0, $tmp_info[$index_info]);
        }
        //var_dump(["check contract amount = ", \Arr::get($sim_meta, "contract")]);

        $draw->setFontSize($font_size-2);
        
        $imagick->annotateImage($draw, 310, 523, 0, \Arr::get($main_product_data, "sku") . " " . \Arr::get($main_product_data, "title") . " " . \Arr::get($main_product_data, "option"));
        $imagick->annotateImage($draw, 665 / 4, 1907 / 4, 0, $price_plan_description);

        $overlay->scaleImage(465, 261, true);
        $imagick->compositeImage($overlay, \Imagick::COMPOSITE_DEFAULT, 759, 241);

        if ($is_allow_compression) {
            $imagick->setImageCompression(true);
            $imagick->setImageCompression(\Imagick::COMPRESSION_JPEG);
            $imagick->setImageCompressionQuality($compress_percent);
        }

        $imagick->writeImage($path . "/$new_filename_2");
        $imagick->clear();
        $imagick->destroy();
        $overlay->destroy();
        // end of pg2

        // start of pg3
        $imagick = new \Imagick();
        $draw    = new \ImagickDraw();
        /* Black text */
        $draw->setFillColor('black');
        /* Font properties */
        $draw->setFont(public_path('fonts/Tahoma/Tahoma.ttf'));
        $draw->setFontSize($font_size);
        $path = storage_path() . '/imgs';
        $imagick->readImage($path . '/TC_True_Application_Form_11Jun_2021_3.jpg'); 

        $annotate_info_list = [
            //priceplan code
            [$price_plan_code . " : " . $price_plan_description, 1897, 821], //priceplan name
            [implode("/", [$current_transaction_date, $current_transaction_month, $current_transaction_year]), 1258, 983], //transaction date

            [$fullname, 2930, 5188], // fullname
            [$current_transaction_date, 2855, 5324], //transaction date
            [$current_transaction_month, 3178, 5324], //transaction month
            [$current_transaction_year, 3476, 5324], //transaction year

        ];

        foreach ($annotate_info_list as $tmp_info) {
            $imagick->annotateImage($draw, $tmp_info[$index_pos_x] / 4, $tmp_info[$index_pos_y] / 4, 0, $tmp_info[$index_info]);
        }

        $annotate_info_list = [];
        //156, 415 pg 3 contract 345 415 // 445
        $contract_pos_y = 415; //445
        //$contract = 24; // in case you need to check if output table perform properly
        for ($tmp_month = 1; $tmp_month <= intval($contract); $tmp_month++) {
            $annotate_info_list[] = [$tmp_month, 156, $contract_pos_y];
            $annotate_info_list[] = [number_format(\Arr::get($sim_meta, "price_plan.price"), 2, '.', ','), 345, $contract_pos_y];
            $contract_pos_y += 29.25;
        }
        $contract_total = floatval(\Arr::get($sim_meta, "price_plan.price")) *  floatval($contract);
        $annotate_info_list[] = [number_format($contract_total, 2, '.', ','), 345, 1118];

        foreach ($annotate_info_list as $tmp_info) {
            $imagick->annotateImage($draw, $tmp_info[$index_pos_x], $tmp_info[$index_pos_y], 0, $tmp_info[$index_info]);
        }

        if ($is_allow_compression) {
            $imagick->setImageCompression(true);
            $imagick->setImageCompression(\Imagick::COMPRESSION_JPEG);
            $imagick->setImageCompressionQuality($compress_percent);
        }

        $imagick->writeImage($path . "/$new_filename_3");
        $imagick->clear();
        $imagick->destroy();
        // end of pg3

        // start of pg4
        $imagick = new \Imagick();
        $draw    = new \ImagickDraw();
        /* Black text */
        $draw->setFillColor('black');
        /* Font properties */
        $draw->setFont(public_path('fonts/Tahoma/Tahoma.ttf'));
        $draw->setFontSize(28);
        $path = storage_path() . '/imgs';
        $imagick->readImage($path . '/TC_True_Application_Form_11Jun_2021_4.jpg'); 

        if ($is_allow_compression) {
            $imagick->setImageCompression(true);
            $imagick->setImageCompression(\Imagick::COMPRESSION_JPEG);
            $imagick->setImageCompressionQuality($compress_percent);
        }

        $imagick->writeImage($path . "/$new_filename_4");
        $imagick->clear();
        $imagick->destroy();
        // end of pg4

        $correlation_id = array_get($data, 'correlation_id', '');

        $images = [$path . "/$new_filename_1", $path . "/$new_filename_2", $path . "/$new_filename_3", $path . "/$new_filename_4"];

        $pdf = new \Imagick($images);
        $pdf->setImageFormat('pdf');
        $pdf->writeImages($path . '/' . $uuid . '.pdf', true);

        if ($is_unlink_raw_img) {
            unlink($path . "/$new_filename_1");
            unlink($path . "/$new_filename_2");
            unlink($path . "/$new_filename_3");
            unlink($path . "/$new_filename_4");
        }

        $file_path = $path . '/' . $uuid . '.pdf';
        $base64_file_images = base64_encode(file_get_contents($file_path));

        $saved_image_result = AwsService::uploadS3(["auto_sync/app_form/$uuid" => $base64_file_images], 'PRE2POST');
        $result['s3_path']  = $saved_image_result;

        if ($is_unlink_raw_img) {
            unlink($file_path);
        }

        return $result;
    }

    public static function getThaiStringLength($str)
    {
        $str = (self::convertUtf8ToTis620($str));
        $arr = str_split($str);
        $count = 0;
        foreach($arr as $val)
        {
            $ascii = ord($val);
            if(!( $ascii == 209 ||  ($ascii >= 212 && $ascii <= 218 ) || ($ascii >= 231 && $ascii <= 238 )))
                $count += 1;
        }
        return $count;
    }

    public static function convertUtf8ToTis620($string) {
        $str = $string;
        $res = "";
        for ($i = 0; $i < strlen($str); $i++) {
          if (ord($str[$i]) == 224) {
            $unicode = ord($str[$i+2]) & 0x3F;
            $unicode |= (ord($str[$i+1]) & 0x3F) << 6;
            $unicode |= (ord($str[$i]) & 0x0F) << 12;
            $res .= chr($unicode-0x0E00+0xA0);
            $i += 2;
          } else {
            $res .= $str[$i];
          }
        }
        return $res;
      }

}
