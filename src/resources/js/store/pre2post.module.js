import ApiService from "../common/api.service";

import { FETCH_Q_A_CONTENT } from "./actions.type";
import { SET_Q_A_CONTENT } from "./mutations.type";

const state = {
  QAContent: [],
};

const getters = {
  QAContent(state) {
    return state.QAContent;
  },
};

const actions = {
  [FETCH_Q_A_CONTENT](context, payload) {
    return new Promise((resolve, reject) => {
      return ApiService.get("/q_and_a/config")
        .then(({ data }) => {
          context.commit(SET_Q_A_CONTENT, data);
          resolve(data);
        })
        .catch((error) => {
          reject(error.data);
        });
    });
  },
};

const mutations = {
  [SET_Q_A_CONTENT] (state, QAContent) {
    state.QAContent = QAContent;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}