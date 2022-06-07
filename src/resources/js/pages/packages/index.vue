<template>
  <div class="page-container">
    <popup-element ref="popup" />
    <popup-sale-element ref="salePopup"/>
    <div class="slanted-bg-container">
      <div class="red-bg" />
      <div class="bottom">
        <div class="round" />
        <div class="slanted" />
      </div>
    </div>
    <div class="page-inner-container">
      <div class="title">{{ Locale.title[$i18n.locale] }}</div>
      <div class="category-container">
        <div
          class="category"
          @click="changeCategory('all')"
          :selected="category === 'all'"
        >
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path fill="currentColor" d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/>
          </svg>
          <div class="label">{{ Locale.all[$i18n.locale] }}</div>
        </div>
        <div
          class="category"
          @click="changeCategory('postpaid')"
          :selected="category === 'postpaid'"
        >
          <img src="/images/icons/postpaid_sim.png" />
          <div class="label">{{ Locale.postpaid[$i18n.locale] }}</div>
        </div>
      </div>
      <loading-element class="loading-container" v-if="loading" />
      <div class="title" v-else-if="empty">
        {{ Locale.empty[$i18n.locale] }}
      </div>
      <div class="packages" v-else>
        <div
          class="package-container"
          v-for="(item, key) in packages"
          :key="key"
        >
          <div class="package-image">
            <img :src="item.package_image_desktop" />
          </div>
          <div class="package-title">{{ item.package_name }}</div>
          <div class="package-action">
            <template v-if="blackSim[`L${item.product_id}`]">
              <router-link
                :to="`/online-store/blackcard/verify/L${item.product_id}`"
              >
                <button-element class="button">{{ Locale.verify[$i18n.locale] }}</button-element>
              </router-link>
              <button-element
                class="button gray"
                @click="$refs.popup.open(item.nas_code)"
              >{{ Locale.package_detail[$i18n.locale] }}</button-element>
            </template>
            <template v-else>
              <router-link v-if="!isSaleMode"
                :to="{
                  name: 'online-store-detail',
                  params: {
                    id: `L${item.product_id}`
                  },
                  query: {
                    nas_code: item.nas_code,
                    rc: $route.query.rc,
                    token: $route.query.token
                  }
                }"
              >
                <button-element class="button">{{ Locale.search_number[$i18n.locale] }}</button-element>
              </router-link>
              <button-element class="button" @click="showPopupSale(item.product_id, item.nas_code)" v-else>{{ Locale.buy_customer[$i18n.locale] }}</button-element>
              <button-element
                class="button gray"
                @click="$refs.popup.open(item.nas_code)"
              >{{ Locale.package_detail[$i18n.locale] }}</button-element>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Loading from '@components/loading'
  import Button from '@components/button'
  import qs from 'qs'
  import Popup from './popup'
  import Locale from './locale.json'
  import PopupSale from '../store/detail/popup.vue'

  import {
    FETCH_VERIFY_CONFIG,
    FETCH_PACKAGES
  } from '@store/actions.type'

  import {
    setCampaignWeomniQuery
  } from '@utils/common'

  export default {
    components: {
      'loading-element': Loading,
      'button-element': Button,
      'popup-element': Popup,
      'popup-sale-element': PopupSale
    },
    data: () => ({
      Locale,
      loading: true,
      empty: false,
      category: 'all'
    }),
    computed: {
      config () {
        return this.$store.state.config.verifyConfig
      },
      blackSim () {
        return this.config.family_black_truecard
      },
      familySim () {
        return this.config.verify.map((product) => {
          if (product.type === 'postpaid') return product.id
        }).filter(item => item)
      },
      packages () {
        return this.$store.state.postpaid.packages.data.record.filter((item) => {
          const id = `L${item.product_id}`
          return !this.familySim.includes(id)
        })
      },
      isSaleMode () {
        const saleLocalData = JSON.parse(localStorage.getItem('TMH-SALE-DATA'))
        const saleMode = saleLocalData?.sale_mode
        return this.$route.name === 'packages' && saleMode === '1'
      }
    },
    async mounted () {
      const query = this.$route.query.type
      if (query === 'all') return this.redirectToTmhPostpaid()
      setCampaignWeomniQuery()
      const id = this.$route.query.product_id
      if (query && ['postpaid', 'family_sim_blackcard'].includes(query)) this.category = query
      await this.$store.dispatch(FETCH_VERIFY_CONFIG)
      await this.fetchPackages(id)
    },
    methods: {
      changeCategory (category) {
        if (this.loading) return
        if (category === 'all') return this.redirectToTmhPostpaid()
        this.category = category
        this.fetchPackages()
      },
      async fetchPackages (id) {
        try {
          if (this.category === 'all') return this.redirectToTmhPostpaid()
          this.loading = true
          this.$router.replace({
            query: {
              type: this.category,
              product_id: id,
              rc: this.$route.query.rc,
              token: this.$route.query.token
            }
          }).catch(() => {})
          const data = {
            section: 'wemall',
            page: 1,
            sim_type: this.category,
            product_id: id
          }
          if (id) {
            data.all = true
          }

          const params = qs.stringify(data, { arrayFormat: 'brackets' })
          await this.$store.dispatch(FETCH_PACKAGES, {
            params,
            headers: {
              'tmvh-token': this.$route.query.token
            }
          })
          this.loading = false
          if (this.$store.state.postpaid.packages.data.record) {
            this.empty = false
          } else {
            this.empty = true
          }
        } catch {
          this.fetchPackages()
        }
      },
      showPopupSale (productId, nasCode) {
        let url = `${window.location.origin}/online-store/postpaid/L${productId}?nas_code=${nasCode}`
        if (this.$route.query.rc) {
          url += `&rc=${this.$route.query.rc}`
        }
        if (this.$route.query.token) {
          url += `&token=${this.$route.query.token}`
        }

        localStorage.setItem('TMH-DIRECT-URL', url)
        this.$refs.salePopup.open()
      },
      redirectToTmhPostpaid () {
        this.$router.push({ name: 'TMHPostpaid' })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .page-container {
    font-size: 1.5em;
    position: relative;

    .slanted-bg-container {
      position: absolute;
      top: 0;
      width: 100%;

      .red-bg {
        overflow: hidden;
        position: relative;
        height: 500px;
        background: linear-gradient(to bottom, #ec0018, #840000 80%);
      }

      .bottom {
        display: flex;
        .round {
          width: 120px;
          height: 100px;
          background: #840000;
          border-radius: 100% 0% 0% 100% / 0% 100% 0% 100%;
          position: relative;
        }
        .slanted {
          width: 100%;
          height: 100px;
          background-image: linear-gradient(to right bottom, #840000 0%, #840000 50%, transparent 51%);
        }
      }
    }

    .page-inner-container {
      position: relative;
      text-align: center;
      padding: 30px 20px 64px;
      max-width: 1100px;
      margin: auto;
    }

    .title {
      font-family: "TrueBold";
      color: #fff;
      font-size: 40px;
      line-height: 30px;
      margin-bottom: 36px;
    }

    .category-container {
      margin: 48px 0;
      display: grid;
      grid-template-columns: repeat(auto-fit, 126px);
      justify-content: center;
      grid-gap: 64px;

      .category {
        width: 126px;
        height: 126px;
        color: #fff;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        font-size: 24px;
        line-height: 24px;
        position: relative;
        opacity: 0.6;
        cursor: pointer;

        img {
          margin-bottom: 4px;
        }

        .icon {
          width: 42px;
          height: 42px;
          margin-bottom: 6px;
        }
        &:hover {
          &:after {
            content: "";
            border: solid 3px #fff;
            width: 100%;
            height: 100%;
            position: absolute;
            border-radius: 50%;
          }
        }

        &[selected] {
          opacity: 1;

          &:after {
            content: "";
            border: solid 3px #fff;
            width: 100%;
            height: 100%;
            position: absolute;
            border-radius: 50%;
          }

          &:before {
            content: "";
            filter: blur(3px);
            border: solid 3px #ff5a3d;
            width: 100%;
            height: 100%;
            position: absolute;
            border-radius: 50%;
          }
        }
      }
    }

    .loading-container::v-deep {
      padding-top: 36px;
      justify-content: flex-start;

      .loading-text {
        color: #fff;
      }
    }

    .packages {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin: -10px;

      .package-container {
        padding: 20px;
        box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.12);
        background-color: #fff;
        border-radius: 8px;
        text-align: left;
        display: flex;
        flex-direction: column;
        max-width: 250px;
        width: 100%;
        margin: 10px;

        .package-image {
          display: flex;
          align-items: center;
          margin-bottom: 14px;
          height: 160px;

          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
        .package-title {
          font-size: 24px;
          line-height: 24px;
          flex: 1;
          margin-bottom: 8px;
        }
        .package-price {
          font-family: "TrueBold";
          font-size: 30px;
          line-height: 30px;
          margin-bottom: 14px;
        }
        .package-action {
          margin-top: 8px;

          .button {
            width: 100%;
            height: 40px;
            line-height: 40px;
            padding: 0 24px;
            background-color: #ff0000;

            &.gray {
              margin-top: 10px;
              background-color: #666;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 860px) {
    .page-container {
      .slanted-bg-container {
        .bottom {
          .round {
            width: 60px;
            height: 40px;
          }
          .slanted {
            height: 40px;
          }
        }
      }
      .title {
        font-size: 24px;
        line-height: 24px;
      }
      .category-container {
        margin: 24px 0;
        grid-template-columns: repeat(auto-fit, 100px);
        grid-gap: 24px;

        .category {
          width:100px;
          height: 100px;
          font-size: 20px;
          line-height: 20px;

          .icon {
            width: 32px;
            height: 32px;
          }
        }
      }
    }
    @media screen and (max-width: 830px) {
      .page-container .packages .package-container {
        max-width: calc(50% - 20px);
      }
    }
    @media screen and (max-width: 560px) {
      .page-container .packages .package-container {
        max-width: 100%;
      }
    }
  }
</style>
