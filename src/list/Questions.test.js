/* global expect jest it describe shallow */
import React from 'react'
import crateRouterContext from 'react-router-test-context'
import Questions from './Questions'
import Question from './Question'

const questionProps = {
  title: 'Question Title',
  description: 'Question Description',
  id: 3
}

const questions = []
for (let i = 0; i < 10; i++) {
  questions.push(questionProps)
}

const context = crateRouterContext()
describe('Questions Component Testcast', () => {
  it('create the right snapshots', () => {
    const tree = shallow(<Questions questions={questions} />)
    expect(tree).toMatchSnapshot()
  })

  it('renders 10 Question functional component', () => {
    const wrapper = shallow(<Questions questions={questions} />, {context})
    const QuestionChildren = wrapper.find(Question)
    expect(QuestionChildren.length).toBe(10)
  })

  it('renders no Question component for empty array', () => {
    const wrapper = shallow(<Questions questions={[]} />, {context})
    const QuestionChildren = wrapper.find(Question)
    expect(QuestionChildren.length).toBe(0)
  })
})
