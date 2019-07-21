'use strict';

import React from 'react';
import UserService from "../services/UserService";
import Button from "react-bootstrap/Button";
import Link from "react-router-dom/es/Link";

export class PaymentMethodListRow extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            method: [],
        };


    }


    render() {
        return (
            <tr>
                <td></td>
                <td><Link to=''><Button className="input-button">Delete</Button></Link></td>
            </tr>
        );
    }
}
