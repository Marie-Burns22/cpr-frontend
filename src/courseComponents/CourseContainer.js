import React, { Component } from 'react'
import Course from './Course'

class CourseContainer extends Component {
    render() {
        return (
            <div>
                <Course name="CPR"/>
                <Course name="First Aid"/>
            </div>
        )
    }
}

export default CourseContainer