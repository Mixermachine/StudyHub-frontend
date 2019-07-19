'use strict';

import React from 'react';

import Page from './Page';

import {TimeSlotManagement} from './timeSlotManagement/TimeSlotManagement';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import StudyService from "../services/StudyService";
import UserService from "../services/UserService";
import Form from "react-bootstrap/Form";

export class StudyApplication extends React.Component {

    constructor(props) {
        super(props);

        let payoutMethod = this.props.payoutMethods[0];
        if (payoutMethod) {
            let payoutMethodName = this.getPayoutMethodName(payoutMethod);
            this.state = {
                payoutMethodId: this.props.payoutMethods[0].id,
                payoutMethodName: payoutMethodName
            };
        } else {
            this.state = {
                payoutMethodId: undefined,
                payoutMethodName: undefined
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePayoutMethodChange = this.handlePayoutMethodChange.bind(this);
    }

    getPayoutMethodName(payoutMethod) {
        for (let rewardType of this.props.rewardTypes) {
            if (rewardType.id === payoutMethod.rewardTypeId) {
                return rewardType.name
            }
        }
    }

    getRewardType(rewardTypeName) {
        for (let rewardType of this.props.rewardTypes) {
            if (rewardType.name === rewardTypeName) return rewardType;
        }
    }

    getPayoutMethodId(rewardType) {
        for (let payoutMethod of this.props.payoutMethods) {
            if (payoutMethod.rewardTypeId === rewardType.id) return payoutMethod.id;
        }
    }

    handlePayoutMethodChange(event) {
        let value = event.target.value;

        let rewardType = this.getRewardType(value);
        let payoutMethodId = this.getPayoutMethodId(rewardType);

        this.setState({
            payoutMethodId: payoutMethodId,
            payoutMethodName: value
        });
    }

    handleSubmit(timeslot) {
        // TODO add checks
        StudyService.updateTimeslot(this.props.studyId, timeslot.id, {
            participantId: this.props.participantId, payoutMethodId: this.state.payoutMethodId
        }).then((data => this.props.history.goBack()).catch(e => console.error(e)));
    }

    render() {
        return (
            <Page>
                <Container>
                    <h1>{this.props.study.title}</h1>

                    <Row>
                        <Col>
                            {this.props.study.description}
                        </Col>
                    </Row>
                    <br/>

                    <Row>
                        <Col md="auto">
                            <img src="https://img.icons8.com/windows/32/000000/overview-pages-2.png"/><br/><br/>
                        </Col>
                        <Col md="2">
                            <strong>Prerequisites</strong><br/><br/>
                        </Col>
                        <Col>
                            {this.props.study.prerequisites}<br/><br/>
                        </Col>
                    </Row>

                    <Row>
                        <Col md="auto">
                            <img src="https://img.icons8.com/windows/32/000000/money-bag.png"/><br/><br/>
                        </Col>
                        <Col md="2">
                            <strong>Reward</strong><br/><br/>
                        </Col>
                        <Col>
                            {this.props.study.rewardAmount + ' ' + this.props.study.rewardCurrency}<br/><br/>
                        </Col>
                    </Row>

                    <Row>
                        <Col md="auto">
                            <img src="https://img.icons8.com/windows/32/000000/conference.png"/><br/><br/>
                        </Col>
                        <Col md="2">
                            <strong>Capacity</strong><br/><br/>
                        </Col>
                        <Col>
                            3 / {this.props.study.capacity}<br/><br/>
                        </Col>
                    </Row>

                    <Row>
                        <Col md="auto">
                            <img src="https://img.icons8.com/windows/32/000000/address.png"/><br/><br/><br/><br/>
                        </Col>
                        <Col md="2">
                            <strong>Address</strong><br/><br/><br/><br/>
                        </Col>
                        <Col>
                            {this.props.study.street + ' ' + this.props.study.number}<br/>
                            {this.props.study.zip + ' ' + this.props.study.city}<br/>
                            {this.props.study.country}<br/><br/>
                        </Col>
                    </Row>

                    <Row>
                        <Col md="auto">
                            <img src="https://img.icons8.com/windows/32/000000/time.png"/><br/><br/>
                        </Col>
                        <Col md="2">
                            <strong>Time</strong><br/><br/>
                        </Col>
                        <Col>
                            30 min<br/><br/>
                        </Col>
                    </Row>

                    <Row>
                        <Col md="auto">
                            <img src="https://img.icons8.com/windows/32/000000/money.png"/><br/>
                        </Col>
                        <Col md="2">
                            <strong>Payout</strong><br/>
                        </Col>
                        <Col>
                            {
                                UserService.isAuthenticated() && this.props.payoutMethods.length !== 0 && this.props.rewardTypes.length !== 0
                                    ?
                                    <Form>
                                        <Form.Control
                                            name="payoutMethodName"
                                            className="input-select"
                                            as="select"
                                            value={this.state.payoutMethodName}
                                            onChange={this.handlePayoutMethodChange}
                                        >
                                            {this.props.payoutMethods.map((payoutMethod =>
                                                    <option key={payoutMethod.id}>{this.getPayoutMethodName(payoutMethod)}</option>
                                            ))}
                                        </Form.Control>
                                    </Form>
                                    : <br/>
                            }
                        </Col>
                    </Row>

                    <br/><br/>
                    <TimeSlotManagement
                        timeslots={this.props.timeslots}
                        handleSubmit={(timeslot) => this.handleSubmit(timeslot)}/>
                </Container>
            </Page>
        );
    }
}
