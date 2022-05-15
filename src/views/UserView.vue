<template>
  <div class="text-center">
    <b-container>
      <router-link to="/user/login"><button>로그인</button></router-link>
      <router-link to="/user/registlevel">회원가입</router-link>
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
