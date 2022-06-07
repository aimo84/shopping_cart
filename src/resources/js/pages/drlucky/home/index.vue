<template>
  <div class="container" v-if="loaded">
    <dialog-element ref="dialog" />
    <div class="player">
      <video-player url="https://movie.trueid.net/embed/rpgOkNy2Dokp" />
      <div class="card">
        <card />
      </div>
    </div>
    <div class="verify-container">
      <div class="verify-header-container">
        <div class="title-container">
          <div class="title">กรอกข้อมูลเพื่อหาเบอร์มงคลเฉพาะคุณ</div>
        </div>
        <div v-if="showTab" class="tabs-container">
          <div class="subtitle"><span>และรับคำทำนายดวงชะตา โดย</span> <span>อาจารย์ลักษณ์ ราชสีห์ โหรฟันธง</span></div>
          <div class="tab-right">
              <p class="tab-header-text">เลือกประเภทเบอร์ฟันธง</p>
              <div class="tab-container">
                <div class='tab'>
                  <div class="tab-inner-container active">
                    <div class="tab-text">เบอร์ฟันธง ตรงดวงคุณ</div>
                    <div class="grid bg-red-500 border-red-500 place-items-center border rounded-full w-[20px] h-[20px] ms-1">
                      <svg width="14" height="10" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12.407.03c-.307.01-.6.14-.812.361-2.29 2.294-4.378 4.55-6.59 6.803L2.296 5.03a1.185 1.185 0 0 0-1.662.184 1.182 1.182 0 0 0 .185 1.662l3.545 2.837c.471.375 1.148.337 1.574-.09 2.545-2.55 4.83-5.06 7.327-7.563A1.183 1.183 0 0 0 12.407.03Z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class='tab'>
                  <div class="tab-inner-container">
                    <router-link
                    class="tab-text"
                    :to="tabUrl"
                  ><span>เบอร์ฟันธง มงคลราศี</span>
                    <div class="grid place-items-center border border-gray-80 rounded-full w-[20px] h-[20px] ms-1">
                      <svg width="14" height="10" fill="#ccc" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12.407.03c-.307.01-.6.14-.812.361-2.29 2.294-4.378 4.55-6.59 6.803L2.296 5.03a1.185 1.185 0 0 0-1.662.184 1.182 1.182 0 0 0 .185 1.662l3.545 2.837c.471.375 1.148.337 1.574-.09 2.545-2.55 4.83-5.06 7.327-7.563A1.183 1.183 0 0 0 12.407.03Z"
                        />
                      </svg>
                    </div>
                    </router-link>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>

      <div class="form-card-container">
        <!-- heading container -->
        <!-- <div class="form-heading-container">
        <div class="form-heading-img-container">
          <img width="100%" height="100%" src="/images/drlucky/berfuntong-placeholder.svg" alt="form-heading-img" />
        </div>
        <div class="form-heading-text-container">
          <div class="title">เบอร์ฟันธง ตรงดวงคุณ</div>
          <p class="form-heading-text subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
        </div>
      </div>
      <div class="divider" /> -->
        <div class="form-container">
          <form v-on:submit.prevent :loading="loading">
            <div class="datetime">
              <div class="input" :class="{error: !valid.birthdate}">
                <label for="date">วันเกิด</label>
                <div class="date">
                  <div class="dropdown">
                    <div class="dropdown-label">
                      <span>{{ date.day + 1 }}</span>
                    </div>
                    <select id="day" v-model="date.day">
                      <option
                        v-for="(day, key) in days"
                        :key="key"
                        :value="day"
                      >{{ day + 1 }}</option>
                    </select>
                  </div>
                  <div class="dropdown">
                    <div class="dropdown-label">
                      <span>{{ months[date.month] }}</span>
                    </div>
                    <select id="month" v-model="date.month">
                      <option
                        v-for="(month, key) in months"
                        :key="key"
                        :value="key"
                      >{{ month }}</option>
                    </select>
                  </div>
                  <div class="dropdown">
                    <div class="dropdown-label">
                      <span>{{ date.year + 543 }}</span>
                    </div>
                    <select id="year" v-model="date.year">
                      <option
                        v-for="(year, key) in years"
                        :key="key"
                        :value="year"
                      >{{ year + 543 }}</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="input time-input" :class="{'show-timepicker': !form.flag_unknow_time}">
                <div v-if="form.flag_unknow_time" class="input time-input" @click="form.flag_unknow_time = !form.flag_unknow_time">
                  <label for="time">เวลาเกิด</label>
                  <datetime
                    v-model="form.birthtime"
                    :backdrop-click="false"
                    class="datetime-picker time"
                    placeholder="หากไม่ระบุเวลาเกิด โปรแกรมจะลงเวลา 06.18 น."
                    type="time"
                    title="เวลาเกิด"
                    local
                    disabled
                  />
                  <div class="sub-label">ระบุเวลาเกิด เพื่อความแม่นยำในการเลือกเบอร์</div>
                </div>
                <label for="time" v-if="!form.flag_unknow_time">
                  เวลาเกิด
                </label>
                <div>
                  <span
                    class="blue"
                    @click="form.flag_unknow_time = !form.flag_unknow_time"
                    v-if="!form.flag_unknow_time"
                    >คลิกเพื่อกลับไปค่าเริ่มต้น</span>
                </div>
                <datetime
                  ref="datetime"
                  v-show="!form.flag_unknow_time"
                  v-model="form.birthtime"
                  :backdrop-click="false"
                  id="time"
                  class="datetime-picker time"
                  placeholder="หากไม่ระบุเวลาเกิด โปรแกรมจะลงเวลา 06.18 น."
                  type="time"
                  title="เวลาเกิด"
                  local
                />
              </div>
            </div>
            <div class="geo" :class="{ th: form.timezone === '+0700' }" v-show="!form.flag_unknow_time">
              <div class="input">
                <label>เขตประเทศเกิด</label>
                <div class="dropdown">
                  <div class="dropdown-label">
                    <span>{{ timezoneText }}</span>
                  </div>
                  <select v-model="form.timezone">
                    <option
                      v-for="(tz, key) in dropdown.timezones"
                      :key="key"
                      :value="tz.value"
                    >{{ tz.text }}</option>
                  </select>
                </div>
              </div>
              <div class="input" v-if="form.timezone === '+0700'">
                <label>จังหวัดที่เกิด</label>
                <div class="dropdown">
                  <div class="dropdown-label">
                    <span>{{ form.province }}</span>
                  </div>
                  <select v-model="form.province">
                    <option
                      v-for="(province, key) in dropdown.provinces"
                      :key="key"
                      :value="province"
                    >{{ province }}</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="button">
              <div class="error" v-if="error">{{ error }}</div>
              <button
                class="berfuntong-button"
                id="clear-berfuntong"
                type="button"
                @click="cleanup"
              >ล้างข้อมูล</button>

              <button
                class="berfuntong-button"
                id="search-berfuntong"
                type="button"
                @click="verify"
                :disabled="loading"
              >ค้นหาเบอร์ฟันธง</button>
            </div>
          </form>
        </div>
      </div>
      <div class="policy-container">
        <div>
          ข้อมูลของท่านที่กรอก จะใช้เพื่อการคำนวณค้นหาเบอร์ฟันธงเท่านั้น โดยระบบจะไม่ทำการเก็บ รวบรวม และ/หรือนำไปใช้เพื่อการอื่นแต่อย่างใด               เบอร์ฟันธง เป็นความเชื่อส่วนบุคคล โปรดใช้วิจารณญาณในการรับคำทำนายและเลือกซื้อ และคำทำนายไม่ได้การันตีผลของการใช้ ซึ่งเป็นเรื่องเฉพาะบุคคล
        </div>
        <div
          id="policy-popup"
          class="tnc"
          @click="openTncDialog"
        >นโยบายคุ้มครองข้อมูลส่วนบุคคล</div>
      </div>
    </div>
    <div class='description' v-if="!isSelectPage">
      <!-- <img width="100%" src="/images/drlucky/berfuntong-detail.png"> -->
      <picture>
        <source srcset="/images/drlucky/information-mobile.png" type="image/jpeg" media="(max-width: 860px)">
        <img src="/images/drlucky/information-desktop.png">
      </picture>
    </div>
  </div>
