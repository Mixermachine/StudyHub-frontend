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
        let studyId = this.props.match.params.id;
        let participantId = 123;
        timeslot.participantId = participantId;

        StudyService.updateTimeslot(studyId, timeslot).then((data => console.log(data)).catch(e => console.log(e)));
    }

    render() {
        return (
            <Page>
                <div>
                    <h1>{this.props.study.title}</h1>

                    <h3>Description</h3>
                    <p>{this.props.study.description}</p>

                    <hr/>

                    <h3>Prerequisites</h3>
                    <p>{this.props.study.prerequisites}</p>

                    <hr/>

                    <h3>Reward: {this.props.study.rewardAmount + ' ' + this.props.study.rewardCurrency}</h3>

                    <hr/>

                    <h3>Capacity: {this.props.study.capacity}</h3>

                    <hr/>

                    <h3>Location</h3>
                    <p>{this.props.study.street + ' ' + this.props.study.number + ', ' + this.props.study.zip + ' ' + this.props.study.city + '. ' + this.props.study.country}</p>

                    <hr/>

                    <h3>Contact</h3>
                    <p>
                        // TODO contact
                    </p>

                    <button>Edit</button>
                </div>

                <div>
                    <TimeSlotManagement timeslots={this.props.timeslots}/>
                </div>

                <div>
                    <button>
                        Confirm
                    </button>
                </div>
            </Page>
        );
    }
}
