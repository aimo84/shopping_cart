<template>
  <div class="page-container">
    <div class="result-container">
      <div class="icon success" v-if="status">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" stroke="#fff" />
        </svg>
      </div>
      <div class="icon failed" v-else>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0V0z" fill="none"/>
          <path stroke="#fff" d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/>
        </svg>
      </div>
      <div class="result-title success" v-if="status">{{ Locale.passedCheck[$i18n.locale] }}</div>
      <div class="result-title failed" v-else>{{ result.message[$i18n.locale] }}</div>
      <div class="privilege-container" v-if="status">
        <div class="privilege-label">{{ Locale.privilegedCustomer[$i18n.locale] }}</div>
        <div class="privilege-items">
          <div class="privilege-item" v-for="(product, key) in products" :key="key">
            <template
              v-if="result.product_id_list_pass.includes(product.id)"
            >{{ product.title }}</template>
          </div>
        </div>
      </div>
      <div
        class="result-warning"
        :class="{ 'margin-top': failedLists.length > 0 }"
        v-if="failedLists.length > 0"
      >
        <svg class="warning-icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M4.47 19h15.06L12 5.99 4.47 19zM13 18h-2v-2h2v2zm0-4h-2v-4h2v4z" opacity="0"/>
          <path d="M1 21h22L12 2 1 21zm3.47-2L12 5.99 19.53 19H4.47zM11 16h2v2h-2zm0-6h2v4h-2z"/>
        </svg>
        <div class="warning-message">
          <span>{{ Locale.warning1[$i18n.locale] }}</span>
          <template v-for="(item, key) in failedLists">
            <span :key="key" style="margin-right: -4px; white-space: nowrap;">{{ productsObj[item].title }}</span>
            <span :key="`b-${key}`" v-if="key === failedLists.length - 2">, {{ Locale.warning_and[$i18n.locale] }} </span>
            <span :key="`a-${key}`" v-else-if="key < failedLists.length - 1">, </span>
          </template>
          <span>.</span>
          <div>{{ Locale.warning2[$i18n.locale] }}</div>
        </div>
      </div>
      <div
        class="otp-message"
        v-if="showOtpError"
      >{{ Locale.otp[$i18n.locale] }}</div>
      <div class="result-message" v-if="status">{{ Locale.resultNext[$i18n.locale] }}</div>
      <div class="result-button-container">
        <button-element class="button" @click="back">{{ Locale.back[$i18n.locale] }}</button-element>
        <button-element class="button next" v-if="status" @click="next">{{ Locale.next[$i18n.locale] }}</button-element>
      </div>
    </div>
  </div>
</template>

<script>
  import Button from '@components/button'
  import Locale from './locale.json'

  export default {
    components: {
      'button-element': Button
    },
    props: {
      selected: Array,
      result: Object,
      products: Array,
      selectedProducts: Array
    },
    data: () => ({
      Locale,
      status: true,
      showOtpError: false,
      failedLists: [],
      productsObj: {}
    }),
    mounted () {
      const error = this.result.error_message

      const selectedLists = this.products.map((product) => {
        if (product.selected) return product.id
      }).filter(item => item)

      this.failedLists = selectedLists.filter(
        n => !this.result.product_id_list_pass.includes(n)
      )

      this.products.forEach((product) => {
        this.productsObj[product.id] = {
          title: product.title
        }
      })

      if (error && error.en) {
        if (error.en === 'not pass because of otp check') {
          this.status = false
          this.showOtpError = true
        } else if (this.result.product_id_list_pass.length === 0) {
          this.status = false
        }
      }
    },
    methods: {
      updatePrivilege () {
        if (this.result.privilege_placeorder) {
          const key = 'privilege-placeorder'
          let privileges = JSON.parse(localStorage.getItem(key)) || []
          if (!Array.isArray(privileges)) privileges = []
          const privilege = privileges.filter((item) => {
            return !this.result.product_id_list_pass.includes(item.product_id)
          })
          if (this.result.privilege_placeorder[0]) {
            this.result.privilege_placeorder[0].timestamp_expired = Date.now() + 172800000
          }
          localStorage.setItem(key, JSON.stringify([...this.result.privilege_placeorder, ...privilege]))
        }
      },
      back () {
        this.$parent.goTo('form')
      },
      next () {
        const cart = this.products.map((product) => {
          if (product.selected && this.result.product_id_list_pass.includes(product.id)) {
            return {
              product_id: product.id,
              inventory_id: product.inventory_id,
              store_id: product.store_id,
              section: product.section,
              quantity: 1
            }
          }
        }).filter(item => item)

        this.updatePrivilege()
        this.$parent.computeCart(cart)
      }
    }
  }
</script>

<style lang="scss" scoped>
.result-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1100px;
  margin: 50px auto;
  background-color: #fff;
  padding: 76px 24px 50px 24px;
  border-radius: 8px;

  .icon {
    width: 58px;
    height: 58px;
    border-radius: 50%;
    margin-bottom: 44px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      fill: #fff;
    }

    &.success {
      background-color: #54c74c;
      box-shadow: 1px 1px 0 #1f9716;
    }

    &.failed {
      background-color: #ff0000;
      box-shadow: 1px 1px 0 #8e0000
    }
  }
  .result-title {
    font-size: 40px;
    line-height: 30px;
    font-family: 'TrueBold';
    text-align: center;

    &.success {
      color: #54c74c;
    }

    &.failed {
      color: #ff0000;
    }
  }
  .privilege-container {
    max-width: 400px;
    width: 100%;
    border-radius: 8px;
    background-color: #f5f5f5;
    padding: 12px;
    text-align: center;
    margin: 15px auto;

    .privilege-label {
      color: #4a4a4a;
      font-size: 24px;
      line-height: 28px;
      margin-bottom: 4px;
    }
    .privilege-items {
      font-family: 'TrueBold';
      font-size: 30px;
      line-height: 30px;
      color: #000;

      .privilege-item {
        margin-bottom: 4px;
      }
    }
  }
  .otp-message {
    font-size: 24px;
    max-width: 400px;
    margin: 36px auto 0;
    text-align: center;
    line-height: 24px;
    color: red;
  }
  .result-warning {
    display: flex;
    max-width: 396px;
    align-items: center;
    flex-direction: column;
    text-align: center;

    &.margin-top {
      margin-top: 24px;
    }

    .warning-icon {
      fill: #ff0000;
      width: 24px;
      height: 24px;
      min-width: 24px;
      min-height: 24px;
      margin-bottom: 6px;
    }
    .warning-message {
      color: #ff0000;
      font-size: 20px;
      line-height: 20px;
    }
  }
  .result-message {
    margin-top: 16px;
    font-size: 24px;
    line-height: 28px;
    max-width: 620px;
    text-align: center;
    color: #000;

    span {
      font-family: 'TrueBold';
    }
  }
  .result-button-container {
    margin-top: 44px;
    display: flex;

    .button {
      background-color: #ff0000;

      &.back {
        background-color: #666;
      }

      &.next {
        margin-left: 20px;
      }
    }
  }
}

@media screen and (max-width: 1148px) {
  .page-container {
    padding: 24px 0;
  }
  .result-container {
    margin: 0 24px;
  }
}

@media screen and (max-width: 640px) {
  .result-container {
    padding: 30px 24px 50px 24px;

    .icon {
      margin-bottom: 16px;
    }

    .result-button-container {
      flex-direction: column-reverse;

      .button {
        &.back {
          margin-top: 12px;
        }
        &.next {
          margin-bottom: 12px;
          margin-left: 0;
        }
      }
    }
  }
}
</style>
