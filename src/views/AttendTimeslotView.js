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
        });

        //let id = this.props.match.params.id;
        let id = "2147400001"; // dummy


        StudyService.getStudy(id).then(study => {
            this.setState({
                study: study,
                studyLoading: false
            });
        }).catch(e => {
            console.error(e);
        });

        StudyService.getTimeslots(id).then(timeslots => {
            let availableTS = [];
            for (let timeslot of timeslots) {
                if(!timeslot.attended && !timeslot.participantId)
                    availableTS.push(timeslot);
            }
            this.setState({
                timeslots: availableTS,
                timeslotsLoading: false
            });
        }).catch(e => {
            console.error(e);
        });
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
