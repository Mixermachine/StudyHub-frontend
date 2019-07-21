"use strict";

import React from 'react';

export class SelectRow extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <option value={this.props.payment.id}>{this.props.payment.name}</option>
        );
    }
}
