import objectPath from 'object-path';
import { createHOC } from "vue-hoc";

const maxSearchLevel = 30;

export default function(name, inputComponent) {
    const renderOptions = {
        props: {
            value() {
                if (this.$props.hasOwnProperty('value') && this.value !== undefined) {
                    this.setModelValue(this.value)
                    return this.value;
                }

                return this.moduleValue;
            },
            label() {
                return this.computedLabel;
            }
        },
        listeners: {
            input(value) {
                this.setModelValue(value);
                this.$emit('input', value);
            }
        }
    };

    const options = {
        name,
        props: {
            name: {
                type: String,
                required: true,
            }
        },
        data() {
            const form = this.getForm();
            return {
                form,
                model: form.model || {},
                labels: form.labels || {},
             };
        },
        created() {
            if (this.form.registerField) {
                this.form.registerField(this);
            }
        },
        destroyed() {
            if (this.form.unregisterField) {
                this.form.unregisterField(this);
            }
        },
        computed: {
            moduleValue() {
                return objectPath.get(this.model, this.name);
            },
            computedLabel() {
                return this.label ? this.label : objectPath.get(this.labels, this.name);
            },
        },
        methods: {
            setModelValue(value) {
                return objectPath.set(this.model, this.name, value);
            },
            getForm() {
                let maxDeph = maxSearchLevel;
                let parent = this.$parent;

                while(parent && !parent.magicForm && maxDeph > 0) {
                    parent = parent.$parent;
                    if (parent && parent.magicForm) {
                        return parent;
                    }
                    maxDeph--;
                }

                // eslint-disable-next-line no-console
                console.warn(`Element [${name}][name: ${this.name}] cannot not find form. Please use the labeled components if you do not want to use a form.`);
                return {};
            }
        },
    };

    const component = createHOC(inputComponent, options, renderOptions);
    delete component.props.label.required;

    return component;
}
