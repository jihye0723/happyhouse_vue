<template>
  <div>
    <b-container class="col-6">
      <b-input-group class="m-3">
        <template #prepend>
          <b-input-group-text class="bg-dark text-light"
            >이름
          </b-input-group-text>
        </template>
        <b-form-input
          v-model="userinfo.username"
          :readonly="validated ? '' : readonly"
        ></b-form-input>
      </b-input-group>
      <b-input-group class="m-3">
        <template #prepend>
          <b-input-group-text class="bg-dark text-light"
            >아이디</b-input-group-text
          >
        </template>
        <b-form-input
          class="input"
          v-model="userinfo.userid"
          readonly
        ></b-form-input>
      </b-input-group>
      <b-input-group class="m-3">
        <template #prepend>
          <b-input-group-text class="bg-dark text-light"
            >비밀번호</b-input-group-text
          >
        </template>
        <b-form-input
          v-model="userinfo.userpass"
          :readonly="validated ? '' : readonly"
        ></b-form-input>
      </b-input-group>
      <b-input-group class="m-3">
        <template #prepend>
          <b-input-group-text class="bg-dark text-light"
            >전화번호</b-input-group-text
          >
        </template>
        <b-form-input
          v-model="userinfo.phone"
          :readonly="validated ? '' : readonly"
        ></b-form-input>
      </b-input-group>
      <b-input-group class="m-3">
        <template #prepend>
          <b-input-group-text class="bg-dark text-light"
            >이메일</b-input-group-text
          >
        </template>
        <b-form-input
          v-model="userinfo.email"
          :readonly="validated ? '' : readonly"
        ></b-form-input>
      </b-input-group>
      <b-button @click="modify">{{ msg }}</b-button>
    </b-container>
  </div>
</template>

<script>
import http from "@/api/http";
export default {
  data() {
    return {
      validated: true,
      msg: "수정",
      userinfo: {},
    };
  },
  methods: {
    modify() {
      this.validated = false;
      this.msg = "완료";
    },
  },
  created() {
    let userid = this.$store.state.userid;
    let username = this.$store.state.username;
    console.log(userid);
    http
      .get("restuser/user", {
        params: {
          userid: userid,
          username: username,
        },
      })
      .then(({ data }) => {
        console.log(data);
        this.userinfo = data;
      });
  },
};
</script>

<style>
.text-center {
  text-align: center;
  padding: 30px;
}
</style>
