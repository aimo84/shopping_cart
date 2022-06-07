<template>
  <div>
    <div class="block-header">
      <h1>{{ Content.title[$i18n.locale] }}</h1>
    </div>
    <progress-element :step="4" />
    <loading-element v-if="loading" />
    <template v-else>
      <drlucky-element
        v-if="success.fortune_funtong"
        :funtong="success.fortune_funtong"
        :products="orderProducts"
      />
      <order-element
        v-else
        :products="orderProducts"
        @print="print"
      />
    </template>
  </div>
</template>

<script>
  import Progress from '@components/progress'
  import Loading from '@components/loading'
  import Content from './Content.json'
  import SuccessMixin from './success'

  import { FETCH_TRACKING_SUCCESS } from '@store/actions.type'

  export default {
    components: {
      'progress-element': Progress,
      'loading-element': Loading,
      'drlucky-element': () => import('./drlucky'),
      'order-element': () => import('./order')
    },
    mixins: [SuccessMixin],
    data: () => ({
      Content,
      loading: true,
      ft: false
    }),
    async mounted () {
      try {
        this.checkFirstTimeQuery()
        const successCode = this.$route.query.success_code
        if (!successCode) throw new Error('no-success-code')
        await this.$store.dispatch(FETCH_TRACKING_SUCCESS, successCode)
        this.loading = false
        window.addEventListener('beforeprint', this.setPrint)
        window.addEventListener('afterprint', this.removePrint)
        if (this.ft) this.firstTime()
      } catch (e) {
        console.log(e)
      }
    },
    beforeDestroy () {
      window.removeEventListener('beforeprint', this.setPrint)
      window.removeEventListener('afterprint', this.removePrint)
    }
  }
</script>
