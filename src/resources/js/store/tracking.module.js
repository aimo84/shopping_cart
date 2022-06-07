import ApiService from '../common/api.service'
import {
  FETCH_TRACKING,
  FETCH_ORDER_HISTORY,
  FETCH_TRACKING_SUCCESS,
  FETCH_PDF,
  FETCH_QR_CODE,
  ORDER_HISTORY,
  UPDATE_LOG
} from './actions.type'

import {
  SET_TRACKING_SUCCESS
} from './mutations.type'

const state = {
  trackingSuccess: {}
}

const getters = {
  trackingSuccess (state) {
    return state.trackingSuccess
  }
}

const actions = {
  [FETCH_TRACKING] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.get(`/tracking/${payload}`)
        .then(({ data }) => {
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [FETCH_ORDER_HISTORY] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.get(`/order/history?secure_key=${payload}`)
        .then(({ data }) => {
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [FETCH_TRACKING_SUCCESS] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.get(`/tracking/success/${payload}`)
        .then(({ data }) => {
          context.commit(SET_TRACKING_SUCCESS, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [FETCH_PDF] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.get(`/tracking/success/pdf/${payload}`, {}, 'blob')
        .then(({ data }) => {
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [FETCH_QR_CODE] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.get('/qrcode', payload)
        .then(({ data }) => {
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [ORDER_HISTORY] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.get('/order/history', payload)
        .then(({ data }) => {
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [UPDATE_LOG] (context, payload) {
    return new Promise((resolve, reject) => {
      ApiService.post('/logger', payload)
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
  [SET_TRACKING_SUCCESS] (state, trackingSuccess) {
    state.trackingSuccess = trackingSuccess
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
