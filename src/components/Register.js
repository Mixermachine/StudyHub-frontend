'use strict';

import React from 'react';

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

        this.genderDivers;
        this.genderFemale;
        this.genderMale;

        this.handleChangeGenderMale = this.handleChangeGenderMale.bind(this);
        this.handleChangeGenderFemale = this.handleChangeGenderFemale.bind(this);
        this.handleChangeGenderDivers = this.handleChangeGenderDivers.bind(this);

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

    handleChangeGenderMale(value) {
        this.setState(Object.assign({}, this.state, {gender: 'm'}));
    }

    handleChangeGenderFemale(value) {
        this.setState(Object.assign({}, this.state, {gender: 'f'}));
    }

    handleChangeGenderDivers(value) {
        this.setState(Object.assign({}, this.state, {gender: 'd'}));
    }

    static inBoundaries(string, min, max, name, minlength) {
        if (string.length < min) return name + ' is too short (min. ' + minlength + ')\n';
        if (string.length > max) return name + ' is too long.\n';
        return '';
    }

    handleSubmit(event) {
        event.preventDefault();

        let errorMessage = '';

        errorMessage += Register.inBoundaries(this.state.firstName, 3, 255, 'Firstname', 3);
        errorMessage += Register.inBoundaries(this.state.lastName, 3, 255, 'Lastname', 3);
        errorMessage += Register.inBoundaries(this.state.password, 3, 255, 'Passwort', 3);

        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!re.test(this.state.email)) {
            errorMessage += "Email is not correct."
        }

        if(this.state.password != this.state.passwordwdh) {
            errorMessage += "Password don't match."
        }

        if (!errorMessage) {
            let user = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                DoB: this.state.DoB,
                gender: this.state.gender,
                email: this.state.email,
                password: this.state.password
            };

            this.props.onSubmit(user);
        } else {
            errorMessage = 'Some inputs are not filled correctly:\n' + errorMessage;
            alert(errorMessage)
        }
    }

    render() {
        return (
            <Page>
                <h1>Register</h1>
                <Form onSubmit={this.handleSubmit} >
                    <Form.Group>
                        <Form.Label>Firstname</Form.Label>
                        <Form.Control name="firstName"
                                      type="text"
                                      placeholder="Enter firstname"
                                      required={true}
                                      value={this.state.firstName}
                                      onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Lastname</Form.Label>
                        <Form.Control name="lastName"
                                      type="text"
                                      placeholder="Enter lastname"
                                      required={true}
                                      value={this.state.lastName}
                                      onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group>
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

                    <Form.Group>
                        <Form.Label>Birthday</Form.Label>
                        <Form.Control name="DoB"
                                      type="text"
                                      placeholder="Enter birthday (dd.mm.yyyy)"
                                      required={true}
                                      value={this.state.DoB}
                                      onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email"
                                      type="email"
                                      placeholder="Enter email"
                                      required={true}
                                      value={this.state.email}
                                      onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password"
                                      type="password"
                                      required={true}
                                      value={this.state.password}
                                      onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Confirm password</Form.Label>
                        <Form.Control name="passwordwdh"
                                      type="password"
                                      required={true}
                                      value={this.state.passwordwdh}
                                      onChange={this.handleChange} />
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