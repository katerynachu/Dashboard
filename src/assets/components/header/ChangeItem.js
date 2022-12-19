import React, { Component } from 'react'
import './scss_header/change-item.scss'

export default class ChangeItem extends Component {
  render() {
    return (
      <div className='change-item'>
        <img className='change-item__img' src={this.props.svg}></img>
      </div>
    )
  }
}
