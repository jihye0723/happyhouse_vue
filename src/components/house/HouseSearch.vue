<template>
  <div>
    <b-container>
      <h2>House Search</h2>
      <b-button variant="primary" class="m-2" @click="clickDongSearch"
        >동이름으로 검색</b-button
      >
      <b-button variant="primary" class="m-2" @click="clickApartSearch"
        >아파트 이름으로 검색</b-button
      >
    </b-container>
    <b-form v-if="dongSearch">
      <b-form-select
        v-model="sidoSelected"
        :options="sidoOptions"
      ></b-form-select>
      <b-form-select
        v-model="gugunSelected"
        :options="gugunOptions"
      ></b-form-select>
      <b-form-select
        v-model="dongSelected"
        :options="dongOptions"
      ></b-form-select>
    </b-form>

    <b-form v-if="apartSearch">
      <div><strong>아파트 이름</strong></div>
      <b-form-input
        class="formInput"
        v-model="apartName"
        :placeholder="apartNamePlaceHolder"
      />
    </b-form>
  </div>
</template>

<script>
export default {
  name: "HappyhouseVueHouseSearch",

  data() {
    return {
      dongSearch: true,
      apartSearch: false,
      sidoSelected: null,
      gugunSelected: null,
      dongSelected: null,
      apartName: "",
      apartNamePlaceHolder: "아파트 이름을 입력하세요. ex) 푸르지오",
      sidoOptions: [
        { value: null, text: "시/도 선택" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option", disabled: true },
      ],
      gugunOptions: [
        { value: null, text: "시/도 선택" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option", disabled: true },
      ],
      dongOptions: [
        { value: null, text: "시/도 선택" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option", disabled: true },
      ],
    };
  },

  mounted() {},

  methods: {
    clickDongSearch() {
      this.dongSearch = true;
      this.apartSearch = false;
    },
    clickApartSearch() {
      this.dongSearch = false;
      this.apartSearch = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.formInput {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}
</style>
