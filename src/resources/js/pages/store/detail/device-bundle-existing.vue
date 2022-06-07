<template>
  <div class="promotion_sim">
    <div class="promotion_sim_container">
      <div class="promotion_sim_title">{{ Content.hotdeal_existing[$i18n.locale] }}</div>
      <div class="promotion">
        <template v-for="(item, key) in bundleExisting(product.sku)">
          <div :key="key">
            <div
              class="promo"
              :active="isSelected(item)"
              @click="
                changePromotion('type-changed', item.campaign_type);
                changePromotion('aging-changed', item.aging);
                changePromotion('raw-aging-changed', item.aging);
              "
            >
              <div class="radio" />
              <div class="promo-container">
                <div>
                  {{ Locale.campaign_name[item.campaign_type][$i18n.locale] }}
                  <span v-if="item.campaign_type === '3'">
                    <template v-if="parseInt(item.aging)">/ {{ Locale.aging[$i18n.locale] }} {{ item.aging }} {{ Locale.days[$i18n.locale] }}</template>
                    <template v-else>/ {{ Locale.no_aging[$i18n.locale] }}</template>
                  </span>
                </div>
              </div>
            </div>
            <template v-if="item.discount_list && item.discount_list.length > 0">
              <template v-if="item.campaign_type === '3'">
                <template v-if="existing_bundle.type === '3' && (item.aging === existing_bundle.aging)">
                  <div
                    v-for="(list, listKey) in item.discount_list"
                    :key="listKey"
                    class="advance-payment pp"
                    @click="
                      changePromotion('pp-changed', list.id.toString());
                      changePromotion('raw-aging-changed', list.aging);
                    "
                  >
                    <radio-element
                      name="advance-payment-3"
                      :value="list.id.toString()"
                      :data-value="list.id.toString()"
                      v-model="existing_bundle.pp"
                    />
                    <div class="advance-payment-text">
                      <div>
                        <b class="red">{{ computePrice(specialPrice - list.discount) }} ฿</b>
                        <span
                          class="discount-on-top"
                          v-if="discountOnTop"
                        >{{ computePrice(specialPrice - list.discount + discountOnTop) }}</span>
                      </div>
                      <div>
                        {{ products.title }}
                        {{ Content.user_package[$i18n.locale] }}
                        {{ list.rc }}
                        {{ Content.user_package_above[$i18n.locale] }}
                        <span class="red">
                          <template v-if="list.contract && list.contract !== '0'">
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
              </template>
              <div
                v-else
                class="advance-payment"
              >
                <div
                  class="list"
                  v-for="(list, listKey) in item.discount_list"
                  :key="listKey"
                >
                  <div class="list-content">
                    <div>
                      <b class="red">{{ computePrice(specialPrice - list.discount) }} ฿</b>
                      <span
                        class="discount-on-top"
                        v-if="discountOnTop"
                      >{{ computePrice(specialPrice - list.discount + discountOnTop) }}</span>
                    </div>
                    <div>{{ products.title }}</div>
                    <div>
                      <span>ใช้หรือสมัครแพ็กเกจรายเดือน {{ list.rc }} ขึ้นไป</span>
                      <span class="red">
                        <template v-if="list.contract"> {{ Locale.contract[$i18n.locale] }} {{ list.contract }} {{ Locale.months[$i18n.locale] }}</template>
                        <template v-else> {{ Locale.no_contract[$i18n.locale] }}</template>
                      </span>
                      <span
                        v-if="list.is_trueblack"
                        class="red"
                      > {{ Content.true_black[$i18n.locale] }}</span>
                    </div>
                  </div>
                  <div
                    v-if="list.is_trueblack"
                    class="true-black"
                  >
                    <img width="32" src="/images/icons/true-black.png">
                  </div>
                </div>
              </div>
            </template>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import Radio from '@components/radio'
  import Content from './content.json'
  import { computePrice } from '@utils/common'

  export default {
    components: {
      'radio-element': Radio
    },
    props: {
      existing_bundle: Object,
      products: Object,
      product: Object,
      promotion: String,
      specialPrice: Number
    },
    data: () => ({
      Content,
      Locale: {
        campaign_name: {
          1: {
            th: 'ลูกค้าปัจจุบันอายุการใช้งาน >12 เดือน / ไม่ต้องชำระค่าบริการล่วงหน้า / ใช้หรือสมัครแพ็กเกจที่กำหนด',
            en: 'Only for True Move H Postpaid customers aged over 1 year'
          },
          2: {
            th: 'ลูกค้าปัจจุบันอายุการใช้งานเดือน / ชำระค่าบริการล่วงหน้า / ใช้หรือสมัครแพ็กเกจที่กำหนด',
            en: 'Only for True Move H Postpaid customers aged less then 3 months'
          },
          3: {
            th: 'ลูกค้าปัจจุบัน / ไม่มีสัญญาการใช้งาน / ไม่ต้องชำระค่าบริการล่วงหน้า/ใช้หรือสมัครแพ็กเกจตามที่กำหนด',
            en: 'For existing TMH customer with no contract, no advance payment, and apply for 5G Super Max Speed for iPhone package only'
          }
        },
        aging: {
          th: 'อายุการใช้งาน',
          en: 'Customer’s service aging'
        },
        days: {
          th: 'วัน',
          en: 'days'
        },
        no_aging: {
          th: 'ใช้หรือสมัครแพ็กเกจตามที่กำหนด / ไม่กำหนดอายุการใช้งาน',
          en: 'No customer’s service aging required'
        },
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
      bundleExisting () {
        return (sku) => {
          const bundles = JSON.parse(JSON.stringify(this.products.bundle_existing))
          const bundleExisting = bundles.reduce((i, e) => {
            if (e.campaign_type === '4') return i
            if (e.campaign_type === '5') return i
            if (e.campaign_type === '3') {
              e.discount_list.forEach((d) => {
                if (d.product_code !== sku) return
                const aging = ['', '0', 0].includes(d.aging) ? '0' : d.aging
                const dd = i.findIndex((b) => b.campaign_type === '3' && b.aging === aging)
                if (dd >= 0) {
                  i[dd].discount_list.push(d)
                  i[dd].discount_list.sort((a, b) => a.discount < b.discount ? 1 : -1)
                  return
                }
                i.push({
                  product_id: e.product_id,
                  campaign_type: e.campaign_type,
                  aging,
                  discount_list: [d]
                })
              })
              return i
            }
            e.discount_list.sort((a, b) => a.discount < b.discount ? 1 : -1)
            if (e.campaign_type !== '1') {
              e.discount_list = e.discount_list.filter((e) => e.product_code === sku)
            }
            if (e.discount_list.length > 0) i.push(e)
            return i
          }, [])
          bundleExisting
            .sort((a, b) => b.campaign_type < a.campaign_type ? 1 : -1)
            .sort((a, b) => !b.aging ? 1 : (parseInt(b.aging) < parseInt(a.aging) ? 1 : -1))
          return bundleExisting
        }
      },
      discountOnTop () {
        return this.productInfo?.additional?.['discount_on_top']
      }
    },
    watch: {
      'existing_bundle.type' (value) {
        if (value === '3') {
          const bundle = this.bundleExisting(this.product.sku)
            .find(e => e.campaign_type === '3' && (e.aging === this.existing_bundle.aging))
          const discount = bundle.discount_list.find(e => e.rc.toString() === this.$route.query.rc?.toString())
          this.$emit('pp-changed', discount?.id.toString() || bundle.discount_list[0].id.toString())
          if (discount?.aging) {
            this.$emit('aging-changed', discount.aging)
            this.$emit('raw-aging-changed', discount.aging)
          }
        } else {
          this.$emit('pp-changed', '')
        }
      },
      'existing_bundle.pp' (value) {
        if (value) this.$emit('type-changed', '3')
      },
      'existing_bundle.aging' (value) {
        const bundle = this.bundleExisting(this.product.sku)
          .find(e => e.campaign_type === '3' && e.aging === value)
        if (!bundle) return
        const discount = bundle.discount_list.find(e => e.rc.toString() === this.$route.query.rc.toString())
        this.$emit('pp-changed', discount?.id.toString() || bundle.discount_list[0].id.toString())
      },
      'product.sku' () {
        const bundle = this.bundleExisting(this.product.sku)
        if (bundle.length <= 0) return
        const campaign = bundle.find(e => e.campaign_type === this.existing_bundle.type)
        if (!campaign) this.$emit('type-changed', bundle[0].campaign_type)
        if (this.existing_bundle.type === '3') {
          const bundle = this.bundleExisting(this.product.sku).find(e => e.campaign_type === '3')
          const discount = bundle.discount_list.find(e => e.rc.toString() === this.$route.query.rc.toString())
          this.$emit('pp-changed', discount?.id.toString() || bundle.discount_list[0].id.toString())
        }
      }
    },
    mounted () {
      const bundle = this.bundleExisting(this.product.sku)
      if (bundle.length <= 0) return
      switch (this.$route.query.usecase) {
        case '2': {
          const campaign = bundle.find((e) => {
            const type = e.campaign_type === '3'
            const rc = e.discount_list.some(e => e.rc.toString() === this.$route.query.rc.toString())
            return type && rc
          })
          this.$emit('aging-changed', campaign.aging || '')
          this.$emit('type-changed', campaign ? '3' : bundle[0].campaign_type)
          break
        }
        case '5': {
          const campaign = bundle.find(e => e.campaign_type === '2')
          this.$emit('type-changed', campaign ? '2' : bundle[0].campaign_type)
          break
        }
        default: {
          this.$emit('type-changed', bundle[0].campaign_type)
          break
        }
      }
    },
    beforeDestroy () {
      this.$emit('type-changed', '')
      this.$emit('pp-changed', '')
    },
    methods: {
      computePrice,
      changePromotion (type, value) {
        this.$emit(type, value)
        setTimeout(() => this.$parent.setAnalytics(), 100)
      },
      isSelected (item) {
        if (this.existing_bundle.type === '3') {
          return this.existing_bundle.aging === item.aging
        }
        return this.existing_bundle.type === item.campaign_type
      }
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
          min-height: 48px;
          background: #fff;
          border-radius: 4px;
          display: flex;
          align-items: center;
          padding: 4px 8px;
          border: 1px solid #fff;
          cursor: pointer;
          &[active] {
            border-color: #ff0000;
            .radio {
              border-color: #ff0000;
              &:after {
                content: '';
                position: absolute;
                background-color: #ff0000;
                border-radius: 50%;
                width: 10px;
                height: 10px;
              }
            }
          }
          .radio {
            min-width: 20px;
            min-height: 20px;
            width: 20px;
            height: 20px;
            border: solid 1px #cccccc;
            border-radius: 50%;
            position: relative;
            display: grid;
            place-items: center;
          }
          .promo-container {
            color: #666;
            font-size: 20px;
            line-height: 20px;
            margin-left: 10px;
            flex: 1;
          }
        }
        .advance-payment {
          background: #fff;
          color: #666;
          border-radius: 4px;
          margin-top: 8px;
          margin-left: 24px;
          padding: 12px 8px;
          font-size: 20px;
          line-height: 20px;
          display: grid;
          grid-gap: 8px;

          &.pp {
            cursor: pointer;
            display: flex;
            align-items: center;
            padding: 12px 8px;
          }

          .advance-payment-text {
            padding-left: 8px;
            flex: 1;
          }

          .list {
            padding-left: 12px;
            display: flex;
            grid-gap: 8px;

            .list-content {
              flex: 1;
            }
          }

          .true-black {
            display: grid;
            place-items: center;
          }

          .red {
            color: #ff0000;
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
        }
      }
    }
  }
</style>
