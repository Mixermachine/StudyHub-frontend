"use strict";

import React from 'react';
import Page from './Page'
import UserService from "../services/UserService";

export class Profile extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: UserService.isAuthenticated() ? UserService.getCurrentUser() : undefined
        }
    }

    render() {
        return (
            <Page>
                <h1>Profile</h1>
                <p>Firstname: {this.state.user.firstName}</p>
                <p>Lastname: {this.state.user.lastName}</p>
                <p>Birthday: {this.state.user.DoB}</p>
                <p>Email: {this.state.user.email}</p>
                <p>Gender: {this.state.user.gender}</p>
            </Page>
        );
    }
};