<template>
    <div class="sale-landing">
        <loading-element v-if="loading" />
        <div v-if="!loading">
            <div class="title">
                กรอกรายละเอียดสำหรับ <br>
                การสั่งซื้อให้ลูกค้า
            </div>
            <div class="label-form">
                <label> {{ content.sale_alias[$i18n.locale]}}</label>
                <dropdown-element class="drop-down" v-model="saleAlias" :options="listSaleAlias" :placeholder="content.sale_alias[$i18n.locale]" />
            </div>
            <div class="label-form">
                <label> {{content.shop_code[$i18n.locale]}}</label>
                <search-dropdown-element ref="dropDownShop" class="drop-down" :disabled="!hasShop"  v-model="shopCode" :item="listShopCode" name="shop_code" :placeholder="content.shop_code[$i18n.locale]" />
            </div>
            <div class="label-form">
                <label>{{content.sale_code[$i18n.locale]}}</label>
                <input-element
                    :disabled="!shopCode && hasShop || !saleAlias"
                    :placeholder="content.sale_code[$i18n.locale]"
                    v-model="salesCode"
                />
            </div>
            <div class="label-form">
                <label> {{content.mobile_number[$i18n.locale]}} </label>
                <input-element
                    :disabled="!shopCode && hasShop || !saleAlias"
                    :placeholder="content.mobile_number[$i18n.locale]"
                    v-model="mobileNumber"
                />
            </div>
            <div v-if="errors.invalid_mobile_number.length > 0" class="error">
                <p  v-for="(invalid_mobile_number, index) in errors.invalid_mobile_number" :key="index">
                    {{ content.invalid_mobile[$i18n.locale] }}
                </p>
            </div>
            <div class="label-form">
                <label>{{content.sale_channel[$i18n.locale]}}</label>
                <dropdown-element :disabled="!shopCode && hasShop || !saleAlias" class="drop-down" v-model="saleChannel" :options="listSaleChannel" :placeholder="content.sale_channel[$i18n.locale]"/>
            </div>
            <div class="label-form">
                <label>{{content.ads_campaign_code[$i18n.locale]}}</label>
                <input-element
                    :placeholder="content.ads_campaign_code[$i18n.locale]"
                    v-model="adsCampaignCode"
                    :disabled="!isAdsCampaign"
                    @keypress="isLetterNumuric($event)"
                />
            </div>
            <div class="label-form">
                <label>{{content.product_type[$i18n.locale]}}</label>
                <dropdown-element :disabled="!shopCode && hasShop || !saleAlias" class="drop-down" v-model="productType" :options="listProductType" :placeholder="content.product_type[$i18n.locale]"/>
            </div>
            <div class="label-form">
                <label>{{content.campaign_type[$i18n.locale]}}</label>
                <dropdown-element :disabled="!productType" class="drop-down" v-model="campaign" :options="listCampaign" :placeholder="content.campaign_type[$i18n.locale]"/>
            </div>
            <div>
                <button-element :disabled="!shopCode && hasShop || !salesCode || !mobileNumber || !saleChannel || !productType || !campaign || (isAdsCampaign && !adsCampaignCode)" @click="submit">
                    {{content.continue[$i18n.locale]}}
                </button-element>
            </div>
        </div>
        <popup-element ref="dialog"/>
        <popup-error ref="popup"/>
    </div>
