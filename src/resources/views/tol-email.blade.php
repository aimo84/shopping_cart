<html>
  <body style="box-sizing: border-box; font-family: sans-serif; font-size: 14px; line-height: 1.5; color: #212529">
    <div style="padding: 24px; max-width: 680px; margin: auto">
      <div style="text-align: center; font-size: 24px; margin-bottom: 24px"><b>รายการสั่งซื้อ</b></div>
      <div style="width: 100%; text-align: center">
        <img style="width: 100%; max-width: 680px" src="https://i.imgur.com/wJhI3kN.png">
      </div>

      <div style="margin-top: 36px; width: 100%; text-align: center">
        <img width="95px" src="https://i.imgur.com/w5N5TLU.png">
        <div style="font-size: 28px; margin: 24px 0 8px 0"><b>ทำรายการเรียบร้อยแล้ว</b></div>
        <div style="font-size: 18px">ร้านค้าได้รับคำสั่งซื้อของคุณแล้ว หมายเลขการสั่งซื้อ</div>
        <div style="font-size: 24px"><b>{{ $order_no }}</b></div>
        <div style="font-size: 18px">ระบบได้ส่งอีเมลยืนยันการสั่งซื้อให้คุณเรียบร้อย</div>
      </div>

      <div style="margin: 36px 0;">
        <div style="padding: 24px 0; border-top: 1px dashed #dee2e6; font-size: 18px">
            <div style="margin-bottom: 24px">
                <div><b>สรุปรายการสั่งซื้อ</b></div>
                <div style="color: #e4a20f"><b>หมายเลขการสั่งซื้อ: {{ $order_no }}</b></div>
            </div>
            <div style="margin-bottom: 24px">
                <div><b>สถานที่ติดตั้ง</b></div>
                <div style="font-size: 16px">{{ $user_data['firstname'] }} {{ $user_data['lastname'] }}</div>
                <div style="font-size: 16px">{{ $user_data['address'] }}</div>
            </div>
            <div style="margin-bottom: 24px">
                <div><b>ที่อยู่จัดส่งเอกสาร</b></div>
                <div style="font-size: 16px">{{ $user_data['firstname'] }} {{ $user_data['lastname'] }}</div>
                <div style="font-size: 16px">{{ $user_data['address'] }}</div>
            </div>
            <div style="margin-bottom: 24px">
                <div><b>ใบเสร็จ / ใบกำกับภาษี</b></div>
                <div style="font-size: 16px">{{ $user_data['firstname'] }} {{ $user_data['lastname'] }}</div>
                <div style="font-size: 16px">{{ $user_data['address'] }}</div>
            </div>
        </div>

        <table style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: auto auto 24px auto; min-width: 50%; max-width: 480px">
            <tr>
                <td style="width: 120px">
                    <img style="width: 100%" src="<?php echo $product['image_url']; ?>" />
                </td>
                <td style="vertical-align: top; padding-left: 16px">
                    <div><b>{{ $product['description_th'] }}</b></div>
                    <div style="margin-top: 8px"> {{ $product['price'] }} ฿</div>
                </td>
            </tr>
        </table>

        <div style="text-align: center;">
          <a style="background-color: #f9c947; padding: 12px 24px 12px; text-decoration: none; color: black; font-size: 16px; border-radius: 38px; height: 38px; line-height: 38px; margin-top: 8px" href="https://store.truecorp.co.th/files/trueonline-terms.pdf" target="_blank" rel="noopener noreferrer">
            <img style="width: 20px; vertical-align: middle; margin-right: 4px; margin-bottom: 2px;" src="https://marketing-image-production.s3.amazonaws.com/uploads/a606039685c79ec0f286d5f2d1892bee5ecde035ece57b1da8bbe64fb58694ef45a45a8dae64f55a7d159c1e361af03027a7b7ca9098a484fb3d95513447c91c.png" />
            <span style="vertical-align: middle">เงื่อนไขสั่งซื้อ</span>
          </a>
        </div>
    </div>
  </body>
</html>
