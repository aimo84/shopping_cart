<template>
  <div class="cart">
    <div class="cart-container">
      <div class="cart-image">
        <img :src="image(data)">
      </div>
      <div class="cart-content">
        <div class="cart-info">
          <div class="cart-title">
            <div style="display: grid;">
              <span v-if="data.product_type === 'advancepayment'">
                {{ Content.advance_payment[$i18n.locale] }}
              </span>
              <span v-else>
                {{ data.title }}
              </span>
              <span v-if="data.product_type === 'advancepayment'" class="option">
                {{ data.title }}
              </span>
              <span v-else-if="data.options && !isTrueCard && data.product_type !== 'sim'" class="option">
                {{ data.options }}
              </span>
            </div>
            <!-- delete cart on mobile -->
            <div class="cart-delete cart-delete-button cart-delete-mobile">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"
                @click="deleteItem"
                v-if="!['advancepayment'].includes(data.product_type)"
              >
                <circle cx="15" cy="15" r="14" stroke="#E62627" stroke-width="2"/>
                <g clip-path="url(#clip0_840_276)">
                  <path d="M11 11L18.1 18.1" stroke="#E62627" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                  <path d="M18.1 11L11 18.1" stroke="#E62627" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                </g>
                <defs>
                  <clipPath id="clip0_840_276">
                    <rect width="9.1" height="9.1" fill="white" transform="translate(10 10)"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div
            class="true-card-message"
            v-if="isTrueCard && data.true_card.first_time"
          >{{ Content.truecard_free[$i18n.locale] }}</div>
          <div
            class="true-card-message-long"
            v-if="isTrueCard"
          >{{ Content.truecard_msg[$i18n.locale] }}</div>
          <div class="cart-price-container">
            <div class="cart-price special" v-if="typeof data.meta !== 'undefined' && typeof data.meta.free_device !== 'undefined'">0.00.-</div>
            <div class="cart-price special" v-else>{{ computePrice(price) }}{{ Content.baht[$i18n.locale] }}</div>
              <div
              class="cart-price original"
              v-if="showOriginalPrice"
            >{{ computePrice(data.compare_at_price) }}{{ Content.baht[$i18n.locale] }}</div>
          </div>
          <div class="cart-postpaid-chip" v-if="isPrepaidList && data.sim_meta">Prepaid</div>
          <div class="cart-postpaid-chip" v-else-if="isPrepaidBundleSim">Prepaid</div>
          <div class="cart-postpaid-chip" v-else-if="isMnp">{{ data.sim_meta[0].sim_type }}</div>
          <div class="cart-postpaid-chip" v-else-if="isVhoraPrepaid">Prepaid</div>
          <div class="cart-postpaid-chip" v-else-if="data.postpaid && data.postpaid.meta.sim_type===`postpaid`">Postpaid</div>
          <div v-if="isPrepaidList && data.sim_meta">
            <div class="sim-container" v-if="data.sim_meta[0].number">
              <div class="sim-info-container">
                <div class="sim-info-title">{{ Content.mobile_number[$i18n.locale] }}</div>
                <div v-for="(item, index) in data.sim_meta" :key="index">
                  <span class="red">{{ item.number }}</span>
                </div>
              </div>
            </div>
          </div>
            <div class="cart-tax" v-if="typeof data.meta !== 'undefined' && typeof data.meta.free_device !== 'undefined'"> {{ data.meta.free_device.label_cart[$i18n.locale] }} {{computePrice(price)}}.-</div>
        </div>
        <div class="cart-action quantity">
          <div class="cart-quantity-label">
            {{ Content.cart_quantity[$i18n.locale] }}
          </div>
          <div class="cart-quantity">
            <div class="cart-quantity-container">
              <button
                class="cart-quantity-button"
                @click="decreaseQuantity()"
                :disabled="hideQuantity || data.quantity <= 1"
                v-if="!hideQuantity"
              >
                -
              </button>
              <div class="cart-quantity-value" :class="{ onlylabel: hideQuantity }">
                {{ data.quantity }}
              </div>
              <button
                class="cart-quantity-button increase"
                @click="increaseQuantity()"
                :disabled="hideQuantity || data.quantity >= data.total_quantity"
                v-if="!hideQuantity"
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div class="cart-action">
          <div class="cart-action-label">
            {{ Content.cart_price[$i18n.locale] }}
          </div>
          <!-- delete cart on desktop -->
          <div
            class="cart-delete cart-delete-button cart-delete-desktop"
          >
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"
              v-if="!['advancepayment'].includes(data.product_type)"
              @click="deleteItem"
            >
              <circle cx="15" cy="15" r="14" stroke="#E62627" stroke-width="2"/>
              <g clip-path="url(#clip0_840_276)">
                <path d="M11 11L18.1 18.1" stroke="#E62627" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                <path d="M18.1 11L11 18.1" stroke="#E62627" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
              </g>
              <defs>
                <clipPath id="clip0_840_276">
                  <rect width="9.1" height="9.1" fill="white" transform="translate(10 10)"/>
                </clipPath>
              </defs>
            </svg>
          </div>
          <div class="total-price">
            <div class="discount-price">
              {{ computePrice(totalPrice) }}{{ Content.baht[$i18n.locale] }}
            </div>
            <div class="full-price" v-if="totalFullPrice > 0">
              {{ computePrice(totalFullPrice) }}{{ Content.baht[$i18n.locale] }}
            </div>
          </div>
        </div>
      </div>

      <div class="cart-content bottom" v-if="['product', 'sim', 'postpaid', 'mnp', 'device_bundle_new_customer', 'device_bundle_existing'].includes(data.product_type) && !isPrepaidList && isClmBenefit">
        <!-- benefit on top -->
        <clm-benefit
          type="bundle"
          :product-type="data.product_type"
          :product-id="data.id"
          :matcode="data.sku"
          :propocode="data.sim_meta ? data.sim_meta[0].price_plan.code : ''"
        ></clm-benefit>
        <!-- end benefit on top -->
      </div>

      <div class="cart-content bottom" v-if="data.error && data.product_type !== 'truecard'">
        <div
          class="balance-point-container"
        >
          <div class="balance-point">{{ Content.removeCartError[$i18n.locale] }}</div>
        </div>
        <div
          class="balance-point-container"
          v-if="isTrueCard && data.true_card.card_upgrade"
        >
          <div
            class="balance-point upgrade"
          >{{ Content.truecard_upgrade[$i18n.locale] }} {{ data.true_card.grade.title}}</div>
        </div>
        <div class="balance-point-container">
          <div
            class="balance-point"
            v-if="showBalance(cart, data)"
          >
            <span>{{ Content.redeem[$i18n.locale] }}</span>
            <img src="/images/icons/true-point-heart.png" />
            <span class="number">
              {{computeBalance(data.points.point)}}
              <span class="black">{{ Content.points[$i18n.locale] }}</span>
              <span v-if="data.price - data.points.discount !== 0">
                <span class="black"> +</span>
                <span>{{computePrice(data.price - data.points.discount)}}</span>
                <span class="black">{{ Content.baht[$i18n.locale] }}</span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <activate-sim v-if="data.postpaid" :postpaid="data.postpaid" />
    <div
      v-if="data.existing_campaign && (data.existing_campaign.campaign_type === '3' || data.existing_campaign.campaign_type === '4') && data.existing_campaign.price_plan.description"
      class="sim-container"
    >
      <div class="sim-info-container">
        <div class="sim-info-title">{{ Content.package[$i18n.locale ]}}</div>
        <div>{{ data.existing_campaign.price_plan.description }}</div>
        <div>{{ Content.monthly_service_fee[$i18n.locale] }} {{ monthlyServiceFee }} {{Content.monthly_service_baht[$i18n.locale]}}</div>
      </div>
    </div>
    <div
      v-if="isMnp || isPre2Post || isPrepaidBundleSim"
      class="sim-container"
    >
      <div class="sim-info-container">
        <div class="sim-info-title">
          <template v-if="isMnp">{{ Content.mnp_title[$i18n.locale ] }}</template>
          <template v-if="isPre2Post">{{ Content.pre2post_title[$i18n.locale ] }}</template>
        </div>
        <div v-if="isMnp">
          <span>
            <template v-if="data.sim_meta[0].identity_type === 'I'">{{ Content.thai_id_number[$i18n.locale ]}} </template>
            <template v-else>{{ Content.passport_number[$i18n.locale ]}} </template>
            {{ data.sim_meta[0].thai_id }}: </span>
          <span class="red">{{ Content.mobile_number[$i18n.locale ]}} {{ computeMobileNumber(data.sim_meta[0].number) }}</span>
        </div>
        <div v-if="isPre2Post">
          <div class="red bold">{{ computeMobileNumber(data.sim_meta.user_information.telephone) }}</div>
          <div>{{ Content.thai_id_number[$i18n.locale ]}}: {{ data.sim_meta.user_information.thai_id }}</div>
        </div>
        <div v-if="!isMnp" :class="`sim-info-title ${isPre2Post && 'margin-top'}`">{{ Content.package[$i18n.locale] }}</div>
        <template v-if="isPre2Post">
          <div>{{ data.existing_campaign.price_plan.description }}</div>
          <div>{{ Content.monthly_service_fee[$i18n.locale] }} {{ monthlyServiceFee }} {{Content.monthly_service_baht[$i18n.locale]}}</div>
        </template>
        <div v-if="isPrepaidBundleSim">{{ data.sim_meta[0].proposition.term_short }}</div>
      </div>
    </div>
    <div
      v-if="isDeviceBundle && isCreditOnly"
      class="sim-container"
    >
      <div class="sim-info-container">
        <div class="sim-info-title">{{ Content.flagship_discount[$i18n.locale].replace('${discount}', computePrice(data.discount)).replace('${code}', code5g) }}</div>
        <div class="red">{{ Content.credit_card_only[$i18n.locale] }}</div>
      </div>
    </div>
    <div
       v-if="data.meta && data.meta.cloud && data.meta.cloud_description && data.meta.iot_type"
       class="sim-container"
    >
      <div class="sim-info-container">
        <div class="iot-title">
          {{ Content.iot_desciption.detail[$i18n.locale] }}
          <template v-if="data.meta.cloud === '99' || data.meta.cloud === '159'">1</template>
          <template v-else>2</template>
          <template v-if="data.meta.cloud === '99x2' || data.meta.cloud === '159x2'">{{ Content.iot_desciption.units[$i18n.locale] }}</template>
          <template v-else>{{ Content.iot_desciption.unit[$i18n.locale] }}</template>
          {{ Content.iot_desciption.vat_datail[$i18n.locale] }}
        </div>
        <div class="iot-title">
          {{ Content.iot_desciption.subscribe[$i18n.locale] }}
          <template v-if="data.meta.cloud === '99x2'">99</template>
          <template v-else-if="data.meta.cloud === '159x2'">159</template>
          <template v-else>{{data.meta.cloud}}</template>
          <span>{{ Content.iot_desciption.price[$i18n.locale] }}</span>
          <span v-if="data.meta.cloud === '99x2' || data.meta.cloud === '159x2'">{{ Content.iot_desciption.two_unit[$i18n.locale] }} </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ActivateSim from '@components/activate-sim'
  import ClmBenefit from '@components/clm-benefit'

  import {
    checkPointStatus,
    computeBalance,
    computePrice
  } from '@utils/common'

  import {
    loggerAddon
  } from '@utils/addon'

  export default {
    components: {
      'activate-sim': ActivateSim,
      'clm-benefit': ClmBenefit
    },
    props: {
      cart: [Object],
      data: [Object],
      inventory: [Object],
      disableQuantity: [Array],
      loading: Boolean
    },
    data: () => ({
      code5g: '',
      Content: {
        iot_desciption: {
          detail: {
            th: 'รับฟรี กล้อง CCTV จำนวน',
            en: 'Free CCTV'
          },
          unit: {
            th: ' เครื่อง',
            en: ' unit'
          },
          units: {
            th: ' เครื่อง',
            en: ' units'
          },
          subscribe: {
            th: 'พร้อมสมัครบริการ CCTV Cloud เดือนละ',
            en: 'Subscribe CCTV Cloud'
          },
          price: {
            th: ' บาท',
            en: '฿ per month'
          },
          vat_datail: {
            th: '(ชำระ VAT 7%)',
            en: '(pay 7% VAT) '
          },
          two_unit: {
            th: ' (2 รายการ)',
            en: ' x2'
          }
        },
        monthly_service_fee: {
          th: 'ค่าบริการรายเดือน',
          en: 'Monthly service fee'
        },
        monthly_service_baht: {
          th: 'บาท',
          en: '฿'
        },
        netprice: {
          th: 'ราคา',
          en: 'Price'
        },
        totalprice: {
          th: 'มูลค่าสินค้า',
          en: 'Total Price'
        },
        baht: {
          th: '.-',
          en: '.-'
        },
        quantity: {
          th: 'จำนวน',
          en: 'Quantity'
        },
        delete: {
          th: 'เอาสินค้าออก',
          en: 'Delete'
        },
        redeem: {
          th: 'แลกทรูพอยท์',
          en: 'Redeem TruePoint'
        },
        points: {
          th: 'คะแนน',
          en: 'points'
        },
        removeCartError: {
          th: 'สินค้าไม่มีจำหน่ายในขณะนี้ กรุณานำสินค้าออกจะตะกร้า',
          en: 'Product is not available at the moment. Please remove this product.'
        },
        truecard_free: {
          th: '*ครั้งแรกรับบัตรฟรี',
          en: '*Get Free for first time'
        },
        truecard_msg: {
          th: 'ค่าจัดส่งบัตรทรูการ์ด: 25.-/ใบ \n\n ลูกค้าสามารถอัพเกรดประเภทของทรูการ์ดได้ เมื่อสั่งซื้อร่วมกับซิมหรือเครื่องพร้อมแพ็กเกจรายเดือน \n\n จัดส่งแบบลงทะเบียนโดยไปรษณีย์ไทยประมาณ 15 วันทำการนับจากวันที่สั่งบัตรทรูการ์ด \n\n (กรณีสั่งบัตรทรูการ์ดพร้อมสินค้าอื่นๆ จะจัดส่งแยกกัน)',
          en: 'True Card Delivery fee: 25 thb/item \n\n Customer can upgrade True Card by purchasing sim or device with monthly package \n\n Delivery by Thailand Post will be approximately 15 days from the order date (the delivery will be separated in the case that the True Card was ordered with other products)'
        },
        truecard_upgrade: {
          th: '*คุณได้รับสิทธ์การอัพเกรดเป็น ',
          en: '*You can upgrade True Card to '
        },
        package: {
          th: 'แพ็กเกจ',
          en: 'Package'
        },
        mnp_title: {
          th: 'เบอร์ที่คุณลงทะเบียนซิม',
          en: 'The number that you have registered for the SIM'
        },
        pre2post_title: {
          th: 'Prepaid number switch to postpaid:',
          en: 'Prepaid number switch to postpaid:'
        },
        thai_id_number: {
          th: 'หมายเลขบัตรประชาชน',
          en: 'Thai ID number'
        },
        passport_number: {
          th: 'หมายเลขพาสปอร์ต',
          en: 'Passport Number'
        },
        mobile_number: {
          th: 'หมายเลขโทรศัพท์',
          en: 'Mobile Number'
        },
        flagship_discount: {
          th: 'ราคานี้ได้รับส่วนลด มูลค่า ${discount} บาท จาก coupon code: ${code}',
          en: 'This price included ${discount} THB discount from coupon code: ${code}'
        },
        credit_card_only: {
          th: 'โปรโมชั่นนี้สำหรับการชำระผ่านบัตรเครดิตเท่านั้น',
          en: 'This promotion is for credit card payment only.'
        },
        cart_quantity: {
          th: 'จำนวน',
          en: 'Quantity'
        },
        cart_price: {
          th: 'ราคา/หน่วย',
          en: 'Unit Price'
        },
        advance_payment: {
          th: 'ชำระค่าบริการล่วงหน้า',
          en: 'Advance Payment'
        }
      }
    }),
    computed: {
      isTrueCard () {
        return this.data.product_type === 'truecard' && this.data.true_card
      },
      isMnp () {
        return this.data.product_type === 'mnp'
      },
      isPre2Post () {
        return this.data.product_type === 'pre_to_post' && this.data.existing_campaign
      },
      isPrepaidBundleSim () {
        return this.data.product_type === 'device_bundle_prepaid_sim'
      },
      isDeviceBundle () {
        return [
          'device_bundle_new_customer',
          'device_bundle_existing',
          'pre_to_post',
          'mnp_one_step',
          'mnp_two_step',
          'device_mnp_bundle'
        ].includes(this.data.product_type)
      },
      isPrepaidList () {
        return ((this.data.sim_meta && this.data.sim_meta[0] && this.data.sim_meta[0].sim_type === 'prepaid') || this.$parent.config.prepaid_search.includes(this.data.id))
      },
      isCreditOnly () {
        return this.$store.state.cart.cart.data?.credit_card_only
      },
      isVhoraPrepaid () {
        const isTypePostpaid = this.data.product_type === 'postpaid'
        const isLowTier = this.data?.sim_meta?.[0]?.berfuntong?.package_code
        const isSimPrepaid = this.data?.sim_meta?.[0]?.sim_type === 'prepaid'
        return isTypePostpaid && isLowTier && isSimPrepaid
      },
      price () {
        if (this.isDeviceBundle) return this.data.price - this.data.discount
        return this.data.price
      },
      totalPrice () {
        return this.price * this.data.quantity
      },
      totalFullPrice () {
        return this.data.compare_at_price * this.data.quantity
      },
      showOriginalPrice () {
        if (this.isDeviceBundle) return this.data.compare_at_price > 0
        return this.data.compare_at_price > 0 && (this.data.compare_at_price !== this.data.price)
      },
      hideQuantity () {
        if (!this.disableQuantity) return true
        if (this.data.error) return true
        const type = [
          'sim',
          'postpaid',
          'vlearn',
          'family_black_truecard',
          'advancepayment',
          'device_bundle_existing',
          'device_bundle_new_customer',
          'truecard',
          'mnp',
          'entertainment',
          'pre_to_post',
          'restriction',
          'mnp_two_step',
          'device_bundle_prepaid_sim',
          'device_bundle_prepaid'
        ]
        const campaign = this.data.campaigns
        const quantityLimit = campaign
          ? campaign.reduce((i, e) => {
            if (e.quantity_limit > 0) i = true
            return i
          }, false)
          : false
        return type.includes(this.data.product_type) ||
          this.disableQuantity.includes(this.data.id) ||
          this.data.campaign ||
          this.data.bundle ||
          this.data.is_addon ||
          quantityLimit
      },
      hideDelete () {
        return ['advancepayment', 'entertainment'].includes(this.data.product_type)
      },
      monthlyServiceFee () {
        const fee = this.data.existing_campaign && this.data.existing_campaign.price_plan.price
        return fee
      },
      isClmBenefit () {
        return !!localStorage.getItem('is-clmbundle-campain')
      }
    },
    mounted: function () {
      this.code5g = this.$store.state.cart.cart.data?.code_5g
    },
    methods: {
      checkPointStatus,
      computeBalance,
      computePrice,
      computeMobileNumber (e) {
        const regex = e.length === 10 ? /(\d{3})(\d{3})(\d{4})/ : /(\d{2})(\d{3})(\d{4})/
        return e.replace(regex, '$1-$2-$3')
      },
      forceUpdate () {
        this.$forceUpdate()
        this.$emit('update', {
          product_id: this.data.id,
          inventory_id: this.data.inventory_id,
          quantity: this.data.quantity,
          is_edit_product_quantity: 1
        })
      },
      deleteItem () {
        loggerAddon({
          event: 'Cart',
          status: 'remove',
          productId: this.data.id,
          matcode: this.data.sku,
          quantity: this.data.quantity,
          amount: this.data.price - this.data.discount,
          discount: this.data.discount
        })

        this.$emit('delete', {
          product_id: this.data.id,
          inventory_id: this.data.inventory_id,
          ga: true
        })
      },
      increaseQuantity () {
        if (this.data.quantity >= this.data.total_quantity) return
        this.$set(this.data, 'quantity', this.data.quantity + 1)
        this.forceUpdate()
      },
      decreaseQuantity () {
        if (this.data.quantity <= 1) return
        this.$set(this.data, 'quantity', this.data.quantity - 1)
        this.forceUpdate()
      },
      showBalance (cart, data) {
        return Object.keys(cart).length === 1 && data.quantity === 1 && data.points && checkPointStatus(data.points)
      },
      image (data) {
        if (data.sim_meta?.length > 0 && data.sim_meta[0].sim_image) {
          return data.sim_meta[0].sim_image
        }
        return data.image
      }
    }
  }
