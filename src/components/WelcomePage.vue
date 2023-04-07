<template>
  <div
      class="welcome-page"
      @mousemove="$forceUpdate()"
  >
    <div class="welcome-page__letters">
      <div
          v-for="letter in letters"
          :key="letter"
          class="welcome-page__letter"
          :style="{padding: randomPadding() + 'px'}"
      >
        {{ letter}}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "WelcomePage.vue",
  data() {
    return {
      letters: [
        "H", "E", "L", "L", "O ", "-" , "W", "O", "R", "L", "D"
      ]
    }
  },
  methods: {
    // random padding for letters
    randomPadding() {
      return Math.floor(Math.random() * 20)+2
    },
  }
}
</script>

<style scoped lang="scss">
.welcome-page{
  background: #F08867;
  width: 100vw;
  height: 100vh;
  &__letters{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 16px;
  }
  &__letter{
    background: #000;
    color: #e6e6e6;
    width: fit-content;
    transition: all .4s;
    font-size: 24px;
    text-shadow: white 1px 1px 6px;
  }
}
@media (min-width: 1440px) {
  .welcome-page{
    &__letter{
      font-size: 32px;
    }
  }
}
</style>