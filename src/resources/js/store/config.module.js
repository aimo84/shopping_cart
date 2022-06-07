import ApiService from '../common/api.service'
import {
  FETCH_VERIFY_CONFIG
} from './actions.type'

import {
  SET_VERIFY_CONFIG
} from './mutations.type'

const state = {
  verifyConfig: {}
}

const getters = {
  verifyConfig (state) {
    return state.verifyConfig
  }
}

const actions = {
  [FETCH_VERIFY_CONFIG] (context) {
    return new Promise((resolve, reject) => {
      return ApiService.get('json/product/verify/trueid')
        .then(({ data }) => {
          context.commit(SET_VERIFY_CONFIG, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  }
}

const mutations = {
  [SET_VERIFY_CONFIG] (state, data) {
    state.verifyConfig = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
