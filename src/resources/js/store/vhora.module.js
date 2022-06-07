import ApiService from '../common/api.service'
import {
  REQUEST_VHORA_OTP,
  VERIFY_VHORA,
  POST_VHORA_PERSONALIZE_FUNTONG,
  POST_VHORA_MOBILE,
  POST_VHORA_ZODIAC_MOBILE,
  FETCH_FORTUNE_FUNTONG,
  POST_VHORA_FUNTONG,
  POST_VHORA_RESEND_EMAIL,
  POST_PROPHECY
} from './actions.type'

import {
  SET_VHORA_OTP,
  SET_VHORA_VERIFY,
  SET_VHORA_PERSONALIZE_FUNTONG,
  SET_VHORA_MOBILE,
  SET_VHORA_ZODIAC_MOBILE,
  SET_FETCH_FORTUNE_FUNTONG,
  SET_VHORA_FUNTONG,
  SET_VHORA_RESEND_EMAIL,
  SET_PROPHECY
} from './mutations.type'

const state = {
  vhoraOtp: {},
  vhoraVerify: {},
  vhoraPersonlizeFuntong: {},
  vhoraMobile: {},
  vhoraZodiacMobile: {},
  getFortuneFuntong: {},
  vhoraFuntong: {},
  prophecy: {}
}

const getters = {
  vhoraOtp (state) {
    return state.vhoraOtp
  },
  vhoraVerify (state) {
    return state.vhoraVerify
  },
  vhoraPersonlizeFuntong (state) {
    return state.vhoraPersonlizeFuntong
  },
  vhoraMobile (state) {
    return state.vhoraMobile
  },
  vhoraZodiacMobile (state) {
    return state.vhoraZodiacMobile
  },
  getFortuneFuntong (state) {
    return state.getFortuneFuntong
  },
  vhoraFuntong (state) {
    return state.vhoraFuntong
  },
  prophecy (state) {
    return state.prophecy
  }
}

const actions = {
  [REQUEST_VHORA_OTP] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.post('/v2/vhora/request-otp', payload)
        .then(({ data }) => {
          context.commit(SET_VHORA_OTP, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [VERIFY_VHORA] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.post('/v2/vhora/verify', payload)
        .then(({ data }) => {
          context.commit(SET_VHORA_VERIFY, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [POST_VHORA_PERSONALIZE_FUNTONG] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.post('/v2/vhora/post-personalize-funtong', payload)
        .then(({ data }) => {
          context.commit(SET_VHORA_PERSONALIZE_FUNTONG, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [POST_VHORA_MOBILE] (context, payload) {
    return new Promise((resolve, reject) => {
      let url = '/v2/vhora/mobile-numbers'
      if (payload.zodiac) {
        url = url + '/temp-reserve'
        delete payload.zodiac
      }
      return ApiService.post(url, payload)
        .then(({ data }) => {
          context.commit(SET_VHORA_MOBILE, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [POST_VHORA_ZODIAC_MOBILE] (context, payload) {
    return new Promise((resolve, reject) => {
      const headers = {
        'Content-Type': 'application/json'
      }
      return ApiService.postJson('/v2/vhora/mobile-numbers/temp-reserve', payload, { headers })
        .then(({ data }) => {
          context.commit(SET_VHORA_ZODIAC_MOBILE, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [FETCH_FORTUNE_FUNTONG] (context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.post('/v2/vhora/fortune-funtong-redis', payload)
        .then(({ data }) => {
          context.commit(SET_FETCH_FORTUNE_FUNTONG, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [POST_VHORA_FUNTONG] (context, payload) {
    return new Promise((resolve, reject) => {
      const headers = {
        'Content-Type': 'application/json'
      }
      return ApiService.postJson('/v2/vhora/funtong', payload, { headers })
        .then(({ data }) => {
          context.commit(SET_VHORA_FUNTONG, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [POST_VHORA_RESEND_EMAIL] (context, payload) {
    return new Promise((resolve, reject) => {
      const headers = {
        'Content-Type': 'application/json'
      }
      return ApiService.postJson('/v2/vhora/resend-email', payload, { headers })
        .then(({ data }) => {
          context.commit(SET_VHORA_RESEND_EMAIL, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [POST_PROPHECY] (context, payload) {
    return new Promise((resolve, reject) => {
      const headers = {
        'Content-Type': 'application/json'
      }
      return ApiService.postJson('/v2/vhora/prophecy', payload, { headers })
        .then(({ data }) => {
          context.commit(SET_PROPHECY, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  }
}

const mutations = {
  [SET_VHORA_OTP] (state, vhoraOtp) {
    state.vhoraOtp = vhoraOtp
  },
  [SET_VHORA_VERIFY] (state, vhoraVerify) {
    state.vhoraVerify = vhoraVerify
  },
  [SET_VHORA_PERSONALIZE_FUNTONG] (state, vhoraPersonlizeFuntong) {
    state.vhoraPersonlizeFuntong = vhoraPersonlizeFuntong
  },
  [SET_VHORA_MOBILE] (state, vhoraMobile) {
    state.vhoraMobile = vhoraMobile
  },
  [SET_VHORA_ZODIAC_MOBILE] (state, vhoraZodiacMobile) {
    state.vhoraZodiacMobile = vhoraZodiacMobile
  },
  [SET_FETCH_FORTUNE_FUNTONG] (state, fortuneFuntong) {
    state.getFortuneFuntong = fortuneFuntong
  },
  [SET_VHORA_FUNTONG] (state, vhoraFuntong) {
    state.vhoraFuntong = vhoraFuntong
  },
  [SET_PROPHECY] (state, prophecy) {
    state.prophecy = prophecy
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
