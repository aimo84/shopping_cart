<template>
  <div class="page-container">
    <div
      class="result-container loading"
      v-if="loading"
    >
      <div class="checking-icon">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="512"
          height="512"
          viewBox="0 0 512 512"
        >
          <path d="M275.682 147.999c0 10.864-8.837 19.661-19.682 19.661v0c-10.875 0-19.681-8.796-19.681-19.661v-96.635c0-10.885 8.806-19.661 19.681-19.661v0c10.844 0 19.682 8.776 19.682 19.661v96.635z" />
          <path d="M275.682 460.615c0 10.865-8.837 19.682-19.682 19.682v0c-10.875 0-19.681-8.817-19.681-19.682v-96.604c0-10.885 8.806-19.681 19.681-19.681v0c10.844 0 19.682 8.796 19.682 19.682v96.604z" />
          <path d="M147.978 236.339c10.885 0 19.681 8.755 19.681 19.641v0c0 10.885-8.796 19.702-19.681 19.702h-96.624c-10.864 0-19.661-8.817-19.661-19.702v0c0-10.885 8.796-19.641 19.661-19.641h96.624z" />
          <path d="M460.615 236.339c10.865 0 19.682 8.755 19.682 19.641v0c0 10.885-8.817 19.702-19.682 19.702h-96.584c-10.885 0-19.722-8.817-19.722-19.702v0c0-10.885 8.837-19.641 19.722-19.641h96.584z" />
          <path d="M193.546 165.703c7.69 7.66 7.68 20.142 0 27.822v0c-7.701 7.701-20.162 7.701-27.853 0.020l-68.311-68.322c-7.68-7.701-7.68-20.142 0-27.863v0c7.68-7.68 20.121-7.68 27.822 0l68.342 68.342z" />
          <path d="M414.597 386.775c7.7 7.68 7.7 20.163 0.021 27.863v0c-7.7 7.659-20.142 7.659-27.843-0.062l-68.311-68.26c-7.68-7.7-7.68-20.204 0-27.863v0c7.68-7.7 20.163-7.7 27.842 0l68.291 68.322z" />
          <path d="M165.694 318.464c7.69-7.7 20.153-7.7 27.853 0v0c7.68 7.659 7.69 20.163 0 27.863l-68.342 68.322c-7.67 7.659-20.142 7.659-27.822-0.062v0c-7.68-7.68-7.68-20.122 0-27.801l68.311-68.322z" />
          <path d="M386.775 97.362c7.7-7.68 20.142-7.68 27.822 0v0c7.7 7.68 7.7 20.183 0.021 27.863l-68.322 68.311c-7.68 7.68-20.163 7.68-27.843-0.020v0c-7.68-7.68-7.68-20.162 0-27.822l68.322-68.332z" />
        </svg>
      </div>
      <div class="checking-label">{{ Locale.checking[$i18n.locale] }}</div>
    </div>
    <div
      class="result-container"
      v-else
    >
      <div
        class="icon success"
        v-if="status"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path
            d="M0 0h24v24H0z"
            fill="none"
          />
          <path
            d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
            stroke="#fff"
          />
        </svg>
      </div>
      <div
        class="icon failed"
        v-else
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path
            d="M0 0h24v24H0V0z"
            fill="none"
          />
          <path
            stroke="#fff"
            d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
          />
        </svg>
      </div>
      <div
        class="result-title success"
        v-if="status"
      >{{ Locale.passedCheck[$i18n.locale] }}</div>
      <div
        class="result-title failed"
        v-else
      >{{ result.message[$i18n.locale] }}</div>
      <div
        class="privilege-container"
        v-if="status"
      >
        <div class="privilege-label">{{ Locale.privilegedCustomer[$i18n.locale] }}</div>
        <div class="privilege-items">
          <div
            class="privilege-item"
            v-for="(product, key) in products"
            :key="key"
          >
            <template v-if="result.product_id_list_pass.includes(product.id)">{{ product.title }}</template>
          </div>
        </div>
      </div>
      <div
        class="result-warning"
        :class="{ 'margin-top': failedLists.length > 0 }"
        v-if="failedLists.length > 0"
      >
        <svg
          class="warning-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path
            d="M4.47 19h15.06L12 5.99 4.47 19zM13 18h-2v-2h2v2zm0-4h-2v-4h2v4z"
            opacity="0"
          />
          <path d="M1 21h22L12 2 1 21zm3.47-2L12 5.99 19.53 19H4.47zM11 16h2v2h-2zm0-6h2v4h-2z" />
        </svg>
        <div class="warning-message">
          <span>{{ Locale.warning1[$i18n.locale] }}</span>
          <template v-for="(item, key) in failedLists">
            <span
              :key="key"
              style="margin-right: -4px; white-space: nowrap;"
            >{{ products[item].title }}</span>
            <span
              :key="`b-${key}`"
              v-if="key === failedLists.length - 2"
            >, {{ Locale.warning_and[$i18n.locale] }} </span>
            <span
              :key="`a-${key}`"
              v-else-if="key < failedLists.length - 1"
            >, </span>
          </template>
          <span>.</span>
          <div>{{ Locale.warning2[$i18n.locale] }}</div>
        </div>
      </div>
      <div
        class="otp-message"
        v-if="showOtpError"
      >{{ Locale.otp[$i18n.locale] }}</div>
      <div
        class="result-message"
        v-if="status"
      >{{ Locale.resultNext[$i18n.locale] }}</div>
      <div class="result-button-container">
        <button-element
          class="button back"
          @click="back"
        >{{ Locale.back[$i18n.locale] }}</button-element>
        <button-element
          class="button next"
          v-if="status"
          @click="next"
        >{{ Locale.next[$i18n.locale] }}</button-element>
      </div>
    </div>
  </div>
