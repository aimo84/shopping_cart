<template>
  <div>
    <thaiid-form
      :next="next"
      :product="product"
    />
  </div>
</template>

<script>
  import ThaiidForm from '@sections/thaiid-form'

  export default {
    components: {
      'thaiid-form': ThaiidForm
    },
    props: ['updateFormInfo', 'isCampaignFreeDevice'],
    data: () => ({

    }),
    computed: {
      product () {
        return this.$parent.isMnpOneStep ? 'mnp_one_step' : this.$parent.isMnpSharePlan ? 'mnp_share_plan' : ''
      }
    },
    mounted () {

    },
    methods: {
      async next (id, date) {
        this.$parent.updateFormInfo({ id: id, date: date })
      }
    }
  }
</script>
