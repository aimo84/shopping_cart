<template>
  <div>
    <template v-if="loading">
      <loading-element />
    </template>
    <template v-else>
      <true-online-dialog ref="trueOnlineDialog" />
      <result-element
        :result="result"
        :products="products"
        :selectedProducts="selectedProducts"
        v-if="page === 'result'"
      />
      <checking-element v-else-if="page === 'checking'" />
      <template v-else>
        <product-element v-model="products" />
        <div
          class="error-container inner-page-container"
          v-if="!loading && errors.length > 0"
        >
          <ul>
            <li
              v-for="(error, key) in errors"
              :key="key"
            >{{ error[$i18n.locale] }}</li>
          </ul>
        </div>
        <div
          class="verify-container inner-page-container"
          v-if="!(selectedProducts.every(item => item === 'prepaid'))"
        >
          <div class="title">{{ Locale.formTitle[$i18n.locale] }}</div>
          <div class="subtitle">{{ Locale.formSubtitle[$i18n.locale] }}</div>
          <form ref="form">
            <form-element
              :data="data"
              :form="Content.form"
              class="form"
              :class="{ 'invalid-form': showFormInvalid }"
            >
              <template slot="birthday">
                <div class="input_container">
                  <label>{{ Content.form.birthday.label[$i18n.locale] }}: <span class="required">*</span></label>
                  <div class="birthday-container">
                    <dropdown-element
                      v-model="data.birthday.day"
                      :options="Content.date.day"
                    />
                    <dropdown-element
                      v-model="data.birthday.month"
                      :options="Content.date.month[$i18n.locale]"
                    />
                    <dropdown-element
                      v-model="data.birthday.year"
                      :options="Content.date.year"
                    />
                  </div>
                </div>
              </template>
              <template slot="truemoveh">
                <div class="input_container text">
                  <label>{{ Content.form.truemoveh.label[$i18n.locale] }}: <span class="required">*</span></label>
                  <div class="otp-container">
                    <div class="input">
                      <input-element
                        type="text"
                        :placeholder="Content.form.truemoveh.placeholder[$i18n.locale]"
                        v-model="data.truemovehNumber"
                        inputmode="tel"
                        pattern="[0-9]{9,10}"
                        required
                      />
                    </div>
                    <button-element
                      class="button"
                      :disabled="!validTruemovehNumber || otp.otpLoading"
                      @click="fetchOtp"
                    >{{ Content.form.otp.button[$i18n.locale] }}</button-element>
                  </div>
                  <div
                    class="otp-error-message"
                    v-if="Object.keys(otp.otpError).length !== 0"
                  >{{ otp.otpError[$i18n.locale] }}</div>
                </div>
              </template>
              <template slot="trueonline" :hidden="Content.form.trueonline.hidden">
                <div class="input_container text">
                  <label>{{ Content.form.trueonline.label[$i18n.locale] }}: <span class="required">*</span></label>
                  <div
                    class="see-example"
                    @click="$refs.trueOnlineDialog.open()"
                  >{{ Locale.see_example[$i18n.locale] }}</div>
                  <input-element
                    v-model="data.trueonline"
                    :type="Content.form.trueonline.type"
                    :required="Content.form.trueonline.required"
                    :disabled="Content.form.trueonline.disabled"
                    :placeholder="Content.form.trueonline.placeholder[$i18n.locale]"
                  />
                </div>
              </template>
            </form-element>
          </form>
          <ekyc-element
            v-if="selectedProducts.includes('postpaid')"
            v-model="ekyc"
          />
        </div>
        <div class="confirm-container inner-page-container">
          <div class="agreement">
            <label>
              <input type="checkbox" v-model="agreement">
              {{ Locale.tnc[$i18n.locale] }}
            </label>
          </div>
          <button-element class="button back">{{ Locale.backHomepage[$i18n.locale] }}</button-element>
          <template
            v-if="selectedProducts.length > 0 && selectedProducts.every(item => item === 'prepaid')"
          >
            <button-element
              class="button"
              @click="computeCart"
              :disabled="!agreement"
            >{{ Locale.next[$i18n.locale] }}</button-element>
          </template>
          <template v-else>
            <button-element
              class="button"
              @click="verify"
              :disabled="!formValid"
            >{{ Locale.verify[$i18n.locale] }}</button-element>
          </template>
        </div>
      </template>
    </template>
  </div>
