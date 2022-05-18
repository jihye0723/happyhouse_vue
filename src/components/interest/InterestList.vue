<template>
  <b-container class="col-10 mt-3">
    <b-row>
      <b-col>
        <b-alert show><h3>관심 목록</h3></b-alert>
      </b-col></b-row
    >
    <!-- <b-row class="mb-1">
      <b-col class="text-right">
        <b-form-select v-model="likesort" :options="options"></b-form-select>
      </b-col>
    </b-row> -->
    <b-row>
      <b-col>
        <b-table-simple hover responsive>
          <b-thead bg-variant="gray">
            <b-tr>
              <b-th>아파트명</b-th>
              <b-th></b-th>
              <b-th>-</b-th>
            </b-tr>
          </b-thead>
          <tbody>
            <!-- 하위 component인 ListRow에 데이터 전달(props) -->
            <interest-list-item
              v-for="(interest, index) in interests"
              :key="index"
              v-bind="interest"
            />
          </tbody>
        </b-table-simple>
      </b-col>
      <!-- <b-col v-else class="text-center">도서 목록이 없습니다.</b-col> -->
    </b-row>
  </b-container>
</template>

<script>
import http from "@/api/http";
import InterestListItem from "@/components/interest/InterestListItem.vue";
export default {
  components: {
    InterestListItem,
  },
  data() {
    return {
      interests: [],
      //   options: [
      //     { value: "up", text: "찜 많은순" },
      //     { value: "down", text: "찜 적은순" },
      //   ],
    };
  },
  created() {
    let userid = this.$store.state.userid;
    console.log("관심목록조회할 사람 : " + userid);
    http.get("/interest/" + userid).then(({ data }) => {
      console.log(data);
      data.forEach((element) => {
        let interest = {
          aptname: element,
        };
        this.interests.push(interest);
      });
    });
  },
};
</script>

<style></style>
