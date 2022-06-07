import ApiService from '../common/api.service'
import {
  FETCH_NEAR_ME_SEVEN_STORE
} from './actions.type'

import {
  SET_NEAR_ME_SEVEN_STORE
} from './mutations.type'

const state = {
  sevenStore: []
}

const getters = {
  sevenStore (state) {
    return state.sevenStore
  }
}

const actions = {
  [FETCH_NEAR_ME_SEVEN_STORE] (context, payload) {
    const params = payload.payload
    return new Promise((resolve, reject) => {
      return ApiService.get(`/v2/store-pickup/nearme?${params}`)
        .then(({ data }) => {
          context.commit(SET_NEAR_ME_SEVEN_STORE, { data })
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  }
}

const mutations = {
  [SET_NEAR_ME_SEVEN_STORE] (state, data) {
    state.sevenStore = data.data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
