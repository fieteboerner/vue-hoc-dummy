import { shallowMount } from '@vue/test-utils'
import BaseTextInput from '@/components/Form/Base/TextInput.vue'
import { Input as ElInput } from 'element-ui';

describe('BaseTextInput.vue', () => {
  it('redirects the input event', () => {
    const msg = 'new message'
    const input = shallowMount(BaseTextInput)
    input.find(ElInput).vm.$emit('input', msg)

    expect(input.emitted('input').length).toBe(1)
    expect(input.emitted('input')[0]).toEqual([msg])
  })

  it('redirects the props', () => {
    const props = {
      name: 'foobar',
      type: 'number',
      value: 'Message',
      size: 'mini',
    }

    const input = shallowMount(BaseTextInput, {
      propsData: props
    });
    const child = input.find(ElInput).vm

    expect(child.$attrs.id).toEqual(props.name)

    expect(child.$props.type).toEqual(props.type)
    expect(child.$props.value).toEqual(props.value)
    expect(child.$props.size).toEqual(props.size)
  })
})
