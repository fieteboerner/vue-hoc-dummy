<template>
  <div>
    <ElForm ref="form" :model="model" :rules="rules" label-width="150px">
      <slot/>
      <LabelWrapper label>
        <ElButton type="primary" @click="$emit('submit', model)">Send</ElButton>
      </LabelWrapper>
    </ElForm>
  </div>
</template>

<script>
import { Form as ElForm, Button as ElButton } from "element-ui";
import LabelWrapper from "../Base/LabelWrapper";

export default {
  name: "MagicForm",
  components: { ElButton, ElForm, LabelWrapper },
  props: {
    model: {
      type: Object,
      required: true
    },
    labels: {
      type: Object,
      default: () => ({})
    },
    rules: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return { fields: [], magicForm: true };
  },
  methods: {
    registerField(field) {
      this.fields.push(field);
    },
    unregisterField(field) {
      this.fields = this.fields.filter(f => f !== field);
    }
  }
};
</script>

