'use strict';

import React from 'react';

import { StudyManagement } from '../components/StudyManagement';

export class StudyManagementView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <StudyManagement/>
        );
    }
}