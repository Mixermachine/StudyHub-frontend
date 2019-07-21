'use strict';

import React from 'react';
import Button from "react-bootstrap/Button";

export class TimeSlotCreationListRow extends React.Component {
    constructor(props) {
        super(props);
    }

    leadingZero(n) {
        if (n.toString() < 2) {
            return '0' + n;
        }
        return n;
    }

    render() {
        let start = this.props.timeSlot;
        let stop = new Date(start.getTime() + this.props.duration);

        let startHour = start.getHours();
        let startMin = this.leadingZero(start.getMinutes());

        let stopHour = stop.getHours();
        let stopMin = this.leadingZero(stop.getMinutes());

        return (
            <tr>
                <td>{startHour + ':' + startMin + ' - ' + stopHour + ':' + stopMin}</td>
                <td><Button onClick={() => this.props.deleteTimeSlot()}>Delete</Button></td>
            </tr>
        );
    }
}
