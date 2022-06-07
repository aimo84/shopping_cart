<template>
  <footer>
    <div class="footer-grid-container">
      <div class="footer-grid">
        <div class="footer-grid-item">
          <img
            width="84"
            height="64"
            src='/images/footer/refund_icon.png'
            alt="Refund Icon"
            loading="lazy"
          />
          <div class="title">{{ data.grid.refund[$i18n.locale] }}</div>
          <div class="subtitle">{{ data.grid.refund_label[$i18n.locale] }}</div>
        </div>
        <div class="footer-grid-item">
          <img
            width="84"
            height="64"
            src='/images/footer/delivery_icon.png'
            alt="Delivery Icon"
            loading="lazy"
          />
          <div class="title">{{ data.grid.shipping[$i18n.locale] }}</div>
          <div class="subtitle">{{ data.grid.shipping_label[$i18n.locale] }}</div>
          <div class="subtitle note">{{ data.grid.shipping_label_note[$i18n.locale] }}</div>
        </div>
        <div class="footer-grid-item">
          <img
            width="84"
            height="64"
            src='/images/footer/installment_icon.png'
            alt="Installment Icon"
            loading="lazy"
          />
          <div class="title">{{ data.grid.installment[$i18n.locale] }}</div>
          <div class="subtitle">{{ data.grid.installment_label[$i18n.locale] }}</div>
        </div>
        <div class="footer-grid-item">
          <img
            width="84"
            height="64"
            src='/images/footer/shopchat_icon.png'
            alt="ShopChat Icon"
            loading="lazy"
          />
          <div class="title">{{ data.grid.shopchat[$i18n.locale] }}</div>
          <div class="subtitle">{{ data.grid.shopchat_label[$i18n.locale] }}</div>
        </div>
      </div>
    </div>
    <div class="footer-bar links">
      <div class="footer-bar-container">
        <div class="links-container-follow">
          <div class="links-header">
            {{ data.follow.label[$i18n.locale] }}
          </div>
          <div class='follow-container'>
            <div
              class="link"
              v-for="(link, linkKey) in data.follow.item"
              :key="linkKey"
            >
              <div class="follow_icon">
                <a
                  :href="link.link"
                  @click="trackAnalytics('footer_section', 'click', data.follow.label[$i18n.locale])"
                >
                  <img :src="link.url">
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          v-for="(category, key) in data.footer"
          :key="key"
          class="links-container"
        >
          <div
            class="links-header"
            :active="category.active ? 'active' : undefined"
            @click="toggleCollapse(key)"
          >
            {{ category.label[$i18n.locale] }}
          </div>
          <div
            class="link-container"
            :active="category.active ? 'active' : undefined"
          >
            <div
              class="link"
              v-for="(link, linkKey) in category.item"
              :key="linkKey"
            >
              <a
                :href="link.link"
                @click="trackAnalytics('footer_section', 'click', link.label.en)"
              >{{ link.label[$i18n.locale] }}</a>
            </div>
          </div>
        </div>
      </div>
          <div class="footer-bar copyright">
        <div class="footer-bar-container-copyright">
        <div class="copyright-container">
          <div class="copyright-text">©True Corporation Public Company Limited. All rights reserved.</div>
        </div>
        <div class='copyright-container-right'>
          <a
            href="http://www3.truecorp.co.th/qos/truemoveh"
            class="copyright-link"
            target="_blank"
          >
            {{data.term[$i18n.locale]}}
          </a>
          <span class='mx-2'>•</span>
          <a
            class="pdpa-link"
            :href="`https://www3.truecorp.co.th/new/privacy-policy?ln=${$i18n.locale}`"
            target="_blank"
          >
          {{data.pp[$i18n.locale]}}
          </a>
        </div>
      </div>
    </div>
      <hr class='horizontal-line' />
    </div>
    <div class="footer-bar pdpa">
      <div class="footer-bar-container">
        <div class="pdpa-container">
          <a
            class="pdpa-link"
            :href="`https://www3.truecorp.co.th/new/privacy-policy?ln=${$i18n.locale}`"
            target="_blank"
          >{{data.pp[$i18n.locale]}}</a>
        </div>
      </div>
    </div>
    <div
      v-show="isShowFooter"
      class="anti-shadow-div"
    >
      <div class="offline-footer shadow-div">
        <button-element
          @click="home"
          class="button-logout"
        >
          {{ data.home [$i18n.locale] }}
        </button-element>
        <button-element
          @click="logout"
          class="button-logout"
        >
          {{ data.logout[$i18n.locale] }}
        </button-element>
        <img
          v-bind:src="convertToCdn('/images/icons/offline-footer.png')"
          class="footer-logo-image"
        />
        <span class="text-shop-name">{{textShopName}}</span>
      </div>
    </div>
  </footer>
</template>

<script>
  import data from './footer.json'
  import Button from '@components/button'
  import { convertToCdn } from '@utils/cdn'

  export default {
    components: {
      'button-element': Button
    },
    data: () => ({
      data,
      textShopName: '',
      isShowFooter: false,
      convertToCdn
    }),
    watch: {
      isShowFooter (value) {
        this.isShowFooter = value
      }
    },
    mounted () {
      const saleLocalData = JSON.parse(localStorage.getItem('TMH-SALE-DATA'))
      if (saleLocalData?.sale_mode === '1') {
        this.setShowSaleFooter()
      }

      this.$root.$on('setShowSaleFooter', () => {
        this.setShowSaleFooter()
      })
    },
    methods: {
      toggleCollapse (key) {
        this.data.footer[key].active = !this.data.footer[key].active
        this.$forceUpdate()
      },
      trackAnalytics (eventCategory, eventAction, eventLabel) {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event: 'track_event',
          event_category: eventCategory,
          event_action: eventAction,
          event_label: eventLabel
        })
      },
      logout () {
        const query = Object.assign({}, this.$route.query)
        delete query.shop_code
        delete query.sale_mode
        delete query.token
        this.$router.replace({ query })
        window.localStorage.removeItem('TMH-SALE-DATA')
        this.isShowFooter = false
        location.reload()
      },
      home () {
        this.$router.push('/sale')
      },
      setShowSaleFooter () {
        this.isShowFooter = true
      }
    }
  }
</script>

<style
  scoped
  lang="scss"
  src="./footer-desktop.scss"
></style>
<style
  scoped
  lang="scss"
  src="./footer-mobile.scss"
></style>
<style
    scoped
    lang="scss"
    src="./footer-desktop-offline.scss"
></style>
<style
    scoped
    lang="scss"
    src="./footer-mobile-offline.scss"
></style>
