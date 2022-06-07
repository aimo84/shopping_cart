<template>
  <div class="package-outer-container">
    <div class="title-container">
      <div class="title">{{ Locale.address_title[$i18n.locale] }}</div>
      <div v-if="!isMnp" class="description">{{ Locale.search_result_description[$i18n.locale] }}</div>
    </div>
    <div class="package-container">
      <div class="top-container" v-if="isExisting || postpaidResult">
        <div class="top-info-container">
          <div class="info-container">
            <div class="info-label">{{ Locale.thai_id[$i18n.locale] }}</div>
            <div class="info-value">{{ thaiid }}</div>
          </div>
          <div class="info-container">
            <div class="info-label">{{ Locale.birthday[$i18n.locale] }}</div>
            <div class="info-value">{{ birthday }}</div>
          </div>
        </div>
        <template v-if="startTime && endTime">
          <div class="top-triangle" />
          <div class="top-timer-container">
            <div class="timer-container">
              <div class="timer-label">{{ Locale.start_time[$i18n.locale] }}</div>
              <div class="timer-value">{{ startTime }}</div>
            </div>
            <div class="timer-divider" />
            <div class="timer-container">
              <div class="timer-label">{{ Locale.end_time[$i18n.locale] }}</div>
              <div class="timer-value">{{ endTime }}</div>
            </div>
          </div>
        </template>
      </div>
      <div class="product-container">
        <div class="product-info-container">
          <div class="product-info-inner-container">
            <div class="product-info-image">
              <img :src="image" :alt="name" />
            </div>
            <div class="product-info-text-container">
              <div class="product-info-title">{{ name }}</div>
              <div>
                <div class="product-info-chip">{{ Locale.postpaid[$i18n.locale] }}</div>
              </div>
              <div class="product-price-container">
                <div class="product-price">
                  <span>{{ Locale.start[$i18n.locale] }}</span>
                  <span class="price">{{ price }} ฿</span>
                </div>
              </div>
            </div>
          </div>
          <div class="product-number-container" v-if="isTyphoon || data.mobile">
            <div class="product-number-title">{{ Locale.selected_number[$i18n.locale] }}</div>
            <div class="product-number-value">{{ mobileNumber }}</div>
          </div>
        </div>
        <div class="product-detail-container">
          <div class="product-text-container">
            <div class="product-detail-label">{{ Locale.your_package[$i18n.locale] }}</div>
            <div class="product-detail-description">{{ terms }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Locale from './locale.json'

  import {
    // FETCH_PRODUCT_INFO,
    FETCH_PACKAGE,
    // FETCH_PRICE_PLAN
  } from '@store/actions.type'

  export default {
    props: {
      data: {
        type: Object,
        default: () => ({})
      },
      // packages: Object,
      verifyForm: Object,
      postpaidResult: Object,
      isExisting: Boolean,
      bundle: Boolean,
      params: Object
    },
    data: () => ({
      Locale,
      packages: {},
      pricePlan: [],
      product: Object
    }),
    computed: {
      product () {
        if (this.$parent.productInfo) {
          return this.$parent.productInfo
        }
        return this.$store.state.products.productInfo.data.record
      },
      packageInfo () {
        return this.packages
      },
      pricePlans () {
        return this.pricePlan
      },
      isTyphoon () {
        const bundle = this.data?.bundle?.bundle
        if (!bundle) return
        return bundle.is_typhoon && bundle.campaign_mnp_type !== 'one_step'
      },
      isMnp () {
        return this.product.product_type === 'mnp' || this.product.is_mnp_bundling
      },
      isBundle () {
        return [
          'bundle_existing_verify',
          'device_bundle_new_customer'
        ].includes(this.product.product_type)
      },
      name () {
        return this.data?.bundle?.['custom_name'] || this.packageInfo.name
      },
      thaiid () {
        const id = this.isExisting ? this.verifyForm.id_number : this.postpaidResult.thai_id
        return id.substring(0, 3) + 'XXXXXX' + id.substring(9, 13)
      },
      birthday () {
        if (this.isExisting) {
          return `${this.verifyForm.date_birth}/${this.verifyForm.month_birth}/${this.verifyForm.year_birth}`
        }
        return this.postpaidResult.birth_date
      },
      startTime () {
        if (!this.data.updated_at) return
        return this.computeTime(this.data.updated_at.replace(/-/g, '/'))
      },
      endTime () {
        if (!this.data.hold_expired_date) return
        return this.computeTime(this.data.hold_expired_date.replace(/-/g, '/'))
      },
      price () {
        const plans = this.pricePlans.map(item => item.price)
        return Math.min(...plans)
      },
      image () {
        if (this.bundle || !this.isBundle) return this.packageInfo.package_image_desktop
        return this.packages.package_image_desktop
      },
      terms () {
        return this.packageInfo.term_short
      },
      mnpRandomNumber () {
        return this.$store.state.mnp.mnpRandomNumber
      },
      mobileNumber () {
        const number = this.isTyphoon ? this.mnpRandomNumber.number_random_result : this.data.mobile
        return number.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')
      }
    },
    created () {
      // this.fetchProduct()
      this.fetchPackage()
      // this.fetchPricePlan()
    },
    methods: {
      computeTime (time) {
        const dt = new Date(time)
        let hours = dt.getHours()
        hours = hours < 10 ? `0${hours}` : hours
        let mins = dt.getMinutes()
        mins = mins < 10 ? `0${mins}` : mins
        let secs = dt.getSeconds()
        secs = secs < 10 ? `0${secs}` : secs
        return `${hours}:${mins}:${secs}`
      },
      // async fetchProduct () {
      //   window.localStorage.removeItem('sim_family_info')
      //   const product = await this.$store.dispatch(FETCH_PRODUCT_INFO, {
      //     id: this.$route.params.id || this.params.id,
      //     tmvhAuth: this.$route.query.token,
      //     type: 'sim'
      //   })
      //   this.product = product.data.record
      //   if (this.product.sim_family_info) window.localStorage.setItem('sim_family_info', JSON.stringify(product.data.record.sim_family_info))
      // },
      async fetchPackage () {
        const data = await this.$store.dispatch(
          FETCH_PACKAGE,
          this.params.nas_code || this.luckyNas
        )
        this.packages = data.record[0]
        this.$store.state.postpaid.package.record[0] = data.record[0]
        window.localStorage.setItem('proposition_amdoc', this.packages.proposition_amdoc)
      },
      // async fetchPricePlan () {
      //   const params = {
      //     nas_code: this.params.nas_code || this.luckyNas,
      //     token: this.$route.query.token,
      //     product_id: this.params.id
      //   }
      //   if (this.product.product_type === 'device_bundle_new_customer') {
      //     params.bundle_propo_code = this.$route.params.propo
      //   }
      //   if (this.$route.name.includes('drlucky-zodiac-verify')) {
      //     params.sim_type = this.$route.query.sim_type || 'postpaid'
      //   }
      //   const data = await this.$store.dispatch(FETCH_PRICE_PLAN, {
      //     params,
      //     headers: { 'tmvh-token': this.$route.query.token }
      //   })
      //   this.pricePlan = data.data.record
      // }
    }
  }
</script>

<style lang="scss" src="./style.scss" scoped />
