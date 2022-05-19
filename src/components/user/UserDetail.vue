<template>
  <div>
    <b-container class="col-6" v-if="userInfo">
      <b-input-group class="m-3">
        <template #prepend>
          <b-input-group-text class="bg-dark text-light"
            >이름
          </b-input-group-text>
        </template>
        <b-form-input value="userInfo.username" readonly />
      </b-input-group>
      <b-input-group class="m-3">
        <template #prepend>
          <b-input-group-text class="bg-dark text-light"
            >아이디</b-input-group-text
          >
        </template>
        <b-form-input placeholder="userInfo.userid" readonly />
      </b-input-group>
      <b-input-group class="m-3">
        <template #prepend>
          <b-input-group-text class="bg-dark text-light"
            >비밀번호</b-input-group-text
          >
        </template>
        <b-form-input value="${userInfo.userpass}" readonly />
      </b-input-group>
      <b-input-group class="m-3">
        <template #prepend>
          <b-input-group-text class="bg-dark text-light"
            >전화번호</b-input-group-text
          >
        </template>
        <b-form-input value="userInfo.phone" readonly />
      </b-input-group>
      <b-input-group class="m-3">
        <template #prepend>
          <b-input-group-text class="bg-dark text-light"
            >이메일</b-input-group-text
          >
        </template>
        <b-form-input value="userInfo.email" readonly />
      </b-input-group>
    </b-container>
  </div>
</template>

<script>
import { mapState } from "vuex";

const memberStore = "memberStore";
export default {
  computed: {
    ...mapState(memberStore, ["userInfo"]),
  },
};
</script>

<style>
.text-center {
  text-align: center;
  padding: 30px;
}
</style>
