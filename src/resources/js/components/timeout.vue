<template>
  <dialog-element ref="dialog" class="dialog" @onClose="close()">
    <div slot="content">
      <div class="close-container">
        <div class="close" @click="close()">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
        </div>
      </div>
      <img class="timeout-icon" src="/images/icons/timeout.png" />
      <div class="title">{{ locale.sorry[$i18n.locale] }}</div>
      <div class="number-container">
        <div class="number-label">{{ locale.number[$i18n.locale] }}</div>
        <div class="number-value">{{ mobileNumber }}</div>
      </div>
      <div class="error-message-container">
        <div>{{ locale.error1[$i18n.locale] }}</div>
        <div>{{ locale.error2[$i18n.locale] }}</div>
      </div>
      <div class="message-container">{{ locale.message[$i18n.locale] }} <span>{{ locale.messageBack[$i18n.locale] }}</span></div>
      <div class="button-container">
        <button-element class="button" @click="close()">
          <template v-if="type === 'drlucky'">{{ locale.back_drlucky[$i18n.locale] }}</template>
          <template v-else>{{ locale.back[$i18n.locale] }}</template>
        </button-element>
      </div>
    </div>
  </dialog-element>
</template>

<script>
  import Dialog from './dialog'
  import Button from './button'
  import {
    FETCH_VERIFY_CONFIG,
    FETCH_CART,
    DELETE_CART
  } from '@store/actions.type'

  export default {
    components: {
      'dialog-element': Dialog,
      'button-element': Button
    },
    data: () => ({
      number: '',
      type: '',
      locale: {
        sorry: {
          en: 'Sorry, It’s over time for reserve this mobile number.',
          th: 'ขออภัยค่ะคุณทำรายการเกินเวลา'
        },
        number: {
          en: 'Your mobile number',
          th: 'ขณะนี้เบอร์'
        },
        error1: {
          en: 'Another customer reserved this mobile number already.',
          th: 'มีลูกค้าท่านอื่นทำการจองเรียบร้อยแล้ว'
        },
        error2: {
          en: 'The system will remove this mobile number from your reservation.',
          th: 'ระบบจะทำการลบเบอร์ออกจากการจองของคุณอัตโนมัติ'
        },
        message: {
          en: 'You could back to select mobile number by click ',
          th: 'คุณสามารถกลับไปเลือกเบอร์เพิ่มเติมโดยกดปุ่ม '
        },
        messageBack: {
          en: '"back to select mobile number"',
          th: '"กลับไปเลือกเบอร์"'
        },
        back: {
          en: 'Back to select mobile number',
          th: 'กลับไปเลือกเบอร์'
        },
        back_drlucky: {
          en: 'Back to select mobile number',
          th: 'กลับไปที่หน้าแรก'
        }
      }
    }),
    computed: {
      mobileNumber () {
        return this.number.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')
      }
    },
    methods: {
      trackAnalytics () {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event: 'track_event',
          event_category: 'search_mobile_number',
          event_action: 'select_number_failed',
          event_label: 'session_timeout'
        })
      },
      open (number, type) {
        this.trackAnalytics()
        this.type = type
        this.number = number
        this.$refs.dialog.open()
        if (type === 'drlucky') {
          this.removeDrlucky()
        } else {
          this.removePostpaid(type)
        }
      },
      close () {
        if (this.type === 'drlucky') {
          window.location.href = '/online-store/berfuntong'
          return
        }
        location.reload()
      },
      async removePostpaid (type) {
        window.localStorage.removeItem(type)
        await this.updateCart(type)
      },
      async removeDrlucky () {
        window.localStorage.removeItem('truestore-berfuntong-refcode')
        window.localStorage.removeItem('truestore-berfuntong-ctoken')
        window.localStorage.removeItem('truestore-berfuntong-form')
        window.localStorage.removeItem('truestore-berfuntong-vhora-image')
        window.localStorage.removeItem('truestore-berfuntong-timestamp')
        window.localStorage.removeItem('vhora-form')
        await this.updateCart('drlucky')
      },
      async removeItem (id, product) {
        await this.$store.dispatch(DELETE_CART, {
          id,
          data: {
            product_id: product.id,
            inventory_id: product.inventory.id
          }
        })
      },
      async updateCart (type) {
        async function asyncForEach (array, callback) {
          for (let index = 0; index < array.length; index++) {
            await callback(array[index], index, array)
          }
        }
        const cartId = localStorage.getItem('cart-id')
        if (cartId) {
          const cart = await this.$store.dispatch(FETCH_CART, { id: cartId })
          if (cart.data) {
            const config = await this.$store.dispatch(FETCH_VERIFY_CONFIG)
            await asyncForEach(cart.data.record, async (record) => {
              await asyncForEach(record.products, async (product) => {
                if (type === 'drlucky') {
                  const isSim = product.product_type === 'sim'
                  const isVhora = product?.['sim_meta']?.[0]?.['campaign_type'] === 'vhora'
                  if (isSim && isVhora) this.removeItem(cartId, product)
                  return
                }
                if (type === 'postpaid-data') {
                  const products = config.verify.map((product) => {
                    if (product.type === 'postpaid') return product.id
                  }).filter(item => item)
                  if (products.includes(product.id)) await this.removeItem(cartId, product)
                }
                if ((type === 'postpaid-sim-data') &&
                  [
                    'postpaid',
                    'vlearn',
                    'family_black_truecard',
                    'device_bundle_new_customer'
                  ].includes(product.product_type)) {
                  await this.removeItem(cartId, product)
                }
              })
            })
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.dialog::v-deep .content {
  max-width: 900px;
}

.dialog {
  text-align: center;

  .close-container {
    display: flex;
    justify-content: flex-end;

    .close {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      svg {
        fill: #9a9a9a;
      }

      &:hover {
        background: #e3e3e3;
      }
    }
  }

  .timeout-icon {
    width: 120px;
  }
  .title {
    margin: 18px 0 10px 0;
    font-family: "TrueBold";
    font-size: 40px;
    line-height: 40px;
    color: #ff0000;
  }
  .number-container {
    padding: 14px;
    max-width: 400px;
    background-color: #f5f5f5;
    border-radius: 8px;
    margin: auto auto 14px auto;

    .number-label {
      color: #4a4a4a;
      font-size: 20px;
      line-height: 20px;
    }
    .number-value {
      margin-top: 14px;
      font-family: "TrueBold";
      font-size: 40px;
      line-height: 20px;
      color: #000;
    }
  }
  .error-message-container {
    color: #ff0000;
    font-size: 24px;
    line-height: 24px;
    margin-bottom: 8px;
  }
  .message-container {
    color: #666;
    font-size: 24px;
    line-height: 24px;

    span {
      font-family: "TrueBold";
    }
  }
  .button-container {
    margin: 14px auto 36px auto;

    .button {
      background-color: #ff0000;
    }
  }
}
</style>
