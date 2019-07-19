'use strict';

import React from 'react';

import Page from './Page';

import {TimeSlotManagement} from './timeSlotManagement/TimeSlotManagement';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import StudyService from "../services/StudyService";
import UserService from "../services/UserService";

export class StudyApplication extends React.Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(timeslot) {
        StudyService.updateTimeslot(this.props.studyId, timeslot.id, {participantId: this.props.participantId})
            .then((data => this.props.history.goBack())
                .catch(e => console.error(e)));
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
                            <img src="https://img.icons8.com/windows/32/000000/time.png"/><br/>
                        </Col>
                        <Col md="2">
                            <strong>Time</strong><br/>
                        </Col>
                        <Col>
                            30 min<br/>
                        </Col>
                    </Row>

                    <br/><br/>
                    <TimeSlotManagement timeslots={this.props.timeslots}
                                        handleSubmit={(timeslot) => this.handleSubmit(timeslot)}/>
                </Container>
            </Page>
        );
    }
}
