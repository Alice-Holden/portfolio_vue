<template>
<div class="home-page">
  <div class="home-page__background">
    <div class="home-page__title">
      <div>Welcome to our website</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "HomePage.vue"
}
</script>

<style scoped lang="scss">
.home-page{
  width: 100vw;
  height: 100vh;
  background: url("/public/img/pexels-steve-johnson-15448473.jpg") no-repeat;
  background-size: cover;
  &__title{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: #e6e6e6;
    font-weight: 700;
    font-size: 24px;
  }
}
@media (min-width: 1440px) {
  .home-page{
    &__title{
      font-size: 48px;
    }
  }
}
</style>