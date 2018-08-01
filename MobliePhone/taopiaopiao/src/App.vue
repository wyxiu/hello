<template>
  <div id="app">
    <app-header></app-header>
    <!-- <mt-header fixed title="固定在顶部"></mt-header> -->
    <router-view> </router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from "./components/common/header/Header.vue";
import AppFooter from "./components/common/footer/Footer.vue";

export default {
  name: 'App',
  components: {
   AppHeader,
   AppFooter
  },
  created () {
    this.$store.dispatch("init");
  }
}
</script>

<style>

</style>
