/* global expect it shallow */
import React from 'react'
import App from './App'

it('renders without crashing', () => {
  const app = shallow(<App />)
  expect(app).toMatchSnapshot()
})
