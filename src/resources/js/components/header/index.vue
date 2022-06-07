<template>
  <div class="main-header">
    <header>
      <div class="new-top-bar desktop">
        <div class="new-top-bar-container">
          <div class="new-top-bar-content-left">
            <a
              href="https://true.th/cover"
              class="item-left logo"
            >
              <img
                src="/images/icons/top-bar-logo.png"
                alt="True Header Bar"
              >
            </a>
            <div
              v-for="(item) in topBarContentTypeNormal"
              :key="item.id"
              class="item-left-text"
            >
              <a
                :href="item.link && (item.link.url !== null || item.link.url !== '') ? item.link.url : '#'"
                class="item-left"
                target="_blank"
              >
                {{item.name}}
              </a>
            </div>
          </div>
          <div class="new-top-bar-content-right">
            <div
              v-for="(item) in topBarContentTypeContent"
              :key="item.id"
              class="item-right-container"
            >
              <a
                :href="item.link && (item.link.url !== null || item.link.url !== '') ? item.link.url : '#'"
                class="item-right"
                target="_blank"
              >
                <template v-if="item.position === 1">
                  {{item.name}}
                </template>
                <template v-else-if="item.position === 2">
                  {{item.name}}
                </template>
              </a>
            </div>
            <div class="top-bar-divider" />
            <div
              v-for="(item) in topBarContentTypePurchase"
              :key="item.id"
              class="item-right-container"
            >
              <a
                :href="item.link && (item.link.url !== null || item.link.url !== '') ? item.link.url : '#'"
                class="item-right"
                target="_blank"
              >
                <template v-if="item.position === 1">
                  <img
                    width="16"
                    height="17"
                    src="/images/icons/top-bar-order.svg"
                    alt=""
                  >
                  {{item.name}}
                </template>
                <template v-else-if="item.position === 2">
                  <img
                    width="16"
                    height="16"
                    src="/images/icons/top-bar-cart.svg"
                    alt=""
                  >
                  {{item.name}}
                </template>
              </a>
            </div>
            <div class="top-bar-divider" />
            <div
              v-for="(item) in topBarContentTypeMember"
              :key="item.id"
              class="item-right-container"
            >
              <div
                class="item-right-user"
                v-if="item.position === 2"
                @click="signup"
              >
                <img
                  width="16"
                  height="17"
                  src="/images/icons/top-bar-regis.svg"
                  alt=""
                >
                {{item.name}}
              </div>
              <div
                class="item-right-user"
                v-else-if="item.position === 1"
                @click="login"
              >
                <img
                  width="16"
                  height="16"
                  src="/images/icons/top-bar-user.svg"
                  alt=""
                >
                {{item.name}}
              </div>
            </div>
            <div class="item-right new-lang-icon">
              <div
                class="lang-item-th"
                :active="$i18n.locale === 'th'"
                @click="changeLanguage('th')"
              >ไทย</div>
              <div
                class="lang-item-en"
                :active="$i18n.locale === 'en'"
                @click="changeLanguage('en')"
              >EN</div>
            </div>
          </div>
        </div>
      </div>
      <!-- new mid bar -->
      <div
        class="new-middle-bar desktop"
        v-if="middleBarContent && middleBarContent.length > 0"
      >
        <div class="new-middle-bar-container">
          <div
            class="middle-bar-main-menu"
            v-for="(middleMenu, key) in middleBarContent"
            :key="key"
          >
            <a
              v-if="middleMenu"
              :href="middleMenu.link && (middleMenu.link.url !== null || middleMenu.link.url !== '') ? middleMenu.link.url : '#'"
              class="middle-bar-title"
            >
              <span>{{middleMenu.name}}</span>
            </a>
            <div class="middle-submenu-container">
              <div
                class="middle-submenu-box"
                v-if="middleMenu.product_service_headers && middleMenu.product_service_headers.length > 0"
              >
                <div
                  class="submenu-content-container"
                  v-for="(middleSubMenu, midSubKey) in middleMenu.product_service_headers"
                  :key="midSubKey"
                >
                  <a
                    v-if="middleSubMenu"
                    :href="middleSubMenu.link && (middleSubMenu.link.url !== null || middleSubMenu.link.url !== '') ? middleSubMenu.link.url : '#'"
                    class="submenu-tile"
                  >
                    {{middleSubMenu.name}}
                  </a>
                  <div
                    v-for="(subMenu, subKey) in middleSubMenu.product_service_details"
                    :key="subKey"
                    class="submenu-item-container"
                  >
                    <a
                      :href="subMenu.link && (subMenu.link.url !== null || subMenu.link.url !== '') ? subMenu.link.url : '#'"
                      class="submenu-item"
                    >
                      {{subMenu.name}}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <!-- search bar -->
      <div class="options-bar-container">
        <div class="options-bar">
          <div
            :active="showDrawer ? 'active' : undefined"
            @click="toggleDrawer"
            class="hamburger"
          >
          </div>
          <div class="true-icon">
            <router-link to="/">
              <img
                src="/images/icons/true-store-logo.png"
                alt="Turemove icon"
              />
            </router-link>
          </div>
          <header-search-element
            v-model="searchQuery"
            @search="search"
          />
          <div class="options">
            <div class="option-container">
              <router-link
                class="option-item"
                to="/tracking"
              >
                <img
                  width="34"
                  height="21"
                  src="/images/icons/icon-tracking.svg"
                  alt="Tracking icon"
                  class="tracking"
                />
              </router-link>
              <router-link
                class="option-item"
                to="/cart"
              >
                <img
                  width="22"
                  height="21"
                  src="/images/icons/icon-cart.svg"
                  alt="Cart icon"
                  class="cart"
                />
              </router-link>
              <a
                class="option-item"
                href="https://help.truecorp.co.th/mobile_devices"
              >
                <img
                  width="21"
                  height="21"
                  src="/images/icons/icon-info.svg"
                  alt="Info icon"
                  class="info"
                />
              </a>
              <router-link
                class="option-item user-profile"
                to=""
              >
                <div class="user">
                  <template v-if="user">
                    <div class="dropdown">
                      <div class="dropdown-label">
                        <img
                          width="21"
                          height="30"
                          src="/images/icons/icon-user-header.svg"
                          alt="User icon"
                          class="user-icon"
                          :style="`background-image: url(${user && user.avatar})`"
                          :active="showServiceDrawer ? 'active' : undefined"
                          @click="toggleServiceDrawer"
                        />
                        <div class="dropdown-text-label">
                          {{user.display_name}}
                        </div>
                      </div>
                      <div class="submenu-container">
                        <div class="submenu-list">
                          <div class="submenu-item">
                            <router-link to="/profile">
                              {{data.topbar.trueid.my_account[$i18n.locale]}}
                            </router-link>
                          </div>
                        </div>
                        <div
                          class="submenu-list text-red"
                          @click="logout"
                        >
                          <div class="submenu-item">{{data.topbar.trueid.logout[$i18n.locale]}}</div>
                        </div>
                      </div>
                    </div>
                  </template>
                  <template v-else>
                    <img
                      width="21"
                      height="30"
                      src="/images/icons/icon-user-header.svg"
                      alt="User icon"
                      class="no-user-icon"
                      :active="showServiceDrawer ? 'active' : undefined"
                      @click="toggleServiceDrawer"
                    />
                    <div
                      class="text"
                      @click="signup"
                    > {{data.topbar.trueid.signup[$i18n.locale]}} |</div>
                    <div
                      class="text login"
                      @click="login"
                    > {{data.topbar.trueid.login[$i18n.locale]}}</div>
                  </template>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
       <div
      class="drawer mobile"
      :active="showDrawer ? 'active' : undefined"
    >
      <div class="drawer-container">
        <div class="main-drawer-container">
          <div class="drawer-item-container top-drawer-item">
            <div class="drawer-item top-item lang-container">
              <div class="lang-text">
                {{data.lang_text[$i18n.locale]}}
              </div>
              <div class="lang-icon">
                <div
                  class="th-flag sprite-icons"
                  :active="$i18n.locale === 'th'"
                  @click="changeLanguage('th')"
                />
                <div
                  class="en-flag sprite-icons"
                  :active="$i18n.locale === 'en'"
                  @click="changeLanguage('en')"
                />
                </div>
              </div>
            <div
              class="drawer-subitem-container"
              :class="data.personal.show ? 'active' : undefined"
            >
              <a
                :href="item.link"
                class="drawer-item"
                v-for="(item, key) in data.personal.submenu"
                :key="key"
                @click="trackAnalytics('header_section', 'click', `Personal_${item.text.en}`)"
              >{{ item.text[$i18n.locale] }}</a>
            </div>
            <div
              class="drawer-subitem-container"
              :class="data.business.show ? 'active' : undefined"
            >
              <a
                :href="item.link"
                class="drawer-item"
                v-for="(item, key) in data.business.submenu"
                :key="key"
                @click="trackAnalytics('header_section', 'click', `Business_${item.text.en}`)"
              >{{ item.text[$i18n.locale] }}</a>
            </div>
          </div>
          <div class="drawer-item-container">
            <a
              class="drawer-item dropdown-item"
              :href="data.home.link"
              @click="trackAnalytics('header_section', 'click', data.home.label.en)"
            >
            <div class="lang-text">
              {{ data.home.label[$i18n.locale] }}
            </div>
            <div class="lang-icon">
              <div class="iconpos">
                <img
                  width="66"
                  height="31"
                  class="icontrue"
                  src="/images/icons/icon-truestore.png"
                />
              </div>
              <div class="drawer-item-divider"></div>
            </div>
            </a>
          </div>
          <div
            class="drawer-item-container"
            v-for="(item, key) in headerBarContent"
            :key="key"
          >
            <a
              :href="item.sub_menu && item.sub_menu.length > 0 ? '#' : item.link"
              :id="item.id"
              class="drawer-item dropdown-item"
              :class="item.active ? 'active' : undefined"
              @click="toggleDrawerItem(key)"
            >
              <div class="drawer-item-divider"></div>
              <span class="menu" :class="item.show ? 'active' : undefined">{{ item.title[$i18n.locale] }}</span>
              <div
                v-if="item.sub_menu && item.sub_menu.length > 0"
                class="arrow"
                :class="item.show ? 'active' : undefined"
              >
                <img width="18" height="11" src="/images/icons/header-arrow.svg" alt="Arrow" >
              </div>
            </a>
            <div
              class="drawer-subitem-container"
              :class="item.show ? 'active' : undefined"
              v-if="item.sub_menu"
            >
              <a
                :href="submenu.link"
                class="drawer-item"
                v-for="(submenu, subkey) in item.sub_menu"
                :key="subkey"
                @click="trackAnalytics('header_section', 'click', `${item.title.en}_${submenu.title.en}`)"
              >{{ submenu.title[$i18n.locale] }}</a>
            </div>
          </div>
          <div class="drawer-item-container">
            <a
              class="drawer-item dropdown-item"
              :href="data.trueth.link"
              @click="trackAnalytics('header_section', 'click', data.home.label.en)"
            >
            <div class="lang-text">
              {{ data.trueth.label[$i18n.locale] }}
            </div>
            <div class="lang-icon">
              <div class="iconpos">
                <img
                  width="44"
                  height="15"
                  class="icontrue"
                  src="/images/icons/icon-logo-true.png"
                />
              </div>
              <div class="drawer-item-divider"></div>
            </div>
            </a>
          </div>
        </div>
      </div>
    </div>
      <div
        class="service-drawer mobile"
        :active="showServiceDrawer ? 'active' : undefined"
      >
        <div class="drawer-container sprite-bg">
          <div
            class="drawer-item"
            v-if="!user"
          >
            <div class="person-icon sprite-icons" />
            <div class="text-container">
              <div>{{ data.topbar.trueid.label[$i18n.locale] }}</div>
            </div>
            <div
              class="user-box"
              v-if="user !== null"
            >
              <div
                class="user-box-button red-button"
                @click="login"
              >
                {{ data.topbar.trueid.signin[$i18n.locale] }}
              </div>
              <div
                class="user-box-button"
                @click="signup"
              >
                {{ data.topbar.trueid.register[$i18n.locale] }}
              </div>
            </div>
          </div>
          <div
            class="drawer-item user-menu"
            :active="showUserDrawer ? 'active' : undefined"
            @click="toggleUserDrawerItem"
            v-else
          >
            <div
              class="profile-picture"
              :style="`background-image: url(${user.avatar})`"
            />
            <div class="user-info">
              <div class="username">{{user.display_name}}</div>
            </div>
          </div>
          <div
            class="drawer-item user-dropdown-menu"
            :active="showUserDrawer ? 'active' : undefined"
            v-if="user"
          >
            <div
              class="dropdown-item clickable"
              @click="profile"
            >
              <img
                class="icon"
                src="/images/icons/icon-user.svg"
              />
              <div class="text">{{ data.topbar.truecard.profile[$i18n.locale] }}</div>
            </div>
            <template v-if="truecard && truecard.more_info && truecard.more_info.additional_data">
              <div class="dropdown-item">
                <img
                  class="icon"
                  src="/images/icons/icon-user.svg"
                />
                <div class="label">{{ data.topbar.truecard.lifetime[$i18n.locale] }}</div>
                <div class="value">{{ truecardAge[$i18n.locale] }}</div>
              </div>
              <div class="dropdown-item">
                <img
                  class="icon"
                  src="/images/icons/icon-payment-history@2x.png"
                />
                <div class="label">{{ data.topbar.truecard.average[$i18n.locale] }}</div>
                <div class="value">{{ computeBalance(truecard.more_info.additional_data.arpa) }} ฿</div>
              </div>
            </template>
            <div
              class="dropdown-item"
              v-if="showImageTruecard"
            >
              <img
                class="icon"
                src="/images/icons/icon-true-card@2x.png"
              />
              <div class="label">{{ data.topbar.truecard.yourcard[$i18n.locale] }}</div>
              <div class="value">
                <img :src="truecard.product_detail.image_url" />
              </div>
            </div>
            <div
              class="dropdown-item clickable"
              @click="logout"
            >
              <img
                class="icon"
                src="/images/icons/icon-sign-out.svg"
              />
              <div class="label">{{ data.topbar.trueid.signout[$i18n.locale] }}</div>
            </div>
          </div>
          <a
            class="drawer-item"
            :href="data.topbar.privileges.link"
            @click="trackAnalytics('header_section', 'click', data.topbar.privileges.en)"
          >
            <div class="heart-icon sprite-icons" />
            <div class="text-container">
              <div>{{ data.topbar.privileges[$i18n.locale] }}</div>
              <div class="sub-text">{{ data.topbar.privileges.sublabel[$i18n.locale] }}</div>
            </div>
          </a>
          <a
            class="drawer-item"
            :href="data.topbar.bill.link"
            @click="trackAnalytics('header_section', 'click', data.topbar.bill.en)"
          >
            <div class="iservice-icon sprite-icons" />
            <div class="text-container">
              <div>{{ data.topbar.bill[$i18n.locale] }}</div>
              <div class="sub-text">{{ data.topbar.bill.sublabel[$i18n.locale] }}</div>
            </div>
          </a>
        </div>
      </div>
    </header>
    <div class="bottom-bar desktop">
      <nav class="nav-bottom-bar" id='nav-bottom'>
        <div class="icon-left-arrow-container">
          <div class="icon-left-arrow">
            <img class="button-left-arrow"
              src="/images/icons/icon_arrow_right.png"
              @click="slideButtomBarLeft"
            />
          </div>
        </div>
         <div class="icon-right-arrow-container">
          <div class="icon-right-arrow">
              <img class="button-right-arrow"
              src="/images/icons/icon_arrow_right.png"
              @click="slideButtomBarRight"
              />
          </div>
        </div>
        <div
          class="bottom-main-menu"
          :class="item.active ? 'active' : undefined"
          v-for="(item, key) in headerBarContent"
          :key="key"
        >
        <div v-if="key<15">
          <a
            class="bottom-main-menu-title"
            :href="item.link && item.link !== '' ? item.link : '#'"
            @click="trackAnalytics('header_section', 'click', item.title.en, item.link)"
          >
            {{ item.title[$i18n.locale] }}
          </a>
          <div
            v-if="item.sub_menu && item.sub_menu.length > 0"
            class='bottom-submenu-container'
          >
            <div
              class="bottom-submenu-box"
              v-if="item.sub_menu && item.sub_menu.length > 0"
            >
              <div
                class="bottom-submenu"
                v-for="(subitem, subkey) in item.sub_menu"
                :key="subkey"
              >
                <a
                  class="bottom-main-menu-link"
                  :href="subitem.link && subitem.link !== '' ? subitem.link : '#'"
                  @click="trackAnalytics('header_section', 'click', `${item.title.en}_${subitem.title.en}`)"
                >{{ subitem.title[$i18n.locale] }}</a>
              </div>
            </div>
          </div>
        </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
  import data from './header.json'
  import {
    LOGOUT,
    FETCH_HEADER_BAR,
    FETCH_MIDDLE_BAR,
    FETCH_TOP_BAR
  } from '@store/actions.type'
  import $ from 'jquery'
  import { computeBalance } from '@utils/common'
  import qs from 'qs'
  import HeaderSearch from '@components/header-search'

  export default {
    components: {
      'header-search-element': HeaderSearch
    },
    data: () => ({
      data,
      showDrawer: false,
      showServiceDrawer: false,
      showUserDrawer: false,
      cart: 0,
      searchQuery: '',
      error: false,
      headerBarContent: [],
      middleBarContent: [],
      topBarContentTypeNormal: [],
      topBarContentTypeContent: [],
      topBarContentTypePurchase: [],
      topBarContentTypeMember: [],
      scrollvalue: 0,
      bottomscrollbar: null
    }),
    computed: {
      user () {
        return this.$store.state.auth.profile.data
      },
      isMenu () {
        return (
          this.$route.name === 'online-store-shop' &&
          this.$store.state.store?.shop?.["hide_menu"] !== true
        )
      },
      truecard () {
        return this.$store.state.auth.truecard.data
      },
      showImageTruecard () {
        return (
          this.truecard &&
          this.truecard.product_detail &&
          this.truecard.product_detail.image_url
        )
      },
      truecardAge () {
        const age = this.truecard.more_info.additional_data.aging
        const month = age % 12
        const year = (age - month) / 12
        const yearStr = year > 1 ? 'Years' : 'Year'
        const monthStr = month > 1 ? 'Months' : 'Month'
        return {
          th: `${year > 0 ? `${year} ปี ` : ''}${
            month > 0 ? `${month} เดือน` : ''
          }`,
          en: `${year > 0 ? `${year} ${yearStr} ` : ''}${
            month > 0 ? `${month} ${monthStr}` : ''
          }`
        }
      }
    },
    watch: {
      '$i18n.locale' (value) {
        this.getHeaderBar(value)
        this.showArrowLeftRightWhenScroll()
      },
      '$route.name' (name) {
        if (name !== 'online-store-list') this.searchQuery = ''
      }
    },
    async mounted () {
      this.bottomscrollbar = document.getElementById('nav-bottom')
      this.bottomscrollbar.addEventListener('scroll', this.showArrowLeftRightWhenScroll)
      const params = new URL(window.location.href).searchParams
      if (params.get('q')) {
        if (!this.searchQuery) {
          this.searchQuery = params.get('q')
        }
      }
      await this.getHeaderBar()
      window.addEventListener('cart-updated', (event) => {
        this.cart = event.detail.cart
        window.localStorage.setItem('cart-length', this.cart)
      })
      const data = window.localStorage.getItem('cart-length')
      if (data) this.cart = data
    },
    methods: {
      async getHeaderBar (lang) {
        const headContent = await this.$store.dispatch(FETCH_HEADER_BAR)
        const middleContent = await this.$store.dispatch(FETCH_MIDDLE_BAR, {
          lang: this.$i18n.locale || lang
        })
        const topContent = await this.$store.dispatch(FETCH_TOP_BAR, {
          lang: this.$i18n.locale || lang
        })
        this.headerBarContent = headContent.data
        this.middleBarContent = middleContent.sort(
          (a, b) => a.position - b.position
        )
        this.topBarContentTypeNormal = topContent.filter(
          (e) => e.brand_header_type === 'normal'
        )
        this.topBarContentTypeContent = topContent.filter(
          (e) => e.brand_header_type === 'content'
        )
        this.topBarContentTypePurchase = topContent.filter(
          (e) => e.brand_header_type === 'purchase'
        )
        this.topBarContentTypeMember = topContent.filter(
          (e) => e.brand_header_type === 'member'
        )
        for (let i = 0; i < this.middleBarContent.length; i++) {
          this.middleBarContent[i].show = false
          this.middleBarContent[i].active = false
        }
      },
      updateURLQuery (key, value) {
        const query = {}
        query[key] = value
        const newurl = `${window.location.origin}/online-store?${qs.stringify(
          query
        )}`
        window.history.pushState(query, '', newurl)
        location.reload(newurl)
      },
      async search () {
        this.updateURLQuery('q', this.searchQuery)
      },
      computeBalance,
      setOverflow (value) {
        document.body.style.overflow = value ? 'hidden' : 'auto'
      },
      toggleDrawer () {
        this.showDrawer = !this.showDrawer
        this.showServiceDrawer = false
        this.setOverflow(this.showDrawer)
      },
      toggleServiceDrawer () {
        this.showServiceDrawer = !this.showServiceDrawer
        this.showDrawer = false
        this.setOverflow(this.showServiceDrawer)
      },
      toggleDrawerItem (key) {
        if (!this.headerBarContent[key].sub_menu) {
          this.trackAnalytics('header_section', 'click', this.headerBarContent[key].title.en)
          return
        }
        this.headerBarContent[key].show = !this.headerBarContent[key].show
        this.$forceUpdate()
      },
      togglePersonalDrawerItem () {
        data.business.show = false
        data.personal.show = !data.personal.show
        this.$forceUpdate()
      },
      toggleBusinessDrawerItem () {
        data.personal.show = false
        data.business.show = !data.business.show
        this.$forceUpdate()
      },
      toggleUserDrawerItem () {
        this.showUserDrawer = !this.showUserDrawer
      },
      changeLanguage (lang) {
        this.trackAnalytics(
          'header_section',
          'click',
          lang === 'en' ? 'English' : 'Thai'
        )
        document.documentElement.lang = lang
        this.$i18n.locale = lang
        window.localStorage.setItem('lang', lang)
        const event = new Event('language-changed')
        window.dispatchEvent(event)
      },
      checkPopupBlocker (win) {
        let result = false
        try {
          if (typeof win === 'undefined') {
            result = true
          } else if (win && win.closed) {
            result = false
          } else if (win && win.test) {
            result = false
          } else {
            result = true
          }
        } catch (err) {}
        return result
      },
      login () {
        this.trackAnalytics('header_section', 'Sign In', 'TRUE ID')
        window.dispatchEvent(new Event('login'))
      },
      signup () {
        this.trackAnalytics('header_section', 'Register', 'TRUE ID')
        window.location.href = window.url.MIX_SIGNUP_URL
      },
      clearLocalStorage () {
        window.localStorage.removeItem('cart-id')
        window.localStorage.removeItem('verify-form')
        window.localStorage.removeItem('verify-result')
        window.localStorage.removeItem('postpaid-ekyc')
        window.localStorage.removeItem('sim-meta')
        window.localStorage.removeItem('sim-meta-postpaid')
        window.localStorage.removeItem('postpaid-data')
        window.localStorage.removeItem('postpaid-sim-data')
        window.localStorage.removeItem('privilege-placeorder')
        window.localStorage.removeItem('family-black-verify-form')
        window.localStorage.removeItem('postpaid-ekyc-data')
      },
      logout () {
        const pathname = window.location.pathname
        const checkout = ['/cart', '/address', '/payment']
        const isCheckout = checkout.includes(pathname) || pathname === '/'
        const url = isCheckout
          ? window.location.href.split('?')[0]
          : window.location.href
        this.clearLocalStorage()
        this.$store.dispatch(LOGOUT).then(() => {
          window.location.href =
            window.url.MIX_LOGOUT_URL + encodeURIComponent(url)
        })
      },
      profile () {
        this.toggleServiceDrawer()
        if (this.$route.path !== '/profile') {
          this.$router.push('/profile')
        }
      },
      trackAnalytics (eventCategory, eventAction, eventLabel, isLink) {
        if (isLink === '#') return
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event: 'track_event',
          event_category: eventCategory,
          event_action: eventAction,
          event_label: eventLabel
        })
      },
      slideButtomBarRight () {
        const indexofmaxwidth = $('.nav-bottom-bar').css('max-width').indexOf('px')
        const maxwidth = parseInt($('.nav-bottom-bar').css('max-width').substring(0, indexofmaxwidth))
        const scrollWidth = document.querySelector('.nav-bottom-bar').scrollWidth
        $('.nav-bottom-bar').animate({ scrollLeft: '+=460' }, 500, 'swing', function () {
          if (maxwidth + parseInt($('.nav-bottom-bar').scrollLeft()) >= scrollWidth - 10) {
            $('.button-right-arrow').css('display', 'none')
          }
          else {
            $('.button-left-arrow').css('display', 'block')
          }
        })
      },
      slideButtomBarLeft () {
        $('.nav-bottom-bar').animate({ scrollLeft: '-=460' }, 500, 'swing', function () {
          if ($('.nav-bottom-bar').scrollLeft() === 0) {
            $('.button-left-arrow').css('display', 'none')
          } else {
            $('.button-right-arrow').css('display', 'block')
          }
        })
      },
      showArrowLeftRightWhenScroll (event) {
        setTimeout(() => {
          const indexofmaxwidth = $('.nav-bottom-bar').css('max-width').indexOf('px')
          const maxwidth = parseInt($('.nav-bottom-bar').css('max-width').substring(0, indexofmaxwidth))
          const scrollWidth = document.querySelector('.nav-bottom-bar').scrollWidth
          const scrollLeft = parseInt($('.nav-bottom-bar').scrollLeft())
          if (maxwidth + scrollLeft >= scrollWidth - 2) {
            $('.button-right-arrow').css('display', 'none')
          } else {
            $('.button-right-arrow').css('display', 'block')
          }
          if ($('.nav-bottom-bar').scrollLeft() >= 0) {
            if (scrollLeft === 0) {
              $('.button-left-arrow').css('display', 'none')
            } else {
              $('.button-left-arrow').css('display', 'block')
            }
          }
        }, 100)
      }
    }
  }
</script>

<style scoped lang="scss">
header {
  .mobile {
    display: none;
  }
}
</style>

<style
  scoped
  lang="scss"
  src="./header-desktop.scss"
></style>
<style
  scoped
  lang="scss"
  src="./header-mobile.scss"
></style>
