import ApiService from '../common/api.service'
import JwtService from '../common/jwt.service'
import {
  SET_PLACE_ORDER,
  SET_MNP,
  CREATE_PLACEORDER,
  CREATE_PRE_EKYC_PLACEORDER,
  CREATE_ENT_PACK_PLACEORDER,
  CREATE_PRE2POST_PLACEORDER,
  FETCH_PRE2POST_PLACEORDER,
  CREATE_PLACEORDER_OFFLINE,
  OFFLINE_THANK_YOU,
  SET_CREDIT_CARD_DATA
} from './actions.type'

import {
  SET_PRE2POST_PLACEORDER,
  SET_PRE2POST_ORDER,
  SET_PLACE_ORDER_DATA,
  SET_IS_MNP
} from './mutations.type'

const state = {
  pre2postPlaceorder: {},
  pre2postOrder: {},
  placeOrderData: {},
  isMnp: false
}

const getters = {
  pre2postPlaceorder (state) {
    return state.pre2postPlaceorder
  },
  pre2postOrder (state) {
    return state.pre2postOrder
  },
  placeOrderData (state) {
    return state.placeOrderData
  },
  isMnp (state) {
    return state.isMnp
  }
}

const actions = {
  [CREATE_PLACEORDER] (context, payload) {
    return new Promise((resolve, reject) => {
      const token = JwtService.getTrueToken()
      const headers = token ? {
        headers: {
          Authorization: `Bearer ${token}`
        }
      } : null
      return ApiService.post('/placeorder', payload, headers)
        .then(({ data }) => {
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [CREATE_PRE_EKYC_PLACEORDER] (context, payload) {
    return new Promise((resolve, reject) => {
      const token = JwtService.getTrueToken()
      const headers = token ? {
        headers: {
          Authorization: `Bearer ${token}`
        }
      } : null
      return ApiService.post('/pre_ekyc/placeorder', payload, headers)
        .then(({ data }) => {
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [CREATE_ENT_PACK_PLACEORDER] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.post('/typhoon/ent_pack/placeorder', payload)
        .then(({ data }) => {
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [CREATE_PRE2POST_PLACEORDER] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.post('/placeorder/pre_to_post/ss', payload)
        .then(({ data }) => {
          context.commit(SET_PRE2POST_PLACEORDER, data)
          resolve(data)
        })
        .catch((error) => {
          context.commit(SET_PRE2POST_PLACEORDER, error.data)
          reject(error.data)
        })
    })
  },
  [FETCH_PRE2POST_PLACEORDER] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.get(`/get/order/pre_to_post/ss/${payload}`)
        .then(({ data }) => {
          context.commit(SET_PRE2POST_ORDER, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  [SET_PLACE_ORDER] (context, data) {
    context.commit(SET_PLACE_ORDER_DATA, data)
  },
  [SET_MNP] (context, data) {
    context.commit(SET_IS_MNP, data)
  },
  [CREATE_PLACEORDER_OFFLINE] (context, payload) {
    return new Promise((resolve, reject) => {
      const token = JwtService.getTrueToken()
      const headers = token ? {
        headers: {
          Authorization: `Bearer ${token}`
        }
      } : null
      return ApiService.post('/v2/vhora/offline/placeorder', payload, headers)
        .then(({ data }) => {
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [OFFLINE_THANK_YOU] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.post('/success', payload, {})
        .then(({ data }) => {
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [SET_CREDIT_CARD_DATA] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.post('/placeorder/credit_card', payload, {})
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
  [SET_PRE2POST_PLACEORDER] (state, pre2postPlaceorder) {
    state.pre2postPlaceorder = pre2postPlaceorder
  },
  [SET_PRE2POST_ORDER] (state, pre2postOrder) {
    state.pre2postOrder = pre2postOrder
  },
  [SET_PLACE_ORDER_DATA] (state, placeOrderData) {
    state.placeOrderData = placeOrderData
  },
  [SET_IS_MNP] (state, isMnp) {
    state.isMnp = isMnp
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
