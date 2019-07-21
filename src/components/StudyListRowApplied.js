'use strict';

import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import iconmoney from '../../public/images/icons/money.png'
import iconaddress from '../../public/images/icons/address.png'
import icontime from '../../public/images/icons/time.png'

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
                            <Col md="auto"><img src={iconaddress}/></Col>
                            <Col>{this.props.study.Study.street} {this.props.study.Study.number}<br/>
                                {this.props.study.Study.zip} {this.props.study.Study.city}</Col>
                            <Col md="auto"><img src={icontime}/></Col>
                            <Col>{(new Date(this.props.study.stop).getTime() - new Date(this.props.study.start).getTime()) / 60000} min</Col>
                            <Col md="auto"><img src={iconmoney}/></Col>

                            <Col>{this.props.study.Study.rewardAmount} {this.props.study.Study.rewardCurrency}</Col>
                        </Row>
                    </Card.Body>
                </Card>
                <br/>
            </Container>
        );
    }
}


/*<Col md="auto"><Button variant="primary" className="input-button">Cancel</Button></Col>*/