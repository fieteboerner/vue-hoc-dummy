import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import TextInput from '../src/components/Form/Base/TextInput.vue';
import ProgressBar from '../src/components/ProgressBar.vue';
import '../src/plugins/element';

Vue.component('ProgressBar', ProgressBar);

storiesOf('TextInput', module)
//   .add('with text', () => '<TextInput value="text"></TextInput>')
  .add('as a component', () => ({
    components: { TextInput },
    data() {
        return { data: 'moin' };
    },
    template: '<TextInput v-model="data" />'
  }));

storiesOf('ProgressBar', module)
  .add('with text', () => '<ProgressBar :value="50"></ProgressBar>')
  .add('with component', () => ({
      components: { ProgressBar },
      template: '<ProgressBar :value="20"></ProgressBar>'
  }));