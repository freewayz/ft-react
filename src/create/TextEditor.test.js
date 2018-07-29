/* global expect it describe shallow jest */
import React from 'react'
import TextEditor from './TextEditor'

const mockFn = jest.fn()
const textProps = {
  info: 'Some Info',
  label: 'Label',
  onTextChange: mockFn
}
describe('TextEditor Testcase ', () => {
  const wrapper = shallow(<TextEditor {...textProps} />)
  it('renders the right snapshot', () => {
    // expect(wrapper).toMatchSnapshot()
  })

  it('shows the renders the right value from props', () => {
    const instance = wrapper.instance()
    expect(instance.props.info).toEqual('Some Info')
    expect(instance.props.label).toEqual('Label')
  })

  it('calls the text update when value changes', () => {
    const wrapper = shallow(<TextEditor inputMode {...textProps} />)
    wrapper.find('input').simulate('change', {target: {value: 'New Value'}})
    expect(mockFn).toHaveBeenCalled()
    expect(mockFn).toBeCalledWith('New Value')
    expect(wrapper.find('input').getElement().props.value).toEqual('New Value')
  })
})
