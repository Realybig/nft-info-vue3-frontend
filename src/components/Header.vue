<template>
  <div id="menu">
    <div class="header-logo">数藏说明书</div>
    <div class="header-menu"><Menu :data="list"></Menu></div>
    <div class="header-login">登录</div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs } from 'vue';
import Menu from './header/Menu.vue';
type menuType = {
  id: number;
  title: string;
  href: string;
  icon: string;
}[];
const list: menuType = reactive([
  { id: 1, title: '首页', href: '/', icon: '' },
  { id: 2, title: '幻藏', href: '/huancang', icon: '' },
  { id: 2, title: '关于', href: '/about', icon: '' },
]);
// const menuList = toRefs(list);
// console.log(menuList)
</script>

<style lang="scss">
#menu {
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #545c64;
  color: #fff;
  line-height: 58px;
  z-index: 5000;

  .header-logo,
  .header-login {
    border-bottom: solid 1px var(--el-menu-border-color);
  }

  .header-logo {
    padding: 0 20px;
    width: 100px;
  }
  .header-menu {
    flex: 1;
  }
  .header-login {
    min-width: 100px;
  }
}
</style>
