'use strict';

import React from 'react';

import {DaySelectionList} from './DaySelectionList';
import {TimeSlotSelectionList} from './TimeSlotSelectionList';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/es/Button";
import UserService from "../../services/UserService";
import Link from "react-router-dom/Link";

export class TimeSlotManagement extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDay: null,
            selectedTimeSlot: null,
            availableTimeSlots: [],
        };
    }

    availableDays() {
        let days = [];
        if (this.props.timeslots == undefined) return days;
        for (let timeslot of this.props.timeslots) {
            let start = new Date(timeslot.start);
            let day = new Date(start.getFullYear(), start.getMonth(), start.getDate());

            let check = false;
            for (let contained of days) {
                if (this.sameDate(day, contained)) check = true;
            }

            if (!check) days.push(day);
        }
        return days;
    }

    availableTimeSlots(day) {
        let timeslots = [];
        for (let timeslot of this.props.timeslots) {
            if (this.sameDate(new Date(timeslot.start), day)) {
                timeslots.push(timeslot)
            }
        }
        return timeslots;
    }

    sameDate(d1, d2) {
        if (d1 == null || d2 == null) {
            return false;
        }
        return (
            d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate()
        );
    }

    onDayClick(day) {
        let timeslots = this.availableTimeSlots(new Date(day));
        this.setState({
            selectedDay: new Date(day),
            availableTimeSlots: timeslots,
        });
    }

    onTimeSlotClick(i) {
        this.setState({
            selectedTimeSlot: i
        });
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <DaySelectionList days={this.availableDays()} onDayClick={(day) => this.onDayClick(day)}/>
                        </Col>
                        <Col>
                            <TimeSlotSelectionList timeslots={this.state.availableTimeSlots} onTimeSlotClick={(i) => this.onTimeSlotClick(i)}/>
                        </Col>
                    </Row>
                </Container>
                <br />
                {
                    UserService.isAuthenticated()
                        ? <Button variant='primary' className="input-button" onClick={() => this.props.handleClick(this.state.selectedTimeSlot)}>Confirm</Button>
                        : <Link to="/login"><Button variant='primary' className="input-button">Login</Button></Link>
                }
            </div>
        );
    }
}