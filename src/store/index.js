import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import http from "@/api/http";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userid: "",
    username: "",
    level: "",
    house: null,
    houseinfo: null,
  },
  getters: {},
  mutations: {
    login(state, user) {
      state.userid = user.userid;
      state.username = user.username;
      state.level = user.level;
    },

    SHOW_APART_DETAIL(state, houseDealInfo) {
      state.house = houseDealInfo;
    },
    SETTING_HOUSE_INFO(state, houseinfo) {
      state.houseinfo = houseinfo;
    },
  },
  actions: {
    showApartDetail({ commit }, houseitem) {
      http
        .get("/resthouse/dealInfoByDealNo/" + houseitem.no)
        .then(({ data }) => {
          console.log("detail apart code : " + data.aptCode);
          commit("SHOW_APART_DETAIL", data);

          http
            .get("/resthouse/houseInfoByApartCode/" + data.aptCode)
            .then(({ data }) => {
              console.log(data.aptName);
              commit("SETTING_HOUSE_INFO", data);
            });
        });
    },
    loginvv(context, user) {
      console.log(user.userid + " " + user.userpass);
      http
        .post("/restuser/login", null, {
          params: {
            userid: user.userid,
            userpass: user.userpass,
          },
        })
        .then(function (response) {
          const user = {
            userid: response.data.userid,
            username: response.data.username,
            level: response.data.level,
          };
          console.log(user);
          context.commit("login", user);
          // sessionStorage.setItem("userinfo", JSON.stringify(user));
        });
    },
  },
  modules: {},
  plugins: [
    createPersistedState({
      // 브라우저 종료시 제거하기 위해 localStorage가 아닌 sessionStorage로 변경. (default: localStorage)
      storage: sessionStorage,
    }),
  ],
});
