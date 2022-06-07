<html>
  <body style="margin: 0;">
    <div class="rot" style="margin: auto;padding: 24px;min-width: 600px;box-sizing: border-box;color: #212529;font-family: sans-serif;font-size: 14px;line-height: 1.5;">
      <div class="hea" style="margin: 24px 0;">
        <img class="hea-g" src="https://i.imgur.com/WUOKsZ9.png" style="height: 20px;">
      </div>
      <div class="det" style="margin: 24px 0;">
        <?php if (!empty($firstname) || !empty($lastname)) { ?>
        <div>เรียน คุณ <b>{{ $firstname }} {{ $lastname }}</b></div>
        <?php } ?>
        <div class="det-m" style="margin-top: 16px;">
          เบอร์ฟันธงหมายเลขโทรศัพท์ {{ $number }}
        </div>
        <div class="det-m" style="margin-top: 16px;">
          บริษัทฯ ขอจัดส่ง คำทำนายพื้นฐานและเจาะลึกเปิดดวงชะตาเฉพาะคุณ โดย อ.ลักษณ์ ราชสีห์ โหร
        </div>
        <div class="det-m" style="margin-top: 16px;">
          ฟันธง ให้ท่านตามไฟล์แนบ
        </div>
      </div> 
      <div class="foo" style="padding-top: 18px;border-top: 1px solid #dee2e6;color: #adb5bd;font-size: 12px;text-align: center;">
        <div style='font-size: 16px; padding-bottom: 18px;'><a href='http://dynamic-cdn.eggdigital.com/HtVMDyIv.pd'>คำถามที่พบบ่อย</a></div>
        <div>หากคุณมีข้อสงสัยเกี่ยวกับสั่งซื้อหรือบริการ สามารถติดต่อฝ่ายบริการลูกค้าได้ที่ 02-700-8855</div>
        <div>วันทำการ จันทร์ - ศุกร์ (เว้นวันหยุดนักขัตฤกษ์) เวลา 09:00 - 18:00 น.</div>
      </div>
    </div>
  </body>
</html>
