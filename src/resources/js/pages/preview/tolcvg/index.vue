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
                  <!-- benefit on top -->
                  <clm-benefit-element
                    type="demo"
                    :verifyType="verifyType"
                    :tolProduct="tolProduct"
                    :campCode="campCode"
                  ></clm-benefit-element>
                  <!-- end of benefit on top -->
                </div>
              </div>
              <div class="product_detail special_price">
                <div class="product_label">{{ Content.regularprice[$i18n.locale] }}</div>
                <div class="product_option price">
                  <span class="red">{{ computeBalance(product.price) }}</span>฿
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
  import Banner from '../../store/detail/banner'
  import Loading from '@components/loading'
  import ClmBenefit from '@components/clm-benefit'
  import Content from './content.json'

  import {
    computeBalance
  } from '@utils/common'

  import {
    FETCH_TOL_PRODUCT
  } from '@store/actions.type'

  export default {
    components: {
      'clm-benefit-element': ClmBenefit,
      'banner-element': Banner,
      'loading-element': Loading
    },
    data: () => ({
      loading: true,
      Content,
      whateverActivatesThisLink: null, // for disable router link
      campCode: '',
      verifyType: ''
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
    async mounted () {
      const id = window.clm_preview.TOLCVG
      try {
        await Promise.all([
          this.$store.dispatch(FETCH_TOL_PRODUCT, id)
            .then((data) => {
              this.campCode = this.$route.query.campId
              this.verifyType = 'trueonline'
            })
        ])
        this.loading = false
      } catch (e) {
        this.loading = true
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
