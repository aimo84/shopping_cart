/*
  - this component is for ONLY 2 cases:
      this.promotion === 'device_bundle_existing'
      this.promotion === 'pre2post'

  - this component is NOT for following case:
      this.promotion === 'mnp_bundling_existing'
*/
<template>
  <div class="container">
    <loading-element
      v-if="page === 'loading'"
    />
    <form-element
      v-if="page === 'form'"
      :config="config"
      :product="product"
      :multi-campaign="multiCampaign"
      :existing-campaign="existingCampaign"
      :type-id="typeId"
    />
    <trueonline-elements
      v-if="page === 'trueonline'"
    />
    <checking-element
      v-if="page === 'checking'"
    />
    <result-element
      v-if="page === 'result'"
      :data="data"
      :result="result"
      :product="product"
    />
    <package-element
      v-if="page === 'package'"
      :type-id="typeId"
      :data="data"
    />
    <package-failed-element
      v-if="page === 'package-failed'"
    />
    <address-element
      v-if="page === 'address'"
      :formInfo="formInfo"
      :skipEkyc="skipEkyc"
    />
    <verify-element
      v-if="page === 'verify'"
      ref="verify"
    />
    <!-- COMMENT OUT: no using (nowhere to set page = 'info-form')
    <info-form
      v-if="page === 'info-form'"
      :updateFormInfo="updateFormInfo"
      :product="formProductType"
    />
    -->
    <checklist-element
      v-if="page === 'checklist'"
    />
  </div>
</template>

