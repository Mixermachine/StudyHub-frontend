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
                <h3>Available Studies:</h3>
                <Table>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Location</th>
                        <th>Reward</th>
                        <th/>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.studies.map((study, i) =>
                        <StudyListRow key={i} study={study}/>
                    )}
                    </tbody>
                </Table>
            </div>
        );
    }
}
