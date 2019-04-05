<template>
   <ElSelect
        :value="value"
        :id="name"
        class="select"
        @input="(value) => $emit('input', value)">
        <ElOption v-for="item in items"
               :key="item.value"
               :label="item.label"
               :value="item.value">
            <slot v-if="$scopedSlots.option" name="option" :option="item" />
        </ElOption>
   </ElSelect>
</template>

<script>
import {
    Option as ElOption,
    Select as ElSelect,
} from 'element-ui';

export default {
    name: 'BaseSelect',
    components: { ElOption, ElSelect },
    props: {
        name: {
            type: String,
        },
        value: {
            type: [String, Number],
        },
        items: {
            type: Array,
            required: true,
        }
    },
}
</script>

<style lang="scss" scoped>
    .select {
        display: block;
    }
</style>