<script>
  import Loading from '@components/loading'
  import Form from './form'
  import TrueOnline from './trueonline'
  import Checking from './checking'
  import Result from './result'
  import Package from './package'
  import PackageFailed from './package-failed'
  import Address from './address'
  import Verify from './verify'
  // COMMENT OUT: no using (nowhere to set page = 'info-form')
  // import InfoForm from './info-form.vue'
  import Checklist from './checklist'
  import {
    FETCH_VERIFY_CONFIG,
    FETCH_PRODUCT_INFO,
    VERIFY,
    BUNDLE_CAMPAIGNS_VERIFY,
    UPDATE_CART,
    FETCH_CART,
    FETCH_PACKAGE,
    FETCH_PRICE_PLAN,
    FETCH_PRODUCT_STATUS,
    GET_TOL_LIST,
    CREATE_NEW_EKYC,
    FETCH_EKYC_STATUS,
    FETCH_PRE_TO_POST_EKYC
  } from '@store/actions.type'

  import {
    computeAddons,
    updateEntPack,
    loggerAddon
  } from '@utils/addon'

  export default {
    components: {
      'loading-element': Loading,
      'form-element': Form,
      'trueonline-element': TrueOnline,
      'checking-element': Checking,
      'result-element': Result,
      'package-element': Package,
      'package-failed-element': PackageFailed,
      'address-element': Address,
      'verify-element': Verify,
      // COMMENT OUT: no using (nowhere to set page = 'info-form')
      // 'info-form': InfoForm,
      'checklist-element': Checklist
    },
    props: {
      productId: String,
      inventoryId: String,
      promotionId: String,
    },
    data: () => ({
      page: 'loading',
      data: {},
      result: {},
      pricePlan: false,
      existingCampaign: false,
      ekycStatusRetry: 0,
      formInfo: {}
    }),
    computed: {
      allowAddcart () {
        return this.$store.state.products.productStatus.data
      },
      newEkyc () {
        return this.$store.state.ekyc.newEkyc
      },
      ekycStatus () {
        return this.$store.state.ekyc.ekycStatus
      },
      preToPostEkycStatus () {
        return this.$store.state.ekyc.preToPostEkycStatus
      },
      product () {
        return this.$store.state.products.productInfo.data.record
      },
      plans () {
        return this.$store.state.postpaid.pricePlan.data.record
      },
      /*
      productId () {
        return this.$route.params.product
      },
      inventoryId () {
        return this.$route.params.inventory
      },
      promotionId () {
        return this.$route.params.promotion
      },
      */
      verifyData () {
        return {
          advance_payment: this.$route.query?.advance_payment,
          contract: this.$route.query?.contract
        }
      },
      typeId () {
        return this.$route.query.type
      },
      ppId () {
        return this.$route.query.pp
      },
      isRestriction () {
        return this.product.product_type === 'restriction'
      },
      ekycAnswers () {
        const answers = {}
        if (!this.ekycStatus.answers) return {}
        this.ekycStatus.answers.forEach((e) => {
          answers[e.question] = e.value
        })
        return answers
      },
      config () {
        if (this.product.product_type === 'restriction') {
          if (this.typeId) return
          return {
            path: 'restriction',
            options: { truemoveh: true }
          }
        }
        /* COMMENT OUT: do not use this component for case promotion === 'mnp_bundling_existing' (typeId === '4')
        if (this.typeId === '4') {
          return {
            path: 'device_bundle_existing',
            options: { truemoveh: true }
          }
        }
        */
        if (this.typeId === '5') {
          return {
            path: 'pre_to_post',
            options: { truemoveh: true }
          }
        }
        const config = this.$store.state.config.verifyConfig
        return config.campaigns[this.promotionId]
      },
      answers () {
        const url = `${location.origin}${this.$route.path}`
        const params = new URLSearchParams(location.search)
        params.set('pp', this.pricePlan.id)
        return {
          answers: {
            callback_url: `${url}?${params}`
          }
        }
      },
      inventory () {
        return this.product.inventories.find(e => e.id.toString() === this.inventoryId)
      },
      promotion () {
        return this.product.promotion.find((item) => item.id.toString() === this.promotionId)
      },
      multiCampaign () {
        return this.product.promotion && this.product.promotion.length > 0 && this.promotion
      },
      campaign () {
        return this.product.bundle_existing.find(e => e.campaign_type === this.typeId)
      },
      discountList () {
        const id = this.campaign.campaign_type === '3' ? this.ppId : this.promotionId
        return this.campaign.discount_list.find(e => e.id.toString() === id)
      },
      skipEkyc () {
        const skip = window.no_ekyc_device_bundle
        return skip && this.typeId === '5'
      },
      formProductType () {
        return this.typeId === '5' ? 'pre_to_post' : ''
      }
    },
    async mounted () {
      try {
        await Promise.all([
          this.$store.dispatch(FETCH_VERIFY_CONFIG),
          this.$store.dispatch(FETCH_PRODUCT_INFO, {
            id: this.productId,
            tmvhAuth: this.$route.query.token,
            useThaiId: 1
          })
        ])
        if (!window.localStorage.getItem('cart-id') && this.typeId === '5') throw new Error('no-cart-id')
        if (!this.config) throw new Error('no-config')
        if (this.multiCampaign && !this.config.options[this.typeId]) throw new Error()
        if (['device_bundle_existing', 'pre_to_post'].includes(this.config.path)) {
          if (!this.campaign) throw new Error('no-campaign')
          if (['3', '4', '5'].includes(this.campaign.campaign_type) && !this.discountList) throw new Error('no-discount-list')
          this.existingCampaign = true
          if (this.campaign.campaign_type === '4') {
            await this.fetchPackage(this.discountList)
            this.page = 'package'
            return
          }
          if (this.campaign.campaign_type === '5') {
            await this.fetchPackage(this.discountList)
            if (!this.$route.query.hash) {
              this.page = 'verify'
              return
            }
            if (!this.$route.query.pp) throw new Error('no-pp-query')
            this.pricePlan = this.plans.find(e => e.id.toString() === this.$route.query.pp)
            if (!this.pricePlan) throw new Error('no-priceplan')
            const ekyc = await this.fetchEkyc()
            if (!ekyc) return
            const result = await this.$store.dispatch(VERIFY, {
              id: 'pre_to_post',
              data: {
                id_number: this.ekycAnswers.national_id,
                service_name: 'truemove',
                mobile_number: this.ekycAnswers.mobile_no,
                birthday: this.ekycAnswers.date_of_birth,
                priceplan: this.pricePlan.code,
                cart_hash: window.localStorage.getItem('cart-id'),
                is_pre2post_bundle: 1,
                campaign_code_list: [this.discountList.campaign_code],
                product_id_list: [this.productId],
                product_sku_list: [this.inventory.sku]
              }
            })
            if (!result.is_pass) {
              return this.$router.push({
                name: 'online-store-existing-verify-fail',
                query: { product_id: this.productId }
              })
            }
            this.page = 'address'
            return
          }
        }
        if (!this.inventory) throw new Error('no-inventory')
        if (['1', '2', '3'].includes(this.typeId)) {
          this.page = 'verify'
          return
        }
        this.page = 'form'
      } catch (e) {
        if (!e.is_pass && this.typeId === '5') {
          return this.$router.push({
            name: 'online-store-existing-verify-fail',
            query: { product_id: this.productId }
          })
        }
        this.$router.push({
          name: 'online-store-detail',
          params: {
            id: this.productId
          },
          query: {
            token: this.$route.query.token
          }
        })
      }
    },
    methods: {
      sleep (ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
      },
      trackAnalytics (label) {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event: 'track_event',
          event_category: 'EKYC_verification',
          event_action: 'EKYC_result',
          event_label: label
        })
      },
      async fetchEkyc () {
        try {
          this.page = 'loading'
          if (this.ekycStatusRetry < 3) await this.sleep(2000)
          await this.$store.dispatch(FETCH_EKYC_STATUS, this.$route.query.hash)
          if (!this.ekycStatus.is_pass) throw new Error('ekyc-not-passed')
          await this.$store.dispatch(FETCH_PRE_TO_POST_EKYC, {
            cart_hash: window.localStorage.getItem('cart-id'),
            answers: this.ekycStatus.answers,
            image_liveness: this.ekycStatus.image_liveness,
            is_pre2post_bundle: 1
          })
          if (!this.preToPostEkycStatus.is_pass) throw new Error('pre2post-ekyc-not-passed')
          this.trackAnalytics('verification_passed')
          return true
        } catch (e) {
          this.ekycStatusRetry++
          if (this.ekycStatusRetry > 2) {
            this.trackAnalytics('verification_failed')
            this.result = {
              is_pass: false,
              is_ekyc: true,
              message: this.ekycStatus.message || { th: 'Error', en: 'Error' }
            }
            this.page = 'result'
            return
          }
          await this.fetchEkyc()
        }
      },
      async createEkyc () {
        try {
          await this.$store.dispatch(CREATE_NEW_EKYC, this.answers)
          window.location.href = this.newEkyc.form_url
        } catch (e) {
          this.page = 'form'
        }
      },
      async checkAllowAddCart () {
        const productStatusData = { product_id: this.productId }
        const cartid = window.localStorage.getItem('cart-id')
        if (cartid) productStatusData.hash = cartid
        await this.$store.dispatch(FETCH_PRODUCT_STATUS, productStatusData)
        const hash = this.allowAddcart.hash
        if (hash) window.localStorage.setItem('cart-id', hash)
        const addCart = this.allowAddcart.allow_addcart
        if (addCart.shop === false) return false
        if (this.multiCampaign) return addCart.bdbc
        return addCart.ext
      },
      setPricePlan (e) {
        this.pricePlan = e
        window.dataLayer.push({
          event: 'track_event',
          event_category: 'choose_the_package',
          event_action: 'verify',
          event_label: `${e.name} ${e.price} Baht`
        })
      },
      goTo (page) {
        this.page = page
      },
      updatePrivilege () {
        if (this.result.privilege_placeorder) {
          const key = 'privilege-placeorder'
          let privileges = JSON.parse(localStorage.getItem(key)) || []
          if (!Array.isArray(privileges)) privileges = []
          const privilege = privileges.filter((item) => item.product_id !== this.product.id)
          if (this.result.privilege_placeorder[0]) {
            this.result.privilege_placeorder[0].timestamp_expired = Date.now() + 172800000
          }
          localStorage.setItem(key, JSON.stringify([...this.result.privilege_placeorder, ...privilege]))
        }
      },
      async cartRedirect (id) {
        if (!id) return false
        if (
          this.product.product_type !== 'device_bundle_new_customer' &&
          this.product.product_type !== 'device_bundle_existing'
        ) return false
        await this.$store.dispatch(FETCH_CART, { id })
        const store = this.$store.state.cart.cart
        let error = ''
        if (store && store.data && store.data.record) {
          const result = store.data.record
          for (const i in result) {
            for (const j in result[i].products) {
              const item = result[i].products[j]
              const sameProductId = item.id === this.product.id
              const isDevBundle = item.product_type.startsWith('device_bundle_')
              const sameInventoryId = item.inventory.id.toString() === this.product.inventories[0].id.toString()
              const sameMat = sameProductId && sameInventoryId
              const sim = ['sim', 'postpaid', 'vlearn', 'family_black_truecard']
              const isSim = sim.includes(item.product_type)
              if (isDevBundle) error = sameMat ? '010' : '011'
              if (isSim && error !== '010') error = '011'
            }
          }
        }
        return error
      },
      async verifyBundle (pricePlan) {
        try {
          this.page = 'checking'
          const hash = this.result.cart_hash || window.localStorage.getItem('cart-id')
          let bundleCampaignVerifyData = {
            product_code: this.inventory.sku,
            mobile: this.data.mobile_number,
            thai_id: this.data.id_number,
            rc: pricePlan.price,
            campaign_type: '3',
            cart_hash: hash,
            product_id: this.productId,
            aging: this.$route.query.aging,
            proposition_nas_code_verify: pricePlan.proposition_nas_code
          }
          bundleCampaignVerifyData.check_bundle_again = true
          if (this.$route.query.token) {
            bundleCampaignVerifyData.tmvh_token = this.$route.query.token
          }
          const response = await this.$store.dispatch(BUNDLE_CAMPAIGNS_VERIFY, bundleCampaignVerifyData)
          this.computeCart({
            id: response.data[0].id,
            pricePlanCode: pricePlan.code,
            pricePlanCampaignCode: response.data[0].campaign_code
          })
        } catch (e) {
          this.page = 'package-failed'
        }
      },
      async computeCart (e) {
        const id = this.result.cart_hash || window.localStorage.getItem('cart-id')
        const isRedirect = await this.cartRedirect(id)
        if (isRedirect) {
          this.$router.push(`/cart?error=${isRedirect}`)
        } else {
          let data = []
          const product = {
            product_id: this.productId,
            inventory_id: this.inventoryId,
            store_id: this.product.store_id,
            quantity: 1,
            channel: 'tmh-website',
            section: 'wemall'
          }
          if (this.multiCampaign) product.campaign_id = this.promotionId
          if (this.existingCampaign) {
            if (this.typeId === '3') {
              product.existing_campaign = {
                id: e.id,
                price_plan_code: e.pricePlanCode
              }

              if (e.pricePlanCampaignCode) {
                this.result.privilege_placeorder[0].campaign_code = e.pricePlanCampaignCode
                this.result.privilege_placeorder[0]['campaign_code_to_check[0]'] = e.pricePlanCampaignCode
                this.result.privilege_placeorder[0]['campaigns[0]'] = e.pricePlanCampaignCode
              }
            /* COMMENT OUT: do not use this component for case promotion === 'mnp_bundling_existing' (typeId === '4')
            } else if (this.typeId === '4') {
              product.existing_campaign = {
                id: this.result.passed_output_H[this.inventory.sku].id,
                price_plan_code: e.pricePlanCode
              }
            */
            } else if (this.typeId === '5') {
              product.existing_campaign = {
                id: this.discountList.id,
                price_plan_code: this.pricePlan.code
              }
            } else {
              product.existing_campaign = {
                id: this.result.passed_output_H[this.inventory.sku].id
              }
            }
          }
          const addons = computeAddons(this.$route.query, this.product)
          data.push(product)
          data = [...data, ...addons]
          try {
            const result = await this.$store.dispatch(UPDATE_CART, {
              id,
              data
            })

            this.$store.dispatch(FETCH_CART, { id }).then(({ data }) => {
              data.record[0].products.forEach(product => {
                let amount = product.inventory.price
                const quantity = product.quantity
                let discount = ''

                if (product.product_type === 'device_bundle_existing' ||
                    product.product_type === 'mnp_two_step') {
                  amount -= product.existing_campaign.discount
                  discount = product.existing_campaign.discount
                }

                loggerAddon({
                  event: 'Cart',
                  status: 'add',
                  productId: product.id,
                  matcode: product.inventory.sku,
                  quantity,
                  amount,
                  discount
                })
              })
            })

            this.updatePrivilege()
            await updateEntPack(this.$route.query.ep, this.$route.query, this.product, result.cart_hash, { id: this.inventoryId })
            this.$router.push(`/cart?id=${result.cart_hash}&privilege-id=${this.productId}`)
          } catch (e) {
            if (e?.message === 'err-ent-pack') {
              this.$router.push(`/cart?error=030&privilege-id=${this.productId}`)
            } else {
              this.$router.push('/cart')
            }
          }
        }
      },
      async fetchPackage (e) {
        const param = {
          section: 'wemall',
          nas_code: e.proposition_nas_code
        }
        await Promise.all([
          this.$store.dispatch(FETCH_PACKAGE, e.proposition_nas_code),
          this.$store.dispatch(FETCH_PRICE_PLAN, param)
        ])
      },
      async checkVerify (data) {
        this.data = {
          ...data,
          ...{
            product_id_list: [this.productId],
            product_sku_list: [this.inventory.sku]
          }
        }
        if (data.service_name === 'trueonline') {
          try {
            this.page = 'checking'
            await this.$store.dispatch(GET_TOL_LIST, {
              thai_id: this.data.id_number,
              otp: this.data.otp,
              mobile_number: this.data.mobile_number
            })
            this.page = 'trueonline'
          } catch (e) {
            this.result = {
              is_pass: false,
              message: {
                th: 'ไม่พบหมายเลขลูกค้าทรูออนไลน์ โปรดลองอีกครั้งด้วยหมายเลขบัตรประชาชน และเลขหมายโทรศัพท์มือถือที่ถูกต้อง',
                en: 'There is no TrueOnline Circuit number found. Please retry again with correct Thai ID and mobile number.'
              }
            }
            this.page = 'result'
          }
        } else {
          this.verify()
        }
      },
      async verify (trueonline, hash) {
        let logData = {}
        try {
          if (this.typeId !== '4') this.page = 'checking'
          if (!await this.checkAllowAddCart()) {
            this.$router.push('/cart?error=012')
            return
          }
          if (this.multiCampaign) this.data.campaign_id_list = [this.promotionId]
          /* COMMENT OUT: do not use this component for case promotion === 'mnp_bundling_existing' (typeId === '4')
          if (this.existingCampaign && this.typeId === '4') {
            this.data.campaign_type = this.typeId
            this.data.campaign_code_list = [this.discountList.campaign_code]
            this.data.rc = this.pricePlan.price

            // if (this.typeId === '3') this.data.rc = this.discountList.rc
          }
          */
          if (trueonline) {
            this.data.trueonline_number = trueonline
            this.data.random_hash_for_otp = hash
          }
          if (this.isRestriction) {
            this.data = {
              id_number: this.data.id_number,
              product_id: this.data.product_id_list[0],
              product_sku: this.data.product_sku_list[0],
              g_recaptcha: this.data.g_recaptcha
            }
          }
          const cartId = window.localStorage.getItem('cart-id')
          if (cartId) this.data.cart_hash = cartId

          if (this.verifyData?.advance_payment !== undefined && this.verifyData?.contract !== undefined) {
            this.data.verify_data = this.verifyData
          }

          logData = {
            event: `Verify Existing (type ${this.typeId})`,
            status: 'verify',
            productId: this.productId,
            matcode: this.inventory.sku,
            mobileNumber: this.data.mobile_number
          }

          loggerAddon(logData)

          this.result = await this.$store.dispatch(VERIFY, {
            id: this.config.path,
            tmvhAuth: this.$route.query.token,
            data: this.data
          })
          if (this.result.is_pass) {
            logData.status = 'success'
            loggerAddon(logData)

            /* COMMENT OUT: do not use this component for case promotion === 'mnp_bundling_existing' (typeId === '4')
            if (this.existingCampaign && this.typeId === '4') {
              await this.computeCart({ pricePlanCode: this.pricePlan.code })
            } else {
              await this.computeCart()
            }
            */
           await this.computeCart()

            // if (this.existingCampaign && this.typeId === '3') {
            //   await this.fetchPackage(this.discountList)
            //   this.page = 'package'
            // } else {
            //   await this.computeCart()
            // }
          } else {
            logData.status = 'fail'
            loggerAddon(logData)
            this.page = 'result'
          }
        } catch (e) {
          if (e?.['tmp_check_mini_step_result']?.A === false) {
            this.$refs.verify.otpFailed()
            return
          }
          if (e.is_truemoveh && e.is_prepaid) {
            return this.$router.push({
              name: 'online-store-existing-verify-fail',
              query: {
                product_id: this.productId,
                error: 'existing_prepaid'
              }
            })
          }
          if ((e.is_truemoveh && !e.is_prepaid) && !e.is_prever_mnp) {
            return this.$router.push({
              name: 'online-store-existing-verify-fail',
              query: {
                product_id: this.productId,
                error: 'existing_postpaid'
              }
            })
          }
          if (e.is_prepaid) {
            return this.$router.push({
              name: 'online-store-existing-verify-fail',
              query: {
                product_id: this.productId,
                error: 'not_true_customer_existing'
              }
            })
          }
          this.result = {
            is_pass: false,
            is_truemoveh: e.is_truemoveh,
            /* COMMENT OUT: do not use this component for case promotion === 'mnp_bundling_existing' (typeId === '4')
            is_prever_mnp: this.typeId === '4' && e.is_prever_mnp,
            */
            is_prever_mnp: false,
            prever_mnp_sim_product_id: e.prever_mnp_sim_product_id,
            price_plan: this.pricePlan,
            message: e.message || {
              th: 'Something went wrong. Please try again later.',
              en: 'Something went wrong. Please try again later.'
            }
          }
          if (this.result.is_prever_mnp && !this.result.is_truemoveh) {
            this.page = 'checklist'
          } else {
            logData.status = 'fail'
            loggerAddon(logData)
            this.page = 'result'
          }
        }
      },
      async updateFormInfo (data) {
        this.formInfo = {
          thai_id: data.id,
          birth_date: data.date,
          mobile: this.$route.query.mobile
        }
        if (this.campaign.campaign_type === '5') {
          this.page = 'loading'
          await this.fetchPackage(this.discountList)
          if (!this.$route.query.pp) throw new Error('no-pp-query')
          this.pricePlan = this.plans.find(e => e.id.toString() === this.$route.query.pp)

          if (!this.pricePlan) throw new Error('no-priceplan')

          const result = await this.$store.dispatch(VERIFY, {
            id: 'pre_to_post',
            data: {
              id_number: data.id,
              service_name: 'truemove',
              mobile_number: this.$route.query.mobile,
              birthday: data.date,
              priceplan: this.pricePlan.code,
              cart_hash: window.localStorage.getItem('cart-id'),
              is_pre2post_bundle: 1,
              campaign_code_list: [this.discountList.campaign_code],
              product_id_list: [this.productId],
              product_sku_list: [this.inventory.sku]
            }
          })
          if (!result.is_pass) {
            return this.$router.push({
              name: 'online-store-existing-verify-fail',
              query: { product_id: this.productId }
            })
          }
          this.formInfo.thai_id = result.tmp_check_result.input.id_number
          this.page = 'address'
          return
        }
      },
      moveToOneStep () {
        try {
          const discountList = (this.product.bundle_existing.filter(product => product.campaign_type === '4')[0].discount_list)
          const campaignCode = discountList.filter(list => list.id === parseInt(this.promotionId))[0].campaign_code
          const bundleId = this.product.bundles.filter(bundle => bundle.campaign_code === campaignCode)[0].id
          this.$router.push({
            name: 'mnp-bundle-verify',
            params: {
              id: this.productId,
              inventory: this.inventoryId,
              bundle: bundleId
            },
            query: {
              accs: this.$route.query.accs,
              token: this.$route.query.token,
              pp: this.pricePlan.id,
              flow: 'mnp-two'
            }
          })
        } catch (e) {
          this.$router.push({
            name: 'online-store-detail',
            params: {
              id: this.productId
            }
          })
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    padding: 16px 0;
  }
</style>
