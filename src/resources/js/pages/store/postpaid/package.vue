<template>
  <div class="package-container">
    <span v-show="isOnlineStoreDetail" class="text-3xl font-bold px-3 search-new-number-title">{{ Locale.select_your_new_num[$i18n.locale] }}</span>
    <dialog-element
      ref="dialog"
      class="terms-dialog"
      showCloseButton
    >
      <div slot="content">
        <div class="e-sim-detail">
          eSIM เป็นซิมการ์ดแบบใหม่ที่ฝั่งมากับเครื่องอุปกรณ์
          คุณสามารถเปิดใช้งานได้โดยไม่ต้องใช้ SIM card จริง
          กรุณาตรวจสอบ Device ของท่านว่าสามารถใช้งานคู่กับ eSIM
          ท่านจะได้รับ QR Code เพื่อทำการเปิดเบอร์ กรณีที่ QR Code สูญหาย สามารถ download QR ได้ที่
          <a href="https://iwsheet.truecorp.co.th/esimqr/en/home" target="_blank">
            คลิก
          </a>
        </div>
      </div>
    </dialog-element>
    <div class="page-container" v-if="product">
      <div class="package-banner" :class="{ lucky: isLucky, postpaid:isPostpaid }">
        <div v-if="isLucky" class="title lucky">{{ packages.name }}</div>
        <div class="package-cover">
          <img :src="image" :alt="packages.name" />
        </div>
        <div class="package-information">
          <div class="title">{{ packages.name }}</div>
          <div class="description">{{ packages.term_short }}</div>
          <div>
            <!-- benefit on top -->
            <template v-if="demo">
            <clm-benefit-element
              type="demo"
              :product-type="product.product_type"
              :product-id="product.id"
              :campCode="campCode"
            ></clm-benefit-element>
            </template>
            <template v-else>
            <clm-benefit-element
              type="bundle"
              :product-type="product.product_type"
              :product-id="product.id"
            ></clm-benefit-element>
            </template>
            <!-- end of benefit on top -->
          </div>
          <div class="price-container">
            <div v-if="isPrepaid">{{ Locale.pricePrepaid[$i18n.locale] }} <span class="price">{{ price }}</span> <span class="baht">฿</span></div>
            <div v-else>{{ Locale.start[$i18n.locale] }} <span class="price">{{ price }}</span> <span class="baht">฿</span></div>
            <div class="input-outer-container" v-if="isShowRadioESim">
              <div class="input-container">
                <div class="physical-sim">
                  <input
                    type="radio"
                    name="source-type"
                    value="physical-sim"
                    id="account-type-individual"
                    @click="changeSourceType"
                    :checked="$route.query.source_type === 'physical-sim'"
                  />
                  <label for="account-type-individual" class="radio-label">
                    {{ simTypeLabel.physical[$i18n.locale] }}
                  </label>
                </div>

                <div class="e-sim">
                  <input
                    type="radio"
                    name="source-type"
                    value="e-sim"
                    id="account-type-corporate"
                    @click="changeSourceType"
                    :checked="$route.query.source_type === 'e-sim'"
                  />
                  <label for="account-type-corporate" class="radio-label">
                    {{ simTypeLabel.esim[$i18n.locale] }}
                  </label>

                  <div class="term-condition">
                    <label>
                      <div class="second-line">
                        <div class="showTermsDialogClass" @click="showTermsDialog">
                          รายละเอียด
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="button-container">
            <button-element class="button other" @click="showDetail = !showDetail" :active="showDetail">
              <template v-if="showDetail">{{ Locale.hide_detail[$i18n.locale] }}</template>
              <template v-else>{{ Locale.package_detail[$i18n.locale] }}</template>
            </button-element>
          </div>
        </div>
      </div>
      <package-detail
        v-if="showDetail"
        :packages="packages"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
  import Button from '@components/button'
  import ClmBenefit from '@components/clm-benefit'
  import PackageDetail from './package-detail'
  import Locale from './locale.json'
  import Terms from '@components/terms'
  import Dialog from '@components/dialog'

  export default {
    components: {
      'button-element': Button,
      'package-detail': PackageDetail,
      'terms-element': Terms,
      'dialog-element': Dialog,
      'clm-benefit-element': ClmBenefit
    },
    props: {
      packages: [Object, Array],
      product: Object,
      pricePlans: Array,
      demo: Boolean,
      bundleParam: String,
      simSourceType: Array
    },
    data: () => ({
      showDetail: false,
      simTypeLabel: {
        physical: {
          th: 'ซิมปกติ (Physical SIM)',
          en: 'Physical SIM'
        },
        esim: {
          th: 'eSIM',
          en: 'eSIM'
        }
      },
      Locale
    }),
    computed: {
      campCode () {
        return this.$route.query.campId
      },
      isLucky () {
        return this.$route.name === 'online-store-lucky'
      },
      isMnpBundle () {
        const validRoute = this.$route.name === 'online-store-mnp-bundle'
        const isMnpBundling = this.product.is_mnp_bundling
        return validRoute && isMnpBundling
      },
      price () {
        if (this.isPrepaid) return this.product.price
        if (this.pricePlans.length > 0) {
          const plans = this.pricePlans.map(item => item.price)
          return Math.min(...plans)
        }
        return this.packages.baseline
      },
      image () {
        const types = [
          'device_bundle_new_customer',
          'postpaid',
          'sim'
        ]

        if (this.product) {
          if (types.includes(this.product.product_type) || this.$route.name === 'online-store-lucky') {
            return this.packages.package_image_desktop
          }

          if (this.product && this.product.images && this.product.images[0] && this.product.images[0].url) {
            return this.product.images[0].url
          }
        }
        return null
      },
      bundle () {
        if (this.product && this.bundleParam) {
          return this.product.bundles.find(bundle => (
            bundle.id === this.bundleParam
          ))
        }
        return null
      },
      simProduct () {
        return this.bundle && this.product
          ? this.bundle.inventories.find(inventory => (
            inventory.product_id !== this.product.id
          ))
          : null
      },
      productId () {
        if (this.$route.name === 'online-store-postpaid') return this.packages.id
        if (this.$route.name === 'online-store-instantsim') return this.packages.id
        if (this.$route.name === 'online-store-lucky') return this.packages.id
        if (this.$route.name === 'online-store-prepaid') return this.packages.id
        return this.simProduct ? this.simProduct.product_id : null
      },
      isPrepaid () {
        return this.$route.name === 'online-store-prepaid'
      },
      isPostpaid () {
        return this.$route.name === 'online-store-postpaid'
      },
      isOnlineStoreDetail () {
        return this.$route.name === 'online-store-detail'
      },
      isShowRadioESim () {
        // [TODO] check id from bundle before show
        return (this.product.product_type === 'device_bundle_new_customer') && this.simSourceType.length > 1
      },
      gtagProduct () {
        let product = {
          name: this.packages.name,
          id: this.productId,
          price: parseFloat(this.product.price).toFixed(2),
          category: 'SIM',
          variant: 'Postpaid',
          dimension6: parseFloat(this.product.compare_at_price_max).toFixed(2),
          dimension7: parseFloat(this.product.price).toFixed(2),
          dimension9: 'Postpaid SIM',
          dimension10: '', // TODO: SIM package
          dimension11: this.packages.name,
          dimension12: '', // TODO: SIM package plan pricing tier
          dimension14: this.product.status,
          dimension22: '', // TODO: Package Download Speed
          dimension24: '', // TODO: Talk Time Allowance
          dimension25: '' // TODO: Mobile Internet Allowance
        }
        if (this.product.product_type === 'device_bundle_new_customer' && this.bundle) {
          const bundleData = {
            price: '0.00',
            dimension6: '0.00',
            dimension7: '0.00',
            dimension30: 'New Customer',
            dimension31: '',
            dimension32: this.bundle.price_after_discount_device_bundle_new_customer.toFixed(2),
            dimension33: `${this.bundle.name} ชำระค่าบริการล่วงหน้า: ${this.bundle.advance_payment}฿`,
            metric2: this.bundle.advance_payment
          }
          product = { ...product, ...bundleData }
        }
        return product
      }
    },
    watch: {
      showDetail (e) {
        if (!e) return
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event: 'ecommerce_event',
          event_category: 'SIM_bundle',
          event_action: 'product_detail',
          event_label: this.packages.name,
          ecommerce: {
            currencyCode: 'THB',
            detail: {
              actionField: {
                list: 'SIM'
              },
              products: [this.gtagProduct]
            }
          }
        })
      }
    },
    mounted () {
      const detailQuery = new URLSearchParams(window.location.search.slice(1)).get('detail')
      if (detailQuery === 'true') this.showDetail = true

      // default choose physical sim when show radio
      if (this.simSourceType.length > 1) {
        this.changeSourceType({ target: { value: 'physical-sim' } })
      }

      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: 'ecommerce_event',
        event_category: 'SIM_bundle',
        event_action: 'product_impression',
        event_label: this.packages.name,
        ecommerce: {
          currencyCode: 'THB',
          impressions: [{
            ...this.gtagProduct,
            list: 'SIM',
            position: ''
          }]
        }
      })
      window.dataLayer.push({
        event: 'ecommerce_event',
        event_category: 'SIM_bundle',
        event_action: 'product_click',
        event_label: this.packages.name,
        ecommerce: {
          currencyCode: 'THB',
          click: {
            actionField: {
              list: 'SIM'
            },
            products: [{
              ...this.gtagProduct,
              position: ''
            }]
          }
        }
      })
    },
    methods: {
      showTermsDialog () {
        this.$refs.dialog.open()
      },
      changeSourceType (e) {
        const query = Object.assign({}, this.$route.query)
        if (query.source_type !== e.target.value) {
          query.source_type = e.target.value
          this.$router.replace({ query })
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.package-container {
  font-size: 1.5em;

  .search-new-number-title {
    color: #000;
    padding-bottom: 1rem;
  }

  .page-container {
    max-width: 1300px;
    margin: auto;
    background-color: #fff;
  }

  .package-banner {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    &.postpaid {

          .package-cover {
              background-color: transparent;
              padding: 32px;

              img {
                  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
                  border-radius: 8px;
              }
          }
    }
    &.lucky {
      grid-template-columns: auto 1fr;

      .package-cover {
        background-color: transparent;
        padding: 32px;
        min-height: 280px;

        img {
          box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
          border-radius: 8px;
        }
      }

      & > .title {
        display: none;
      }

      .package-information {
        .title {
          color: #212121;
        }
        .description {
          color: #333;
          font-size: 28px;
        }
        .button-container .other {
          background-color: #ff0000;
        }
        .price-container .price {
          font-size: 48px;
          line-height: 48px;
        }
      }
    }

    .package-cover {
      background-color: #bb1f24;
      min-height: 360px;
      text-align: center;
      padding: 32px 0;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 100%;
        max-width: 300px;
      }
    }

    .package-information {
      padding: 48px 32px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .title {
        font-family: 'TrueBold';
        font-size: 40px;
        line-height: 35px;
        margin-bottom: 16px;
      }
      .description {
        max-width: 360px;
        line-height: 28px;
      }
      .price-container {
        margin: 16px 0;

        .price {
          font-size: 60px;
          color: #f00;
          font-family: 'TrueBold';
        }
        .baht {
          font-family: 'TrueBold';
        }
      }
      .button-container {
        .other {
          background-color: #666;

          &[active] {
            background-color: #000
          }
        }
      }
    }
  }
}

.input-outer-container {
  display: flex;
}

.terms-dialog {
  .content {
    max-height: 85%;
    max-width: 860px;
    .dialog-content {
      padding: 30px 20px 10px 20px;
      text-align: center;
    }
  }
}

.term-condition {
  text-align: center;
  font-size: 22px;

  label {
    display: inline-block;

    .first-line {
      display: flex;
      flex-direction: row;

      input {
        margin-top: 6.5px;
      }

      .text {
        margin-left: 3px;
        color: #000;
        font-family: "TrueBold";
        font-style: normal;
        font-size: 22px;
        font-weight: 700;
        line-height: 26.39px;
      }
    }

    .second-line .showTermsDialogClass {
      color : #FF0000;
      cursor: pointer;
      font-family: "TrueBold";
      font-style: normal;
      font-size: 22px;
      font-weight: 700;
      line-height: 26.39px;
      margin-left: 18px;
      text-decoration: underline;
    }
  }
}

.second-line {
  padding: 0 0;
}

.input-container {
  display: flex;

  .physical-sim {
    margin: 0 12px 0 0px;
  }

  .e-sim {
    display: -webkit-box;
  }

  .radio-label {
    color: #FF0000;
  }
}

.e-sim-detail {
  padding: 30px 20px 10px 20px;
}

@media screen and (min-width: 1000px) and (max-width: 1280px) {
  .package-container {
    .page-container {
      margin-top: 50px;
    }
  }
}

@media screen and (max-width: 860px) {
  .package-container {
    .package-banner {
      grid-template-columns: repeat(1, 1fr);

      &.lucky {
        grid-template-columns: 30% 1fr;
        padding: 0 24px 24px;

        & > .title {
          display: block;
          grid-column: 1/-1;
          font-size: 34px;
          line-height: 30px;
          font-family: 'TrueBold';
          padding: 8px 0 16px;
          color: #212121;
        }
        .package-cover {
          padding: 4px 20px 0 0;
          min-height: 0;
          align-items: flex-start;

          img {
            max-width: 180px;
          }
        }
        .package-information {
          padding: 0;

          .title {
            display: none;
          }
          .price-container {
            margin: 8px 0;

            .price {
              font-size: 30px;
              line-height: 30px;
            }
          }
          .button-container .other {
            padding: 0 16px;
            min-height: 40px;
            min-width: 0;
          }
        }
      }

      .package-cover {
        min-height: initial;
      }
    }
  }

  .input-outer-container {
    flex-direction: column;
    align-items: baseline;
  }

  .input-container {
    margin-top: 10px;
    display: block;
  }

  .second-line {
    padding: 0;
  }
}

@media screen and (max-width: 480px) {
  .package-container .package-banner.lucky {
    grid-template-columns: 35% 1fr;
  }
}
</style>
