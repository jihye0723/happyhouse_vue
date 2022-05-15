<template>
  <div>
    <b-contanier>
      <h2>house regist</h2>
      <b-form class="col-6 mx-auto">
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
        <div><strong>아파트 명</strong></div>
        <b-form-input
          class="formInput m-3"
          v-model="apartName"
          :placeholder="apartNamePlaceHolder"
        />
        <div><strong>거래 금액</strong></div>
        <b-form-input
          class="formInput m-3"
          v-model="dealAmount"
          :placeholder="dealAmountPlaceHolder"
        />
        <div><strong>면적</strong></div>
        <b-form-input
          class="formInput m-3"
          v-model="area"
          :placeholder="areaPlaceHolder"
        />
        <b-button variant="primary" class="m-5">매물 등록</b-button>
      </b-form>
    </b-contanier>
  </div>
</template>

<script>
import http from "@/api/http";

export default {
  name: "HappyhouseVueHouseRegist",

  data() {
    return {
      sidoCode: "null",
      gugunCode: "null",
      dongCode: "null",
      sidoOptions: [],
      gugunOptions: [{ code: null, name: "구/군 선택" }],
      dongOptions: [{ code: null, name: "동 선택" }],

      apartName: "",
      dealAmount: "",
      area: "",
      apartNamePlaceHolder: "",
      dealAmountPlaceHolder: "",
      areaPlaceHolder: "",
    };
  },

  created() {
    this.getSidoList();
  },

  watch: {
    // 시도코드가 변걍되었을 떄 실행
    sidoCode: function () {
      this.settingGugunOption();
    },
    gugunCode: function () {
      this.settingDongOption();
    },
  },
  mounted() {},

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
  },
};
</script>

<style lang="scss" scoped></style>
