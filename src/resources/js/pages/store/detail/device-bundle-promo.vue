<template>
  <!-- TODO: Required major code refactoring (again) -->
  <div class="promotion_sim">
    <div class="promotion_sim_container">
      <div class="promotion_sim_title">{{ promoLabel }}</div>
      <div class="promotion">
        <template
          v-for="(item, key) in bundles"
        >
          <div
            class="promo"
            :key="key"
            :active="value === item.id.toString()"
            @click="changePromotion(item.id.toString(), item)"
          >
            <radio-element
              name="promotion_sim"
              :value="item.id.toString()"
              :data-value="item.id.toString()"
              v-model="value"
            />
            <div class="promo-container">
              <!-- Note: Hack for pre2post -->
              <template v-if="promotion === 'pre2post'">
                <div>
                  <b class="bold">{{ computePrice(specialPrice - item.discount) }} ฿</b>
                </div>
                <div>
                  {{ products.title }}
                  {{ Content.pretopost_user_package[$i18n.locale] }}
                  {{ item.rc }}
                  {{ Content.user_package_above[$i18n.locale] }}
                  <span class="red">
                    <template v-if="item.contract && item.contract !== '0'">
                      {{ Locale.contract[$i18n.locale] }}
                      {{ item.contract }}
                      {{ parseInt(item.contract) > 1 ? Locale.months[$i18n.locale]: Locale.month[$i18n.locale] }}
                    </template>
                    <template v-else> {{ Locale.no_contract[$i18n.locale] }}</template>
                  </span>
                  <span
                    v-if="item.is_trueblack"
                    class="red"
                  > {{ Content.true_black[$i18n.locale] }}</span>
                </div>
                <div>{{ Content.advance_payment[$i18n.locale] }}: {{ computeBalance(item.advance_payment) }}฿</div>
              </template>
              <template v-else-if="!item.inventory_id">
                <div>
                  <span
                    class="bold"
                  >{{ computeBalance(item.custom_price) }} ฿</span>
                  <span
                    class="discount-on-top"
                    v-if="showDiscountOnTop"
                  >{{ computeBalance(item.custom_price + discountOnTop) }}</span>
                </div>
                <div>{{ item.title[$i18n.locale] || item.title.th }}</div>
              </template>
              <template v-else>
                <div>
                  <span
                    class="bold"
                  >{{ computeBalance(item.price_after_discount_device_bundle_new_customer) }} ฿</span>
                  <span
                    class="discount-on-top"
                    v-if="showDiscountOnTop"
                  >{{ computeBalance(item.price_after_discount_device_bundle_new_customer + discountOnTop) }}</span>
                </div>
                <div>
                  {{ item.name }}
                  <span class="red">
                    <template v-if="item.contract && item.contract !== '0'">
                      {{ Locale.contract[$i18n.locale] }}
                      {{ item.contract }}
                      {{ parseInt(item.contract) > 1 ? Locale.months[$i18n.locale]: Locale.month[$i18n.locale] }}
                    </template>
                    <template v-else> {{ Locale.no_contract[$i18n.locale] }}</template>
                  </span>
                  <span
                    v-if="item.is_trueblack"
                    class="red"
                  > {{ Content.true_black[$i18n.locale] }}</span>
                </div>
                <div>{{ Content.advance_payment[$i18n.locale] }}: {{ computeBalance(item.advance_payment) }}฿</div>
              </template>
            </div>
            <div
              v-if="item.is_trueblack"
              class="true-black"
            >
              <img width="32" src="/images/icons/true-black.png">
            </div>
          </div>
        </template>
        <template
          v-if="this.promotion === 'mnp_bundling_existing' && mnpBundlesExisting"
        >
          <div class="promo" active>
            <radio-element
              name="promotion_sim"
              value="mnp-bundle-existing"
              data-value="mnp-bundle-existing"
            />
            <div class="promo-container">ลูกค้าย้ายค่ายเบอร์เดิม พร้อมสมัครแพ็กเกจที่กำหนด ภายใน 30 วัน</div>
          </div>
          <div
            class="advance-payment pp"
            v-for="(list, listKey) in mnpBundlesExisting"
            :key="`mnp-bundle-4-${listKey}`"
            @click="changePromotion(list.id.toString())"
            :active="value === list.id.toString()"
          >
            <radio-element
              name="mnp-bundle-4-list"
              :value="list.id.toString()"
              :data-value="list.id.toString()"
              v-model="value"
            />
            <div class="advance-payment-text">
              <div>
                <b class="red">{{ computePrice(specialPrice - list.discount) }} ฿</b>
              </div>
              <div>
                {{ products.title }}
                {{ Content.mnp_user_package[$i18n.locale] }}
                {{ list.rc }}
                {{ Content.user_package_above[$i18n.locale] }}
                <span class="red">
                  <template v-if="list.contract">
                    {{ Locale.contract[$i18n.locale] }}
                    {{ list.contract }}
                    {{ parseInt(list.contract) > 1 ? Locale.months[$i18n.locale]: Locale.month[$i18n.locale] }}
                  </template>
                  <template v-else> {{ Locale.no_contract[$i18n.locale] }}</template>
                </span>
                <span
                  v-if="list.is_trueblack"
                  class="red"
                > {{ Content.true_black[$i18n.locale] }}</span>
              </div>
              <div>{{ Content.user_package_advance_payment[$i18n.locale] }}: {{ computePrice(list.advance_payment) }} ฿</div>
            </div>
            <div
              v-if="list.is_trueblack"
              class="true-black"
            >
              <img width="32" src="/images/icons/true-black.png">
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import Radio from '@components/radio'
  import Content from './content.json'
  import {
    computePrice,
    computeBalance
  } from '@utils/common'

  export default {
    components: {
      'radio-element': Radio
    },
    props: {
      value: String,
      products: Object,
      product: Object,
      promotion: String,
      specialPrice: Number
    },
    data: () => ({
      Content,
      Locale: {
        no_contract: {
          th: 'ไม่ติดสัญญา',
          en: 'No contract'
        },
        contract: {
          th: 'ระยะเวลาสัญญา',
          en: 'Contract'
        },
        months: {
          th: 'เดือน',
          en: 'months'
        },
        month: {
          th: 'เดือน',
          en: 'month'
        }
      }
    }),
    computed: {
      productInfo () {
        return this.$store.state.products.productInfo.data.record
      },
      config () {
        return this.$store.state.config.verifyConfig
      },
      promoLabel () {
        switch (this.promotion) {
          case 'truemoveh':
          case 'trueonline': {
            return this.Content.hotdeal_existing[this.$i18n.locale]
          }
          case 'mnp_bundling':
          case 'mnp_bundling_existing':
          case 'pre2post': {
            return `${this.Content.select_promotion[this.$i18n.locale]} ${this.products.title} ${this.capacity}`
          }
          case 'mnp_bundling_one_step': {
            return 'Hot Deal Move to TrueMove H'
          }
          default: {
            const label = this.productInfo?.additional?.['new_customer_text'] || this.Content.hotdeal
            return label[this.$i18n.locale]
          }
        }
      },
      bundles () {
        if (this.promotion === 'mnp_bundling_existing') {
          this.$emit('input', this.mnpBundlesExisting[0].id.toString())
          return []
        }
        let bundles = this.products.bundles.filter(bundle => {
          if (['truemoveh', 'trueonline'].includes(this.promotion)) {
            const campaign = this.config.campaigns[bundle.id]
            return campaign && campaign.options[this.promotion]
          }
          const validBundle = bundle.inventory_id && this.product.id === bundle.inventory_id.toString()
          if (this.promotion === 'mnp_bundling' || this.promotion === 'mnp_bundling_existing') {
            return validBundle && bundle.campaign_sim_type === 'mnp' && bundle.campaign_mnp_type !== 'one_step' && bundle.sim_type !== 'prepaid'
          } else if (this.promotion === 'mnp_bundling_one_step') {
            return validBundle && bundle.campaign_sim_type === 'mnp' && bundle.campaign_mnp_type === 'one_step' && bundle.sim_type !== 'prepaid'
          } else {
            return validBundle && bundle.campaign_sim_type !== 'mnp' && bundle.sim_type !== 'prepaid'
          }
        })
        if (this.promotion === 'pre2post') bundles = this.pre2post

        bundles.sort((a, b) => a.price_after_discount_device_bundle_new_customer > b.price_after_discount_device_bundle_new_customer ? 1 : -1)

        let id = (bundles.length > 0) ? bundles[0].id : ''
        const rc = this.$route.query.rc

        if (rc && this.promotion !== 'pre2post') {
          const bundle = bundles.find(bundle => bundle.name.indexOf(' ' + rc) !== -1)
          if (bundle) {
            id = bundle.id
          }
        }
        this.$emit('input', id.toString())
        return bundles
      },
      mnpBundlesExisting () {
        const bundleExisting = JSON.parse(JSON.stringify(this.products.bundle_existing))
        const bundles = bundleExisting.find((e) => e.campaign_type === '4')
        if (!bundles) return
        bundles.discount_list = bundles.discount_list.filter((e) => e.product_code === this.product.sku)
        return bundles.discount_list
      },
      pre2post () {
        const bundleExisting = JSON.parse(JSON.stringify(this.products.bundle_existing))
        const bundles = bundleExisting.find((e) => e.campaign_type === '5')
        if (!bundles) return
        bundles.discount_list = bundles.discount_list.filter((e) => e.product_code === this.product.sku)
        return bundles.discount_list
      },
      campaignStatus () {
        return (promo) => {
          const current = new Date()
          const start = new Date(promo.start.replace(/-/g, '/'))
          const end = new Date(promo.end.replace(/-/g, '/'))
          const dateActive = (current >= start && current <= end)
          return dateActive && promo.active
        }
      },
      capacity () {
        if (!this.products.options.ความจุ || !this.product.options.ความจุ) return ''
        return this.products.options.ความจุ[this.product.options.ความจุ].name
      },
      showDiscountOnTop () {
        const type = this.promotion
        if (type !== 'promotions' && type !== 'device_bundle_new_customer') return
        return this.productInfo?.additional?.['discount_on_top']
      },
      discountOnTop () {
        return this.productInfo.additional.discount_on_top
      }
    },
    mounted () {
      window.localStorage.removeItem('iot-package')
      if (this.productInfo.is_iot && this.productInfo.iot_type === 'trueonline') this.changePromotion(this.bundles[0].id.toString(), this.bundles[0])
    },
    methods: {
      computeBalance,
      changePromotion (e, bundle) {
        if (this.value === e) return
        const meta = {
          cloud: bundle.cloud_campaign.campaign.cloud,
          cloud_description: bundle.description,
          iot_type: this.productInfo.iot_type
        }
        window.localStorage.setItem('iot-package', JSON.stringify(meta))
        this.$emit('input', e)
        setTimeout(() => {
          this.$parent.setAnalytics()
        }, 100)
      },
      computePrice
    }
  }
