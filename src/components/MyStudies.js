'use strict';

import React from 'react';

import Page from './Page'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Link from "react-router-dom/es/Link";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import UserService from "../services/UserService";
import {StudyListCreated} from "./StudyListCreated";
import {StudyListApplied} from "./StudyListApplied";

export class MyStudies extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            studies_created: {},
            studies_applied: {}
        }
    }

    componentWillMount() {
        this.setState({
            loading: true,
        });

        if(UserService.isAuthenticated()) {
            UserService.getCurrentUser().then(user => {
                this.setState({
                    user: user,
                    loading: false,
                });
            }).catch(e => console.error(e));

            UserService.getStudiesCreated(this.state.user.id).then(studies => {
                this.setState({
                    studies_created: studies,
                    loading: false,
                });
            }).catch(e => console.error(e));

            UserService.getStudiesApplied(this.state.user.id).then(studies => {
                this.setState({
                    studies_created: studies,
                    loading: false,
                });
            }).catch(e => console.error(e));
        }
    }

    render() {
        return (
            <Page>
                <Container>
                    <h1>Study dashboard</h1>

                    <br />
                    <h2>My studies</h2>

                    <StudyListCreated studies={this.state.studies_created} />


                    <br />

                    <ButtonToolbar>
                        <Link to='/studies/create'><Button className="input-button">Create new study</Button></Link>
                    </ButtonToolbar>

                    <br/>
                    <h2>Applied studies</h2>

                    <StudyListApplied studies={this.state.studies_applied}  />
                </Container>
            </Page>
        )
    }
}