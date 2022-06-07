<template>
  <div>
    <loading-element v-if="loading || orderLoading" />
    <div
      class="page-container"
      v-if="!loading"
    >
      <div class="inner-page-container">
        <div class="success-container">
          <div class="success-icon">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" stroke="#fff" />
            </svg>
          </div>
          <div class="success-message">{{ Locale.title[$i18n.locale] }}</div>
          <div class="success-description">{{ Locale.orderreceived[$i18n.locale] }}</div>
          <div class="order-id">{{ data.result.order_id }}</div>
          <div class="success-description">{{ Locale.ordermessage[$i18n.locale] }}</div>
        </div>

        <div class="delivery-container">
          <div class="delivery-description bold title">{{ Locale.ordersummary[$i18n.locale] }}</div>
          <div class="delivery-description bold gold">{{ Locale.ordernumber[$i18n.locale] }} {{ data.result.order_id }}</div>
          <div class="delivery-description bold title">{{ Locale.installation_location[$i18n.locale] }}</div>
          <div class="address">
            <div>{{ data.instl_addr.firstname }} {{ data.instl_addr.lastname }},</div>
            <div class="address-container">{{ installationAddr }}</div>
          </div>
          <div class="delivery-description bold title">{{ Locale.billing_address[$i18n.locale] }}</div>
          <div class="address">
            <div class="address-container">{{ billingAddr }}</div>
          </div>
          <div class="delivery-description bold title">{{ Locale.invoice_address[$i18n.locale] }}</div>
          <div class="address">
            <div class="address-container">{{ invoiceAddr }}</div>
          </div>
        </div>

        <div class="product-container">
          <div class="product">
            <img :src="product.image.url" />
            <div class="info">
              <div class="name">{{ description[$i18n.locale] }}</div>
              <div class="price">{{ product.price }} ฿</div>
            </div>
          </div>
        </div>

        <div class="terms-container">
          <div class="title">ข้อกำหนดและเงื่อนไข</div>
          <p>บริษัทฯ จะทำการคืนเงินค่าสินค้าให้กับลูกค้า ในกรณีที่บริษัทฯ ไม่สามารถจัดส่งสินค้าตามที่ลูกค้าสั่งซื้อได้ โดยระยะเวลาการคืนเงินค่าสินค้า มีรายละเอียดดังนี้</p>
          <br />
          <p>กรณีลูกค้าชำระเงินเต็มจำนวนหรือผ่อนชำระ ตัดผ่านบัตรเครดิตของธนาคารพาณิชย์ที่จดทะเบียนในประเทศไทย บริษัทฯ จะส่งเรื่องขอคืนเงินไปยังธนาคาร โดยการคืนเงินจะขึ้นอยู่กับนโยบายของแต่ละธนาคาร ตามปกติแล้วผู้ถือบัตรจะได้รับเงินคืนในรอบบิลถัดไป</p>
          <p>กรณีลูกค้าชำระเงินเต็มจำนวน ตัดผ่านช่องทาง True Money Wallet จะทำการคืนเงินกลับไปยัง True Money Wallet ที่ลูกค้าใช้ในการชำระเงิน โดยใช้ระยะเวลาประมาณ 7-14 วันทำการ</p>
          <p>กรณีลูกค้าชำระเงินเต็มจำนวน ตัดผ่านบัตรเดบิตของธนาคารพาณิชย์ที่จดทะเบียนในประเทศไทย บริษัทจะส่งเรื่องขอคืนเงินไปยังธนาคาร โดยการคืนเงินจะขึ้นอยู่กับนโยบายของแต่ละธนาคาร ซึ่งจะใช้ระยะเวลาในการคืนเงินตั้งแต่ 30-60 วัน นับจากวันที่ลูกค้าได้รับการแจ้งจาก Call Center</p>
          <br />
          <p>ลูกค้าไม่สามารถดำเนินการยกเลิก เปลี่ยนแปลง แก้ไข รายการสั่งซื้อสินค้า ในกรณีต่างๆ ดังนี้</p>
          <br />
          <p>กรณีที่เกิดขึ้นจากความผิดพลาดในการสั่งซื้อสินค้า ผิดสี, ผิดรุ่น, ผิดประเภท</p>
          <p>กรณีที่เกิดขึ้นจากการเปลี่ยนแปลงของราคาสินค้าที่อาจเกิดขึ้นได้ในอนาคตรวมถึง Gift Voucher ต่างๆ ทุกกรณีที่เกิดขึ้นจากความต้องการใส่ส่วนลดเพิ่มเติม, ลืมใส่ส่วนลด หรือ Coupon</p>
          <p>กรณีที่เกิดขึ้นจากการเปลี่ยนใจ (Change of mind) ของผู้สั่งซื้อสินค้าทุกกรณี</p>
          <br />
          <p>บริษัทฯ จะไม่ดำเนินการจัดส่งสินค้า และต้องทำการคืนเงินเท่านั้น เนื่องจากกรณีต่างๆ ดังนี้</p>
          <br />
          <p>กรณีที่เกิดขึ้นจากสินค้าหมด (เช่น สินค้าหมด Stock, สินค้ายกเลิกการผลิตฯ)</p>
          <p>กรณีที่เกิดขึ้นจากราคาสินค้าที่ระบุทางหน้าเว็บไซต์ไม่ตรงกับราคาที่จำหน่ายจริง</p>
          <p>กรณีที่เกิดขึ้นจากเหตุสุดวิสัย (System Error) ที่อาจเกิดขึ้น</p>
          <br />
          <p>บริษัทฯ ขอสงวนสิทธิ์ในการคืนเงินเกินระยะเวลาที่กำหนด หากเกิดเหตุสุดวิสัยและขอสงวนสิทธิในการเปลี่ยนแปลงเงื่อนไขใดๆ โดยไม่จำต้องแจ้งให้ทราบล่วงหน้า</p>
        </div>

        <div class="button-container">
          <span>
            <button-element
              class="button"
              @click="print"
            >{{ Locale.print[$i18n.locale] }}</button-element>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Button from '@components/button'
  import Loading from '@components/loading'
  import Locale from './locale.json'

  export default {
    components: {
      'button-element': Button,
      'loading-element': Loading
    },
    props: {
      data: Object,
      loading: Boolean
    },
    data: () => ({
      Locale,
      orderLoading: true
    }),
    computed: {
      product () {
        return this.$store.state.trueonline.tolProduct.data
      },
      description () {
        return {
          th: this.product.description_th,
          en: this.product.description_en
        }
      },
      billingAddr () {
        return this.computeAddress('billing_addr')
      },
      invoiceAddr () {
        return this.computeAddress('invoice_addr')
      },
      installationAddr () {
        const addr = this.data.instl_addr
        const addressArr = [
          addr.HOUSE_NO,
          addr.MOO,
          addr.STREET,
          addr.SOI
        ]
        const address = addressArr.filter(e => e).join(' ')
        return `${address}, ${addr.SUB_DISTRICT}, ${addr.DISTRICT}, ${addr.PROVINCE} ${addr.ZIP_CODE} .`
      }
    },
    mounted () {
      if (!this.data.order_form_submitted) {
        this.$router.push(`/trueonline/order/${this.$route.params.id}`)
        return
      }
      window.addEventListener('beforeprint', this.setPrint)
      window.addEventListener('afterprint', this.removePrint)
      this.orderLoading = false
    },
    beforeDestroy () {
      window.removeEventListener('beforeprint', this.setPrint)
      window.removeEventListener('afterprint', this.removePrint)
    },
    methods: {
      print () {
        window.print()
      },
      setPrint () {
        document.body.setAttribute('print', '')
      },
      removePrint () {
        document.body.removeAttribute('print')
      },
      computeAddress (value) {
        const addr = this.data[value]
        const addressArr = [
          addr.houseNo,
          addr.moo,
          addr.streetName,
          addr.soi
        ]
        const address = addressArr.filter(e => e).join(' ')
        return `${addr.name} ${addr.lastname},\n${address},\n${addr.district},\n${addr.city},\n${addr.province} ${addr.postcode}.`
      }
    }
  }
</script>

<style scoped lang="scss" src="./style.scss"></style>
