<template>
  <div>
    <template v-if="checkBenefitValue">
    <div v-if="isClmBenefit && campBean.hasValue && showBenefits">
      <div class="camp-bean">
        <div class="headline" v-html="campBean.headline"></div>
        <div><img :src="campBean.img"></div>
        <div class="sub-headline" v-html="campBean.subHeadline"></div>
        <div class="mt-15 font-truebold">
         <a href="javascript:void(0)" @click="showTermsDialog">รายละเอียดเพิ่มเติม</a>
        </div>
     </div>
      <clm-benefit-terms
        ref="dialog"
        :campBean="campBean"
     />
    </div>
    </template>
    <template v-else>
    <div v-if="isClmBenefit && campBean.hasValue">
     <div class="camp-bean">
        <div class="headline" v-html="campBean.headline"></div>
        <div><img :src="campBean.img"></div>
        <div class="sub-headline" v-html="campBean.subHeadline"></div>
        <div class="mt-15 font-truebold">
         <a href="javascript:void(0)" @click="showTermsDialog">รายละเอียดเพิ่มเติม</a>
       </div>
      </div>
     <clm-benefit-terms
        ref="dialog"
        :campBean="campBean"
     />
   </div>
   </template>
  </div>
</template>

<script>
  import ClmBenefitTerms from './clm-benefit-terms'

  import {
    GET_BENEFIT_ON_TOP,
    GET_BENEFIT_ON_TOP_DEMO
  } from '@store/actions.type'

  export default {
    components: {
      'clm-benefit-terms': ClmBenefitTerms
    },
    props: {
      matcode: String,
      productType: String,
      productId: String,
      propocode: String,
      nascode: String,
      type: String,
      externalDialog: Boolean,
      tolProduct: Object,
      value: String,
      promotion: String,
      promotion_type: String,
      campCode: String,
      verifyType: String
    },
    data: () => ({
      isClmBenefit: false,
      campBean: {
        headline: '',
        subHeadline: '',
        img: '',
        terms: '',
        hasValue: false
      },
      offeringBeanList: null,
      subModule: '',
      propocodeList: Array
    }),
    computed: {
      checkBenefitValue () {
        if (this.promotion_type || this.propocode || this.tolProduct) {
          return true
        } else {
          if (this.promotion_type === '') {
            return true
          }
          return false
        }
      },
      showBenefits () {
        if (this.promotion_type) {
          if (this.promotion_type === 'device_bundle_new_customer') {
            return this.subModule === 'NEW_DV_BUNDLE'
          } else if (this.promotion_type === 'promotions') {
            return this.subModule === 'UPPACK_DV_BUNDLE'
          }
        }

        if (this.propocode && this.propocodeList) {
          if (this.propocodeList.length > 0) {
            return this.propocodeList.some(pp => pp === this.propocode)
          } else {
            return false
          }
        }

        if (this.tolProduct) {
          if (this.type === 'demo') {
            return true
          }
          return this.offeringBeanList.includes(this.tolProduct.mkt_code)
        }
        return false
      }
    },
    watch: {
      matcode () {
        if (!this.$store.state.clm.clmBenefitOnTop || !this.$store.state.clm.clmBenefitOnTop.offeringBeanList) return

        const offeringBeanList = this.$store.state.clm.clmBenefitOnTop.offeringBeanList
        const productId = this.$store.state.clm.clmBenefitOnTop.product.product_id
        this.isClmBenefit = (offeringBeanList.includes(this.matcode) || this.type === 'trueonline' || this.type === 'clmvas' || (['sim', 'postpaid', 'mnp'].includes(this.productType) && (productId === this.productId)))
      }
    },
    mounted () {
      this.loadBenefitOnTop()
    },
    methods: {
      loadBenefitOnTop () {
        if (this.type === 'clmvas') {
          const data = this.$store.state.clm.clmVasPackageList.knowledgeDetailList
          const subHeadline = data.find(k => k.topic === 'Sub Headline').script
          const terms = data.find(k => k.topic === 'Term and Conditions').script
          const headlineObj = data.find(k => k.topic === 'Headline')
          const headline = headlineObj.script
          let img = ''
          if (headlineObj.knowledgeAttachList?.length > 0) {
            img = headlineObj.knowledgeAttachList[0].image
          }
          this.campBean = {
            headline,
            subHeadline,
            img,
            terms,
            hasValue: true
          }
          this.isClmBenefit = true
          return
        }

        if (this.type === 'clmvas-demo') {
          const data = this.$store.state.clm.clmVasPackageListDemo.knowledgeDetailList
          const subHeadline = data.find(k => k.topic === 'Sub Headline').script
          const terms = data.find(k => k.topic === 'Term and Conditions').script
          const headlineObj = data.find(k => k.topic === 'Headline')
          const headline = headlineObj.script
          let img = ''
          if (headlineObj.knowledgeAttachList?.length > 0) {
            img = headlineObj.knowledgeAttachList[0].image
          }
          this.campBean = {
            headline,
            subHeadline,
            img,
            terms,
            hasValue: true
          }
          this.isClmBenefit = true
          return
        }

        if (this.type === 'demo') {
          let data = {}
          if (this.verifyType === 'trueonline') {
            data = { campCode: this.campCode, productId: this.productId, verifyType: this.verifyType }
          } else {
            data = { campCode: this.campCode, productId: this.productId }
          }
          this.$store.dispatch(GET_BENEFIT_ON_TOP_DEMO, data).then((data) => {
            if (data.campId) {
              localStorage.setItem('clm-camp-id', data.campId)
            }
            const headlineObj = data.knowledgeDetailList.filter(k => k.topic === 'Headline')
            let headline = '-'
            let img = ''
            if (headlineObj.length > 0) {
              headline = headlineObj[0].script
              if (headlineObj[0].knowledgeAttachList?.length > 0) {
                img = headlineObj[0].knowledgeAttachList[0].image
              }
            }
            const subHeadline = data.knowledgeDetailList.filter(k => k.topic === 'Sub Headline').length > 0 ? data.knowledgeDetailList.filter(k => k.topic === 'Sub Headline')[0].script : '-'
            const terms = data.knowledgeDetailList.filter(k => k.topic === 'Term and Conditions').length > 0 ? data.knowledgeDetailList.filter(k => k.topic === 'Term and Conditions')[0].script : '-'

            this.campBean = {
              headline,
              subHeadline,
              img,
              terms,
              hasValue: true
            }
            this.subModule = data.subModule

            const offeringBeanList = data.offeringBeanList

            this.offeringBeanList = data.offeringBeanList
            if (offeringBeanList) {
              if (this.productType === 'product') {
                this.isClmBenefit = false
              } else {
                this.isClmBenefit = (offeringBeanList.includes(this.matcode) || this.type === 'trueonline' || data.subModule === 'MNP' || this.verifyType === 'trueonline' || (['sim', 'postpaid', 'mnp', 'device_bundle_new_customer'].includes(this.productType) && (data.product.product_id === this.productId)))
              }
            }

            if (this.propocode) {
              if (data.propocodeList.length > 0) {
                this.isClmBenefit = data.propocodeList.some(pp => pp === this.propocode)
              } else {
                this.isClmBenefit = false
              }
            }
            this.propocodeList = data.propocodeList
          }).catch(() => {
            this.isClmBenefit = false
          })
          return
        }

        const clmUpsellIden = localStorage.getItem('clm-upsell')
        if (!clmUpsellIden) {
          localStorage.removeItem('clm-camp-id')
          return
        }

        const data = { identity: clmUpsellIden }
        this.$store.dispatch(GET_BENEFIT_ON_TOP, data).then((data) => {
          if (data.campId) {
            localStorage.setItem('clm-camp-id', data.campId)
          }
          if (data.campaignName) {
            localStorage.setItem('clm-camp-name', data.campaignName)
          }
          if (data.offeringBeanList) {
            localStorage.setItem('clm-offering-bean-list', data.offeringBeanList)
          }
          const headlineObj = data.knowledgeDetailList.filter(k => k.topic === 'Headline')
          let headline = '-'
          let img = ''

          if (headlineObj.length > 0) {
            headline = headlineObj[0].script
            if (headlineObj[0].knowledgeAttachList?.length > 0) {
              img = headlineObj[0].knowledgeAttachList[0].image
            }
          }
          const subHeadline = data.knowledgeDetailList.filter(k => k.topic === 'Sub Headline').length > 0 ? data.knowledgeDetailList.filter(k => k.topic === 'Sub Headline')[0].script : '-'
          const terms = data.knowledgeDetailList.filter(k => k.topic === 'Term and Conditions').length > 0 ? data.knowledgeDetailList.filter(k => k.topic === 'Term and Conditions')[0].script : '-'

          this.campBean = {
            headline,
            subHeadline,
            img,
            terms,
            hasValue: true
          }
          this.subModule = data.subModule

          const offeringBeanList = data.offeringBeanList

          this.offeringBeanList = data.offeringBeanList

          if (offeringBeanList) {
            if (this.productType === 'product') {
              this.isClmBenefit = false
            } else {
              this.isClmBenefit = (offeringBeanList.includes(this.matcode) || this.type === 'trueonline' || (['sim', 'postpaid', 'mnp', 'device_bundle_new_customer'].includes(this.productType) && (data.product.product_id === this.productId)))
            }
          }

          if (this.propocode) {
            if (data.propocodeList.length > 0) {
              this.isClmBenefit = data.propocodeList.some(pp => pp === this.propocode)
            } else {
              this.isClmBenefit = false
            }
          }
          this.propocodeList = data.propocodeList
        }).catch(() => {
          this.isClmBenefit = false
          localStorage.removeItem('clm-upsell')
          localStorage.removeItem('clm-camp-id')
        })
      },
      showTermsDialog () {
        if (this.externalDialog) {
          this.$emit('open-clm-dialog', this.campBean)
        } else {
          this.$refs.dialog.open()
        }
      }
    }
  }
</script>

<style scoped  lang="scss">
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
</style>
