'use strict';

import React from 'react';

import Page from './Page'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


import UserService from "../services/UserService";
import Col from "react-bootstrap/Col";
import {PaymentMethodList} from "./PaymentMethodList";

export class Settings extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {},
            password: '',
            passwordwdh: '',
            payments: [],
        }

        if(UserService.isAuthenticated()) {
            UserService.getCurrentUser().then(user => {
                this.setState({
                    user: user,
                });

                UserService.getPayoutMethods(user.id).then(studies => {
                    this.setState({
                        payments: studies,
                    });
                }).catch(e => console.error(e));
            }).catch(e => console.error(e));
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
        let payment;

        if(this.state.payments.length == 0) {
            payment = <div>Let's add a payment method to get rewarded.</div>;
        } else {
            payment = <table>
                <thead className="table-header">
                <tr>
                    <th scope="col">Method</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>

            </table>;
        }

        return (
            <Page>
                <Container>
                    <h1>Settings</h1>
                    <br />
                    <h2>Password</h2>
                    <Form>
                        <Form.Group>
                            <Form.Label>New password</Form.Label>
                            <Form.Control  className="input-data"
                                           name="password"
                                           type="password"
                                           required={true}
                                           value={this.state.password}
                                           onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Confirm new password</Form.Label>
                            <Form.Control  className="input-data"
                                           name="passwordwdh"
                                           type="password"
                                           required={true}
                                           value={this.state.passwordwdh}
                                           onChange={this.handleChange}  />
                        </Form.Group>

                        <Button className="input-button" variant="primary" type="submit">
                            Change password
                        </Button>
                    </Form>
                    <br />
                    <h2>Payment</h2>
                    <Form>
                        <Container>
                            <Row>
                                <Col>
                                    <div className="input-select-wrapper">
                                        <Form.Control className="input-select"
                                                      type="text" as="select">
                                            <option>PayPal</option>
                                            <option>Direct Deposit</option>
                                            <option>Amazon Gift Card</option>
                                        </Form.Control>
                                    </div>
                                </Col>
                                <Col>
                                    <Button className="input-button" variant="primary" type="submit">
                                        Add
                                    </Button>
                                </Col>
                            </Row>
                            <br />
                            {payment}
                        </Container>
                    </Form>
                </Container>
            </Page>
        );
    }
};