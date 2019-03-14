import { createHOC } from "vue-hoc";
import ElementProgressBar from "./ElementProgressBar";

export default function(namespace) {
    const renderOptions = {
        props: {
            target() {
                return this.$store.getters[`${namespace}/target`];
            },
            value() {
                return this.$store.getters[`${namespace}/progress`];
            },
        }
    };

    const options = {
        name: "StoreProgressBar"
    };

    const component = createHOC(ElementProgressBar, options, renderOptions);
    delete component.props.target;
    delete component.props.value;

    return component;
}
