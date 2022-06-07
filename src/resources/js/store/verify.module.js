import ApiService from '../common/api.service'
import {
  VERIFY,
  SIM_ACTIVATION_VERIFY,
  BUNDLE_CAMPAIGNS_VERIFY,
  PAYSMOOTH_VERIFY,
  FETCH_OTP,
  UPLOAD_EKYC,
  UPLOAD_EKYC_VHORA,
  GET_TOL_LIST,
  ACTIVATE_INSTANT_SIM,
  CREATE_INSTANT_SIM,
  SUBMIT_INSTANT_SIM
} from './actions.type'

import {
  SET_VERIFY,
  SET_SIM_ACTIVATION_VERIFY,
  SET_TOL_LIST
} from './mutations.type'

const state = {
  verify: {},
  tolList: {}
}

const getters = {
  verify (state) {
    return state.verify
  },
  simActivationVerify (state) {
    return state.simActivationVerify
  },
  tolList (state) {
    return state.tolList
  }
}

const actions = {
  [VERIFY] (context, payload) {
    const { id } = payload
    const { tmvhAuth } = payload
    const { data } = payload
    return new Promise((resolve, reject) => {
      let headers = {}
      if (tmvhAuth) headers = { headers: { 'tmvh-token': tmvhAuth } }
      return ApiService.post(`/verify/${id}`, data, headers)
        .then(({ data }) => {
          context.commit(SET_VERIFY, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [SIM_ACTIVATION_VERIFY] (context, payload) {
    const { data } = payload
    const { tmvhAuth } = payload
    return new Promise((resolve, reject) => {
      let headers = {}
      if (tmvhAuth) headers = { headers: { 'tmvh-token': tmvhAuth } }
      return ApiService.post('/sim-activation/postpaid/verify', data, headers)
        .then(({ data }) => {
          context.commit(SET_SIM_ACTIVATION_VERIFY, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [BUNDLE_CAMPAIGNS_VERIFY] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.post('/truemoveh/bundle-campaigns/verify', payload)
        .then(({ data }) => {
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [FETCH_OTP] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.get(`/wportal/otp/request?mobile_number=${payload}`)
        .then(({ data }) => {
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [UPLOAD_EKYC] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.post('/wemall/save-temp-content/save-face-recognition', payload)
        .then(({ data }) => {
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [UPLOAD_EKYC_VHORA] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.post('/save-temp-content', payload)
        .then(({ data }) => {
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [GET_TOL_LIST] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.post('/customer/get-related-list-tol', payload)
        .then(({ data }) => {
          context.commit(SET_TOL_LIST, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [ACTIVATE_INSTANT_SIM] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.post('/sim-activation/deeplink', payload)
        .then(({ data }) => {
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [CREATE_INSTANT_SIM] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.post('/sim-activation/create-sim', payload)
        .then(({ data }) => {
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [SUBMIT_INSTANT_SIM] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.post('/sim-activation/submit', payload)
        .then(({ data }) => {
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [PAYSMOOTH_VERIFY] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.post('/pay-smooth/verify', payload)
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
  [SET_VERIFY] (state, verify) {
    state.verify = verify
  },
  [SET_SIM_ACTIVATION_VERIFY] (state, simActivationVerify) {
    state.simActivationVerify = simActivationVerify
  },
  [SET_TOL_LIST] (state, tolList) {
    state.tolList = tolList
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
