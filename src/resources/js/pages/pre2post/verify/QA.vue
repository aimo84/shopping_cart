<template>
  <div class="q-a-container">
    <div class="q-a-header">
      <div class="q-a-header-icon">
        <img src="/images/pre2post/q-a-icon.svg" alt="q-a-header-icon" />
      </div>
      <div class="q-a-header-text">
        <div class="q-a-header-title">รวมข้อสงสัยวิธี</div>
        <div class="q-a-header-subtitle">เปลี่ยนเติมเงินเป็นรายเดือน</div>
        <div class="q-a-header-button">
          <button class="q-a-open-button" @click="openQA" v-if="!isExpand" >
            ดู Q&A 
          </button>
        </div>
      </div>
    </div>
    <div class="q-a-body" :class="isExpand ? 'open' : 'close'">
      <div class="q-a-body-inner">
        <div v-for="(data, index) in QAData" class="q-a-text" :key="index">
            <div class="question-text">
              Q: {{ data.Q }}
            </div>
            <div class="answer-text">
              A: {{ data.A }}
            </div>
        </div>
        <div class="q-a-close-button-container">
          <button class="q-a-close-button" @click="closeQA">
            ปิด Q&A 
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FETCH_Q_A_CONTENT } from '@store/actions.type';

export default {
  data: () => ({
      isExpand: false
  }),
  async created() {
    try {
      this.$store.dispatch(FETCH_Q_A_CONTENT)
    } catch (error) {
      console.log(error)
    }
  },
  computed: {
    QAData () {
      return this.$store.state?.pre2post?.QAContent?.body;
    }
  },
  methods: {
    openQA() {
      this.isExpand = true
    },
    closeQA() {
      this.isExpand = false
    }
  },
}
</script>

<style lang="scss" scoped>
  .q-a-container {
    width: 100%;
    max-width: 1351px;
    margin: 0 auto;
    padding: 25px;

    .q-a-header {
      background: linear-gradient(90deg, #F29137 -6.22%, #F12084 49.53%, #A91FCC 112.39%);
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 15px;
      grid-gap: 15px;

      .q-a-header-icon {
        img {
          width: 200px;
          height: 181px;
        }
      }

      .q-a-header-text {
        .q-a-header-title, .q-a-header-subtitle {
          font-family: 'TrueBold';
          color: #ffffff;
        }

        .q-a-header-title {
          font-size: 73px;
          line-height: 55px;
        }

        .q-a-header-subtitle {
          font-size: 45px;
          line-height: 55px;
        }

        .q-a-header-button {
          .q-a-open-button {
            width: 100%;
            max-width: 355px;
            font-family: 'TrueBold';
            font-size: 33px;
            line-height: 55px;
            background: #ffffff;
            color: #595959;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
            border: none;
            border-radius: 60px;
            cursor: pointer;
          }
        }
      }
    }

    .q-a-body {
      background: #ffffff;

      &.open {
        max-height: 1200px;
        opacity: 1;
        overflow: hidden;
        transition: all 0.4s ease-out;
      }

      &.close {
        max-height: 0px;
        overflow: hidden;
        transition: all 0.4s ease-out;
      }

      .q-a-body-inner {
        width: 100%;
        max-width: 840px;
        margin: 0 auto;
        padding: 25px;
        
        .q-a-text {
          margin-bottom: 15px;
          .question-text, .answer-text {
            font-size: 30px;
            line-height: 35px;
          }
          .question-text {
            font-family: 'TrueBold';
            color: #000000 
          }
          .answer-text {
            font-family: 'TrueMedium';
            color: #ab164c;
          }
        }

        .q-a-close-button-container {
          .q-a-close-button {
            display: block;
            margin: 0 auto;
            width: 100%;
            max-width: 355px;
            font-family: 'TrueBold';
            font-size: 36px;
            line-height: 55px;
            background: #ffffff;
            color: #595959;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
            border: none;
            border-radius: 60px;
            cursor: pointer;
          }
        }
      }
    }
  }

  @media screen and (max-width: 680px) {
    .q-a-container {
      padding: 0px;

      .q-a-header {
        padding: 7px;
        grid-gap: 15px;

        .q-a-header-icon {
          img {
            width: 143px;
            height: 130px;
          }
        }

        .q-a-header-text {
          .q-a-header-title {
            font-size: 9vw;
            line-height: 9vw;
          }

          .q-a-header-subtitle {
            font-size: 5.7vw;
            line-height: 5.7vw;
          }

          .q-a-header-button {
            .q-a-open-button {
              font-size: 19px;
              line-height: 23px;
              height: 31px;
            }
          }
        }
      }

      .q-a-body {
      background: #ffffff;

      .q-a-body-inner {
        padding: 25px;
        
        .q-a-text {
          .question-text, .answer-text {
            font-size: 20px;
            line-height: 23px;
          }
        }

        .q-a-close-button-container {
          .q-a-close-button {
            width: 205px;
            font-size: 19px;
            line-height: 23px;
            height: 31px;
          }
        }
      }
    }
    }
  }


</style>