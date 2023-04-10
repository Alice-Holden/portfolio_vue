<template>
<div class="menu">
  <router-link
      v-for="(item, itemKey) in menuItems"
      :key="itemKey"
      :to="item.path"
      class="menu__item"
  >
    {{ item.title }}
  </router-link>
</div>
</template>

<script>
import {MENU_ITEMS} from "@/components/constants";

export default {
  name: "SiteMenu.vue",
  data() {
    return {
      menuItems: MENU_ITEMS,
    }
  }
}
</script>

<style scoped lang="scss">
.menu{
  width: fit-content;
  display: flex;
  &__item{
    color: #e6e6e6;
    font-size: 18px;
    padding: 20px 30px 10px 30px;
    text-decoration: none;
    cursor: pointer;
    &:hover{
      border-bottom: 1px solid #e6e6e6;
    }
  }
}
</style>