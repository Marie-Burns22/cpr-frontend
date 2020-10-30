import React, { Component } from 'react'
import Info from './Info'
import GoogleMap from "./GoogleMap"
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import Scheduling from './Scheduling';

class InfoContainer extends Component {

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
        const { error, isLoaded, infos } = this.state;
        const nonHeaderInfos = infos.filter(info => info.attributes.placement !== "Header")
        const infoCards = nonHeaderInfos.map(i => (
            <Info key={i.id} info={i.attributes} id={i.id} />
        ))

        if (error) {
            return (
                <Alert variant="warning">
                    Error: {error.message}
                </Alert>
            )
        } else if (!isLoaded) {
            return (
                <Alert variant="danger">
                    <ButtonToolbar>
                        <Button variant="danger" disabled>
                            <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                            <span className="sr-only">Loading...</span>
                        </Button>
                        <Button variant="danger" disabled>
                            <Spinner
                                as="span"
                                animation="grow"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                            Loading...
                            </Button>
                    </ButtonToolbar>
                </Alert>
            )
        } else if (!infos || infos === undefined || infos.length === 0) {
            return (
                <Alert variant="danger">
                    Please contact us using <Alert.Link href="/contact">the Contact Form</Alert.Link>for more information regarding available courses.
                </Alert>
            )
        } else {
            return (
                <Container>
                    {infoCards} 
                    <GoogleMap />
                    <Scheduling />
                </Container>
            )
        }
    }
}

export default InfoContainer;