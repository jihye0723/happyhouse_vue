<template>
  <div class="container">
    <h2>로그인</h2>
    <fieldset class="text-center">
      <b-row class="my-1">
        <b-col sm="3"> 아이디 </b-col>
        <b-col sm="9">
          <b-form-input v-model="userid" placeholder="아이디를 입력하세요" />
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="3"> 비밀번호 </b-col>
        <b-col sm="9">
          <b-form-input
            type="password"
            v-model="userpass"
            placeholder="비밀번호를 입력하세요"
          />
        </b-col>
      </b-row>
      <button @click="loginBtn">로그인</button>
      <button>비밀번호찾기</button>
    </fieldset>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      userid: "",
      userpass: "",
    };
  },

  methods: {
    ...mapActions({ loginvv: "loginvv" }),
    loginBtn() {
      let user = {
        userid: this.userid,
        userpass: this.userpass,
      };
      this.loginvv(user);
    },
  },
};
</script>

<style>
.view {
  width: 30%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  color: #787878;
  font-size: medium;
}
</style>
