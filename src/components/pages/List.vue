<template>
  <div>
    list
    <div v-for="item in data" :key="item.name">
      {{ item.name }}
      <el-avatar shape="square" :src="item.img"></el-avatar>
    </div>
    <el-button @click="change()">按钮</el-button>
  </div>
</template>

<script setup>
import { reactive, toRefs } from 'vue';
const { data } = defineProps(['data']);

function change() {
  console.log(data);
}
</script>

<style></style>
