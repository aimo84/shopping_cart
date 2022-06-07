<template>
  <div class="container" v-if="loaded">
    <meaning-element
      ref="meaning"
      :form="form"
      :loading="loading"
      :user-info="userInfo"
      @hold-number="holdNumber($event)"
    />
    <div class="home-container">
      <select-home-element />
    </div>
    <div class="divider"/>
    <div class="zodiac-container">
      <div class="zodiac-content">
        <div class="title">พื้นดวงชะตาของท่านตามลัคนาราศี</div>
        <div class="zodiac-video-img-container">
          <div class="zodiac-video-player">
            <video-player :url="ascendant.clipname1" />
          </div>
          <div class="zodiac-element">
            <zodiac-element
              ref="zodiac"
              class="zodiac"
              :funtong="vhoraPersonlizeFuntong"
            />
          </div>
        </div>
        <div>
          <div class="zodiac-text p">
            <div class="zodiac-title" v-html="userInfo.userInfo1" />
          </div>
          <div
            class="zodiac-text detail-1"
            :class="{ show: showDetail1 }"
          >
            <span>{{ userInfo.userInfo2 }}</span>
            <div class="zodiac-detail-text" v-html="showDetail1 ? ascendant.detail1 : ascendant.detail1.substring(0, 900)" />
            <div class="zodiac-mobile-detail-text" v-html="showDetail1 ? ascendant.detail1 : ascendant.detail1.substring(0, 500)" />
            <span class="desktop-see-more-btn" @click="showDetail1 = !showDetail1">
              <template v-if="!showDetail1">อ่านต่อ...</template>
              <template v-else>แสดงน้อยลง...</template>
            </span>
          </div>
        </div>
      </div>
      <div class="expand">
        <router-link
          :to="{ name: 'drlucky-home' + (this.offline ? '-offline' : '') }"
          class="link"
        >เปลี่ยนข้อมูล วัน, เวลา และสถานที่เกิด</router-link>
      </div>
    </div>
    <div class="filter-container">
      <div class="filter-card group">
        <div class="filter-title">เลือกเสริมมงคลชีวิตในแบบคุณ</div>
        <div class="filter-content">
          <div
            v-for="(group, key) in groups.groups"
            :key="key"
            class="filter-group"
          >
            <div class="icon">
              <img :src="`/images/drlucky/${types[key]}.svg`" />
              <span :class="`text-${types[key]}`">{{
                groups.mapGroups[key]
              }}</span>
            </div>
            <div class="filter-options">
              <div
                v-for="(subgroup, index) in group"
                :key="index"
              >
                <input
                  type="checkbox"
                  :name="key"
                  :id="`${key}-${index}`"
                  v-model="selectedGroups[key]"
                  :value="subgroup"
                />
                <label :for="`${key}-${index}`" data-toggle="tooltip" data-placement="top" :title="groups.mapPopUpGroups[`${key}-${subgroup}`]"
                  >
                  <div class="checkbox" :class="`checkbox-${types[key]}`">
                    <svg
                      viewBox="0 0 14 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        class="tick"
                        d="M1 5.5L5 9.5L13 1.5"
                        stroke="#DBDBDB"
                        stroke-width="2"
                      />
                    </svg>
                  </div>
                  <div class="d-flex px-2">
                    <div class="first-line">
                      <span>{{ groups.mapSubGroups[`${key}-${subgroup}`] }}</span>
                    </div>
                    <div>
                      <span>{{ groups.mapSubDetGroups[`${key}-${subgroup}`] }}</span>
                    </div>
                    <div class="popup-hide">
                      <span>{{ groups.mapPopUpGroups[`${key}-${subgroup}`] }}</span>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="divider" />
      <div class="filter-card price">
        <div class="filter-title">เลือกพลังเลข</div>
        <div class="filter-content">
          <template v-for="(item, key) in prices">
            <input
              type="checkbox"
              name="price"
              :id="`price-${key}`"
              :key="`price-input-${key}`"
              v-model="selectedGrades"
              :value="item.grade"
            />
            <label
              class="price-item button"
              :id="grades[item.grade]"
              :key="`price-label-${key}`"
              :for="`price-${key}`"
            >
              <div :class="`grade text-${grades[item.grade]}`">
                {{ item.grade.substring(0, 1)
                }}<span>{{ item.grade.substring(1) }}</span>
              </div>
              <div class="content">
                <div class="description">แพ็กเกจเริ่มต้น</div>
                <div class="price">{{ item.base_line }}.-</div>
              </div>
              <label
                class="button"
                :for="`price-${key}`"
              >
                <svg
                  width="12"
                  height="10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 4.83l3.33 3.34L11 1.5"
                    stroke="#cccccc"
                    stroke-width="2"
                  />
                </svg>
              </label>
            </label>
          </template>
        </div>
      </div>
    </div>
    <div class="number-container">
      <div class="number-title-container">
        <div class="title">
          ผลการค้นหา <span>({{ filteredNumbers.length }} เบอร์)</span>
        </div>
        <div class="description">
          กรุณาเลือกเบอร์และยืนยันการส่งข้อมูลตรวจสอบสิทธิให้ เสร็จสิ้นภายใน
          <span class="bold-text">2 ชั่วโมง</span> ในกรณีที่มีการทำรายการเข้ามาเป็น
          จำนวนมากเบอร์ที่ท่านเลือกไว้จะถูกถอดออกได้
        </div>
      </div>
      <div class="numbers">
        <div
          v-for="(item, key) in paginatedNumbers.slice(0,25)"
          :key="key"
          :class="`border-${types[item.group]} number`"
        >
          <div :class="`title bg-${types[item.group]}`">
            <img :src="`/images/drlucky/${types[item.group]}.svg`" />
            <span>{{ item.group_title }}</span>
            <div class="grade">
              {{ item.grade.substring(0, 1) }}
              <span>{{ item.grade.substring(1) }}</span>
            </div>
          </div>
          <div class="number-content">
            <div class="subgroup">{{ item.subgroup_title }}</div>
            <div class="mobile">{{ item.msisdn }}</div>
            <div
              class="meaning"
              @click="openMeaning(item)"
            >
              ความหมายเบอร์โดยละเอียด
            </div>
            <button
              id="selected-number"
              :class="`selected-button-${types[item.group]}`"
              @click="holdNumber(item, true)"
            >
              เลือกเบอร์นี้
            </button>
          </div>
        </div>
      </div>
      <div
        class="no-result"
        v-if="paginatedNumbers.length === 0"
      >
        No result found.
      </div>
      <div class="paginations" v-if="paginatedNumbers.length">
        <button
          @click="updatePage(currentPageNumber - 1)"
          :disabled="currentPageNumber === 1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#595959">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
          </svg>
        </button>
        <button
          v-for="(item, key) in paginations"
          :key="key"
          :active="item === currentPageNumber"
          :class="{ dot: item === '...' }"
          @click="updatePage(item)"
        >
          {{ item }}
        </button>
        <button
          @click="updatePage(currentPageNumber + 1)"
          :disabled="currentPageNumber === this.lastPage"
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#595959">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import VideoPlayer from '@components/video-player'
  import Zodiac from '@components/zodiac'
  import Meaning from './meaning'
  import Home from '../home/index.vue'
  import {
    POST_VHORA_PERSONALIZE_FUNTONG,
    FETCH_PACKAGES
  } from '@store/actions.type'

  export default {
    components: {
      'video-player': VideoPlayer,
      'meaning-element': Meaning,
      'zodiac-element': Zodiac,
      'select-home-element': Home
    },
    data: () => ({
      loaded: false,
      loading: false,
      showDetail1: false,
      selectedGroups: {},
      selectedGrades: [],
      textMouseHover: '',
      currentPageNumber: 1,
      paginatedNumbers: []
    }),
    computed: {
      ctoken () {
        return window.localStorage.getItem('truestore-berfuntong-ctoken')
      },
      refcode () {
        return window.localStorage.getItem('truestore-berfuntong-refcode')
      },
      offline () {
        return this.$route.path.includes('offline-store')
      },
      vhoraPersonlizeFuntong () {
        return this.$store.state.vhora.vhoraPersonlizeFuntong
      },
      packages () {
        return this.$store.state.postpaid.packages
      },
      ascendant () {
        return this.vhoraPersonlizeFuntong.ascendant
      },
      numbering () {
        return this.vhoraPersonlizeFuntong.numbering || []
      },
      zodiac () {
        return this.vhoraPersonlizeFuntong.ascendant.zodiac
      },
      dealerCode () {
        return this.vhoraPersonlizeFuntong.dealer_code
      },
      product () {
        return this.packages.data.record[0]
      },
      pagination () {
        return this.vhoraPersonlizeFuntong.numbering
      },
      lastPage () {
        return Math.ceil(this.filteredNumbers.length / 25)
      },
      paginations () {
        const current = this.currentPageNumber
        const total = Math.ceil(this.filteredNumbers.length / 25)

        if (total === 1) return [1]

        const center = [current - 2, current - 1, current, current + 1, current + 2]
        const filteredCenter = center.filter((p) => p > 1 && p < total)
        const includeThreeLeft = current === 5
        const includeThreeRight = current === total - 4
        const includeLeftDots = current > 5
        const includeRightDots = current < total - 4

        if (includeThreeLeft) filteredCenter.unshift(2)
        if (includeThreeRight) filteredCenter.push(total - 1)

        if (includeLeftDots) filteredCenter.unshift('...')
        if (includeRightDots) filteredCenter.push('...')

        return [1, ...filteredCenter, total]
      },
      maxLen () {
        return Math.min(Math.max(this.pagination.last_page, 1), 5)
      },
      types () {
        return {
          กัมมะ: 'blue',
          กฎุมพะ: 'green',
          ปัตนิ: 'red',
          ลาภะ: 'orange'
        }
      },
      grades () {
        return {
          'A++': 'A_doublePlus_num',
          'A+': 'A_plus_num',
          A: 'A_standard_num'
        }
      },
      gradesSort () {
        return {
          'A++': 0,
          'A+': 1,
          A: 2
        }
      },
      days () {
        return [
          'วันอาทิตย์',
          'วันจันทร์',
          'วันอังคาร',
          'วันพุธ',
          'วันพฤหัสบดี',
          'วันศุกร์',
          'วันเสาร์'
        ]
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
      dateObj () {
        const date = this.form.birthdate
        const year = this.offline ? Number(date.substring(6, 10)) : Number(date.substring(6, 10)) + 543
        const month = Number(date.substring(3, 5)) - 1
        const day = Number(date.substring(0, 2))
        return { year, month, day }
      },
      day () {
        const date = this.dateObj
        const d = new Date(Date.UTC(date.year - 543, date.month, date.day))
        return this.days[d.getDay()]
      },
      date () {
        const date = this.dateObj
        return `${date.day} ${this.months[date.month]} ${date.year}`
      },
      form () {
        try {
          const form = window.localStorage.getItem('truestore-berfuntong-form')
          return JSON.parse(form)
        } catch (e) {
          return false
        }
      },
      prices () {
        const prices =
          this.vhoraPersonlizeFuntong.filter &&
          this.vhoraPersonlizeFuntong.filter.grades
            ? [...this.vhoraPersonlizeFuntong.filter.grades]
            : []
        return prices.sort(
          (a, b) => this.gradesSort[a.grade] - this.gradesSort[b.grade]
        )
      },
      numbers () {
        return this.numbering.map((e) => ({
          ...e,
          msisdn: e.msisdn.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')
        }))
      },
      filteredNumbers () {
        const filterNumber = this.numbers
          .filter(
            (e) =>
              this.selectedGroups[e.group].includes(e.subgroup) &&
              this.selectedGrades.includes(e.grade)
          )
          .sort((a, b) => this.gradesSort[a.grade] - this.gradesSort[b.grade])
        this.paginatedNumbers = filterNumber
        return filterNumber
      },
      groups () {
        const groups = {}
        const mapGroups = {}
        const mapSubGroups = {}
        const mapSubDetGroups = {}
        const mapPopUpGroups = {}
        this.numbering.forEach((e) => {
          if (!groups[e.group]) groups[e.group] = []
          if (!groups[e.group].includes(e.subgroup)) {
            groups[e.group].push(e.subgroup)
          }
          if (e.group_title) mapGroups[e.group] = e.group_title
          if (e.subgroup_title) {
            mapSubGroups[`${e.group}-${e.subgroup}`] = e.subgroup_title
          }
          if (e.subgroup_detail) {
            mapSubDetGroups[`${e.group}-${e.subgroup}`] = e.subgroup_detail
          }
          if (e.pop_up) {
            mapPopUpGroups[`${e.group}-${e.subgroup}`] = e.pop_up
          }
        })
        return {
          mapGroups,
          mapSubGroups,
          groups,
          mapSubDetGroups,
          mapPopUpGroups
        }
      },
      userInfo () {
        const name = [this.form.firstname, this.form.lastname]
          .filter((e) => e)
          .join(' ')
        return {
          userInfo1: `ดวงชะตาของคุณ <span style="font-family: 'TrueBold'">${name}</span>`,
          userInfo2: `เกิดวันที่ ${this.date} เวลา ${
            this.form.birthtime || '06:18'
          } น. มีลัคนาสถิต อยู่ในราศี ${this.zodiac}`
        }
      }
    },
    watch: {
      currentPageNumber (newValue) {
        const filterNumber = this.filteredNumbers.slice(((newValue * 25) - 25), 26 * newValue)
        this.paginatedNumbers = filterNumber
      }
    },
    async mounted () {
      try {
        this.$emit('loading', true)
        if (!this.ctoken || !this.refcode || !this.form) throw new Error()
        const payload = {
          ctoken: this.ctoken,
          channel: this.offline ? 'offline' : 'online'
        }
        const vhoraOfflineShop = JSON.parse(localStorage.getItem('vhora-offline-shop'))
        if (vhoraOfflineShop?.is_shop && this.$parent?.isOffline) {
          payload.shop = vhoraOfflineShop?.shop
        }
        await this.$store.dispatch(POST_VHORA_PERSONALIZE_FUNTONG, payload)
        if (this.vhoraPersonlizeFuntong.status_code !== 200) throw new Error()
        this.selectedGroups = { ...this.groups.groups }
        this.selectedGrades = this.prices.map((e) => e.grade)
        this.loaded = true
        this.$emit('loading', false)
      } catch (e) {
        this.$router.push({ name: 'drlucky-home' + (this.offline ? '-offline' : '') })
      }
    },
    methods: {
      hovertext (item) {
        switch (item) {
          case 'ดูดทรัพย์รับโชค':
            this.textMouseHover = 'เหมาะกับ ค้าขาย นายหน้า เซลล์'
            break
          case 'เงินมั่งคั่ง งานมั่นคง':
            this.textMouseHover = 'เหมาะกับ พนักงานบริษัท'
            break
          case 'ปุ๊บปั๊บ รับโชค':
            this.textMouseHover = 'เหมาะกับ คนที่อยากมีโชค ปุ๊บปั๊บ ฉับพลัน'
            break
          case 'กวักรักแท้':
            this.textMouseHover = 'เหมาะกับ คนที่อยากมีคู่แท้'
            break
          case 'เพื่อนคู่คิด มิตรรู้ใจ':
            this.textMouseHover = 'เหมาะกับ คนที่มีเพื่อนเป็นคนรัก'
            break
          case 'งานรุ่ง พุ่งแรง':
            this.textMouseHover = 'เหมาะกับ ข้าราชการ รัฐวิสาหกิจ'
            break
          case 'งานเด่น อุดมสุข':
            this.textMouseHover = 'เหมาะกับ พนักงานบริษัท'
            break
          case 'งานดี ครอบครัวรุ่งโรจน์':
            this.textMouseHover = 'เหมาะสม ทำงานกับครอบครัว'
            break
          case 'เพื่อนคู่คิด มิตรเสริมงาน':
            this.textMouseHover = 'เหมาะกับ ทำงานกับคนรัก หุ้นส่วน'
            break
        }
      },
      trackAnalytics () {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event: 'drluck_event',
          event_category: 'dr_luck_sim',
          event_action: 'number_meaning',
          event_label: 'ความหมายเบอร์โดยละเอียด'
        })
      },
      trackAnalyticsHoldNumber (e, label) {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event: 'drluck_event',
          event_category: 'dr_luck_sim',
          event_action: 'select_number',
          event_label: label,
          ecommerce: {
            click: {
              actionField: {
                list: 'Dr Luck numbers'
              },
              products: [
                {
                  name: 'berfuntong',
                  id: '',
                  price: '',
                  category: 'SIM',
                  variant: 'Postpaid',
                  dimension6: '',
                  dimension7: '',
                  dimension9: 'Postpaid SIM',
                  dimension14: '',
                  dimension20: e.group_title,
                  dimension21: e.subgroup_title,
                  dimension40: e.grade,
                  dimension41: e.msisdn.replace(/-/g, '')
                }
              ]
            }
          }
        })
      },
      openMeaning (e) {
        this.trackAnalytics()
        this.$refs.meaning.open(e)
      },
      setVhoraForm (e) {
        const data = {
          msisdn: this.form.msisdn,
          ref_code: this.refcode,
          firstname: this.form.firstname,
          lastname: this.form.lastname,
          birthdate: this.offline ? this.convertDateOffline(this.form.birthdate) : this.form.birthdate.replace(/\//g, ''),
          birthtime: this.form.flag_unknow_time ? '06:18' : this.form.birthtime,
          timezone: this.form.timezone,
          selected_msisdn: e.msisdn.replace(/-/g, ''),
          proposition_amdoc: e.proposition_amdoc,
          proposition_code: e.proposition_code,
          product_id: `L${this.product.product_id}`,
          inventory_id: this.product.inventory_id,
          store_id: this.product.store_id,
          companyCode: 'RM',
          dealerCode: this.dealerCode
        }
        if (e.bundling) {
          data.bundling = e.bundling
        }
        window.localStorage.setItem('vhora-form', JSON.stringify(data))
      },
      setVhoraImage () {
        const base64 = this.$refs.zodiac.getBase64()
        window.localStorage.setItem('truestore-berfuntong-vhora-image', base64)
      },
      convertDateOffline (birthDate) {
        const newbirthDate = birthDate.split('/')
        return newbirthDate[0] + newbirthDate[1] + (Number(newbirthDate[2]) + 543 + '')
      },
      updatePage (e) {
        this.currentPageNumber = e
      },
      generatePagination (current, total) {
        if (total === 1) return [1]

        const center = [current - 2, current - 1, current, current + 1, current + 2]
        const filteredCenter = center.filter((p) => p > 1 && p < total)
        const includeThreeLeft = current === 5
        const includeThreeRight = current === total - 4
        const includeLeftDots = current > 5
        const includeRightDots = current < total - 4

        if (includeThreeLeft) filteredCenter.unshift(2)
        if (includeThreeRight) filteredCenter.push(total - 1)

        if (includeLeftDots) filteredCenter.unshift('...')
        if (includeRightDots) filteredCenter.push('...')

        return [1, ...filteredCenter, total]
      },
      async holdNumber (e, emitLoading) {
        try {
          window.scrollTo(0, 0)
          this.trackAnalyticsHoldNumber(
            e,
            emitLoading ? 'number_from_list' : 'number_from_desc'
          )
          emitLoading ? this.$emit('loading', true) : (this.loading = true)
          const number = e.msisdn.replace(/-/g, '')
          const params = `section=wemall&page=1&sim_type=all&nas_code=${e.proposition_code}&all=true`
          await this.$store.dispatch(FETCH_PACKAGES, params)
          if (!this.packages.data.record) throw new Error()
          this.setVhoraForm(e)
          this.setVhoraImage()
          if (!emitLoading) this.$refs.meaning.close()

          this.$nextTick(() => {
            localStorage.setItem(
              'truestore-berfuntong-nascode',
              e.proposition_code
            )
            localStorage.setItem(
              'truestore-berfuntong-number',
              JSON.stringify({
                group: e.group,
                group_title: e.group_title,
                subgroup: e.subgroup,
                subgroup_title: e.subgroup_title,
                grade: e.grade
              })
            )
            this.$router.push({
              name: 'drlucky-verify' + (this.offline ? '-offline' : ''),
              params: {
                id: `L${this.product.product_id}`,
                number
              }
            })
          })
        } catch (e) {
          if (!emitLoading) this.$refs.meaning.close()
          this.$nextTick(() => {
            this.$router.push({
              name: 'drlucky-home' + (this.offline ? '-offline' : '')
            })
          })
        }
      }
    }
  }
</script>

<style lang="scss" scoped src="./colors.scss"></style>
<style lang="scss" scoped src="./style.scss"></style>
