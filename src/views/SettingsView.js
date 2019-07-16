'use strict';

import React from 'react';

import { Settings } from '../components/Settings';
import UserService from "../services/UserService";
import {Register} from "../components/Register";

export class SettingsView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    changeUser(user) {
        UserService.changeUser(user.firstName, user.lastName, user.password, user.DoB, user.gender, user.email).then((data) => {
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
            <Settings onSubmit={(user) => this.changeUser(user)} error={this.state.error}></Settings>
        );
    }
}