</template>

<script>
  import Loading from '@components/loading'
  import Form from '@components/form'
  import Input from '@components/input'
  import Dropdown from '@components/dropdown'
  import Button from '@components/button'
  import Ekyc from '@components/ekyc'
  import TrueOnlineDialog from '@components/true-online-dialog'
  import Product from './product'
  import Result from './result'
  import Checking from './checking'
  import Content from './content.json'
  import Locale from './locale.json'

  import {
    FETCH_OTP,
    VERIFY,
    GENERATE_CART,
    UPDATE_CART,
    FETCH_PRODUCT_INFO,
    FETCH_VERIFY_CONFIG,
    FETCH_PRODUCT_STATUS
  } from '@store/actions.type'

  export default {
    components: {
      'product-element': Product,
      'result-element': Result,
      'checking-element': Checking,
      'ekyc-element': Ekyc,
      'form-element': Form,
      'input-element': Input,
      'dropdown-element': Dropdown,
      'button-element': Button,
      'loading-element': Loading,
      'true-online-dialog': TrueOnlineDialog
    },
    data: () => ({
      data: {
        birthday: {
          day: '1',
          month: '1',
          year: '1'
        },
        truemovehNumber: '',
        service: 'all'
      },
      otp: {
        otpLoading: false,
        otpReceived: false,
        otpError: {}
      },
      ekyc: {
        status: {
          face: false,
          front: false
        },
        data: {
          face: '',
          front: ''
        },
        temp: {
          face: '',
          front: ''
        },
        filename: {
          face: '',
          front: ''
        },
        error: {
          face: {},
          front: {}
        }
      },
      result: {},
      page: 'form',
      validTruemovehNumber: false,
      showFormInvalid: false,
      agreement: false,
      loading: true,
      products: [],
      errors: [],
      Content,
      Locale
    }),
    computed: {
      formValid () {
        const condition = this.selectedProducts.length > 0 && this.otp.otpReceived && this.agreement
        if (this.selectedProducts.includes('postpaid')) {
          return condition && this.ekyc.data.face && this.ekyc.data.front
        }
        return condition
      },
      selectedProducts () {
        return Object.keys(this.products).map((id) => {
          if (this.products[id].selected) return this.products[id].type
        }).filter(item => item)
      },
      user () {
        return this.$store.state.auth.profile
      }
    },
    watch: {
      user (user) {
        if (!this.loading) this.fetchData()
      },
      'data.birthday.month' (month) {
        this.generateDay(this.data.birthday.year, month)
      },
      'data.birthday.year' (year) {
        this.generateDay(year, this.data.birthday.month)
      },
      'data.truemovehNumber' (value) {
        this.validTruemovehNumber = /^[0-9]{9,10}$/.test(value.toString())
      },
      'data.service' () {
        this.productsChanged()
      },
      products: {
        deep: true,
        handler () {
          this.productsChanged()
        }
      }
    },
    async mounted () {
      await this.fetchData()
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
        const product = this.products.find(e => e.id === id)
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
      async fetchData () {
        try {
          this.loading = true
          this.generateYear()
          const config = await this.$store.dispatch(FETCH_VERIFY_CONFIG)
          this.products = config.verify
          const promises = []
          this.products.forEach((p, i) => promises.push(this.fetchProducts(p, i)))
          await Promise.all(promises)
          const id = this.$route.params.id
          this.products = this.products.filter(item => item)
          const idExists = this.products.map(item => item.id).includes(id)
          if (!id || !idExists) this.products[0].selected = true
          if (this.products.length <= 0) throw new Error()
          this.loading = false
        } catch (e) {
          console.log(e)
          this.$router.push('/online-store')
        }
      },
      // Run this when "Service Type" or "Selected Products" is changed.
      productsChanged () {
        if (this.loading) return
        const value = this.selectedProducts
        this.Content.form.service.required = true
        this.Content.form.service.disabled = false
        this.Content.form.service.hidden = false
        if (value.includes('postpaid')) {
          this.data.service = 'all'
          this.Content.form.service.options = [{
            id: 'all',
            value: 'All'
          }]
        } else if (value.includes('trueidtv')) {
          if (this.data.service !== 'truemove' && this.data.service !== 'trueonline') {
            this.data.service = 'truemove'
          }
          this.Content.form.service.options = [
            {
              id: 'truemove',
              value: 'Truemove H'
            },
            {
              id: 'trueonline',
              value: 'True Online'
            }
          ]
        } else {
          this.data.service = ''
          this.Content.form.service.required = false
          this.Content.form.service.disabled = true
          this.Content.form.service.hidden = true
        }
        const service = this.data.service === 'trueonline' || this.data.service === 'all'
        this.Content.form.trueonline.required = service
        this.Content.form.trueonline.disabled = !service
        this.Content.form.trueonline.hidden = !service
      },
      // Day / Month / Year of Birth
      generateYear () {
        const currentYear = new Date().getFullYear() + 543 - 18
        const years = []
        for (let year = currentYear; year > 2442; year--) years.push(year)
        this.Content.date.year = years.map((year) => ({
          id: year,
          value: year
        }))
        this.data.birthday.year = currentYear.toString()
      },
      generateDay (year, month) {
        const total = new Date(year - 543, month, 0).getDate()
        this.Content.date.day = [...Array(total).keys()].map((day) => ({
          id: day + 1,
          value: day + 1
        }))
        if (parseFloat(this.data.birthday.day) > total) {
          this.data.birthday.day = total.toString()
        }
      },
      // Truemove H: Request for OTP
      fetchOtp () {
        this.otp = {
          otpError: {},
          otpReceived: false,
          otpLoading: true
        }
        this.$store.dispatch(FETCH_OTP, this.data.truemovehNumber)
          .then((data) => {
            if (data.status_code !== 200) throw data.message
            this.otp.otpLoading = false
            this.otp.otpReceived = true
          })
          .catch((error) => {
            this.otp = {
              otpError: error,
              otpReceived: false,
              otpLoading: false
            }
          })
      },
      goTo (page) {
        this.page = page
      },
      computeVerifyTime () {
        const dt = new Date()
        const year = dt.getFullYear()
        let month = dt.getMonth() + 1
        month = month < 10 ? `0${month}` : month
        let date = dt.getDate()
        date = date < 10 ? `0${date}` : date
        let hours = dt.getHours()
        hours = hours < 10 ? `0${hours}` : hours
        let mins = dt.getMinutes()
        mins = mins < 10 ? `0${mins}` : mins
        let secs = dt.getSeconds()
        secs = secs < 10 ? `0${secs}` : secs
        return `${year}-${month}-${date} ${hours}:${mins}:${secs}`
      },
      // TrueID TV & Family SIM: Check Privilege
      async verify () {
        this.showFormInvalid = false
        if (!this.$refs.form.checkValidity()) {
          window.scrollTo(0, 0)
          this.showFormInvalid = true
          return
        }
        this.page = 'checking'
        window.scrollTo(0, 0)
        const productIdList = this.products.map((product) => {
          if (product.selected) return product.id
        }).filter(item => item)
        let cartid = window.localStorage.getItem('cart-id')
        if (!cartid) {
          await this.checkAllowAddCart(productIdList[0])
          cartid = window.localStorage.getItem('cart-id')
        }
        const data = {
          cart_hash: cartid,
          id_number: this.data.id,
          service_name: this.data.service,
          mobile_number: this.data.truemovehNumber,
          date_birth: this.data.birthday.day,
          month_birth: this.data.birthday.month,
          year_birth: this.data.birthday.year,
          otp: this.data.otp,
          product_id_list: productIdList
        }
        const hasPostpaid = this.selectedProducts.includes('postpaid')
        if (hasPostpaid) {
          if (this.ekyc.data.face && this.ekyc.data.front) {
            data.face_recog_cust_capture = this.ekyc.data.face
            data['face-recog-cust-certificate'] = this.ekyc.data.front
            data.face_recog_cust_capture_filename = this.ekyc.filename.face
            data['face-recog-cust-certificate-filename'] = this.ekyc.filename.front
          } else {
            window.scrollTo(0, 0)
            this.showFormInvalid = true
            return
          }
        }
        if ((this.data.service === 'trueonline' || this.data.service === 'all')) {
          data.trueonline_number = this.data.trueonline
        }
        localStorage.setItem('verify-form', JSON.stringify({
          id_number: data.id_number,
          service_name: data.service_name,
          mobile_number: data.mobile_number,
          date_birth: data.date_birth,
          month_birth: data.month_birth,
          year_birth: data.year_birth,
          product_id_list: data.product_id_list,
          face_recog_cust_capture: hasPostpaid ? this.ekyc.temp.face : undefined,
          'face-recog-cust-certificate': hasPostpaid ? this.ekyc.temp.front : undefined,
          face_recog_cust_capture_filename: hasPostpaid ? this.ekyc.filename.face : undefined,
          'face-recog-cust-certificate-filename': hasPostpaid ? this.ekyc.filename.front : undefined,
          trueonline_number: data.trueonline_number
        }))
        this.$store.dispatch(VERIFY, {
          id: 'trueid',
          data
        }).then((data) => {
          this.result = data
          const verifyResult = JSON.parse(JSON.stringify(data))
          verifyResult.verify_time = this.computeVerifyTime()
          localStorage.setItem('verify-result', JSON.stringify(verifyResult))
          const hasPostpaid = this.products.map((product) => {
            if (product.selected && product.type === 'postpaid') return product.id
          }).filter(item => item)
          if (hasPostpaid.length > 0) {
            this.$router.push(`/online-store/postpaid/${hasPostpaid[0]}`)
          } else {
            this.page = 'result'
          }
        }).catch((error) => {
          if (error.message && error.message.th && error.message.en) {
            this.errors = [{
              th: error.message.th,
              en: error.message.en
            }]
          }
          this.showFormInvalid = true
          this.page = 'form'
        })
      },
      // Prepaid SIM: Generate/Update Cart
      generateCart (data, error) {
        this.$store.dispatch(GENERATE_CART, data).then((data) => {
          if (error) {
            this.$router.push(`/cart?id=${data.cart_hash}&code=012`)
          } else {
            this.$router.push(`/cart?id=${data.cart_hash}`)
          }
        }).catch(() => {
          this.page = 'form'
        })
      },
      updateCart (id, data, error) {
        this.$store.dispatch(UPDATE_CART, {
          id,
          data
        }).then((data) => {
          if (error) {
            this.$router.push(`/cart?id=${data.cart_hash}&code=012`)
          } else {
            this.$router.push(`/cart?id=${data.cart_hash}`)
          }
        }).catch((e) => {
          if (e?.message?.en === 'prepaid_quantity_limit') {
            this.$router.push(`/cart?error=013&pql_pid=${e.product_id}&pql_iid=${e.inventory_id}`)
          } else {
            this.page = 'form'
          }
        })
      },
      async computeCart () {
        this.page = 'checking'
        const data = this.products.map((product) => {
          if (product.selected) {
            const result = {
              product_id: product.id,
              inventory_id: product.inventory_id,
              store_id: product.store_id,
              section: product.section,
              quantity: 1,
              channel: 'tmh-website'
            }
            return result
          }
        }).filter(item => item)

        const promises = []
        data.forEach((e) => promises.push(this.checkAllowAddCart(e.product_id)))
        const results = await Promise.all(promises)
        let addCartError = false
        for (let i = 0; i < results.length; i++) {
          if (!results[i].status) {
            const index = data.findIndex(e => e.product_id === results[i].id)
            data.splice(index, 1)
            addCartError = true
          }
        }
        if (data.length === 0 && addCartError) {
          this.$router.push('/cart?error=012')
          return
        }
        const cartId = window.localStorage.getItem('cart-id')
        cartId ? this.updateCart(cartId, data, addCartError) : this.generateCart(data, addCartError)
      },
      async fetchProducts (product, index) {
        return this.$store.dispatch(FETCH_PRODUCT_INFO, {
          id: product.id,
          tmvhAuth: this.$route.query.token
        })
          .then((data) => {
            const item = data.data.record
            this.$set(this.products, index, {
              id: product.id,
              type: product.type,
              custom_text: product.custom_text,
              title: item.title.th,
              price: parseFloat(item.price),
              image: item.images[0].url,
              inventory_id: item.inventories[0].id,
              section: item.section,
              store_id: item.store_id,
              selected: this.$route.params.id === product.id,
              index
            })
          }).catch(() => {
            this.$set(this.products, index, undefined)
          })
      }
    }
  }
</script>

<style scoped lang="scss" src="./style.scss"></style>
