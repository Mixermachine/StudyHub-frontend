'use strict';

import React from 'react';

import Page from './Page'
import Form from "react-bootstrap/Form";

import {StudyList} from './StudyList';
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import AccordionCollapse from "react-bootstrap/AccordionCollapse";

export class StudyFinding extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Page>
                <div>
                    <Form>
                        <Accordion>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">Term Search</Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <Form.Group>
                                            <Form.Control type="text" placeholder="Enter search term"/>
                                        </Form.Group>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Card.Header} eventKey="1">Advanced Search</Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        <Form.Group>
                                            <Form.Label>Search Term</Form.Label>
                                            <Form.Control type="text" placeholder="Enter search term"/>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>City</Form.Label>
                                            <Form.Control type="text" placeholder="Enter city name"/>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Zip code</Form.Label>
                                            <Form.Control type="text" placeholder="Enter zip code"/>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Organizer</Form.Label>
                                            <Form.Control type="text" as="select">
                                                <option>Student</option>
                                                <option>University</option>
                                                <option>Organization</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Minimal Reward</Form.Label>
                                            <Form.Control type="text" placeholder="Enter minimal desired reward"/>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Reward Type</Form.Label>
                                            <Form.Control type="text" as="select">
                                                <option>PayPal</option>
                                                <option>Direct Deposit</option>
                                                <option>Amazon Gift Card</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <br/>
                    </Form>
                    <StudyList studies={this.props.studies}/>
                </div>
            </Page>
        );
    }
}

