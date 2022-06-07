<template>
  <div class="address-container">
    <div>
      <div class="description">{{ Content.ordersummary[$i18n.locale] }}</div>
      <div class="description gold">{{ Content.ordernumber[$i18n.locale] }} {{ orderId }}</div>
    </div>
    <div>
      <div class="description">{{ Content.shipping_address[$i18n.locale] }}</div>
      <div class="address">
        <div>{{ address.delivery_firstname }} {{ address.delivery_lastname }},</div>
        <div class="address">
          <div>{{ deliveryAddress }}</div>
        </div>
        <div class="contact">
          <div>{{ Content.phone[$i18n.locale] }}: {{ deliveryPhone }}</div>
          <div>{{ Content.email[$i18n.locale] }}: {{ address.delivery_email }}</div>
        </div>
      </div>
    </div>
    <div v-if="address.billing_tax_no">
      <div class="description">{{ Content.tax_invoice[$i18n.locale] }}</div>
      <div class="address">
        <div
          v-if="address.billing_branch === '-'"
        >{{ address.billing_firstname }} {{ address.billing_lastname }},</div>
        <div class="address">
          <div>{{ billingAddress }}</div>
        </div>
        <div class="contact">
          <div
            v-if="address.billing_branch === '-' && address.billing_tax_no"
          >{{ Content.thai_id[$i18n.locale] }}: {{ address.billing_tax_no }}</div>
          <div
            v-else-if="address.billing_tax_no"
          >{{ Content.tax[$i18n.locale] }}: {{ address.billing_tax_no }}</div>
          <div
            v-if="address.billing_branch !== '-' && address.billing_company"
          >{{ Content.company[$i18n.locale] }}: {{ address.billing_company }}</div>
          <div
            v-if="address.billing_branch !== '-' && address.billing_branch"
          >{{ Content.branch[$i18n.locale] }}: {{ address.billing_branch }}</div>
          <div>{{ Content.phone[$i18n.locale] }}: {{ billingPhone }}</div>
          <div>{{ Content.email[$i18n.locale] }}: {{ address.billing_email }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Content from './Content.json'

  export default {
    data: () => ({
      Content
    }),
    computed: {
      success () {
        return this.$store.state.tracking.trackingSuccess
      },
      successData () {
        return this.success.body.data[0]
      },
      orderId () {
        return this.successData.order_id
      },
      address () {
        return this.successData.order_address
      },
      deliveryPhone () {
        return this.computeMobileNumber(this.address.delivery_phone)
      },
      billingPhone () {
        return this.computeMobileNumber(this.address.billing_phone)
      },
      deliveryAddress () {
        const e = this.address
        const address2 = e.delivery_address_2 !== '-' ? ` ${e.delivery_address_2}` : ''
        const address = [
          `${e.delivery_address_1}${address2}`,
          e.delivery_district,
          e.delivery_city,
          e.delivery_province,
          `${e.delivery_postcode} ${e.delivery_country}`
        ]
        return address.join(', ')
      },
      billingAddress () {
        const e = this.address
        const address2 = e.billing_address_2 !== '-' ? ` ${e.billing_address_2}` : ''
        const address = [
          `${e.billing_address_1}${address2}`,
          e.billing_district,
          e.billing_city,
          e.billing_province,
          `${e.billing_postcode} ${e.billing_country}`
        ]
        return address.join(', ')
      }
    },
    methods: {
      computeMobileNumber (e) {
        const regex = e.length === 10 ? /(\d{3})(\d{3})(\d{4})/ : /(\d{2})(\d{3})(\d{4})/
        return e.replace(regex, '$1-$2-$3')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .address-container {
    font-size: 26px;
    line-height: 28px;
    display: grid;
    grid-gap: 24px;

    .description {
      font-family: TrueBold;
      color: #000;

      &.gold {
        color: #e4a20f;
      }
    }

    .address {
      font-size: 24px;
      line-height: 24px;
      color: #666;

      .contact {
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-gap: 0 24px;
      }
    }
  }

  @media screen and (max-width: 860px) {
    .address-container .address .contact {
      grid-template-columns: 1fr;
    }
  }
</style>
