<template>
  <div class="ekyc-container">
    <input ref="face" accept="image/*" type="file" @change="fileChanged($event, 'face')" hidden />
    <input ref="front" accept="image/*" type="file" @change="fileChanged($event, 'front')" hidden />
    <input ref="vlearn" accept="image/*" type="file" @change="fileChanged($event, 'vlearn')" hidden />
    <div class="ekyc-note" v-if="!hideNote">
      <div class="ekyc-note-label">{{ Locale.note[$i18n.locale] }}</div>
      <div>{{ Locale.noteDescription[$i18n.locale] }}</div>
    </div>
    <template v-if="showDescription">
      <div class="ekyc-title no-margin-bottom">{{ Locale.ekycTitle[$i18n.locale] }}</div>
      <div class="ekyc-description">{{ Locale.ekycDescription[$i18n.locale] }}</div>
    </template>
    <div class="ekyc-title" v-else-if="vlearn">{{ Locale.ekycTitle[$i18n.locale] }}</div>
    <div class="ekyc-upload-container" v-if="!vlearnOnly">
      <ekyc-status icon="face" :status="value.status.face" />
      <div class="ekyc-form">
        <div class="ekyc-label">{{ Locale.faceCard[$i18n.locale] }}</div>
        <div class="ekyc-input">
          <button-element
            type="button"
            class="ekyc-button"
            :disabled="value.status.face === 'loading'"
            @click="$refs.face.click()"
          >{{ Locale.browse[$i18n.locale] }}</button-element>
          <div class="ekyc-info">{{ Locale.acceptFile[$i18n.locale] }}</div>
        </div>
        <div class="ekyc-error" v-if="value.error.face">
          {{ value.error.face[$i18n.locale] }}
        </div>
      </div>
    </div>
    <div class="ekyc-upload-container" v-if="!vlearnOnly">
      <ekyc-status icon="front_card" :status="value.status.front" />
      <div class="ekyc-form">
        <div class="ekyc-label">{{ Locale.frontCard[$i18n.locale] }}</div>
        <div class="ekyc-input">
          <button-element
            type="button"
            class="ekyc-button"
            :disabled="value.status.front === 'loading'"
            @click="$refs.front.click()"
          >{{ Locale.browse[$i18n.locale] }}</button-element>
          <div class="ekyc-info">{{ Locale.acceptFile[$i18n.locale] }}</div>
        </div>
        <div class="ekyc-error" v-if="value.error.front">
          {{ value.error.front[$i18n.locale] }}
        </div>
      </div>
    </div>
    <div class="ekyc-upload-container" v-if="vlearn">
      <ekyc-status icon="front_card" :status="value.status.vlearn" />
      <div class="ekyc-form">
        <div class="ekyc-label">{{ Locale.vlearn[$i18n.locale] }}</div>
        <div class="ekyc-input">
          <button-element
            type="button"
            class="ekyc-button"
            :disabled="value.status.vlearn === 'loading'"
            @click="$refs.vlearn.click()"
          >{{ Locale.browse[$i18n.locale] }}</button-element>
          <div class="ekyc-info">{{ Locale.acceptFile[$i18n.locale] }}</div>
        </div>
        <div class="ekyc-error" v-if="value.error.vlearn">
          {{ value.error.vlearn[$i18n.locale] }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Button from '../button'
  import Status from './status'
  import Locale from './locale.json'
  import {
    toBase64,
    compressImage,
    forceCompressImage
  } from '@utils/image'

  export default {
    components: {
      'button-element': Button,
      'ekyc-status': Status
    },
    props: {
      value: Object,
      hideNote: Boolean,
      showDescription: Boolean,
      vlearnOnly: {
        type: Boolean,
        default: false
      },
      vlearn: Boolean,
      limit: {
        type: Number,
        default: 1500000
      }
    },
    emits: ['input'],
    data: () => ({
      Locale
    }),
    methods: {
      async fileChanged (event, id) {
        const value = this.value
        value.data[id] = ''
        value.filename[id] = ''
        value.temp[id] = ''
        value.status[id] = false
        if (event.target.files && event.target.files[0]) {
          const file = event.target.files[0]
          if (file.size <= 5000000) {
            if (file.size > this.limit) {
              let output, temp, fileSize
              let uploadFailed = false
              if (this.limit !== 1500000) {
                value.status[id] = 'loading'
                temp = await forceCompressImage(file, 0.8, this.limit)
                if (!temp) uploadFailed = true
              } else {
                output = await compressImage(file)
                temp = output.split(',')[1]
                fileSize = temp.length * (3 / 4)
                if (fileSize > this.limit) uploadFailed = true
              }
              if (uploadFailed) {
                value.status[id] = false
                value.error[id] = {
                  th: 'กรุณาอัปโหลดภาพที่เล็กลง',
                  en: 'Unable to upload. Please add smaller photo'
                }
                return
              }
              const base64 = await toBase64(file)
              value.data[id] = base64
              value.filename[id] = file.name
              value.temp[id] = temp
            } else {
              const base64 = await toBase64(file)
              value.data[id] = base64
              value.filename[id] = file.name
              value.temp[id] = base64
            }
            value.status[id] = true
            value.error[id] = {}
            event.target.value = ''
          } else {
            value.error[id] = {
              th: 'กรุณาอัปโหลดภาพที่เล็กลง',
              en: 'Unable to upload. Please add smaller photo'
            }
          }
        }
        this.$emit('input', value)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ekyc-container {
    max-width: 600px;
    margin: 48px auto auto;
    text-align: left;

    .ekyc-note {
      color: #ff0000;
      line-height: 24px;

      .ekyc-note-label {
        font-family: 'TrueBold';
      }
    }

    .ekyc-title {
      font-family: 'TrueBold';
      font-size: 30px;
      line-height: 24px;
      margin: 24px 0;

      &.no-margin-bottom {
        margin-bottom: 0;
      }
    }

    .ekyc-description {
      margin-bottom: 24px;
      line-height: 20px;
    }

    .ekyc-upload-container {
      background-color: #f8f8f8;
      border: 1px dashed #ddd;
      border-radius: 8px;
      padding: 20px;
      display: grid;
      grid-template-columns: 100px 1fr;
      grid-gap: 24px;
      align-items: center;
      margin-bottom: 20px;

      .ekyc-label {
        font-family: 'TrueBold';
        line-height: 24px;
        margin-bottom: 14px;
      }

      .ekyc-input {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        grid-gap: 16px;
        margin-bottom: 8px;

        .ekyc-button {
          height: 40px;
          line-height: 40px;
          padding: 0;
          background: #666;
          min-width: 180px;

          &[disabled] {
            background: #a9a9a9;
          }
        }

        .ekyc-info {
          color: #999;
          line-height: 20px;
          font-size: 20px;
        }
      }

      .ekyc-error {
        font-size: 18px;
        line-height: 18px;
        color: #ff0000;
        margin-top: 12px;
      }
    }
  }

  @media screen and (max-width: 860px) {
    .ekyc-container {
      .ekyc-title {
        font-size: 24px;
      }
      .ekyc-upload-container {
        grid-template-columns: 60px 1fr;
        align-items: flex-start;
        grid-gap: 14px;

        .ekyc-input {
          grid-template-columns: repeat(1, 1fr);
          grid-gap: 8px;

          .ekyc-button {
            min-width: auto;
          }
        }
      }
    }
  }
</style>
