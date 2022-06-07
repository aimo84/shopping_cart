<template>
  <div
    class="package-chooser-container"
    :class="{'drlucky-prepaid': isDrLuckyPrepaid}"
  >
    <template v-if="!isDrLuckyPrepaid">
      <!-- <pre2post-tnc v-if="isPre2Post" ref="pre2postTnc" /> -->
      <clm-benefit-terms v-if="clm" ref="clmBenefitDialog" />
      <div class="package-chooser-title">{{ Locale.choose_package_title[$i18n.locale] }}</div>
      <div class="package-slider-container">
        <div
          class="button"
          @click="previousPackage"
          :disabled="sliderIndex === 0"
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
        </div>
        <div class="package-detail-container">
          <div
            ref="packageDetailSlider"
            class="package-detail-slider"
            :style="`transform: translateX(calc(-100% / 3 * ${sliderIndex}));`"
          >
            <template v-if="isLucky">
              <lucky-package-detail
                class="package-item"
                v-for="(item, key) in plans"
                :key="key"
                :plan="item"
                @update="updateSelected"
              />
            </template>
            <!-- <template v-else-if="isPre2Post">
              <pre2post-package-detail
                class="package-item pre2post"
                v-for="(item, key) in plans"
                :key="key"
                :plan="item"
                :selected="selected === key"
                @update="updateSelected"
              />
            </template> -->
            <template v-else>
              <package-detail
                class="package-item"
                :demo="demo"
                v-for="(item, key) in plans"
                :key="key"
                :clm="clm"
                :plan="item"
                :move-to-us="moveToUs"
                :selected="selected === key"
                @update="updateSelected"
                @open-clm-dialog="openClmDialog"
              />
            </template>
            <div class="package-item-mobile" />
          </div>
        </div>
        <div
          class="button"
          @click="nextPackage"
          :disabled="plans.length - 3 <= sliderIndex"
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
        </div>
      </div>
      <!-- <div class="tnc" v-if="isPre2Post">
        <span @click="$refs.pre2postTnc.open()">Terms &amp; Conditions</span>
      </div> -->
      <div class="slider-indicator-container">
        <div
          class="slider-indicator"
          :class="{ active: sliderIndex === 3 * ( item - 1 ) }"
          v-for="(item, key) in Math.ceil(plans.length / 3)"
          :key="key"
          @click="sliderIndex = 3 * ( item - 1 )"
        />
      </div>
    </template>
    <div
      class="package-chooser-button-container"
      :class="{lucky: isLucky, 'drlucky-prepaid': isDrLuckyPrepaid}"
    >
      <router-link :to="cancelUrl">
        <template v-if="isMnpBundlingExisting || isDeviceBundleExisting || isPre2Post">
          <button-element class="button cancel">{{ Locale.other_campaign_cancel[$i18n.locale] }}</button-element>
        </template>
        <template v-else>
          <button-element class="button cancel">{{ cancelLabel[$i18n.locale] || Locale.cancel[$i18n.locale] }}</button-element>
        </template>
      </router-link>
        <button-element
          v-show="!demo"
          class="button"
          id="verify_package"
          @click="$emit('next', plans[selected])"
          v-if="!isLucky"
        >
          {{ next[$i18n.locale ]}}
        </button-element>
    </div>
  </div>
</template>

<script>
  import Button from '@components/button'
  import Locale from './locale.json'

  export default {
    components: {
      'button-element': Button,
      'package-detail': () => import('./priceplan-chooser-detail'),
      'lucky-package-detail': () => import('./lucky-priceplan-chooser-detail'),
      'clm-benefit-terms': () => import('@components/clm-benefit-terms')
      // 'pre2post-package-detail': () => import('./pre2post-priceplan-chooser-detail'),
      // 'pre2post-tnc': () => import('./pre2post-tnc')
    },
    props: {
      camptype: String,
      cancelUrl: String,
      cancelLabel: [Object, Boolean],
      clm: Boolean,
      data: Object,
      moveToUs: Boolean,
      pre2post: Boolean,
      demo: String
    },
    data: () => ({
      Locale,
      sliderIndex: 0,
      selected: 0
    }),
    computed: {
      isMnpBundlingExisting () {
        return this.camptype === 'mnp_bundling_existing'
      },
      isDeviceBundleExisting () {
        return this.camptype === 'device_bundle_existing'
      },
      isPre2Post () {
        return this.camptype === 'pre2post'
      },
      isDrLuckyPrepaid () {
        return this.$route.name.includes('drlucky-zodiac-verify') && this.$route.query.sim_type === 'prepaid'
      },
      isLucky () {
        if (this.$route.name === 'online-store-lucky-verify') return true
        if (this.$route.name.includes('drlucky-verify')) return true
        if (this.$route.name.includes('drlucky-zodiac-verify')) return true
        return false
      },
      // isPre2Post () {
      //   return this.$route.name === 'online-store-trueidbox-verify' && this.$route.query.type === '5'
      // },
      product () {
        return this.$store.state.products.productInfo.data.record
      },
      plans () {
        const plans = this.$store.state.postpaid.pricePlan.data.record
        return plans.sort((a, b) => {
          if ((a.recommended === '1') !== (b.recommended === '1')) {
            return a.recommended === '1' ? -1 : 1
          }
          return parseFloat(a.price) - parseFloat(b.price)
        })
      },
      next () {
        if (this.pre2post) return this.Locale.verify
        if (this.product.product_type === 'family_black_truecard') return this.Locale.next
        if (this.product.product_type === 'bundle_existing_verify') return this.Locale.check
        return this.Locale.verify
      }
    },
    mounted () {
      this.scrollToPackage()
    },
    methods: {
      scrollToPackage () {
        if (!this.$route.query.rc) return
        const index = this.plans.findIndex(e => e.price === this.$route.query.rc)
        if (index < 0) return
        this.selected = index
        this.sliderIndex = Math.floor(index / 3) * 3
        const packages = this.$refs.packageDetailSlider.querySelectorAll('.package-item')
        if (packages[index]) {
          packages[index].scrollIntoView({
            block: 'nearest',
            inline: 'start'
          })
        }
      },
      nextPackage () {
        this.sliderIndex = this.sliderIndex + 3
      },
      previousPackage () {
        this.sliderIndex = this.sliderIndex - 3
      },
      updateSelected (key) {
        if (this.isLucky) return this.$emit('next', this.plans[key])
        this.selected = key
      },
      openClmDialog (e) {
        this.$refs.clmBenefitDialog.open(e)
      }
    }
  }
</script>

<style lang="scss" src="./style.scss" scoped></style>
<style lang="scss" scoped>
  .package-chooser-container.drlucky-prepaid {
    background: transparent;
    padding-bottom: 0;

    .package-chooser-button-container {
      margin-top: 0;
    }
  }
</style>
