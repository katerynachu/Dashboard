import React, { Component } from 'react'
import './scss_aside/dashboard.scss'
export default class Dashboard extends Component {
  render() {
    return (
      <div className='dashboard'>
        <img src={this.props.svg}></img>
        <p className='dashboard__text'>{this.props.text}</p>
      </div>
    )
  }
}
