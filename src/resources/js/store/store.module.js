import ApiService from '../common/api.service'
import qs from 'qs'
import {
  FETCH_C_CAMPAIGN,
  FETCH_FLASHSALE,
  FETCH_SHOP_CONFIG,
  FETCH_STORE_CONTENT,
  FETCH_STORE_BANNER,
  FETCH_STORE_FILTER,
  SEARCH_STORE,
  SEARCH_STORE_SLUG,
  COMMON_METADATA_STORE,
  VERIFY_PRODUCT_DATA,
  VERIFY_PRICE_PLANS_DATA,
  VERIFY_SELECTED_PRICE_PLAN_DATA,
  VERIFY_MOBILE_NUMBER_DATA,
  VERIFY_RESULT_DATA,
  FETCH_PARTNERS
} from './actions.type'
import {
  SET_C_CAMPAIGN,
  SET_FLASHSALE,
  SET_METADATA_STORE,
  SET_STORE_BANNER,
  SET_STORE_FILTER,
  SET_STORE,
  SET_SHOP_CONFIG,
  SET_VERIFY_PRODUCT_DATA,
  SET_VERIFY_PRICE_PLANS_DATA,
  SET_VERIFY_SELECTED_PRICE_PLAN_DATA,
  SET_VERIFY_MOBILE_NUMBER_DATA,
  SET_VERIFY_RESULT_DATA,
  SET_PARTNERS
} from './mutations.type'

const state = {
  banner: {},
  filter: {},
  store: {},
  metaData: {},
  shop: {},
  productData: {},
  pricePlansData: {},
  selectedPricePlanData: {},
  verifyMobileNumber: Number,
  verifyResultData: {},
  flashsale: {},
}

const getters = {
  banner (state) {
    return state.banner
  },
  filter (state) {
    return state.filter
  },
  store (state) {
    return state.store
  },
  metaData (state) {
    return state.metaData
  },
  shop (state) {
    return state.shop
  },
  productData (state) {
    return state.productData
  },
  pricePlansData (state) {
    return state.pricePlansData
  },
  selectedPricePlanData (state) {
    return state.selectedPricePlanData
  },
  verifyMobileNumberData (state) {
    return state.verifyMobileNumber
  },
  verifyResultData (state) {
    return state.verifyResultData
  },
  flashsale (state) {
    return state.flashsale
  },
  partners (state) {
    return state.partners
  }
}

