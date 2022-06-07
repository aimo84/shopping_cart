<?php
namespace App\Services;

use App\Mail\Email;
use Mail;
use Validator;

class EmailService
{

    public static function sendEmail($template, $info, $email_from = '', $email_name_from = '')
    {
        if (empty($email_from)) {
            $email_from = env('EMAIL_FROM');
        }

        if (empty($email_name_from)) {
            $email_name_from = env('NAME_FROM');
        }

        $validator = Validator::make($info, [
            'subject' => 'required|string',
            'to'      => 'required|email',
            'data'    => 'required|array',
        ]);

        if ($validator->fails()) {
            return $validator->errors()->all();
        }

        Mail::send(new Email($template, $info, $email_from, $email_name_from));

        return null;
    }

}
