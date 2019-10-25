import React, { Component } from 'react'
// import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'

class BookingA extends Component {
    render() {
        return (
            <div>
                <h1>Booking Example App A - Acuity - Free Account</h1>
                {/* <iframe title="acuity" src="https://app.acuityscheduling.com/schedule.php?owner=18492337" width="100%" height="800" frameBorder="0"></iframe><script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script> */}
                
                {/* <h3> Acuity booking button example:</h3> */}
                <a href="https://app.acuityscheduling.com/schedule.php?owner=18492337" target="_blank" rel="noopener noreferrer" class="acuity-embed-button" style={{background: "#5fb8b9", color: "#fff", padding: "8px 12px", border: "0px", "-webkit-box-shadow": "0 -2px 0 rgba(0,0,0,0.15) inset", "-moz-box-shadow": "0 -2px 0 rgba(0,0,0,0.15) inset", "box-shadow": "0 -2px 0 rgba(0,0,0,0.15) inset", "border-radius": "4px", "text-decoration": "none", display: "inline-block"}}>Schedule Appointment</a><link rel="stylesheet" href="https://embed.acuityscheduling.com/embed/button/18492337.css" id="acuity-button-styles" /><script src="https://embed.acuityscheduling.com/embed/button/18492337.js" async></script>

                {/* <h3> React Bootstrap embed</h3>
                <div style={{ width: "100%", height: "800" }}>
                    <ResponsiveEmbed aspectRatio="16by9">
                        <embed type="image/svg+xml" src="https://app.acuityscheduling.com/schedule.php?owner=18492337" />
                    </ResponsiveEmbed>
                </div> */}
            </div>
        )
    }
}

export default BookingA;