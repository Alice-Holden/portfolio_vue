<script setup>
import {MENU_ITEMS} from "@/components/constants";
const menuItems = MENU_ITEMS
//methods to show/hide menu
function showSubMenu(itemKey) {
  if (itemKey === "MODULES") {
    document.querySelector('.menu__children').style.display = 'block'
  } else {
    document.querySelector('.menu__children').style.display = 'none'
  }
}
</script>
<template>
<div class="menu">
  <router-link
      v-for="(item, itemKey) in menuItems"
      :key="itemKey"
      :to="item.path"
      class="menu__item"
      @mousemove="showSubMenu(itemKey)"
  >
    {{ item.title }}
    <div
        v-if="(item.children || []).length > 0"
        class="menu__children"
        @mouseleave="showSubMenu('child')"
    >
      <router-link
          v-for="child in item.children"
          :key="child.path"
          :to="child.path"
          class="menu__child"
      >
        {{child.title}}
      </router-link>
    </div>
  </router-link>
</div>
</template>

<style scoped lang="scss">
.menu{
  width: fit-content;
  display: flex;
  border-bottom: 1px solid #fff;
  &__item{
    color: #e6e6e6;
    position: relative;
    font-size: 18px;
    padding: 15px 30px;
    text-decoration: none;
    cursor: pointer;
    transition: all .3s;
    &:hover{
      background: rgba(255, 255, 255, 0.1);
    }
  }
  &__children{
    margin: 0 -30px;
    width: 217px;
    border-radius: 0 0 4px 4px;
    top: 57px;
    border-bottom: 1px solid;
    border-right: 1px solid;
    border-left: 1px solid;
    position: absolute;
    display: none;
  }
  &__child{
    color: #e6e6e6;
    padding: 15px 30px;
    text-decoration: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    &:hover{
      background: rgba(255, 255, 255, 0.1);
    }

  }
}
</style>