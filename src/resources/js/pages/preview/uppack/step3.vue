<template>
  <div class="page-container text-center">
    <div class="step-container">
      <button-element class="step">
        <img src="/images/icons/personal-info.png" />
        <div class="">ข้อมูลส่วนตัว</div>
      </button-element>
      <button-element class="step">
        <img src="/images/icons/choose-package.png" />
        <div class="">เลือกแพ็กเกจ</div>
      </button-element>
      <button-element class="step">
        <img src="/images/icons/summary.png" />
        <div class="">สรุปรายการ</div>
      </button-element>
    </div>

    <div class="table-header">สรุปแพ็กเกจใหม่</div>

    <loading-element v-if="isLoading" fitHeight />

    <div v-else class="my-1">
      <div class="personal-info">
        <span class="font-bold">Package : </span>
        <span class="color-red">{{ selectedPackage.name }}</span>
      </div>
      <div class="personal-info">
        <span class="font-bold">Voice : </span>
        <span>{{ selectedPackage.voice }}</span>
      </div>
      <div class="personal-info">
        <span class="font-bold">Data : </span>
        <span>{{ selectedPackage.data }}</span>
      </div>
      <div class="personal-info">
        <span class="font-bold">Wifi : </span>
        <span>{{ selectedPackage.wifi }}</span>
      </div>
      <div class="personal-info">
        <span class="font-bold">Price : </span>
        <span class="color-red">{{ selectedPackage.price }}</span>
      </div>
    </div>

    <div class="term-cond">
      <div class="title">Terms and Conditions</div>
      <p class="content">
        เงื่อนไขและรายละเอียดรายการส่งเสริมการขายโครงการ  ทรู สเปเชียล<br>

        1. ข้อเสนอและสิทธิพิเศษต่างๆ ของรายการส่งเสริมการขายโครงการ ทรู สเปเชียล นี้สำหรับลูกค้าผู้ใช้บริการทรูปัจจุบัน “ลูกค้า” ที่ใช้บริการต่างๆ อันได้แก่ บริการอินเทอร์เน็ต ของบริษัท ทรู อินเทอร์เน็ต คอร์ปอเรชั่น จำกัด (“ทรู อินเทอร์เน็ต”), บริการโทรศัพท์เคลื่อนที่ ทรูมูฟ เอช ทั้งแบบรายเดือนและแบบเติมเงิน ของบริษัท ทรู มูฟ เอช ยูนิเวอร์แซล คอมมิวนิเคชั่น จำกัด(“ทรูมูฟ เอช”) และ บริการโทรทัศน์ในระบบบอกรับเป็นสมาชิก จากบริษัท ทรู วิชั่นส์ กรุ๊ป จำกัด (“ทรู วิชั่นส์”) และ/หรือบุคคลที่สาม (ถ้ามี) รวมเรียกว่า “บริษัท”<br>

        2. ข้อเสนอและสิทธิพิเศษต่างๆในรายการส่งเสริมการขายโครงการ  ทรู สเปเชียล นี้จะถูกแบ่งเป็นรายการส่งเสริมการขายย่อยตามประเภทการสมัครบริการในรูปแบบต่อไปนี้<br> 
          - การสมัครเปิดใช้บริการใหม่<br>
          - การสมัครเพิ่มบริการ หรือ การเปลี่ยนแปลงแพ็กเกจที่สูงขึ้น<br>
          - การซื้อบริการเสริมหรือแพ็กเกจเสริมต่างๆ <br>

        โดยข้อเสนอบริการต่างๆ ในรายการส่งเสริมการขายย่อยถือเป็นส่วนหนึ่งตามเงื่อนไขและข้อกำหนดของรายการส่งเสริมการขายต่างๆ ของบริษัท ที่เสนอให้กับบุคคลทั่วไป หรือ ลูกค้าปัจจุบัน ที่ใช้รายการส่งเสริมการขายอื่นนอกจากรายการส่งเสริมการขายโครงการ  ทรู สเปเชียล<br>

        3. การรับข้อเสนอรูปแบบต่างๆ ที่ระบุไว้ในรายการส่งเสริมการขายย่อย อาจมีสิทธิพิเศษเพิ่มเติมและข้อกำหนดแตกต่างกันไป โดยสิทธิพิเศษต่างๆ ลูกค้าจะได้รับต่อเมื่อลูกค้ามีการปฏิบัติตามข้อเสนอที่มีการแจ้งไว้ในสื่อประชาสัมพันธ์แล้วเท่านั้น<br>

        4. ข้อเสนอ และหรือสิทธิพิเศษต่างๆ ของรายการส่งเสริมการขายย่อยในรายการส่งเสริมการขายโครงการ  ทรู สเปเชียลไม่สามารถใช้ร่วมกับรายการส่งเสริมการขาย โปรโมชั่น หรือส่วนลดอื่น ๆ ได้<br>

        5. ข้อเสนอและสิทธิพิเศษ ดังกล่าว เป็นการเสนอระบุให้เฉพาะตัวบุคคล ไม่สามารถโอนสิทธิ์หรือส่งต่อให้กับผู้อื่นได้ เว้นแต่มีการกำหนดไว้เป็นกรณีไป อันได้แก่ การโอนสิทธิ์ส่งต่อให้กับ บุคคลในครอบครัว และบุคคลที่มีการระบุตัวตนชัดเจน<br>

        6. กรณีที่ลูกค้ามีการเปลี่ยนแปลงรายละเอียดการใช้งานที่ไม่เป็นไปตามเงื่อนไขของรายการส่งเสริมการขายย่อยรวมถึงมีค่าบริการค้างชำระ หรือค่าธรรมเนียมใด ๆ ที่เกี่ยวข้องกับการใช้บริการตามบริการแพ็กเกจหลัก จนทำให้เกิดการระงับสัญญาณ หรือกระทำผิดเงื่อนไขของการใช้บริการของ บริษัท สิทธิพิเศษต่างๆ ที่ได้รับเพิ่มจะสิ้นสุดลงทันที<br>

        7. ช่องทางในการประชาสัมพันธ์และ การรับข้อเสนอของลูกค้า ประกอบด้วย ศูนย์บริการข้อมูลลูกค้าทางโทรศัพท์ (Call Center), ทรูช้อป, เว็บไซด์, ข้อความสั้น (SMS), แอพพลิเคชั่นต่างๆ ของบริษัท ซึ่งขึ้นอยู่กับการให้บริการแต่ละประเภทตามรายการส่งเสริมการขายที่กำหนด<br>

        8. ระยะเวลา ของรายการส่งเสริมการขายโครงการ  ทรู สเปเชียล นี้ เริ่มตั้งแต่วันที่ 1 มิถุนายน 2563 ถึงวันที่ 31 ธันวาคม 2563  โดยที่แต่ละรายการส่งเสริมการขายย่อยจะมีเวลาเริ่มต้นและสิ้นสุดไม่เท่ากัน ซึ่งบริษัทจะมีการระบุไว้ในข้อความหรือชิ้นงานโฆษณาประชาสัมพันธ์ตามแต่ละรายการส่งเสริมการขายย่อย<br>

        9. หากลูกค้ากระทำการอันเป็นการอย่างใดอย่างหนึ่งดังต่อไปนี้ บริษัท มีสิทธิในการยกเลิกการให้บริการตามสัญญาได้ทันที<br>
          <span class="ml-1">9.1 กระทำการฝ่าฝืนข้อห้ามในสัญญา: หากลูกค้ากระทำผิดวัตถุประสงค์แห่งสัญญา ให้ถือเป็นการฝ่าฝืนข้อห้ามในสัญญา
          "วัตถุประสงค์แห่งสัญญา": ลูกค้าจะต้อง<br></span>
          <span class="ml-1">(ก.) ใช้บริการตามรายการส่งเสริมการขายนี้เพื่อการสื่อสารเฉพาะตนโดยมีเจตนาสุจริตตามวิธีการใช้ บริการเยี่ยงปกติประเพณีของบุคคลธรรมดาทั่วไปที่จะพึงกระทำเท่านั้น มิใช่เพื่อประโยชน์ หรือสิ่งอื่นใดที่อาจถือเอาประโยชน์ได้ และจะไม่นำบริการไปใช้แสวงหาประโยชน์ไม่ว่าในลักษณะใด ๆ ในเชิงพาณิชย์หรือนำไปให้บริการต่อ<br></span>
          <span class="ml-1">(ข.) ไม่ใช้ ไม่นำบริการมาใช้ ไม่ดัดแปลง หรือไม่กระทำการใดๆ ในเทคโนโลยีหรือระบบหรือสิ่งอื่นใดเพื่อเชื่อมต่อหรือเกี่ยวข้องกับการใช้บริการดังกล่าว รวมทั้งไม่กระทำการ อันมีลักษณะหรือคาดหมายได้หรือ เชื่อได้ว่าจะก่อให้เกิดการผิดศีลธรรมหรือเกิดความเสียหายหรือเกิดความไม่เป็นธรรมต่อบริษัท หรือบุคคลอื่นใด ทั้งในทางตรงและทางอ้อม หรือไม่ทำการรบกวน หรือก่อความไม่สะดวก หรือเป็นอันตรายต่อเครือข่าย หรือทำให้ประสิทธิภาพการปฏิบัติงานของเครือข่ายหรือส่วนใดๆ ของเครือข่าย เกิดความขัดข้องไม่เป็นไปตามปกติ<br></span>
          <span class="ml-1">(ค.) ลูกค้าจะโอนสิทธิการใช้บริการตามสัญญานี้ให้แก่บุคคลอื่นก่อนครบกำหนดระยะเวลาตามสัญญามิได้ เว้นแต่จะได้รับความยินยอมจากบริษัท<br></span>

          <span class="ml-1">9.2 กระทำการที่มีเหตุผลอันเชื่อได้ว่าลูกค้าทุจริตหรือมีการปลอมแปลงเอกสารในการสมัครใช้หรือรับข้อเสนอของบริการหรือมีพฤติกรรมฉ้อฉลในการใช้บริการหรือนำบริการไปใช้โดยผิดกฎหมาย<br></span>

        10. บริษัท มีสิทธิในการแก้ไข เปลี่ยนแปลง หรือยกเลิกข้อกำหนดและเงื่อนไขใดๆ โดยจะแจ้งให้ทราบล่วงหน้าผ่านช่องทางตามที่บริษัท พิจารณาเห็นสมควร และเว้นแต่จะได้ระบุไว้โดยแจ้งชัดเป็นอย่างอื่น กรณีข้อกำหนดและเงื่อนไขการใช้บริการข้างต้นของโครงการนี้ ขัดหรือแย้งกับข้อกำหนดของเงื่อนไขฉบับเต็ม ให้ยึดตามข้อกำหนดและเงื่อนไขฉบับเต็มเป็นหลัก<br>
        11. รายการส่งเสริมการขายนี้อยู่ภายใต้เงื่อนไขที่บริษัทกำหนด ลูกค้าจะต้องศึกษาข้อมูลเพิ่มเติมก่อนเลือกใช้บริการที่ www.truemoveh.com หรือ ทรูมูฟ เอช แคร์ โทร 1242 หรือสอบถามพนักงานขาย<br>
      </p>
    </div>

    <loading-element v-if="isLoading" fitHeight />

    <div v-show="!isLoading" class="footer-container">
      <div v-if="error" class="footer-actions">
        <div class="err-msg text-center my-1">
          {{ errorMessage }}
        </div>
      </div>
      <div class="footer-actions">
        <button-element class="bg-secondary" @click="goBack">ย้อนกลับ</button-element>
      </div>
    </div>

    <div v-show="!isLoading" class="bottom-actions-container my-2">
      <div v-if="error" class="footer-actions">
        <div class="err-msg text-center my-1">
          {{ errorMessage }}
        </div>
      </div>
      <div class="footer-actions">
        <button-element class="bg-secondary" @click="goBack">ย้อนกลับ</button-element>
      </div>
    </div>
  </div>
