<template>
  <div class="container">
    <loading-element v-if="page === 'loading'" />
    <form-element v-if="page === 'form'" />
    <checking-element v-if="page === 'checking'" />
    <result-element
      v-if="page === 'result'"
      :data="data"
      :result="result"
    />
  </div>
</template>

<script>
  import Loading from '@components/loading'
  import Form from './form'
  import Checking from './checking'
  import Result from './result'
  import {
    FETCH_UNIVERSITY,
    VERIFY_VLEARN
  } from '@store/actions.type'

  export default {
    components: {
      'loading-element': Loading,
      'form-element': Form,
      'checking-element': Checking,
      'result-element': Result
    },
    data: () => ({
      page: 'loading',
      data: {},
      result: {}
    }),
    watch: {
      page () {
        window.scrollTo(0, 0)
      }
    },
    async mounted () {
      await this.$store.dispatch(FETCH_UNIVERSITY)
      this.page = 'form'
    },
    methods: {
      goTo (page) {
        this.page = page
      },
      async verify (data) {
        this.data = data
        this.page = 'checking'
        try {
          this.result = await this.$store.dispatch(VERIFY_VLEARN, data)
        } catch (e) {
          this.result = e
        }
        this.page = 'result'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    padding: 16px 0;
  }
</style>
