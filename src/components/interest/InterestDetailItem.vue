<template>
  <b-row>
    <b-col class="text-left">
      <b-tr>
        <b-td>{{ aptName }}</b-td>
        <b-td>{{ dealAmount }}</b-td>
        <b-td>{{ area }}</b-td>
        <b-td>{{ floor }}</b-td>
      </b-tr>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    aptName: String,
    dealAmount: String,
    area: String,
    floor: String,
  },
};
</script>

<style></style>
