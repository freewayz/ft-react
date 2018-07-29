/* global expect describe it shallow mount  beforeEach */
import React from 'react'
import configureStore from 'redux-mock-store'
import OptionsContainer from './OptionsContainer'
import Option from './Option'

const initialState = {}

const mockStore = configureStore()
const options = [
  {
    is_correct: false,
    answer: 'Answer 1',
    feedback: 'Feedback 1'
  },
  {
    is_correct: true,
    answer: 'Answer 2',
    feedback: 'Feedback 2'
  }
]
let store
let wrapper

beforeEach(() => {
  store = mockStore(initialState)
  const context = {store}
  wrapper = shallow(<OptionsContainer options={options} />, {context})
})

describe('OptionsContainer Component TestCase', () => {
  it('renders the right snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render 2 children for Option', () => {
    expect(wrapper.dive().find(Option).length).toEqual(2)
  })
})
