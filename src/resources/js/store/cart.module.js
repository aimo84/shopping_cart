import ApiService from '../common/api.service'
import JwtService from '../common/jwt.service'
import qs from 'qs'
import {
  GENERATE_CART,
  FETCH_CART,
  FETCH_PRIVILEGE_CART,
  UPDATE_CART,
  POST_UPDATE_CART,
  DELETE_CART,
  UPDATE_ENT_PACK
} from './actions.type'
import {
  SET_CART
} from './mutations.type'

const state = {
  cart: {}
}

const getters = {
  cart (state) {
    return state.cart
  }
}

const actions = {
  [GENERATE_CART] (context, payload) {
    return new Promise((resolve, reject) => {
      let headers
      const token = JwtService.getTrueToken()
      if (token) headers = { headers: { Authorization: `Bearer ${token}` } }
      return ApiService.post('/ecom/cart', payload, headers)
        .then(({ data }) => {
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [FETCH_CART] (context, payload) {
    const { id } = payload
    const { paysmoothToken } = payload
    const params = qs.stringify({
      d: new Date().getTime(),
      coupon_code: payload.coupon_code,
      payment_channel: payload.payment_channel,
      gateway: payload.gateway
    })
    const headers = {}
    if (paysmoothToken) headers['paysmooth-token'] = paysmoothToken
    return new Promise((resolve, reject) => {
      return ApiService.get(`/wportal/cart/${id}?${params}`, null, null, headers)
        .then(({ data }) => {
          context.commit(SET_CART, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [FETCH_PRIVILEGE_CART] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.get(`/privilege/${payload}`)
        .then(({ data }) => {
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [UPDATE_CART] (context, payload) {
    const { id } = payload
    const { data } = payload
    return new Promise((resolve, reject) => {
      const headers = { headers: {} }
      const token = JwtService.getTrueToken()
      if (token) headers.headers.Authorization = `Bearer ${token}`
      ApiService.put(`/ecom/cart/${id}`, data, headers)
        .then(({ data }) => {
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [POST_UPDATE_CART] (context, payload) {
    const { id } = payload
    const { data } = payload
    return new Promise((resolve, reject) => {
      const headers = { headers: {} }
      const token = JwtService.getTrueToken()
      if (token) headers.headers.Authorization = `Bearer ${token}`
      ApiService.post(`/ecom/cart/${id}`, data, headers)
        .then(({ data }) => {
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [DELETE_CART] (context, payload) {
    const { id } = payload
    const { data } = payload
    return new Promise((resolve, reject) => {
      return ApiService.delete(`/ecom/cart/${id}`, data)
        .then(({ data }) => {
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [UPDATE_ENT_PACK] (context, payload) {
    const { data } = payload
    const { tmvhAuth } = payload
    return new Promise((resolve, reject) => {
      const config = { headers: { 'tmvh-token': tmvhAuth } }
      ApiService.put('typhoon/ent_pack', data, config)
        .then(({ data }) => {
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  }
}

const mutations = {
  [SET_CART] (state, cart) {
    state.cart = cart
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
