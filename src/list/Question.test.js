import React from 'react'
import crateRouterContext from 'react-router-test-context'
import PropTypes from 'prop-types'
import Question from './Question'
import renderer from 'react-test-renderer'
import {shallow} from 'enzyme'

const questionProps = {
  title: 'Question Title'
}

const context = crateRouterContext()
describe('Question Component', () => {
  it('create the right snapshots', () => {
    Question.contextTypes = {
      router: PropTypes.object
    }
    const tree = renderer.create(<Question {...questionProps} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders the Questions', () => {
    const question = shallow(<Question {...questionProps} />, {context})
  })
})
