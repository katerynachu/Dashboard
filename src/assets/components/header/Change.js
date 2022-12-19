import React, { Component } from 'react'
import ChangeItem from './ChangeItem'
import theme from "./images_header/change-theme.svg"
import search from "./images_header/search.svg"
import set from "./images_header/set.svg"
import './scss_header/change.scss'

export default class Change extends Component {
  render() {
    return (
      <div className='change'>
        <ChangeItem svg={theme}/>
        <ChangeItem svg={search}/>
        <ChangeItem svg={set}/>
      </div>
    )
  }
}
