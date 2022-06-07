import ApiService from '../common/api.service'
import JwtService from '../common/jwt.service'
import {
  GET_BALANCE
} from './actions.type'

import { } from './mutations.type'

const state = {}

const getters = {}

const actions = {
  [GET_BALANCE] () {
    return new Promise((resolve, reject) => {
      if (JwtService.getToken()) {
        const headers = {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${JwtService.getTrueToken()}`
          }
        }
        return ApiService.post('/cpoint/request-user', null, headers)
          .then(({ data }) => {
            resolve(data)
          })
          .catch((error) => {
            reject(error.data)
          })
      } else {
        reject(new Error())
      }
    })
  }
}

const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations
}
