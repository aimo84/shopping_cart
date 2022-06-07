import ApiService from '../common/api.service'

import {
  SEND_SMS,
  SALE_SHOP_DATA,
  SHOP_CONFIG_DATA,
  CREATE_QR,
  SHOP_CONFIG_ALIAS,
  VALIDATE_SHOP_CODE
} from './actions.type'

const actions = {
  [SEND_SMS] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.post('/v2/sale/sms', payload)
        .then(({ data }) => {
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },

  [SHOP_CONFIG_DATA] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.get(`/sale/config/${payload}`)
        .then(({ data }) => {
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },

  [SALE_SHOP_DATA] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.get(`/sale/shop/${payload}`)
        .then(({ data }) => {
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [SHOP_CONFIG_ALIAS] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.get('/sale/config')
        .then(({ data }) => {
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [CREATE_QR] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.post('/v2/sale/qr', payload)
        .then(({ data }) => {
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [VALIDATE_SHOP_CODE] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.post('/v2/sale/validate-shop-code', payload)
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
