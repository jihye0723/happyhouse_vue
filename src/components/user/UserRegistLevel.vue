<template>
  <div class="b-container text-center mt-4">
    <b-tabs content-class="mt-3">
      <b-tab title="일반 회원"><user-regist></user-regist></b-tab>
      <b-tab title="중개 회원"><seller-regist></seller-regist></b-tab>
    </b-tabs>
  </div>
</template>
<script>
import SellerRegist from "./SellerRegist.vue";
import UserRegist from "./UserRegist.vue";
export default {
  components: { UserRegist, SellerRegist },
  data() {
    return {};
  },
};
</script>

<style></style>
