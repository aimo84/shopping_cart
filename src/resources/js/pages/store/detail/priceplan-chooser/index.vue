<template>
  <div class="outer-container">
    <div class="price-plan-item" v-for="(item, key) in plans" :key="item.id">
      <div class="package-name-container">
        <button @click="updateSelected(key, item)">
          <div class="flex">
            <div
                    class="grid place-items-center border border-gray rounded-full w-[20px] h-[20px] mr-4 button-check"
                    :class="{'bg-red-500 border-red-500': selected === item.id}"
            >
              <svg width="14" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                        d="M12.407.03c-.307.01-.6.14-.812.361-2.29 2.294-4.378 4.55-6.59 6.803L2.296 5.03a1.185 1.185 0 0 0-1.662.184 1.182 1.182 0 0 0 .185 1.662l3.545 2.837c.471.375 1.148.337 1.574-.09 2.545-2.55 4.83-5.06 7.327-7.563A1.183 1.183 0 0 0 12.407.03Z"
                        :fill="`${selected === item.id.toString() ? '#FFF' : '#CCCCCC'}`"
                />
              </svg>
            </div>
            <div class="package-name">{{item.name.replace(item.price, '').replace('()', '')}} <strong style="color:red">{{item.price}}.-</strong></div>
          </div>
        </button>
      </div>
      <div class="option_container flex" v-show="selected === item.id.toString()">
        <!-- mocked data -->
        <!--        <div class="option">-->
        <!--          Unlimited Data 5G | 4G | 3G <br/>-->
        <!--          Max speed 1Gbps-->
        <!--        </div>-->
        <!--        <div class="option">-->
        <!--          Call to True numbers free 24 hours. <br/>-->
        <!--          Out of network 1,200 minutes-->
        <!--        </div>-->
        <!--        <div class="option">-->
        <!--          Free 3 SIM cards <br/>-->
        <!--          Free True ID for 12 months-->
        <!--        </div>-->
        <!-- active data from CMS -->
          <div class="option">
            <div v-html="item.long_description">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Locale from './locale.json'

  export default {
    props: {
      camptype: String,
      params: Object,
      cancelLabel: [Object, Boolean],
      clm: Boolean,
      data: Object,
      moveToUs: Boolean,
      pre2post: Boolean,
      // popSelected: {
      //   type: Number,
      //   default: 0
      // },
      isNewCustomer: Boolean,
      product: Object,
      pricePlan: Array,
      checked: String
    },
    data: () => ({
      Locale,
      sliderIndex: 0,
      page: 'address'
    }),
    computed: {
      selected: {
        get () {
          return this.checked
        }
      },
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
      // product () {
      // return this.$store.state.products.productInfo.data.record
      // },
      plans () {
        // const plans = this.$store.state.postpaid.pricePlan.data.record
        const plans = this.pricePlan
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
      },
      cancelUrl () {
        const name = 'online-store-postpaid'
        if (this.$route.name.includes('drlucky-verify')) {
          return this.$router.resolve({
            name: 'drlucky-select' + (this.isDrLuckyOffline ? '-offline' : '')
          }).href
        }
        if (this.$route.name.includes('drlucky-zodiac-verify')) {
          return this.$router.resolve({
            name:
              'drlucky-zodiac-home' +
              (this.isDrLuckyZodiacOffline ? '-offline' : '')
          }).href
        }
        if (this.$route.name === 'online-store-bundle-verify') { name = 'online-store-bundle' }
        if (this.$route.name === 'online-store-instantsim-verify') { name = 'online-store-instantsim' }
        if (this.$route.name === 'online-store-lucky-verify') { name = 'online-store-lucky' }
        if (this.$route.query.demo) {
          return this.$router.resolve({
            name: 'tmvhsim',
            query: {
              campId: this.$route.query.campId,
              productid: this.params.productid,
              nas_code: this.$route.query.nas_code
            }
          }).href
        }
        const route = this.$router.resolve({
          name,
          params: this.$route.params,
          query: {
            nas_code: this.$route.params.nas || this.luckyNas,
            ...this.$route.query
          }
        })
        return route.href
      },
      demo () {
        return this.$route.query.demo
      }
    },
    methods: {
      setSelected () {
        this.selected = this.checked
      },
      nextPackage () {
        this.sliderIndex = this.sliderIndex + 3
      },
      previousPackage () {
        this.sliderIndex = this.sliderIndex - 3
      },
      updateSelected (key, item) {
        if (this.isLucky) return this.$emit('next', this.plans[key])
        // this.selected = item.id
        // this.checked = item.id.toString()
        this.$emit('updateSelected', this.plans[key])
      },
      openClmDialog (e) {
        this.$refs.clmBenefitDialog.open(e)
      },
      isDrLuckyOffline () {
        return (
          this.$route.name.includes('drlucky-verify-offline') ||
          this.$route.path.includes('offline-store')
        )
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
  .package-name-container {
    margin-bottom: 4px;
    margin-top: 12px;

    .flex {
      align-items: center;
      .button-check {
        width: 22px;
        height: 22px;
        border-color: #CCCCCC;
      }

      .bg-red-500 {
        background-color: #E62627;
      }

      .border-red-500 {
        border-color: #E62627;
      }
    }
  }
  .package-name {
    font-family: 'TrueLight';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;

    /* identical to box height */

    /* True store palette/hightlight text */
    color: #000000;
    margin-left: 10px;
    strong {
      font-family: 'TrueBold';
    }
  }
  .option_container{
    min-height: 60px;
    max-width: 100%;
    background: #F7F7F7;
    border-radius: 0px 0px 10px 10px;
    margin-left: 30px;
  }
  .option{
    font-family: TrueLight;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    /* or 122% */
    /* True store palette/body text */
    color: #404040;
    margin-left: 10px;
    margin-top: 8px;

    ::v-deep img {
      width: 100%;
    }
  }
</style>
