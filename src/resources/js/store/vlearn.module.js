import ApiService from '../common/api.service'
import {
  FETCH_UNIVERSITY,
  VERIFY_VLEARN
} from './actions.type'

import {
  SET_UNIVERSITY
} from './mutations.type'

const state = {
  university: []
}

const getters = {
  university (state) {
    return state.university
  }
}

const actions = {
  [FETCH_UNIVERSITY] (context) {
    return new Promise((resolve, reject) => {
      return ApiService.get('/university')
        .then(({ data }) => {
          context.commit(SET_UNIVERSITY, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [VERIFY_VLEARN] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.post('/register-campaign/vlearn', payload)
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
  [SET_UNIVERSITY] (state, university) {
    state.university = university
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
