'use strict';

import React from 'react';

import { StudyCreation } from '../components/StudyCreation';
import UserService from "../services/UserService";

export class StudyCreationView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userIdLoading: true
        }
    }

    componentWillMount() {
        UserService.getCurrentUser().then(user => {
            this.setState({
                userId: user.id,
                userIdLoading: false
            });
        })
    }

    render() {
        if (this.state.userIdLoading) return (<h2>Loading...</h2>);

        return (
            <StudyCreation userId={this.state.userId}/>
        );
    }
}