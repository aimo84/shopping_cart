import {
  FETCH_EKYC_STATUS,
  FETCH_PRE_TO_POST_EKYC,
  VERIFY,
  FETCH_PACKAGE,
  FETCH_PRICE_PLAN
} from '@store/actions.type'

export const Mixins = {
  computed: {
    packages () {
      return this.$store.state.postpaid.package?.record?.[0]
    },
    plans () {
      return this.$store.state.postpaid.pricePlan.data.record
    },
    plan () {
      return this.plans.find(e => e.id === this.$route.query.pp)
    },
    ekycStatus () {
      return this.$store.state.ekyc.ekycStatus
    },
    preToPostEkycStatus () {
      return this.$store.state.ekyc.preToPostEkycStatus
    },
    ekycAnswers () {
      const answers = {}
      if (!this.ekycStatus.answers) return {}
      this.ekycStatus.answers.forEach((e) => {
        answers[e.question] = e.value
      })
      return answers
    }
  },
  methods: {
    async loadData () {
      if (!this.$route.query.hash) throw new Error()
      if (!this.$route.query.pp) throw new Error()
      await Promise.all([
        this.$store.dispatch(FETCH_PACKAGE, this.$route.params.nas_code),
        this.$store.dispatch(FETCH_PRICE_PLAN, {
          section: 'wemall',
          sim_type: 'postpaid',
          nas_code: this.$route.params.nas_code
        })
      ])
      if (!this.packages || !this.plan) throw new Error()
      await this.$store.dispatch(FETCH_EKYC_STATUS, this.$route.query.hash)
      await this.$store.dispatch(FETCH_PRE_TO_POST_EKYC, {
        is_pre2post_ss: 1,
        cart_hash: this.$route.query.id,
        answers: this.ekycStatus.answers,
        image_liveness: this.ekycStatus.image_liveness,
        image_front: this.ekycStatus.image_front,
        image_front_face: this.ekycStatus.image_front_face
      })
      await this.$store.dispatch(VERIFY, {
        id: 'pre_to_post',
        data: {
          id_number: this.ekycAnswers.national_id,
          service_name: 'truemove',
          mobile_number: this.ekycAnswers.mobile_no,
          birthday: this.ekycAnswers.date_of_birth,
          priceplan: this.plan.code,
          cart_hash: this.$route.query.id,
          is_pre2post_ss: 1,
          nas_code: this.$route.params.nas_code
        }
      })
    },
    getAddress () {
      return {
        firstname: this.ekycAnswers.first_name,
        lastname: this.ekycAnswers.last_name,
        address1: this.ekycAnswers.home_address,
        address2: '',
        district_id: this.ekycAnswers.home_subdistrict_id.toString(),
        city_id: this.ekycAnswers.home_district_id.toString(),
        province_id: this.ekycAnswers.home_province_id.toString(),
        postcode: this.ekycAnswers.home_zipcode,
        country_id: '209',
        phone: this.ekycAnswers.mobile_no,
        email: this.ekycAnswers.email
      }
    },
    getThaiId () {
      return this.ekycAnswers.national_id
    }
  }
}
