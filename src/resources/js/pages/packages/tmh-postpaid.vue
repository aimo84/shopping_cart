<template>
  <div class="page-container">
    <popup-element ref="popup" />
    <popup-sale-element ref="salePopup"/>
    <banner-element/>
    <div class="page-inner-container">
      <loading-element class="loading-container" v-if="loading" />
      <div class="title" v-else-if="empty">
        {{ Locale.empty[$i18n.locale] }}
      </div>
      <div v-else>
        <div v-for="(grp, key) in packagesGroup" :key="key">
          <div v-if="grp.record.length > 0">
            <span class="group-title">
              {{ grp.title[$i18n.locale] }}
            </span>
          </div>
          <div class="packages">
            <div
              class="package-container"
              v-for="(item, key) in grp.record"
              :key="key"
            >
              <div class="package-image">
                <img :src="item.package_image_desktop" />
              </div>
              <div class="package-title">{{ item.package_name }}</div>
              <div class="package-action">
                <template v-if="blackSim[`L${item.product_id}`]">
                  <div class="link-package">
                  <a
                    class=""
                    @click="$refs.popup.open(item.nas_code)"
                  >{{ Locale.package_detail[$i18n.locale] }}</a>
                  </div>
                  <router-link
                    :to="`/online-store/blackcard/verify/L${item.product_id}`"
                  >
                    <button-element class="button">{{ Locale.verify[$i18n.locale] }}</button-element>
                  </router-link>
                </template>
                <template v-else>
                  <div class="link-package">
                    <a
                      class=""
                      @click="$refs.popup.open(item.nas_code)"
                    >{{ Locale.package_detail[$i18n.locale] }}</a>
                  </div>
                  <router-link v-if="!isSaleMode"
                    :to="{
                      name: 'online-store-postpaid',
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
                    <button-element class="button">
                      {{ isMobile ? Locale.search_number_mobile[$i18n.locale] : Locale.search_number[$i18n.locale] }}
                    </button-element>
                  </router-link>
                  <button-element class="button" @click="showPopupSale(item.product_id, item.nas_code)" v-else>{{ Locale.buy_customer[$i18n.locale] }}</button-element>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  <back-to-top-button-element/>
  </div>
</template>

<script>
  import Loading from '@components/loading'
  import Button from '@components/button'
  import qs from 'qs'
  import Popup from './popup'
  import Locale from './locale.json'
  import PopupSale from '../store/detail/popup.vue'
  import Banner from './banner'
  import BackToTopButtonElement from './back-to-top-button.vue'

  import {
    FETCH_VERIFY_CONFIG,
    FETCH_PACKAGES,
    FECTH_POSTPAID_BANNER,
    FECTH_PACKAGES_LIST
  } from '@store/actions.type'

  import {
    setCampaignWeomniQuery
  } from '@utils/common'

  export default {
    components: {
      'loading-element': Loading,
      'button-element': Button,
      'popup-element': Popup,
      'popup-sale-element': PopupSale,
      'banner-element': Banner,
      'back-to-top-button-element': BackToTopButtonElement
    },
    data: () => ({
      Locale,
      loading: true,
      empty: false,
      category: 'all',
      isMobile: false
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
      packagesGroup () {
        return this.$store.state.postpaid.packagesGroup.data
      },
      isSaleMode () {
        const saleLocalData = JSON.parse(localStorage.getItem('TMH-SALE-DATA'))
        const saleMode = saleLocalData?.sale_mode
        return this.$route.name === 'packages' && saleMode === '1'
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
      setCampaignWeomniQuery()
      const query = this.$route.query.type
      if (query && ['postpaid', 'family_sim_blackcard'].includes(query)) this.category = query
      await this.$store.dispatch(FETCH_VERIFY_CONFIG)
      await this.$store.dispatch(FECTH_POSTPAID_BANNER)
      this.fecthPackagesGroup()
    },
    methods: {
      async fetchPackages (id) {
        try {
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
      async fecthPackagesGroup () {
        await this.$store.dispatch(FECTH_PACKAGES_LIST)
        this.loading = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .page-container {
    font-size: 1.5em;
    position: relative;
    background-color: #FFFFFF;
    margin-top:14px;

    .page-inner-container {
      position: relative;
      padding: 7px 20px 64px;
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

    .group-title {
      font-family: "TrueBold";
      color: #000000;
      font-size: 48px;
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
          font-size: 22px;
          line-height: 24px;
          flex: 1;
          margin-bottom: 8px;
          text-align: center;
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
            font-size: 22px;
            padding: 5px;
            background-image: linear-gradient(286.62deg, #DF1584 10.96%, #DF1E5F 36.51%, #E02542 61.07%, #E02932 82.54%, #E02B2C 98.54%);
            border-radius: 20px;

            &.gray {
              margin-top: 10px;
              background-color: #666;
            }

            &::v-deep {
              min-width: auto;
            }
          }

          .link-package {
              text-align: center;

              a {
                color: #29ABE2;
                text-decoration: underline;
                cursor: pointer;
                font-size: 20px;
              }
            }
        }
      }
    }
  }

  @media screen and (max-width: 860px) {
    .page-container {
      .group-title {
        font-size: 36px;
      }
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
    @media screen and (max-width: 340px) {
      .page-container .packages .package-container {
        max-width: 100%;
      }
    }
  }

  @media (min-width: 341px) and (max-width: 400px) {
    .page-container {
      .packages {
        .package-container {
          .package-title {
            font-size: 20px;
          }
          .package-action {
            .link-package {
              a {
                font-size: 18px;
              }
            }
            a {
              .button {
                font-size: 16px;
              }
            }
          }
        }
      }
    }
  }
</style>
