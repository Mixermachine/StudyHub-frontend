'use strict';

import React from 'react';

import {PaymentMethodListRow} from './PaymentMethodListRow'

export class PaymentMethodList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tbody>
                {
                    this.props.payments.map((payment, i) => <PaymentMethodListRow key={i} payment={payment}/>)
                }
            </tbody>
        );
    }
}
