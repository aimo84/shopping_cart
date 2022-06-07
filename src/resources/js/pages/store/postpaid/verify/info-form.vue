<template>
  <div>
    <dialog-element
      ref="dialog"
      class="terms-dialog"
      showCloseButton
    >
      <div slot="content">
        <terms-element />
      </div>
    </dialog-element>
    <loading-element v-show="loading" />
    <div v-show="!loading" class="address-container">
      <div class="address-inner-container">
        <div class="title">
          <template v-if="isDrLuckyPrepaid">{{ Locale.user_information_form.title_prepaid[$i18n.locale] }}</template>
          <template v-else>{{ Locale.user_information_form.title[$i18n.locale] }}</template>
        </div>
        <div class="sub-title" :class="{'text-error':ageError}">{{ Locale.user_information_form.sub_title_1[$i18n.locale] }}</div>
        <div class="sub-title sub-title-2" :class="{'text-error':ageError}">{{ Locale.user_information_form.sub_title_2[$i18n.locale] }}</div>
        <div class="line"></div>
        <div class="form-wrap">
          <form>
            <div v-if="!isDrluckyZodiacVerifyOffline">
              <div class="form-label">{{ Locale.user_information_form.thai_id[$i18n.locale] }}</div>
              <div class="form-input">
                <input :class="{'input-error':thaiIdError}" class="thaiid-input"  type="text" v-model="thaiId" @input="validateThaiNationalID" :placeholder="[[Locale.user_information_form.customerDetail.thai_id.placeholder[$i18n.locale]]]">
                <div v-if="thaiIdError" class="text-error">{{ Locale.user_information_form.customerDetail.thai_id.error[$i18n.locale] }}</div>
              </div>
            </div>
            <div class="form-label">{{ Locale.user_information_form.date_of_birth[$i18n.locale] }}</div>
            <div class="date">
              <div class="dropdown">
                <div class="dropdown-label">
                  <span>{{ date.day + 1 }}</span>
                </div>
                <select id="day" v-model="date.day">
                  <option v-for="(day, key) in days" :key="key" :value="day">{{
                    day + 1
                  }}</option>
                </select>
              </div>
              <div class="dropdown">
                <div class="dropdown-label">
                  <span>{{ months[date.month] }}</span>
                </div>
                <select id="month" v-model="date.month">
                  <option v-for="(month, key) in months" :key="key" :value="key">{{
                    month
                  }}</option>
                </select>
              </div>
              <div class="dropdown">
                <div class="dropdown-label">
                  <span>{{ date.year + 543 }}</span>
                </div>
                <select id="year" v-model="date.year">
                  <option v-for="(year, key) in years" :key="key" :value="year">{{
                    year + 543
                  }}</option>
                </select>
              </div>
            </div>
          </form>
        </div>
        <div class="term-condition">
          <label>
            <div class="first-line">
              <input type="checkbox" v-model="agreeTnc" />
              <div class="text">{{ Locale.user_information_form.agreement[$i18n.locale] }}</div>
            </div>
          </label>
          <label>
            <div class="second-line">
              <div class="showTermsDialogClass" @click="showTermsDialog">
                {{ Locale.user_information_form.read_agreement[$i18n.locale] }}
              </div>
            </div>
          </label>
        </div>
        <div class="save-button-container">
          <button-element id="prevalidate-ekyc" @click="save" class="button" :disabled="!agreeTnc">{{
            Locale.address_next[$i18n.locale]
          }}</button-element>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Loading from '@components/loading'
  import Locale from './locale.json'
  import Button from '@components/button'
  import Dialog from '@components/dialog'
  import Terms from '@components/terms'
  import {
    FETCH_CART,
    DELETE_CART,
    UPDATE_POSTPAID_CART
  } from '@store/actions.type'

  import {
    updateEntPack,
    loggerAddon
  } from '@utils/addon'

  export default {
    components: {
      'button-element': Button,
      'loading-element': Loading,
      'dialog-element': Dialog,
      'terms-element': Terms,
    },
    props: {
      product: Object,
      postpaidResult: Object,
      selectedPricePlan: Object,
      packages: Object,
      noEkycCartForm: Object
    },
    data: () => ({
      loading: false,
      Locale,
      thaiId: '',
      thaiIdError: false,
      ageError: false,
      date: {
        day: 0,
        month: 0,
        year: ''
      },
      agreeTnc: false
    }),
    computed: {
      isDrLuckyPrepaid () {
        return this.$route.name.includes('drlucky-zodiac-verify') && this.$route.query.sim_type === 'prepaid'
      },
      currentYear () {
        return new Date().getFullYear()
      },
      years () {
        const years = []
        for (let year = this.currentYear; year > 1899; year--) years.push(year)
        return years
      },
      months () {
        return [
          '01',
          '02',
          '03',
          '04',
          '05',
          '06',
          '07',
          '08',
          '09',
          '10',
          '11',
          '12'
        ]
      },
      days () {
        const total = new Date(this.date.year, this.date.month + 1, 0).getDate()
        return [...Array(total).keys()]
      },
      birthdate () {
        const options = {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric'
        }
        const d = new Date(this.date.year, this.date.month, this.date.day + 1)
        return d.toLocaleDateString('en-GB', options)
      },
      isDrluckyZodiacVerifyOffline () {
        return this.$route.name === 'drlucky-zodiac-verify-offline'
      }
    },
    mounted () {
      if (this.noEkycCartForm.thai_id && this.postpaidResult.correlation_id) {
        this.loading = true
        this.computeCart(this.noEkycCartForm)
      }
      this.date.year = this.currentYear
    },
    methods: {
      async checkAllowAddcart () {
        if (this.$route.name.includes('drlucky-verify')) return true
        if (this.$route.name.includes('drlucky-zodiac-verify')) return true
      },
      async removeProduct () {
        const cartId = window.localStorage.getItem('cart-id')
        if (cartId) {
          let error = ''
          const removeProducts = []
          await this.$store.dispatch(FETCH_CART, { id: cartId })
          const store = this.$store.state.cart.cart
          if (store && store.data && store.data.record) {
            const result = store.data.record
            for (const i in result) {
              for (const j in result[i].products) {
                const item = result[i].products[j]
                const sim = ['sim', 'postpaid', 'vlearn', 'family_black_truecard']
                if (this.product.product_type === 'device_bundle_new_customer') {
                  const bundle = this.product.bundles.find(e => e.id === this.$route.params.bundle)
                  const deviceProduct = bundle.inventories.find(e => e.product_id === this.product.id)
                  const sameProductId = item.id === this.product.id
                  const sameInventoryId = item.inventory.id.toString() === deviceProduct.inventory_id.toString()
                  const sameMat = sameProductId && sameInventoryId
                  const isDevBundle = item.product_type.startsWith('device_bundle_')
                  const isSim = sim.includes(item.product_type)
                  if (isDevBundle) error = sameMat ? '010' : '011'
                  if (isSim && error !== '010') error = '011'
                }
                if (sim.includes(this.product.product_type)) {
                  const isDevBundle = item.product_type.startsWith('device_bundle_')
                  const isSim = sim.includes(item.product_type)
                  if (isDevBundle || isSim) error = '011'
                }
              }
            }
          }
          if (error) return error
          if (removeProducts.length > 0) {
            for (const i in removeProducts) {
              const item = removeProducts[i]
              await this.$store.dispatch(DELETE_CART, {
                id: cartId,
                data: {
                  product_id: item.product_id,
                  inventory_id: item.inventory_id
                }
              })
            }
          }
        }
      },
      async computeCart (meta) {
        const inventoryId = this.product.inventories[0].id.toString()
        const gender = meta.ekyc?.gender
        if (!this.isPrepaid) {
          this.setEkyc(meta.ekyc, this.product.id)
          delete meta.ekyc
          delete meta.price_plan.long_description
          delete meta.price_plan.proposition_term_long
          meta.sim_image = this.packages.package_image_desktop
        }
        if (this.$route.name === 'drlucky-verify') {
          let drluckNumber = window.localStorage.getItem('truestore-berfuntong-number')
          let form = window.localStorage.getItem('truestore-berfuntong-form')
          form = JSON.parse(form)
          drluckNumber = JSON.parse(drluckNumber)
          meta.campaign_type = 'vhora'
          meta.birth_date = form.birthdate
          meta.birth_time = form.birthtime
          meta.timezone = form.timezone
          meta.correlation_id = this.postpaidResult.correlation_id
          meta.dealer_code = this.postpaidResult.dealer_code
          meta.price_plan.proposition_amdoc = this.postpaidResult.proposition_amdoc
          meta.price_plan.company_code = this.postpaidResult.company_code
          meta.user_information.iden_type = 'I'
          meta.berfuntong = {
            first_name: form.firstname,
            last_name: form.lastname,
            grade: drluckNumber.grade,
            group: drluckNumber.group,
            subgroup: drluckNumber.subgroup,
            group_title: drluckNumber.group_title,
            subgroup_title: drluckNumber.subgroup_title
          }
          meta.user_information.gender = (gender === 'ชาย' ? '1' : '2')
        }
        if (this.$route.name === 'drlucky-zodiac-verify') {
          meta.campaign_type = 'vhora'
          meta.correlation_id = this.postpaidResult.correlation_id
          meta.dealer_code = this.postpaidResult.dealer_code
          meta.price_plan.proposition_amdoc = this.postpaidResult.proposition_amdoc
          meta.price_plan.company_code = this.postpaidResult.company_code
          meta.user_information.iden_type = 'I'
          meta.user_information.gender = '2'
          meta.sim_image = this.packages.package_image_desktop
          meta.sim_type = this.$route.query.sim_type || 'postpaid'
          meta.berfuntong = {
            package_code: localStorage.getItem('truestore-berfuntong-zodiac-pack')
          }
        }

        const data = {
          product_id: this.$route.params.id,
          inventory_id: inventoryId,
          store_id: this.product.store_id,
          section: this.product.section,
          quantity: 1,
          sim_meta: [meta],
          channel: 'tmh-website'
        }
        const hash = window.localStorage.getItem('cart-id')
        if (hash) data.hash = hash
        try {
          const result = await this.$store.dispatch(UPDATE_POSTPAID_CART, { data })
          window.localStorage.setItem('cart-id', result.cart_hash)

          // Add log for add to cart
          this.$store.dispatch(FETCH_CART, { id: result.cart_hash }).then(({ data }) => {
            data.record[0].products.forEach(product => {
              const amount = product.inventory.price
              const quantity = product.quantity

              loggerAddon({
                event: 'Cart',
                status: 'add',
                productId: product.id,
                matcode: product.inventory.sku,
                quantity,
                amount
              })
            })
          })

          await updateEntPack(
            this.$route.query.ep,
            this.$route.query,
            this.product,
            result.cart_hash,
            {
              id: inventoryId,
              nas: this.$route.params.nas
            }
          )

          if (this.isPrepaid) {
            localStorage.removeItem('prepaid-sim-number')
          }

          this.$router.push(`/cart?id=${result.cart_hash}`)
        } catch (e) {
          if (e?.message === 'err-ent-pack') {
            return this.$router.push('/cart?error=030')
          } else if (e?.message?.en === 'sku_limit') {
            return this.$router.push('/cart?error=020')
          }
          this.loading = false
        }
      },
      setEkyc (ekyc, id) {
        const key = 'postpaid-ekyc-data'
        let data = JSON.parse(localStorage.getItem(key)) || {}
        if (typeof data !== 'object') data = {}
        data[id] = ekyc
        localStorage.setItem(key, JSON.stringify(data))
      },
      async save () {
        let error = ''
        if (this.invalidateBirthdate()) {
          this.ageError = true
          window.scrollTo(0, 0)
          return
        }

        if (!this.validateThaiNationalID() && !this.isDrluckyZodiacVerifyOffline) {
          return
        }

        this.loading = true

        if (this.isPostpaid && !await this.checkAllowAddcart()) {
          this.$router.push('/cart?error=012')
          return
        }

        const userData = {
          thai_id: this.thaiId,
          birth_date: this.birthdate
        }

        const form = {
          number: this.$route.params.number,
          sim_type: 'postpaid',
          product_info: {
            product_id: this.$route.params.id.replace(/\D/g, ''),
            product_type: 'sim',
            propo_code: this.$route.params.nas,
            store_id: this.product.store_id,
            inventory_id: this.product.inventories[0].id.toString()
          },
          price_plan: this.selectedPricePlan,
          is_verify: 'true',

          thai_id: userData.thai_id,
          birth_date: userData.birth_date,
          user_information: {
            thai_id: userData.thai_id,
            birth_date: userData.birth_date
          },
          ekyc: {}
        }

        if (this.isPostpaid) {
          error = await this.removeProduct()
        }

        if (error && this.$route.name !== 'drlucky-verify') {
          this.$router.push(`/cart?error=${error}`)
        } else if (error && this.$route.name !== 'drlucky-zodiac-verify') {
          this.$router.push(`/cart?error=${error}`)
        } else {
          this.$parent.updateNoEkycCartForm(form)
          this.$parent.goTo('verify')
        }
      },
      validateThaiNationalID () {
        const id = this.thaiId
        if (id == null || id.length !== 13 || !/^[0-9]\d+$/.test(id)) {
          this.thaiIdError = true
          return false
        }
        let i; let sum = 0
        for ((i = 0), (sum = 0); i < 12; i++) {
          sum += parseInt(id.charAt(i)) * (13 - i)
        }
        const check = (11 - sum % 11) % 10
        if (check === parseInt(id.charAt(12))) {
          this.thaiIdError = false
          return true
        }
        this.thaiIdError = true
        return false
      },
      invalidateBirthdate () {
        const current = new Date()
        let age = current.getFullYear() - this.date.year - 1
        if (current.getMonth() - this.date.month > 0 || (current.getMonth() - this.date.month === 0 && current.getDate() - this.date.day >= 0)) {
          age++
        }
        this.ageError = age < 17
        return this.ageError
      },
      showTermsDialog () {
        this.trackAnalytics(
          'track_event',
          'personal_information_and_address',
          'click',
          'next'
        )
        this.$refs.dialog.open()
      },
      trackAnalytics (event, eventCategory, eventAction, eventLabel) {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event,
          event_category: eventCategory,
          event_action: eventAction,
          event_label: eventLabel
        })
      },
    }
  }
