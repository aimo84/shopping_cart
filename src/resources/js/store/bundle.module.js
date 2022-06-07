import ApiService from '../common/api.service'
import {
  UPDATE_BUNDLE_CART,
  UPDATE_POSTPAID_CART
} from './actions.type'

import './mutations.type'

const state = {}

const getters = {}

const actions = {
  [UPDATE_BUNDLE_CART] (context, payload) {
    const { data } = payload
    return new Promise((resolve, reject) => {
      return ApiService.put('/wportal/cart', data)
        .then(({ data }) => {
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [UPDATE_POSTPAID_CART] (context, payload) {
    const { data } = payload
    return new Promise((resolve, reject) => {
      return ApiService.post('/wportal/cart', data)
        .then(({ data }) => {
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  }
}

const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations
}
