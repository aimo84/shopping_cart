<template>
  <section class="top_brands_section">
    <div v-if="topBrandsConfig" class="product_header">
      <h2>
        <a :href="topBrandsConfig.link || '#'"
        >{{ topBrandsConfig.title[$i18n.locale] || topBrandsConfig.title.th }}</a>
      </h2>
      <p>
        {{ topBrandsConfig.description[$i18n.locale] || topBrandsConfig.description.th }}
      </p>
    </div>
    <div v-if="topBrandsList" class="content_container">
      <div class="brands_list hide_scrollbar">
        <a
          v-for="(brand, index) in topBrandsList"
          :key="index"
          :href="brand.link"
          class="brand"
        >
          <div class="brand_img_container">
            <img class="brand_img"
              :src="brand.custom_fields.base_url + brand.custom_fields.background_image"
              :alt="brand.title"
            >
          </div>
          <div class="brand_logo_container">
            <img
              width="50"
              height="50"
              class="brand_logo"
              :class="brand.title.en.toLowerCase() || brand.title.th.toLowerCase()"
              :src="brand.custom_fields.base_url + brand.custom_fields.logo"
              :alt="brand.title[$i18n.locale] || brand.title.th"
            >
          </div>
          <div class="brand-name">{{ brand.title[$i18n.locale] || brand.title.th }}</div>
        </a>
      </div>
    </div>
    <see-more-button-element
      :href="topBrandsConfig.link || '#'"
    />
  </section>
</template>

<script>
  import SeeMoreButtonElement from './see-more-btn.vue'

  export default {
    components: {
      SeeMoreButtonElement
    },
    props: {
      topBrandsConfig: Object,
      topBrandsList: Array
    }
  }
</script>

<style lang="scss">
  .top_brands_section {
    font-family: 'TrueBold';
    font-size: 28px;
    margin-top: 23px;
    @media screen and (min-width: 1200px) {
      margin-top: 60px;
    }

    .content_container {
      margin-top: 12px;
      margin-bottom: 15px;
      margin-left: 18px;
      @media screen and (min-width: 1200px) {
        margin-top: 15px;
        margin-left: 0;
      }

      .brands_list {
        display: flex;
        overflow-x: auto;
        overflow-y: hidden;

        .brand {
          min-width: 104px;
          min-height: 140px;
          @media screen and (min-width: 1200px) {
            min-width: 190px;
            min-height: 280px;
          }
          margin-top: 15px;
          margin-bottom: 15px;
          position: relative;
          text-align: center;
          text-decoration: none;
          color: #000;
          box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);

          &:not(:last-child) {
            margin-right: 10px;
            @media screen and (min-width: 1200px) {
              margin-right: 12px;
            }
          }

          .brand_img_container {
            width: 100%;
            height: 90px;
            @media screen and (min-width: 1200px) {
              height: 200px;
            }

            .brand_img {
              width: 100%;
              height: 100%;
            }
          }

          .brand_logo_container {
            top: 65px;
            left: 27px;
            width: 50px;
            height: 50px;
            @media screen and (min-width: 1200px) {
              top: 160px;
              left: 55px;
              width: 80px;
              height: 80px;
            }
            position: absolute;
            border: 2px solid #fff;
            background: #f7f7f7;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;

            @media screen and (max-width: 1199px) {
              .brand_logo {
                max-width: 80%;
                height: auto;

                &.apple {
                  max-width: 30px;
                }
                &.samsung {
                  max-width: 40px;
                }
                &.huawei {
                  max-width: 30px;
                }
                &.oppo {
                  max-width: 45px;
                }
                &.vivo {
                  max-width: 34px;
                }
                &.xiaomi {
                  max-width: 28px;
                }
              }
            }
          }

          .brand-name {
            text-transform: capitalize;
            font-size: 20px;
            padding-top: 24px;
            height: 50px;
            @media screen and (min-width: 1200px) {
              font-size: 30px;
              padding-top: 39px;
              height: 80px;
            }
          }
        }
      }
    }
  }
</style>
