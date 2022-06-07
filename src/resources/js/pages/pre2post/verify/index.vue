<template>
  <div class="container">
    <div class="banner-container">
      <img src="/images/pre2post/selfservice.jpg">
    </div>
    <form-element
      :product="{}"
      :config="config"
      :title="title"
      :link="link"
      :subtitle="subtitle"
      pre2post
    />
    <div class="question-answer-container">
       <qa-element />
    </div>
  </div>
</template>

<script>
  import Form from '../../store/privilege/verify/form.vue'
  import QA from './QA.vue'
  import {
    VERIFY
  } from '@store/actions.type'

  export default {
    components: {
      'form-element': Form,
      'qa-element': QA
    },
    props: {
      data: Object
    },
    computed: {
      product () {
        return this.$store.state.products.productInfo.data.record
      },
      config () {
        return {
          path: 'pre_to_post',
          options: {
            truemoveh: true
          }
        }
      },
      title () {
        return {
          th: '4 ข้อดีที่ควรเปลี่ยนจากเติมเงินเป็นรายเดือน',
          en: 'Switch from Prepaid to Postpaid'
        }
      },
      link () {
        return {
          th: 'คลิก',
          en: 'click'
        }
      },
      subtitle () {
        return {
          th: 'โปรดกรอกเลขหมายโทรศัพท์เคลื่อนที่ ที่ต้องการเปลี่ยนเป็นรายเดือน',
          en: 'Please enter prepaid number for switching to postpaid.'
        }
      }
    },
    mounted () {
      this.$emit('loading', false)
    },
    methods: {
      async checkVerify (e) {
        try {
          this.$emit('loading', true)
          const result = await this.$store.dispatch(VERIFY, {
            id: 'pre_to_post/pre_ekyc',
            data: {
              mobile_number: e.mobile_number,
              otp: e.otp
            }
          })
          if (!result.is_pass) throw new Error()
          this.data.verify_passed = true
          this.$router.push({
            name: 'pre2post-listing',
            query: {
              id: result.cart_hash,
              token: this.$route.query.token
            }
          })
        } catch (e) {
          this.data.verify_passed = false
          this.data.verify_failed = true
          this.$emit('loading', false)
          this.$router.push({
            name: 'pre2post-noneligible'
          })
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    padding: 16px 0;

    .question-answer-container {
      margin-top: 25px;
    }
  }
  .banner-container img {
    width: 100%;
    display: block;
    max-width: 1280px;
    margin: 0 auto 20px auto;
  }
</style>
