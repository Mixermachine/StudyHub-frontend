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

        /*errorMessage += Settings.inBoundaries(this.password, 3, 255, 'Password', 3);


        if(this.state.password != this.state.passwordwdh) {
            errorMessage += "Passwords don't match."
        }

        if (!errorMessage) {
            this.state.user.password = this.state.password;
            this.props.onSubmit(this.state.user);
        } else {
            errorMessage = 'Some inputs are not filled correctly:\n' + errorMessage;
            alert(errorMessage)
        }*/
    }

    /*addPaymentMethod() {
        UserService.addPayoutMethods(this.state.user.id, {
            rewardTypeId: this.state.payoutMethodId,
            paymentInfo: this.state.paymentInfo,
        });

        this.window.location.reload();
    }*/

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
                    <Form>
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
                                    <Button className="input-button" variant="primary">
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
}
