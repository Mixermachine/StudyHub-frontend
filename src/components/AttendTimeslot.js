'use strict';

import React from 'react';

import Page from './Page';
import {TimeSlotManagement} from './timeSlotManagement/TimeSlotManagement';
import StudyService from "../services/StudyService";
import UserService from "../services/UserService";
import {TimeSlotSelectionListRow} from "./timeSlotManagement/TimeSlotSelectionListRow";

export class AttendTimeslot extends React.Component {

    constructor(props) {
        super(props);
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
        let self = this;
        return (
            <Page>
                <div>
                    <h1>{this.props.study.title}</h1>

                    <hr/>

                    <h2>Location</h2>
                    <p>{this.props.study.street + ' ' + this.props.study.number + ', ' + this.props.study.zip + ' ' + this.props.study.city + '. ' + this.props.study.country}</p>

                    <hr/>
                    {this.props.timeslots.map((timeslot, i) =>
                        <div>
                            <h2>Time Slot {i+1}</h2>
                            <p>Time: {this.hoursMinutes(new Date(timeslot.start))} - {this.hoursMinutes(new Date(timeslot.stop))}</p>
                            <p>{(this.props.users[timeslot.participantId] !== undefined) ? self.props.users[timeslot.participantId].firstName + " " + self.props.users[timeslot.participantId].lastName : ""}</p>
                            <p>Button to show QR code</p>
                            <hr/>
                        </div>
                    )}





                </div>
            </Page>
        );
    }
}
