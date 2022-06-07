import ApiService from '../common/api.service'
import JwtService from '../common/jwt.service'
import {
  LOGIN,
  LOGIN_TOKEN,
  REFRESH_TOKEN,
  LOGOUT,
  FETCH_PROFILE,
  FETCH_TRUECARD
} from './actions.type'
import {
  SET_AUTH,
  PURGE_AUTH,
  SET_ERROR,
  SET_PROFILE,
  SET_TRUECARD
} from './mutations.type'

const state = {
  errors: null,
  user: {},
  profile: {
    data: false
  },
  truecard: {},
  isAuthenticated: !!JwtService.getToken()
}

const getters = {
  currentUser (state) {
    return state.user
  },
  isAuthenticated (state) {
    return state.isAuthenticated
  },
  profile (state) {
    return state.profile
  },
  truecard (state) {
    return state.truecard
  }
}

const actions = {
  [LOGIN] (context, credentials) {
    context.commit(SET_PROFILE, { data: null })
    return new Promise((resolve, reject) => {
      ApiService.post('/login', credentials)
        .then(({ data }) => {
          if (data.status_code !== 0 && data.status_code !== 200) {
            window.dispatchEvent(new Event('true-logout'))
            context.commit(PURGE_AUTH)
            return
          }
          JwtService.saveToken(data.data.access_token)
          JwtService.saveTrueToken(data.data.trueid_access_token)
          JwtService.saveTrueRefreshToken(data.data.trueid_refresh_token)
          JwtService.saveTrueUserId(data.data.user_id)
          ApiService.setHeader()
          context.commit(SET_AUTH, data)
          resolve(data)
        })
    })
  },
  [LOGIN_TOKEN] (context, accessToken) {
    return new Promise((resolve) => {
      ApiService.post('/login', null, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
        .then(({ data }) => {
          if (data.status_code !== 0 && data.status_code !== 200) {
            window.dispatchEvent(new Event('true-logout'))
            context.commit(PURGE_AUTH)
            return
          }
          JwtService.saveToken(data.data.access_token)
          JwtService.saveTrueToken(data.data.trueid_access_token)
          JwtService.saveTrueRefreshToken(data.data.trueid_refresh_token)
          JwtService.saveTrueUserId(data.data.user_id)
          ApiService.setHeader()
          context.commit(SET_AUTH, data)
          resolve(data)
        })
    })
  },
  [REFRESH_TOKEN] (context) {
    return new Promise((resolve) => {
      ApiService.post('/login', {
        type: 'refresh_token',
        Authorization: `Bearer ${JwtService.getTrueRefreshToken()}`
      })
        .then(({ data }) => {
          if (data.status_code !== 0 && data.status_code !== 200) {
            window.dispatchEvent(new Event('true-logout'))
            context.commit(PURGE_AUTH)
            return
          }

          JwtService.saveToken(data.data.access_token)
          JwtService.saveTrueToken(data.data.trueid_access_token)
          JwtService.saveTrueRefreshToken(data.data.trueid_refresh_token)
          ApiService.setHeader()
          context.commit(SET_AUTH, data)
          resolve(data)
        })
    })
  },
  [LOGOUT] (context) {
    return new Promise((resolve) => {
      context.commit(PURGE_AUTH)
      window.dispatchEvent(new Event('true-logout'))
      resolve()
    })
  },
  [FETCH_PROFILE] (context) {
    context.commit(SET_PROFILE, { data: null })
    return new Promise((resolve, reject) => {
      if (JwtService.getToken()) {
        ApiService.setHeader()
        return ApiService.get('/profile')
          .then(({ data }) => {
            context.commit(SET_PROFILE, data)
            resolve(data)
          })
          .catch((error) => {
            context.commit(SET_PROFILE, { data: false })
            reject(new Error(error))
          })
      } else {
        context.commit(SET_PROFILE, { data: false })
        reject(new Error())
      }
    })
  },
  [FETCH_TRUECARD] (context) {
    return new Promise((resolve, reject) => {
      return ApiService.post('/account-app/truecard/get-status', {
        Authorization: `Bearer ${JwtService.getToken()}`
      })
        .then(({ data }) => {
          context.commit(SET_TRUECARD, data)
          resolve(data)
        })
        .catch((error) => {
          reject(new Error(error))
        })
    })
  }
}

const mutations = {
  [SET_ERROR] (state, error) {
    state.errors = error
  },
  [SET_AUTH] (state, user) {
    state.isAuthenticated = true
    state.user = user
    state.errors = {}
  },
  [PURGE_AUTH] (state) {
    state.isAuthenticated = false
    state.user = {}
    state.profile = { data: false }
    state.errors = {}
    JwtService.destroyToken()
    JwtService.destroyTrueToken()
    JwtService.destroyTrueRefreshToken()
    JwtService.destroyTrueUserId()
    window.localStorage.removeItem('true-login-code')
    window.localStorage.removeItem('login-popup-name')
    window.localStorage.removeItem('address')
    window.sessionStorage.removeItem('selected-address-id')
  },
  [SET_PROFILE] (state, profile) {
    state.profile = profile
  },
  [SET_TRUECARD] (state, truecard) {
    state.truecard = truecard
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
