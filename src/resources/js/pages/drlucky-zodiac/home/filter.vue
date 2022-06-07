<template>
  <div class="filter-container">
    <div class="filter-card price">
      <div class="filter-title">ค้นหาหมายเลขที่ต้องการ</div>
      <div class="filter-card number">
        <div class="filter-content">
          <div class="number-field-container">
            <div>
              <div class="label">ตัวเลขที่ชอบ </div>
              <div class="number-button-container">
                <div
                  v-for="i in 10"
                  :key="i"
                  :active="favorite.includes((i - 1).toString())"
                  class="number-button"
                  @click="toggleNumber(i - 1, 'favorite')"
                >{{ i - 1 }}</div>
              </div>
            </div>
            <div>
              <div class="label">ตัวเลขที่ไม่ชอบ</div>
              <div class="number-button-container">
                <div
                  v-for="i in 10"
                  :key="i"
                  :active="dislike.includes((i - 1).toString())"
                  class="number-button"
                  @click="toggleNumber(i - 1, 'dislike')"
                >{{ i - 1 }}</div>
              </div>
            </div>
          </div>
          <div class="label-under-filter">ผลลัพธ์ของการค้นหาตัวเลขที่ชอบและไม่ชอบจะค้นหาเฉพาะตำแหน่ง 7 ตัวท้ายของหมายเลขเท่านั้น</div>
        </div>
      </div>
    </div>

    <div class="package-price-btn-container">
      <div class="package-price-label">เลือกประเภทซิม</div>
      <div class="filter-card price number" id="price-btn-container">
        <div class="filter-content" id="package-price-filter-container">
          <template v-for="(item, key) in packs">
            <input
              type="checkbox"
              name="price"
              :id="`price-${key}`"
              :key="`price-input-${key}`"
              v-model="selectedGrades"
              :value="item.code"
              :checked="false"
            />
            <label
              class="price-item"
              :key="`price-label-${key}`"
              :id="item.type"
              :for="`price-${key}`"
            >
              <div class="price-item-content">
                <div class="content">
                  <div class="package-details" v-if="item.type === 'postpaid'">รายเดือนเริ่มต้นที่ {{ item.baseline }}.-</div>
                  <div class="package-details" v-else>เติมเงินเริ่มต้นที่ {{ item.baseline }}.-</div>
                </div>
                <label
                  :id="`select-pack-${item.type}-${item.baseline}`"
                  class="button"
                  :for="`price-${key}`"
                  :disabled="selectedGrades.length === 1 && selectedGrades[0] === item.code"
                >
                  <svg width="12" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 4.83l3.33 3.34L11 1.5" stroke="#fff" stroke-width="2"/>
                  </svg>
                </label>
              </div>
            </label>
          </template>
        </div>

        <div class="filter-content" id="button-filter-container">
          <div class="buttons">
            <button-element
              class="cancel"
              @click="clearFilters"
              id="clear-filter-zodiac"
            >ล้างข้อมูล</button-element>
            <button-element
              class="apply"
              @click="updateFilters"
              id="apply-filter-zodiac"
            >ค้นหา</button-element>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Button from '@components/button'

  export default {
    components: {
      'button-element': Button
    },
    data: () => ({
      selectedGrades: [],
      favorite: [],
      dislike: []
    }),
    computed: {
      vhoraFuntong () {
        return this.$store.state.vhora.vhoraFuntong
      },
      packs () {
        return this.vhoraFuntong.packs
      }
    },
    mounted () {
        this.$watch('selectedGrades', (val) => {
        this.$emit('update-packs', val)
      })
    },
    methods: {
      toggleNumber (value, type) {
        value = value.toString()
        const index = this[type].indexOf(value)
        if (index > -1) this[type].splice(index, 1)
        else this[type].push(value)
        // Prevent same value between "Favorite" and "Dislike"
        const reverse = type === 'favorite' ? 'dislike' : 'favorite'
        const reverseIndex = this[reverse].indexOf(value)
        if (reverseIndex > -1) this[reverse].splice(reverseIndex, 1)
      },
      clearFilters() {
        this.favorite = []
        this.dislike = []
        this.$emit('update-filters', {
          number_like: [],
          number_dislike: []
        })
      },
      updateFilters () {
        this.$emit('update-filters', {
          number_like: this.favorite,
          number_dislike: this.dislike
        })
      }
    }
  }
</script>

