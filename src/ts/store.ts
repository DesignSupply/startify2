import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex';
export interface State {
  status: string
}
export const key: InjectionKey<Store<State>> = Symbol();
export const store = createStore<State>({
  state: {
    status: 'default'
  },
  mutations: {
    setStatus(state, payload: string) {
      state.status = payload;
    }
  },
  actions: {
    updateStatus({ commit }, payload: string) {
      commit('setStatus', payload);
    }
  },
  getters: {
    getStatus(state) {
      return state.status;
    }
  }
});
export const useStore = () => {
  return baseUseStore(key);
}