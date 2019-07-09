'use strict';

import React from 'react';

import { StudyApplication } from '../components/StudyApplication';

export class StudyApplicationView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <StudyApplication/>
        );
    }
}