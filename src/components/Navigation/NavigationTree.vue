<template>
  <nav class="navigation-tree">
   <ul class="list">
       <NavigationTreeNodeItem v-for="item in items" :key="item.lable" :item="item" />
   </ul>
  </nav>
</template>

<script>
import NavigationTreeNodeItem from '@/components/Navigation/NavigationTreeNodeItem.vue';

export default {
  name: "NavigationTree",
  components: { NavigationTreeNodeItem },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
};
</script>

<style lang="scss">
$color-item-background: #222d32;
$color-item-text: #b8c7ce;

$color-active-item-background: #1e282c;
$color-active-item-border: #3c8dbc;
$color-active-item-text: #ffffff;

$color-navigation-item-label: #8aa4af;
$color-navigation-item: #222d32;
$color-navigation-nested-item: #2c3b41;

.navigation-tree {
  background: $color-item-background;
  .item {
    .label {
      display: flex;
      align-items: center;
      padding: 1em;
      background-color: $color-item-background;
      color: $color-item-text;
      cursor: pointer;
      border-left: 4px solid $color-item-background;

      .icon {
        flex-shrink: 0;
        margin-right: 1em;
      }

      span {
        flex-grow: 1;
      }

      &:hover {
        background-color: $color-active-item-background;
        color: $color-active-item-text;
        border-left-color: $color-active-item-background;
      }

      &.is-active {
        background-color: $color-active-item-background;
        color: $color-active-item-text;
        border-left-color: $color-active-item-border;
      }
    }

    &.is-nested {
      background-color: $color-navigation-nested-item;
      .list {
        display: none;
        padding-left: 1em;

        &.is-open {
            display: block;
        }
      }

      .item {
        .label {
          padding: 0.75em 1em;
          border-left: none;
          background-color: $color-navigation-nested-item;

          &.is-active {
            color: white;
          }
        }
      }
    }
  }
}
</style>
