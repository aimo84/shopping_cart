<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <style>
      @font-face {
          font-family: 'Tahoma';
          font-style: normal;
          font-weight: normal;
          src: url("{{ public_path('fonts/Tahoma/Tahoma.ttf') }}") format('truetype');
        }
        @font-face {
            font-family: 'Tahoma';
            font-style: normal;
            font-weight: bold;
            src: url("{{ public_path('fonts/Tahoma/Tahoma Bold.ttf') }}") format('truetype');
        }
        body {
          font-family: 'Tahoma';
        }
      </style>
  </head>
  <body>
    <div style="width: 100%; display: flex; justify-content: space-between;  align-items: center; margin: 16px 0">
      <img src="https://marketing-image-production.s3.amazonaws.com/uploads/8c7c7bd255aba13600836ebacd8c5906669d88c716f368ea3f36b739cc7dd3f121ef1a7eda092c3db21096713b744d23e4d0bfa78f5b90e8479736e28cb17d3f.png" width="120">
      <div>วันที่ {{ $transfer_date }} </div>
    </div>
    <div style="padding: 8px; background-color: #e02020; color: #fff; font-size: 18px;">ใบยืนยันคำขอโอนย้ายเครือข่าย</div>
    <div style="padding: 8px; background-color: #acacac; font-size: 18px;">รายละเอียดผู้ขอโอนย้ายเครือข่าย</div>
    <div style="margin-top: 64px">
      <p>
        ชื่อ-สกุล {{ $fullname }} หมายเลขบัตรประชาชนเลขที่ {{ $thai_id }} <br>
        ประสงค์จะโอนย้ายหมายเลข {{ $mobile_number }} <br>
        เพื่อมาใช้บริการกับบริษัท ทรู มูฟ เอช ยูนิเวอร์แซล คอมมิวนิเคชั่น จำกัด (ทรูมูฟ เอช)<br>
        รหัสแสดงตนเพื่อใช้ในการโอนย้าย ในวันที่ {{ $transfer_date }}
      </p>
      <p>ทั้งนี้ ข้าพเจ้ารับทราบและยอมรับเงื่อนไขการโอนย้ายเลขหมายและสัญญามาตรฐานที่แจ้งไว้ในเว็บไซต์เป็นที่เรียบร้อยแล้ว</p>
    </div>
    <div style="width: 100%; margin-top: 128px;">
      <div style="width: fit-content; margin: 0 16px 24px auto; padding: 16px; border: 1px solid #000; border-radius: 8px; text-align: center;">
        <div style="margin-bottom: 24px;">สำหรับผู้ขอใช้บริการ</div>
        <div>ลงชื่อ</div>
        <div style="margin-bottom: 24px;"><span style="text-decoration: underline;">{{ $fullname }}</span> ผู้ขอใช้บริการ</div>
        <div>วันที่ {{ $transfer_date }}</div>
      </div>
    </div>
  </body>
</html>
