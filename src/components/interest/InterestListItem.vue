<template>
  <b-row>
    <b-col cols="10" class="align-self-center">
      <b-tr>
        <b-td>{{ aptname }} </b-td>
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
