<template>
  <div class="sim-container" v-if="this.postpaid">
    <div class="sim-info-container">
      <div class="sim-info-title">{{ Locale.title[$i18n.locale ]}}</div>
      <div>
        <span v-if="postpaid.meta.thai_id">Thai ID number {{ postpaid.meta.thai_id }}: </span>
        <span class="red">{{ phoneNumber }}</span>
      </div>
      <template v-if="postpaid.meta.price_plan && postpaid.meta.price_plan.description">
        <div class="sim-info-title package">{{ Locale.package[$i18n.locale ]}}</div>
        <div>{{ postpaid.meta.price_plan.description }}</div>
        <div>{{ Locale.monthly_service_fee[$i18n.locale] }} {{ monthlyServiceFee }} {{ Locale.monthly_service_baht[$i18n.locale]}} </div>
      </template>
    </div>
    <div class="sim-note-container" v-if="postpaid">
      <div class="time-container" v-if="startTime && endTime">{{ Locale.start_time[$i18n.locale ]}} {{ startTime }} - {{ Locale.end_time[$i18n.locale ]}} {{ endTime }}</div>
      <div>{{ Locale.note[$i18n.locale ]}}</div>
      <ul>
        <li>{{ Locale.note_1[$i18n.locale ]}}</li>
        <li>{{ Locale.note_2[$i18n.locale ]}}</li>
      </ul>
    </div>
    <div class="sim-activate-guide-container" v-if="showImage">
      <div class="sim-activate-guide-label">{{ Locale.step[$i18n.locale ]}}</div>
      <div class="sim-activate-guide">
        <div class="guide">
          <img src="/images/success/activate-number-1.png" />
          <div class="guide-label">{{ Locale.step_1[$i18n.locale ]}}</div>
        </div>
        <div class="right">
          <img src="/images/success/right.png" />
        </div>
        <div class="guide">
          <img src="/images/success/activate-number-2.png" />
          <div class="guide-label">{{ Locale.step_2[$i18n.locale ]}}</div>
        </div>
        <div class="right">
          <img src="/images/success/right.png" />
        </div>
        <div class="guide">
          <img src="/images/success/activate-number-3.png" />
          <div class="guide-label">{{ Locale.step_3[$i18n.locale ]}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      postpaid: [Object, Boolean]
    },
    data: () => ({
      Locale: {
        monthly_service_fee: {
          th: 'ค่าบริการรายเดือน',
          en: 'Monthly service fee'
        },
        monthly_service_baht: {
          th: 'บาท',
          en: '฿'
        },
        title: {
          th: 'เบอร์ที่คุณลงทะเบียนซิม',
          en: 'The number that you have registered for the SIM'
        },
        package: {
          th: 'แพ็กเกจ',
          en: 'Package'
        },
        thai_id: {
          th: 'หมายเลขบัตรประชาชน',
          en: 'Thai ID number'
        },
        start_time: {
          th: 'เริ่มนับเวลา',
          en: 'Start time'
        },
        end_time: {
          th: 'หมดเวลา',
          en: 'End time'
        },
        note: {
          th: 'หมายเหตุ',
          en: 'Note'
        },
        note_1: {
          th: 'ระบบจะจองเบอร์ที่คุณเลือกไว้ 2 ชั่วโมง กรุณาชำระเงินให้สำเร็จภายใน เวลาที่กำหนด เพื่อหลีกเลี่ยงการหลุดจองเบอร์',
          en: 'The system will reserve your chosen number for 2 hours. Please complete the payment within time required to avoid booking numbers'
        },
        note_2: {
          th: 'บริษัทฯ ขอสงวนสิทธิ์ในการยกเลิกการสั่งซื้อและขอคืนเงินทุกกรณี',
          en: 'The company reserves the right to cancel the order and refund all cases.'
        },
        step: {
          th: 'ขั้นตอนการเปิดใช้งานเบอร์ใหม่',
          en: 'Steps to activate a new number'
        },
        step_1: {
          th: 'เลือกและลงทะเบียนผ่านระบบออนไลน์',
          en: 'Search and book numbers online'
        },
        step_2: {
          th: 'ยืนยันการเปิดใช้บริการผ่านพนักงาน Call center',
          en: 'Activate the telephone number by confirming confirm with the call center staff'
        },
        step_3: {
          th: 'ยืืนยันการเปิดใช้งานสำเร็จ',
          en: 'Activate completely new number'
        }
      }
    }),
    computed: {
      phoneNumber () {
        return this.postpaid.meta.number.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')
      },
      startTime () {
        const date = this.postpaid.updated_at
        if (date) return this.computeTime(date.replace(/-/g, '/'))
        return false
      },
      endTime () {
        const date = this.postpaid.hold_expired_date
        if (date) return this.computeTime(date.replace(/-/g, '/'))
        return false
      },
      monthlyServiceFee () {
        const fee = this.postpaid.meta.price_plan && this.postpaid.meta.price_plan.price
        return fee
      },
      isLowTier () {
        const meta = this.postpaid.meta
        const isVhora = meta.campaign_type === 'vhora'
        const hasPackageCode = meta.berfuntong?.package_code
        return isVhora && hasPackageCode
      },
      showImage () {
        if (this.isLowTier) return true
        return this.postpaid.meta.sim_type !== 'prepaid'
      }
    },
    methods: {
      computeTime (time) {
        const dt = new Date(time)
        let hours = dt.getHours()
        hours = hours < 10 ? `0${hours}` : hours
        let mins = dt.getMinutes()
        mins = mins < 10 ? `0${mins}` : mins
        let secs = dt.getSeconds()
        secs = secs < 10 ? `0${secs}` : secs
        return `${hours}:${mins}:${secs}`
      }
    }
  }
