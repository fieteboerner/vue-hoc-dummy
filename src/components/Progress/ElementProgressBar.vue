<template>
  <div class="progress">
    <div v-if="showLabel" class="progress-label">
      <slot name="label" :label="label">{{ label.percentage }} %</slot>
    </div>
    <div class="progress-content">
      <ElProgress :stroke-width="20" :percentage="percentage" :show-text="false"/>
    </div>
  </div>
</template>

<script>
import { Progress as ElProgress } from "element-ui";

export default {
  name: "ElementProgressBar",
  components: { ElProgress },
  props: {
    target: {
      type: Number,
      default: 100
    },
    value: {
      type: Number,
      required: true
    },
    showLabel: {
      type: Boolean
    }
  },
  computed: {
    label() {
      const { percentage, target, value } = this;

      return { percentage, target, value };
    },
    percentage() {
      return Math.round((this.value * 100) / this.target);
    }
  }
};
</script>

<style lang="scss" scoped>
.progress {
  display: flex;
  margin-bottom: 10px;

  .progress-label {
    width: 150px;
  }

  .progress-content {
    flex: 1;
  }
}
</style>
