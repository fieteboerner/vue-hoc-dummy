<template>
<div>
    <form @submit.prevent="$emit('submit', model)">
        <slot />
        <input type="submit" value="Send">
    </form>
</div>
</template>

<script>
export default {
    name: 'MagicForm',
    props: {
        model: {
            type: Object,
            required: true,
        },
        labels: {
            type: Object,
            default: () => ({}),
        },
    }
}
</script>

