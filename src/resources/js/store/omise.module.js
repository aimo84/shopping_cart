import ApiService from '../common/api.service'
import qs from 'qs'
import {
  GET_TOGGLE_OMISE
} from './actions.type'

const actions = {
  [GET_TOGGLE_OMISE] (context, payload) {
    const params = qs.stringify(payload)
    return new Promise((resolve, reject) => {
      return ApiService.get(`/toggle/omise?${params}`)
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
