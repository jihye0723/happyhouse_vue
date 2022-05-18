<template>
  <div>
    <b-container>
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
        <div><strong>아파트 코드</strong></div>
        <b-form-input
          class="formInput m-3"
          v-model="apartCode"
          :placeholder="apartCodePlaceHolder"
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
        <div><strong>거래년도</strong></div>
        <b-form-input class="formInput m-3" v-model="dealYear" />
        <div><strong>거래월</strong></div>
        <b-form-input class="formInput m-3" v-model="dealMonth" />
        <div><strong>거래일</strong></div>
        <b-form-input class="formInput m-3" v-model="dealDay" />
        <b-button variant="primary" class="m-5" @click="registDealInfo"
          >매물 등록</b-button
        >
      </b-form>
    </b-container>
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
      dealYear: "",
      dealMonth: "",
      dealDay: "",
      apartCode: "",
      dealAmount: "",
      area: "",
      apartCodePlaceHolder: "",
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
    registDealInfo() {
      const data = {
        aptCode: this.apartCode,
        dealAmount: this.dealAmount,
        dealYear: this.dealYear,
        dealMonth: this.dealMonth,
        dealDay: this.dealDay,
        area: this.area,
        floor: this.floor,
      };
      http.post("/resthouse/registDealInfo", data).then(({ data }) => {
        console.log(data);
        alert("매물 등록 완료");
        this.$router.path("/");
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
