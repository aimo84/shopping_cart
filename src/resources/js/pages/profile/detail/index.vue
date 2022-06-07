<template>
  <div class="mx-2 mx-lg-5 py-3 row">
    <nav-profile />
    <div class="col-md-9">
      <div class="row">
        <div class="font-bold h2 col-md-12">{{ Content.label.header[$i18n.locale ]}}</div>
        <div class="group-overview col-md-12 py-3">
          <div class="px-0 d-none d-md-block margin-bottom-20">
            <div class="font-bold h4 mb-0">{{ Content.label.title[$i18n.locale ]}}</div>
          </div>
          <div class="px-0 d-block d-md-none margin-bottom-20" role="button" @click="$router.push('/profile')">
              <div class="font-bold h4 mb-0">
                  <img src="/images/icons/icon-left.png" style="width: 30px;">
                  {{ Content.label.title[$i18n.locale ]}}
              </div>
          </div>
          <div class="box-user-display p-2 d-block d-md-none text-center">
              <img :src = "avatar" class="rounded-circle w-25">
          </div>
          <div class="col-md-12 col-12 rounded">
              <div class="col-md-12 text-left">
                  <div class="row font-medium">
                      <div class="row col-md-12 py-1">
                          <div class="text-blue col-md-2 h5 font-bold">{{ Content.label.displayName[$i18n.locale ]}}</div>
                          <div class="text-blue col-md-10 h5 font-medium">{{ displayName }}</div>
                      </div>
                      <div class="row col-md-12 py-1">
                          <div class="text-blue col-md-2 h5 font-bold">{{ Content.label.email[$i18n.locale ]}}</div>
                          <div class="text-blue col-md-10 h5 font-medium">{{ email }}</div>
                      </div>
                      <div class="row col-md-12 py-1">
                          <div class="text-blue col-md-2 h5 font-bold">{{ Content.label.phone[$i18n.locale ]}}</div>
                          <div class="text-blue col-md-10 h5 font-medium">{{ phone }}</div>
                      </div>
                      <div class="row col-md-12 py-1">
                          <div class="text-blue col-md-2 h5 font-bold">{{ Content.label.birthday[$i18n.locale ]}}</div>
                          <div class="text-blue col-md-10 h5 font-medium">{{ birthday }}</div>
                      </div>
                      <div class="row col-md-12 py-1">
                          <div class="text-blue col-md-2 h5 font-bold">{{ Content.label.sex[$i18n.locale ]}}</div>
                          <div class="text-blue col-md-10 h5 font-medium">{{ sex }}</div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import NavProfile from './../nav'
  import Content from './content.json'

  export default {
    components: {
      'nav-profile': NavProfile
    },
    data: () => ({
      Content
    }),
    computed: {
      user () {
        return this.$store.state.auth.profile.data
      },
      displayName () {
        return this.user?.display_name ? this.user?.display_name : '-'
      },
      sex () {
        return this.user?.sex ? this.user?.sex : '-'
      },
      birthday () {
        return this.user?.birthday ? this.user?.birthday : '-'
      },
      email () {
        return this.user?.email ? this.user?.email : '-'
      },
      phone () {
        return this.user?.phone ? this.user?.phone : '-'
      },
      avatar () {
        return this.user?.avatar + this.user?.user_id
      }
    }
  }
</script>
