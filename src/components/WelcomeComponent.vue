<script setup>
import {computed, onMounted, ref, defineEmits} from "vue";


const emit = defineEmits(['hideWelcomePage'])
const welcomeString = 'PORTFOLIO'
const pageHidden = ref(false)
const letters = computed(() => {
  return welcomeString.split('')
})


// random padding for letters
function randomPadding() {
  return Math.floor(Math.random() * 20)+2
}

onMounted(() => {
  // hide welcome page after 4 seconds
  setTimeout(() => {
    emit('hideWelcomePage')
  }, 5000)
  //enable block disappearance after 2 seconds
  setTimeout(() => {
    pageHidden.value = true
  }, 2000)
})

</script>

<template>
  <div
      class="welcome-page"
      :class="{ 'welcome-page--hidden': pageHidden }"
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
<style scoped lang="scss">
.welcome-page{
  background: #F08867;
  width: 100vw;
  height: 100vh;
  bottom: 0;
  top: 0;
  position: absolute;
  z-index: 5;
  left: 0;
  opacity: 1;
  transition: opacity 3s;

  &--hidden {
    opacity: 0;
  }

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