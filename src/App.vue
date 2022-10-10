<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Home from './views/home.vue'
import headers from './views/headers.vue'
import footers from './views/footer.vue'
import './assets/css/golad.css'
</script>

<template>
  <keep-alive><headers></headers></keep-alive>
  <!-- <router-view class="view-headers" name="headers"></router-view> -->
  <router-view></router-view>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <keep-alive>
    <footers></footers>
  </keep-alive> 
</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 15px;
}
.view-headers{
  width: 100%;
  height: 150px;
}
</style>
