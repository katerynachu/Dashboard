import React, { Component } from 'react'
import ProjectsItem from './ProjectsItem'
import './scss_projects/projects.scss'
export default class Content extends Component {
  render() {
    return (
      <div className='projects'>
        <ProjectsItem title="Fist title" desc="Lorem lorem lorem lorem " value='30' />
        <ProjectsItem title="Fist title" desc="Lorem lorem lorem lorem " value='24' />
        <ProjectsItem title="Fist title" desc="Lorem lorem lorem lorem " value='5' />
        <ProjectsItem title="Fist title" desc="Lorem lorem lorem lorem " value='54' />
        <ProjectsItem title="Fist title" desc="Lorem lorem lorem lorem " value='70' />
        <ProjectsItem title="Fist title" desc="Lorem lorem lorem lorem " value='10' />
        <ProjectsItem title="Fist title" desc="Lorem lorem lorem lorem " value='19' />
        <ProjectsItem title="Fist title" desc="Lorem lorem lorem lorem " value='83' />
      </div>
    )
  }
}
