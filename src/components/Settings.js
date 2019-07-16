'use strict';

import React from 'react';

import Page from './Page'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Link from "react-router-dom/es/Link";


import UserService from "../services/UserService";

export class Settings extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: UserService.isAuthenticated() ? UserService.getCurrentUser() : undefined,
            password: '',
            passwordwdh: ''
        }


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let target = event.target;
        let name = target.name;
        let value = target.value;

        this.setState({
            [name]: value,
        });
    }

    static inBoundaries(string, min, max, name, minlength) {
        if (string.length < min) return name + ' is too short (min. ' + minlength + ')\n';
        if (string.length > max) return name + ' is too long.\n';
        return '';
    }

    handleSubmit(event) {
        event.preventDefault();

        let errorMessage = '';

        errorMessage += Settings.inBoundaries(this.password, 3, 255, 'Password', 3);


        if(this.state.password != this.state.passwordwdh) {
            errorMessage += "Passwords don't match."
        }

        if (!errorMessage) {
            this.state.user.password = this.state.password;
            this.props.onSubmit(this.state.user);
        } else {
            errorMessage = 'Some inputs are not filled correctly:\n' + errorMessage;
            alert(errorMessage)
        }
    }

    render() {
        return (
            <Page>
                <h1>Settings</h1>

                <h2>Password</h2>
                <Form>
                    <Form.Group>
                        <Form.Label>New password</Form.Label>
                        <Form.Control  name="password"
                                       type="password"
                                       required={true}
                                       value={this.state.password}
                                       onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Confirm new password</Form.Label>
                        <Form.Control  name="passwordwdh"
                                       type="password"
                                       required={true}
                                       value={this.state.passwordwdh}
                                       onChange={this.handleChange}  />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Change password
                    </Button>
                </Form>
            </Page>
        );
    }
};