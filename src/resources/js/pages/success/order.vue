<template>
  <div class="order-container">
    <div class="order-inner-container">
      <div class="success-container">
        <div class="success-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="40" width="40" fill="#fff">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" stroke="#fff" />
          </svg>
        </div>
        <div class="title">{{ orderTitle[$i18n.locale] }}</div>
        <div>{{ Content.orderreceived[$i18n.locale] }}</div>
        <div>{{ Content.suborderreceived[$i18n.locale] }}</div>
        <div class="order-id">{{ orderId }}</div>
        <div>{{ Content.ordermessage[$i18n.locale] }}</div>
      </div>
      <div class="tracking-detail">
        <ul>
            <li>{{ Content.ordertrackingtitle[$i18n.locale] }}</li>
        </ul>
        <ol>
            <li>{{ Content.ordertrackingclaimedcondition1[$i18n.locale] }}</li>
            <li>{{ Content.ordertrackingclaimedcondition2[$i18n.locale] }}</li>
        </ol>
        <div>{{ Content.ordertrackingnote[$i18n.locale] }}</div>
      </div>
      <div class="divider" />
      <image-element :products="products" />
      <address-element />
      <div class="product-detail">
        <div class="title">Product Detail</div>
        <div
          class="product-container"
          v-for="(product, key) in products"
          :key="key"
        >
          <product-element :product="product" />
        </div>
      </div>
      <summary-element :products="products" />
      <div class="button-container">
        <router-link
          class="back"
          id="back_homepage"
          to="/online-store"
        >
          <button-element
            class="button"
          >{{ Content.backHomepage[$i18n.locale] }}</button-element>
        </router-link>
        <button-element
          id="view_order_details"
          @click="$emit('print')"
        >{{ Content.viewDetails[$i18n.locale] }}</button-element>
      </div>
    </div>
  </div>
</template>

<script>
  import Button from '@components/button'
  import Image from './image'
  import Address from './address'
  import Product from './product'
  import Summary from './summary'
  import Content from './Content.json'

  export default {
    components: {
      'button-element': Button,
      'image-element': Image,
      'address-element': Address,
      'product-element': Product,
      'summary-element': Summary
    },
    props: {
      products: Array
    },
    data: () => ({
      Content
    }),
    computed: {
      successData () {
        return this.$store.state.tracking.trackingSuccess.body.data[0]
      },
      orderId () {
        return this.successData.order_id
      },
      orderAddress () {
        return this.successData.order_address
      },
      orderTitle () {
        const isCOD = this.successData.payment_method === 'COD'
        return isCOD ? this.Content.ordersubmited : this.Content.paymentcompleted
      }
    }
  }
</script>

<style lang="scss" scoped>
  .order-container {
    font-size: 1.5em;
    line-height: 1em;
    background-color: #fff;
    border-radius: 8px;
    margin-top: 20px;

    .order-inner-container {
      display: grid;
      grid-gap: 36px;
      padding: 48px 16px;
      max-width: 760px;
      margin: auto;

      .success-container {
        display: grid;
        text-align: center;
        grid-gap: 4px;
        font-size: 26px;

        .success-icon {
          width: 95px;
          height: 95px;
          display: grid;
          place-items: center;
          background: #ffb800;
          border-radius: 50%;
          box-shadow: 2px 3px 0 #e7a700;
          margin: auto auto 16px;
        }

        .title {
          color: #000;
          font-size: 42px;
          line-height: 48px;
          font-family: 'TrueBold';
        }
        .order-id {
          color: #212121;
          font-size: 40px;
          line-height: 40px;
          font-family: 'TrueBold';
        }
      }

      .divider {
        width: 100%;
        border-top: 1px dashed #ccc;
      }

      .product-detail {
        display: grid;
        grid-gap: 16px;

        .title {
          font-family: 'TrueBold';
          color: #000;
          font-size: 26px;;
        }
        .product-container {
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 20px;
          min-height: 130px;
        }
      }

      .button-container {
        display: grid;
        grid-gap: 16px;
        grid-template-columns: auto auto;
        justify-content: center;

        .back .button {
          width: 100%;
          background-color: #666;
        }
      }
    }
  }

  @media screen and (max-width: 860px) {
    .order-container .order-inner-container {
      .success-container .success-icon {
        width: 50px;
        height: 50px;

        svg {
          width: 24px;
          height: 24px;
        }
      }
      .button-container {
        grid-template-columns: 1fr;
        grid-template-areas: 'b' 'a';

        .back {
          grid-area: a;
        }
      }
    }
  }

  @media print {
    .order-container .order-inner-container .success-container .success-icon {
      display: none;
    }
  }

  .tracking-detail {
    color: #EA3223;
    font-size: 0.9em;
    ul {
      list-style-type: '*';
      padding: 0 0 0 5px;
      margin: 0px;
    }
    ol {
      list-style-type: ' - ';
      padding: 0 0 0 18px;
      margin: 0px;
    }
    div {
      margin-top: 5px;
    }
  }
</style>
