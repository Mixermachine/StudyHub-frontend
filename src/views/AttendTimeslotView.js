'use strict';

import React from 'react';

import {Support} from '../components/Support';
import StudyService from "../services/StudyService";
import UserService from "../services/UserService";
import {StudyApplication} from "../components/StudyApplication";
import {AttendTimeslot} from "../components/AttendTimeslot";

export class AttendTimeslotView extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.setState({
            studyLoading: true,
            timeslotsLoading: true,
            users: {}  //TODO: why is users undefined when I try to read it in AttendTimeslot.js
        });

        //let id = this.props.match.params.id;
        let id = "2147400001"; // dummy


        StudyService.getStudy(id).then(study => {
            this.setState({
                study: study,
                studyLoading: false,
            });
        }).catch(e => {
            console.error(e);
        });

        StudyService.getTimeslots(id).then(timeslots => {
            let availableTS = [];
            for (let timeslot of timeslots) {
                if(!timeslot.attended && timeslot.participantId !== null) {
                    availableTS.push(timeslot);
                    // I wanted function contained in line 57 here :/
                }
            }
            this.setState({
                timeslots: availableTS,
                timeslotsLoading: false
            });

        }).catch(e => {
            console.error(e);
        });

        //TODO: After timeslots are fetched (does not work), if I put this in line 42 it always logges out :/
        /*
        for (let timeslot of this.props.timeslots) {
            UserService.getUser(timeslot.participantId).then(user => {
                // set state to set: users.participantId = user
            });
        }
        */

        //TODO: Add button to get and show QR code, generate QR code first...
        //TODO: Refresh QR-code every 5 seconds
        //TODO: Implement view for response when QR code is read
    }

    render() {
        if (this.state.studyLoading || this.state.timeslotsLoading) {
            return (<h2>Loading...</h2>);
        }

        return (
            <AttendTimeslot
                participantId={this.state.userId}
                study={this.state.study}
                studyId={this.props.match.params.id}
                timeslots={this.state.timeslots}
            />
        );
    }
}
