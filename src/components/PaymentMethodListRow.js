'use strict';

import React from 'react';
import Button from "react-bootstrap/Button";
import RewardService from "../services/RewardService";

export class PaymentMethodListRow extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
               methods: [],
            };

        RewardService.getRewards().then(payments => {
            this.setState({
                methods: payments,
            });
        }).catch(e => console.error(e));
    }

    getMethod(id) {
        let val = this.state.methods.find(x => x.id === id);

        if(val === undefined)
            return '';
        else
            return val.name;
    }

    render() {

        return (
            <tr>
                <td>{this.getMethod(this.props.payment.rewardTypeId)}</td>
                <td>{this.props.payment.paymentInfo}</td>
                <td><Button className="input-button">Delete</Button></td>
            </tr>
        );
    }
}
