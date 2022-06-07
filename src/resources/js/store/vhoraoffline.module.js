import ApiService from '../common/api.service'
import {
  FETCH_OFFLINE_AUTHENTICATION,
  FETCH_OFFLINE_DEALER_INFO,
  VERIFY_SIM_OFFLINE,
  FETCH_OFFLINE_CHANNEL
} from './actions.type'
import {
  SET_OFFLINE_AUTHENTICATION,
  SET_VERIFY_SIM_OFFLINE
} from './mutations.type'

const state = {
  offlineAuthentication: {},
  verifySimOffline: {}
}

const getters = {
  offlineAuthentication (state) {
    return state.offlineAuthentication
  },
  verifySimOffline (state) {
    return state.verifySimOffline
  }
}

const actions = {
  [FETCH_OFFLINE_AUTHENTICATION] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.post('/v2/vhora/offline/authentication', payload)
        .then(({ data }) => {
          context.commit(SET_OFFLINE_AUTHENTICATION, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [FETCH_OFFLINE_DEALER_INFO] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.get('/v2/vhora/offline/dealer-info', payload)
        .then(({ data }) => {
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [VERIFY_SIM_OFFLINE] (context, payload) {
    const { data } = payload
    return new Promise((resolve, reject) => {
      return ApiService.post('/v2/vhora/offline/verify', data)
        .then(({ data }) => {
          context.commit(SET_VERIFY_SIM_OFFLINE, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [FETCH_OFFLINE_CHANNEL] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.get('/v2/vhora/offline/auth-channel', payload)
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
  [SET_OFFLINE_AUTHENTICATION] (state, offlineAuthentication) {
    state.offlineAuthentication = offlineAuthentication
  },
  [FETCH_OFFLINE_DEALER_INFO] (state, offlineDealerInfo) {
    state.offlineDealerInfo = offlineDealerInfo
  },
  [SET_VERIFY_SIM_OFFLINE] (state, verify) {
    state.verifySimOffline = verify
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
