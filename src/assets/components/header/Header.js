import React, { Component } from 'react'
import QuickPanel from './QuickPanel'
import QuickSetting from './QuickSetting'
import './scss_header/header.scss'

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
       <div className='header__container'>
       <div className='header__wrapper'>
            <QuickPanel/>
            <QuickSetting/>
        </div>
       </div>
      </div>
    )
  }
}

