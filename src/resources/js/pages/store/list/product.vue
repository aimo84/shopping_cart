<template>
  <div
    class="product_container"
    :class="[soldout ? 'product_container_soldout' : { skeleton: loading }, isTrueOnline ? `removeFixedHeight` : `` ]"
    @click="trackAnalytics()"
  >
    <template v-if="loading">
      <div class="product_image_container">
        <div class="skeleton dark animate" />
      </div>
      <div class="product_title skeleton" />
      <div class="product_price_container">
        <div class="special_price skeleton" />
      </div>
      <div class="product_buy_container skeleton dark" />
    </template>
    <template v-else>
      <div class="discount" v-if="saving > 0">
        <template v-if="$i18n.locale === 'th'">{{ Locale.off[$i18n.locale] }} {{ discount }}%</template>
        <template v-else>{{ discount }}% {{ Locale.off[$i18n.locale] }}</template>
      </div>
      <div v-if="data.installment" class="installment-payment-badge">
        <img class="discount-img" src="/images/store/discount.jpg" />
      </div>
      <div class="product_image_container">
        <div class="image">
          <img :class="soldout && 'image_soldout'" :src="data.images[0].url" loading="lazy" :alt="data.title[$i18n.locale] || data.title.th" />
        </div>
      </div>
      <div class="product_title">
          {{ data.title[$i18n.locale] || data.title.th }}
          <button v-if="soldout" class="product_title_soldout">{{ Locale.product_soldout[$i18n.locale] }}</button>
      </div>
      <div class="product_price_container">
        <div class="special_price">
          <template v-if="data.price === '0'">{{ Locale.free[$i18n.locale] }}*</template>
          <template v-else>
            <span class="start_at_text">{{ Locale.start_at[$i18n.locale] }}</span>
            <span class="price_text">{{ computeBalance(Math.trunc(data.price)).toLocaleString() }}.-</span>
          </template>
        </div>
        <div class="original_price" v-if="saving > 0">
          <span>{{ computeBalance(Math.trunc(data.compare_at_price_max)).toLocaleString() }}.-</span>
        </div>
      </div>
      <router-link
        v-if="trueonline"
        :to="`/trueonline/item/${data.id}`"
        class="package_detail"
        id="tol-lvc-package-detail"
      >{{ Locale.packagedetail[$i18n.locale] }}</router-link>
      <div
        class="product_buy_container"
        :class="trueonline && 'no_padding'"
        ref="product"
      >
        <button-element
            class="button"
            :class="soldout && 'button_soldout'"
            id="view_product"
            v-if="!isExpandedPage"
          >
          <template v-if="soldout">
            {{ Locale.soldout[$i18n.locale] }}
          </template>
          <template v-else-if="trueonline">
            {{ Locale.applynow[$i18n.locale] }}
          </template>
          <template v-else-if="blackSim && blackSim[data.id]">
            {{ Locale.verify[$i18n.locale] }}
          </template>
          <template v-else>
            {{ Locale.buynow[$i18n.locale] }}
          </template>
        </button-element>
      </div>
    </template>
  </div>
</template>

