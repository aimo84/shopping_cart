<template>
    <div>
    <div class="container" v-if="!loading">
        <div class="verify-container">
            <div class="form-container">
                <form ref="resendEmailForm">
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
                        <div class="input time-input" :class="{'show-timepicker': !form.flag_unknown_time}">
                            <div v-if="form.flag_unknown_time" class="input time-input" @click="form.flag_unknown_time = !form.flag_unknown_time">
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
                            <label for="time" v-if="!form.flag_unknown_time">
                                เวลาเกิด
                            </label>
                            <div>
                <span
                    class="red"
                    @click="form.flag_unknown_time = !form.flag_unknown_time"
                    v-if="!form.flag_unknown_time"
                >คลิกเพื่อกลับไปค่าเริ่มต้น</span>
                            </div>
                            <datetime
                                ref="datetime"
                                v-show="!form.flag_unknown_time"
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
                    <div class="geo" :class="{ th: form.timezone === '+0700' }" v-show="!form.flag_unknown_time">
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
                    <div class="input">
                        <label>
                            อีเมล
                        </label>
                        <input type="text" name="email" id="email" v-model="form.email" v-on:change="clearError('email')">
                        <div class="errors" v-if="errors.email">
                            <small> {{ errors.email }} </small>
                        </div>
                    </div>
                    <div class="input">
                        <label>
                            เบอร์โทรศัพท์
                        </label>
                        <input type="number" name="select_number" id="select_number" v-model="form.select_number" v-on:change="clearError('select_number')" v-on:keypress="isNumber()">
                        <div>
                            <small>กรุณาระบุเฉพาะตัวเลขเท่านั้น</small>
                        </div>
                        <div class="errors" v-if="errors.select_number">
                            <small> {{ errors.select_number }} </small>
                        </div>
                    </div>
                    <div class="input">
                        <label>
                            รหัสผ่าน
                        </label>
                        <input type="password" name="password" id="password" v-model="form.password" v-on:keyup="buttonStatus">
                        <div class="errors" v-if="errors.password">
                            <small> {{ errors.password }} </small>
                        </div>
                    </div>
                    <div class="button">
                        <div class="error" v-if="error">{{ error }}</div>
                        <button
                            id="search-berfuntong"
                            type="button"
                            @click="submit"
                            v-bind:disabled="formButtonDisable"
                        >ส่งอีเมล</button>
                    </div>
                </form>
                <div v-if="zodiac">
                    <zodiac-element :funtong="zodiac" ref="zodiac" :showAscendant="true" @resend-email="sendEmail()" hidden/>
                </div>
            </div>
        </div>
    </div>
    <loading-element v-else/>
    </div>
</template>

