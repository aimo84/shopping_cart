import ApiService from '../common/api.service'
import qs from 'qs'
import {
  FETCH_POSTPAID,
  FETCH_PACKAGES,
  FETCH_PACKAGE,
  FETCH_PACKAGE_DEMO,
  SEARCH_NUMBER,
  CHECK_NUMBER,
  FETCH_NUMBER,
  FETCH_HOROSCOPES,
  HOLD_NUMBER,
  FETCH_PRICE_PLAN,
  FETCH_NUMBER_PATTERN,
  FETCH_LUCKY9999_CONFIG,
  FECTH_POSTPAID_BANNER,
  FECTH_PACKAGES_LIST
} from './actions.type'

import {
  SET_HOROSCOPES,
  SET_PACKAGES,
  SET_PACKAGE,
  SET_PACKAGE_DEMO,
  SET_PRICE_PLAN,
  SET_LUCKY9999_CONFIG,
  SET_POSTPAID_BANNER,
  SET_PACKAGE_GROUP
} from './mutations.type'

const state = {
  horoscopes: {},
  packages: [],
  package: {},
  packageDemo: {},
  pricePlan: {},
  lucky9999Config: {},
  postpaidBanner: {},
  packagesGroup: {}
}

const getters = {
  horoscopes (state) {
    return state.horoscopes
  },
  packages (state) {
    return state.packages
  },
  package (state) {
    return state.package
  },
  packageDemo (state) {
    return state.packageDemo
  },
  pricePlan (state) {
    return state.pricePlan
  },
  postpaidBanner (state) {
    return state.postpaidBanner
  }
}

const actions = {
  [FETCH_POSTPAID] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.get(`/truemoveh/product-verify/${payload}`)
        .then(({ data }) => {
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [FETCH_PACKAGES] (context, payload) {
    const params = payload.params || payload
    const headers = payload.headers || {}
    return new Promise((resolve, reject) => {
      return ApiService.get(`/truemoveh/package/search?${params}`, null, null, headers)
        .then(({ data }) => {
          context.commit(SET_PACKAGES, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [FETCH_PACKAGE] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.get(`/truemoveh/proposition?nas_code=${payload}`)
        .then(({ data }) => {
          context.commit(SET_PACKAGE, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [FETCH_PACKAGE_DEMO] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.get('')
        .then(({ data }) => {
          const result = {
            record: [
              {
                advance_payment: 0,
                baseline: '699.00',
                campaign_code: 'YN217',
                contract: '12',
                created_at: '2020-07-02 13:25:58',
                id: '89',
                mat_category: '',
                name: 'คู่เลขเบอร์มงคล คัดพิเศษ',
                nas_code: '0064533',
                package_detail_desktop: 'https://www.wemall.com/upload/c/Truemoveh-shop/New-Artwork-121163/BerMongkol-699-Discount-Detail.jpg',
                package_detail_mobile: 'https://www.wemall.com/upload/c/Truemoveh-shop/New-Artwork-121163/BerMongkol-699-Discount-Detail.jpg',
                package_image_desktop: 'https://www.wemall.com/upload/c/Truemoveh-shop/New-Artwork-121163/BerMongkol-699-Thumbnail.jpg',
                package_image_mobile: 'https://www.wemall.com/upload/c/Truemoveh-shop/New-Artwork-121163/BerMongkol-699-Thumbnail.jpg',
                penalty: '0.00',
                pool_number: '',
                section: '3',
                sim_type: 'postpaid',
                source_type: 'sim',
                status: 'active',
                term_long: 'temp term long',
                term_short: 'คู่เลขเบอร์มงคล คัดพิเศษ',
                updated_at: '2020-11-20 12:11:21',
                verification_required: false,
                verification_type: null
              }
            ]
          }
          context.commit(SET_PACKAGE_DEMO, result)
          resolve(result)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [SEARCH_NUMBER] (context, payload) {
    const params = payload.params || payload
    const headers = payload.headers || {}
    return new Promise((resolve, reject) => {
      return ApiService.get(`/truemoveh/mobile/search?${params}`, null, null, headers)
        .then(({ data }) => {
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [FETCH_NUMBER_PATTERN] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.get('/truemoveh/mobile/pattern')
        .then(({ data }) => {
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [CHECK_NUMBER] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.get(`/truemoveh/mobiles?${payload}&skip_cache=true`)
        .then(({ data }) => {
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [FETCH_NUMBER] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.get(`/truemoveh/mobiles?skip_cache=true&available=true&mobiles=${payload}`)
        .then(({ data }) => {
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [FETCH_HOROSCOPES] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.get('/truemoveh/horoscopes')
        .then(({ data }) => {
          context.commit(SET_HOROSCOPES, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [HOLD_NUMBER] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.put(`/truemoveh/mobiles/${payload.id}?nas_code=${payload.nas_code}`)
        .then(({ data }) => {
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [FETCH_PRICE_PLAN] (context, payload) {
    const params = qs.stringify({
      ...{
        section: 'wemall',
        sim_type: 'postpaid'
      },
      ...payload.params || payload
    })
    const headers = payload.headers || {}
    return new Promise((resolve, reject) => {
      return ApiService.get(`/truemoveh/price-plan/search?${params}`, null, null, headers)
        .then(({ data }) => {
          context.commit(SET_PRICE_PLAN, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [FETCH_LUCKY9999_CONFIG] (context) {
    return new Promise((resolve, reject) => {
      return ApiService.get('/lucky9999/config')
        .then(({ data }) => {
          context.commit(SET_LUCKY9999_CONFIG, data.body)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [FECTH_POSTPAID_BANNER] (context) {
    return new Promise((resolve, reject) => {
      return ApiService.get('/wportal/content?code=truestore_banner_sim_only')
        .then(({ data }) => {
          context.commit(SET_POSTPAID_BANNER, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [FECTH_PACKAGES_LIST] (context) {
    return new Promise((resolve, reject) => {
      return ApiService.get('package-list/group')
        .then(({ data }) => {
          context.commit(SET_PACKAGE_GROUP, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  }
}

const mutations = {
  [SET_HOROSCOPES] (state, horoscopes) {
    state.horoscopes = horoscopes
  },
  [SET_PACKAGES] (state, packages) {
    state.packages = packages
  },
  [SET_PACKAGE] (state, data) {
    state.package = data
  },
  [SET_PACKAGE_DEMO] (state, data) {
    state.packageDemo = data
  },
  [SET_PRICE_PLAN] (state, pricePlan) {
    state.pricePlan = pricePlan
  },
  [SET_LUCKY9999_CONFIG] (state, data) {
    state.lucky9999Config = data
  },
  [SET_POSTPAID_BANNER] (state, data) {
    state.postpaidBanner = data
  },
  [SET_PACKAGE_GROUP] (state, data) {
    state.packagesGroup = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
