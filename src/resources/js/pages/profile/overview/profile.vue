<template>
    <div class="col-md-5 border-right">
        <div class="row">
            <div class="col-md-8 col-8 h4 font-bold">{{ Content.label.header[$i18n.locale ]}}</div>
            <div class="col-md-4 col-4 h6 text-right font-light" role="button">
                <!-- <img style="width: 10px" src="/images/icons/icon-pencil.png" /> -->
<!--                <a>แก้ไข</a>-->
            </div>
        </div>
        <div class="mt-lg-3">
            <div class="row py-1">
                <div class="col-4 font-bold h5">{{ Content.label.displayName[$i18n.locale ]}}</div>
                <div class="col-8 font-medium h5">{{ displayName }}</div>
            </div>
            <div class="row py-1">
                <div class="col-4 font-bold h5">{{ Content.label.email[$i18n.locale ]}}</div>
                <div class="col-8 font-medium h5">{{ email }}</div>
            </div>
            <div class="row py-1">
                <div class="col-4 font-bold h5">{{ Content.label.phone[$i18n.locale ]}}</div>
                <div class="col-8 font-medium h5">{{ phone }}</div>
            </div>
        </div>
    </div>
</template>

<script>
  import Content from './content.json'
  export default {
    data: () => ({
      Content
    }),
    computed: {
      user () {
        return this.$store.state.auth.profile.data
      },
      firstName () {
        return this.user?.first_name ? this.user?.first_name : '-'
      },
      lastName () {
        return this.user?.last_name ? this.user?.last_name : '-'
      },
      displayName () {
        return this.user?.display_name ? this.user?.display_name : '-'
      },
      birthday () {
        return this.user?.birthday ? this.user?.birthday : '-'
      },
      email () {
        return this.user?.email ? this.user?.email : '-'
      },
      phone () {
        return this.user?.phone ? this.user?.phone : '-'
      }
    }
  }
</script>