<script>
  import Button from '@components/button'
  import DiscountBanner from '@components/discount-banner'
  import Locale from './locale.json'
  import 'intersection-observer'
  import {
    computeBalance
  } from '@utils/common'

  export default {
    components: {
      'button-element': Button,
      'discount-banner': DiscountBanner
    },
    props: {
      index: Number,
      data: Object,
      postpaid: Array,
      prepaid: Array,
      loading: Boolean,
      trueonline: Boolean,
      coupon: Object,
      isExpandedPage: Boolean
    },
    data: () => ({
      Locale,
      tracked: false
    }),
    computed: {
      config () {
        return this.$store.state.config.verifyConfig
      },
      verifySim () {
        return this.config.verify && this.config.verify.filter(
          item => item.type === 'postpaid' || item.type === 'prepaid'
        )
      },
      blackSim () {
        return this.config.family_black_truecard
      },
      discount () {
        const original = parseFloat(this.data.compare_at_price_max)
        return Math.floor(this.saving / original * 100)
      },
      saving () {
        const original = parseFloat(this.data.compare_at_price_max)
        const price = parseFloat(this.data.price)
        return original - price
      },
      postpaidSim () {
        const packages = this.postpaid.map(item => `L${item.product_id}`)
        const black = this.blackSim && Object.keys(this.blackSim)
        return [...packages, ...black || []]
      },
      prepaidSim () {
        const packages = this.prepaid.map(item => `L${item.product_id}`)
        const verify = this.verifySim && this.verifySim
          .filter(item => item.type === 'prepaid')
          .map(item => item.id)
        return [...packages, ...verify || []]
      },
      soldout () {
        return this.data?.quantity === 0
      },
      isTrueOnline () {
        return this.trueonline
      }
    },
    mounted () {
      if (!this.loading && 'IntersectionObserver' in window) {
        this.observer = new IntersectionObserver(entries => {
          if (entries.some(entry => entry.intersectionRatio > 0)) {
            this.trackAnalytics(true)
            this.observer.disconnect()
          }
        })
        this.observer.observe(this.$refs.product)
      }
    },
    methods: {
      computeBalance,
      trackAnalytics (isView) {
        const data = this.data
        const sim = ['sim', 'vlearn']
        const isSim = sim.includes(data.type_of_product) ||
          this.prepaidSim.includes(data.id) ||
          this.postpaidSim.includes(data.id)
        const isPrepaid = this.prepaidSim.includes(data.id)
        const event = {
          event: 'ecommerce_event',
          event_category: isSim ? 'SIM' : 'device',
          event_action: isView ? 'impression' : 'click',
          event_label: isView
            ? (isSim ? 'SIM_impression' : 'device_impression')
            : (isSim ? 'SIM_click' : 'device_click'),
          ecommerce: {
            currencyCode: 'THB'
          }
        }
        const impressions = {
          name: data.title.th,
          id: data.id,
          price: parseFloat(data.price).toFixed(2),
          category: isSim ? 'SIM' : 'device',
          brand: '',
          position: this.index,
          dimension6: parseFloat(data.compare_at_price_max).toFixed(2),
          dimension7: parseFloat(data.price).toFixed(2)
        }
        if (isSim) {
          impressions.variant = isPrepaid ? 'Prepaid' : 'Postpaid'
          impressions.dimension9 = isPrepaid ? 'Prepaid SIM' : 'Postpaid SIM'
          impressions.dimension10 = ''
          impressions.dimension11 = ''
        } else {
          impressions.variant = ''
          impressions.dimension8 = ''
        }
        if (isView) {
          impressions.list = isSim ? 'SIM' : 'device'
          event.ecommerce.impressions = [impressions]
        } else {
          event.ecommerce.click = {
            products: [impressions]
          }
        }
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push(event)
      }
    }
  }
</script>

