<template>
  <div>
    <div>house list page</div>
    <div>{{ apartName }}</div>
    <div>{{ dongCode }}</div>
  </div>
</template>

<script>
export default {
  name: "HappyhouseVueHouseList",

  data() {
    return {
      apartName: "",
      dongCode: "",
    };
  },

  created() {
    this.settingSearchParams();
  },
  mounted() {},

  methods: {
    settingSearchParams() {
      this.apartName = this.$route.params.name;
      this.dongCode = this.$route.params.code;
      console.log(this.apartName + " " + this.dongCode);
    },
  },
};
</script>

<style lang="scss" scoped></style>
