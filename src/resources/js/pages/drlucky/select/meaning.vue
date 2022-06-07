<template>
  <dialog-element
    class="dialog"
    ref="dialog"
  >
    <template slot="content">
      <div class="meaning-container" v-if="item">
        <div class="header">
          <!-- <div class="title">ความหมายของเบอร์</div> -->
          <div class="number-container">
            <div class="title">ความหมายเบอร์ตามตำแหน่งโดยลัคนา</div>
            <div class="grade-container" :class="`bg-${types[item.group]}`">
              <div class="grade-info">
                <img :src="`/images/drlucky/${types[item.group]}.svg`" />
                <div>
                  <div class="label">{{ item.group_title }}</div>
                  <div class="sub-label">{{ item.subgroup_title }}</div>
                </div>
              </div>
              <div class="grade-type">
                <div>พลังเบอร์</div>
                <div class="grade">
                  {{ item.grade.substring(0, 1) }}
                  <span>{{ item.grade.substring(1) }}</span>
                </div>
              </div>
            </div>
            <div class="number-content">
              <div><div>{{ number[0] }}</div></div>
              <div><div>{{ number[1] }}</div></div>
              <div><div>{{ number[2] }}</div></div>
              <div>
                <div class="red">{{ number[3] }}</div>
                <div>เอก</div>
              </div>
              <div>
                <div class="red">{{ number[4] }}</div>
                <div>ทวิ</div>
              </div>
              <div>
                <div class="red">{{ number[5] }}</div>
                <div>ตรี</div>
              </div>
              <div>
                <div class="red combined-number">{{ number[6] }}{{ number[7] }}{{ number[8] }}</div>
                <div>จตุ-ปัญจ-ฉอ</div>
              </div>
              <div>
                <div class="red">{{ number[9] }}</div>
                <div>สัตต</div>
              </div>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="text-container">
            <div class="small">{{ userInfo.userInfo2 }}</div>
            <div class="description" v-html="item.description" />
            <div class="content-button-container">
              <button
              id="close-number_atpopup"
              @click="close"
              :disabled="loading"
              >ยกเลิก</button>
              <button
              id="choose-number_atpopup"
              @click="$emit('hold-number', item)"
              :disabled="loading"
              >เลือกเบอร์นี้</button>
            </div>
          </div>
        </div>
      </div>
    </template>
  </dialog-element>
</template>

