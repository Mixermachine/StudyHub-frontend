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
                    this.props.payments.map((method, i) => <PaymentMethodListRow key={i} method={method}/>)
                }
            </tbody>
        );
    }
}
