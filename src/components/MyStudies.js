'use strict';

import React from 'react';

import Page from './Page'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Link from "react-router-dom/es/Link";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export class MyStudies extends React.Component {

    render() {
        return (
            <Page>
                <Container>
                    <h1>Study dashboard</h1>

                    <br />
                    <h2>My studies</h2>

                        <Card>
                            <Card.Header as="h5">
                                <Row>
                                    <Col>Electric fans study</Col>
                                    <Col md="auto"><Button variant="primary" className="input-button">Edit</Button></Col>
                                    <Col md="auto"><Button variant="primary" className="input-button">Delete</Button></Col>
                                </Row>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <p style={{"margin-left": "15px"}}>Experiment on the beneficial effect of electric fans in extreme heat and humidity.</p>
                                </Row>
                                <Row>
                                    <Col md="auto"><img src="https://img.icons8.com/windows/32/000000/conference.png" /></Col>
                                    <Col>3 / 25</Col>
                                    <Col md="auto"><img src="https://img.icons8.com/windows/32/000000/money-bag.png" /></Col>
                                    <Col></Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    <br />

                    <ButtonToolbar>
                        <Link to='/studies/create'><Button className="input-button">Create new study</Button></Link>
                    </ButtonToolbar>

                    <br/>

                    <h2>Applied studies</h2>

                    <Card>
                        <Card.Header as="h5">
                            <Row>
                                <Col>Electric fans study</Col>
                                <Col md="auto"><Button variant="primary" className="input-button">Check in</Button></Col>
                                <Col md="auto"><Button variant="primary" className="input-button">Cancel</Button></Col>
                            </Row>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <p style={{"margin-left": "15px"}}>Experiment on the beneficial effect of electric fans in extreme heat and humidity.</p>
                            </Row>
                            <Row>
                                <Col md="auto"><img src="https://img.icons8.com/windows/32/000000/address.png" /></Col>
                                <Col></Col>
                                <Col md="auto"><img src="https://img.icons8.com/windows/32/000000/time.png" /></Col>
                                <Col>30 min</Col>
                                <Col md="auto"><img src="https://img.icons8.com/windows/32/000000/money-bag.png" /></Col>
                                <Col></Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Container>
            </Page>
        )
    }
}