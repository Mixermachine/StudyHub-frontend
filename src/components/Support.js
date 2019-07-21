'use strict';

import React from 'react';

import Page from './Page'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import students from '../../public/images/students.png'
import researcher from '../../public/images/research.png'
import payout from '../../public/images/payout.png'
import faq from '../../public/images/faq.png'

export const Support = () => (
    <Page>
<<<<<<< Updated upstream
        <h1>Support</h1>

        <Accordion>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        Click me!
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        Click me!
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
=======
        <Container>
            <h1>Support</h1>
            <br />
            <Row>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={students} />
                        <Card.Body>
                            <Card.Title className="search-result-card-title">Create a study</Card.Title>
                            <Card.Text>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={researcher} />
                        <Card.Body>
                            <Card.Title className="search-result-card-title">Managing data</Card.Title>
                            <Card.Text>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={payout} />
                        <Card.Body>
                            <Card.Title className="search-result-card-title">Payout</Card.Title>
                            <Card.Text>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={faq} />
                        <Card.Body>
                            <Card.Title className="search-result-card-title">FAQ</Card.Title>
                            <Card.Text>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
>>>>>>> Stashed changes
        <br />

        <h2>Contact us</h2>
        <Form id="formContactUs">
            <Form.Group controlId="formContactUs">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Enter subject" />
            </Form.Group>

            <Form.Group controlId="formContactUs">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows="5" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Send
            </Button>
        </Form>
    </Page>
);
