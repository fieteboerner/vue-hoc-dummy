<template>
    <div class="vertical-steps">
        <div class="step" v-for="(step, index) in steps" :key="step.label" :class="getStepClasses(step)">
            <div class="step-bullet"></div>
            <div class="step-line"></div>
            <div class="step-label" @click="onSelectStep(step)">{{ step.label }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VerticalSteps',
    props: {
        /** Current step index; works with v-model */
        value: Number,
        steps: {
            type: Array,
            required: true,
        },
    },
    methods: {
        getStepIndex(step) {
            return this.steps.findIndex(s => s === step) || 0;
        },
        isStepDone(step) {
            return this.getStepIndex(step) < this.value;
        },
        isCurrentStep(step) {
            return this.getStepIndex(step) === this.value;
        },
        getStepClasses(step) {

            return {
                'is-done': this.isStepDone(step),
                'is-current': this.isCurrentStep(step),
            };
        },
        onSelectStep(step) {
            if(this.isStepDone(step)) {
                this.$emit('input', this.getStepIndex(step));
            }
        }
    }
}
</script>

<style lang="scss">
@import "~@/assets/scss/components/vertical-steps";
</style>
