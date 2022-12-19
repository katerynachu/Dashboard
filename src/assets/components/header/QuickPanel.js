import React, { Component } from 'react'
import QuickPanelItem from './QuickPanelItem'
import mail from './images_header/mail.svg'
import buble from './images_header/bubble.svg'
import calendar from './images_header/calendar.svg'
import star from './images_header/star.svg'
import './scss_header/quick-panel.scss'

export default class QuickPanel extends Component {
  render() {
    return (
      <div className='quick-panel'>
        <QuickPanelItem svg={mail}/>
        <QuickPanelItem svg={buble}/>
        <QuickPanelItem svg={calendar}/>
        <QuickPanelItem svg={star}/>
      </div>
    )
  }
}
