'use strict';

import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export class StudyListRowApplied extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
                <Card.Header as="h5">
                    <Row>
                        <Col>{this.props.study.title}</Col>
                        <Col md="auto"><Button variant="primary" className="input-button">Check in</Button></Col>
                        <Col md="auto"><Button variant="primary" className="input-button">Cancel</Button></Col>
                    </Row>
                </Card.Header>
                <Card.Body>
                    <Row>
                        <p style={{"margin-left": "15px"}}>{this.props.study.description}</p>
                    </Row>
                    <Row>
                        <Col md="auto"><img src="https://img.icons8.com/windows/32/000000/address.png" /></Col>
                        <Col>{this.props.study.street} {this.props.study.number}<br />
                            {this.props.study.zip} {this.props.study.city}</Col>
                        <Col md="auto"><img src="https://img.icons8.com/windows/32/000000/time.png" /></Col>
                        <Col>30 min</Col>
                        <Col md="auto"><img src="https://img.icons8.com/windows/32/000000/money-bag.png" /></Col>
                        <Col>{this.props.study.rewardAmount} {this.props.study.rewardCurrency}</Col>
                    </Row>
                </Card.Body>
            </Card>
        );
    }
}
