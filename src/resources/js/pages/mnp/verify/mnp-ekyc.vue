<template>
  <div class="ekyc-wrap">
    <mnp-checking v-show="loading"/>
    <div v-if="!loading" class="address-container">
      <priceplan-info
        v-if="hasPackage"
        :data="status"
        :packages="packages"
        :verify-form="verifyForm"
        :isExisting="isMnpSharePlan"
        bundle
      />
      <address-element :setCustomEkyc="setCustomEkyc" :ekycAnswer="ekycAnswers" :data="data"/>
    </div>
  </div>
</template>

<script>
  import MnpChecking from './mnp-checking'
  import {
    CHECK_NUMBER,
    FETCH_EKYC_STATUS,
    CREATE_NEW_EKYC,
    CHECK_MNP_INFO
  } from '@store/actions.type'

  import {
    SET_MNP_INFO
  } from '@store/mutations.type'

  import {
    computeAddons,
    updateEntPack,
    loggerAddon
  } from '@utils/addon'
  import qs from 'qs'

  export default {
    components: {
      'mnp-checking': MnpChecking,
      'priceplan-info': () => import('@sections/priceplan-info'),
      'address-element': () => import('./mnp-address.vue')
    },
    props: {
      data: Object,
      isCampaignFreeDevice: {
        type: Boolean,
        default: false
      }
    },
    data: () => ({
      loading: true,
      status: {},
      packages: {},
      verifyForm: {},
      formEkyc: {}
    }),
    computed: {
      mnpOtp () {
        return this.$store.state.mnp.mnpOtp
      },
      mnpPin () {
        return this.$store.state.mnp.mnpPin
      },
      mnpRandomNumber () {
        return this.$store.state.mnp.mnpRandomNumber
      },
      newEkyc () {
        return this.$store.state.ekyc.newEkyc
      },
      ekycStatus () {
        return this.$store.state.ekyc.ekycStatus
      },
      mnpInfo () {
        return this.$store.state.mnp.mnpInfo
      },
      ekycAnswers () {
        const answers = {}
        if (!this.ekycStatus.answers) return {}
        this.ekycStatus.answers.forEach((e) => {
          answers[e.question] = e.value
        })
        return answers
      },
      productInfo () {
        return this.$store.state.products.productInfo.data.record
      },
      user () {
        return this.$store.state.auth.profile.data
      },
      userId () {
        return this.user && this.user.user_id
      },
      mnpType () {
        if (this.isMnpBundle || this.isMnpAuto) return 'mnpoposs2'
        const simType = this.productInfo.sim_data.sim_type
        return simType === 'postpaid' ? 'mnpoposs2' : 'mnpopres2'
      },
      mnpPackage () {
        if (this.isMnpBundle || this.isMnpAuto) return this.data.bundle.plan
        return this.productInfo.mnp_package.find((e) => e.code === this.$route.params.code)
      },
      fullName () {
        const prefix = this.formEkyc.prefix ? this.formEkyc.prefix : ( this.formEkyc.txt_title_other ? this.formEkyc.txt_title_other : '-')
        const firstName = this.formEkyc.first_name ? this.formEkyc.first_name : '-'
        const lastName = this.formEkyc.last_name ? this.formEkyc.last_name : '-'
        return `${prefix} ${firstName} ${lastName}`
      },
      inventory () {
        return this.productInfo.inventories.find(inventory => (
          inventory.id.toString() === this.$route.params.inventory
        ))
      },
      inventoryId () {
        if (this.isMnpBundle) return this.$route.params.inventory
        return this.productInfo.inventories[0].id
      },
      callbackUrl () {
        const url = `${location.origin}${this.$route.path}`
        const params = new URLSearchParams(location.search)
        if (this.isMnpBundle || this.isMnpAuto) params.set('pp', this.data.bundle.plan.id)
        return `${url}?${params}`
      },
      answers () {
        const answers = {
          callback_url: this.callbackUrl,
          security_key: this.mnpOtp.security_key,
          ussd_pin_code: this.data.ussd.code
        }
        if ((this.isMnpBundle || this.isMnpAuto) && !this.isMnpOneStep) {
          answers.new_cust_random_number_ticket_hash = this.mnpRandomNumber.number_random_ticket_hash
        }
        return { answers }
      },
      isMnpBundle () {
        return this.$route.name === 'mnp-bundle-verify'
      },
      isMnpAuto () {
        return this.$route.name === 'mnp-auto-verify'
      },
      isMnpOneStep () {
        return this.data.bundle.bundle.campaign_mnp_type === 'one_step'
      },
      simProduct () {
        return this.data.bundle.bundle.inventories.find(inventory => (
          inventory.product_id !== this.$route.params.id
        ))
      },
      packageInfo () {
        return this.$store.state.postpaid.package.record[0]
      },
      isMnpSharePlan () {
        return this.$route.query.mobile_number !== undefined
      },
      hasPackage () {
        return this.$store.state.postpaid.package.record !== undefined
      },
      skipEkyc () {
        const skip = window.no_ekyc_device_bundle
        const shareplan = this.$route.name === 'mnp-auto-verify' || this.$route.name === 'mnp-bundle-verify'
        return (shareplan || this.isMnpOneStep) && skip
      }
    },
    mounted () {
      if (this.skipEkyc) {
        this.loading = false
      } else {
        this.$route.query.hash ? this.fetchEkyc() : this.createEkyc()
      }
    },
    methods: {
      sleep (ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
      },
      computeDate (e, format) {
        const date = e.split(/[/-]/)
        switch (format) {
          case 'string':
            return `${date[2]}${date[1]}${date[0]}`
          default:
            return date
        }
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
          if (this.data.ekyc.retry < 3) await this.sleep(2000)
          await this.$store.dispatch(FETCH_EKYC_STATUS, this.$route.query.hash)
          if (!this.ekycStatus.is_pass) throw new Error()
          loggerAddon({
            event: 'Ekyc',
            status: 'success',
            productId: this.$route.params.id,
            addressData: [
              this.ekycAnswers.first_name,
              this.ekycAnswers.last_name,
              this.ekycAnswers.email,
              this.ekycAnswers.home_address,
              this.ekycAnswers.home_district,
              this.ekycAnswers.home_subdistrict,
              this.ekycAnswers.home_province,
              this.ekycAnswers.home_zipcode,
              this.ekycAnswers.mobile_no,
              this.ekycAnswers.national_id
            ]
          })
          if (this.$route.query.mobile_number) {
            const params = qs.stringify({
              mobiles: this.$route.query.mobile_number
            })
            const data = await this.$store.dispatch(CHECK_NUMBER, params)
            data.record[0].bundle = { custom_name: this.data.bundle.custom_name }
            this.status = data.record[0]
            const birthdate = this.ekycAnswers.date_of_birth.split('/')
            this.verifyForm = {
              id_number: this.ekycAnswers.national_id,
              date_birth: birthdate[0],
              month_birth: birthdate[1],
              year_birth: birthdate[2]
            }
            this.packages = this.packageInfo
          } else {
            this.status = this.data
          }
          this.loading = false
        } catch (e) {
          this.data.ekyc.retry++
          if (this.data.ekyc.retry > 2) {
            this.$store.commit(SET_MNP_INFO, {
              status: false,
              message: this.ekycStatus.message
            })
            this.trackAnalytics('verification_failed')
            this.$emit('route', 'result')
            return
          }
          await this.fetchEkyc()
        }
      },
      async createEkyc () {
        try {
          loggerAddon({
            event: 'Ekyc',
            status: 'verify',
            productId: this.$route.params.id,
            mobileNumber: this.data.otp.phoneNumber
          })
          await this.$store.dispatch(CREATE_NEW_EKYC, this.answers)
          window.location.href = this.newEkyc.form_url
        } catch (e) {
          this.$router.push(`/online-store/item/${this.$route.params.id}`)
        }
      },
      async checkInfo () {
        try {
          const dateOfBirth = this.formEkyc.date_of_birth
          const dateOfExpiration = this.formEkyc.date_of_expiration
          const path = (this.isMnpBundle || this.isMnpAuto) ? 'bundling/verify' : 'verify-personal-information'
          const data = {
            security_key: this.skipEkyc ? this.mnpOtp.security_key : this.ekycStatus.additional_data.security_key,
            user_id: this.userId || 0,
            mobile_number: this.formEkyc.mobile_no,
            identity_id: this.formEkyc.national_id,
            identity_type: 'I',
            customer_fullname_thai: this.$i18n.locale === 'th' ? this.fullName : '',
            customer_fullname_eng: this.$i18n.locale === 'en' ? this.fullName : '',
            lang: this.$i18n.locale,
            gender: this.formEkyc.gender === 'ชาย' ? '1' : '2',
            mnp_type: this.mnpType,
            birth_date: dateOfBirth ? this.computeDate(dateOfBirth, 'string') : '',
            identity_expire_date: dateOfExpiration ? this.computeDate(dateOfExpiration, 'string') : '',
            ussd_pin_code: this.skipEkyc ? this.data.ussd.code : this.ekycStatus.additional_data.ussd_pin_code,
            product: {
              product_id: this.productInfo.id,
              inventory_id: this.inventoryId,
              store_id: this.productInfo.store.id,
              section: this.productInfo.store.section,
              quantity: '1'
            },
            price_plan: {
              id: this.mnpPackage.id,
              name: this.mnpPackage.name,
              description: this.mnpPackage.description,
              code: this.mnpPackage.code,
              sim_type: this.mnpPackage.sim_type,
              price: this.mnpPackage.price,
              recommended: this.mnpPackage.recommended,
              proposition_nas_code: this.mnpPackage.proposition_nas_code,
              campaign_code: this.mnpPackage.campaign_code
            },
            user_information: {
              gender: this.formEkyc.gender === 'ชาย' ? '1' : '2',
              thai_id: this.formEkyc.national_id,
              title: this.formEkyc.prefix,
              txt_title_other: this.formEkyc.txt_title_other,
              first_name: this.formEkyc.first_name,
              last_name: this.formEkyc.last_name,
              email: this.formEkyc.email,
              telephone: this.formEkyc.mobile_no,
              thai_id_expire_day: dateOfExpiration ? this.computeDate(dateOfExpiration)[0].padStart(2, 0) : '',
              thai_id_expire_month: dateOfExpiration ? this.computeDate(dateOfExpiration)[1].padStart(2, 0) : '',
              thai_id_expire_year: dateOfExpiration ? this.computeDate(dateOfExpiration)[2].padStart(2, 0) : '',
              swine: '',
              birth_date: dateOfBirth,
              idCardForm: this.formEkyc.idCardForm,
              billingAddress: this.formEkyc.billingAddress
            },
            ekyc: {
              id_card_picture: !this.skipEkyc && this.ekycStatus.image_front,
              profile_picture: !this.skipEkyc && this.ekycStatus.image_liveness
            }
          }
          if (this.isMnpBundle) {
            data.cart_hash = localStorage.getItem('cart-id')
            data.ekyc_hash = this.$route.query.hash
            data.new_cust_product_bundle_id = this.$route.params.bundle
            data.new_cust_product_nas_code_list = this.productInfo.bundles.find(bundle => bundle.id === this.$route.params.bundle).propo_code
            data.new_cust_random_number_ticket_hash = this.skipEkyc ? this.mnpRandomNumber.number_random_ticket_hash : this.ekycStatus.additional_data.new_cust_random_number_ticket_hash
            data.new_cust_product_bundle_ref_code = this.data.bundle.bundle.ref_code
            data.new_cust_product_id_list = this.productInfo.id
            data.new_cust_inventory_id = this.inventoryId
            data.new_cust_product_bundle_ref_code = this.productInfo.bundles.find(bundle => bundle.id === this.$route.params.bundle).ref_code
            data.new_cust_product_id_sim = this.simProduct.product_id
            data.new_cust_inventory_id_sim = this.simProduct.inventory_id
            data.campaign_mnp_type = 'share_plan'
          }
          if (this.isMnpAuto) {
            data.cart_hash = localStorage.getItem('cart-id')
            data.ekyc_hash = this.$route.query.hash
            data.new_cust_product_bundle_id = this.$route.params.bundle_id
            data.new_cust_product_nas_code_list = this.productInfo.bundles.find(bundle => bundle.id === this.$route.params.bundle_id).propo_code
            data.new_cust_random_number_ticket_hash = this.skipEkyc ? this.mnpRandomNumber.number_random_ticket_hash : this.ekycStatus.additional_data.new_cust_random_number_ticket_hash
            data.new_cust_product_id_list = this.productInfo.id
            data.new_cust_inventory_id = this.inventoryId
            data.new_cust_product_bundle_ref_code = this.productInfo.bundles.find(bundle => bundle.id === this.$route.params.bundle_id).ref_code
            data.campaign_mnp_type = 'share_plan'
            data.is_mnp_auto = true
          }
          if (this.isMnpOneStep) {
            data.new_cust_product_code = this.inventory.sku
            data.campaign_mnp_type = 'one_step'

            if (localStorage.getItem('iot-package')) {
              data.meta = JSON.parse(localStorage.getItem('iot-package'))
              data.product['meta'] = JSON.parse(localStorage.getItem('iot-package'))
            }

          }
          if (this.isCampaignFreeDevice) {
            if (data?.meta) {
                data.meta.free_device = this.productInfo.config_free_device[this.$route.query.camptype];
            } else if (data.product['meta']) {
                data.product['meta'].free_device = this.productInfo.config_free_device[this.$route.query.camptype];
            } else {
                data.meta = {
                    free_device: this.productInfo.config_free_device[this.$route.query.camptype]
                }
                data.product['meta'] = {
                    free_device: this.productInfo.config_free_device[this.$route.query.camptype]
                }
            }
          }
          const accs = computeAddons(this.$route.query, this.productInfo)
          if (accs.length > 0) data.accessories = accs

          loggerAddon({
            event: 'Verify MNP Sim only',
            status: 'verify personal information',
            productId: this.$route.params.id,
            mobileNumber: this.formEkyc.mobile_no
          })

          await this.$store.dispatch(CHECK_MNP_INFO, { path, data })

          loggerAddon({
            event: 'Verify MNP Sim only',
            status: 'verify personal information success',
            productId: this.$route.params.id,
            mobileNumber: this.formEkyc.mobile_no
          })

          await updateEntPack(this.$route.query.ep, this.$route.query, this.productInfo, this.mnpInfo.cart_hash, { id: this.inventoryId })
          this.trackAnalytics('verification_passed')
          this.$emit('route', 'result')
        } catch (e) {
          if (e.message === 'err-ent-pack') this.data.entPack.error = true

          loggerAddon({
            event: 'Verify MNP Sim only',
            status: 'verify personal information fail',
            productId: this.$route.params.id,
            mobileNumber: this.formEkyc.mobile_no
          })

          this.trackAnalytics('verification_failed')
          this.$emit('route', 'result')
        }
      },
      setCustomEkyc (data) {
        this.loading = true
        this.formEkyc = data
        this.checkInfo()
      }
    }
  }
</script>

<style lang="scss" scoped src="./style.scss"></style>
<style lang="scss" scoped>
  .title {
    margin-bottom: 8px;
  }
  .address-container{
    text-align: left;
  }
</style>
