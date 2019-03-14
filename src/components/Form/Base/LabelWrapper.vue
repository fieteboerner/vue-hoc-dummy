<template>
    <div class="form-element">
        <label>{{ label }}</label>
        <div class="form-element-body">
            <slot />
            <div class="description" v-if="description">{{ description }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LabelWrapper',
    props: {
        label: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        }
    },
}
</script>

<style lang="scss" scoped>

.form-element {
    display: flex;

    label {
        width: 200px;
    }

    .form-element-body {
        flex-grow: 1;

        .description {
            font-size: small;
        }
    }
}
</style>

