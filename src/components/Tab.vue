<template>
  <div>
    <div>
      <div @click="clickTab()">tab1</div>
      <div @click="clickTab()">tab2</div>
    </div>
    <div>
      {{ isShow }}
      {{ count }}
      <div v-if="isShow">content1</div>
      <div v-if="!isShow">content2</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

let isShow = ref(false)
let count = ref(0)
console.log(count)
function clickTab() {
  isShow.value = !isShow.value
}
</script>

<style>
</style>