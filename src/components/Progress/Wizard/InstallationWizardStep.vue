<template>
  <div v-if="visible">
    <slot/>
  </div>
</template>
<script>
export default {
  name: 'InstallationWizardStep',
  props: {
    label: {
      type: String,
      required: true
    },
    icon: String
  },
  data() {
    return { visible: false, isStep: true };
  }
};
</script>

