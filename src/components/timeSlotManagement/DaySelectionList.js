'use strict';

import React from 'react';
import {Table} from "react-bootstrap";
import {DaySelectionListRow} from "./DaySelectionListRow";

export class DaySelectionList extends React.Component {

    constructor(props, i) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3><strong>Select a day</strong></h3>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Selection</th>
                        <th>Day</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.days.map((day, i) =>
                        <DaySelectionListRow key={i} day={day} onDayClick={() => this.props.onDayClick(day)}/>
                    )}
                    </tbody>
                </Table>
            </div>
        );
    }
}
