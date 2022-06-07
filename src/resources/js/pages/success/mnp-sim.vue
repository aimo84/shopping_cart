<template>
  <div class="sim-container">
    <div class="sim-info-container">
      <div class="sim-info-title">{{ Content.mnp_title[$i18n.locale ]}}</div>
      <div>
        <span v-if="meta.thai_id">
          {{ Content.thai_id_number[$i18n.locale ]}}
          {{ meta.thai_id }}:
        </span>
        <span class="red">{{ Content.mobile_number[$i18n.locale ]}} {{ phoneNumber }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      meta: Object
    },
    data: () => ({
      Content: {
        package: {
          th: 'แพ็กเกจ',
          en: 'Package'
        },
        mnp_title: {
          th: 'เบอร์ที่คุณลงทะเบียนซิม',
          en: 'The number that you have registered for the SIM'
        },
        thai_id_number: {
          th: 'หมายเลขบัตรประชาชน',
          en: 'Thai ID number'
        },
        passport_number: {
          th: 'หมายเลขพาสปอร์ต',
          en: 'Passport Number'
        },
        mobile_number: {
          th: 'หมายเลขโทรศัพท์',
          en: 'Mobile Number'
        }
      }
    }),
    computed: {
      phoneNumber () {
        const number = this.meta.number
        const regex = number.length === 10 ? /(\d{3})(\d{3})(\d{4})/ : /(\d{2})(\d{3})(\d{4})/
        return number.replace(regex, '$1-$2-$3')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .sim-container {
    margin-top: 16px;
    border-radius: 8px;
    overflow: hidden;
    background-color: #f5f5f5;

    .sim-info-container {
      font-size: 24px;
      line-height: 24px;
      color: #000;
      padding: 20px;

      .sim-info-title {
        font-family: "TrueBold";

        &.margin-top {
          margin-top: 16px;
        }
      }

      .red {
        color: #ff0000;
      }
    }
  }
</style>
