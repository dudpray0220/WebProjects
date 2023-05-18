import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
// import { mapState } from "vuex";

const store = createStore({
  state() {
    return {
      isLogin: false,
      userId: "",
      userToken: "",
      roomPwd: "123qwe",
      groupId: 1,
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
  plugins: [createPersistedState()],
  //   computed: {
  //     ...mapState(["isLogin", "userId"]),
  //   },
});

export default store;
