import ApiService from '../common/api.service'
import {
  FETCH_ADDRESS,
  GET_USER_ADDRESS,
  CREATE_USER_ADDRESS,
  EDIT_USER_ADDRESS,
  DELETE_USER_ADDRESS,
  SET_DEFAULT_USER_ADDRESS,
  GET_SHIPPING_ADDRESS,
  CREATE_SHIPPING_ADDRESS,
  EDIT_SHIPPING_ADDRESS,
  DELETE_SHIPPING_ADDRESS
} from './actions.type'

import {
  SET_ADDRESS,
  SET_SHIPPING_ADDRESS,
  PUSH_SHIPPING_ADDRESS,
  REMOVE_SHIPPING_ADDRESS
} from './mutations.type'
import JwtService from '../common/jwt.service'

const state = {
  address: {
    th: {
      province: {},
      city: {},
      district: {}
    },
    en: {
      province: {},
      city: {},
      district: {}
    }
  },
  shippingAddress: []
}

const getters = {
  address (state) {
    return state.address
  }
}

const actions = {
  [FETCH_ADDRESS] (context, payload) {
    const { type } = payload
    const { params } = payload
    return new Promise((resolve, reject) => {
      return ApiService.get(`/address/suggestion/${type}?${params}`)
        .then(({ data }) => {
          context.commit(SET_ADDRESS, { data, type, params })
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [GET_USER_ADDRESS] (context, payload) {
    const userId = payload?.user_id
    return new Promise((resolve, reject) => {
      if (JwtService.getToken()) {
        ApiService.setHeader()
        return ApiService.get(`/user/${userId}/address`, payload)
          .then(({ data }) => {
            resolve(data)
          })
          .catch((error) => {
            reject(error.data)
          })
      }
    })
  },
  [CREATE_USER_ADDRESS] (context, payload) {
    const userId = payload?.user_id
    return new Promise((resolve, reject) => {
      if (JwtService.getToken()) {
        ApiService.setHeader()
        return ApiService.post(`/user/${userId}/address`, payload)
          .then(({ data }) => {
            resolve(data)
          })
          .catch((error) => {
            reject(error.data)
          })
      }
    })
  },
  [EDIT_USER_ADDRESS] (context, payload) {
    const userId = payload?.user_id
    return new Promise((resolve, reject) => {
      if (JwtService.getToken()) {
        ApiService.setHeader()
        return ApiService.put(`/user/${userId}/address`, payload)
          .then(({ data }) => {
            resolve(data)
          })
          .catch((error) => {
            reject(error.data)
          })
      }
    })
  },
  [DELETE_USER_ADDRESS] (context, payload) {
    const userId = payload?.user_id
    return new Promise((resolve, reject) => {
      if (JwtService.getToken()) {
        ApiService.setHeader()
        return ApiService.delete(`/user/${userId}/address`, payload)
          .then(({ data }) => {
            resolve(data)
          })
          .catch((error) => {
            reject(error.data)
          })
      }
    })
  },
  [SET_DEFAULT_USER_ADDRESS] (context, payload) {
    const userId = payload?.user_id
    return new Promise((resolve, reject) => {
      if (JwtService.getToken()) {
        ApiService.setHeader()
        return ApiService.put(`/user/${userId}/default/address`, payload)
          .then(({ data }) => {
            resolve(data)
          })
          .catch((error) => {
            reject(error.data)
          })
      }
    })
  },
  [GET_SHIPPING_ADDRESS] (context, payload) {
    const userId = payload?.user_id
    return new Promise((resolve, reject) => {
      ApiService.setHeader()
      return ApiService.get(`/shipping_address/user/${userId}`, payload)
        .then(({ data }) => {
          const record = data?.record || []
          context.commit(SET_SHIPPING_ADDRESS, record)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [CREATE_SHIPPING_ADDRESS] (context, payload) {
    const userId = payload?.user_id
    return new Promise((resolve, reject) => {
      ApiService.setHeader()
      return ApiService.post(`/shipping_address/user/${userId}`, payload)
        .then(({ data }) => {
          const newAddress = {
            ...data?.data,
            newAddress: true,
            address_default: +(data?.data?.address_default || 0)
          }
          context.commit(PUSH_SHIPPING_ADDRESS, newAddress)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [EDIT_SHIPPING_ADDRESS] (context, payload) {
    const userId = payload?.user_id
    const addressId = payload?.address_id
    return new Promise((resolve, reject) => {
      ApiService.setHeader()
      return ApiService.put(`/shipping_address/user/${userId}/address/${addressId}`, payload)
        .then(({ data }) => {
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [DELETE_SHIPPING_ADDRESS] (context, payload) {
    const userId = payload?.user_id
    const addressId = payload?.address_id
    return new Promise((resolve, reject) => {
      ApiService.setHeader()
      return ApiService.delete(`/shipping_address/user/${userId}/address/${addressId}`, payload)
        .then(({ data }) => {
          context.commit(REMOVE_SHIPPING_ADDRESS, data?.data?.id)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  }
}

const mutations = {
  [SET_ADDRESS] (state, data) {
    const types = {
      province: 'country_id',
      city: 'province_id',
      district: 'city_id'
    }
    const param = new URLSearchParams(data.params)
    const id = param.get(types[data.type])
    const lang = param.get('language')
    state.address[lang][data.type][id] = data.data
  },
  [SET_SHIPPING_ADDRESS] (state, addresses) {
    state.shippingAddress = addresses
  },
  [PUSH_SHIPPING_ADDRESS] (state, addresses) {
    state.shippingAddress.push(addresses)
  },
  [REMOVE_SHIPPING_ADDRESS] (state, id) {
    const deleteIndex = state.shippingAddress.findIndex(e => +e.id === +id)
    state.shippingAddress.splice(deleteIndex, 1)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
