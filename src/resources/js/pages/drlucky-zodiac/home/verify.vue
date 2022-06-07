<template>
  <div class="verify-container drlucky-zodiac">
    <dialog-element ref="dialog" />
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
                <div class="tab-inner-container">
                  <router-link
                  class="tab-text"
                  :to="tabUrl"
                  ><span>เบอร์ฟันธง ตรงดวงคุณ</span>
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
              <div class='tab'>
                <div class="tab-inner-container active">
                <div class="tab-text">เบอร์ฟันธง มงคลราศี </div>
                  <div class="grid bg-red-500 border-red-500 place-items-center border rounded-full w-[20px] h-[20px] ms-1">
                    <svg width="14" height="10" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12.407.03c-.307.01-.6.14-.812.361-2.29 2.294-4.378 4.55-6.59 6.803L2.296 5.03a1.185 1.185 0 0 0-1.662.184 1.182 1.182 0 0 0 .185 1.662l3.545 2.837c.471.375 1.148.337 1.574-.09 2.545-2.55 4.83-5.06 7.327-7.563A1.183 1.183 0 0 0 12.407.03Z"
                      />
                    </svg>
                  </div>
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
        <div
          v-if="showZodiacDetail && showAscendant"
          class="zodiac-container"
        >
          <div>
            <div class="title">ดวงชะตาของท่านตามลัคนาราศี{{ ascendant.zodiac }} </div>
            <div v-if="formMethod === 'birthday' && ascendant.position">
                <div class="zodiac-image-section-birthdate">
                    <zodiac-element
                        ref="zodiac"
                        class="zodiac"
                        :funtong="vhoraFuntong"
                    />
                </div>
            </div>
            <div v-else class="zodiac">
              <div class="zodiac-image-section">
                  <img
                      :alt="ascendant.zodiac"
                      :src="`/images/drlucky-zodiac/horo-${ascendant.zodiac_id + 1}.png`"
                  />
              </div>
            </div>
            <div v-if="formMethod === 'birthday'">
              <div>{{ detail0 }}</div>
            </div>
            <div v-html="ascendant.detail1" />
            <div class="divider" />
            <div class="back">
              <span @click="showZodiacDetail = false">เปลี่ยนข้อมูล</span>
            </div>
          </div>
        </div>
        <template v-else>
          <form
            v-if="formMethod === 'zodiac-id'"
            class="zodiac-form"
            v-on:submit.prevent
            :loading="loading"
          >
            <div class="zodiac-input">
              <label for="zodiac">ลัคนา</label>

              <div class="dropdown zodiac-dropdown">
                <div class="dropdown-label">
                  <span
                    v-if="zodiacId === false"
                    class="gray"
                  >กรุณาเลือกลัคนาราศีของคุณ</span>
                  <span v-else>ราศี{{ dropdown.zodiacs[zodiacId] }}</span>
                </div>
                <select id="zodiac" v-model="zodiacId">
                  <option selected disabled>กรุณาเลือกลัคนาราศีของคุณ</option>
                  <option
                    v-for="(item, key) in dropdown.zodiacs"
                    :key="key"
                    :value="key"
                  >ราศี{{ item }}</option>
                </select>
                <div class="change-method">
                  หรือ ระบุวันเกิดเพื่อค้นหาลัคนาราศีเกิด <span
                    @click="formMethod = 'birthday'"
                    id="switch-to-birthdate-zodiac"
                  >คลิกที่นี่</span>
                </div>
              </div>

              <div class="button">
                <button
                  id="search-berfuntong-zodiac"
                  type="button"
                  @click="verify"
                  :disabled="loading || zodiacId === false"
                >ค้นหาเบอร์ฟันธง</button>
              </div>
            </div>

          </form>
          <form
            v-if="formMethod === 'birthday'"
            v-on:submit.prevent
            :loading="loading"
          >
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
                  <!-- <div class="sub-label">ระบุเวลาเกิด เพื่อความแม่นยำในการเลือกเบอร์</div> -->
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
              <div class="change-method">
                หรือ ระบุลัคนาราศีเกิด <span
                  @click="formMethod = 'zodiac-id'"
                  id="switch-to-select-list-zodiac"
                >คลิกที่นี่</span>
              </div>
              <div class="error" v-if="error">{{ error }}</div>
              <button
                id="search-berfuntong-zodiac"
                type="button"
                @click="verify"
                :disabled="loading"
              >ค้นหาเบอร์ฟันธง</button>
            </div>
          </form>
          <div class="policy-container zodiac">
            <div>
              ข้อมูลของท่านที่กรอก จะใช้เพื่อการคำนวณค้นหาเบอร์ฟันธงเท่านั้น โดยระบบจะไม่ทำการเก็บ รวบรวม และ/หรือนำไปใช้เพื่อการอื่นแต่อย่างใด               เบอร์ฟันธง เป็นความเชื่อส่วนบุคคล โปรดใช้วิจารณญาณในการรับคำทำนายและเลือกซื้อ และคำทำนายไม่ได้การันตีผลของการใช้ ซึ่งเป็นเรื่องเฉพาะบุคคล
            </div>
            <div
              id="policy-popup-zodiac"
              class="tnc"
              @click="openTncDialog"
            >นโยบายคุ้มครองข้อมูลส่วนบุคคล</div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import Dialog from './dialog'
  import dropdown from './dropdown.json'
  import { Datetime } from 'vue-datetime'
  import 'vue-datetime/dist/vue-datetime.css'
  import Zodiac from '@components/zodiac'

  export default {
    components: {
      'dialog-element': Dialog,
      'zodiac-element': Zodiac,
      datetime: Datetime
    },
    props: {
      showAscendant: {
        type: Boolean,
        default: false
      }
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
      zodiacId: false,
      showZodiacDetail: false,
      formMethod: 'zodiac-id',
      error: false,
      loading: false
    }),
    computed: {
      vhoraFuntong () {
        return this.$store.state.vhora.vhoraFuntong
      },
      ascendant () {
        return this.vhoraFuntong.ascendant
      },
      showTab () {
        const shopConfig = JSON.parse(localStorage.getItem('vhora-offline-shop'))
        const isShopDisableHighTier = shopConfig?.config?.high_tier_disable && this.$parent?.isOffline
        const LowTierEnable = window.berfuntong?.LOWTIER
        return LowTierEnable && !isShopDisableHighTier
      },
      dateObj () {
        const date = this.birthdate
        const year = Number(date.substring(6, 10))
        const month = Number(date.substring(3, 5)) - 1
        const day = Number(date.substring(0, 2))
        return { year, month, day }
      },
      dateStr () {
        const d = this.dateObj
        return `${d.day} ${this.months[d.month]} ${d.year}`
      },
      detail0 () {
        return `ดวงชะตาของคุณ เกิดวันที่ ${this.dateStr} เวลา ${this.birthtime} น. มีลัคนาสถิต อยู่ในราศี ${this.ascendant.zodiac}`
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
      tabUrl() {
        return `/${this.$parent.isOffline ? 'offline-store' : 'online-store'}/berfuntong`
      }
    },
    watch: {
      'date.month' () {
        if (this.date.day <= this.days.length) return
        this.date.day = 0
      },
      'date.year' () {
        if (this.date.day <= this.days.length) return
        this.date.day = 0
      },
      'form.flag_unknow_time' (e) {
        if (e) {
          this.form.birthtime = ''
          this.form.timezone = '+0700'
          this.form.province = 'กรุงเทพฯ'
        } else {
          this.$refs.datetime.isOpen = true
        }
      },
      'showZodiacDetail' (e) {
        if (!e) {
          window.scrollTo(0, 0)
          this.loading = false
          this.$emit('update-show-ascendant', false)
        }
      }
    },
    async mounted () {
      try {
        this.date.year = this.currentYear
        this.loaded = true
        Datetime.methods.cancel = this.onDatetimeCancel
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
        this.loading = true
        const data = {}
        if (this.formMethod === 'zodiac-id') {
          data.zodiac_id = this.zodiacId
        } else {
          data.birthdate = this.birthdate.replace(/\//g, '')
          data.birthtime = this.birthtime
          data.timezone = this.form.timezone
          data.province = this.form.province
          if (data.timezone !== '+0700') delete data.province
        }
        this.showZodiacDetail = true
        this.$emit('update-verify', data)
      }
    }
  }
</script>

<style lang="scss" src="../../drlucky/home/styles.scss" scoped></style>
<style lang="scss" scoped>
  .container .verify-container.drlucky-zodiac {
    background-color: #ffffff;
    padding-bottom: 0;

    .player {
      margin: 0;
    }

    .verify-header-container {
      padding-top: 33px;
    }

    .form-card-container {
      background-color: #f7f7f7;
      .form-container {
        max-width: initial;

        .zodiac-container {
          margin: 24px auto;
          width: 100%;
          display: grid;
          grid-gap: 16px 24px;

          .title {
            font-family: "TrueBold";
            color: #424242;
            font-size: 30px;
            grid-column: 1/-1;
            margin-top: 16px;
            margin-bottom: 10px;
            text-align: center;
          }
          .zodiac {
            width: 100%;
            max-width: 556px;
            margin: 0 auto;
            float: left;
            @media screen and (max-width: 1209px) {
                max-width: 340px;
            }
            .zodiac-image-section {
                width: 100%;
                display: flex;
                justify-content: center;
                img {
                    margin-top: 18px;
                }
            }
          }
          .zodiac-image-section-birthdate {
            .zodiac {
                width: 100%;
                max-width: 400px;
                float: left;
                margin-right: 75px;
                margin-left: 75px;
                @media screen and (max-width: 1209px) {
                    margin: 0 auto;
                }
            }
        }
        .divider {
          height: 1px;
          width: 100%;
          background-color: #dbdbdb;
        }
        .back {
          color: #f00;
          font-size: 20px;
          text-decoration: underline;
          margin: 12px auto;
          text-align: center;

          span {
            cursor: pointer;
          }
        }
      }
    }
  }

  .policy-container {
    padding: 15px 0;
    margin-left: 0;
  }

  form {
    .dropdown .dropdown-label span.gray {
      color: #999;
    }

    .zodiac-input {
      .zodiac-dropdown {
        width: 47%;
      }
    }

    .dropdown {
      .change-method {
        font-family: 'TrueLight';
        font-size: 22px;
        margin: 8px 0px 8px 8px;

        span {
          color: #28abe2;
          cursor: pointer;
          text-decoration: underline;
        }
      }
    }

    .button {
      .change-method {
        font-family: 'TrueLight';
        font-size: 22px;
        margin: 8px 0px 8px 0px;

        span {
          color: #28abe2;
          cursor: pointer;
          text-decoration: underline;
        }
      }

      button {
      &#search-berfuntong-zodiac {
        background: linear-gradient(286.62deg, #DF1584 10.96%, #DF1E5F 36.51%, #E02542 61.07%, #E02932 82.54%, #E02B2C 98.54%);
        color: #ffffff;
        border-radius: 40px;
        width: 180px;
        &:hover{
            cursor: pointer;
        }
      }

      &#search-berfuntong-zodiac[disabled] {
        background: #f7f7f7;
        color: #cccccc;
        border: 2px solid #cccccc;
        border-radius: 40px;
        cursor: default;
      }
    }

      button[disabled] {
        background: #f7f7f7;
        color: #cccccc;
        border: 2px solid #cccccc;
        border-radius: 40px;
        cursor: default;
      }
    }
  }

  form.zodiac-form .zodiac-input {
    display: flex;
    justify-content: center;
    grid-gap: 13px;
    grid-column: 1/-1;
    width: 100%;
    margin: auto;

    label {
      margin-top: 7px;
    }
  }
}

@media screen and (max-width: 860px) {
  .container .verify-container.drlucky-zodiac .form-container .zodiac-container {
    padding: 0 24px;
    margin: 12px auto;

    .zodiac {
      float: none;
      margin-top: 0;
      margin-right: auto;

      img {
        margin-bottom: 24px;
      }
    }
  }
}

@media screen and (max-width: 680px){
  .container .verify-container.drlucky-zodiac {
    form {
      .zodiac-input {
        .zodiac-dropdown {
          width: 100%;
        }
      }
    }

    form.zodiac-form .zodiac-input {
      flex-direction: column;
    }
  }
}
</style>
