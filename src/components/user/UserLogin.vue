<template>
  <div class="container">
    <h2>로그인</h2>
    <fieldset class="text-center">
      <b-row class="my-1">
        <b-col sm="3">
          <label :for="userid">아이디</label>
        </b-col>
        <b-col sm="9">
          <b-form-input
            id="userid"
            v-model="id"
            placeholder="아이디를 입력하세요"
          />
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="3">
          <label :for="userpass">비밀번호</label>
        </b-col>
        <b-col sm="9">
          <b-form-input
            type="password"
            id="userpass"
            v-model="password"
            placeholder="비밀번호를 입력하세요"
          />
        </b-col>
      </b-row>
      <button>로그인</button>
      <button>비밀번호찾기</button>
    </fieldset>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      password: "",
    };
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
