import ApiService from '../common/api.service'
import {
  UPDATE_PROFILE
} from './actions.type'

const actions = {
  [UPDATE_PROFILE] (context, payload) {
    return new Promise((resolve, reject) => {
      if (JwtService.getToken()) {
        ApiService.setHeader()
        return ApiService.put(`/user/${userId}/profile`, payload)
          .then(({ data }) => {
            resolve(data)
          })
          .catch((error) => {
            reject(error.data)
          })
      }
    })
  }
}

export default {
  actions
}
