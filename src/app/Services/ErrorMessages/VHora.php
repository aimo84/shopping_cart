<?php
namespace App\Services\ErrorMessages;

class VHora
{
    /**
     * Get error message VHora
     *
     * @param $status_code
     *
     * @return array
     */
    public function getMessages($status_code)
    {
        $messages = [
            '1001' => [
                'th'  => 'เบอร์นี้ขอ OTP เกิน10ครั้งใน 1 ชั่วโมงแล้วครับ!',
                'en'  => 'เบอร์นี้ขอ OTP เกิน10ครั้งใน 1 ชั่วโมงแล้วครับ!'
            ],
            '1002' => [
                'th'  => 'กรุณากรอกข้อมูลให้ครบถ้วนด้วยนะครับ!',
                'en'  => 'กรุณากรอกข้อมูลให้ครบถ้วนด้วยนะครับ!'
            ],
            '1003' => [
                'th'  => 'กรุณากรอกหมายเลข OTP ให้ถูกต้อง',
                'en'  => 'กรุณากรอกหมายเลข OTP ให้ถูกต้อง'
            ],
            '1004' => [
                'th'  => 'ท่านทำนายครบ 10 ครั้งแล้ว กรุณาใช้เบอร์อื่น เพื่อหาคำทำนายอีกครั้ง หรือกลับมาอีกครั้งในวันพรุ่งนี้นะครับ',
                'en'  => 'ท่านทำนายครบ 10 ครั้งแล้ว กรุณาใช้เบอร์อื่น เพื่อหาคำทำนายอีกครั้ง หรือกลับมาอีกครั้งในวันพรุ่งนี้นะครับ'
            ],
            '1005' => [
                'th'  => 'ขออภัย เนื่องจากมีผู้ให้ความสนใจค้นหาเบอร์ฟันธงเป็นจำนวนมาก กรุณาทำรายการใหม่อีกครั้ง',
                'en'  => 'ขออภัย เนื่องจากมีผู้ให้ความสนใจค้นหาเบอร์ฟันธงเป็นจำนวนมาก กรุณาทำรายการใหม่อีกครั้ง'
            ]
        ];

        return array_get($messages, $status_code, []);
    }
}
