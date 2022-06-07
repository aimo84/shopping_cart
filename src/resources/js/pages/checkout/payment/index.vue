<template>
  <div class="page-space">
    <truemoney-popup-element
      @payment = "makePayment"
      @resetPopup = "callPopup = false"
      :callPopup = "callPopup"
    />
    <loading-element
      v-if="loading"
      :is-processing="isProcessing"
    />
    <dialog-element ref="confirmPaymentDialog" key="confirmPaymentDialog">
      <div
        slot="content"
        class="confirm-payment-dialog"
      >
        <div class="dialog-title">{{ Content.confirmPayment.title[$i18n.locale] }}</div>
        <div class="dialog-subtitle">{{ Content.confirmPayment.subtitle[$i18n.locale] }}</div>
        <div class="button-container">
          <button-element
            class="red-bg-button"
            @click="makePayment"
          >{{ Content.confirmPayment.confirm[$i18n.locale] }}</button-element>
          <button-element
            class="gray-button"
            @click="$refs.confirmPaymentDialog.close()"
          >{{ Content.confirmPayment.cancel[$i18n.locale] }}</button-element>
        </div>
      </div>
    </dialog-element>
    <dialog-element ref="confirmEkycDialog" key="confirmEkycDialog">
      <div
        slot="content"
        class="confirm-payment-dialog"
      >
        <div class="image">
          <img src="/images/ekyc-dialog/ekyc-dialog.png" />
        </div>
        <div class="dialog-title">{{ Content.confirmEkycDialog.title[$i18n.locale] }}</div>
        <div class="dialog-subtitle">{{ Content.confirmEkycDialog.sub_title[$i18n.locale] }}</div>
        <div class="button-container">
          <button-element
            id="cancel-ekyc"
            class="gray-rounded-button"
            @click="$refs.confirmEkycDialog.close()"
          >{{ Content.confirmEkycDialog.back[$i18n.locale] }}</button-element>
          <button-element
            id="accept-ekyc"
            class="red-rounded-button"
            @click="isCreditOnly ?  ccoPlaceOrder() : makePayment()"
          >{{ Content.confirmEkycDialog.verify[$i18n.locale] }}</button-element>
        </div>
      </div>
    </dialog-element>
    <dialog-element ref="confirmCreditPaymentDialog" class="terms-dialog" key="confirmCreditPaymentDialog" @onClose="cancelCreditPayment()">
      <div
        slot="content"
        class="confirm-payment-dialog"
      >
        <terms-credit-payment v-bind:termData="termData"/>
        <div class="button-container">
          <button-element
            class="red-bg-button"
            @click="skipEkyc ? ccoOpenEkycDialog() : ccoPlaceOrder()"
          >{{ Content.confirmCreditPayment.confirm[$i18n.locale] }}</button-element>
          <button-element
            class="gray-button"
            @click="cancelCreditPayment"
          >{{ Content.confirmCreditPayment.cancel[$i18n.locale] }}</button-element>
        </div>
      </div>
    </dialog-element>
    <dialog-element ref="errorCreditOnlyDialog" key="errorCreditOnlyDialog">
      <div
        slot="content"
        class="confirm-payment-dialog"
      >
        <div class="dialog-title">{{ Content.errorCreditOnlyDialog.title[$i18n.locale] }}</div>
        <button-element
            class="red-bg-button"
            @click="$refs.errorCreditOnlyDialog.close()"
          >{{ Content.errorCreditOnlyDialog.confirm[$i18n.locale] }}</button-element>
      </div>
    </dialog-element>
    <div
      class="error-container"
      v-if="!loading && errors.length > 0"
    >
      <ul v-if="errorCode !== 'invalid_paynext_payment'">
        <li
          v-for="(error, key) in errors"
          :key="key"
        >{{ error[$i18n.locale] }}</li>
      </ul>
      <ul v-else>
        <li
            v-for="(error, key) in errors"
            :key="key"
        >
            <div>{{ error['title'][$i18n.locale] }} {{ error['message'][$i18n.locale] }}</div>
            <div>
                <span><a href="https://tmn.app.link/?deeplink=ascendmoney%3A%2F%2Fwallet.truemoney.co.th%2Fapp%2F660000000030%3Ftype%3Dsmartpay&deeplink_no_attribution=true" target="_blank">{{ error['link_status'][$i18n.locale] }}</a></span>
                <span class="paynext-setting"><a href="https://tmn.app.link/paynext" target="_blank">{{ error['link_setting'][$i18n.locale] }}</a></span>
            </div>

        </li>
      </ul>

    </div>
    <div
      class="page-container"
      v-show="!loading"
    >
      <div class="info-container">
        <div>
          <div class="cursor-pointer">
            <div class="info-title" @click="cartToggle()">
              <div class="cart-product">
                {{ Content.cartlabel[$i18n.locale] }}
              </div>
              <div class="cart-quantity">
                <span v-show="cartActive">
                  {{ Content.cart_quantity[$i18n.locale] }}
                </span>
              </div>
              <div style="flex: 1; text-align: center;" class="cart-price">
                <span v-show="cartActive">
                  {{ Content.cart_price[$i18n.locale] }}
                </span>
              </div>
              <svg class="icon-expand" :class="cartActive ? 'icon-title-expand' : 'icon-title-collapse'" width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.00037L11 11.4004L21 1.00037" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <div class="info-item-panel" :class="{'active':cartActive}">
            <div class="panel-content">
              <cart-element
                v-for="(item, key) in cart"
                :cart="cart"
                :key="key"
                :data="item"
                :loading="loadingCoupon"
                @delete="deleteCart"
              />
            </div>
          </div>
        </div>

        <div class="mt-[16px]">
          <div class="cursor-pointer" @click="addressToggle()">
            <div class="info-title">
              {{ Content.shipping[$i18n.locale] }}
              <svg class="icon-expand" :class="addressActive ? 'icon-title-expand' : 'icon-title-collapse'" width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.00037L11 11.4004L21 1.00037" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="info-item-panel" :class="{'active':addressActive}">
              <div class="shipping-container" v-if="!loading">
                <div class="shipping-address" v-if="!Object.keys(this.sevenStore).length">
                  <div class="name">{{ address.delivery_address.firstname }} {{ address.delivery_address.lastname }},</div>
                  <div class="address-container">
                    <div>{{ deliveryAddress1 }}</div>
                    <div>{{ deliveryAddress2 }}</div>
                  </div>
                  <div class="contact-container">
                    <div><span>{{ Content.mobile[$i18n.locale] }}:</span> <span class="font-light">{{ address.delivery_address.phone }}</span></div>
                    <div><span>{{ Content.email[$i18n.locale] }}:</span> <span class="font-light">{{ address.delivery_address.email }}</span></div>
                  </div>
                </div>
                <div class="shipping-address" v-if="Object.keys(this.sevenStore).length">
                  <div class="name">รับสินค้าที่ 7Eleven</div>
                  <div>
                    {{ sevenStore.address1 }}
                  </div>
                  <div>
                    {{ sevenStore.address2 }}
                  </div>
                </div>
                <div class="shipping-action">
                  <router-link
                    v-if="!loadingCoupon"
                    class="action-edit"
                    to="/address"
                    v-on:click.native="trackAnalytics('track_event', 'order_summary', 'back', 'Back')"
                  >
                  <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 21L11.4 11L1 1" stroke="#333333" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-if="paymentBanner && !Array.isArray(paymentBanner)" class="payment-banner-container payment-banner-large">
          <a :href="paymentBanner[isMobile ? 'banner_small' : 'banner_large'].link" target="_blank" >
            <img :src="paymentBanner[isMobile ? 'banner_small' : 'banner_large'].url" />
          </a>
        </div>
      </div>
      <div class="payment-outer-container">
        <!-- <coupon-element
          :class="'coupon-2c2p'"
          :cart="cart"
          :coupon="payment.coupon_code"
          :payment-channel="payment.payment_channel"
          v-if="!isPaysmooth"
        /> -->
        <div class="payment-container mb-0">
          <div class="payment-container-label">{{ Content.payment[$i18n.locale] }}</div>
          <template v-if="noPayment">
            <div
              class="payment-method"
              :active="payment.payment_channel === 'NOPAYMENT'"
              :disabled="loadingCoupon"
            >
              <label
                class="payment-label"
                for="payment-NOPAYMENT"
              >
                <input
                  type="radio"
                  name="payment"
                  id="payment-NOPAYMENT"
                  value="NOPAYMENT"
                  v-model="payment.payment_channel"
                  hidden
                >
                <!-- <div class="radio-button" /> -->
                <div
                  class="grid place-items-center border border-gray-80 rounded-full w-[20px] h-[20px]"
                  :class="{'bg-red-500 border-red-500': payment.payment_channel === 'NOPAYMENT'}"
                >
                  <svg width="14" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12.407.03c-.307.01-.6.14-.812.361-2.29 2.294-4.378 4.55-6.59 6.803L2.296 5.03a1.185 1.185 0 0 0-1.662.184 1.182 1.182 0 0 0 .185 1.662l3.545 2.837c.471.375 1.148.337 1.574-.09 2.545-2.55 4.83-5.06 7.327-7.563A1.183 1.183 0 0 0 12.407.03Z"
                      :fill="`${payment.payment_channel === 'NOPAYMENT' ? '#FFF' : '#CCC'}`"
                    />
                  </svg>
                </div>
                <span>{{ Content.nopayment[$i18n.locale] }}</span>
              </label>
            </div>
          </template>
          <template v-else>
            <div
              class="payment-method"
              :active="payment.payment_channel === 'TMNPAYSMOOTH' && isPaysmooth"
              :disabled="!isPaysmooth"
              v-if="isPaysmooth"
            >
              <label
                class="payment-label"
                for="payment-TMNPAYSMOOTH"
              >
                <input
                  type="radio"
                  name="payment"
                  id="payment-TMNPAYSMOOTH"
                  value="TMNPAYSMOOTH"
                  v-model="payment.payment_channel"
                  hidden
                >
                <!-- <div class="radio-button" /> -->
                <div
                  class="grid place-items-center border border-gray-80 rounded-full w-[20px] h-[20px]"
                  :class="{'bg-red-500 border-red-500': payment.payment_channel === 'TMNPAYSMOOTH'}"
                >
                  <svg width="14" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12.407.03c-.307.01-.6.14-.812.361-2.29 2.294-4.378 4.55-6.59 6.803L2.296 5.03a1.185 1.185 0 0 0-1.662.184 1.182 1.182 0 0 0 .185 1.662l3.545 2.837c.471.375 1.148.337 1.574-.09 2.545-2.55 4.83-5.06 7.327-7.563A1.183 1.183 0 0 0 12.407.03Z"
                      :fill="`${payment.payment_channel === 'TMNPAYSMOOTH' ? '#FFF' : '#CCC'}`"
                    />
                  </svg>
                </div>
                <span class="paysmooth-title" >{{ Content.paysmooth.title[$i18n.locale] }}</span>
              </label>
              <div class="paysmooth-label">
                <div class="d-flex">
                  <div class="mr-[04rem]">
                    <img class="paysmooth-icon" src="/images/icons/true-paynext-extra-u-logo.png"/>
                  </div>
                  <div class="mr-[04rem]">{{ Content.paysmooth.down_amount[$i18n.locale] }} <div class="red-paysmooth-text">{{paysmoothData.down_amount}}.-</div></div>
                  <div class="border-left">
                    <div class="ml-[04rem]">
                      <div>{{ Content.paysmooth.installment_period[$i18n.locale] }} <div class="red-paysmooth-text">{{paysmoothData.installment_amount}}.-</div></div>
                      <div class="sub-text">{{ Content.paysmooth.installment_fee[$i18n.locale] }}</div>
                    </div>
                  </div>
                </div>
                <div class="divider" />
                <div class="d-flex">
                  <div>
                    <div>{{ Content.paysmooth.percent_down[$i18n.locale] }} :</div>
                    <div>{{ Content.paysmooth.tenor[$i18n.locale] }} :</div>
                  </div>
                  <div class="ml-2">
                    <div class="red-paysmooth-text">{{ paysmoothData.down_rate }}%</div>
                    <div class="red-paysmooth-text">{{ paysmoothData.tenor }} {{ Content.paysmooth.month[$i18n.locale] }}</div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="payment-method payment-method-2c2p"
              :active="payment.payment_channel === 'INSTM' && !disablePaymentMethod['installment']"
              :disabled="!enableInstallment || noPayment || loadingCoupon || disablePaymentMethod['installment'] || !banksInstallment2c2p || isPaysmooth"
              v-if="!isMnpOneStep && enable2C2P"
            >
              <label
                class="payment-label payment-label-2c2p"
                for="payment-INSTM"
              >
                <input
                  type="radio"
                  name="payment"
                  id="payment-INSTM"
                  value="INSTM"
                  v-model="payment.payment_channel"
                  :disabled="!enableInstallment"
                  hidden
                >
                <div class="payment-label-wrap">
                  <div>
                    <!-- <div class="radio-button radio-button-2c2p" /> -->
                    <div
                      class="grid place-items-center border border-gray-80 rounded-full w-[20px] h-[20px]"
                      :class="{'bg-red-500 border-red-500': payment.payment_channel === 'INSTM'}"
                    >
                      <svg width="14" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12.407.03c-.307.01-.6.14-.812.361-2.29 2.294-4.378 4.55-6.59 6.803L2.296 5.03a1.185 1.185 0 0 0-1.662.184 1.182 1.182 0 0 0 .185 1.662l3.545 2.837c.471.375 1.148.337 1.574-.09 2.545-2.55 4.83-5.06 7.327-7.563A1.183 1.183 0 0 0 12.407.03Z"
                          :fill="`${payment.payment_channel === 'INSTM' ? '#FFF' : '#CCC'}`"
                        />
                      </svg>
                    </div>
                    <span>{{ Content.installment2c2p[$i18n.locale] }}</span>
                  </div>
                </div>
              </label>

              <div
                class="payment-form"
                :class="(payment.payment_channel === 'INSTM') ? 'active' : undefined"
              >
                <div
                  class="payment-form-container installment-form"
                  v-if="enableInstallment"
                >
                  <div class="installment-banks">
                    <div
                        v-for="(bank, key) in banksInstallment2c2p"
                        :key="key"
                        class="grid-item"
                    >
                        <img :src="bank.image_url" />
                    </div>
                  </div>
                  <br />
                  <div v-if="isCreditOnly">
                    <div class="installment-label-2c2p">{{ Content.installmentCredit[$i18n.locale] }} </div>
                    <ccw-element
                      ref="instm"
                      @error="onCCWError"
                      :truepoint_id="truepoint_id"
                      :cart="cart"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="payment-method payment-method-2c2p"
              :active="payment.payment_channel === 'EW' && !disablePaymentMethod['truemoney'] && !isCreditOnly"
              :disabled="noPayment || loadingCoupon || disablePaymentMethod['truemoney'] || isCreditOnly || isPaysmooth"
              v-if="!isMnpOneStep"
            >
              <label
                class="payment-label payment-label-2c2p"
                for="payment-EW"
              >
                <input
                  type="radio"
                  name="payment"
                  id="payment-EW"
                  value="EW"
                  v-model="payment.payment_channel"
                  hidden
                >
                <div class="payment-label-wrap">
                  <div>
                    <!-- <div class="radio-button radio-button-2c2p" /> -->
                    <div
                      class="grid place-items-center border border-gray-80 rounded-full w-[20px] h-[20px]"
                      :class="{'bg-red-500 border-red-500': payment.payment_channel === 'EW'}"
                    >
                      <svg width="14" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12.407.03c-.307.01-.6.14-.812.361-2.29 2.294-4.378 4.55-6.59 6.803L2.296 5.03a1.185 1.185 0 0 0-1.662.184 1.182 1.182 0 0 0 .185 1.662l3.545 2.837c.471.375 1.148.337 1.574-.09 2.545-2.55 4.83-5.06 7.327-7.563A1.183 1.183 0 0 0 12.407.03Z"
                          :fill="`${payment.payment_channel === 'EW' ? '#FFF' : '#CCC'}`"
                        />
                      </svg>
                    </div>
                    <span class="payment-label-text">
                      {{ Content.truemoney2c2p[$i18n.locale] }}<span>{{ Content.nofee[$i18n.locale] }}</span>
                    </span>
                  </div>
                </div>
              </label>
              <div
                class="payment-form"
                :class="(payment.payment_channel === 'EW') ? 'active' : undefined"
              >
                <div class="payment-form-container pt-0">
                  <div class="payment-info-wrap">
                    <div class="flex align-items-center">
                      <img class="payment-ew-icon" src="/images/icons/EW-no-txt.png"/>
                      </div>
                    <div class="subtext flex align-items-center">
                      <div>{{ Content.truemoneysubtitle[$i18n.locale] }}</div>
                      <!-- <div>• {{ Content.truemoney2c2p.desc_1[$i18n.locale] }}</div> -->
                      <!-- <div>• {{ Content.truemoney2c2p.desc_2[$i18n.locale] }}</div> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="payment-method payment-method-2c2p"
              v-if="enablePaynext && !isMnpOneStep"
              :active="payment.payment_channel === 'PAYNEXT' && !disablePaynext && !isCreditOnly"
              :disabled="disablePaynext || noPayment || loadingCoupon || isCreditOnly || isPaysmooth"
            >
              <label
                class="payment-label payment-label-2c2p"
                for="payment-PN"
              >
                <input
                  type="radio"
                  name="payment"
                  id="payment-PN"
                  value="PAYNEXT"
                  v-model="payment.payment_channel"
                  hidden
                >
                <div class="payment-label-wrap">
                    <div>
                    <!-- <div class="radio-button radio-button-2c2p" /> -->
                    <div
                      class="grid place-items-center border border-gray-80 rounded-full w-[20px] h-[20px]"
                      :class="{'bg-red-500 border-red-500': payment.payment_channel === 'PAYNEXT'}"
                    >
                      <svg width="14" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12.407.03c-.307.01-.6.14-.812.361-2.29 2.294-4.378 4.55-6.59 6.803L2.296 5.03a1.185 1.185 0 0 0-1.662.184 1.182 1.182 0 0 0 .185 1.662l3.545 2.837c.471.375 1.148.337 1.574-.09 2.545-2.55 4.83-5.06 7.327-7.563A1.183 1.183 0 0 0 12.407.03Z"
                          :fill="`${payment.payment_channel === 'PAYNEXT' ? '#FFF' : '#CCC'}`"
                        />
                      </svg>
                    </div>
                    <span class="payment-label-text">
                      {{ Content.pay_next[$i18n.locale].title }}
                    </span>
                    </div>
                </div>
              </label>
              <div
                class="payment-form"
                :class="(payment.payment_channel === 'PAYNEXT') ? 'active' : undefined"
              >
                <div class="payment-form-container pt-0">
                  <div class="payment-info-wrap">
                    <div class="flex align-items-center">
                      <img class="payment-ew-icon" src="/images/icons/pay_next_lg.png"/>
                      </div>
                      <span class="subtext flex align-items-center">
                          {{ Content.pay_next[$i18n.locale].subtitle }}
                      </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="payment-method payment-method-2c2p"
              :active="payment.payment_channel === 'CCW' && !disablePaymentMethod['card']"
              :disabled="noPayment || loadingCoupon || disablePaymentMethod['card'] || isPaysmooth"
            >
              <label
                class="payment-label payment-label-2c2p"
                for="payment-CCW"
              >
                <input
                  type="radio"
                  name="payment"
                  id="payment-CCW"
                  value="CCW"
                  v-model="payment.payment_channel"
                  hidden
                >
                <div class="payment-label-wrap">
                  <div>
                    <!-- <div class="radio-button radio-button-2c2p" /> -->
                    <div
                      class="grid place-items-center border border-gray-80 rounded-full w-[20px] h-[20px]"
                      :class="{'bg-red-500 border-red-500': payment.payment_channel === 'CCW'}"
                    >
                      <svg width="14" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12.407.03c-.307.01-.6.14-.812.361-2.29 2.294-4.378 4.55-6.59 6.803L2.296 5.03a1.185 1.185 0 0 0-1.662.184 1.182 1.182 0 0 0 .185 1.662l3.545 2.837c.471.375 1.148.337 1.574-.09 2.545-2.55 4.83-5.06 7.327-7.563A1.183 1.183 0 0 0 12.407.03Z"
                          :fill="`${payment.payment_channel === 'CCW' ? '#FFF' : '#CCC'}`"
                        />
                      </svg>
                    </div>
                    <span class="payment-label-text">{{ !isCreditOnly ? Content.creditcard2c2p[$i18n.locale] : Content.creditcardonly2c2p[$i18n.locale] }}<span>{{ Content.nofee[$i18n.locale] }}</span></span>
                  </div>
                </div>
              </label>
              <div
                class="payment-form"
                :class="payment.payment_channel === 'CCW' ? 'active' : undefined"
                v-show="!ccw2C2P || isMnpOneStep"
              >
                <ccw-element
                  ref="ccw"
                  @error="onCCWError"
                  :truepoint_id="truepoint_id"
                  :cart="cart"
                />
              </div>
            </div>
            <div
              class="payment-method payment-method-2c2p"
              :active="payment.payment_channel === 'INSTM' && !disablePaymentMethod['installment']"
              :disabled="!enableInstallment || noPayment || loadingCoupon || disablePaymentMethod['installment'] || isPaysmooth"
              v-if="!isMnpOneStep && !enable2C2P"
            >
              <label
                class="payment-label payment-label-2c2p"
                for="payment-INSTM"
              >
                <input
                  type="radio"
                  name="payment"
                  id="payment-INSTM"
                  value="INSTM"
                  v-model="payment.payment_channel"
                  :disabled="!enableInstallment"
                  hidden
                >
                <div class="payment-label-wrap">
                  <div>
                    <!-- <div class="radio-button radio-button-2c2p" /> -->
                    <div
                      class="grid place-items-center border border-gray-80 rounded-full w-[20px] h-[20px]"
                      :class="{'bg-red-500 border-red-500': payment.payment_channel === 'INSTM'}"
                    >
                      <svg width="14" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12.407.03c-.307.01-.6.14-.812.361-2.29 2.294-4.378 4.55-6.59 6.803L2.296 5.03a1.185 1.185 0 0 0-1.662.184 1.182 1.182 0 0 0 .185 1.662l3.545 2.837c.471.375 1.148.337 1.574-.09 2.545-2.55 4.83-5.06 7.327-7.563A1.183 1.183 0 0 0 12.407.03Z"
                          :fill="`${payment.payment_channel === 'INSTM' ? '#FFF' : '#CCC'}`"
                        />
                      </svg>
                    </div>
                    <span>{{ Content.installment2c2p[$i18n.locale] }}</span>
                  </div>
                </div>
              </label>
              <div
                class="payment-form"
                :class="(payment.payment_channel === 'INSTM') ? 'active' : undefined"
              >
                <div
                  class="payment-form-container installment-form pt-0"
                  v-if="enableInstallment"
                >
                  <div class="installment-label">{{ Content.installmentbank[$i18n.locale] }} </div>
                  <div class="flex wrap justify-content-between">
                    <div
                      v-for="(bank, key, index) in installments"
                      :key="key"
                      :index="index"
                      class="installment-input justify-content-between shadow-gray-500 hover:shadow-thick-red-500 rounded pointer-cursor"
                      :class="{'shadow-thick-red-500': index === currentIndex}"
                      v-on:click="checkInstallmentGateway(bank);setCurrentBankIndex(index);setInstallmentBank(bank.abbreviation)"
                    >
                      <div>
                        <label class="font-light" v-if="bank.month.length > 0">
                          <img :src="bank.image_url" />{{ bank.bank_name }}
                        </label>
                      </div>

                      <div
                        class="grid place-items-center border border-gray-80 rounded-full w-[20px] h-[20px] mr-[5px]"
                        :class="{'bg-red-500 border-red-500': currentIndex === index}"
                      >
                        <svg width="14" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M12.407.03c-.307.01-.6.14-.812.361-2.29 2.294-4.378 4.55-6.59 6.803L2.296 5.03a1.185 1.185 0 0 0-1.662.184 1.182 1.182 0 0 0 .185 1.662l3.545 2.837c.471.375 1.148.337 1.574-.09 2.545-2.55 4.83-5.06 7.327-7.563A1.183 1.183 0 0 0 12.407.03Z"
                            :fill="`${currentIndex === index ? '#FFF' : '#CCC'}`"
                          />
                        </svg>
                      </div>

                    </div>
                  </div>
                  <div class="installment-label mt-1">{{ Content.installmentplan[$i18n.locale] }} </div>
                  <div class="flex wrap" v-if="installments[installment.bank]">
                    <div
                      v-for="(plan, key) in installments[installment.bank].month"
                      :key="key"
                      class="installment-month shadow-gray-500 hover:shadow-thick-red-500 rounded justify-content-center pointer-cursor"
                      :class="{'shadow-thick-red-500': plan === installment.plan}"
                      @click="setInstallmentPlan(plan);setPlan(plan)"
                    >
                    <div>
                        <label class="pointer-cursor">
                          {{ plan }} {{ Content.installmentitem.month[$i18n.locale] }}
                        </label>
                    </div>
                    </div>
                  </div>
                  • <span class="font-light">{{ Content.installmentitem.installment[$i18n.locale] }}</span> <span class="font-bold">{{ computePrice(finalPrice / installment.plan) }}.-</span><span class="font-light">{{ Content.installmentitem.permonth[$i18n.locale] }}</span>
                  <br />
                  <div v-if="isCreditOnly">
                    <div class="installment-label">{{ Content.installmentCredit[$i18n.locale] }} </div>
                    <ccw-element
                      ref="instm"
                      @error="onCCWError"
                      :truepoint_id="truepoint_id"
                      :cart="cart"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              v-if="enablePromptpay && !isMnpOneStep"
              class="payment-method payment-method-2c2p"
              :active="payment.payment_channel === 'PROMPTPAY' && !disablePaymentMethod['promptpay']"
              :disabled="noPayment || loadingCoupon || disablePaymentMethod['promptpay'] || isCreditOnly || isPaysmooth"
            >
              <label
                class="payment-label payment-label-2c2p"
                for="payment-PROMPTPAY"
              >
                <input
                  type="radio"
                  name="payment"
                  id="payment-PROMPTPAY"
                  value="PROMPTPAY"
                  v-model="payment.payment_channel"
                  hidden
                >
                <div class="payment-label-wrap">
                  <div>
                    <!-- <div class="radio-button radio-button-2c2p" /> -->
                    <div
                      class="grid place-items-center border border-gray-80 rounded-full w-[20px] h-[20px]"
                      :class="{'bg-red-500 border-red-500': payment.payment_channel === 'PROMPTPAY'}"
                    >
                      <svg width="14" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12.407.03c-.307.01-.6.14-.812.361-2.29 2.294-4.378 4.55-6.59 6.803L2.296 5.03a1.185 1.185 0 0 0-1.662.184 1.182 1.182 0 0 0 .185 1.662l3.545 2.837c.471.375 1.148.337 1.574-.09 2.545-2.55 4.83-5.06 7.327-7.563A1.183 1.183 0 0 0 12.407.03Z"
                          :fill="`${payment.payment_channel === 'PROMPTPAY' ? '#FFF' : '#CCC'}`"
                        />
                      </svg>
                    </div>
                    <span>{{ Content.promptpay[$i18n.locale] }}</span>
                  </div>
                </div>
              </label>
              <div
                class="payment-form"
                :class="(payment.payment_channel === 'PROMPTPAY') ? 'active' : undefined"
              >
                <div class="payment-form-container promptpay pt-0">
                  <div class="payment-info-wrap">
                    <div class="flex align-items-center">
                      <img class="payment-promptpay-icon ml-0" src="/images/icons/PROMPTPAY.png"/>
                      </div>
                      <span class="subtext flex align-items-center">
                          {{ Content.promptpay.title[$i18n.locale] }}
                      </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="payment-method payment-method-2c2p"
              :active="payment.payment_channel === 'COD' && !disableCOD"
              :disabled="disableCOD || loadingCoupon || isCreditOnly || isPaysmooth"
              v-if="!isMnpOneStep"
            >
              <label
                class="payment-label payment-label-2c2p"
                for="payment-COD"
              >
                <input
                  type="radio"
                  name="payment"
                  id="payment-COD"
                  value="COD"
                  v-model="payment.payment_channel"
                  :disabled='disableCOD'
                  hidden
                >
                <div class="payment-label-wrap">
                  <div>
                    <!-- <div class="radio-button radio-button-2c2p" /> -->
                    <div
                      class="grid place-items-center border border-gray-80 rounded-full w-[20px] h-[20px]"
                      :class="{'bg-red-500 border-red-500': payment.payment_channel === 'COD'}"
                    >
                      <svg width="14" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12.407.03c-.307.01-.6.14-.812.361-2.29 2.294-4.378 4.55-6.59 6.803L2.296 5.03a1.185 1.185 0 0 0-1.662.184 1.182 1.182 0 0 0 .185 1.662l3.545 2.837c.471.375 1.148.337 1.574-.09 2.545-2.55 4.83-5.06 7.327-7.563A1.183 1.183 0 0 0 12.407.03Z"
                          :fill="`${payment.payment_channel === 'COD' ? '#FFF' : '#CCC'}`"
                        />
                      </svg>
                    </div>
                    <span>{{ Content.cod_title[$i18n.locale] }}</span>
                  </div>
                </div>
              </label>
              <div
                class="payment-form"
                :class="(payment.payment_channel === 'COD') ? 'active' : undefined"
              >
                <div class="payment-form-container cod">
                  <span class="font-light">
                    {{ Content.cod_desc[$i18n.locale] }}
                  </span>
                </div>
              </div>
            </div>
            <div
              class="payment-method payment-method-2c2p"
              :active="payment.payment_channel === 'PAYLATER' && !disablePaymentMethod['truemoney']"
              :disabled="noPayment || loadingCoupon || disablePaymentMethod['truemoney'] || isPaysmooth"
              v-if="payLater && !isMnpOneStep"
            >
              <label
                class="payment-label payment-label-2c2p"
                for="payment-PAYLATER"
              >
                <input
                  type="radio"
                  name="payment"
                  id="payment-PAYLATER"
                  value="PAYLATER"
                  v-model="payment.payment_channel"
                  hidden
                >
                <!-- <div class="radio-button radio-button-2c2p" /> -->
                <div
                      class="grid place-items-center border border-gray-80 rounded-full w-[20px] h-[20px]"
                      :class="{'bg-red-500 border-red-500': payment.payment_channel === 'PAYLATER'}"
                    >
                      <svg width="14" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12.407.03c-.307.01-.6.14-.812.361-2.29 2.294-4.378 4.55-6.59 6.803L2.296 5.03a1.185 1.185 0 0 0-1.662.184 1.182 1.182 0 0 0 .185 1.662l3.545 2.837c.471.375 1.148.337 1.574-.09 2.545-2.55 4.83-5.06 7.327-7.563A1.183 1.183 0 0 0 12.407.03Z"
                          :fill="`${payment.payment_channel === 'PAYLATER' ? '#FFF' : '#CCC'}`"
                        />
                      </svg>
                    </div>
                <span>{{ Content.payLater[$i18n.locale] }}</span>
              </label>
              <div
                class="payment-form"
                :class="(payment.payment_channel === 'PAYLATER') ? 'active' : undefined"
              >
                <div class="payment-form-container paylater">
                  <div class="image">
                    <img src="/images/icons/pay_later.png" />
                  </div>
                  <div class="content">
                    <div class="title">{{ Content.payLaterTitle[$i18n.locale] }}</div>
                    <ul>
                      <li>{{ Content.payLaterDesc[$i18n.locale] }}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="error-payment"
              v-if="warningInstallmentPlan">
              {{ Content.installmentWarnMsg[$i18n.locale] }}
            </div>
          </template>
          <div v-if="paymentBanner && !Array.isArray(paymentBanner)" class="payment-banner-container payment-banner-small desktop">
            <a :href="paymentBanner[isMobile ? 'banner_large' : 'banner_small'].link" target="_blank" >
              <img :src="paymentBanner[isMobile ? 'banner_large' : 'banner_small'].url" />
            </a>
          </div>
        </div>

        <div class="payment-container summary-container" v-if="!loading">
          <div class="payment-container-label mb-0">{{ Content.summarylabel[$i18n.locale] }}</div>
          <summary-element
            show-burn-point
            :cart="cart"
            :user="user"
            :shipping="shipping"
            :advance-payment="advancePayment"
            :total-discount="totalDiscount"
            :total-price="totalPrice"
            :final-price="computePrice(finalPrice)"
            :redeem-confirmed="redeemConfirmed"
            @onRedeemConfirmed="onRedeemConfirmed"
            @onShowRedeem="onShowRedeem"
          >
            <coupon-element
              :class="'coupon-2c2p'"
              :cart="cart"
              :coupon="payment.coupon_code"
              :payment-channel="payment.payment_channel"
              v-if="!isPaysmooth"
            />
          </summary-element>

          <div v-if="isMnpOneStep" class="mnp-onestep-onhold-msg font-light">
            <span class="red">{{ Content.mnpOnestepMsg1[$i18n.locale].replace('${price}', computePrice(finalPrice)) }}</span> <span>{{ Content.mnpOnestepMsg2[$i18n.locale] }}</span>
          </div>

          <div class="button-container">
            <button-element
              class="button"
              id="confirm_checkout"
              @click="confirmMakePayment"
              :disabled="loadingCoupon || checkPaymentDisabled"
            >{{ Content.checkout[$i18n.locale] }}</button-element>
          </div>

        </div>
      </div>
      <div v-if="paymentBanner && !Array.isArray(paymentBanner)" class="payment-banner-container payment-banner-small mobile">
        <a :href="paymentBanner[isMobile ? 'banner_large' : 'banner_small'].link" target="_blank" >
          <img :src="paymentBanner[isMobile ? 'banner_large' : 'banner_small'].url" />
        </a>
      </div>
      <div class="sticky-container" v-if="!loading">
        <div class="price-container">
          <div class="price-label">{{ Content.total_price[$i18n.locale] }}</div>
          <div
            class="price-value"
          >{{ computePrice(finalPrice) }}.-</div>
        </div>

        <div v-if="isMnpOneStep" class="mnp-onestep-onhold-msg">
          <span class="red">{{ Content.mnpOnestepMsg1[$i18n.locale].replace('${price}', computePrice(finalPrice)) }}</span>
          <span>{{ Content.mnpOnestepMsg2[$i18n.locale] }}</span>
        </div>

        <button-element
          class="button"
          id="confirm_checkout"
          :disabled="loadingCoupon || checkPaymentDisabled"
          @click="confirmMakePayment"
        >{{ Content.checkout[$i18n.locale] }}</button-element>
      </div>
    </div>
  </div>
