<template>
  <div
    class="page-container"
    v-if="loaded"
  >
    <div class="inner-page-container">
      <div class="success-container">
        <div class="success-icon">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" stroke="#fff" />
          </svg>
        </div>
        <div class="success-message">{{ Locale.title[$i18n.locale] }}</div>
        <div>{{ Locale.order_number[$i18n.locale] }}</div>
        <div class="order-id">{{ $route.params.secure_key }}</div>
        <div class="success-description">{{ Locale.subtitle[$i18n.locale] }}</div>
      </div>

      <div class="pre-to-post">
        <div class="pre-to-post-download">
          <a class="button" href="https://iservice.truecorp.co.th/" target="_blank" />
        </div>
        <picture>
          <source :srcset="`/images/success/pre-to-post-2-success-en.webp`" type="image/webp">
          <img :src="`/images/success/pre-to-post-2-success-en.png`">
        </picture>
      </div>

      <div class="button-container">
        <span>
          <a href="/online-store">
            <button-element
              class="button back"
              id="back_homepage"
            >{{ Locale.back[$i18n.locale] }}</button-element>
          </a>
        </span>
        <span>
          <button-element
            class="button"
            @click="print"
          >{{ Locale.print[$i18n.locale] }}</button-element>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  import Button from '@components/button'
  import Locale from './locale.json'
  import {
    FETCH_PRE2POST_PLACEORDER
  } from '@store/actions.type'

  export default {
    components: {
      'button-element': Button
    },
    props: {
      data: Object,
      loading: Boolean
    },
    data: () => ({
      Locale,
      loaded: false
    }),
    computed: {
      order () {
        return this.$store.state.placeorder.pre2postOrder
      }
    },
    async mounted () {
      try {
        this.$emit('loading', true)
        const key = this.$route.params.secure_key
        await this.$store.dispatch(FETCH_PRE2POST_PLACEORDER, key)
        if (!this.order.is_pass) throw new Error()
        window.addEventListener('beforeprint', this.setPrint)
        window.addEventListener('afterprint', this.removePrint)
        this.data.listing_loaded = false
        this.data.verify_passed = false
        this.data.ekyc_passed = false
        this.loaded = true
        this.$emit('loading', false)
      } catch (e) {
        return this.$router.push({
          name: 'pre2post-verify'
        })
      }
    },
    beforeDestroy () {
      window.removeEventListener('beforeprint', this.setPrint)
      window.removeEventListener('afterprint', this.removePrint)
    },
    methods: {
      print () {
        window.print()
      },
      setPrint () {
        document.body.setAttribute('print', '')
      },
      removePrint () {
        document.body.removeAttribute('print')
      }
    }
  }
</script>

<style scoped lang="scss" src="./style.scss"></style>
