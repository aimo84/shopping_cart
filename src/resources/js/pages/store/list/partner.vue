<template>
  <div>
    <div class="partner-container" v-for="partner in partnersGroup" v-bind:key="partner.id">
      <div class="title">{{Locale.partner_group[partner.group][$i18n.locale]}}</div>
      <div class="divider" />
      <div class="deal-container">
          <deal-element v-for="deal in partner.partnersInfo"
            :id="deal.id"
            :key="deal.id"
            :base_url="deal.custom_fields.base_url"
            :logo="deal.custom_fields.partner_logo"
            :description="deal.description[$i18n.locale]"
            :theme-color="deal.custom_fields.theme_color"
            :content="deal.custom_fields.deal_content"
            :button-color="deal.custom_fields.button_color"
            :class-name="'detail-page'"
            :type="deal.custom_fields.content_type"
            :page-link="deal.link"
          />
      </div>
    </div>
  </div>
</template>

<script>
  import Locale from './locale.json'

  import {

  } from '@store/actions.type'

  import DealItem from '../../new-level-a/deal-item'

  export default {
    components: {
      'deal-element': DealItem
    },
    props: {
      partners: Object
    },
    data: () => ({
      Locale,
      partnersGroup: [],
      partnersInfo: []
    }),

    computed: {
    },
    async mounted () {
      if (this.partners) {
        const contents = this.partners.sections[0].contents
        let partnersGroup = {}
      
        contents.map(partner => {
          if (partnersGroup[partner.custom_fields.partner_type]) {
            partnersGroup[partner.custom_fields.partner_type].push(partner)
          } else {
            partnersGroup[partner.custom_fields.partner_type] = [partner]
          }
        })
  
        this.partnersGroup = Object.keys(partnersGroup).map(group => ({
          group,
          partnersInfo: partnersGroup[group]
        }))
      }
      this.loading = false
    }
  }
</script>

<style lang="scss" scoped>
  .partner-container {
    .title {
      font-size: 48px;
      text-align: center;
      font-family: 'TrueBoldNew';
      color: black;
    }
    .divider {
      margin: 0 auto;
      width: 300px;
      height: 4px;
      background-image: linear-gradient(286.62deg, #DF1584 10.96%, #DF1E5F 36.51%, #E02542 61.07%, #E02932 82.54%, #E02B2C 98.54%);
    }
    .deal-container {
      margin: 20px 0px;
      display: grid;
      grid-gap: 20px;
      grid-template-columns: repeat(auto-fill, minmax(284px, 1fr));
      justify-items: center;
    }
  }

  @media screen and (max-width: 450px) {
    .partner-container {
      .title {
        font-size: 36px;
      }
      .deal-container {
        grid-template-columns: repeat(auto-fill, minmax(186px, 1fr));
        grid-gap: 20px 0px;
      }
    }
  }

  @media screen and (max-width: 300px) {
    .partner-container {
      .divider {
        width: 100%;
      }
    }
  }

</style>

<style scoped lang="scss" src="../store.scss"></style>
