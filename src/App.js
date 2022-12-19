import React, { Component } from 'react'
import Header from './assets/components/header/Header'
import Aside from './assets/components/aside/Aside'
import Projects from './assets/components/projects/Projects.js'
import './assets/main_scss/App.scss'
export default class App extends Component {
  render() {
    return (
      <div className='main'>
        <Aside />
        <div className='main__wrapper'>
          <Header />
          <Projects/>
        </div>

      </div>
    )
  }
}

