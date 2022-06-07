<?php
namespace App\Services;

class ErrorMessageService
{
    public static function getErrorMessageCheckForGPrivilegeArray()
    {
        return [
            "WrongOwner" =>
            [
                "th" => "ขออภัย ไม่พบสิทธิพิเศษตามที่คุณเลือก",
                "en" => "Sorry, the system is unable to find this privilege campaign",
            ],

            "CannotFindPrivilege" =>
            [
                "th" => "ขออภัย ไม่พบสิทธิพิเศษตามที่คุณเลือก",
                "en" => "Sorry, the system is unable to find this privilege campaign",
            ],

            "PrivilegeIsAlreadyUsed" =>
            [
                "th" => "ขออภัย หมายเลขหรือรหัสบัตรประชาชนใช้สิทธิพิเศษไปแล้ว",
                "en" => "Sorry, this service ID or ID card number has already redeemed this privilege.",
            ],

            "SegmentCodeIsNotDefine" =>
            [
                "th" => "ขออภัย ระบุรหัสไม่ถูกต้อง",
                "en" => "Sorry, you have entered an incorrect code.",
            ],

            "DuplicateReceiptNo" =>
            [
                "th" => "ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้",
                "en" => "Sorry, the system cannot process your request at the moment.",
            ],

            "UnknowError" =>
            [
                "th" => "ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้",
                "en" => "Sorry, the system cannot process your request at the moment.",
            ],

            "LogInFail" =>
            [
                "th" => "ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้",
                "en" => "Sorry, the system cannot process your request at the moment.",
            ],

            "CustomerMustUsedCampaignRS003" =>
            [
                "th" => "กรุณาเลือกแคมเปญใหม่อีกครั้ง",
                "en" => "Please select your campaign privilege once again.",
            ],

            "AlreadyUsedPrivilegeCampaignRS003" =>
            [
                "th" => "คุณรับสิทธิพิเศษนี้แล้ว",
                "en" => "You have already redeemed this campaign privilege.",
            ],

            "FullSuspendMSISDN" =>
            [
                "th" => "ขออภัย ไม่สามารถร่วมรายการได้ เนื่องจากหมายเลขของคุณไม่อยู่ในสถานะพร้อมใช้งาน",
                "en" => "Sorry, this service ID is not eligible for the campaign privilege because it is inactive.",
            ],

            "NotMNP1Oct" =>
            [
                "th" => "ขออภัย หมายเลขนี้ไม่ได้ย้ายค่ายตามระเวลาที่กำหนด",
                "en" => "Sorry, this number has not been ported in within the specified timeframe.",
            ],

            "InvalidParameter" =>
            [
                "th" => "ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้",
                "en" => "Sorry, the system cannot process your request at the moment.",
            ],

            "PrivilegeIsAlreadyReserved" =>
            [
                "th" => "ขออภัย หมายเลขหรือรหัสบัตรประชาชนนี้ รับสิทธิพิเศษไปแล้ว",
                "en" => "Sorry, this service ID or ID card number has already redeemed this privilege.",
            ],

            "InvalidProduct" =>
            [
                "th" => "สินค้าที่คุณเลือกไม่ได้เข้าร่วมรายการ",
                "en" => "Your choice of product is not eligible for this campaign privilege.",
            ],

            "InvalidVerifyCondition" =>
            [
                "th" => "ขออภัย ระบุหมายเลขหรือบัตรประชาชนไม่ถูกต้อง",
                "en" => "Sorry, you have entered incorrect/invalid service ID or ID card number.",
            ],

            "NotValidTrueCardCondition" =>
            [
                "th" => "ขออภัย ระบุทรูการ์ดไม่ถูกต้อง",
                "en" => "Sorry, you have entered incorrect True Card number.",
            ],

            "Available for Postpaid RealMove only" =>
            [
                "th" => "ขออภัย ระบุหมายเลขหรือบัตรประชาชนไม่ถูกต้อง",
                "en" => "Sorry, you have entered incorrect/invalid service ID or ID card number.",
            ],

            "Available for Postpaid RealFuture only" =>
            [
                "th" => "ขออภัย ระบุหมายเลขหรือบัตรประชาชนไม่ถูกต้อง",
                "en" => "Sorry, you have entered incorrect/invalid service ID or ID card number.",
            ],

            "Available for Postpaid TMH only" =>
            [
                "th" => "ขออภัย ระบุหมายเลขหรือบัตรประชาชนไม่ถูกต้อง",
                "en" => "Sorry, you have entered incorrect/invalid service ID or ID card number.",
            ],

            "Invalid IMEI" =>
            [
                "th" => "ขออภัย ระบุ IMEI ไม่ถูกต้อง",
                "en" => "Sorry, you have entered incorrect/invalid IMEI.",
            ],

            "InvalidVerifyCondition" =>
            [
                "th" => "ขออภัย ระบุหมายเลขหรือบัตรประชาชนไม่ถูกต้อง",
                "en" => "Sorry, you have entered incorrect/invalid service ID or ID card number.",
            ],

            "Allowed only Prepaid customer" =>
            [
                "th" => "แคมเปญนี้สำหรับลูกค้าเติมเงินเท่านั้น",
                "en" => "This campaign privilege is for mobile prepaid customers only.",
            ],

            "Allowed only Postpaid customer" =>
            [
                "th" => "แคมเปญนี้สำหรับลูกค้ารายเดือนเท่านั้น",
                "en" => "This campaign privilege is for monthly subscribers only.",
            ],

            "Invalid Condition MSISDN is Existing on MCP" =>
            [
                "th" => "ขออภัย หมายเลขของคุณ ไม่สามารถร่วมรายการได้",
                "en" => "Sorry, your service ID is not eligible for this campaign privilege.",
            ],

            "Wrong Amount" =>
            [
                "th" => "ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้",
                "en" => "Sorry, the system cannot process your request at the moment.",
            ],

            "RD-CHECK_TOPUP_DATA_TRM-0099" =>
            [
                "th" => "ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้",
                "en" => "Sorry, the system cannot process your request at the moment.",
            ],

            "Invalid Status Date" =>
            [
                "th" => "ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้",
                "en" => "Sorry, the system cannot process your request at the moment.",
            ],

            "Invalid Owner" =>
            [
                "th" => "ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้",
                "en" => "Sorry, the system cannot process your request at the moment.",
            ],

            "Invalid AccountType" =>
            [
                "th" => "ขออภัย ระบุหมายเลขหรือบัตรประชาชนไม่ถูกต้อง",
                "en" => "Sorry, you have entered incorrect/invalid service ID or ID card number.",
            ],

            "Invalid AccountCategory" =>
            [
                "th" => "ขออภัย ระบุหมายเลขหรือบัตรประชาชนไม่ถูกต้อง",
                "en" => "Sorry, you have entered incorrect/invalid service ID or ID card number.",
            ],

            "Invalid Donor" =>
            [
                "th" => "ขออภัย ระบุหมายเลขหรือบัตรประชาชนไม่ถูกต้อง",
                "en" => "Sorry, you have entered incorrect/invalid service ID or ID card number.",
            ],

            "Invalid Port state or Port sub state" =>
            [
                "th" => "ขออภัย ระบุหมายเลขหรือบัตรประชาชนไม่ถูกต้อง",
                "en" => "Sorry, you have entered incorrect/invalid service ID or ID card number.",
            ],

            "Invalid Proposition" =>
            [
                "th" => "ขออภัย โปรโมขั่นปัจจุบันของคุณไม่สามารถเข้าร่วมรายการได้",
                "en" => "Sorry, your current promotion is not eligible for this campaign privilege.",
            ],

            "Priceplan ไม่ถูกต้องตามเงื่อนไข" =>
            [
                "th" => "ขออภัย แพ็กเก็จปัจจุบันของคุณไม่สามารถเข้าร่วมรายการได้",
                "en" => "Sorry, your current package is not eligible for this campaign privilege.",
            ],

            "InvalidVerifyKey" =>
            [
                "th" => "คุณระบุข้อมูลไม่ถูกต้อง",
                "en" => "Incorrect/invalid data entry.",
            ],

            "Could not open a connection to SQL Server" =>
            [
                "th" => "ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้",
                "en" => "Sorry, the system cannot process your request at the moment.",
            ],

            "NotValidTrueCardCondition" =>
            [
                "th" => "ขออภัย ระบุทรูการ์ดไม่ถูกต้อง",
                "en" => "Sorry, you have entered incorrect True Card number.",
            ],

            "ขออภัยค่ะ ไม่สามารถรับสิทธิได้เนื่องจากไม่พบรายการ Proposition ตามเงื่อนไขที่กำหนด" =>
            [
                "th" => "ไม่พบรายการส่งเสริมการขายทีเลือก",
                "en" => "Sorry, the system cannot find your choice of product/service.",
            ],

            "PricePlan has no data found" =>
            [
                "th" => "ไม่พบโปรโมชั่นที่คุณเลือก",
                "en" => "Sorry, the system cannot find your choice of promotion.",
            ],

            "Invalid Condition Child_MSISDN is not RCrate 50" =>
            [
                "th" => "ขออภัย โปรโมชั่นปัจจุบันของคุณไม่สามารถเข้าร่วมรายการได้",
                "en" => "Sorry, your current promotion is not eligible for this campaign privilege.",
            ],

            "Invalid Condition MainSim Low RC Rate" =>
            [
                "th" => "ขออภัย โปรโมชั่นปัจจุบันของคุณไม่สามารถเข้าร่วมรายการได้",
                "en" => "Sorry, your current promotion is not eligible for this campaign privilege.",
            ],

            "Invalid Condition MainSim High RC Rate" =>
            [
                "th" => "ขออภัย โปรโมชั่นปัจจุบันของคุณไม่สามารถเข้าร่วมรายการได้",
                "en" => "Sorry, your current promotion is not eligible for this campaign privilege.",
            ],

            "FSim aging is not allow" =>
            [
                "th" => "ขออภัย ระบุหมายเลขหรือบัตรประชาชนไม่ถูกต้อง",
                "en" => "Sorry, you have entered incorrect/invalid service ID or ID card number.",
            ],

            "MSISDN is not FSIM or Main Sim" =>
            [
                "th" => "ขออภัย ระบุหมายเลขหรือบัตรประชาชนไม่ถูกต้อง",
                "en" => "Sorry, you have entered incorrect/invalid service ID or ID card number.",
            ],

            "FSim Data Not Found" =>
            [
                "th" => "ขออภัย ระบุหมายเลขหรือบัตรประชาชนไม่ถูกต้อง",
                "en" => "Sorry, you have entered incorrect/invalid service ID or ID card number.",
            ],

            "MSISDN is not FSIM" =>
            [
                "th" => "ขออภัย ระบุหมายเลขหรือบัตรประชาชนไม่ถูกต้อง",
                "en" => "Sorry, you have entered incorrect/invalid service ID or ID card number.",
            ],

            "Child FSim aging is not allow" =>
            [
                "th" => "ขออภัย ระบุหมายเลขหรือบัตรประชาชนไม่ถูกต้อง",
                "en" => "Sorry, you have entered incorrect/invalid service ID or ID card number.",
            ],

            "FSim Main Sim Data Not Found" =>
            [
                "th" => "ขออภัย ระบุหมายเลขหรือบัตรประชาชนไม่ถูกต้อง",
                "en" => "Sorry, you have entered incorrect/invalid service ID or ID card number.",
            ],

            "Invalid Package TVS" =>
            [
                "th" => "ทรูวิชั่นส์ไม่ถูกต้องตามเงื่อนไข",
                "en" => "Your TrueVisions package is not eligible for this campaign privilege.",
            ],

            "Invalid Ownership" =>
            [
                "th" => "ทรูวิชั่นส์ไม่ถูกต้องตามเงื่อนไข",
                "en" => "Your TrueVisions package is not eligible for this campaign privilege.",
            ],

            "Invalid IMEI" =>
            [
                "th" => "ขออภัย ระบุ IMEI ไม่ถูกต้อง",
                "en" => "Sorry, you have entered incorrect/invalid IMEI.",
            ],

            "ไม่สามารถใช้สิทธิได้ เนื่องจากมีการใช้สิทธิ์แล้วในแคมเปญที่ ห้าม มีการขายร่วมกัน" =>
            [
                "th" => "ขออภัย ระบุหมายเลขหรือบัตรประชาชนไม่ถูกต้อง",
                "en" => "Sorry, you have entered incorrect/invalid service ID or ID card number.",
            ],

            "InvalidTOLStartDate" =>
            [
                "th" => "ทรูออนไลน์ไม่ถูกต้องตามเงื่อนไข",
                "en" => "Your TrueOnline package is not eligible for this campaign privilege.",
            ],

            "This number is not allowed to have convergence bundle" =>
            [
                "th" => "ขออภัย ระบุหมายเลขหรือบัตรประชาชนไม่ถูกต้อง",
                "en" => "Sorry, you have entered incorrect/invalid service ID or ID card number.",
            ],

            "MSG-TMV-PRIVILEGE-EXISTING-00001" =>
            [
                "th" => "ขออภัย ไม่สามารถร่วมรายการได้ เนื่องจากหมายเลขของคุณไม่อยู่ในสถานะพร้อมใช้งาน",
                "en" => "Sorry, this service ID is not eligible for this campaign privilege because it is inactive.",
            ],

            "MSG-TMV-PRIVILEGE-EXISTING-00002" =>
            [
                "th" => "ขออภัย โปรโมชั่นปัจจุบันของคุณไม่สามารถเข้าร่วมรายการได้",
                "en" => "Sorry, this service ID is not eligible for this campaign privilege.",
            ],

            "InvalidAgingCondition" =>
            [
                "th" => "ขออภัย โปรโมชั่นปัจจุบันของคุณไม่สามารถเข้าร่วมรายการได้",
                "en" => "Sorry, this service ID is not eligible for this campaign privilege.",
            ],

            "Priceplan ไม่ถูกต้องตามเงื่อนไข" =>
            [
                "th" => "ขออภัย โปรโมชั่นปัจจุบันของคุณไม่สามารถเข้าร่วมรายการได้",
                "en" => "Sorry, this service ID is not eligible for this campaign privilege.",
            ],
        ];
    }

