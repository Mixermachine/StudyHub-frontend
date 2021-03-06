"use strict";

import React from 'react';

import {TimeSlotSelectionListRow} from './TimeSlotSelectionListRow'
import {Table} from "react-bootstrap";

export class TimeSlotSelectionList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selection: -1
        };
    }

    render() {
        return (
            <div>
                <h3><strong>Select a time slot</strong></h3>
                <Table striped bordered hover>
                    <thead className="table-header">
                    <tr>
                        <th>Selection</th>
                        <th>Time</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.timeslots.map((timeslot, i) =>
                        <TimeSlotSelectionListRow key={i} timeslot={timeslot} radioName={'radioName'} onTimeSlotClick={() => this.props.onTimeSlotClick(timeslot)}/>
                    )}
                    </tbody>
                </Table>
            </div>
        );
    }
}
