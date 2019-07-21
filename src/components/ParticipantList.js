'use strict';

import React from 'react';

import {ParticipantListRow} from './ParticipantListRow'

export class ParticipantList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tbody>
                {
                    this.props.timeslots.map((timeslot, i) => <ParticipantListRow key={i} timeslot={timeslot}/>)
                }
            </tbody>
        );
    }
}
