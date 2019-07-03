"use strict";

import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export class TimeSlotSelectionListRow extends React.Component {

    constructor(props) {
        super(props);
        this.hoursMinutes = this.hoursMinutes.bind(this);
    }

    buildTimeSlot() {
        let ts = this.hoursMinutes(this.props.timeslot.start);
        ts += ' - ';
        return ts + this.hoursMinutes(this.props.timeslot.stop);
    }

    hoursMinutes(d) {
        return d.getHours() + ':' + this.leadingZero(d.getMinutes());
    }

    leadingZero(n) {
        if (n.toString() < 2) {
            return '0' + n;
        }
        return n;
    }

    render() {
        return (
            <tr>
                <td>
                    <input type="radio" name="tsSelection"/>
                </td>
                <td>
                    {this.buildTimeSlot()}
                </td>
            </tr>
        );
    }
}
