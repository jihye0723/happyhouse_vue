<template>
  <div class="b-container text-center mt-4">
    <b-form id="userform">
      <input type="hidden" name="level" id="level" value="0" />
      <button type="button" id="userRegist">일반 회원</button>
    </b-form>

    <form id="sellerform">
      <input type="hidden" name="level" id="level" value="1" />
      <button type="button" id="sellerRegist">중개 회원</button>
    </form>
  </div>
</template>
<script>
export default {};
</script>

<style></style>
