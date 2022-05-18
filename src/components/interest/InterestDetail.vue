<template>
  <b-container class="col-8 mt-3">
    <b-row>
      <b-col>
        <b-alert show><h5>aptname</h5></b-alert>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <b-table-simple hover responsive>
          <b-thead bg-variant="gray">
            <b-tr>
              <b-th>아파트명</b-th>
              <b-th>가격</b-th>
              <b-th>면적</b-th>
              <b-th>층</b-th>
            </b-tr>
          </b-thead>
          <tbody>
            <!-- 하위 component인 ListRow에 데이터 전달(props) -->
            <interest-detail-item
              v-for="(interest, index) in interests"
              :key="index"
              v-bind="interest"
            />
          </tbody>
        </b-table-simple>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import http from "@/api/http";
import InterestDetailItem from "@/components/interest/InterestDetailItem.vue";
export default {
  name: "InterestDetail",
  components: {
    InterestDetailItem,
  },
  data() {
    return {
      interests: [],
    };
  },
  created() {
    let aptname = this.$route.params.aptname;
    http.get("/interest/list/" + aptname).then(({ data }) => {
      console.log(data);
      this.interests = data;
    });
  },
};
</script>

<style></style>
