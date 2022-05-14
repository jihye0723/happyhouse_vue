<template>
  <div class="container">
    <h2>회원가입</h2>
    <fieldset class="text-center">
      <label for="userid">아이디</label>
      <input type="text" id="userid" v-model="id" class="view" /><br />
      <label for="username">이름</label>
      <input type="text" id="username" v-model="name" class="view" /><br />
      <label for="userpass">비밀번호</label>
      <input
        type="password"
        id="userpass"
        v-model="password"
        class="view"
      /><br />
      <button>회원가입</button>
    </fieldset>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      name: "",
      password: "",
    };
  },
};
</script>

<style></style>
