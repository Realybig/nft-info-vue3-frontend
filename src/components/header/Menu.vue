<template>
  <div class="">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
      @select="handleSelect"
    >
      <el-menu-item
        v-for="(item, index) in data"
        :index="item.href"
        :key="item.title"
        :class="$route.path == item.href ? 'is-active' : ''"
        >{{ item.title }}</el-menu-item
      >
      <!-- <el-sub-menu index="2">
      <template #title>Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="3" disabled>Info</el-menu-item>
    <el-menu-item index="4">Orders</el-menu-item> -->
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const activeIndex = '1';

type menuType = {
  id: number;
  title: string;
  href: string;
  icon: string;
}[];
const props = defineProps<{ data: menuType }>();
const { data } = toRefs(props);
console.log(data);

function handleSelect(e: string) {
  console.log(e, data);
  // const currentMenu = data.find(item => {

  // })
  // if (e === '幻藏') router.push(data);
}
</script>

<style>
.nft-header {
  width: 100%;
}
</style>
