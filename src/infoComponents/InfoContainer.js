import React, { Component } from 'react'
import Info from './Info'

class InfoContainer extends Component {
    render() {
        return (
            <div>
                <Info title="Cards" content="Cards will be emailed after the course" />
                <Info title="Arrival and Checkin" content="Please arrive 15 min before the start of class to sign in" />
            </div>
        )
    }
}

export default InfoContainer;