import React, { Component } from 'react'
import './scss_aside/divider.scss'
export default class Divider extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <div className='divider'>
        <img src={this.props.svg}></img>
      </div>
    )
  }
}
