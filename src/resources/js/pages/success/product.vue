<template>
  <div>
    <div class="product-info">
      <div class="product-image">
        <img :src="image" />
      </div>
      <div class="product-info-container">
        <div class="product-name">
          {{ product.title }}
          <template v-if="isTruecard && product.meta.level">
            <span style="white-space: pre"> - </span>
            <div class="true-card-level">
              {{ product.meta.level }}
            </div>
          </template>
        </div>

        <div
          class="product-category-container"
          v-if="product.product_type === 'mnp'"
        >
          <div class="product-category">{{ product.postpaid.meta.price_plan.sim_type }}</div>
        </div>
        <div
          class="product-category-container"
          v-else-if="isPrepaid"
        >
          <div class="product-category">Prepaid</div>
        </div>
        <div
          class="product-category-container"
          v-else-if="product.postpaid"
        >
          <div class="product-category">Postpaid</div>
        </div>
        <div
          v-if="isTruecard && product.meta.true_card.first_time"
          class="true-card-message"
        >{{ Content.truecard_free[$i18n.locale] }}</div>
        <div
          class="product-price-container"
          :class="{ 'discount': parseFloat(product.compare_at_price) !== 0 && parseFloat(product.compare_at_price) !== parseFloat(product.price)} "
          :hidden="product.hide_price"
        >
          <div class="special-price">
            {{ computePrice(product.price * product.quantity) }} ฿
          </div>
          <div class="original-price">
            {{ computePrice(product.compare_at_price * product.quantity) }} ฿
          </div>
        </div>
        <div
          v-if="isTruecard && product.meta.true_card.card_upgrade"
          class="true-card-upgrade"
        >
          <span>{{ Content.truecard_upgrade[$i18n.locale] }} </span>
          <span class="level">{{ product.meta.level}}</span>
        </div>
      </div>
      <div class="product-quantity">
        <div class="quantity-label">Quantity</div>
        <div class="quantity-value">{{ product.quantity }}</div>
      </div>
    </div>
    <mnp-sim
      v-if="product.product_type === 'mnp'"
      :meta="product.postpaid.meta"
    />
    <activate-sim
      v-else-if="product.postpaid"
      :postpaid="product.postpaid"
      no-step
    />
    <div v-if="iotMeta"
      class="product-meta-info-container"
    >
      <div class="product-meta-info">
        <div class="iot-title">
          {{ Content.iot_desciption.detail[$i18n.locale] }}
          <template v-if="iotMeta.cloud === '99' || iotMeta.cloud === '159'">1</template>
          <template v-else>2</template>
          <template v-if="iotMeta.cloud === '99x2' || iotMeta.cloud === '159x2'">{{ Content.iot_desciption.units[$i18n.locale] }}</template>
          <template v-else>{{ Content.iot_desciption.unit[$i18n.locale] }}</template>
          <template v-if="iotMeta.iot_type === 'truemoveh'">{{ Content.iot_desciption.vat_detail[$i18n.locale] }}</template>
        </div>
        <div class="iot-title">
          {{ Content.iot_desciption.subscribe[$i18n.locale] }}
          <template v-if="iotMeta.cloud === '99x2'">99</template>
          <template v-else-if="iotMeta.cloud === '159x2'">159</template>
          <template v-else>{{ iotMeta.cloud }}</template>
          <span>{{ Content.iot_desciption.price[$i18n.locale] }}</span>
          <span v-if="iotMeta.cloud === '99x2' || iotMeta.cloud === '159x2'">{{ Content.iot_desciption.two_unit[$i18n.locale] }} </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    computePrice
  } from '@utils/common'
  import resultVue from '../drlucky-zodiac/home/result.vue'

  export default {
    components: {
      'activate-sim': () => import('@components/activate-sim'),
      'mnp-sim': () => import('./mnp-sim')
    },
    props: {
      product: Object
    },
    data: () => ({
      Content: {
        truecard_free: {
          th: '*ครั้งแรกรับบัตรฟรี',
          en: '*Get Free for first time'
        },
        truecard_upgrade: {
          th: '*คุณได้รับสิทธ์การอัพเกรดเป็น ',
          en: '*You can upgrade True Card to '
        },
        iot_desciption: {
          detail: {
            th: 'รับฟรี กล้อง CCTV จำนวน',
            en: 'Free CCTV'
          },
          unit: {
            th: ' เครื่อง',
            en: ' unit'
          },
          units: {
            th: ' เครื่อง',
            en: ' units'
          },
          subscribe: {
            th: 'พร้อมสมัครบริการ CCTV Cloud เดือนละ',
            en: 'Subscribe CCTV Cloud'
          },
          price: {
            th: ' บาท',
            en: '฿ per month'
          },
          vat_detail: {
            th: ' (ชำระ VAT 7%)',
            en: ' (pay 7% VAT)'
          },
          two_unit: {
            th: ' (2 รายการ)',
            en: ' x2'
          }
        }
      }
    }),
    computed: {
      iotMeta () {
        if (this.product.meta) {
          const meta = JSON.parse(this.product.meta)
          if (meta?.cloud) return JSON.parse(this.product.meta)
        }
        return false
      },
      image () {
        if (this.isTruecard) {
          return this.product.meta.image_url
        }
        if (this.product.sim_meta?.length > 0) {
          const simMeta = JSON.parse(this.product.sim_meta)
          if (simMeta && simMeta[0].sim_image) {
            return simMeta[0].sim_image
          }
        }
        return this.product.image_url
      },
      isTruecard () {
        return this.product.product_type === 'truecard' && this.product.meta
      },
      isPrepaid () {
        return this.product?.postpaid?.meta?.['sim_type'] === 'prepaid'
      }
    },
    methods: {
      computePrice
    }
  }
