import React, { Component } from 'react'
import './scss_header/lang.scss'

export default class Lang extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <div className='lang'>
        <img className='lang__img' src={this.props.svg}></img>
        <p className='lang__text'>{this.props.text}</p>
      </div>
    )
  }
}
