<template>
  <div class="progress">
    <div v-if="showLabel" class="progress-label">
      <slot name="label" :label="label">{{ label.percentage }} %</slot>
    </div>
    <div class="progress-content">
      <div class="progress-bar" :style="style"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
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
    },
    style() {
      const percentage = Math.min(this.percentage, 100);

      return {
        width: `${percentage}%`
      };
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

    .progress-bar {
      width: 0;
      height: 40px;
      background-color: #1ed760;
      transition: width 0.4s;
    }
  }
}
</style>
