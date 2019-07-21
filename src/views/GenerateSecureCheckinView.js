'use strict';

import React from 'react';
import StudyService from "../services/StudyService";
import {SecureCheckin} from "../components/SecureCheckin";

export class GenerateSecureCheckinView extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    render() {
        if (this.state.studyLoading || this.state.timeslotsLoading) {
            return (<h2>Loading...</h2>);
        }

        return (
            <GenerateSecureCheckin
                participantId={this.state.userId}
                study={this.state.study}
                studyId={this.props.match.params.id}
                timeslots={this.state.timeslots}
            />
        );
    }
}
