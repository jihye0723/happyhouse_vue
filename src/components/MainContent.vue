<template>
  <div>
    <HomeComponent></HomeComponent>
  </div>
</template>

<script>
import HomeView from "../views/HomeView.vue";
import HomeComponent from "./home/HomeComponent.vue";
export default {
  name: "HappyhouseVueMainContent",
  components: {
    HomeView,
    HomeComponent,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
