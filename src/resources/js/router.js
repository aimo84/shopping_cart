import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import { LOGIN } from './store/actions.type'
import VueMeta from 'vue-meta'

Vue.use(Router)
Vue.use(VueMeta)

const router = new Router({
  mode: 'history',
  scrollBehavior(to, from) {
    if (to.name === from.name) return;
    return { x: 0, y: 0 };
  },
  routes: [
    {
      name: 'home-page',
      path: '/home',
      component: () => import('./pages/new-level-a'),
    },
    {
      name: 'search-page',
      path: '/search',
      component: () => import('./pages/search'),
    },
    {
      path: '/profile',
      component: () => import('./pages/profile'),
      children: [
        {
          name: 'profile-overview',
          path: '',
          component: () => import('./pages/profile/overview'),
        },
        {
          name: 'profile-detail',
          path: 'detail',
          component: () => import('./pages/profile/detail'),
        },
        {
          name: 'profile-address',
          path: 'address',
          component: () => import('./pages/profile/address'),
        },
        {
          name: 'profile-order-tracking',
          path: 'tracking',
          component: () => import('./pages/profile/tracking'),
        },
        {
          name: 'profile-order-tracking-detail',
          path: 'tracking/:order_id',
          component: () => import('./pages/profile/tracking/detail'),
        },
        {
          name: 'profile-wish-list',
          path: 'wishlist',
          component: () => import('./pages/profile/wishlist'),
        },
      ],
    },
    {
      name: 'sale-landingpage',
      path: '/sale',
      component: () => import('./pages/salelanding'),
    },
    {
      name: 'store-landingpage',
      path: '/store',
      component: () => import('./pages/new-level-a'),
      //component: () => import('./pages/testpage')
    },
    {
      name: 'isara-landingpage',
      path: '/isara',
      //component: () => import('./pages/new-level-a'),
      component: () => import('./pages/testpage')
    },
    {
      name: 'success',
      path: '/success',
      component: () => import('./pages/success'),
    },
    {
      name: 'tracking',
      path: '/tracking',
      component: () => import('./pages/tracking'),
    },
    {
      path: '/online-store/berfuntong',
      component: () => import('./pages/drlucky'),
      children: [
        {
          name: 'drlucky-home',
          path: '',
          component: () => import('./pages/drlucky/home'),
        },
        {
          name: 'drlucky-select',
          path: 'select',
          component: () => import('./pages/drlucky/select'),
        },
      ],
    },
    {
      path: '/online-store/berfuntong-zodiac',
      component: () => import('./pages/drlucky-zodiac'),
      children: [
        {
          name: 'drlucky-zodiac-home',
          path: '',
          component: () => import('./pages/drlucky-zodiac/home'),
        },
      ],
    },
    {
      name: 'paylater',
      path: '/paylater',
      component: () => import('./pages/paylater'),
    },
    {
      path: '/online-store',
      component: () => import('./pages/store'),
      children: [
        {
          name: 'online-store-list',
          path: '',
          component: () => import('./pages/store/list'),
        },
        {
          name: 'online-store-list-slug',
          path: 'list/:slug',
          component: () => import('./pages/store/list'),
        },
        {
          name: 'online-store-detail',
          path: 'item/:id',
          component: () => import('./pages/store/detail'),
        },
        {
          name: 'item-result',
          path: 'error',
          component: () => import('./pages/store/detail/error'),
        },
        {
          name: 'online-store-verify',
          path: 'verify/:id?',
          component: () => import('./pages/store/verify'),
        },
        {
          name: 'online-store-postpaid',
          path: 'postpaid/:id',
          component: () => import('./pages/store/postpaid'),
        },
        {
          name: 'online-store-prepaid',
          path: 'prepaid/:id',
          component: () => import('./pages/store/postpaid'),
        },
        {
          name: 'online-store-mnp-bundle',
          path: 'mnp-bundle/:id/:inventory/:bundle',
          component: () => import('./pages/store/postpaid'),
        },
        {
          name: 'online-store-mnp-auto-share-plan',
          path: 'mnp-auto/:id/:nas_code/:bundle_id',
          component: () => import('./pages/store/postpaid'),
        },
        {
          name: 'online-store-bundle',
          path: 'bundle/:id/:bundle/:nas',
          component: () => import('./pages/store/postpaid'),
        },
        {
          name: 'sale-id-form',
          path: 'saleIdForm/:id',
          component: () => import('./pages/store/saleId'),
        },
        {
          name: 'online-store-instantsim',
          path: 'instantsim/:id',
          component: () => import('./pages/store/postpaid'),
        },
        {
          name: 'online-store-lucky-home',
          path: 'luckysim',
          component: () => import('./pages/store/postpaid'),
        },
        {
          name: 'online-store-lucky',
          path: 'luckysim/:id',
          component: () => import('./pages/store/postpaid'),
        },
        {
          name: 'online-store-lucky999-home',
          path: 'lucky9999',
          component: () => import('./pages/store/postpaid'),
        },
        {
          name: 'online-store-lucky999',
          path: 'lucky9999/:id',
          component: () => import('./pages/store/postpaid'),
        },
        {
          name: 'online-store-postpaid-verify',
          path: 'postpaid/:id/:nas/:number',
          component: () => import('./pages/store/postpaid/verify'),
        },
        {
          name: 'online-store-prepaid-verify',
          path: 'prepaid/:id/:nas/:number',
          component: () => import('./pages/store/postpaid/verify'),
        },
        {
          name: 'online-store-bundle-verify',
          path: 'bundle/:id/:nas/:number/:bundle/:propo/:inventory_id?',
          component: () => import('./pages/store/postpaid/verify'),
        },
        {
          name: 'online-store-instantsim-verify',
          path: 'instantsim/:id/:nas/:number',
          component: () => import('./pages/store/postpaid/verify'),
        },
        {
          name: 'online-store-lucky-verify',
          path: 'luckysim/:id/:nas/:number',
          component: () => import('./pages/store/postpaid/verify'),
        },
        {
          name: 'online-store-new-customer-verify',
          path: 'newcustomer/verify',
          component: () => import('./pages/store/postpaid/verify/postpaid/verify.vue'),
        },
        {
          name: 'online-store-lucky-9999-verify',
          path: 'lucky9999/:id/:nas/:number',
          component: () => import('./pages/store/postpaid/verify'),
        },
        {
          name: 'online-store-blackcard-verify',
          path: 'blackcard/verify/:product',
          component: () => import('./pages/store/blackcard/verify'),
        },
        {
          name: 'online-store-trueidbox-verify',
          path: 'privilege/verify/:product/:inventory/:promotion',
          component: () => import('./pages/store/privilege/verify'),
        },
        {
          name: 'online-store-existing-verify-fail',
          path: 'existing-verify-fail',
          component: () => import('./pages/store/privilege/verify/prepaid.vue'),
        },
        {
          name: 'online-store-mnp-one-step-fail',
          path: 'mnp-one-step-fail',
          component: () => import('./pages/store/privilege/verify/one-step-failed.vue'),
        },
        {
          name: 'drlucky-verify',
          path: 'berfuntong/:id/:number',
          component: () => import('./pages/store/postpaid/verify'),
        },
        {
          name: 'drlucky-zodiac-verify',
          path: 'berfuntong-zodiac/:id/:number',
          component: () => import('./pages/store/postpaid/verify'),
        },
        {
          name: 'online-store-flashsale',
          path: 'shop/flash-sale',
          component: () => import('./pages/store/list'),
        },
        {
          name: 'online-store-shop',
          path: 'shop/:id',
          component: () => import('./pages/store/list'),
        },
        {
          name: 'online-store-partner-privilege',
          path: 'partner-privilege',
          component: () => import('./pages/store/list'),
        },
        {
          name: 'online-store-partner-privilege-details',
          path: 'partner-privilege/:id',
          component: () => import('./pages/store/list/partner-details'),
        },
      ],
    },
    {
      path: '/university',
      component: () => import('./pages/university'),
      children: [
        {
          name: 'university-verify',
          path: 'verify',
          component: () => import('./pages/university/verify'),
        },
      ],
    },
    {
      path: '/packages',
      component: () => import('./pages/packages'),
      children: [
        {
          name: 'packages',
          path: '',
          component: () => import('./pages/packages'),
        },
      ],
    },
    {
      path: '/TMHPostpaid',
      name: 'TMHPostpaid',
      component: () => import('./pages/packages/tmh-postpaid.vue'),
    },
    {
      path: '/payment-offline',
      component: () => import('./pages/payment-offline'),
      children: [
        {
          name: 'payment-offline',
          path: 'qr',
          component: () => import('./pages/payment-offline/qr'),
        },
        {
          name: 'payment-offline-fail',
          path: 'unsuccess',
          component: () => import('./pages/payment-offline/unsuccess'),
        },
      ],
    },
    {
      path: '/uppack',
      component: () => import('./pages/uppack'),
      children: [
        {
          name: 'uppack-step1',
          path: 'step1',
          component: () => import('./pages/uppack/step1'),
        },
        {
          name: 'uppack-step2',
          path: 'step2',
          component: () => import('./pages/uppack/step2'),
        },
        {
          name: 'uppack-step3',
          path: 'step3',
          component: () => import('./pages/uppack/step3'),
        },
        {
          name: 'uppack-success',
          path: 'success',
          component: () => import('./pages/uppack/success'),
        },
        {
          name: 'uppack',
          path: '',
          component: () => import('./pages/uppack/input'),
        },
      ],
    },
    {
      name: 'clmbundle',
      path: '/clmbundle',
      component: () => import('./pages/clm/product'),
    },
    {
      name: 'clmsimmnp',
      path: '/clm/simmnp',
      component: () => import('./pages/clm/product'),
    },
    {
      name: 'clmsim',
      path: '/clm/simbundle',
      component: () => import('./pages/clm/product'),
    },
    {
      name: 'clmtrueonline',
      path: '/clmtrueonline',
      component: () => import('./pages/clm/trueonline'),
    },
    {
      name: 'clmtmvhvas',
      path: '/clm/tmvhvas',
      component: () => import('./pages/clm/vas'),
    },
    {
      name: 'clmtolvas',
      path: '/clm/tolvas',
      component: () => import('./pages/clm/vas'),
    },
    {
      name: 'clmdevices',
      path: '/clm/device',
      component: () => import('./pages/clm/devices'),
    },
    {
      path: '/trueonline',
      component: () => import('./pages/trueonline'),
      children: [
        {
          name: 'trueonline-item',
          path: 'item/:id',
          component: () => import('./pages/trueonline/item/'),
        },
        {
          name: 'trueonline-address',
          path: 'address/:id',
          component: () => import('./pages/trueonline/address'),
        },
        {
          name: 'trueonline-order',
          path: 'order/:id',
          component: () => import('./pages/trueonline/order'),
        },
        {
          name: 'trueonline-success',
          path: 'success/:id',
          component: () => import('./pages/trueonline/success'),
        },
      ],
    },
    {
      path: '/pre2post',
      component: () => import('./pages/pre2post'),
      children: [
        {
          name: 'pre2post-verify',
          path: 'verify',
          component: () => import('./pages/pre2post/verify'),
        },
        {
          name: 'pre2post-listing',
          path: 'listing',
          component: () => import('./pages/pre2post/listing'),
        },
        {
          name: 'pre2post-noneligible',
          path: 'noneligible',
          component: () => import('./pages/pre2post/noneligible'),
        },
        {
          name: 'pre2post-priceplan',
          path: 'priceplan/:nas_code',
          component: () => import('./pages/pre2post/priceplan'),
        },
        {
          name: 'pre2post-address',
          path: 'address/:nas_code',
          component: () => import('./pages/pre2post/address'),
        },
        {
          name: 'pre2post-order',
          path: 'order/:nas_code',
          component: () => import('./pages/pre2post/order'),
        },
        {
          name: 'pre2post-success',
          path: 'success/:secure_key',
          component: () => import('./pages/pre2post/success'),
        },
      ],
    },
    {
      path: '/mnp',
      component: () => import('./pages/mnp'),
      children: [
        {
          name: 'mnp-verify',
          path: 'verify/:id/:code',
          component: () => import('./pages/mnp/verify'),
        },
      ],
    },
    {
      path: '/mnp-bundle',
      component: () => import('./pages/mnp'),
      children: [
        {
          name: 'mnp-bundle-verify',
          path: 'verify/:id/:inventory/:bundle',
          component: () => import('./pages/mnp/verify'),
        },
      ],
    },
    {
      path: '/mnp-auto',
      component: () => import('./pages/mnp'),
      children: [
        {
          name: 'mnp-auto-verify',
          path: 'verify/:id/:nas_code/:bundle_id',
          component: () => import('./pages/mnp/verify'),
        },
      ],
    },
    {
      path: '/offline-store/berfuntong',
      component: () => import('./pages/fundtong'),
      children: [
        {
          name: 'fundtong-login',
          path: 'login',
          component: () => import('./pages/fundtong/login'),
        },
        {
          name: 'fundtong-pre-validation',
          path: 'pre-validation',
          component: () => import('./pages/fundtong/pre-validation'),
        },
        {
          name: 'fundtong-confirm',
          path: 'confirm',
          component: () => import('./pages/fundtong/confirm'),
        },
        {
          name: 'fundtong-authen',
          path: 'authentication',
          component: () => import('./pages/fundtong/authen'),
        },
        {
          name: 'fundtong-success',
          path: 'success',
          component: () => import('./pages/fundtong/success-offline'),
        },
        {
          name: 'fundtong-resend-email',
          path: 'resend-email',
          component: () => import('./pages/fundtong/resend-email'),
        },
        {
          path: '',
          component: () => import('./pages/drlucky'),
          children: [
            {
              name: 'drlucky-home-offline',
              path: '/',
              component: () => import('./pages/drlucky/home'),
            },
            {
              name: 'drlucky-select-offline',
              path: 'select',
              component: () => import('./pages/drlucky/select'),
            },
          ],
        },
        {
          path: '/',
          name: 'main-offline',
          component: () => import('./pages/store'),
          children: [
            {
              name: 'drlucky-verify-offline',
              path: ':id/:number',
              component: () => import('./pages/store/postpaid/verify'),
            },
          ],
        },
      ],
    },
    {
      path: '/offline-store/berfuntong-zodiac',
      component: () => import('./pages/drlucky-zodiac'),
      children: [
        {
          name: 'drlucky-zodiac-home-offline',
          path: '',
          component: () => import('./pages/drlucky-zodiac/home'),
        },
      ],
    },
    {
      path: '/offline-store/berfuntong-zodiac/:id/:number',
      name: 'main-offline-2',
      component: () => import('./pages/store'),
      children: [
        {
          name: 'drlucky-zodiac-verify-offline',
          path: '',
          component: () => import('./pages/store/postpaid/verify'),
        },
      ],
    },
    {
      path: '/preview',
      component: () => import('./pages/preview'),
      children: [
        {
          name: 'device',
          path: 'device',
          component: () => import('./pages/preview/device'),
        },
        {
          name: 'tmvhsim',
          path: 'tmvhsim',
          component: () => import('./pages/preview/tmvhsim'),
        },
        {
          name: 'mnpsim',
          path: 'mnpsim',
          component: () => import('./pages/preview/mnpsim'),
        },
        {
          name: 'tolcvg',
          path: 'tolcvg',
          component: () => import('./pages/preview/tolcvg'),
        },
        {
          name: 'preview-uppack',
          path: 'uppack',
          component: () => import('./pages/preview/uppack'),
          children: [
            {
              name: 'preview-uppack-step1',
              path: 'step1',
              component: () => import('./pages/preview/uppack/step1'),
            },
            {
              name: 'preview-uppack-step2',
              path: 'step2',
              component: () => import('./pages/preview/uppack/step2'),
            },
            {
              name: 'preview-uppack-step3',
              path: 'step3',
              component: () => import('./pages/preview/uppack/step3'),
            },
          ],
        },
        {
          name: 'tmvhvas',
          path: 'tmvhvas',
          component: () => import('./pages/preview/vas'),
        },
        {
          name: 'tolvas',
          path: 'tolvas',
          component: () => import('./pages/preview/vas'),
        },
      ],
    },
    {
      name: 'paysmooth',
      path: '/paysmooth',
      component: () => import('./pages/paysmooth'),
      children: [
        {
          name: 'paysmooth-verify',
          path: ':id/',
          component: () => import('./pages/paysmooth/verify'),
        },
      ],
    },
    {
      name: 'paysmooth-payment',
      path: '/paysmooth-payment',
      component: () => import('./pages/paysmooth/payment'),
    },
    {
      name: 'checkout',
      path: '',
      component: () => import('./pages/checkout'),
      children: [
        {
          name: 'cart',
          path: 'cart',
          component: () => import('./pages/checkout/cart'),
        },
        {
          name: 'address',
          path: 'address',
          component: () => import('./pages/checkout/address'),
        },
        {
          name: 'pickup',
          path: 'pickup',
          component: () => import('./pages/checkout/pickup'),
        },
        {
          name: 'payment',
          path: 'payment',
          component: () => import('./pages/checkout/payment'),
        },
        {
          name: 'error',
          path: 'payment/error',
          component: () => import('./pages/checkout/payment/error'),
        },
        {
          name: '404',
          path: '*',
          redirect: '/home',
        },
      ],
    },
    {
      path: '*',
      redirect: '/home',
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (['profile-overview', 'profile-detail', 'profile-address', 'profile-order-tracking', 'profile-order-tracking-detail', 'profile-wish-list'].includes(to.name)) {
    const user = localStorage.getItem('true-user-id')
    if (!user) {
      next({ name: 'home-page' })
    } else {
      next()
    }
  }

  if (to.name !== 'online-store-detail') {
    $('.fixed-chatshop').removeClass('chat-shop-bottom-140').removeClass('chat-shop-hide');
    $('.assist-modal-box').removeClass('chat-shop-hide');
  }

  if (from.name === 'payment' && window.loadingPlaceorder) {
    next(false)
    return
  }
  if (to.query.lang) {
    let lang = to.query.lang
    lang = lang.toString().toLocaleLowerCase()
    lang = ['th', 'en'].includes(lang) ? lang : 'th'
    document.documentElement.lang = lang
    window.i18n.locale = lang
    window.localStorage.setItem('lang', lang)
  }
  if (to.query.code) {
    window.trueLoginLoading = true
    const code = to.query.code
    window.localStorage.setItem('true-login-code', code)
    const loginPopupName = window.localStorage.getItem('login-popup-name')
    if (loginPopupName !== window.name) {
      store.dispatch(LOGIN, { code })
        .then(() => {
          window.dispatchEvent(new Event('true-login'))
        })
    }
  }
  next()
})

export default router
