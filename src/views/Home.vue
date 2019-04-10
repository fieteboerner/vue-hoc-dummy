<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="swatches">
      <ColorSwatch v-for="color in colors" :name="color.name" :color="color.color" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ColorSwatch from '@/components/ColorSwatch.vue';

export default {
  name: 'home',
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
  }
}
</script>

<style lang="scss" scoped>
  .swatches {
    display: grid;
    grid-gap: 1em;
    grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
  }
</style>

