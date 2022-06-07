import ApiService from '../common/api.service'
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCT,
  FETCH_PRODUCT_INFO,
  FETCH_PRODUCT_STATUS,
  FETCH_PRODUCT_VERIFY_ESIM
} from './actions.type'
import {
  SET_PRODUCTS,
  SET_PRODUCT,
  SET_PRODUCT_INFO,
  SET_PRODUCT_STATUS,
  SET_PRODUCT_SIM
} from './mutations.type'

const state = {
  products: {},
  product: {},
  productInfo: {},
  productInfoDemo: {},
  productStatus: {},
  productSim: {}
}

const getters = {
  products (state) {
    return state.products
  },
  product (state) {
    return state.product
  },
  productInfo (state) {
    return state.productInfo
  },
  productInfoDemo (state) {
    return state.productInfoDemo
  }
}

const actions = {
  [FETCH_PRODUCTS] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.get('/ecom/products')
        .then(({ data }) => {
          context.commit(SET_PRODUCTS, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [FETCH_PRODUCT] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.get(`/ecom/products/${payload}`)
        .then(({ data }) => {
          context.commit(SET_PRODUCT, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [FETCH_PRODUCT_INFO] (context, payload) {
    const { id } = payload
    const { tmvhAuth, paysmoothToken, type, useThaiId } = payload
    return new Promise((resolve, reject) => {
      const headers = {}
      if (tmvhAuth) headers['tmvh-token'] = tmvhAuth
      if (paysmoothToken) headers['paysmooth-token'] = paysmoothToken
      if (type) headers.type = type
      if (useThaiId) headers['use-thai-id'] = useThaiId
      return ApiService.get(`/wportal/product/${id || payload}`, null, null, headers)
        .then(({ data }) => {
          context.commit(SET_PRODUCT_INFO, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [FETCH_PRODUCT_STATUS] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.post('/portal-v2/promotion-allow-add-cart', payload)
        .then(({ data }) => {
          context.commit(SET_PRODUCT_STATUS, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [FETCH_PRODUCT_VERIFY_ESIM] (context, payload) {
    const { id } = payload
    return new Promise((resolve, reject) => {
      return ApiService.get(`/product-verify-esim/${id}`)
        .then(({ data }) => {
          context.commit(SET_PRODUCT_SIM, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  }
}

const mutations = {
  [SET_PRODUCTS] (state, products) {
    state.products = products
  },
  [SET_PRODUCT] (state, product) {
    state.product = product
  },
  [SET_PRODUCT_INFO] (state, productInfo) {
    state.productInfo = productInfo
  },
  [SET_PRODUCT_STATUS] (state, productStatus) {
    state.productStatus = productStatus
  },
  [SET_PRODUCT_SIM] (state, productSim) {
    state.productSim = productSim
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
