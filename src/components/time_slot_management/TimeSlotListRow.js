"use strict";

import React from 'react';
import { TableRow, TableColumn, FontIcon, Button } from 'react-md';

export class TimeSlotListRow extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TableRow>
                <TableColumn>
                    Here will be a radio button
                </TableColumn>
                <TableColumn>
                    {this.props.timeslot}
                </TableColumn>
            </TableRow>
        );
    }
}