</script>

<style lang="scss" scoped>
  .promotion_sim {
    padding-left: 8px;
    flex: 3;
    .promotion_sim_container {
      background: #eee;
      border-radius: 4px;
      flex-direction: column;
      padding: 12px 10px;
      .promotion_sim_title {
        font-family: "TrueBold";
        font-size: 20px;
        line-height: 20px;
        margin-bottom: 16px;
      }
      .promotion {
        display: grid;
        grid-gap: 10px;
        width: 100%;
        .promo {
          background: #fff;
          border-radius: 4px;
          display: flex;
          align-items: center;
          padding: 4px 8px;
          border: 1px solid #fff;
          cursor: pointer;
          min-height: 48px;
          grid-gap: 8px;
          &[active] {
            border-color: #ff0000;
          }
          .promo-container {
            color: #666;
            font-size: 20px;
            line-height: 20px;
            margin-left: 10px;
            flex: 1;
            .red {
              color: #ff0000;
            }
            .bold {
              font-family: "TrueBold";
              font-size: 24px;
              color: #ff0000;
            }
            .discount-on-top {
              margin-left: 8px;
              text-decoration: line-through;
            }
          }
        }
      }
    }
  }

  .advance-payment {
    background: #fff;
    color: #666;
    border-radius: 4px;
    margin-left: 24px;
    font-size: 20px;
    line-height: 20px;
    border: 1px solid transparent;

    &[active] {
      border-color: red;
    }

    &.pp {
      cursor: pointer;
      display: flex;
      align-items: center;
      padding: 12px 8px;
    }

    .advance-payment-text {
      padding-left: 8px;
    }

    .list {
      padding-left: 12px;
    }

    .discount-on-top {
      margin-left: 8px;
      text-decoration: line-through;
    }

    .big {
      font-size: 24px;
      line-height: 24px;
    }

    b {
      color: black;
      font-family: "TrueBold";
    }

    .red {
      color: #ff0000;
    }
  }
</style>