</script>

<style lang="scss" scoped>
  .product-info {
    display: flex;

    .product-image {
      max-width: 140px;
      margin-right: 20px;
      img {
        width: 100%;
        display: block;
      }
    }
    .product-info-container {
      flex: 1;
      margin-right: 20px;
      display: flex;
      flex-direction: column;

      .product-name {
        font-family: "TrueBold";
        font-size: 24px;
        line-height: 24px;
        color: #000;
        margin-bottom: 6px;
        display: flex;

        .true-card-level {
          text-transform: lowercase;

          &::first-letter {
            text-transform: uppercase;
          }
        }
      }
      .product-category-container {
        display: flex;
        margin-bottom: 16px;

        .product-category {
          color: #fff;
          background: #ff0000;
          line-height: 21px;
          height: 20px;
          font-size: 16px;
          text-align: center;
          padding: 0 16px;
          border-radius: 10px;
          font-family: "TrueBold";
          text-transform: capitalize;
        }
      }
      .true-card-message {
        color: #666;
        font-size: 20px;
      }
      .product-price-container {
        margin-top: 8px;
        line-height: 30px;
        display: flex;
        flex: 1;

        &[hidden] {
          display: none;
        }

        .special-price {
          font-family: "TrueBold";
          font-size: 30px;
          color: #000;
        }
        .original-price {
          display: none;
        }
        &.discount {
          .special-price {
            color: #ff0000;
          }
          .original-price {
            display: block;
            margin-left: 8px;
            font-size: 20px;
            color: #999;
            text-decoration: line-through;
          }
        }
      }
      .true-card-upgrade {
        background-color: #f5f5f5;
        height: 30px;
        color: #e9242b;
        font-family: 'TrueBold';
        font-size: 18px;
        border: 1px dashed #ccc;
        border-radius: 3px;
        padding: 0 11px;
        display: flex;

        .level {
          text-transform: lowercase;
          display: block;
          margin-left: 4px;

          &::first-letter {
            text-transform: uppercase;
          }
        }
      }
    }
    .product-quantity {
      display: flex;
      font-size: 24px;
      line-height: 40px;

      .quantity-label {
        color: #999;
        margin-right: 30px;
      }
      .quantity-value {
        color: #000;
      }
    }
  }
  .product-meta-info-container {
    margin-top: 16px;
    border-radius: 8px;
    overflow: hidden;
    background-color: #f5f5f5;

    .product-meta-info {
      font-size: 24px;
      line-height: 24px;
      color: #000;
      padding: 20px;

      .meta-info-title {
        font-family: "TrueBold";

        &.margin-top {
          margin-top: 16px;
        }
      }
      .iot-title {
        font-family: "TrueMedium";

        &.margin-top {
          margin-top: 16px;
        }
      }
    }
  }
  @media screen and (max-width: 860px) {
    .product-info {
      display: grid;
      grid-template-columns: auto 1fr;
      grid-template-areas:
          "a b"
          "c d";

      .product-image {
        max-width: 100px;
      }
      .product-quantity {
        grid-area: d
      }
      .product-info-container .product-price-container {
        flex-direction: column;

        &.discount .original-price {
          margin-left: 0;
        }
      }
    }
  }
</style>