</script>
<style lang="scss" scoped>

.terms-dialog {
  .content {
    max-height: 85%;
    max-width: 860px;
    .dialog-content {
      padding: 36px;
    }
  }
}

.address-container {
  background: #fff;
  border-radius: 8px;
  padding: 36px 16px;
  font-size: 24px;

  .address-inner-container {
    max-width: 950px;
    margin: auto;
  }
  .line {
    border-top: 1px solid #ddd;
    margin: 25px 0px 25px 0px;
  }
}

.thaiid-input {
  width: 100%;
  height: 40px;
  padding: 0 12px;
  border: 1px solid #000;
  box-sizing: border-box;
  border-radius: 8px;
  transition: 150ms border-color ease;
  font-family: TrueMedium;
  font-size: 24px;
  line-height: normal;
  font-weight: lighter;
  outline: none;
}

.text-error {
  font-size: 20px;
  color: red !important
}

.input-error {
  border: 1px solid red !important;
}

.save-button-container {
  display: flex;
  justify-content: center;
  max-width: 300px;
  margin: auto;
  button {
    width: 100%;
  }
}

.title {
  font-size: 40px;
  text-align: center;
}

.sub-title {
  font-size: 21px;
  text-align: center;
}
.sub-title-2 {
    line-height: 15px;
    color: #777;
}

