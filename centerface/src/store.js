import { createStore } from "vuex";
// import { mapState } from "vuex";

const store = createStore({
  state() {
    return {
      isLogin: false,
      userId: "",
      userToken: "",
    };
  },
  mutations: {
    loginChange(state) {
      state.isLogin = !state.isLogin;
    },
    saveUserId(state, data) {
      state.userId = data;
    },
    saveUserToken(state, data) {
      state.userToken = data;
    },
  },
  //   computed: {
  //     ...mapState(["isLogin", "userId"]),
  //   },
});

export default store;
