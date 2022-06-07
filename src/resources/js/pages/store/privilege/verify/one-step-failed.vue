<template>
  <div class="result-outer-container">
    <div class="result-container">
      <div class="icon failed">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0V0z" fill="none"/>
          <path stroke="#fff" d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/>
        </svg>
      </div>
      <div class="result-title failed">ขออภัยค่ะ คุณไม่สามารถรับสิทธิพิเศษนี้</div>
      <div class="mnp-step">
        <div class="step-header">ขั้นตอนการย้ายค่ายผ่านช่องทาง Online</div>
        <div class="step">
          <div class="sub-step">
            <div class="icon failed header">1</div>
            <div class="step-title">ขั้นตอนที่ 1 เช็คความพร้อมก่อนย้าย</div>
          </div>
          <div class="sub-step">
            <div class="step-detail">
              <ul>
                <li>ระบบรายเดือน <span>ตรวจสอบไม่มียอดค้างชำระค่าบริการ ไม่อยู่ระหว่างการโอนเปลี่ยนเจ้าของ และไม่ติดสัญญาแพ็กเกจ หรือสัญญาอื่น ๆ กับเครือข่ายเดิม</span></li>
                <li>ระบบเติมเงิน <span>หมายเลขต้องจดทะเบียนภายใต้เลขบัตรประชาชน และชื่อของลูกค้า หากมีเงินที่เหลืออยู่ต้องใช้เงินให้หมดหรือติดต่อเครือข่ายเดิม เนื่องจากการย้ายค่ายจะไม่สามารถโอนเงิน และโอนวันจากเครือข่ายเดิมได้</span></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="step">
          <div class="sub-step">
            <div class="icon failed header">2</div>
            <div class="step-title">ขั้นตอนที่ 2 เลือกแพ็กเกจพิเศษมากมาย หรือเลือกรับสิทธิพิเศษส่วนลดสมาร์ทโฟนตรงใจ</div>
          </div>
        </div>
        <div class="step">
          <div class="sub-step">
            <div class="icon failed header">3</div>
            <div class="step-title">ขั้นตอนที่ 3 เตรียมเอกสารสำหรับย้ายค่าย</div>
          </div>
          <div class="sub-step">
            <div class="step-detail">
                <ul>
                  <li>เบอร์ที่ต้องการย้ายค่าย <span>โดยจดทะเบียนภายใต้เลขบัตรประชาชน และชื่อของลูกค้า</span></li>
                  <li>บัตรประจำตัวประชาชน</li>
                  <li>รหัสย้ายค่าย กด *151* เลขที่บัตรประชาชน # โทรออก รอผลการตรวจสอบ 10 นาที สำหรับลูกค้าชาวต่างชาติ กรุณาพิมพ์ SMS หมายเลขพาสปอร์ตแล้วส่งมาที่เบอร์ 444415 โดยรหัสแสดงตนเพื่อย้ายค่าย 8 หลัก สามารถใช้เพื่อขอดำเนินการย้ายค่ายได้ภายในเวลา 24.00 น. ของวันเดียวกัน กรณีข้ามวันต้องกดขอรหัสแสดงตนใหม่</li>
                  <li>ในกรณีต้องการรับสิทธิ์ส่วนลดสำหรับซื้อเครื่องพร้อมแพ็คเก็จ สามารถแจ้งเจ้าหน้าที่ย้ายค่ายเพื่อมาซื้อเครื่อง</li>
                </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="info">
        <div class="sub-info">
          <div class="info-icon">
            <img src="/images/icons/icon-true-chat.png">
          </div>
          <div class="info-text">
            แชทกับเจ้าหน้าที่ทรู
          </div>
          <div class="info-button">
            <a href="https://galb.truecorp.co.th/iservice/widgetgmsResponsive.html?Product=TMH&User_intent=MNP&Language=TH&SubmitterSourceName=truemoveh&Channel=web&Subject=MNP_Port_In" target="_blank">
              <button-element class="button">Live chat</button-element>
            </a>
          </div>
        </div>

        <div class="sub-info">
          <div class="info-icon">
            <img src="/images/icons/icon-true-care.png">
          </div>
          <div class="info-text">
            โทรหาเจ้าหน้าที่ทรูสโตร์
          </div>
          <div class="info-button">
            <a href="tel:027008855">
              <button-element class="button">โทรเลย</button-element>
            </a>
          </div>
        </div>

        <div class="sub-info">
          <div class="info-icon">
            <img src="/images/icons/icon-true-shop.png">
          </div>
          <div class="info-text">
            ย้ายที่ทรูช้อป/ทรูพาร์ทเนอร์
          </div>
          <div class="info-button">
            <a href="https://iservice.truecorp.co.th/store-locator" target="_blank">
              <button-element class="button">ค้นหาสาขาใกล้บ้าน</button-element>
            </a>
          </div>
        </div>
      </div>

      <div class="result-button-container">
        <button-element
          @click="back()"
          class="button back"
        >{{ Locale.back[$i18n.locale] }}</button-element>
      </div>
    </div>
  </div>
