import React, { Component } from 'react'
import CategoriesItem from './CategoriesItem'
import Divider from './Divider'
import line from './image_aside/line.svg'
import mail from './image_aside/mail.svg'
import bubble from './image_aside/bubble.svg'
import calendar from './image_aside/calendar.svg'
import news from './image_aside/news.svg'
import study from './image_aside/study 1.svg'
import stack from './image_aside/stack.svg'
import location from './image_aside/location.svg'
import greenbadge from './image_aside/badge.svg'
import redbadge from './image_aside/red-badge.svg'
import yellowbadge from './image_aside/yellow-badge.svg'
import './scss_aside/categories.scss'

export default class Categories extends Component {
    render() {
        return (
            <div className='categories'>
                <Divider svg={line} />
                <div className='categories__wrapper'>
                    <CategoriesItem text="Email" svg={mail} badge={greenbadge} />
                    <CategoriesItem text="Chats" svg={bubble} badge={redbadge } />
                    <CategoriesItem text="Calendar"  svg={calendar} badge={yellowbadge} />
                    <CategoriesItem text="News"  svg={news} />
                    <CategoriesItem text="Knowledge"  svg={study} />
                    <CategoriesItem text="File manager"  svg={stack} />
                    <CategoriesItem text="Leaflet Maps"  svg={location} />
                </div>
            </div>
        )
    }
}