</template>

<script>
  import Button from '@components/button'
  import Locale from '../locale.json'
  import {
    FETCH_PRODUCT_INFO,
    FETCH_VERIFY_CONFIG,
    UPDATE_POSTPAID_CART,
    FETCH_PRODUCT_STATUS
  } from '@store/actions.type'

  export default {
    components: {
      'button-element': Button
    },
    props: {
      result: Object,
      verifyForm: Object,
      simMeta: Object
    },
    data: () => ({
      Locale,
      status: true,
      showOtpError: false,
      products: {},
      config: {},
      failedLists: [],
      loading: true
    }),
    async mounted () {
      try {
        this.loading = true
        this.config = await this.$store.dispatch(FETCH_VERIFY_CONFIG)
        await this.fetchProducts()
        const error = this.result.error_message
        this.failedLists = this.verifyForm.product_id_list.filter(
          n => !this.result.product_id_list_pass.includes(n)
        )
        if (error && error.en) {
          if (error.en === 'not pass because of otp check') {
            this.status = false
            this.showOtpError = true
          } else if (this.result.product_id_list_pass.length === 0) {
            this.status = false
          }
        }
        this.loading = false
      } catch (e) {
        console.log('error', e)
      }
    },
    methods: {
      async checkAllowAddCart (id) {
        const productStatusData = { product_id: id }
        const cartid = window.localStorage.getItem('cart-id')
        if (cartid) productStatusData.hash = cartid
        const result = await this.$store.dispatch(FETCH_PRODUCT_STATUS, productStatusData)
        if (result.data.allow_addcart.shop === false) return { id, status: false }
        const hash = result.data.hash
        if (hash) window.localStorage.setItem('cart-id', hash)
        const product = this.products[id]
        const types = {
          trueidtv: 'bdbc',
          postpaid: 'sim_only',
          prepaid: 'product'
        }
        return {
          id,
          status: result.data.allow_addcart[types[product.type]]
        }
      },
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
      setEkyc (ekyc, id) {
        const key = 'postpaid-ekyc-data'
        let data = JSON.parse(localStorage.getItem(key)) || {}
        if (typeof data !== 'object') data = {}
        data[id] = ekyc
        localStorage.setItem(key, JSON.stringify(data))
      },
      back () {
        this.$parent.goTo('address')
      },
      async next () {
        this.loading = true
        const cart = Object.keys(this.products)
          .map(id => {
            const product = this.products[id]
            if (this.result.product_id_list_pass.includes(product.id)) {
              const data = {
                product_id: product.id,
                inventory_id: product.inventory_id,
                store_id: product.store_id,
                section: product.section,
                quantity: 1,
                channel: 'tmh-website'
              }
              if (product.type === 'postpaid') {
                const meta = JSON.parse(JSON.stringify(this.simMeta))
                this.setEkyc(meta.ekyc, product.id)
                delete meta.ekyc
                data.sim_meta = [meta]
              }
              return data
            }
          })
          .filter(item => item)

        const promises = []
        cart.forEach((e) => promises.push(this.checkAllowAddCart(e.product_id)))
        const results = await Promise.all(promises)
        let addCartError = false
        for (let i = 0; i < results.length; i++) {
          if (!results[i].status) {
            const index = cart.findIndex(e => e.product_id === results[i].id)
            cart.splice(index, 1)
            addCartError = true
          }
        }
        if (cart.length === 0 && addCartError) {
          this.$router.push('/cart?error=012')
          return
        }
        this.updatePrivilege()
        this.$store.dispatch(UPDATE_POSTPAID_CART, {
          data: cart
        }).then((result) => {
          localStorage.removeItem('verify-form')
          localStorage.removeItem('verify-result')
          if (addCartError) {
            this.$router.push(`/cart?id=${result.cart_hash}&error=012`)
          } else {
            this.$router.push(`/cart?id=${result.cart_hash}`)
          }
        }).catch(() => {
          this.loading = false
        })
      },
      async fetchProducts () {
        for (const product in this.config.verify) {
          const item = this.config.verify[product]
          if (this.verifyForm.product_id_list.includes(item.id)) {
            await this.fetchProduct(item)
          }
        }
      },
      async fetchProduct (product) {
        const data = await this.$store.dispatch(FETCH_PRODUCT_INFO, {
          id: product.id,
          tmvhAuth: this.$route.query.token
        })
        const item = data.data.record
        this.products[product.id] = {
          id: product.id,
          type: product.type,
          title: item.title.th,
          price: parseFloat(item.price),
          image: item.images[0].url,
          inventory_id: item.inventories[0].id,
          section: item.section,
          store_id: item.store_id
        }
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

  &.loading {
    padding: 160px 24px;

    .checking-icon svg {
      width: 40px;
      height: 40px;
      margin-bottom: 50px;
      animation: loading 2s linear infinite;
      fill: #ff0000;
    }
    .checking-label {
      color: #000;
      font-size: 30px;
      line-height: 30px;
    }
  }

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
      box-shadow: 1px 1px 0 #8e0000;
    }
  }
  .result-title {
    font-size: 40px;
    line-height: 30px;
    font-family: "TrueBold";
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
      font-family: "TrueBold";
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
      font-family: "TrueBold";
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
          margin-left: 0;
          margin-bottom: 12px;
        }
      }
    }
  }
}

@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
