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
import RewardService from "../services/RewardService";
import {SelectRow} from "./SelectListRow";
import {PaymentMethodListRow} from "./PaymentMethodListRow";
import {StudyListApplied} from "./StudyListApplied";

export class Settings extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {},
            password: '',
            passwordwdh: '',
            payments: [],
            payments_select: [],
            payoutMethodId: 2147400001,
        }

        if(UserService.isAuthenticated()) {
            UserService.getCurrentUser().then(user => {
                this.setState({
                    user: user,
                });

                UserService.getPayoutMethods(user.id).then(payments => {
                    this.setState({
                        payments: payments,
                    });
                }).catch(e => console.error(e));

                RewardService.getRewards().then(payments => {
                    this.setState({
                        payments_select: payments,
                    });
                }).catch(e => console.error(e));
            }).catch(e => console.error(e));
        }

        this.handleChangePayment = this.handleChangePayment.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleAddPaymentSubmit = this.handleAddPaymentSubmit.bind(this);
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

    handleAddPaymentSubmit(event) {
        event.preventDefault();

        let errorMessage = '';

            if (!errorMessage) {
                UserService.addPayoutMethods(this.state.user.id, {
                    rewardTypeId: this.state.payoutMethodId,
                    paymentInfo: this.state.paymentInfo,
                });

                this.window.location.reload();
            } else {
                errorMessage = 'Some inputs are not filled correctly:\n' + errorMessage;
                alert(errorMessage)
            }
    }

    handleChangePayment(event) {
        let value = event.target.value;

        this.setState({
            payoutMethodId: value,
        });
    }

    render() {
        let payment;
        let reward_select = "";

        this.state.payments_select.forEach(function(element) {
            reward_select = reward_select + "<option value='" + element.id + "'>" + element.name + "</option>";
        });

        if(this.state.payments.length == 0) {
            payment = <div>Let's add a payment method to get rewarded.</div>;
        } else {
            payment = <table>
                <thead className="table-header">
                <tr>
                    <th scope="col">Method</th>
                    <th scope="col">Information</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <PaymentMethodList payments={this.state.payments}  />
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

                        <Button className="input-button" variant="primary">
                            Change password
                        </Button>
                    </Form>
                    <br />
                    <h2>Payment</h2>
                    <Form onSubmit={this.handleAddPaymentSubmit}>
                        <Container>
                            <Row>
                                <Col>
                                    <Form.Label>Method</Form.Label>
                                    <div className="input-select-wrapper">
                                        <Form.Control className="input-select"
                                                      type="text" as="select"
                                                      value={this.state.payoutMethodId}
                                                      onChange={this.handleChangePayment}>
                                            {
                                                this.state.payments_select.map((payment, i) => <SelectRow key={i} payment={payment}/>)
                                            }
                                        </Form.Control>
                                    </div>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Information</Form.Label>
                                        <Form.Control  className="input-data"
                                                       name="paymentInfo"
                                                       type="paymentInfo"
                                                       required={true}
                                                       value={this.state.paymentInfo}
                                                       onChange={this.handleChange}  />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Button className="input-button" variant="primary" id="submit" type="submit">
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

/*
<Button className="input-button" variant="primary" onClick={this.addPaymentMethod()}>
                                        Add
                                    </Button>
 */