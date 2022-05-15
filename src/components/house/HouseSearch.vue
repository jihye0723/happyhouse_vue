<template>
  <div>
    <b-container>
      <h2>House Search</h2>
      <b-button variant="primary" class="m-2" @click="clickDongSearch"
        >동이름으로 검색</b-button
      >
      <b-button variant="primary" class="m-2" @click="clickApartSearch"
        >아파트 이름으로 검색</b-button
      >
    </b-container>
    <b-form v-if="dongSearch">
      <b-form-select
        v-if="sidoOptions"
        v-model="sidoSelected"
        :options="sidoOptions"
      ></b-form-select>
      <b-form-select
        v-model="gugunSelected"
        :options="gugunOptions"
      ></b-form-select>
      <b-form-select
        v-model="dongSelected"
        :options="dongOptions"
      ></b-form-select>
    </b-form>

    <b-form v-if="apartSearch">
      <div><strong>아파트 이름</strong></div>
      <b-form-input
        class="formInput"
        v-model="apartName"
        :placeholder="apartNamePlaceHolder"
      />
    </b-form>
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
      sidoSelected: null,
      gugunSelected: null,
      dongSelected: null,
      apartName: "",
      apartNamePlaceHolder: "아파트 이름을 입력하세요. ex) 푸르지오",
      sidoOptions: [],
      gugunOptions: [
        { value: null, text: "구/군 선택" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option", disabled: true },
      ],
      dongOptions: [
        { value: null, text: "동 선택" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option", disabled: true },
      ],
      options: {
        code: "",
        name: "",
      },
      code: "",
      name: "",
    };
  },

  methods: {
    // axios를 통해 rest server에서 sido 정보 얻어오기
    getSidoList() {
      http.get("http://localhost:9999/server/region/sido").then(({ data }) => {
        console.log("data : " + data);
        this.sidoOptions = data;
        console.log("option : " + this.sidoOptions);
        console.log("글보기 완료!!!");
      });
    },

    // 받아온 시/도 데이터 렌더링
    makeSidoSelectList() {},
    getSidoOptions() {},
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
  },

  created() {
    this.getSidoList();
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.formInput {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}
</style>
