'use strict';

import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {DayCreationList} from "./DayCreationList";
import Col from "react-bootstrap/Col";
import {TimeSlotCreationList} from "./TimeSlotCreationList";
import Form from "react-bootstrap/Form";

// TODO delete day, delete timeslot, edit day, edit timeslot

export class TimeSlotCreation extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            selectedDay: undefined,
            createdDays: [],
            createdTimeSlots: [],
            availableTimeSlots: [],
            timeSlotDurationMin: undefined,
            timeSlotDuration: undefined
        };

        this.handleCreateTimeSlotClick = this.handleCreateTimeSlotClick.bind(this);
        this.handleTimeSlotDurationChange = this.handleTimeSlotDurationChange.bind(this);
    }

    createDay(day) {
        let createdDays = [...this.state.createdDays];
        createdDays.push(day);
        this.setState({createdDays: createdDays});
    }

    deleteDay(day) {
        let createdDays = [];
        for (let createdDay of this.state.createdDays) {
            if (createdDay !== day) createdDays.push(createdDay);
        }
        this.setState({createdDays: createdDays});
    }

    createTimeSlot(timeSlot) {
        let createdTimeSlots = [...this.state.createdTimeSlots];
        createdTimeSlots.push(timeSlot);
        let availableTimeSlots = this.availableTimeSlots(this.state.selectedDay, createdTimeSlots);
        this.setState({
            createdTimeSlots: createdTimeSlots,
            availableTimeSlots: availableTimeSlots
        });
    }

    deleteTimeSlot(timeSlot) {
        let createdTimeSlots = [];
        for (let createdTimeSlot of this.state.createdTimeSlots) {
            if (createdTimeSlot !== timeSlot) createdTimeSlots.push(createdTimeSlot);
        }
        this.setState({createdTimeSlots: createdTimeSlots});
    }

    handleCreateTimeSlotClick(day) {
        let availableTimeSlots = this.availableTimeSlots(day, this.state.createdTimeSlots);
        this.setState({
            availableTimeSlots: availableTimeSlots,
            selectedDay: day
        });
    }

    handleTimeSlotDurationChange(event) {
        let value = event.target.value;
        let timeSlotDurationMillis = value * 60 * 1000;

        this.setState({
            timeSlotDurationMin: value,
            timeSlotDuration: timeSlotDurationMillis
        });
    }

    checkTimeSlotDuration() {
        let duration = Number(this.state.timeSlotDurationMin);
        return Number.isInteger(duration);
    }

    sameDate(d1, d2) {
        if (d1 == null || d2 == null) {
            return false;
        }
        return (
            d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate()
        );
    }

    availableTimeSlots(day, createdTimeSlots) {
        let timeSlots = [];
        for (let timeSlot of createdTimeSlots) {
            if (this.sameDate(timeSlot, day)) {
                timeSlots.push(timeSlot);
            }
        }
        return timeSlots;
    }

    render() {
        return (
            <Container>
                <Row>
                    <Form>
                        <Form.Group>
                            <Form.Label className="form-label">Time slot length in minutes</Form.Label>
                            <Form.Control
                                className="input-data"
                                name="timeslotDurationMin"
                                type="text"
                                placeholder="Enter time slot length in minutes"
                                value={this.state.timeSlotDurationMin}
                                onChange={this.handleTimeSlotDurationChange}
                            />
                        </Form.Group>
                    </Form>
                </Row>
                <Row>
                    <Col>
                        <DayCreationList
                            createdDays={this.state.createdDays}
                            createDay={day => this.createDay(day)}
                            deleteDay={day => this.deleteDay(day)}
                            handleCreateTimeSlotClick={day => this.handleCreateTimeSlotClick(day)}/>
                    </Col>
                    <Col>
                        <TimeSlotCreationList
                            createdTimeSlots={this.state.availableTimeSlots}
                            createTimeSlot={timeSlot => this.createTimeSlot(timeSlot)}
                            deleteTimeSlot={timeSlot => this.deleteTimeSlot(timeSlot)}
                            selectedDay={this.state.selectedDay}
                            duration={this.state.timeSlotDuration}
                            canCreate={this.checkTimeSlotDuration() && this.state.selectedDay}
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
}
