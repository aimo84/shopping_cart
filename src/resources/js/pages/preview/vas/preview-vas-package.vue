<template>
  <div class="page-container text-center">
    <div class="step-container my-2">
      <button-element class="step">
        <img src="/images/icons/personal-info.png" />
        <div class="">ข้อมูลส่วนตัว</div>
      </button-element>
      <button-element class="step">
        <img src="/images/icons/choose-package.png" />
        <div class="">เลือกแพ็กเกจ</div>
      </button-element>
      <button-element class="step not-reached">
        <img src="/images/icons/summary.png" />
        <div class="">สรุปรายการ</div>
      </button-element>
    </div>

    <loading-element v-if="isLoading" />

    <div class="vas-package-container" v-else>
      <clm-vas-tnc ref="tnc" />

      <div class="my-2">
        <div class="personal-info">
          <span class="font-bold">เบอร์โทรทรูมูฟ เอช ของคุณ : </span>
          <span> {{ packageList.mobile_phone || '-' }} </span>
        </div>
        <div class="personal-info" v-if="!isTol && packageList.type === 'prepaid'">
          <span class="font-bold">เงินคงเหลือ : </span>
          <span>
            {{ packageList.prepaid_balance }} บาท <br>
            <span class="warning">{{ prepaidBalanceWarning }}</span>
          </span>
        </div>
        <div class="personal-info" v-if="isTol">
          <span class="font-bold">เบอร์ทรูออนไลน์ของคุณ : </span>
          <span>{{ packageList.circuit_id }}</span>
        </div>
      </div>

    <!-- benefit on top -->
      <clm-benefit-element
        class="clm-benefit"
        type="clmvas-demo"
      ></clm-benefit-element>
    <!-- benefit on top -->

      <template v-for="(packs, index) in packages">
        <div class="table-container" :key="index">
        <div class="table-header">แพ็กเกจเสริม {{ index + 1 }}</div>
          <div class="table table-step1" >
            <table>
              <thead>
               <tr>
                  <th>แพ็กเกจ</th>
                 <th>{{ packageList.type === 'prepaid' ? 'ราคารวมภาษีมูลค่าเพิ่ม' : 'ราคาไม่รวมภาษีมูลค่าเพิ่ม' }}</th>
                 <th>{{ isTol ? 'คิดค่าบริการต่อเนื่องบนใบแจ้งค่าบริการ ทรูออนไลน์' : '' }}</th>
               </tr>
              </thead>
             <tbody>
                <template v-for="(item, key) in packs">
                  <tr :key="`package_${key}`">
                   <td>
                      {{ item.name }}
                      <div class="package_chargetype" v-if="item.chargeType === 'RC'">(แบบต่อเนื่อง ตามรอบบิลของแพ็คเกจหลัก)</div>
                      <div class="package_chargetype" v-if="item.chargeType === 'OC'">(แบบรายครั้ง)</div>
                   </td>
                   <td>{{ item.price }} ฿</td>
                   <td>
                     <button-element @click="nextStep(item.id, index, key)">เลือกแพ็กเกจ</button-element>
                     <div class="tnc" @click="showTnC(item.name)">ข้อกำหนดและเงื่อนไข</div>
                   </td>
                 </tr>
               </template>
              </tbody>
           </table>
         </div>
         </div>
      </template>
      <div v-show="error" class="err-msg text-center my-1">{{ errorMessage }}</div>
    </div>

  </div>
</template>

