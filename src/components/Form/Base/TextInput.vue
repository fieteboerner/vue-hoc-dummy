<template>
   <el-input
        :type="type"
        :value="value"
        :size="size"
        :id="name"
        @input="(value) => $emit('input', value)" />
</template>

<script>
export default {
    name: 'BaseText',
    props: {
        name: {
            type: String,
        },
        type: {
            type: String,
            default: 'text',
        },
        value: {
            type: [String, Number],
        },
        size: {
            type: String,
        }
    },
}
</script>

<docs>
## Examples

```jsx
<BaseText value="test" />
```
</docs>