</template>

<script>
  import Dialog from './dialog'
  import dropdown from './dropdown.json'
  import VideoPlayer from '@components/video-player.vue'
  import Card from './card.vue'
  import { Datetime } from 'vue-datetime'
  import {
    VERIFY_VHORA
  } from '@store/actions.type'
  import 'vue-datetime/dist/vue-datetime.css'

  export default {
    components: {
      'dialog-element': Dialog,
      'video-player': VideoPlayer,
      'card': Card,
      datetime: Datetime
    },
    data: () => ({
      dropdown,
      loaded: false,
      form: {
        birthdate: '',
        birthtime: '',
        timezone: '+0700',
        province: 'กรุงเทพฯ',
        flag_unknow_time: true
      },
      date: {
        day: 0,
        month: 0,
        year: ''
      },
      valid: {
        birthdate: true,
        birthtime: true
      },
      error: false,
      loading: false,
      cebirthdate: ''
    }),
    computed: {
      vhoraVerify () {
        return this.$store.state.vhora.vhoraVerify
      },
      showTab () {
        const shopConfig = JSON.parse(localStorage.getItem('vhora-offline-shop'))
        const isShopDisableLowTier = shopConfig?.config?.low_tier_disable && this.isOffline
        const LowTierEnable = window.berfuntong?.LOWTIER

        return LowTierEnable && !isShopDisableLowTier
      },
      birthdate () {
        const options = {
          calendar: 'buddhist',
          day: '2-digit',
          month: '2-digit',
          year: 'numeric'
        }
        const d = new Date(this.date.year, this.date.month, this.date.day + 1)
        return d.toLocaleDateString('th', options)
      },
      birthtime () {
        if (!this.form.birthtime) return '06:18'
        const options = {
          hour: '2-digit',
          minute: '2-digit'
        }
        return new Date(this.form.birthtime).toLocaleTimeString('th', options)
      },
      currentYear () {
        return new Date().getFullYear()
      },
      years () {
        const years = []
        for (let year = this.currentYear; year > 1899; year--) years.push(year)
        return years
      },
      months () {
        return [
          'มกราคม',
          'กุมภาพันธ์',
          'มีนาคม',
          'เมษายน',
          'พฤษภาคม',
          'มิถุนายน',
          'กรกฎาคม',
          'สิงหาคม',
          'กันยายน',
          'ตุลาคม',
          'พฤศจิกายน',
          'ธันวาคม'
        ]
      },
      days () {
        const total = new Date(this.date.year, this.date.month + 1, 0).getDate()
        return [...Array(total).keys()]
      },
      timezoneText () {
        return this.dropdown.timezones.find((e) => e.value === this.form.timezone).text
      },
      tabUrl () {
        return `/${this.isOffline ? 'offline-store' : 'online-store'}/berfuntong-zodiac`
      },
      isSelectPage () {
        return this.$route.path.includes('/berfuntong/select')
      },
      isOffline () {
        return this.$route.path.includes('offline-store')
      }
    },
    watch: {
      birthdate () {
        const optionsCE = {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric'
        }
        const nd = new Date(this.date.year, this.date.month, this.date.day + 1)
        this.cebirthdate = nd.toLocaleDateString('en-GB', optionsCE)
      },
      'date.day' () {
        sessionStorage.setItem('previousSelectedDay', this.date.day)
      },
      'date.month' () {
        sessionStorage.setItem('previousSelectedMonth', this.date.month)
        if (this.date.day <= this.days.length) return
        this.date.day = 0
      },
      'date.year' () {
        sessionStorage.setItem('previousSelectedYear', this.date.year)
        if (this.date.day <= this.days.length) return
        this.date.day = 0
      },
      'form.flag_unknow_time' (e) {
        if (e) {
          sessionStorage.setItem('timePopupIsOpen', false)
          this.form.birthtime = ''
          this.form.timezone = '+0700'
          this.form.province = 'กรุงเทพฯ'
        } else {
          this.$refs.datetime.isOpen = true
          sessionStorage.setItem('timePopupIsOpen', true)
        }
      },
      'form.birthtime' () {
        sessionStorage.setItem('previousSelectedBirthTime', this.form.birthtime)
      },
      'form.timezone' () {
        sessionStorage.setItem('previousSelectedTimezone', this.form.timezone)
      },
      'form.province' () {
        sessionStorage.setItem('previousSelectedProvince', this.form.province)
      }
    },
    async mounted () {
      try {
        this.date.year = this.currentYear
        this.loaded = true
        this.$emit('loading', false)
        Datetime.methods.cancel = this.onDatetimeCancel
        const shopConfig = JSON.parse(localStorage.getItem('vhora-offline-shop'))
        const isShopDisableHighTier = shopConfig?.config?.high_tier_disable
        
        const day = sessionStorage.getItem('previousSelectedDay')
        const month = sessionStorage.getItem('previousSelectedMonth')
        const year = sessionStorage.getItem('previousSelectedYear')
        if(day || month || year) {
          this.date.day = day ? parseInt(day) : this.date.day; 
          this.date.month = month ? parseInt(month) : this.date.month;
          this.date.year = year ? parseInt(year) : this.date.year;
        }

        const timePopupIsOpen = JSON.parse(sessionStorage.getItem('timePopupIsOpen'))
        if(timePopupIsOpen) {
          this.form.flag_unknow_time = false;
          const birthtime = sessionStorage.getItem('previousSelectedBirthTime')
          const timezone = sessionStorage.getItem('previousSelectedTimezone')
          const province = sessionStorage.getItem('previousSelectedProvince')
          if(birthtime || timezone || province) {
            this.form.birthtime = birthtime ? birthtime : this.form.birthtime;
            this.form.timezone = timezone ? timezone : this.form.timezone;
            this.form.province = province ? province : this.form.province;
          } 
        }

        if (isShopDisableHighTier && this.isOffline) {
          this.$router.push(this.tabUrl)
        }
      } catch (e) {
        console.log('e', e)
      }
    },
    methods: {
      onDatetimeCancel () {
        this.$refs.datetime.close()
        this.form.flag_unknow_time = !this.form.birthtime
      },
      trackAnalyticsVerify () {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event: 'drluck_event',
          event_category: 'dr_luck_sim',
          event_action: 'confirm_birthdate_name',
          event_label: 'ค้นหาเบอร์ฟันธง',
          ecommerce: {
            click: {
              actionField: {
                list: 'Dr Luck numbers'
              },
              products: [{
                name: 'berfuntong',
                id: '',
                price: '',
                category: 'SIM',
                variant: 'Postpaid',
                dimension6: '',
                dimension7: '',
                dimension9: 'Postpaid SIM',
                dimension14: '',
                dimension17: this.birthdate,
                dimension18: this.birthtime,
                dimension19: this.form.timezone
              }]
            }
          }
        })
      },
      trackAnalyticsTnc () {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event_category: 'dr_luck_sim',
          event_action: 'view_terms_policy',
          event_label: 'นโยบายคุ้มครองข้อมูลส่วนบุคคล'
        })
      },
      openTncDialog () {
        this.trackAnalyticsTnc()
        this.$refs.dialog.open('tnc')
      },
      async verify () {
        try {
          this.loading = true
          this.error = false
          this.form.birthdate = this.cebirthdate
          this.valid.birthtime = this.form.flag_unknow_time ? true : this.birthtime
          if (!this.valid.birthtime) throw new Error('invalid-form')
          this.trackAnalyticsVerify()
          const data = {
            ...this.form,
            birthdate: this.form.birthdate.replace(/\//g, ''),
            birthtime: this.birthtime,
            flag_unknow_time: this.form.flag_unknow_time,
            is_thailand: this.form.timezone === '+0700'
          }
          if (data.timezone !== '+0700') delete data.province
          await this.$store.dispatch(VERIFY_VHORA, data)

          window.localStorage.setItem('truestore-berfuntong-ctoken', this.vhoraVerify.data.ctoken)
          window.localStorage.setItem('truestore-berfuntong-refcode', this.vhoraVerify.data.ref_code)
          window.localStorage.setItem('truestore-berfuntong-form', JSON.stringify({
            ...this.form,
            birthtime: this.birthtime
          }))
          this.loading = false
          if (this.$route.name === 'drlucky-select' || this.$route.name === 'drlucky-select-offline'){
              window.location.reload()
          } else {
              this.$router.push({
                  name: 'drlucky-select' + (this.isOffline ? '-offline' : '')
              })
          }

        } catch (e) {
          window.localStorage.removeItem('truestore-berfuntong-refcode')
          window.localStorage.removeItem('truestore-berfuntong-ctoken')
          window.localStorage.removeItem('truestore-berfuntong-form')
          switch (e.message) {
            case 'invalid-form':
            case 'otp-failed': {
              this.error = 'กรุณากรอกข้อมูลให้ครบถ้วนด้วยนะครับ!'
              break
            }
            default: {
              this.error = e.errors.message[this.$i18n.locale]
            }
          }
          this.loading = false
        }
      },

      cleanup () {
        this.form.birthdate = ''
        this.form.birthtime = ''
        this.form.timezone = '+0700'
        this.form.province = 'กรุงเทพฯ'
        this.form.flag_unknow_time = true
        this.date.day = 0;
        this.date.month = 0;
        this.valid.birthdate = true,
        this.valid.birthdate = true
        this.date.year = this.currentYear
      },
    }
  }
</script>

<style lang="scss" src="./styles.scss" scoped></style>
