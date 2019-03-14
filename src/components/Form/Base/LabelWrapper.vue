<template>
    <div class="form-element">
        <label :for="name">{{ label }}</label>
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
        name: {
            type: String,
        },
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

    & + & {
        margin-top: 10px;
    }
}
</style>

