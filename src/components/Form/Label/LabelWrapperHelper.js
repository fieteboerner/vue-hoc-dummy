import LabelWrapper from '../Base/LabelWrapper';

const wrap = (name, inputComponent) => {
    const WrapComponent = {
        name,
        props: {
            ...LabelWrapper.props,
            ...inputComponent.props,
        },
        computed: {
            inputProps() {
                return this.extractFromObject(this.$props, Object.keys(inputComponent.props));
            },
            labelProps() {
                return this.extractFromObject(this.$props, Object.keys(LabelWrapper.props));
            },
        },
        methods: {
            extractFromObject(object, keys) {
                return keys.reduce((acc, key) => ({...acc, [key]: object[key]}), {})
            }
        },
        render(h) {
            return h(LabelWrapper, {props: this.labelProps}, [
                h(inputComponent, {
                    props: this.inputProps,
                    on: this.$listeners,
                    scopedSlots: this.$scopedSlots,
                    slots: this.$slots,
                })
            ]);
        },
    };

    return WrapComponent;
}

export default wrap;