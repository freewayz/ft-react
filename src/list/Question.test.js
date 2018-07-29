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
    const question = shallow(<Question {...questionProps} />, {context})
  })
})
