<template>
  <div>
    <loading-element class="loading-container" v-if="loading" />
    <template v-else>
      <banner-element />
      <div class="store_container">
        <div class="product_container">
          <div class="product_header">
            <div class="arw-orange-sm-right sprite-icons" />
            <div class="product_header_content">
              <div class="title">{{ Content.selectmodel[$i18n.locale] }}</div>
              <div class="product_info">
                <span class="product_name">
                  {{ products.title }} <span
                    v-if="product.options.ความจุ"
                  >- {{ products.options.ความจุ[product.options.ความจุ].name }} / </span>
                </span>
                <span
                  class="product_color"
                  v-if="product.options.สี"
                >{{ Content.สี[$i18n.locale] }} {{ products.options.สี[product.options.สี].name }}</span>
              </div>
            </div>
          </div>
          <div class="product_content">
            <image-element
              ref="imageEle"
              :images="images"
            />
            <div class="product_details">
              <div class="product_details_container">
                <div class="product_detail">
                  <div class="product_label">{{ Content.modelname[$i18n.locale] }}</div>
                  <div class="product_option title">
                    <template
                      v-if="products.product_type === 'truecard' && user && truecard"
                    >{{ truecard.product_detail.name }}</template>
                    <template v-else>{{ products.title }}</template>
                  </div>
                </div>
                <!-- benefit on top -->
                <div class="product_detail">
                  <div class="product_label"></div>
                  <div class="product_option">
                    <clm-benefit-element
                      type="bundle"
                      v-model="subModule"
                      :product-type="products.product_type"
                      :product-id="products.id"
                      :promotion="promotion"
                      :matcode="$route.query.matcode"
                      :promotion_type="promotion_type"
                    ></clm-benefit-element>
                  </div>
                </div>
                <!-- end benefit on top -->
                <template v-if="products.product_type !== 'truecard'">
                  <div
                    class="product_detail"
                    v-for="(options, key) in products.options"
                    :key="key"
                  >
                    <div class="product_label">{{ Content[key] ? Content[key][$i18n.locale] : key }}</div>
                    <div class="product_option grid">
                      <div
                        class="option"
                        :class="[option.id === product.options[key] ? 'selected' : '']"
                        v-for="option in sortedOptions(options)"
                        :key="option.id"
                        @click="changeProduct(key, option.id)"
                      >
                        {{ option.name }}
                      </div>
                    </div>
                  </div>
                </template>
                <template v-else>
                  <div class="product_detail">
                    <div class="product_label"></div>
                    <div class="product_option">
                      <div class="truecard_msg">{{ Content.truecard_msg[$i18n.locale] }}</div>
                    </div>
                  </div>
                </template>
                <div class="product_detail" v-if="product.id && normalPrice !== 1 && normalPrice !== specialPrice">
                  <div class="product_label">{{ Content.regularprice[$i18n.locale] }}</div>
                  <div class="product_option price">
                    <span class="line-through">{{ computeBalance(normalPrice) }}</span>฿
                  </div>
                </div>
                <div class="product_detail special_price" v-if="product.id && status.status">
                  <div class="product_label">
                    <template v-if="showDiscountOnTop">{{ Content.regularprice[$i18n.locale] }}</template>
                    <template v-else>{{ Content.specialprice[$i18n.locale] }}</template>
                  </div>
                  <div class="product_option status" v-if="specialPrice === '0'">
                    <span class="red">{{ Content.free[$i18n.locale] }} *</span>
                  </div>
                  <div class="product_option price" v-else>
                    <span class="black">{{ computeBalance(actualSpecialPrice) }}</span>฿
                  </div>
                </div>
                <div
                  class="product_detail balance_point"
                  v-if="product.id && products.points[product.id] && checkPointStatus(products.points[product.id])"
                >
                  <div class="product_label" />
                  <div class="product_option">
                    <div class="balance_point_container">
                      <div class="text">
                        <span>{{ Content.redeemtruepoint[$i18n.locale] }}</span>
                        <img src="/images/icons/true-point-heart.png" />
                        <span class="number">
                          {{ products.points[product.id].point }}<span class="black">{{ Content.points[$i18n.locale] }}</span>
                          <span v-if="balancePrice !== '0'">
                            <span class="black">+</span>{{ balancePrice }}<span class="black">฿</span>
                          </span>
                        </span>
                      </div>
                      <div v-if="!showBalanceDetail">
                        <div
                          class="button"
                          @click="login"
                          v-if="!userLoading"
                        >{{ Content.checkbalance[$i18n.locale] }}</div>
                        <div
                          class="button"
                          disabled
                          v-else
                        >Loading ...</div>
                      </div>
                      <div
                        class="gray_container"
                        :class="showBalanceError ? 'error' : ''"
                        v-else
                      >
                        <div class="gray_text">
                          <div>{{ Content.yourtruepoint[$i18n.locale] }}</div>
                          <div><span class="number">{{ point }}</span> {{ Content.points[$i18n.locale] }}</div>
                        </div>
                        <div class="button" v-if="!showBalanceError" @click="computeCart">
                          <span>{{ Content.redeem[$i18n.locale] }}</span>
                          <img src="/images/icons/true-point-heart.png" />
                        </div>
                        <div class="error_text" v-else>
                          {{ Content.balanceerror[$i18n.locale] }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="product_detail" v-if="product.id && status">
                  <div class="product_label">{{ Content.status[$i18n.locale] }}</div>
                  <div class="product_option status">
                    <span :class="status.status ? 'green' : 'red'">{{ status.value }}</span>
                  </div>
                </div>
                <div class="product_detail" v-else>
                  <div class="product_label">{{ Content.status[$i18n.locale] }}</div>
                  <div class="product_option status">
                    <span class="red">{{ Content.outofstock[$i18n.locale] }}</span>
                  </div>
                </div>
                <div class="product_detail" v-if="payLater">
                  <div class="product_label">{{ Content.payLater[$i18n.locale] }}</div>
                  <div class="product_option paylater">
                      <span class="orange">{{ Content.payLaterContent[$i18n.locale] }}  <a :href="deepLinkPayLater">{{ Content.payLaterRegister[$i18n.locale] }}</a></span>
                  </div>
                </div>
                <template v-if="product.product_type === 'mnp'">
                  <template v-if="productInfo.sim_data.sim_type === 'postpaid'">
                    <div class="product_detail mnp">
                      <div class="product_label align-flex-start">{{ Content.mnp_select_package[$i18n.locale] }}</div>
                      <div class="product_option">
                        <mnp-element :disabled="product.id && status.status && !checkAllowAddcart" />
                      </div>
                    </div>
                  </template>
                  <template v-else>
                    <div class="product_detail mnp">
                      <div class="product_label" />
                      <div class="product_option">
                        <template v-if="checkAllowAddcart">
                          <router-link
                            :to="{
                              name: 'mnp-verify',
                              params: {
                                id: products.id,
                                code: productInfo.mnp_package[0].code
                              },
                              query: {
                                ep,
                                accs,
                                token: $route.query.token
                              }
                            }"
                          >
                            <button-element
                              class="red-bg-button"
                              id="buy_now_mnp"
                            >{{ Content.mnp_select_prepaid[$i18n.locale] }}</button-element>
                          </router-link>
                        </template>
                        <template v-else>
                          <button-element
                            class="red-bg-button"
                            disabled
                          >{{ Content.mnp_select_prepaid[$i18n.locale] }}</button-element>
                        </template>
                      </div>
                    </div>
                  </template>
                </template>
                <template v-else>
                  <device-bundle
                    v-if="(['device_bundle_existing', 'device_bundle_new_customer'].includes(product.product_type) && status.status) ||
                    ( products.multiCampaign && status.status )"
                    v-model="promotion"
                    :promotion_type="promotion_type"
                    @promotion_type="promotion_type = $event"
                    :products="products"
                    :product="product"
                    :normal-price="normalPrice"
                    :special-price="specialPrice"
                    :is5g="is5g"
                  />
                  <div
                    class="product_detail"
                    v-if="
                      isDeviceBundleNewCustomer && status.status ||
                      isMnpBundling && status.status ||
                      isMnpBundlingExisting && status.status ||
                      isMnpBundlingOneStep && status.status ||
                      isPre2Post && status.status ||
                      ( (['truemoveh', 'trueonline'].includes(this.promotion) && status.status) && (products.multiCampaign && status.status) )
                    "
                  >
                    <div class="product_label align-flex-start" />
                    <device-bundle-promo
                      v-model="promotion_sim"
                      :products="products"
                      :product="product"
                      :promotion="promotion"
                      :special-price="specialPrice"
                    />
                  </div>
                  <div
                    class="product_detail"
                    v-if="isDeviceBundleExisting && status.status"
                  >
                    <div class="product_label align-flex-start" />
                    <device-bundle-existing
                      @type-changed="existing_bundle.type = $event"
                      @pp-changed="existing_bundle.pp = $event"
                      @aging-changed="existing_bundle.aging = $event"
                      :existing_bundle="existing_bundle"
                      :products="products"
                      :product="product"
                      :promotion="promotion"
                      :special-price="specialPrice"
                    />
                  </div>
                </template>
                <div class="product_detail" v-if="productInfo.accessories && showAddon && status.status">
                  <div class="product_label align-flex-start">{{ Content.Accessories[$i18n.locale] }}</div>
                  <promo-addon
                    name="accessories"
                    :type="productInfo.only_one_accessory ? 'radio' : 'checkbox'"
                    v-model="accessories"
                    :promos="productInfo.accessories"
                  />
                </div>
                <div class="product_detail" v-if="productInfo.entertainment_packages && showAddon">
                  <div class="product_label align-flex-start">Entertainment Package</div>
                  <promo-addon
                    name="entertainment_packages"
                    type="radio"
                    v-model="entertainment_packages"
                    :promos="productInfo.entertainment_packages"
                  />
                </div>
                <div class="product_detail" v-if="products.product_type === 'truecard'">
                  <div class="product_label"></div>
                  <div class="product_option">
                    <div class="truecard_msg">{{ Content.truecard_login_msg[$i18n.locale] }}</div>
                  </div>
                </div>
                <div class="product_detail" v-if="coupon">
                  <div class="product_label align-flex-start">{{ Content.discount_label[$i18n.locale] }}</div>
                  <div class="product_option">
                    <div>{{ Content.discount_description.enter_the_code[$i18n.locale] }} <span class="red coupon-code">{{ coupon.code }}</span> {{ Content.discount_description.in_order_summary_page_to_get[$i18n.locale] }} {{ coupon.discount }} {{ Content.discount_description.on_top_discount[$i18n.locale] }}</div>
                  </div>
                </div>
                <div v-if="isSaleMode">
                  <div v-if="!checkAllowAddcart" class="product_detail">
                  <div class="product_label" />
                  <div class="product_option">
                    <div class="disable_addcart">
                      <button-element
                        v-if="products.product_type !== 'mnp'"
                        class="red-bg-button"
                        disabled
                      >{{ Content.buynow[$i18n.locale] }}</button-element>
                    </div>
                  </div>
                </div>
                  <div v-else class="product_detail">
                    <div class="product_label"/>
                      <div class="product_option">
                      <button-element class="red-bg-button" @click="showpopup">{{ Content.buy_customer[$i18n.locale] }}</button-element>
                      </div>
                    <popup-element ref="dialog"/>
                  </div>
                </div>
                <div v-else>
                  <div class="product_detail" v-if="product.id && status.status && checkAllowAddcart">
                  <div class="product_label" />
                  <div class="product_option">
                    <template v-if="products.product_type === 'gigatex'">
                      <a
                        href="https://truegigatexfiber.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        @click="setAnalytics(true)"
                      >
                        <button-element
                          class="red-bg-button"
                          id="buy_now"
                        >{{ Content.buynow_verify[$i18n.locale] }}</button-element>
                      </a>
                    </template>
                    <template v-else-if="products.product_type === 'truecard'">
                      <template v-if="userLoading">
                        <button-element
                          class="red-bg-button"
                          disabled
                        >Loading ...</button-element>
                      </template>
                      <template v-else>
                        <template v-if="user && truecard">
                          <button-element
                            @click="computeCart"
                            class="red-bg-button"
                            id="buy_now"
                          >{{ Content.buynow[$i18n.locale] }}</button-element>
                        </template>
                        <template v-else>
                          <button-element
                            class="red-bg-button"
                            @click="login"
                          >{{ Content.signin[$i18n.locale] }}</button-element>
                        </template>
                      </template>
                    </template>
                    <template v-else-if="products.product_type === 'happy_digital'">
                      <router-link
                        :to="{
                          name: 'online-store-verify',
                          params: {
                            id: products.id
                          },
                          query: {
                            ep,
                            accs,
                            token: $route.query.token
                          }
                        }"
                        v-on:click.native="setAnalytics(true)"
                      >
                        <button-element
                          class="red-bg-button"
                          id="buy_now"
                        >{{ Content.buynow_verify[$i18n.locale] }}</button-element>
                      </router-link>
                    </template>
                    <template v-else-if="['sim', 'postpaid', 'vlearn'].includes(products.product_type)">
                      <router-link v-if="isPrepaidSim"
                        :to="{
                          name: 'online-store-prepaid',
                          query: {
                            nas_code: productInfo.sim_data.propo_code,
                          }
                        }"
                        v-on:click.native="setAnalytics(true)"
                      >
                        <button-element class="red-bg-button" id="buy_now">{{ Content.buynow_prepaid[$i18n.locale] }}</button-element>
                      </router-link>
                      <router-link v-else
                        :to="{
                          name: 'packages',
                          query: {
                            type: 'postpaid',
                            product_id: products.id.replace(/\D/g, ''),
                            rc: $route.query.rc
                          }
                        }"
                        v-on:click.native="setAnalytics(true)"
                      >
                        <button-element
                          class="red-bg-button"
                          id="buy_now"
                        >{{ Content.buynow_postpaid[$i18n.locale] }}</button-element>
                      </router-link>
                    </template>
                    <template v-else-if="products.product_type === 'family_black_truecard'">
                      <router-link
                        :to="{
                          name: 'online-store-blackcard-verify',
                          params: {
                            product: products.id
                          },
                          query: {
                            ep,
                            accs,
                            token: $route.query.token
                          }
                        }"
                        v-on:click.native="setAnalytics(true)"
                      >
                        <button-element
                          class="red-bg-button"
                          id="buy_now"
                        >{{ Content.buynow_verify[$i18n.locale] }}</button-element>
                      </router-link>
                    </template>
                    <template v-else-if="products.product_type === 'restriction'">
                      <router-link
                        :to="{
                          name: 'online-store-trueidbox-verify',
                          params: {
                            product: products.id,
                            inventory: product.id,
                            promotion: 'restriction'
                          },
                          query: {
                            ep,
                            accs,
                            token: $route.query.token
                          }
                        }"
                        v-on:click.native="setAnalytics(true)"
                      >
                        <button-element
                          class="red-bg-button"
                          id="buy_now"
                        >{{ Content.buynow_verify[$i18n.locale] }}</button-element>
                      </router-link>
                    </template>
                    <template v-else-if="isPrepaidBundle">
                      <button-element
                        @click="computeBundleCart"
                        class="red-bg-button"
                        id="buy_now_prepaid"
                      >{{ Content.buynow[$i18n.locale] }}</button-element>
                    </template>
                    <template v-else-if="isMnpBundlingExisting">
                      <router-link
                        :to="{
                          name: 'online-store-trueidbox-verify',
                          params: {
                            product: products.id,
                            inventory: product.id,
                            promotion: promotion_sim
                          },
                          query: {
                            type: '4',
                            ep,
                            accs,
                            token: $route.query.token,
                            camptype: 'mnp_bundling_existing'
                          }
                        }"
                      >
                        <button-element
                          class="red-bg-button"
                          id="buy_now_mnp"
                        >{{ Content.buynow_verify[$i18n.locale] }}</button-element>
                      </router-link>
                    </template>
                    <template v-else-if="isMnpBundlingTyphoon">
                      <router-link
                        :to="{
                          name: 'online-store-mnp-bundle',
                          params: {
                            id: products.id,
                            inventory: product.id,
                            bundle: promotion_sim,
                          },
                          query: {
                            ep,
                            accs,
                            token: $route.query.token
                          }
                        }"
                      >
                        <button-element
                          class="red-bg-button"
                          id="buy_now_mnp"
                        >{{ Content.buynow_verify[$i18n.locale] }}</button-element>
                      </router-link>
                    </template>
                    <template v-else-if="isMnpBundling">
                      <router-link
                        :to="{
                          name: 'mnp-bundle-verify',
                          params: {
                            id: products.id,
                            inventory: product.id,
                            bundle: promotion_sim,
                          },
                          query: {
                            ep,
                            accs,
                            token: $route.query.token
                          }
                        }"
                      >
                        <button-element
                          class="red-bg-button"
                          id="buy_now_mnp"
                        >{{ Content.buynow_verify[$i18n.locale] }}</button-element>
                      </router-link>
                    </template>
                    <template v-else-if="isMnpBundlingOneStep">
                      <router-link
                        :to="{
                          name: 'mnp-bundle-verify',
                          params: {
                            id: products.id,
                            inventory: product.id,
                            bundle: promotion_sim,
                          },
                          query: {
                            ep,
                            accs,
                            token: $route.query.token
                          }
                        }"
                      >
                        <button-element
                          class="red-bg-button"
                          id="buy_now_mnp"
                        >{{ Content.buynow_verify[$i18n.locale] }}</button-element>
                      </router-link>
                    </template>
                    <template v-else-if="isPre2Post">
                      <router-link
                        :to="{
                          name: 'online-store-trueidbox-verify',
                          params: {
                            product: products.id,
                            inventory: product.id,
                            promotion: promotion_sim
                          },
                          query: {
                            type: '5',
                            ep,
                            accs,
                            token: $route.query.token,
                            camptype: 'pre2post'
                          }
                        }"
                      >
                        <button-element
                          class="red-bg-button"
                          id="buy_now_p2p"
                        >{{ Content.buynow_verify[$i18n.locale] }}</button-element>
                      </router-link>
                    </template>
                    <template v-else-if="isDeviceBundleNewCustomer">
                      <router-link
                        :to="{
                          name: 'online-store-bundle',
                          params: {
                            id: products.id,
                            bundle: promotion_sim,
                            nas: bundle ? bundle.proposition_mobile[0].nas_code : ''
                          },
                          query: {
                            ep,
                            accs,
                            token: $route.query.token
                          }
                        }"
                      >
                        <button-element
                          class="red-bg-button"
                          id="buy_now_new"
                        >{{ Content.buynow_verify[$i18n.locale] }}</button-element>
                      </router-link>
                    </template>
                    <template v-else-if="isDeviceBundleExisting">
                      <router-link
                        :to="{
                          name: 'online-store-trueidbox-verify',
                          params: {
                            product: products.id,
                            inventory: product.id,
                            promotion: promotion
                          },
                          query: {
                            type: existing_bundle.type || undefined,
                            pp: existing_bundle.pp || undefined,
                            ep,
                            accs,
                            token: $route.query.token,
                            camptype: 'device_bundle_existing'
                          }
                        }"
                      >
                        <button-element
                          class="red-bg-button"
                          id="buy_now_existing"
                        >{{ Content.buynow_verify[$i18n.locale] }}</button-element>
                      </router-link>
                    </template>
                    <template v-else-if="products.multiCampaign && ['truemoveh', 'trueonline'].includes(promotion)">
                      <template v-if="promotion">
                        <router-link
                          :to="{
                            name: 'online-store-trueidbox-verify',
                            params: {
                              product: products.id,
                              inventory: product.id,
                              promotion: promotion_sim
                            },
                            query: {
                              type: promotion || undefined,
                              ep,
                              accs,
                              token: $route.query.token
                            }
                          }"
                        >
                          <button-element
                            class="red-bg-button"
                            id="buy_now"
                          >{{ Content.buynow_verify[$i18n.locale] }}</button-element>
                        </router-link>
                      </template>
                      <template v-else>
                        <button-element
                          class="red-bg-button"
                          id="buy_now"
                          @click="computeCart"
                        >{{ Content.buynow[$i18n.locale] }}</button-element>
                      </template>
                    </template>
                    <template v-else-if="products.product_type === 'mnp'" />
                    <template v-else-if="products.product_type === 'device_bundle_new_customer' && promotion" />
                    <template v-else>
                      <button-element
                        class="red-bg-button"
                        id="buy_now_device"
                        @click="computeCart"
                      >{{ Content.buynow[$i18n.locale] }}</button-element>
                    </template>
                  </div>
                </div>
                <div class="product_detail" v-if="product.id && status.status && !checkAllowAddcart">
                  <div class="product_label" />
                  <div class="product_option">
                    <div class="disable_addcart">
                      <button-element
                        v-if="products.product_type !== 'mnp'"
                        class="red-bg-button"
                        disabled
                      >{{ Content.buynow[$i18n.locale] }}</button-element>
                      <div class="message">{{ Content.unable_add_cart[$i18n.locale] }}</div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab_container">
            <div class="tab">{{ Content.specsfeatures[$i18n.locale] }}</div>
          </div>
          <div class="product_promo">
            <div v-html="products.body_html[$i18n.locale] || products.body_html.th" />
          </div>
        </div>
      </div>
    </template>
    <div class="slanted_container">
      <div class="slanted" />
    </div>
    <script type='application/ld+json'>
      {{ jsonDetail() }}
    </script>
  </div>
