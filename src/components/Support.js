'use strict';

import React from 'react';

import Page from './Page'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export const Support = () => (
    <Page>
        <Container>
            <h1>Support</h1>
            <br />
            <Row>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="https://webdisk.ads.mwn.de/Handlers/Download.ashx?file=Home%2FDesktop%2FStudyHub%2Fstudents.png&action=download" />
                        <Card.Body>
                            <Card.Title className="search-result-card-title">Create a study</Card.Title>
                            <Card.Text>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="https://webdisk.ads.mwn.de/Handlers/Download.ashx?file=Home%2FDesktop%2FStudyHub%2Fresearch.png&action=download" />
                        <Card.Body>
                            <Card.Title className="search-result-card-title">Managing data</Card.Title>
                            <Card.Text>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="https://webdisk.ads.mwn.de/Handlers/Download.ashx?file=Home%2FDesktop%2FStudyHub%2Fresearch.png&action=download" />
                        <Card.Body>
                            <Card.Title className="search-result-card-title">Payout</Card.Title>
                            <Card.Text>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="https://webdisk.ads.mwn.de/Handlers/Download.ashx?file=Home%2FDesktop%2FStudyHub%2Fresearch.png&action=download" />
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
