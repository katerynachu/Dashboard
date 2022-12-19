import React, { Component } from 'react'
import './scss_header/quick-panel-item.scss'

export default class QuickPanelItem extends Component {
  render() {
    return (
      <div className='quick-panel_item'>
        <img className='quick-panel_item__img' src={this.props.svg}></img>
      </div>
    )
  }
}