    public static function getErrorMessageCouponArray()
    {
        return [
            "1001" =>
            [
                "th" => "โค้ดส่วนลดนี้หมดอายุแล้ว",
                "en" => "This code has expired.",
            ],
            "1002" =>
            [
                "th" => "กรุณาใส่โค้ดส่วนลดที่ถูกต้อง",
                "en" => "Please enter a correct code.",
            ],
            "1003" =>
            [
                "th" => "กรุณาใส่โค้ดส่วนลดที่ถูกต้อง",
                "en" => "Please enter a correct code.",
            ],
            "1004" =>
            [
                "th" => "โค้ดส่วนลดนี้มีผู้ใช้สิทธิ์เต็มจำนวนแล้ว",
                "en" => "All codes have been claimed.",
            ],
            "1005" =>
            [
                "th" => "คุณใช้โค้ดส่วนลดนี้ไปแล้ว",
                "en" => "This code has been used.",
            ],
        ];
    }

    /**
     * Get error message VHora
     *
     * @param $status_code
     *
     * @return array
     */
    public static function getErrorMessageVHora($status_code)
    {
        $messages = [
            '1001' => [
                'th' => 'OTP > 10 ครั้ง',
                'en' => 'OTP > 10 ครั้ง',
            ],
            '1002' => [
                'th' => 'กรุณากรอกข้อมูลให้ครบถ้วนด้วยนะครับ',
                'en' => 'กรุณากรอกข้อมูลให้ครบถ้วนด้วยนะครับ',
            ],
            '1003' => [
                'th' => 'กรุณากรอกหมายเลข OTP ให้ถูกต้อง',
                'en' => 'กรุณากรอกหมายเลข OTP ให้ถูกต้อง',
            ],
            '1004' => [
                'th' => 'ท่านทำนายครบ 3 ครั้งแล้ว กรุณาใช้เบอร์อื่น เพื่อหาคำทำนายอีกครั้ง หรือกลับมาอีกครั้งในวันพรุ่งนี้นะครับ',
                'en' => 'ท่านทำนายครบ 3 ครั้งแล้ว กรุณาใช้เบอร์อื่น เพื่อหาคำทำนายอีกครั้ง หรือกลับมาอีกครั้งในวันพรุ่งนี้นะครับ',
            ],
        ];

        return array_get($messages, $status_code, []);
    }

