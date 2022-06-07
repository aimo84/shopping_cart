<template>
  <div class="dr-lucky">
    <div class="success-container">
      <div class="inner-container">
        <svg width="55" height="55" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27.5 55a27.5 27.5 0 100-55 27.5 27.5 0 000 55z" fill="#F9B72D"/>
          <path d="M14.76 29.4l7.22 7.23 18.25-18.26" stroke="#fff" stroke-width="5" stroke-miterlimit="10" stroke-linecap="round"/>
        </svg>
        <div class="title">ชำระค่าบริการเรียบร้อย</div>
        <div class="subtitle">คุณได้เลือกแพ็กเกจ {{ meta.price_plan.price }}฿ รายเดือน {{ meta.price_plan.name }} พร้อมเบอร์ฟันธงตามลัคนา</div>
        <div class="divider" />
        <div class="number-title">เบอร์ที่คุณเลือก</div>
        <div class="number-info" :class="`border-${types[meta.berfuntong.group]}`">
          <div class="grade-info" :class="`bg-${types[meta.berfuntong.group]}`">
            <div class="group">
              <img :src="`/images/drlucky/${types[meta.berfuntong.group]}.svg`" />
              <span>{{ meta.berfuntong.group_title }}</span>
            </div>
            <div class="divider" />
            <div class="grade">
              {{ meta.berfuntong.grade.substring(0, 1) }}<span>{{ meta.berfuntong.grade.substring(1) }}</span>
            </div>
            <div class="divider" />
            <div class="subgroup">{{ meta.berfuntong.subgroup_title }}</div>
          </div>
          <div class="number">{{ number }}</div>
        </div>
      </div>
    </div>
    <div class="zodiac-outer-container">
      <div class="zodiac-container">
        <div class="inner-container">
          <video-player :url="funtong.ascendant.clipname2" />
          <div class="title">พื้นดวงชะตาของท่านตามลัคนาราศี</div>
          <div class="zodiac-content">
            <zodiac-element :funtong="funtong" />
            <div class="description">
              <div class="p">
                <div v-html="userInfo.userInfo1"></div>
                <div>{{ userInfo.userInfo2 }}</div>
              </div>
              <div v-html="funtong.ascendant.detail1" />
              <div v-if="showDetail2" v-html="funtong.ascendant.detail2" />
            </div>
          </div>
          <div
            v-if="funtong.ascendant.detail2"
            @click="showDetail2 = !showDetail2"
            class="show-more"
          >
            <template v-if="!showDetail2">+ อ่านเพิ่มเติม</template>
            <template v-else>ปิดเนื้อหาบางส่วน</template>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-container">
      <div class="link">ดูคำทำนายบันทึกย้อนหลังได้ทางอีเมล์ของคุณ</div>
      <router-link to="/online-store">
        <button id="backto_home">กลับไปหน้าแรก</button>
      </router-link>
    </div>
  </div>
</template>

