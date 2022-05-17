<template>
  <div class="text-center">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#" to="/">HappyHouse</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item>{{ $store.state.username }}</b-nav-item>
          <b-nav-item to="/board">QnA게시판</b-nav-item>
          <b-nav-item v-if="getUser" @click="logout">Logout</b-nav-item>
          <b-nav-item v-else to="/user/login">로그인 및 회원가입</b-nav-item>
          <b-nav-item to="/detail">회원정보</b-nav-item>
          <b-nav-item to="/interest">관심목록</b-nav-item>
          <b-nav-item>매매목록</b-nav-item>
          <b-nav-item>매매등록</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "HappyhouseVueHeaderNav",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
  computed: {
    getUser() {
      if (sessionStorage.getItem("userinfo")) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