<style scoped lang="scss">
  .product_container {
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    background: #fff;
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);
    text-align: center;
    overflow: hidden;
    position: relative;
    border: 3px solid transparent;
    text-decoration: none;
    width: 190px;
    height: 365px;

    &.removeFixedHeight {
      height: auto;
    }

    &:hover {
      transition: 150ms border-color ease;
      border-color: #000;

      .product_container .product_price_container .special_price {
        transition: 150ms color ease;
        color: #000;
      }

      .product_buy_container .button {
        transition: 150ms background-color ease;
        background-color: #000;
      }
    }

    .discount {
      position: absolute;
      background-color: #000;
      font-size: 24px;
      font-family: "TrueBold";
      color: #fff;
      right: 0;
      padding: 0 16px 0 8px;
      height: 30px;
      line-height: 30px;
      text-transform: uppercase;

      &:before {
        content: "";
        position: absolute;
        left: -12px;
        width: 0;
        height: 0;
        border-top: 15px solid transparent;
        border-bottom: 15px solid transparent;
        border-right: 12px solid #000;
      }
    }

    .product_image_container {
      padding: 45px 10px 20px 10px;
      background-color: #fff;

      .skeleton,
      .image {
        max-width: 200px;
        height: auto;
        margin: auto;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        position: relative;

        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .image_soldout {
          filter: opacity(0.5);
        }

        &::after {
          content: '';
          display: block;
          padding-bottom: 100%;
        }
      }
    }
    .product_title {
      font-size: 24px;
      line-height: 22px;
      font-family: "TrueMedium";
      padding: 0px 10px;
      text-align: left;
      color: #000;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      max-height: 55px;
      text-align: center;

      &.skeleton {
        width: 60%;
        margin: 12px 20px;
        padding: 16px 20px;
      }
    }

    .installment-payment-badge {
      position: absolute;
      text-align: left;
      padding-top: 10px;
      padding-left: 10px;
      .discount-img {
        height: 25px;
        width: 50px;
      }
    }

    .product_title_soldout {
      color: #DC4333;
      border: 1px solid #DC4333;
      box-sizing: border-box;
      border-radius: 4px;
      font-size: 16px;
      padding: 3px;
      background: white;
      font-family: 'TrueBold';
    }
    .product_price_container {
      text-align: center;
      min-height: 60px;
      flex: 1;

      .special_price {
        font-size: 30px;
        line-height: 30px;
        font-family: "TrueBold";
        color: #E62627;
        margin-right: 8px;
        .start_at_text {
          font-family: "TrueLight";
          font-size: 24px;
          color: #404040;
        }
        .price_text {
          margin-left: 5px;
          font-size: 36px;
        }

        &.skeleton {
          height: 30px;
          width: 45%;
        }
      }
      .original_price {
        font-size: 20px;
        line-height: 30px;
        font-family: "TrueMedium";
        color: #999;
        text-decoration: line-through;
      }
    }
    .package_detail {
      background: #f8f8f8;
      color: #0091ff;
      font-size: 22px;
      padding: 4px 12px;
      display: block;

      &:hover {
        color: #0d61b7;
      }
    }
    .product_buy_container {
      padding-top: 12px;

      &.no_padding {
        padding-top: 0;

        button {
          min-width: 187px;
          border-radius: 1px 1px 5px 5px;
        }
      }

      &.skeleton {
        margin-top: 12px;
        height: 50px;
      }

      .button {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        width: 100%;
        background-color: #ee3124;
      }

      .button_soldout {
        background-color: #C1C1C1 !important;
        cursor: default;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .product_container {
      .installment-payment-badge {
        .discount-img {
          height: 20px;
          width: 40px;
        }
      }
    }
  }
  @media screen and (max-width: 860px) {
    .product_container {
      .discount {
        height: 26px;
        line-height: 26px;
        font-size: 20px;

        &:before {
          border-top: 13px solid transparent;
          border-bottom: 13px solid transparent;
        }
      }
      .product_image_container {
        padding: 45px 15px 20px 15px;

        .skeleton,
        .image {
          max-width: 160px;
          height: auto;
        }
      }
      .product_title {
        padding: 5px 5px;
        font-size: 24px;
        line-height: 21px;
        &.skeleton {
          margin: 12px 14px;
          padding: 12px;
          width: 70%;
        }
      }
      .product_price_container {
        min-height: 50px;

        .special_price {
          font-size: 24px;
          line-height: 25px;
          &.skeleton {
            height: 20px;
            width: 45%;
          }
        }
        .original_price {
          font-size: 16px;
          line-height: 25px;
        }
      }
      .product_buy_container {
        padding-top: 4px;

        &.skeleton {
          margin-top: 0;
          height: 40px;
        }

        .button {
          height: 40px;
          padding: 8px;
          min-width: 100%;
        }
      }
    }
  }

  @media screen and (max-width: 720px) and (min-width: 430px) {
    .product_container {
      width: 200px;
    }
  }

  @media screen and (min-width: 415px) {
    .product_container {
      .product_price_container {
        .special_price {
          .start_at_text {
            font-size: 24px;
          }
          .price_text {
            font-size: 36px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 414px) {
    .product_container {
      height: 330px;

      .product_image_container {
        image {
          max-height: 140px;
        }
      }
      .product_title {
        font-size: 20px;
      }
      .product_price_container {
        .special_price {
          .start_at_text {
            font-size: 18px;
          }
          .price_text {
            font-size: 30px;
          }
        }
      }
      .product_buy_container {
        &.no_padding {
          button {
            min-width: 100%;
          }
        }
      }
    }
  }

  @media screen and (max-width: 405px) {
    .product_container {
      height: 330px;
    }
  }

  @media screen and (max-width: 395px) {
    .product_container {
      height: 300px;
      max-width: 155px;
      min-width: 145px;
    }
  }

  .product_container_soldout {
    border-color: #C1C1C1 !important;
    cursor: default;
  }
</style>
