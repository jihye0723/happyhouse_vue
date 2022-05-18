<template>
  <b-row>
    <b-col class="align-text-center">
      <b-tr>
        <router-link
          :to="{ name: 'interestdetail', params: { aptname: aptname } }"
        >
          <b-td>{{ aptname }}</b-td></router-link
        >
        <b-td><b-button @click="remove">삭제</b-button></b-td>
      </b-tr>
    </b-col>
  </b-row>
</template>

<script>
import http from "@/api/http";
export default {
  props: {
    aptname: String,
  },
  created() {},
  methods: {
    remove() {
      let userid = this.$store.state.userid;
      console.log(this.aptname + " " + userid);
      http
        .delete(`/interest/${this.aptname}/${this.$store.state.userid}`)
        .then(({ data }) => {
          console.log(data);

          window.location.reload();
        });
    },
  },
};
</script>

<style></style>
