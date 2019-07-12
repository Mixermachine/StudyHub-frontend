'use strict';

import React from 'react';

import {StudyApplication} from '../components/StudyApplication';
import StudyService from "../services/StudyService";

export class StudyApplicationView extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.setState({
            studyLoading: true,
            timeslotsLoading: true,
        });

        let id = this.props.match.params.id;

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
                let future = new Date(timeslot.start) >= new Date();
                if (future && !timeslot.reserved) availableTS.push(timeslot);
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
            <StudyApplication
                study={this.state.study}
                studyId={this.props.match.params.id}
                timeslots={this.state.timeslots}
            />
        );
    }
}

// let start11 = new Date("2019-06-23T11:00:00Z");
// let stop11 = new Date("2019-06-23T12:00:00Z");
// let start12 = new Date("2019-06-23T12:00:00Z");
// let stop12 = new Date("2019-06-23T13:00:00Z");
// let start13 = new Date("2019-06-23T13:00:00Z");
// let stop13 = new Date("2019-06-23T14:00:00Z");
//
// let start21 = new Date("2019-06-24T08:00:00Z");
// let stop21 = new Date("2019-06-24T09:00:00Z");
// let start22 = new Date("2019-06-24T09:00:00Z");
// let stop22 = new Date("2019-06-24T10:00:00Z");
// let start23 = new Date("2019-06-24T10:00:00Z");
// let stop23 = new Date("2019-06-24T11:00:00Z");
//
// let start31 = new Date("2019-06-25T14:00:00Z");
// let stop31 = new Date("2019-06-25T15:00:00Z");
// let start32 = new Date("2019-06-25T15:00:00Z");
// let stop32 = new Date("2019-06-25T16:00:00Z");
// let start33 = new Date("2019-06-25T16:00:00Z");
// let stop33 = new Date("2019-06-25T17:00:00Z");
//
// this.state = {
//     loading: false,
//     data: {
//         title: 'Driving Simulator',
//         description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
//         prerequisites: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
//         reward: '5.00',
//         location: 'Garching Forschungszentrum',
//         contact: 'nico.schreder@tum.de',
//         timeslots: [
//             {
//                 start: start11,
//                 stop: stop11,
//                 participantID: null
//
//             },
//             {
//                 start: start12,
//                 stop: stop12,
//                 participantID: null
//
//             },
//             {
//                 start: start13,
//                 stop: stop13,
//                 participantID: null
//
//             },
//             {
//                 start: start21,
//                 stop: stop21,
//                 participantID: null
//             },
//             {
//                 start: start22,
//                 stop: stop22,
//                 participantID: null
//             },
//             {
//                 start: start23,
//                 stop: stop23,
//                 participantID: null
//             },
//             {
//                 start: start31,
//                 stop: stop31,
//                 participantID: null
//             },
//             {
//                 start: start32,
//                 stop: stop32,
//                 participantID: null
//             },
//             {
//                 start: start33,
//                 stop: stop33,
//                 participantID: null
//             },
//         ]
//     }
// }
