<template>
  <div class="text-center">
    <b-container>
      <router-link to="/user/login"
        ><b-button pill variant="outline-secondary"
          >로그인</b-button
        ></router-link
      >

      <router-link to="/user/registlevel"
        ><b-button pill variant="outline-secondary"
          >회원가입</b-button
        ></router-link
      >
    </b-container>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "UserView",
};
</script>

<style>
.text-center {
  text-align: center;
  padding: 30px;
}
</style>
