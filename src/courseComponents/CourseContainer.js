import React, { Component } from 'react'
import Course from './Course'

class CourseContainer extends Component {
    render() {
        return (
            <div>
                <Course name="CPR" description="Course description goes here"/>
                <Course name="First Aid" description="Course description goes here"/>
            </div>
        )
    }
}

export default CourseContainer