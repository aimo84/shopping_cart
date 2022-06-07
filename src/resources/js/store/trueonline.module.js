import qs from 'qs'
import ApiService from '../common/api.service'
import {
  FETCH_TOL_PRODUCTS,
  FETCH_TOL_PRODUCT,
  FETCH_TOL_ADDRESS,
  FETCH_TOL_TIMESLOT,
  TOL_REGISTER,
  FETCH_TOL_APPOINTMENT,
  FETCH_TOL_OTP_STATUS,
  FETCH_TOL_NEW_TIMESLOT,
  UPDATE_TOL_TIMESLOT
} from './actions.type'

import {
  SET_TOL_PRODUCTS,
  SET_TOL_PRODUCTS_DEMO,
  SET_TOL_PRODUCT,
  SET_TOL_PRODUCT_DEMO,
  SET_TOL_ADDRESS,
  SET_TOL_TIMESLOT,
  SET_TOL_REGISTER,
  SET_TOL_APPOINTMENT,
  SET_TOL_OTP_STATUS,
  SET_TOL_NEW_TIMESLOT,
  SET_TOL_DUE_DATE
} from './mutations.type'

const state = {
  tolProducts: {},
  tolProductsDemo: {},
  tolProduct: {},
  tolProductDemo: {},
  tolAddress: {},
  tolTimeslot: {},
  tolRegister: {},
  tolAppointment: {},
  tolOtpStatus: {},
  tolNewTimeslot: {},
  tolDueDate: {}
}

const getters = {
  tolProducts (state) {
    return state.tolProducts
  },
  tolProductsDemo (state) {
    return state.tolProductsDemo
  },
  tolProduct (state) {
    return state.tolProduct
  },
  tolProductDemo (state) {
    return state.tolProductDemo
  },
  tolAddress (state) {
    return state.tolAddress
  },
  tolTimeslot (state) {
    return state.tolTimeslot
  },
  tolRegister (state) {
    return state.tolRegister
  },
  tolAppointment (state) {
    return state.tolAppointment
  },
  tolOtpStatus (state) {
    return state.tolOtpStatus
  },
  tolNewTimeslot (state) {
    return state.tolNewTimeslot
  },
  tolDueDate (state) {
    return state.tolDueDate
  }
}

const actions = {
  [FETCH_TOL_PRODUCTS] (context, payload) {
    return new Promise((resolve, reject) => {
      const params = qs.stringify(payload)
      return ApiService.get(`/get-service-area?${params}`)
        .then(({ data }) => {
          context.commit(SET_TOL_PRODUCTS, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [FETCH_TOL_PRODUCT] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.get(`/tol-product-get-content?content_id=${payload}`)
        .then(({ data }) => {
          context.commit(SET_TOL_PRODUCT, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [FETCH_TOL_ADDRESS] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.post('/tol/get-address', payload)
        .then(({ data }) => {
          context.commit(SET_TOL_ADDRESS, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [FETCH_TOL_TIMESLOT] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.post('/tol/check-blacklist-retrieve-calendar', payload)
        .then(({ data }) => {
          context.commit(SET_TOL_TIMESLOT, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [TOL_REGISTER] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.post('/tol/register-order', payload)
        .then(({ data }) => {
          context.commit(SET_TOL_REGISTER, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [FETCH_TOL_APPOINTMENT] (context, payload) {
    return new Promise((resolve, reject) => {
      const params = qs.stringify(payload)
      return ApiService.get(`/tol/check-customer-appointment?${params}`)
        .then(({ data }) => {
          context.commit(SET_TOL_APPOINTMENT, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [FETCH_TOL_OTP_STATUS] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.post('/tol/check-otp-update-status', payload)
        .then(({ data }) => {
          context.commit(SET_TOL_OTP_STATUS, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [FETCH_TOL_NEW_TIMESLOT] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.post('/tol/retrive-new-timeslot', payload)
        .then(({ data }) => {
          context.commit(SET_TOL_NEW_TIMESLOT, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [UPDATE_TOL_TIMESLOT] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.post('/tol/change-due-date', payload)
        .then(({ data }) => {
          context.commit(SET_TOL_DUE_DATE, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  }
}

const mutations = {
  [SET_TOL_PRODUCTS] (state, tolProducts) {
    state.tolProducts = tolProducts
  },
  [SET_TOL_PRODUCTS_DEMO] (state, tolProductsDemo) {
    state.tolProductsDemo = tolProductsDemo
  },
  [SET_TOL_PRODUCT] (state, tolProduct) {
    state.tolProduct = tolProduct
  },
  [SET_TOL_PRODUCT_DEMO] (state, tolProductDemo) {
    state.tolProductDemo = tolProductDemo
  },
  [SET_TOL_ADDRESS] (state, tolAddress) {
    state.tolAddress = tolAddress
  },
  [SET_TOL_TIMESLOT] (state, tolTimeslot) {
    state.tolTimeslot = tolTimeslot
  },
  [SET_TOL_REGISTER] (state, tolRegister) {
    state.tolRegister = tolRegister
  },
  [SET_TOL_APPOINTMENT] (state, tolAppointment) {
    state.tolAppointment = tolAppointment
  },
  [SET_TOL_OTP_STATUS] (state, tolOtpStatus) {
    state.tolOtpStatus = tolOtpStatus
  },
  [SET_TOL_NEW_TIMESLOT] (state, tolNewTimeslot) {
    state.tolNewTimeslot = tolNewTimeslot
  },
  [SET_TOL_DUE_DATE] (state, tolDueDate) {
    state.tolDueDate = tolDueDate
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
