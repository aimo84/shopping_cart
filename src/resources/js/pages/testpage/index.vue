<template>
  <div>
    <!--
    <dialog-element
      ref="dialog"
      class="home-page-dialog"
      show-close-button
    >
      <div slot="content">
        <popup-advertisement-component :advertisementInfoProps="isAdvertisementInfoNullOrNot" />
      </div>
    </dialog-element>
    <div v-if="lvaConfigs && lvaConfigs.length > 0 && lvaContent.length > 0" class="page-container">
      <div v-for="(config, index) in lvaConfigs" :key="config.custom_fields.template_type+index">
       
        <template v-if="config && config.custom_fields && config.custom_fields.template_type === 'main_banner'">
          <main-banner-element
            v-if="lvaContent[index] && lvaContent[index].length > 0"
            :banners="lvaContent[index]"
          />
        </template>

        <div class="max-w-1200px mx-auto">
          
          <template v-if="config && config.custom_fields && config.custom_fields.template_type === 'stick_banner'">
            <stick-banner-element
              :key="index"
              :banners="lvaContent[index]"
            />
          </template>

          <div v-if="config && config.custom_fields && config.custom_fields.template_type !== 'flash_sale' || (config.custom_fields.template_type === 'flash_sale' && flashSaleRemainingSeconds > 0)" class="product_sections"  ref="section">
           
            <template v-if="templateTypeList.indexOf(config.custom_fields.template_type) !== -1">
              <section
                :key="`section_` + index"
                :class="[
                  config.custom_fields.template_type === 'new_arrivals' ? 'new_arrivals_section' : `product_section ${config.custom_fields.template_type}_section`,
                  `order_${index}`,
                ]"
              >
                
                <div :class="config.custom_fields.template_type === 'flash_sale' ? 'flash_sale_header' : 'product_header'">
                  <template v-if="config.custom_fields.template_type === 'flash_sale' && flashSaleRemainingSeconds > 0 ">
                    <a :href="config.link || '#'">
                      <img width="189" height="31" src="/images/level-a/flash-sale.svg" alt="flash sale icon">
                    </a>
                    <div
                      class="countdown_timer"
                    >
                      <span class="back_box">{{ flashSaleHour }}</span>
                      <span class="colon">:</span>
                      <span class="back_box">{{ flashSaleMinute }}</span>
                      <span class="colon">:</span>
                      <span class="back_box">{{ flashSaleSecond }}</span>
                    </div>
                  </template>
                  <template v-else>
                    <h2>
                      <template
                        :is="config.custom_fields.template_type === 'exclusive' ? 'a' : 'span'"
                        :href="config.custom_fields.template_type === 'exclusive' ? (config.link || '#') : ''"
                      >
                        {{ config.title[$i18n.locale] || config.title.th }}
                      </template>
                    </h2>
                    <p>{{ config.description[$i18n.locale] || config.description.th }}</p>
                  </template>
                </div>
                <div
                  v-if="config && config.custom_fields && config.custom_fields.template_type === 'new_arrivals'"
                  class="new_arrival_content"
                  :class="lvaContent[index].highlightProduct.isBannerDisplayFirst === false ? 'pic-right' : 'pic-left'"
                >
                  <a
                    v-if="isMobile && config.custom_fields.mobile_image"
                    class="new_arrival_banner"
                    :class="lvaContent[index].highlightProduct.isBannerDisplayFirst === false ? 'order_1' : ''"
                    :style="`background-image: url('${config.custom_fields.base_url}${config.custom_fields.mobile_image}')`"
                  >
                  </a>
                  <a
                    v-else
                    class="new_arrival_banner"
                    :class="lvaContent[index].highlightProduct.isBannerDisplayFirst === false ? 'order_1' : ''"
                    :style="`background-image: url('${config.custom_fields.base_url}${config.custom_fields.image}')`"
                  >
                  </a>
                  <products-container-element
                    component-type="new_arrival"
                    :products-list="lvaContent[index].newArrivalsList"
                    :max-display-items="4"
                  />
                </div>
                <template v-else>
                  <products-container-element
                    class="overflow_x_scroll hide_scrollbar"
                    :component-type="config.custom_fields.template_type"
                    :products-list="lvaContent[index]"
                    :max-display-items="config.custom_fields.display_products || 10"
                    :ref="`product-container-${index}`"
                  />
                  <see-more-button-element
                    :href="config.link || '#'"
                  />
                  <template v-if="scrollable(config)">
                    <products-container-scroll-left-button-element
                      class="scroll_btn left"
                      :products-container-ref="`product-container-${index}`"
                    />
                    <products-container-scroll-right-button-element
                      class="scroll_btn right"
                      :products-container-ref="`product-container-${index}`"
                    />
                  </template>
                </template>
              </section>
            </template>

           
            <template v-else-if="config && config.custom_fields && config.custom_fields.template_type === 'top_brands'">
              <top-brands-element
                v-if="lvaContent[index] && lvaContent[index].length > 0"
                :key="index"
                :class="`${index} order_${index}`"
                :topBrandsConfig="config"
                :topBrandsList="lvaContent[index]"
              />
            </template>

            
            <template v-else-if="config && config.custom_fields && config.custom_fields.template_type === 'deals_from_partner'">
              <deals-from-partner
                v-if="lvaContent[index] && lvaContent[index].length > 0"
                :key="index"
                :class="`${index} order_${index}`"
                :dealsConfig="config"
                :dealsList="lvaContent[index]"
              />
            </template>

           
            <section
              v-else
                :key="index"
                :class="`order_${index}`"
            >
                <div v-if="config && config.custom_fields && !['main_banner','stick_banner'].includes(config.custom_fields.template_type) && (config.custom_fields.template_type !== 'flash_sale' || (config.custom_fields.template_type === 'flash_sale' && flashSaleRemainingSeconds > 0))" class="product_header">
                  <h2> Displaying for "{{ config.custom_fields.template_type }}" is not available!</h2>
                  <p> template_type must be {{ templateFullTypeList }}</p>
                </div>
            </section>
          </div>
        </div>

        <div class="floating_menu">
          <div class="icons">
              <template v-for="(config, index) in lvaConfigs">
                <template v-if="config && config.custom_fields && templateFullTypeList.indexOf(config.custom_fields.template_type) !== -1 && (config.custom_fields.template_type !== 'flash_sale' || (config.custom_fields.template_type === 'flash_sale' && flashSaleRemainingSeconds > 0))">
                  <div
                  :key="index"
                  @click="smoothScrollToElement(
                    `order_${index}`
                  )"
                >
                  <img
                    :src="`${config.custom_fields.base_url}${config.custom_fields.icon}`"
                    :alt="`${config.title.th} icon`"
                  >
                  <div class="title">
                    {{ config.title[$i18n.locale] || config.title.th }}
                  </div>
                </div>
              </template>
            </template>
          </div>
          
          <div class="back_to_top" @click="backToTop">
            <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.800049 8.5998L8.20005 0.799805L15.8 8.5998" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
    -->

    <center><H1>TEST BY ISARA</H1></center>

  </div>
