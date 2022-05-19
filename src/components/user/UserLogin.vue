<template>
  <b-container class="col-6">
    <fieldset class="text-center">
      <b-row class="my-1">
        <b-col sm="3"> 아이디 </b-col>
        <b-col sm="9">
          <b-form-input
            v-model="user.userid"
            placeholder="아이디를 입력하세요"
          />
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="3"> 비밀번호 </b-col>
        <b-col sm="9">
          <b-form-input
            type="password"
            v-model="user.userpass"
            placeholder="비밀번호를 입력하세요"
          />
        </b-col>
      </b-row>
      <button @click="loginBtn">로그인</button>
      <button>비밀번호찾기</button>
    </fieldset>
  </b-container>
</template>

<script>
const memberStore = "memberStore";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      user: {
        userid: null,
        userpass: null,
      },
    };
  },

  methods: {
    ...mapActions(memberStore, ["userConfirm"]),
    async loginBtn() {
      await this.userConfirm(this.user);
      let token = sessionStorage.getItem("access-token");
      console.log(token);
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
