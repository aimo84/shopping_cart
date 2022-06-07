import ApiService from '../common/api.service'

import {
  VERIFY_OTP,
  VERIFY_OTP_MOBILE_ONLY,
  VERIFY_CLM_VAS,
  GET_CURRENT_PACKAGE,
  GET_CURRENT_PACKAGE_DEMO,
  GET_BENEFIT_ON_TOP,
  GET_BENEFIT_ON_TOP_DEMO,
  GET_LIST_PACKAGE,
  GET_LIST_PACKAGE_DEMO,
  GET_VAS_LIST_PACKAGE,
  GET_VAS_LIST_PACKAGE_DEMO,
  POST_CLM_VAS_CONFIRM_PACKAGE,
  ORDER_NEW_PACKAGE,
  POST_CLM_SUCCESS,
  POST_CLM_CALLBACK,
  UPDATE_CLM_CAMP_ID,
  UPDATE_CLM_MOBILE_NO,
  GET_INSTANT_BENEFIT
} from './actions.type'

import {
  SET_CLM_CURRENT_PACKAGE,
  SET_CLM_CURRENT_PACKAGE_DEMO,
  SET_CLM_VAS_VERIFY,
  SET_CLM_LIST_PACKAGE,
  SET_CLM_LIST_PACKAGE_DEMO,
  SET_CLM_VAS_LIST_PACKAGE,
  SET_CLM_VAS_LIST_PACKAGE_DEMO,
  SET_CLM_VAS_CONFIRM_PACKAGE,
  SET_CLM_BENEFIT_ON_TOP,
  SET_CLM_BENEFIT_ON_TOP_DEMO,
  SET_CLM_CAMP_ID,
  SET_CLM_MOBILE_NO,
  SET_INSTANT_BENEFIT
} from './mutations.type'

const state = {
  clmProfile: {},
  clmProfileDemo: {},
  clmVasVerify: {},
  clmPackageList: {},
  clmPackageListDemo: {},
  clmVasConfirmPackage: {},
  clmVasPackageList: {},
  clmVasPackageListDemo: {},
  clmCampId: null,
  clmMobileNo: null,
  clmInstantBenefit: {}
}

const getters = {

}