<script>
  import dropdown from './dropdown.json'
  import { Datetime } from 'vue-datetime'
  import {
    POST_PROPHECY,
    POST_VHORA_RESEND_EMAIL
  } from '@store/actions.type'
  import 'vue-datetime/dist/vue-datetime.css'
  import Zodiac from '../../../components/zodiac'
  import Loading from '../../../components/loading'

  export default {
    components: {
      datetime: Datetime,
      'zodiac-element': Zodiac,
      'loading-element': Loading
    },
    data: () => ({
      dropdown,
      form: {
        birthdate: '',
        birthtime: '',
        timezone: '+0700',
        province: 'กรุงเทพฯ',
        flag_unknown_time: true,
        email: '',
        select_number: '',
        password: ''
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
      cebirthdate: '',
      errors: {
        email: '',
        select_number: '',
        password: ''
      },
      zodiac: false,
      formData: {},
      formButtonDisable: true
    }),
    computed: {
      birthdate () {
        const options = {
          calendar: 'buddhist',
          day: '2-digit',
          month: '2-digit',
          year: 'numeric'
        }
        const d = new Date(this.date.year + 543, this.date.month, this.date.day + 1)
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
        return `/${this.$parent.isOffline ? 'offline-store' : 'online-store'}/berfuntong-zodiac`
      }
    },
    watch: {
      birthdate () {
        const optionsCE = {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric'
        }
        const nd = new Date(this.date.year + 543, this.date.month, this.date.day + 1)
        this.cebirthdate = nd.toLocaleDateString('en-GB', optionsCE)
      },
      'date.month' () {
        if (this.date.day <= this.days.length) return
        this.date.day = 0
      },
      'date.year' () {
        if (this.date.day <= this.days.length) return
        this.date.day = 0
      },
      'form.flag_unknown_time' (e) {
        if (e) {
          this.form.birthtime = ''
          this.form.timezone = '+0700'
          this.form.province = 'กรุงเทพฯ'
        } else {
          this.$refs.datetime.isOpen = true
        }
      }
    },
    async mounted () {
      try {
        this.date.year = this.currentYear
        Datetime.methods.cancel = this.onDatetimeCancel
      } catch (e) {
        console.log('e', e)
      }
    },
    methods: {
      onDatetimeCancel () {
        this.$refs.datetime.close()
        this.form.flag_unknown_time = !this.form.birthtime
      },
      async submit (e) {
        if (this.checkForm()) {
          this.loading = true
          this.form.birthdate = this.cebirthdate
          this.valid.birthtime = this.form.flag_unknown_time ? true : this.birthtime
          if (!this.valid.birthtime) throw new Error('invalid-form')
          this.formData = {
            ...this.form,
            birthdate: this.form.birthdate.replace(/\//g, ''),
            birthtime: this.birthtime,
            flag_unknown_time: this.form.flag_unknown_time,
            is_thailand: this.form.timezone === '+0700',
            select_number: this.form.select_number,
            email: this.form.email,
            password: this.form.password
          }
          if (this.formData.timezone !== '+0700') delete this.formData.province
          await this.$store.dispatch(POST_PROPHECY, this.formData).then(res => {
            if (res.status_code === 200) {
              this.zodiac = { ascendant: res.data }
              this.loading = false
            } else if (res.status_code === 404) {
              alert('Wrong Password!!!')
              this.loading = false
            } else {
              alert('Resend Email Fail!! (1)')
              this.loading = false
            }
          }).catch(err => {
            if (err.status_code === 404) {
              alert('Wrong Password!!!')
            } else {
              alert('Resend Email Fail!! (1)')
            }
            this.loading = false
          })
        }
      },
      sendEmail () {
        if (this.zodiac) {
          this.loading = true
          this.formData.fortune_funtong = this.zodiac
          this.formData.vhora_image = this.$refs.zodiac.getBase64()
          this.$store.dispatch(POST_VHORA_RESEND_EMAIL, this.formData).then(data => {
            if (data.status_code === 200) {
              this.clearForm()
              alert('Resend Email Success!!')
              this.loading = false
            } else {
              alert('Resend Email Fail!! (2)')
              this.loading = false
            }
          }).catch(err => {
            alert('Resend Email Fail!! (3)')
            this.loading = false
          })
        }
      },
      checkForm: function (e) {
        this.errors = {
          email: '',
          select_number: '',
          password: ''
        }
        if (!this.form.email) {
          this.errors.email = 'กรุณากรอกอีเมล'
        } else if (!this.validEmail(this.form.email)) {
          this.errors.email = 'กรุณากรอกอีีเมลให้ถูกต้อง'
        }

        if (!this.form.select_number || !/^[0-9]{9,10}$/.test(this.form.select_number)) {
          this.errors.select_number = 'กรุณากรอกเบอร์โทรศัพท์'
        }

        if (!this.form.password) {
          this.errors.password = 'กรุณากรอกรหัสผ่าน'
        }

        if (!this.errors.email && !this.errors.select_number && !this.errors.password) {
          return true
        }

        e.preventDefault()
      },
      validEmail: function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(email)
      },
      buttonStatus (e) {
        if (this.form.password !== '') {
          this.formButtonDisable = false
        } else {
          this.formButtonDisable = true
        }
      },
      clearForm () {
        this.form = {
          birthdate: '',
          birthtime: '',
          timezone: '+0700',
          province: 'กรุงเทพฯ',
          flag_unknown_time: true,
          email: '',
          select_number: '',
          password: ''
        }
        this.date = {
          day: 0,
          month: 0,
          year: this.currentYear
        }
        this.formButtonDisable = true
        this.zodiac = false
      },
      isNumber (e) {
        e = (e) || window.event
        var charCode = (e.which) ? e.which : e.keyCode
        if ((charCode > 31 && (charCode < 48 || charCode > 57))) {
          e.preventDefault()
        } else {
          return true
        }
      },
      clearError (type) {
        if (type === 'email') {
          this.errors.email = ''
        }

        if (type === 'select_number') {
          this.errors.select_number = ''
        }
      }
    }
  }
</script>

<style lang="scss" src="./styles.scss" scoped></style>
