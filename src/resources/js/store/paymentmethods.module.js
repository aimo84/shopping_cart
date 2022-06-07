import ApiService from '../common/api.service'
import qs from 'qs'
import { GET_PAYMENT_METHODS
} from './actions.type'

const actions = {
    [GET_PAYMENT_METHODS] (context, payload) {
      const params = qs.stringify(payload)
      return new Promise((resolve, reject) => {
        return ApiService.get(`/v2/payment-methods?${params}`)
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