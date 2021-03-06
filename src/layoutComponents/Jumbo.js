import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import red from '../images/red.jpg'

class Jumbo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            infos: []
        }
    }

    componentDidMount() {
        fetch('https://dcpr.herokuapp.com/api/v1/infos', {
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
                        infos: result.data
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
        const { error, isLoaded, infos } = this.state
        const headerStyle = {
          border: '1px solid #00000020',
          borderRadius: '5px',
          padding: '1em',
          margin: '1em',
          background: '#bf0000',
          boxSizing: 'border-box'
        }
        if (error) {
          return (
            <Jumbotron fluid style={headerStyle}  >
              <Container style={{ margin: "1em 0" }}>
                <h1>Debbie's CPR</h1>
                <h4 style={{ color: "white" }}>
                  Error: {error.message}
                </h4>
              </Container>
            </Jumbotron>
          )
        } else if (!isLoaded) {
          return (
            <Jumbotron fluid style={headerStyle}  >
              <Container style={{ margin: "1em 0" }}>
                <h1>Debbie's CPR</h1>
                <h4 style={{ color: "white" }}>
                  Loading....
                </h4>
              </Container>
            </Jumbotron>
          )
        } else {
          const header = infos.find(info => info.attributes.placement === "Header").attributes.content || ""
          return (
            <Jumbotron fluid style={headerStyle}  >
              <Container style={{ margin: "1em 0" }}>
                <h1>Debbie's CPR</h1>
                <h4 style={{ color: "white"}}>
                    {header}
                </h4>
              </Container>
            </Jumbotron>
          )
        }
    }
}

export default Jumbo;

