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

    <loading-element v-if="isLoading" fitHeight />
    <div v-else>
    <template v-for="(tier, index) in packages">
      <div class="table-container" :key="index">
      <div class="table-header">แพ็กเกจนำเสนอ {{ index + 1 }}</div>
      <div class="table table-step2">
        <table>
          <thead>
            <tr>
              <th>แพ็กเกจ</th>
              <th>Voice</th>
              <th>Data</th>
              <th>Wifi</th>
              <th>ราคา</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(item, key) in tier">
              <tr :key="`package_${key}`">
                <td class="highlight text-left">{{ item.name }}</td>
                <td class="min-w-100">{{ item.voice }}</td>
                <td class="min-w-100">{{ item.data }}</td>
                <td>{{ item.wifi }}</td>
                <td class="highlight">{{ item.price }}</td>
                <td>
                  <button-element class="select-pack-btn" @click="selectOffer(item.offerName,index, key)">เลือกแพ็กเกจนี้</button-element>
                  <div class="more-detail" @click="openPopup(index, key)">
                    <div>เงื่อนไขรายการส่งเสริมการขาย</div>
                    <div class="detail-container">
                      <div class="topic">รายละเอียดแพ็กเกจ</div>
                    </div>
                  </div>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
      </div>
      </template>
      </div>

      <dialog-element
        ref="popup"
        class="product-detail"
        show-close-button
      >
        <div slot="content">
          <loading-element v-if="isLoading" />
          <div v-else>
            <div class="term-dialog text-left" v-html="termConditionContent"></div>
          </div>
        </div>
      </dialog-element>

      <div v-if="campBean.hasValue" class="mt-4 camp-bean">
        <div class='headline' v-html="campBean.headline"></div>
        <div><img :src="campBean.img" width="100%" /></div>
        <div class='sub-headline' v-html="campBean.subHeadline"></div>
        <div class="mt-15 font-truebold">ข้อกำหนดการรับสิทธิพิเศษ :</div>
        <div class="terms" v-html="campBean.terms"></div>
      </div>

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
  import Dialog from '@components/dialog'

  import {
    GET_LIST_PACKAGE_DEMO
  } from '@store/actions.type'

  import {
    loggerAddon
  } from '@utils/addon'

  import {
    getCLMQueries
  } from '@utils/common'

  export default {
    components: {
      'input-element': Input,
      'button-element': Button,
      'loading-element': Loading,
      'dialog-element': Dialog
    },
    data: () => ({
      isLoading: true,
      Content,
      error: false,
      errorMessage: '',
      campBean: {
        headline: '',
        subHeadline: '',
        img: '',
        terms: '',
        hasValue: false
      },
      packageKey: 0,
      packageIndex: 0
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
      packages () {
        return this.$store.state.clm.clmPackageListDemo.tierBeanList ? this.$store.state.clm.clmPackageListDemo.tierBeanList?.map((tier) => {
          const offerList = this.$store.state.clm.clmPackageListDemo.moiTierList ? this.$store.state.clm.clmPackageListDemo.moiTierList.offerSummaryList?.filter((offer) => {
            if (tier.offeringBeanList.some(e => e.pricePlanCode === offer.offerSummaryInfo[0].offerInfo.offerName)) return true
          }) : []
          return offerList?.map((offer) => {
            const fixSpeedData = offer.offerSummaryInfo[0].bundleInfo.data.filter(d => d.dataGroup === 'FIX SPEED' && d.subKey === 'Internet Vol')
            const termData = offer.offerSummaryInfo[0].termConditionInfo
              ? offer.offerSummaryInfo[0].termConditionInfo.filter(t => t.languageCode == this.locale)
              : []

            let checkFixSpeed = false
            let fixSpeedWording = Content.packages.fix_speed[this.locale.toLowerCase()]

            if (fixSpeedData.length > 0) {
              checkFixSpeed = true
              if (fixSpeedData[0].maxSpeedUnit === 'Kbps') {
                const result = parseInt(fixSpeedData[0].maxSpeed) / 1024
                if (result >= 1024) {
                  fixSpeedWording += (result / 1024).toString() + ' Gbps'
                } else {
                  fixSpeedWording += result.toString() + ' Mbps'
                }
              } else {
                fixSpeedWording += fixSpeedData[0].maxSpeed + ' ' + fixSpeedData[0].maxSpeedUnit
              }
            }

            let term = Content.packages.term_not_found[this.locale.toLowerCase()]
            if (termData.length > 0 && termData[0].termCondition !== '') {
              term = termData[0].termCondition
            }

            return {
              name: offer.offerSummaryInfo[0].offerInfo.offerDescription,
              voice: offer.messageInfo.bundle.voice ? offer.messageInfo.bundle.voice.filter(v => v.languageCode == this.locale)[0]?.message : '-',
              data: checkFixSpeed ? fixSpeedWording : offer.messageInfo.bundle.data.filter(d => d.subKey == 'Internet Vol' && d.languageCode == this.locale)[0]?.message,
              wifi: offer.messageInfo.bundle.data.filter(d => d.subKey == 'WiFi' && d.languageCode == this.locale)[0]?.message,
              price: offer.messageInfo.cost.filter(c => c.languageCode == this.locale)[0]?.message,
              termCondition: term,
              offerName: offer.offerSummaryInfo[0].offerInfo.offerName
            }
          })
        }) : []
      },
      termConditionContent () {
        if (!this.packages.length) {
          return '-'
        }

        let target = null
        if (this.packages[this.packageIndex]) {
          target = this.packages[this.packageIndex][this.packageKey]
        }

        if (!target) {
          return '-'
        }

        return target.termCondition
      }
    },
    async mounted () {
      this.fetchClmPackages()
    },
    methods: {
      async fetchClmPackages () {
        const data = {
          campCode: this.campId
        }
        this.$store.dispatch(GET_LIST_PACKAGE_DEMO, data)
          .then((data) => {
            this.isLoading = false
            if (data.step_3_clm && data.step_3_clm.campaignBeanList.length > 0 && data.step_3_clm.campaignBeanList[0]
              && data.step_3_clm.campaignBeanList[0].knowledgeDetailList && data.step_3_clm.campaignBeanList[0].knowledgeDetailList.length > 0)
            {
              const headlineObj = data.step_3_clm.campaignBeanList[0].knowledgeDetailList.filter(k => k.topic === 'Headline')
              let headline = '-'
              let img = ''

              if (headlineObj.length > 0) {
                headline = headlineObj[0].script
                if (headlineObj[0].knowledgeAttachList && headlineObj[0].knowledgeAttachList.length > 0) {
                  img = headlineObj[0].knowledgeAttachList[0].image
                }
              }

              const subHeadline = data.step_3_clm.campaignBeanList[0].knowledgeDetailList.filter(k => k.topic === 'Sub Headline').length > 0 ? data.step_3_clm.campaignBeanList[0].knowledgeDetailList.filter(k => k.topic === 'Sub Headline')[0].script : '-'
              const terms = data.step_3_clm.campaignBeanList[0].knowledgeDetailList.filter(k => k.topic === 'Term and Conditions').length > 0 ? data.step_3_clm.campaignBeanList[0].knowledgeDetailList.filter(k => k.topic === 'Term and Conditions')[0].script : '-'

              this.campBean = {
                headline,
                subHeadline,
                img,
                terms,
                hasValue: true
              }
            } else {
              this.campBean = {
                ...this.campBean,
                hasValue: false
              }
            }
          })
          .catch((error) => {
            this.isLoading = false
            this.error = true
            this.errorMessage = error[this.$i18n.locale]
            this.$router.push('/preview/uppack?campId=' + this.campId)
          })
      },
      selectOffer (selectedOfferName, index, key) {
        const data = {
          campId: this.campId,
          identity: localStorage.getItem('clm-identity') || '',
          selected_offer: selectedOfferName
        }

        loggerAddon({
          event: 'CLM uppack package',
          status: 'select',
          type: 'UPPACK',
          selectedCampId: this.campId,
          // mobileNumber: this.userData.mobile_number,
          clmPackageData: [
            this.packages[index][key].name,
            this.packages[index][key].offerName,
            this.packages[index][key].voice,
            this.packages[index][key].wifi
          ],
          clmPrice: this.packages[index][key].price
        })

        this.isLoading = true
        localStorage.setItem('selectedOffer', selectedOfferName)
        this.$router.push({
          name: 'preview-uppack-step3',
          query: {
           campId: this.campId
          },
          params: {
            selectedOffer: selectedOfferName
          }
        })
      },
      openPopup (index, key) {
        this.packageIndex = index
        this.packageKey = key
        this.$refs.popup.open()
      },
      goBack () {
        this.$router.push({
          name: 'preview-uppack-step1',
          query: {
            campId: this.campId
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .table-container {
    margin-top: 20px;
  }
  .page-container {
    max-width: min-content;
  }

  .table {
    &.table-step2 thead tr th:first-child,
    &.table-step2 tbody tr td:first-child {
      min-width: 180px;
    }
  }

  .term-dialog {
    & :first-child {
      margin-top: 0;
    }
  }

  .camp-bean {
    padding: 1rem;
    text-align: left;
    font-size: 1.5rem;
    line-height: 1.5rem;
    border: 1px solid #b4b4b4;

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

    & tr td {
      width: 50%;
    }
  }

  .step-container {

    & .step {
      min-width: 100% !important;
      min-height: max-content !important;
    }
  }

  .select-pack-btn {
    width: max-content;
    min-width: fit-content;
    word-break: keep-all;
    padding: 8px 12px;
  }

  .min-w-100 {
    min-width: 100px;
  }

  .mt-15 {
    margin-top: 1.5rem;
  }

  .font-truebold {
    font-family: 'TrueBold';
  }

  @media screen and (max-width: 480px) {
    .page-container {
      min-width: 100%;
    }
  }
</style>

<style scoped lang="scss" src="./style.scss"></style>
