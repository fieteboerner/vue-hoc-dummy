<template>
   <el-select
        :value="value"
        :id="name"
        class="select"
        @input="(value) => $emit('input', value)">
        <el-option v-for="item in items"
               :key="item.value"
               :label="item.label"
               :value="item.value">
            <slot v-if="$scopedSlots.option" name="option" :option="item" />
        </el-option>
   </el-select>
</template>

<script>
export default {
    name: 'BaseSelect',
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

