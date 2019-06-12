<template>
  <li class="item" :class="{ 'is-nested': hasChildren }">
    <!-- Router Link -->
    <RouterLink
      ref="link"
      :key="item.label"
      v-if="item.route"
      class="label"
      :active-class="activeClass"
      :exact-class="exactClass"
      :event="hasChildren ? '' : 'click'"
      :exact="item.exact"
      :to="item.route"
      @click.native="toggle"
    >
      <i class="icon fa" :class="`fa-${item.icon}`"/>
      <span>{{ item.label }}</span>
      <i v-if="hasChildren" class="fa fa-angle-down" :class="{ 'fa-rotate-90': !isOpen}"/>
    </RouterLink>
    <!-- External Link -->
    <a
      v-else-if="item.external"
      :key="item.label"
      :href="item.external"
      class="label"
      target="_blank"
    >
      <i class="icon fa" :class="`fa-${item.icon}`"/>
      <span>{{ item.label }}</span>
      <i class="icon fa fa-sm fa-external-link-alt"/>
    </a>
    <!-- Children -->
    <ul v-if="hasChildren" class="list" :class="{ 'is-open': isOpen }">
      <NavigationTreeNodeItem v-for="child in item.children" :key="child.label" :item="child"/>
    </ul>
  </li>
</template>

<script>
export default {
  name: "NavigationTreeNodeItem",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      activeClass: "is-active",
      exactClass: "is-active",
      isOpen: false
    };
  },
  computed: {
    hasChildren() {
      return !!this.item.children;
    }
  },
  mounted() {
    this.isOpen = this.getInitialOpenState();
  },
  methods: {
    getInitialOpenState() {
      if (!this.$refs.link) return;

      const linkElement = this.$refs.link.$el;
      const isActive = linkElement.classList.contains(this.activeClass);
      const isExact = linkElement.classList.contains(this.exactClass);

      return Boolean(isActive || isExact);
    },
    toggle() {
      if (this.hasChildren) {
        this.isOpen = !this.isOpen;
      }
    },
  },
};
</script>