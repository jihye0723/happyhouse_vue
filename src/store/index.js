import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import http from "@/api/http";
import router from "@/router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userid: "",
    username: "",
    level: "",
    house: null,
    houseinfo: null,
    markers: [],
    apartCodes: [],
  },
  getters: {},
  mutations: {
    login(state, user) {
      state.userid = user.userid;
      state.username = user.username;
      state.level = user.level;
    },

    FORMAT_DATA(state) {
      state.markers = [];
      state.apartCodes = [];
    },
    SHOW_APART_DETAIL(state, houseDealInfo) {
      console.log("Show aprart detail");
      console.log(houseDealInfo);
      state.house = houseDealInfo;
      console.log("show apart detail success");
      http
        .get("/resthouse/houseInfoByApartCode/" + houseDealInfo.aptCode)
        .then(({ data }) => {
          console.log(data);
          console.log("Here 3");
          state.houseinfo = data;
        });
    },
    // SETTING_HOUSE_INFO(state, houseinfo) {
    //   console.log("Here 3");
    // },
    UPDATE_APTCODE(state, aptcodes) {
      state.apartCodes = aptcodes;
      let markerlist = [];
      aptcodes.forEach((element) => {
        console.log("resthouse/houseInfoByApartCode/" + element);
        http
          .get("resthouse/houseInfoByApartCode/" + element)
          .then(({ data }) => {
            let marker = {
              code: element,
              lat: data.lat,
              lng: data.lng,
            };
            markerlist.push(marker);
          });
      });
      state.markers = markerlist;
    },
  },
  actions: {
    initSetting({ commit }) {
      commit("FORMAT_DATA");
    },
    showApartDetail({ commit }, houseitem) {
      console.log("Here 1");
      http
        .get("/resthouse/dealInfoByDealNo/" + houseitem.no)
        .then(({ data }) => {
          commit("SHOW_APART_DETAIL", data);
          console.log("detail apart code : " + data.aptCode);
          console.log("Here 2");
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
          if (response.status == 204) {
            alert("로그인 실패 ");
          }
          const user = {
            userid: response.data.userid,
            username: response.data.username,
            level: response.data.level,
          };
          console.log(user);
          context.commit("login", user);
          // sessionStorage.setItem("userinfo", JSON.stringify(user));
        })
        .then(() => router.push({ name: "home" }))
        .catch((error) => {
          console.log(error + "로그인 실패입니다.");
        });
    },
    async updateAptcodes({ commit }, playload) {
      commit("FORMAT_DATA");
      await commit("UPDATE_APTCODE", playload);
      console.log(this.state.markers);
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
