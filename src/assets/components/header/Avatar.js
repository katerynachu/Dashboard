import React, { Component } from 'react'
import './scss_header/avatar.scss'

export default class Avatar extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <div>
        <img src={this.props.svg}></img>
      </div>
    )
  }
}
