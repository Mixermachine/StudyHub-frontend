'use strict';

import React from 'react';
import Button from "react-bootstrap/Button";

export class DayCreationListRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let date = this.props.day.getDate();
        let month = this.props.day.getMonth() + 1;
        let year = this.props.day.getFullYear();

        return (
            <tr>
                <td>{year + '-' + month + '-' + date}</td>
                <td><Button onClick={() => this.props.handleCreateTimeSlotClick()}>Timeslots</Button></td>
                <td><Button onClick={() => this.props.deleteDay()}>Delete</Button></td>
            </tr>
        );
    }
}
