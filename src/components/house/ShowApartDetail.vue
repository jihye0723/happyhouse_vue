<template>
  <div>
    <b-container v-if="houseinfo" class="bv-example-row mt-3">
      <h3><strong>아파트 상세정보</strong></h3>
      <b-table>
        <tr>
          <th>거래번호</th>
          <th>거래 금액</th>
          <th>면적</th>
        </tr>
        <tr>
          <td>{{ house.no }}</td>
          <td>{{ house.dealAmount }}만원</td>
          <td>{{ house.area }}(m2)</td>
        </tr>
      </b-table>
      <b-row>
        <label for="no">거래번호:</label>
        <b-input id="no" disabled v-model="house.no"></b-input>
      </b-row>
      <b-row>
        <label for="dealamount">거래금액:</label>
        <b-input id="dealamount" disabled v-model="house.dealAmount"></b-input>
      </b-row>
      <b-row>
        <label for="area">면적:</label>
        <b-input id="area" disabled :value="house.area"></b-input>
      </b-row>
      <b-row>
        <label for="dealdate">거래날짜:</label>
        <b-input id="dealdate" disabled
          >{{ house.dealYear }}년 {{ house.dealMonth }}월
          {{ house.dealDay }}일</b-input
        >
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ShowApartDetail",

  data() {
    return {};
  },

  computed: {
    ...mapState(["house", "houseinfo"]),
  },
  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
