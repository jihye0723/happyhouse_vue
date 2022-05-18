<template>
  <div>
    <b-container class="col-6">
      <b-input-group class="m-3">
        <template #prepend>
          <b-input-group-text class="bg-dark text-light"
            >이름
          </b-input-group-text>
        </template>
        <b-form-input v-model="username"></b-form-input>
      </b-input-group>
      <b-input-group class="m-3">
        <template #prepend>
          <b-input-group-text class="bg-dark text-light"
            >아이디</b-input-group-text
          >
        </template>
        <b-form-input
          class="input"
          v-model="userid"
          :readonly="validated ? '' : readonly"
        ></b-form-input>
      </b-input-group>
      <b-input-group class="m-3">
        <template #prepend>
          <b-input-group-text class="bg-dark text-light"
            >비밀번호</b-input-group-text
          >
        </template>
        <b-form-input v-model="userpass"></b-form-input>
      </b-input-group>
      <b-input-group class="m-3">
        <template #prepend>
          <b-input-group-text class="bg-dark text-light"
            >전화번호</b-input-group-text
          >
        </template>
        <b-form-input v-model="userphone"></b-form-input>
      </b-input-group>
      <b-input-group class="m-3">
        <template #prepend>
          <b-input-group-text class="bg-dark text-light"
            >이메일</b-input-group-text
          >
        </template>
        <b-form-input v-model="useremail"></b-form-input>
      </b-input-group>
      <b-button @click="modify">수정</b-button>
    </b-container>
  </div>
</template>

<script>
import http from "@/api/http";
export default {
  data() {
    return {
      username: "",
      userid: "",
      userpass: "",
      userphone: "",
      useremail: "",
      validated: true,
    };
  },
  methods: {
    modify() {
      let newuser = {
        username: this.username,
        userid: this.userid,
        userpass: this.userpass,
        phone: this.userphone,
        email: this.useremail,
      };
      console.log(newuser);

      http
        .post("/restuser/update", null, {
          params: {
            username: this.username,
            userid: this.userid,
            userpass: this.userpass,
            phone: this.userphone,
            email: this.useremail,
          },
        })
        .then(function (response) {
          console.log(response);
          if (response.data === "update") {
            alert("회원정보수정");
          }
        });
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
        this.username = data.username;
        this.userid = data.userid;
        this.userpass = data.userpass;
        this.userphone = data.phone;
        this.useremail = data.email;
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