<script>
  import Button from '@components/button'
  import ClmBenefit from '@components/clm-benefit'
  import Loading from '@components/loading'
  import ClmVasTnc from '../../clm/vas/clm-vas-tnc.vue'

  import Locale from './locale.json'

  import {
    loggerAddon
  } from '@utils/addon'

  import {
    GET_VAS_LIST_PACKAGE_DEMO
  } from '@store/actions.type'

  export default {
    components: {
      'button-element': Button,
      'loading-element': Loading,
      'clm-benefit-element': ClmBenefit,
      'clm-vas-tnc': ClmVasTnc
    },
    props: {
      data: Object
    },
    data: () => ({
      isLoading: true,
      Locale,
      error: false,
      errorMessage: ''
    }),
    computed: {
      isTol () {
        return this.$route.name === 'tolvas'
      },
      locale () {
        if (!this.$i18n || this.$i18n.locale === undefined) return 'TH'
        return this.$i18n.locale.toUpperCase()
      },
      packageList () {
        return this.$store.state.clm.clmVasPackageListDemo
      },
      packages () {
        return this.$store.state.clm.clmVasPackageListDemo.tierBeanList.map((pack) => {
          return pack.offeringList.map((e) => ({
            id: e.campOfferingID,
            chargeType: e.chargeType,
            name: this.isTol ? e.vasDesc : e.convertDesc,
            price: e.chargeAmount ? parseFloat(e.chargeAmount).toFixed(2) : 'N/A',
            disabled: this.isPrepaid ? parseFloat(e.chargeAmount) > parseFloat(this.packageList.prepaid_balance) : false
          })).filter((e) => !e.disabled)
        })
      },
      prepaidBalanceWarning () {
        if (!this.isPrepaid) return ''
        if (this.packages.length === 0) return 'กรุณาเติมเงินเพื่อสั่งซื้อแพ็กเกจ'
      }
    },
    async mounted () {
      this.fetchClmPackages()
    },
    methods: {
      async fetchClmPackages () {
        try {
          const data = {
            campCode: this.data.campid,
            tmvhType: this.$route.query.type
          }
          await this.$store.dispatch(GET_VAS_LIST_PACKAGE_DEMO, {
            id: this.isTol ? 'tol' : 'tmvh',
            data
          })

          this.isLoading = false
        } catch (e) {
          this.isLoading = false
        }
      },
      showTnC (packageName) {
        this.$refs.tnc.packageName = packageName
        this.$refs.tnc.isTol = this.isTol
        this.$refs.tnc.showTermsDialog()
      },
      nextStep (id, index, key) {
        this.data.package.id = id
        this.data.package.tier = index

        const logData = {
          status: 'select',
          selectedCampId: this.data.campid,
          clmPackageData: [
            this.packages[index][key].convertDesc,
            this.packages[index][key].chargeType
          ],
          clmPrice: this.packages[index][key].price,
          clmName: this.packages[index][key].name
        }

        loggerAddon(logData)

        this.$parent.page = 'confirm'
      }
    }
  }
</script>

<style scoped lang="scss" src="./style.scss"></style>
<style lang="scss" scoped>
  .table-container {
    margin-top: 20px;
  }
  .table {

    &.table-step1 th,
    &.table-step1 td {
      color: #808080;
      font-size: 23px;
      line-height: 23px;
    }

    &.table-step1 td:first-child {
      width: 33.33%;
      text-align: center;
      color: #e02020;
      font-weight: 600;
    }

    &.table-step1 td:last-child {
      width: 33.33%;
    }

    &.table-step1 td .tnc {
      color: #48baf8;
      margin-top: 8px;
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .vas-package-container {
    padding: 0 16px 16px;

    &::v-deep .headline {
      margin-bottom: 12px;
    }
  }

  .clm-benefit {
    border: 1px solid #ddd;
    margin-bottom: 12px;

    &::v-deep .camp-bean {
      text-align: center;

      .headline {
        font-size: 2.5rem;
        line-height: 2rem;
      }

      .sub-headline {
        font-size: 1.75rem;
        line-height: 1.8rem;
      }

      img {
        max-width: 400px;
      }
    }
  }

  .camp-bean {
  padding: 1rem;
  text-align: left;
  font-size: 1.5rem;
  line-height: 1.5rem;
  width: 100%;

  img {
    width: 75%;
  }

  .headline {
    font-size: 2rem;

    & :first-child {
      margin-top: .5rem !important;
      margin-bottom: 1.25rem !important;
    }
  }

  .sub-headline {
    & :first-child {
      font-size: 27px;
      margin-top: 1rem;
    }
  }

  .terms {
    & :first-child {
      margin-top: .75rem;
    }
  }
}

  .min-w-100 {
    min-width: 100px;
  }

  @media screen and (max-width: 860px) {
    .table {
      &.table-step1 th:first-child,
      &.table-step1 td:first-child {
        width: 50%;
      }
    }

    .clm-benefit::v-deep {
      .camp-bean {
        .headline {
          font-size: 2rem;
          line-height: 1.7rem;
        }

        .sub-headline {
          font-size: 1.5rem;
          line-height: 1.5rem;
        }
      }
    }
}
</style>
