<template>
  <div id="app">
    <router-link to="/">Home</router-link> |
    <router-link to="/form">Form</router-link> |
    <router-link to="/progress-bar">ProgressBar</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