</template>

<script>
  import MainBannerElement from './main-banner.vue'
  import StickBannerElement from './stick-banner.vue'
  import DealsFromPartner from './deals-container.vue'
  import SeeMoreButtonElement from './see-more-btn.vue'
  import ProductsContainerElement from './products-container.vue'
  import ProductsContainerScrollLeftButtonElement from './products-container-scroll-left.vue'
  import ProductsContainerScrollRightButtonElement from './products-container-scroll-right.vue'
  import TopBrandsElement from './top-brands.vue'
  import DialogElement from '../../components/dialog.vue'
  import PopupAdvertisementComponent from './popup-advertisement-component.vue'

  import {
    FETCH_ALL_CONTENT,
    FECTH_LVA_POP_UP_ADVERTISEMENT
  } from '@store/actions.type'

  import {
    smoothScrollToElementInCommon
  } from '@utils/common'
  export default {
    components: {
      MainBannerElement,
      StickBannerElement,
      DealsFromPartner,
      SeeMoreButtonElement,
      ProductsContainerElement,
      ProductsContainerScrollLeftButtonElement,
      ProductsContainerScrollRightButtonElement,
      TopBrandsElement,
      DialogElement,
      PopupAdvertisementComponent
    },

    data: () => ({
      templateTypeList: ['flash_sale', 'exclusive', 'best_seller', 'new_arrivals'],
      templateFullTypeList: ['flash_sale', 'exclusive', 'best_seller', 'new_arrivals', 'top_brands', 'deals_from_partner'],
      lvaConfigs: [],
      lvaContent: [],

      flashSaleDeadlineTime: null,
      flashSaleRemainingSeconds: null,
      flashSaleHour: null,
      flashSaleMinute: null,
      flashSaleSecond: null,
      flashSaleCampaign: [],
      isAdvertisementInfoNullOrNot: null
    }),
    computed: {
      isMobile () {
        return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
      }
    },
    watch: {
      flashSaleRemainingSeconds: {
        handler (value) {
          if (value > 0) {
            setTimeout(() => {
              this.flashSaleRemainingSeconds--

              const totalSeconds = parseInt(this.flashSaleRemainingSeconds, 10)
              this.flashSaleHour   = Math.floor(totalSeconds / 3600)
              this.flashSaleMinute = Math.floor((totalSeconds - (this.flashSaleHour * 3600)) / 60)
              this.flashSaleSecond = totalSeconds - (this.flashSaleHour * 3600) - (this.flashSaleMinute * 60)

              if (this.flashSaleHour   < 10) { this.flashSaleHour   = '0' + this.flashSaleHour }
              if (this.flashSaleMinute < 10) { this.flashSaleMinute = '0' + this.flashSaleMinute }
              if (this.flashSaleSecond < 10) { this.flashSaleSecond = '0' + this.flashSaleSecond }
            }, 1000)
          }
        },
        immediate: true
      }
    },
    async created () {
      await this.$store.dispatch(FETCH_ALL_CONTENT, { code: 'Truestore_level_a_config' }).then(results => {
        this.lvaConfigs = results.config
        results.content.forEach((resultContent, i) => {
          if (resultContent.key === 'new_arrivals_left' || resultContent.key === 'new_arrivals_right') {
            this.lvaContent.push({
              highlightProduct: {
                isBannerDisplayFirst: resultContent.key.split('new_arrivals_')[1] === 'left'
              },
              newArrivalsList: resultContent.data
            })
          } else if (resultContent.key === 'flash_sale') {
            this.lvaContent.push(resultContent.data.campaign_data)
            this.flashSaleCampaign = resultContent.data.flash_sale_campaign
            const now = new Date()
            let startDate = new Date(this.flashSaleCampaign.published_start.replace(/ /g,'T'))
            let endDate = new Date(this.flashSaleCampaign.published_end.replace(/ /g,'T'))
            startDate = startDate.setHours(startDate.getHours() + 7)
            endDate = endDate.setHours(endDate.getHours() + 7)
            if (startDate <= now && endDate >= now && this.flashSaleCampaign.status === 1) {
              this.flashSaleDeadlineTime = new Date(endDate)
              this.flashSaleRemainingSeconds = (this.flashSaleDeadlineTime.getTime() - now.getTime()) / 1000
            }
          } else {
            this.lvaContent.push(resultContent.data)
          }
        })
      }).catch(() => {
      })
    },

    async mounted () {
      this.isAdvertisementInfoNullOrNot = await this.$store.dispatch(FECTH_LVA_POP_UP_ADVERTISEMENT)
      if (this.isAdvertisementInfoNullOrNot && this.isAdvertisementInfoNullOrNot.length > 0) {
        this.$refs.dialog.open()
      }

      this.$nextTick(function () {
        window.onscroll = function () {
          if (
            // For Chrome, Firefox, IE and Opera
            document.documentElement.scrollTop > 100 ||
            // For Safari
            document.body.scrollTop > 100
          ) {
            document.getElementsByClassName('floating_menu')[0].style.display = 'block'
          } else {
            document.getElementsByClassName('floating_menu')[0].style.display = 'none'
          }
        }
      })
    },

    methods: {
      scrollable (config) {
        return config.custom_fields.display_products &&
          ((config.custom_fields.display_products > 5) ||
            (config.custom_fields.template_type === 'flash_sale' &&
              config.custom_fields.display_products > 6))
      },
      backToTop () {
        smoothScrollToElementInCommon('app')
      },
      smoothScrollToElement (index) {
        smoothScrollToElementInCommon(index)
      }
    }
  }
