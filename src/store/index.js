import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      isLogged: false,
      companies: [],
    };
  },
  mutations: {
    setLogged(state) {
      state.isLogged = true;
    },
    addCompany(state, payload) {
      state.companies = [...state.companies, payload.company];
    },
  },
  actions: {
    addCompany({ commit }, payload) {
      commit("addCompany", payload);
    },
  },
});