</template>

<script>
  import Button from '@components/button'
  import Cart from '@components/cart'
  import Loading from '@components/loading'
  import Dialog from '@components/dialog'
  import Summary from '@components/summary'
  import Content from './content.json'
  import CCW from './ccw'
  import Coupon from './coupon'
  import TermsCreditPayment from '@components/terms-credit-payment'
  import popup from './popup.vue'
  import {
    computeBalance,
    computePrice,
    validateNumber,
    computeGtagProducts,
    fetchCampaignWeomni,
    showPayLater
  } from '@utils/common'

  import {
    CREATE_PLACEORDER,
    CREATE_PRE_EKYC_PLACEORDER,
    CREATE_MNP_PLACEORDER,
    UPLOAD_EKYC,
    UPLOAD_EKYC_VHORA,
    GET_PAYMENT_METHODS,
    SET_PLACE_ORDER,
    SET_MNP,
    SET_CREDIT_CARD_DATA
  } from '@store/actions.type'

  import {
    loggerAddon
  } from '@utils/addon'

  export default {
    components: {
      'button-element': Button,
      'cart-element': Cart,
      'loading-element': Loading,
      'dialog-element': Dialog,
      'ccw-element': CCW,
      'coupon-element': Coupon,
      'summary-element': Summary,
      'terms-credit-payment': TermsCreditPayment,
      'truemoney-popup-element': popup
    },
    props: {
      cart: Object,
      config: Object,
      payment: Object
    },
    data: () => ({
      loading: true,
      loadingCoupon: false,
      isProcessing: false,
      errors: [],
      address: {},
      sevenStore: {},
      truepoint_id: '',
      enableInstallment: true,
      noPayment: false,
      disablePaynext: false,
      disableEw: false,
      installments: {},
      installment: {
        bank: '',
        plan: ''
      },
      wemallPaymentChannels: null,
      ewToggle: false,
      paynextToggle: false,
      omiseToggle: false,
      weomniToggle: false,
      installmentsIntersect: [],
      storePaymentMethod: [],
      disablePaymentMethod: {
        truemoney: false,
        card: false,
        installment: true,
        promptpay: true,
        payNext: false
      },
      showRedeem: false,
      redeemConfirmed: false,
      Content,
      warningInstallmentPlan: false,
      historyInstallment: {},
      termData: {
        name: '',
        brand: '',
        cardNumber: '',
        expire: '',
        cardName: '',
        orderID: '',
        orderDate: '',
        mnpBundling: '',
        newBundling: ''
      },
      cardData: {
        secureKey: '',
        cardNo: '',
        cardExpire: '',
        cardHolder: ''
      },
      isMobile: false,
      errorCode: '',
      currentIndex: 0,
      currentInstallmentMonthIndex: 0,
      currentPlan: 0,
      cartActive: true,
      addressActive: true,
      callPopup: false
    }),
    computed: {
      user () {
        return this.$store.state.auth.profile.data
      },
      couponData () {
        return this.$store.state.cart.cart.data.coupon_data_from_bff
      },
      couponDiscount () {
        return this.couponData?.total_coupon_discount_amount || 0
      },
      hasError () {
        const error = Object.keys(this.cart).map((key) => this.cart[key].error)
        return error.includes(true)
      },
      hasTrueCard () {
        const card = Object.keys(this.cart).filter((key) => this.cart[key].product_type === 'truecard')
        return card.length > 0 && !this.user
      },
      points () {
        const cart = this.cart[Object.keys(this.cart)[0]]
        if (!cart.points) return null
        cart.points.price = cart.price
        return cart.points
      },
      totalDiscount () {
        return Object.keys(this.cart).reduce((result, item) => {
          return result + parseFloat(this.cart[item].discount)
        }, 0)
      },
      totalPrice () {
        let price = Object.keys(this.cart).reduce((result, item) => {
          if (this.cart[item].product_type === 'advancepayment') return result
          return result + this.cart[item].price * this.cart[item].quantity
        }, 0)
        if (this.redeemConfirmed) {
          price = price - this.points.discount
        }
        return price
      },
      advancePayment () {
        return this.$store.state.cart.cart.data.advance_payment || 0
      },
      shipping () {
        return this.$store.state.cart.cart.data.shipping_fee
      },
      eCouponDiscount () {
        return Object.keys(this.cart).reduce((total, key) => {
          return total + parseFloat((this.cart[key]?.privilege?.ecoupon_discount || 0))
        }, 0)
      },
      finalPrice () {
        return this.shipping + this.totalPrice - this.totalDiscount + this.advancePayment - this.couponDiscount - this.eCouponDiscount
      },
      isMnp () {
        return Object.keys(this.cart).find((e) => this.cart[e].product_type === 'mnp')
      },
      isMnpOneStep () {
        return Object.keys(this.cart).find((e) => this.cart[e].is_mnp1step)
      },
      isMnpSharePlan () {
        return Object.keys(this.cart).find((e) => this.cart[e].product_type === 'device_mnp_bundle')
      },
      isDeviceBundleNewCustomer () {
        return Object.keys(this.cart).find((e) => this.cart[e].product_type === 'device_bundle_new_customer')
      },
      isPreToPost () {
        return Object.keys(this.cart).find((e) => this.cart[e].product_type === 'pre_to_post')
      },
      isDrLucky () {
        return Object.keys(this.cart).find((e) => this.cart[e]?.postpaid?.meta?.campaign_type === 'vhora')
      },
      isCreditOnly () {
        return this.$store.state.cart.cart.data?.credit_card_only
      },
      skipEkyc () {
        const skip = window.no_ekyc_device_bundle
        return (this.isDeviceBundleNewCustomer || this.isPreToPost || this.isMnpOneStep || this.isMnpSharePlan) && skip
      },
      placeorderAction () {
        if (this.skipEkyc) {
          const ekycLog = {
            event: 'Ekyc',
            status: 'verify',
            productId: '',
            matcode: '',
            mobileNumber: this.$route.params.number
          }
          Object.keys(this.cart).forEach(item => {
            if (this.cart[item].product_type === 'device_bundle_new_customer') {
              ekycLog.productId = this.cart[item].id
              ekycLog.matcode = this.cart[item].sku
            } else if (this.cart[item].product_type === 'sim') {
              ekycLog.mobileNumber = this.cart[item].sim_meta[0].number
            }
          })

          loggerAddon(ekycLog)
        }
        return this.skipEkyc ? CREATE_PRE_EKYC_PLACEORDER : this.isMnp ? CREATE_MNP_PLACEORDER : CREATE_PLACEORDER
      },
      deliveryAddressPhoneNumber () {
        const e = this.address.delivery_address.phone
        const regex = e.length === 10 ? /(\d{3})(\d{3})(\d{4})/ : /(\d{2})(\d{3})(\d{4})/
        return e.replace(regex, '$1-$2-$3')
      },
      deliveryAddress1 () {
        const add = this.address.delivery_address
        const address2 = (add.address2 === '-' || !add.address2) ? '' : ` ${add.address2}`
        return `${add.address1}${address2}, ${add.district}, ${add.city},`
      },
      deliveryAddress2 () {
        const add = this.address.delivery_address
        return `${add.province} ${add.postcode}, ${this.Content.thailand[this.$i18n.locale]}`
      },
      disableCOD () {
        const e = this.$store.state.cart.cart.data
        const exclude = e.payment_exclude
        const range = e.store_payment_channel_redis_bff?.COD
        if (!exclude || !range) return true
        const validRange = this.finalPrice >= range.min && this.totalPrice <= range.max
        return exclude.includes('COD') || !validRange
      },
      checkPaymentDisabled () {
        return (
          (this.disableCOD && this.payment.payment_channel === 'COD') ||
          (this.disablePaymentMethod.installment && this.payment.payment_channel === 'INSTM') ||
          (this.disablePaymentMethod.truemoney && this.payment.payment_channel === 'EW') ||
          (this.disablePaymentMethod.payNext && this.payment.payment_channel === 'PAYNEXT') ||
          (this.disablePaymentMethod.card && this.payment.payment_channel === 'CCW') ||
          (this.disablePaymentMethod.promptpay && this.payment.payment_channel === 'PROMPTPAY')
        )
      },
      payLater () {
        return showPayLater(this.user)
      },
      enablePromptpay () {
        return this.omiseToggle && this.promptpayToggle
      },
      enablePaynext () {
        return this.paynextToggle
      },
      enableEw () {
        return this.ewToggle
      },
      enable2C2P () {
        return window.is_2c2p_v2_pattern
      },
      banksInstallment2c2p () {
        return this.$store.state.cart.cart.data.installment_2c2p
      },
      isPaysmooth () {
        return this.$store.state.cart.cart.data.is_cart_pay_smooth
      },
      paysmoothData () {
        return JSON.parse(localStorage.getItem('paysmooth-data'))
      },
      paymentBanner () {
        return this.$store.state.cart.cart.data.payment_banner
      },
      ccw2C2P () {
        return this.$store.state.cart.cart.data.ccw_2c2p
      }
    },
    watch: {
      installment: {
        deep: true,
        handler (data) {
          if (Object.keys(this.historyInstallment).length > 0 &&
            (this.historyInstallment.bank !== data.bank ||
              this.historyInstallment.plan !== data.plan)) {
            this.warningInstallmentPlan = false
          }

          const plan = this.installments[data.bank].month
          if (!plan.includes(data.plan)) data.plan = plan[0]
        }
      },
      'payment.payment_channel' () {
        if (!this.payment.coupon_code) return
        this.warningInstallmentPlan = false
        this.applyCoupon(this.payment.coupon_code)
      },
      'warningInstallmentPlan' () {
        if (this.payment.coupon_code && this.installments[this.installment.bank] &&
          this.installments[this.installment.bank].hasOwnProperty('gateway') && this.warningInstallmentPlan &&
          (this.payment.gateway !== this.installments[this.installment.bank].gateway)) {
          this.applyCoupon(this.payment.coupon_code)
        }
      },
      isMobile (value) {
        if (!value) {
          this.cartActive = true
          this.addressActive = true
        }
      }
    },
    async mounted () {
      // Track screen size
      this.isMobile = screen.width <= 1000
      this.$nextTick(() => {
        window.addEventListener('resize', () => {
          this.isMobile = screen.width <= 1000
        })
      })
      window.addEventListener('beforeunload', (event) => {
        if (window.loadingPlaceorder) event.returnValue = 'Are you sure you want to leave?'
      })
      this.errorCode = this.$route.query.error
      if (this.errorCode in Content.errorCode) {
        this.errors = [Content.errorCode[this.errorCode]]
      }
      const agreement = window.localStorage.getItem('agreement')
      const address = window.localStorage.getItem('address')
      if (!this.cart || Object.keys(this.cart).length < 1 || this.hasError || this.hasTrueCard) {
        this.$router.push('/cart')
        return
      }

      if (this.$store.state.cart.cart.data.record[0].store.shipping_method.PICKUP) {
        if (address) {
          const sevenStore = JSON.parse(address).sevenstore_address
          if (sevenStore) {
            this.sevenStore = sevenStore
          } else {
            this.$router.push('/pickup')
            return
          }
        } else {
          this.$router.push('/pickup')
          return
        }
      } else {
        if (!address || !agreement) {
          this.$router.push('/address')
          return
        }
      }

      this.address = JSON.parse(address)
      this.generateInstallments(this.cart)
      this.autofillCoupon()
      this.noPayment = this.finalPrice === 0
      if (this.noPayment) this.payment.payment_channel = 'NOPAYMENT'
      if (this.isMnpOneStep) this.payment.payment_channel = 'CCW'
      this.loading = false
      this.omiseToggle = this.$store.state.cart.cart.data.omise_toggle
      this.weomniToggle = this.$store.state.cart.cart.data.weomni_toggle
      this.storePaymentMethod = this.$store.state.cart.cart.data.store_payment_methods
      this.promptpayToggle = this.$store.state.cart.cart.data.promptpay_toggle
      this.paynextToggle = this.$store.state.cart.cart.data.paynext_toggle
      this.disablePaynext = this.$store.state.cart.cart.data.paynext_disable
      this.ewToggle = this.$store.state.cart.cart.data.ew_toggle
      this.disableEw = this.$store.state.cart.cart.data.ew_disable

      if (this.isCreditOnly) this.payment.payment_channel = 'CCW'

      if (this.isPaysmooth) {
        this.payment.payment_channel = 'TMNPAYSMOOTH'
        if (!this.paysmoothData) {
          localStorage.removeItem('cart-id')
          this.$router.push('/cart')
        }
      }

      // [workaround] if vhora case = always allow card, true money
      let vhoraCart = false

      if (this.cart[Object.keys(this.cart)[0]].sim_meta && this.cart[Object.keys(this.cart)[0]].sim_meta.length > 0) {
        vhoraCart = this.cart[Object.keys(this.cart)[0]].sim_meta[0]?.campaign_type === 'vhora'
      }

      if (!vhoraCart) {
        this.disablePayment()
      }
      const installments = window.localStorage.getItem('installments')
      if (this.enableInstallment && !this.disablePaymentMethod.installment && (this.banksInstallment2c2p || !this.banksInstallment2c2p) && (this.enable2C2P || !this.enable2C2P) && installments) this.payment.payment_channel = 'INSTM'

      if (this.totalPrice > 150000) {
        this.errors = [
          {
            th: 'เนื่องจากสินค้าในตะกร้าเกิน 150,000 บาท',
            en: 'The total price exceeds 150,000 Baht.'
          }
        ]
      }
    },
    methods: {
      computeBalance,
      computePrice,
      validateNumber,
      onShowRedeem (value) {
        this.showRedeem = value
      },
      onRedeemConfirmed (value) {
        this.redeemConfirmed = value
      },
      onCCWError (errors) {
        this.errors = [...this.errors, ...errors]
        this.loading = false
        this.isProcessing = false
        window.loadingPlaceorder = false
      },
      setInvalidForm (e, valid) {
        valid ? e.removeAttribute('invalid') : e.setAttribute('invalid', '')
      },
      validTruePoint (e) {
        const valid = /^(\d{13}|)$/.test(e.target.value)
        this.setInvalidForm(e.target, valid)
      },
      generateInstallments (carts, checkSelectedInstallment) {
        const products = Object.keys(carts).map(cart => {
          if (carts[cart].product_type === 'advancepayment') return
          if (carts[cart].product_type === 'entertainment') return
          if (!carts[cart].installments) {
            this.enableInstallment = false
            return
          }
          const data = {}
          carts[cart].installments.forEach(item => {
            data[item.abbreviation] = item
          })
          return data
        }).filter(item => item)
        if (!this.enableInstallment) return
        const bankLists = products.map(key => Object.keys(key))
        const filteredBank = this.computeIntersection(bankLists)
        if (filteredBank.length < 1) {
          this.enableInstallment = false
          return
        }
        Object.keys(products).forEach(key => {
          Object.keys(products[key]).forEach(subkey => {
            if (!filteredBank.includes(subkey)) {
              delete products[key][subkey]
            }
          })
        })
        if (checkSelectedInstallment) this.installments = {}
        filteredBank.forEach(bank => {
          const months = products.map(item => {
            return item[bank].month
          })
          const month = this.computeIntersection(months)
          if (month.length < 1) {
            this.enableInstallment = false
            return
          }
          this.installments[bank] = products[0][bank]
          this.installments[bank].month = month
        })

        if (this.enableInstallment && !checkSelectedInstallment) {
          this.setSelectedDefaultInstallment()
        }
      },
      setSelectedDefaultInstallment () {
        const selectedData = this.installments[
          Object.keys(this.installments)[0]
        ]
        this.installment = {
          bank: selectedData.abbreviation,
          plan: selectedData.month[0]
        }
      },
      computeIntersection (lists) {
        const result = []
        if (arguments.length === 1) {
          lists = arguments[0]
        } else {
          lists = arguments
        }
        for (let i = 0; i < lists.length; i++) {
          const currentList = lists[i]
          for (let y = 0; y < currentList.length; y++) {
            const currentValue = currentList[y]
            if (result.indexOf(currentValue) === -1) {
              if (
                lists.filter((obj) => {
                  return obj.indexOf(currentValue) === -1
                }).length === 0
              ) {
                result.push(currentValue)
              }
            }
          }
        }
        return result
      },
      disablePayment (applyCoupon) {
        const payment = this.storePaymentMethod
        let defaultDisabled = false

        if (!this.omiseToggle && !this.weomniToggle) {
          return Object.keys(this.disablePaymentMethod).map(method => {
            this.disablePaymentMethod[method] = false
          })
        }

        if (!payment || Object.keys(payment).length <= 0) {
          defaultDisabled = true
        }

        if (Object.prototype.hasOwnProperty.call(payment, 'installment')) {
          this.generateInstallments(this.cart, true)

          payment.installment.map(value => {
            let bankSplit = value.name.replace('installment_', '')
            bankSplit = bankSplit.replace('_', '')

            if (this.installments[bankSplit]) {
              this.$delete(this.installmentsIntersect, bankSplit)
              this.installmentsIntersect[bankSplit] = {
                months: value.installment_terms
              }
              this.installments[bankSplit].gateway = value.gateway
            }
          })

          Object.keys(this.installments).map(bank => {
            this.installments[bank].month = this.installments[bank].month.filter(
              m => {
                if (this.installmentsIntersect[bank]) {
                  return this.installmentsIntersect[bank].months.includes(parseInt(m))
                }
              }
            )
          })

          if (applyCoupon) this.computeSelectedInstallment()
        }

        Object.keys(this.disablePaymentMethod).map(method => {
          let disabled = defaultDisabled

          if (!Object.prototype.hasOwnProperty.call(payment, method)) {
            disabled = true
          }

          if (method === 'payNext') {
            if (payment.payNext?.disable !== undefined) {
              this.disablePaynext = payment.payNext?.disable
            }
            disabled = this.disablePaynext
          }

          // This will override omise config with 2c2p config from wemall api ONLY IF 2C2P toggle state IS ENABLED
          if (method === 'truemoney' && this.ewToggle) {
            if (payment.truemoney?.disable !== undefined) {
              this.disableEw = payment.truemoney?.disable
            }
            disabled = this.disableEw
          }

          this.disablePaymentMethod[method] = disabled
        })
      },
      async computeSelectedInstallment () {
        await this.checkInstallmentBankAvailable()
        const selectedInstm = { ...this.installment }
        await this.setSelectedDefaultInstallment()
        const selectedBank = { ...this.installments[selectedInstm.bank] }

        if (this.installments[selectedInstm.bank] && selectedBank.month.length > 0) {
          this.installment.bank = selectedInstm.bank
          const selectedPlan = selectedBank.month.includes(selectedInstm.plan)

          if (!selectedPlan) {
            this.installment.plan = selectedBank.month[0]
            this.warningInstallmentPlan = true
            this.historyInstallment = { ...this.installment }
          } else {
            this.installment.plan = selectedInstm.plan
            this.warningInstallmentPlan = false
          }
        } else {
          this.historyInstallment = { ...this.installment }
          this.warningInstallmentPlan = true
          await this.setSelectedDefaultInstallment()
        }
      },
      async checkInstallmentBankAvailable () {
        if (Object.prototype.hasOwnProperty.call(this.storePaymentMethod, 'installment')) {
          const installmentAvailable = []
          this.storePaymentMethod.installment.map(value => {
            const bank = value.name.replace('installment_', '').replace('_', '')
            installmentAvailable.push(bank)
          })
          Object.keys(this.installments).forEach((key) => {
            if (!installmentAvailable.includes(key)) {
              delete this.installments[key]
            }
          })
        }
      },
      getPaymentMethods (merchantId, finalPrice) {
        return this.$store.dispatch(GET_PAYMENT_METHODS, {
          merchant_id: merchantId,
          amount: finalPrice
        })
      },
      async applyCoupon (e, gateway) {
        if (this.enable2C2P && this.payment.payment_channel === 'INSTM') {
          this.payment.gateway = '2c2p'
        } else if (this.installments[this.installment.bank] &&
          this.installments[this.installment.bank].hasOwnProperty('gateway') &&
          this.payment.payment_channel === 'INSTM') {
          this.payment.gateway = this.installments[this.installment.bank].gateway
          if (gateway) this.payment.gateway = gateway
        }

        this.payment.coupon_code = e
        this.loadingCoupon = true
        await this.$parent.fetchCart()
        this.loadingCoupon = false

        // check no payment after apply coupon
        this.noPayment = this.finalPrice === 0
        if (this.noPayment) this.payment.payment_channel = 'NOPAYMENT'

        if (!this.noPayment && this.payment.payment_channel === 'NOPAYMENT') this.payment.payment_channel = 'EW'

        if (this.installmentsIntersect) {
          const record = this.$store.state.cart.cart.data.record
          const paymentMethod = await this.getPaymentMethods(record[0].store.id, this.finalPrice.toFixed(2))

          if (paymentMethod) {
            this.storePaymentMethod = JSON.parse(JSON.stringify(paymentMethod))
            this.disablePayment(true)
          }
        }
      },
      autofillCoupon () {
        if (this.$store.state.cart.cart.data.token_coupon) {
          this.payment.coupon_code = this.$store.state.cart.cart.data.token_coupon
        }
      },
      async deleteCart (data) {
        await this.$parent.deleteCart(data)
      },
      confirmMakePayment () {
        if (this.showRedeem && !this.redeemConfirmed) {
          this.$refs.confirmPaymentDialog.open()
        } else if (this.skipEkyc && !this.isCreditOnly) {
          this.$refs.confirmEkycDialog.open()
        } else if (this.payment.payment_channel === 'EW') {
          this.callPopup = true
        } else {
          this.makePayment()
        }
      },
      setFormatEkyc (ekyc, meta = {}, type) {
        let formatEkyc = {}
        let formatEkycTempContentData = {}

        if (type.toUpperCase() === 'CAPTURE') {
          formatEkyc = {
            'input-key': ekyc.id_number,
            'content-base64': ekyc.face_recog_cust_capture,
            'content-type': ekyc.face_recog_cust_capture_filename.split('.').pop(),
            seq: '1',
            'form-type': 'FACE_RECOG_CUST_CAPTURE',
            filename: ekyc.face_recog_cust_capture_filename
          }
        } else {
          formatEkyc = {
            'input-key': ekyc.id_number,
            'content-base64': ekyc['face-recog-cust-certificate'],
            'content-type': ekyc['face-recog-cust-certificate-filename'].split('.').pop(),
            seq: '1',
            'form-type': 'FACE_RECOG_CUST_CERTIFICATE',
            filename: ekyc['face-recog-cust-certificate-filename']
          }
        }

        if (ekyc.channel === 'trueagent') {
          formatEkycTempContentData = {
            'temp-content-data': {
              ...{
                DOCUMENT_TYPE: '00001',
                ORDER_KEY: 'MSISDN',
                MSISDN: meta.number
              },
              ...ekyc['temp-content-data']
            }
          }
        }

        return { ...formatEkyc, ...formatEkycTempContentData }
      },
      ccoOpenEkycDialog () {
        this.$refs.confirmCreditPaymentDialog.close()
        this.$refs.confirmEkycDialog.open()
      },
      ccoPlaceOrder () {
        this.$refs.confirmEkycDialog.close()
        this.$refs.confirmCreditPaymentDialog.close()
        this.loading = true
        if (this.payment.payment_channel === 'INSTM') {
          const validTruePointId = /^(\d{13}|)$/.test(this.truepoint_id)
          if (!validTruePointId) {
            this.errors = [
              {
                th: 'True Point ID ไม่ถูกต้อง.',
                en: 'Invalid True Point ID.'
              }
            ]
            this.loading = false
            this.isProcessing = false
            window.loadingPlaceorder = false
            return
          }
          if (this.enable2C2P && this.payment.payment_channel === 'INSTM') {
            this.ccoData.data.payment_detail = {
              method: 'P2C2PINSTM',
              gateway: '2c2p'
            }
            this.ccoData.data.installment_detail = {
              payment_processor: 'tos_2c2p',
              card_type: 'creditcard',
              period: ''
            }
          } else {
            this.ccoData.data.payment_detail = {
              method: this.payment.payment_channel
            }
            this.ccoData.data.installment_detail = {
              payment_processor: this.installment.bank,
              card_type: 'creditcard',
              period: this.installment.plan
            }
          }
          if (this.truepoint_id) this.ccoData.data.point_idcard = this.truepoint_id
        }
        this.$store
          .dispatch(this.placeorderAction, this.ccoData.data)
          .then(async (data) => {
            if (data.code === 200) {
              // send new api
              if (this.skipEkyc && data.ekyc_hash) localStorage.setItem('ekyc_hash', data.ekyc_hash)
              this.cardData.secure_key = data.secureKey
              this.$store.dispatch(SET_CREDIT_CARD_DATA, this.cardData)
              window.loadingPlaceorder = false
              window.location.href = data.redirectUrl
            } else {
              this.errors.push({
                th:
                  'มีปัญหาการชำระเงินจากการใส่ข้อมูลไม่ถูกต้อง โปรดตรวจสอบข้อมูลอีกครั้ง',
                en:
                  'One or more fields contain have an error. Please check and try again.'
              })
              this.loading = false
              this.isProcessing = false
              window.loadingPlaceorder = false
            }
          })
          .catch(error => {
            this.loading = false
            this.isProcessing = false
            window.loadingPlaceorder = false
            const message = error.message ? error.message : this.Content.error
            this.errors.push(message)
          })
      },
      cancelCreditPayment () {
        this.$refs.confirmCreditPaymentDialog.close()
        this.loading = false
      },
      async computeEkyc (ekyc, meta = {}, type = 'postpaid') {
        return await Promise.all([
          this.uploadEkyc(this.setFormatEkyc(ekyc, meta, 'CAPTURE'), type),
          this.uploadEkyc(this.setFormatEkyc(ekyc, meta, 'CERTIFICATE'), type)
        ])
      },
      async uploadEkyc (dataEkyc, type = 'postpaid') {
        await this.$store.dispatch(type === 'vhora' ? UPLOAD_EKYC_VHORA : UPLOAD_EKYC, dataEkyc)
      },
      async makePayment () {
        try {
          this.$refs.confirmPaymentDialog.close()
          this.$refs.confirmEkycDialog.close()
          this.loading = true
          this.isProcessing = true
          window.loadingPlaceorder = true
          this.errors = []
          window.scrollTo(0, 0)
          const delivery = this.address.delivery_address
          const data = JSON.parse(
            JSON.stringify({
              oneTimeCardToken: '',
              delivery_address: this.address.delivery_address,
              billing_address: this.address.billing_address,
              cart_id: window.localStorage.getItem('cart-id'),
              customer_detail: {
                first_name: delivery.firstname,
                last_name: delivery.lastname,
                email: delivery.email,
                telephone: delivery.phone,
                fax: '',
                customer_note: ''
              },
              products: Object.keys(this.cart).reduce((result, item) => {
                if (this.cart[item].product_type === 'advancepayment') return result
                if (this.cart[item].product_type === 'entertainment') return result
                const isDeviceBundle = this.cart[item].product_type === 'sim' && 'advance_payment' in this.cart[item] && 'contract' in this.cart[item]
                const isPhysicalSimPrepaid = this.cart[item].sim_meta

                // add meta for ecoupon case
                const eCouponMeta = this.cart[item]?.privilege?.ecoupon_serial ? { campaign_ecoupon: this.cart[item]?.privilege?.ecoupon_serial } : {}

                const meta = JSON.stringify({ ...this.cart[item].meta, ...eCouponMeta })
                if (isDeviceBundle && isPhysicalSimPrepaid) {
                  const simMeta = JSON.parse(JSON.stringify(this.cart[item].sim_meta))
                  simMeta[0].advance_payment = this.cart[item].advance_payment
                  delete simMeta[0].ekyc
                  return [...result, {
                    product_id: this.cart[item].id,
                    inventory_id: this.cart[item].inventory_id,
                    quantity: this.cart[item].quantity,
                    store_id: this.cart[item].store_id,
                    sim_meta: simMeta,
                    meta
                  }]
                }

                return [...result, {
                  product_id: this.cart[item].id,
                  inventory_id: this.cart[item].inventory_id,
                  quantity: this.cart[item].quantity,
                  store_id: this.cart[item].store_id,
                  meta
                }]
              }, [])
            })
          )

          if (data.products[0].sim_meta && !data.products[0].sim_meta[0].number) {
            delete data.products[0].sim_meta
          }

          if (this.skipEkyc) {
            const ekycHash = localStorage.getItem('ekyc_hash')
            if (ekycHash) data.ekyc_hash = ekycHash
            if (this.isMnp) data.is_mnp = true
            if (this.isDeviceBundleNewCustomer) data.is_new_customer = true
          }
          const campaignWeomni = fetchCampaignWeomni()
          if (campaignWeomni) data.campaign_weomni = campaignWeomni

          if (!data.billing_address.address2) data.billing_address.address2 = '-'
          if (!data.delivery_address.address2) data.delivery_address.address2 = '-'

          if (this.redeemConfirmed) data.point = true
          if (this.isMnp) {
            data.reference_product_id = localStorage.getItem('mnp-reference-product-id')
            data.security_key = localStorage.getItem('mnp-security-key')
            data.delivery_address.moo = '-'
          }

          if (this.couponData?.is_pass) data.coupon_code = this.payment.coupon_code

          for (const id in this.cart) {
            const type = this.cart[id].product_type
            const isPostpaid = ['sim', 'postpaid', 'vlearn', 'family_black_truecard'].includes(type)
            const isPrepaidList = (this.cart[id].sim_meta && this.cart[id].sim_meta[0] && this.cart[id].sim_meta[0].sim_type === 'prepaid') || this.config.prepaid_search.includes(this.cart[id].id)
            const isDeviceBundle = this.cart[id].product_type === 'sim' && 'advance_payment' in this.cart[id] && 'contract' in this.cart[id]
            const isPhysicalSimPrepaid = this.cart[id].sim_meta && this.cart[id].postpaid.meta

            if (this.isCreditOnly) {
              if (this.isMnp && this.cart[id].product_type === 'mnp') {
                const meta = JSON.parse(JSON.stringify(this.cart[id].sim_meta))
                data.sim_meta_cco = meta
              } else if (!this.isMnp && isPostpaid) {
                const meta = JSON.parse(JSON.stringify(this.cart[id].sim_meta))
                data.sim_meta_cco = meta
              }
            }

            if (isPhysicalSimPrepaid) {
              if (isPrepaidList) {
                const meta = JSON.parse(JSON.stringify(this.cart[id].sim_meta))
                data.sim_meta = meta
              } else if ((isPostpaid || isDeviceBundle)) {
                const meta = JSON.parse(JSON.stringify(this.cart[id].postpaid.meta))
                const noEkyc = Object.values(meta.ekyc).filter(m => m !== '').length === 0
                if (!noEkyc && !this.skipEkyc) {
                  await this.computeEkyc(meta.ekyc, meta, this.isDrLucky ? 'vhora' : 'postpaid')
                }
                if (type === 'vlearn') {
                  await this.$store.dispatch(UPLOAD_EKYC, {
                    'input-key': meta.ekyc.id_number,
                    'content-base64': meta.ekyc.vlearn,
                    'content-type': meta.ekyc.vlearn_filename.split('.').pop(),
                    seq: '1',
                    'form-type': 'DOC_APP_REQUIRED',
                    filename: meta.ekyc.vlearn_filename,
                    'temp-content-data': {
                      DOCUMENT_TYPE: '00001',
                      ORDER_KEY: 'MSISDN',
                      MSISDN: meta.number
                    }
                  })
                }
                delete meta.ekyc
                if (!isDeviceBundle) data.sim_meta_postpaid = [meta]
              }
            }

            if (type === 'happy_digital') {
              for (const p in this.config.verify) {
                const product = this.config.verify[p]
                if (product.id === this.cart[id].id) {
                  if (product.type === 'postpaid') {
                    const meta = JSON.parse(JSON.stringify(this.cart[id].postpaid.meta))
                    await this.computeEkyc(meta.ekyc, meta)
                    delete meta.ekyc
                    data.sim_meta = [meta]
                  }
                }
              }
            }
            if (this.cart[id].privilege) {
              data.privilege = [...data.privilege || [], this.cart[id].privilege]
            }
          }

          const invoice = window.localStorage.getItem('invoice')
          const customer = window.localStorage.getItem('account_type')
          window.dataLayer = window.dataLayer || []
          window.dataLayer.push({
            event: 'ecommerce_event',
            event_category: 'order_summary',
            event_action: 'checkout_step2',
            event_label: Object.keys(this.cart).map((id) => this.cart[id].title).join('_'),
            request_tax_invoice: invoice === 'true' ? 'yes' : 'no',
            customer_type: (invoice === 'true') ? (customer || 'individual') : '',
            ecommerce: {
              currencyCode: 'THB',
              checkout: {
                actionField: {
                  step: 2,
                  option: this.payment.payment_channel
                },
                products: computeGtagProducts(this.cart)
              }
            }
          })

          // Add clm_upsell if exist from CLM Verify
          const clmUpsell = localStorage.getItem('clm-upsell')
          if (clmUpsell) {
            data.clm_upsell = clmUpsell
          }

          if (this.isDrLucky) {
            data.ctoken = window.localStorage.getItem('truestore-berfuntong-ctoken')
            data.vhora_image = window.localStorage.getItem('truestore-berfuntong-vhora-image')
          }

          const ccOnly = this.isCreditOnly
          if (ccOnly) {
            const ref = this.payment.payment_channel === 'CCW' ? this.$refs.ccw : this.$refs.instm
            this.ccoData = await ref.submit(data, this.placeorderAction, ccOnly)
            if (this.ccoData.omiseData.card.financing !== 'credit') {
              this.errors.push({
                th:
                  'มีปัญหาการชำระเงินจากการใส่ข้อมูลไม่ถูกต้อง โปรดตรวจสอบข้อมูลอีกครั้ง',
                en:
                  'One or more fields contain have an error. Please check and try again.'
              })
              this.$refs.errorCreditOnlyDialog.open()
              this.loading = false
              this.isProcessing = false
              window.loadingPlaceorder = false
              return
            }
            if (this.skipEkyc && this.ccoData.ekyc_hash) localStorage.setItem('ekyc_hash', this.ccoData.ekyc_hash)
            const date = new Date()
            const expirationMonth = `${this.ccoData.omiseData.card.expiration_month}`.padStart(2, '0')
            let name = `${this.address.delivery_address.firstname} ${this.address.delivery_address.lastname}`
            let orderID = data?.privilege[0]?.privilegeUid
            if (this.ccoData.data.sim_meta_cco) {
              name = `${this.ccoData.data.sim_meta_cco[0].user_information.first_name} ${this.ccoData.data.sim_meta_cco[0].user_information.last_name}`
              orderID = this.ccoData.data.sim_meta_cco[0].number
            }
            this.termData = {
              name,
              brand: this.ccoData.omiseData.card.brand,
              cardNumber: ref.ccw_data.cardnumber.join(''),
              expire: `${expirationMonth}/${this.ccoData.omiseData.card.expiration_year}`,
              cardName: this.ccoData.omiseData.card.name,
              orderDate: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
              orderID
            }
            this.cardData = {
              card_no: ref.ccw_data.cardnumber.join(''),
              card_expire: `${expirationMonth}/${this.ccoData.omiseData.card.expiration_year}`,
              card_holder: this.ccoData.omiseData.card.name
            }
            this.$refs.confirmCreditPaymentDialog.open()
            return
          }

          const afcData = JSON.parse(window.localStorage.getItem('truestore-afc'))
          if (afcData && afcData.timestamp_expired > Date.now()) {
            data.afc = afcData.afc
          }

          if (this.payment.payment_channel === 'CCW') {
            this.$refs.ccw.submit(data, this.placeorderAction)
          } else if (this.payment.payment_channel === 'PAYLATER') {
            const validTruePointId = /^(\d{13}|)$/.test(this.truepoint_id)
            if (validTruePointId) {
              data.payment_detail = {
                method: 'EW'
              }
              data.pay_later = 1
              if (this.truepoint_id) data.point_idcard = this.truepoint_id
              this.$store.dispatch(SET_PLACE_ORDER, data)
              this.$store.dispatch(SET_MNP, this.isMnp)
              window.loadingPlaceorder = false
              this.$router.push('paylater')
            } else {
              this.errors = [
                {
                  th: 'True Point ID ไม่ถูกต้อง.',
                  en: 'Invalid True Point ID.'
                }
              ]
              this.loading = false
              this.isProcessing = false
              window.loadingPlaceorder = false
            }
          } else if (['EW', 'PAYNEXT', 'NOPAYMENT', 'COD', 'PROMPTPAY', 'TMNPAYSMOOTH'].includes(this.payment.payment_channel)) {
            const validTruePointId = /^(\d{13}|)$/.test(this.truepoint_id)
            if (validTruePointId) {
              data.payment_detail = {
                method: this.payment.payment_channel
              }
              if (this.payment.payment_channel === 'PAYNEXT') {
                data.payment_detail.method = 'P2C2PPAYNEXT'
              }

              if (this.payment.payment_channel === 'PROMPTPAY') {
                const createSource = await this.createSourceForPromptpay(data.products)
                data.payment_detail.source = createSource.source
                data.payment_detail.expires_at = createSource.expires_at
              }

              if (this.payment.payment_channel === 'TMNPAYSMOOTH') {
                const productPaysmooth = data.products
                const paysmoothData = JSON.parse(localStorage.getItem('paysmooth-data'))
                productPaysmooth.map((item, key) => { if (!item.sim_meta) data.products[key].meta = JSON.stringify({ down_payment_rate: paysmoothData.down_rate, tenor: paysmoothData.tenor }) })
              }
              if (this.truepoint_id) data.point_idcard = this.truepoint_id
              this.$store
                .dispatch(this.placeorderAction, data)
                .then(async (data) => {
                  if (data.code === 200) {
                    if (this.skipEkyc && data.ekyc_hash) localStorage.setItem('ekyc_hash', data.ekyc_hash)
                    window.loadingPlaceorder = false
                    const redirectUrl = data.redirectUrl
                    if (redirectUrl.includes('/order/process/weomni/ew/')) {
                      this.createWeomniEWPaymentForm(redirectUrl)
                    } else {
                      window.location.href = redirectUrl
                    }
                  } else {
                    this.errors.push({
                      th:
                        'มีปัญหาการชำระเงินจากการใส่ข้อมูลไม่ถูกต้อง โปรดตรวจสอบข้อมูลอีกครั้ง',
                      en:
                        'One or more fields contain have an error. Please check and try again.'
                    })
                    this.loading = false
                    this.isProcessing = false
                    window.loadingPlaceorder = false
                  }
                })
                .catch(error => {
                  this.loading = false
                  this.isProcessing = false
                  window.loadingPlaceorder = false
                  const message = error.message ? error.message : this.Content.error
                  this.errors.push(message)
                })
            } else {
              this.errors = [
                {
                  th: 'True Point ID ไม่ถูกต้อง.',
                  en: 'Invalid True Point ID.'
                }
              ]
              this.loading = false
              this.isProcessing = false
              window.loadingPlaceorder = false
            }
          } else {
            const validTruePointId = /^(\d{13}|)$/.test(this.truepoint_id)
            if (validTruePointId) {
              if (this.enable2C2P && this.payment.payment_channel === 'INSTM') {
                data.payment_detail = {
                  method: 'P2C2PINSTM',
                  gateway: '2c2p'
                }
                data.installment_detail = {
                  payment_processor: 'tos_2c2p',
                  card_type: 'creditcard',
                  period: ''
                }
              } else {
                data.payment_detail = {
                  method: this.payment.payment_channel
                }
                data.installment_detail = {
                  payment_processor: this.installment.bank,
                  card_type: 'creditcard',
                  period: this.installment.plan
                }
                if (this.installments[this.installment.bank] && this.installments[this.installment.bank].hasOwnProperty('gateway')) {
                  data.payment_detail.gateway = this.installments[this.installment.bank].gateway
                }
              }

              if (this.truepoint_id) data.point_idcard = this.truepoint_id
              this.$store
                .dispatch(this.placeorderAction, data)
                .then(async (data) => {
                  if (this.skipEkyc && data.ekyc_hash) localStorage.setItem('ekyc_hash', data.ekyc_hash)
                  if (data.code === 200) {
                    window.loadingPlaceorder = false
                    window.location.href = data.redirectUrl
                  } else {
                    this.errors.push({
                      th:
                        'มีปัญหาการชำระเงินจากการใส่ข้อมูลไม่ถูกต้อง โปรดตรวจสอบข้อมูลอีกครั้ง',
                      en:
                        'One or more fields contain have an error. Please check and try again.'
                    })
                    this.loading = false
                    this.isProcessing = false
                    window.loadingPlaceorder = false
                  }
                })
                .catch(error => {
                  this.loading = false
                  this.isProcessing = false
                  window.loadingPlaceorder = false
                  const message = error.message ? error.message : this.Content.error
                  this.errors.push(message)
                })
            } else {
              this.errors = [
                {
                  th: 'True Point ID ไม่ถูกต้อง.',
                  en: 'Invalid True Point ID.'
                }
              ]
              this.loading = false
              this.isProcessing = false
              window.loadingPlaceorder = false
            }
          }
        } catch (e) {
          console.log(e)
          this.errors = [
            {
              th: 'Something went wrong. Please try again.',
              en: 'Something went wrong. Please try again.'
            }
          ]
          this.loading = false
          this.isProcessing = false
          window.loadingPlaceorder = false
        }
      },
      trackAnalytics (event, eventCategory, eventAction, eventLabel) {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event,
          event_category: eventCategory,
          event_action: eventAction,
          event_label: eventLabel
        })
      },
      async createSourceForPromptpay (product) {
        try {
          const toggleOmise = await this.$refs.ccw.getToggleCCW({ store_id: product[0].store_id })
          const expiresAt = this.getCurrentDate()

          if (toggleOmise.omise_toggle === true) {
            const data = {
              type: 'promptpay',
              form: {
                amount: this.finalPrice * 100,
                currency: 'THB',
                expires_at: expiresAt
              }
            }

            const source = await this.createOmiseSource(data, toggleOmise.token_auth)

            if (source) {
              return { source: source.id, expires_at: expiresAt }
            } else {
              this.$refs.ccw.showErrorsOmise(false)
              return false
            }
          }
        } catch (e) {
          this.$refs.ccw.showErrorsOmise(false)
          return false
        }
      },
      async createOmiseSource (data, publicKey) {
        return new Promise(function (resolve) {
          Omise.setPublicKey(publicKey)
          Omise.createSource(data.type, data.form, function (statusCode, response) {
            if (statusCode === 200) {
              resolve(response)
            } else {
              resolve(false)
            }
          })
        })
      },
      getCurrentDate () {
        const dt = new Date()
        dt.setMinutes(dt.getMinutes() + 15)
        dt.toLocaleString('en-US', { timeZone: 'Asia/Bangkok' })

        const year = dt.getFullYear()
        let month = dt.getMonth() + 1
        month = month < 10 ? `0${month}` : month

        let date = dt.getDate()
        date = date < 10 ? `0${date}` : date

        let hours = dt.getHours()
        hours = hours < 10 ? `0${hours}` : hours

        let mins = dt.getMinutes()
        mins = mins < 10 ? `0${mins}` : mins

        let secs = dt.getSeconds()
        secs = secs < 10 ? `0${secs}` : secs

        return `${year}-${month}-${date} ${hours}:${mins}:${secs}`
      },
      async createWeomniEWPaymentForm (redirectUrl) {
        window.loadingPlaceorder = false
        const form = document.createElement('form')
        try {
          form.method = 'post'
          form.action = redirectUrl

          const data = {
            user_id: this.user.id,
            channel: 'tmh-website'
          }

          Object.keys(data).forEach(item => {
            const element = document.createElement('input')
            element.setAttribute('value', data[item])
            element.name = item
            form.appendChild(element)
          })

          document.body.appendChild(form)
          form.submit()
          document.body.removeChild(form)
        } catch (e) {
          window.location = redirectUrl
        }
      },
      checkInstallmentGateway (data) {
        if (this.payment.coupon_code && this.installments[data.abbreviation] &&
          this.installments[data.abbreviation].hasOwnProperty('gateway') && this.payment.hasOwnProperty('gateway') &&
          (this.installments[data.abbreviation].gateway !== this.payment.gateway)) {
          this.applyCoupon(this.payment.coupon_code, this.installments[data.abbreviation].gateway)
        }
      },
      setCurrentBankIndex (index) {
        this.currentIndex = index
      },
      setInstallmentBank (bank) {
        this.installment.bank = bank
      },
      setPlan (plan) {
        this.currentPlan = plan
      },
      setInstallmentPlan (plan) {
        this.installment.plan = plan
      },
      cartToggle () {
        if (!this.isMobile) {
          this.cartActive = true
        }
        this.cartActive = !this.cartActive
      },
      addressToggle () {
        if (!this.isMobile) {
          this.addressActive = true
        }
        this.addressActive = !this.addressActive
      }
    }
  }
