<template>
  <div class="terms">
    <template v-if="$i18n.locale === 'th'">
      <p class="center title"><b>ข้อตกลงยินยอมให้เรียกเก็บผ่านบัญชีบัตรเครดิต </b></p>
      <ol class="main">
        <p>เพื่อชำระค่าบริการและ/หรือหนี้ค่าเครื่องโทรศัพท์เคลื่อนที่/อุปกรณ์พร้อมอุปกรณ์เสริม</p>
        <p>ข้าพเจ้า {{ termData.name }} มี บัตรเครดิตประเภทบัตร {{ termData.brand }} หมายเลข {{ termData.cardNumber }} วันที่บัตรหมดอายุ {{ termData.expire }} </p>
        <p>ชื่อผู้ถือบัตร {{ termData.cardName }} </p>
        <p>โดยข้าพเจ้าและผู้ใช้บริการโทรศัพท์เคลื่อนที่ของบริษัท ทรู มูฟ เอช ยูนิเวอร์แซล คอมมิวนิเคชั่น จำกัด (“ทรู”) ตามคำขอ/สัญญาใช้บริการและ/หรือซื้อสินค้าของทรูและบริษัทที่เกี่ยวข้อง(“ใบสมัคร”) เพื่อทำการซื้อเครื่องโทรศัพท์เคลื่อนที่/อุปกรณ์พร้อมอุปกรณ์เสริม (“เครื่อง”) ภายใต้ข้อตกลงการซื้อขายโทรศัพท์เคลื่อนที่หมายเลข {{ termData.orderID }} ฉบับลงวันที {{ termData.orderDate }} จากบริษัท ทรู ดิส ทริบิวชั่นแอนด์เซลส์ จำกัด (“ผู้ขาย”)</p>
        <p>ข้าพเจ้าตกลง ให้ผู้ขายสามารถโอนสิทธิเรียกร้องในเงินค่าเครื่องในส่วนที่ยังค้างชำระทั้งหมดให้กับ ทรูและ/หรือ บริษัทในเครือของบริษัท ทรู คอร์ปอเรชั่น จำกัด (มหาชน)โดยข้าพเจ้ารับทราบและตกลงยอมรับการโอนสิทธิเรียกร้องดังกล่าว โดยข้าพเจ้าตกลงชำระเงินค่าเครื่องในส่วนที่ยังค้างชำระทั้งหมดคืนให้แก่ ทรูและ/หรือ บริษัทในเครือของบริษัท ทรู คอร์ปอเรชั่น จำกัด (มหาชน)ทันทีโดยไม่มีเงื่อนไขหากข้าพเจ้าไม่ปฏิบัติตามเงื่อนไขการใช้บริการและ/หรือการซื้อเครื่อง</p>
        <p>โดยข้าพเจ้า ยินยอมให้ผู้ขาย ทรูและ/หรือ บริษัทในเครือของบริษัท ทรู คอร์ปอเรชั่น จำกัด (มหาชน)สามารถเรียกเก็บเงินเพื่อชำระค่าบริการโทรศัพท์เคลื่อนที่ที่ข้าพเจ้ามีหน้าที่ต้องชำระเป็นรายเดือนให้กับทรูตามรายการส่งเสริมการขายที่กำหนด และ/หรือหนี้ค่าเครื่องที่ข้าพเจ้าค้างชําระ เนื่องจากกรณีผิดสัญญาใช้บริการและ/หรือซื้อเครื่องที่ข้าพเจ้าได้ทำไว้ ตามรายการส่งเสริมการขายที่กำหนดพร้อมดอกเบี้ยผิดนัดในอัตราร้อยละ 15 ต่อปีนับจากวันที่ผิดนัดจนกว่าจะชำระหนี้ครบถ้วน ข้าพเจ้าตกลงและยินยอมให้เรียกเก็บค่าบริการและ/หรือหนี้ค่าเครื่องที่ข้าพเจ้าค้างชําระพร้อมดอกเบี้ยจากบัญชีบัตรเครดิตของข้าพเจ้าตามที่ระบุไว้ข้างต้นโดยอัตโนมัติ</p>
        <p>การให้ความยินยอมในการเรียกเก็บเงินจากบัตรเครดิต ข้างต้นให้มีผลใช้บังคับได้ทันทีนับแต่วันที่ข้าพเจ้าได้ให้ความยินยอมนี้เป็นต้นไป โดยไม่อาจเพิกถอนได้</p>
      </ol>
    </template>
    <template v-if="$i18n.locale === 'en'">
      <p class="center title"><b>ข้อตกลงยินยอมให้เรียกเก็บผ่านบัญชีบัตรเครดิต </b></p>
      <ol class="main">
        <p>เพื่อชำระค่าบริการและ/หรือหนี้ค่าเครื่องโทรศัพท์เคลื่อนที่/อุปกรณ์พร้อมอุปกรณ์เสริม</p>
        <p>ข้าพเจ้า {{ termData.name }} มี บัตรเครดิตประเภทบัตร {{ termData.brand }} หมายเลข {{ termData.cardNumber }} วันที่บัตรหมดอายุ {{ termData.expire }} </p>
        <p>ชื่อผู้ถือบัตร {{ termData.cardName }} </p>
        <p>โดยข้าพเจ้าและผู้ใช้บริการโทรศัพท์เคลื่อนที่ของบริษัท ทรู มูฟ เอช ยูนิเวอร์แซล คอมมิวนิเคชั่น จำกัด (“ทรู”) ตามคำขอ/สัญญาใช้บริการและ/หรือซื้อสินค้าของทรูและบริษัทที่เกี่ยวข้อง(“ใบสมัคร”) เพื่อทำการซื้อเครื่องโทรศัพท์เคลื่อนที่/อุปกรณ์พร้อมอุปกรณ์เสริม (“เครื่อง”) ภายใต้ข้อตกลงการซื้อขายโทรศัพท์เคลื่อนที่หมายเลข {{ termData.orderID }} ฉบับลงวันที {{ termData.orderDate }} จากบริษัท ทรู ดิส ทริบิวชั่นแอนด์เซลส์ จำกัด (“ผู้ขาย”)</p>
        <p>ข้าพเจ้าตกลง ให้ผู้ขายสามารถโอนสิทธิเรียกร้องในเงินค่าเครื่องในส่วนที่ยังค้างชำระทั้งหมดให้กับ ทรูและ/หรือ บริษัทในเครือของบริษัท ทรู คอร์ปอเรชั่น จำกัด (มหาชน)โดยข้าพเจ้ารับทราบและตกลงยอมรับการโอนสิทธิเรียกร้องดังกล่าว โดยข้าพเจ้าตกลงชำระเงินค่าเครื่องในส่วนที่ยังค้างชำระทั้งหมดคืนให้แก่ ทรูและ/หรือ บริษัทในเครือของบริษัท ทรู คอร์ปอเรชั่น จำกัด (มหาชน)ทันทีโดยไม่มีเงื่อนไขหากข้าพเจ้าไม่ปฏิบัติตามเงื่อนไขการใช้บริการและ/หรือการซื้อเครื่อง</p>
        <p>โดยข้าพเจ้า ยินยอมให้ผู้ขาย ทรูและ/หรือ บริษัทในเครือของบริษัท ทรู คอร์ปอเรชั่น จำกัด (มหาชน)สามารถเรียกเก็บเงินเพื่อชำระค่าบริการโทรศัพท์เคลื่อนที่ที่ข้าพเจ้ามีหน้าที่ต้องชำระเป็นรายเดือนให้กับทรูตามรายการส่งเสริมการขายที่กำหนด และ/หรือหนี้ค่าเครื่องที่ข้าพเจ้าค้างชําระ เนื่องจากกรณีผิดสัญญาใช้บริการและ/หรือซื้อเครื่องที่ข้าพเจ้าได้ทำไว้ ตามรายการส่งเสริมการขายที่กำหนดพร้อมดอกเบี้ยผิดนัดในอัตราร้อยละ 15 ต่อปีนับจากวันที่ผิดนัดจนกว่าจะชำระหนี้ครบถ้วน ข้าพเจ้าตกลงและยินยอมให้เรียกเก็บค่าบริการและ/หรือหนี้ค่าเครื่องที่ข้าพเจ้าค้างชําระพร้อมดอกเบี้ยจากบัญชีบัตรเครดิตของข้าพเจ้าตามที่ระบุไว้ข้างต้นโดยอัตโนมัติ</p>
        <p>การให้ความยินยอมในการเรียกเก็บเงินจากบัตรเครดิต ข้างต้นให้มีผลใช้บังคับได้ทันทีนับแต่วันที่ข้าพเจ้าได้ให้ความยินยอมนี้เป็นต้นไป โดยไม่อาจเพิกถอนได้</p>
      </ol>
    </template>
  </div>

