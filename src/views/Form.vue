<template>
  <div>
    <h2>BaseText</h2>
    <BaseText v-model="formModel.one"/>
    <h2>BaseText + Label</h2>
    <LabelWrapper label="Hello" description="huhu">
      <BaseText v-model="inputData"/>
    </LabelWrapper>
    <h2>LabeledlTextInput</h2>
    <LabeledTextInput label="moin" description="Welt" v-model="inputData" />
    <h2>Magic Form</h2>
    <MagicForm :model="formModel" :labels="labels">
      <MagicTextInput name="one" />
      <MagicTextInput name="two" />
      <MagicTextInput label="Drei" name="three" type="number" />
    </MagicForm>
  </div>
</template>
<script>
import BaseText from '@/components/Form/Base/Text';
import LabelWrapper from '@/components/Form/Base/LabelWrapper';
import LabeledTextInput from '@/components/Form/Label/LabeledTextInput';
import MagicForm from '@/components/Form/Magic/Form'
import hocMagicWrapper from '@/components/Form/Magic/hocMagicWrapper'

const MagicTextInput = hocMagicWrapper('MagicTextInput', LabeledTextInput);

export default {
  name: "Form",
  components: { BaseText, LabelWrapper, LabeledTextInput, MagicForm, MagicTextInput },
  data() {
    return {
      inputData: 'text',
      labels: {
        one: 'Hey Nummer 1',
        two: 'Hey Nummer 2',
      },
      formModel: {
        one: 'one',
        two: 'two',
        three: 3,
      },
    };
  }
};
</script>
