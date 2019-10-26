import React, { Component } from 'react'
import Course from './Course'

class CourseContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            courses: []
        }
    }

    componentDidMount() {
        fetch('https://dcpr.herokuapp.com/api/v1/courses', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        courses: result.data
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

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