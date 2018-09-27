<template>
  <div id="app">
     <app-navigation class="topbar"></app-navigation>
     <transition name="transition" appear mode="out-in">
      <router-view/>
     </transition>
  </div>
</template>

<script>
import AppNavigation from '@/components/navigation.vue'
export default {
  name: 'App',
  components: { AppNavigation }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
