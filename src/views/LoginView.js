'use strict';

import React from 'react';

import {Login} from '../components/Login';
import UserService from "../services/UserService";
import UserLogin from "../components/movie/UserLogin";

export class LoginView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    login(user) {
        UserService.login(user.email, user.password).then((data) => {
            this.props.history.goBack();
        }).catch((e) => {
            console.error(e);
            this.setState({
                error: e
            });
        });
    }

    render() {
        return (
            <Login onSubmit={(user) => this.login(user)} error={this.state.error}></Login>
        );
    }
}
