<template>
  <div>
    <loading-element v-show="loading" />
    <div v-show="!loading && (!isPrepaid || simSourceType === 'e-sim')" class="address-container">
      <div class="address-inner-container">
        <postpaid-address
          ref="postpaidAddress"
          @loading="formValid = !$event"
          @ready="loading = false"
        />
        <div class="agreement-container">
          <div>{{ Locale.agreement1[$i18n.locale] }}</div>
          <div>
            <label>
              <input type="checkbox" v-model="agreeTnc" />
              {{ Locale.agreement2[$i18n.locale] }}
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" v-model="agreeCancel" />
              {{ Locale.agreement3[$i18n.locale] }}
            </label>
          </div>
        </div>
        <div class="save-button-container">
          <button-element
            @click="save"
            class="button"
            :disabled="!valid"
          >{{ Locale.address_next[$i18n.locale] }}</button-element>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Button from '@components/button'
  import Loading from '@components/loading'
  import PostpaidAddress from '@sections/postpaid-address'
  import Locale from './locale.json'
  import {
    FETCH_PRODUCT_INFO,
    FETCH_ADDRESS,
    UPDATE_POSTPAID_CART,
    FETCH_CART,
    DELETE_CART,
    UPDATE_BUNDLE_CART,
    FETCH_PRODUCT_STATUS,
    FETCH_PACKAGE
  } from '@store/actions.type'

  import {
    computeAddons,
    updateEntPack,
    loggerAddon
  } from '@utils/addon'

  export default {
    components: {
      'button-element': Button,
      'postpaid-address': PostpaidAddress,
      'loading-element': Loading
    },
    props: {
      verifyForm: Object,
      verifyResult: Object,
      postpaidResult: Object,
      product: Object,
      packages: Object,
      selectedPricePlan: Object,
      isPrepaid: Boolean,
      isCampaignRedeemFreeDevice: {
        type: Boolean,
        default: false
      },
      pricePlans: {
        type: Array,
        default: () => []
      },
      isCampaignFreeDevice: {
        type: Boolean,
        default: false
      }
    },
    data: () => ({
      Locale,
      formLoading: true,
      formValid: true,
      agreeTnc: false,
      agreeCancel: false,
      loading: true,
      package: {}
    }),
    computed: {
      allowAddcart () {
        return this.$store.state.products.productStatus.data
      },
      valid () {
        return this.formValid && this.agreeTnc && this.agreeCancel
      },
      isPostpaid () {
        return [
          'sim',
          'postpaid',
          'vlearn',
          'family_black_truecard',
          'device_bundle_new_customer'
        ].includes(this.product.product_type)
      },
      isPaysmooth () {
        return this.$route.query.paysmooth_token
      },
      skipEkyc () {
        const skip = window.no_ekyc_device_bundle
        return skip && (this.product.product_type === 'device_bundle_new_customer')
      },
      simSourceType () {
        return this.$route.query.source_type || ''
      }
    },
    mounted: async function () {
      await this.fetchPackage()
      if (this.simSourceType === 'e-sim') return
      if (this.isPrepaid && localStorage.getItem('prepaid-sim-number')) {
        if (!await this.checkAllowAddcart()) {
          this.$router.push('/cart?error=012')
          return
        }
        this.setPrepaidDataMeta()
      } else if (this.isPrepaid) {
        location.replace(`/online-store/prepaid/${this.$route.params.id}?nas_code=${this.$route.params.nas}`)
      }
    },
    methods: {
      async fetchPackage () {
        const data = await this.$store.dispatch(FETCH_PACKAGE, this.$route.params.nas || this.luckyNas)
        this.package = data.record[0]
      },
      async trackAnalytics (e) {
        const sim = await this.$store.dispatch(FETCH_PRODUCT_INFO, {
          id: e.sim.product_id
        })
        const simProduct = sim.data.record
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event: 'ecommerce_event',
          event_category: 'bundle_add_to_cart',
          event_action: 'product_add_to_cart',
          event_label: `${e.product.title.en || e.product.title.th} | ${simProduct.title.en || simProduct.title.th}`,
          ecommerce: {
            currencyCode: 'THB',
            add: {
              actionField: {
                list: 'bundle'
              },
              products: [
                {
                  name: e.product.title.en || e.product.title.th,
                  id: e.product.id,
                  price: parseFloat(e.product.inventory.price).toFixed(2),
                  category: 'device',
                  brand: '',
                  variant: e.product.inventory.options.find(e => e.title.th === 'สี') ? e.product.inventory.options.find(e => e.title.th === 'สี').values.title.th : '',
                  quantity: 1,
                  dimension6: parseFloat(e.product.inventory.compare_at_price).toFixed(2),
                  dimension7: parseFloat(e.product.inventory.price).toFixed(2),
                  dimension8: '',
                  dimension13: e.product.inventory.options.find(e => e.title.th === 'ความจุ') ? e.product.inventory.options.find(e => e.title.th === 'ความจุ').values.title.th : '',
                  dimension14: e.product.status,
                  dimension30: 'New Customer',
                  dimension31: '',
                  dimension32: e.bundle.price_after_discount_device_bundle_new_customer.toFixed(2),
                  dimension33: `${e.bundle.name} ชำระค่าบริการล่วงหน้า: ${e.bundle.advance_payment}฿`,
                  metric2: e.bundle.advance_payment
                },
                {
                  name: simProduct.title.en || simProduct.title.th,
                  id: simProduct.id,
                  price: parseFloat(simProduct.inventories[0].price).toFixed(2),
                  category: 'SIM card',
                  variant: 'Postpaid',
                  quantity: 1,
                  dimension6: parseFloat(simProduct.inventories[0].compare_at_price).toFixed(2),
                  dimension7: parseFloat(simProduct.inventories[0].price).toFixed(2),
                  dimension9: 'Postpaid SIM',
                  dimension10: '', // TODO: SIM Package
                  dimension11: e.bundle.proposition_mobile[0].name,
                  dimension12: parseFloat(e.meta.price_plan.price).toFixed(2),
                  dimension14: true,
                  dimension22: '', // TODO: Package Download Speed
                  dimension24: '', // TODO: Talk Time Allowance
                  dimension25: '' // TODO: Mobile Internet Allowance
                }]
            }
          }
        })
      },
      prefillForm () {
        const postpaidSim = [
          'sim',
          'postpaid',
          'vlearn',
          'device_bundle_new_customer'
        ].includes(this.product.product_type)
        if (postpaidSim && this.ekycAnswers) {
          if (
            this.ekycAnswers.home_province_id &&
            this.ekycAnswers.home_subdistrict_id &&
            this.ekycAnswers.home_district_id
          ) {
            this.id_card_form.province_id = this.ekycAnswers.home_province_id.toString()
            this.id_card_form.city_id = this.ekycAnswers.home_district_id.toString()
            this.id_card_form.district_id = this.ekycAnswers.home_subdistrict_id.toString()
            this.id_card_form.postcode = this.ekycAnswers.home_zipcode
            this.billing_address.province_id = this.ekycAnswers.home_province_id.toString()
            this.billing_address.city_id = this.ekycAnswers.home_district_id.toString()
            this.billing_address.district_id = this.ekycAnswers.home_subdistrict_id.toString()
            this.billing_address.postcode = this.ekycAnswers.home_zipcode
          }
          const idExpiration = this.ekycAnswers.date_of_expiration ? this.ekycAnswers.date_of_expiration.split('-') : ''
          this.user_details.thai_id_expire_year = idExpiration ? (parseFloat(idExpiration[2]) + 543).toString().padStart(2, 0) : ''
          this.user_details.thai_id_expire_month = idExpiration ? parseFloat(idExpiration[1]).toString().padStart(2, 0) : ''
          this.user_details.thai_id_expire_day = idExpiration ? parseFloat(idExpiration[0]).toString().padStart(2, 0) : ''
          this.user_details.first_name = this.ekycAnswers.first_name
          this.user_details.last_name = this.ekycAnswers.last_name
          this.user_details.email = this.ekycAnswers.email
          this.user_details.telephone = this.ekycAnswers.mobile_no
          this.id_card_form.address = this.ekycAnswers.home_address
          this.billing_address.address = this.ekycAnswers.home_address
          const prefix = {
            นาย: 'mr',
            นาง: 'mrs',
            นางสาว: 'miss'
          }
          if (this.ekycAnswers.prefix in prefix) {
            this.user_details.title = prefix[this.ekycAnswers.prefix]
          } else {
            this.user_details.title = ''
            this.user_details.txt_title_other = this.ekycAnswers.prefix
          }
        }
      },
      generateYear () {
        const currentYear = new Date().getFullYear() + 543
        const years = []
        for (let year = currentYear; year < 2644; year++) years.push(year)
        this.AddressForm.date.year = years.map((year) => ({
          id: year,
          value: year
        }))
        this.user_details.thai_id_expire_year = currentYear.toString()
      },
      generateDay (year, month) {
        const total = new Date(year - 543, parseInt(month), 0).getDate()
        this.AddressForm.date.day = [...Array(total).keys()].map((day) => ({
          id: (day + 1).toString().padStart(2, 0),
          value: day + 1
        }))
        if (parseFloat(this.user_details.thai_id_expire_day) > total) {
          this.user_details.thai_id_expire_day = total.toString().padStart(2, 0)
        }
      },
      async formChanged (form, type, id) {
        if (this.loading) return
        if (id === '_') return
        const data = JSON.parse(JSON.stringify(this[form]))
        switch (type) {
          case 'province_id':
            this.setAddressLoading(form, 'city')
            await this.setAddress(form, 'city', id, data)
            break
          case 'city_id':
            this.setAddressLoading(form, 'district')
            await this.setAddress(form, 'district', id, data)
            break
          case 'district_id':
            await this.setPostcode(form)
            break
        }
      },
      setAddressLoading (form, type) {
        const contentId = `${type}_id`
        this[form][contentId] = '_'
        this[form].postcode = ''
        this.AddressForm[form][contentId].disabled = true
        this.AddressForm[form][contentId].options = [
          {
            id: '_',
            value: 'Loading ...'
          }
        ]
      },
      async fetchAddress (type, id) {
        const payload = {}
        const types = {
          province: 'country_id',
          city: 'province_id',
          district: 'city_id'
        }
        payload[types[type]] = id
        payload.language = this.$i18n.locale || 'th'
        const params = Object.keys(payload)
          .map(item => `${item}=${payload[item]}`).join('&')
        return this.$store.dispatch(FETCH_ADDRESS, { type, params })
      },
      async setAddress (form, type, id, data) {
        this.formValid = false
        const content = this.AddressForm[form]
        const contentId = `${type}_id`
        if (!this.address[type][id]) await this.fetchAddress(type, id)
        content[contentId].disabled = false
        content[contentId].options = this.computeDropdown(type, id)
        const options = content[contentId].options.map((option) => option.id)
        const exist = options.includes(parseFloat(data[contentId]))
        this[form][contentId] = exist ? data[contentId] : content[contentId].options[0].id.toString()
        this.formValid = true
      },
      async setPostcode (form) {
        this[form].postcode = this.computePostcode(this[form].city_id, this[form].district_id)
      },
      async checkAllowAddcart () {
        if (this.$route.name.includes('drlucky-verify')) {
          return true
        }
        const productStatusData = { product_id: this.$route.params.id }
        const cartid = window.localStorage.getItem('cart-id')
        if (cartid) productStatusData.hash = cartid
        await this.$store.dispatch(FETCH_PRODUCT_STATUS, productStatusData)
        const hash = this.allowAddcart.hash
        if (hash) window.localStorage.setItem('cart-id', hash)
        const addCart = this.allowAddcart.allow_addcart
        if (addCart.shop === false) return false
        switch (this.product.product_type) {
          case 'device_bundle_existing': return addCart.ext
          case 'device_bundle_new_customer': return addCart.new
          default: return addCart.sim_only
        }
      },
      setEkyc (ekyc, id) {
        const key = 'postpaid-ekyc-data'
        let data = JSON.parse(localStorage.getItem(key)) || {}
        if (typeof data !== 'object') data = {}
        data[id] = ekyc
        localStorage.setItem(key, JSON.stringify(data))
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

        meta.sim_source_type = this.simSourceType

        if (this.$route.name === 'drlucky-verify') {
          const postpaidAddress = this.$refs.postpaidAddress
          const postpaidAddressForm = postpaidAddress.getFormValue()
          let drluckNumber = window.localStorage.getItem('truestore-berfuntong-number')
          let form = window.localStorage.getItem('truestore-berfuntong-form')
          form = JSON.parse(form)
          drluckNumber = JSON.parse(drluckNumber)
          meta.campaign_type = 'vhora'
          meta.birth_date = form.birthdate
          meta.thai_id_expire_year = postpaidAddressForm.userDetails.thai_id_expire_year - 543
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

        const checkSimFamilyInfo = JSON.parse(window.localStorage.getItem('sim_family_info'))
        const companyCode = localStorage.getItem('company_code')
        const propoAmdoc = localStorage.getItem('proposition_amdoc')

        if ((this.$route.name === 'online-store-postpaid-verify' || this.$route.name === 'online-store-lucky-verify' || this.$route.name === 'online-store-lucky-9999-verify') && (window.no_ekyc_sim_only || checkSimFamilyInfo !== null)) {
          meta.campaign_type = checkSimFamilyInfo !== null ? 'sim_only_epp' : 'sim_only'
          meta.correlation_id = this.postpaidResult.correlation_id // No need for esim
          meta.dealer_code = this.postpaidResult.dealer_code // No need for esim
          meta.user_information.iden_type = 'I'
          meta.price_plan.company_code = companyCode
          meta.sim_info = {
            proposition_amdoc: propoAmdoc,
            proposition_rms: this.package.proposition_rms,
            product_name: this.package.product_name,
            campaign_name: this.package.campaign_name,
            discount: this.package.discount,
            discount_code: this.package.discount_code,
            other_pay_amount_code: this.package.other_pay_amount_code,
            other_pay_amount: this.package.other_pay_amount
          }
          if (this.sim_source_type === 'physical-sim') {
            meta.price_plan.nas_code = this.package.external_nas_code
          }
          if (this.simSourceType === 'e-sim') {
            meta.sim_info.proposition_nas_code = this.package.external_nas_code
            meta.sim_info.promotion_set = this.package.promotion_set
            meta.price_plan.nas_code = this.package.external_nas_code
            meta.advance_payment = this.package.advance_payment
          }
          if (this.postpaidResult.ekyc_hash && meta.campaign_type === 'sim_only_epp') meta.ekyc_hash = this.postpaidResult.ekyc_hash
        }

        if (window.localStorage.getItem('sim_family_info')) {
          const simFamilyInfo = JSON.parse(window.localStorage.getItem('sim_family_info'))
          meta.sim_family_info = {
            hdr_cp_fan_emp_thai_id: this.postpaidResult.thai_id,
            hdr_cp_fan_emp_id: simFamilyInfo.hdr_cp_fan_emp_id,
            hdr_cp_fan_company_group: simFamilyInfo.hdr_cp_fan_company_group
          }
          if (simFamilyInfo.hdr_cp_fan_ref_code) meta.sim_family_info.hdr_cp_fan_ref_code = simFamilyInfo.hdr_cp_fan_ref_code
        }

        if (this.$route.name === 'online-store-prepaid-verify') {
          if (this.simSourceType === 'e-sim' && this.pricePlans.length === 1) {
            if (window.localStorage.getItem('ref_id')) {
              meta.ref_id = window.localStorage.getItem('ref_id')
            }

            meta.correlation_id = this.postpaidResult.correlation_id // No need for esim
            meta.dealer_code = this.postpaidResult.dealer_code // No need for esim
            meta.user_information.iden_type = 'I'

            meta.price_plan = {
              id: this.pricePlans[0].id,
              code: this.pricePlans[0].code,
              sim_type: this.pricePlans[0].sim_type,
              nas_code: this.pricePlans[0].external_code,
              proposition_nas_code: this.pricePlans[0].proposition_nas_code,
              campaign_code: this.pricePlans[0].campaign_code,
              company_code: companyCode
            }
            meta.sim_info = {
              proposition_nas_code: this.package.external_nas_code,
              proposition_amdoc: propoAmdoc,
              proposition_rms: this.package.proposition_rms,
              promotion_set: this.package.promotion_set,
              product_name: this.package.product_name,
              campaign_name: this.package.campaign_name,
              discount: this.package.discount,
              discount_code: this.package.discount_code,
              other_pay_amount_code: this.package.other_pay_amount_code,
              other_pay_amount: this.package.other_pay_amount
            }
            meta.campaign_type = 'sim_only'
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

        if (this.product.product_type === 'sim' && this.simSourceType) {
          data.meta = {
            sim_source_type: this.simSourceType
          }
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
      async updateBundleCart (meta) {
        const bundle = this.product.bundles.find(bundle => (
          bundle.id === this.$route.params.bundle
        ))
        const deviceProduct = bundle.inventories.find(inventory => (
          inventory.product_id === this.product.id
        ))
        const simProduct = bundle.inventories.find(inventory => (
          inventory.product_id !== this.product.id
        ))
        meta.product_info.product_id = simProduct.product_id.replace(/\D/g, '')
        meta.advance_payment = bundle.advance_payment
        this.setEkyc(meta.ekyc, simProduct.product_id)
        delete meta.ekyc
        delete meta.price_plan.long_description
        delete meta.price_plan.proposition_term_long
        meta.sim_image = this.packages.package_image_desktop
        meta.sim_source_type = this.simSourceType // e-sim or physical-sim

        // set meta for case esim only
        if (this.simSourceType === 'e-sim') {
          meta.campaign_type = 'device_bundling' // e-sim = device_bundling
        }

        if (window.localStorage.getItem('sim_family_info')) {
          const simFamilyInfo = JSON.parse(window.localStorage.getItem('sim_family_info'))
          meta.sim_family_info = {
            hdr_cp_fan_emp_thai_id: this.postpaidResult.thai_id,
            hdr_cp_fan_emp_id: simFamilyInfo.hdr_cp_fan_emp_id,
            hdr_cp_fan_company_group: simFamilyInfo.hdr_cp_fan_company_group
          }
          if (simFamilyInfo.hdr_cp_fan_ref_code) meta.sim_family_info.hdr_cp_fan_ref_code = simFamilyInfo.hdr_cp_fan_ref_code
        }

        const data = {
          bundle_channel: 'tmvh-official-website',
          products: [
            {
              product_id: deviceProduct.product_id,
              inventory_id: this.$route.params.inventory_id ? this.$route.params.inventory_id : deviceProduct.inventory_id,
              store_id: this.product.store_id,
              bundle_hash: bundle.id,
              bundle_ref_code: bundle.ref_code,
              quantity: '1',
              lang: 'th',
              section: 'wemall',
              user_id: '0',
              channel: 'tmh-website'
            },
            {
              product_id: simProduct.product_id,
              inventory_id: simProduct.inventory_id,
              store_id: this.product.store_id,
              bundle_hash: bundle.id,
              bundle_ref_code: bundle.ref_code,
              sim_meta: [meta],
              quantity: '1',
              lang: 'th',
              section: 'wemall',
              user_id: '0',
              is_catalog: 'false',
              channel: 'tmh-website'
            }
          ],
          user_id: '0',
          section: 'wemall'
        }
        const addons = !this.isPaysmooth ? computeAddons(this.$route.query, this.product) : []
        data.products = [...data.products, ...addons]
        data.products[1].meta = { sim_source_type: this.simSourceType || 'physical-sim' }
        if (this.isPaysmooth) data.products = data.products.map(product => ({ ...product, meta: { pay_smooth: true } }))
        if (localStorage.getItem('iot-package')) {
          data.products[0].meta = JSON.parse(localStorage.getItem('iot-package'))
        }

        if (this.isCampaignRedeemFreeDevice || this.isCampaignFreeDevice) {
          if (data.products[0]?.meta) {
            data.products[0].meta.free_device = this.product.config_free_device[this.product.product_type]
          } else {
            data.products[0].meta = {
              free_device: this.product.config_free_device[this.product.product_type]
            }
          }
        }

        await this.trackAnalytics({
          meta,
          bundle,
          sim: simProduct,
          product: {
            inventory: this.product.inventories.find(e => e.id === deviceProduct.inventory_id),
            ...this.product
          }
        })
        const hash = window.localStorage.getItem('cart-id')
        if (hash) data.hash = hash
        try {
          const result = await this.$store.dispatch(UPDATE_BUNDLE_CART, { data })

          // Add log for add to cart
          this.$store.dispatch(FETCH_CART, { id: hash }).then(({ data }) => {
            if (data && data.record && data.record[0]) {
              data.record[0].products.forEach(product => {
                let amount = product.inventory.price
                const quantity = product.quantity
                let advancePayment = ''

                if (product.product_type === 'device_bundle_new_customer') {
                  amount -= product.bundles[0].discount
                  advancePayment = product.bundles[0].advance_payment
                }

                loggerAddon({
                  event: 'Cart',
                  status: 'add',
                  productId: product.id,
                  matcode: product.inventory.sku,
                  quantity,
                  amount,
                  advancePayment
                })
              })
            }
          })

          window.localStorage.setItem('cart-id', result.cart_hash)
          await updateEntPack(this.$route.query.ep, this.$route.query, this.product, result.cart_hash, { id: deviceProduct.inventory_id })
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
      async setPrepaidDataMeta () {
        this.loading = true
        const form = {
          number: this.$route.params.number,
          sim_type: 'prepaid',
          product_info: {
            product_id: this.$route.params.id.replace(/\D/g, ''),
            product_type: 'sim',
            propo_code: this.$route.params.nas,
            store_id: this.product.store_id,
            inventory_id: this.product.inventories[0].id.toString()
          }
        }

        await this.computeCart(form)
      },
      async save () {
        let error = ''
        const postpaidAddress = this.$refs.postpaidAddress
        this.prefillShippingAddress(postpaidAddress.getFormValue())
        if (!postpaidAddress.checkValidity()) {
          window.scrollTo(0, 0)
          postpaidAddress.showFormInvalid = true
          return
        }
        this.loading = true
        postpaidAddress.showFormInvalid = false
        const postpaidAddressForm = postpaidAddress.getFormValue()
        const userDetails = postpaidAddressForm.userDetails
        const idCardForm = postpaidAddressForm.idCardForm
        const billingAddress = postpaidAddressForm.billingAddress
        const useIdForm = postpaidAddressForm.useIdForm

        if (this.isPostpaid && !await this.checkAllowAddcart()) {
          this.$router.push('/cart?error=012')
          return
        }

        const userData = this.isPostpaid
          ? {
            thai_id: this.postpaidResult.thai_id,
            verify_time: this.postpaidResult.verify_time,
            birth_date: this.postpaidResult.birth_date
          }
          : {
            thai_id: this.verifyForm.id_number,
            verify_time: this.verifyResult.verify_time,
            birth_date: `${this.verifyForm.date_birth}/${this.verifyForm.month_birth}/${this.verifyForm.year_birth}`
          }

        const form = {
          number: this.$route.params.number,
          sim_type: this.product.sim_data ? this.product.sim_data.sim_type : 'postpaid',
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
          verify_time: userData.verify_time,
          birth_date: userData.birth_date,
          user_information: {
            thai_id: userData.thai_id,
            title: userDetails.title,
            txt_title_other: userDetails.txt_title_other,
            first_name: userDetails.first_name,
            last_name: userDetails.last_name,
            thai_id_expire_day: userDetails.thai_id_expire_day,
            thai_id_expire_month: userDetails.thai_id_expire_month,
            thai_id_expire_year: userDetails.thai_id_expire_year - 543,
            email: userDetails.email,
            telephone: userDetails.telephone,
            address: idCardForm.address,
            swine: '',
            village: idCardForm.village,
            building: idCardForm.building,
            floor: idCardForm.floor,
            room_number: idCardForm.room,
            alley: idCardForm.alley,
            street_name: idCardForm.road,
            province: idCardForm.province_id,
            district: idCardForm.city_id,
            sub_district: idCardForm.district_id,
            zip_code: idCardForm.postcode,
            billing_address: {},
            invoice_address_type: 'other_address'
          }
        }

        if (useIdForm === 'true') {
          form.user_information.billing_address = {
            address: idCardForm.address,
            swine: '',
            village: idCardForm.village,
            building: idCardForm.building,
            floor: idCardForm.floor,
            room_number: idCardForm.room,
            alley: idCardForm.alley,
            street_name: idCardForm.road,
            province: idCardForm.province_id,
            district: idCardForm.city_id,
            sub_district: idCardForm.district_id,
            zip_code: idCardForm.postcode
          }
        } else {
          form.user_information.billing_address = {
            address: billingAddress.address,
            swine: '',
            village: billingAddress.village,
            building: billingAddress.building,
            floor: billingAddress.floor,
            room_number: billingAddress.room,
            alley: billingAddress.alley,
            street_name: billingAddress.road,
            province: billingAddress.province_id,
            district: billingAddress.city_id,
            sub_district: billingAddress.district_id,
            zip_code: billingAddress.postcode
          }
        }

        if (this.isPostpaid) {
          error = await this.removeProduct()
          form.ekyc = this.postpaidResult.ekyc
        } else {
          form.ekyc = {
            id_number: this.verifyForm.id_number,
            face_recog_cust_capture: this.verifyForm.face_recog_cust_capture,
            'face-recog-cust-certificate': this.verifyForm['face-recog-cust-certificate'],
            face_recog_cust_capture_filename: this.verifyForm.face_recog_cust_capture_filename,
            'face-recog-cust-certificate-filename': this.verifyForm['face-recog-cust-certificate-filename']
          }
        }

        const user = form.user_information
        const billing = form.user_information.billing_address
        const postpaidAddress1 = [
          billing.address,
          billing.village,
          billing.building,
          billing.floor,
          billing.room_number,
          billing.street_name
        ].filter(item => item).join(', ')

        const postpaidBilling = {
          district_id: billing.sub_district,
          city_id: billing.district,
          province_id: billing.province,
          country_id: '209',
          postcode: billing.zip_code,
          firstname: user.first_name,
          lastname: user.last_name,
          address1: postpaidAddress1,
          address2: billing.alley,
          phone: user.telephone,
          email: user.email
        }

        if (error && this.$route.name !== 'drlucky-verify') {
          this.$router.push(`/cart?error=${error}`)
        } else {
          localStorage.setItem('postpaid-billing', JSON.stringify(postpaidBilling))
          if (this.isPostpaid) {
            if (this.product.product_type === 'device_bundle_new_customer') {
              await this.updateBundleCart(form)
            } else {
              await this.computeCart(form)
            }
          } else {
            this.$parent.setSimMeta(form)
            this.$parent.goTo('result')
          }
        }
      },
      prefillShippingAddress (data) {
        const deliveryAddress = {
          district_id: data.idCardForm.district_id,
          city_id: data.idCardForm.city_id,
          province_id: data.idCardForm.province_id,
          country_id: '209',
          postcode: data.idCardForm.district_id,
          firstname: data.userDetails.first_name,
          lastname: data.userDetails.last_name,
          phone: data.userDetails.telephone,
          email: data.userDetails.email,
          address1: data.idCardForm.address,
          address2: data.idCardForm.alley,
          useIdForm: data.useIdForm
        }
        const prefillAddress = { delivery_address: deliveryAddress }
        if (data.useIdForm !== 'true') {
          prefillAddress.billing_address = {
            district_id: data.billingAddress.district_id,
            city_id: data.billingAddress.city_id,
            province_id: data.billingAddress.province_id,
            country_id: '209',
            postcode: data.billingAddress.postcode,
            firstname: data.userDetails.first_name,
            lastname: data.userDetails.last_name,
            phone: data.userDetails.telephone,
            email: data.userDetails.email,
            address1: data.billingAddress.address,
            address2: data.billingAddress.alley,
            account_type: 'individual'
          }
        } else {
          prefillAddress.billing_address = {
            district_id: data.billingAddress.district_id,
            city_id: data.billingAddress.city_id,
            province_id: data.billingAddress.province_id,
            country_id: '209',
            postcode: data.billingAddress.postcode,
            firstname: '',
            lastname: '',
            phone: '',
            email: '',
            address1: '',
            address2: '',
            account_type: 'individual'
          }
        }
        localStorage.setItem('address', JSON.stringify(prefillAddress))
      }
    }
  }
</script>

<style lang="scss" scoped>
  .address-container {
    background-color: #fff;
    padding: 30px 30px 60px 30px;
    border-radius: 8px;

    .address-inner-container {
      max-width: 720px;
      margin: 0 auto;
    }

    .address-title {
      font-size: 40px;
      line-height: 40px;
      font-family: "TrueBold";
      margin-bottom: 18px;
      color: #000;
      text-align: center;
    }

    .address-form {
      padding-bottom: 16px;
    }

    .form-label {
      color: #000;
      font-size: 30px;
      line-height: 27px;
      margin: 6px 0;
    }

    .form-container {
      margin-bottom: 26px;

      &::v-deep {
        label {
          line-height: 27px;
          font-family: "TrueMedium";
          font-size: 24px;
          color: #4a4a4a;
        }

        input {
          background-color: #fff;
          border-radius: 8px;
          border: 1px solid #000;
          font-family: "TrueBold";
          font-size: 24px;

          &::placeholder {
            color: #9b9b9b;
            font-family: "TrueMedium";
          }

          &[disabled] {
            border-color: #cccccc;
          }
        }
      }
    }

    .form.invalid-form .form-container::v-deep {
      .input input:invalid {
        border-color: #ff0000;
        color: #ff0000;
      }
    }

    .user-details-form::v-deep {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 14px 20px;

      .form:nth-child(1),
      .form:nth-child(4)  {
        grid-column: 1 / -1;
      }

      .name-title-container {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        width: 100%;
        grid-gap: 20px;
        color: #4a4a4a;
        font-size: 24px;

        input[type="radio"] {
          margin-right: 8px;
        }

        .radio-input-container {
          display: flex;
          align-items: center;
          grid-column-end: span 2;
        }

        .radio-input-container:last-child {
          grid-column: 7/-1;
        }

        .custom-name-title-input {
          margin-left: 10px;
        }
      }

      .expiration-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        width: 100%;
        grid-gap: 20px;
      }
    }

    .id-card-form::v-deep {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 14px 20px;

      .form:first-child {
        grid-column: 1 / -1;
      }
    }

    .billing-address-same {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px;
      margin: 10px 0;

      label {
        font-size: 24px;
        line-height: 27px;
        color: #4a4a4a;
        margin-left: 10px;
      }
    }

    .agreement-container {
      font-size: 24px;
      line-height: 35px;
      color: #666;
      border-top: 1px solid #ddd;
      padding-top: 16px;

      span {
        font-family: "TrueBold";
      }

      label {
        cursor: pointer;
        display: inline-flex;
        align-items: center;
      }

      input {
        margin-right: 8px;
      }

      a {
        margin: 0 4px;
        color: #ff0000;
      }
    }

    .save-button-container {
      margin-top: 36px;
      text-align: center;

      .button {
        background: #ff0000;

        &[disabled] {
          background: #9e9e9e;
        }
      }
    }
  }

  @media screen and (max-width: 860px) {
    .address-container {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 4px;
      padding: 24px 16px;

      .billing-address-same label {
        font-size: 20px;
      }

      .id-card-form::v-deep {
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 0;
      }

      .form-container::v-deep label {
        font-size: 20px;
      }

      .address-title {
        font-size: 24px;
        line-height: 30px;
      }

      .form-label {
        font-size: 22px;
      }

      .user-details-form {
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 0;

        .name-title-container {
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 12px;

          .radio-input-container {
            grid-column-end: auto;

            &:last-child {
              grid-column: 1/-1;
            }
          }
        }
        .expiration-container {
          grid-gap: 8px;
        }
      }

      .billing-address-same {
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 8px;
      }

      .agreement-container {
        line-height: 20px;
        font-size: 20px;

        & > div {
          margin-bottom: 8px;
        }

        label {
          display: block;
        }
      }
    }
  }
</style>
