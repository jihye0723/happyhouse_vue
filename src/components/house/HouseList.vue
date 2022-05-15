<template>
  <div>
    <b-container>
      <div><h2>아파트 매매 목록</h2></div>
      <div>Search KEY : {{ apartName }}, {{ dongCode }}</div>
      <b-table striped hover :items="tableitems" :fields="fields"></b-table>
    </b-container>
  </div>
</template>

<script>
import http from "@/api/http";

export default {
  name: "HappyhouseVueHouseList",

  data() {
    return {
      apartName: "", // route param으로 넘겨받은 아파트 이름
      dongCode: "", // route param으로 넘겨받은 행정동 코드
      dealList: [], // apartName으로 검색한 매물 목록
      tableitems: [],
      fields: [
        { key: "apartName", label: "아파트 이름" },
        { key: "dealAmount", label: "매매가격" },
      ],
    };
  },

  created() {
    this.settingSearchParams();
    if (this.dongCode == 0) this.getDealListByName();
    else this.getDealListByDongCode();
  },
  mounted() {},

  methods: {
    settingSearchParams() {
      this.apartName = this.$route.params.name;
      this.dongCode = this.$route.params.code;
      console.log(this.apartName + " " + this.dongCode);
    }, // end of setting Search Params

    getDealListByName() {
      http
        .get("/resthouse/dealInfoByApartName/" + this.apartName)
        .then(({ data }) => {
          console.log("Get dealInfoByApartName Success");
          this.dealList = data;
          console.log(this.dealList);
          this.settingTableItems();
        });
    }, // end of get Deal List By Name

    getDealListByDongCode() {
      http
        .get("/resthouse/dealInfoByDongCode/" + this.dongCode)
        .then(({ data }) => {
          console.log("Get dealInfoByDongCode Success");
          this.dealList = data;
          console.log(this.dealList);
          this.settingTableItems();
        });
    },
    settingTableItems() {
      console.log(this.dealList);
      this.dealList.forEach((element) => {
        let item = {};

        item.apartName = element.aptName;
        item.dealAmount = element.dealAmount;
        this.tableitems.push(item);
        console.log(element);
      });
    }, // end of setting Table Items
  },
};
</script>

<style lang="scss" scoped></style>
