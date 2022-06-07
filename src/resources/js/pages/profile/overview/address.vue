<template>
    <div class="col-md-7">
        <div class="row">
            <div class="col-md-8 col-8 font-bold h4">{{ Content.label.address[$i18n.locale ]}}</div>
            <div class="col-md-4 col-4 text-right font-light h6 pe-auto" role="button">
                <img style="width: 10px" src="/images/icons/icon-pencil.png" />
                <a class="text-primary" @click="$router.push('/profile/address')" >{{ Content.label.edit[$i18n.locale ]}}</a>
            </div>
            <div class="col-md-12 font-medium h5 mb-0">{{ Content.label.defaultAddress[$i18n.locale ]}}</div>
        </div>
        <div class="row" v-if="defaultAddress">
            <div class="col-md-6">
                <div class="row">
                    <div class="col-md-12 font-bold h5 mb-0">{{ defaultAddress.firstname }} {{ defaultAddress.lastname }}</div>
                    <div class="col-md-12 font-medium h5 mb-0">{{ defaultAddress.address_1 }} {{ defaultAddress.address_2 }}</div>
                    <div class="col-md-12 font-medium h5 mb-0">{{ defaultAddress.district }} {{ defaultAddress.city }} {{ defaultAddress.province }} {{ defaultAddress.postcode }}</div>
                    <div class="col-md-12 font-medium h5 mb-0" v-if="defaultAddress.phone">+(66) {{ defaultAddress.phone }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import Content from './content.json'
  import {
    GET_USER_ADDRESS
  } from '@store/actions.type'

  export default {
    data: () => ({
      defaultAddress: {},
      Content
    }),
    computed: {
      user () {
        return this.$store.state.auth.profile.data
      }
    },
    watch: {
      user () {
        this.getUserAddress()
      }
    },
    mounted () {
      this.getUserAddress()
    },
    methods: {
      getUserAddress () {
        if (this.user) {
          this.$store.dispatch(GET_USER_ADDRESS, { user_id: this.user.user_id }).then(data => {
            for (let index = 0; index < data.data.record.length; index++) {
              if (data.data.record[index].address_default === 1) {
                this.defaultAddress = data.data.record[index]
              }
            }
          })
        }
      }
    }
  }
</script>
