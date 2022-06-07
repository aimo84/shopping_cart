import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import JwtService from './jwt.service'
import { API_URL } from './config'
import qs from 'qs'

const ApiService = {
  init () {
    Vue.use(VueAxios, axios)
    Vue.axios.defaults.baseURL = API_URL

    Vue.axios.defaults.headers['Content-Type'] =
      'application/x-www-form-urlencoded'
  },

  setHeader () {
    const token = JwtService.getToken()
    if (token) Vue.axios.defaults.headers.common.Authorization = `Bearer ${token}`
  },

  get (resource, params, responseType, headers) {
    return Vue.axios.get(resource, { params, responseType, headers }).catch((error) => {
      throw error.response
    })
  },

  post (resource, params, header) {
    return Vue.axios.post(
      resource,
      qs.stringify(params),
      header
    ).catch((error) => {
      throw error.response
    })
  },

  postJson (resource, params, header) {
    return Vue.axios.post(resource, params, header).catch((error) => {
      throw error.response
    })
  },

  patch (resource, params) {
    return Vue.axios.patch(resource, params).catch((error) => {
      throw error.response
    })
  },

  update (resource, slug, params) {
    return Vue.axios.put(`${resource}/${slug}`, params)
  },

  put (resource, params, header) {
    return Vue.axios.put(resource, qs.stringify(params), header).catch((error) => {
      throw error.response
    })
  },

  delete (resource, params) {
    return Vue.axios.delete(resource, { data: qs.stringify(params) })
  }
}

export default ApiService
