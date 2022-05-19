// import jwt_decode from "jwt-decode";
import http from "@/api/http.js";

const memberStore = {
  namespaced: true,

  state: {
    isLogin: false,
    isLoginError: false,
    userInfo: null,
  },
  getters: {},
  mutations: {
    SET_IS_LOGIN: (state, isLogin) => {
      state.isLogin = isLogin;
    },
  },
  actions: {
    async userConfirm({ commit }, user) {
      await http
        .post("/restuser/login", JSON.stringify(user))
        .then(function (response) {
          console.log(response);
          if (response.data.message === "success") {
            let token = response.data["access-token"];
            commit("SET_IS_LOGIN", true);
            sessionStorage.setItem("access-token", token);
          } else {
            alert("로그인 실패");
          }
        });
    },
  },
};

export default memberStore;
