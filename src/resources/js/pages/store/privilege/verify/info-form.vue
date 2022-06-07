<template>
  <div>
    <thaiid-form
      :next="next"
      :product="product"
      :isCampaignRedeem="isCampaignRedeem"
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
    props: ['updateFormInfo', 'product', 'isCampaignRedeem', 'isCampaignRedeemFreeDevice'],
    data: () => ({

    }),
    computed: {

    },
    mounted () {
    },
    methods: {
      async next (id, date, redeem_code) {
        this.updateFormInfo({ id: id, date: date, redeem_code: redeem_code })
      }
    }
  }
</script>
