<template>
  <div>
    home

    <List :data="DataList"></List>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import List from './pages/List.vue';

const data = [
  {
    name: 'name',
    img: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
    activityNum: 2,
    isCombo: true,
  },
  {
    name: 'name1',
    img: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
    activityNum: 2,
    isCombo: true,
  },
];
let DataList = ref(data);
</script>

<style></style>