<style lang="scss" scoped src="../../drlucky/select/colors.scss"></style>
<style lang="scss" scoped src="../../drlucky/select/style.scss"></style>
<style lang="scss" scoped>
.container {
  .filter-container {
    margin-top: 0;
    padding: 24px 35px;
    background: #ffffff;
    grid-gap: 0;
    .package-price-btn-container {
      padding: 0px 6px;
    }

    .filter-card {
      &.price .filter-content {

        input:checked + .price-item {
          padding: 0;

          .button[disabled] {
            pointer-events: none;
          }

          &#postpaid {
            border: 1px solid #FF0000;

            .button,
            .title {
              background-color: #FF0000;
            }
          }
          &#prepaid {
            border: 1px solid #FF7800;

            .button,
            .title {
              background-color: #FF7800;
            }
          }
        }

        .price-item {
          padding: 0;
          overflow: hidden;
          display: block;
          border-radius: 10px;

          .price-item-content {
            padding: 7px 6px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .content {
              display: initial;
              .package-details {
                font-family: 'TrueMedium';
                font-size: 24px;
                color: #000000;
                user-select: none;
              }
            }
          }
        }
      }
      &.number .filter-content {
        display: initial;
        padding: 28px 32px;

        .number-field-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          grid-gap: 10%;
          margin: auto;
          margin-bottom: 24px;
          padding: 0px 6px;

          ::v-deep div > .label {
            font-family: 'TrueLight';
            margin: 13px 3px;
          }

          .number-button-container {
            display: grid;
            grid-template-columns: repeat(10, 1fr);
            grid-gap: 7px;

            .number-button {
              color: #cccccc;
              background: #ffffff;
              border: 1px solid #cccccc;
              border-radius: 4px;
              text-align: center;
              height: 50px;
              line-height: 50px;
              cursor: pointer;

              &[active] {
                color: #fff;
                background: linear-gradient(286.62deg, #DF1584 10.96%, #DF1E5F 36.51%, #E02542 61.07%, #E02932 82.54%, #E02B2C 98.54%);
              }

              &::selection {
                background-color: transparent;
              }
            }
          }
        }

        .buttons {
          display: grid;
          grid-gap: 8px;
          grid-template-columns: 1fr 1fr;
          max-width: 380px;
          margin: auto;

          button {
            min-width: initial;
            height: 40px;
            border-radius: 40px;
            padding: 0;

            &.apply {
              background: linear-gradient(286.62deg, #DF1584 10.96%, #DF1E5F 36.51%, #E02542 61.07%, #E02932 82.54%, #E02B2C 98.54%);
              color: #ffffff;
            }

            &.cancel {
              background: #ffffff;
              color: #e62627;
              border: 2px solid #e62627;
            }
          }
        }

        .label-under-filter {
            text-align: center;
            margin-top: 10px;
        }
      }

      .filter-title {
        color: #000000;
        text-align: left;
        padding: 0px;
      }
    }

    #price-btn-container {
        display: flex !important;
        justify-content: space-between !important;
        align-items: center !important;

        #package-price-filter-container {
          padding: 0px !important;
        }

        #button-filter-container {
          padding: 0px;
          .buttons {
            #clear-filter-zodiac, #apply-filter-zodiac {
              width: 180px !important;
            }
          }
        }

        #package-price-filter-container {
          display: flex !important;
        }
    }
  }
}

@media screen and (max-width: 1024px){
  .container {
    .filter-container {
      .filter-card.number {
        .filter-content {
          .number-field-container {
            grid-gap: 3%;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 860px) {
  .container {
    .filter-container {
      padding: 24px;
      .filter-card.number {
        .filter-content {
          padding: 28px 16px;

          .number-field-container {
            grid-template-columns: 1fr;
            grid-gap: 3px;

            .label {
              text-align: left;
            }

            .number-button-container {
              margin-bottom: 8px;
              grid-gap: 5px;
            }
          }
        }
        .label-under-filter {
          margin-bottom: 20px;
        }
      }

      .package-price-btn-container {
        margin-top: -27px;

        .package-price-label {
          text-align: center;
        }
      }

      #price-btn-container {
        flex-direction: column !important;
        grid-gap: 10px;

        #package-price-filter-container {
          padding: 0px !important;
        }

        #button-filter-container {
          padding: 0px;
          .buttons {
            #clear-filter-zodiac, #apply-filter-zodiac {
              width: 170px !important;
            }
          }
        }

        #package-price-filter-container {
          justify-content: center !important;
        }
    }
    }
  }
}

@media screen and (max-width: 678px) {
  .container {
    .filter-container {
      padding: 13px;
      .filter-card.number {
        .filter-content {
          padding: 28px 16px;
          .number-field-container {
            .number-button-container {
              margin-bottom: 8px;
              grid-gap: 3px;
            }
          }
        }
      }
      #price-btn-container {
        #button-filter-container {
            .buttons {
                #clear-filter-zodiac, #apply-filter-zodiac {
                    width: 130px !important;
                }
            }
        }
      }
    }
  }
}
</style>
