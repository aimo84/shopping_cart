<html>
  <body style="margin: 0;">
    <div class="rot" style="margin: auto;padding: 24px;min-width: 600px;box-sizing: border-box;color: #212529;font-family: sans-serif;font-size: 14px;line-height: 1.5;">
      <div class="hea" style="margin: 24px 0;">
        <img class="hea-g" src="https://i.imgur.com/WUOKsZ9.png" style="height: 20px;">
      </div>
      <div style='width: 100%; text-align: center;'>
        @if ($payment_method == "ชำระเงินปลายทาง")
        <img width='100%' src='https://marketing-image-production.s3.amazonaws.com/uploads/7968fd15dbc145d8bde7a6af3203653de50753f3483b03c3151de13b684934b7f8d8e80939495a509762c1a1afa65478a22fe9d23c0410e198092750baccca1f.jpg'>
        @else
        <img width='100%' src='https://marketing-image-production.s3.amazonaws.com/uploads/a637055a86d662934c259b01b6fb3fd7e5c9371079b87f12ee8e49902859e27fbfebd9bc9f8210795a5679a5a7b412a8848b6e1f1f5ad80067a9117cd9b7b341.png'>
        @endif
      </div>
      <div class="det" style="margin: 24px 0;">
        <div>สวัสดี คุณ <b>{{ $firstname }} {{ $lastname }}</b></div>
        @if ($payment_method == "ชำระเงินปลายทาง")
        <div class="det-m" style="margin-top: 16px;">
        ขอบคุณที่ช้อปกับทรู
        </div>
        <div class="det-m" style="margin-top: 16px;">
          ทรูได้รับคำสั่งซื้อของคุณเรียบร้อยแล้ว หมายเลขคำสั่งซื้อ {{ $secure_key }} เราจะดำเนินการจัดเตรียมสินค้า และส่งถึงมือคุณภายใน 2-5 วันทำการในเขตกทม.และปริมณฑล และ 2-7 วันทำการทั่วประเทศ ตามที่คุณได้ทำรายการสั่งซื้อสินค้า
        </div>
        @else
        <div class="det-m" style="margin-top: 16px;">
          ตามที่คุณได้ทำรายการสั่งซื้อสินค้า {{ $secure_key }} ระบบได้รับการชำระเงินค่าสินค้าของคุณเรียบร้อยแล้ว
        @endif
        @if(isset($is_mnp_bundling) && $is_mnp_bundling)
          และกำลังเตรียมจัดส่งสินค้า
        @endif
        </div>
      </div>
      @if(isset($is_mnp_bundling) && $is_mnp_bundling)
      <div class="det" style="margin: 24px 0;">
        <div class="det-m">
          หลังจากคุณได้รับสินค้า กรุณาทำตามคำแนะนำการใช้งาน ดังนี้:
        </div>
      </div>
      <div class="det" style="margin: 24px 0;">
      <div><b>สำหรับเบอร์เดิมที่ทำการย้ายค่าย</b></div>
        <div class="det-m">
          เปลี่ยนมาใช้ซิมทรู เมื่อได้รับ SMS แจ้งผลย้ายค่ายสำเร็จ แล้วกดโทรออกไป
          ยังเลขหมายใดก็ได้ เพื่อเปิดใช้งานซิมก่อน จากนั้นคุณสามารถล็อกอินแอปทรู
          ไอดี และเริ่มใช้งาน<b>แพ็กเกจรับชมความบันเทิง</b>ผ่านแอปได้เลย
        </div>
      </div>
      @endif
      @if(isset($mnp_reference_product_id) && !empty($mnp_reference_product_id))
      <div class="det" style="margin: 24px 0;">
      <div><b>เมื่อท่านได้รับข้อความ SMS ยืนยันการย้ายค่าย ท่านสามารถกลับไปที่หน้าสินค้าเพื่อทำการขอรับสิทธิ์ส่วนลดได้ที่ url ด้านล่างนี้</b></div>
        <div class="det-m">
          <a href='https://store.truecorp.co.th/online-store/item/{{ $mnp_reference_product_id }}'>https://store.truecorp.co.th/online-store/item/{{ $mnp_reference_product_id }}</a>
        </div>
      </div>
      @endif
      <div class="des" style="margin: 24px 0;">
        @if ($payment_method == "ชำระเงินปลายทาง")
        <div>
          เมื่อได้รับสินค้า กรุณาทำการตรวจสอบ และชำระค่าสินค้าเป็นเงินสดกับเจ้าหน้าที่จัดส่ง โดยคุณสามารถเช็กสถานะการจัดส่งได้ 
          <a href='https://store.truecorp.co.th/tracking'>ที่นี่</a>
          </div>
        @else
        <div>
          คุณสามารถตรวจสอบสถานะการจัดส่งของรายการสั่งซื้อนี้ได้ 
          <a href='https://store.truecorp.co.th/tracking'>ที่นี่</a>
          </div>
        @endif
      </div>
      <div class="ord" style="margin: 24px 0;">
        <table style="width: 100%;color: inherit;font-size: inherit;border-collapse: collapse;">
          <tr class="ord-e" style="border-top: 1px solid #dee2e6;border-bottom: 1px solid #dee2e6;">
            <td class="ord-p" style="vertical-align: top;padding: 16px 0;"><b>หมายเลขการสั่งซื้อ <span class="ord-h" style="color: #ec232c;"> {{ $secure_key }} </span></b></td>
            <td class="ord-q" style="padding: 16px 0;text-align: right;"> {{ $payment_buyer_expired_time }} </td>
          </tr>
          <tr class="ord-k" style="font-size: 12px;">
            <td class="ord-p" style="vertical-align: top;padding: 16px 0;">
              <div><b>ข้อมูลการจัดส่ง</b></div>
              <div class="ord-s" style="margin-top: 8px;">{{ ( isset($order_address["delivery_company"]) && $order_address["delivery_company"] != "-" ) ? $order_address["delivery_company"] : $order_address["delivery_firstname"] . ' ' . $order_address["delivery_lastname"] }}</div>
              <div class="ord-s" style="margin-top: 8px;">{{ $order_address["delivery_address_1"] }} {{ $order_address["delivery_address_2"] }} {{ $order_address["delivery_district"] }} {{ $order_address["delivery_city"] }} {{ $order_address["delivery_province"] }} {{ $order_address["delivery_postcode"] }} ประเทศไทย</div>
              <div class="ord-s" style="margin-top: 8px;">อีเมล: {{ $order_address["delivery_email"] }} เบอร์โทรศัพท์:  {{ $order_address["delivery_phone"] }} </div>
              <div class="ord-t" style="margin-top: 24px;"><b>ที่อยู่ในการออกใบเสร็จ / ใบกำกับภาษี</b></div>
              <div class="ord-s" style="margin-top: 8px;">{{ ( isset($order_address["billing_company"]) && $order_address["billing_company"] != "-" ) ? $order_address["billing_company"] : $order_address["billing_firstname"] . ' ' . $order_address["billing_lastname"] }}</div>
              <div class="ord-s" style="margin-top: 8px;">{{ $order_address["billing_address_1"] }} {{ $order_address["billing_address_2"] }} {{ $order_address["billing_district"] }} {{ $order_address["billing_city"] }} {{ $order_address["billing_province"] }} {{ $order_address["billing_postcode"] }} ประเทศไทย</div>
              @if (!($order_address["billing_tax_no"] === null))
                <div class="ord-s" style="margin-top: 8px;">เลขประจำตัวผู้เสียภาษี: {{ $order_address["billing_tax_no"] }}</div>
              @endif
            </td>
            <td class="ord-p" style="vertical-align: top;padding: 16px 0;">
              @if ($payment_method == "ชำระเงินปลายทาง")
              <div>สถานะ: <b class="ord-g" style="color: #ffc107;">รอการชำระเงิน</b></div>
              @else
              <div>สถานะ: <b class="ord-g" style="color: #ffc107;">ชำระเงิน</b></div>
              @endif
              <div class="ord-s" style="margin-top: 8px;">วิธีชำระเงิน: {{ $payment_method }}</div>
              <div class="ord-s" style="margin-top: 8px;">จำนวน: {{ number_format($total, 2) }} บาท</div>
              <div class="ord-s" style="margin-top: 8px;">รหัสอ้างอิง 1 (Ref.1): {{ $payment_ref1 }}</div>
              <div class="ord-s" style="margin-top: 8px;">รหัสอ้างอิง 2 (Ref.2): {{ $payment_ref2 }}</div>
              <div class="ord-s" style="margin-top: 8px;"><a href="{{ $success_url }}" target="_blank" style="color: #0d6efd;text-decoration: none;">ดูรายละเอียดการสั่งซื้อ</a></div>
            </td>
          </tr>
        </table>
      </div>
      <div class="pro" style="margin: 24px 0;">
        <table style="width: 100%;color: inherit;font-size: inherit;border-collapse: collapse;">
          <tr class="pro-e" style="border-top: 1px solid #dee2e6;border-bottom: 1px solid #dee2e6;">
            <td class="pro-p" colspan="6" style="padding: 16px 0;"><b>รายละเอียดสินค้า</b></td>
          </tr>
          <tr>
            <td class="pro-p" style="padding: 16px 0; min-width: 150px;">รหัสสินค้า</td>
            <td class="pro-p" style="padding: 16px 0; min-width: 200px;">รายการสินค้า</td>
            <td class="pro-p" style="padding: 16px 0; min-width: 150px;">สถานะ</td>
            <td class="pro-q" style="vertical-align: top;padding: 16px 0;text-align: right; min-width: 100px;">ราคาต่อหน่วย<br>(บาท)</td>
            <td class="pro-q" style="vertical-align: top;padding: 16px 0;text-align: right; min-width: 100px;">จำนวน</td>
            <td class="pro-q" style="vertical-align: top;padding: 16px 0;text-align: right; min-width: 100px;">ราคารวม<br>(บาท)</td>
          </tr>
          @foreach($products as $product)
          <tr class="pro-k" style="font-size: 12px;">
            <td class="pro-l" style="vertical-align: top;padding: 16px 0;">{{ $product['product_id'] }}</td>
            <td class="pro-l" style="vertical-align: top;padding: 16px 0;">
              {{ $product['title'] }}
              <?php $sim_meta_raw = array_get($product, 'sim_meta', []); ?>
              @if ($sim_meta = gettype($sim_meta_raw) == 'string' ? json_decode($sim_meta_raw, 1) : $sim_meta_raw)
                @foreach($sim_meta as $number)
                  @if (array_get($number, 'number'))
                    <br>{{ array_get($number, 'number') }}
                  @endif
                @endforeach
              @endif
            </td>
            <td class="pro-l" style="vertical-align: top;padding: 16px 0;">รอการจัดส่ง</td>
            <td class="pro-o" style="vertical-align: top;padding: 16px 0;text-align: right;">{{ number_format($product['price'], 2) }}</td>
            <td class="pro-o" style="vertical-align: top;padding: 16px 0;text-align: right;">{{ $product['quantity'] }}</td>
            <td class="pro-o" style="vertical-align: top;padding: 16px 0;text-align: right;">{{ number_format($product['price'] * $product['quantity'], 2) }}</td>
          </tr>
          @endforeach
        </table>
        <table class="pro-y" style="width: 100%;color: inherit;font-size: inherit;border-collapse: collapse;margin-top: 24px;">
          <tr>
            <td class="pro-l" style="vertical-align: top;padding: 8px 0;"></td>
            <td class="pro-o" style="vertical-align: top;padding: 8px 0;text-align: right;"></td>
            <td class="pro-o" style="vertical-align: top;padding: 8px 0;text-align: right;">มูลค่าสินค้า</td>
            <td class="pro-o" style="vertical-align: top;padding: 8px 0;text-align: right;"><b>{{ number_format($total-$shipping_price, 2) }}</b> บาท</td>
          </tr>
          <tr>
            <td colspan="2"></td>
            <td class="pro-o" style="vertical-align: top;padding: 8px 0;text-align: right;">ค่าจัดส่ง</td>
            <td class="pro-o" style="vertical-align: top;padding: 8px 0;text-align: right;"><b>{{ number_format($shipping_price, 2) }}</b> บาท</td>
          </tr>
          <tr>
            <td colspan="2"></td>
            <td class="pro-o" style="vertical-align: top;padding: 8px 0;text-align: right;">ราคาสุทธิ</td>
            <td class="pro-o" style="vertical-align: top;padding: 8px 0;text-align: right;"><b>{{ number_format($total, 2) }}</b> บาท</td>
          </tr>
        </table>
      </div>
      <div class="foo" style="padding-top: 18px;border-top: 1px solid #dee2e6;color: #adb5bd;font-size: 12px;text-align: center;">
        <div style='font-size: 16px; padding-bottom: 18px;'><a href='http://dynamic-cdn.eggdigital.com/HtVMDyIv.pd'>คำถามที่พบบ่อย</a></div>
        <div>หากคุณมีข้อสงสัยเกี่ยวกับสั่งซื้อหรือบริการ สามารถติดต่อฝ่ายบริการลูกค้าได้ที่ 02-700-8855</div>
        <div>วันทำการ จันทร์ - ศุกร์ (เว้นวันหยุดนักขัตฤกษ์) เวลา 09:00 - 18:00 น.</div>
      </div>
    </div>
  </body>
</html>