</script>

<style scoped lang="scss">
.cart {
  padding: 10px 10px 10px 10px;
  background: #fff;
  border-radius: 0px 0px 0px 0px;
  margin-bottom: 8px;
  font-size: 26px;
  font-family: 'TrueLight';

  .cart-delete-desktop {
    display: flex;
    cursor: pointer;
    height: 30px;
    justify-content: flex-end;
  }

  .cart-delete-mobile {
    display: none;
  }

  .cart-container {
    display: grid;
    grid-template-columns: 140px auto;
    grid-gap: 0 20px;

    .cart-image {
      width: 140px;
      border-radius: 8px;
      overflow: hidden;
      display: flex;
      align-items: flex-start;
      justify-content: center;

      img {
        width: 100%;
        max-height: 140px;
        object-fit: contain;
      }
    }
    .cart-content {
      display: grid;
      grid-template-columns: 1fr 95px minmax(100px, auto);
      grid-gap: 20px;

      .cart-info {
        font-family: 'TrueBold';
        flex: 1;

        .cart-title {
          display: flex;
          color: #000;
          font-size: 28px;
          line-height: 33.59px;
          margin-top: 8px;

          .option {
            font-size: 26px;
            font-family: 'TrueLight';
            font-weight: 400;
            line-height: 31.19px;
          }
        }
        .true-card-message {
          color: #6b6b6b;
          font-size: 22px;
        }
        .true-card-message-long {
          font-family: "TrueMedium";
          font-size: 20px;
          line-height: 20px;
          white-space: pre-line;
          margin-bottom: 12px;
        }
        .cart-postpaid-chip {
          font-size: 18px;
          line-height: 20px;
          padding: 0 14px;
          display: inline-flex;
          color: #fff;
          background-image: linear-gradient(286.62deg, #DF1584 10.96%, #DF1E5F 36.51%, #E02542 61.07%, #E02932 82.54%, #E02B2C 98.54%);;
          border-radius: 3px;
          margin-bottom: 16px;
          text-transform: capitalize;
          font-family: 'TrueLight';

          & ~ .cart-price-container {
            margin-top: 0;
          }
        }
        .cart-price-container {
          margin-top: 8px;
          display: flex;
          flex-direction: column;

          .cart-price {
            line-height: 20px;

            &.special {
              font-size: 28px;
              color: #E62627;
            }
            &.original {
              font: "TrueLight";
              font-size: 21px;
              text-decoration: line-through;
            }
          }
        }
        .cart-tax {
          font-size: 20px;
          color: #E62627;
          font-family: "TrueMedium";
        }
      }
      .cart-action {
        display: flex;
        flex-direction: column;

        &.quantity {
          min-width: 95px;
          align-items: flex-start;
          margin-top: 42.75px;
        }

        .total-price {
          white-space: nowrap;
          .discount-price {
            margin-top: 9px;
            display: inherit;
            color: #404040;
            text-align: center;
          }
          .full-price {
            display: none;
          }
        }

        .cart-action-label, .cart-quantity-label {
          display: none;
        }

        .cart-quantity {
          display: flex;
          align-items: center;

          .cart-quantity-label {
            color: #999;
            margin-right: 18px;
            font-size: 24px;
          }
          .cart-quantity-fixed {
            color: #000;
            margin-left: 12px;
          }
          .cart-quantity-container {
            display: flex;
            width: 95px;
            height: 32px;

            .cart-quantity-button {
              width: 30px;
              height: 30px;
              background: #f4f4f4;
              outline: none;
              border: none;
              cursor: pointer;
              color: #666;
              font-size: 25px;
              border-radius: 3px;

              &[disabled] {
                background-color: #F9F9F9;
                color: #CCCCCC;
                cursor: default;
              }

              &.increase {
                &[disabled] {
                  background-color: #EBECF3;
                }
              }
            }
            .cart-quantity-value {
              flex: 1;
              line-height: 32px;
              text-align: center;
              color: #404040;
            }
          }
        }
      }
      &.bottom {
        padding-left: 160px;
        padding-top: 12px;
        grid-column: 1 / -1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-height: 36px;

        .balance-point-container {
          display: flex;

          .balance-point {
            background-color: #f5f5f5;
            border: 1px dashed #cccccc;
            padding: 2px 10px;
            border-radius: 4px;
            color: #e9242b;
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            font-size: 18px;
            line-height: 24px;
            flex-wrap: wrap;

            &.upgrade {
              font-family: 'TrueBold'
            }

            span {
              white-space: nowrap;
            }

            img {
              width: 13px;
              height: 14px;
              margin: 0 6px;
            }

            .black {
              margin: 0 4px;
            }

            .number {
              display: inline-flex;

              span {
                display: inline-flex;
              }
            }
          }
        }
        .cart-delete {
          white-space: nowrap;

          .cart-delete-button {
            cursor: pointer;
            color: #999;
            display: flex;
            align-items: center;

            svg {
              width: 30px;
              height: 30px;
              margin-right: 6px;
            }
          }
        }
      }
    }
  }
  .sim-container {
    border-radius: 8px;
    overflow: hidden;

    .sim-info-container {
      font-size: 26px;
      line-height: 25.6px;
      color: #000;
      padding: 20px;
      font-family: 'TrueLight';

      .sim-info-title {
        font-family: "TrueBold";
        font-size: 28px;

        &.margin-top {
          margin-top: 16px;
        }
      }
      .iot-title {
        font-family: "TrueMedium";

        &.margin-top {
          margin-top: 16px;
        }
      }

      .red {
        color: #ff0000;
      }

      .bold {
        font-family: "TrueBold";
      }
    }
  }
}

.camp-bean {
  padding: 1rem;
  text-align: left;
  font-size: 1.5rem;
  line-height: 1.5rem;
  border: 1px solid #b4b4b4;

  img {
    width: 100%;
  }

  .headline {
    font-size: 2rem;

    & :first-child {
      margin-top: .5rem !important;
      margin-bottom: 1.25rem !important;
    }
  }

  .sub-headline {
    & :first-child {
      font-size: 27px;
      margin-top: 1rem;
    }
  }

  .terms {
    & :first-child {
      margin-top: .75rem;
    }
  }
}

@media screen and (max-width: 860px) {
  .cart {
    padding: 10px;

    .cart-delete-desktop {
      display: none;
    }

    .cart-delete-mobile {
      display: flex;
    }

    .cart-container {
      display: grid;
      grid-template-columns: 80px auto;
      grid-gap: 20px;

      .cart-image {
        height: 80px;
        width: 80px;
        border-radius: 4px;
      }

      .cart-content {
        grid-template-columns: auto auto;
        grid-gap: 8px 0;

        .cart-info {
          flex: 0;
          grid-column: 1 / -1;
          padding: 0;

          .cart-title {
            font-size: 24px;
            line-height: 20px;
            margin-top: 4px;
            margin-bottom: 8px;
            justify-content: space-between;

            .option {
              font-size: 20px;
              line-height: 20px;
              font-family: 'TrueLight';
            }
          }

          .true-card-message {
            font-size: 20px;
            line-height: 20px;
          }

          .cart-price-container {
            margin-top: 8px;
            display: none;

            .cart-price {
              line-height: 24px;

              &.special {
                font-size: 24px;
              }
              &.original {
                font-size: 18px;
              }
            }
          }
        }
        .cart-action {
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;

          .total-price {
            .discount-price {
              font-size: 34px;
              line-height: 24px;
              font-family: 'TrueBold';
              color: #E62627;
            }
            .full-price {
              display: inherit;
              line-height: 15px;
              text-align: right;
              font-size: 21px;
              font-family: 'TrueLight';
              text-decoration: line-through;
            }
          }

          &.quantity {
            margin-top: 0;
          }

          .cart-action-label, .cart-quantity-label {
            display: flex;
            font-family: 'TrueLight';
          }

          .cart-quantity {
            margin-right: 10px;

            .cart-quantity-fixed {
              margin-left: 0;
            }

            .cart-quantity-label {
              font-size: 18px;
              line-height: 18px;
              margin-bottom: 6px;
            }
          }
          .cart-delete {
            font-size: 18px;

            &.mobile {
              display: none;
            }

          }
        }
        &.bottom {
          padding-left: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-end;

          .balance-point-container,
          .balance-point {
            width: 100%;
          }
          .cart-delete {
            margin-top: 8px;
            font-size: 18px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 480px) {
  .cart .cart-container .cart-content {
    grid-template-columns: 1fr;
    grid-gap: 0;

    .cart-action {
      font-size: 20px;
      align-items: flex-start;
    }

    .cart-quantity {
      .cart-quantity-container{
        .cart-quantity-value {
          &.onlylabel {
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
