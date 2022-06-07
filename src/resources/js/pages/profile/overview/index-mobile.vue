<template>
  <div class="col-12 d-md-none">
    <div class="row">
      <div class="col-3">
        <img :src = "avatar" class="rounded-circle w-100">
      </div>
      <div class="col-9">
        <div class="row">
          <div class="col-8 font-bold h5 text-break">{{ displayName }}</div>
          <div class="col-4 font-light text-right"><span class="text-primary" role="button" @click="$router.push('/profile/detail')">{{ Content.label.edit[$i18n.locale ]}}</span></div>
        </div>
      </div>
    </div>
    <div class="row py-4">
      <div class="col-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="27" viewBox="0 0 21 27" fill="none">
              <path d="M17.3043 3.17407H19.4783V26.0002H6.43478H1V20.5654V3.17407H3.17391" stroke="url(#paint0_linear_80_2908)" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15.1304 5.34783H5.34782V3.17391C5.34782 1.97826 6.32608 1 7.52174 1H12.9565C14.1522 1 15.1304 1.97826 15.1304 3.17391V5.34783Z" stroke="url(#paint1_linear_80_2908)" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M5.34782 10.7827H15.1304" stroke="url(#paint2_linear_80_2908)" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M5.34782 16.2175H15.1304" stroke="url(#paint3_linear_80_2908)" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <defs>
                  <linearGradient id="paint0_linear_80_2908" x1="13.3618" y1="40.4266" x2="-6.49414" y2="35.6274" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#DF1584"/>
                      <stop offset="0.2917" stop-color="#DF1E5F"/>
                      <stop offset="0.5722" stop-color="#E02542"/>
                      <stop offset="0.8173" stop-color="#E02932"/>
                      <stop offset="1" stop-color="#E02B2C"/>
                  </linearGradient>
                  <linearGradient id="paint1_linear_80_2908" x1="11.8923" y1="8.09572" x2="4.22601" y2="2.94561" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#DF1584"/>
                      <stop offset="0.2917" stop-color="#DF1E5F"/>
                      <stop offset="0.5722" stop-color="#E02542"/>
                      <stop offset="0.8173" stop-color="#E02932"/>
                      <stop offset="1" stop-color="#E02B2C"/>
                  </linearGradient>
                  <linearGradient id="paint2_linear_80_2908" x1="11.8923" y1="12.4147" x2="10.725" y2="9.00515" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#DF1584"/>
                      <stop offset="0.2917" stop-color="#DF1E5F"/>
                      <stop offset="0.5722" stop-color="#E02542"/>
                      <stop offset="0.8173" stop-color="#E02932"/>
                      <stop offset="1" stop-color="#E02B2C"/>
                  </linearGradient>
                  <linearGradient id="paint3_linear_80_2908" x1="11.8923" y1="17.8495" x2="10.725" y2="14.44" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#DF1584"/>
                      <stop offset="0.2917" stop-color="#DF1E5F"/>
                      <stop offset="0.5722" stop-color="#E02542"/>
                      <stop offset="0.8173" stop-color="#E02932"/>
                      <stop offset="1" stop-color="#E02B2C"/>
                  </linearGradient>
              </defs>
          </svg>
        <span class="font-bold h5">{{ Content.label.orderList[$i18n.locale ]}}</span>
      </div>
      <div class="col-7 text-right"><span class="font-light text-primary" role="button" @click="$router.push('/profile/tracking')">{{ Content.label.orderHistory[$i18n.locale ]}}</span></div>
    </div>
    <div class="row bg-white">
      <div class="col-4" role="button">
        <div class="row text-center py-1">
          <div class="col-12">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="23" viewBox="0 0 25 23" fill="none"
                  @click="$router.push({
                    name: 'profile-order-tracking',
                    params: {
                      orderStatus: '001'
                    }
                  })">
                  <path d="M1 5V7V20C1 21.1 1.9 22 3 22H22C23.1 22 24 21.1 24 20V6C24 5.4 23.5 5 23 5H19H4H3" stroke="#404040" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M1 7V3" stroke="#404040" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M18 16H24V10H18C16.3 10 15 11.3 15 13C15 14.7 16.3 16 18 16Z" stroke="#404040" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M18 14C18.5523 14 19 13.5523 19 13C19 12.4477 18.5523 12 18 12C17.4477 12 17 12.4477 17 13C17 13.5523 17.4477 14 18 14Z" fill="#404040"/>
                  <path d="M3 1C1.9 1 1 1.9 1 3C1 4.1 1.9 5 3 5" stroke="#404040" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M19 5V2C19 1.4 18.6 1 18 1H3" stroke="#404040" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
          </div>
          <div class="col-12" @click="$router.push({
            name: 'profile-order-tracking',
            params: {
              orderStatus: '001'
            }
          })"><span class="font-light">{{ Content.label.waitingForPayment[$i18n.locale ]}}</span></div>
        </div>
      </div>
      <div class="col-4" role="button">
        <div class="row text-center py-1">
          <div class="col-12">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none"
                  @click="$router.push({
                    name: 'profile-order-tracking',
                    params: {
                      orderStatus: '100|101|102'
                    }
                  })">
                  <path d="M20.1739 22H1.91304C1.36522 22 1 21.6348 1 21.087V1.91304C1 1.36522 1.36522 1 1.91304 1H20.1739C20.7217 1 21.087 1.36522 21.087 1.91304V21.087C21.087 21.6348 20.7217 22 20.1739 22Z" stroke="#404040" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M14.6957 10.1304L11.0435 7.3913L7.3913 10.1304V1H14.6957V10.1304Z" stroke="#404040" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M3.73913 16.5217H7.3913" stroke="#404040" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M3.73913 19.261H11.9565" stroke="#404040" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
          </div>
          <div class="col-12" @click="$router.push({
            name: 'profile-order-tracking',
            params: {
              orderStatus: '100|101|102'
            }
          })"><span class="font-light">{{ Content.label.waitingForShip[$i18n.locale ]}}</span></div>
        </div>
      </div>
      <div class="col-4" role="button">
        <div class="row text-center py-1">
          <div class="col-12">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 30 20" fill="none"
                  @click="$router.push({
                    name: 'profile-order-tracking',
                    params: {
                      orderStatus: '200'
                    }
                  })">
                  <path d="M8.2 16.6H19V4.6V2.2C19 1.48 18.52 1 17.8 1H2.2C1.48 1 1 1.48 1 2.2V15.4C1 16.12 1.48 16.6 2.2 16.6H3.4" stroke="#404040" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M25 16.6001H27.4C28.12 16.6001 28.6 16.1201 28.6 15.4001V9.8801C28.6 9.5201 28.48 9.2801 28.24 9.0401L24.16 4.9601C23.92 4.7201 23.68 4.6001 23.32 4.6001H19V16.6001H20.2" stroke="#404040" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M5.8 19C7.12549 19 8.2 17.9254 8.2 16.6C8.2 15.2745 7.12549 14.2 5.8 14.2C4.47452 14.2 3.4 15.2745 3.4 16.6C3.4 17.9254 4.47452 19 5.8 19Z" stroke="#404040" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M22.6 19C23.9255 19 25 17.9254 25 16.6C25 15.2745 23.9255 14.2 22.6 14.2C21.2745 14.2 20.2 15.2745 20.2 16.6C20.2 17.9254 21.2745 19 22.6 19Z" stroke="#404040" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
          </div>
          <div class="col-12" @click="$router.push({
            name: 'profile-order-tracking',
            params: {
              orderStatus: '200'
            }
          })"><span class="font-light">{{ Content.label.shipping[$i18n.locale ]}}</span></div>
        </div>
      </div>
    </div>
    <div class="row pt-4">
      <div class="col-7">
          <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.94208 1.13613C3.60882 1.54788 1.68732 3.46938 1.13832 5.80264C0.726566 7.72414 1.27557 9.5084 2.23632 10.8809L12.5301 22.8217C13.0791 23.3707 13.9026 23.3707 14.4516 22.8217L24.7454 10.8809C25.8434 9.5084 26.2551 7.72414 25.8434 5.80264C25.2944 3.46938 23.3729 1.54788 21.0396 1.13613C17.0594 0.312624 13.4908 3.33213 13.4908 7.31239C13.4908 3.46938 9.92234 0.449875 5.94208 1.13613Z" stroke="url(#paint0_linear_80_2940)" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <defs>
              <linearGradient id="paint0_linear_80_2940" x1="17.7248" y1="37.2853" x2="-7.82839" y2="28.7065" gradientUnits="userSpaceOnUse">
              <stop stop-color="#DF1584"/>
              <stop offset="0.2917" stop-color="#DF1E5F"/>
              <stop offset="0.5722" stop-color="#E02542"/>
              <stop offset="0.8173" stop-color="#E02932"/>
              <stop offset="1" stop-color="#E02B2C"/>
              </linearGradient>
            </defs>
          </svg>
        <span class="font-bold h5">{{ Content.label.wishList[$i18n.locale ]}} ({{ countWishlists }})</span>
      </div>
    </div>
    <div class="row bg-white wishlist-flex-row mt-3 pb-3" v-if="countWishlists !== 0">
      <div class="col-md-3 col-6" v-for="wishlist in wishlists" :key="wishlist.id">
        <div class="row bg-white mt-3 mr-1 rounded text-center" style="box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);border-radius: 10px;">
          <div class="col-12 pt-1">
            <div class="row justify-content-end pr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none" @click="deleteWishlist(wishlist.id)">
                    <path d="M3.11194 0.0857163C1.64273 0.344989 0.432792 1.55493 0.0870959 3.02414C-0.172176 4.23407 0.173523 5.35759 0.778491 6.22183L7.2603 13.7407C7.606 14.0864 8.12454 14.0864 8.47024 13.7407L14.952 6.22183C15.6434 5.35759 15.9027 4.23407 15.6434 3.02414C15.2977 1.55493 14.0878 0.344989 12.6186 0.0857163C10.1123 -0.432828 7.86527 1.4685 7.86527 3.9748C7.86527 1.55493 5.61824 -0.346404 3.11194 0.0857163Z" fill="url(#paint0_linear_291_274)"/>
                    <defs>
                        <linearGradient id="paint0_linear_291_274" x1="10.5313" y1="22.8482" x2="-5.55908" y2="17.4463" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#DF1584"/>
                            <stop offset="0.2917" stop-color="#DF1E5F"/>
                            <stop offset="0.5722" stop-color="#E02542"/>
                            <stop offset="0.8173" stop-color="#E02932"/>
                            <stop offset="1" stop-color="#E02B2C"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
          </div>
          <img class="w-100 col-12" :src="wishlist.images[0].url">
          <div class="col-12 font-medium h4 mb-0 text-truncate">{{ wishlist.title.th }}</div>
          <div class="col-12"><span class="font-light h5 mb-0">{{ Content.label.start[$i18n.locale ]}} </span><span class="font-medium text-danger h3 mb-0">{{ wishlist.price_min }}.-</span></div>
          <div class="col-12 py-2">
            <button class="col-10 btn-sm border border-0 rounded-pill" @click="$router.push('/online-store/item/' + wishlist.id)" style="background: linear-gradient(286.62deg, #DF1584 10.96%, #DF1E5F 36.51%, #E02542 61.07%, #E02932 82.54%, #E02B2C 98.54%);">
              <span class="font-bold text-white h5">{{ Content.label.buyNow[$i18n.locale ]}}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="row bg-white justify-content-center pb-3" v-if="countWishlists !== 0">
      <button class="col-6 btn-md border border-danger rounded-pill bg-white">
        <span class="font-medium text-danger h5" @click="$router.push('/profile/wishlist')">SEE MORE</span>
      </button>
    </div>
    <div class="row text-center bg-white py-3 mt-3" v-if="countWishlists === 0"><div class="col-12 font-light h5 mb-0">{{ Content.label.noWishList[$i18n.locale ]}}</div></div>
  </div>
</template>

<script>
  import Content from './content.json'

  import {
    GET_WISHLIST,
    DELETE_WISHLIST
  } from '@store/actions.type'

  export default {
    data () {
      return {
        countWishlists: 0,
        wishlists: {},
        Content
      }
    },
    computed: {
      user () {
        return this.$store.state.auth.profile.data
      },
      avatar () {
        return this.user?.avatar + this.user?.user_id
      },
      displayName () {
        return this.user?.display_name
      }
    },
    watch: {
      user () {
        this.getWishlist()
      }
    },
    mounted: function () {
      this.getWishlist()
    },
    methods: {
      getWishlist () {
        if (this.user) {
          this.$store.dispatch(GET_WISHLIST, { user_id: this.user.user_id }).then(data => {
            this.wishlists = data.data
            this.countWishlists = Object.keys(this.wishlists).length
          })
        }
      },
      deleteWishlist (productId) {
        delete this.wishlists[productId]
        this.countWishlists = this.countWishlists - 1
        if (this.user) {
          this.$store.dispatch(DELETE_WISHLIST, { user_id: this.user.user_id, product_id: productId }).then(data => {
          })
        }
      }
    }
  }
</script>
