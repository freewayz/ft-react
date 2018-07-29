/* global expect it describe shallow */
import React from 'react'
import FeedBack from './FeedBack'
import TextEditor from '../TextEditor'

const mockFn = jest.fn()

const commonProps = {
  info: 'The FeedBack',
  label: 'FeedBack',
  handleUpdate: mockFn
}
describe('FeedBack Component Testcase', () => {
  it('create the right snapshots', () => {
    const tree = shallow(<FeedBack {...commonProps} />)
    expect(tree).toMatchSnapshot()
  })

  it('take the right props and set the value', () => {
    const wrapper = shallow(<FeedBack {...commonProps} />)
    expect(wrapper.prop('info')).toEqual('The FeedBack')
    expect(wrapper.find(TextEditor).getElement().props.info).toEqual('The FeedBack')
  })
})
