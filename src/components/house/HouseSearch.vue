<template>
  <div>
    <b-container>
      <h2>House Search</h2>
      <div class="row col-6 mx-auto">
        <b-button variant="primary" class="m-2 col" @click="clickDongSearch"
          >동이름으로 검색</b-button
        >
        <b-button variant="primary" class="m-2 col" @click="clickApartSearch"
          >아파트 이름으로 검색</b-button
        >
      </div>
      <b-form v-if="dongSearch">
        <b-form-select
          v-model="sidoCode"
          :options="sidoOptions"
          class="m-3"
          value-field="code"
          text-field="name"
        ></b-form-select>
        <b-form-select
          v-model="gugunCode"
          :options="gugunOptions"
          class="m-3"
          value-field="code"
          text-field="name"
        ></b-form-select>
        <b-form-select
          v-model="dongCode"
          :options="dongOptions"
          class="m-3"
          value-field="code"
          text-field="name"
        ></b-form-select>
        <router-link
          :to="{ name: 'list', params: { code: dongCode, name: apartName } }"
          >검색</router-link
        >
        <b-button variant="primary" class="m-2" @click="clickDongSearchButton"
          >검색</b-button
        >
      </b-form>

      <b-form v-if="apartSearch">
        <div><strong>아파트 이름</strong></div>
        <b-form-input
          class="formInput"
          v-model="apartName"
          :placeholder="apartNamePlaceHolder"
        />
        <router-link
          :to="{ name: 'list', params: { code: 0, name: apartName } }"
          >검색</router-link
        >
        <b-button variant="primary" class="m-2" @click="clickApartSearchButton"
          >검색</b-button
        >
      </b-form>
    </b-container>
  </div>
</template>

<script>
import http from "@/api/http";

export default {
  name: "HappyhouseVueHouseSearch",

  data() {
    return {
      dongSearch: true,
      apartSearch: false,
      sidoCode: "null",
      gugunCode: "null",
      dongCode: "null",
      apartName: "",
      apartNamePlaceHolder: "아파트 이름을 입력하세요. ex) 푸르지오",
      sidoOptions: [],
      gugunOptions: [{ code: null, name: "구/군 선택" }],
      dongOptions: [{ code: null, name: "동 선택" }],
    };
  },

  created() {
    this.getSidoList();
  },
  mounted() {},

  watch: {
    // 시도코드가 변걍되었을 떄 실행
    sidoCode: function () {
      this.settingGugunOption();
    },
    gugunCode: function () {
      this.settingDongOption();
    },
  },

  methods: {
    // axios를 통해 rest server에서 sido 정보 얻어오기
    getSidoList() {
      http.get("http://localhost:9999/server/region/sido").then(({ data }) => {
        this.sidoOptions = data;
        this.sidoOptions.push({ code: null, name: "시/도 선택" });
      });
    },

    settingGugunOption() {
      http
        .get("http://localhost:9999/server/region/gugun/" + this.sidoCode)
        .then(({ data }) => {
          this.gugunOptions = data;
          this.gugunOptions.push({ code: null, name: "구/군 선택" });
        });
    },
    settingDongOption() {
      http
        .get("http://localhost:9999/server/region/dong/" + this.gugunCode)
        .then(({ data }) => {
          console.log(data);
          this.dongOptions = data;
          this.dongOptions.push({ code: "null", name: "동 선택" });
        });
    },
    // 동이름으로 검색하기 버튼 클릭시 입력리스트 수정
    clickDongSearch() {
      this.dongSearch = true;
      this.apartSearch = false;
    },
    // 아파트 이름으로 검색하기 버튼 클릭시 입력리스트 수정
    clickApartSearch() {
      this.dongSearch = false;
      this.apartSearch = true;
    },

    clickApartSearchButton() {
      console.log("click Apart Search Button");
    },
    clickDongSearchButton() {
      console.log("click Dong Search Button");
    },
  },
};
</script>

<style lang="scss" scoped>
.formInput {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}
</style>
