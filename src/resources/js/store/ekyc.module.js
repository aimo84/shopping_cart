import ApiService from '../common/api.service'
import {
  CREATE_NEW_EKYC,
  FETCH_EKYC_STATUS,
  FETCH_PRE_TO_POST_EKYC
} from './actions.type'

import {
  SET_NEW_EKYC,
  SET_EKYC_STATUS,
  SET_PRE_TO_POST_EKYC
} from './mutations.type'

const state = {
  newEkyc: {},
  ekycStatus: {},
  preToPostEkycStatus: {}
}

const getters = {
  newEkyc (state) {
    return state.newEkyc
  },
  ekycStatus (state) {
    return state.ekycStatus
  },
  preToPostEkycStatus (state) {
    return state.preToPostEkycStatus
  }
}

const actions = {
  [CREATE_NEW_EKYC] (context, payload) {
    return new Promise((resolve, reject) => {
      const headers = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      return ApiService.postJson('/creditok/create-application', payload, headers)
        .then(({ data }) => {
          context.commit(SET_NEW_EKYC, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [FETCH_EKYC_STATUS] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.get(`/creditok/get-status/${payload}`)
        .then(({ data }) => {
          context.commit(SET_EKYC_STATUS, data)
          resolve(data)
        })
        .catch((error) => {
          context.commit(SET_EKYC_STATUS, error.data)
          reject(error.data)
        })
    })
  },
  [FETCH_PRE_TO_POST_EKYC] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.post('check/pre_to_post', payload)
        .then(({ data }) => {
          context.commit(SET_PRE_TO_POST_EKYC, data)
          resolve(data)
        })
        .catch((error) => {
          context.commit(SET_PRE_TO_POST_EKYC, error.data)
          reject(error.data)
        })
    })
  }
}

const mutations = {
  [SET_NEW_EKYC] (state, newEkyc) {
    state.newEkyc = newEkyc
  },
  [SET_EKYC_STATUS] (state, ekycStatus) {
    state.ekycStatus = ekycStatus
  },
  [SET_PRE_TO_POST_EKYC] (state, preToPostEkycStatus) {
    state.preToPostEkycStatus = preToPostEkycStatus
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
