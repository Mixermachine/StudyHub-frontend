"use strict";

import React from 'react';
import {DataTable, TableHeader, TableBody, TableRow, TableColumn} from 'react-md';

import {TimeSlotListRow} from './TimeSlotListRow'

export class TimeSlotList extends React.Component {

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
                <DataTable plain>
                    <TableHeader>
                        <TableRow>
                            <TableColumn>Selection</TableColumn>
                            <TableColumn>Time</TableColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {this.props.timeslots.map((timeslot, i) => <TimeSlotListRow timeslot={timeslot}/>)}
                    </TableBody>
                </DataTable>
            </div>
        );
    }
}

// export const TimeSlotList = (timeslots) => (
//     <div>
//         <h3>Select a time slot:</h3>
//         <DataTable plain>
//             <TableHeader>
//                 <TableRow>
//                     <TableColumn>Selection</TableColumn>
//                     <TableColumn>Time</TableColumn>
//                 </TableRow>
//             </TableHeader>
//             <TableBody>
//                 {timeslots.map((timeslot, i) => <TimeSlotListRow timeslot={timeslot}/>)}
//             </TableBody>
//         </DataTable>
//     </div>
// );
