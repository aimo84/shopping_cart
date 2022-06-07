import ApiService from '../common/api.service'
import qs from 'qs'
import axios from 'axios'

import {
  FETCH_HEADER_BAR,
  FETCH_MIDDLE_BAR,
  FETCH_TOP_BAR
} from './actions.type'
import {
  SET_HEADER_BAR,
  SET_MIDDLE_BAR,
  SET_TOP_BAR
} from './mutations.type'

const state = {
  headerBar: [],
  middleBar: [],
  topBar: []
}

const getters = {
  headerBar (state) {
    return state.headerBar
  },
  middleBar (state) {
    return state.middleBar
  },
  topBar (state) {
    return state.topBar
  }
}

const actions = {
  [FETCH_HEADER_BAR] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.get('/wportal/content/main-menu')
        .then(({ data }) => {
          context.commit(SET_HEADER_BAR, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [FETCH_MIDDLE_BAR] (context, payload) {
    const { lang } = payload
    return new Promise((resolve, reject) => {
      return axios.get(`https://trueweb.ascendcorp.com:1338/product-services?_locale=${lang}`, {
        headers: {
          Authorization: ''
        }
      })
        .then(({ data }) => {
          context.commit(SET_MIDDLE_BAR, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [FETCH_TOP_BAR] (context, payload) {
    const { lang } = payload
    return new Promise((resolve, reject) => {
      return axios.get(`https://trueweb.ascendcorp.com:1338/brand-headers?_locale=${lang}`, {
        headers: {
          Authorization: ''
        }
      })
        .then(({ data }) => {
          context.commit(SET_TOP_BAR, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  }
}

const mutations = {
  [SET_HEADER_BAR] (state, headerBar) {
    state.headerBar = headerBar
  },
  [SET_MIDDLE_BAR] (state, middleBar) {
    state.middleBar = middleBar
  },
  [SET_TOP_BAR] (state, topBar) {
    state.topBar = topBar
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
