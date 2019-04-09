<template>
    <div class="color-swatch">
        <div class="color-swatch-preview" :style="style"></div>
        <h3 class="color-swatch-name">{{ name }}</h3>
        <div>{{ color }}</div>
    </div>
</template>

<script>
export default {
    name: 'ColorSwatch',
    props: {
        name: {
            type: String,
            reqired: true,
        },
        color: {
            type: String,
            required: true,
        },
    },
    computed: {
        style() {
            return {
                'background-color': this.color,
            };
        },
    },
}
</script>


<style lang="scss" scoped>
    .color-swatch {
        padding: 1em;
        box-shadow: 0 0 0 1px rgba(63, 63, 68, 0.05), 0 1px 3px 0 rgba(63, 63, 68, 0.15);
        overflow: hidden;
        font-size: 13px;
        border-radius: 3px;

        .color-swatch-preview {
            margin: -1em -1em 1em;
            height: 128px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        }

        .color-swatch-name {
            margin-bottom: 0.4em;
        }
    }
</style>

<docs>
Source: https://vueds.com/example/#/Design%20Tokens

</docs>
