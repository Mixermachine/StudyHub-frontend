'use strict';

import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from 'react-router-dom/Link';

export class StudyListRow extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container className="search-result-card">
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title className="search-result-card-title">{this.props.study.title}</Card.Title>
                                <Card.Text>{this.props.study.description}</Card.Text>
                                <br />
                                <Card.Text>
                                    <Row>
                                        <Col md="auto"><img src="https://img.icons8.com/windows/32/000000/address.png" /></Col>
                                        <Col>{this.props.study.street} {this.props.study.number}<br />
                                            {this.props.study.zip} {this.props.study.city}</Col>

                                        <Col md="auto"><img src="https://img.icons8.com/windows/32/000000/conference.png" /></Col>
                                        <Col>{this.props.study.capacity - this.props.study.availableCapacity} / {this.props.study.capacity}</Col>
                                        <Col md="auto"><img src="https://img.icons8.com/windows/32/000000/time.png" /></Col>
                                        <Col>{this.props.study.timeslotDuration / 60000} min</Col>
                                        <Col md="auto"><img src="https://img.icons8.com/windows/32/000000/money-bag.png" /></Col>
                                        <Col>{this.props.study.rewardAmount} {this.props.study.rewardCurrency}</Col>
                                    </Row>
                                </Card.Text>
                                <br />
                                <Link to={'studies/application/' + this.props.study.id}><Button className="input-button" variant="primary">More details</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}
