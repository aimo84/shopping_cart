<template>
  <div>
    <preview-vas-package
      v-if="page === 'package'"
      :data="data"
    />
    <preview-vas-confirm
      v-if="page === 'confirm'"
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
      'preview-vas-package': () => import('./preview-vas-package'),
      'preview-vas-confirm': () => import('./preview-vas-confirm')
    },
    data: () => ({
      page: 'package',
      data: {
        campid: '',
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
      this.data.campid = this.campId
    }
  }
</script>
