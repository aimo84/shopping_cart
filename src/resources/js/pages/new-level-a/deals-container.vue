<template>
  <section class="deals_from_partner_section">
    <div class="product_header">
      <h2>
        <a :href="dealsConfig.link || '#'"
        >{{ dealsConfig.title[$i18n.locale] || dealsConfig.title.th }}</a>
      </h2>
      <p>
        {{ dealsConfig.description[$i18n.locale] || dealsConfig.description.th }}
      </p>
      <see-more-button-element
        :href="dealsConfig.link || '#'"
      />
    </div>
    <div class="content_container">
      <div class="deals_list hide_scrollbar">
        <deal-element v-for="deal in dealsList"
          :id="deal.title.th"
          :key="deal.title.th"
          :logo="deal.custom_fields.base_url + deal.custom_fields.partner_logo"
          :description="deal.description.th"
          :theme-color="deal.custom_fields.theme_color"
          :content="deal.custom_fields.deal_content"
          :button-color="deal.custom_fields.button_color"
          :class-name="deal.className"
          :type="deal.custom_fields.content_type"
          :page-link="deal.link"
        />
      </div>
      <see-more-button-element
        :href="dealsConfig.link || '#'"
      />
    </div>
  </section>
</template>

<script>
  import SeeMoreButtonElement from './see-more-btn.vue'
  import DealElement from './deal-item.vue'

  export default ({
    components: {
      SeeMoreButtonElement,
      DealElement
    },
    props: {
      dealsConfig: Object,
      dealsList: Array
    }
  })
</script>

<style lang="scss">
  // .hide_scrollbar is in product-sections.scss & no need to copy to here
  .deals_from_partner_section {
    display: flex;
    flex-direction: column;
    margin-top: 23px;
    @media screen and (min-width: 1200px) {
      margin-top: 60px;
      flex-direction: row;
    }

    // .product_header is in product-sections.scss & add/overide some properties here
    .product_header {
      max-width: 374px;
      @media screen and (min-width: 1200px) {
        margin-right: 30px;
      }

      .see_more_btn {
        display: none;
        @media screen and (min-width: 1200px) {
          display: block;
          margin-top: 28px;
          margin-left: 0;
        }
      }
    }

    .content_container {
      margin-top: 23px;
      margin-left: 18px;
      @media screen and (min-width: 1200px) {
        margin-top: 0;
        margin-left: 0;
      }

      .deals_list {
        display: flex;
        overflow-x: auto;
        overflow-y: hidden;
        padding-bottom: 15px;
        font-size: 15px;
        @media screen and (min-width: 1200px) {
          font-size: 20px;
        }

        .deal:not(:last-child) {
          margin-right: 10px;
          @media screen and (min-width: 1200px) {
            margin-right: 14px;
          }
        }
      }

      .see_more_btn {
        margin-top: 15px;
        @media screen and (min-width: 1200px) {
          display: none;
        }
      }
    }
  }
</style>