</template>
<script>
  import ButtonElement from '@components/button'
  import Input from '@components/input'
  import Dropdown from '@components/dropdown'
  import SearchDropdown from '@components/search-dropdown/index'
  import content from './content.json'
  import popup from '../store/detail/popup.vue'
  import PopupError from './popup'
  import Loading from '@components/loading'
  import {
    SALE_SHOP_DATA,
    SHOP_CONFIG_DATA,
    SHOP_CONFIG_ALIAS
  } from '@store/actions.type'
  import { VALIDATE_SHOP_CODE } from '../../store/actions.type'

  export default {
    components: {
      'button-element': ButtonElement,
      'input-element': Input,
      'dropdown-element': Dropdown,
      'search-dropdown-element': SearchDropdown,
      'popup-element': popup,
      'popup-error': PopupError,
      'loading-element': Loading
    },
    data () {
      return {
        content,
        saleAlias: '',
        shopCode: '',
        nonShopCode: '',
        salesCode: '',
        adsCampaignCode: '',
        mobileNumber: '',
        saleChannel: '',
        productType: '',
        campaign: '',
        token: '',
        errors: {
          invalid_mobile_number: {}
        },
        listSaleAlias: [],
        shopConfig: null,
        aliasData: [],
        listShopCode: {
          options: []
        },
        listSaleChannel: [],
        listProductType: [],
        productTypeConfig: [],
        loading: false,
        saleAdsCampaignByChannel: []
      }
    },
    computed: {
      listCampaign () {
        const listCampaign = []
        if (this.shopConfig !== null) {
          const shopConfig = JSON.parse(JSON.stringify(this.shopConfig))
          if (this.productType === this.productTypeConfig.config) {
            for (const i in shopConfig.config) {
              listCampaign.push({
                id: i,
                value: shopConfig.config[i]?.name,
                url: shopConfig.config[i]?.url,
                token: shopConfig.config[i]?.token,
                isEmployeeProgram: shopConfig.config[i]?.isEmployeeProgram
              })
            }
          }
          if (this.productType === this.productTypeConfig.direct_url && shopConfig?.direct_url) {
            for (const i in shopConfig.direct_url) {
              listCampaign.push({
                id: i,
                value: shopConfig.direct_url[i].name,
                url: shopConfig.direct_url[i].url,
                isEmployeeProgram: shopConfig.direct_url[i]?.isEmployeeProgram
              })
            }
          }
        }
        return listCampaign
      },
      hasShop () {
        return (this.listSaleAlias.length > 0) ? this.listSaleAlias.find(alias => alias.value === this.saleAlias)?.shop : false
      },
      accountType () {
        return (this.listSaleAlias.length > 0) ? this.listSaleAlias.find(alias => alias.value === this.saleAlias)?.accountType : 'true'
      },
      isAdsCampaign () {
        let isAdsCampaignCode = false
        if (this.saleAdsCampaignByChannel.indexOf(this.saleChannel) > -1) {
          isAdsCampaignCode = true
        } else {
          this.adsCampaignCode = ''
        }
        return isAdsCampaignCode
      }
    },
    watch: {
      async saleAlias () {
        await this.getSaleShopData()
      },
      async shopCode () {
        await this.getShopConfig()
      }
    },
    created () {
      this.$store.dispatch(SHOP_CONFIG_ALIAS)
        .then(res => {
          const keys = Object.keys(res.sale_alias)
          for (const key of keys) {
            const tmpAlias = {
              id: key,
              value: key,
              shop: res.sale_alias[key].shop,
              accountType: res.sale_alias[key].account_type
            }
            let saleAliasShopCode = ''
            if (res.sale_alias[key].shop_code !== undefined) {
              saleAliasShopCode = res.sale_alias[key].shop_code
            }

            tmpAlias.shopCode = saleAliasShopCode
            this.listSaleAlias.push(tmpAlias)
          }
          this.listSaleChannel = res.sale_channel
          this.productTypeConfig = res.sale_product_type

          const tmhData = this.getSaleData()
          if (tmhData) {
            this.saleAlias = tmhData.sale_alias
          }
          this.saleAdsCampaignByChannel = res.sale_ads_campaign_by_channel
        })
        .catch((error) => {

        })
    },
    methods: {
      saveSaleData () {
        const data = {
          sale_alias: this.saleAlias,
          shop_code: this.shopCode && this.hasShop ? this.listShopCode.options[this.shopCode].shop_code : '',
          shop_code_index: this.shopCode && this.hasShop ? this.shopCode : null,
          sale_code: this.salesCode,
          sale_mobile: this.mobileNumber,
          sale_channel: this.saleChannel,
          non_shop_code: this.nonShopCode,
          token: this.token,
          sale_mode: '1',
          ads_campaign_code: this.adsCampaignCode
        }
        localStorage.setItem('TMH-SALE-DATA', JSON.stringify(data))
        this.$root.$emit('setShowSaleFooter')
      },
      getSaleData () {
        return JSON.parse(localStorage.getItem('TMH-SALE-DATA'))
      },
      async getShopConfig () {
        let shopCode

        if (this.hasShop === true && this.shopCode) {
          shopCode = (this.listShopCode.options[this.shopCode].shop_code !== undefined) ? this.listShopCode.options[this.shopCode].shop_code : ''
        } else if (this.hasShop !== true) {
          shopCode = this.saleAlias
        }

        if (shopCode) {
          await this.$store.dispatch(SHOP_CONFIG_DATA, shopCode.toLowerCase())
            .then(res => {
              this.shopConfig = JSON.parse(JSON.stringify(res))
              this.listProductType = []
              if (res.config) {
                this.listProductType.push(this.productTypeConfig.config)
              }

              if (res.direct_url) {
                this.listProductType.push(this.productTypeConfig.direct_url)
              }
            })
        }
      },
      async getSaleShopData () {
        this.listProductType = []
        this.shopConfig = null
        this.productType = ''
        this.shopCode = ''
        this.nonShopCode = ''
        this.listShopCode = { options: [] }
        this.$refs.dropDownShop.selectValue = null
        if (this.hasShop === true) {
          this.$store.dispatch(SALE_SHOP_DATA, this.saleAlias.toLowerCase())
            .then(res => {
              for (const i in res.shop) {
                res.shop[i].id = i
                res.shop[i].value = res.shop[i].shop_code
              }
              this.listShopCode = {
                options: res.shop
              }

              const tmhData = this.getSaleData()
              if (tmhData) {
                if (tmhData.shop_code_index !== null) {
                  this.shopCode = tmhData.shop_code_index
                }
                this.salesCode = tmhData.sale_code
                this.mobileNumber = tmhData.sale_mobile
                this.saleChannel = tmhData.sale_channel
              }
            })
            .catch((error) => {

            })
        } else {
          this.listShopCode.disabled = true
          const tmhData = this.getSaleData()
          if (tmhData) {
            this.salesCode = tmhData.sale_code
            this.mobileNumber = tmhData.sale_mobile
            this.saleChannel = tmhData.sale_channel
          }
          this.getShopConfig()
        }
      },
      async submit () {
        this.loading = true
        let shopCodeValidate = ''
        if (this.shopCode && this.hasShop) {
          shopCodeValidate = this.listShopCode.options[this.shopCode].shop_code
        } else {
          shopCodeValidate = this.listSaleAlias.filter(shop => shop.id === this.saleAlias)
          shopCodeValidate = shopCodeValidate[0]?.shopCode
          this.nonShopCode = shopCodeValidate
        }

        const validateShopCodeData = {
          sale_code: this.salesCode,
          shop_code: shopCodeValidate,
          account_type: this.accountType
        }
        await this.$store.dispatch(VALIDATE_SHOP_CODE, validateShopCodeData).then((data) => {
          if (data.status_code === 200) {
            const url = this.listCampaign[this.campaign].url
            const isEmployeeProgram = this.listCampaign[this.campaign]?.isEmployeeProgram
            if (this.checkForm() === true) {
              if (this.productType === this.productTypeConfig.direct_url) {
                this.saveSaleData()
                if (isEmployeeProgram !== undefined && isEmployeeProgram === true) {
                  this.redirectTo(url, true)
                } else {
                  localStorage.setItem('TMH-DIRECT-URL', url)
                  this.$refs.dialog.open()
                }
              }
              if (this.productType === this.productTypeConfig.config) {
                this.token = this.listCampaign[this.campaign]?.token
                this.saveSaleData()
                if (isEmployeeProgram !== undefined && isEmployeeProgram === true) {
                  this.redirectTo(url, true)
                } else {
                  this.redirectTo(url, false)
                }
              }
            }
            this.loading = false
          } else {
            this.handleErrorValidateShopCode()
          }
        }).catch(() => {
          this.handleErrorValidateShopCode()
        })
      },
      redirectTo (url, isExternal) {
        if (isExternal) {
          window.location.href = url
        } else {
          url = url.replace(/^.*\/\/[^\/]+/, '')
          this.$router.push(url)
        }
      },
      handleErrorValidateShopCode () {
        this.loading = false
        this.$refs.popup.open()
        return false
      },
      checkForm () {
        this.errors.invalid_mobile_number = []
        const valid = /^[0]{1}[0-9]{9}$/.test(
          this.mobileNumber.toString()
        )
        if (!valid) {
          this.errors.invalid_mobile_number.push('')
        }
        if (!this.errors.invalid_mobile_number.length) {
          return true
        }
        return false
      },
      isLetterNumuric (e) {
        const char = String.fromCharCode(e.keyCode)
        const valid = /^[\w-]*$/.test(char)
        if (valid) {
          return true
        } else {
          e.preventDefault()
        }
      }
    }
  }
</script>
<style lang="scss" scoped src="./style.scss"></style>