<script>
  import Dialog from '@components/dialog'

  export default {
    components: {
      'dialog-element': Dialog
    },
    props: {
      form: Object,
      loading: Boolean,
      userInfo: Object
    },
    data: () => ({
      item: false
    }),
    computed: {
      vhoraPersonlizeFuntong () {
        return this.$store.state.vhora.vhoraPersonlizeFuntong
      },
      zodiac () {
        return this.vhoraPersonlizeFuntong.ascendant.zodiac
      },
      number () {
        return this.item.msisdn.replace(/-/g, '')
      },
      grades () {
        return {
          'A++': 'A_doublePlus_num',
          'A+': 'A_plus_num',
          A: 'A_standard_num'
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
    },
    methods: {
      open (e) {
        this.item = e
        this.$refs.dialog.open()
      },
      close () {
        this.$refs.dialog.close()
      }
    }
  }
</script>

<style lang="scss" scoped src="./colors.scss"></style>
<style lang="scss" scoped>
  .dialog::v-deep {
    .content {
      font-family: 'TrueLight';
      max-width: 560px;
      max-height: 95%;
      border-radius: 0px;
    }
    .dialog-content {
      padding: 0;
    }
  }

  .meaning-container {
    .header {
      text-align: center;
      padding: 25px 0 16px 0;
      display: grid;
      grid-gap: 24px;
      border-bottom: 0.5px solid #cccccc;

      .title {
        font-size: 30px;
        font-family: 'TrueBold';
        color: #000000;
      }

      .number-container {
        padding: 0px;
        display: grid;
        grid-gap: 16px;
        margin: auto;
        width: 100%;

        .number-content {
          display: grid;
          grid-template-columns: repeat(10, 40px);
          justify-content: center;
          grid-gap: 7px;
          padding: 0 16px;

          & > div {
            display: grid;
            grid-template-rows: 50px auto;
            align-items: center;
            justify-content: center;
            min-width: 12px;
            grid-gap: 4px;

            div:first-child {
              display: grid;
              place-items: center;
              width: 40px;
              line-height: 50px;
              height: 50px;
              background: #ffffff;
              border: 1px solid #cccccc;
              border-radius: 4px;
              color: #404040;
              font-family: 'TrueBold';
              font-size: 30px;

              &.red {
                border-color: #dd2d4a;
              }
            }

            div:nth-child(2) {
              font-family: 'TrueBold';
              font-size: 24px;
              line-height: 29px;
              color: #dd2d4a;
            }

            &:nth-child(7) {
              grid-column: span 3;
              border-color: 1px solid #dd2d4a;

              div:first-child {
                width: 135px;
                letter-spacing: 23px;
                padding-left: 21px;
              }
            }
          }
        }
      }

      .number-container {
        .grade-container {
          color: #ffffff;
          display: grid;
          grid-template-columns: auto auto;
          padding: 27px;
          justify-content: center;

          .grade-type {
            display: grid;
            grid-template-columns: 82px 93px;
            grid-gap: 4px;
            padding: 8px 16px;

            & > div {
              font-family: 'TrueBold';
              font-size: 30px;
              line-height: 35px;
              text-align: left;
            }

            .grade {
              font-size: 80px;
              font-family: "TrueBold";
              display: grid;
              grid-template-columns: auto auto;
              align-items: center;
              justify-content: center;

              span {
                font-size: 80px;
              }
            }
          }
          .grade-info {
            display: grid;
            grid-template-columns: auto auto;
            justify-content: flex-start;
            align-items: center;
            grid-gap: 12px;
            border-right: 1px solid #ffffff;
            padding: 8px 16px;

            img {
              filter: brightness(100);
              width: 46px;
              height: 46px;
            }

            .label {
              font-family: 'TrueBold';
              font-size: 30px;
              line-height: 35px;
              text-align: left;
            }

            .sub-label {
              font-family: 'TrueMedium';
              font-size: 24px;
              line-height: 28px;
              text-align: left;
            }
          }
        }
      }
    }
      
    .text-container {
      padding: 16px;
      text-align: center;
      display: grid;
      width: 100%;
      max-width: 600px;
      margin: auto;

      .small {
        color: #404040;
        font-size: 22px;

        &.link {
          color: #ff0000;
          text-decoration: underline;
          cursor: pointer;
        }
      }
      .description {
        text-align: center;
        color: #404040;
        font-size: 24px;
        line-height: 28px;
      }

      .content-button-container {
        grid-template-columns: 180px 180px;
        justify-content: center;

        button {
          border-radius: 40px;
          height: 40px;
          max-height: 40px;
          width: 180px;
          cursor: pointer;
          border: none;
          font-family: 'TrueBold';
          font-size: 22px;
          margin: 5px 15px;
          padding: 0 24px;

          &#choose-number_atpopup {
            background: linear-gradient(286.62deg, #DF1584 10.96%, #DF1E5F 36.51%, #E02542 61.07%, #E02932 82.54%, #E02B2C 98.54%);
            color: #fff;
          } 

          &#close-number_atpopup {
            background-color: #ffffff;
            color: #e62627;
            border: 2px solid #e62627;
          }

          &[disabled] {
            background: #dedede;
            color: #979797;
            cursor: wait;
          }
        }
      }
    }
  }

  @media screen and (max-width: 860px) {
  .meaning-container {
    .header {
      .number-container {
          .grade-container {
            grid-template-columns: auto auto;
          
            .grade-type {
              justify-content: center;
            }
          }
          .number-content {
            grid-template-columns: repeat(10, 40px);
          } 
        }
      }
    } 
  }

  @media screen and (max-width: 678px) {
  .meaning-container {
    .header {
      .number-container {
          .number-content {
            grid-template-columns: repeat(10, 33px);
            grid-gap: 5px;
            padding: 0 7px;

            & > div {
              div:first-child {
                width: 33px;
              }

              &:nth-child(7) {
                div:first-child {
                  width: 105px;
                  letter-spacing: 17px;
                  padding-left: 17px;
                }
              }
            }
          } 
        }
      }

      .content {
        .text-container {
          .content-button-container {
            button {
              width: 100%;
              margin: 5px 0;
            }
          }
        }
      }
    } 
  }

  @media screen and (max-width: 560px) {
    .meaning-container {
      .header {
        .number-container {
          .grade-container {
            .grade-type, .grade-info {
              padding: 0 10px;
            }
            .grade-type {
              grid-template-columns: 1fr !important;

              .grade {
                font-size: 70px;

                span {
                  font-size: 70px;
                }
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 480px) {
  .meaning-container {
    .header {
      .number-container {
          .number-content {
            grid-template-columns: repeat(10, 28px);
            padding: 0 3px;

            & > div {
              div:first-child {
                width: 29px;
              }

              &:nth-child(7) {
                div:first-child {
                  width: 95px;
                  letter-spacing: 7px;
                  padding-left: 7px;
                }
              }
            }
          }
          .grade-container {
            padding: 27px 0px;
          }
        }
      }
    } 
  }

  @media screen and (max-width: 375px) {
    .dialog::v-deep {
      .content {
        left: 7px;
        right: 7px;
      }
    }
  }
</style>
