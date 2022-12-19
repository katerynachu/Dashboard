import React, { Component } from 'react'
import './scss_aside/categories-item.scss'
export default class CategoriesItem extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <div className='categories-item'>
        <img width={32} height={32} src={this.props.svg}></img>
        <p className='categories-item__text'>{this.props.text}</p>
        <img className='categories-item__badge' src={this.props.badge}></img>
      </div>
    )
  }
}