.form-wrap {
  margin: auto;
  max-width: 300px;
}

form {
  .form-label {
    font-size: 30px;
    text-align: center;
  }
  .form-input {
    margin-bottom: 20px;
  }
}

.date {
  display: grid;
  grid-template-columns: 3fr 3fr 3fr;
  grid-gap: 8px;

  .dropdown {
    position: relative;

    .dropdown-label {
      pointer-events: none;
      height: 40px;
      font-size: 24px;
      font-family: 'TrueMedium';
      border-radius: 8px;
      border: 1px solid black;
      color: #333;
      padding: 0 12px;
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      grid-gap: 4px;

      span {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }

      &:after {
        content: '';
        width: 11px;
        height: 6px;
        background-repeat: no-repeat;
        background-size: contain;
        background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMSAxbDUuNSA1LjVMMTIgMSIgc3Ryb2tlPSIjMjIyMjIzIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=');
      }
    }

    select {
      position: absolute;
      top: 0;
      height: 100%;
      width: 100%;
      opacity: 0;
      font-size: 16px;
      font-family: Arial;
    }
  }
}
.term-condition {
  margin-top: 30px;
  text-align: center;
  font-size: 22px;
  display: flex;
  flex-direction: column;
}
.term-condition label .first-line {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.term-condition label .first-line input {
  margin-top: 6.5px;
}
.term-condition label .first-line .text {
  margin-left: 3px;
  color: #000;
  font-family: "TrueBold";
  font-style: normal;
  font-size: 22px;
  font-weight: 700;
  line-height: 26.39px;
}
.term-condition label .second-line .showTermsDialogClass {
  color : #29ABE2;
  cursor: pointer;
  font-family: "TrueBold";
  font-style: normal;
  font-size: 22px;
  font-weight: 700;
  line-height: 26.39px;
  margin-left: 8px;
  text-decoration: underline;
}

@media only screen and (max-width: 600px) {
  .sub-title {
    width: 270px;
    margin: auto;
  }
}
</style>
