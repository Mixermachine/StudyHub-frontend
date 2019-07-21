'use strict';

import React from 'react';

import Page from './Page'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import students from '../../public/images/students.png'
import researcher from '../../public/images/research.png'
import payout from '../../public/images/payout.png'
import faq from '../../public/images/faq.png'

export const Support = () => (
    <Page>
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
        <br />
        <br />
        <h2>Get in contact with us</h2>
        <Form>
            <Form.Group>
                <Form.Label>Subject</Form.Label>
                <Form.Control className="input-data" type="text" placeholder="Enter subject" />
            </Form.Group>

            <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control className="input-data" as="textarea" rows="5" />
            </Form.Group>

            <Button className="input-button" variant="primary" type="submit">
                Send
            </Button>
        </Form>

        </Container>
    </Page>
);
