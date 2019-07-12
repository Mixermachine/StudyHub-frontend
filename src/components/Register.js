'use strict';

import React from 'react';
import ReactDOM from 'react-dom'

import Page from './Page'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {AlertMessage} from "./movie/AlertMessage";

export class Register extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            DoB: '',
            gender: '',
            email: '',
            password: '',
            passwordwdh: ''
        };

        this.handleChangeGenderMale = this.handleChangeGenderMale.bind(this);
        this.handleChangeGenderFemale = this.handleChangeGenderFemale.bind(this);
        this.handleChangeGenderDivers = this.handleChangeGenderDivers.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeGenderMale(value) {
        this.setState(Object.assign({}, this.state, {gender: 'm'}));
    }

    handleChangeGenderFemale(value) {
        this.setState(Object.assign({}, this.state, {gender: 'f'}));
    }

    handleChangeGenderDivers(value) {
        this.setState(Object.assign({}, this.state, {gender: 'd'}));
    }

    handleSubmit(event) {
        event.preventDefault();

        let user = {
            firstName: ReactDOM.findDOMNode(this.firstName).value,
            lastName: ReactDOM.findDOMNode(this.lastName).value,
            DoB: ReactDOM.findDOMNode(this.birthday).value,
            gender: this.state.gender,
            email: ReactDOM.findDOMNode(this.email).value,
            password: ReactDOM.findDOMNode(this.password).value,
            passwordwdh: ReactDOM.findDOMNode(this.passwordwdh).value
        };

        this.props.onSubmit(user);
    }

    render() {
        return (
            <Page>
                <h1>Register</h1>
                <Form onSubmit={this.handleSubmit} >
                    <Form.Group controlId="formCreateStudy">
                        <Form.Label>Firstname</Form.Label>
                        <Form.Control type="text" placeholder="Enter firstname"
                                      required={true}
                                      ref={ firstname => { this.firstName = firstname }} />
                    </Form.Group>

                    <Form.Group controlId="formCreateStudy">
                        <Form.Label>Lastname</Form.Label>
                        <Form.Control type="text" placeholder="Enter lastname"
                                      required={true}
                                      ref={ lastname => { this.lastName = lastname }} />
                    </Form.Group>

                    <Form.Group controlId="formCreateStudy">
                        <Form.Label>Gender</Form.Label>

                        <div>
                            <Form.Check inline label="Male" type="radio" id="male" name="gender"
                                        ref={ gender => { this.genderMale = gender }}
                                        required={true}
                                        onChange={this.handleChangeGenderMale} />

                            <Form.Check inline label="Female" type="radio" id="female" name="gender"
                                        ref={ gender => { this.genderFemale = gender }}
                                        required={true}
                                        onChange={this.handleChangeGenderFemale} />

                            <Form.Check inline label="Divers" type="radio" id="divers" name="gender"
                                        ref={ gender => { this.genderDivers = gender }}
                                        required={true}
                                        onChange={this.handleChangeGenderDivers} />
                        </div>
                    </Form.Group>

                    <Form.Group controlId="formCreateStudy">
                        <Form.Label>Birthday</Form.Label>
                        <Form.Control type="date"
                                      required={true}
                                      ref={ birthday => { this.birthday = birthday }} />
                    </Form.Group>

                    <Form.Group controlId="formCreateStudy">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"
                                      required={true}
                                      ref={ email => { this.email = email }} />
                    </Form.Group>

                    <Form.Group controlId="formCreateStudy">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"
                                      required={true}
                                      ref={ password => { this.password = password }} />
                    </Form.Group>

                    <Form.Group controlId="formCreateStudy">
                        <Form.Label>Confirm password</Form.Label>
                        <Form.Control type="password"
                                      required={true}
                                      ref={ passwordwdh => { this.passwordwdh = passwordwdh }} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Check
                            required
                            label="By signing up, you agree to our Terms, Privacy Policy, and Cookie Use."
                            feedback="You must agree before submitting."
                        />
                    </Form.Group>

                    <Button variant="primary" id="submit" type="submit">
                        Register
                    </Button>
                    <AlertMessage>{this.props.error ? `${this.props.error}` : ''}</AlertMessage>
                </Form>
            </Page>
        );
    }
};

/*
disabled={
            this.state.firstname == undefined || this.state.firstname == '' ||
            this.state.lastname == undefined || this.state.lastname == '' ||
            this.state.password == undefined || this.state.password == '' ||
            this.state.email == undefined || this.state.email == '' ||
            this.state.password == undefined || this.state.password == '' ||
            this.state.password != this.state.passwordwdh ||
            this.state.gender == undefined || this.state.gender == ''||
            this.state.dob == undefined || this.state.dob == ''  ? true : false}

 */
