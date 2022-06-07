<template>
  <div>
    <thaiid-form
      :next="next"
      :product="product"
      :productInfo="productInfo"
      :isCampaignRedeem="isCampaignRedeem"
      :isVlearn="isVlearn"
      :isCampaignRedeemFreeDevice="isCampaignRedeemFreeDevice"
    />
  </div>
</template>

<script>
  import ThaiidForm from '@sections/thaiid-form'

  export default {
    components: {
      'thaiid-form': ThaiidForm
    },
    props: ['updateFormInfo', 'product', 'productInfo', 'isCampaignRedeem', 'isVlearn', 'isCampaignRedeemFreeDevice'],
    data: () => ({

    }),
    computed: {

    },
    mounted () {

    },
    methods: {
      async next (id, date, expDate, redeemCode, ekycData = null) {
        if (expDate) {
          this.updateFormInfo({ id: id, date: date, id_card_exp: expDate, redeem_code: redeemCode })
        } else if (this.isVlearn && this.isVlearn === true && ekycData) {
          this.updateFormInfo({ id: id, date: date, redeem_code: redeemCode, ekyc_data: ekycData })
        } else {
          this.updateFormInfo({ id: id, date: date, redeem_code: redeemCode })
        }
      }
    }
  }
</script>
