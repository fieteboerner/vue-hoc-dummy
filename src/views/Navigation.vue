<template>
  <NavigationTree :items="navigation" class="navigation-tree" />
</template>

<script>
import NavigationTree from '@/components/Navigation/NavigationTree.vue';

export default {
  name: 'Navigation',
  components: { NavigationTree },
  data() {
    return {
      navigation: [
        { label: 'Home', icon: 'home', exact: true, route: '/' },
        { label: 'Cards', icon: 'credit-card', route: '/cards', children: [
          { label: 'Card-1', icon: 'credit-card', route: '/cards/card-1' },
          { label: 'Card-2', icon: 'credit-card', route: '/cards/card-3' },
          { label: 'Card-3', icon: 'credit-card', route: '/cards/card-3', children: [
            { label: 'Card-3-1', icon: 'credit-card', route: '/cards/card-3/1' },
            { label: 'Card-3-2', icon: 'credit-card', route: '/cards/card-3/2' },
            { label: 'Card-3-3', icon: 'credit-card', route: '/cards/card-3/3' },
            { label: 'Card-3-4', icon: 'credit-card', route: '/cards/card-3/4' },
            { label: 'Card-3-5', icon: 'credit-card', route: '/cards/card-3/5' },
            { label: 'Card-3-6', icon: 'credit-card', route: '/cards/card-3/6' },
          ] },
          { label: 'Card-4', icon: 'credit-card', route: '/cards/card-4' },
        ] },
        { label: 'Colors', icon: 'palette', route: '/colors' },
        { label: 'Form', icon: 'envelope', route: '/form' },
        { label: 'Navigation', icon: 'sitemap', route: '/navigation' },
      ],
    };
  },
}
</script>

<style scoped>
.navigation-tree {
  width: 250px;
  height: 100%;
  box-shadow: 0 1px 2px rgba(0, 0, 0,0.25);
}
</style>
