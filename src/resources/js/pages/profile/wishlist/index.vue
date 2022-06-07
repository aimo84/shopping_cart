<template>
  <div class="mx-lg-5 py-3 row mx-0">
    <nav-profile />
    <div class="col-md-9">
      <div class="row">
        <div class="col-4 px-0 d-md-none" role="button" @click="$router.push('/profile')">
          <img src="/images/icons/icon-left.png" style="width: 30px;">
          <span class="font-light h5 mb-0">{{ Content.label.header[$i18n.locale ]}}</span>
        </div>
        <div class="col-8 d-md-none text-right">
            <div class="font-light h5 mb-0">{{ Content.label.total[$i18n.locale ]}} ({{ countWishlists }})</div>
        </div>
        <div class="font-bold h2 col-md-12 d-none d-md-block">{{ Content.label.header[$i18n.locale ]}}</div>
        <div class="col-12 col-md-12 d-none d-md-block">
          <div class="row bg-white p-2 mr-1 box-shadow-true">
            <div class="col-8 font-bold h4 mb-0">{{ Content.label.total[$i18n.locale ]}} ({{ countWishlists }})</div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-6" v-for="wishlist in wishlists" :key="wishlist.id">
          <div class="row bg-white mt-3 mr-1 rounded text-center">
            <div class="col-12 pt-1">
              <div class="row justify-content-end">
                  <div class="col-4 col-md-3" @click="deleteWishlist(wishlist.id)">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
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
      <loading-element class="loading-container" v-if="loading" />
      <div class="row mr-md-1">
        <div class="col-12 text-center bg-white my-3 py-3 mr-1 box-shadow-true" v-if="countWishlists === 0 && loading === false"><span class="font-light h5">{{ Content.label.noWishList[$i18n.locale ]}}</span></div>
      </div>
    </div>
  </div>
</template>
<script>
  import NavProfile from './../nav'
  import Loading from '@components/loading'
  import { GET_WISHLIST, DELETE_WISHLIST } from '@store/actions.type'
  import Content from './content.json'

  export default {
    components: {
      'nav-profile': NavProfile,
      'loading-element': Loading
    },
    data: () => ({
      countWishlists: 0,
      wishlists: {},
      loading: true,
      Content
    }),
    computed: {
      user () {
        return this.$store.state.auth.profile.data
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
            this.loading = false
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
