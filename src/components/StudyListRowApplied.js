'use strict';

import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export class StudyListRowApplied extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Card>
                <Card.Header as="h5">
                    <Row>
                        <Col>{this.props.study.Study.title}</Col>
                    </Row>
                </Card.Header>
                <Card.Body>
                    <Row>
                        <p style={{"marginLeft": "15px"}}>{this.props.study.Study.description}</p>
                    </Row>
                    <Row>
                        <Col md="auto"><img src="https://img.icons8.com/windows/32/000000/address.png" /></Col>
                        <Col>{this.props.study.Study.street} {this.props.study.Study.number}<br />
                            {this.props.study.Study.zip} {this.props.study.Study.city}</Col>
                        <Col md="auto"><img src="https://img.icons8.com/windows/32/000000/time.png" /></Col>
                        <Col>30 min</Col>
                        <Col md="auto"><img src="https://img.icons8.com/windows/32/000000/money-bag.png" /></Col>
                        <Col>{this.props.study.Study.rewardAmount} {this.props.study.Study.rewardCurrency}</Col>
                    </Row>
                </Card.Body>
            </Card>
                <br />
            </Container>
        );
    }
}


/*<Col md="auto"><Button variant="primary" className="input-button">Cancel</Button></Col>*/