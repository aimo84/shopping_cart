<?php

namespace App\Mail;

use Illuminate\Mail\Mailable;

class Email extends Mailable
{

    protected $template;
    public $info;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($template, $info, $email_from, $email_name_from)
    {
        $this->template        = $template;
        $this->info            = $info;
        $this->email_from      = $email_from;
        $this->email_name_from = $email_name_from;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $data    = $this->info['data'];
        $subject = $this->info['subject'];
        $to      = $this->info['to'];

        $mail = $this->view($this->template)
                     ->with($data)
                     ->subject($subject)
                     ->from($this->email_from, $this->email_name_from)
                     ->to($to);

        if (isset($this->info['cc'])) {
            $cc = $this->info['cc'];
            $mail->cc($cc);
        }

        if (isset($this->info['attach'])) {
            $attach = $this->info['attach'];
            $mail->attach($attach['path'], [
                'as'   => $attach['name'],
                'mime' => $attach['mime'],
            ]);
        }

        return $mail;
    }
}
