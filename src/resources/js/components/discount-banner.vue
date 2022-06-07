<template>
  <div class="discount-banner" :small="small">
    <template v-if="status">
      <div class="label">
        <template v-if="$i18n.locale === 'th'">
          <span class="text">ใส่โค้ดลดเพิ่ม</span>
          <span class="amount">{{ discount }}{{ type }}</span>
        </template>
        <template v-else>
          <template v-if="type === '%'">
            <span class="amount">{{ discount }}{{ type }}</span>
            <span class="text-discount">Discount code</span>
          </template>
          <template v-else>
            <span class="text">{{ label }}</span>
            <span class="amount">{{ discount }}{{ type }}</span>
          </template>
        </template>
      </div>
      <div class="code">
        <div class="arrow" />
        {{ code }}
      </div>
    </template>
  </div>
</template>

<script>
  import {
    computeBalance
  } from '@utils/common'
  export default {
    props: {
      small: Boolean,
      coupon: Object
    },
    computed: {
      label () {
        return this.small ? 'Discount' : 'On-Top Discount'
      },
      status () {
        return this.coupon && this.coupon.coupon_status && this.coupon.coupon[0]
      },
      item () {
        return this.coupon.coupon[0]
      },
      discount () {
        return computeBalance(this.item.discount)
      },
      type () {
        return this.item.discount_type === 'percent' ? '%' : ''
      },
      code () {
        return this.item.code
      }
    }
  }
</script>

<style lang="scss" scoped>
.discount-banner {
  background-color: black;
  color: #fff;
  width: 100%;
  display: grid;
  grid-template-columns: 4fr 3fr;
  align-items: center;
  height: 64px;
  margin-bottom: 16px;
  overflow: hidden;

  &:empty {
    display: none;
  }

  &[small] {
    height: 40px;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 4px;

    &:empty {
      display: block;
      background-color: transparent;
      border-bottom: 1px solid #ddd;
    }

    .label {
      font-size: 18px;
      line-height: 40px;
      height: 40px;
      .text-discount {
        margin-left: 4px;
      }
      .amount {
        font-size: 22px;
      }
    }
    .code {
      font-size: 20px;

      .arrow {
        border-top: 6px solid transparent;
        border-bottom: 6px solid transparent;
        border-left: 6px solid #000;
      }
    }
  }
  .label {
    display: flex;
    align-items: baseline;
    justify-content: center;
    font-size: 22px;
    height: 64px;
    line-height: 64px;
    .text-discount {
        margin-left: 4px;
    }
    .amount {
      margin-left: 4px;
      font-size: 28px;
    }
  }
  .code {
    background: linear-gradient(90deg, #ab4ceb, #ee73b9);
    height: 100%;
    display: grid;
    place-items: center;
    position: relative;
    font-size: 28px;
    padding-left: 5px;
    margin-right: -2px;

    .arrow {
      position: absolute;
      left: 0;
      width: 0;
      height: 0;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      border-left: 10px solid #000;
    }
  }
}
@media screen and (max-width: 1000px) {
  .discount {
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (max-width: 860px) {
  .discount-banner[small] {
    .label {
      font-size: 16px;

      .amount {
        font-size: 18px;
        margin-left: 3px;
      }
    }
    .code {
      font-size: 18px;
    }
  }
}
@media screen and (max-width: 450px) {
  .discount-banner[small] {
    grid-template-columns: 1fr auto;

    .label {
      flex-direction: column;
      line-height: 14px;
      align-items: center;
      padding: 0 12px;
    }
    .code {
      padding: 0 8px 0 12px;
      .arrow {
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-left: 5px solid #000;
      }
    }
  }
}
@media screen and (max-width: 360px) {
  .discount-banner[small] .label {
    padding: 0 6px;
  }
}
@media screen and (max-width: 400px) {
  .discount-banner[small] {
    grid-template-columns: auto 2fr;

    .label {
      font-size: 14px;
      .amount {
        font-size: 15px;
      }
    }
    .code {
      padding: 0 4px 0 8px;
      font-size: 15px;
    }
  }
}
@media screen and (max-width: 320px) {
  .discount-banner[small] {
    grid-template-columns: 1fr 1fr;
    .label {
      font-size: 16px;
      flex-direction: revert;
      align-items: baseline;
      line-height: 40px;

      .amount {
        font-size: 18px;
        margin-left: 3px;
      }
    }
    .code {
      font-size: 18px;
    }
  }
}
</style>
