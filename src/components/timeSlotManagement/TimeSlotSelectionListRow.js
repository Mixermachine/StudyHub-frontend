"use strict";

import React from 'react';

export class TimeSlotSelectionListRow extends React.Component {

    constructor(props) {
        super(props);
        this.hoursMinutes = this.hoursMinutes.bind(this);
    }

    buildTimeSlot() {
        let ts = this.hoursMinutes(new Date(this.props.timeslot.start));
        ts += ' - ';
        return ts + this.hoursMinutes(new Date(this.props.timeslot.stop));
    }

    hoursMinutes(d) {
        return d.getHours() + ':' + this.leadingZero(d.getMinutes());
    }

    leadingZero(n) {
        if (n < 10) {
            return '0' + n;
        }
        return n;
    }

    render() {
        return (
            <tr>
                <td>
                    <input type="radio" name="tsSelection" onClick={() => this.props.onTimeSlotClick()}/>
                </td>
                <td>
                    {this.buildTimeSlot()}
                </td>
            </tr>
        );
    }
}
