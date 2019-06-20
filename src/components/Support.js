'use strict';

import React from 'react';

import Page from './Page'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

export const Support = () => (
    <Page>
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
