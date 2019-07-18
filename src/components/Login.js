"use strict";

import React from 'react';
import Page from './Page'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {AlertMessage} from "./movie/AlertMessage";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

export class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username : '',
            password : ''
        };

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

        errorMessage += Login.inBoundaries(this.state.email, 1, 255, 'Email', 3);
        errorMessage += Login.inBoundaries(this.state.password, 1, 255, 'Password', 3);

        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!re.test(this.state.email)) {
            errorMessage += "Email is not correct."
        }

        if (!errorMessage) {
            let user = {
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
                    <Row>
                        <Col>
                            <p className="hightlight-text">Hello again!</p>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group>
                                    <Form.Label className="form-label">Email</Form.Label>
                                    <Form.Control className="input-data"
                                                  name="email"
                                                  type="email"
                                                  placeholder="Enter email"
                                                  required={true}
                                                  value={this.state.email}
                                                  onChange={this.handleChange}/>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label className="form-label">Password</Form.Label>
                                    <Form.Control className="input-data"
                                                  name="password"
                                                  type="password"
                                                  required={true}
                                                  value={this.state.password}
                                                  onChange={this.handleChange}/>
                                </Form.Group>

                                <Button className="input-button" variant="primary" id="submit" type="submit">
                                    Login
                                </Button>
                                <AlertMessage>{this.props.error ? `${this.props.error}` : ''}</AlertMessage>
                                <br /><br /><br /><br /><br /><br /><br />
                            </Form>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="https://webdisk.ads.mwn.de/Handlers/Download.ashx?file=Home%2FDesktop%2FStudyHub%2Flogin.png&action=download" />
                            </Card>
                        </Col>
                    </Row>
                </Container>


            </Page>
        );
    }
};