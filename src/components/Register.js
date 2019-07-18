'use strict';

import React from 'react';

import Page from './Page'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
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
                <Container>
                    <p className="hightlight-text">Not a member? Let’s fix that!</p>
                    <br />
                    <Row>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="https://webdisk.ads.mwn.de/Handlers/Download.ashx?file=Home%2FDesktop%2FStudyHub%2Fstudents.png&action=download" />
                                <Card.Body>
                                    <Card.Title className="search-result-card-title">Students</Card.Title>
                                    <Card.Text>
                                        <img src="https://img.icons8.com/windows/32/000000/filled-star.png"/>&nbsp;&nbsp;&nbsp;&nbsp;Finding interesting studies to join<br />
                                        <img src="https://img.icons8.com/windows/32/000000/money.png"/>&nbsp;&nbsp;&nbsp;&nbsp;Earn money in your free time<br />
                                        <img src="https://img.icons8.com/windows/32/000000/share.png"/>&nbsp;&nbsp;&nbsp;&nbsp;Networking with researcher and students<br /><br />
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="https://webdisk.ads.mwn.de/Handlers/Download.ashx?file=Home%2FDesktop%2FStudyHub%2Fresearch.png&action=download" />
                                <Card.Body>
                                    <Card.Title className="search-result-card-title">Researcher</Card.Title>
                                    <Card.Text>
                                        <img src="https://img.icons8.com/windows/32/000000/joining-queue.png"/>&nbsp;&nbsp;&nbsp;&nbsp;Finding participants for studies and managing them<br />
                                        <img src="https://img.icons8.com/windows/32/000000/talk-female.png"/>&nbsp;&nbsp;&nbsp;&nbsp;Getting feedback from participants<br />
                                        <img src="https://img.icons8.com/windows/32/000000/accept-database.png"/>&nbsp;&nbsp;&nbsp;&nbsp;Centralized data management<br />
                                        <img src="https://img.icons8.com/windows/32/000000/cheap-2.png"/>&nbsp;&nbsp;&nbsp;&nbsp;Calculable costs for each participant
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <br /><br />
                <Form onSubmit={this.handleSubmit} >
                    <Form.Group>
                        <Form.Label><div className="form-label">Firstname</div></Form.Label>
                        <Form.Control className="input-data"
                                      name="firstName"
                                      type="text"
                                      placeholder="Enter firstname"
                                      required={true}
                                      value={this.state.firstName}
                                      onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label><div className="form-label">Lastname</div></Form.Label>
                        <Form.Control className="input-data"
                                      name="lastName"
                                      type="text"
                                      placeholder="Enter lastname"
                                      required={true}
                                      value={this.state.lastName}
                                      onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label><div className="form-label">Gender</div></Form.Label>

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
                        <Form.Label><div className="form-label">Birthday</div></Form.Label>
                        <Form.Control className="input-data"
                                      name="DoB"
                                      type="text"
                                      placeholder="Enter birthday (yyyy-mm-dd)"
                                      required={true}
                                      value={this.state.DoB}
                                      onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label><div className="form-label">Email</div></Form.Label>
                        <Form.Control className="input-data"
                                      name="email"
                                      type="email"
                                      placeholder="Enter email"
                                      required={true}
                                      value={this.state.email}
                                      onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label><div className="form-label">Password</div></Form.Label>
                        <Form.Control className="input-data"
                                      name="password"
                                      type="password"
                                      required={true}
                                      value={this.state.password}
                                      onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label><div className="form-label">Confirm password</div></Form.Label>
                        <Form.Control className="input-data"
                                      name="passwordwdh"
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

                    <Button className="input-button" variant="primary" id="submit" type="submit">
                        Register
                    </Button>
                    <AlertMessage>{this.props.error ? `${this.props.error}` : ''}</AlertMessage>
                </Form>

                </Container>
            </Page>
        );
    }
};