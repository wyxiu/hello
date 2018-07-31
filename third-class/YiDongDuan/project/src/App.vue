<template>
  <div id="app">
   <app-header></app-header>
   <router-view></router-view>
   
  </div>
</template>

<script>

import AppHeader from './components/common/header/Header.vue';


export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<style>

</style>
