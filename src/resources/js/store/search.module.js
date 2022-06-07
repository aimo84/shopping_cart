import ApiService from '../common/api.service'

import {
  GET_SEARCH_SUGGEST,
  GET_HISTORY_SEARCH,
  CLEAR_HISTORY_SEARCH,
  SET_HISTORY_SEARCH
} from './actions.type'

const actions = {
  [GET_SEARCH_SUGGEST] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.get('/v2/search/suggestion', payload)
        .then(({ data }) => {
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [GET_HISTORY_SEARCH] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.get('/v2/search/history')
        .then(({ data }) => {
          resolve(data.data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [CLEAR_HISTORY_SEARCH] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.delete('/v2/search/history')
        .then(({ data }) => {
          resolve(data.data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [SET_HISTORY_SEARCH] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.post('/v2/search/history', payload)
        .then(({ data }) => {
            resolve(data.data)
        })
        .catch((error) => {
            reject(error.data)
        })
    })
  },
}

export default {
  actions
}
