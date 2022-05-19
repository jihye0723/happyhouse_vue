<template>
  <div>
    <!-- <b-container> -->
    <h2>검색 방식을 선택하세요</h2>
    <div class="row col-6 mx-auto">
      <b-button variant="primary" class="m-2 col" @click="clickDongSearch"
        >동이름으로 검색</b-button
      >
      <b-button variant="primary" class="m-2 col" @click="clickApartSearch"
        >아파트 이름으로 검색</b-button
      >
    </div>
    <div style="height: 100px"></div>

    <b-form v-if="dongSearch" class="col-6 mx-auto">
      <div><strong>시/도</strong></div>
      <b-form-select
        v-model="sidoCode"
        :options="sidoOptions"
        class="form-select m-3"
        value-field="code"
        text-field="name"
      ></b-form-select>
      <div><strong>구/군</strong></div>
      <b-form-select
        v-model="gugunCode"
        :options="gugunOptions"
        class="form-select m-3"
        value-field="code"
        text-field="name"
      ></b-form-select>
      <div><strong>행정동</strong></div>

      <b-form-select
        v-model="dongCode"
        :options="dongOptions"
        class="form-select m-3"
        value-field="code"
        text-field="name"
      ></b-form-select>
      <b-button
        :to="{ name: 'list', params: { code: dongCode, name: apartName } }"
        variant="primary"
        class="m-5"
        >검색</b-button
      >
    </b-form>

    <b-form v-if="apartSearch" class="col-6 mx-auto">
      <div><strong>아파트 이름</strong></div>
      <b-form-input
        class="formInput"
        v-model="apartName"
        :placeholder="apartNamePlaceHolder"
      />

      <b-button
        :to="{ name: 'list', params: { code: 0, name: apartName } }"
        variant="primary"
        class="m-5"
        @click="clickSearchButton"
        >검색</b-button
      >
    </b-form>
    <!-- </b-container> -->
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
        this.sidoOptions.push({ code: null, name: "시/도 선택" });
        data.forEach((element) => {
          this.sidoOptions.push(element);
        });
      });
    },

    settingGugunOption() {
      http
        .get("http://localhost:9999/server/region/gugun/" + this.sidoCode)
        .then(({ data }) => {
          data.forEach((element) => {
            this.gugunOptions.push(element);
          });
        });
    },
    settingDongOption() {
      http
        .get("http://localhost:9999/server/region/dong/" + this.gugunCode)
        .then(({ data }) => {
          data.forEach((element) => {
            this.dongOptions.push(element);
          });
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
    clickSearchButton() {
      // this.$store.dispatch("formatData");
      document.getElementById("map").innerHTML = ""; //지도를 담을 영역의 DOM 레퍼런스
    },
  },
};
</script>

<style lang="scss" scoped>
.formInput {
  margin-left: auto;
  margin-right: auto;
}
</style>
