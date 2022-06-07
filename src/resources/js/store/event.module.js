import ApiService from '../common/api.service'
import {
  	FETCH_EVENT_ORDER,
} from './actions.type'

import {} from './mutations.type'

const state   = {}
const getters = {}
const actions = {
	[FETCH_EVENT_ORDER] (context, payload) {
		return new Promise((resolve, reject) => {
			return ApiService.get(`v2/qrcode/status`, payload)
				.then(({ data }) => {
					resolve(data)
				})
				.catch((error) => {
					reject(error.data)
				})
			})
	},
}

const mutations = {}

export default {
	state,
	getters,
	actions,
	mutations
}
