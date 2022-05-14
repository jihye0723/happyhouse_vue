<template>
  <div class="b-container">
    <h2>회원가입</h2>
    <fieldset class="text-center">
      <b-row class="my-3">
        <b-col sm="3">
          <label :for="userid">아이디</label>
        </b-col>
        <b-col sm="3">
          <b-form-input
            id="userid"
            v-model="id"
            placeholder="아이디를 입력하세요"
          />
        </b-col>
      </b-row>
      <b-row class="my-3">
        <b-col sm="3">
          <label :for="username">이름</label>
        </b-col>
        <b-col sm="3">
          <b-form-input
            id="username"
            v-model="name"
            placeholder="이름을 입력하세요"
          />
        </b-col>
      </b-row>
      <b-row class="my-3">
        <b-col sm="3">
          <label :for="userpass">비밀번호</label>
        </b-col>
        <b-col sm="3">
          <b-form-input
            type="password"
            id="userpass"
            v-model="password"
            placeholder="비밀번호를 입력하세요"
          />
        </b-col>
      </b-row>

      <b-row class="my-3">
        <b-col sm="3">
          <label :for="phone1">전화번호</label>
        </b-col>
        <b-col sm="1">
          <b-form-select
            v-model="phone1"
            :options="options"
          ></b-form-select> </b-col
        >-
        <b-col sm="1">
          <b-form-input id="phone2" v-model="phone2" placeholder="" /></b-col
        >-
        <b-col sm="1">
          <b-form-input id="phone3" v-model="phone3" placeholder="" />
        </b-col>
      </b-row>
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
      options: [
        { value: "010", text: "010" },
        { value: "02", text: "02" },
        { value: "031", text: "031" },
        { value: "032", text: "032" },
        { value: "041", text: "041" },
        { value: "051", text: "051" },
      ],
    };
  },
};
</script>

<style></style>
