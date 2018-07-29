import React, { Component } from 'react'
import {Link, BrowserRouter} from 'react-router-dom'
import Routes from './Routes'
import logo from './logo.svg'
import './App.css'

const NavHeader = () => {
  return (
    <div className='nav__header'>
      <h1> Fine Tune Content Manager </h1>
    </div>
  )
}
class App extends Component {
  render () {
    return (
      <div className='App'>
        <NavHeader />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </div>
    )
  }
}

export default App
