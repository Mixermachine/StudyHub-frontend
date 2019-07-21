'use strict';

import React from 'react';
import GenerateSecureCheckin from '../components/GenerateSecureCheckin';

export class GenerateSecureCheckinView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            studyId: 0,
            timeslotId: 0
        };

        this.state.studyId = this.props.match.params.studyId;
        this.state.timeslotId = this.props.match.params.timeslotId;
    }

    componentWillMount() {

    }

    render() {
        if (this.state.studyLoading || this.state.timeslotsLoading) {
            return (<h2>Loading...</h2>);
        }

        return (
            <GenerateSecureCheckin
                studyId={this.state.studyId}
                timeslotId={this.state.timeslotId}
            />
        );
    }
}
