<template>
  <div class="flex">
    <div class="progress-indicator self-start bg-gray-100 ml-auto my-16 pl-12 py-8 rounded-l shadow-md">
        <VerticalSteps :steps="steps" :value="value" @input="updateValue" />
    </div>
    <div class="bg-white content mr-auto p-12 rounded-lg shadow-2xl w-1/2">
      <div class="text-center pb-6 text-2xl">
        <span v-if="currentStep.icon" class="p-4 bg-gray-300 rounded-full bg-purple-100 text-purple-700">
          <i class="fa" :class="currentStep.icon" />
        </span>

        <h3 class="font-medium my-6">{{ currentStep.label }}</h3>
      </div>

      <div>
          <slot />
      </div>
      <div class="mt-12">
        <button
          class="bg-purple-700 px-5 py-3 rounded-full text-white float-right font-semibold hover:bg-purple-600 hover:shadow-lg focus:outline-none"
          @click="goNext"
        >
          Go to next Step
          <i class="fa fa-chevron-right pl-2 align-middle"></i>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import VerticalSteps from '@/components/Progress/VerticalSteps';

export default {
    name: "InstallationWizard",
    components: { VerticalSteps },
    props: {
        value: Number,
    },
    mounted() {
        this.updateStepVisibility(this.value);
    },
    data() {
        return {
            children: this.$children,
        };
    },
    computed: {
        stepComponents() {
            return this.children.filter(child => child.isStep);
        },
        currentStep() {
            return this.stepComponents[this.value] || {};
        },
        steps() {
            return this.stepComponents.map(component => {
                return { label: component.label };
            });
        },
        hasNext() {
            return this.stepComponents[this.value + 1];
        }
    },
    watch: {
        value: {
            immediate: true,
            handler(value) {
                this.updateStepVisibility(value);
            }
        }
    },
    methods: {
        goNext() {
            if (this.hasNext) {
                this.updateValue(this.value + 1);
            }
        },
        updateValue(stepIndex) {
            this.updateStepVisibility(stepIndex);
            this.$emit('input', stepIndex);
        },
        updateStepVisibility(stepIndex) {
            this.stepComponents.forEach((component, index) => component.visible = index === stepIndex);
        },
    },
}
</script>

<style lang="scss" scoped>
.progress-indicator {
    width: 20rem;
}
</style>
