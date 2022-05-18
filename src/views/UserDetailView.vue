<template>
  <b-container class="col-8">
    <b-tabs card>
      <b-tab title="회원정보" active>
        <user-detail></user-detail>
      </b-tab>
      <b-tab title="회원정보 수정">
        <user-modify></user-modify>
      </b-tab>
    </b-tabs>
    <router-view></router-view>
  </b-container>
</template>

<script>
import UserDetail from "@/components/user/UserDetail.vue";
import UserModify from "@/components/user/UserModify.vue";
export default {
  components: {
    UserDetail,
    UserModify,
  },
};
</script>

<style></style>
