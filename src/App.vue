<template>
  <div id="app">
    <NavigationTree :items="navigation" class="navigation" />
    <div class="content">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
import './assets/css/tailwind.css';
import NavigationTree from '@/components/Navigation/NavigationTree.vue';

export default {
  name: 'App',
  components: { NavigationTree },
  data() {
    return {
      navigation: [
        { label: 'Home', icon: 'home', exact: true, route: '/' },
        { label: 'Colors', icon: 'palette', route: '/colors' },
        { label: 'Form', icon: 'envelope', route: '/form' },
        { label: 'Navigation', icon: 'sitemap', route: '/navigation' },
        { label: 'Transitions', icon: 'angle-double-right', route: '/transitions' },
        { label: 'Progress', icon: 'spinner', route: '/progress' },
        { label: 'Wizard', icon: 'hat-wizard', route: '/wizard' },
        { label: 'Repo', icon: 'git-square', external: 'https://github.com/fieteboerner/vue-hoc-dummy' },
      ],
    };
  },
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
h1, h2, h3, h4, h5, h6 {
  margin-top: 0.5em;
  margin-bottom: 1em;
}

body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-left: 250px;
}
</style>

<style lang="scss" scoped>
.navigation {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 250px;
}

.content {
  padding: 1em;
}
</style>
