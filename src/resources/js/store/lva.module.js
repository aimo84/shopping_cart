import ApiService from '../common/api.service'
import qs from 'qs'
import {
  FETCH_CMS_CONTENT,
  FETCH_LVA_PRODUCT_LIST,
  FECTH_LVA_POP_UP_ADVERTISEMENT,
  FETCH_PARTNER_CONTENT,
  FETCH_ALL_CONTENT
} from './actions.type'

const actions = {
  [FETCH_CMS_CONTENT] (context, payload) {
    const params = qs.stringify({
      ...payload
    })
    return new Promise((resolve, reject) => {
      return ApiService.get(`/wportal/content?${params}`)
        .then(({ data }) => {
          resolve(data.data.record.sections[0].contents)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },

  [FETCH_LVA_PRODUCT_LIST] (context, payload) {
    const params = qs.stringify({ ...payload })
    return new Promise((resolve, reject) => {
      return ApiService.get(`/search/product?${params}`)
        .then(({ data }) => {
          resolve(data.data.record)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },

  [FECTH_LVA_POP_UP_ADVERTISEMENT] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.get(`/advertisement`)
        .then(({ data }) => {
          resolve(data.data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },

  [FETCH_PARTNER_CONTENT] (context, payload) {
    const params = payload
    return new Promise((resolve, reject) => {
      return ApiService.get(`/content-partner/${params}`)
        .then(({ data }) => {
          resolve(data.data.record)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },

  [FETCH_ALL_CONTENT] (context, payload) {
    const params = qs.stringify({
      ...payload
    })
    return new Promise((resolve, reject) => {
      return ApiService.get(`/level-a?${params}`)
        .then(({ data }) => {
          resolve(data.body)
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
