<template>
  <b-row>
    <b-col class="align-text-center">
      <b-tr>
        <router-link
          :to="{ name: 'interestdetail', params: { aptname: aptname } }"
        >
          <b-td>{{ aptname }}</b-td></router-link
        >
      </b-tr>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    aptname: String,
  },
  created() {},
};
</script>

<style></style>
