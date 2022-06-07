import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './app.vue'
import router from './router'
import store from './store'
import ApiService from './common/api.service'
import messages from './i18n/data.json'
import VueMeta from 'vue-meta'
import { VueReCaptcha } from 'vue-recaptcha-v3'

Vue.config.productionTip = false
Vue.use(VueI18n)
Vue.use(VueMeta)

Vue.use(VueReCaptcha, {
  siteKey: window.recaptcha_sitekey,
  loaderOptions: {
    autoHideBadge: true
  }
})

let lang = window.localStorage.getItem('lang') || 'th'
lang = lang.toString().toLocaleLowerCase()
lang = ['th', 'en'].includes(lang) ? lang : 'th'
window.localStorage.setItem('lang', lang)

const i18n = new VueI18n({
  locale: lang,
  messages
})

window.i18n = i18n

ApiService.init()

new Vue({
  render: (h) => h(App),
  router,
  store,
  i18n
}).$mount('#app')
