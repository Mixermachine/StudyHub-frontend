'use strict';

import React from 'react';
import Table from "react-bootstrap/Table";
import {TimeSlotCreationListRow} from "./TimeSlotCreationListRow";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import {Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

export class TimeSlotCreationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            newTimeSlot: undefined,
            hour: 0,
            minute: 0
        };

        this.setShowModal = this.setShowModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleAddClick = this.handleAddClick.bind(this);
    }

    setShowModal(boolean) {
        if (this.props.canCreate) this.setState({showModal: boolean});
        else alert('Specify time slot length (integer value) and select a day');
    }

    handleChange(event) {
        let target = event.target;
        let name = target.name;
        let value = target.value;

        this.setState({
            [name]: value,
        });
    }

    handleAddClick() {
        let selectedDay = this.props.selectedDay;
        let year = selectedDay.getFullYear();
        let month = selectedDay.getMonth();
        let date = selectedDay.getDate();
        let hour = this.state.hour;
        let minute = this.state.minute;

        let newTimeSlot = new Date(year, month, date, hour, minute);
        this.props.createTimeSlot(newTimeSlot);
        this.setShowModal(false);
    }

    render() {
        return (
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Timeslots</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {this.props.createdTimeSlots.map((timeSlot, i) =>
                    <TimeSlotCreationListRow
                        timeSlot={timeSlot}
                        duration={this.props.duration}
                        deleteTimeSlot={() => this.props.deleteTimeSlot(timeSlot)}
                    />
                )}
                </tbody>
                <tr>
                    <td colSpan={2}><Button onClick={() => this.setShowModal(true)}>Add a time slot</Button></td>
                    <Modal
                        centered
                        show={this.state.showModal}
                        onHide={() => this.setShowModal(false)}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Enter a the start time:</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Container>
                                <Row>
                                    <Col>
                                        <Form.Control
                                            className="input-select"
                                            name="hour"
                                            as="select"
                                            value={this.state.hour}
                                            onChange={this.handleChange}
                                        >
                                            {[...Array(24).keys()].map((hour, i) =>
                                                    <option key={hour}>{hour}</option>)}
                                        </Form.Control>
                                    </Col>
                                    <Col>
                                        <Form.Control
                                            className="input-select"
                                            name="minute"
                                            as="select"
                                            value={this.state.minute}
                                            onChange={this.handleChange}
                                        >
                                            {[...Array(60).keys()].map((minute, i) =>
                                                <option key={minute}>{minute}</option>)}
                                        </Form.Control>
                                    </Col>
                                </Row>
                            </Container>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={() => this.handleAddClick()}>Add</Button>
                            <Button onClick={() => this.setShowModal(false)}>Cancel</Button>
                        </Modal.Footer>
                    </Modal>
                </tr>
            </Table>
        );
    }
}
