<template>
  <div>
    <loading-element v-if="loading || orderLoading" />
    <div v-else>
      <div
        class="error-container"
        v-if="error"
      >
        <ul>
          <li>{{ error[$i18n.locale] }}</li>
        </ul>
      </div>
      <div class="order-container">
        <div class="order">
          <div class="product-container">
            <div class="title bold">{{ Locale.summary[$i18n.locale] }}</div>
            <div class="product">
              <img :src="product.image.url" />
              <div class="info">
                <div class="name">{{ description[$i18n.locale] }}</div>
                <div class="price">{{ product.price }} ฿</div>
              </div>
            </div>
          </div>
          <div>
            <clm-benefit-element
              type="trueonline"
            ></clm-benefit-element>
          </div>
          <div class="price-container">
            <div class="bold">{{ Locale.package_price[$i18n.locale] }}</div>
            <div class="bold red right">{{ product.price }} ฿</div>
            <div class="bold">{{ Locale.installation_cost[$i18n.locale] }}</div>
            <div class="bold red right">{{ Locale.free[$i18n.locale] }}</div>
            <div class="bold">{{ Locale.admission_fee[$i18n.locale] }}</div>
            <div class="bold red right">890 ฿</div>
          </div>
          <div class="address-container">
            <div class="title bold">{{ Locale.billing_address[$i18n.locale] }}</div>
            <div class="address">{{ billingAddr }}</div>
          </div>
          <div class="address-container">
            <div class="title bold">{{ Locale.invoice_address[$i18n.locale] }}</div>
            <div class="address">{{ invoiceAddr }}</div>
          </div>
        </div>
        <div class="order">
          <div class="detail-container">
            <div class="title bold">{{ Locale.order_detail[$i18n.locale] }}</div>
            <div class="info-container">
              <div>{{ Locale.fullname[$i18n.locale] }}:</div>
              <div>{{ this.data.instl_addr.firstname }} {{ this.data.instl_addr.lastname }}</div>
              <div>{{ Locale.identity[$i18n.locale] }}:</div>
              <div>{{ this.data.instl_addr.identification }}</div>
              <div>{{ Locale.firstname[$i18n.locale] }}:</div>
              <div>{{ this.data.instl_addr.firstname }}</div>
              <div>{{ Locale.lastname[$i18n.locale] }}:</div>
              <div>{{ this.data.instl_addr.lastname }}</div>
              <div>{{ Locale.email[$i18n.locale] }}:</div>
              <div>{{ this.data.instl_addr.email }}</div>
              <div>{{ Locale.contact_number_1[$i18n.locale] }}:</div>
              <div>{{ this.data.instl_addr.phone }}</div>
            </div>
            <div class="installation-container">
              <div>{{ Locale.installation_location[$i18n.locale] }}:</div>
              <div>{{ installationAddr }}</div>
            </div>
          </div>
        </div>
        <div class="button-container">
          <div />
          <router-link
            :to="`/trueonline/address/${$route.params.id}`"
            id="tol-register-back"
          >
            <button-element class="back">{{ Locale.back[$i18n.locale] }}</button-element>
          </router-link>
          <button-element @click="registerOrder">{{ Locale.submit[$i18n.locale] }}</button-element>
        </div>
        <div class="sticky-container">
          <button-element
            @click="registerOrder"
            id="tol-register"
          >{{ Locale.submit[$i18n.locale] }}</button-element>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Button from '@components/button'
  import Loading from '@components/loading'
  import Locale from './locale.json'
  import ClmBenefit from '@components/clm-benefit'

  import {
    TOL_REGISTER
  } from '@store/actions.type'

  import {
    loggerAddon
  } from '@utils/addon'

  export default {
    components: {
      'button-element': Button,
      'loading-element': Loading,
      'clm-benefit-element': ClmBenefit
    },
    props: {
      data: Object,
      loading: Boolean,
      token: Object,
      lang: String
    },
    data: () => ({
      Locale,
      orderLoading: true,
      error: false
    }),
    computed: {
      product () {
        return this.$store.state.trueonline.tolProduct.data
      },
      description () {
        return {
          th: this.product.description_th,
          en: this.product.description_en
        }
      },
      billingAddr () {
        return this.computeAddress('billing_addr')
      },
      invoiceAddr () {
        return this.computeAddress('invoice_addr')
      },
      installationAddr () {
        const addr = this.data.instl_addr
        const addressArr = [
          addr.HOUSE_NO,
          addr.MOO,
          addr.STREET,
          addr.SOI
        ]
        const address = addressArr.filter(e => e).join(' ')
        return `${address}, ${addr.SUB_DISTRICT}, ${addr.DISTRICT}, ${addr.PROVINCE} ${addr.ZIP_CODE}`
      }
    },
    mounted () {
      if (!this.data.address_form_submitted) {
        this.$router.push(`/trueonline/address/${this.$route.params.id}`)
        return
      }
      this.error = false
      this.orderLoading = false

      if (!this.loading) {
        loggerAddon({
          type: 'TOL',
          event: 'TOL user order',
          status: 'pending',
          tolProductData: [
            this.product.contract_code,
            this.product.entry_fee,
            this.product.media,
            this.product.service_code
          ],
          tolPrice: this.product.price,
          tolInvoice: this.product.invoice_tol,
          tolEntryFee: this.product.tol_entry_fee,
          tolUserAddress: [
            this.data.billing_addr.name,
            this.data.billing_addr.lastname,
            this.data.billing_addr.houseNo,
            this.data.billing_addr.soi,
            this.data.billing_addr.streetName,
            this.data.billing_addr.district,
            this.data.billing_addr.city,
            this.data.billing_addr.province,
            this.data.billing_addr.postcode,
          ]
        })
      }
    },
    methods: {
      computeAddress (value) {
        const addr = this.data[value]
        const addressArr = [
          addr.houseNo,
          addr.moo,
          addr.streetName,
          addr.soi
        ]
        const address = addressArr.filter(e => e).join(' ')
        return `${addr.name} ${addr.lastname},\n${address},\n${addr.district},\n${addr.city},\n${addr.province} ${addr.postcode}`
      },
      async registerOrder () {
        this.orderLoading = true
        const timeslot = this.data.instl_addr.installation_time.split(';')
        const data = {
          correlationId: this.token.correlationId,
          certificateId: this.token.certificateId,
          _identity: this.token._identity,
          id_number: this.data.instl_addr.identification,
          mobilePhone: this.data.instl_addr.phone,
          appointmentDate: timeslot[0],
          timeSlot: timeslot[1],
          product_id: this.$route.params.id,
          customerContactList: {
            firstname: this.data.instl_addr.firstname,
            lastname: this.data.instl_addr.lastname,
            mobilePhone: this.data.instl_addr.phone,
            serviceName: {
              title: 'T0037',
              name: this.data.instl_addr.firstname,
              lastname: this.data.instl_addr.lastname
            },
            billingName: {
              title: 'T0037',
              name: this.data.billing_addr.name,
              lastname: this.data.billing_addr.lastname
            },
            billingAddress: {
              amphur: this.data.billing_addr.city,
              city: this.data.billing_addr.province,
              houseNo: this.data.billing_addr.houseNo || '-',
              moo: this.data.billing_addr.moo || '-',
              soi: this.data.billing_addr.soi || '-',
              streetName: this.data.billing_addr.streetName || '-',
              tumbon: this.data.billing_addr.district,
              zip: this.data.billing_addr.postcode
            },
            taxName: {
              title: 'T0037',
              name: this.data.invoice_addr.name,
              lastname: this.data.invoice_addr.lastname
            },
            taxAddress: {
              amphur: this.data.invoice_addr.city,
              city: this.data.invoice_addr.province,
              houseNo: this.data.invoice_addr.houseNo || '-',
              moo: this.data.invoice_addr.moo || '-',
              soi: this.data.invoice_addr.soi || '-',
              streetName: this.data.invoice_addr.streetName || '-',
              tumbon: this.data.invoice_addr.district,
              zip: this.data.invoice_addr.postcode
            },
            billMediaInfo: {
              billMedia: 'E',
              email: this.data.instl_addr.email,
              billLanguage: this.lang === 'en' ? 'EN' : 'TH'
            },
            customerIndyName: {
              title: 'T0037',
              firstName: this.data.instl_addr.firstname,
              lastName: this.data.instl_addr.lastname,
              maritalStatus: 'N',
              gender: this.data.instl_addr.gender,
              language: this.lang === 'en' ? 'EN' : 'TH',
              identification: this.data.instl_addr.identification,
              identificationType: this.data.instl_addr.identificationType
            }
          },
          customerGeneralInfo: {
            contactLang: this.lang === 'en' ? 'EN' : 'TH',
            grading: 'NON-TOP',
            identification: this.data.instl_addr.identification,
            identificationExpDate: '2098-12-31T17:00:00Z',
            identificationType: this.data.instl_addr.identificationType,
            birthDate: this.data.instl_addr.birthDate,
            occupation: 'N',
            nationality: 'THA',
            initTimeInAddress: '0101'
          },
          ekyc: this.data.ekyc
        }

        // Add clm_upsell if exist from CLM Verify
        const clmUpsell = localStorage.getItem('clm-upsell')
        if (clmUpsell) {
          data.clm_upsell = clmUpsell
        }

        try {
          this.orderLoading = true
          const result = await this.$store.dispatch(TOL_REGISTER, data)
          if (result.status === 'success') {
            this.data.result = result
            this.data.order_form_submitted = true
            localStorage.removeItem('tol-certificate-id')
            localStorage.removeItem('tol-correlation-id')
            localStorage.removeItem('tol-identity')
            localStorage.removeItem('clm-upsell')
            this.$router.push(`/trueonline/success/${this.$route.params.id}`)
            return
          }
          throw new Error('err')
        } catch (e) {
          window.scrollTo(0, 0)
          this.error = e.message.th ? e.message : {
            th: 'Something went wrong.',
            en: 'Something went wrong.'
          }
          this.orderLoading = false
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .order-container {
    margin-top: 24px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    line-height: 24px;

    .order {
      padding: 16px 24px;

      &:first-child {
        border-right: 1px solid #e7e7e8;
      }

      .title {
        margin-bottom: 24px;
        font-size: 28px;
        line-height: 28px;
      }

      .bold {
        font-family: 'TrueBold';
      }

      .red {
        color: #ff0000;
      }

      .right {
        text-align: right;
      }

      .product-container {
        border-bottom: 1px solid #e7e7e8;
        padding-bottom: 24px;

        .product {
          background-color: #f7f7f7;
          padding: 24px;
          border-radius: 8px;
          display: grid;
          grid-template-columns: 140px 1fr;
          grid-gap: 16px;
          align-items: flex-start;

          img {
            width: 100%;
          }

          .info {
            color: #454545;
            font-size: 24px;
            display: grid;
            grid-gap: 8px;

            .name {
              color: #3c3c3c;
              font-family: 'TrueBold';
              font-size: 28px;
            }
            .price {
              font-family: 'TrueBold';
            }
          }
        }
      }

      .price-container {
        border-bottom: 1px solid #e7e7e8;
        padding: 24px 0;
        display: grid;
        grid-template-columns: 1fr auto;
        grid-gap: 8px;
      }

      .address-container {
        padding-top: 24px;

        .address {
          margin-left: 32px;
          white-space: pre-line;
        }
      }

      .detail-container {
        .info-container {
          margin-left: 32px;
          margin-bottom: 24px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 8px;
        }

        .installation-container {
          margin-left: 32px;
        }
      }
    }

    .button-container {
      grid-column: 1/-1;
      display: grid;
      grid-template-columns: 1fr auto auto 1fr;
      grid-gap: 16px;
      margin-top: 36px;

      .back {
        background-color: #9e9e9e;
      }
    }

    .sticky-container {
      display: none;
    }
  }

  @media screen and (max-width: 860px) {
    .order-container {
      grid-template-columns: 1fr;

      .order {
        padding: 8px;

        .title {
          margin-bottom: 20px;
        }

        &:first-child {
          border-right: none;
        }

        .product-container .product {
          grid-template-columns: 120px 1fr;
          padding: 16px;
        }

        .address-container {
          border-bottom: 1px solid #e7e7e8;
          padding: 24px 0;

          .address {
            margin-left: 20px;
          }
        }

        .detail-container {
          .info-container,
          .installation-container {
            margin-left: 20px;
          }
        }
      }

      .button-container {
        grid-template-columns: 1fr;
        text-align: center;
        margin-bottom: 24px;

        button {
          width: 100%;
        }

        & > div:first-child,
        & > button:last-child {
          display: none;
        }
      }

      .sticky-container {
        display: block;
        padding: 16px;
        position: sticky;
        bottom: 0;
        background: #fff;
        width: calc(100% + 32px);
        margin: 0 -16px 0 -16px;
        box-shadow: 0 -2px 10px 0 rgba(0, 0, 0, 0.1);

        button {
          width: 100%;
        }
      }
    }
  }
</style>
