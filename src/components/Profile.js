"use strict";

import React from 'react';
import Page from './Page'
import UserService from "../services/UserService";
import Container from "react-bootstrap/Container";

export class Profile extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            user: {}
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
        }
    }

    render() {
        if (this.state.loading) return (<h2>Loading...</h2>);
        let genderval;

        switch(this.state.user.gender.charAt(0))
        {
            case "d":
                genderval = "divers";
                break;
            case "f":
                genderval = "female";
                break;
            case "m":
                genderval = "male";
                break;
        }

        return (
            <Page>
                <Container>
                    <p className="hightlight-text">Hello {this.state.user.firstName} {this.state.user.lastName}</p>

                    <p>Birthday: {this.state.user.DoB}</p>
                    <p>Email: {this.state.user.email}</p>
                    <p>Gender: {genderval}</p>
                </Container>
            </Page>
        );
    }
};