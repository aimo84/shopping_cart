<template>
  <div>
    <dialog-element ref="dialogLogin" showCloseButton newDesign>
      <div
        slot="content"
        class="login-dialog"
      >
        <div class="dialog-header text-bold">{{ Content.login_label_1[$i18n.locale] }}</div>
        <div class="dialog-header">{{ Content.login_label_2[$i18n.locale] }}</div>
        <div class="dialog-action">
          <button-element
            class="newDesignButton guestButton text-bold"
            @click="signup"
          >{{ Content.register[$i18n.locale] }}&nbsp; <img src="/images/icons/true-id-color.svg" />
          </button-element>
          <button-element
            class="newDesignButton loginButton text-bold"
            @click="login"
          >{{ Content.login[$i18n.locale] }}
          </button-element>
        </div>
      </div>
    </dialog-element>

    <dialog-element
      ref="dialog"
      class="terms-dialog"
      showCloseButton
    >
      <div slot="content">
        <terms-element />
      </div>
    </dialog-element>

    <dialog-element
        ref="service_dialog"
        class="terms-dialog"
        showCloseButton
      >
        <div slot="content">
          <service-terms-element />
        </div>
    </dialog-element>

    <loading-element v-if="loading" />

    <div v-else class="page-space">
      <div
        class="error-container"
        v-if="!loading && errors.length > 0"
      >
        <ul>
          <li
            v-for="(error, key) in errors"
            :key="key"
          >{{ error[$i18n.locale] }}</li>
        </ul>
      </div>

      <div v-if="isDrLucky() && isNoEkyc()">
        <priceplan-info
          :data="status"
          :packages="packages"
          :postpaidResult="userInformation"
        />
      </div>

      <div :class="{'mt-16px': isDrLucky() && isNoEkyc()}">
        <div class="address-container">
          <div class="address-inner-container">

            <multi-address-element
              v-if="user && shippingAddress.length > 0"
              :data="delivery_address"
              :form="Content.delivery_address"
              :user="user"
              @updateProfileAddress="setAddressFromProfile"
            >
              <div class="info-container multi-address">
                <div class="form-label" style="margin-bottom: 5px;">
                  <input
                    type="checkbox"
                    id="required-invoice"
                    v-model="required_invoice"
                  >
                  <label class="new-design-checkbox" for="required-invoice">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="9.5" :stroke="required_invoice || '#CCCCCC'" :fill="!required_invoice || '#E62627'"/>
                      <path d="M15.0999 8.2999L9.1999 14.0999C8.9999 14.3999 8.5999 14.4999 8.2999 14.4999C7.9999 14.4999 7.5999 14.3999 7.2999 14.0999L4.3999 11.1999C3.8999 10.6999 3.8999 9.7999 4.3999 9.2999C4.8999 8.7999 5.7999 8.7999 6.2999 9.2999L8.2999 11.2999L13.1999 6.3999C13.6999 5.8999 14.5999 5.8999 15.0999 6.3999C15.5999 6.8999 15.5999 7.7999 15.0999 8.2999Z" :fill="required_invoice ? 'white' :'#CCCCCC'"/>
                    </svg>
                  </label>
                  <label
                    class="font-light"
                    for="required-invoice"
                  >{{ Content.label.taxinvoice[$i18n.locale] }}</label>
                </div>
              </div>
              <div class="info-container multi-address">
                  <div class="form-label" style="margin-bottom: 5px;">
                    <input
                      type="checkbox"
                      id="agreement"
                      v-model="agreement"
                    >
                    <label class="new-design-checkbox" for="agreement">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10" r="9.5" :stroke="agreement || '#CCCCCC'" :fill="!agreement || '#E62627'"/>
                        <path d="M15.0999 8.2999L9.1999 14.0999C8.9999 14.3999 8.5999 14.4999 8.2999 14.4999C7.9999 14.4999 7.5999 14.3999 7.2999 14.0999L4.3999 11.1999C3.8999 10.6999 3.8999 9.7999 4.3999 9.2999C4.8999 8.7999 5.7999 8.7999 6.2999 9.2999L8.2999 11.2999L13.1999 6.3999C13.6999 5.8999 14.5999 5.8999 15.0999 6.3999C15.5999 6.8999 15.5999 7.7999 15.0999 8.2999Z" :fill="agreement ? 'white' :'#CCCCCC'"/>
                      </svg>
                    </label>
                    <label
                      class="font-light"
                      for="agreement"
                    >{{ Content.label.agreement[$i18n.locale] }}</label>
                  </div>

                  <div class="justify-content-end">
                    <div @click="showTermsDialog">
                      <span class="text-red font-light text-18 mr-1 mouse-pointer">*{{ Content.label.tnc[$i18n.locale] }}
                        <span class="svg-tnc">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18px"
                            height="18px"
                            viewBox="0 0 30 30"
                          >
                            <path d="M16,1A15,15,0,1,0,31,16,15.007,15.007,0,0,0,16,1Zm0,2A13,13,0,1,1,3,16,13.006,13.006,0,0,1,16,3Z" />
                            <path d="M21.293,12.293,16,17.586l-5.293-5.293a1,1,0,0,0-1.414,1.414l6,6a1,1,0,0,0,1.414,0l6-6a1,1,0,1,0-1.414-1.414Z" />
                          </svg>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>

                <!-- service agreement only for bundle new customer -->
                <div class="info-container multi-address" v-if="isBundleNew">
                  <div class="form-label">
                    <input
                      type="checkbox"
                      id="service_agreement"
                      v-model="serviceAgreement"
                    >
                    <label class="new-design-checkbox" for="service_agreement">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10" r="9.5" :stroke="serviceAgreement || '#CCCCCC'" :fill="!serviceAgreement || '#E62627'"/>
                        <path d="M15.0999 8.2999L9.1999 14.0999C8.9999 14.3999 8.5999 14.4999 8.2999 14.4999C7.9999 14.4999 7.5999 14.3999 7.2999 14.0999L4.3999 11.1999C3.8999 10.6999 3.8999 9.7999 4.3999 9.2999C4.8999 8.7999 5.7999 8.7999 6.2999 9.2999L8.2999 11.2999L13.1999 6.3999C13.6999 5.8999 14.5999 5.8999 15.0999 6.3999C15.5999 6.8999 15.5999 7.7999 15.0999 8.2999Z" :fill="serviceAgreement ? 'white' :'#CCCCCC'"/>
                      </svg>
                    </label>
                    <label
                      class="font-light"
                      for="service_agreement"
                    >{{ Content.label.service_agreement[$i18n.locale] }}</label>
                  </div>

                  <div class="justify-content-end">
                    <div @click="showServiceTcDialog">
                      <span class="text-red font-light text-18 mr-1 mouse-pointer">*{{ Content.label.service_tnc[$i18n.locale] }}
                        <span class="svg-tnc">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18px"
                            height="18px"
                            viewBox="0 0 30 30"
                          >
                            <path d="M16,1A15,15,0,1,0,31,16,15.007,15.007,0,0,0,16,1Zm0,2A13,13,0,1,1,3,16,13.006,13.006,0,0,1,16,3Z" />
                            <path d="M21.293,12.293,16,17.586l-5.293-5.293a1,1,0,0,0-1.414,1.414l6,6a1,1,0,0,0,1.414,0l6-6a1,1,0,1,0-1.414-1.414Z" />
                          </svg>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <!-- end of service agreement only for bundle new customer -->
            </multi-address-element>

            <div v-show="!user || shippingAddress.length === 0">
              <div class="panel-header">
                <span class="panel-header-text">
                  {{ Content.label.shipping[$i18n.locale] }}
                </span>
              </div>
              <div class="panel-content">
                <form
                  ref="deliverForm"
                  :class="invalidDeliveryForm ? 'invalid' : undefined"
                >
                  <form-element
                    class="form-container address-form"
                    :data="delivery_address"
                    :form="Content.delivery_address"
                  />
                </form>

                <div class="info-container">
                  <div class="form-label">
                    <input
                      type="checkbox"
                      id="address-default"
                      v-model="isDefault"
                    >
                    <label class="new-design-checkbox" for="address-default">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10" r="9.5" :stroke="isDefault || '#CCCCCC'" :fill="!isDefault || '#E62627'"/>
                        <path d="M15.0999 8.2999L9.1999 14.0999C8.9999 14.3999 8.5999 14.4999 8.2999 14.4999C7.9999 14.4999 7.5999 14.3999 7.2999 14.0999L4.3999 11.1999C3.8999 10.6999 3.8999 9.7999 4.3999 9.2999C4.8999 8.7999 5.7999 8.7999 6.2999 9.2999L8.2999 11.2999L13.1999 6.3999C13.6999 5.8999 14.5999 5.8999 15.0999 6.3999C15.5999 6.8999 15.5999 7.7999 15.0999 8.2999Z" :fill="isDefault ? 'white' :'#CCCCCC'"/>
                      </svg>
                    </label>
                    <label
                      class="font-light"
                      for="address-default"
                    >{{ Content.label.address_default[$i18n.locale] }}</label>
                  </div>
                </div>

                <div class="info-container multi-address-button">
                  <button-element
                    @click="saveToProfile()"
                    :disabled="!formValid"
                    class="btn-next save-button"
                  >
                    {{ Content.label.save[$i18n.locale] }}
                  </button-element>
                </div>

                <div class="info-container">
                  <div class="form-label">
                    <input
                      type="checkbox"
                      id="required-invoice"
                      v-model="required_invoice"
                    >
                    <label class="new-design-checkbox" for="required-invoice">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10" r="9.5" :stroke="required_invoice || '#CCCCCC'" :fill="!required_invoice || '#E62627'"/>
                        <path d="M15.0999 8.2999L9.1999 14.0999C8.9999 14.3999 8.5999 14.4999 8.2999 14.4999C7.9999 14.4999 7.5999 14.3999 7.2999 14.0999L4.3999 11.1999C3.8999 10.6999 3.8999 9.7999 4.3999 9.2999C4.8999 8.7999 5.7999 8.7999 6.2999 9.2999L8.2999 11.2999L13.1999 6.3999C13.6999 5.8999 14.5999 5.8999 15.0999 6.3999C15.5999 6.8999 15.5999 7.7999 15.0999 8.2999Z" :fill="required_invoice ? 'white' :'#CCCCCC'"/>
                      </svg>
                    </label>
                    <label
                      class="font-light"
                      for="required-invoice"
                    >{{ Content.label.taxinvoice[$i18n.locale] }}</label>
                  </div>
                </div>

                <div class="info-container">
                  <div class="form-label">
                    <input
                      type="checkbox"
                      id="agreement"
                      v-model="agreement"
                    >
                    <label class="new-design-checkbox" for="agreement">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10" r="9.5" :stroke="agreement || '#CCCCCC'" :fill="!agreement || '#E62627'"/>
                        <path d="M15.0999 8.2999L9.1999 14.0999C8.9999 14.3999 8.5999 14.4999 8.2999 14.4999C7.9999 14.4999 7.5999 14.3999 7.2999 14.0999L4.3999 11.1999C3.8999 10.6999 3.8999 9.7999 4.3999 9.2999C4.8999 8.7999 5.7999 8.7999 6.2999 9.2999L8.2999 11.2999L13.1999 6.3999C13.6999 5.8999 14.5999 5.8999 15.0999 6.3999C15.5999 6.8999 15.5999 7.7999 15.0999 8.2999Z" :fill="agreement ? 'white' :'#CCCCCC'"/>
                      </svg>
                    </label>
                    <label
                      class="font-light"
                      for="agreement"
                    >{{ Content.label.agreement[$i18n.locale] }}</label>
                  </div>

                  <div class="justify-content-end">
                    <div @click="showTermsDialog">
                      <span class="text-red font-light text-18 mr-1 mouse-pointer">*{{ Content.label.tnc[$i18n.locale] }}
                        <span class="svg-tnc">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18px"
                            height="18px"
                            viewBox="0 0 30 30"
                          >
                            <path d="M16,1A15,15,0,1,0,31,16,15.007,15.007,0,0,0,16,1Zm0,2A13,13,0,1,1,3,16,13.006,13.006,0,0,1,16,3Z" />
                            <path d="M21.293,12.293,16,17.586l-5.293-5.293a1,1,0,0,0-1.414,1.414l6,6a1,1,0,0,0,1.414,0l6-6a1,1,0,1,0-1.414-1.414Z" />
                          </svg>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>

                <!-- service agreement only for bundle new customer -->
                <div class="info-container" v-if="isBundleNew">
                  <div class="form-label">
                    <input
                      type="checkbox"
                      id="service_agreement"
                      v-model="serviceAgreement"
                    >
                    <label class="new-design-checkbox" for="service_agreement">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10" r="9.5" :stroke="serviceAgreement || '#CCCCCC'" :fill="!serviceAgreement || '#E62627'"/>
                        <path d="M15.0999 8.2999L9.1999 14.0999C8.9999 14.3999 8.5999 14.4999 8.2999 14.4999C7.9999 14.4999 7.5999 14.3999 7.2999 14.0999L4.3999 11.1999C3.8999 10.6999 3.8999 9.7999 4.3999 9.2999C4.8999 8.7999 5.7999 8.7999 6.2999 9.2999L8.2999 11.2999L13.1999 6.3999C13.6999 5.8999 14.5999 5.8999 15.0999 6.3999C15.5999 6.8999 15.5999 7.7999 15.0999 8.2999Z" :fill="serviceAgreement ? 'white' :'#CCCCCC'"/>
                      </svg>
                    </label>
                    <label
                      class="font-light"
                      for="service_agreement"
                    >{{ Content.label.service_agreement[$i18n.locale] }}</label>
                  </div>

                  <div class="justify-content-end">
                    <div @click="showServiceTcDialog">
                      <span class="text-red font-light text-18 mr-1 mouse-pointer">*{{ Content.label.service_tnc[$i18n.locale] }}
                        <span class="svg-tnc">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18px"
                            height="18px"
                            viewBox="0 0 30 30"
                          >
                            <path d="M16,1A15,15,0,1,0,31,16,15.007,15.007,0,0,0,16,1Zm0,2A13,13,0,1,1,3,16,13.006,13.006,0,0,1,16,3Z" />
                            <path d="M21.293,12.293,16,17.586l-5.293-5.293a1,1,0,0,0-1.414,1.414l6,6a1,1,0,0,0,1.414,0l6-6a1,1,0,1,0-1.414-1.414Z" />
                          </svg>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <!-- end of service agreement only for bundle new customer -->

              </div>
            </div>

            <div
              class="panel mt-16px"
              v-if="required_invoice && (user || shippingAddress.length === 0)"
            >
              <div class="panel-header">
                <span class="panel-header-text">
                  {{ Content.label.billing[$i18n.locale] }}
                </span>
              </div>
              <div class="panel-content">
                <div class="info-container">
                  <div class="form-label">
                    <input
                      type="radio"
                      name="same_address"
                      id="same-address-true"
                      :value="true"
                      v-model="same_address"
                      hidden
                    />
                    <label class="new-design-checkbox" for="same-address-true">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10" r="9.5" :stroke="same_address || '#CCCCCC'" :fill="!same_address || '#E62627'"/>
                        <path d="M15.0999 8.2999L9.1999 14.0999C8.9999 14.3999 8.5999 14.4999 8.2999 14.4999C7.9999 14.4999 7.5999 14.3999 7.2999 14.0999L4.3999 11.1999C3.8999 10.6999 3.8999 9.7999 4.3999 9.2999C4.8999 8.7999 5.7999 8.7999 6.2999 9.2999L8.2999 11.2999L13.1999 6.3999C13.6999 5.8999 14.5999 5.8999 15.0999 6.3999C15.5999 6.8999 15.5999 7.7999 15.0999 8.2999Z" :fill="same_address ? 'white' :'#CCCCCC'"/>
                      </svg>
                    </label>
                    <label
                      class="font-light"
                      for="same-address-true"
                    >{{ Content.label.copyform[$i18n.locale] }}</label>
                  </div>
                  <div class="form-label">
                    <input
                      type="radio"
                      name="same_address"
                      id="same-address-false"
                      :value="false"
                      v-model="same_address"
                      hidden
                    />
                    <label class="new-design-checkbox" for="same-address-false">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10" r="9.5" :stroke="!same_address || '#CCCCCC'" :fill="same_address || '#E62627'"/>
                        <path d="M15.0999 8.2999L9.1999 14.0999C8.9999 14.3999 8.5999 14.4999 8.2999 14.4999C7.9999 14.4999 7.5999 14.3999 7.2999 14.0999L4.3999 11.1999C3.8999 10.6999 3.8999 9.7999 4.3999 9.2999C4.8999 8.7999 5.7999 8.7999 6.2999 9.2999L8.2999 11.2999L13.1999 6.3999C13.6999 5.8999 14.5999 5.8999 15.0999 6.3999C15.5999 6.8999 15.5999 7.7999 15.0999 8.2999Z" :fill="!same_address ? 'white' :'#CCCCCC'"/>
                      </svg>
                    </label>
                    <label
                      class="font-light"
                      for="same-address-false"
                    >{{ Content.label.nocopyform[$i18n.locale] }}</label>
                  </div>
                </div>

                <form
                  ref="billingForm"
                  :class="invalidBillingForm ? 'invalid' : undefined"
                >
                  <form-element
                    class="form-container address-form"
                    :data="billing_address"
                    :form="Content.billing_address"
                    v-if="required_invoice"
                  />
                </form>
              </div>
            </div>

          </div>

          <div class="cart-info-container">
            <div class="panel-header">
              {{ Content.summary[$i18n.locale] }}
            </div>
            <div>
              <summary-element
                :cart="cart"
                :shipping="shipping"
                :advance-payment="advancePayment"
                :total-discount="totalDiscount"
                :total-price="totalPrice"
                :final-price="finalPrice"
              />
            </div>
            <div class="panel-content">
              <div class="button-container">
                <router-link
                  class="flex-50 p-5"
                  to="/cart"
                  v-on:click.native="trackAnalytics('track_event', 'personal_information_and_address', 'back', 'Back')"
                >
                  <button-element id="back_to_details">{{ Content.label.back[$i18n.locale] }}</button-element>
                </router-link>
                <div class="flex-50 p-5">
                  <button-element
                    id="go_order_summary"
                    @click="submitForm"
                    :disabled="!agreement || !formValid || !serviceAgreement"
                  >
                    {{ Content.label.next[$i18n.locale] }}
                  </button-element>
                </div>
              </div>
            </div>
          </div>

          <div class="cart-info-sticky">
            <div class="price-container">
              <div class="price-label">{{ Content.total_price[$i18n.locale] }}</div>
              <div class="price-value">{{ finalPrice }}{{ Content.baht[$i18n.locale] }}</div>
            </div>

            <div class="button-container">
              <router-link
                class="flex-50 p-5"
                to="/cart"
                v-on:click.native="trackAnalytics('track_event', 'personal_information_and_address', 'back', 'Back')"
              >
                <button-element id="back_to_details">{{ Content.label.back[$i18n.locale] }}</button-element>
              </router-link>
              <div class="flex-50 p-5">
                <button-element
                  id="go_order_summary"
                  @click="submitForm"
                  :disabled="!agreement || !formValid || !serviceAgreement"
                >
                  {{ Content.label.next[$i18n.locale] }}
                </button-element>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Form from '@components/form-address'
  import Button from '@components/button'
  import Loading from '@components/loading'
  import Dialog from '@components/dialog'
  import Terms from '@components/terms'
  import ServiceTerms from '@components/service-terms'
  import Content from './content.json'
  import Summary from '@components/summary'
  import Input from '@components/input'
  import MultiAddress from './multi-address/index.vue'
  import {
    FETCH_ADDRESS,
    FETCH_PACKAGE,
    FETCH_PRODUCT_INFO,
    FETCH_PRICE_PLAN,
    GET_SHIPPING_ADDRESS,
    CREATE_SHIPPING_ADDRESS
  } from '@store/actions.type'

  import { computeGtagProducts, computePrice } from '@utils/common'

  export default {
    components: {
      'form-element': Form,
      'button-element': Button,
      'loading-element': Loading,
      'dialog-element': Dialog,
      'terms-element': Terms,
      'service-terms-element': ServiceTerms,
      'summary-element': Summary,
      'input-element': Input,
      'priceplan-info': () => import('@sections/priceplan-info'),
      'multi-address-element': MultiAddress
    },
    props: {
      cart: [Object]
    },
    data: () => ({
      delivery_address: {
        district_id: '_',
        city_id: '_',
        province_id: '_',
        country_id: '209',
        postcode: ''
      },
      billing_address: {
        company: '-',
        branch: '00000',
        district_id: '_',
        city_id: '_',
        province_id: '_',
        country_id: '209',
        postcode: '',
        account_type: 'individual'
      },
      account_type: '',
      selected_delivery_address: {},
      selected_billing_address: {},
      invalidDeliveryForm: false,
      invalidBillingForm: false,
      same_address: false,
      required_invoice: false,
      agreement: false,
      serviceAgreement: true,
      Content,
      loading: true,
      formValid: false,
      errors: [],
      packages: {},
      status: {},
      userInformation: {},
      isDefault: false
    }),
    computed: {
      user () {
        return this.$store.state.auth.profile.data
      },
      shippingAddress () {
        return this.$store.state.address?.shippingAddress || []
      },
      hasError () {
        const error = Object.keys(this.cart).map((key) => this.cart[key].error)
        return error.includes(true)
      },
      hasTrueCard () {
        const card = Object.keys(this.cart).filter(
          (key) => this.cart[key].product_type === 'truecard'
        )
        return card.length > 0 && !this.user
      },
      luckyNas () {
        return localStorage.getItem('truestore-berfuntong-nascode') || ''
      },
      // start cart info
      couponDiscount () {
        return this.couponData?.total_coupon_discount_amount || 0
      },
      eCouponDiscount () {
        return Object.keys(this.cart).reduce((total, key) => {
          return (
            total + parseFloat(this.cart[key]?.privilege?.ecoupon_discount || 0)
          )
        }, 0)
      },
      advancePayment () {
        return this.$store.state.cart.cart.data.advance_payment || 0
      },
      shipping () {
        return this.$store.state.cart.cart.data.shipping_fee
      },
      totalDiscount () {
        return Object.keys(this.cart).reduce((result, item) => {
          return result + parseFloat(this.cart[item].discount)
        }, 0)
      },
      totalPrice () {
        return Object.keys(this.cart).reduce((result, item) => {
          if (this.cart[item].product_type === 'advancepayment') return result
          return result + this.cart[item].price * this.cart[item].quantity
        }, 0)
      },
      finalPrice () {
        return computePrice(
          this.shipping +
            this.totalPrice -
            this.totalDiscount +
            this.advancePayment -
            this.couponDiscount -
            this.eCouponDiscount
        )
      },
      isBundleNew () {
        return Object.keys(this.cart).some((item) => {
          return this.cart[item].product_type === 'device_bundle_new_customer'
        })
      }
    // end cart info
    },
    watch: {
      delivery_address: {
        deep: true,
        handler (data) {
          if (this.same_address) this.copyForm()
          this.updateAddress(data, 'delivery_address')
        }
      },
      billing_address: {
        deep: true,
        handler (data) {
          if (this.same_address) {
            this.account_type = this.billing_address.account_type
            return
          }
          this.updateAddress(data, 'billing_address')
        }
      },
      same_address (value) {
        this.disableForm(value)
        if (value) this.copyForm()
      },
      account_type (value) {
        this.setAccountType(value)
      },
      user () {
        if (this.user && this.loading) {
          this.loading = false
        }
      }
    },
    async mounted () {
      if (this.user) await this.$store.dispatch(GET_SHIPPING_ADDRESS, { user_id: this.user.user_id })
      if (this.isBundleNew) this.serviceAgreement = false
      this.account_type = 'individual'
      const ekycHash = localStorage.getItem('ekyc_hash')
      if (ekycHash) localStorage.removeItem('ekyc_hash')
      if (
        !this.cart ||
        Object.keys(this.cart).length < 1 ||
        this.hasError ||
        this.hasTrueCard
      ) {
        this.$router.push('/cart')
        return
      } else if (
        this.$store.state.cart.cart.data.record[0].store.shipping_method.PICKUP
      ) {
        this.$router.push('/pickup')
        return
      }

      if (this.isDrLucky() && this.isNoEkyc()) {
        await Promise.all([
          this.fetchPackage(),
          this.fetchProduct(),
          this.fetchPricePlan()
        ])

        this.status = {
          mobile:
            this.$store.state.cart.cart.data.record[0].products[0].sim_meta[0]
              .number
        }
        this.userInformation = {
          thai_id:
            this.$store.state.cart.cart.data.record[0].products[0].sim_meta[0]
              .user_information.thai_id,
          birth_date:
            this.$store.state.cart.cart.data.record[0].products[0].sim_meta[0]
              .user_information.birth_date
        }
      }

      const address = window.localStorage.getItem('address')
      let postpaidAddress = window.localStorage.getItem('postpaid-billing')
      if (postpaidAddress) postpaidAddress = JSON.parse(postpaidAddress)
      const pickupAddress = address
        ? JSON.parse(window.localStorage.getItem('address')).sevenstore_address
        : false
      if (address && !pickupAddress) {
        const parsedAdd = JSON.parse(address)
        this.billing_address = parsedAdd.billing_address
        if (postpaidAddress) {
          this.delivery_address = { ...parsedAdd.delivery_address }
        } else {
          this.delivery_address = parsedAdd.delivery_address
        }
      } else {
        if (postpaidAddress) {
          this.delivery_address = postpaidAddress
        } else {
          this.setPlaceholder('delivery_address', 'city_id')
          this.setPlaceholder('delivery_address', 'district_id')
        }
        this.setPlaceholder('billing_address', 'city_id')
        this.setPlaceholder('billing_address', 'district_id')
      }
      const requiredInvoice = (window.localStorage.getItem('invoice') === 'true')
      const simmetaUseIdForm = address && this.delivery_address.useIdForm

      if (simmetaUseIdForm) {
        this.required_invoice = simmetaUseIdForm === 'false'
      } else if (requiredInvoice) {
        this.required_invoice = requiredInvoice === 'true'
      }

      if (simmetaUseIdForm) {
        this.account_type = 'individual'
      } else if (window.localStorage.getItem('account_type')) {
        this.account_type = window.localStorage.getItem('account_type')
      } else {
        this.account_type = 'individual'
      }

      this.disableForm(false)
      this.selected_delivery_address = JSON.parse(
        JSON.stringify(this.delivery_address)
      )
      this.selected_billing_address = JSON.parse(
        JSON.stringify(this.billing_address)
      )
      if (address && !pickupAddress) {
        Promise.all([
          this.fetchProvince(
            this.delivery_address.country_id,
            'delivery_address'
          ),
          this.fetchCity(this.delivery_address.province_id, 'delivery_address'),
          this.fetchDistrict(this.delivery_address.city_id, 'delivery_address'),
          this.fetchPostcode(
            this.delivery_address.district_id,
            'delivery_address'
          ),
          this.fetchProvince(this.billing_address.country_id, 'billing_address'),
          this.fetchCity(this.billing_address.province_id, 'billing_address'),
          this.fetchDistrict(this.billing_address.city_id, 'billing_address'),
          this.fetchPostcode(this.billing_address.district_id, 'billing_address')
        ]).then((results) => {
          this.Content.delivery_address.province_id.options = results[0]
          this.Content.delivery_address.city_id.options = results[1]
          this.Content.delivery_address.district_id.options = results[2]
          this.delivery_address.postcode = results[3]
          this.Content.billing_address.province_id.options = results[4]
          this.Content.billing_address.city_id.options = results[5]
          this.Content.billing_address.district_id.options = results[6]
          this.billing_address.postcode = results[7]
          this.$nextTick(() => {
            this.loading = false
          })
        })
      } else if (postpaidAddress) {
        Promise.all([
          this.fetchProvince(
            this.delivery_address.country_id,
            'delivery_address'
          ),
          this.fetchCity(this.delivery_address.province_id, 'delivery_address'),
          this.fetchDistrict(this.delivery_address.city_id, 'delivery_address'),
          this.fetchPostcode(
            this.delivery_address.district_id,
            'delivery_address'
          ),
          this.fetchProvince(this.billing_address.country_id, 'billing_address')
        ]).then((results) => {
          this.Content.delivery_address.province_id.options = results[0]
          this.Content.delivery_address.city_id.options = results[1]
          this.Content.delivery_address.district_id.options = results[2]
          this.delivery_address.postcode = results[3]
          this.Content.billing_address.province_id.options = results[4]
          this.$nextTick(() => {
            this.loading = false
          })
        })
      } else {
        Promise.all([
          this.fetchProvince(
            this.delivery_address.country_id,
            'delivery_address'
          ),
          this.fetchProvince(this.billing_address.country_id, 'billing_address')
        ]).then((results) => {
          this.Content.delivery_address.province_id.options = results[0]
          this.Content.billing_address.province_id.options = results[1]
          this.$nextTick(() => {
            this.loading = false
          })
        })
      }
    },
    methods: {
      showTermsDialog () {
        this.trackAnalytics(
          'track_event',
          'personal_information_and_address',
          'click',
          'next'
        )
        this.$refs.dialog.open()
      },
      showServiceTcDialog () {
        this.$refs.service_dialog.open()
      },
      isDrLucky () {
        if (Object.keys(this.cart) <= 0) return false
        return Object.keys(this.cart).find(
          (e) => this.cart[e]?.sim_meta?.[0]?.campaign_type === 'vhora'
        )
      },
      isNoEkyc () {
        return localStorage.getItem('no_ekyc') === 'true'
      },
      disableForm (state) {
        const form = [
          'address1',
          'address2',
          'district_id',
          'city_id',
          'province_id',
          'postcode',
          'phone',
          'email'
        ]
        form.forEach((item) => {
          this.Content.billing_address[item].disabled = state
        })
      },
      copyForm () {
        const data = this.delivery_address
        const content = this.Content.delivery_address
        this.Content.billing_address.district_id.options =
          content.district_id.options
        this.Content.billing_address.city_id.options = content.city_id.options
        this.Content.billing_address.province_id.options =
          content.province_id.options

        this.$nextTick(() => {
          this.billing_address = {
            firstname: data.firstname,
            lastname: data.lastname,
            company: this.billing_address.company,
            branch: this.billing_address.branch,
            tax_no: this.billing_address.tax_no,
            address1: data.address1,
            address2: data.address2,
            district_id: data.district_id,
            city_id: data.city_id,
            province_id: data.province_id,
            postcode: data.postcode,
            country_id: '209',
            phone: data.phone,
            email: data.email,
            account_type: this.account_type
          }
        })
      },
      updateAddress (data, type) {
        const current = this[`selected_${type}`]
        if (current.district_id !== data.district_id) {
          this[type].postcode = ''
          this.fetchPostcode(data.district_id).then((data) => {
            this[type].postcode = data
          })
        } else if (current.city_id !== data.city_id) {
          this.setLoading(type, 'district_id')
          this[type].postcode = ''
          if (this.same_address) {
            this.setLoading('billing_address', 'district_id')
          }
          this.fetchDistrict(data.city_id).then((data) => {
            this.Content[type].district_id.options = data
            this.Content[type].district_id.disabled = false
            this[type].district_id = '_'
            if (this.same_address) this.copyForm()
          })
        } else if (current.province_id !== data.province_id) {
          this.setLoading(type, 'city_id')
          this.setPlaceholder(type, 'district_id')
          this[type].postcode = ''
          if (this.same_address) {
            this.setLoading('billing_address', 'city_id')
          }
          this.fetchCity(data.province_id).then((data) => {
            this.Content[type].city_id.options = data
            this.Content[type].city_id.disabled = false
            this[type].city_id = '_'
            if (this.same_address) this.copyForm()
          })
        }
        this[`selected_${type}`] = {
          district_id: data.district_id,
          city_id: data.city_id,
          province_id: data.province_id,
          country_id: '209'
        }
        this.validateDropdown('deliverForm', this.delivery_address)
        if (this.required_invoice) {
          this.validateDropdown('billingForm', this.billing_address)
        }

        this.account_type = this.billing_address.account_type
      },
      setAddressName (type) {
        for (const item of this.Content.delivery_address[`${type}_id`].options) {
          if (item.id.toString() === this.delivery_address[`${type}_id`]) {
            this.delivery_address[type] = item.value
            return
          }
        }
      },
      setAccountType (value) {
        const form = this.Content.billing_address
        const data = this.billing_address
        const isIndividual = value === 'individual'
        form.firstname.hidden = !isIndividual
        form.firstname.required = isIndividual
        form.lastname.hidden = !isIndividual
        form.lastname.required = isIndividual
        form.company.hidden = isIndividual
        form.company.required = !isIndividual
        form.branch.hidden = isIndividual
        form.branch.required = !isIndividual
        if (isIndividual) {
          form.tax_no.label = {
            th: 'เลขบัตรประชาชน',
            en: 'Thai ID Card'
          }
          data.branch = data.branch || '00000'
          // data.company = data.company || '-'
        } else {
          form.tax_no.label = {
            th: 'เลขประจำตัวผู้เสียภาษี',
            en: 'Tax Number'
          }
        }
      },
      setPlaceholder (form, input) {
        this[form][input] = '_'
        this.Content[form][input].options = [
          {
            id: '_',
            value: this.$i18n.locale === 'en' ? 'Please Select' : 'กรุณาเลือก',
            disabled: true
          }
        ]
      },
      validateEmail (email) {
        const re =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(email)
      },
      validateEmailInput (type, value) {
        const element = this.$refs[type].querySelector('input[name="email"]')
        if (element) {
          value
            ? element.removeAttribute('invalid')
            : element.setAttribute('invalid', '')
        }
      },
      validateDropdown (type, form) {
        if (!this.$refs[type]) return
        const elements = this.$refs[type].querySelectorAll('.select')
        let valid = true
        for (let i = 0; i < elements.length; i++) {
          if (form[elements[i].getAttribute('name')] === '_') {
            elements[i].setAttribute('invalid', '')
            valid = false
          } else {
            elements[i].removeAttribute('invalid')
          }
        }
        return valid
      },
      validateForm (callback) {
        this.errors = []
        this.invalidDeliveryForm = false
        this.invalidBillingForm = false
        if (this.required_invoice) {
          this.validateEmailInput('deliverForm', true)
        }
        this.setAddressName('district')
        this.setAddressName('city')
        this.setAddressName('province')
        const data = {
          delivery_address: this.delivery_address,
          billing_address: this.billing_address
        }
        const deliverForm = this.$refs.deliverForm.checkValidity()
        const billingForm = this.required_invoice
          ? this.$refs.billingForm.checkValidity()
          : true
        const validDeliverEmail = this.validateEmail(this.delivery_address.email)
        const validBillingEmail = this.required_invoice
          ? this.validateEmail(this.billing_address.email)
          : true
        const validDeliverDropdown = this.validateDropdown(
          'deliverForm',
          this.delivery_address
        )
        const validBillingDropdown = this.required_invoice
          ? this.validateDropdown('billingForm', this.billing_address)
          : true
        if (
          deliverForm &&
          billingForm &&
          validDeliverEmail &&
          validBillingEmail &&
          validDeliverDropdown &&
          validBillingDropdown
        ) {
          if (!this.required_invoice) {
            const del = data.delivery_address
            data.billing_address = {
              firstname: del.firstname,
              lastname: del.lastname,
              address1: del.address1,
              address2: del.address2,
              district_id: del.district_id,
              city_id: del.city_id,
              province_id: del.province_id,
              postcode: del.postcode,
              country_id: '209',
              phone: del.phone,
              email: del.email,
              account_type: this.billing_address.account_type
            }
          } else {
            if (this.account_type === 'individual') {
              data.billing_address.company = ''
              data.billing_address.branch = ''
            } else {
              data.billing_address.firstname = ''
              data.billing_address.lastname = ''
            }
          }
          callback(data)
        } else {
          window.scrollTo(0, 0)
          this.errors = [
            {
              th: 'มีปัญหาการชำระเงินจากการใส่ข้อมูลไม่ถูกต้อง โปรดตรวจสอบข้อมูลอีกครั้ง',
              en: 'One or more fields contain have an error. Please check and try again.'
            }
          ]
          this.invalidDeliveryForm = true
          this.invalidBillingForm = true
          if (!validDeliverEmail) this.validateEmailInput('deliverForm', false)
          if (!validBillingEmail) this.validateEmailInput('billingForm', false)
        }
      },
      submitForm () {
        this.validateForm((data) => {
          window.dataLayer = window.dataLayer || []
          window.dataLayer.push({
            event: 'ecommerce_event',
            event_category: 'personal_information_and_address',
            event_action: 'checkout_step1',
            event_label: 'next',
            request_tax_invoice: this.required_invoice ? 'yes' : 'no',
            customer_type: this.required_invoice ? this.account_type : '',
            ecommerce: {
              currencyCode: 'THB',
              checkout: {
                actionField: {
                  step: 1
                },
                products: computeGtagProducts(this.cart)
              }
            }
          })
          window.localStorage.setItem('invoice', this.required_invoice)
          window.localStorage.setItem('account_type', this.account_type)
          window.localStorage.setItem('agreement', this.agreement)
          window.localStorage.setItem('address', JSON.stringify(data))
          window.localStorage.removeItem('postpaid-billing')
          this.$router.push('/payment')
        })
      },
      fetchAddress (type, id, payload) {
        payload.language = this.$i18n.locale || 'th'
        const params = Object.keys(payload)
          .map((item) => {
            return `${item}=${payload[item]}`
          })
          .join('&')
        return this.$store
          .dispatch(FETCH_ADDRESS, {
            type,
            params
          })
          .then((data) => {
            this.formValid = true
            const options = data.map((item) => ({
              id: item.id,
              value: item.name
            }))
            options.unshift({
              id: '_',
              value: this.$i18n.locale === 'en' ? 'Please Select' : 'กรุณาเลือก',
              disabled: true
            })
            return options
          })
      },
      fetchAddressPostcode (type, id, payload) {
        payload.language = this.$i18n.locale || 'th'
        const params = Object.keys(payload)
          .map((item) => {
            return `${item}=${payload[item]}`
          })
          .join('&')
        return this.$store
          .dispatch(FETCH_ADDRESS, {
            type,
            params
          })
          .then((data) => {
            this.formValid = true
            return data[0].zip_code
          })
      },
      setLoading (form, id) {
        this[form][id] = '_'
        this.formValid = false
        this.Content[form][id].disabled = true
        this.Content[form][id].options = [
          {
            id: '_',
            value: 'Loading ...'
          }
        ]
      },
      fetchProvince (id) {
        return this.fetchAddress('province', 'province_id', {
          country_id: '209'
        })
      },
      fetchCity (id) {
        return this.fetchAddress('city', 'city_id', {
          province_id: id
        })
      },
      fetchDistrict (id) {
        return this.fetchAddress('district', 'district_id', {
          city_id: id
        })
      },
      fetchPostcode (id) {
        return this.fetchAddressPostcode('district', 'district_id', {
          id
        })
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
      async fetchPackage () {
        const data = await this.$store.dispatch(
          FETCH_PACKAGE,
          this.$route.params.nas || this.luckyNas
        )
        this.packages = data.record[0]
      },
      async fetchProduct () {
        await this.$store.dispatch(FETCH_PRODUCT_INFO, {
          id: this.$store.state.cart.cart.data.record[0].products[0].id
        })
      },
      async fetchPricePlan () {
        const params = {
          nas_code: this.luckyNas,
          product_id: this.$store.state.cart.cart.data.record[0].products[0].id
        }
        await this.$store.dispatch(FETCH_PRICE_PLAN, {
          params
        })
      },
      packageInfo () {
        return this.$store.state.postpaid.package.record[0]
      },
      setAddressFromProfile (address) {
        this.delivery_address = address
        Promise.all([
          this.fetchProvince(
            this.delivery_address.country_id,
            'delivery_address'
          ),
          this.fetchCity(this.delivery_address.province_id, 'delivery_address'),
          this.fetchDistrict(this.delivery_address.city_id, 'delivery_address'),
          this.fetchPostcode(
            this.delivery_address.district_id,
            'delivery_address'
          ),
          this.fetchProvince(this.billing_address.country_id, 'billing_address'),
          this.fetchCity(this.billing_address.province_id, 'billing_address'),
          this.fetchDistrict(this.billing_address.city_id, 'billing_address'),
          this.fetchPostcode(this.billing_address.district_id, 'billing_address')
        ]).then((results) => {
          this.Content.delivery_address.province_id.options = results[0]
          this.Content.delivery_address.city_id.options = results[1]
          this.Content.delivery_address.district_id.options = results[2]
          this.delivery_address.postcode = results[3]
          this.Content.billing_address.province_id.options = results[4]
          this.Content.billing_address.city_id.options = results[5]
          this.Content.billing_address.district_id.options = results[6]
          this.billing_address.postcode = results[7]
          this.$nextTick(() => {
            this.loading = false
          })
        })
      },
      async saveToProfile () {
        this.validateForm(async (data) => {
          if (this.user) {
            this.loading = true
            this.errors = []
            this.setAddressName('district')
            this.setAddressName('city')
            this.setAddressName('province')
            const { address1, address2, email, ...restAddr } = this.delivery_address
            await this.$store.dispatch(CREATE_SHIPPING_ADDRESS, {
              user_id: this.user.user_id,
              title: '-',
              address_1: address1,
              address_2: address2,
              shipping_email: email,
              address_default: this.isDefault ? 1 : 0,
              ...restAddr
            })
              .then((resp) => {
                window.sessionStorage.setItem('selected-address-id', resp?.data?.id)
              })
              .catch(() => {
                this.errors = [
                  {
                    th: 'มีปัญหาการชำระเงินจากการใส่ข้อมูลไม่ถูกต้อง โปรดตรวจสอบข้อมูลอีกครั้ง',
                    en: 'One or more fields contain have an error. Please check and try again.'
                  }
                ]
              })
            this.loading = this.isDefault = false
            return
          }
          this.$refs.dialogLogin.open()
        })
      },
      login () {
        this.loading = true
        this.$refs.dialogLogin.close()
        window.dispatchEvent(new Event('login'))
        window.addEventListener('true-login-cancelled', () => {
          this.loading = false
        }, {
          once: true
        })
      },
      signup () {
        window.location.href = window.url.MIX_SIGNUP_URL
      }
    }
  }
</script>

<style lang="scss">
.terms-dialog {
  .content {
    max-height: 85%;
    max-width: 860px;
    .dialog-content {
      padding: 36px;
    }
  }
}

.address-form .form {
  width: 50%;
  padding: 0 16px;

  .input_container {
    font-size: 22px;
    line-height: 28px;
  }
}

form.invalid {
  .input_container {
    .input input:invalid,
    .input input[invalid],
    select[invalid] {
      border-color: red;
    }
  }
}

@media screen and (max-width: 1000px) {
  .address-form .form {
    width: 100%;
    padding: 0 8px;
  }
}
</style>

<style scoped lang="scss" src="./style.scss"></style>
