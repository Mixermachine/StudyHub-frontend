"use strict";

import React from 'react';
import Page from './Page'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {AlertMessage} from "./movie/AlertMessage";
import ReactDOM from "react-dom";

export class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username : '',
            password : ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        let user = {
            email: ReactDOM.findDOMNode(this.email).value,
            password: ReactDOM.findDOMNode(this.password).value
        };

        this.props.onSubmit(user);
    }

    render() {
        return (
            <Page>
                <h1>Login</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formLogin">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"
                                      required={true}
                                      ref={email => {
                                          this.email = email
                                      }}/>
                    </Form.Group>

                    <Form.Group controlId="formLogin">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"
                                      required={true}
                                      ref={password => {
                                          this.password = password
                                      }}/>
                    </Form.Group>

                    <Button variant="primary" id="submit" type="submit">
                        Login
                    </Button>
                    <AlertMessage>{this.props.error ? `${this.props.error}` : ''}</AlertMessage>
                </Form>
            </Page>
        );
    }
};