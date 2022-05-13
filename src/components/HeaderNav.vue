<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#" to="/">HappyHouse</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/user/login">Sign Up</b-nav-item>
          <b-nav-item to="/user/regist">Sign In</b-nav-item>
          <b-nav-item to="/user/logout">Logout</b-nav-item>
          <b-nav-item to="user/detail">회원정보</b-nav-item>
          <b-nav-item>관심목록</b-nav-item>
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
};
</script>

<style lang="scss" scoped></style>
