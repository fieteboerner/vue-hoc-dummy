import { shallowMount } from '@vue/test-utils'
import BaseSelect from '@/components/Form/Base/Select.vue'
import { Option as ElOption, Select as ElSelect } from 'element-ui';

const items = [
  { value: 1, label: 'One' },
  { value: 2, label: 'Two' },
  { value: 3, label: 'Three' },
]

describe('BaseSelect.vue', () => {
  it('redirects the input event', () => {
    const value = 2
    const input = shallowMount(BaseSelect, {
      propsData: { items },
    })
    input.find(ElSelect).vm.$emit('input', value)

    expect(input.emitted('input').length).toBe(1)
    expect(input.emitted('input')[0]).toEqual([value])
  })

  it('check option generation', () => {
    const input = shallowMount(BaseSelect, {
      propsData: { items },
    });
    const options = input.findAll(ElOption)
    expect(options.length).toBe(items.length)
    const firstOption = input.find(ElOption)
    expect(firstOption.vm.$props.label).toBe(items[0].label)
    expect(firstOption.vm.$props.value).toBe(items[0].value)
  })
})