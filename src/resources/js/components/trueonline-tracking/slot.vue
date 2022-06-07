<template>
  <div class="slot-container">
    <div class="title">{{ Locale.title_2[$i18n.locale] }}</div>
    <div class="timeslot">
      <div class="subtitle">{{ Locale.name_dear[$i18n.locale] }} {{ name }}</div>
      <template
        v-for="(item, key) in tolOtpStatus.canChangeAppiontmentList"
      >
        <div class="text" :key="`t-${key}`">
          <div>{{ Locale.installation_date[$i18n.locale ]}} {{ computeDate(item.appointmentDate) }} {{ Locale.time[$i18n.locale ]}} {{ item.timeSlot }}</div>
          <div>{{ Locale.status[$i18n.locale] }} <b>{{ item.status[$i18n.locale] }}</b></div>
        </div>
        <button
          :key="`b-${key}`"
          :disabled="loading"
          @click="modifySlot(item)"
        >{{ Locale.change_timeslot[$i18n.locale] }}</button>
      </template>
      <template
        v-for="(item, key) in tolOtpStatus.appointmentTimeSlot"
      >
        <div class="text" :key="`ta-${key}`">
          <div>{{ Locale.installation_date[$i18n.locale ]}} {{ computeDate(item.appointmentDate) }} {{ Locale.time[$i18n.locale ]}} {{ item.timeSlot }}</div>
          <div>{{ Locale.status[$i18n.locale] }} <b>{{ item.status[$i18n.locale] }}</b></div>
        </div>
        <button
          disabled
          :key="`ba-${key}`"
        >{{ Locale.change_timeslot[$i18n.locale] }}</button>
      </template>
    </div>
  </div>
</template>

<script>
  import Locale from './locale.json'
  import {
    FETCH_TOL_NEW_TIMESLOT
  } from '@store/actions.type'

  export default {
    data: () => ({
      Locale,
      loading: false
    }),
    computed: {
      tolAppointment () {
        return this.$store.state.trueonline.tolAppointment
      },
      tolOtpStatus () {
        return this.$store.state.trueonline.tolOtpStatus
      },
      name () {
        const data = this.tolOtpStatus
        return `${data.first_name} ${data.last_name}`
      }
    },
    methods: {
      computeDate (date) {
        const lang = this.$i18n.locale === 'th' ? 'th-TH' : 'en-MY'
        const options = {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }
        return new Date(date).toLocaleDateString(lang, options)
      },
      async modifySlot (e) {
        try {
          this.loading = true
          await this.$store.dispatch(FETCH_TOL_NEW_TIMESLOT, {
            _identity: this.tolAppointment._identity,
            appointmentDate: e.appointmentDate,
            timeSlot: e.timeSlot,
            register_id: e.register_id
          })
          this.loading = false
          this.$emit('timeslot-changed', e)
          this.$emit('route', 'modify')
        } catch (e) {
          this.loading = false
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .slot-container {
    margin-top: 20px;

    .title {
      font-size: 30px;
      font-family: 'TrueBold';
      text-align: center;
    }

    .subtitle {
      font-size: 24px;
      font-family: 'TrueBold';
      grid-column: 1/-1;
      text-align: left;
      margin-bottom: 8px;
    }

    .timeslot {
      display: grid;
      grid-template-columns: 1fr auto;
      grid-gap: 8px;
      align-items: center;
      max-width: 520px;
      margin: 24px auto;

      .text {
        text-align: left;

        b {
          font-family: 'TrueBold';
        }
      }

      button {
        background-color: #6dd437;
        outline: none;
        border: none;
        border-radius: 4px;
        padding: 6px 16px;
        color: #2d2d2d;
        font-family: 'TrueBold';
        font-size: 20px;
        cursor: pointer;

        &[disabled] {
          background-color: #9e9e9e;
          pointer-events: none;
          cursor: default;
        }
      }
    }
  }

  @media screen and (max-width: 860px) {
    .slot-container .timeslot {
      grid-template-columns: auto;
      text-align: center;
      justify-content: center;

      button {
        margin-bottom: 16px;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
</style>
