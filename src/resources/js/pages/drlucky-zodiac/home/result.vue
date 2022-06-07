<template>
  <div class="number-container">
    <div class="number-title-container">
      <div class="title">
        ผลการค้นหา <span>({{ pagination.total }} เบอร์)</span>
      </div>
      <div class="description">
        กรุณาเลือกเบอร์และยืนยันการส่งข้อมูลตรวจสอบสิทธิให้ เสร็จสิ้นภายใน
         <span class="bold-text">2 ชั่วโมง</span> ในกรณีที่มีการทำรายการเข้ามาเป็น
        จำนวนมากเบอร์ที่ท่านเลือกไว้จะถูกถอดออกได้
      </div>
    </div>
    <div class="sort" id="sort">
        <div class="sort-label"> จัดเรียงตามพลังเบอร์ : </div>
        <a href="#" v-on:click.prevent="updateSort('asc')" :class="sortActive === 'asc' ? 'active-sorting':'sort-button'" id="asc-sort">น้อยไปมาก</a>
        <a href="#" v-on:click.prevent="updateSort('desc')" :class="sortActive === 'desc' ? 'active-sorting':'sort-button'" id="desc-sort">มากไปน้อย</a>
    </div>
    <div v-if="numbering.length > 0" class="numbers">
      <div
        v-for="(item, key) in numbering"
        :key="key"
        class="number"
        :id="item.pack"
      >
        <div class="title">
          <img
            loading="lazy"
            :alt="zodiacs[item.zodiac_id]"
            :src="`/images/drlucky-zodiac/horo-icon-${item.zodiac_id + 1}.svg`"
          />
          <span>ลัคนาราศี{{ zodiacs[item.zodiac_id] }}</span>
        </div>
        <div class="number-content">
          <div class="mobile">{{ formatMsisdn(item.msisdn) }}</div>
          <div class="type">{{ packs[item.pack].name }}</div>
          <button
            id="selected-number-zodiac"
            @click="$emit('hold-number', item)"
          >
            เลือกเบอร์นี้
          </button>
        </div>
      </div>
    </div>
    <div v-else class="no-result">
      No result found.
    </div>
    <div class="paginations">
      <button
        @click="updatePage(pagination.page - 1)"
        :disabled="pagination.page === 1"
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#595959">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
        </svg>
      </button>
      <button
        v-for="(item, key) in paginations"
        :key="key"
        :active="item === pagination.page"
        :class="{ dot: item === '...' }"
        @click="updatePage(item)"
      >
        {{ item }}
      </button>
      <button
        @click="updatePage(pagination.page + 1)"
        :disabled="pagination.page === pagination.last_page"
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#595959">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
  import { zodiacs } from './dropdown.json'
  import Button from "../../../components/button";

  export default {
      components: {Button},
      data: () => ({
      zodiacs,
      sortActive: ''
    }),
    computed: {
      vhoraFuntong () {
        return this.$store.state.vhora.vhoraFuntong
      },
      packs () {
        return this.vhoraFuntong.packs
      },
      numbering () {
        return this.vhoraFuntong.numbering
      },
      pagination () {
        return this.vhoraFuntong.pagination
      },
      paginations () {
        const current = this.pagination.page
        const total = this.pagination.last_page

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
      }
    },
    methods: {
      formatMsisdn (e) {
        return e.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')
      },
      updatePage (e) {
        this.$emit('update', e)
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
      holdNumber (e) {
        this.$emit('hold-number', e)
      },
      updateSort(e) {
        this.sortActive = e
        this.$emit('update-sort', e)
      }
    }
  }
</script>

<style lang="scss" scoped src="../../drlucky/select/colors.scss" ></style>
<style lang="scss" scoped src="../../drlucky/select/style.scss"></style>
<style lang="scss" scoped>
  .container .number-container {
    background-color: #ffffff;

    .number-title-container {
      background-color: #ffffff;
    }

    .numbers .number {
      &#pos399 {
        border-color: #f00;

        .title {
          background: linear-gradient(286.62deg, #DF1584 10.96%, #DF1E5F 36.51%, #E02542 61.07%, #E02932 82.54%, #E02B2C 98.54%);
        }

        .number-content {
          #selected-number-zodiac {
            background: #dd2d4a;
          }
        }
      }
      &#pre299 {
        border-color: #FF7800;

        .title {
          background-color: #f2994a;
        }

        .number-content {
          #selected-number-zodiac {
            background: #f2994a;
          }
        }
      }

      .number-content {
        .type {
          font-family: 'TrueLight';
        }
      }

      .title {
        display: flex;
        justify-content: center;
        align-items: center;
        grid-gap: 8px;
      }
    }
    .no-result {
      padding: 48px 0;
    }
    .paginations {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 16px 16px 36px;

      button {
        height: 32px;
        width: 32px;
        margin: 0 4px;
        padding: 0;
        display: grid;
        place-items: center;
        color: #000000;
        background-color: #fff;
        border: 2px solid #E62627;
        border-radius: 4px;
        cursor: pointer;
        font-family: 'TrueMedium';
        font-size: 24px;

        &[active] {
          font-family: 'TrueLight';
          color: #ffffff;
        }

        &[disabled] {
          border: 2px solid #cccccc;
          background-color: transparent;
          pointer-events: none;
          cursor: default;
          opacity: 0.5;
        }

        &.dot {
          pointer-events: none;
          cursor: default;
          width: 20px;
          border: none;
          background: #0000;
        }

        svg {
          margin: auto
        }
      }
    }

    .sort-button {
      color: inherit;
      height: 40px;
      font-family: TrueLight;
    }
    #sort {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding-right: 24px;

      .sort-label {
        margin-right: 1.3rem;
        font-family: TrueLight;
      }

      a {
        box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.15);
        padding: 8px 21px;
        text-decoration: none;
      }

      #asc-sort {
        border-radius: 40px 0px 0px 40px;
      }

      #desc-sort {
        border-radius: 0px 40px 40px 0px;
      }

      .active-sorting {
        background: linear-gradient(108.99deg, #E02B2C 1.51%, #E02932 20.77%, #E02543 46.61%, #DF1E5F 76.18%, #DF1584 106.92%);
        color: #ffffff;
        height: 40px;
        font-family: TrueLight;
      }
    }
  }

  @media screen and (max-width: 640px) {
    .container .number-container .paginations button {
      margin: 0 2px;
    }

    .container .number-container #sort {
        a {
          padding: 7px 10px;
        }
        #asc-sort {
            font-size: 18px;
        }
        #desc-sort {
            font-size: 18px;
        }
    }
  }

  @media screen and (max-width: 370px) {
      .container .number-container #sort {
          .sort-label {
              font-size: 20px;
          }
          a {
              padding: 7px 7px;
          }
          #asc-sort {
              font-size: 16px;
          }
          #desc-sort {
              font-size: 16px;
          }
      }
  }
</style>
