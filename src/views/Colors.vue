<template>
  <div>
    <h1>Colors</h1>

    <div class="swatches">
      <ColorSwatch v-for="(color, index) in colors"
                   :key="index"
                   :name="color.name"
                   :color="color.color"
                   />
    </div>
  </div>
</template>

<script>
import ColorSwatch from '@/components/Cards/ColorSwatch.vue';
import tailwindConfig from '../../tail.config';

export default {
  name: 'Colors',
  components: { ColorSwatch },
  computed: {
    colors() {
      const allColors = [];
      const colors = tailwindConfig.theme.colors;

      Object.keys(colors).forEach(colorKey => {
        const color = colors[colorKey];
        if(color instanceof Object) {
          Object.keys(color).forEach(subColorKey => {
            allColors.push({ name: `${colorKey}-${subColorKey}`, color: color[subColorKey] });
          });
        } else {
          allColors.push({ name: colorKey, color });
        }
      });

      return allColors;
    },
  },
}
</script>

<style lang="scss" scoped>
  .swatches {
    display: grid;
    grid-gap: 1em;
    grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
  }
</style>

