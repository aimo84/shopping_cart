<template>
  <div class="filter" :class="{ active }">
    <div class="filter-overlay" @click="close()" />
    <div class="filters-container">
      <div class="filter-title-container">
        <div class="filter-title">{{ Locale.filter[$i18n.locale] }}</div>
        <div class="filter-close" @click="close()">&times;</div>
      </div>
      <div class="filter-category-container">
        <div class="filter-container">
          <div class="filter-title">{{ Locale.categories[$i18n.locale] }}</div>
          <div class="filter-items">
            <template v-for="(category, key) in categories.options">
              <router-link
                :key="key"
                class="filter-item category"
                :to="{
                  name: 'online-store-list',
                  query: {
                    category: category.filters[0].value
                  }
                }"
              >{{ category.title[$i18n.locale] || category.title.th }}</router-link>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Locale from './locale.json'

  export default {
    data: () => ({
      Locale,
      active: false
    }),
    computed: {
      filters () {
        if (!this.$store.state.store.filter.data) return false
        const record = this.$store.state.store.filter.data.record
        if (!record) return false
        return record.find(item => item.type === 'filter').options
      },
      categories () {
        let categories = this.filters.find(item => item.section === 'category')
        categories = JSON.parse(JSON.stringify(categories))
        categories.options.unshift({
          title: {
            en: 'All Categories',
            th: 'ทั้งหมด'
          },
          filters: [{
            field_name: 'plaza_category_id'
          }]
        })
        categories.options = categories.options.map(option => ({
          ...option,
          title: this.formatTitle(option.title)
        }))
        return categories
      }
    },
    mounted () {
      window.addEventListener('resize', () => {
        const width = document.documentElement.clientWidth
        if (width > 860 && this.active) this.reset()
      })
    },
    methods: {
      open () {
        this.active = true
      },
      close () {
        this.active = false
      },
      formatTitle (title) {
        let titles = {}
        Object.keys(title).forEach(lang => {
          let split = title[lang].split('_')
          titles = {
            ...titles,
            [lang]: title[lang].includes('_') ? split[1] : split[0]
          }
        })
        return titles
      }
    }
  }
</script>

<style lang="scss" scoped>
  .filter {
    width: 280px;
    min-width: 280px;
    font-size: 1.5em;
    color: #000;
    font-family: 'TrueMedium';
    font-size: 24px;

    .filter-overlay {
      opacity: 0;
      pointer-events: none;
      position: fixed;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.3);
      left: 0;
      z-index: 1;
      transition: 150ms opacity ease;
    }

    .filters-container {
      position: relative;
      height: 100%;
      width: 100%;
      max-width: 330px;
      margin-left: auto;
      display: flex;
      flex-direction: column;

      .filter-title-container {
        display: none;
        height: 56px;
        border-bottom: 1px solid #ddd;
        padding: 0 16px;
        align-items: center;
        font-family: "TrueBold";
        font-size: 30px;

        .filter-title {
          flex: 1;
        }
        .filter-close {
          cursor: pointer;
        }
      }

      .filter-category-container {
        padding: 20px 24px 8px 0;
        flex: 1;
        overflow: auto;

        .filter-container {
          margin-bottom: 24px;

          &.mobile-only {
            display: none;
          }
        }

        .filter-title {
          font-size: 30px;
          font-family: "TrueBold";
          margin-bottom: 8px;
          line-height: 30px;
        }
        .filter-items {
          display: grid;

          .filter-item {
            display: flex;
            padding: 8px 0;
            text-decoration: none;
            color: #000;

            &.category {
              padding: 0;
              height: 30px;
              align-items: center;
              text-transform: capitalize;
            }
            span {
              line-height: 20px;
            }
          }
        }
      }

      .filter-action-container {
        padding: 16px;
        display: none;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 10px;
      }
    }
  }

  @media screen and (max-width: 860px) {
    .filter {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 3;
      width: 100%;
      height: 100%;
      opacity: 0;
      pointer-events: none;

      .filters-container {
        transform: translateX(330px);
        transition: 150ms transform ease;
      }

      &.active {
        display: block;
        opacity: 1;
        pointer-events: visible;

        .filter-overlay {
          opacity: 1;
          pointer-events: visible;
        }

        .filters-container {
          width: 90%;
          background: #fff;
          z-index: 4;
          transform: translateX(0);

          .filter-title-container {
            display: flex;
          }

          .filter-category-container {
            padding: 8px 16px;

            .filter-container.mobile-only {
              display: block;
            }

            .filter-title {
              font-size: 24px;
            }
            .filter-items {
              grid-template-columns: repeat(2, 1fr);
              grid-gap: 10px;

              &.price {
                grid-template-columns: 1fr auto 1fr;
                max-width: 100%;

                button {
                  display: none;
                }
              }

              &.reset {
                display: none;
              }

              .filter-item {
                &.category {
                  border: 2px solid #eee;
                  background-color: #eee;
                  height: 50px;
                  border-radius: 8px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  text-align: center;
                  line-height: 20px;
                  padding: 0 4px;

                  &.active {
                    border-color: #ff0000;
                    background: #fff;
                  }
                  &.small.en {
                    font-size: 20px;
                    line-height: 18px;
                  }
                }
                &.desktop-only {
                  display: none;
                }
              }
            }
          }

          .filter-action-container {
            display: grid;
          }
        }
      }
    }
  }
</style>
