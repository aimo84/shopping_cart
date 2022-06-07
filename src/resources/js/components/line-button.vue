<template>
    <div v-if="isShow && showButton">
      <div
        class="line"
        @click="openLineContact"
      >
        <img class="line-logo" src="/images/icons/line-logo.svg" />
      </div>
      <img @click="closeLineContact" class="line-cross" src="/images/icons/line-cross.png" />
    </div>
</template>
<script>
  export default {
    data: () => ({
      callbackType: null,
      showButton: true
    }),
    computed: {
      isShow () {
        const showCallback = this.callbackType
        return showCallback
      }
    },
    watch: {
      '$store.state.clm.clmMobileNo' () {
        this.handleLocalStorage()
      },
      callbackType () {
        this.callbackType = localStorage.getItem('callback-type')
      }
    },
    created () {
      window.addEventListener('storage', this.handleLocalStorage)
      this.handleLocalStorage()
    },
    destroyed () {
      window.removeEventListener('storage', this.handleLocalStorage)
    },
    mounted () {
      this.callbackType = null
      setTimeout(() => this.fetchCallback(), 1000)
    },
    methods: {
      openLineContact () {
        window.open('https://line.me/R/ti/p/%40386rcdld', '_blank')
      },
      closeLineContact () {
        this.showButton = false
      },
      fetchCallback () {
        this.callbackType = localStorage.getItem('callback-type')
      },
      handleLocalStorage () {
        this.callbackType = localStorage.getItem('callback-type') || null
      }
    }
  }
</script>

<style lang="scss" scoped>
  .line {
    position: fixed;
    z-index: 9;
    bottom: 10px;
    right: 10px;
    cursor: pointer;
    display: grid;
    grid-template-columns: auto auto;
    font-family: 'TrueBold';
    font-size: 22px;
    line-height: 18px;
    align-items: center;
    padding: 4px 16px 4px 4px;

    .line-logo {
      width: 100px;
    }
  }

  .line-cross {
      position: fixed;
      z-index: 9;
      cursor: pointer;
      bottom: 110px;
      right: 30px;
      width: 15px;
    }

  @media screen and (max-width: 860px) {
    .line {
      right: 8px;
      bottom: 8px;
    }
  }
</style>


