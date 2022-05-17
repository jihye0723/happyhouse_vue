<template>
  <div>
    <b-container class="mt-3 text-center">
      <div class="m-3">
        <h2><strong>아파트 매매 목록</strong></h2>
      </div>
      <div>Search KEY : {{ apartName }}, {{ dongCode }}</div>
      <b-row>
        <b-col cols="6" align="center">
          <b-table
            striped
            hover
            id="dealtable"
            :items="tableitems"
            :fields="fields"
            :per-page="perPage"
            :current-page="currentPage"
            align="center"
            @row-clicked="selectApartName"
          >
          </b-table>
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="dealtable"
          ></b-pagination>
        </b-col>
        <b-col>
          <main-kakao-map></main-kakao-map>
          <show-apart-detail></show-apart-detail>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import http from "@/api/http";
import ShowApartDetail from "@/components/house/ShowApartDetail";
import MainKakaoMap from "@/components/house/MainKakaoMap";
export default {
  name: "HappyhouseVueHouseList",
  components: {
    ShowApartDetail,
    MainKakaoMap,
  },
  data() {
    return {
      apartName: "", // route param으로 넘겨받은 아파트 이름
      dongCode: "", // route param으로 넘겨받은 행정동 코드
      dealList: [], // apartName으로 검색한 매물 목록
      tableitems: [],
      perPage: 10,
      currentPage: 1,
      fields: [
        { key: "no", label: "매매번호" },
        { key: "apartName", label: "아파트 이름" },
        { key: "dealAmount", label: "매매가격" },
      ],
    };
  },
  computed: {
    rows() {
      return this.tableitems.length;
    },
  },

  created() {
    this.initSetting();
    this.settingSearchParams();
    if (this.dongCode == 0) this.getDealListByName();
    else this.getDealListByDongCode();
  },
  mounted() {},

  methods: {
    initSetting() {
      this.$store.dispatch("initSetting");
    },

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
      // console.log(this.dealList);
      let codes = [];
      this.dealList.forEach((element) => {
        let item = {};
        item.no = element.no;
        item.apartName = element.aptName;
        item.dealAmount = element.dealAmount;
        this.tableitems.push(item);

        // 마커 생성을 위한 아파트 코드 저장
        codes.push(element.aptCode);
        // console.log(element);
      });

      // 중복 마커 제거
      let aptcodes = [];
      codes.forEach((element) => {
        if (!aptcodes.includes(element)) {
          aptcodes.push(element);
        }
      });
      console.log("aptcodes : " + aptcodes);
      // this.$store.dispatch("updateAptcodes", aptcodes);
    }, // end of setting Table Items

    selectApartName(houseitem, index) {
      this.$store.dispatch("showApartDetail", houseitem);
      console.log("select Apart : " + index + " " + houseitem);
    },
  },
};
</script>

<style lang="scss" scoped></style>
