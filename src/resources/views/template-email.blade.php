<html>
  <head>
    <style>
      body {
        margin: 0;
      }

      a {
        color: #0d6efd;
        text-decoration: none;
      }

      table {
        width: 100%;
        color: inherit;
        font-size: inherit;
        border-collapse: collapse;
      }

      .rot {
        margin: auto;
        padding: 24px;
        width: 600px;
        box-sizing: border-box;
        color: #212529;
        font-family: sans-serif;
        font-size: 14px;
        line-height: 1.5;
      }

      .hea {
        margin: 24px 0;
      }

      .hea-g {
        height: 20px;
      }

      .stp {
        margin: 48px 0;
        height: 60px;
        background-image: url(https://i.imgur.com/n1NAwv8.png);
      }

      .stp-d {
        width: 25%;
        text-align: center;
      }

      .stp-i {
        height: 24px;
        background-color: #fff;
        border-radius: 50%;
      }

      .stp-t {
        margin-top: 16px;
        font-size: 12px;
      }

      .stp-n {
        margin: auto;
        width: 24px;
        color: #adb5bd;
        background-color: #dee2e6;
        border-radius: 50%;
        line-height: 24px;
      }

      .det {
        margin: 24px 0;
      }

      .det-m {
        margin-top: 16px;
      }

      .det-q {
        margin: 16px 0 0 16px;
      }

      .trp {
        margin: 24px 0;
      }

      .trp-r {
        border-top: 1px solid #ffc107;
        border-bottom: 1px solid #ffc107;
        background-color: #ffc10725;
      }

      .trp-d {
        padding: 16px;
      }

      .trp-i {
        vertical-align: middle;
        height: 16px;
      }

      .trp-s {
        vertical-align: middle;
        margin-left: 8px;
      }

      .trp-q {
        padding: 16px;
        text-align: right;
      }

      .des {
        margin: 24px 0;
      }

      .ord {
        margin: 24px 0;
      }

      .ord-e {
        border-top: 1px solid #dee2e6;
        border-bottom: 1px solid #dee2e6;
      }

      .ord-p {
        vertical-align: top;
        padding: 16px 0;
      }

      .ord-h {
        color: #ec232c;
      }

      .ord-q {
        padding: 16px 0;
        text-align: right;
      }

      .ord-k {
        font-size: 12px;
      }

      .ord-s {
        margin-top: 8px;
      }

      .ord-t {
        margin-top: 24px;
      }

      .ord-g {
        color: #ffc107;
      }

      .pro {
        margin: 24px 0;
      }

      .pro-e {
        border-top: 1px solid #dee2e6;
        border-bottom: 1px solid #dee2e6;
      }

      .pro-p {
        padding: 16px 0;
      }

      .pro-k {
        font-size: 12px;
      }

      .pro-q {
        vertical-align: top;
        padding: 16px 0;
        text-align: right;
      }

      .pro-l {
        vertical-align: top;
        padding: 8px 0;
      }

      .pro-o {
        vertical-align: top;
        padding: 8px 0;
        text-align: right;
      }

      .pro-y {
        margin-top: 24px;
      }

      .foo {
        padding-top: 24px;
        border-top: 1px solid #dee2e6;
        color: #adb5bd;
        font-size: 12px;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div class='rot'>
      <div class='hea'>
        <img class='hea-g' src='https://i.imgur.com/WUOKsZ9.png'>
      </div>
      <div class='stp'>
        <table>
          <tr>
            <td class='stp-d'>
              <img class='stp-i' src='https://i.imgur.com/4stmFfQ.png'>
              <div class='stp-t'>ทำรายการสั่งซื้อ</div>
            </td>
            <td class='stp-d'>
              <img class='stp-i' src='https://i.imgur.com/4stmFfQ.png'>
              <div class='stp-t'>ชำระเงิน</div>
            </td>
            <td class='stp-d'>
              <div class='stp-n'><b>3</b></div>
              <div class='stp-t'>จัดส่งสินค้า</div>
            </td>
            <td class='stp-d'>
              <div class='stp-n'><b>4</b></div>
              <div class='stp-t'>ยืนยันสินค้า</div>
            </td>
          </tr>
        </table>
      </div>
      <div class='det'>
        <div>สวัสดี คุณ <b>{{ $firstname }} {{ $lastname }}</b></div>
        <div class='det-m'>ตามที่คุณได้ทำรายการสั่งซื้อสินค้า orderNumber ระบบได้รับการชำระเงินค่าสินค้าของคุณเรียบร้อยแล้วและทางร้านค้าจะรีบดำเนินการจัดส่งสินค้าให้คุณ</div>
      </div>
      <div class='des'>
        <div>คุณสามารถดูรายละเอียด หรือตรวจสอบสถานะของรายการสั่งซื้อนี้ได้ที่ <a href='{{ $success_url }}' target='_blank'>รายการสั่งซื้อของคุณ</a></div>
      </div>
      <div class='ord'>
        <table>
          <tr class='ord-e'>
            <td class='ord-p'><b>หมายเลขการสั่งซื้อ <span class='ord-h'> {{ $secure_key }} </span></b></td>
            <td class='ord-q'> {{ $payment_buyer_expired_time }} </td>
          </tr>
          <tr class='ord-k'>
            <td class='ord-p'>
              <div><b>ข้อมูลการจัดส่ง</b></div>
              <div class='ord-s'> สมหมาย ทดสอบ </div>
              <div class='ord-s'> ที่อยู่ </div>
              <div class='ord-s'> email 0811111111 </div>
              <div class='ord-t'><b>ที่อยู่ในการออกใบเสร็จ / ใบกำกับภาษี</b></div>
              <div class='ord-s'> สมหมาย ทดสอบ </div>
              <div class='ord-s'> ที่อยู่ออกใบเสร็จ  </div>
              <div class='ord-s'>เลขประจำตัวผู้เสียภาษี: 1234567890 </div>
            </td>
            <td class='ord-p'>
              <div>สถานะ: <b class='ord-g'>ชำระเงิน</b></div>
              <div class='ord-s'>วิธีชำระเงิน: {{ $payment_method }}</div>
              <div class='ord-s'>จำนวน: {{ $total }} บาท</div>
              <div class='ord-s'>รหัสอ้างอิง 1 (Ref.1): {{ $payment_ref1 }}</div>
              <div class='ord-s'>รหัสอ้างอิง 2 (Ref.2): {{ $payment_ref2 }}</div>
              <div class='ord-s'><a href='{{ $success_url }}' target='_blank'>ดูรายละเอียดการสั่งซื้อ</a></div>
            </td>
          </tr>
        </table>
      </div>
      <div class='pro'>
        <table>
          <tr class='pro-e'>
            <td class='pro-p' colspan='6'><b>รายละเอียดสินค้า</b></td>
          </tr>
          <tr>
            <td class='pro-p'>รหัสสินค้า</td>
            <td class='pro-p'>รายการสินค้า</td>
            <td class='pro-p'>สถานะ</td>
            <td class='pro-q'>ราคาต่อหน่วย<br>(บาท)</td>
            <td class='pro-q'>จำนวน</td>
            <td class='pro-q'>ราคารวม<br>(บาท)</td>
          </tr>
          @foreach($products as $product)
          <tr class='pro-k'>
            <td class='pro-l'>{{ $product['product_id'] }}</td>
            <td class='pro-l'>{{ $product['title'] }}</td>
            <td class='pro-l'>รอการจัดส่ง</td>
            <td class='pro-o'>{{ $product['price'] }}</td>
            <td class='pro-o'>{{ $product['quantity'] }}</td>
            <td class='pro-o'>{{ $product['price'] * $product['quantity'] }}</td>
          </tr>
          @endforeach
        </table>
        <table class='pro-y'>
          <tr>
            <td class='pro-l'></td>
            <td class='pro-o'></td>
            <td class='pro-o'>มูลค่าสินค้า</td>
            <td class='pro-o'><b>{{ $total }}</b> บาท</td>
          </tr>
          <tr>
            <td colspan='2'></td>
            <td class='pro-o'>ค่าจัดส่ง</td>
            <td class='pro-o'><b>0</b> บาท</td>
          </tr>
          <tr>
            <td colspan='2'></td>
            <td class='pro-o'>ราคาสุทธิ</td>
            <td class='pro-o'><b>{{ $total }}</b> บาท</td>
          </tr>
        </table>
      </div>
      <div class='foo'>
        <div>หากคุณมีข้อสงสัยเกี่ยวกับสั่งซื้อหรือบริการ สามารถติดต่อฝ่ายบริการลูกค้าได้ที่ 02-020-2354</div>
        <div>วันทำการ จันทร์ - ศุกร์ (เว้นวันหยุดนักขัตฤกษ์) เวลา 09:00 - 18:00 น.</div>
      </div>
    </div>
  </body>
</html>