</template>

Terms and Conditions of store.truecorp.co.th To ensure maximum customer satisfaction on https://store.truecorp.co.th, TRUE DISTRIBUTION & SALES CO.,LTD. has the following Terms and condition.1.Warranty Policy The warranties depend on product categories under consideration which are different. Therefore, customers must check warranty details before payment which can be checked from product detail page.New shipment is not allowed.2.Cancellation & Refund Policy The refund in case of an unable shipment will be made with SLAs under conditions as follows:•In case of full payment or pay for installment via credit card from banks issued in Thailand, the refund will be made depending on each bank conditions. The normal SLAs is to refund by next bill.•In case of full payment via True Money Wallet, refund will be made via True Money Wallet within 7-14 days•In case of full payment via debit cards from banks issued in Thailand, the refund will be made within 30-60 days after an alert from Call Center depending on each bank policies.3.Order cancel, change and edit is not allowed in case as follows:•In case of wrong selection of colors, versions and types•In case of changing product price which can be happened including gift voucher which can be occurred such as changing discount or missing discount/ coupon•In case of customer change of mind4.Shipment is not allowed with refund in case as follows:•In case of out of stock products (such as cancel production)•In case of differences between Product price indicated on website and actual price•In case of system error which can occur5.Refunds from excluded conditions is not allowed. Changing policies and conditions can be made without prior notice.6.Shipment Policy•Shipping fee varies depending on each product promotion. Please check shipping fee on product promotion page.•SLAs for shipping is within 2-5 days for BMA and 2-7 days for UPC depending on logistic companies and shipping areas. (Weekend and holidays are not counted).•Shipment is made when customers get confirmed SMS or E-mail after payment. Types of shipment is set by The Company.•Customers cannot change the shipping address after order is made.•Shipment is made in Thailand only. For the three southern provinces (Yala, Pattani, Naradhiwas), SLAs of shipment depends on each province situation.•Due to different shipping policies of each products. Customers can check policies before making a payment on shipping policies in each product details.•With the same order ID, shipping policies can be different leading different SLAs.•Changing policies can be processed without prior notice.7.Privacy Policies Information privacy issues on the Internet are concerned and important for customers. Therefore, personal information management is transparent.Users can visit the company website without a need to prior notice user’s personal information. Web server of the company will keep only domain name only. User’s email is not recorded. Any recorded information will be collected for visiting frequency and visiting medium length of website in order to improve website and its content.Name and address are recorded with prior notice and its objectives of recording. Normally, all information will be kept by the company only in order to manage cases and after-sales service. User’s email can be provided
to well-known companies for marketing reasons which users can set limitation of information providing.In cases of user’s register with any products related to the same company, User information can be used by that registered company in order to propose any user needs and preferences which is called as Cookie. Cookie can also propose customized interesting information for users which will be later kept in user hard disk with notice of recurring visit. User can set browser for prior notice of cookie. It will not be linked to personal information of user while using the company website.Survey can be provided in order to understand user needs and information with prior notice with its objectives. Users can choose whether to complete the survey or not.When users exit from website, please be careful and read all privacy policies of each visiting website that can record user information.This information privacy policies is used with this website only. If users notices any in transparency of website, users can inform to Call Center Tel.02-020-2354 Office hours: Monday to Friday (Except public holidays) 09:00-18:00 hours. or E-mail support@wemall.comRemarks: English wording here above is only translation for convenient to foreign customers to understand the content in the terms and conditions only. If English translation conflicts or differs from Thai, Thai shall be prevailing.

  <script>
  export default {
    props: {
      termData: Object
    }
  }
