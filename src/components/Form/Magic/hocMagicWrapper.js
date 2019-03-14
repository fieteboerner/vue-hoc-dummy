import { createHOC } from "vue-hoc";

export default function(name, inputComponent) {
    const renderOptions = {
        props: {
            value() {
                if (this.$props.hasOwnProperty('value') && this.value !== undefined) {
                    this.model[this.name] = this.value;
                    return this.value;
                }

                return this.model[this.name];
            },
            label() {
                return this.label ? this.label : this.labels[this.name];
            }
        },
        listeners: {
            input(value) {
                this.model[this.name] = value;
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
        created() {
            this.model = this.$parent.model || {};
            this.labels = this.$parent.labels || {};
        },
        data() {
            return { model: {}, labels: {} };
        },
    };

    const component = createHOC(inputComponent, options, renderOptions);
    delete component.props.label.required;

    return component;
}
