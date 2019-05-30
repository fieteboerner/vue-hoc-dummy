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

export default {
  name: 'Colors',
  components: { ColorSwatch },
  computed: {
    colors() {
      return [
        { name: '$color-red', color: 'rgb(235, 59, 36)'},
        { name: '$color-yellow', color: 'rgb(255, 186, 10)'},
        { name: '$color-blue', color: 'rgb(37, 138, 239)'},
        { name: '$color-cloud', color: 'rgb(233, 243, 253)'},
        { name: '$color-grey', color: 'rgb(127, 136, 145)'},
        { name: '$color-white', color: 'rgb(255, 255, 255)'},

        { name: '$color-red', color: 'rgb(235, 59, 36)'},
        { name: '$color-yellow', color: 'rgb(255, 186, 10)'},
        { name: '$color-blue', color: 'rgb(37, 138, 239)'},
        { name: '$color-cloud', color: 'rgb(233, 243, 253)'},
        { name: '$color-grey', color: 'rgb(127, 136, 145)'},
        { name: '$color-white', color: 'rgb(255, 255, 255)'},

        { name: '$color-red', color: 'rgb(235, 59, 36)'},
        { name: '$color-yellow', color: 'rgb(255, 186, 10)'},
        { name: '$color-blue', color: 'rgb(37, 138, 239)'},
        { name: '$color-cloud', color: 'rgb(233, 243, 253)'},
        { name: '$color-grey', color: 'rgb(127, 136, 145)'},
        { name: '$color-white', color: 'rgb(255, 255, 255)'},

        { name: '$color-red', color: 'rgb(235, 59, 36)'},
        { name: '$color-yellow', color: 'rgb(255, 186, 10)'},
        { name: '$color-blue', color: 'rgb(37, 138, 239)'},
        { name: '$color-cloud', color: 'rgb(233, 243, 253)'},
        { name: '$color-grey', color: 'rgb(127, 136, 145)'},
        { name: '$color-white', color: 'rgb(255, 255, 255)'},

        { name: '$color-red', color: 'rgb(235, 59, 36)'},
        { name: '$color-yellow', color: 'rgb(255, 186, 10)'},
        { name: '$color-blue', color: 'rgb(37, 138, 239)'},
        { name: '$color-cloud', color: 'rgb(233, 243, 253)'},
        { name: '$color-grey', color: 'rgb(127, 136, 145)'},
        { name: '$color-white', color: 'rgb(255, 255, 255)'},
      ];
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

