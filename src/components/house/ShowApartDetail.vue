<template>
  <div>
    <b-container v-if="houseinfo" class="bv-example-row mt-3">
      <h3><strong>아파트 상세정보</strong></h3>
      <b-row row>
        <b-col>
          <div class="text-align-center">매매번호</div>
          <div class="text-align-center">거래금액</div>
          <div class="text-align-center">면적</div>
          <div class="text-align-center">거래날짜</div>
        </b-col>
        <b-col>
          <b-row>{{ house.no }}</b-row>
          <b-row>{{ house.dealAmount }}원 </b-row>
          <b-row>{{ house.area }} (m2)</b-row>
          <b-row
            >{{ house.dealYear }}년 {{ house.dealMonth }}월
            {{ house.dealDay }}일</b-row
          >
        </b-col>
      </b-row>
      <b-row class="mx-auto align-center">
        <b-button class="m-2" variant="success" @click="clickStarbucks"
          >주변 스타벅스 매장</b-button
        >
        <b-button class="m-2" variant="primary" @click="clickInterest"
          >관심 등록</b-button
        >
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
import http from "@/api/http";
export default {
  name: "ShowApartDetail",

  data() {
    return {};
  },

  computed: {
    ...mapState(["house", "houseinfo"]),
  },
  // filters: {
  //   price(value) {
  //     if (!value) return value;
  //     value = parseInt(value.replace(" ", "").replace(",", "")) * 10000;
  //     return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  //   },
  // },
  mounted() {},
  methods: {
    clickStarbucks() {
      console.log(this.$store.state.house);
      const dongCode = this.$store.state.houseinfo.dongCode;
      this.$store.dispatch("clickStarbucks", dongCode);
    },
    clickInterest() {
      const userid = this.$store.state.userid;
      const aptCode = this.$store.state.houseinfo.aptCode;
      if (userid == "") {
        alert("로그인 후 이용하세요");
      }
      console.log(userid, aptCode);
      let params = {
        userid: userid,
        aptCode: aptCode,
      };
      http.post("/interest/regist", params).then((response) => {
        if (response.data == 1) {
          alert("관심매물에 등록되었습니다.");
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
