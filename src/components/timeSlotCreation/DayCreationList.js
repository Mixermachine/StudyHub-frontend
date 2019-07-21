'use strict';

import React from 'react';
import Table from "react-bootstrap/Table";
import {DayCreationListRow} from "./DayCreationListRow";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";

export class DayCreationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            newDay: undefined
        };

        this.setShowModal = this.setShowModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleAddClick = this.handleAddClick.bind(this);
    }

    isValidDate(d) {
        return d instanceof Date && !isNaN(d);
    }

    setShowModal(boolean) {
        this.setState({showModal: boolean});
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
        let newDay = new Date(this.state.newDay);
        let valid = this.isValidDate(newDay);
        if (!valid || newDay < new Date()) {
            if (!valid) alert('Invalid date!');
            else alert('Date in the past!');
        } else {
            this.props.createDay(newDay);
            this.props.handleCreateTimeSlotClick(newDay);
            this.setShowModal(false);
        }
    }

    render() {
        return (
            <Table striped bordered hover>
                <thead className="table-header">
                <tr>
                    <th>Available days</th>
                    <th>Timeslots</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {this.props.createdDays.map((day, i) =>
                    <DayCreationListRow
                        day={day}
                        deleteDay={() => this.props.deleteDay(day)}
                        handleCreateTimeSlotClick={() => this.props.handleCreateTimeSlotClick(day)}
                    />
                )}
                <tr>
                    <td colSpan={3}><Button className="input-button" onClick={() => this.setShowModal(true)}>Add a day</Button></td>
                    <Modal
                        centered
                        show={this.state.showModal}
                        onHide={() => this.setShowModal(false)}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Enter a day to add</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form.Control
                                className="input-data"
                                name="newDay"
                                type="text"
                                placeholder="yyyy-mm-dd"
                                value={this.state.newDay}
                                onChange={this.handleChange}
                            />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="input-button" onClick={() => this.handleAddClick()}>Add</Button>
                            <Button className="input-button" onClick={() => this.setShowModal(false)}>Cancel</Button>
                        </Modal.Footer>
                    </Modal>
                </tr>
                </tbody>
            </Table>
        );
    }
}