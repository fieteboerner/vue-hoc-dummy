<template>
   <ElInput
        :type="type"
        :value="value"
        :size="size"
        :id="name"
        v-on="$listeners"
        @input="(value) => $emit('input', value)" />
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
}
</script>

<docs>
## Examples

```jsx
<BaseText value="test" />
```
</docs>