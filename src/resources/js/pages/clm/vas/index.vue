<template>
  <div>
    <clm-vas-verify
      v-if="page === 'verify'"
      :data="data"
    />
    <clm-vas-package
      v-if="page === 'package'"
      :data="data"
    />
    <clm-vas-confirm
      v-if="page === 'confirm'"
      :data="data"
    />
    <clm-vas-result
      v-if="page === 'result'"
      :data="data"
    />
  </div>
</template>

<script>
  import {
    getCLMQueries
  } from '@utils/common'

  export default {
    components: {
      'clm-vas-verify': () => import('./clm-vas-verify'),
      'clm-vas-package': () => import('./clm-vas-package'),
      'clm-vas-confirm': () => import('./clm-vas-confirm'),
      'clm-vas-result': () => import('./clm-vas-result')
    },
    data: () => ({
      page: 'verify',
      data: {
        campId: '',
        otp: {
          phoneNumber: '',
          otp: ''
        },
        tol: {
          circuit_id: '',
          thai_id: ''
        },
        package: {
          id: '',
          tier: null
        }
      }
    }),
    computed: {
      campId () {
        const queries = Object.keys(this.$route.query)
        const parameter = getCLMQueries(queries)
        if (!parameter) return ''
        return this.$route.query[parameter]
      }
    },
    watch: {
      page () {
        window.scrollTo(0, 0)
      }
    },
    mounted () {
      this.data.campId = this.campId
    }
  }
</script>