</script>
<style scoped lang="scss">
.terms {
  font-size: 20px;
  line-height: 20px;

  & > ol {
    padding: 0;
  }

  a {
    color: #37474f;
  }

  p {
    margin-top: 0;
  }

  b {
    font-family: "TrueBold";
  }

  .center {
    text-align: center;
  }

  .title {
    max-width: 320px;
    margin-left: auto;
    margin-right: auto;
  }

  p.no-margin-bottom {
    margin-bottom: 0;
  }

  li.no-bullet {
    &:before {
      opacity: 0;
      position: absolute;
      pointer-events: none;
    }
  }

  ul.dashed {
    list-style-type: none;
    padding-left: 35px;

    & > li {
      text-indent: -5px;
    }

    & > li:before {
      content: "-";
      text-indent: -5px;
      padding-right: 5px;
    }
  }

  .main {
      text-align: left;
  }

  ol.main {
    & > li {
      margin-bottom: 16px;

    }

    & > li:before {
      font-family: "TrueBold";
    }
  }

  ol {
    counter-reset: item;

    & > li {
      display: block;
    }
    & > li:before {
      content: counters(item, ".") ". ";
      counter-increment: item;
    }
  }

  ol.extra {
    padding-left: 40px;
    margin-top: 0;
  }
}

@media screen and (max-width: 860px) {
  .terms ul.dashed {
    padding-left: 20px;
  }
}

@media print {
  body[print] {
    .terms {
      font-size: 14px;
      line-height: 13px;
    }
    ol,
    ol.main {
      & > li {
        margin-bottom: 10px;
      }
    }
  }
}
</style>