</script>
<style lang="scss">
  .page.new-level-a {
    margin: 0;
    padding: 0;
    max-width: unset;
  }
  .page.home-page {
    max-width: unset !important;
    padding: 16px 0px 36px 0px;

    @media (max-width: 1200px) {
      margin-top: 50px;
    }
    @media (max-width: 1000px) {
      margin-top: 0px;
    }
  }
  .page-container {
    position: relative;
    background-color: #fff;
    width: 100%;
  }
  .max-w-1200px {
    max-width: 1200px;
  }
  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }

  .floating_menu {
    display: none;
    z-index: 998;
    position: fixed;
    font-family: 'TrueLight', sans-serif;
    font-size: 20px;
    line-height: 25px;
    cursor: pointer;

    bottom: 99px;
    right: 0;
    @media (min-width: 576px) {
      right: 10px;
    }
    @media (min-width: 1376px) {
      right: calc(50vw - 688px);
    }

    .icons {
      display: none;
      @media (min-width: 1200px) {
        display: flex;
        flex-direction: column;
      }
      background-color: white;
      color: #404040;
      border-radius: 4px 4px 0 0;

      >div {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 39px;
        border: 1px solid #CCCCCC;
        border-bottom: none;

        &:hover {
          background-color: #F7F7F7;
          color: red;

          >img {
            filter: invert(17%) sepia(99%) saturate(6607%) hue-rotate(359deg) brightness(97%) contrast(115%);
          }

          &>.title {
            display: block;
          }
        }

        &>.title {
          display: none;
          position: absolute;
          top: -1px;
          right: 100%;
          padding: 6.5px 9px;
          width: fit-content;
          height: 40px;
          white-space: nowrap;
          border: 1px solid #CCCCCC;
          background-color: #F7F7F7;
        }
      }
    }

    .back_to_top {
      width: 40px;
      height: 40px;
      padding-top: 15px;
      line-height: 10px;
      text-align: center;
      border-radius: 50%;
      background-color: #E1E1E1;
      color: black;

      &:hover {
        background-image: linear-gradient(286.62deg, #DF1584 10.96%, #DF1E5F 36.51%, #E02542 61.07%, #E02932 82.54%, #E02B2C 98.54%);
        color: white;
      }

      @media (min-width: 1200px) {
        border-radius: 0 0 4px 4px;
        background-color: #CCCCCC;
        background-image: linear-gradient(286.62deg, #DF1584 10.96%, #DF1E5F 36.51%, #E02542 61.07%, #E02932 82.54%, #E02B2C 98.54%);
        color: white;

        &:hover {
          background-image: none;
          color: red;
        }
      }
    }
  }

  .home-page-dialog .content {
    max-width: 415px;
    max-height: 90%;
  }

  @media screen and (max-width: 800px) {
    .home-page-dialog .content {
      width: 425px;
    }
  }

  @media screen and (max-width: 525px) {
    .home-page-dialog .content {
      width: 325px;
    }
  }

  @media screen and (max-width: 450px) {
    .home-page-dialog .content {
      width: 275px;

      .dialog-content {
        border-bottom: 0px;
      }
    }
  }
</style>

<style scoped lang="scss" src="./store.scss"></style>

<style lang="scss">
   @import './product-sections.scss';
</style>