</template>

<script>
  import Button from '@components/button'
  import Locale from './locale.json'

  export default {
    components: {
      'button-element': Button
    },
    data: () => ({
      Locale
    }),
    methods: {
      back () {
        this.$router.push({
          name: 'online-store-detail',
          params: {
            id: this.$route.query.product_id
          },
          query: {
            token: this.$route.query.token,
            paysmooth_token: this.$route.query.paysmooth_token
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .result-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 8px;
    text-align: center;
    font-size: 1.5em;
    max-width: 1100px;
    width: calc(100% - 40px);
    margin: 24px auto;
    padding: 76px 24px 50px 24px;
    font-family: 'Thonburi';

    .icon {
      width: 58px;
      height: 58px;
      border-radius: 50%;
      margin-bottom: 44px;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        fill: #fff;
      }

      &.failed {
        background-color: #ff0000;
        box-shadow: 1px 1px 0 #8e0000
      }

      &.header {
        color: #ffffff;
        font-size: 30px;
        margin-bottom: 0;
        min-width: 58px;
      }
    }

    .result-title {
      font-size: 40px;
      line-height: 40px;
      font-family: 'TrueBold';
      text-align: center;
      max-width: 600px;

      &.success {
        color: #e4a20f;
      }

      &.failed {
        color: #ff0000;
      }
    }

    .result-button-container {
      margin-top: 32px;
      display: flex;

      .button {
        background-color: #ff0000;

        &.back {
          background-color: #666;
        }
      }
    }

    .mnp-step {
      padding: 0 30px 0 30px;
    }

    .step-header {
      font-size: 36px;
      margin: 30px 0px 30px 0px;
      font-family: 'TrueBold';
      text-align: left;
    }

    .step {
      width: 100%;
      padding-bottom: 30px;

      ul {
        margin: 0;
      }
    }

    .sub-step {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }

    .step-title {
      margin-left: 20px;
      text-align: left;
      font-size: 24px;
      font-weight: bold;
      width: 100%;
    }

    .step-detail {
      width: 100%;
      margin-left: 100px;
      text-align: left;
      font-size: 20px;

      li {
        margin-bottom: 10px;
      }
    }

    .info {
      display: flex;
      align-items: center;
      padding-bottom: 30px;
    }

    .sub-info {
      margin: 10px 0 10px 0;
      min-width: 258px;
    }

    .info-icon {
      min-height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .info-text {
      margin-bottom: 10px;
      font-size: 20px;
      font-weight: bold;
    }

    .info-button {
      .button {
        min-width: 160px;
      }
    }

  }

  @media screen and (max-width: 1148px) {
    .result-outer-container {
      padding-top: 24px;
    }
    .result-container {
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 813px) {
    .result-container {
      .icon {
        &.header {
          margin-bottom: 15px;
        }
      }

      .mnp-step {
        padding: 0;
      }

      .step-header {
        text-align: center;
      }

      .sub-step {
        flex-direction: column;
      }

      .step-title {
        margin-left: 0;
      }

      .step-detail {
        margin-left: 0;

        span {
          display: block;
        }
      }

      .info {
        display: unset;
      }

      .sub-info {
        margin: 0 0 50px 0;
      }
    }
  }

  @media screen and (max-width: 640px) {
    .result-container {
      padding: 30px 24px 50px 24px;

      .icon {
        margin-bottom: 16px;
      }

      .result-title {
        font-size: 28px;
        line-height: 30px;
      }

      .step-header {
        font-size: 27px;
      }

      .step-title {
        font-size: 17px;
      }

      .step-detail {
        font-size: 18px;
      }

      .info-text {
        font-size: 17px;
      }
    }
  }
</style>
