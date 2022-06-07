<template>
  <div class="summary-container">
    <div class="summary">
      <div class="summary-item">
        <div class="summary-title">
          {{ totalQuantity }} {{ itemLabel[$i18n.locale] }}
        </div>
        <div class="summary-value">{{ computePrice(totalPrice) }} ฿</div>
      </div>
      <div class="summary-item" v-if="successData.advance_payment">
        <div class="summary-title">{{ Content.advance_payment[$i18n.locale] }}</div>
        <div class="summary-value">{{ computePrice(successData.advance_payment) }} ฿</div>
      </div>
      <div class="summary-item" v-if="successData.total_discount_from_promotion">
        <div class="summary-title">{{ Content.save[$i18n.locale] }}</div>
        <div class="summary-value red">-{{ computePrice(successData.total_discount_from_promotion) }} ฿</div>
      </div>
      <div class="summary-item">
        <div class="summary-title">{{ Content.shipping[$i18n.locale] }}</div>
        <div class="summary-value">{{ computePrice(successData.shipping_price) }} ฿</div>
      </div>
      <div class="summary-item">
        <div class="summary-title">{{ Content.total_price[$i18n.locale] }}</div>
        <div class="summary-value red">{{ computePrice(successData.price) }} ฿</div>
      </div>
    </div>
  </div>
</template>

<script>
  import Content from './Content.json'
  import { computePrice } from '@utils/common'

  export default {
    props: {
      products: Array
    },
    data: () => ({
      Content
    }),
    computed: {
      successData () {
        return this.$store.state.tracking.trackingSuccess.body.data[0]
      },
      totalQuantity () {
        return this.products.reduce((result, item) => {
          if (item.product_type === 'advancepayment') return result
          return result + item.quantity
        }, 0)
      },
      totalPrice () {
        return this.products.reduce((result, item) => {
          if (item.product_type === 'advancepayment') return result
          const productPrice = item.compare_at_price || item.price
          return result + (productPrice * item.quantity)
        }, 0)
      },
      itemLabel () {
        return this.totalQuantity > 1 ? this.Content.items : this.Content.item
      }
    },
    methods: {
      computePrice
    }
  }
</script>

<style lang="scss" scoped>
  .summary-container {
    width: 50%;
    margin-left: auto;
    padding-left: 24px;
    .summary {
      .summary-item {
        display: flex;
        border-bottom: 1px solid #ccc;
        height: 50px;
        align-items: center;
        &:last-child {
          font-family: "TrueBold";
          border-bottom: 2px solid #000;
          font-size: 30px;
          color: #000;
        }
        .summary-title {
          flex: 1;
          color: #666;
        }
        .summary-value {
          font-family: "TrueBold";
          color: #000;
          &.red {
            color: #ff0000;
          }
        }
      }
    }
  }

  @media screen and (max-width: 860px) {
    .summary-container {
      width: 100%;
      padding-left: 0;
    }
  }
</style>
