/* global expect describe it shallow */
import React from 'react'
import Answer from './Answer'
import TextEditor from '../TextEditor'

const mockFn = jest.fn()

const commonProps = {
  info: 'The answer',
  label: 'Answer',
  handleUpdate: mockFn
}
describe('Answer Component ', () => {
  it('create the right snapshots', () => {
    const tree = shallow(<Answer />)
    expect(tree).toMatchSnapshot()
  })

  it('take the right props and set the value', () => {
    const wrapper = shallow(<Answer {...commonProps} />)
    expect(wrapper.prop('info')).toEqual('The answer')
    expect(wrapper.find(TextEditor).getElement().props.info).toEqual('The answer')
  })
})
