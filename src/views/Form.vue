<template>
  <div>
    <h2>BaseText</h2>
    <BaseText v-model="formModel.one"/>

    <h2>BaseSelect</h2>
    <BaseSelect v-model="formModel.select" :items="items">
        <div slot="option" slot-scope="{ option }">*** {{ option.label }} ***</div>
    </BaseSelect>

    <h2>BaseText + Label</h2>
    <LabelWrapper label="Hello" description="huhu">
      <BaseText v-model="inputData"/>
    </LabelWrapper>

    <h2>LabeledlTextInput</h2>
    <LabeledTextInput label="moin" description="Welt" v-model="inputData"/>

    <h2>LabeledlSelect</h2>
    <LabeledSelect label="moin" description="Welt" :items="items" v-model="formModel.select">
        <div slot="option" slot-scope="{ option }">*** {{ option.label }} ***</div>
    </LabeledSelect>

    <h2>Magic Form</h2>
    <MagicForm :model="formModel" :labels="labels">
      <MagicTextInput name="one" description="Achtung: Beschreibung" />
      <MagicTextInput size="mini" name="two"/>
      <MagicTextInput label="Drei" name="three" type="number"/>
      <MagicTextInput name="four" value="4"/>
      <MagicSelect name="select" :items="items">
        <div slot="option" slot-scope="{ option }">*** {{ option.label }} ***</div>
      </MagicSelect>
      <fieldset>
        <legend>Nested</legend>
        <MagicTextInput name="nested.name" />
        <MagicTextInput name="nested.age" type="number" />
        <MagicSelect name="nested.city" :items="items" />
      </fieldset>
      <fieldset>
        <legend>SpecialItems - Manual - Not reactive</legend>
        <MagicTextInput v-for="(inputItem, index) in specialItems"
                        :key="inputItem.label"
                        :name="`special.${index}.value`"
                        :label="inputItem.label"
                        :value="inputItem.value" />
      </fieldset>
      <fieldset>
        <legend>SpecialItems - Automatic</legend>
        <MagicTextInput v-for="(inputItem, index) in formModel.specialAutomaticItems"
                        :key="inputItem.label"
                        :name="`specialAutomaticItems.${index}.value`"
                        :label="inputItem.label" />
      </fieldset>
    </MagicForm>
  </div>
</template>
<script>
import BaseText from "@/components/Form/Base/TextInput";
import BaseSelect from "@/components/Form/Base/Select";
import LabelWrapper from "@/components/Form/Base/LabelWrapper";
import LabeledTextInput from "@/components/Form/Label/TextInput";
import LabeledSelect from "@/components/Form/Label/Select";
import MagicForm from "@/components/Form/Magic/Form";
import MagicTextInput from "@/components/Form/Magic/TextInput";
import MagicSelect from "@/components/Form/Magic/Select";
import { setTimeout } from 'timers';

export default {
  name: "Form",
  components: {
    BaseText,
    BaseSelect,
    LabelWrapper,
    LabeledTextInput,
    LabeledSelect,
    MagicForm,
    MagicTextInput,
    MagicSelect,
  },
  data() {
    return {
      inputData: "text",
      labels: {
        one: "Hey Nummer 1",
        two: "Hey Nummer 2",
        three: "Hey Nummer 3",
        four: "Hey Nummer 4",
        select: "Select",
        nested: {
          name: 'Name',
          age: 'Alter',
          city: 'Adresse',
        },
      },
      formModel: {
        one: "one",
        two: "two",
        three: 3,
        four: "four",
        select: 3,
        nested: {
          name: 'Name',
          age: 10,
          city: 2,
        },
        specialAutomaticItems: [
          { label: 'Special 1', value: 1 },
          { label: 'Special 2', value: 2 },
        ],
      },
      items: [
          { label: 'Option 1', value: 1 },
          { label: 'Option 2', value: 2 },
          { label: 'Option 3', value: 3 },
          { label: 'Option 4', value: 4 },
          { label: 'Option 5', value: 5 },
          { label: 'Option 6', value: 6 },
      ],
      specialItems: [
        { label: 'Special 1', value: 1 },
        { label: 'Special 2', value: 2 },
        { label: 'Special 3', value: 3 },
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      this.formModel.specialAutomaticItems.push( { label: 'special - mounted', value: 'mounted' });
    }, 1000)
  },
};
</script>
