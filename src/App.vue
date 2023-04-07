<template>
  <div id="app">
    <div>
      <WelcomePage
          v-if="showWelcomePage"
          class="welcome-page"
          :class="{ 'welcome-page--hidden': pageHidden }"
      />
      <HomePage/>
    </div>
  </div>
</template>

<script>
import WelcomePage from './components/WelcomePage.vue'
import HomePage from './components/HomePage.vue'

export default {
  name: 'App',
  data() {
    return {
      showWelcomePage: true,
      pageHidden: false
    }
  },
  components: {
    WelcomePage,
    HomePage
  },
  mounted() {
    // hide welcome page after 4 seconds
    setTimeout(() => {
      this.showWelcomePage = false
    }, 5000),
    setTimeout(() => {
      this.pageHidden = true
    }, 2000)
  }
}
</script>

<style lang="scss">
@import "../src/sass/app.scss";
#app {
  font-family: Montserrat, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
}
</style>
<style scoped lang="scss">
.welcome-page{
  bottom: 0;
  top: 0;
  position: absolute;
  left: 0;
  opacity: 1;
  transition: opacity 3s;
  &--hidden{
    opacity: 0;
  }
}
</style>
