<template>
  <div>
    <b-container>
      <b-button to="/house/regist" variant="outline-primary" class="m-2"
        >매물 등록</b-button
      >
      <b-button to="/house/search" variant="outline-primary" class="m-2"
        >아파트 정보 검색</b-button
      >
      <b-button to="/map" variant="outline-primary" class="m-2"
        >Google Map</b-button
      >
    </b-container>
  </div>
</template>

<script>
export default {
  name: "HappyhouseVueHomeComponent",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
