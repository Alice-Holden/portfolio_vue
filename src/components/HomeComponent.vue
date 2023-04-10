<template>
<div class="home-page">
  <div class="home-page__background">
    <SiteMenu class="home-page__menu"/>
    <div class="home-page__title">
      <div>Portfolio</div>
      <div class="home-page__subtitle">Добро пожаловать на наш сайт</div>
    </div>
  </div>
</div>
</template>

<script>
import SiteMenu from "./SiteMenu.vue"
export default {
  name: "HomePage.vue",
  components: {
    SiteMenu
  }
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: #e6e6e6;
    font-weight: 700;
    font-size: 24px;
  }
  &__subtitle{
    font-size: 18px;
    font-weight: 400;
  }
  &__menu{
    position: fixed;
    top: 0;
    right: 0;
  }
}
@media (min-width: 1440px) {
  .home-page{
    &__title{
      font-size: 48px;
    }
    &__subtitle{
      font-size: 18px;
    }
  }
}
</style>