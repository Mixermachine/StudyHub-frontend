'use strict';

import React from 'react';

import Page from './Page'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Link from "react-router-dom/es/Link";
import UserService from "../services/UserService";
import {StudyListCreated} from "./StudyListCreated";
import {StudyListApplied} from "./StudyListApplied";

export class MyStudies extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            studies_created: [],
            studies_applied: [],
            user: {}
        }

        if(UserService.isAuthenticated()) {
            UserService.getCurrentUser().then(user => {
                this.setState({
                    user: user,
                    loading: false,
                });

                UserService.getStudiesCreated(user.id).then(studies => {
                    this.setState({
                        studies_created: studies,
                        loading: false,
                    });
                }).catch(e => console.error(e));

                UserService.getStudiesApplied(user.id).then(studies => {
                    this.setState({
                        studies_applied: studies,
                        loading: false,
                    });
                }).catch(e => console.error(e));
            }).catch(e => console.error(e));
        }
    }

    render() {
        let studyapplied, studycreated;

        if(this.state.studies_created.length == 0) {
            studycreated = <div>It's empty here. Let's create a study. <img src="https://img.icons8.com/windows/32/000000/sad.png" /></div>;
        } else {
            studycreated = <StudyListCreated studies={this.state.studies_created} />;
        }

        if(this.state.studies_applied.length == 0) {
            studyapplied = <div>It's empty here. Let's apply for a study. <img src="https://img.icons8.com/windows/32/000000/sad.png" /></div>;
        } else {
            studyapplied = <StudyListApplied studies={this.state.studies_applied}  />;
        }

        return (
            <Page>
                <Container>
                    <h1>Study dashboard</h1>
                    <br />
                    <h2>My studies</h2>
                    <br />
                    {studycreated}
                    <br />
                    <ButtonToolbar>
                        <Link to='/studies/create'><Button className="input-button">Create new study</Button></Link>
                    </ButtonToolbar>
                    <br/>
                    <h2>Applied studies</h2>
                    <br />
                    {studyapplied}
                </Container>
            </Page>
        )
    }
}