import React, { Component } from 'react'
import Heading from './Heading'
import Dashboard from './Dashboard'
import Categories from './Categories'
import logo from './image_aside/logo.svg'
import dashboardimg from './image_aside/dashboard.svg'
import './scss_aside/aside.scss'

export default class Aside extends Component {
  render() {
    return (
      <div className='aside'>
        <div className='aside__container'>
            <Heading svg={logo}/>
            <Dashboard svg={dashboardimg} text="Dashboard" />
            <Categories/>
        </div>
      </div>
    )
  }
}
