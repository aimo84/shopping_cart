const ID_TOKEN_KEY = 'true-token'
const TRUE_ID_TOKEN_KEY = 'true-id-token'
const TRUE_ID_REFRESH_TOKEN_KEY = 'true-id-refresh-token'
const TRUE_USER_ID = 'true-user-id'

export default {
  getToken () {
    return window.localStorage.getItem(ID_TOKEN_KEY)
  },

  saveToken (token) {
    window.localStorage.setItem(ID_TOKEN_KEY, token)
  },

  destroyToken () {
    window.localStorage.removeItem(ID_TOKEN_KEY)
  },

  getTrueToken () {
    return window.localStorage.getItem(TRUE_ID_TOKEN_KEY)
  },

  saveTrueToken (token) {
    window.localStorage.setItem(TRUE_ID_TOKEN_KEY, token)
  },

  destroyTrueToken () {
    window.localStorage.removeItem(TRUE_ID_TOKEN_KEY)
  },

  getTrueRefreshToken () {
    return window.localStorage.getItem(TRUE_ID_REFRESH_TOKEN_KEY)
  },

  saveTrueRefreshToken (token) {
    window.localStorage.setItem(TRUE_ID_REFRESH_TOKEN_KEY, token)
  },

  destroyTrueRefreshToken () {
    window.localStorage.removeItem(TRUE_ID_REFRESH_TOKEN_KEY)
  },

  saveTrueUserId (token) {
    window.localStorage.setItem(TRUE_USER_ID, token)
  },

  getTrueUserId () {
    return window.localStorage.getItem(TRUE_USER_ID)
  },

  destroyTrueUserId () {
    window.localStorage.removeItem(TRUE_USER_ID)
  }
}
