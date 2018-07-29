/* global expect it describe shallow mount jest */
import React from 'react'
import Option from './Option'

const mockFn = jest.fn()

const optionProps = {
  is_correct: false,
  answer: 'This is not correct',
  feedback: 'We are testing'
}

describe('Option Component', () => {
  it('renders the right snapshot', () => {
    const wrapper = shallow(<Option option={optionProps} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders the right content', () => {
    const wrapper = shallow(<Option option={optionProps} />)
    const instance = wrapper.instance()
    expect(instance).not.toBe(null)
    expect(wrapper.find('.option__panel').getElement().type).toEqual('div')
  })

  it('change the panel class when setting correct anser', () => {
    const wrapper = shallow(<Option option={optionProps} onUpdate={mockFn} />)
    const instance = wrapper.instance()
    expect(instance).not.toBe(null)
    expect(wrapper.find('.option__panel').getElement().type).toEqual('div')
    const checkBox = wrapper.find('input').getElement()
    // it should be unchecked when is_correct == false
    expect(checkBox.props.checked).toBe(false)
    // simulate clicking
    wrapper.find('input').simulate('change')
    expect(wrapper.state().is_correct).toBe(true)
  })
})
