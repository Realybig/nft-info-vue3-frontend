<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div>
    <Header></Header>
    <div id="main">
      <div class="main-wrap">
        <router-view></router-view>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<style lang="scss">
#app {
  position: absolute;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
#main {
  position: absolute;
  top: 0;
  padding: 59px 0 0 0;
  width: 100%;
  height: calc(100vh - 59px);
  z-index: 100;

  .main-wrap {
    padding: 20px;
  }
}
</style>
