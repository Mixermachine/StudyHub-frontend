'use strict';

import React from 'react';

import {StudyListRow} from './StudyListRow'

export class StudyList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
                this.props.studies.map((study, i) => <StudyListRow key={i} study={study}/>)
        );
    }
}
