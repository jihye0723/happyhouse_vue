<template>
  <div class="home">
    <home-component></home-component>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeComponent from "../components/home/HomeComponent.vue";

export default {
  name: "HomeView",
  components: {
    HomeComponent,
  },
};
</script>