</template>

<script>
  import qs from 'qs'
  import Button from '@components/button'
  import Loading from '@components/loading'
  import ClmBenefit from '@components/clm-benefit'
  import Banner from './banner'
  import Image from './image'
  import DeviceBundle from './device-bundle'
  import DeviceBundlePromo from './device-bundle-promo'
  import DeviceBundleExisting from './device-bundle-existing'
  import Content from './content.json'
  import Popup from './popup'
  import {
    computeBalance,
    checkPointStatus,
    computeGtagProductLabel,
    computeGtagProductDetail,
    showPayLater,
    setCampaignWeomniQuery
  } from '@utils/common'

  import {
    computeAddon,
    updateEntPack,
    loggerAddon
  } from '@utils/addon'

  import {
    UPDATE_CART,
    GET_BALANCE,
    REFRESH_TOKEN,
    UPDATE_BUNDLE_CART
  } from '@store/actions.type'

  import { COMMON_METADATA_STORE } from '../../../store/actions.type'

  export default {
    components: {
      'popup-element': Popup,
      'banner-element': Banner,
      'image-element': Image,
      'button-element': Button,
      'loading-element': Loading,
      'device-bundle': DeviceBundle,
      'device-bundle-promo': DeviceBundlePromo,
      'device-bundle-existing': DeviceBundleExisting,
      'clm-benefit-element': ClmBenefit,
      'promo-addon': () => import('./promo-addon'),
      'mnp-element': () => import('./mnp')
    },
    data: () => ({
      promotion_type: '',
      subModule: '',
      loading: true,
      showBalanceDetail: false,
      showBalanceError: true,
      product: {},
      products: {},
      userBalance: {},
      userLoading: false,
      isBuyingTrueCard: false,
      promotion: '',
      promotion_sim: '',
      existing_bundle: {
        type: '',
        pp: '',
        aging: ''
      },
      accessories: [],
      entertainment_packages: '',
      deepLinkPayLater: window.url.MIX_TMN_PAY_LATER_DEEP_LINK,
      Content,
      metaDatas: {}
    }),
    metaInfo () {
      return {
        title: this.productInfo.seo.title[this.$i18n.locale] || this.productInfo.seo.title.th,
        description: this.productInfo.seo.description[this.$i18n.locale] || this.productInfo.seo.description.th,
        meta: [
          {
            property: 'og:title',
            content: (this.metaDatas && this.metaDatas.title) ? this.metaDatas.title : ''
          },
          {
            property: 'og:description',
            content: (this.metaDatas && this.metaDatas.description) ? this.metaDatas.description : ''
          },
          {
            property: 'og:url',
            content: (this.metaDatas && this.metaDatas.url) ? this.metaDatas.url : ''
          },
          {
            property: 'og:image',
            content: (this.metaDatas && this.metaDatas.image) ? this.metaDatas.image : ''
          }
        ]
      }
    },
    computed: {
      isSaleMode () {
        const saleLocalData = JSON.parse(localStorage.getItem('TMH-SALE-DATA'))
        const saleMode = saleLocalData?.sale_mode
        return this.$route.name === 'online-store-detail' && saleMode === '1'
      },
      allowAddcart () {
        return this.$store.state.products.productStatus.data
      },
      user () {
        return this.$store.state.auth.profile.data
      },
      truecard () {
        return this.$store.state.auth.truecard.data
      },
      config () {
        return this.$store.state.config.verifyConfig
      },
      productInfo () {
        return this.$store.state.products.productInfo.data.record
      },
      is5g () {
        if (this.productInfo) {
          return this.productInfo.is_5g
        } else {
          return false
        }
      },
      inventoriesImages () {
        return Object.keys(this.products.inventories).map((e) => {
          const inventory = this.products.inventories[e]
          return inventory.image
        })
      },
      images () {
        if (this.product.product_type === 'truecard') {
          if (this.truecard) {
            const inventoryId = this.truecard.product_detail.inventory_id
            return [this.products.inventories[inventoryId].image]
          }
          return [this.products.image]
        }
        const images = [...this.products.images, ...this.inventoriesImages]
        return [...new Set(images.filter(e => e))]
      },
      coupon () {
        const data = this.$store.state.products.productInfo.data
        const couponData = data?.coupon_data_from_bff?.[data.record.id]
        if (!couponData || !couponData.coupon_status) return
        const coupon = couponData.coupon[0]
        const discount = computeBalance(coupon.discount)
        return {
          code: coupon.code,
          discount: coupon.discount_type === 'percent' ? `${discount}%` : `฿${discount}`
        }
      },
      normalPrice () {
        return this.computePrice('compare_at_price')
      },
      specialPrice () {
        return this.computePrice('price')
      },
      actualSpecialPrice () {
        if (this.promotion === '' && this.products.device_only && this.product.sku) {
          const discount = this.products.device_only[this.product.sku]
          if (discount) return this.specialPrice - discount
        }
        return this.specialPrice
      },
      balancePrice () {
        const id = this.product.id
        if (id) {
          const product = this.products.inventories[id]
          const price = product.price - this.products.points[id].discount
          return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        }
        return ''
      },
      point () {
        return this.userBalance.point.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      },
      status () {
        if (this.product.id) {
          const product = this.products.inventories[this.product.id]
          const status = product.quantity > 0 && product.allow_addcart
          return {
            value: status ? this.Content.instock[this.$i18n.locale] : this.Content.outofstock[this.$i18n.locale],
            status
          }
        }
        return ''
      },
      payLater () {
        return showPayLater(this.user)
      },
      checkAllowAddcart () {
        const addCart = this.allowAddcart.allow_addcart
        if (addCart.shop === false) return false
        if (this.productInfo.store.shipping_method?.PICKUP) return true
        if (!this.status.status) return
        const sim = ['postpaid', 'sim', 'vlearn', 'family_black_truecard', 'mnp']
        const isBdbc = this.products.promotions && this.products.promotions.find((promo) => (
          (promo.id === this.promotion) && promo.type === 'multi_campaign'
        ))
        if (isBdbc && this.product.product_type !== 'happy_digital') return addCart.bdbc
        if (this.isPre2Post) return addCart.ext
        if (this.isDeviceBundleExisting) return addCart.ext
        if (this.isMnpBundling) return addCart.new
        if (this.isPrepaidBundle) return addCart.new
        if (this.isMnpBundlingOneStep) return addCart.new
        if (this.isMnpBundlingExisting) return addCart.new
        if (this.isDeviceBundleNewCustomer) return addCart.new
        if (sim.includes(this.product.product_type)) return addCart.sim_only
        return addCart.product
      },
      campaign () {
        return this.config.campaigns[this.products.promotion.id]
      },
      bundle () {
        return this.products.bundles && this.products.bundles.find(bundle => bundle.id === this.promotion_sim)
      },
      existingBundle () {
        const bundle = this.products.bundle_existing.find(e => e.campaign_type === this.existing_bundle.type)
        if (this.existing_bundle.type === '2') {
          return bundle.discount_list.filter((e) => e.product_code === this.product.sku)
        }
        return bundle.discount_list
      },
      pre2post () {
        const bundle = this.products.bundle_existing.find(e => e.campaign_type === '5')
        const discount = bundle.discount_list.find(e => e.id.toString() === this.promotion_sim)
        return discount
      },
      mnpBundlingExisting () {
        const bundle = this.products.bundle_existing.find((e) => e.campaign_type === '4')
        const discount = bundle.discount_list.find((e) => e.id.toString() === this.promotion_sim)
        return discount
      },
      isDeviceBundleNewCustomer () {
        return this.promotion && this.config.verify_ui[this.promotion] && this.product.product_type === 'device_bundle_new_customer'
      },
      isDeviceBundleExisting () {
        return this.promotion &&
          this.config.campaigns[this.promotion] &&
          ['device_bundle_new_customer', 'device_bundle_existing'].includes(this.product.product_type)
      },
      isMnpBundling () {
        return this.promotion === 'mnp_bundling'
      },
      isMnpBundlingExisting () {
        return this.promotion === 'mnp_bundling_existing'
      },
      isMnpBundlingOneStep () {
        return this.promotion === 'mnp_bundling_one_step'
      },
      isMnpBundlingTyphoon () {
        return this.promotion === 'mnp_bundling' && this.bundle && this.bundle.is_typhoon
      },
      isPrepaidBundle () {
        return this.promotion === 'prepaid_bundle'
      },
      isPre2Post () {
        return this.promotion === 'pre2post'
      },
      ep () {
        return this.entertainment_packages || undefined
      },
      accs () {
        if (this.productInfo.only_one_accessory) return this.accessories || undefined
        return this.accessories.length > 0 ? this.accessories.join(',') : undefined
      },
      showAddon () {
        const product = this.productInfo
        const types = ['sim', 'postpaid', 'vlearn', 'happy_digital', 'truecard', 'gigatex', 'family_black_truecard']
        if (product.product_type === 'mnp' && product.sim_data.sim_type === 'postpaid') return false
        if (types.includes(product.product_type)) return false
        return true
      },
      sortedOptions () {
        return (options) => {
          return Object.keys(options).map(e => ({
            id: e,
            name: options[e].name,
            pos: options[e].position
          })).sort((a, b) => (a.pos - b.pos))
        }
      },
      showDiscountOnTop () {
        return this.productInfo?.additional?.discount_on_top
      },
      isPrepaidSim () {
        const prepaidAllowList = this.config.prepaid_search || []
        const product = this.productInfo
        const productId = product.id
        return product.sim_data?.sim_type === 'prepaid' && prepaidAllowList.includes(productId)
      },
      categoryInfo () {
        return this.productInfo.category ? this.productInfo.category[0].title.th : ''
      },
      brandInfo () {
        if (this.productInfo.features) {
          for (const key in this.productInfo.features) {
            if (this.productInfo.features.hasOwnProperty(key)) {
              for (const keyTwo in this.productInfo.features[key].value) {
                if (this.productInfo.features[key].value.hasOwnProperty(keyTwo)) {
                  return this.productInfo.features[key].value[keyTwo]
                }
              }
            }
          }
        }

        return ''
      }
    },
    watch: {
      user () {
        if (this.user) {
          const isTruecard = this.product.product_type && this.product.product_type === 'truecard'
          if (isTruecard && this.userLoading && this.truecard && this.isBuyingTrueCard) {
            if (this.checkAllowAddcart()) this.computeCart()
            this.userLoading = false
            return
          }
          this.getBalance()
        }
      },
      truecard () {
        if (this.truecard) {
          const isTruecard = this.product.product_type && this.product.product_type === 'truecard'
          if (isTruecard && this.userLoading && this.user && this.isBuyingTrueCard) {
            if (this.checkAllowAddcart()) this.computeCart()
            this.userLoading = false
          }
        }
      },
      promotion (value) {
        switch (value) {
          case '': {
            this.updateURLQuery('usecase', 4)
            this.updateURLQuery('selected_campaign', 'device_only')
            break
          }
          case 'device_bundle_new_customer': {
            this.updateURLQuery('usecase', 1)
            this.updateURLQuery('selected_campaign', 'new_number')
            break
          }
          case 'pre2post': {
            this.updateURLQuery('usecase', undefined)
            this.updateURLQuery('selected_campaign', 'switch_to_postpaid')
            break
          }
          case 'prepaid_bundle':
          case 'mnp_bundling':
          case 'mnp_bundling_existing':
          case 'mnp_bundling_one_step': {
            this.updateURLQuery('usecase', undefined)
            this.updateURLQuery('selected_campaign', value)
            break
          }
          default: {
            this.updateURLQuery('selected_campaign', 'existing_postpaid')
            const promo = this.products.promotions.find(e => e.id === value)
            if (!this.existing_bundle.type) return
            if (promo?.type !== 'promotions') this.updateURLQuery('usecase', undefined)
            break
          }
        }
      },
      promotion_type (value) {
        this.promotion_type = value
      },
      promotion_sim (value) {
        if (value === '') this.promotion = ''
      },
      existing_bundle: {
        deep: true,
        handler () {
          if (this.existing_bundle.type === '3') {
            const bundle = this.products.bundle_existing.find(e => e.campaign_type === '3')
            const discount = bundle.discount_list.find(e => e.id.toString() === this.existing_bundle.pp)
            if (discount) {
              this.updateURLQuery('usecase', 2)
              this.updateURLQuery('rc', discount.rc)
            }
          } else {
            this.updateURLQuery('rc', undefined)
          }
        }
      },
      'existing_bundle.type' (value, oldValue) {
        const promo = this.products.promotions.find(e => e.id === this.promotion)
        if (promo?.type !== 'promotions') return
        this.updateURLQuery('usecase', value === '2' ? 5 : undefined)
      }
    },
    async mounted () {
      try {
        window.localStorage.removeItem('iot-package')
        const productStatusData = { product_id: this.$route.params.id }
        const hash = window.localStorage.getItem('cart-id')

        if (hash) productStatusData.hash = hash

        if (this.$route.query.afc) {
          const afcData = {
            afc: this.$route.query.afc,
            timestamp_expired: Date.now() + 86400000
          }
          localStorage.setItem('truestore-afc', JSON.stringify(afcData))
        }

        const tmhSaleData = JSON.parse(localStorage.getItem('TMH-SALE-DATA'))
        if (tmhSaleData?.token) {
          const query = Object.assign({}, this.$route.query)
          query.token = tmhSaleData?.token
          this.$router.replace({ query })
        }

        await this.computeProductInfo()
        setCampaignWeomniQuery()
        this.$nextTick(() => this.setAnalytics())
        this.metaData()
      } catch (e) {
        this.$router.push('/online-store/error')
      }
    },
    methods: {
      async metaData () {
        const param = []
        param.code = 'Truestore_metadata_level_d'
        const metaDatas = await this.$store.dispatch(COMMON_METADATA_STORE, {
          params: param
        })

        metaDatas.data.record?.sections.map(element => {
          element.contents.map(value => {
            let response = value.custom_fields.metadata.replace(/(<p>|<\/p>)/g, '')
            response = JSON.parse(response)

            this.metaDatas = response
          })
        })
      },
      computeBalance,
      checkPointStatus,
      showpopup () {
        this.$refs.dialog.open()
      },
      getBundleAnalytics () {
        const db = ['device_bundle_existing', 'device_bundle_new_customer']
        if (!db.includes(this.product.product_type) && !this.products.multiCampaign) return {}
        switch (this.promotion) {
          case 'device_bundle_new_customer': {
            return ({
              dimension30: 'New Customer',
              dimension31: '',
              dimension32: this.bundle.price_after_discount_device_bundle_new_customer.toFixed(2),
              dimension33: `${this.bundle.name} ชำระค่าบริการล่วงหน้า: ${this.bundle.advance_payment}฿`,
              metric2: this.bundle.advance_payment
            })
          }
          case 'mnp_bundling_existing': {
            return ({
              dimension30: 'Move to Us',
              dimension31: 'ลูกค้าย้ายค่ายเบอร์เดิม พร้อมสมัครแพ็กเกจที่กำหนด ภายใน 30 วัน',
              dimension32: (this.normalPrice - this.mnpBundlingExisting.discount).toFixed(2),
              dimension33: `${this.products.title} ย้ายค่ายเบอร์เดิม พร้อมสมัครแพ็กเกจ ${this.mnpBundlingExisting.rc} ขึ้นไป ชำระค่าบริการล่วงหน้า: ${this.mnpBundlingExisting.advance_payment.toFixed(2)}฿`,
              metric2: this.mnpBundlingExisting.advance_payment.toFixed(2)
            })
          }
          case 'mnp_bundling': {
            return ({
              dimension30: 'Move to Us Online Exclusive',
              dimension31: '',
              dimension32: this.bundle.price_after_discount_device_bundle_new_customer.toFixed(2),
              dimension33: `${this.bundle.name} ชำระค่าบริการล่วงหน้า: ${this.bundle.advance_payment}฿`,
              metric2: this.bundle.advance_payment
            })
          }
          case 'mnp_bundling_one_step': {
            return ({
              dimension30: 'Move to TrueMove H',
              dimension31: '',
              dimension32: this.bundle.price_after_discount_device_bundle_new_customer.toFixed(2),
              dimension33: `${this.bundle.name} ชำระค่าบริการล่วงหน้า: ${this.bundle.advance_payment}฿`,
              metric2: this.bundle.advance_payment
            })
          }
          case 'pre2post': {
            return ({
              dimension30: 'Switch to Postpaid',
              dimension31: '',
              dimension32: (this.normalPrice - this.pre2post.discount).toFixed(2),
              dimension33: `${this.products.title} เปลี่ยนเติมเงินเป็นรายเดือน พร้อมสมัครแพ็กเกจ ${this.pre2post.rc} ขึ้นไปชำระค่าบริการล่วงหน้า: ${this.pre2post.advance_payment}฿`,
              metric2: this.pre2post.advance_payment.toFixed(2)
            })
          }
          case 'prepaid_bundle': {
            return ({
              dimension30: 'Device with Free Prepaid SIM',
              metric2: '0.00'
            })
          }
          case '': {
            return ({
              dimension30: 'Handset only',
              dimension31: '',
              dimension32: '',
              dimension33: '',
              metric2: '0.00'
            })
          }
          default: {
            if (this.isDeviceBundleExisting) {
              const labels = {
                1: 'Only for True Move H Postpaid customers aged over 1 year',
                2: 'Only for True Move H Postpaid customers aged less then 3 months',
                3: 'For existing TMH customer with no contract, no advance payment, and apply for 5G Super Max Speed for iPhone package only'
              }
              const dimension32 = []
              const dimension33 = []
              const metric2 = []
              this.existingBundle.forEach((e) => {
                if (this.existing_bundle.type === '3') {
                  if (this.product.sku !== e.product_code) return
                  if (this.existing_bundle.pp !== e.id.toString()) return
                  dimension32.push((this.normalPrice - e.discount).toFixed(2))
                  dimension33.push(`${this.products.title} ลูกค้าปัจจุบัน พร้อมสมัครแพ็กเกจ ${e.rc} ขึ้นไป ชำระค่าบริการล่วงหน้า: ${e.advance_payment.toFixed(2)}฿`)
                  metric2.push(e.advance_payment.toFixed(2))
                } else {
                  dimension32.push((this.normalPrice - e.discount).toFixed(2))
                  dimension33.push(`${this.products.title} ใช้หรือสมัครแพ็กเกจรายเดือน ${e.rc} ขึ้นไป`)
                  metric2.push('0.00')
                }
              })
              return {
                dimension30: 'Existing TrueMove H Postpaid',
                dimension31: labels[this.existing_bundle.type],
                dimension32: dimension32.join(', '),
                dimension33: dimension33.join(', '),
                metric2: metric2.join(', ')
              }
            }
            return false
          }
        }
      },
      setAnalytics (isBuy) {
        if (!this.product.id) return
        let isSim = false
        let productType = ''
        switch (this.product.product_type) {
          case 'postpaid':
          case 'vlearn': {
            isSim = true
            productType = 'postpaid'
            break
          }
          case 'happy_digital' : {
            const simArr = this.config.verify.map(product => {
              if (product.id === this.products.id) productType = product.type
              if (product.type === 'postpaid' || product.type === 'prepaid') {
                return product.id
              }
            }).filter(item => item)
            isSim = simArr.includes(this.products.id)
            break
          }
        }
        const bundleAnalytics = this.getBundleAnalytics()
        const eventAction = isBuy ? (isSim ? 'buy_SIM' : 'product_add_to_cart') : 'product_detail'
        const ecommerceAction = isBuy ? (isSim ? 'click' : 'add') : 'detail'
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event: 'ecommerce_event',
          event_category: isSim ? 'SIM_detail' : 'device_detail',
          event_action: eventAction,
          event_label: computeGtagProductLabel(this.products, this.product),
          ecommerce: {
            currencyCode: 'THB',
            [ecommerceAction]: {
              actionField: {
                list: isSim ? 'SIM' : 'device'
              },
              products: [
                computeGtagProductDetail(this.products, this.product, isSim, productType, isBuy, bundleAnalytics)
              ]
            }
          }
        })
      },
      login () {
        if (this.product.product_type === 'truecard') this.isBuyingTrueCard = true
        this.userLoading = true
        window.dispatchEvent(new Event('login'))
        window.addEventListener('true-login-cancelled', () => {
          this.userLoading = false
        })
      },
      refreshToken () {
        this.$store.dispatch(REFRESH_TOKEN).then((data) => {
          this.userLoading = false
          if (data.status_code === 0 && data.status_txt === 'Success') {
            this.getBalance()
          }
        })
      },
      getBalance () {
        this.userLoading = true
        return this.$store.dispatch(GET_BALANCE).then((data) => {
          this.userBalance = data.data
          this.showBalanceDetail = true
          this.userLoading = false
          this.checkPoint()
          return data
        }).catch((error) => {
          const msg = 'jwk or access_token is not set properly when used'
          if (error && !error.is_get_token && error.message.en === msg) {
            this.refreshToken()
          } else {
            this.userLoading = false
          }
        })
      },
      async updateCart (data, action = UPDATE_CART) {
        try {
          const result = await this.$store.dispatch(action, {
            id: window.localStorage.getItem('cart-id'),
            data
          })
          window.localStorage.setItem('cart-id', result.cart_hash)
          await updateEntPack(this.entertainment_packages, this.$route.query, this.productInfo, result.cart_hash, this.product)
          if (this.productInfo.store.shipping_method.PICKUP) {
            this.$router.push('/pickup')
          } else {
            this.$router.push(`/address?id=${result.cart_hash}`)
          }
        } catch (e) {
          if (e?.message === 'err-ent-pack') {
            this.$router.push('/cart?error=030')
          } else if (e?.message?.en === 'prepaid_quantity_limit') {
            this.$router.push(`/cart?error=013&pql_pid=${e.product_id}&pql_iid=${e.inventory_id}`)
          } else if (e?.message?.en === 'sku_limit') {
            this.$router.push('/cart?error=020')
          } else if (e?.message?.en === 'pickup_at_seven_quantity_limit') {
            this.$router.push('/cart?error=040')
          } else if (e?.message?.en === 'pickup_at_seven_product_in_cart') {
            this.$router.push('/cart?error=040')
          } else {
            this.loading = false
          }
        }
      },
      checkRedirectWemall () {
        this.productInfo.campaign && this.productInfo.campaign.forEach((campaign) => {
          const config = this.config.campaigns[campaign.id]
          if (config && config.redirect_to_wemall) {
            window.location.href = `https://www.wemall.com/d/${this.productInfo.id}`
          }
        })
      },
      async computeProductInfo () {
        this.checkRedirectWemall()
        this.products = this.computeProducts()
        // redirect when this product is accessory
        if (this.products.is_addon) {
          this.$router.push('/online-store')
        }
        this.product = {
          sku: '',
          id: '',
          title: this.products.title,
          product_type: this.products.product_type,
          options: {}
        }
        const options = this.products.options
        if (options) {
          let inventory
          if (this.$route.query.matcode) {
            const inventoryId = Object.keys(this.products.inventories).find((e) => {
              return this.products.inventories[e].sku === this.$route.query.matcode
            })
            if (inventoryId) inventory = this.products.inventories[inventoryId]
          }
          Object.keys(options).forEach((option) => {
            const value = inventory ? inventory.options[option].toString() : this.sortedOptions(options[option])[0].id
            this.product.options[option] = value
          })
        }
        this.computeProduct()
        await this.getBalance()
        this.loading = false
      },
      async computeCart () {
        this.setAnalytics(true)
        this.loading = true
        const data = []
        const product = {
          product_id: this.products.id,
          inventory_id: this.product.id,
          quantity: 1,
          store_id: this.productInfo.store_id,
          section: this.productInfo.section,
          token_coupon: this.productInfo.token_coupon,
          channel: 'tmh-website',
          pickup: this.productInfo.store.shipping_method?.PICKUP
        }
        if (this.products.product_type === 'truecard') {
          product.inventory_id = this.truecard.product_detail.inventory_id
          product.login_trueid_access_token_type = 'trueid_access_token'
        }
        data.push(product)
        if (!this.productInfo.only_one_accessory) {
          this.accessories.forEach((accessory) => {
            const accs = computeAddon(accessory, 'accessories', this.productInfo)
            if (accs) data.push(accs)
          })
        } else if (this.accessories) {
          const accs = computeAddon(this.accessories, 'accessories', this.productInfo)
          if (accs) data.push(accs)
        }
        await this.updateCart(data)
      },
      async computeBundleCart () {
        this.setAnalytics(true)
        this.loading = true
        const bundle = this.products.bundles.filter(bundle => {
          return bundle.inventory_id &&
            (this.product.id === bundle.inventory_id.toString()) &&
            bundle.sim_type === 'prepaid'
        })
        const hash = window.localStorage.getItem('cart-id')
        const main = bundle[0].inventories.find((e) => e.product_type === 'main_item')
        const binding = bundle[0].inventories.find((e) => e.product_type === 'binding_item')
        const data = {
          hash,
          bundle_channel: 'tmvh-official-website',
          products: [
            {
              product_id: main.product_id,
              inventory_id: main.inventory_id,
              quantity: 1,
              store_id: this.productInfo.store_id,
              lang: 'th',
              section: 'wemall',
              user_id: '0',
              bundle_hash: bundle[0].id,
              bundle_ref_code: bundle[0].ref_code,
              channel: 'tmh-website',
              sku: this.product.sku
            },
            {
              product_id: binding.product_id,
              inventory_id: binding.inventory_id,
              quantity: 1,
              store_id: this.productInfo.store_id,
              lang: 'th',
              section: 'wemall',
              user_id: '0',
              bundle_hash: bundle[0].id,
              bundle_ref_code: bundle[0].ref_code,
              channel: 'tmh-website',
              sim_meta: [
                {
                  sim_type: 'prepaid',
                  product_info: {
                    product_id: binding.product_id.replace(/\D/g, ''),
                    product_type: 'sim',
                    store_id: this.productInfo.store_id,
                    inventory_id: binding.inventory_id,
                    propo_code: bundle[0].proposition_data.api_output.nas_code
                  },
                  proposition: {
                    term_short: bundle[0].proposition_data.api_output.term_short,
                    id: bundle[0].proposition_data.api_output.id,
                    name: bundle[0].proposition_data.api_output.name
                  }
                }
              ]
            }
          ],
          user_id: '0',
          section: 'wemall'
        }

        if (localStorage.getItem('iot-package')) {
          data.products[0].meta = JSON.parse(localStorage.getItem('iot-package'))
        }

        this.accessories.forEach((accessory) => {
          const accs = computeAddon(accessory, 'accessories', this.productInfo)
          if (accs) data.products.push(accs)
        })
        await this.updateCart(data, UPDATE_BUNDLE_CART)
      },
      computeProducts () {
        const data = this.productInfo
        const product = {
          id: data.id,
          title: data.title.th,
          inventories: {},
          images: data.images.map(e => e.url),
          image: data.images[0].url,
          points: {},
          options: {},
          body_html: data.body_html,
          product_type: data.product_type,
          bundle_existing: data.bundle_existing || [],
          device_only: data.device_only,
          token_coupon: data.token_coupon,
          is_mnp_bundling: data.is_mnp_bundling,
          is_addon: data.is_addon,
          promotion: data.promotion && data.promotion[0],
          promotions: data.campaign && data.campaign.map(promo => ({
            active: promo.active,
            start: promo.start,
            end: promo.end,
            id: promo.id.toString(),
            max_discount: promo.max_discount,
            title: (this.config.campaigns[promo.id] && this.config.campaigns[promo.id].campaign_name) || promo.title,
            type: 'promotions'
          })).filter(item => this.config.campaigns[item.id]),
          bundles: data.bundles && data.bundles.filter((bundle) => {
            const current = new Date()
            const start = new Date(bundle.start_date * 1000)
            const end = new Date(bundle.end_date * 1000)
            const dateActive = (current >= start && current <= end)
            return dateActive && bundle.enable
          })
        }
        if (product.product_type === 'device_bundle_new_customer') {
          const promo = Object.keys(this.config.verify_ui).map((item) => ({
            id: item,
            title: this.config.verify_ui[item].campaign_name,
            type: 'device_bundle_new_customer'
          }))
          product.promotions = [...product.promotions || [], ...promo]
        }
        if (product.is_mnp_bundling) {
          const promo = [{
            id: 'mnp_bundling',
            title: {
              th: 'ย้ายค่ายเบอร์เดิม พร้อมเปิดเบอร์ใหม่',
              en: 'Move to us (MNP Share Plan)'
            },
            type: 'mnp_bundling'
          }, {
            id: 'mnp_bundling_existing',
            title: {
              th: 'ย้ายค่าย ออนไลน์เท่านั้น',
              en: 'Move to us'
            },
            type: 'mnp_bundling_existing'
          }, {
            id: 'mnp_bundling_one_step',
            title: {
              th: 'ลูกค้าย้ายค่าย ออนไลน์เท่านั้น',
              en: 'Move to TrueMove H'
            },
            type: 'mnp_bundling_one_step'
          }]
          product.promotions = [...product.promotions || [], ...promo]
        }
        if (data.promotion && data.promotion.length > 0) {
          const promo = [{
            id: 'truemoveh',
            title: {
              th: 'ลูกค้าปัจจุบัน ทรูมูฟ เอช',
              en: 'Existing TrueMove H'
            },
            type: 'multi_campaign'
          }, {
            id: 'trueonline',
            title: {
              th: 'ลูกค้า ทรูออนไลน์',
              en: 'TrueOnline Customer'
            },
            type: 'multi_campaign'
          }]
          data.promotion.forEach((item) => { item.id = item.id.toString() })
          product.promotions = [...product.promotions || [], ...promo]
          product.bundles = [...product.bundles || [], ...data.promotion]
          product.multiCampaign = true
        }
        if (data.points && data.points.length > 0) {
          const point = data.points[0]
          const inventories = point.inventories
          if (inventories && inventories.length > 0) {
            inventories.forEach((inventory) => {
              product.points[inventory.inventory_id] = {
                point: inventory.point,
                discount: inventory.discount,
                status: point.status,
                start_date: point.start_date,
                end_date: point.end_date
              }
            })
          }
        }
        data.inventories.forEach((inventory) => {
          product.inventories[inventory.id] = {
            sku: inventory.sku,
            price: inventory.price,
            compare_at_price: inventory.compare_at_price,
            quantity: inventory.quantity,
            image: inventory.image.url,
            allow_addcart: inventory.allow_addcart,
            options: {}
          }
          inventory.options.forEach((option) => {
            const id = option.title.th
            product.inventories[inventory.id].options[id] = option.values.id
            if (!product.options[id]) product.options[id] = {}
            product.options[id][option.values.id] = {
              name: option.values.title.th,
              position: option.values.position
            }
          })
        })

        if (data.group_type) {
          localStorage.setItem('typhoon-group', data.group_type)
        } else {
          localStorage.removeItem('typhoon-group')
        }

        if (data.only_one_accessory) this.accessories = ''
        return product
      },
      computeProduct () {
        const inventories = this.products.inventories
        let productExists = false
        Object.keys(inventories).some((inventory) => {
          let sameProduct = true
          const options = inventories[inventory].options
          if (options) {
            Object.keys(options).forEach((option) => {
              const valid = options[option].toString() === this.product.options[option]
              if (!valid) sameProduct = false
            })
          }
          if (sameProduct) {
            this.product.id = inventory
            this.product.sku = inventories[inventory].sku
            this.updateURLQuery('matcode', inventories[inventory].sku)

            loggerAddon({
              event: 'Visit product',
              productId: this.products.id,
              matcode: inventories[inventory].sku
            })

            productExists = true
          }
        })
        if (!productExists) {
          this.product.id = ''
        }
      },
      checkPoint () {
        if (this.products.points[this.product.id]) {
          if (this.userBalance.point >= this.products.points[this.product.id].point) {
            this.showBalanceError = false
          }
        }
      },
      changeProduct (key, value) {
        if (this.product.options[key] === value) return
        this.product.options[key] = value
        this.computeProduct()
        this.checkPoint()
        if (this.product.id) {
          const image = this.products.inventories[this.product.id].image
          if (image) this.$refs.imageEle.goTo(image)
          this.$nextTick(() => this.setAnalytics())
        }
      },
      computePrice (key) {
        if (this.product.id) {
          const product = this.products.inventories[this.product.id]
          return product[key]
        }
      },
      updateURLQuery (key, value) {
        const query = this.$route.query
        query[key] = value
        const newurl = `${window.location.origin}${window.location.pathname}?${qs.stringify(query)}`
        window.history.replaceState({ path: newurl }, '', newurl)
      },
      jsonDetail () {
        const colorText = this.product.options ? (this.products.options.สี ? this.products.options.สี[this.product.options.สี].name : '') : ''
        const capacityText = this.product.options ? (this.products.options.ความจุ ? this.products.options.ความจุ[this.product.options.ความจุ].name : '') : ''
        let promotionSummary = ''
        if (this.products.promotions) {
          promotionSummary = this.products.promotions.map(promo => ({
            active: promo.active,
            start: promo.start,
            end: promo.end,
            title: (this.config.campaigns[promo.id] && this.config.campaigns[promo.id].campaign_name) || promo.title
          }))
        }

        return {
          '@context': 'https://www.schema.org',
          '@type': 'Product',
          name: this.products.title ? this.products.title : '',
          image: this.products.image ? this.products.image : '',
          url: window.url.MIX_APP_URL + `/online-store/item/${this.products.id}`,
          category: this.categoryInfo ? this.categoryInfo : '',
          brand: {
            '@type': 'Brand',
            name: this.brandInfo ? this.brandInfo.title.th : '',
            url: window.url.MIX_APP_URL + `/online-store?brand=${this.brandInfo.id}`
          },
          materialCode: this.product.id ? this.products.inventories[this.product.id].sku : '',
          description: this.productInfo.seo.description.th ? this.productInfo.seo.description.th : '',
          color: colorText,
          capacity: capacityText,
          model: (this.products.title ? this.products.title : '') + ' ' + colorText + ' ' + capacityText,
          promotion: promotionSummary,
          offers: {
            '@type': 'AggregateOffer',
            availability: 'https://schema.org/InStock',
            url: window.url.MIX_APP_URL + `/online-store/item/${this.products.id}`,
            seller: {
              '@type': 'Organization',
              name: this.productInfo.store ? this.productInfo.store.title.th : ''
            },
            priceCurrency: 'THB',
            offerCount: this.product.id ? this.products.inventories[this.product.id].quantity : '',
            lowPrice: this.actualSpecialPrice ? this.actualSpecialPrice : 0,
            highPrice: this.actualSpecialPrice ? this.actualSpecialPrice : 0
          }
        }
      }
    }
  }
</script>

<style lang="scss">
  .product_promo {
    font-size: 1.5em;
    word-break: break-all;

    img {
      max-width: 100%;
    }
  }
</style>
<style scoped lang="scss" src="../store.scss"></style>
<style scoped lang="scss" src="./style.scss"></style>
