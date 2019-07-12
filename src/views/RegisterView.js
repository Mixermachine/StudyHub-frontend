'use strict';

import React from 'react';

import {Register} from '../components/Register';
import UserService from "../services/UserService";
import UserSignup from "../components/movie/UserSignup";


export class RegisterView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    signup(user) {
        UserService.register(user.firstName, user.lastName, user.password, user.DoB, user.gender, user.email).then((data) => {
            this.props.history.push('/');
        }).catch((e) => {
            console.error(e);
            this.setState({
                error: e
            });
        })
    }

    render() {
        return (
            <Register onSubmit={(user) => this.signup(user)} error={this.state.error}></Register>
        );
    }
}