    public static function getErrorMessageVerifyOfflineVhora($status_code)
    {
        $messages = [
            101 =>
            [
                "th" => "ขออภัยในความไม่สะดวกเนื่องจากหมายของคุณมีการล็อคด้วยแอปพลิเคชั่น Lock 3 ชั้น ของ กสทช.กรุณาปลดล็อคและทำรายการใหม่อีกครั้ง",
                "en" => "Sorry, an not do the transaction Because your phone number is locked with the NBTC's Lock 3 application. Please unlock it and do it again.",
            ],
            102 =>
            [
                "th" => "ขออภัยในความไม่สะดวก คุณไม่สามารถลงทะเบียนใช้งานได้ กรุณาติดต่อเคาน์เตอร์บริการ",
                "en" => "Sorry, the operation cannot be performed. Please contact our staff for further investigation.",
            ],
            103 =>
            [
                "th" => "ขออภัยในความไม่สะดวก กรุณาตรวจสอบยอดค้าง และติดต่อทรูช็อปเพื่อชำระค่าบริการ",
                "en" => "Sorry, the operation cannot be performed. May be caused by an outstanding service balance. Please check and pay any out (if any) at True Shop.",
            ],
            104 =>
            [
                "th" => "ขออภัยในความไม่สะดวก กรุณาตรวจสอบยอดค้าง และติดต่อทรูช็อปเพื่อชำระค่าบริการ",
                "en" => "Sorry, the operation cannot be performed. May be caused by an outstanding service balance. Please check and pay any out (if any) at True Shop.",
            ],
            105 =>
            [
                "th" => "คุณเปิดบริการครบตามจำนวนแล้วหากต้องการเปิดบริการเพิ่มเติมกรุณาติดต่อเคาน์เตอร์บริการ เพื่อขอ Approve codeก่อนที่จะดำเนินการต่อ",
                "en" => "You have reached the specified limit of mobile service number activations. Please contact True Shop to confirm your request.",
            ],
        ];

        $default_message = [
            [
                "th" => "ขออภัยในความไม่สะดวก คุณไม่สามารถลงทะเบียนใช้งานได้ กรุณาติดต่อเคาน์เตอร์บริการ",
                "en" => "Sorry, the operation cannot be performed. Please contact our staff for further investigation.",
            ],
        ];

        return array_get($messages, $status_code, $default_message);
    }

