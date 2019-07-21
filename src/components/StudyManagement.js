'use strict';

import React from 'react';

import Page from './Page'
import UserService from "../services/UserService";
import Container from "react-bootstrap/Container";
import StudyService from "../services/StudyService";
import {ParticipantList} from "./ParticipantList";
import Button from "react-bootstrap/Button";
import Link from "react-router-dom/es/Link";



export class StudyManagement extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {},
            study: {},
            timeslots: [],
            id: this.props.study,
        };

        if(UserService.isAuthenticated()) {
            UserService.getCurrentUser().then(user => {
                this.setState({
                    user: user,
                });
            }).catch(e => console.error(e));
        }

        StudyService.getStudy(this.state.id).then(study => {
            this.setState({
                study: study,
            });

        }).catch(e => {
            console.error(e);
        });

        StudyService.getTimeslots(this.state.id).then(slots => {
            this.setState({
                timeslots: slots,
            });
        }).catch(e => {
            console.error(e);
        });
    }

    render() {
        return (
            <Page>
                <Container>
                    <h1>Manage {this.state.study.title}</h1>
                    <p>{this.state.study.description}</p>
                    <p>You have currently {this.state.study.capacity - this.state.study.availableCapacity} of {this.state.study.capacity} participants registered in your study.</p>

                    <table>
                        <thead className="table-header">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Date</th>
                            <th scope="col">Timeslot</th>
                            <th scope="col">Actions</th>
                        </tr>
                        </thead>
                        <ParticipantList timeslots={this.state.timeslots} />
                    </table>
                </Container>
            </Page>
        )
    }
}

/*


                    <br />
                    <Link to='/studies/create'><Button className="input-button">Schedule</Button></Link>
 */