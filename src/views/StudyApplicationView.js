'use strict';

import React from 'react';

import { StudyApplication } from '../components/StudyApplication';

export class StudyApplicationView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: {
                title: 'Driving Simulator',
                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                prerequisites: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                reward: '5.00',
                location: 'Garching Forschungszentrum',
                contact: 'nico.schreder@tum.de',
                timeslots: ['11:00-12:00', '12:00-13:00', '12:00-13:00', '12:00-13:00', '12:00-13:00', '12:00-13:00', '12:00-13:00', '12:00-13:00', '12:00-13:00', '12:00-13:00']
            }
        }
    }

    render() {
        if(this.state.loading) {
            return (<h2>Loading...</h2>);
        }

        return (
            <StudyApplication data={this.state.data}/>
        );
    }
}
