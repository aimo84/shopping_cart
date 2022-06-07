<?php

namespace App\Libraries\RequestData;

use App\Facades\VHora\VerifyService;
use App\Libraries\Validation\VhoraValidation;
use App\Services\WlsService;

class VhoraRequest extends BaseRequest
{
    private $email_info;
    private $pdf_data;

    public function setRequestGetProphecy($input)
    {
        $validation = new VhoraValidation();
        $validation->parameter($input);
        $validation->rulesGetProphecy();
        $validation->exec();

        $this->request = $input;
    }

    public function setRequestResendEmail($input)
    {
        $validation = new VhoraValidation();
        $validation->parameter($input);
        $validation->rulesResendEmail();
        $validation->exec();

        $firstname = \Arr::get($input, 'firstname', '');
        $lastname = \Arr::get($input, 'lastname', '');
        $msisdn = \Arr::get($input, 'select_number');
        $request_place_order = new OrderRequest();

        $this->pdf_data = [
            'firstname' => $firstname,
            'lastname' => $lastname,
            'birthtime' => \Arr::get($input, 'birthtime'),
            'selected_msisdn' => $msisdn,
            'birthdate_thai'  => WlsService::dateToThai(date_format($request_place_order->setFormatBirthDate(\Arr::get($input, 'birthdate')), 'd/m/Y')),
        ];

        $this->email_info = [
            'subject' => "คำทำนายพื้นฐานและเจาะลึกเปิดดวงชะตา ของคุณ $firstname $lastname",
            'to' => \Arr::get($input, 'email'),
            'data' => [
                'firstname' => $firstname,
                'lastname' => $lastname,
                'number' => $msisdn,
            ],
        ];
    }

    public function getEmailInfo()
    {
        return $this->email_info;
    }

    public function getPDFData()
    {
        return $this->pdf_data;
    }
}
