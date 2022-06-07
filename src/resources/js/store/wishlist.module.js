import ApiService from '../common/api.service'
import {
  GET_WISHLIST,
  DELETE_WISHLIST,
  ADD_WISHLIST
} from './actions.type'

const actions = {
  [GET_WISHLIST] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.get('/v2/wishlist', payload)
        .then(({ data }) => {
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [DELETE_WISHLIST] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.delete('/v2/wishlist', payload)
        .then(({ data }) => {
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [ADD_WISHLIST] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.post('/v2/wishlist', payload)
        .then(({ data }) => {
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  }
}

export default {
  actions
}
