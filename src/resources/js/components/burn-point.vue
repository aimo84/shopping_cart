<template>
  <div>
    <dialog-element
      ref="dialog"
      class="burn-point-terms-dialog"
      showCloseButton
    >
      <div slot="content">
        <burn-point-terms />
      </div>
    </dialog-element>
    <div
      class="burn-point-container"
      v-if="burnPointCond(user, userBalance, showBalance, points) === 'showBurnPointLogin'"
    >
      <div class="burn-point-content">
        <div class="burn-point-label">
          <div class="label">
            {{ Content.redeem[$i18n.locale] }}
            <span class="red bold nowrap">
               {{ Content.truepoint[$i18n.locale] }}
              <img class="label-img" src="/images/icons/true-point-heart.png" />
            </span>
          </div>
          <div class="text-align-right">
            <span class="bold">
              {{ computeBalance(points.point) }} {{ Content.points[$i18n.locale] }} + {{ computePrice(points.price - points.discount) }} ฿
            </span>
            <div
              class="button"
              @click="login"
              v-if="!userBalanceLoading"
            >{{ Content.checkbalance[$i18n.locale] }}</div>
            <div
              class="button"
              disabled
              v-else
            >Loading ...</div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="burn-point-container error"
      v-if="burnPointCond(user, userBalance, showBalance, points) === 'showBurnPointError'"
    >
      <div class="burn-point-content error">
        <div class="burn-point-label">
          <span class="label">
            {{ Content.yourtruepoint[$i18n.locale] }}
          </span>
          <span class="red bold">{{ computeBalance(userBalance.point) }} {{ Content.points[$i18n.locale] }} </span>
        </div>
        <div class="burn-point-error red">
          <span class="burn-point-error-label error">
            {{ Content.truepointcarterror[$i18n.locale] }}
          </span>
        </div>
      </div>
    </div>
    <div
      class="burn-point-container"
      :class="!hasBalancePoint ? 'error' : ''"
      v-if="burnPointCond(user, userBalance, showBalance, points) === 'showBurnPoint'"
    >
      <div class="burn-point-content" v-if="hasBalancePoint">
        <div class="burn-point-label">
          <span class="label">
            {{ Content.yourtruepoint[$i18n.locale] }}
          </span>
          <span class="bold">{{ computeBalance(userBalance.point) }} {{ Content.points[$i18n.locale] }}</span>
        </div>
        <div class="burn-point-label">
          <span class="label">
            {{ Content.exchangepoint[$i18n.locale] }} <span class="bold red">{{ Content.truepoint[$i18n.locale] }}</span>
            <img class="label-img" src="/images/icons/true-point-heart.png" />
          </span>
          <span class="bold">{{ computeBalance(points.point) }} {{ Content.points[$i18n.locale] }}</span>
        </div>
        <div class="burn-point-label red bold">
          <span class="label">
            {{ Content.discounttruepoint[$i18n.locale] }}
            <img class="label-img" src="/images/icons/true-point-heart.png" />
          </span>
          <span>-{{ computePrice(points.discount) }} ฿</span>
        </div>
        <div class="burn-point-label" v-if="!redeemConfirmed">
          <div class="burn-point-checkbox">
            <input type="checkbox" v-model="balancePointAgreed" />
            <label @click="showTnc">{{ Content.truepointtnc[$i18n.locale] }}</label>
          </div>
          <div class="burn-point-button" >
            <div
              class="button"
              @click="confirmBalancePoint"
              :disabled="!balancePointAgreed"
            >
              {{ Content.confirmredeem[$i18n.locale] }}
            </div>
          </div>
        </div>
      </div>
      <div class="burn-point-content error" v-if="!hasBalancePoint">
        <div class="burn-point-label no-border">
          <span class="label">
            {{ Content.yourtruepoint[$i18n.locale] }}
          </span>
          <span class="red bold">{{ userBalance.point }} {{ Content.points[$i18n.locale] }} </span>
        </div>
        <div class="burn-point-error red">
          <span class="burn-point-error-label error">
            {{ Content.truepointerror[$i18n.locale] }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Dialog from './dialog'
  import BurnPointTerms from './burn-point-terms'
  import {
    checkPointStatus,
    computeBalance,
    computePrice
  } from '@utils/common'

  import {
    GET_BALANCE,
    REFRESH_TOKEN
  } from '@store/actions.type'

  export default {
    components: {
      'dialog-element': Dialog,
      'burn-point-terms': BurnPointTerms
    },
    props: {
      cart: [Object],
      user: [Object, Boolean],
      redeemConfirmed: [Boolean],
      totalQuantity: [Number]
    },
    data: () => ({
      balancePointAgreed: false,
      hasBalancePoint: true,
      showBalance: false,
      userBalanceLoading: false,
      userBalance: {},
      Content: {
        points: {
          th: 'คะแนน',
          en: 'points'
        },
        redeem: {
          th: 'แลก',
          en: 'Redeem'
        },
        truepoint: {
          th: 'ทรูพอยท์',
          en: 'TruePoint'
        },
        checkbalance: {
          th: 'ตรวจสอบคะแนนคงเหลือ',
          en: 'Check Balance Point'
        },
        yourtruepoint: {
          th: 'คะแนนคงเหลือของคุณคือ',
          en: 'Your TruePoint'
        },
        truepointerror: {
          th: 'ไม่สามารถแลกทรูพอยท์ได้ เนื่องจากคะแนนสะสมทรูพอยท์ของคุณไม่เพียงพอ',
          en: 'Sorry, your balance point is not enough to redeem.'
        },
        truepointcarterror: {
          th: 'ไม่สามารถแลกทรูพอยท์ได้ กรุณาแลกทรูพอยท์ครั้งละ 1 ชิ้น โดยต้องทำรายการแยกจากสินค้าอื่น',
          en: "You can't redeem point. Please redeem only 1 item per order and separate check out from another product."
        },
        discounttruepoint: {
          th: 'ส่วนลดที่ได้จากการแลกคะแนนทรูพอยท์',
          en: 'Discount from TruePoint'
        },
        truepointtnc: {
          th: 'ยอมรับข้อกำหนดและเงื่อนไข',
          en: 'Accept Term and Condition'
        },
        confirmredeem: {
          th: 'ยืนยันการแลกคะแนน',
          en: 'Confirm'
        },
        exchangepoint: {
          th: 'แลกคะแนน',
          en: 'Redeem'
        }
      }
    }),
    computed: {
      points () {
        const cart = this.cart[Object.keys(this.cart)[0]]
        if (!cart) return null
        if (!cart.points) return null
        cart.points.price = cart.price
        return cart.points
      }
    },
    watch: {
      user () {
        if (this.user) this.getBalance()
      }
    },
    mounted () {
      this.getBalance()
    },
    methods: {
      computeBalance,
      computePrice,
      refreshToken () {
        this.$store.dispatch(REFRESH_TOKEN).then((data) => {
          this.userBalanceLoading = false
          if (data.status_code === 0 && data.status_txt === 'Success') {
            this.getBalance()
          } else {
            this.userBalanceLoading = false
          }
        }).catch(() => {
          this.userBalanceLoading = false
        })
      },
      getBalance () {
        this.userBalanceLoading = true
        return this.$store.dispatch(GET_BALANCE).then((data) => {
          this.userBalance = data.data
          this.showBalance = true
          this.hasBalancePoint = this.userBalance.point >= this.points.point
          this.userBalanceLoading = false
        }).catch((error) => {
          const msg = 'jwk or access_token is not set properly when used'
          if (error && !error.is_get_token && error.message.en === msg) {
            this.refreshToken()
          } else {
            this.userBalanceLoading = false
          }
        })
      },
      burnPointCond () {
        if (checkPointStatus(this.points)) {
          if (this.totalQuantity === 1 && this.points) {
            if (!this.user || (this.user && !this.showBalance)) {
              return 'showBurnPointLogin'
            }
            if (this.user && this.showBalance) {
              if (this.hasBalancePoint) this.$emit('onShowRedeem', true)
              return 'showBurnPoint'
            }
          }
          if (this.user && this.totalQuantity > 1 && this.userBalance.point) {
            return 'showBurnPointError'
          }
        }
      },
      login () {
        this.userBalanceLoading = true
        window.dispatchEvent(new Event('login'))
        window.addEventListener('true-login-cancelled', () => {
          this.userBalanceLoading = false
        })
      },
      confirmBalancePoint () {
        if (!this.balancePointAgreed) return
        this.$emit('onRedeemConfirmed', true)
      },
      showTnc () {
        this.$refs.dialog.open()
      }
    }
  }
</script>
<style lang="scss">
  .burn-point-terms-dialog {
    .content {
      max-height: 85%;
      max-width: 860px;

      .dialog-content {
        padding: 36px;
      }
    }
  }
</style>
<style lang="scss" scoped>
  .burn-point-container {
    display: flex;
    color: #666;

    .burn-point-logo {
      display: flex;
      align-items: center;
      padding-right: 8px;

      img {
        height: 22px;
        width: 20px;
        display: block;
      }
    }
    .burn-point-content {
      width: 100%;

      &.error {
        border-bottom: 1px solid #ddd;
      }

      .burn-point-error {
        background: #ffeaec;
        border: 1px solid #ff0018;
        margin-bottom: 8px;
        border-radius: 4px;
        position: relative;

        &:after {
          content: "";
          position: absolute;
          background: #ffeaec;
          border-left: 1px solid #ff0018;
          border-top: 1px solid #ff0018;
          width: 10px;
          height: 10px;
          transform: rotate(45deg);
          top: -6px;
          right: 16px;
        }

        .burn-point-error-label {
          font-size: 20px;
          line-height: 20px;
          padding: 4px 8px;
          display: block;
        }
      }

      .burn-point-label {
        display: flex;
        align-items: flex-start;
        width: 100%;
        font-size: 24px;
        line-height: 24px;
        padding: 12px 0;
        border-bottom: 1px solid #ddd;

        &.no-border {
          border-bottom: none;
        }

        .label {
          flex: 1;
          margin-bottom: 0;

          .label-img {
            width: 18px;
            height: 18px;
            margin-bottom: -2px;
          }

          &.error {
            font-family: 'TrueMedium';
            line-height: 18px;
            font-size: 18px;
          }
        }
      }

      .bold {
        color: #000;
        font-family: "TrueBold";
      }

      .red {
        color: #ee3124;
      }

      .nowrap {
        white-space: nowrap;
      }

      .text-align-right {
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        .button {
          margin-top: 4px;
        }
      }

      .burn-point-checkbox {
        margin-top: 8px;
        flex: 1;

        label {
          cursor: pointer;
          font-size: 20px;
          color: #666;
        }
      }

      .button {
        display: inline-block;
        padding: 0 24px;
        border-radius: 6px;
        color: #fff;
        background-color: #ee3124;
        cursor: pointer;
        height: 40px;
        line-height: 40px;
        font-size: 22px;

        &[disabled] {
          background-color: #9e9e9e;
          pointer-events: none;
          cursor: default;
        }
      }
    }
  }

  .burn-point-info {
    font-family: "TrueMedium";
    font-size: 26px;
    color: #ee3124;
    display: flex;
    align-items: center;

    img {
      height: 20px;
      margin-right: 6px;
    }

    .label {
      flex: 1;
      display: flex;
      align-items: center;
      font-family: "TrueBold";
      margin-bottom: 0;
    }
  }
</style>
