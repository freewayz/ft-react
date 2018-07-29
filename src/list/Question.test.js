/* global expect jest it describe shallow */
import React from 'react'
import crateRouterContext from 'react-router-test-context'
import Question from './Question'

const questionProps = {
  title: 'Question Title',
  description: 'Question Description',
  id: 3
}

const context = crateRouterContext()
describe('Question Component', () => {
  it('create the right snapshots', () => {
    const tree = shallow(<Question {...questionProps} />)
    expect(tree).toMatchSnapshot()
  })

  it('renders the Questions with the right texts', () => {
    const wrapper = shallow(<Question {...questionProps} />, {context})
    const divs = wrapper.find('div')
    // target the title div
    expect(divs.at(3).text()).toBe('Question Title')
    expect(divs.length).toBe(8)
  })
})
