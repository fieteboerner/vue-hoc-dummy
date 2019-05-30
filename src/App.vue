<template>
  <div id="app">
    <nav class="navigation">
      <router-link class="navigation-item" active-class="is-active" exact to="/">Home</router-link>
      <router-link class="navigation-item" active-class="is-active" exact to="/form">Form</router-link>
      <router-link class="navigation-item" active-class="is-active" exact to="/progress-bar">ProgressBar</router-link>
    </nav>
    <div class="content">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* margin-top: 60px; */
  padding-left: 250px;
}

.navigation {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 250px;
  background-color: rgba(0, 0, 0, 0.05);

  .navigation-item {
    display: block;
    padding: 1em;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    color: black;
    text-decoration: none;

    &:hover {
      background-color: rgba(0, 0, 0, 0.075);
    }

    &.is-active {
      background-color: rgba(0, 0, 0, 0.075);
    }
  }
}

.content {
  padding: 1em;
}
</style>
