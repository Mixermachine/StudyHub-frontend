'use strict';

import React from 'react';

import Page from './Page';

import {TimeSlotManagement} from './timeSlotManagement/TimeSlotManagement';
import StudyService from "../services/StudyService";

export class StudyApplication extends React.Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(timeslot) {
        let studyId = this.props.studyId;
        let participantId = 123;

        StudyService.updateTimeslot(studyId, timeslot.id, {participantId: participantId}).then((data => console.log(data)).catch(e => console.log(e)));
    }

    render() {
        return (
            <Page>
                <div>
                    <h1>{this.props.study.title}</h1>

                    <h2>Description</h2>
                    <p>{this.props.study.description}</p>

                    <hr/>

                    <h2>Prerequisites</h2>
                    <p>{this.props.study.prerequisites}</p>

                    <hr/>

                    <h2>Reward: {this.props.study.rewardAmount + ' ' + this.props.study.rewardCurrency}</h2>

                    <hr/>

                    <h2>Capacity: {this.props.study.capacity}</h2>

                    <hr/>

                    <h2>Location</h2>
                    <p>{this.props.study.street + ' ' + this.props.study.number + ', ' + this.props.study.zip + ' ' + this.props.study.city + '. ' + this.props.study.country}</p>

                    <hr/>
                </div>

                <div>
                    <TimeSlotManagement timeslots={this.props.timeslots} handleSubmit={(timeslot) => this.handleSubmit(timeslot)}/>
                </div>
            </Page>
        );
    }
}
