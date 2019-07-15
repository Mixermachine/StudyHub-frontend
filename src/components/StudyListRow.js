'use strict';

import React from 'react';
import Button from "react-bootstrap/Button";

export class StudyListRow extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td>{this.props.study.title}</td>
                <td>
                    {this.props.study.street + ' ' + this.props.study.number + ', ' + this.props.study.city + '. ' + this.props.study.country}
                </td>
                <td>{this.props.study.rewardAmount + ' ' + this.props.study.rewardType}</td>
                <td><Button>Details</Button></td>
            </tr>
        );
    }
}
