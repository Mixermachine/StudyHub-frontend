"use strict";

import React from 'react';
import {DataTable, TableHeader, TableBody, TableRow, TableColumn} from 'react-md';

import {TimeSlotSelectionListRow} from './TimeSlotSelectionListRow'
import {DaySelectionListRow} from "./DaySelectionListRow";
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
                <h3>Select a time slot:</h3>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Selection</th>
                        <th>Time</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.timeslots.map((timeslot, i) =>
                        <TimeSlotSelectionListRow key={i} timeslot={timeslot} radioName={'radioName'}/>
                    )}
                    </tbody>
                </Table>
            </div>
        );
    }
}
