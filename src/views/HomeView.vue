<script setup>
import {ref} from "vue";
import WelcomeComponent from "@/components/WelcomeComponent.vue";
import HomeComponent from "@/components/HomeComponent.vue";


const welcomeComponentAlreadyShown = Boolean(localStorage.getItem('welcomeComponentAlreadyShown'))
const showWelcomePage = ref(!welcomeComponentAlreadyShown)

function hideWelcomePage() {
  showWelcomePage.value = false
  localStorage.setItem('welcomeComponentAlreadyShown', String(true))
}

</script>

<template>
  <WelcomeComponent
      v-if="showWelcomePage"
      @hideWelcomePage="hideWelcomePage"
  />
  <HomeComponent />
</template>

<style lang="scss">

</style>