const actions = {
  [GET_INSTANT_BENEFIT] (context, data) {
    return new Promise((resolve, reject) => {
      return ApiService.post('clm/get-campaign-instant-benefit', data)
        .then(({ data }) => {
          context.commit(SET_INSTANT_BENEFIT, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [VERIFY_OTP] (context, data) {
    return new Promise((resolve, reject) => {
      return ApiService.post('clm-up-pack/verify', data)
        .then(({ data }) => {
          context.commit(SET_CLM_VAS_VERIFY, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [VERIFY_OTP_MOBILE_ONLY] (context, data) {
    return new Promise((resolve, reject) => {
      return ApiService.post('clm-up-pack/verify-mobile-only', data)
        .then(({ data }) => {
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [VERIFY_CLM_VAS] (context, payload) {
    const { id } = payload
    const { data } = payload
    return new Promise((resolve, reject) => {
      return ApiService.post(`clm-${id}-vas/verify`, data)
        .then(({ data }) => {
          context.commit(SET_CLM_VAS_VERIFY, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [GET_CURRENT_PACKAGE] (context, data) {
    return new Promise((resolve, reject) => {
      return ApiService.post('clm-up-pack/get-current-package', data)
        .then(({ data }) => {
          context.commit(SET_CLM_CURRENT_PACKAGE, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [GET_CURRENT_PACKAGE_DEMO] (context, data) {
    return new Promise((resolve, reject) => {
      return ApiService.post('clm/preview/get-current-package', data)
        .then(({ data }) => {
          context.commit(SET_CLM_CURRENT_PACKAGE_DEMO, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [GET_BENEFIT_ON_TOP] (context, data) {
    return new Promise((resolve, reject) => {
      return ApiService.post('clm-up-pack/benefit-on-top', data)
        .then(({ data }) => {
          context.commit(SET_CLM_BENEFIT_ON_TOP, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [GET_BENEFIT_ON_TOP_DEMO] (context, data) {
    return new Promise((resolve, reject) => {
      return ApiService.post('clm/preview/benefit-on-top', data)
        .then(({ data }) => {
          context.commit(SET_CLM_BENEFIT_ON_TOP_DEMO, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [GET_LIST_PACKAGE] (context, data) {
    return new Promise((resolve, reject) => {
      return ApiService.post('clm-up-pack/list-package', data)
        .then(({ data }) => {
          context.commit(SET_CLM_LIST_PACKAGE, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [GET_LIST_PACKAGE_DEMO] (context, data) {
    return new Promise((resolve, reject) => {
      return ApiService.post('clm/preview/list-package', data)
        .then(({ data }) => {
          context.commit(SET_CLM_LIST_PACKAGE_DEMO, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [GET_VAS_LIST_PACKAGE] (context, payload) {
    const { id } = payload
    const { data } = payload
    return new Promise((resolve, reject) => {
      return ApiService.post(`clm-${id}-vas/list-package`, data)
        .then(({ data }) => {
          context.commit(SET_CLM_VAS_LIST_PACKAGE, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [GET_VAS_LIST_PACKAGE_DEMO] (context, payload) {
    const { id, data } = payload
    return new Promise((resolve, reject) => {
      return ApiService.post(`clm-${id}-vas/preview/list-package`, data)
        .then(({ data }) => {
          context.commit(SET_CLM_VAS_LIST_PACKAGE_DEMO, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [POST_CLM_VAS_CONFIRM_PACKAGE] (context, payload) {
    const { id } = payload
    const { data } = payload
    return new Promise((resolve, reject) => {
      return ApiService.post(`clm-${id}-vas/confirm-new-package`, data)
        .then(({ data }) => {
          context.commit(SET_CLM_VAS_CONFIRM_PACKAGE, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [ORDER_NEW_PACKAGE] (context, data) {
    return new Promise((resolve, reject) => {
      return ApiService.post('clm-up-pack/confirm-new-package', data)
        .then(({ data }) => {
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [POST_CLM_SUCCESS] (context, data) {
    return new Promise((resolve, reject) => {
      return ApiService.post('clm-up-pack/success', data)
        .then(({ data }) => {
          context.commit(SET_CLM_LIST_PACKAGE, data)
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [POST_CLM_CALLBACK] (context, data) {
    return new Promise((resolve, reject) => {
      return ApiService.post('clm/callback/add-leads', data)
        .then(({ data }) => {
          resolve(data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  [UPDATE_CLM_CAMP_ID] (context, data) {
    context.commit(SET_CLM_CAMP_ID, data)
  },
  [UPDATE_CLM_MOBILE_NO] (context, data) {
    context.commit(SET_CLM_MOBILE_NO, data)
  }
}

const mutations = {
  [SET_INSTANT_BENEFIT] (state, clmInstantBenefit) {
    state.clmInstantBenefit = clmInstantBenefit
  },
  [SET_CLM_CURRENT_PACKAGE] (state, clmProfile) {
    state.clmProfile = clmProfile
  },
  [SET_CLM_CURRENT_PACKAGE_DEMO] (state, clmProfileDemo) {
    state.clmProfileDemo = clmProfileDemo
  },
  [SET_CLM_VAS_VERIFY] (state, clmVasVerify) {
    state.clmVasVerify = clmVasVerify
  },
  [SET_CLM_LIST_PACKAGE] (state, clmPackageList) {
    state.clmPackageList = clmPackageList
  },
  [SET_CLM_LIST_PACKAGE_DEMO] (state, clmPackageListDemo) {
    state.clmPackageListDemo = clmPackageListDemo
  },
  [SET_CLM_VAS_LIST_PACKAGE] (state, clmVasPackageList) {
    state.clmVasPackageList = clmVasPackageList
  },
  [SET_CLM_VAS_LIST_PACKAGE_DEMO] (state, clmVasPackageListDemo) {
    state.clmVasPackageListDemo = clmVasPackageListDemo
  },
  [SET_CLM_VAS_CONFIRM_PACKAGE] (state, clmVasConfirmPackage) {
    state.clmVasConfirmPackage = clmVasConfirmPackage
  },
  [SET_CLM_BENEFIT_ON_TOP] (state, clmBenefitOnTop) {
    state.clmBenefitOnTop = clmBenefitOnTop
  },
  [SET_CLM_BENEFIT_ON_TOP_DEMO] (state, clmBenefitOnTopDemo) {
    state.clmBenefitOnTopDemo = clmBenefitOnTopDemo
  },
  [SET_CLM_CAMP_ID] (state, clmCampId) {
    state.clmCampId = clmCampId
  },
  [SET_CLM_MOBILE_NO] (state, clmMobileNo) {
    state.clmMobileNo = clmMobileNo
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