const actions = {
  [VERIFY_PRODUCT_DATA] (context, payload) {
    context.commit(SET_VERIFY_PRODUCT_DATA, payload)
  },
  [VERIFY_PRICE_PLANS_DATA] (context, payload) {
    context.commit(SET_VERIFY_PRICE_PLANS_DATA, payload)
  },
  [VERIFY_SELECTED_PRICE_PLAN_DATA] (context, payload) {
    context.commit(SET_VERIFY_SELECTED_PRICE_PLAN_DATA, payload)
  },
  [VERIFY_MOBILE_NUMBER_DATA] (context, payload) {
    context.commit(SET_VERIFY_MOBILE_NUMBER_DATA, payload)
  },
  [VERIFY_RESULT_DATA] (context, payload) {
    context.commit(SET_VERIFY_RESULT_DATA, payload)
  },

  [FETCH_PARTNERS]  (context, payload) {
    const params = qs.stringify({
      ...payload
    })
    return new Promise((resolve, reject) => {
      return ApiService.get(`/wportal/content?${params}`)
        .then(({ data }) => {
          context.commit(SET_PARTNERS, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [FETCH_C_CAMPAIGN]  (context, payload) {
    const { id } = payload
    return new Promise((resolve, reject) => {
      return ApiService.get(`/wportal/campaign/${id}`, payload)
        .then(({ data }) => {
          context.commit(SET_C_CAMPAIGN, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [FETCH_STORE_BANNER] (context, payload) {
    const params = qs.stringify({
      ...payload,
      ...{
      }
    })
    return new Promise((resolve, reject) => {
      return ApiService.get(`/wportal/content/banner?${params}`)
        .then(({ data }) => {
          context.commit(SET_STORE_BANNER, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [FETCH_STORE_CONTENT] (context, payload) {
    const params = qs.stringify({
      ...payload,
      ...{
      }
    })
    return new Promise((resolve, reject) => {
      return ApiService.get(`/wportal/content?${params}`)
        .then(({ data }) => {
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [FETCH_STORE_FILTER] (context, payload) {
    const params = qs.stringify({
      ...payload,
      ...{
        section: 'wemall'
      }
    })
    return new Promise((resolve, reject) => {
      return ApiService.get(`/search-v2/filters?${params}`)
        .then(({ data }) => {
          context.commit(SET_STORE_FILTER, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [SEARCH_STORE] (context, payload) {
    const params = qs.stringify({
      ...payload.params || payload,
      ...{
        section: 'wemall'
      }
    }, { arrayFormat: 'comma' })
    const headers = payload.headers || {}
    return new Promise((resolve, reject) => {
      return ApiService.get(`/search/product?${params}`, null, null, headers)
        .then(({ data }) => {
          context.commit(SET_STORE, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [SEARCH_STORE_SLUG] (context, payload) {

    const params=qs.parse({
          payload
    })
    return new Promise((resolve, reject) => {
    return ApiService.get(`/content-list/${payload}`)
    .then(({ data }) => {
      resolve(data)
    })
    .catch((error) => {
      reject(error.data)
    })
  })
  },

  [COMMON_METADATA_STORE] (context, payload) {
    const params = qs.stringify({
      ...payload.params || payload,
      ...{
        section: 'wemall'
      }
    }, { arrayFormat: 'comma' })
    const headers = payload.headers || {}

    return new Promise((resolve, reject) => {
      return ApiService.get(`/wportal/content/metadata?${params}`, null, null, headers)
        .then(({ data }) => {
          context.commit(SET_METADATA_STORE, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },

  [FETCH_SHOP_CONFIG] (context, payload) {
    const params = qs.stringify(payload)
    return new Promise((resolve, reject) => {
      return ApiService.get(`/shop/config?${params}`)
        .then(({ data }) => {
          context.commit(SET_SHOP_CONFIG, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [FETCH_FLASHSALE] (context, payload) {
    const params = qs.stringify(payload)
    return new Promise((resolve, reject) => {
      return ApiService.get(`/wportal/campaign/flashsale?${params}`)
        .then(({ data }) => {
          context.commit(SET_FLASHSALE, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  }
}

const mutations = {
  [SET_PARTNERS] (state, partners) {
    state.partners = partners
  },
  [SET_C_CAMPAIGN] (state, campaign) {
    state.campaign = campaign
  },
  [SET_STORE_BANNER] (state, banner) {
    state.banner = banner
  },
  [SET_STORE_FILTER] (state, filter) {
    state.filter = filter
  },
  [SET_STORE] (state, store) {
    state.store = store
  },
  [SET_METADATA_STORE] (state, metaData) {
    state.metaData = metaData
  },
  [SET_SHOP_CONFIG] (state, shop) {
    state.shop = shop
  },
  [SET_VERIFY_PRODUCT_DATA] (state, productData) {
    state.productData = productData
  },
  [SET_VERIFY_PRICE_PLANS_DATA] (state, pricePlansData) {
    state.pricePlansData = pricePlansData
  },
  [SET_VERIFY_SELECTED_PRICE_PLAN_DATA] (state, selectedPricePlanData) {
    state.selectedPricePlanData = selectedPricePlanData
  },
  [SET_VERIFY_MOBILE_NUMBER_DATA] (state, verifyMobileNumber) {
    state.verifyMobileNumber = verifyMobileNumber
  },
  [SET_VERIFY_RESULT_DATA] (state, verifyResultData) {
    state.verifyResultData = verifyResultData
  },
  [SET_FLASHSALE] (state, flashsale) {
    state.flashsale = flashsale
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
