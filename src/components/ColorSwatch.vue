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
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        transition: all 0.4s cubic-bezier(.25,.8,.25,1);
        overflow: hidden;
        font-size: 13px;
        border-radius: 3px;

        &:hover {
            box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        }

        .color-swatch-preview {
            margin: -1em -1em 0;
            height: 128px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.12);
        }

        .color-swatch-name {
            margin-top: 0.75em;
            margin-bottom: 0.3em;
        }
    }
</style>

<docs>
Source: https://vueds.com/example/#/Design%20Tokens

</docs>
