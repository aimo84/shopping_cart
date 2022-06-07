<?php
namespace App\Services;

class EKycService
{
    /* formatAnswers example reponse
    **  {
    **      "mobile_no": "0925560795"
    **      "email": "spicydog@gmail.com"
    **      "home_zipcode": "75000"
    **      "date_of_expiration": "02-08-2029"
    **      "national_id": "9667922659910"
    **      "home_address": "133/51 ซ.บางแก้ว ถ.ทางเข้าเมือง ต.แม่กลอง"
    **      "home_province": "สมุทรสงคราม"
    **      "home_district": "เมืองสมุทรสงคราม"
    **      "home_subdistrict": "แม่กลอง"
    **      "date_of_birth": "03-08-1989"
    **      "gender": "ชาย"
    **      "last_name": "เชาว์นิธิ"
    **      "first_name": "เกรียงไกร"
    **      "prefix": "นาย"
    **      "callback_url": null
    **  }
    */
    public static function formatAnswers($answers)
    {
        $customer_info = [];

        if (!empty($answers)) {
            foreach ($answers as $answer) {
                $question = array_get($answer, 'question');
                $value    = array_get($answer, 'value');

                $customer_info[$question] = $value;
            }
        }

        return $customer_info;
    }

}
