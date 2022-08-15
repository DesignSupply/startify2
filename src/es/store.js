import { Store } from "vuex";

export const store = new Store({
  state: {
    status: 'default'
  },
  mutations:  {
    setStatus(state, payload) {
      state.status = payload;
    }
  },
  actions: {
    updateStatus({ commit }, payload) {
      commit('setStatus', payload);
    }
  },
  getters: {
    getStatus(state) {
      return state.status;
    }
  }
});