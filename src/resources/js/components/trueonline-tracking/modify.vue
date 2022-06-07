<template>
  <div class="modify-container">
    <div class="title">{{ Locale.title_2[$i18n.locale] }}</div>
    <div class="slot">
      <div>{{ Locale.installation_date[$i18n.locale ]}} {{ computeDate(timeslot.appointmentDate) }} {{ Locale.time[$i18n.locale ]}} {{ timeslot.timeSlot }}</div>
      <dropdown-element
        :disabled="loading"
        :options="options"
        v-model="selectedSlot"
        @focus="$emit('overflow', 'visible')"
        @blur="$emit('overflow', 'auto')"
      />
      <div class="buttons">
        <button-element
          class="back"
          :disabled="loading"
          @click="$emit('route', 'slot')"
        >{{ Locale.back[$i18n.locale] }}</button-element>
        <button-element
          :disabled="loading"
          @click="updateTimeslot"
        >{{ Locale.confirm_change_timeslot[$i18n.locale] }}</button-element>
      </div>
    </div>
  </div>
</template>

<script>
  import Dropdown from '@components/dropdown'
  import Button from '@components/button'
  import Locale from './locale.json'
  import {
    UPDATE_TOL_TIMESLOT
  } from '@store/actions.type'

  export default {
    components: {
      'dropdown-element': Dropdown,
      'button-element': Button
    },
    props: {
      timeslot: Object
    },
    data: () => ({
      Locale,
      loading: false,
      selectedSlot: ''
    }),
    computed: {
      tolAppointment () {
        return this.$store.state.trueonline.tolAppointment
      },
      tolNewTimeslot () {
        return this.$store.state.trueonline.tolNewTimeslot
      },
      options () {
        return this.tolNewTimeslot.map((e) => ({
          id: `${e.appointmentDate};${e.timeSlot}`,
          value: `${this.computeDate(e.appointmentDate)} - ${this.Locale.time[this.$i18n.locale]} ${e.timeSlot}`
        }))
      }
    },
    mounted () {
      this.selectedSlot = this.options[0].id
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
      async updateTimeslot () {
        try {
          this.loading = true
          const data = this.selectedSlot.split(';')
          await this.$store.dispatch(UPDATE_TOL_TIMESLOT, {
            newAppointmentDate: data[0],
            newTimeSlot: data[1],
            oldAppointmentDate: this.timeslot.appointmentDate,
            oldTimeSlot: this.timeslot.timeSlot,
            _identity: this.tolAppointment._identity,
            register_id: this.timeslot.register_id
          })
          this.loading = false
          this.$emit('route', 'success')
        } catch (e) {
          this.loading = true
          this.$emit('route', 'fail')
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .modify-container {
    margin-top: 20px;

    .title {
      font-size: 30px;
      font-family: 'TrueBold';
      text-align: center;
    }

    .slot {
      max-width: 400px;
      margin: 24px auto;
      display: grid;
      grid-gap: 8px;
      text-align: center;

      .buttons {
        margin-top: 24px;
        display: grid;
        grid-gap: 8px;
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));

        button {
          min-width: 180px;
          background-color: #6dd437;

          &.back {
            background-color: #9e9e9e;
          }

          &[disabled] {
            background-color: #9e9e9e;
            pointer-events: none;
            cursor: default;
          }
        }
      }
    }
  }
</style>
