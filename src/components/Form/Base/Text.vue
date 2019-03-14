<template>
   <input :type="type" :value="value" @input="$emit('input', $event.target.value)" />
</template>

<script>
export default {
    name: 'BaseText',
    props: {
        type: {
            type: String,
            default: 'text',
        },
        value: {
            type: [String, Number],
        }
    },
}
</script>