</template>

<script>
  import Input from '@components/input'
  import Button from '@components/button'
  import Content from './content.json'
  import Loading from '@components/loading'

  import {
    GET_LIST_PACKAGE_DEMO
  } from '@store/actions.type'

  import {
    getCLMQueries
  } from '@utils/common'

  export default {
    components: {
      'input-element': Input,
      'button-element': Button,
      'loading-element': Loading,
    },
    data: () => ({
      isLoading: true,
      Content,
      error: false,
      errorMessage: ''
    }),
    computed: {
      campId () {
        const queries = Object.keys(this.$route.query);
        const parameter = getCLMQueries(queries)
        if (!parameter) return ''
        return this.$route.query[parameter];
      },
      locale () {
        if (!this.$i18n || this.$i18n.locale === undefined) return 'TH'

        return this.$i18n.locale.toUpperCase()
      },
      selectedPackage () {
        const selectedOffer = localStorage.getItem('selectedOffer')
        return this.$store.state.clm.clmPackageListDemo.tierBeanList ? this.$store.state.clm.clmPackageListDemo.tierBeanList.map((tier) => {
          const offerList = this.$store.state.clm.clmPackageListDemo.moiTierList ? this.$store.state.clm.clmPackageListDemo.moiTierList.offerSummaryList.filter((offer) => {
            if (tier.offeringBeanList.some(e => e.pricePlanCode === offer.offerSummaryInfo[0].offerInfo.offerName)) return true
          }) : []
          return offerList.map((offer) => {
            const fixSpeedData = offer.offerSummaryInfo[0].bundleInfo.data.filter(d => d.dataGroup === 'FIX SPEED' && d.subKey === 'Internet Vol')
            let checkFixSpeed = false
            let fixSpeedWording = Content.packages.fix_speed[this.locale.toLowerCase()]

            if (fixSpeedData.length > 0) {
              checkFixSpeed = true
              if (fixSpeedData[0].maxSpeedUnit === 'Kbps') {
                let result = parseInt(fixSpeedData[0].maxSpeed) / 1024
                if (result >= 1024) {
                  fixSpeedWording += (result / 1024).toString() + ' Gbps'
                } else {
                  fixSpeedWording += result.toString() + ' Mbps'
                }
              } else {
                fixSpeedWording += fixSpeedData[0].maxSpeed + ' ' + fixSpeedData[0].maxSpeedUnit
              }
            }

            return {
              name: offer.offerSummaryInfo[0].offerInfo.offerDescription,
              voice: offer.messageInfo.bundle.voice ? offer.messageInfo.bundle.voice.filter(v => v.languageCode == this.locale)[0]?.message : '-',
              data: checkFixSpeed ? fixSpeedWording : offer.messageInfo.bundle.data.filter(d => d.subKey == 'Internet Vol' && d.languageCode == this.locale)[0]?.message,
              wifi: offer.messageInfo.bundle.data.filter(d => d.subKey == 'WiFi' && d.languageCode == this.locale)[0]?.message,
              price: offer.messageInfo.cost.filter(c => c.languageCode == this.locale)[0]?.message,
              offerName: offer.offerSummaryInfo[0].offerInfo.offerName
            }
          }).find(m => m.offerName === selectedOffer)
        }).find((list) => list !== undefined) : {}
      }
    },
    async mounted () {
      if (!('selectedOffer' in localStorage)) {
        this.$router.push('/uppack?campId=' + this.campId)
      }
      this.fetchClmPackages()
    },
    methods: {
      fetchClmPackages () {
        let data = {
          'campCode': this.campId
        }

        this.$store.dispatch(GET_LIST_PACKAGE_DEMO, data)
          .then((data) => {
            this.isLoading = false
            if (!this.selectedPackage.name) {
              this.$router.push('/uppack?campId=' + this.campId)
            }
          })
          .catch((error) => {
            this.isLoading = false
            this.error = true
            this.errorMessage = error.message[this.$i18n.locale]
            this.$router.push('/uppack?campId=' + this.campId)
          })

        this.isLoading = false
      },
      goBack () {
        this.$router.push({
          name: 'preview-uppack-step2',
          query: {
            campId: this.campId
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .err-msg {
    font-size: 24px !important;
  }

  @media screen and (max-width: 860px) {
    .footer-container {
      .footer-actions {

        button {
          min-width: 50%;
        }
      }
    }
  }
</style>

<style scoped lang="scss" src="./style.scss"></style>