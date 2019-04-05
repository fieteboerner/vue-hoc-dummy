<template>
   <ElInput
        :type="type"
        :value="value"
        :size="size"
        :id="name"
        v-on="listeners" />
</template>

<script>
import { Input as ElInput } from 'element-ui';

export default {
    name: 'BaseText',
    components: { ElInput },
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
    computed: {
        listeners() {
            return {
                ...this.$listeners,
                input: value => this.$emit('input', value),
            };
        },
    },
}
</script>

<docs>
## Examples

```jsx
<BaseText value="test" />
```
</docs>