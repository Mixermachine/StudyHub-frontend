'use strict';

import React from 'react';

import {StudyCreation} from '../components/StudyCreation';
import UserService from "../services/UserService";

export class StudyCreationView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userIdLoading: true
        };

        this.redirectAfterCreation = this.redirectAfterCreation.bind(this);
    }

    redirectAfterCreation() {
        this.props.history.push('/studies/my');
    }

    componentWillMount() {
        if (UserService.isAuthenticated()) {
            UserService.getCurrentUser().then(user => {
                this.setState({
                    userId: user.id,
                    userIdLoading: false
                });
                UserService.createCreator(user.id).catch(e => {});
                UserService.createPayee(user.id).catch(e => {});
            });
        } else this.props.history.push('/login');
    }

    render() {
        if (this.state.userIdLoading) return (<h2>Loading...</h2>);

        return (
            <StudyCreation
                userId={this.state.userId}
                redirect={this.redirectAfterCreation}
            />
        );
    }
}