</script>

<style lang="scss">
.payment-paynext-icon {
    width: 27px;
    height: 21px;
}

.confirm-payment-dialog {
  text-align: center;
  padding: 24px 8px;

  .dialog-title {
    font-size: 28px;
    font-weight: 700;
    margin: 16px 0;
  }

  .button-container {
    margin-top: 36px;

    .gray-button {
      background-color: #9e9e9e;
    }

    @media screen and (max-width: 560px) {
      .gray-rounded-button {
        min-width: 110px !important;
      }
      .red-rounded-button {
        min-width: 110px !important;
      }
    }

    .gray-rounded-button {
      margin: 0px 10px;
      background: #FFFFFF;
      border: 2px solid #C4C4C4;
      color: #C4C4C4;
      box-sizing: border-box;
      border-radius: 40px;
    }

    .red-rounded-button {
      margin: 0px 10px;
      background: linear-gradient(92.32deg, #E02C2D 0%, #E01974 100%);
      border-radius: 40px;
    }
  }
}
.payment-form-container .input input,
.payment-form .input input,
.true-point .input input {
  background-color: #fff;

  &::placeholder {
    color: #bbbbbb;
  }

  &[invalid] {
    border-color: red;
  }
}

.true-point .input input {
  border-color: #afafaf;
}

.cc-number[invalid] {
  .input input {
    border-color: red;
  }
}

.terms-dialog {
  z-index: 2391;
}

.divider {
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  height: 1px;
  background-color: #DCDDE0;
}

.paysmooth-label {
  font-size: 20px;
  line-height: 25px;
  padding: 0px 10px 10px 10px;
  .d-flex {
    display: flex;
    margin-left: 30px;

    @media screen and (max-width: 1000px) {
      margin-left: 0;
    }
  }
  .red-paysmooth-text {
    font-size: 24px;
    font-family: 'TrueBold';
    color: #E12930;
    line-height: 25px;
  }
  .sub-text {
    font-size: 14px;
    color: #868686;
    line-height: 10px;
  }
  .ml-1 {
    margin-left: 0.5rem;
  }
  .ml-2 {
    margin-left: 1rem;
  }

  .paysmooth-icon {
    height: 2rem;
    width: 130px;

    @media screen and (max-width: 365px) {
      width: 100px;
    }

    @media screen and (min-width: 1000px) and (max-width: 1090px) {
      width: 100px;
    }
  }
}

.payment-banner-container {
  img {
    width: 100%;
  }
  a {
    display: flex;
    line-height: 0;
  }
}

.payment-banner-large {
  margin: 16px 0 16px 0;
}

.payment-banner-small {
  @media screen and (max-width: 1000px) {
    margin: 16px 0 16px 0;
    &.desktop {
      display: none;
    }
  }

  @media screen and (min-width: 1001px) {
    margin: 0 0 16px 0;
    &.mobile {
      display: none;
    }
  }
}

.paysmooth-title{
 white-space: pre-line;

 @media screen and (max-width: 1000px) {
    white-space: normal;
  }
 @media screen and (max-width: 397px) {
    white-space: pre-line;
  }
}
.paynext-setting {
    margin-left: 10px;
}
</style>

<style scoped lang="scss" src="./style.scss"></style>
