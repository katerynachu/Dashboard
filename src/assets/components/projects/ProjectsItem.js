import React, { Component } from 'react'
import './scss_projects/projects-item.scss'
export default class ProjectsItem extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='projects-item'>
                <h3 className='projects-item__title'>{this.props.title}</h3>
                <p className='projects-item__description'>{this.props.desc}</p>
                <progress className='projects-item__line' value={this.props.value} max="100"></progress>
                <button className='projects-item__btn'>More</button>
            </div>


        )
    }
}
