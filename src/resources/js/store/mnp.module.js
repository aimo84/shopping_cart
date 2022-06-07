import ApiService from '../common/api.service'
import qs from 'qs'
import {
  CHECK_MNP_OTP,
  CHECK_MNP_PIN,
  CHECK_MNP_INFO,
  CREATE_MNP_PLACEORDER,
  HOLD_MNP_RANDOM_NUMBER
} from './actions.type'

import {
  SET_MNP_OTP,
  SET_MNP_PIN,
  SET_MNP_INFO,
  SET_MNP_PLACEORDER,
  SET_MNP_RANDOM_NUMBER
} from './mutations.type'

const state = {
  mnpOtp: {},
  mnpPin: {},
  mnpInfo: {},
  mnpPlaceorder: {},
  mnpRandomNumber: {}
}

const getters = {
  mnpOtp (state) {
    return state.mnpOtp
  },
  mnpPin (state) {
    return state.mnpPin
  },
  mnpInfo (state) {
    return state.mnpInfo
  },
  mnpPlaceorder (state) {
    return state.mnpPlaceorder
  },
  mnpRandomNumber (state) {
    return state.mnpRandomNumber
  }
}

const actions = {
  [CHECK_MNP_OTP] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.post('/mnp/check-otp', payload)
        .then(({ data }) => {
          context.commit(SET_MNP_OTP, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [CHECK_MNP_PIN] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.post('/mnp/verify-pin-code', payload)
        .then(({ data }) => {
          context.commit(SET_MNP_PIN, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [CHECK_MNP_INFO] (context, payload) {
    const { path } = payload
    const { data } = payload
    return new Promise((resolve, reject) => {
      return ApiService.post(`/mnp/${path}`, data)
        .then(({ data }) => {
          context.commit(SET_MNP_INFO, data)
          resolve(data)
        })
        .catch((error) => {
          context.commit(SET_MNP_INFO, {
            ...{
              status: false
            },
            ...error.data
          })
          reject(error.data)
        })
    })
  },
  [CREATE_MNP_PLACEORDER] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.post('/mnp/placeorder', payload)
        .then(({ data }) => {
          context.commit(SET_MNP_PLACEORDER, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [HOLD_MNP_RANDOM_NUMBER] (context, payload) {
    const params = qs.stringify(payload)
    return new Promise((resolve, reject) => {
      return ApiService.get(`/mnp/bundling/random/mobile/nas?${params}`)
        .then(({ data }) => {
          context.commit(SET_MNP_RANDOM_NUMBER, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  }
}
const mutations = {
  [SET_MNP_OTP] (state, mnpOtp) {
    state.mnpOtp = mnpOtp
  },
  [SET_MNP_PIN] (state, mnpPin) {
    state.mnpPin = mnpPin
  },
  [SET_MNP_INFO] (state, mnpInfo) {
    state.mnpInfo = mnpInfo
  },
  [SET_MNP_PLACEORDER] (state, mnpPlaceorder) {
    state.mnpPlaceorder = mnpPlaceorder
  },
  [SET_MNP_RANDOM_NUMBER] (state, mnpRandomNumber) {
    state.mnpRandomNumber = mnpRandomNumber
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
