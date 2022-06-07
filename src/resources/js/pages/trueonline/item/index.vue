<template>
  <div>
    <banner-element />
    <loading-element class="loading-container" v-if="loading" />
    <div class="store_container" v-else>
      <div class="product_container">
        <div class="product_header">
          <div class="arw-orange-sm-right sprite-icons" />
          <div class="product_header_content">
            <div class="title">{{ Content.selectmodel[$i18n.locale] }}</div>
            <div class="product_info">
              <span class="product_name">{{ description[$i18n.locale] }}</span>
            </div>
          </div>
        </div>
        <div class="product_content">
          <div class="product_image">
            <img :src="product.image.url" />
          </div>
          <div class="product_details">
            <div class="product_details_container">
              <div class="product_detail">
                <div class="product_label">{{ Content.modelname[$i18n.locale] }}</div>
                <div class="product_option title">
                  {{ product.download }}/{{ product.upload }}
                </div>
              </div>
              <div class="product_detail">
                <div class="product_label"></div>
                <div class="product_option">
                  <clm-benefit-element
                    type="trueonline"
                    :tolProduct="tolProduct"
                  ></clm-benefit-element>
                </div>
              </div>
              <div class="product_detail special_price">
                <div class="product_label">{{ Content.regularprice[$i18n.locale] }}</div>
                <div class="product_option price">
                  <span class="black">{{ computeBalance(product.price) }}</span>฿
                </div>
              </div>
              <div class="product_detail">
                <div class="product_label">{{ Content.status[$i18n.locale] }}</div>
                <div class="product_option status">
                  <span :class="product.status ? 'green' : 'red'">
                    <template v-if="product.status">{{ Content.instock[$i18n.locale] }}</template>
                    <template v-else>{{ Content.outofstock[$i18n.locale] }}</template>
                  </span>
                </div>
              </div>
              <div class="product_detail">
                <div class="product_label" />
                <div class="product_option buynow">
                  <router-link
                    :to="`/trueonline/address/${$route.params.id}`"
                    id="tol-lvd-package-detail"
                  >
                    <button-element>{{ Content.buynow[$i18n.locale] }}</button-element>
                  </router-link>
                  <router-link
                    to="/online-store?trueonline=true"
                    id="tol-lvd-back"
                  >
                    <button-element class="back">{{ Content.back[$i18n.locale] }}</button-element>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tab_container">
          <div class="tab">{{ Content.specsfeatures[$i18n.locale] }}</div>
        </div>
        <div class="product_promo">
          <img v-if="imageDescription" :src="imageDescription" />
        </div>
      </div>
    </div>
    <div class="slanted_container">
      <div class="slanted" />
    </div>
  </div>
</template>

<script>
  import Button from '@components/button'
  import Loading from '@components/loading'
  import Banner from '../../store/detail/banner'
  import ClmBenefit from '@components/clm-benefit'

  import Content from './content.json'
  import {
    computeBalance
  } from '@utils/common'

  import {
    loggerAddon
  } from '@utils/addon'

  export default {
    components: {
      'banner-element': Banner,
      'button-element': Button,
      'loading-element': Loading,
      'clm-benefit-element': ClmBenefit,
    },
    props: {
      loading: Boolean
    },
    data: () => ({
      Content,
      mkt_code: null
    }),
    computed: {
      tolProduct () {
        return this.$store.state.trueonline.tolProduct.data
      },
      product () {
        return this.$store.state.trueonline.tolProduct.data
      },
      description () {
        return {
          th: this.product.description_th,
          en: this.product.description_en
        }
      },
      imageDescription () {
        return this.product?.['description_image']?.url
      }
    },
    watch: {
      loading (value) {
        if (!value) {
          loggerAddon({
            type: 'TOL',
            event: 'TOL visit product',
            tolProductData: [
              this.product.contract_code,
              this.product.entry_fee,
              this.product.media,
              this.product.service_code
            ],
            tolPrice: this.product.price,
            tolInvoice: this.product.invoice_tol,
            tolEntryFee: this.product.tol_entry_fee
          })
        }
      }
    },
    mounted () {
      if (!this.loading) {
        loggerAddon({
          type: 'TOL',
          event: 'TOL visit product',
          tolProductData: [
            this.product.contract_code,
            this.product.entry_fee,
            this.product.media,
            this.product.service_code
          ],
          tolPrice: this.product.price,
          tolInvoice: this.product.invoice_tol,
          tolEntryFee: this.product.tol_entry_fee
        })
      }
    },
    methods: {
      computeBalance
    }
  }
</script>

<style lang="scss">
  .product_promo {
    font-size: 1.5em;

    img {
      max-width: 100%;
      margin: auto;
      display: block;
    }
  }
</style>
<style lang="scss" scoped>
  .store_container .product_container .product_details_container {
    .product_option.buynow {
      display: grid;
      grid-gap: 8px;

      .back {
        background-color: #9e9e9e;
        padding: 12px
      }
    }
  }
</style>
<style scoped lang="scss" src="../../store/store.scss"></style>
<style scoped lang="scss" src="../../store/detail/style.scss"></style>
