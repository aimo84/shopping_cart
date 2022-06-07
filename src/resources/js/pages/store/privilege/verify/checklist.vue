<template>
<div class="checklist-outer-container">
    <div class="checklist-container">
  <div class="mnp-checklist">
    <div class="main-icon">
      <img src='/images/icons/move_to_us.png'>
    </div>
    <div>
      <div class="title">{{ Locale.checklist.title[$i18n.locale] }}</div>
      <div>{{ Locale.checklist.subtitle[$i18n.locale] }}</div>
    </div>
    <div class="checklists">
      <div class="checklist">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24">
          <g><path d="M0,0h24v24H0V0z" fill="none"/></g>
          <g><path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10c5.52,0,10-4.48,10-10S17.52,2,12,2z M16.95,10.23l-5.66,5.66 c-0.39,0.39-1.02,0.39-1.41,0l-2.83-2.83c-0.39-0.39-0.39-1.02,0-1.41c0.39-0.39,1.02-0.39,1.41,0l2.12,2.12l4.95-4.95 c0.39-0.39,1.02-0.39,1.41,0C17.34,9.21,17.34,9.84,16.95,10.23z"/></g>
        </svg>
        <div>{{ Locale.checklist.checklist1[$i18n.locale] }}</div>
      </div>
      <div class="checklist">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24">
          <g><path d="M0,0h24v24H0V0z" fill="none"/></g>
          <g><path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10c5.52,0,10-4.48,10-10S17.52,2,12,2z M16.95,10.23l-5.66,5.66 c-0.39,0.39-1.02,0.39-1.41,0l-2.83-2.83c-0.39-0.39-0.39-1.02,0-1.41c0.39-0.39,1.02-0.39,1.41,0l2.12,2.12l4.95-4.95 c0.39-0.39,1.02-0.39,1.41,0C17.34,9.21,17.34,9.84,16.95,10.23z"/></g>
        </svg>
        <div>{{ Locale.checklist.checklist2[$i18n.locale] }}</div>
      </div>
    </div>
    <div class="buttons">
      <button-element
        @click="$parent.goTo('package')"
        class="back"
      >{{ Locale.back[$i18n.locale] }}</button-element>
      <button-element
        @click="$parent.moveToOneStep()"
      >{{ Locale.next[$i18n.locale] }}</button-element>
    </div>
  </div>
  </div>
</div>
</template>

<script>
  import Button from '@components/button'
  import Locale from './locale.json'

  export default {
    components: {
      'button-element': Button
    },
    data: () => ({
      Locale
    })
  }
</script>

<style lang="scss" scoped>
.mnp-checklist {
  display: grid;
  grid-gap: 32px;
  line-height: 20px;

  .main-icon {
    text-align: center;

    img {
      width: 200px;
    }
  }

  .title {
    font-size: 30px;
    line-height: 30px;
    font-family: 'TrueBold';
    text-align: center;
    margin-bottom: 8px;
  }
  .checklists {
    border-radius: 8px;
    padding: 24px;
    background-color: #f5f6f4;
    display: grid;
    grid-gap: 16px;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 100%;
    max-width: 400px;

    .checklist {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
      grid-gap: 8px;
      text-align: left;

      svg {
        fill: #e93732;
        width: 28px;
        height: 28px;
      }
    }
  }
  .buttons {
    display: grid;
    grid-gap: 8px;
    grid-template-columns: auto auto;
    justify-content: center;

    .back {
      background-color: #666;
    }
  }
}
  .checklist-container {
    max-width: 1100px;
    margin: 36px auto 0;
    background-color: #fff;
    border-radius: 8px;
    text-align: center;
    padding: 16px 24px 40px 24px;
    font-size: 1.5em;

    .checklist-inner-container {
      padding: 160px 0;
    }
  }

@media screen and (max-width: 480px) {
  .mnp-checklist .buttons {
    display: flex;
    flex-direction: column-reverse;
  }
}

</style>
