'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import {StudyApplication} from '../components/StudyApplication';

export class StudyApplicationView extends React.Component {

    // TODO load timeslots from backend and sort out booked ones
    // TODO add componentWillMount

    constructor(props) {
        super(props);

        let start11 = new Date("2019-06-23T11:00:00Z");
        let stop11 = new Date("2019-06-23T12:00:00Z");
        let start12 = new Date("2019-06-23T12:00:00Z");
        let stop12 = new Date("2019-06-23T13:00:00Z");
        let start13 = new Date("2019-06-23T13:00:00Z");
        let stop13 = new Date("2019-06-23T14:00:00Z");

        let start21 = new Date("2019-06-24T08:00:00Z");
        let stop21 = new Date("2019-06-24T09:00:00Z");
        let start22 = new Date("2019-06-24T09:00:00Z");
        let stop22 = new Date("2019-06-24T10:00:00Z");
        let start23 = new Date("2019-06-24T10:00:00Z");
        let stop23 = new Date("2019-06-24T11:00:00Z");

        let start31 = new Date("2019-06-25T14:00:00Z");
        let stop31 = new Date("2019-06-25T15:00:00Z");
        let start32 = new Date("2019-06-25T15:00:00Z");
        let stop32 = new Date("2019-06-25T16:00:00Z");
        let start33 = new Date("2019-06-25T16:00:00Z");
        let stop33 = new Date("2019-06-25T17:00:00Z");


        this.state = {
            loading: false,
            data: {
                title: 'Driving Simulator',
                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                prerequisites: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                reward: '5.00',
                location: 'Garching Forschungszentrum',
                contact: 'nico.schreder@tum.de',
                timeslots: [
                    {
                        start: start11,
                        stop: stop11,
                        participantID: null

                    },
                    {
                        start: start12,
                        stop: stop12,
                        participantID: null

                    },
                    {
                        start: start13,
                        stop: stop13,
                        participantID: null

                    },
                    {
                        start: start21,
                        stop: stop21,
                        participantID: null
                    },
                    {
                        start: start22,
                        stop: stop22,
                        participantID: null
                    },
                    {
                        start: start23,
                        stop: stop23,
                        participantID: null
                    },
                    {
                        start: start31,
                        stop: stop31,
                        participantID: null
                    },
                    {
                        start: start32,
                        stop: stop32,
                        participantID: null
                    },
                    {
                        start: start33,
                        stop: stop33,
                        participantID: null
                    },
                    ]
            }
        }
    }

    render() {
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }

        return (
            <StudyApplication data={this.state.data}/>
        );
    }
}
