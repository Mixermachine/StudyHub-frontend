'use strict';

import React from 'react';

import { StudyManagement } from '../components/StudyManagement';
import StudyService from "../services/StudyService";
import UserService from "../services/UserService";

export class StudyManagementView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            id: 0
        };

        this.state.id = this.props.match.params.id;
    }

    render() {
        return (
            <StudyManagement study={this.state.id} />
        );
    }
}