<script>
  import VideoPlayer from '@components/video-player.vue'
  import Zodiac from '@components/zodiac'

  export default {
    components: {
      'video-player': VideoPlayer,
      'zodiac-element': Zodiac
    },
    props: {
      products: Array,
      funtong: Object
    },
    data: () => ({
      showDetail2: false
    }),
    computed: {
      drLucky () {
        return this.products.find((e) => e.postpaid?.meta?.['campaign_type'] === 'vhora')
      },
      meta () {
        return this.drLucky.postpaid.meta
      },
      number () {
        return this.meta.number.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')
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
        const date = this.meta.birth_date
        const year = Number(date.substring(6, 10))
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
      userInfo () {
        const name = `${this.meta?.berfuntong?.['first_name'] || ''} ${this.meta?.berfuntong?.['last_name'] || ''}`
        return {
          userInfo1: `ดวงชะตาของคุณ <span style="font-family: 'TrueBold'">${name}</span>`,
          userInfo2: `เกิดวันที่ ${this.date} เวลา ${this.meta.birth_time} น. มีลัคนาสถิต อยู่ในราศี ${this.funtong.ascendant.zodiac || ''}`
        }
      },
      types () {
        return {
          กัมมะ: 'blue',
          กฎุมพะ: 'green',
          ปัตนิ: 'red',
          ลาภะ: 'orange'
        }
      }
    }
  }
</script>

<style lang="scss" scoped src="../drlucky/select/colors.scss"></style>
<style lang="scss" scoped>
  .dr-lucky {
    display: grid;
    grid-gap: 16px;
  }
  .inner-container {
    width: 100%;
    max-width: 680px;
    margin: auto;
    line-height: 1.5em;
    display: grid;
    grid-gap: 16px;
  }
  .success-container {
    text-align: center;
    padding: 24px 36px;
    background: #FFFFFF;
    box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    svg {
      margin: auto;
    }
    .title {
      font-size: 38px;
      font-family: 'TrueBold';
      color: #424242;
    }
    .subtitle {
      font-size: 24px;
      color: #333;
      max-width: 480px;
      margin: auto;
    }
    .divider {
      width: 100%;
      height: 1px;
      background-color: #dbdbdb;
    }
    .number-title {
      font-size: 22px;
      font-family: 'TrueBold';
      color: #424242;
    }
    .number-info {
      max-width: 320px;
      width: 100%;
      background: #FFFFFF;
      border-width: 1px;
      border-style: solid;
      box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
      border-radius: 8px;
      margin: auto;
      overflow: hidden;

      .grade-info {
        color: #fff;
        font-size: 24px;
        display: grid;
        grid-template-columns: 1fr 1px 1fr 1px 1fr;
        align-items: center;
        padding: 8px 12px;
        height: 48px;
        grid-gap: 8px;
        white-space: nowrap;

        .divider {
          width: 1px;
          height: 100%;
          background-color: #fff9;
        }

        .group {
          display: grid;
          grid-template-columns: auto 1fr;
          align-items: center;
          grid-gap: 4px;

          img {
            filter: brightness(100);
          }
        }
        .grade {
          font-size: 42px;
          font-family: "TrueBold";
          display: grid;
          grid-template-columns: auto 1fr;
          align-items: flex-start;
          justify-self: center;

          span {
            font-size: 24px;
            line-height: 12px;
          }
        }
        .subgroup {
          font-size: 20px;
        }
      }
      .number {
        font-size: 48px;
        line-height: 30px;
        font-family: 'TrueBold';
        color: #000;
        letter-spacing: 1px;
        padding: 16px 0;
      }
    }
  }

  .zodiac-outer-container {
    .zodiac-container {
      padding: 36px 12px;
      background: linear-gradient(180deg, #FFFFFF 0%, #EEEFF3 177.83%);
      box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.1);
      border-radius: 8px;

      .player {
        display: block;
        max-width: 860px;
        margin: auto;
      }
      .title {
        font-family: 'TrueBold';
        color: #424242;
        font-size: 26px;
        text-align: center;
      }
      .zodiac-content .zodiac {
        float: left;
        margin-right: 16px;
        margin-top: 16px;
      }
      .description {
        font-size: 24px;
        color: #333;
        grid-gap: 16px;

        .p {
          margin: 1em 0;
        }
      }
      .show-more {
        color: #2F80ED;
        cursor: pointer;
        text-decoration: underline;
        font-size: 18px;
        justify-self: center;
      }
    }
  }

  .footer-container {
    background: #fff;
    border-radius: 8px;
    padding: 24px;
    display: grid;
    grid-gap: 16px;
    justify-content: center;

    .link {
      color: #ff0000;
      text-decoration: underline;
      font-size: 18px;
    }

    a {
      text-decoration: none;
    }

    button {
      font-family: 'TrueBold';
      background: #E63129;
      border-radius: 6px;
      height: 50px;
      width: 100%;
      display: grid;
      place-items: center;
      border: none;
      color: #fff;
      cursor: pointer;
      font-size: 20px;
    }
  }

  @media screen and (max-width: 860px) {
    .success-container {
      padding: 24px 16px;
    }
    .zodiac-outer-container {
      .zodiac-container {
        padding: 12px;

        .zodiac-content {
          display: grid;
          grid-template-columns: 1fr;
          grid-gap: 24px;

          .zodiac {
            float: none;
            margin-top: 0;
            margin-right: auto;
          }
        }
      }
    }
  }
</style>
