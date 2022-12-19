import React, { Component } from 'react'
import './scss_aside/heading.scss'

export default class Heading extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <div className='heading'>
        <img className='heading__img' src={this.props.svg}></img>
      </div>
    )
  }
}