    public static function getErrorMessagePaySmoothWhiteList($status_code)
    {
        $messages = [
            1 =>
            [
                "th" => "ขออภัย คุณไม่ผ่านเกณฑ์การอนุมัติ ทรู เพย์สมูท",
                "en" => "Your True PaySmooth is rejected.",
            ],
            2 =>
            [
                "th" => "ทรู เพย์สมูทของคุณอยู่ในขั้นตอนการอนุมัติ กรุณารอผลการอนุมัติผ่าน SMS ทุกวันในเวลาทำการ (10.00-20.30 น.)",
                "en" => "Your True Paysmooth is in the approval process. Please wait for the approval result via SMS everyday during business hours (10.00-20.30)",
            ],
            3 =>
            [
                "th" => "กรุณาทำการลงทะเบียนโครงการทรู เพย์สมูทก่อนทำรายการ",
                "en" => "Please register for True PaySmooth before your processing",
            ],
            9 =>
            [
                "th" => "ไม่สามารถดำเนินการได้ในขณะนี้ กรุณาทำรายใหม่อีกครั้งในภายหลัง",
                "en" => "Something went wrong. Please try again later.",
            ],
        ];

        $default_message = [
            [
                "th" => "ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้",
                "en" => "Sorry, the system cannot process your request at the moment.",
            ],
        ];

        return array_get($messages, $status_code, $default_message);
    }
}
