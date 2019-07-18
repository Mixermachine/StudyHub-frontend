'use strict';

import React from 'react';
import Table from 'react-bootstrap/Table';

import {StudyListRow} from './StudyListRow'

export class StudyList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {
                    this.props.studies.map((study, i) => <StudyListRow key={i} study={study}/>)
                }
            </div>
        );
    }
}
