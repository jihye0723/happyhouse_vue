<template>
  <div class="text-center p-0">
    <b-navbar class="m-0" toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#" to="/">HappyHouse</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- <b-navbar-nav class="ml-auto">
          <b-nav-item to="/board">QnA게시판</b-nav-item>
        </b-navbar-nav> -->
        <!--로그인 되어있으면, -->
        <b-navbar-nav class="ml-auto" v-if="userInfo">
          <b-nav-item @click="logout">Logout</b-nav-item>
          <b-nav-item to="/detail">회원정보</b-nav-item>
          <b-nav-item to="/interest">관심목록</b-nav-item>
          <b-nav-item>매매목록</b-nav-item>
          <b-nav-item>매매등록</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto" v-else>
          <b-nav-item to="/user/login">로그인 및 회원가입</b-nav-item>
        </b-navbar-nav>
        <!-- <b-navbar-nav class="ml-auto">
          <b-nav-item>{{ $store.state.username }}</b-nav-item>
          <b-nav-item to="/board">QnA게시판</b-nav-item>
          <b-nav-item v-if="userInfo" @click="logout">Logout</b-nav-item>
          <b-nav-item v-if="getUser" to="/detail">회원정보</b-nav-item>
          <b-nav-item v-if="getUser" to="/interest">관심목록</b-nav-item>
          <b-nav-item v-if="getUser">매매목록</b-nav-item>
          <b-nav-item v-if="getUser">매매등록</b-nav-item>
          <b-nav-item v-else" to="/user/login">로그인 및 회원가입</b-nav-item>
        </b-navbar-nav> -->
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapState } from "vuex";
const memberStore = "memberStore";
export default {
  name: "HappyhouseVueHeaderNav",

  data() {
    return {};
  },

  mounted() {},

  methods: {
    logout() {
      sessionStorage.clear();
      alert("로그아웃");
      window.location.reload();
    },
  },
  computed: {
    ...mapState(memberStore, ["isLogin", "userInfo"]),
  },
};
</script>

<style lang="scss" scoped></style>
