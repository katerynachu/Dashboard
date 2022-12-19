import React, { Component } from 'react'
import Lang from './Lang'
import Change from './Change'
import Avatar from './Avatar'
import langicon from './images_header/lang-icon.svg'
import avatar from "./images_header/Avatar.svg"
import './scss_header/quick-setting.scss'

export default class QuickSetting extends Component {
  render() {
    return (
      <div className='quick-setting'>
        <Lang svg={langicon} text ="English"/>
        <Change/>
        <Avatar svg={avatar}/>
      </div>
    )
  }
}
