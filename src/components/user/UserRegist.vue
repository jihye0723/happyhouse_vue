<template>
  <b-container class="col-10">
    <!-- <h2>회원가입</h2> -->
    <fieldset class="text-center">
      <b-row class="my-3">
        <b-col sm="4"> 아이디 </b-col>
        <b-col sm="4">
          <b-form-input v-model="userid" placeholder="아이디를 입력하세요" />
        </b-col>
      </b-row>
      <b-row class="my-3">
        <b-col sm="4"> 이름 </b-col>
        <b-col sm="4">
          <b-form-input v-model="username" placeholder="이름을 입력하세요" />
        </b-col>
      </b-row>
      <b-row class="my-3">
        <b-col sm="4"> 비밀번호 </b-col>
        <b-col sm="4">
          <b-form-input
            type="password"
            v-model="userpass"
            placeholder="비밀번호를 입력하세요"
          />
        </b-col>
      </b-row>

      <b-row class="my-3">
        <b-col sm="4"> 전화번호 </b-col>
        <b-col sm="2">
          <b-form-select
            v-model="phone1"
            :options="options"
          ></b-form-select> </b-col
        >-
        <b-col sm="2"> <b-form-input v-model="phone2" placeholder="" /></b-col>-
        <b-col sm="2">
          <b-form-input v-model="phone3" placeholder="" />
        </b-col>
      </b-row>

      <b-row class="my-3">
        <b-col sm="4"> 이메일 </b-col>
        <b-col sm="3"> <b-form-input v-model="emailid" placeholder="" /></b-col
        >@
        <b-col sm="3">
          <b-form-select
            v-model="emaildomain"
            :options="options1"
          ></b-form-select>
        </b-col>
      </b-row>
      <button @click="registerBtn">회원가입</button>
    </fieldset>
  </b-container>
</template>

<script>
import http from "@/api/http";
export default {
  data() {
    return {
      userid: "",
      username: "",
      userpass: "",
      phone1: "",
      phone2: "",
      phone3: "",
      emailid: "",
      emaildomain: "",
      options: [
        { value: "010", text: "010" },
        { value: "02", text: "02" },
        { value: "031", text: "031" },
        { value: "032", text: "032" },
        { value: "041", text: "041" },
        { value: "051", text: "051" },
      ],
      options1: [
        { value: "naver.com", text: "naver.com" },
        { value: "kakao.com", text: "kakao.com" },
        { value: "google.com", text: "google.com" },
        { value: "ssafy.com", text: "ssafy.com" },
        { value: "daum.net", text: "daum.net" },
      ],
    };
  },
  methods: {
    registerBtn() {
      let phone = this.phone1 + "-" + this.phone2 + "-" + this.phone3;
      let email = this.emailid + "@" + this.emaildomain;
      console.log(phone);
      http
        .post("/restuser/regist", null, {
          params: {
            userid: this.userid,
            userpass: this.userpass,
            username: this.username,
            phone: phone,
            email: email,
            level: 0,
          },
        })
        .then(function (response) {
          console.log(response);
        });
    },
  },
};
</script>

<style></style>
