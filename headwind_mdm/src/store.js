import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      isLogin: false,
      userToken: "",
    };
  },
  getters: {},
  mutations: {},
  actions: {},
});

export default store;
