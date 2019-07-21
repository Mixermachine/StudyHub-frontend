'use strict';

import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export class StudyListRowCreated extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
                <Card.Header as="h5">
                    <Row>
                        <Col>{this.props.study.title}</Col>
                        <Col md="auto"><Button variant="primary" className="input-button">Edit</Button></Col>
                        <Col md="auto"><Button variant="primary" className="input-button">Delete</Button></Col>
                    </Row>
                </Card.Header>
                <Card.Body>
                    <Row>
                        <p style={{"margin-left": "15px"}}>{this.props.study.description}</p>
                    </Row>
                    <Row>
                        <Col md="auto"><img src="https://img.icons8.com/windows/32/000000/conference.png" /></Col>
                        <Col>3 / {this.props.study.capacity}</Col>
                        <Col md="auto"><img src="https://img.icons8.com/windows/32/000000/money-bag.png" /></Col>
                        <Col>{this.props.study.rewardAmount} {this.props.study.rewardCurrency}</Col>
                    </Row>
                </Card.Body>
            </Card>
        );
    }
}
