<template>
<div>
    <el-form ref="form" :model="model" :rules="rules" label-width="150px">
        <slot />
        <LabelWrapper label="">
			<el-button type="primary" @click="$emit('submit', model)">Send</el-button>
		</LabelWrapper>
    </el-form>
</div>
</template>

<script>
import LabelWrapper from '../Base/LabelWrapper';

export default {
	name: 'MagicForm',
	components: { LabelWrapper },
    props: {
        model: {
            type: Object,
            required: true,
        },
        labels: {
            type: Object,
            default: () => ({}),
        },
        rules: {
            type: Object,
            default: () => ({}),
        },
	},
	data() {
		return { fields: [], magicForm: true };
	},
	methods: {
		registerField(field) {
			this.fields.push(field);
		},
		unregisterField(field) {
			this.fields = this.fields.filter(f => f !== field);
		},
	}
}
</script>