</script>

<style lang="scss" scoped>
  .sim-container {
    border-radius: 8px;
    overflow: hidden;

    .sim-info-container {
      font-size: 26px;
      line-height: 33.2px;
      font-family: "TrueLight";
      color: #000;
      padding: 20px;

      .sim-info-title {
        font-family: "TrueBold";
        font-size: 28px;
        line-height: 25.6px;
        &.package {
          margin-top: 16px;
        }
      }
      .red {
        color: #E62627;
        white-space: nowrap;
        font-family: 'TrueBold';
      }
      .gray {
        color: #666;
      }
    }

    .sim-note-container {
      font-size: 16px;
      line-height: 16px;
      color: #666;
      font-family: "TrueBold";
      padding: 0 20px 20px 20px;

      .time-container {
        background-color: #e4a20f;
        border-radius: 8px;
        padding: 0 20px;
        color: #fff;
        display: inline-flex;
        font-size: 20px;
        line-height: 30px;
        margin-bottom: 12px;
      }

      ul {
        margin: 0;
        color: #9b9b9b;
        font-family: "TrueMedium";
        padding-left: 20px;
      }
    }

    .sim-activate-guide-container {
      background: #cccccc;
      padding-bottom: 16px;

      .sim-activate-guide-label {
        border-bottom-right-radius: 40px;
        background: #b50000;
        line-height: 24px;
        display: inline-flex;
        padding: 8px 30px 8px 20px;
        color: #fff;
        margin-bottom: 20px;
      }
      .sim-activate-guide {
        display: grid;
        grid-template-columns: 1fr 30px 1fr 30px 1fr;
        grid-gap: 24px;
        margin: 0 24px;

        .guide {
          img {
            width: 100%;
            margin-bottom: 8px;
          }
          .guide-label {
            text-align: center;
            font-size: 18px;
            line-height: 18px;
            color: #000;
          }
        }

        .right {
          text-align: center;
          padding-top: 34px;
        }
      }
    }
  }

  @media screen and (max-width: 860px) {
    .sim-container .sim-activate-guide-container .sim-activate-guide {
      grid-template-columns: 1fr;

      .guide {
        display: flex;
        align-items: center;

        img {
          width: 50%;
          max-width: 200px;
        }

        .guide-label {
          width: 50%;
          text-align: left;
          padding-left: 16px;
        }
      }

      .right {
        display: none;
      }
    }
  }
</style>
